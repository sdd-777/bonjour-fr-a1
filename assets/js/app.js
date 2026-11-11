/* =========================================================
   Bonjour ! 法语启蒙小屋 — 交互逻辑
   功能：造句练习 / 句子结构分析 / 法语朗读（原速·慢速·逐词）
        麦克风跟读 + 语音识别自动打分 / 本地进度
   依赖：assets/js/data.js 中的 ROLES 与 SENTENCES
   ========================================================= */
'use strict';

/* ---------- 小工具 ---------- */
const $  = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const sleep = ms => new Promise(r => setTimeout(r, ms));

function esc(s){
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function shuffle(arr){
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* 把单词按法语正字法拼回句子（与 data.js 中的 fr 一致） */
function joinWords(chips){
  let s = '';
  chips.forEach((w, i) => {
    if (i === 0){ s = w; return; }
    if (s.endsWith("'") || w.startsWith('-')) s += w;
    else s += ' ' + w;
  });
  return s;
}
/* 每个单词在句子中的起始下标（用于朗读高亮定位） */
function wordOffsets(chips){
  const offs = [];
  let s = '';
  chips.forEach((w, i) => {
    offs.push(s.length);
    if (i === 0) s += w;
    else if (s.endsWith("'") || w.startsWith('-')) s += w;
    else s += ' ' + w;
  });
  return { text: s, offs };
}

/* ---------- 本地进度 ---------- */
const PROGRESS_KEY = 'bonjour-fr-a1-progress-v1';
const state = {
  progress: { built: [], readStars: {} },
  build: { idx: 0, placed: [], bank: null, solved: false },
  read:  { idx: 0 }
};

function loadProgress(){
  try{
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (raw){
      const p = JSON.parse(raw);
      return {
        built: Array.isArray(p.built) ? p.built : [],
        readStars: (p.readStars && typeof p.readStars === 'object') ? p.readStars : {}
      };
    }
  }catch(e){}
  return { built: [], readStars: {} };
}
function saveProgress(){
  try{ localStorage.setItem(PROGRESS_KEY, JSON.stringify(state.progress)); }catch(e){}
}
state.progress = loadProgress();

function sentenceStars(s){
  return (state.progress.built.includes(s.id) ? 1 : 0) + (state.progress.readStars[s.id] || 0);
}
function totalStars(){
  return state.progress.built.length +
    Object.values(state.progress.readStars).reduce((a, b) => a + b, 0);
}

/* ---------- 视图切换 ---------- */
/* ---------- 脚本加载失败自愈（CDN 抖动时重试一次） ---------- */
function reloadScript(el, attempt){
  if (!el) return;
  attempt = attempt || 1;
  if (attempt > 3) return;
  const src = el.getAttribute('src');
  if (!src) return;
  const s = document.createElement('script');
  s.src = src + '?retry=' + Date.now();
  s.onload = function(){
    /* 仅在模块尚未初始化时补齐，避免重复渲染 */
    try{
      if (typeof initVideos === 'function' && $('#video-tabs') && !$('#video-tabs .wtab')) initVideos();
      if (typeof initGames === 'function' && $('#game-tabs') && !$('#game-tabs .wtab')) initGames();
      if (typeof initTextbook === 'function' && $('#tb-lessons') && !$('#tb-lessons .tb-unit')) initTextbook();
    }catch(e){}
  };
  s.onerror = function(){ setTimeout(function(){ reloadScript(el, attempt + 1); }, 800); };
  document.head.appendChild(s);
}

function showView(name){
  $$('.view').forEach(v => { v.hidden = (v.id !== 'view-' + name); });
  $$('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === name));
  stopSpeak();
  abortShadow();
  if (typeof stopVideoPlayers === 'function') stopVideoPlayers();
  if (typeof stopGames === 'function') stopGames();
  if (typeof stopTbSeq === 'function') stopTbSeq();
  if (typeof tbRecStop === 'function') tbRecStop();
  if (name === 'games' && typeof ensureGames === 'function') ensureGames();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 首页 ---------- */
function renderHome(){
  const total = SENTENCES.length;
  const built = state.progress.built.length;
  $('#stat-stars').textContent = totalStars();
  $('#stat-built').textContent = built + ' / ' + total;
  $('#stat-total').textContent = total * 3;
  const pct = Math.round(built / total * 100);
  $('#progress-fill').style.width = pct + '%';
  $('#progress-pct').textContent = pct + '%';
}

/* ---------- 句子选择器 ---------- */
function renderPickers(){
  ['build', 'read'].forEach(kind => {
    const box = $('#picker-' + kind);
    const scrollLeft = box.scrollLeft;
    box.innerHTML = '';
    SENTENCES.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'pick-chip' + ((kind === 'build' ? state.build.idx : state.read.idx) === i ? ' active' : '');
      const st = sentenceStars(s);
      b.innerHTML =
        '<span class="pick-top"><span class="pick-emoji">' + s.emoji + '</span>' +
        '<span class="pick-zh">' + esc(s.zh) + '</span></span>' +
        '<span class="pick-cat">' + (i + 1) + ' · ' + esc(s.cat) + '</span>' +
        '<span class="pick-star">' + (st ? '⭐'.repeat(st) : '&nbsp;') + '</span>';
      b.onclick = () => { (kind === 'build' ? openBuild : openRead)(i); };
      box.appendChild(b);
    });
    box.scrollLeft = scrollLeft;
  });
}

/* =========================================================
   造句模块
   ========================================================= */
function openBuild(i){
  state.build = {
    idx: i,
    placed: [],
    bank: shuffle(SENTENCES[i].words.map((_, k) => k)),
    solved: false
  };
  $('#analysis-panel').hidden = true;
  $('#record-panel').hidden = true;
  renderBuild();
  showView('build');
  renderPickers();
}

function renderBuild(){
  const s = SENTENCES[state.build.idx];
  $('#build-cat').textContent = s.emoji + ' ' + s.cat;
  $('#build-zh').innerHTML = '请用法语说出：<b>' + esc(s.zh) + '</b>';

  /* 单词银行（打乱顺序，已放入答题区的隐藏） */
  const bank = $('#build-bank');
  bank.innerHTML = '';
  let bankCount = 0;
  state.build.bank.forEach(wi => {
    if (state.build.placed.includes(wi)) return;
    bankCount++;
    const w = s.words[wi];
    const chip = document.createElement('button');
    chip.className = 'word-chip';
    chip.dataset.wi = wi;
    chip.style.setProperty('--rc', ROLES[w.r].color);
    chip.innerHTML = '<span>' + esc(w.t) + '</span><span class="r">' + ROLES[w.r].label + '</span>';
    chip.onclick = () => placeWord(wi);
    bank.appendChild(chip);
  });
  if (!bankCount){
    bank.innerHTML = '<span class="bank-empty">单词都放上来啦，点「检查一下」看看对不对 👆</span>';
  }

  /* 答题区 */
  const ans = $('#build-answer');
  ans.innerHTML = '';
  ans.classList.remove('ok');
  if (!state.build.placed.length){
    ans.innerHTML = '<span class="ans-hint">👇 点击下面的单词，把它们排成一句法语</span>';
  }
  state.build.placed.forEach(wi => {
    const w = s.words[wi];
    const chip = document.createElement('button');
    chip.className = 'ans-chip';
    chip.style.setProperty('--rc', ROLES[w.r].color);
    chip.innerHTML = '<span>' + esc(w.t) + '</span><span class="r">' + ROLES[w.r].label + '</span>';
    chip.onclick = () => removeWord(wi);
    ans.appendChild(chip);
  });

  $('#btn-check').disabled = state.build.placed.length !== s.words.length || state.build.solved;
  $('#btn-check').textContent = state.build.solved ? '🎉 已完成 +1 ⭐' : '✅ 检查一下';
}

function placeWord(wi){
  if (state.build.solved) return;
  state.build.placed.push(wi);
  renderBuild();
}
function removeWord(wi){
  if (state.build.solved) return;
  state.build.placed = state.build.placed.filter(x => x !== wi);
  renderBuild();
}

function checkBuild(){
  const s = SENTENCES[state.build.idx];
  const ok = state.build.placed.every((wi, i) => wi === i);
  if (ok){
    state.build.solved = true;
    if (!state.progress.built.includes(s.id)){
      state.progress.built.push(s.id);
      saveProgress();
    }
    $('#build-answer').classList.add('ok');
    $('#btn-check').disabled = true;
    $('#btn-check').textContent = '🎉 已完成 +1 ⭐';
    confetti();
    chime(true);
    renderAnalysis(s);
    $('#analysis-panel').hidden = false;
    if (!$('#record-panel').hidden) renderBuildRecord();
    toast('太棒了！句子排对啦 🎉 +1 ⭐');
    renderHome();
    renderPickers();
  } else {
    chime(false);
    const ans = $('#build-answer');
    ans.classList.remove('shake');
    void ans.offsetWidth; /* 重置动画 */
    ans.classList.add('shake');
    toast('顺序还不对哦，再试试～（小提示：法语基本句型是 主语 + 谓语 + 宾语）');
  }
}

function hintBuild(){
  const s = SENTENCES[state.build.idx];
  const need = state.build.placed.length;
  if (need >= s.words.length) return;
  if (state.build.placed.every((wi, i) => wi === i)){
    state.build.placed.push(need);
    renderBuild();
    toast('已帮你放入第 ' + (need + 1) + ' 个单词：' + s.words[need].t);
  } else {
    toast('结构提示：' + s.structure);
  }
}

/* =========================================================
   练习记录（localStorage 存档，刷新/换句不丢失）
   ========================================================= */
function renderBuildRecord(){
  const built = state.progress.built;
  const stars = state.progress.readStars;
  $('#record-stat').innerHTML = '已练对 <b>' + built.length + '</b> / ' + SENTENCES.length +
    ' 句 · 累计 ⭐ ' + totalStars() + ' 颗';
  const list = $('#record-list');
  if (!built.length){
    list.innerHTML = '<p class="record-empty">还没有记录～先去造对第一句吧！</p>';
    return;
  }
  list.innerHTML = SENTENCES.filter(s => built.includes(s.id)).map(s =>
    '<div class="record-item">' +
      '<span class="ri-cat">' + s.emoji + ' ' + esc(s.cat) + '</span>' +
      '<span class="ri-fr">' + esc(s.words.map(w => w.t).join(' ')) + '</span>' +
      '<span class="ri-zh">' + esc(s.zh) + '</span>' +
      '<span class="ri-star">' + (stars[s.id] ? '⭐'.repeat(stars[s.id]) : '🧩 造对') + '</span>' +
    '</div>').join('');
}

function toggleBuildRecord(force){
  const panel = $('#record-panel');
  const show = force !== undefined ? force : panel.hidden;
  panel.hidden = !show;
  if (show) renderBuildRecord();
}

function renderAnalysis(s){
  const k = $('#analysis-karaoke');
  k.innerHTML = '';
  s.words.forEach(w => {
    const el = document.createElement('span');
    el.className = 'kw';
    el.style.setProperty('--rc', ROLES[w.r].color);
    el.innerHTML = esc(w.t) + '<i>' + ROLES[w.r].label + '</i>';
    k.appendChild(el);
  });
  $('#analysis-structure').textContent = '🧩 句子结构：' + s.structure;

  const t = $('#analysis-table');
  t.innerHTML =
    '<thead><tr><th>单词</th><th>句子成分</th><th>意思</th></tr></thead><tbody>' +
    s.words.map(w =>
      '<tr><td class="td-word">' + esc(w.t) + '</td>' +
      '<td><span class="role-dot" style="--rc:' + ROLES[w.r].color + '"></span>' + ROLES[w.r].label + '</td>' +
      '<td>' + esc(w.zh) + '</td></tr>'
    ).join('') + '</tbody>';
  $('#analysis-note').textContent = '💡 ' + s.note;
}

function nextBuild(step){
  openBuild((state.build.idx + step + SENTENCES.length) % SENTENCES.length);
}

/* =========================================================
   朗读模块
   ========================================================= */
let voices = [];
function refreshVoices(){
  try{ voices = window.speechSynthesis ? speechSynthesis.getVoices() : []; }catch(e){ voices = []; }
}
/* iOS Safari 兼容：部分版本（尤其 iOS 12~15）的 SpeechSynthesis 不是 EventTarget，
   没有 addEventListener；此处若无保护会抛 TypeError，中断整个 app.js 顶层执行，
   导致 DOMContentLoaded 的 init() 永不注册、所有导航按钮失效（表现为「模块打不开」）。*/
if (window.speechSynthesis){
  refreshVoices();
  try{
    if (typeof speechSynthesis.addEventListener === 'function'){
      speechSynthesis.addEventListener('voiceschanged', refreshVoices);
    } else if ('onvoiceschanged' in speechSynthesis){
      speechSynthesis.onvoiceschanged = refreshVoices;   /* 旧版 Safari 只支持属性回调 */
    }
  }catch(e){}
}
let frVoiceWarned = false;
let noSynthWarned = false;
function frVoice(){
  return voices.find(v => /^fr/i.test(v.lang)) ||
         voices.find(v => /fr/i.test(v.lang)) || null;
}

let speakToken = 0;
function stopSpeak(){
  speakToken++;
  mediaToken++;
  /* 复用元素停止时摘掉回调，避免 pause() 后残留的 onended 继续推进连播 */
  if (mediaAudio){
    try{
      mediaAudio.pause();
      mediaAudio.onended = null;
      mediaAudio.onerror = null;
    }catch(e){}
    mediaAudio = null;
  }
  if (window.speechSynthesis){
    try{ speechSynthesis.cancel(); }catch(e){}
  }
  clearHighlight();
}

function speakText(text, rate, onBoundary, onEnd){
  if (!window.speechSynthesis){
    if (!noSynthWarned){
      noSynthWarned = true;
      toast('当前浏览器不支持语音合成，请换 Chrome / Edge 试试');
    }
    if (onEnd) onEnd();
    return;
  }
  stopSpeak();
  const token = ++speakToken;
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'fr-FR';
  u.rate = rate;
  u.pitch = 1.05;
  const v = frVoice();
  if (v) u.voice = v;
  else if (!frVoiceWarned){
    frVoiceWarned = true;
    toast('未检测到法语语音包，将使用默认语音（可能带口音）');
  }
  u.onboundary = e => { if (token === speakToken && onBoundary) onBoundary(e.charIndex || 0); };
  u.onend = () => { if (token === speakToken && onEnd) onEnd(); };
  u.onerror = u.onend;
  speechSynthesis.speak(u);
}

/* =========================================================
   预录法语音频（edge-tts 法语女声 · 标准法音）
   - 整句/逐词优先播放预录 MP3，任何设备都有声音
   - 音频缺失或加载失败时，自动回退浏览器语音合成
   ========================================================= */
const AUDIO_BASE = 'assets/audio';
let mediaAudio = null;   /* 当前播放的 <audio> 元素 */
let mediaToken = 0;      /* 音频播放令牌（防竞态） */

/* 连播复用 <audio> 时只改 a.src，不会经过打包脚本对 new Audio 的包装，
   离线单文件版必须自己查内联音频映射表。 */
function mediaResolveAudio(rel){
  const M = (typeof window !== 'undefined') ? window.__AUDIO_DATA__ : null;
  if (M){
    const key = String(rel).replace(/^\.?\/?assets\/audio\//, '');
    if (M[key]) return M[key];
  }
  return rel;
}

function sentenceAudioUrl(s){ return AUDIO_BASE + '/sentences/' + s.id + '.mp3'; }
/* 逐词音频：按词形 slug 命名（sw-{slug}.mp3），同一个词复用同一份预录法音。
   slug = 去掉重音/标点后的小写词形，例如 "Bonjour," -> "bonjour" -> sw-bonjour.mp3 */
function wordSlug(w){
  return String(w == null ? '' : w)
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9'-]/g, '')
    .replace(/^[-']+|[-']+$/g, '');
}
function wordAudioUrl(s, i){
  const w = (s.words && s.words[i]) ? s.words[i].t : '';
  const slug = wordSlug(w);
  return slug ? (AUDIO_BASE + '/words/sw-' + slug + '.mp3') : '';
}
function cleanWordForTTS(t){
  let w = String(t).replace(/^[-\s]+/, '').replace(/[?!.,;:]+$/, '').trim();
  if (w === "J'") w = 'Je';   /* 单独的 J' 读作 Je */
  return w;
}
/* 安全播放：同步异常 / 自动播放被拒 / 文件缺失都走回退 */
function safePlay(a, fallback){
  try{
    const p = a.play();
    if (p && p.catch) p.catch(fallback);
  }catch(e){ fallback(); }
}

function openRead(i){
  state.read.idx = i;
  renderRead();
  showView('read');
  renderPickers();
}

function renderRead(){
  const s = SENTENCES[state.read.idx];
  $('#read-cat').textContent = s.emoji + ' ' + s.cat;
  $('#read-zh').textContent = s.zh;

  const box = $('#read-sentence');
  box.innerHTML = '';
  s.words.forEach((w, wi) => {
    const el = document.createElement('span');
    el.className = 'rw';
    el.id = 'rw-' + wi;
    el.style.setProperty('--rc', ROLES[w.r].color);
    el.innerHTML = esc(w.t) + '<i>' + ROLES[w.r].label + '</i>';
    box.appendChild(el);
  });

  $('#read-structure').textContent = '🧩 结构：' + s.structure;
  $('#read-note').textContent = '💡 ' + s.note;
  $('#score-panel').hidden = true;
  $('#mic-panel').hidden = true;
}

function highlightWord(i){
  $$('.rw').forEach(el => el.classList.remove('active'));
  const el = $('#rw-' + i);
  if (el) el.classList.add('active');
}
function clearHighlight(){
  $$('.rw').forEach(el => el.classList.remove('active'));
}

/* 整句朗读（优先预录法音，回退浏览器合成；按词长比例逐词高亮） */
function speakSentence(rate){
  const s = SENTENCES[state.read.idx];
  stopSpeak();
  const { text, offs } = wordOffsets(s.words.map(w => w.t));
  const token = ++mediaToken;
  let fellBack = false;
  const fallback = () => {
    if (fellBack || token !== mediaToken) return;
    fellBack = true;
    mediaAudio = null;
    speakText(text, rate, charIndex => {
      let idx = 0;
      for (let i = 0; i < offs.length; i++) if (charIndex >= offs[i]) idx = i;
      highlightWord(idx);
    }, clearHighlight);
  };
  const a = new Audio(sentenceAudioUrl(s));
  mediaAudio = a;
  try{ a.preservesPitch = true; }catch(e){}
  a.playbackRate = rate <= 0.6 ? 0.55 : 1;   /* 慢速 0.55 倍，不变调 */
  a.onerror = fallback;
  a.onloadedmetadata = () => {
    if (token !== mediaToken || !isFinite(a.duration) || a.duration <= 0) return;
    const lens = s.words.map(w => w.t.length);
    const total = lens.reduce((x, y) => x + y, 0) || 1;
    const starts = []; let acc = 0;
    lens.forEach(n => { starts.push(acc / total); acc += n; });
    a.ontimeupdate = () => {
      if (token !== mediaToken) return;
      const p = a.currentTime / a.duration;
      let idx = 0;
      for (let i = 0; i < starts.length; i++) if (p >= starts[i]) idx = i;
      highlightWord(idx);
    };
  };
  a.onended = () => { if (token === mediaToken){ clearHighlight(); mediaAudio = null; } };
  safePlay(a, fallback);
}

/* 逐词朗读（优先预录音频，回退浏览器合成）
   与电话报读同理：全程复用同一个 <audio>，第一次 play() 落在用户点击的同步栈内，
   否则 iOS / 微信等 WebView 只允许播第一个词，后面异步新建的元素全被拒绝。 */
function speakWordByWord(){
  const s = SENTENCES[state.read.idx];
  stopSpeak();
  const token = mediaToken;
  const a = new Audio();
  a.preload = 'auto';
  try{ a.preservesPitch = true; }catch(e){}
  a.playbackRate = 0.8;
  mediaAudio = a;
  let i = 0;
  let consumed = false;    /* 每词只推进一次，防 onended / onerror / catch 重复调度 */
  let advancing = false;
  let timer = null;

  const advance = (delay) => {
    if (token !== mediaToken || advancing) return;
    advancing = true;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { advancing = false; step(); }, delay);
  };
  const advanceTo = (delay) => {
    if (consumed) return;
    consumed = true;
    i += 1;
    advance(delay);
  };
  /* 缺音频或播放被拒时用法语合成音兜底，并加超时保护防卡死 */
  const ttsFallback = () => {
    if (consumed || token !== mediaToken) return;
    consumed = true;
    const clean = cleanWordForTTS(s.words[i].t);
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      i += 1;
      if (token === mediaToken) advance(200);
    };
    if (window.speechSynthesis){
      const u = new SpeechSynthesisUtterance(clean);
      u.lang = 'fr-FR'; u.rate = 0.7;
      const v = frVoice(); if (v) u.voice = v;
      u.onend = go; u.onerror = go;
      try{ speechSynthesis.speak(u); }catch(e){ go(); }
    } else go();
    setTimeout(go, 3000);
  };
  const finish = () => {
    clearHighlight();
    try{ a.onended = null; a.onerror = null; }catch(e){}
    if (mediaAudio === a) mediaAudio = null;
  };
  const step = () => {
    if (token !== mediaToken){ clearHighlight(); return; }
    if (i >= s.words.length){ finish(); return; }
    consumed = false;
    highlightWord(i);
    const url = wordAudioUrl(s, i);
    if (!url){ i += 1; advance(120); return; }   /* 纯标点 token 无音频，直接跳过 */
    a.src = mediaResolveAudio(url);
    try{ a.currentTime = 0; a.load(); }catch(e){}
    const attempt = (retry) => {
      let p;
      try{ p = a.play(); }
      catch(e){
        if (retry < 1) setTimeout(() => { if (token === mediaToken && !consumed) attempt(retry + 1); }, 200);
        else ttsFallback();
        return;
      }
      if (p && typeof p.catch === 'function'){
        p.catch(() => {
          if (token !== mediaToken || consumed) return;
          if (retry < 1) setTimeout(() => { if (token === mediaToken && !consumed) attempt(retry + 1); }, 200);
          else ttsFallback();
        });
      }
    };
    attempt(0);
  };
  a.onended = () => advanceTo(200);
  a.onerror = () => { if (!consumed) ttsFallback(); };
  step();   /* 同步执行第一次 play()，吃到用户点击手势 */
}

function nextRead(step){
  openRead((state.read.idx + step + SENTENCES.length) % SENTENCES.length);
}

/* =========================================================
   跟读挑战（录音 + 语音识别打分）
   ========================================================= */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
/* 语音识别只在桌面 Chrome / Edge 用作「加分项」。
   iOS Safari 上它会与 getUserMedia 抢麦克风（WebKit bug 321436：识别器一启动，
   录音轨就被静音），国内移动网络也常连不上识别服务；移动端一律走
   「纯录音 + 本地声学对比」，这样录音一定录得到声音、一定停得下来。 */
const SHADOW_UA = navigator.userAgent || '';
const SHADOW_MOBILE = /iP(hone|ad|od)|Android|Mobile|Silk|Kindle|HarmonyOS/i.test(SHADOW_UA);
const SHADOW_DESKTOP_SAFARI = /Safari/i.test(SHADOW_UA) && !/Chrome|Chromium|Edg/i.test(SHADOW_UA);
const SHADOW_SR = !!SR && !SHADOW_MOBILE && !SHADOW_DESKTOP_SAFARI;
const shadow = { recog: null, recorder: null, chunks: [], stream: null, timer: null,
                 finalTranscript: '', audioUrl: null, blob: null, active: false, session: 0,
                 srDead: false, srRestarts: 0, startedAt: 0, wallSeconds: 0 };
let shadowFinishing = false;
let shadowPlayAudio = null;   /* 复用同一个 <audio>，避开移动端自动播放策略 */

async function startShadow(){
  if (shadow.active) return;
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
    toast('当前浏览器不支持录音，请换 Chrome / Edge / Safari 试试');
    return;
  }
  /* 别把示范原音一起录进去 */
  if (typeof stopSpeak === 'function') stopSpeak();
  $('#score-panel').hidden = true;
  $('#mic-panel').hidden = false;
  $('#mic-status').textContent = '正在请求麦克风权限…';
  $('#btn-mic').disabled = true;
  $('#self-rate').hidden = true;

  try{
    shadow.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  }catch(e){
    $('#mic-panel').hidden = true;
    $('#btn-mic').disabled = false;
    toast('需要麦克风权限才能跟读哦，请在弹窗里点「允许」');
    return;
  }

  shadow.active = true;
  shadow.session++;
  shadow.finalTranscript = '';
  if (shadow.audioUrl){ try{ URL.revokeObjectURL(shadow.audioUrl); }catch(e){} }
  shadow.audioUrl = null;
  shadow.blob = null;
  shadow.chunks = [];
  shadow.srDead = false;
  shadow.srRestarts = 0;
  shadow.startedAt = Date.now();
  shadow.wallSeconds = 0;

  /* 录音：优先 audio/mp4（iOS Safari 唯一稳定支持的格式），否则 webm/opus */
  try{
    let mime = '';
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported){
      const cands = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus'];
      for (let i = 0; i < cands.length; i++)
        if (MediaRecorder.isTypeSupported(cands[i])){ mime = cands[i]; break; }
    }
    const opts = mime ? { mimeType: mime } : undefined;
    shadow.recorder = new MediaRecorder(shadow.stream, opts);
    shadow.recorder.ondataavailable = e => { if (e.data && e.data.size) shadow.chunks.push(e.data); };
    shadow.recorder.onerror = () => {
      if (shadow.active) $('#mic-status').textContent = '录音出了点问题，可点「读完了」结束';
    };
    shadow.recorder.onstop = () => {
      try{
        const parts = shadow.chunks.filter(c => c && c.size);
        if (!parts.length) return;
        const type = (parts[0].type || shadow.recorder.mimeType || mime || 'audio/webm').split(';')[0];
        const blob = new Blob(parts, { type: type });
        shadow.blob = blob;
        shadow.audioUrl = URL.createObjectURL(blob);
      }catch(e){}
    };
    shadow.recorder.start(500);   /* 分片产出，避免 iOS 一次性给不完整的 blob */
  }catch(e){ shadow.recorder = null; }

  /* 语音识别只是可选加分项：它报错、自己结束，都绝不结束录音 */
  if (SHADOW_SR){
    try{
      shadow.recog = new SR();
      shadow.recog.lang = 'fr-FR';
      shadow.recog.interimResults = true;
      shadow.recog.maxAlternatives = 3;
      shadow.recog.onresult = e => {
        let interim = '';
        for (let i = e.resultIndex; i < e.results.length; i++){
          const r = e.results[i];
          if (r.isFinal) shadow.finalTranscript += r[0].transcript + ' ';
          else interim += r[0].transcript;
        }
        if (shadow.active)
          $('#mic-status').textContent = '🔴 录音中 · 我听到：' + ((interim || shadow.finalTranscript).trim() || '…');
      };
      shadow.recog.onerror = e => {
        shadow.srDead = true;      /* 识别挂了就彻底放弃它，录音照常继续 */
        if (shadow.active)
          $('#mic-status').textContent = '🔴 录音中…（自动识别不可用，会用声音对比打分）读完点「读完了」';
      };
      shadow.recog.onend = () => {
        /* 关键：识别结束 ≠ 朗读结束。录音仍在继续就尝试续一次，绝不 stop 录音 */
        if (!shadow.active || shadow.srDead) return;
        if (shadow.srRestarts < 1){
          shadow.srRestarts++;
          try{ shadow.recog.start(); return; }catch(e){}
        }
        shadow.srDead = true;
        if (shadow.active)
          $('#mic-status').textContent = '🔴 录音中…读完点「读完了」（会用声音对比打分）';
      };
      shadow.recog.start();
      $('#mic-status').textContent = '🔴 我在听，请大声朗读…读完点「读完了」';
    }catch(e){
      shadow.recog = null;
      $('#mic-status').textContent = '🔴 录音中…读完点「读完了」（会用声音对比打分）';
    }
  } else {
    $('#mic-status').textContent = '🔴 录音中…读完点「读完了」（会用你的声音和原音对比打分）';
  }

  clearTimeout(shadow.timer);
  shadow.timer = setTimeout(() => stopShadow(), 15000); /* 最长 15 秒，留足朗读时间 */
}

