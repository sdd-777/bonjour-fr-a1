/* =========================================================
   游戏乐园数据：介词方位 + 家庭关系
   依赖：无（顶层常量，供 games.js 使用）
   ========================================================= */

/* ---------- 一、方位介词 ---------- */
/* id 用于题库引用；end 规则：'de' 结尾的介词后接缩合冠词（du / de la / de l' / des） */
const PREPS = [
  { id: 'sur',   fr: 'sur',           zh: '在……上面（接触）',   ex: 'La lampe est sur la table.' },
  { id: 'sous',  fr: 'sous',          zh: '在……下面（接触）',   ex: 'Le chat est sous le canapé.' },
  { id: 'dans',  fr: 'dans',          zh: '在……里面',           ex: 'Le ballon est dans le panier.' },
  { id: 'devant',fr: 'devant',        zh: '在……前面',           ex: 'Le chat est devant le frigo.' },
  { id: 'derr',  fr: 'derrière',      zh: '在……后面',           ex: 'La fille est derrière la porte.' },
  { id: 'entre', fr: 'entre',         zh: '在……和……之间',       ex: 'La poubelle est entre l\'évier et la cuisinière.' },
  { id: 'ac',    fr: 'à côté de',     zh: '在……旁边',           ex: 'La plante est à côté de la table.' },
  { id: 'ag',    fr: 'à gauche de',   zh: '在……左边',           ex: 'Le stylo est à gauche du livre.' },
  { id: 'ad',    fr: 'à droite de',   zh: '在……右边',           ex: 'Le cinéma est à droite de la banque.' },
  { id: 'ef',    fr: 'en face de',    zh: '在……对面',           ex: 'Le garçon est en face de la fille.' },
  { id: 'aud',   fr: 'au-dessus de',  zh: '在……上方（不接触）', ex: 'Le tableau est au-dessus du lit.' },
  { id: 'pres',  fr: 'près de',       zh: '离……很近',           ex: 'Le cinéma est près du jardin.' },
  { id: 'loin',  fr: 'loin de',       zh: '离……很远',           ex: 'Paris est loin de Shanghai.' },
];

/* 介词小图示：红球相对蓝块的位置（参考课堂图示风格） */
function prepIcon(pid){
  const R = '#D94F3D', B = '#3E7C8F', L = '#6B4F35';
  const ball = (cx, cy, r = 11) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${R}" stroke="${L}" stroke-width="2"/>`;
  const bar = (x, y, w, h = 10) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${B}"/>`;
  const blk = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${B}"/>`;
  let body = '';
  switch (pid){
    case 'sur':  body = bar(18, 40, 44) + ball(40, 26); break;
    case 'sous': body = bar(18, 14, 44) + ball(40, 38); break;
    case 'dans': body = `<path d="M20 20 h40 v26 a6 6 0 0 1 -6 6 h-28 a6 6 0 0 1 -6 -6 z" fill="${B}"/>` + `<path d="M20 20 h40 v8 h-40 z" fill="#2d5f6e"/>` + ball(40, 30, 9); break;
    case 'devant': body = blk(34, 14, 28, 32) + ball(30, 32, 12); break;
    case 'derr': body = ball(42, 30, 12) + blk(38, 12, 26, 34); break;
    case 'entre': body = blk(12, 12, 10, 34) + blk(58, 12, 10, 34) + ball(40, 30, 10); break;
    case 'ac':  body = blk(40, 14, 26, 30) + ball(24, 30); break;
    case 'ag':  body = blk(44, 14, 24, 30) + `<text x="18" y="35" font-size="15" fill="${R}" font-weight="bold">◀</text>` + ball(28, 30, 8); break;
    case 'ad':  body = blk(12, 14, 24, 30) + `<text x="60" y="35" font-size="15" fill="${R}" font-weight="bold">▶</text>` + ball(52, 30, 8); break;
    case 'ef':  body = blk(10, 14, 24, 30) + blk(46, 14, 24, 30) + `<text x="34" y="34" font-size="12" fill="${R}">↔</text>` + ball(34, 29, 7); break;
    case 'aud': body = `<rect x="18" y="46" width="44" height="8" rx="3" fill="${B}"/>` + `<line x1="40" y1="30" x2="40" y2="42" stroke="${L}" stroke-width="2" stroke-dasharray="3 3"/>` + ball(40, 20); break;
    case 'audess': body = bar(18, 10, 44) + `<line x1="40" y1="26" x2="40" y2="38" stroke="${L}" stroke-width="2" stroke-dasharray="3 3"/>` + ball(40, 40); break;
    case 'pres': body = blk(40, 14, 26, 30) + ball(28, 30, 9); break;
    case 'loin': body = blk(52, 14, 22, 30) + ball(16, 30) + `<line x1="26" y1="30" x2="52" y2="30" stroke="${R}" stroke-width="2" stroke-dasharray="4 3"/>`; break;
  }
  return '<svg viewBox="0 0 80 56" class="prep-ic" aria-hidden="true">' + body + '</svg>';
}

