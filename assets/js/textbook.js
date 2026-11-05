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
    '<p class="tb-tip">点每句左边的 ▶ 听这一句；点「整课连播」从头听到尾，适合跟读。</p>';
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