function stopShadow(){
  if (!shadow.active) return;
  clearTimeout(shadow.timer);
  /* 先摘掉识别回调，避免 stop()/abort() 反过来触发意外收尾 */
  if (shadow.recog){
    try{ shadow.recog.onend = null; shadow.recog.onerror = null; shadow.recog.stop(); }catch(e){}
    shadow.recog = null;
  }
  if (shadow.recorder && shadow.recorder.state !== 'inactive'){
    try{ shadow.recorder.stop(); }catch(e){}
  }
  /* 无论识别器是什么状态，都由我们主动收尾，彻底不依赖 recog.onend */
  finishShadow();
}

/* 用户切走页面 / 切换模块时静默中止，不出分 */
function abortShadow(){
  if (!shadow.active) return;
  clearTimeout(shadow.timer);
  shadow.session++; /* 使挂起的打分回调失效 */
  shadowFinishing = true;
  if (shadow.recog){
    try{ shadow.recog.onend = null; shadow.recog.onerror = null; shadow.recog.abort(); }catch(e){}
    shadow.recog = null;
  }
  if (shadow.recorder && shadow.recorder.state !== 'inactive'){
    try{ shadow.recorder.onstop = null; shadow.recorder.stop(); }catch(e){}
  }
  if (shadow.stream){ try{ shadow.stream.getTracks().forEach(t => t.stop()); }catch(e){} }
  shadow.active = false;
  shadowFinishing = false;
  $('#mic-panel').hidden = true;
  $('#btn-mic').disabled = false;
}

