/* =========================================================
   📚 教材模块 —— 《你好！法语 1》课文 / 单词 / 语法
   依赖：app.js 的 $ / esc；words.js 的 playWordAudio（含 TTS 兜底）
   音频路由：tb- 前缀 → assets/audio/textbook/
   ========================================================= */

const TB_AUDIO_DIR = 'assets/audio/textbook';
let tbCur = null;          // 当前选中课次 id
let tbSeqToken = 0;        // 连播令牌（防竞态）
let tbSeqTimer = null;     // 连播定时器
let tbSeqMedia = null;     // 连播中的 <audio>

function tbAudioPath(name){ return TB_AUDIO_DIR + '/' + name + '.mp3'; }

/* ---------- 课次选择器 ---------- */
function renderTbLessons(){
  const box = $('#tb-lessons');
  if (!box) return;
  box.innerHTML = '';
  TB_UNITS.forEach(u => {
    const row = document.createElement('div');
    row.className = 'tb-unit';
    row.innerHTML = '<div class="tb-unit-label">' + esc(u.title) + '</div>';
    const chips = document.createElement('div');
    chips.className = 'tb-chips';
    u.lessons.forEach(id => {
      const l = TB_LESSONS[id];
      if (!l) return;
      const b = document.createElement('button');
      b.className = 'tb-chip' + (tbCur === id ? ' active' : '') + (l.empty ? ' todo' : '');
      b.dataset.id = id;
      /* 徽章只显示标题里的中文主题（原写法会截掉法语首词，长标题会显示成残句） */
      const zhTitle = (l.title.match(/[\u4e00-\u9fa5].*$/) || [l.title])[0];
      b.innerHTML = '<b>' + esc(l.no) + '</b><span>' + esc(zhTitle) + '</span>';
      b.onclick = () => { tbCur = id; renderTbLessons(); renderTbDetail(); };
      chips.appendChild(b);
    });
    row.appendChild(chips);
    box.appendChild(row);
  });
}

/* ---------- 课次详情 ---------- */
function renderTbDetail(){
  const box = $('#tb-detail');
  if (!box) return;
  stopTbSeq();
  /* 切换课次时丢弃上一段未保存的录音并释放麦克风 */
  if (typeof tbRecStop === 'function') tbRecStop({ discard: true });
  box.innerHTML = '';
  const l = TB_LESSONS[tbCur];
  if (!l){ box.innerHTML = ''; return; }

  if (l.empty){
    const c = document.createElement('div');
    c.className = 'card tb-empty';
    c.innerHTML =
      '<div class="tb-empty-icon">📷</div>' +
      '<h3>' + esc(l.no) + ' · ' + esc(l.title) + '</h3>' +
      '<p>这一课还在<b>录入计划</b>里。把教材上这一课的 <b>DÉCOUVREZ（初识）</b>、' +
      '<b>Vocabulaire（词汇表）</b> 和 <b>Notes（注释）</b> 页拍下来发给我，' +
      '就能像 Leçon 5 一样，配上逐句朗读、单词朗读和语法讲解。</p>';
    box.appendChild(c);
    return;
  }

  /* ——— 课文 ——— */
  const textCard = document.createElement('div');
  textCard.className = 'card tb-card';
  textCard.innerHTML =
    '<div class="tb-card-head"><h3>📖 课文 DÉCOUVREZ · 初识</h3>' +
    '<button class="btn btn-primary tb-seq" type="button">▶ 整课连播</button></div>' +
    '<p class="tb-tip">点每句左边的 ▶ 听这一句；点「整课连播」从头听到尾，适合跟读；' +
    '也可以用「🎤 我的课文朗读」录下自己读的整篇课文，生成<b>带课文画面的视频</b>存到手机或电脑，' +
    '录音过程中可随时 ⏸ 暂停 / ▶ 继续。</p>' +
    '<div class="tb-rec" id="tb-rec-box"></div>';
  l.text.forEach((s, i) => {
    const row = document.createElement('div');
    row.className = 'tb-line';
    row.innerHTML =
      '<button class="tb-lplay" data-a="' + tbCur + '-t' + (i + 1) +
        '" data-t="' + esc(s.fr.replace(/^— /, '')) + '" title="播放这一句">▶</button>' +
      '<div class="tb-line-txt"><p class="tb-fr">' + esc(s.fr) + '</p><p class="tb-zh">' + esc(s.zh) + '</p></div>';
    textCard.appendChild(row);
  });
  box.appendChild(textCard);
  /* 课文卡片每次都是重建的，录音区要跟着重新挂载 */
  if (typeof tbRecMount === 'function') tbRecMount(l, tbCur);

  /* ——— 单词表 ——— */
  const vocCard = document.createElement('div');
  vocCard.className = 'card tb-card';
  vocCard.innerHTML =
    '<div class="tb-card-head"><h3>📗 单词表 Vocabulaire · 词汇</h3>' +
    '<span class="tb-count">' + l.vocab.length + ' 词</span></div>' +
    '<p class="tb-tip">🔊 标准速 · 🐢 慢速跟读；阴阳性徽章：<i class="tb-g f">f</i> 阴性 <i class="tb-g m">m</i> 阳性。</p>';
  l.vocab.forEach((w, i) => {
    const name = tbCur + '-w' + (i + 1);
    const row = document.createElement('div');
    row.className = 'tb-word' + (w.extra ? ' extra' : '');
    row.innerHTML =
      '<button class="tb-wplay" data-a="' + name + '" data-t="' + esc(w.fr) + '" title="朗读">🔊</button>' +
      '<button class="tb-wplay slow" data-a="' + name + '" data-t="' + esc(w.fr) + '" data-slow="1" title="慢速跟读">🐢</button>' +
      '<span class="tb-wfr">' + esc(w.fr) + '</span>' +
      (w.g ? '<i class="tb-g ' + w.g + '">' + w.g + '</i>' : '') +
      '<span class="tb-wpos">' + esc(w.pos) + '</span>' +
      '<span class="tb-wzh">' + esc(w.zh) + (w.extra ? ' <em class="tb-extra">（手写补充）</em>' : '') + '</span>';
    vocCard.appendChild(row);
  });
  box.appendChild(vocCard);

  /* ——— 语法知识 ——— */
  const gramCard = document.createElement('div');
  gramCard.className = 'card tb-card';
  gramCard.innerHTML = '<div class="tb-card-head"><h3>📐 语法知识 Notes · 注释</h3></div>' +
    '<p class="tb-tip">来自教材「注释」栏，是这一课要掌握的核心语法点。</p>';
  l.grammar.forEach((g, i) => {
    const c = document.createElement('div');
    c.className = 'tb-gram';
    c.innerHTML = '<h4>' + (i + 1) + '. ' + esc(g.t) + '</h4><p>' + g.d + '</p>';
    gramCard.appendChild(c);
  });
  box.appendChild(gramCard);

  /* ——— 学会说 ——— */
  if (l.say && l.say.length){
    const sayCard = document.createElement('div');
    sayCard.className = 'card tb-card';
    sayCard.innerHTML = '<div class="tb-card-head"><h3>💬 学会说 Savoir dire</h3></div>';
    let sIdx = 0;
    l.say.forEach(sec => {
      const h = document.createElement('div');
      h.className = 'tb-say-title';
      h.textContent = sec.title;
      sayCard.appendChild(h);
      sec.items.forEach(it => {
        sIdx += 1;
        const row = document.createElement('div');
        row.className = 'tb-line';
        row.innerHTML =
          '<button class="tb-lplay" data-a="' + tbCur + '-s' + sIdx +
            '" data-t="' + esc(it.fr.replace(/^— /, '')) + '" title="播放">▶</button>' +
          '<div class="tb-line-txt"><p class="tb-fr">' + esc(it.fr) + '</p><p class="tb-zh">' + esc(it.zh) + '</p></div>';
        sayCard.appendChild(row);
      });
    });
    box.appendChild(sayCard);
  }
}

/* ---------- 整课连播 ---------- */
function stopTbSeq(){
  tbSeqToken += 1;
  if (tbSeqTimer){ clearTimeout(tbSeqTimer); tbSeqTimer = null; }
  if (tbSeqMedia){
    try{
      tbSeqMedia.pause();
      tbSeqMedia.onended = null;
      tbSeqMedia.onerror = null;
    }catch(e){}
    tbSeqMedia = null;
  }
  const btn = $('.tb-seq');
  if (btn){ btn.classList.remove('playing'); btn.textContent = '▶ 整课连播'; }
}

/* 解析朗读地址：单文件离线版用内联 base64，目录版用相对路径。
   注意复用 <audio> 换 src 时不会经过打包脚本对 new Audio 的包装，
   所以这里必须自己查映射表，否则离线版连播会全部 404。 */
