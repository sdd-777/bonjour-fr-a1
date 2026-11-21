/* =========================================================
   ✍️ 默写模块（dictation）
   ---------------------------------------------------------
   流程：拍照/输入 → 识别并校验词库 → 确认单词列表 →
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

  /* ---------- 发音（TTS，任意法语词都能读） ---------- */
  let speakToken = 0;
  function stopDictSpeak() {
    speakToken++;
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
    $$('#view-dictation .dict-speak.playing').forEach(b => b.classList.remove('playing'));
  }
  function speak(fr, btn, slow) {
    stopDictSpeak();
    const token = speakToken;
    if (btn) btn.classList.add('playing');
    const done = () => { if (token === speakToken && btn) btn.classList.remove('playing'); };
    if (!window.speechSynthesis) { toast('此浏览器不支持语音朗读'); done(); return; }
    const u = new SpeechSynthesisUtterance(fr);
    u.lang = 'fr-FR';
    u.rate = slow ? 0.6 : 0.9;
    const v = (typeof frVoice === 'function') ? frVoice() : null;
    if (v) u.voice = v;
    u.onend = done; u.onerror = done;
    try { speechSynthesis.speak(u); } catch (e) { done(); }
    setTimeout(done, 4000);
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
    $('#dict-next-confirm').onclick = () => {
      const raw = $('#dict-manual').value;
      const list = parseRaw(raw);
      if (!list.length) { toast('请先输入或识别单词'); return; }
      st.words = list.map(x => ({ fr: x.fr, zh: x.zh, typed: '', ok: false, known: x.known }));
      st.wrongSource = false;
      st.stage = 'confirm'; render();
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
      '<p class="dict-sub">共 <b>' + st.words.length + '</b> 个，其中 <b>' + known + '</b> 个在词库中找到中文意思。' +
      '未收录的请补中文意思，写错的请改法语拼写，不需要的删掉。</p>' +
      '</div></div>' +
      '<div id="dict-confirm-list" class="dict-list"></div>' +
      '<div class="dict-actions">' +
      '<button class="dict-btn ghost" id="dict-back-upload">← 返回</button>' +
      '<button class="dict-btn" id="dict-add-row">＋ 添加单词</button>' +
      '<button class="dict-btn primary" id="dict-next-learn">下一步：听音看写法 →</button>' +
      '</div>';
    body.appendChild(box);
    drawConfirmList();
    $('#dict-back-upload').onclick = () => { st.stage = 'upload'; render(); };
    $('#dict-add-row').onclick = () => {
      st.words.push({ fr: '', zh: '', typed: '', ok: false, known: false });
      drawConfirmList();
    };
    $('#dict-next-learn').onclick = () => {
      const valid = st.words.filter(w => w.fr.trim());
      if (!valid.length) { toast('至少保留一个单词'); return; }
      st.words = valid;
      st.idx = 0;
      st.stage = 'learn'; render();
    };
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
        '<span class="dict-tag ' + (w.known ? 'known' : '') + '">' + (w.known ? '✓ 已收录' : '? 未收录') + '</span>' +
        '<button class="dict-x" data-i="' + i + '" title="删除">✕</button>' +
        '</div>';
      list.appendChild(row);
    });
    $$('.dict-in-fr', list).forEach(inp => inp.oninput = e => {
      const i = +e.target.dataset.i;
      st.words[i].fr = e.target.value;
      const hit = lookup(e.target.value);
      if (hit && !st.words[i].zh) { st.words[i].zh = hit.zh; st.words[i].known = true; }
      const rows = $$('.dict-row', list);
      const tag = $('.dict-tag', rows[i]);
      if (tag) { tag.textContent = hit ? '✓ 已收录' : '? 未收录'; tag.classList.toggle('known', !!hit); }
    });
    $$('.dict-in-zh', list).forEach(inp => inp.oninput = e => { st.words[+e.target.dataset.i].zh = e.target.value; });
    $$('.dict-x', list).forEach(btn => btn.onclick = e => {
      st.words.splice(+e.target.dataset.i, 1);
      drawConfirmList();
    });
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
      else { st.idx = 0; st.stage = 'dictate'; render(); }
    };
  }

  /* —— 阶段 4：默写（逐词） —— */
  function renderDictate(body) {
    const w = st.words[st.idx];
    const total = st.words.length;
    const box = el('div', 'dict-card card dict-study');
    box.innerHTML =
      '<div class="dict-progress-text">默写 ' + (st.idx + 1) + ' / ' + total + '</div>' +
      '<div class="dict-progress"><div style="width:' + (st.idx / total * 100) + '%"></div></div>' +
      '<div class="dict-prompt-label">请写出意思是：</div>' +
      '<div class="dict-mean-big">' + esc(w.zh || '（未填意思）') + '</div>' +
      '<div class="dict-tip-row">' +
      '<button class="dict-btn hint" id="dict-hint">💡 提示：听发音</button>' +
      '<span class="dict-tip-note">重音符号（é è ç 等）也要写对哦</span>' +
      '</div>' +
      '<input id="dict-answer" class="dict-answer" autocomplete="off" autocapitalize="off" ' +
      'spellcheck="false" placeholder="在这里拼写法语单词">' +
      '<div id="dict-feedback" class="dict-feedback"></div>' +
      '<div class="dict-actions center">' +
      '<button class="dict-btn primary" id="dict-submit">确定，下一个 →</button>' +
      '</div>';
    body.appendChild(box);
    const inp = $('#dict-answer');
    setTimeout(() => { try { inp.focus(); } catch (e) {} }, 60);
    $('#dict-hint').onclick = e => speak(w.fr, e.currentTarget, false);
    const submit = () => {
      const typed = inp.value.trim();
      if (!typed) { toast('先写出单词再提交'); return; }
      w.typed = typed;
      w.ok = (typed === w.fr.trim()); // 严格比对：重音/大小写都要一致
      const fb = $('#dict-feedback');
      fb.className = 'dict-feedback ' + (w.ok ? 'good' : 'bad');
      fb.innerHTML = w.ok
        ? '✅ 正确！'
        : '✗ 正确写法：<b>' + esc(w.fr) + '</b>';
      $('#dict-submit').disabled = true;
      setTimeout(() => {
        if (st.idx < total - 1) { st.idx++; render(); }
        else { st.stage = 'review'; render(); }
      }, w.ok ? 650 : 1300);
    };
    $('#dict-submit').onclick = submit;
    inp.onkeydown = e => { if (e.key === 'Enter') { e.preventDefault(); submit(); } };
  }

  /* —— 阶段 5：核对列表 —— */
  function renderReview(body) {
    const box = el('div', 'dict-card card');
    const right = st.words.filter(w => w.ok).length;
    box.innerHTML =
      '<div class="dict-head"><span class="dict-head-ico">🔍</span><div>' +
      '<h3>检查一下再交卷</h3>' +
      '<p class="dict-sub">你写对了 <b>' + right + ' / ' + st.words.length + '</b> 个。想改的可以点「修改」，确认无误后交卷。</p>' +
      '</div></div>' +
      '<div class="dict-review-list"></div>' +
      '<div class="dict-actions">' +
      '<button class="dict-btn ghost" id="dict-back-dictate">← 返回重默</button>' +
      '<button class="dict-btn primary" id="dict-submit-final">✅ 交卷</button>' +
      '</div>';
    body.appendChild(box);
    drawReview();
    $('#dict-back-dictate').onclick = () => { st.idx = 0; st.words.forEach(w => { w.typed = ''; w.ok = false; }); st.stage = 'dictate'; render(); };
    $('#dict-submit-final').onclick = finalize;
  }
  function drawReview() {
    const list = $('.dict-review-list');
    list.innerHTML = '';
    st.words.forEach((w, i) => {
      const row = el('div', 'dict-rv-row ' + (w.ok ? 'ok' : 'bad'));
      row.innerHTML =
        '<span class="dict-rv-ico">' + (w.ok ? '✅' : '✗') + '</span>' +
        '<div class="dict-rv-main">' +
        '<div><b>' + esc(w.fr) + '</b> <span class="dict-rv-zh">' + esc(w.zh) + '</span></div>' +
        '<div class="dict-rv-typed">你写的：' + (w.typed ? esc(w.typed) : '<i>（空）</i>') + '</div>' +
        '</div>' +
        '<button class="dict-btn tiny" data-i="' + i + '">修改</button>';
      list.appendChild(row);
    });
    $$('.dict-btn.tiny', list).forEach(b => b.onclick = e => {
      st.idx = +e.currentTarget.dataset.i;
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
    st.result = { right, total, wrong };
    render();
    if (right === total) {
      confetti();
      setTimeout(() => speak('Très bien ! Bravo !', null), 200);
    }
  }
  function renderResult(body) {
    const r = st.result;
    const perfect = r.right === r.total;
    const box = el('div', 'dict-card card dict-result ' + (perfect ? 'perfect' : ''));
    if (perfect) {
      box.innerHTML =
        '<div class="dict-trophy">🏆</div>' +
        '<h2 class="dict-congrats">Très bien !</h2>' +
        '<p class="dict-congrats-sub">Bravo ! 全部拼写正确，太棒了！✨</p>' +
        '<div class="dict-score">' + r.right + ' / ' + r.total + '</div>' +
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
        '<div class="dict-wrong-mini"></div>' +
        '<div class="dict-actions center">' +
        '<button class="dict-btn primary" id="dict-retry-wrong">🔁 继续听写出错的词</button>' +
        '<button class="dict-btn" id="dict-again">全部重默</button>' +
        '<button class="dict-btn ghost" id="dict-go-home">返回上传</button>' +
        '</div>';
      const wm = $('.dict-wrong-mini', box);
      r.wrong.forEach(w => {
        const d = el('div', 'dict-wrong-mini-row');
        d.innerHTML = '<b>' + esc(w.fr) + '</b> <span>' + esc(w.zh) + '</span> <i>你写的：' + esc(w.typed) + '</i>';
        wm.appendChild(d);
      });
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
    // 首次预渲染
    ensureDictation();
    render();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  // 暴露给测试/外部
  window.Dictation = {
    lookup, parseRaw, normKey,
    get state() { return st; },
    render
  };
})();