function finishShadow(){
  if (shadowFinishing || !shadow.active) return;
  shadowFinishing = true;
  shadow.active = false;
  $('#btn-mic').disabled = false;
  $('#mic-status').textContent = '🤔 让我看看说得怎么样…';
  clearTimeout(shadow.timer);
  shadow.wallSeconds = shadow.startedAt ? (Date.now() - shadow.startedAt) / 1000 : 0;
  if (shadow.recog){
    try{ shadow.recog.onend = null; shadow.recog.onerror = null; shadow.recog.abort(); }catch(e){}
    shadow.recog = null;
  }
  if (shadow.recorder && shadow.recorder.state !== 'inactive'){ try{ shadow.recorder.stop(); }catch(e){} }
  if (shadow.stream){ try{ shadow.stream.getTracks().forEach(t => t.stop()); }catch(e){} }

  const s = SENTENCES[state.read.idx];
  const heard = shadow.finalTranscript.trim();
  const mySession = shadow.session;

  /* 等 MediaRecorder.onstop 把 blob 交出来（iOS 上可能晚于 220ms），最多等 1.2 秒 */
  const waitBlob = (n) => {
    if (shadow.session !== mySession){ shadowFinishing = false; return; }
    if (!shadow.blob && n > 0){ setTimeout(() => waitBlob(n - 1), 120); return; }
    renderShadowResult(s, heard, mySession);
  };
  setTimeout(() => waitBlob(10), 220);
}

