/* =========================================================
   ✍️ 默写模块（dictation）
   ---------------------------------------------------------
   流程：拍照/输入 → 识别并校验词库（未收录词联网查有道词典）→ 确认单词列表 →
        先听音看写法 → 默写（给意思+横线，重音细节也要对）→
        逐词完成 → 列表核对 → 交卷 → 全对法语鼓励+烟花 / 有错入错题本
   依赖（全局，均在 app.js / 各数据文件之前加载）：
     esc / shuffle / toast / confetti / frVoice / safePlay
     WORD_CATS / VERBS / TB_LESSONS
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 词典索引：法语写法 → 中文意思 ---------- */
  const DICT = Object.create(null);       // 精确写法（保留原词）→ zh
  const DICT_NORM = Object.create(null);  // 归一化（小写+去重音+去冠词）→ 规范写法

  function normKey(s) {
    return String(s || '')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // 去重音
      .replace(/œ/gi, 'oe').replace(/æ/gi, 'ae')
      .toLowerCase()
      .replace(/^(le|la|les|l'|un|une|des|du|de)\s+/i, '') // 去冠词
      .replace(/[^a-z0-9\-']/g, '')                         // 去标点空格
      .trim();
  }
  function addDict(fr, zh) {
    if (!fr || !zh) return;
    fr = String(fr).trim();
    if (!fr) return;
    if (!DICT[fr]) DICT[fr] = String(zh).trim();
    const k = normKey(fr);
    if (k && !DICT_NORM[k]) DICT_NORM[k] = fr; // 保留第一次出现的写法作规范
  }
  function buildDict() {
    // 单词模块：name + 各国籍 m/f
    if (typeof WORD_CATS !== 'undefined') {
      WORD_CATS.forEach(cat => (cat.items || []).forEach(it => {
        if (it.name && it.name.fr) addDict(it.name.fr, it.zh || '');
        if (it.nat) {
          ['m', 'f'].forEach(g => {
            const n = it.nat[g];
            if (n && n.fr) addDict(n.fr, n.zh || it.zh || '');
          });
        }
      }));
    }
    // 动词库：inf + zh
    if (typeof VERBS !== 'undefined') {
      VERBS.forEach(v => addDict(v.inf, v.zh));
    }
    // 教材词汇表
    if (typeof TB_LESSONS !== 'undefined') {
      Object.keys(TB_LESSONS).forEach(lid => {
        (TB_LESSONS[lid].vocab || []).forEach(w => addDict(w.fr, w.zh));
      });
    }
  }
  // 查词：先精确，再归一化；返回 {fr, zh} 或 null
  function lookup(raw) {
    const fr = String(raw || '').trim();
    if (!fr) return null;
    if (DICT[fr]) return { fr, zh: DICT[fr] };
    const k = normKey(fr);
    if (k && DICT_NORM[k]) {
      const canon = DICT_NORM[k];
      return { fr: canon, zh: DICT[canon] || '' };
    }
    return null;
  }

  /* ---------- 联网查词：本地未收录时搜索中文释义 ----------
     站点是纯静态页面（GitHub Pages），没有自己的后端，
     这里通过公共词典 API 在浏览器端"联网搜索"。
     主用：有道 suggest（JSONP，返回准确释义 entry/explain，且能纠正 OCR 拼写）
     备用：MyMemory 翻译（CORS，JSON 直连）
     查询结果缓存在 localStorage，避免重复联网。
  ---------- */
  const LS_ONLINE = 'dictation_online_cache_v1';
  const ONLINE_CACHE = (function () {
    try { return JSON.parse(localStorage.getItem(LS_ONLINE) || '{}') || {}; }
    catch (e) { return {}; }
  })();
  function cacheSet(key, val) {
    ONLINE_CACHE[key] = val;
    try { localStorage.setItem(LS_ONLINE, JSON.stringify(ONLINE_CACHE)); } catch (e) {}
  }

  // 有道 suggest：JSONP 回调（绕过跨域），XXH 兼容 https 页面
  function youdaoLookup(word, cb) {
    let done = false;
    const finish = (val) => { if (done) return; done = true; cb(val); };
    const cname = '__dictYoudao' + Math.random().toString(36).slice(2);
    const s = document.createElement('script');
    window[cname] = data => {
      try {
        const entries = data && data.data && data.data.entries;
        if (entries && entries.length) {
          const best = entries.find(e => e && e.entry && e.explain) || entries[0];
          finish({ entry: String(best.entry || '').trim(), explain: String(best.explain || '').trim() });
        } else finish(null);
      } catch (e) { finish(null); }
      try { delete window[cname]; } catch (e) {}
      if (s.parentNode) s.parentNode.removeChild(s);
    };
    s.onerror = () => {
      finish(null);
      try { delete window[cname]; } catch (e) {}
      if (s.parentNode) s.parentNode.removeChild(s);
    };
    const q = encodeURIComponent(word);
    s.src = 'https://dict.youdao.com/suggest?num=5&ver=3.0&doctype=json&encode=UTF8&le=fr&q=' + q + '&callback=' + cname;
    document.head.appendChild(s);
    setTimeout(() => { if (!done) { finish(null); try { delete window[cname]; } catch (e) {} if (s.parentNode) s.parentNode.removeChild(s); } }, 9000);
  }

  // MyMemory 备用：fetch JSON（CORS 允许）
  function mymemoryLookup(word, cb) {
    let done = false;
    const finish = val => { if (done) return; done = true; cb(val); };
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(word) + '&langpair=fr%7Czh-CN';
    if (!window.fetch) { finish(null); return; }
    fetch(url).then(r => r.json()).then(d => {
      const t = d && d.responseData && d.responseData.translatedText;
      if (t && d.responseStatus === 200) finish({ entry: '', explain: String(t).trim() });
      else finish(null);
    }).catch(() => finish(null));
    setTimeout(() => finish(null), 9000);
  }

  // 从有道 explain 里提取简洁中文释义（取第一个义项、去例句噪音）
  function cleanExplain(text) {
    let s = String(text || '').trim();
    s = s.split(/[;；]/)[0];                 // 只取第一个义项
    s = s.replace(/[～~].*$/, '');            // 去掉带 ～ 的例句部分
    s = s.replace(/[（(].*?[）)]/g, '');      // 去括号补充说明
    s = s.replace(/\s+/g, ' ').replace(/[，,]\s*$/, '').trim();
    return s.slice(0, 42);
  }

  // 联网查一个词：优先有道，失败回退 MyMemory；结果写入缓存
  // 返回 Promise，resolve({fr, zh, source}) 或 resolve(null)
  function lookupOnline(word) {
    const raw = String(word || '').trim();
    if (!raw) return Promise.resolve(null);
    const key = normKey(raw) || raw.toLowerCase();
    if (ONLINE_CACHE[key] !== undefined) {
      const c = ONLINE_CACHE[key];
      return Promise.resolve(c === null ? null : { fr: c.fr, zh: c.zh, source: c.source || 'online' });
    }
    return new Promise(resolve => {
      youdaoLookup(raw, data => {
        const apply = d => {
          if (!d || !d.explain) { cacheSet(key, null); resolve(null); return; }
          const fr = d.entry || raw;            // 有道 entry 可纠正 OCR 拼写
          const zh = cleanExplain(d.explain) || d.explain;
          // 过滤无效结果：释义等于原词（MyMemory 对无意义词会原样返回）视为查不到
          const norm = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/g, '');
          if (!norm(zh) || norm(zh) === norm(raw) || norm(zh) === norm(fr)) {
            cacheSet(key, null); resolve(null); return;
          }
          const out = { fr, zh, source: 'online' };
          cacheSet(key, out);
          resolve(out);
        };
        if (data) apply(data);
        else mymemoryLookup(raw, d2 => apply(d2));
      });
    });
  }

  // 批量联网补全：对未收录词逐个查（并发上限 3，避免过快）
  async function enrichOnline(words, onProgress) {
    const targets = words.filter(w => !w.known && String(w.fr || '').trim());
    let done = 0;
    const result = await Promise.all(targets.map(async w => {
      const r = await lookupOnline(w.fr);
      done++;
      if (onProgress) onProgress(done, targets.length, w, r);
      return { w, r };
    }));
    return result;
  }

  /* ---------- 状态 ---------- */
  const LS_WRONG = 'dictation_wrongbook_v1';
  const st = {
    stage: 'upload',   // upload | confirm | learn | dictate | review | result
    words: [],         // [{fr, zh, typed, ok}]
    idx: 0,            // 当前 learn/dictate 索引
    ocrLoading: false,
    wrongSource: false // 本次是否在听写错题（交卷后继续用）
  };

  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  /* ---------- 发音：优先预录标准法语 MP3（任何设备都发标准法音），缺失才回退 TTS ---------- */
  let speakToken = 0;
  let dictAudio = null;  // 复用的 <audio>，避免移动端多元素自动播放被拒
  function stopDictSpeak() {
    speakToken++;
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
    if (dictAudio) {
      try { dictAudio.pause(); dictAudio.onended = null; dictAudio.onerror = null; } catch (e) {}
      dictAudio = null;
    }
    $$('#view-dictation .dict-speak.playing').forEach(b => b.classList.remove('playing'));
  }
  // 词形 → 预录法音 slug（与 app.js 的 wordSlug 一致）
  function dictSlug(w) {
    return String(w == null ? '' : w)
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9'-]/g, '').replace(/^[-']+|[-']+$/g, '');
  }
  // 解析音频地址（离线单文件版走内联映射表）
  function dictResolveAudio(rel) {
    const M = (typeof window !== 'undefined') ? window.__AUDIO_DATA__ : null;
    if (M) {
      const key = String(rel).replace(/^\.?\/?assets\/audio\//, '');
      if (M[key]) return M[key];
    }
    return rel;
  }
  function ttsSpeak(fr, btn, slow, token, done) {
    if (!window.speechSynthesis) { toast('此浏览器不支持语音朗读'); done(); return; }
    const u = new SpeechSynthesisUtterance(fr);
    u.lang = 'fr-FR';
    u.rate = slow ? 0.75 : 0.95;
    const v = (typeof frVoice === 'function') ? frVoice() : null;
    if (v) u.voice = v;
    u.onend = done; u.onerror = done;
    try { speechSynthesis.speak(u); } catch (e) { done(); }
    setTimeout(done, 4500);
  }
  // 主播放入口：优先预录法语 MP3；无对应文件/加载失败则回退 TTS。
  // slow 用 playbackRate 实现慢速（预录 0.6、TTS 0.75）
  function speak(fr, btn, slow, audioName) {
    stopDictSpeak();
    const token = speakToken;
    if (btn) btn.classList.add('playing');
    const done = () => { if (token === speakToken && btn) btn.classList.remove('playing'); };
    const word = cleanWordForSpeak(fr);
    // 指定音频名（如鼓励语 dict-bravo）优先；否则按词形 slug 找预录
    let rel = '';
    if (audioName) rel = 'assets/audio/sentences/' + audioName + '.mp3';
    else {
      const slug = dictSlug(word);
      if (slug) rel = 'assets/audio/words/sw-' + slug + '.mp3';
    }
    if (!rel) { ttsSpeak(word, btn, slow, token, done); return; }
    const a = new Audio();
    dictAudio = a;
    let settled = false;
    const fallback = () => { if (settled || token !== speakToken) return; settled = true; ttsSpeak(word, btn, slow, token, done); };
    a.onended = () => { if (token === speakToken) { settled = true; done(); } };
    a.onerror = fallback;
    a.src = dictResolveAudio(rel);
    a.playbackRate = slow ? 0.6 : 1;
    a.onloadedmetadata = () => { a.playbackRate = slow ? 0.6 : 1; };
    try {
      const p = a.play();
      if (p && p.catch) p.catch(fallback);
    } catch (e) { fallback(); }
    setTimeout(() => { if (!settled) { settled = true; done(); } }, 8000);
  }
  // 去掉标点，保留重音（用于按词形匹配预录）；单独的缩略词微调
  function cleanWordForSpeak(t) {
    let w = String(t == null ? '' : t).replace(/^[-\s]+/, '').replace(/[?!.,;:!]+$/, '').trim();
    if (w === "J'") w = 'Je';
    return w;
  }

  /* ---------- 视图渲染 ---------- */
  function render() {
    const body = $('#dict-body');
    if (!body) return;
    body.innerHTML = '';
    if (st.stage === 'upload') renderUpload(body);
    else if (st.stage === 'confirm') renderConfirm(body);
    else if (st.stage === 'learn') renderLearn(body);
    else if (st.stage === 'dictate') renderDictate(body);
    else if (st.stage === 'review') renderReview(body);
    else if (st.stage === 'result') renderResult(body);
    updateSteps();
    updateWrongBadge();
  }
  // 顶部错题本角标：数量实时可见
  function updateWrongBadge() {
    const badge = $('#dict-wrong-badge');
    if (!badge) return;
    const n = loadWrong().length;
    if (n > 0) { badge.hidden = false; badge.textContent = n; }
    else badge.hidden = true;
  }
  function updateSteps() {
    const map = { upload: 0, confirm: 1, learn: 2, dictate: 3, review: 4, result: 5 };
    const cur = map[st.stage] || 0;
    $$('#dict-steps .dstep').forEach((s, i) => s.classList.toggle('active', i === cur));
  }

  /* —— 阶段 1：上传 / 输入 —— */
  function renderUpload(body) {
    const box = el('div', 'dict-card card');
    box.innerHTML =
      '<div class="dict-head"><span class="dict-head-ico">📷</span><div>' +
      '<h3>上传要默写的单词</h3>' +
      '<p class="dict-sub">拍照上传课本/单词表图片，自动识别法语单词；也可以直接手动输入。</p>' +
      '</div></div>' +

      '<div class="dict-upload-row">' +
      '<label class="dict-btn primary">' +
      '<input type="file" id="dict-file" accept="image/*" capture="environment" hidden>' +
      '📸 拍照 / 选择图片</label>' +
      '<button class="dict-btn" id="dict-paste">📋 从剪贴板粘贴</button>' +
      '</div>' +

      '<div id="dict-ocr-status" class="dict-ocr-status" hidden></div>' +

      '<div class="dict-sep"><span>或直接手动输入</span></div>' +
      '<textarea id="dict-manual" class="dict-textarea" rows="5" ' +
      'placeholder="每行一个法语单词，例如：&#10;bonjour&#10;merci&#10;la Chine&#10;écrire"></textarea>' +
      '<p class="dict-hint">💡 识别可能有误差，下一步会逐一核对词库、并把中文意思带出来，你可以修改或删除。</p>' +
      '<div class="dict-actions">' +
      '<button class="dict-btn primary" id="dict-next-confirm">下一步：核对单词 →</button>' +
      '</div>';
    body.appendChild(box);
    // 错题本入口
    const wrong = loadWrong();
    const wbox = el('div', 'dict-card card dict-wrong-entry');
    wbox.innerHTML =
      '<div class="dict-head"><span class="dict-head-ico">📕</span><div>' +
      '<h3>错题本 <span class="dict-badge">' + wrong.length + '</span></h3>' +
      '<p class="dict-sub">拼错的单词都收在这里，可以单独再听写一遍。</p>' +
      '</div></div>' +
      '<div class="dict-actions"><button class="dict-btn" id="dict-open-wrong"' + (wrong.length ? '' : ' disabled') + '>🔁 听写错题本</button>' +
      (wrong.length ? '<button class="dict-btn ghost" id="dict-clear-wrong">清空错题本</button>' : '') + '</div>';
    body.appendChild(wbox);

    $('#dict-file').onchange = e => {
      const f = e.target.files && e.target.files[0];
      if (f) runOCR(f);
    };
    $('#dict-paste').onclick = async () => {
      try {
        const txt = await navigator.clipboard.readText();
        if (txt) { $('#dict-manual').value = txt; toast('已粘贴，点「下一步」核对'); }
        else toast('剪贴板是空的');
      } catch (err) { toast('无法读取剪贴板，请用手动输入'); }
    };
    $('#dict-next-confirm').onclick = async () => {
      const raw = $('#dict-manual').value;
      const list = parseRaw(raw);
      if (!list.length) { toast('请先输入或识别单词'); return; }
      st.words = list.map(x => ({ fr: x.fr, zh: x.zh, typed: '', ok: false, known: x.known, source: x.known ? 'dict' : '' }));
      st.wrongSource = false;
      st.stage = 'confirm'; render();
      // 本地未收录的词，后台联网搜索中文释义（不阻塞，边查边刷新列表）
      const unknown = st.words.filter(w => !w.known);
      if (unknown.length) await fillUnknownOnline(unknown);
    };
    const ob = $('#dict-open-wrong');
    if (ob) ob.onclick = () => startWrongBook();
    const cb = $('#dict-clear-wrong');
    if (cb) cb.onclick = () => {
      if (confirm('确定清空错题本？')) { localStorage.removeItem(LS_WRONG); render(); toast('错题本已清空'); }
    };
  }

  // 把文本拆成词条：按行/逗号/顿号/分号，逐个查词库
  function parseRaw(text) {
    const parts = String(text || '')
      .split(/[\n,，、;；]+/)
      .map(s => s.replace(/^\s*[-•\d.、)]+\s*/, '').trim())
      .filter(Boolean);
    const out = [];
    const seen = new Set();
    parts.forEach(p => {
      const hit = lookup(p);
      const fr = hit ? hit.fr : p;
      const key = normKey(fr) || fr.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      out.push({ fr: fr, zh: hit ? hit.zh : '', known: !!hit });
    });
    return out;
  }

  /* —— OCR（Tesseract.js 动态加载） —— */
  let tessLoading = null;
  function loadTesseract() {
    if (window.Tesseract) return Promise.resolve(window.Tesseract);
    if (tessLoading) return tessLoading;
    tessLoading = new Promise((resolve, reject) => {
      const CDN = [
        'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js',
        'https://unpkg.com/tesseract.js@5/dist/tesseract.min.js'
      ];
      let i = 0;
      const tryNext = () => {
        if (i >= CDN.length) { reject(new Error('OCR 引擎加载失败')); return; }
        const s = document.createElement('script');
        s.src = CDN[i++];
        s.onload = () => window.Tesseract ? resolve(window.Tesseract) : tryNext();
        s.onerror = tryNext;
        document.head.appendChild(s);
      };
      tryNext();
      setTimeout(() => reject(new Error('OCR 加载超时')), 20000);
    });
    return tessLoading;
  }
  async function runOCR(file) {
    const status = $('#dict-ocr-status');
    status.hidden = false;
    status.className = 'dict-ocr-status loading';
    status.textContent = '🔄 正在加载识别引擎…（首次需要联网下载法语识别包）';
    try {
      const T = await loadTesseract();
      status.textContent = '🔄 正在识别图片文字…';
      const res = await T.recognize(file, 'fra', {
        logger: m => {
          if (m.status === 'recognizing text') {
            status.textContent = '🔄 正在识别… ' + Math.round(m.progress * 100) + '%';
          }
        }
      });
      const text = (res && res.data && res.data.text) || '';
      const cur = $('#dict-manual').value.trim();
      const merged = cur ? cur + '\n' + text : text;
      $('#dict-manual').value = merged;
      status.className = 'dict-ocr-status ok';
      const n = parseRaw(text).length;
      status.textContent = '✅ 识别完成，初步提取 ' + n + ' 个词条，已填入下方，请核对。';
      toast('识别完成，请核对单词');
    } catch (err) {
      status.className = 'dict-ocr-status warn';
      status.innerHTML = '⚠️ 图片识别不可用（可能未联网）。请在下方<b>手动输入</b>单词，功能完全一样。';
    }
  }

  /* —— 阶段 2：确认单词列表 —— */
  function renderConfirm(body) {
    const box = el('div', 'dict-card card');
    const known = st.words.filter(w => w.known).length;
    box.innerHTML =
      '<div class="dict-head"><span class="dict-head-ico">✅</span><div>' +
      '<h3>核对单词列表</h3>' +
      '<p class="dict-sub" id="dict-known-stat">共 <b>' + st.words.length + '</b> 个，其中 <b>' + known + '</b> 个已找到中文意思（词库或联网）。' +
      '写错的请改法语拼写，不需要的删掉。</p>' +
      '</div></div>' +
      '<div id="dict-online-note" class="dict-online-note" hidden>🌐 正在联网搜索未收录单词的中文意思…</div>' +
      '<div id="dict-confirm-list" class="dict-list"></div>' +
      '<div class="dict-actions">' +
      '<button class="dict-btn ghost" id="dict-back-upload">← 返回</button>' +
      '<button class="dict-btn" id="dict-add-row">＋ 添加单词</button>' +
      '<button class="dict-btn speak" id="dict-retry-online">🌐 重查未收录</button>' +
      '<button class="dict-btn primary" id="dict-next-learn">下一步：听音看写法 →</button>' +
      '</div>';
    body.appendChild(box);
    drawConfirmList();
    $('#dict-back-upload').onclick = () => { st.stage = 'upload'; render(); };
    $('#dict-add-row').onclick = () => {
      st.words.push({ fr: '', zh: '', typed: '', ok: false, known: false, source: '' });
      drawConfirmList();
    };
    $('#dict-retry-online').onclick = () => {
      const unknown = st.words.filter(w => !w.known && String(w.fr || '').trim());
      if (!unknown.length) { toast('没有未查到的词'); return; }
      fillUnknownOnline(unknown);
    };
    $('#dict-next-learn').onclick = () => {
      const valid = st.words.filter(w => w.fr.trim());
      if (!valid.length) { toast('至少保留一个单词'); return; }
      st.words = valid;
      st.idx = 0;
      st.stage = 'learn'; render();
    };
  }
  function sourceTag(w) {
    if (!w.known) return '<span class="dict-tag">? 未查到</span>';
    if (w.source === 'online') return '<span class="dict-tag online">🌐 联网</span>';
    return '<span class="dict-tag known">✓ 词库</span>';
  }
  function drawConfirmList() {
    const list = $('#dict-confirm-list');
    if (!list) return;
    list.innerHTML = '';
    st.words.forEach((w, i) => {
      const row = el('div', 'dict-row' + (w.known ? '' : ' unknown'));
      row.innerHTML =
        '<div class="dict-row-num">' + (i + 1) + '</div>' +
        '<div class="dict-row-main">' +
        '<label>法语拼写</label>' +
        '<input class="dict-in-fr" data-i="' + i + '" value="' + esc(w.fr) + '" placeholder="法语单词">' +
        '<label>中文意思</label>' +
        '<input class="dict-in-zh" data-i="' + i + '" value="' + esc(w.zh) + '" placeholder="中文意思">' +
        '</div>' +
        '<div class="dict-row-side">' +
        sourceTag(w) +
        '<button class="dict-x" data-i="' + i + '" title="删除">✕</button>' +
        '</div>';
      list.appendChild(row);
    });
    $$('.dict-in-fr', list).forEach(inp => {
      inp.oninput = e => {
        const i = +e.target.dataset.i;
        st.words[i].fr = e.target.value;
        const hit = lookup(e.target.value);
        if (hit && !st.words[i].zh) { st.words[i].zh = hit.zh; st.words[i].known = true; st.words[i].source = 'dict'; }
        const rows = $$('.dict-row', list);
        const side = $('.dict-row-side', rows[i]);
        if (side) side.innerHTML = sourceTag(st.words[i]) + '<button class="dict-x" data-i="' + i + '" title="删除">✕</button>';
        bindRowButtons(list);
      };
    });
    $$('.dict-in-zh', list).forEach(inp => inp.oninput = e => { st.words[+e.target.dataset.i].zh = e.target.value; });
    bindRowButtons(list);
  }
  function bindRowButtons(list) {
    $$('.dict-x', list).forEach(btn => btn.onclick = e => {
      st.words.splice(+e.target.dataset.i, 1);
      drawConfirmList();
    });
  }

  // 联网补全未收录词：边查边回填，查不到仍保留原词供手动填写
  async function fillUnknownOnline(unknown) {
    const note = $('#dict-online-note');
    if (note) { note.hidden = false; note.classList.add('loading'); }
    const results = await enrichOnline(unknown, (done, total) => {
      if (note) note.textContent = '🌐 联网搜索中… ' + done + ' / ' + total;
    });
    // 回填：联网查到的中文意思 / 纠正后的法语写法
    results.forEach(({ w, r }) => {
      if (r && r.zh) {
        if (r.fr) w.fr = r.fr;
        w.zh = r.zh;
        w.known = true;
        w.source = r.source || 'online';
      }
    });
    // 回填结果并重新渲染列表/统计（若用户还在 confirm 阶段）
    if (st.stage === 'confirm') {
      if (note) { note.hidden = true; note.classList.remove('loading'); }
      drawConfirmList();
      const stat = $('#dict-known-stat');
      if (stat) {
        const kn = st.words.filter(w => w.known).length;
        stat.innerHTML = '共 <b>' + st.words.length + '</b> 个，其中 <b>' + kn +
          '</b> 个已找到中文意思（词库或联网）。写错的请改法语拼写，不需要的删掉。';
      }
      toast('联网补全完成，请核对');
    }
  }

  /* —— 阶段 3：听音看写法（可跳过） —— */
  function renderLearn(body) {
    const w = st.words[st.idx];
    const total = st.words.length;
    const box = el('div', 'dict-card card dict-study');
    box.innerHTML =
      '<div class="dict-progress-text">学习 ' + (st.idx + 1) + ' / ' + total + '</div>' +
      '<div class="dict-progress"><div style="width:' + ((st.idx) / total * 100) + '%"></div></div>' +
      '<div class="dict-word-show">' + esc(w.fr) + '</div>' +
      '<div class="dict-mean-show">' + esc(w.zh || '（未填意思）') + '</div>' +
      '<div class="dict-actions center">' +
      '<button class="dict-btn speak" id="dict-learn-say">🔊 听发音</button>' +
      '<button class="dict-btn speak" id="dict-learn-slow">🐢 慢速听</button>' +
      '</div>' +
      '<div class="dict-actions center dict-learn-nav">' +
      '<button class="dict-btn ghost" id="dict-learn-prev"' + (st.idx === 0 ? ' disabled' : '') + '>← 上一个</button>' +
      '<button class="dict-btn primary" id="dict-learn-next">' +
      (st.idx === total - 1 ? '看完了，开始默写 →' : '下一个 →') + '</button>' +
      '</div>' +
      '<p class="dict-hint center">先听发音、记住写法；准备好后开始默写。</p>';
    body.appendChild(box);
    $('#dict-learn-say').onclick = e => speak(w.fr, e.currentTarget);
    $('#dict-learn-slow').onclick = e => speak(w.fr, e.currentTarget, true);
    $('#dict-learn-prev').onclick = () => { if (st.idx > 0) { st.idx--; render(); } };
    $('#dict-learn-next').onclick = () => {
      if (st.idx < total - 1) { st.idx++; render(); }
      else {
        // 进入默写：打乱顺序（保证与录入/学习顺序不同），重置判定状态
        st.words = shuffledForDictate(st.words);
        st.words.forEach(w => { w.typed = ''; w.ok = false; w.judged = false; });
        st.idx = 0; st.stage = 'dictate'; render();
      }
    };
  }
  // 默写乱序：随机打乱，且保证结果顺序与原顺序不同（≥2 个词时）
  function shuffledForDictate(words) {
    const arr = words.slice();
    if (arr.length < 2) return arr;
    const sig = a => a.map(w => w.fr).join('\u0001');
    const original = sig(arr);
    for (let t = 0; t < 10; t++) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = arr[i]; arr[i] = arr[j]; arr[j] = tmp;
      }
      if (sig(arr) !== original) break;
    }
    return arr;
  }

  /* —— 阶段 4：默写（逐词；过程中不显示对错，交卷后统一公布） —— */
  function renderDictate(body) {
    const w = st.words[st.idx];
    const total = st.words.length;
    const doneCount = st.words.filter(x => x.judged).length;
    const box = el('div', 'dict-card card dict-study');
    box.innerHTML =
      '<div class="dict-progress-text">默写 ' + (st.idx + 1) + ' / ' + total + '（顺序已打乱）</div>' +
      '<div class="dict-progress"><div style="width:' + (doneCount / total * 100) + '%"></div></div>' +
      '<div class="dict-prompt-label">请写出意思是：</div>' +
      '<div class="dict-mean-big">' + esc(w.zh || '（未填意思）') + '</div>' +
      '<div class="dict-tip-row">' +
      '<button class="dict-btn hint" id="dict-hint">💡 提示：听发音</button>' +
      '<span class="dict-tip-note">重音符号（é è ç 等）也要写对哦</span>' +
      '</div>' +
      '<input id="dict-answer" class="dict-answer" autocomplete="off" autocapitalize="off" ' +
      'spellcheck="false" placeholder="在这里拼写法语单词" value="' + esc(w.typed || '') + '">' +
      '<div id="dict-feedback" class="dict-feedback"></div>' +
      '<div class="dict-actions center">' +
      '<button class="dict-btn primary" id="dict-submit">确定，下一个 →</button>' +
      '</div>' +
      '<p class="dict-hint center">默写过程中不显示对错，全部完成并交卷后统一公布结果。</p>';
    body.appendChild(box);
    const inp = $('#dict-answer');
    setTimeout(() => { try { inp.focus(); } catch (e) {} }, 60);
    $('#dict-hint').onclick = e => speak(w.fr, e.currentTarget, false);
    const submit = () => {
      const typed = inp.value.trim();
      if (!typed) { toast('先写出单词再提交'); return; }
      w.typed = typed;
      w.ok = (typed === w.fr.trim()); // 后台记录判定（重音/大小写严格比对），交卷后才公布
      w.judged = true;
      const fb = $('#dict-feedback');
      fb.className = 'dict-feedback';
      fb.textContent = '已记录，继续…';
      $('#dict-submit').disabled = true;
      setTimeout(() => {
        if (st.idx < total - 1) { st.idx++; render(); }
        else { st.stage = 'review'; render(); }
      }, 450);
    };
    $('#dict-submit').onclick = submit;
    inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } };
  }

  /* —— 阶段 5：确认答案（不显示对错；交卷后才公布） —— */
  function renderReview(body) {
    const box = el('div', 'dict-card card');
    box.innerHTML =
      '<div class="dict-head"><span class="dict-head-ico">🔍</span><div>' +
      '<h3>确认答案，准备交卷</h3>' +
      '<p class="dict-sub">下面是你写下的答案，交卷前可点「修改」更正。<b>对错将在交卷后统一公布</b>，确认无误后交卷。</p>' +
      '</div></div>' +
      '<div class="dict-review-list"></div>' +
      '<div class="dict-actions">' +
      '<button class="dict-btn ghost" id="dict-back-dictate">← 返回重默</button>' +
      '<button class="dict-btn primary" id="dict-submit-final">✅ 交卷</button>' +
      '</div>';
    body.appendChild(box);
    drawReview();
    $('#dict-back-dictate').onclick = () => { st.idx = 0; st.words.forEach(w => { w.typed = ''; w.ok = false; w.judged = false; }); st.stage = 'dictate'; render(); };
    $('#dict-submit-final').onclick = finalize;
  }
  function drawReview() {
    const list = $('.dict-review-list');
    list.innerHTML = '';
    st.words.forEach((w, i) => {
      // 中性样式：不显示 ✅/✗、不给 ok/bad 配色，避免交卷前泄露对错
      const row = el('div', 'dict-rv-row neutral');
      row.innerHTML =
        '<span class="dict-rv-ico">✏️</span>' +
        '<div class="dict-rv-main">' +
        '<div class="dict-rv-typed">第 ' + (i + 1) + ' 个　你写的：<b>' + (w.typed ? esc(w.typed) : '<i>（空）</i>') + '</b></div>' +
        '</div>' +
        '<button class="dict-btn tiny" data-i="' + i + '">修改</button>';
      list.appendChild(row);
    });
    $$('.dict-btn.tiny', list).forEach(b => b.onclick = e => {
      st.idx = +e.currentTarget.dataset.i;
      st.words[st.idx].judged = false; // 允许重新作答该词
      st.stage = 'dictate';
      render();
      const inp = $('#dict-answer');
      if (inp) { inp.value = st.words[st.idx].typed || ''; setTimeout(() => inp.focus(), 60); }
    });
  }

  /* —— 阶段 6：交卷结果 —— */
  function finalize() {
    const right = st.words.filter(w => w.ok).length;
    const total = st.words.length;
    const wrong = st.words.filter(w => !w.ok);
    // 错题本：合并去重
    if (wrong.length) saveWrong(wrong);
    st.wrongSource = st.wrongSource; // 保留标记
    st.stage = 'result';
    st.result = { right, total, wrong, all: st.words.slice() };
    render();
    if (right === total) {
      confetti();
      // 用预录标准法语女声播放鼓励语，避免设备无法语 TTS 时读成非法语口音
      setTimeout(() => speak('Très bien ! Bravo !', null, false, 'dict-bravo'), 200);
    }
  }
  // 交卷后公布的完整逐词清单（含对错、正确写法、你写的）
  function fullResultList(all) {
    return '<div class="dict-full-result">' +
      all.map((w, i) =>
        '<div class="dict-fr-row ' + (w.ok ? 'ok' : 'bad') + '">' +
        '<span class="dict-fr-ico">' + (w.ok ? '✅' : '✗') + '</span>' +
        '<div class="dict-fr-main">' +
        '<div class="dict-fr-line"><b>' + esc(w.fr) + '</b> <span>' + esc(w.zh) + '</span></div>' +
        '<div class="dict-fr-typed">你写的：<b>' + (w.ok ? esc(w.typed) : esc(w.typed || '（空）')) + '</b>' +
        (w.ok ? '' : '　正确：<b>' + esc(w.fr) + '</b>') + '</div>' +
        '</div></div>').join('') + '</div>';
  }
  function renderResult(body) {
    const r = st.result;
    const perfect = r.right === r.total;
    const box = el('div', 'dict-card card dict-result ' + (perfect ? 'perfect' : ''));
    const listHtml = fullResultList(r.all || r.wrong);
    if (perfect) {
      box.innerHTML =
        '<div class="dict-trophy">🏆</div>' +
        '<h2 class="dict-congrats">Très bien !</h2>' +
        '<p class="dict-congrats-sub">Bravo ! 全部拼写正确，太棒了！✨</p>' +
        '<div class="dict-score">' + r.right + ' / ' + r.total + '</div>' +
        '<h3 class="dict-list-title">本次听写情况</h3>' +
        listHtml +
        '<div class="dict-actions center">' +
        '<button class="dict-btn primary" id="dict-again">🔁 再听写一遍</button>' +
        '<button class="dict-btn" id="dict-go-home">返回上传</button>' +
        '</div>';
    } else {
      box.innerHTML =
        '<div class="dict-trophy">📕</div>' +
        '<h2 class="dict-congrats">Continue comme ça !</h2>' +
        '<p class="dict-congrats-sub">写对 ' + r.right + ' / ' + r.total + ' 个，' + r.wrong.length +
        ' 个错的已收进错题本，可以再练一遍。</p>' +
        '<div class="dict-score">' + r.right + ' / ' + r.total + '</div>' +
        '<h3 class="dict-list-title">本次听写情况</h3>' +
        listHtml +
        '<div class="dict-actions center">' +
        '<button class="dict-btn primary" id="dict-retry-wrong">🔁 继续听写出错的词</button>' +
        '<button class="dict-btn" id="dict-again">全部重默</button>' +
        '<button class="dict-btn ghost" id="dict-go-home">返回上传</button>' +
        '</div>';
    }
    body.appendChild(box);
    const again = $('#dict-again');
    if (again) again.onclick = () => { st.words.forEach(w => { w.typed = ''; w.ok = false; }); st.idx = 0; st.stage = 'learn'; render(); };
    const home = $('#dict-go-home');
    if (home) home.onclick = () => { st.stage = 'upload'; render(); };
    const rw = $('#dict-retry-wrong');
    if (rw) rw.onclick = () => {
      st.words = r.wrong.map(w => ({ fr: w.fr, zh: w.zh, typed: '', ok: false, known: true }));
      st.idx = 0; st.wrongSource = true; st.stage = 'learn'; render();
      toast('只听写这 ' + st.words.length + ' 个错词');
    };
  }

  /* ---------- 错题本 ---------- */
  function loadWrong() {
    try { return JSON.parse(localStorage.getItem(LS_WRONG) || '[]'); }
    catch (e) { return []; }
  }
  function saveWrong(wrong) {
    const cur = loadWrong();
    wrong.forEach(w => {
      const k = normKey(w.fr) || w.fr.toLowerCase();
      const found = cur.find(x => (normKey(x.fr) || x.fr.toLowerCase()) === k);
      if (found) { found.times = (found.times || 1) + 1; found.last = Date.now(); found.typed = w.typed; }
      else cur.push({ fr: w.fr, zh: w.zh, typed: w.typed, times: 1, last: Date.now() });
    });
    try { localStorage.setItem(LS_WRONG, JSON.stringify(cur)); } catch (e) {}
  }
  function startWrongBook() {
    const wrong = loadWrong();
    if (!wrong.length) { toast('错题本还是空的'); return; }
    st.words = wrong.map(w => ({ fr: w.fr, zh: w.zh, typed: '', ok: false, known: true }));
    st.idx = 0; st.wrongSource = true; st.stage = 'learn'; render();
  }

  /* ---------- 生命周期 ---------- */
  function ensureDictation() {
    if (!DICT_READY) { buildDict(); DICT_READY = true; }
  }
  let DICT_READY = false;

  function init() {
    const view = $('#view-dictation');
    if (!view) return;
    // 进入视图时初始化词典 + 渲染
    const nav = document.querySelector('.nav-btn[data-view="dictation"]');
    if (nav) nav.addEventListener('click', () => { ensureDictation(); });
    // 供 app.showView 调用
    window.ensureDictation = function () { ensureDictation(); render(); };
    window.stopDictation = stopDictSpeak;
    // 顶部常驻错题本入口（任何阶段都能点）
    const quick = $('#dict-wrong-quick');
    if (quick) quick.onclick = () => startWrongBook();
    // 首次预渲染
    ensureDictation();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // 暴露给测试/外部
  window.Dictation = {
    lookup, parseRaw, normKey, lookupOnline, cleanExplain, enrichOnline,
    get state() { return st; },
    render
  };
})();