function tbResolveAudio(name){
  const rel = tbAudioPath(name);
  const M = (typeof window !== 'undefined') ? window.__AUDIO_DATA__ : null;
  if (M){
    const key = rel.replace(/^\.?\/?assets\/audio\//, '');
    if (M[key]) return M[key];
  }
  return rel;
}

function playTbSequence(){
  const l = TB_LESSONS[tbCur];
  if (!l || l.empty) return;
  stopTbSeq();
  const token = tbSeqToken;
  const btn = $('.tb-seq');
  if (btn) btn.classList.add('playing');

  /* 课文 + 学会说；s 编号必须全局递增，与 renderTbDetail 里的 sIdx 一致 */
  const list = [];
  l.text.forEach((s, i) => list.push(tbCur + '-t' + (i + 1)));
  let sIdx = 0;
  (l.say || []).forEach(sec => sec.items.forEach(() => { sIdx += 1; list.push(tbCur + '-s' + sIdx); }));

  /* 关键：全程复用同一个 <audio>。第一次 play() 在用户点击的同步调用栈里执行，
     iOS Safari 会把这个元素标记为「已解锁」，之后在 onended 回调里换 src 再播就被允许。
     旧实现每句 new Audio() 创建新元素，异步播放全被自动播放策略拒绝，只能听到第一句。 */
  const a = new Audio();
  a.preload = 'auto';
  tbSeqMedia = a;
  let k = 0;                 // 当前待播索引
  let advancing = false;     // 防止 onended / onerror 重复调度
  let consumed = false;      // 每句只推进一次

  const advance = (delay) => {
    if (token !== tbSeqToken || advancing) return;
    advancing = true;
    if (tbSeqTimer) clearTimeout(tbSeqTimer);
    tbSeqTimer = setTimeout(() => { advancing = false; step(); }, delay);
  };
  const next = (delay) => {
    if (consumed) return;
    consumed = true;
    k += 1;
    advance(delay);
  };
  const step = () => {
    if (token !== tbSeqToken) return;
    if (k >= list.length){ stopTbSeq(); return; }
    consumed = false;
    const name = list[k];
    /* 补零让按钮文案宽度恒定，连播中点击「停止」不会因布局抖动而点偏 */
    if (btn) btn.textContent = '⏸ 连播 ' + String(k + 1).padStart(2, '0') + '/' + String(list.length).padStart(2, '0');
    a.src = tbResolveAudio(name);
    try{ a.currentTime = 0; a.load(); }catch(e){}
    const attempt = (retry) => {
      const p = a.play();
      if (p && typeof p.catch === 'function'){
        p.catch(() => {
          if (token !== tbSeqToken || consumed) return;
          if (retry < 1){
            /* 偶发拒绝：同一元素重试一次，不跳句 */
            setTimeout(() => { if (token === tbSeqToken && !consumed) attempt(retry + 1); }, 200);
          } else {
            next(120);   /* 两次都失败才跳过这句，避免整段卡死 */
          }
        });
      }
    };
    attempt(0);
  };
  a.onended = () => next(280);
  a.onerror = () => next(120);
  step();
}

/* =========================================================
   🎤 课文朗读录音 —— 录成「带课文画面的视频」，可直接转发到微信 / QQ
   · 录音时页面上有课文提词器，全程看得见课文，点某句可跳到该句
   · 支持 ⏸ 暂停 / ▶ 继续（MediaRecorder.pause / resume）
   · 用 canvas 把课文画成画面，与麦克风声音合成一路流同时录制。
     为了让微信 / QQ 能把成品「像视频一样点开看」，优先录成
     MP4(H.264 + AAC)；浏览器不支持时才回落到 webm，并明确提示。
   · 交付：▶ 试听 → 满意点「↗ 转发到微信 / QQ」（navigator.share 调起
     系统分享面板）；不满意点「🔁 重录」。不支持系统分享时兜底为下载。
   ========================================================= */
const TBREC_W = 720, TBREC_H = 1280, TBREC_PER_PAGE = 4;

const tbRec = {
  state: 'idle',   // idle | requesting | recording | paused | processing | done
  box: null, lesson: null, lessonId: '',
  stream: null, recorder: null, chunks: [],
  blob: null, url: null, preview: null,
  mime: '', ext: 'webm', mode: 'audio',   // video | audio
  codec: '', wxReady: false,              // 真实协商编码 / 是否微信可播的 MP4
  remuxed: false,                         // 是否已把分片 MP4 整理成完整索引的标准 MP4
  remuxFailed: false,                     // 分片 MP4 整理失败（不能当成标准 MP4 提示）
  truncated: false,                       // 成品时长明显短于实际录制时长
  videoStalled: false,                    // 视频轨提前停止出帧（iOS 26/27 已知缺陷）
  wentBackground: false,                  // 录制期间页面曾切到后台
  wallStart: 0, wallPaused: 0, pauseAt: 0, wallSeconds: 0,
  fileDuration: 0, mediaDuration: 0, trackInfo: null,
  seconds: 0, elapsed: 0,
  session: 0, err: '', status: '', statusKind: '',
  canvas: null, ctx: null, canvasStream: null, raf: 0, lastFrame: 0,
  lines: [], lineIdx: 0, lineElapsed: 0,
  title: '', subtitle: ''
};

function tbRecIsIOS(){
  return /iP(hone|od|ad)/.test(navigator.userAgent) ||
         (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function tbRecSupported(){
  /* getUserMedia 需要安全上下文：https / localhost。离线 file:// 部分浏览器会禁用麦克风 */
  const secure = window.isSecureContext || location.protocol === 'https:' ||
                 location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  return !!(secure && navigator.mediaDevices && navigator.mediaDevices.getUserMedia &&
            typeof MediaRecorder !== 'undefined');
}

/* ---------- 录制格式选择 ---------- */
function tbRecCanVideo(){
  try{
    return typeof HTMLCanvasElement !== 'undefined' &&
           typeof HTMLCanvasElement.prototype.captureStream === 'function' &&
           typeof MediaStream !== 'undefined';
  }catch(e){ return false; }
}
function tbRecSup(m){
  try{ return !!(m && MediaRecorder.isTypeSupported(m)); }catch(e){ return false; }
}
function tbRecPickAudio(){
  const cand = [
    ['audio/webm;codecs=opus', 'webm'],
    ['audio/webm', 'webm'],
    ['audio/mp4;codecs=mp4a.40.2', 'm4a'],
    ['audio/mp4', 'm4a'],
    ['audio/ogg;codecs=opus', 'ogg']
  ];
  for (const c of cand) if (tbRecSup(c[0])) return { mode: 'audio', mime: c[0], ext: c[1] };
  return { mode: 'audio', mime: '', ext: 'webm' };
}
/* 微信 / QQ 只把 H.264 + AAC 的 MP4 当视频，webm 或「mp4 容器装 VP9/Opus」
   点开就是黑屏或普通文件。所以录制格式一律优先 MP4(H.264/AAC)。
   真实编码在 onstop 里用 recorder.mimeType 复核（Chrome 会谎报 video/mp4 支持）。 */
function tbRecMp4Candidates(){
  /* Chrome 126+ / Safari 14.1+ 支持 MP4(H.264 + AAC)。不同设备对不同
     H.264 profile 的 isTypeSupported 结果不一样，多给几个常见写法。 */
  return [
    ['video/mp4;codecs=avc1.64003E,mp4a.40.2', 'mp4'],   /* MDN / Chrome 126 常用 */
    ['video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'mp4'],   /* Baseline */
    ['video/mp4;codecs="avc1.42E01E,mp4a.40.2"', 'mp4'],
    ['video/mp4;codecs=avc1.4D401F,mp4a.40.2', 'mp4'],   /* Main */
    ['video/mp4;codecs=avc1.640028,mp4a.40.2', 'mp4'],   /* High */
    ['video/mp4;codecs=avc1,mp4a.40.2', 'mp4'],
    ['video/mp4;codecs=h264,aac', 'mp4'],
    ['video/mp4', 'mp4']
  ];
}
function tbRecPickMedia(){
  if (tbRecCanVideo()){
    const ios = tbRecIsIOS();
    for (const c of tbRecMp4Candidates()){
      /* 裸 video/mp4 只给 iOS 兜底：Safari 录出来必是 H.264/AAC。
         Chrome 系会谎报支持、实际录出 vp9/opus 装进 mp4 容器（假 MP4），
         微信既打不开、本地也难处理，宁可回落成标准 webm。 */
      if (c[0] === 'video/mp4' && !ios) continue;
      if (tbRecSup(c[0])) return { mode: 'video', mime: c[0], ext: c[1] };
    }
    const webm = [
      ['video/webm;codecs=vp8,opus', 'webm'],
      ['video/webm;codecs=vp9,opus', 'webm'],
      ['video/webm', 'webm']
    ];
    for (const c of webm) if (tbRecSup(c[0])) return { mode: 'video', mime: c[0], ext: 'webm' };
  }
  return tbRecPickAudio();
}
/* 复核录出来的真实编码：微信可播 = MP4 容器 + H.264 视频 + AAC 音频。
   拿不到 codecs 信息时（部分 Safari 只报 video/mp4），按 iOS 已在用 MP4 处理。 */
function tbRecWxReady(mime, isIOS){
  const m = String(mime || '').toLowerCase();
  if (!/mp4|x-m4v/.test(m)) return false;
  if (/vp8|vp9|av1|opus|vorbis|theora/.test(m)) return false;  /* 明确不兼容 */
  if (/avc1|avc3|h264/.test(m)) return true;                    /* H.264 即可 */
  return !!isIOS;   /* 只报 video/mp4 无 codecs：iOS Safari 可信，Chrome 系不可信 */
}

/* ---------- 课文数据 / 提词器 ---------- */
function tbRecBuildLines(lesson){
  const arr = (lesson && lesson.text) || [];
  return arr.map((s, i) => {
    const fr = String(s.fr || '').replace(/^—\s*/, '');
    const zh = String(s.zh || '');
    const words = fr.trim() ? fr.trim().split(/\s+/).length : 1;
    /* t0 = 这一句开始录的时间；null 表示还没读到（播放页里不能当成 0 秒） */
    return { fr: fr, zh: zh, n: i + 1, t0: null,
             dur: Math.max(2.2, Math.min(9, 1.3 + words * 0.46)) };
  });
}

function tbRecTeleHtml(){
  if (!tbRec.lines.length) return '';
  return '<div class="tb-tele" id="tb-tele">' +
    '<div class="tb-tele-head">📖 课文提词器 <span>点任意一句可跳到该句</span></div>' +
    '<div class="tb-tele-body" id="tb-tele-body">' +
    tbRec.lines.map((l, i) =>
      '<div class="tb-tele-line' + (i === tbRec.lineIdx ? ' active' : '') + '" data-line="' + i + '">' +
      '<span class="tb-tele-n">' + l.n + '</span><div class="tb-tele-txt">' +
      '<p class="tb-tele-fr">' + esc(l.fr) + '</p>' +
      '<p class="tb-tele-zh">' + esc(l.zh) + '</p></div></div>').join('') +
    '</div></div>';
}

function tbRecSyncTele(){
  const body = document.getElementById('tb-tele-body');
  if (!body) return;
  const items = body.querySelectorAll('.tb-tele-line');
  items.forEach((el, i) => el.classList.toggle('active', i === tbRec.lineIdx));
  const cur = items[tbRec.lineIdx];
  if (cur){
    const br = body.getBoundingClientRect(), cr = cur.getBoundingClientRect();
    if (cr.top < br.top + 8 || cr.bottom > br.bottom - 8)
      body.scrollTop += (cr.top - br.top) - 24;
  }
}

function tbRecSetLine(i){
  if (i < 0 || i >= tbRec.lines.length) return;
  tbRec.lineIdx = i;
  tbRec.lineElapsed = 0;
  tbRec.lines[i].t0 = tbRec.elapsed;
  tbRecSyncTele();
  tbRecDraw();
}

/* ---------- Canvas 画面（画进视频里） ---------- */
function tbWrap(ctx, text, maxW){
  const cjk = /[\u4e00-\u9fff]/.test(text);
  const parts = cjk ? Array.from(text) : text.split(/(\s+)/);
  const out = []; let cur = '';
  for (const p of parts){
    if (!p) continue;
    const t = cur + p;
    if (cur && ctx.measureText(t).width > maxW){ out.push(cur.trim()); cur = cjk ? p : p.trim(); }
    else cur = t;
  }
  if (cur.trim()) out.push(cur.trim());
  return out.length ? out : [''];
}

function tbRecDraw(){
  const ctx = tbRec.ctx;
  if (!ctx) return;
  const W = TBREC_W, H = TBREC_H;
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#12233C'); g.addColorStop(1, '#1D3352');
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = 'rgba(255,201,107,.22)'; ctx.fillRect(0, 0, W, 12);
  ctx.textBaseline = 'top';

  ctx.fillStyle = '#FFC96B'; ctx.font = '600 26px system-ui,sans-serif';
  ctx.fillText('你好！法语 1   ·   BONJOUR !', 48, 52);
  ctx.fillStyle = '#F5F0E6'; ctx.font = '700 44px system-ui,sans-serif';
  ctx.fillText(tbRec.title, 48, 98);
  ctx.fillStyle = 'rgba(245,240,230,.62)'; ctx.font = '400 25px system-ui,sans-serif';
  ctx.fillText(tbRec.subtitle, 48, 158);
  ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(48, 212); ctx.lineTo(W - 48, 212); ctx.stroke();

  const total = tbRec.lines.length;
  const pageCount = Math.max(1, Math.ceil(total / TBREC_PER_PAGE));
  const page = Math.min(pageCount - 1, Math.floor(tbRec.lineIdx / TBREC_PER_PAGE));
  const start = page * TBREC_PER_PAGE;
  const shown = tbRec.lines.slice(start, start + TBREC_PER_PAGE);
  const top0 = 252, slot = (H - top0 - 200) / TBREC_PER_PAGE;
  shown.forEach((l, k) => {
    const idx = start + k, active = idx === tbRec.lineIdx, y = top0 + k * slot;
    if (active){
      ctx.fillStyle = 'rgba(255,201,107,.13)';
      ctx.fillRect(34, y - 14, W - 68, slot - 16);
      ctx.fillStyle = '#FFC96B'; ctx.fillRect(34, y - 14, 7, slot - 16);
    }
    ctx.fillStyle = active ? '#FFC96B' : 'rgba(255,255,255,.38)';
    ctx.font = '700 22px system-ui,sans-serif';
    ctx.fillText(String(l.n).padStart(2, '0'), 60, y);
    ctx.fillStyle = active ? '#FFFFFF' : 'rgba(255,255,255,.88)';
    ctx.font = (active ? '700 ' : '500 ') + '33px Helvetica,Arial,sans-serif';
    const frs = tbWrap(ctx, l.fr, W - 150).slice(0, 2);
    frs.forEach((t, j) => ctx.fillText(t, 112, y + j * 43));
    ctx.fillStyle = active ? 'rgba(255,214,140,.94)' : 'rgba(255,255,255,.52)';
    ctx.font = '400 24px system-ui,sans-serif';
    const zhs = tbWrap(ctx, l.zh, W - 150).slice(0, 2);
    zhs.forEach((t, j) => ctx.fillText(t, 112, y + frs.length * 43 + 6 + j * 33));
  });

  const fy = H - 152, paused = tbRec.state === 'paused';
  ctx.fillStyle = 'rgba(0,0,0,.24)'; ctx.fillRect(0, fy - 24, W, 176);
  ctx.fillStyle = paused ? '#FFC96B' : '#FF6B6B';
  ctx.beginPath(); ctx.arc(64, fy + 10, 11, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#F5F0E6'; ctx.font = '700 30px system-ui,sans-serif';
  ctx.fillText((paused ? '已暂停' : '录制中') + '   ' + tbRecClock(tbRec.seconds), 92, fy - 8);
  ctx.fillStyle = 'rgba(245,240,230,.62)'; ctx.font = '400 23px system-ui,sans-serif';
  ctx.fillText('第 ' + (tbRec.lineIdx + 1) + '/' + total + ' 句 · 第 ' + (page + 1) + '/' + pageCount + ' 页', W - 310, fy - 2);
  const pw = W - 96;
  ctx.fillStyle = 'rgba(255,255,255,.16)'; ctx.fillRect(48, fy + 58, pw, 8);
  ctx.fillStyle = '#FFC96B'; ctx.fillRect(48, fy + 58, pw * (total ? (tbRec.lineIdx + 1) / total : 0), 8);
  ctx.fillStyle = 'rgba(245,240,230,.46)'; ctx.font = '400 20px system-ui,sans-serif';
  ctx.fillText('🎤 我的课文朗读 · 画面与声音同步生成', 48, fy + 86);
}

function tbRecCanvasInit(){
  const c = document.createElement('canvas');
  c.width = TBREC_W; c.height = TBREC_H;
  tbRec.canvas = c;
  tbRec.ctx = c.getContext('2d');
  tbRecDraw();           /* 先画一帧，避免录制开头是空白 */
}

function tbRecMakeVideoStream(audioStream){
  try{
    tbRecCanvasInit();
    const cs = tbRec.canvas.captureStream(15);
    if (!cs || !cs.getVideoTracks || !cs.getVideoTracks().length) return null;
    tbRec.canvasStream = cs;
    return new MediaStream(audioStream.getAudioTracks().concat(cs.getVideoTracks()));
  }catch(e){ return null; }
}

function tbRecFrame(ts){
  if (tbRec.state !== 'recording' && tbRec.state !== 'paused') return;
  const dt = tbRec.lastFrame ? Math.min(0.3, (ts - tbRec.lastFrame) / 1000) : 0;
  tbRec.lastFrame = ts;
  if (tbRec.state === 'recording'){
    tbRec.elapsed += dt;
    const sec = Math.floor(tbRec.elapsed);
    if (sec !== tbRec.seconds){ tbRec.seconds = sec; tbRecRenderTime(); }
    tbRec.lineElapsed += dt;
    const cur = tbRec.lines[tbRec.lineIdx];
    if (cur && tbRec.lineElapsed >= cur.dur && tbRec.lineIdx < tbRec.lines.length - 1){
      tbRec.lineElapsed -= cur.dur;
      tbRec.lineIdx += 1;
      tbRec.lines[tbRec.lineIdx].t0 = tbRec.elapsed;
      tbRecSyncTele();
    }
    if (tbRec.elapsed >= 300){ tbRec.err = '已达 5 分钟上限，已自动停止。'; tbRecStop(); return; }
  }
  tbRecDraw();
  tbRec.raf = requestAnimationFrame(tbRecFrame);
}

/* ---------- 通用工具 ---------- */
function tbRecRelease(){
  if (tbRec.preview){ try{ tbRec.preview.pause(); }catch(e){} tbRec.preview = null; }
  if (tbRec.raf){ cancelAnimationFrame(tbRec.raf); tbRec.raf = 0; }
  if (tbRec.canvasStream){
    try{ tbRec.canvasStream.getTracks().forEach(t => t.stop()); }catch(e){}
    tbRec.canvasStream = null;
  }
  tbRec.canvas = null; tbRec.ctx = null;
  if (tbRec.url){ try{ URL.revokeObjectURL(tbRec.url); }catch(e){} tbRec.url = null; }
  tbRec.blob = null; tbRec.chunks = [];
  tbRec.remuxed = false; tbRec.remuxFailed = false;
  tbRec.truncated = false; tbRec.videoStalled = false;
  tbRec.wentBackground = false;
  tbRec.fileDuration = 0; tbRec.mediaDuration = 0; tbRec.trackInfo = null;
}
function tbRecEnsureUrl(){
  if (!tbRec.url && tbRec.blob) tbRec.url = URL.createObjectURL(tbRec.blob);
  return tbRec.url;
}
function tbRecClock(s){
  const p = n => String(n).padStart(2, '0');
  return p(Math.floor(s / 60)) + ':' + p(s % 60);
}
function tbRecStamp(){
  const d = new Date(), p = n => String(n).padStart(2, '0');
  return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '_' +
         p(d.getHours()) + p(d.getMinutes()) + p(d.getSeconds());
}
function tbRecBaseName(){
  const id = (String(tbRec.lessonId || '').replace(/^tb-/, '').replace(/[^a-zA-Z0-9-]/g, '').toUpperCase()) || 'lesson';
  return '你好法语1_' + id + '_';
}
function tbRecFilename(){
  const tag = tbRec.mode === 'video' ? '课文朗读_' : '课文朗读_录音_';
  return tbRecBaseName() + tag + tbRecStamp() + '.' + tbRec.ext;
}
/* 分享/下载给系统识别的类型必须是纯 MIME，不能带 codecs 参数（逗号会让
   系统分享面板把文件当成未知类型，data URL 也会因此被截断）。 */
function tbRecPlainTypeOf(blob){
  const t = (blob && blob.type) ||
            (tbRec.mode === 'video' ? 'video/' + tbRec.ext : 'audio/' + tbRec.ext);
  return String(t).split(';')[0] || 'application/octet-stream';
}
function tbRecPlainType(){ return tbRecPlainTypeOf(tbRec.blob); }

/* 录制完成后把文件整理成「系统相册能完整读取」的形态。
   浏览器 MediaRecorder 产出的是分片 MP4(fMP4) 或 WebM：网页里用 blob 试听
   完全正常，但交给安卓相册 / 系统转码器时常只读到第一个分片（约 0.5 秒），
   于是存进相册只剩一个静止的开头画面。
   这里做两件事：① 把整段读进内存，交给系统时不再是流式 blob；
   ② 分片 MP4 重封装成带完整 moov 索引的标准 MP4。任何一步失败都原样保留。 */
async function tbRecNormalize(blob){
  try{
    let buf;
    if (typeof blob.arrayBuffer === 'function') buf = await blob.arrayBuffer();
    else buf = await new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = () => rej(new Error('read'));
      r.readAsArrayBuffer(blob);
    });
    let out = buf, fixed = false, info = null;
    tbRec.remuxFailed = false;
    tbRec.trackInfo = null;
    tbRec.mediaDuration = 0;
    if (/mp4/i.test(blob.type || '') && typeof Mp4Remux !== 'undefined' &&
        Mp4Remux.isFragmented(buf)){
      info = {};
      const r = Mp4Remux.remux(buf, info);
      if (r && r.length > 1024){ out = r; fixed = true; }
      else { tbRec.remuxFailed = true; info = null; }
    }
    tbRec.remuxed = fixed;
    if (info){
      tbRec.mediaDuration = info.movieDuration || 0;
      tbRec.trackInfo = info.tracks || null;
    }
    return new Blob([out], { type: tbRecPlainTypeOf(blob) });
  }catch(e){
    tbRec.remuxed = false;
    tbRec.trackInfo = null;
    return blob;                    /* 绝不因为整理失败把原文件弄坏 */
  }
}

/* 用浏览器解码器实测成品时长，给非 MP4 / 整理失败的情况兜底 */
function tbRecProbeDuration(blob){
  return new Promise(res => {
    let url;
    try{ url = URL.createObjectURL(blob); }catch(e){ res(0); return; }
    const el = document.createElement(tbRec.mode === 'video' ? 'video' : 'audio');
    el.preload = 'metadata';
    let done = false;
    const fin = v => {
      if (done) return; done = true;
      try{ el.removeAttribute('src'); el.load(); }catch(e){}
      try{ URL.revokeObjectURL(url); }catch(e){}
      res(v);
    };
    el.onloadedmetadata = () => fin(isFinite(el.duration) && el.duration > 0 ? el.duration : 0);
    el.onerror = () => fin(0);
    setTimeout(() => fin(0), 2500);
    el.src = url;
  });
}

/* 核对「实际读了多久」和「成品有多长」。iOS 26/27 Safari 的 MP4 录制器
   会把长录像截成十几秒（WebKit bug 299164 / 315091），旧逻辑会静默交付
   残缺文件，用户直到存进相册才发现。这里明确标记，交给完成态提示。 */
async function tbRecCheckIntegrity(blob){
  tbRec.truncated = false;
  tbRec.videoStalled = false;
  const wall = tbRec.wallSeconds || tbRec.seconds;
  if (wall < 20 || !blob) return;
  if (!tbRec.fileDuration) tbRec.fileDuration = await tbRecProbeDuration(blob);
  const measured = tbRec.fileDuration || tbRec.mediaDuration || 0;
  if (measured > 0 && measured < wall * 0.7) tbRec.truncated = true;
  const vids = (tbRec.trackInfo || []).filter(t => t.kind === 'vide' && t.rawDuration > 0);
  if (vids.length && tbRec.trackInfo.length > 1){
    const raw = Math.min.apply(null, vids.map(t => t.rawDuration));
    if (raw < wall * 0.7) tbRec.videoStalled = true;
  }
}
function tbRecShareSupported(){
  return typeof navigator !== 'undefined' &&
         typeof navigator.share === 'function' && typeof navigator.canShare === 'function';
}
function tbRecInAppBrowser(){
  /* 微信 / QQ 内置 WebView 没有系统分享面板，也大多禁用麦克风 */
  return /MicroMessenger|WeChat|QQ\/|MQQBrowser|Weibo/i.test(navigator.userAgent || '');
}
function tbRecPageFilename(){
  return tbRecBaseName() + '课文朗读_带课文播放页_' + tbRecStamp() + '.html';
}
function tbRecStatus(msg, kind){
  tbRec.status = msg || '';
  tbRec.statusKind = kind || '';
  const el = (tbRec.box && tbRec.box.querySelector('.tb-rec-status')) ||
             document.querySelector('.tb-rec-status');
  if (el){ el.textContent = tbRec.status; el.className = 'tb-rec-status' + (kind ? ' ' + kind : ''); }
}
function tbRecRenderTime(){
  const el = (tbRec.box && tbRec.box.querySelector('.tb-rec-timer')) ||
             document.querySelector('.tb-rec-timer');
  if (el) el.textContent = (tbRec.state === 'paused' ? '⏸ ' : '🔴 ') + tbRecClock(tbRec.seconds);
}

/* ---------- 挂载 / 渲染 ---------- */
function tbRecMount(lesson, lessonId){
  const box = document.getElementById('tb-rec-box');
  if (!box) return;
  tbRec.box = box;
  tbRec.lesson = lesson;
  tbRec.lessonId = lessonId;
  tbRec.lines = tbRecBuildLines(lesson);
  const zh = (lesson.title.match(/[\u4e00-\u9fa5].*$/) || [lesson.title])[0];
  tbRec.title = (lesson.no || '') + ' · ' + zh;
  tbRec.subtitle = '课文 DÉCOUVREZ · 我的朗读录音';
  tbRecRender();
}

function tbRecRender(){
  const box = tbRec.box;
  if (!box) return;
  const S = tbRec.state;
  let html = '<div class="tb-rec-head">🎤 我的课文朗读' +
             '<span class="tb-rec-sub">带课文画面 · 可暂停继续</span></div>';

  if (!tbRecSupported()){
    html += '<p class="tb-rec-hint">⚠️ 当前浏览器不支持录音。请用最新版 Chrome / Edge / Safari，' +
            '并通过 https 页面（或本机 localhost）打开；离线单文件用 file:// 打开时部分浏览器会禁用麦克风。</p>';
    box.innerHTML = html;
    return;
  }

  if (S === 'idle'){
    html += '<div class="tb-rec-row"><button class="btn btn-mic tb-rec-btn" data-act="start" type="button">🎥 开始录音</button></div>';
    if (tbRec.err) html += '<p class="tb-rec-status warn">' + esc(tbRec.err) + '</p>';
    html += '<p class="tb-rec-hint">建议先点右上角「整课连播」听示范。录音时课文一直显示在上方，' +
            '可 ⏸ 暂停 / ▶ 继续；录完<b>先试听</b>，满意就点「↗ 转发到微信 / QQ」直接发给好友，' +
            '微信里能像视频一样点开看；不满意点「🔁 重录」。' +
            (tbRecIsIOS()
              ? '<br><b>苹果手机：录制全程请保持页面在前台、屏幕常亮，不要锁屏或切到别的应用</b>，' +
                '否则 Safari 可能把长录像截断。'
              : '') + '</p>';
    const fmt = tbRecPickMedia();
    if (fmt.ext !== 'mp4')
      html += '<p class="tb-rec-hint">⚠️ 当前浏览器录不出 MP4，成品会是 .' + esc(fmt.ext) +
              '，微信里可能无法直接点开播放。建议用 <b>iPhone Safari</b> 或 <b>新版安卓 Chrome</b> 打开本页再录。</p>';
    if (tbRecInAppBrowser())
      html += '<p class="tb-rec-status warn">当前在微信 / QQ 内置浏览器里，通常无法录音和转发文件：' +
              '请点右上角「···」→「在浏览器中打开」后再使用本功能。</p>';
  } else if (S === 'requesting'){
    html += '<div class="tb-rec-row"><button class="btn btn-mic tb-rec-btn" type="button" disabled>正在请求麦克风…</button></div>' +
            '<p class="tb-rec-hint">请在浏览器弹窗里点「允许」。</p>';
  } else if (S === 'recording' || S === 'paused'){
    const pa = S === 'paused';
    html += '<div class="tb-rec-row">' +
            '<button class="btn btn-mic tb-rec-btn" data-act="stop" type="button">⏹ 停止并生成</button>' +
            '<button class="btn btn-slow tb-rec-btn" data-act="' + (pa ? 'resume' : 'pause') + '" type="button">' +
              (pa ? '▶ 继续录音' : '⏸ 暂停录音') + '</button>' +
            '<span class="tb-rec-timer">' + (pa ? '⏸ ' : '🔴 ') + tbRecClock(tbRec.seconds) + '</span></div>' +
            tbRecTeleHtml() +
            '<p class="tb-rec-hint">' + (pa
              ? '已暂停，点「继续录音」接着读；课文一直显示在上方。'
              : '课文就在上方，读到哪句高亮到哪句；点某句可手动跳转。最长 5 分钟，录音时不要同时播放示范音频。') + '</p>';
  } else if (S === 'processing'){
    html += '<p class="tb-rec-hint">正在整理录像：把分段画面封装成相册能完整识别的格式，稍等一下…</p>';
  } else if (S === 'done'){
    const kb = tbRec.blob ? Math.max(1, Math.round(tbRec.blob.size / 1024)) : 0;
    const isVideo = tbRec.mode === 'video';
    const stallAt = (() => {
      const v = (tbRec.trackInfo || []).filter(t => t.kind === 'vide' && t.rawDuration > 0);
      return v.length ? Math.round(Math.min.apply(null, v.map(t => t.rawDuration))) : 0;
    })();
    const canShare = tbRecShareSupported();
    const ios = tbRecIsIOS();
    const saveName = ios ? '💾 保存到相册' : '💾 保存到本机';
    html += '<div class="tb-rec-row tb-rec-actions">' +
            (tbRec.blob
              ? (canShare
                  ? '<button class="btn btn-primary tb-rec-btn tb-rec-share" data-act="share" type="button">↗ 转发到微信 / QQ</button>'
                  : '') +
                '<button class="btn btn-mic tb-rec-btn" data-act="save" type="button">' + saveName + '</button>' +
                '<button class="btn btn-slow tb-rec-btn" data-act="preview" type="button">▶ 试听</button>'
              : '') +
            '<button class="btn btn-ghost tb-rec-btn" data-act="reset" type="button">🔁 重录</button></div>';
    html += '<p class="tb-rec-info">' + (isVideo ? '🎬 带课文画面的视频' : '🎵 课文朗读录音') +
            ' · ' + tbRecClock(tbRec.seconds) + ' · ' + kb + ' KB · .' + esc(tbRec.ext) +
            (isVideo ? (tbRec.wxReady ? ' · ✅ 微信可直接播放' : ' · ⚠️ 微信可能打不开') : '') +
            (tbRec.remuxed ? ' · ✅ 已整理为完整 MP4' : '') + '</p>';
    html += isVideo
      ? '<video class="tb-rec-video" controls playsinline preload="metadata"></video>'
      : '<audio class="tb-rec-audio" controls preload="metadata"></audio>';
    if (tbRec.err) html += '<p class="tb-rec-status warn">' + esc(tbRec.err) + '</p>';
    if (tbRec.truncated)
      html += '<p class="tb-rec-status warn">⚠️ 成品只有约 ' +
              Math.round(tbRec.fileDuration || tbRec.mediaDuration) + ' 秒，而你录了约 ' +
              Math.round(tbRec.wallSeconds || tbRec.seconds) + ' 秒：本机浏览器把长录像截断了。' +
              '请点「🔁 重录」再试一次（已切换兼容参数），录制全程保持页面在前台、屏幕常亮、' +
              '不要锁屏或切到别的应用；也可点「生成带课文的网页版」在浏览器里完整播放。</p>';
    else if (tbRec.videoStalled)
      html += '<p class="tb-rec-status warn">⚠️ 本机浏览器只录到前约 ' + stallAt +
              ' 秒的画面（iOS 26/27 Safari 的已知问题）。文件已补成完整时长：' +
              '<b>声音是完整的</b>，后半段画面会停在最后一句课文。' +
              '想让画面也逐句高亮到结尾，请点「🔁 重录」再试一次，录制时保持屏幕常亮。</p>';
    else if (tbRec.wentBackground)
      html += '<p class="tb-rec-status warn">⚠️ 录制期间页面曾切到后台 / 锁屏，可能丢失片段，' +
              '请先点「▶ 试听」确认完整；不满意点「🔁 重录」。</p>';
    const saveWay = ios
      ? '<b>存相册请点上面的「' + saveName + '」</b> → 在弹出的系统面板里选「存储到视频 / 保存视频」；' +
        (canShare ? '或直接「↗ 转发到微信 / QQ」发给好友；' : '') + '不满意点「🔁 重录」。'
      : (canShare
          ? '<b>存到本机请点上面的「' + saveName + '」</b>，或直接「↗ 转发到微信 / QQ」发给好友；不满意点「🔁 重录」。'
          : '<b>请点上面的「' + saveName + '」</b>保存，再在相册 / 文件里用微信发送；不满意点「🔁 重录」。');
    /* 安卓从播放器按流读取 blob 会只存下开头；iOS 的「存储到视频」不走这条路径，
       给 iOS 看这条警告反而会让人不敢存，所以只对安卓显示。 */
    const playerWarn = ios ? '' :
      '<br>⚠️ 不要从上方播放器右上角用系统「分享 / 存储」另存：' +
      '安卓会按流读取视频，容易只存下开头 1 秒。';
    let hint;
    if (tbRec.remuxFailed)
      hint = '⚠️ 视频整理未成功，文件仍是分段格式。请先点「' + saveName + '」拿到完整文件；' +
             '若相册里只显示开头一瞬，请点「生成带课文的网页版」另行保存，' +
             '或换 <b>iPhone Safari</b> / <b>新版安卓 Chrome</b> 重录。' + playerWarn;
    else if (tbRec.remuxed)
      hint = '✅ 已把分段录像整理成<b>带完整时长索引的标准 MP4</b>，相册、微信都能读到整段。' + saveWay + playerWarn;
    else if (isVideo && tbRec.wxReady)
      hint = '已生成 <b>MP4（H.264 / AAC）</b>，微信、QQ 都能当视频点开看。' + saveWay + playerWarn;
    else
      hint = '⚠️ 当前浏览器录出的是 <b>.' + esc(tbRec.ext) + '</b>（不是标准 MP4），系统相册可能只认到开头。' +
             '请先点「' + saveName + '」拿到完整文件；若相册里仍只剩一瞬，' +
             '建议用 <b>iPhone Safari</b> 或 <b>新版安卓 Chrome</b> 打开本页重录，' +
             '或点下方「生成带课文的网页版」另行保存。' + playerWarn;
    if (tbRecInAppBrowser())
      hint += '<br>当前是微信 / QQ 内置浏览器，不支持系统转发：请点右上角「···」→「在浏览器中打开」后再录一次。';
    html += '<p class="tb-rec-hint">' + hint + '</p>';
    if (tbRec.blob)
      html += '<p class="tb-rec-alt"><button class="tb-rec-link" data-act="savepage" type="button">生成带课文的网页版</button></p>';
  }
  html += '<p class="tb-rec-status' + (tbRec.statusKind ? ' ' + tbRec.statusKind : '') + '">' + esc(tbRec.status) + '</p>';
  box.innerHTML = html;

  if (S === 'done' && tbRec.blob){
    const el = box.querySelector(tbRec.mode === 'video' ? '.tb-rec-video' : '.tb-rec-audio');
    if (el){ el.src = tbRecEnsureUrl(); tbRec.preview = el; }
  }
  if (S === 'recording' || S === 'paused') tbRecSyncTele();

  box.onclick = e => {
    const line = e.target.closest('.tb-tele-line');
    if (line && (tbRec.state === 'recording' || tbRec.state === 'paused')){
      tbRecSetLine(Number(line.dataset.line)); return;
    }
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const act = b.dataset.act;
    if (act === 'start') tbRecStart();
    else if (act === 'stop') tbRecStop();
    else if (act === 'pause' || act === 'resume') tbRecTogglePause();
    else if (act === 'preview') tbRecPreview();
    else if (act === 'share') tbRecShare();
    else if (act === 'save') tbRecSave('main');
    else if (act === 'savepage') tbRecSave('page');
    else if (act === 'saveaudio') tbRecSave('audio');
    else if (act === 'reset'){ tbRecStop({ discard: true }); tbRec.status = ''; tbRecRender(); }
  };
}

/* ---------- 开始 / 暂停 / 继续 / 停止 ---------- */
async function tbRecStart(){
  if (!tbRecSupported() || ['recording', 'paused', 'requesting'].indexOf(tbRec.state) >= 0) return;
  tbRecStop({ discard: true });
  tbRecRelease();
  tbRec.err = ''; tbRec.status = '';
  tbRec.state = 'requesting';
  tbRecRender();

  let stream;
  try{
    stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });
  }catch(e){
    const name = (e && e.name) || '';
    tbRec.err = /NotAllowed|PermissionDenied|SecurityError/i.test(name)
      ? '麦克风权限被拒绝，请在地址栏允许麦克风后再试。'
      : (/NotFoundError|DevicesNotFoundError/i.test(name)
          ? '没有检测到麦克风，请接上耳机或检查设备。'
          : '无法打开麦克风：' + (name || '未知错误'));
    tbRec.state = 'idle';
    tbRecRender();
    return;
  }
  /* 授权期间用户可能已经切走 / 重录 */
  if (tbRec.state !== 'requesting'){
    try{ stream.getTracks().forEach(t => t.stop()); }catch(e){}
    return;
  }

  tbRec.lines = tbRecBuildLines(tbRec.lesson);
  let media = tbRecPickMedia();
  let mixStream = null;
  if (media.mode === 'video'){
    mixStream = tbRecMakeVideoStream(stream);
    if (!mixStream){
      if (tbRec.canvasStream){
        try{ tbRec.canvasStream.getTracks().forEach(t => t.stop()); }catch(e){}
        tbRec.canvasStream = null;
      }
      tbRec.canvas = null; tbRec.ctx = null;
      media = tbRecPickAudio();
    }
  }

  let rec = null;
  try{
    rec = new MediaRecorder(mixStream || stream, media.mime ? { mimeType: media.mime } : undefined);
  }catch(e){
    if (media.mode === 'video'){
      /* 视频录制器创建失败 → 回落纯音频 */
      if (tbRec.canvasStream){
        try{ tbRec.canvasStream.getTracks().forEach(t => t.stop()); }catch(e2){}
        tbRec.canvasStream = null;
      }
      tbRec.canvas = null; tbRec.ctx = null; mixStream = null;
      media = tbRecPickAudio();
      try{ rec = new MediaRecorder(stream, media.mime ? { mimeType: media.mime } : undefined); }catch(e2){ rec = null; }
    }
    if (!rec){
      try{ stream.getTracks().forEach(t => t.stop()); }catch(e2){}
      tbRec.err = '浏览器无法创建录音器，请换 Chrome / Edge / Safari 再试。';
      tbRec.state = 'idle';
      tbRecRender();
      return;
    }
  }

  const session = ++tbRec.session;
  tbRec.stream = stream;
  tbRec.recorder = rec;
  tbRec.mime = media.mime;
  tbRec.ext = media.ext;
  tbRec.mode = media.mode;
  tbRec.chunks = [];
  tbRec.seconds = 0; tbRec.elapsed = 0;
  tbRec.lineIdx = 0; tbRec.lineElapsed = 0; tbRec.lastFrame = 0;
  if (tbRec.lines.length) tbRec.lines[0].t0 = 0;
  tbRec.state = 'recording';

  rec.ondataavailable = e => { if (e.data && e.data.size) tbRec.chunks.push(e.data); };
  rec.onerror = () => { tbRec.err = '录音中断，已停止。'; tbRecStop(); };
  rec.onstop = async () => {
    if (session !== tbRec.session) return;
    const type = (tbRec.chunks[0] && tbRec.chunks[0].type) ||
                 tbRec.mime || (tbRec.mode === 'video' ? 'video/webm' : 'audio/webm');
    if (/^video/i.test(type)) tbRec.mode = 'video';
    else if (/^audio/i.test(type)) tbRec.mode = 'audio';
    if (/webm/i.test(type)) tbRec.ext = 'webm';
    else if (/ogg/i.test(type)) tbRec.ext = 'ogg';
    else if (/mp4|m4a|aac/i.test(type)) tbRec.ext = (tbRec.mode === 'video' ? 'mp4' : 'm4a');
    /* recorder.mimeType 在产出数据后会带上真实协商的 codecs：
       谎报支持 video/mp4 的 Chrome 会变成 video/mp4;codecs=vp9,opus。
       以此复核「微信能不能像视频一样点开看」，避免转发过去是黑屏。 */
    let real = '';
    try{ real = rec.mimeType || ''; }catch(e){}
    tbRec.codec = real || type;
    tbRec.wxReady = tbRec.mode === 'video' && tbRecWxReady(tbRec.codec, tbRecIsIOS());
    let blob = new Blob(tbRec.chunks, { type: type });
    tbRec.chunks = [];
    tbRec.state = 'processing';
    tbRecRender();
    blob = await tbRecNormalize(blob);
    if (session !== tbRec.session) return;    /* 整理期间用户点了重录 / 切课 */
    await tbRecCheckIntegrity(blob);
    if (session !== tbRec.session) return;
    tbRec.blob = blob.size ? blob : null;
    tbRec.state = 'done';
    if (!tbRec.blob) tbRec.err = '没有录到声音，请检查麦克风后再试。';
    tbRecRender();
  };

  /* WebKit bug 299164 / 315091：iOS 26/27 Safari 录 video/mp4 时，
     timeslice 缺失或过短会让视频轨在 16~18 秒后停止出帧、音轨仍完整，
     成品被系统相册裁成十几秒。社区在 iPhone/iPad/Mac 上实测
     start(1000) 可消除（300 秒连续、8962 帧）。 */
  try{
    rec.start(1000);
  }catch(e){
    try{ stream.getTracks().forEach(t => t.stop()); }catch(e2){}
    tbRec.err = '录音启动失败：' + ((e && e.name) || '未知错误');
    tbRec.state = 'idle';
    tbRecRender();
    return;
  }

  /* 开始录音时停掉示范音频，避免把示范一起录进去 */
  if (typeof stopTbSeq === 'function') stopTbSeq();
  if (typeof stopWordAudio === 'function') stopWordAudio();
  /* 墙钟计时不受 requestAnimationFrame 节流影响，用于完成后核对成品时长 */
  tbRec.wallStart = Date.now(); tbRec.wallPaused = 0; tbRec.pauseAt = 0;
  tbRec.wallSeconds = 0; tbRec.wentBackground = false;
  tbRec.raf = requestAnimationFrame(tbRecFrame);
  tbRecRender();
}

function tbRecTogglePause(){
  const rec = tbRec.recorder;
  if (!rec || (tbRec.state !== 'recording' && tbRec.state !== 'paused')) return;
  if (tbRec.state === 'recording'){
    try{ rec.pause(); }
    catch(e){ tbRecStatus('当前浏览器不支持暂停录音，可直接点「停止并生成」。', 'warn'); return; }
    tbRec.state = 'paused';
    tbRec.pauseAt = Date.now();
  } else {
    try{ rec.resume(); }
    catch(e){ tbRecStatus('继续录音失败，请重新录一次。', 'warn'); return; }
    tbRec.state = 'recording';
    if (tbRec.pauseAt){ tbRec.wallPaused += Date.now() - tbRec.pauseAt; tbRec.pauseAt = 0; }
  }
  const pa = tbRec.state === 'paused';
  const b = tbRec.box && tbRec.box.querySelector('[data-act="pause"],[data-act="resume"]');
  if (b){ b.dataset.act = pa ? 'resume' : 'pause'; b.textContent = pa ? '▶ 继续录音' : '⏸ 暂停录音'; }
  const hint = tbRec.box && tbRec.box.querySelector('.tb-rec-hint');
  if (hint) hint.textContent = pa
    ? '已暂停，点「继续录音」接着读；课文一直显示在上方。'
    : '课文就在上方，读到哪句高亮到哪句；点某句可手动跳转。最长 5 分钟，录音时不要同时播放示范音频。';
  tbRecRenderTime();
  tbRecDraw();
}

function tbRecStop(opts){
  const discard = !!(opts && opts.discard);
  if (!discard && (tbRec.state === 'recording' || tbRec.state === 'paused')){
    if (tbRec.pauseAt){ tbRec.wallPaused += Date.now() - tbRec.pauseAt; tbRec.pauseAt = 0; }
    tbRec.wallSeconds = tbRec.wallStart
      ? Math.max(0, (Date.now() - tbRec.wallStart - tbRec.wallPaused) / 1000) : 0;
  }
  if (tbRec.raf){ cancelAnimationFrame(tbRec.raf); tbRec.raf = 0; }
  if (discard) tbRec.session += 1;

  const rec = tbRec.recorder;
  tbRec.recorder = null;
  if (rec && rec.state !== 'inactive'){
    if (discard){ try{ rec.onstop = null; }catch(e){} }
    try{ rec.stop(); }catch(e){}
  }
  if (tbRec.canvasStream){
    try{ tbRec.canvasStream.getTracks().forEach(t => t.stop()); }catch(e){}
    tbRec.canvasStream = null;
  }
  if (tbRec.stream){
    try{ tbRec.stream.getTracks().forEach(t => t.stop()); }catch(e){}
    tbRec.stream = null;
  }
  if (discard){
    tbRecRelease();
    tbRec.state = 'idle';
    tbRec.err = '';
    tbRecRender();
  } else if (tbRec.state === 'recording' || tbRec.state === 'paused'){
    tbRec.state = 'processing';
    tbRecRender();
  }
}

/* ---------- 试听 / 保存 ---------- */
function tbRecPreview(){
  if (!tbRec.blob) return;
  let el = tbRec.preview;
  if (!el || !el.isConnected){
    const url = tbRecEnsureUrl();
    if (!url) return;
    el = document.createElement(tbRec.mode === 'video' ? 'video' : 'audio');
    el.controls = true;
    el.className = tbRec.mode === 'video' ? 'tb-rec-video' : 'tb-rec-audio';
    el.src = url;
    if (tbRec.box) tbRec.box.appendChild(el);
    tbRec.preview = el;
  }
  const p = el.play();
  if (p && typeof p.catch === 'function') p.catch(() => tbRecStatus('试听失败，请再点一次试听。', 'warn'));
}

function tbRecInline(url, name){
  const box = tbRec.box;
  if (!box || box.querySelector('.tb-rec-embed')) return;
  const wrap = document.createElement('div');
  wrap.className = 'tb-rec-embed';
  if (/\.html$/i.test(name)){
    const a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener';
    a.className = 'btn btn-ghost tb-rec-btn';
    a.textContent = '📄 打开带课文的播放页';
    wrap.appendChild(a);
  } else if (tbRec.mode === 'video'){
    const v = document.createElement('video');
    v.controls = true; v.playsInline = true; v.src = url; v.className = 'tb-rec-video';
    wrap.appendChild(v);
  } else {
    const a = document.createElement('audio');
    a.controls = true; a.src = url; a.className = 'tb-rec-audio';
    wrap.appendChild(a);
  }
  box.appendChild(wrap);
}

function tbRecPageHtml(dataUrl){
  /* 未读到的句子给一个不可能达到的时间点，避免音频进度跳到它们 */
  const lines = tbRec.lines.map(l => ({
    n: l.n, fr: l.fr, zh: l.zh,
    t0: l.t0 == null ? 999999 : +Number(l.t0).toFixed(2)
  }));
  const css = [
    '*{box-sizing:border-box}body{margin:0;background:#12233C;color:#F5F0E6;',
    'font-family:system-ui,-apple-system,PingFang SC,Microsoft YaHei,sans-serif}',
    '.wrap{max-width:760px;margin:0 auto;padding:22px 18px 30px}',
    'h1{font-size:1.15rem;color:#FFC96B;margin:0 0 4px}',
    '.sub{font-size:.85rem;opacity:.65;margin:0 0 18px}',
    '.line{padding:12px 14px;border-left:4px solid transparent;border-radius:10px;margin:0 0 6px;',
    'display:flex;gap:12px;transition:background .2s}',
    '.line.on{background:rgba(255,201,107,.14);border-left-color:#FFC96B}',
    '.n{font-size:.8rem;opacity:.5;min-width:26px;padding-top:4px}',
    '.fr{font-size:1.12rem;font-weight:700;line-height:1.45;margin:0 0 3px}',
    '.zh{font-size:.86rem;opacity:.62;line-height:1.5;margin:0}',
    '#a{width:100%;margin:0 0 16px;display:block}',
    '#a.pv{max-height:56vh;background:#000;border-radius:10px}',
    '.tip{font-size:.78rem;opacity:.5;margin-top:12px;line-height:1.6}'
  ].join('');
  const rows = lines.map((l, i) =>
    '<div class="line' + (i === 0 ? ' on' : '') + '" data-i="' + i + '">' +
    '<span class="n">' + l.n + '</span><div><p class="fr">' + esc(l.fr) + '</p>' +
    '<p class="zh">' + esc(l.zh) + '</p></div></div>').join('');
  const js = [
    'var L=JSON.parse(document.getElementById("L").dataset.lines);',
    'var a=document.getElementById("a"),box=document.getElementById("lines");',
    'function hi(i){var es=box.children;for(var k=0;k<es.length;k++)es[k].classList.toggle("on",k===i);',
    'var el=es[i];if(el){var br=box.getBoundingClientRect(),cr=el.getBoundingClientRect();',
    'if(cr.top<br.top+20||cr.bottom>br.bottom-20)el.scrollIntoView({block:"center",behavior:"smooth"});}}',
    'a.addEventListener("timeupdate",function(){var t=a.currentTime,i=0;',
    'for(var k=0;k<L.length;k++){if(t>=L[k].t0)i=k;}hi(i);});'
  ].join('');
  /* 视频模式把视频也内嵌进网页：即便个别浏览器录出的编码不兼容系统播放器，
     用生成它的浏览器打开这个网页仍能看到画面 + 课文 + 逐句高亮。 */
  const isVideo = tbRec.mode === 'video';
  const player = isVideo
    ? '<video id="a" class="pv" controls playsinline preload="metadata" src="' + dataUrl + '"></video>'
    : '<audio id="a" controls preload="metadata" src="' + dataUrl + '"></audio>';
  return [
    '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width,initial-scale=1">',
    '<title>我的课文朗读 · ' + esc(tbRec.title) + '</title><style>', css, '</style></head><body>',
    '<div class="wrap"><h1>🎤 我的课文朗读 · ' + esc(tbRec.title) + '</h1>',
    '<p class="sub">课文 DÉCOUVREZ · 播放时，读到哪句就高亮哪句</p>',
    player,
    '<div id="lines">', rows, '</div>',
    '<p class="tip">这个文件已把' + (isVideo ? '视频' : '录音') + '和课文打包在一起，可离线打开、复制或分享。</p></div>',
    '<div id="L" hidden data-lines="', esc(JSON.stringify(lines)), '"></div>',
    /* 拆开写：源码里不能出现脚本结束标签或 body 结束标签的字面量，
       否则 html 内联打包时会把脚本截断 / 把音频表插进字符串中间。 */
    '<scr' + 'ipt>', js, '</' + 'script></' + 'body></' + 'html>'
  ].join('');
}

async function tbRecSavePage(){
  if (!tbRec.blob) return;
  tbRecStatus('正在生成带课文的播放页…', '');
  try{
    /* readAsDataURL 会照抄 blob.type；像 "video/webm;codecs=vp8,opus" 里的逗号
       会被当成 data URL 的分隔符，导致内嵌媒体解码失败。这里去掉 codecs 参数。 */
    const plainType = (tbRec.blob.type || 'application/octet-stream').split(';')[0];
    const plain = new Blob([tbRec.blob], { type: plainType });
    const dataUrl = await new Promise((res, rej) => {
      const r = new FileReader();
      r.onload = () => res(r.result);
      r.onerror = () => rej(new Error('read'));
      r.readAsDataURL(plain);
    });
    const html = tbRecPageHtml(dataUrl);
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const name = tbRecPageFilename();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; a.style.display = 'none';
    document.body.appendChild(a); a.click();
    setTimeout(() => { try{ document.body.removeChild(a); URL.revokeObjectURL(url); }catch(e){} }, 4000);
    tbRecInline(url, name);
    tbRecStatus('已开始下载：' + name + '（打开后可播放并同步看课文）', 'ok');
  }catch(e){
    tbRecStatus('生成播放页失败，请改用「仅音频」。', 'warn');
  }
}

/* ---------- 转发到微信 / QQ（Web Share Level 2） ----------
   系统分享面板会把 .mp4 交给注册了视频接收的 App（微信 / QQ / 企业微信 / 钉钉等）。
   share() 必须落在点击手势的同步调用栈内，前面不能有任何 await。 */
async function tbRecShare(){
  if (!tbRec.blob) return;
  const name = tbRecFilename();
  const type = tbRecPlainType();       /* 纯 MIME，带 codecs 参数会被系统当成未知类型 */
  let file = null;
  try{ file = new File([tbRec.blob], name, { type: type }); }catch(e){}

  if (!file || !tbRecShareSupported() || !navigator.canShare({ files: [file] })){
    tbRecStatus('当前浏览器不支持直接转发文件，已改为保存到本机。', 'warn');
    tbRecDownload(name);
    return;
  }
  tbRecStatus(tbRecInAppBrowser()
    ? '正在调起转发…若没出现微信 / QQ，请点右上角「···」在浏览器中打开后重试。'
    : '正在调起系统分享，请选择微信或 QQ…', '');
  try{
    await navigator.share({ files: [file], title: '我的课文朗读 · ' + tbRec.title });
    tbRecStatus('已调起转发：选微信 / QQ 发送即可' +
      (tbRec.wxReady
        ? '，对方能像视频一样点开看；不满意可点「🔁 重录」。'
        : '。注意当前是 .' + tbRec.ext + ' 格式，微信里可能只能当文件；想让好友直接点开，请用 iPhone Safari 或新版安卓 Chrome 重录。'),
      tbRec.wxReady ? 'ok' : 'warn');
  }catch(e){
    if (e && e.name === 'AbortError'){ tbRecStatus('已取消转发，可再次转发或点「🔁 重录」。', ''); return; }
    tbRecStatus('转发未完成，可点上面的「💾 保存到相册 / 本机」再手动发送。', 'warn');
  }
}

/* iOS Safari：blob: URL 的 <a download> 存不进相册。旧逻辑在这里只内嵌了一个
   播放器、没有任何保存动作，所以点「保存到相册」看起来毫无反应。
   改为调起系统分享面板（与「转发到微信」同一条已验证可用的通道），
   面板里的「存储到视频 / 保存视频」即可把视频存进相册。
   navigator.share 必须在点击手势的同步栈内，前面不能有任何 await。 */
async function tbRecSaveAlbum(){
  if (!tbRec.blob) return;
  const name = tbRecFilename();
  const type = tbRecPlainType();
  let file = null, can = false;
  try{ file = new File([tbRec.blob], name, { type: type }); }catch(e){}
  try{ can = !!(file && tbRecShareSupported() && navigator.canShare({ files: [file] })); }catch(e){ can = false; }
  if (!can){ tbRecFallbackIOS(name); return; }
  tbRecStatus('正在打开系统面板：选「存储到视频 / 保存视频」即可存入相册…', '');
  try{
    await navigator.share({ files: [file], title: '我的课文朗读 · ' + tbRec.title });
    tbRecStatus('已打开系统面板：点「存储到视频 / 保存视频」即可存进相册；' +
                '若没有该选项，选「存储到文件」后在「文件」App 里再存相册。', 'ok');
  }catch(e){
    if (e && e.name === 'AbortError'){ tbRecStatus('已取消，可再点一次「💾 保存到相册」。', ''); return; }
    tbRecFallbackIOS(name);
  }
}
function tbRecFallbackIOS(name){
  const url = tbRecEnsureUrl();
  if (!url) return;
  tbRecInline(url, name);
  tbRecStatus('当前 Safari 无法直接调起存相册：请长按下方视频 →「存储到视频」，' +
              '或先「↗ 转发到微信 / QQ」再从微信里保存到相册。', 'warn');
}

/* 备用：保存到本机（不支持系统分享 / 微信内置浏览器 / 桌面浏览器时使用） */
function tbRecDownload(name){
  const url = tbRecEnsureUrl();
  if (!url){ tbRecStatus('文件已失效，请重新录一次。', 'warn'); return; }
  name = name || tbRecFilename();
  if (tbRecIsIOS()){ tbRecSaveAlbum(); return; }
  const a = document.createElement('a');
  a.href = url; a.download = name; a.style.display = 'none';
  document.body.appendChild(a); a.click();
  setTimeout(() => { try{ document.body.removeChild(a); }catch(e){} }, 1500);
  tbRecStatus('已下载完整文件：' + name + '（到「下载」目录查看；别用播放器右上角的「分享 / 存储」另存，那样容易只剩开头）', 'ok');
}

async function tbRecSave(what){
  if (!tbRec.blob) return;
  if (what === 'page'){ await tbRecSavePage(); return; }
  /* 备用入口只做保存到本机；「转发」统一走 tbRecShare */
  tbRecDownload();
}

/* iOS Safari 在锁屏 / 下拉通知 / 切 App 时会把页面置为 hidden。
   旧逻辑在这里直接 stop()，会把还在继续的朗读一刀切成十几秒的「完成品」，
   用户完全不知情——正是「读两分多钟只剩 18 秒」的成因之一。
   现在只做标记，绝不主动中断；完成态会提示先试听确认。 */
if (typeof document !== 'undefined'){
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && (tbRec.state === 'recording' || tbRec.state === 'paused'))
      tbRec.wentBackground = true;
  });
  window.addEventListener('pagehide', () => {
    if (tbRec.state === 'recording' || tbRec.state === 'paused') tbRec.wentBackground = true;
  });
}
if (typeof window !== 'undefined') window.tbRecStop = tbRecStop;