async function renderShadowResult(s, heard, mySession){
  try{
    $('#mic-panel').hidden = true;
    if (shadow.session !== mySession) return;

    /* 没录到有效声音：明确告知，绝不显示「录音完成！」误导用户 */
    const noSound = !shadow.blob || shadow.blob.size < 800 || shadow.wallSeconds < 0.8;
    if (noSound && !heard){
      renderShadowNoSound();
      return;
    }

    if (!heard){
      /* 没有识别文本：改用声学对比评分（不依赖联网的语音识别服务） */
      const res = await analyzeShadow(s, shadow.blob);
      if (shadow.session !== mySession) return;
      if (res) renderAcousticScore(s, res);
      else showSelfRate(true);
      return;
    }
    renderScore(s, scoreShadow(s, heard), heard);
  } finally {
    shadowFinishing = false;
  }
}

/* 录音为空 / 太短：给出可操作的原因，而不是「录音完成！」 */
function renderShadowNoSound(){
  $('#score-panel').hidden = false;
  setRing(0, 'var(--lav)');
  $('#score-num').textContent = '—';
  $('#score-stars').textContent = '☆☆☆';
  $('#score-msg').textContent = '没录到声音，请再试一次';
  $('#score-heard').textContent = '本次只有 ' + (shadow.wallSeconds || 0).toFixed(1) + ' 秒录音' +
    (shadow.wallSeconds >= 0.8 ? '，且几乎听不到声音' : '，太短了');
  $('#diff-row').innerHTML = '';
  $('#btn-play-rec').disabled = !shadow.audioUrl;
  $('#self-rate').hidden = true;
  toast('没录到声音：请允许麦克风、别静音，开口读完整句后再点「读完了」');
}