/* ---------- 二、房间场景 ---------- */
/*
   每个场景：
   svg  —— 插画（物品 <g class="gobj" data-obj="id">，点击可朗读名字）
   objs —— 物品几何 { id, fr(带冠词属性), art: le/la/l'/les, zh, emoji }
   rels —— 关系题 { s 主语, p 介词id, o 宾语 }（entre 题多一个 o2）
*/
const SCENES = [
{
  id: 'salon', label: 'Le salon · 客厅', emoji: '🛋️',
  objs: {
    'fenêtre': { art: 'la',  zh: '窗户',   emoji: '🪟' },
    'tableau': { art: 'le',  zh: '挂画',   emoji: '🖼️' },
    'canapé':  { art: 'le',  zh: '长沙发', emoji: '🛋️' },
    'fauteuil':{ art: 'le',  zh: '扶手椅', emoji: '🪑' },
    'table':   { art: 'la',  zh: '小圆桌', emoji: '🪑' },
    'lampe':   { art: 'la',  zh: '台灯',   emoji: '💡' },
    'plante':  { art: 'la',  zh: '盆栽',   emoji: '🪴' },
    'panier':  { art: 'le',  zh: '篮子',   emoji: '🧺' },
    'ballon':  { art: 'le',  zh: '皮球',   emoji: '⚽' },
    'tapis':   { art: 'le',  zh: '地毯',   emoji: '🟥' },
    'chat':    { art: 'le',  zh: '猫',     emoji: '🐱' }
  },
  rels: [
    { s: 'chat',     p: 'sous',  o: 'canapé' },
    { s: 'lampe',    p: 'sur',   o: 'table' },
    { s: 'ballon',   p: 'dans',  o: 'panier' },
    { s: 'plante',   p: 'ac',    o: 'table' },
    { s: 'plante',   p: 'ad',    o: 'canapé' },
    { s: 'plante',   p: 'ag',    o: 'table' },
    { s: 'tableau',  p: 'aud',   o: 'canapé' },
    { s: 'tapis',    p: 'devant',o: 'canapé' },
    { s: 'fauteuil', p: 'ef',    o: 'canapé' },
    { s: 'canapé',   p: 'ag',    o: 'table' },
    { s: 'plante',   p: 'pres',  o: 'table' },
    { s: 'lampe',    p: 'aud',   o: 'table' }
  ],
  svg: `
  <rect x="0" y="0" width="640" height="300" fill="#F6ECD9"/>
  <rect x="0" y="300" width="640" height="100" fill="#E8CCA0"/>
  <rect x="0" y="294" width="640" height="10" fill="#D9B581"/>
  <line x1="0" y1="348" x2="640" y2="348" stroke="#DBB57F" stroke-width="2"/>
  <line x1="120" y1="300" x2="90" y2="400" stroke="#DBB57F" stroke-width="2"/>
  <line x1="420" y1="300" x2="450" y2="400" stroke="#DBB57F" stroke-width="2"/>
  <g class="gobj" data-obj="fenêtre">
    <rect x="400" y="60" width="120" height="100" rx="6" fill="#BEE0EE" stroke="#6B4F35" stroke-width="3"/>
    <rect x="455" y="60" width="10" height="100" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <rect x="400" y="105" width="120" height="10" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <path d="M410 75 Q430 65 445 80" fill="none" stroke="#FFF" stroke-width="3" opacity=".7"/>
    <ellipse cx="460" cy="168" rx="46" ry="5" fill="#D9B581" opacity=".5"/>
  </g>
  <g class="gobj" data-obj="tableau">
    <rect x="90" y="60" width="100" height="80" rx="4" fill="#FFF8EA" stroke="#6B4F35" stroke-width="4"/>
    <rect x="102" y="72" width="76" height="56" fill="#BCD9E8"/>
    <circle cx="125" cy="92" r="10" fill="#F2C14E"/>
    <path d="M102 128 L128 100 L142 116 L158 96 L178 128 Z" fill="#7FA86B"/>
    <ellipse cx="140" cy="146" rx="52" ry="5" fill="#D9B581" opacity=".5"/>
  </g>
  <g class="gobj" data-obj="canapé">
    <rect x="60" y="240" width="200" height="26" rx="12" fill="#E2698C" stroke="#6B4F35" stroke-width="3"/>
    <rect x="60" y="260" width="200" height="50" rx="10" fill="#F08AA8" stroke="#6B4F35" stroke-width="3"/>
    <rect x="70" y="266" width="86" height="26" rx="8" fill="#F9B4C6" stroke="#6B4F35" stroke-width="2"/>
    <rect x="164" y="266" width="86" height="26" rx="8" fill="#F9B4C6" stroke="#6B4F35" stroke-width="2"/>
    <rect x="52" y="248" width="24" height="62" rx="10" fill="#E2698C" stroke="#6B4F35" stroke-width="3"/>
    <rect x="244" y="248" width="24" height="62" rx="10" fill="#E2698C" stroke="#6B4F35" stroke-width="3"/>
    <rect x="74" y="310" width="12" height="22" fill="#8A5A36" stroke="#6B4F35" stroke-width="2"/>
    <rect x="234" y="310" width="12" height="22" fill="#8A5A36" stroke="#6B4F35" stroke-width="2"/>
  </g>
  <g class="gobj" data-obj="chat">
    <path d="M70 340 Q72 318 92 316 Q112 316 118 330 Q126 334 124 342 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <circle cx="76" cy="330" r="12" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <path d="M68 322 L66 312 L76 318 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M84 320 L88 311 L92 321 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M70 330 Q73 327 76 330 M78 329 Q81 326 84 329" fill="none" stroke="#6B4F35" stroke-width="2"/>
    <path d="M116 336 Q126 338 122 344" fill="none" stroke="#6B4F35" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="gobj" data-obj="table">
    <ellipse cx="510" cy="245" rx="55" ry="14" fill="#C89058" stroke="#6B4F35" stroke-width="3"/>
    <rect x="503" y="255" width="14" height="48" fill="#A8734A" stroke="#6B4F35" stroke-width="2.5"/>
    <ellipse cx="510" cy="306" rx="26" ry="7" fill="#A8734A" stroke="#6B4F35" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="lampe">
    <path d="M492 186 L528 186 L521 214 L499 214 Z" fill="#F2C14E" stroke="#6B4F35" stroke-width="3"/>
    <rect x="508" y="214" width="4" height="26" fill="#6B4F35"/>
    <ellipse cx="510" cy="243" rx="16" ry="5" fill="#6B4F35"/>
  </g>
  <g class="gobj" data-obj="plante">
    <path d="M408 300 Q392 272 402 254 M424 300 Q428 268 420 250 M440 300 Q448 272 438 256 M415 300 Q415 262 430 258" fill="none" stroke="#5E8C4A" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="400" cy="252" rx="10" ry="6" fill="#6FA356" stroke="#6B4F35" stroke-width="2" transform="rotate(-30 400 252)"/>
    <ellipse cx="421" cy="248" rx="10" ry="6" fill="#6FA356" stroke="#6B4F35" stroke-width="2" transform="rotate(8 421 248)"/>
    <ellipse cx="440" cy="256" rx="10" ry="6" fill="#6FA356" stroke="#6B4F35" stroke-width="2" transform="rotate(32 440 256)"/>
    <path d="M396 300 L446 300 L440 332 Q421 338 402 332 Z" fill="#D97B4F" stroke="#6B4F35" stroke-width="3"/>
  </g>
  <g class="gobj" data-obj="tapis">
    <ellipse cx="218" cy="362" rx="72" ry="22" fill="#D98A8A" stroke="#6B4F35" stroke-width="3"/>
    <ellipse cx="218" cy="362" rx="50" ry="14" fill="none" stroke="#FFF3E0" stroke-width="3"/>
  </g>
  <g class="gobj" data-obj="panier">
    <path d="M300 342 L352 342 L346 374 Q326 379 306 374 Z" fill="#D9A66C" stroke="#6B4F35" stroke-width="3"/>
    <path d="M303 350 Q326 356 349 350 M305 360 Q326 365 347 360" fill="none" stroke="#B0813F" stroke-width="2"/>
    <path d="M298 342 Q326 328 354 342" fill="none" stroke="#6B4F35" stroke-width="3"/>
  </g>
  <g class="gobj" data-obj="ballon">
    <circle cx="326" cy="352" r="15" fill="#E2574C" stroke="#6B4F35" stroke-width="3"/>
    <path d="M311 352 Q326 344 341 352" fill="none" stroke="#FFF3E0" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="fauteuil">
    <rect x="278" y="342" width="86" height="24" rx="10" fill="#7FA86B" stroke="#6B4F35" stroke-width="3"/>
    <rect x="270" y="356" width="20" height="44" rx="8" fill="#8FB97A" stroke="#6B4F35" stroke-width="3"/>
    <rect x="352" y="356" width="20" height="44" rx="8" fill="#8FB97A" stroke="#6B4F35" stroke-width="3"/>
  </g>`
},
{
  id: 'chambre', label: 'La chambre · 卧室', emoji: '🛏️',
  objs: {
    'fenêtre':   { art: 'la',   zh: '窗户',     emoji: '🪟' },
    'tableau':   { art: 'le',   zh: '挂画',     emoji: '🖼️' },
    'lit':       { art: 'le',   zh: '床',       emoji: '🛏️' },
    'chat':      { art: 'le',   zh: '猫',       emoji: '🐱' },
    'ballon':    { art: 'le',   zh: '皮球',     emoji: '⚽' },
    'chaussures':{ art: 'les',  zh: '拖鞋',     emoji: '🩴' },
    'porte':     { art: 'la',   zh: '房门',     emoji: '🚪' },
    'fille':     { art: 'la',   zh: '女孩',     emoji: '👧' },
    'commode':   { art: 'la',   zh: '五斗柜',   emoji: '🗄️' },
    'tiroir':    { art: 'le',   zh: '抽屉',     emoji: '🗃️' },
    'chaussette':{ art: 'la',   zh: '袜子',     emoji: '🧦' },
    'lampe':     { art: 'la',   zh: '台灯',     emoji: '💡' }
  },
  rels: [
    { s: 'chat',       p: 'sur',  o: 'lit' },
    { s: 'ballon',     p: 'sous', o: 'lit' },
    { s: 'chaussette', p: 'dans', o: 'tiroir' },
    { s: 'fille',      p: 'derr', o: 'porte' },
    { s: 'lampe',      p: 'sur',  o: 'commode' },
    { s: 'tableau',    p: 'aud',  o: 'lit' },
    { s: 'chaussures', p: 'ac',   o: 'lit' },
    { s: 'lit',        p: 'ag',   o: 'porte' },
    { s: 'fenêtre',    p: 'aud',  o: 'commode' },
    { s: 'chat',       p: 'pres', o: 'tableau' }
  ],
  svg: `
  <rect x="0" y="0" width="640" height="300" fill="#DCE9F2"/>
  <rect x="0" y="300" width="640" height="100" fill="#E0C194"/>
  <rect x="0" y="294" width="640" height="10" fill="#CFAE7F"/>
  <line x1="160" y1="300" x2="130" y2="400" stroke="#CFAE7F" stroke-width="2"/>
  <line x1="470" y1="300" x2="500" y2="400" stroke="#CFAE7F" stroke-width="2"/>
  <g class="gobj" data-obj="fenêtre">
    <rect x="400" y="50" width="120" height="100" rx="6" fill="#BEE0EE" stroke="#6B4F35" stroke-width="3"/>
    <rect x="455" y="50" width="10" height="100" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <rect x="400" y="95" width="120" height="10" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <path d="M410 66 Q428 56 442 70" fill="none" stroke="#FFF" stroke-width="3" opacity=".7"/>
  </g>
  <g class="gobj" data-obj="tableau">
    <rect x="100" y="60" width="100" height="72" rx="4" fill="#FFF8EA" stroke="#6B4F35" stroke-width="4"/>
    <rect x="112" y="72" width="76" height="48" fill="#F6D8D8"/>
    <path d="M112 120 L136 92 L152 108 L170 88 L188 120 Z" fill="#E29A9A"/>
    <circle cx="170" cy="86" r="8" fill="#F2C14E"/>
  </g>
  <g class="gobj" data-obj="lit">
    <rect x="50" y="200" width="22" height="120" rx="8" fill="#A8734A" stroke="#6B4F35" stroke-width="3"/>
    <rect x="50" y="250" width="240" height="58" rx="10" fill="#FFF8EA" stroke="#6B4F35" stroke-width="3"/>
    <rect x="50" y="308" width="240" height="10" fill="#D9B581"/>
    <rect x="62" y="310" width="12" height="22" fill="#8A5A36" stroke="#6B4F35" stroke-width="2"/>
    <rect x="268" y="310" width="12" height="22" fill="#8A5A36" stroke="#6B4F35" stroke-width="2"/>
    <rect x="80" y="238" width="52" height="22" rx="8" fill="#F6CBD2" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M120 252 L290 252 L290 300 L120 300 Z" fill="#9DC3D4" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M150 252 L150 300 M185 252 L185 300 M220 252 L220 300 M255 252 L255 300" stroke="#7FA9BD" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="ballon">
    <circle cx="172" cy="315" r="14" fill="#E2574C" stroke="#6B4F35" stroke-width="3"/>
    <path d="M158 315 Q172 307 186 315" fill="none" stroke="#FFF3E0" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="chat">
    <path d="M196 302 Q196 274 226 272 Q254 274 252 302 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <circle cx="248" cy="284" r="12" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <path d="M240 275 L238 264 L248 271 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M256 272 L262 264 L264 274 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M244 284 Q247 281 250 284 M252 283 Q255 280 258 283" fill="none" stroke="#6B4F35" stroke-width="2"/>
    <path d="M204 282 Q196 272 202 264" fill="none" stroke="#6B4F35" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="gobj" data-obj="chaussures">
    <path d="M306 322 Q306 312 316 312 Q326 312 326 322 L326 332 L306 332 Z" fill="#7FA86B" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M340 322 Q340 312 350 312 Q360 312 360 322 L360 332 L340 332 Z" fill="#7FA86B" stroke="#6B4F35" stroke-width="2.5"/>
    <ellipse cx="316" cy="334" rx="14" ry="4" fill="#5E8C4A" stroke="#6B4F35" stroke-width="2"/>
    <ellipse cx="350" cy="334" rx="14" ry="4" fill="#5E8C4A" stroke="#6B4F35" stroke-width="2"/>
  </g>
  <g class="gobj" data-obj="porte">
    <rect x="330" y="45" width="64" height="270" rx="4" fill="#C89058" stroke="#6B4F35" stroke-width="3.5"/>
    <rect x="342" y="70" width="40" height="90" rx="3" fill="#E8B87F" stroke="#6B4F35" stroke-width="2"/>
    <rect x="342" y="180" width="40" height="90" rx="3" fill="#E8B87F" stroke="#6B4F35" stroke-width="2"/>
    <circle cx="378" cy="180" r="5" fill="#F2C14E" stroke="#6B4F35" stroke-width="2"/>
  </g>
  <g class="gobj" data-obj="fille">
    <circle cx="416" cy="248" r="15" fill="#F7CDA0" stroke="#6B4F35" stroke-width="3"/>
    <path d="M402 240 Q404 228 416 228 Q428 228 430 240 L430 252 Q424 258 416 256" fill="#8A5A36" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M400 320 Q402 272 416 270 Q430 272 432 320 Z" fill="#E2698C" stroke="#6B4F35" stroke-width="3"/>
    <path d="M424 300 Q436 306 432 318" fill="none" stroke="#F7CDA0" stroke-width="6" stroke-linecap="round"/>
  </g>
  <g class="gobj" data-obj="commode">
    <rect x="545" y="205" width="88" height="128" rx="6" fill="#B87B4F" stroke="#6B4F35" stroke-width="3.5"/>
    <rect x="545" y="335" width="88" height="6" fill="#8A5A36"/>
  </g>
  <g class="gobj" data-obj="tiroir">
    <rect x="551" y="214" width="76" height="38" rx="3" fill="#D9A66C" stroke="#6B4F35" stroke-width="2.5"/>
    <rect x="551" y="250" width="76" height="34" rx="3" fill="#D9A66C" stroke="#6B4F35" stroke-width="2.5"/>
    <rect x="551" y="288" width="76" height="34" rx="3" fill="#D9A66C" stroke="#6B4F35" stroke-width="2.5"/>
    <rect x="577" y="230" width="24" height="6" rx="3" fill="#6B4F35"/>
    <rect x="577" y="264" width="24" height="6" rx="3" fill="#6B4F35"/>
    <rect x="577" y="302" width="24" height="6" rx="3" fill="#6B4F35"/>
  </g>
  <g class="gobj" data-obj="chaussette">
    <path d="M558 226 Q558 220 566 220 L582 220 Q588 220 588 226 L588 236 Q596 240 594 248 Q590 254 582 250 L578 244 L570 244 Q564 244 562 238 Z" fill="#E2574C" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M560 226 L586 226" stroke="#FFF3E0" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="lampe">
    <path d="M560 150 L596 150 L589 178 L567 178 Z" fill="#F2C14E" stroke="#6B4F35" stroke-width="3"/>
    <rect x="576" y="178" width="4" height="22" fill="#6B4F35"/>
    <ellipse cx="578" cy="203" rx="15" ry="5" fill="#6B4F35"/>
  </g>`
},
{
  id: 'cuisine', label: 'La cuisine · 厨房', emoji: '🍳',
  objs: {
    'frigo':      { art: 'le',   zh: '冰箱',   emoji: '🧊' },
    'chat':       { art: 'le',   zh: '猫',     emoji: '🐱' },
    'poubelle':   { art: 'la',   zh: '垃圾桶', emoji: '🗑️' },
    'évier':      { art: 'l\'',  zh: '水槽',   emoji: '🚰' },
    'fenêtre':    { art: 'la',   zh: '窗户',   emoji: '🪟' },
    'cuisinière': { art: 'la',   zh: '灶台',   emoji: '🔥' },
    'casserole':  { art: 'la',   zh: '汤锅',   emoji: '🍲' },
    'table':      { art: 'la',   zh: '餐桌',   emoji: '🪑' },
    'chaise':     { art: 'la',   zh: '椅子',   emoji: '💺' },
    'corbeille':  { art: 'la',   zh: '果篮',   emoji: '🧺' },
    'fruits':     { art: 'les',  zh: '水果',   emoji: '🍎' }
  },
  rels: [
    { s: 'chat',      p: 'devant', o: 'frigo' },
    { s: 'poubelle',  p: 'ac',     o: 'évier' },
    { s: 'casserole', p: 'sur',    o: 'cuisinière' },
    { s: 'fruits',    p: 'dans',   o: 'corbeille' },
    { s: 'fenêtre',   p: 'aud',    o: 'évier' },
    { s: 'poubelle',  p: 'entre',  o: 'évier', o2: 'cuisinière' },
    { s: 'chaise',    p: 'ac',     o: 'table' },
    { s: 'chaise',    p: 'ag',     o: 'table' },
    { s: 'casserole', p: 'ad',     o: 'évier' },
    { s: 'frigo',     p: 'loin',   o: 'table' },
    { s: 'frigo',     p: 'ag',     o: 'poubelle' },
    { s: 'poubelle',  p: 'pres',   o: 'cuisinière' },
    { s: 'chat',      p: 'pres',   o: 'frigo' }
  ],
  svg: `
  <rect x="0" y="0" width="640" height="300" fill="#F5EBD8"/>
  <rect x="0" y="300" width="640" height="100" fill="#D9BC8C"/>
  <rect x="0" y="294" width="640" height="10" fill="#C6A876"/>
  <line x1="200" y1="300" x2="170" y2="400" stroke="#C6A876" stroke-width="2"/>
  <line x1="470" y1="300" x2="500" y2="400" stroke="#C6A876" stroke-width="2"/>
  <g stroke="#E8DCC0" stroke-width="2" fill="none" opacity=".8">
    <path d="M0 40 H640 M0 100 H640 M0 160 H640 M60 0 V40 M140 0 V40 M220 0 V40 M300 0 V40 M380 0 V40 M460 0 V40 M540 0 V40 M620 0 V40 M100 40 V100 M180 40 V100 M260 40 V100 M340 40 V100 M420 40 V100 M500 40 V100 M580 40 V100 M140 100 V160 M220 100 V160 M300 100 V160 M380 100 V160 M460 100 V160 M540 100 V160 M620 100 V160"/>
  </g>
  <g class="gobj" data-obj="frigo">
    <rect x="40" y="95" width="95" height="240" rx="10" fill="#EFEFEA" stroke="#6B4F35" stroke-width="3.5"/>
    <line x1="40" y1="185" x2="135" y2="185" stroke="#6B4F35" stroke-width="3"/>
    <rect x="118" y="120" width="8" height="40" rx="4" fill="#8A8A85" stroke="#6B4F35" stroke-width="2"/>
    <rect x="118" y="205" width="8" height="40" rx="4" fill="#8A8A85" stroke="#6B4F35" stroke-width="2"/>
    <rect x="58" y="110" width="30" height="42" rx="4" fill="#F6CBD2" stroke="#6B4F35" stroke-width="2"/>
    <text x="64" y="140" font-size="22">🧲</text>
  </g>
  <g class="gobj" data-obj="chat">
    <path d="M66 332 Q64 300 88 294 Q114 296 116 332 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <circle cx="91" cy="300" r="17" fill="#F2A950" stroke="#6B4F35" stroke-width="3"/>
    <path d="M79 289 L76 276 L87 283 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M100 283 L106 274 L109 286 Z" fill="#F2A950" stroke="#6B4F35" stroke-width="2"/>
    <path d="M85 300 Q88 297 91 300 M93 299 Q96 296 99 299" fill="none" stroke="#6B4F35" stroke-width="2"/>
    <path d="M88 307 Q91 310 94 307" fill="none" stroke="#6B4F35" stroke-width="2"/>
    <path d="M70 322 Q60 318 62 308 M112 322 Q122 318 120 308" fill="none" stroke="#6B4F35" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="gobj" data-obj="poubelle">
    <rect x="345" y="278" width="46" height="56" rx="6" fill="#7E9AA8" stroke="#6B4F35" stroke-width="3"/>
    <rect x="341" y="268" width="54" height="14" rx="6" fill="#93AEBB" stroke="#6B4F35" stroke-width="3"/>
    <rect x="362" y="258" width="12" height="10" rx="3" fill="#6B4F35"/>
    <path d="M355 292 L381 292 M355 304 L381 304 M355 316 L381 316" stroke="#5E7C8A" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="évier">
    <rect x="255" y="185" width="130" height="150" rx="6" fill="#C89058" stroke="#6B4F35" stroke-width="3.5"/>
    <rect x="255" y="185" width="130" height="18" rx="4" fill="#EFEFEA" stroke="#6B4F35" stroke-width="3"/>
    <rect x="278" y="192" width="84" height="14" rx="5" fill="#9DB6C2" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M310 186 Q310 160 322 160 Q334 160 334 176" fill="none" stroke="#8A8A85" stroke-width="6" stroke-linecap="round"/>
    <rect x="268" y="215" width="104" height="30" rx="3" fill="#B87B4F" stroke="#6B4F35" stroke-width="2"/>
    <rect x="268" y="253" width="104" height="30" rx="3" fill="#B87B4F" stroke="#6B4F35" stroke-width="2"/>
    <rect x="268" y="291" width="104" height="30" rx="3" fill="#B87B4F" stroke="#6B4F35" stroke-width="2"/>
    <rect x="308" y="222" width="24" height="7" rx="3" fill="#6B4F35"/>
    <rect x="308" y="260" width="24" height="7" rx="3" fill="#6B4F35"/>
    <rect x="308" y="298" width="24" height="7" rx="3" fill="#6B4F35"/>
  </g>
  <g class="gobj" data-obj="fenêtre">
    <rect x="285" y="50" width="110" height="100" rx="6" fill="#BEE0EE" stroke="#6B4F35" stroke-width="3"/>
    <rect x="335" y="50" width="10" height="100" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <rect x="285" y="95" width="110" height="10" fill="#FFF8EA" stroke="#6B4F35" stroke-width="2"/>
    <text x="318" y="88" font-size="26">☀️</text>
  </g>
  <g class="gobj" data-obj="cuisinière">
    <rect x="420" y="195" width="105" height="140" rx="6" fill="#6E6E68" stroke="#6B4F35" stroke-width="3.5"/>
    <rect x="426" y="201" width="93" height="18" rx="3" fill="#5A5A55"/>
    <circle cx="447" cy="210" r="7" fill="#E2574C"/>
    <circle cx="470" cy="210" r="7" fill="#F2C14E"/>
    <circle cx="493" cy="210" r="7" fill="#5A5A55"/>
    <rect x="430" y="230" width="85" height="36" rx="3" fill="#8A8A85" stroke="#6B4F35" stroke-width="2"/>
    <rect x="430" y="274" width="85" height="50" rx="3" fill="#5A5A55" stroke="#6B4F35" stroke-width="2"/>
    <rect x="440" y="282" width="65" height="34" rx="14" fill="#3E3E3A"/>
  </g>
  <g class="gobj" data-obj="casserole">
    <rect x="446" y="176" width="48" height="22" rx="4" fill="#E2574C" stroke="#6B4F35" stroke-width="3"/>
    <rect x="442" y="170" width="56" height="9" rx="4" fill="#C74438" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M494 182 L514 178" stroke="#6B4F35" stroke-width="5" stroke-linecap="round"/>
    <path d="M456 168 Q470 152 486 166" fill="none" stroke="#C74438" stroke-width="3" opacity=".55"/>
  </g>
  <g class="gobj" data-obj="table">
    <rect x="545" y="243" width="95" height="26" rx="5" fill="#C89058" stroke="#6B4F35" stroke-width="3.5"/>
    <rect x="560" y="269" width="14" height="62" fill="#A8734A" stroke="#6B4F35" stroke-width="2.5"/>
    <rect x="612" y="269" width="14" height="62" fill="#A8734A" stroke="#6B4F35" stroke-width="2.5"/>
  </g>
  <g class="gobj" data-obj="chaise">
    <rect x="495" y="222" width="14" height="108" rx="5" fill="#B87B4F" stroke="#6B4F35" stroke-width="3"/>
    <rect x="505" y="262" width="38" height="12" rx="4" fill="#C89058" stroke="#6B4F35" stroke-width="2.5"/>
    <rect x="512" y="274" width="10" height="56" fill="#A8734A" stroke="#6B4F35" stroke-width="2"/>
    <rect x="536" y="274" width="10" height="56" fill="#A8734A" stroke="#6B4F35" stroke-width="2"/>
  </g>
  <g class="gobj" data-obj="corbeille">
    <path d="M566 238 L624 238 L618 260 Q595 265 572 260 Z" fill="#D9A66C" stroke="#6B4F35" stroke-width="3"/>
    <path d="M570 246 Q595 251 620 246 M573 254 Q595 258 617 254" fill="none" stroke="#B0813F" stroke-width="2"/>
  </g>
  <g class="gobj" data-obj="fruits">
    <circle cx="582" cy="234" r="9" fill="#E2574C" stroke="#6B4F35" stroke-width="2.5"/>
    <circle cx="602" cy="232" r="9" fill="#F2C14E" stroke="#6B4F35" stroke-width="2.5"/>
    <circle cx="592" cy="224" r="9" fill="#7FA86B" stroke="#6B4F35" stroke-width="2.5"/>
    <path d="M592 216 Q594 212 598 212" fill="none" stroke="#5E8C4A" stroke-width="2.5" stroke-linecap="round"/>
  </g>`
}
];

