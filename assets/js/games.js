/* =========================================================
   游戏乐园：介词方位（选介词小游戏）+ 家庭关系（对对碰打字）
   依赖：games-data.js（PREPS / prepIcon / SCENES / FAMILY）
        app.js（$ / esc / speakText / toast）
   ========================================================= */

/* ---------- 工具 ---------- */
function gNorm(s){
  return String(s || '').toLowerCase().trim()
    .replace(/[\s\-–—_]+/g, '-')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function gObj(scene, id){ return scene.objs[id]; }

/* 介词 + 冠词 + 名词：à côté de + le canapé → à côté du canapé */
function gWithPrep(prepFr, obj){
  const art = obj.art;
  const tail = (art === "l'") ? "l'" + obj.id : art + ' ' + obj.id;
  if (/(de|à)$/.test(prepFr)){
    if (art === 'le')  return prepFr + ' du '  + obj.id;
    if (art === 'les') return prepFr + ' des ' + obj.id;
    return prepFr + ' de ' + tail;
  }
  return prepFr + ' ' + tail;
}
/* 主语开头：Le chat / L'évier / Les fruits */
function gSubject(obj){
  const a = obj.art;
  const w = (a === "l'") ? "L'" + obj.id : a.charAt(0).toUpperCase() + a.slice(1) + ' ' + obj.id;
  return w;
}

/* =========================================================
   页签
   ========================================================= */
let gCurTab = 'prep';

function renderGameTabs(){
  const box = $('#game-tabs');
  box.innerHTML = '';
  [
    { id: 'prep',   label: '📍 介词方位', cls: '' },
    { id: 'family', label: '👨‍👩‍👧 家庭关系', cls: '' }
  ].forEach(t => {
    const b = document.createElement('button');
    b.className = 'wtab' + (t.cls ? ' ' + t.cls : '') + (t.id === gCurTab ? ' active' : '');
    b.textContent = t.label;
    b.onclick = () => selectGameTab(t.id);
    box.appendChild(b);
  });
}
function selectGameTab(id){
  stopSpeak();
  gCurTab = id;
  renderGameTabs();
  $('#game-prep').hidden = (id !== 'prep');
  $('#game-family').hidden = (id !== 'family');
}

/* =========================================================
   一、介词方位
   ========================================================= */
/* 学习卡：介词总表 */
function renderPrepLearn(){
  const box = $('#prep-learn');
  let html = '<h3 class="learn-title">📖 方位介词总表 <small>Les prépositions de lieu</small></h3>';
  html += '<p class="learn-tip">先认识这 13 个介词：每张卡片有<b>图示</b>（红点 📍 相对方块的位置）、法语介词、中文意思和例句。点 🔊 可以听例句。</p>';
  html += '<div class="prep-grid">';
  PREPS.forEach(p => {
    html +=
      '<div class="prep-item">' +
        prepIcon(p.id) +
        '<div class="prep-fr">' + esc(p.fr) + '</div>' +
        '<div class="prep-zh">' + esc(p.zh) + '</div>' +
        '<p class="prep-ex">' + esc(p.ex) + '</p>' +
        '<button class="btn btn-ghost prep-ex-btn" data-ex="' + esc(p.ex) + '">🔊</button>' +
      '</div>';
  });
  html += '</div>';
  html += '<p class="learn-tip">💡 小提示：<b>à côté de / à gauche de / à droite de</b> 这类以 de 结尾的介词，后面遇到 le 要缩合成 <b>du</b>（à côté <b>du</b> canapé），遇到 les 变 <b>des</b>。看图判断方位时，<b>左 / 右以你看图的方向为准</b>。</p>';
  box.innerHTML = html;
  box.querySelectorAll('.prep-ex-btn').forEach(b => {
    b.onclick = () => speakText(b.dataset.ex, 0.85);
  });
}

/* 游戏状态 */
const prepGame = {
  scene: null, rel: null, opts: [], done: false,
  round: 0, streak: 0, best: 0, correct: 0
};

/* 出一道题 */
function prepNewRound(keepScene){
  prepGame.done = false;
  prepGame.round++;
  if (!keepScene || !prepGame.scene){
    prepGame.scene = SCENES[Math.floor(Math.random() * SCENES.length)];
  }
  const sc = prepGame.scene;
  prepGame.rel = sc.rels[Math.floor(Math.random() * sc.rels.length)];
  const rel = prepGame.rel;
  const ans = PREPS.find(p => p.id === rel.p);

  /* 干扰项：其余介词随机 3 个；sur/au-dessus、sous/au-dessous 不同时出现 */
  const ban = { 'sur': 'au-dessus de', 'au-dessus de': 'sur', 'sous': 'au-dessous de', 'au-dessous de': 'sous' };
  const pool = PREPS.filter(p => p.id !== ans.id && ban[p.fr] !== ans.fr);
  const dis = shuffle(pool).slice(0, 3);
  prepGame.opts = shuffle([ans].concat(dis));

  /* 渲染场景 */
  const box = $('#prep-scene');
  box.innerHTML = '<div class="scene-svg">' + sc.svg + '</div>' +
    '<p class="scene-label">' + esc(sc.emoji + ' ' + sc.label) + ' · 点图里的东西可以听它的法语名字</p>';
  box.querySelectorAll('.gobj').forEach(g => {
    g.addEventListener('click', () => {
      const o = gObj(sc, g.dataset.obj);
      if (o) speakText((o.art === "l'" ? "l'" : o.art + ' ') + g.dataset.obj, 0.8);
      highlightObjs([g.dataset.obj]);
    });
  });

  /* 题面：entre 句式 = X est ____ A et B；普通句式 = X est ____ A */
  const S = gObj(sc, rel.s), O = gObj(sc, rel.o);
  const sTxt = gSubject(S);
  const O2 = rel.o2 ? gObj(sc, rel.o2) : null;
  const artN = o => (o.art === "l'" ? "l'" + o.id : o.art + ' ' + o.id);
  let qFr;
  if (O2){
    qFr = sTxt + ' est <span class="q-gap">____</span> ' + artN(O) + ' et ' + artN(O2) + '.';
  } else {
    qFr = sTxt + ' est <span class="q-gap">____</span> ' + artN(O) + '.';
  }
  $('#prep-q').innerHTML =
    '<p class="prep-q-fr">' + qFr + '</p>' +
    '<p class="prep-q-zh">❓ ' + esc(S.zh) + '在' + esc(O.zh) + '的什么地方？（左右以你看图的方向为准）</p>';

  /* 选项 */
  const ob = $('#prep-opts');
  ob.innerHTML = '';
  prepGame.opts.forEach(p => {
    const b = document.createElement('button');
    b.className = 'prep-opt';
    b.innerHTML = '<b>' + esc(p.fr) + '</b><small>' + esc(p.zh) + '</small>';
    b.onclick = () => prepAnswer(b, p);
    ob.appendChild(b);
  });
  $('#prep-result').innerHTML = '';
  $('#prep-result').hidden = true;
  prepStatsRender();
}

function highlightObjs(ids){
  const box = $('#prep-scene');
  box.querySelectorAll('.gobj').forEach(g => g.classList.remove('flash'));
  ids.forEach(id => {
    const g = box.querySelector('[data-obj="' + id + '"]');
    if (g) g.classList.add('flash');
  });
}

function prepAnswer(btn, p){
  if (prepGame.done) return;
  prepGame.done = true;
  const rel = prepGame.rel;
  const sc = prepGame.scene;
  const S = gObj(sc, rel.s), O = gObj(sc, rel.o);
  const ans = PREPS.find(x => x.id === rel.p);
  const ok = (p.id === ans.id);
  const objIds = [rel.s, rel.o]; if (rel.o2) objIds.push(rel.o2);
  highlightObjs(objIds);

  const rb = $('#prep-result');
  rb.hidden = false;
  if (ok){
    btn.classList.add('correct');
    prepGame.streak++;
    prepGame.correct++;
    prepGame.best = Math.max(prepGame.best, prepGame.streak);
    rb.innerHTML = '<p class="ok-msg">🎉 Bravo ! 答对了 · 连对 ' + prepGame.streak + ' 题</p>' +
      '<p class="expl">' + esc(ans.fr) + ' = ' + esc(ans.zh) + '：' + esc(gSubject(S)) + ' est ' + esc(gWithPrep(ans.fr, O)) + '.</p>';
    if (typeof confetti === 'function') confetti();
    speakText(gSubject(S).toLowerCase() + ' est ' + gWithPrep(ans.fr, O), 0.85);
  } else {
    btn.classList.add('wrong');
    prepGame.streak = 0;
    /* 标出正确项 */
    $$('#prep-opts .prep-opt').forEach((b, i) => {
      if (prepGame.opts[i] && prepGame.opts[i].id === ans.id) b.classList.add('correct');
    });
    rb.innerHTML = '<p class="no-msg">💪 正确答案是 <b>' + esc(ans.fr) + '</b>（' + esc(ans.zh) + '）</p>' +
      '<p class="expl">' + esc(gSubject(S)) + ' est ' + esc(gWithPrep(ans.fr, O)) + '.<br>' +
      '想一想：' + esc(S.zh) + '在' + esc(O.zh) + (rel.o2 ? '和' + esc(gObj(sc, rel.o2).zh) : '') + '的' +
      esc(ans.zh.replace('在……', '')) + '。</p>';
  }
  prepStatsRender();
}

function prepStatsRender(){
  $('#pg-round').textContent = prepGame.round;
  $('#pg-streak').textContent = prepGame.streak;
  $('#pg-best').textContent = prepGame.best;
  $('#pg-acc').textContent = prepGame.round > 1 ? Math.round(prepGame.correct / (prepGame.round - 1) * 100) + '%' : '—';
}

function initPrepGame(){
  renderPrepLearn();
  prepNewRound(false);
  $('#pg-new').onclick = () => prepNewRound(false);
  $('#pg-same').onclick = () => prepNewRound(true);
  $('#pg-listen').onclick = () => {
    const rel = prepGame.rel, sc = prepGame.scene;
    if (!rel) return;
    const O = gObj(sc, rel.o);
    const ans = PREPS.find(x => x.id === rel.p);
    speakText((gSubject(gObj(sc, rel.s)) + ' est ' + gWithPrep(ans.fr, O)).replace('  ', ' '), 0.85);
  };
}

/* =========================================================
   二、家庭关系
   ========================================================= */
function fPerson(id){ return FAMILY.people.find(p => p.id === id); }
function fParents(p){ return [p.father, p.mother].filter(Boolean).map(fPerson); }
function fChildren(p){ return FAMILY.people.filter(q => q.father === p.id || q.mother === p.id); }
function fSiblings(p){
  if (!p.father && !p.mother) return [];
  return FAMILY.people.filter(q => q.id !== p.id && q.father === p.father && q.mother === p.mother && q.father);
}

/* 推导：t 是 v 的什么人？返回称谓 fr 或 null */
function relOf(v, t){
  if (!v || !t || v.id === t.id) return null;
  if (v.father === t.id) return 'père';
  if (v.mother === t.id) return 'mère';
  if (v.spouse === t.id || t.spouse === v.id) return v.sex === 'm' ? 'femme' : 'mari';
  if (fSiblings(v).some(s => s.id === t.id)) return t.sex === 'm' ? 'frère' : 'sœur';
  if (fChildren(v).some(c => c.id === t.id)) return t.sex === 'm' ? 'fils' : 'fille';
  const pars = fParents(v);
  for (const par of pars){
    if (par.father === t.id) return 'grand-père';
    if (par.mother === t.id) return 'grand-mère';
  }
  for (const par of pars){
    if (fSiblings(par).some(s => s.id === t.id)) return t.sex === 'm' ? 'oncle' : 'tante';
  }
  for (const s of fSiblings(v)){
    if (fChildren(s).some(c => c.id === t.id)) return t.sex === 'm' ? 'neveu' : 'nièce';
  }
  for (const c of fChildren(v)){
    if (fChildren(c).some(g => g.id === t.id)) return t.sex === 'm' ? 'petit-fils' : 'petite-fille';
  }
  for (const par of pars){
    for (const s of fSiblings(par)){
      if (fChildren(s).some(c => c.id === t.id)) return t.sex === 'm' ? 'cousin' : 'cousine';
    }
  }
  return null;
}

/* 家族树 SVG（三代布局） */
function familyTreeSVG(highlightViewer, highlightTarget){
  const N = (id, x, y) => {
    const p = fPerson(id);
    const isMe = (id === highlightViewer), isT = (id === highlightTarget);
    const stroke = isMe ? '#D9A21B' : (isT ? '#E2574C' : '#6B4F35');
    const sw = (isMe || isT) ? 4 : 2.5;
    return '<g class="tree-node" data-pid="' + id + '">' +
      '<rect x="' + (x - 34) + '" y="' + y + '" width="68" height="58" rx="12" fill="#FFF8EA" stroke="' + stroke + '" stroke-width="' + sw + '"/>' +
      '<text x="' + x + '" y="' + (y + 27) + '" text-anchor="middle" font-size="24">' + p.emoji + '</text>' +
      '<text x="' + x + '" y="' + (y + 47) + '" text-anchor="middle" font-size="12" font-weight="700" fill="#6B4F35">' + esc(p.name) + '</text>' +
      (isMe ? '<text x="' + x + '" y="' + (y - 6) + '" text-anchor="middle" font-size="13" font-weight="800" fill="#D9A21B">Moi !</text>' : '') +
      (isT ? '<text x="' + x + '" y="' + (y - 6) + '" text-anchor="middle" font-size="15">❓</text>' : '') +
      '</g>';
  };
  const LINK = (x1, y1, x2, y2, color) =>
    '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (color || '#C9B08A') + '" stroke-width="2.5" stroke-linecap="round"/>';
  let lines = '';
  /* 配偶连线（红线） */
  [['henri','margot',94,59,160,59],['alain','colette',454,59,520,59],
   ['pierre','marie',314,179,386,179],['lucas','lea',254,309,190,309]].forEach(l => {
    lines += LINK(l[2], l[3], l[4], l[5], '#E2698C');
    lines += '<text x="' + ((l[2]+l[4])/2) + '" y="' + (l[3]-4) + '" text-anchor="middle" font-size="10" fill="#E2698C">♥</text>';
  });
  /* 亲子 T 型连线 */
  const T = (px, py, kids, gy) => {
    /* px,py = 父母连线中点；gy = 孩子行 y */
    let s = LINK(px, py, px, gy - 6, '#B9A789');
    const xs = kids.map(k => k[1]);
    const L = Math.min.apply(null, xs), R = Math.max.apply(null, xs);
    s += LINK(L, gy - 6, R, gy - 6, '#B9A789');
    kids.forEach(k => { s += LINK(k[1], gy - 6, k[1], gy, '#B9A789'); });
    return s;
  };
  lines += T(127, 59, [['paul', 96], ['julie', 168], ['pierre', 300]], 150);
  lines += T(487, 59, [['jacques', 454], ['anne', 526]], 150);
  lines += T(350, 179, [['hugo', 310], ['emma', 400], ['lucas', 254]], 250);
  lines += LINK(96, 118, 96, 250, '#B9A789');
  lines += LINK(454, 118, 454, 250, '#B9A789');
  /* 节点：G1 */
  let nodes = '';
  nodes += N('henri', 60, 30) + N('margot', 150, 30);
  nodes += N('alain', 420, 30) + N('colette', 510, 30);
  /* G2 */
  nodes += N('paul', 96, 150) + N('julie', 168, 150);
  nodes += N('pierre', 300, 150) + N('marie', 386, 150);
  nodes += N('jacques', 454, 150) + N('anne', 526, 150);
  /* G3 */
  nodes += N('theo', 60, 250) + N('lea', 150, 250);
  nodes += N('lucas', 254, 250) + N('hugo', 310, 250) + N('emma', 400, 250);
  nodes += N('chloe', 454, 250);
  return '<svg viewBox="0 0 640 330" class="family-tree-svg">' + lines + nodes + '</svg>';
}

/* 学习卡：家族树 + 称谓表 */
function renderFamilyLearn(){
  const box = $('#family-learn');
  let html = '<h3 class="learn-title">👨‍👩‍👧‍👦 Lucas 一家 <small>La famille</small></h3>';
  html += '<p class="learn-tip">这是 Lucas 的家族树：<b>横着的是夫妻</b>（红线 ♥），<b>竖着的是上下两辈</b>。先记住每个人的名字和辈分，下面是每个称谓的法语说法。</p>';
  html += '<div class="family-tree-box">' + familyTreeSVG('lucas', null) + '</div>';
  html += '<div class="fam-grid">';
  Object.keys(FAMILY.labels).forEach(fr => {
    const L = FAMILY.labels[fr];
    html +=
      '<div class="fam-item' + (L.g === 'f' ? ' is-f' : '') + '">' +
        '<div class="fam-fr">' + (L.g === 'f' ? 'ma ' : 'mon ') + '<b>' + esc(fr) + '</b></div>' +
        '<div class="fam-zh">' + esc(L.zh) + '</div>' +
        '<p class="fam-ex">' + esc(L.explain) + '</p>' +
      '</div>';
  });
  html += '</div>';
  html += '<p class="learn-tip">💡 法语亲属词<b>不分长幼、不分父系母系</b>：frère 同时是哥哥和弟弟，grand-père 同时是爷爷和外公，oncle 同时是叔叔、伯父和舅舅。所以记住「关系」比记住中文更重要！</p>';
  box.innerHTML = html;
}

/* 对对碰游戏 */
const famGame = { viewer: null, target: null, round: 0, streak: 0, best: 0, correct: 0, done: false };

function famNewRound(){
  famGame.done = false;
  famGame.round++;
  /* 随机 viewer + target（必须存在有效称谓） */
  for (let tries = 0; tries < 200; tries++){
    const v = FAMILY.people[Math.floor(Math.random() * FAMILY.people.length)];
    const t = FAMILY.people[Math.floor(Math.random() * FAMILY.people.length)];
    const rel = relOf(v, t);
    if (rel){
      famGame.viewer = v; famGame.target = t; famGame.rel = rel;
      break;
    }
  }
  const v = famGame.viewer, t = famGame.target, rel = famGame.rel;
  const L = FAMILY.labels[rel];

  /* 家族树（高亮 Moi 与 ? ） */
  $('#fg-tree').innerHTML = '<div class="family-tree-box">' + familyTreeSVG(v.id, t.id) + '</div>';
  $('#fg-tree').querySelectorAll('.tree-node').forEach(g => {
    g.addEventListener('click', () => {
      const p = fPerson(g.dataset.pid);
      if (p) toast(p.emoji + ' ' + p.name + ' · ' + p.zh + (p.note ? '（' + p.note + '）' : ''));
    });
  });

  /* 题面 */
  const det = (L.g === 'f') ? 'ta' : 'ton';
  $('#fg-q').innerHTML =
    '<p class="fg-role">🪄 本轮你是 <b>' + esc(v.emoji + ' ' + v.name) + '</b>（树上标了 Moi !）' +
      (v.note ? ' · ' + esc(v.zh) : '') + '</p>' +
    '<p class="fg-q-fr">' + esc(t.name) + ' <span class="q-gap">est ' + det + '</span> <span class="q-blank">______</span> ?</p>' +
    '<p class="fg-q-zh">❓ <b>' + esc(t.name) + '</b> 是你的谁？（请输入法语单词，比如 oncle）</p>';
  const inp = $('#fg-input');
  inp.value = '';
  inp.disabled = false;
  $('#fg-check').disabled = false;
  $('#fg-result').hidden = true;
  $('#fg-result').innerHTML = '';
  setTimeout(() => { try { inp.focus({ preventScroll: true }); } catch(e){} }, 50);
  famStatsRender();
}

function famCheck(){
  if (famGame.done) return;
  const raw = $('#fg-input').value;
  if (!raw.trim()){ toast('先输入一个法语单词吧～'); return; }
  famGame.done = true;
  $('#fg-input').disabled = true;
  $('#fg-check').disabled = true;
  const rel = famGame.rel, L = FAMILY.labels[rel];
  const t = famGame.target, v = famGame.viewer;
  const cands = [rel].concat(L.alts || []);
  const norm = gNorm(raw);
  const ok = cands.some(c => gNorm(c) === norm);
  const rb = $('#fg-result');
  rb.hidden = false;
  if (ok){
    famGame.streak++; famGame.correct++;
    famGame.best = Math.max(famGame.best, famGame.streak);
    rb.innerHTML = '<p class="ok-msg">🎉 Exact ! 答对了 · 连对 ' + famGame.streak + ' 题</p>' +
      '<p class="expl">' + esc(t.name) + ' est ' + (L.g === 'f' ? 'ta' : 'ton') + ' <b>' + esc(rel) + '</b>（' + esc(L.zh) + '）。</p>';
    if (typeof confetti === 'function') confetti();
    speakText(t.name + ', c\'est ' + (L.g === 'f' ? 'ma' : 'mon') + ' ' + rel, 0.85);
  } else {
    famGame.streak = 0;
    const hint = t.note ? '记住：' + esc(t.name) + ' 是 ' + esc(t.zh) + '。' : '';
    rb.innerHTML = '<p class="no-msg">💪 正确答案是 <b>' + esc(rel) + '</b>（' + esc(L.zh) + '）</p>' +
      '<p class="expl">' + esc(L.explain) + '<br>' + hint +
      '从 ' + esc(v.name) + ' 的角度看：' + esc(t.name) + ' → ' + (L.g === 'f' ? 'ta ' : 'ton ') + esc(rel) + '。</p>';
  }
  famStatsRender();
}

function famStatsRender(){
  $('#fg-round').textContent = famGame.round;
  $('#fg-streak').textContent = famGame.streak;
  $('#fg-best').textContent = famGame.best;
  $('#fg-acc').textContent = famGame.round > 1 ? Math.round(famGame.correct / (famGame.round - 1) * 100) + '%' : '—';
}

function initFamilyGame(){
  renderFamilyLearn();
  famNewRound();
  $('#fg-check').onclick = famCheck;
  $('#fg-input').addEventListener('keydown', e => {
    if (e.key === 'Enter'){ e.preventDefault(); famCheck(); }
  });
  $('#fg-new').onclick = famNewRound;
  $('#fg-reveal').onclick = () => {
    if (!famGame.done && famGame.rel){
      const L = FAMILY.labels[famGame.rel];
      $('#fg-result').hidden = false;
      $('#fg-result').innerHTML = '<p class="no-msg">👀 答案是 <b>' + esc(famGame.rel) + '</b>（' + esc(L.zh) + '）· 这题不计分</p>';
      famGame.done = true;
      $('#fg-input').disabled = true;
      $('#fg-check').disabled = true;
    }
  };
}

/* ---------- 初始化 ---------- */
function initGames(){
  renderGameTabs();
  initPrepGame();
  initFamilyGame();
  selectGameTab('prep');
  gamesReady = true;
}
/* 惰性兜底：若启动时脚本尚未就绪，进入视图时再补一次初始化 */
let gamesReady = false;
function ensureGames(){
  if (gamesReady && document.querySelector('#game-tabs .wtab')) return;
  if (typeof renderGameTabs === 'function') initGames();
}
/* 切换视图时停止朗读 */
function stopGames(){ stopSpeak(); }