/* ---------- 评分算法 ---------- */
function deAccent(str){
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
function normWord(w){
  return deAccent(String(w).toLowerCase().replace(/[^a-zàâäçéèêëîïôöùûüÿœæ'-]/gi, ''));
}
function lev(a, b){
  const m = a.length, n = b.length;
  const d = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++){
    for (let j = 1; j <= n; j++){
      d[i][j] = Math.min(
        d[i-1][j] + 1,
        d[i][j-1] + 1,
        d[i-1][j-1] + (a[i-1] === b[j-1] ? 0 : 1)
      );
    }
  }
  return d[m][n];
}
function wordOK(a, b){
  a = normWord(a); b = normWord(b);
  if (!a || !b) return false;
  if (a === b) return true;
  const d = lev(a, b);
  return d <= (Math.max(a.length, b.length) > 5 ? 2 : 1);
}
function scoreShadow(s, heard){
  const target = s.words.map(w => normWord(w.t.replace(/^[-\s]+/, '')));
  const heardWords = heard.split(/\s+/).map(normWord).filter(Boolean);
  const used = heardWords.map(() => false);
  let hits = 0;
  const marks = target.map(t => {
    for (let i = 0; i < heardWords.length; i++){
      if (!used[i] && wordOK(heardWords[i], t)){
        used[i] = true; hits++;
        return { t: t, hit: true, got: heardWords[i] };
      }
    }
    return { t: t, hit: false, got: '' };
  });
  return { marks: marks, score: Math.round(hits / target.length * 100) };
}

/* =========================================================
   声学对比评分 —— 不依赖语音识别服务也能打分
   把「自己的录音」和「原音」都解码成波形，比较三个维度：
     节奏相似度 = 音量包络的相关系数
     语速适中度 = 有声时长比（太快/太慢都会扣分）
     清晰度     = 有声帧占比（太小声或没出声会被发现）
   ========================================================= */
function shadowEnvelope(buf){
  const ch = buf.getChannelData(0);
  const sr = buf.sampleRate || 44100;
  const frame = Math.max(1, Math.floor(sr * 0.05));   /* 50ms 一帧 */
  const env = [];
  let peak = 0;
  for (let i = 0; i + frame <= ch.length; i += frame){
    let s = 0;
    for (let j = 0; j < frame; j++) s += ch[i + j] * ch[i + j];
    const rms = Math.sqrt(s / frame);
    env.push(rms);
    if (rms > peak) peak = rms;
  }
  if (!env.length || peak <= 0) return null;
  const nenv = env.map(v => v / peak);
  const voiced = nenv.filter(v => v > 0.12).length / nenv.length;
  return { env: nenv, voiced: voiced, dur: buf.duration || (ch.length / sr) };
}
function resampleTo(arr, n){
  if (!arr || !arr.length) return new Array(n).fill(0);
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[Math.min(arr.length - 1, Math.floor(i * arr.length / n))]);
  return out;
}
function pearson(a, b){
  const n = Math.min(a.length, b.length);
  if (!n) return 0;
  let ma = 0, mb = 0;
  for (let i = 0; i < n; i++){ ma += a[i]; mb += b[i]; }
  ma /= n; mb /= n;
  let num = 0, da = 0, db = 0;
  for (let i = 0; i < n; i++){
    const x = a[i] - ma, y = b[i] - mb;
    num += x * y; da += x * x; db += y * y;
  }
  if (da <= 0 || db <= 0) return 0;
  return num / Math.sqrt(da * db);
}
function clamp100(v){ return Math.max(0, Math.min(100, v)); }

/* decodeAudioData 在老 WebKit 上只有回调式、且 iOS 常解不了 MediaRecorder
   产出的 audio/mp4。统一包一层：Promise / 回调两种都兼容，失败返回 null。 */
function shadowDecode(ctx, ab){
  return new Promise(resolve => {
    let done = false;
    const ok = b => { if (!done){ done = true; resolve(b); } };
    const bad = () => ok(null);
    try{
      const p = ctx.decodeAudioData(ab, ok, bad);
      if (p && typeof p.then === 'function') p.then(ok, bad);
    }catch(e){ bad(); }
    setTimeout(() => ok(null), 2500);   /* 卡住不死等 */
  });
}

/* 原音：线上走 fetch；离线单文件（file://）fetch 会失败，改读内联 base64 */
function shadowInlineAudio(s){
  try{
    const M = window.__AUDIO_DATA__;
    const key = 'sentences/' + s.id + '.mp3';
    const u = M && M[key];
    if (!u) return null;
    const bin = atob(String(u).split(',')[1] || '');
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    return arr.buffer;
  }catch(e){ return null; }
}

async function shadowRefArrayBuffer(s){
  /* 离线单文件（file://）下 fetch 不支持该协议，直接读内联音频，
     免得控制台报 "URL scheme file is not supported" */
  if (location.protocol === 'file:') return shadowInlineAudio(s);
  try{
    const r = await fetch(sentenceAudioUrl(s));
    if (r.ok) return await r.arrayBuffer();
  }catch(e){}
  return shadowInlineAudio(s);
}

/* iOS 14 以前的 Blob 没有 arrayBuffer()，用 FileReader 兜底 */
function shadowBlobArrayBuffer(blob){
  if (typeof blob.arrayBuffer === 'function'){
    return blob.arrayBuffer().catch(() => null);
  }
  return new Promise(resolve => {
    try{
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result);
      fr.onerror = () => resolve(null);
      fr.readAsArrayBuffer(blob);
    }catch(e){ resolve(null); }
  });
}

async function analyzeShadow(s, blob){
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC || !blob) return shadowFallbackScore();

  let ctx = null, myBuf = null, refBuf = null;
  try{
    ctx = new AC();
    try{ if (ctx.resume) await ctx.resume(); }catch(e){}
    const myAb = await shadowBlobArrayBuffer(blob);
    if (myAb) myBuf = await shadowDecode(ctx, myAb);
    const refAb = await shadowRefArrayBuffer(s);
    if (refAb) refBuf = await shadowDecode(ctx, refAb);
  }catch(e){}
  try{ if (ctx && ctx.close) ctx.close(); }catch(e){}

  const my = myBuf ? shadowEnvelope(myBuf) : null;
  const ref = refBuf ? shadowEnvelope(refBuf) : null;

  /* 波形解不出来（iOS 的 audio/mp4 常见）：仍按「录到了多久、有没有声音」给分，
     绝不退回「? 分」。 */
  if (!my) return shadowFallbackScore();

  const myDur = my.dur || shadow.wallSeconds || 0;
  const refDur = ref ? ref.dur : 0;
  const myVoiced = Math.max(0.05, myDur * my.voiced);
  const refVoiced = ref ? Math.max(0.2, refDur * ref.voiced) : Math.max(0.8, myVoiced);
  const ratio = myVoiced / refVoiced;

  const rhythm = ref
    ? clamp100(Math.round((pearson(resampleTo(my.env, 48), resampleTo(ref.env, 48)) * 0.5 + 0.5) * 100))
    : 65;
  const speed  = ref ? clamp100(Math.round(100 - Math.abs(Math.log(ratio)) * 58))
                     : clamp100(Math.round(100 - Math.abs(Math.log(myDur / 3)) * 32));
  const clarity = clamp100(Math.round(Math.min(1, my.voiced / Math.max(0.25, ref ? ref.voiced : 0.45)) * 100));
  const score = Math.round(rhythm * 0.45 + speed * 0.35 + clarity * 0.2);

  let tip;
  if (my.voiced < 0.06) tip = '几乎没有听到声音，靠近麦克风、大声一点再试～';
  else if (!ref) tip = '录得很清楚！本设备无法读取原音波形，先点「▶ 播放我的录音」和「🎧 再听原音」自己对比一下～';
  else if (ratio > 1.5) tip = '说得比原音慢不少，试着连贯一点，别一个个词断开～';
  else if (ratio < 0.68) tip = '说得有点快，放慢到原音的速度，把每个音节读清楚～';
  else if (rhythm < 45) tip = '节奏和原音差得比较多，先听两遍原音，再一句一句跟着读～';
  else if (score >= 85) tip = 'Bravo ! 节奏和语调都很接近原音！';
  else if (score >= 65) tip = 'Très bien ! 已经很像了，个别音节再清楚一点～';
  else tip = '继续努力！点 🐢 慢速朗读，再一个词一个词跟着读～';

  return { score: score, rhythm: rhythm, speed: speed, clarity: clarity,
           myDur: myDur, refDur: refDur || myDur, ratio: ratio, tip: tip,
           partial: !ref };
}