/* ---------- 三、家庭关系 ---------- */
/*
   家族图：sex 'm'/'f'；father/mother/spouse 存 id；两个孩子共双亲。
   称谓由 relOf(viewer, target) 推导，返回 { fr, zh } 或 null。
*/
const FAMILY = {
  moiDefault: 'lucas',
  people: [
    { id: 'henri',   name: 'Henri',   emoji: '👴', sex: 'm', zh: '爷爷', note: '爸爸的爸爸' },
    { id: 'margot',  name: 'Margot',  emoji: '👵', sex: 'f', zh: '奶奶', note: '爸爸的妈妈', spouse: 'henri' },
    { id: 'alain',   name: 'Alain',   emoji: '👴', sex: 'm', zh: '外公', note: '妈妈的爸爸' },
    { id: 'colette', name: 'Colette', emoji: '👵', sex: 'f', zh: '外婆', note: '妈妈的妈妈', spouse: 'alain' },
    { id: 'pierre',  name: 'Pierre',  emoji: '👨', sex: 'm', zh: '爸爸', father: 'henri', mother: 'margot' },
    { id: 'marie',   name: 'Marie',   emoji: '👩', sex: 'f', zh: '妈妈', father: 'alain', mother: 'colette', spouse: 'pierre' },
    { id: 'paul',    name: 'Paul',    emoji: '🧔', sex: 'm', zh: '叔叔', father: 'henri', mother: 'margot', note: '爸爸的弟弟' },
    { id: 'julie',   name: 'Julie',   emoji: '👩‍🦰', sex: 'f', zh: '姑姑', father: 'henri', mother: 'margot', note: '爸爸的妹妹' },
    { id: 'jacques', name: 'Jacques', emoji: '👨‍🦱', sex: 'm', zh: '舅舅', father: 'alain', mother: 'colette', note: '妈妈的弟弟' },
    { id: 'anne',    name: 'Anne',    emoji: '👩‍🦳', sex: 'f', zh: '姨妈', father: 'alain', mother: 'colette', note: '妈妈的妹妹' },
    { id: 'lucas',   name: 'Lucas',   emoji: '👦', sex: 'm', zh: '我',   father: 'pierre', mother: 'marie' },
    { id: 'hugo',    name: 'Hugo',    emoji: '👨', sex: 'm', zh: '哥哥', father: 'pierre', mother: 'marie', note: '比我大' },
    { id: 'emma',    name: 'Emma',    emoji: '👧', sex: 'f', zh: '妹妹', father: 'pierre', mother: 'marie', note: '比我小' },
    { id: 'lea',     name: 'Léa',     emoji: '👰', sex: 'f', zh: '妻子', spouse: 'lucas' },
    { id: 'theo',    name: 'Théo',    emoji: '🧒', sex: 'm', zh: '堂弟', father: 'paul', note: '叔叔的儿子' },
    { id: 'chloe',   name: 'Chloé',   emoji: '👧', sex: 'f', zh: '表妹', father: 'jacques', note: '舅舅的女儿' }
  ],
  /* 称谓词典（含无重音宽容变体） */
  labels: {
    'père':         { zh: '爸爸', alts: ['pere'],          g: 'm', explain: 'père = 爸爸，男孩/男士' },
    'mère':         { zh: '妈妈', alts: ['mere'],          g: 'f', explain: 'mère = 妈妈，女孩/女士' },
    'grand-père':   { zh: '爷爷 / 外公', alts: ['grand-pere','grandpere'], g: 'm', explain: 'grand-père = 爷爷或外公，是爸爸或妈妈的爸爸' },
    'grand-mère':   { zh: '奶奶 / 外婆', alts: ['grand-mere','grandmere'], g: 'f', explain: 'grand-mère = 奶奶或外婆，是爸爸或妈妈的妈妈' },
    'frère':        { zh: '哥哥 / 弟弟', alts: ['frere'],  g: 'm', explain: 'frère = 哥哥或弟弟，法语不分长幼' },
    'sœur':         { zh: '姐姐 / 妹妹', alts: ['soeur'],  g: 'f', explain: 'sœur = 姐姐或妹妹，法语不分长幼' },
    'oncle':        { zh: '叔叔 / 伯父 / 舅舅', alts: [],  g: 'm', explain: 'oncle = 爸爸或妈妈的兄弟（叔叔、伯父、舅舅都叫 oncle）' },
    'tante':        { zh: '姑姑 / 婶婶 / 舅妈 / 姨妈', alts: [], g: 'f', explain: 'tante = 爸爸或妈妈的姐妹（姑姑、姨妈都叫 tante）' },
    'cousin':       { zh: '堂兄弟 / 表兄弟', alts: [],      g: 'm', explain: 'cousin = 堂兄弟或表兄弟，叔叔舅舅的孩子' },
    'cousine':      { zh: '堂姐妹 / 表姐妹', alts: [],      g: 'f', explain: 'cousine = 堂姐妹或表姐妹，叔叔舅舅的女儿' },
    'neveu':        { zh: '侄子 / 外甥', alts: [],          g: 'm', explain: 'neveu = 兄弟姐妹的儿子（侄子、外甥）' },
    'nièce':        { zh: '侄女 / 外甥女', alts: [],        g: 'f', explain: 'nièce = 兄弟姐妹的女儿（侄女、外甥女）' },
    'mari':         { zh: '丈夫', alts: [],                 g: 'm', explain: 'mari = 丈夫' },
    'femme':        { zh: '妻子', alts: [],                 g: 'f', explain: 'femme = 妻子（femme 同时也有「女人/女士」的意思）' },
    'fils':         { zh: '儿子', alts: [],                 g: 'm', explain: 'fils = 儿子（发音 [fis]，s 要读出来！）' },
    'fille':        { zh: '女儿', alts: [],                 g: 'f', explain: 'fille = 女儿（同时也有「女孩」的意思）' },
    'petit-fils':   { zh: '孙子 / 外孙', alts: ['petit fils'], g: 'm', explain: 'petit-fils = 儿子的儿子（孙子、外孙）' },
    'petite-fille': { zh: '孙女 / 外孙女', alts: ['petite fille'], g: 'f', explain: 'petite-fille = 儿子的女儿（孙女、外孙女）' }
  }
};