/* ---------- 初始化 ---------- */
function initTextbook(){
  if (tbCur === null){
    /* 默认选第一门已录入的课；没有则选第一课 */
    tbCur = 'tb-l5';
    for (const id of Object.keys(TB_LESSONS)){
      if (!TB_LESSONS[id].empty){ tbCur = id; break; }
    }
  }
  renderTbLessons();
  renderTbDetail();

  /* 播放按钮（事件委托） */
  $('#tb-detail').addEventListener('click', e => {
    const wp = e.target.closest('.tb-wplay');
    if (wp){ playWordAudio(wp.dataset.a, wp.dataset.t, wp, wp.dataset.slow === '1'); return; }
    const lp = e.target.closest('.tb-lplay');
    if (lp){
      if (typeof stopWordAudio === 'function') stopWordAudio();
      stopTbSeq();
      const name = lp.dataset.a;
      const a = new Audio(tbAudioPath(name));
      lp.classList.add('playing');
      const done = () => { lp.classList.remove('playing'); };
      a.onended = done; a.onerror = done;
      a.play().catch(done);
      return;
    }
    const seq = e.target.closest('.tb-seq');
    if (seq){
      if (seq.classList.contains('playing')) stopTbSeq();
      else playTbSequence();
    }
  });
}

if (typeof window !== 'undefined'){
  window.__initTextbook = initTextbook;
  window.__stopTbSeq = stopTbSeq;
}