/* 连录音波形都解不出时（iOS Safari 的 audio/mp4 + 旧 decodeAudioData）：
   依据录音时长和音量给出基础分，并如实说明「无法自动对比」 */
function shadowFallbackScore(){
  const dur = shadow.wallSeconds || 0;
  const size = shadow.blob ? shadow.blob.size : 0;
  const enough = dur >= 1.2 && size >= 3000;
  const score = enough ? 70 : 45;
  return {
    score: score, rhythm: score, speed: score, clarity: score,
    myDur: dur, refDur: dur, ratio: 1, partial: true,
    tip: enough
      ? '已录下你的朗读！这台设备不能自动分析声音波形，请点「▶ 播放我的录音」再「🎧 再听原音」自己对比～'
      : '录音有点短或声音太小，靠近麦克风把整句读完再试一次～'
  };
}

function renderAcousticScore(s, res){
  const pct = res.score;
  const stars = pct >= 85 ? 3 : pct >= 65 ? 2 : 1;
  $('#score-panel').hidden = false;
  setRing(pct, pct >= 85 ? 'var(--sage)' : pct >= 65 ? 'var(--honey)' : 'var(--rose)');
  $('#score-num').textContent = String(pct);
  $('#score-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  $('#score-msg').textContent = res.tip;
  $('#score-heard').textContent = res.partial
    ? '已录下 ' + (res.myDur || 0).toFixed(1) + ' 秒 · 点「▶ 播放我的录音」和「🎧 再听原音」自己对比'
    : '声音对比：你的 ' + res.myDur.toFixed(1) + ' 秒 / 原音 ' + res.refDur.toFixed(1) + ' 秒';
  $('#diff-row').innerHTML = res.partial ? '' :
    '<span class="diff-chip ' + (res.rhythm >= 70 ? 'hit' : 'miss') + '">节奏 ' + res.rhythm + '%</span>' +
    '<span class="diff-chip ' + (res.speed >= 70 ? 'hit' : 'miss') + '">语速 ' + res.speed + '%</span>' +
    '<span class="diff-chip ' + (res.clarity >= 70 ? 'hit' : 'miss') + '">清晰度 ' + res.clarity + '%</span>';
  $('#btn-play-rec').disabled = !shadow.audioUrl;
  $('#self-rate').hidden = true;
  if (stars > (state.progress.readStars[s.id] || 0)){
    state.progress.readStars[s.id] = stars;
    saveProgress(); renderHome(); renderPickers();
  }
  if (stars >= 2) confetti();
}

function setRing(pct, color){
  const C = 326.73;
  const ring = $('#ring-fg');
  ring.style.strokeDashoffset = String(C * (1 - Math.min(100, Math.max(0, pct)) / 100));
  ring.style.stroke = color || 'var(--sage)';
}

function renderScore(s, result, heard){
  const pct = result.score;
  const stars = pct >= 85 ? 3 : pct >= 60 ? 2 : 1;

  $('#score-panel').hidden = false;
  setRing(pct, pct >= 85 ? 'var(--sage)' : pct >= 60 ? 'var(--honey)' : 'var(--rose)');
  $('#score-num').textContent = String(pct);
  $('#score-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  const msgs = {
    3: 'Bravo ! 发音太棒了，和原音几乎一样！',
    2: 'Très bien ! 大部分都说对了，继续加油！',
    1: '继续努力！点 🐢 慢速朗读，再跟着一个一个词读～'
  };
  $('#score-msg').textContent = msgs[stars];
  $('#score-heard').textContent = '我听到的是：' + heard;

  $('#diff-row').innerHTML = result.marks.map(m =>
    '<span class="diff-chip ' + (m.hit ? 'hit' : 'miss') + '">' +
    (m.hit ? '✓ ' : '✗ ') + esc(m.t) +
    (m.hit ? '' : '<small>没听清这个词</small>') +
    '</span>'
  ).join('');

  $('#btn-play-rec').disabled = !shadow.audioUrl;
  $('#self-rate').hidden = true;

  if (stars > (state.progress.readStars[s.id] || 0)){
    state.progress.readStars[s.id] = stars;
    saveProgress();
    renderHome();
    renderPickers();
  }
  if (stars >= 2) confetti();
}

function showSelfRate(){
  $('#score-panel').hidden = false;
  setRing(0, 'var(--lav)');
  $('#ring-fg').style.strokeDashoffset = '326.73';
  $('#score-num').textContent = '—';
  $('#score-stars').textContent = '☆☆☆';
  $('#score-msg').textContent = '录好了，来自己打个分';
  $('#score-heard').textContent = '已录 ' + (shadow.wallSeconds || 0).toFixed(1) +
    ' 秒 · 先「▶ 播放我的录音」，再「🎧 再听原音」对比一下';
  $('#diff-row').innerHTML = '';
  $('#btn-play-rec').disabled = !shadow.audioUrl;
  $('#self-rate').hidden = false;
}

function selfRate(stars){
  const s = SENTENCES[state.read.idx];
  if (stars > (state.progress.readStars[s.id] || 0)){
    state.progress.readStars[s.id] = stars;
    saveProgress();
  }
  $('#self-rate').hidden = true;
  $('#score-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
  toast('记录成功！' + '⭐'.repeat(stars));
  renderHome();
  renderPickers();
}

/* =========================================================
   特效：Toast / 彩带 / 提示音
   ========================================================= */
let toastTimer = null;
function toast(msg){
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

function confetti(){
  const c = $('#confetti');
  const ctx = c.getContext('2d');
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  c.style.display = 'block';
  const colors = ['#E89A3C', '#DE8492', '#7FA3C4', '#7FA886', '#F2C14E', '#DE8355', '#F7D9A8'];
  const parts = Array.from({ length: 130 }, () => ({
    x: Math.random() * c.width,
    y: -20 - Math.random() * c.height * 0.35,
    r: 5 + Math.random() * 7,
    color: colors[Math.floor(Math.random() * colors.length)],
    vy: 2.2 + Math.random() * 3.2,
    vx: -1.4 + Math.random() * 2.8,
    rot: Math.random() * Math.PI,
    vr: -0.15 + Math.random() * 0.3
  }));
  let frames = 0;
  (function tick(){
    ctx.clearRect(0, 0, c.width, c.height);
    parts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = .9;
      ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.62);
      ctx.restore();
    });
    if (++frames < 160) requestAnimationFrame(tick);
    else { ctx.clearRect(0, 0, c.width, c.height); c.style.display = 'none'; }
  })();
}

let audioCtx = null;
function chime(ok){
  try{
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audioCtx.currentTime;
    const notes = ok ? [660, 880, 1100] : [240, 180];
    notes.forEach((f, i) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0 + i * 0.09);
      g.gain.exponentialRampToValueAtTime(0.14, t0 + i * 0.09 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + i * 0.09 + 0.35);
      o.connect(g); g.connect(audioCtx.destination);
      o.start(t0 + i * 0.09);
      o.stop(t0 + i * 0.09 + 0.4);
    });
  }catch(e){}
}

/* =========================================================
   初始化
   ========================================================= */
function init(){
  /* iOS Safari 保护①：先把「导航 + 首页菜单卡」入口绑好。
     以前它们排在各子模块初始化之后，只要某个模块在 iOS 上抛错（媒体/语音 API 缺失等），
     init() 就会中断，所有页面切换按钮失效 —— 用户看到的就是「某个模块打不开」。*/
  $$('.nav-btn').forEach(b => { b.onclick = () => showView(b.dataset.view); });
  $('#card-build').onclick = () => openBuild(Math.min(state.build.idx, SENTENCES.length - 1));
  $('#card-read').onclick  = () => openRead(Math.min(state.read.idx, SENTENCES.length - 1));
  const cardGames = $('#card-games');
  if (cardGames) cardGames.onclick = () => showView('games');
  const cardTextbook = $('#card-textbook');
  if (cardTextbook) cardTextbook.onclick = () => showView('textbook');

  /* iOS Safari 保护②：子模块初始化互相隔离，一个失败不影响其余 */
  const safeInit = (label, fn) => {
    try{ fn(); }
    catch(e){ try{ console.warn('[init] ' + label + ' 初始化跳过：' + ((e && e.message) || e)); }catch(_){} }
  };
  safeInit('home', renderHome);
  safeInit('pickers', renderPickers);
  safeInit('videos', () => { if (typeof initVideos === 'function') initVideos(); });
  safeInit('games', () => { if (typeof initGames === 'function') initGames(); });
  safeInit('textbook', () => { if (typeof initTextbook === 'function') initTextbook(); });

  /* 造句 */
  $('#btn-check').onclick = checkBuild;
  $('#btn-hint').onclick = hintBuild;
  $('#btn-reset').onclick = () => {
    state.build.placed = [];
    state.build.bank = shuffle(SENTENCES[state.build.idx].words.map((_, k) => k));
    state.build.solved = false;
    $('#analysis-panel').hidden = true;
    renderBuild();
  };
  $('#btn-prev').onclick = () => nextBuild(-1);
  $('#btn-next').onclick = () => nextBuild(1);
  $('#btn-record').onclick = () => toggleBuildRecord();
  $('#btn-close-record').onclick = () => toggleBuildRecord(false);
  $('#btn-clear-record').onclick = () => {
    if (!confirm('确定清空全部练习记录吗？此操作不可恢复。')) return;
    state.progress = { built: [], readStars: {} };
    saveProgress();
    renderBuildRecord();
    renderHome();
    renderPickers();
    toast('练习记录已清空');
  };
  /* 造句正确后：点「去朗读这句」直接进入朗读界面，并自动播放一次原速朗读
     （同步调用，保留在用户手势上下文内，确保 iOS / 自动播放策略下也能出声） */
  $('#btn-goread').onclick = () => {
    openRead(state.build.idx);
    speakSentence(0.9);
  };

  /* 朗读 */
  $('#btn-normal').onclick = () => speakSentence(0.9);
  $('#btn-slow').onclick = () => speakSentence(0.45);
  $('#btn-words').onclick = speakWordByWord;
  /* 「停止」也兼作跟读的兜底结束键：录音中点它同样能收尾，
     避免用户以为按了却没反应（面板里的「读完了」是主入口） */
  $('#btn-stop-speak').onclick = () => {
    if (shadow.active) stopShadow();
    else stopSpeak();
  };
  $('#btn-mic').onclick = startShadow;
  $('#btn-mic-stop').onclick = stopShadow;
  $('#btn-rprev').onclick = () => nextRead(-1);
  $('#btn-rnext').onclick = () => nextRead(1);
  /* 朗读界面点「造句模式」：自动进入下一句的造句练习（已练对的记录保留） */
  $('#btn-gobuild').onclick = () => {
    const next = (state.read.idx + 1) % SENTENCES.length;
    openBuild(next);
    toast('进入下一句练习：' + SENTENCES[next].zh + '（之前的练习记录已保留 ✅）');
  };

  /* 打分面板 */
  $('#btn-retry').onclick = () => { $('#score-panel').hidden = true; startShadow(); };
  $('#btn-listen-again').onclick = () => speakSentence(0.9);
  $('#btn-play-rec').onclick = () => {
    if (!shadow.audioUrl){ toast('还没有录到声音，点「🔁 再试一次」重录吧'); return; }
    try{
      if (!shadowPlayAudio) shadowPlayAudio = new Audio();
      shadowPlayAudio.src = shadow.audioUrl;
      shadowPlayAudio.currentTime = 0;
      const p = shadowPlayAudio.play();
      if (p && p.catch) p.catch(() => toast('播放失败，再点一次「▶ 播放我的录音」'));
    }catch(e){ toast('播放失败，再点一次「▶ 播放我的录音」'); }
  };
  $$('#self-rate .self-rate-btns .btn').forEach(b => {
    b.onclick = () => selfRate(parseInt(b.dataset.s, 10));
  });

  /* 键盘快捷键：回车 = 检查 */
  document.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !$('#view-build').hidden && !state.build.solved){
      const btn = $('#btn-check');
      if (!btn.disabled) btn.click();
    }
  });
}

document.addEventListener('DOMContentLoaded', init);

/* iOS Safari 兜底：万一 init() 仍被某个缺失的 API 中断，导航按钮也不会彻底失灵。
   用捕获阶段监听；已由 init() 绑定 onclick 的按钮会跳过，避免重复切换。*/
document.addEventListener('click', e => {
  const t = e.target;
  const b = (t && t.closest) ? t.closest('.nav-btn') : null;
  if (!b || b.onclick) return;
  if (b.dataset.view) showView(b.dataset.view);
}, true);
