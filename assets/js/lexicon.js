/* =========================================================
   🔍 法语词典 · 查词模块
   数据源：
   1) LEXICON       —— 主词典（FreeDict/WikDict fra-zho，CC BY-SA 3.0）
   2) LEXICON_EXTRA —— 补充词典（CFDICT 反转，CC BY-SA 3.0）
   3) RICH          —— 增强数据：分义项(简体)/词性分块/短语/教材例句/近反义词
   4) TB_LESSONS —— 教材词，带教材标识可跳转课次
   功能：输入联想、精确优先、分义项释义、短语/例句/近反义词、发音(预录优先)、教材跳转
   ========================================================= */
'use strict';

(function () {
  if (typeof window === 'undefined') return;

  /* ---------- DOM 助手 ---------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  function el(tag, cls) { const e = document.createElement(tag); if (cls) e.className = cls; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim(); }

  /* ---------- 数据源 ---------- */
  const dict = {};
  if (typeof LEXICON !== 'undefined') Object.assign(dict, LEXICON);
  if (typeof LEXICON_EXTRA !== 'undefined') {
    Object.keys(LEXICON_EXTRA).forEach(w => {
      if (dict[w]) return;
      const a = LEXICON_EXTRA[w] || [];
      dict[w] = { zh: a[0] || '', ipa: a[1] || '', pos: a[2] || '' };
    });
  }
  const mainCount = (typeof LEXICON !== 'undefined') ? Object.keys(LEXICON).length : 0;
  const RDATA = (typeof RICH !== 'undefined') ? RICH : {};

  // 教材词索引：norm(word) -> { fr, zh, lessons:[{id,no,title,unit}] }
  const textIndex = {};
  function addTextbookWord(fr, zh, lesson) {
    if (!fr) return;
    const k = norm(fr);
    if (!k) return;
    if (!textIndex[k]) textIndex[k] = { fr, zh: zh || '', lessons: [] };
    if (lesson && !textIndex[k].lessons.some(l => l.id === lesson.id)) textIndex[k].lessons.push(lesson);
  }
  function buildTextbookIndex() {
    if (typeof TB_LESSONS === 'undefined') return;
    Object.keys(TB_LESSONS).forEach(id => {
      const L = TB_LESSONS[id];
      const lesson = { id, no: L.no || '', title: L.title || '', unit: L.unit || '' };
      (L.vocab || []).forEach(v => addTextbookWord(v.fr, v.zh, lesson));
    });
  }
  buildTextbookIndex();

  // 归一化 key -> 原词数组
  const dictNorm = {};
  Object.keys(dict).forEach(w => {
    const k = norm(w);
    (dictNorm[k] || (dictNorm[k] = [])).push(w);
  });
  const uniqKeys = Object.keys(dictNorm);
  const suggestKeys = uniqKeys.slice().sort((a, b) => a.length - b.length || a.localeCompare(b));

  /* ---------- 发音（预录法语 MP3 优先） ---------- */
  let lxAudio = null;
  function stopLexSpeak() {
    if (lxAudio) { try { lxAudio.pause(); } catch (e) {} lxAudio = null; }
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
    $$('#view-lexicon .lx-speak.playing').forEach(b => b.classList.remove('playing'));
  }
  function audioSlug(fr) { return norm(fr).replace(/\s+/g, ''); }
  function makeSpeakBtn(fr, small) {
    const speak = el('button', 'lx-speak' + (small ? ' lx-speak-sm' : ''));
    speak.type = 'button'; speak.textContent = '🔊'; speak.title = '听发音';
    speak.onclick = () => speakWord(fr, speak);
    return speak;
  }
  function speakWord(fr, btn) {
    stopLexSpeak();
    if (btn) btn.classList.add('playing');
    const done = () => { if (btn) btn.classList.remove('playing'); };
    const slug = audioSlug(fr);
    const cands = [
      'assets/audio/words/sw-' + slug + '.mp3',
      'assets/audio/verbs/vb-' + slug + '-inf.mp3'
    ];
    let i = 0;
    const tryNext = () => {
      if (i < cands.length) {
        const a = new Audio(cands[i++]);
        lxAudio = a;
        a.onended = done;
        a.onerror = () => { tryNext(); };
        try { a.play(); } catch (e) { tryNext(); }
      } else {
        if (!window.speechSynthesis) { done(); return; }
        const u = new SpeechSynthesisUtterance(fr);
        u.lang = 'fr-FR'; u.rate = 0.9;
        const v = (typeof frVoice === 'function') ? frVoice() : null;
        if (v) u.voice = v;
        u.onend = done; u.onerror = done;
        try { speechSynthesis.speak(u); } catch (e) { done(); }
        setTimeout(done, 4000);
      }
    };
    tryNext();
  }

  /* ---------- 词条组装 ---------- */
  function richOf(word) {
    const k = norm(word);
    if (RDATA[word]) return RDATA[word];
    if (RDATA[k]) return RDATA[k];
    for (const key in RDATA) { if (norm(key) === k) return RDATA[key]; }
    return null;
  }
  function lookupOne(word) {
    const k = norm(word);
    if (!k) return null;
    const words = dictNorm[k];
    const displayFr = words ? words[0] : word;
    const d = dict[displayFr] || {};
    let zh = d.zh || '', ipa = d.ipa || '', pos = d.pos || '';
    const tb = textIndex[k];
    if (!zh && tb) zh = tb.zh;
    const rich = richOf(word);
    if (!zh && rich && rich.s && rich.s[0] && rich.s[0].zh) zh = rich.s[0].zh.join('、');
    if (!zh && !ipa) return null;
    return { fr: displayFr, zh, ipa, pos, textbook: tb ? tb.lessons : [], key: k, rich };
  }
  function searchByChinese(q) {
    const cq = q.replace(/\s+/g, '');
    const out = [];
    for (const key of uniqKeys) {
      const d = dict[dictNorm[key][0]] || {};
      const zh = d.zh || '';
      if (zh && zh.replace(/\s+/g, '').indexOf(cq) >= 0) out.push(key);
      if (out.length >= 40) break;
    }
    return out;
  }

  /* ---------- 联想建议（搜索框下方） ---------- */
  let suggestBox = null;
  function renderSuggest(q) {
    if (!suggestBox) {
      suggestBox = el('div', 'lx-suggest');
      suggestBox.id = 'lx-suggest';
      suggestBox.hidden = true;
      const bar = $('.lx-searchbar');
      if (bar && bar.parentNode) bar.parentNode.insertBefore(suggestBox, bar.nextSibling);
    }
    const k = norm(q);
    if (!k || /[\u4e00-\u9fff]/.test(q)) { suggestBox.hidden = true; suggestBox.innerHTML = ''; return; }
    if (dictNorm[k]) { suggestBox.hidden = true; suggestBox.innerHTML = ''; return; }
    const cand = suggestKeys.filter(key => key.indexOf(k) === 0).slice(0, 8);
    if (!cand.length) { suggestBox.hidden = true; suggestBox.innerHTML = ''; return; }
    suggestBox.innerHTML = '';
    cand.forEach(key => {
      const r = lookupOne(key);
      const b = el('button', 'lx-suggest-item'); b.type = 'button';
      const w = el('span', 'lx-suggest-word'); w.textContent = r ? r.fr : key;
      const z = el('span', 'lx-suggest-zh'); z.textContent = r ? r.zh : '';
      b.appendChild(w); b.appendChild(z);
      b.onclick = () => {
        const input = $('#lx-input');
        if (input) input.value = w.textContent;
        suggestBox.hidden = true;
        renderResults(w.textContent);
      };
      suggestBox.appendChild(b);
    });
    suggestBox.hidden = false;
  }

  /* ---------- 渲染卡片 ---------- */
  function renderSenseCard(r) {
    const card = el('div', 'lx-card lx-main-card');
    const head = el('div', 'lx-card-head');
    const word = el('span', 'lx-word'); word.textContent = r.fr; head.appendChild(word);
    const rich = r.rich;
    let ipa = r.ipa, pos = r.pos, posLabel = '';
    if (rich && rich.s && rich.s[0]) {
      ipa = ipa || rich.s[0].ipa || '';
      pos = pos || rich.s[0].pos || '';
      posLabel = rich.s[0].posLabel || '';
    }
    if (ipa) { const p = el('span', 'lx-ipa'); p.textContent = '/' + ipa.replace(/^\/|\/$/g, '') + '/'; head.appendChild(p); }
    if (posLabel) { const p = el('span', 'lx-pos'); p.textContent = posLabel; head.appendChild(p); }
    else if (pos) { const p = el('span', 'lx-pos'); p.textContent = pos; head.appendChild(p); }
    head.appendChild(makeSpeakBtn(r.fr));
    card.appendChild(head);

    // 释义：分义项 + 词性分块
    const defBox = el('div', 'lx-def');
    if (rich && rich.s && rich.s.length) {
      rich.s.forEach(sg => {
        if (rich.s.length > 1 && (sg.posLabel || sg.pos)) {
          const h = el('div', 'lx-pos-block');
          h.textContent = '【' + (sg.posLabel || sg.pos) + '】';
          defBox.appendChild(h);
        }
        const ol = el('ol', 'lx-senses');
        (sg.zh || []).forEach((z, i) => {
          const li = el('li', 'lx-sense');
          const num = el('span', 'lx-sense-num'); num.textContent = (i + 1) + '.';
          const txt = el('span', 'lx-sense-zh'); txt.textContent = z;
          li.appendChild(num); li.appendChild(txt); ol.appendChild(li);
        });
        defBox.appendChild(ol);
      });
    } else {
      const p = el('div', 'lx-zh'); p.textContent = r.zh || '（暂无中文释义）'; defBox.appendChild(p);
    }
    card.appendChild(defBox);

    // 教材标识
    if (r.textbook && r.textbook.length) {
      card.appendChild(makeTextbook(r.textbook));
    }
    // 短语
    if (rich && rich.p && rich.p.length) {
      const sec = el('div', 'lx-sec');
      const h = el('div', 'lx-sec-title'); h.textContent = '短语'; sec.appendChild(h);
      rich.p.forEach(p => {
        const row = el('div', 'lx-phrase');
        row.appendChild(makeSpeakBtn(p.fr, true));
        const w = el('span', 'lx-phrase-fr'); w.textContent = p.fr;
        const z = el('span', 'lx-phrase-zh'); z.textContent = p.zh;
        row.appendChild(w); row.appendChild(z);
        sec.appendChild(row);
      });
      card.appendChild(sec);
    }
    // 例句
    if (rich && rich.x && rich.x.length) {
      const sec = el('div', 'lx-sec');
      const h = el('div', 'lx-sec-title'); h.textContent = '例句'; sec.appendChild(h);
      rich.x.forEach(x => {
        const row = el('div', 'lx-example');
        row.appendChild(makeSpeakBtn(x.fr, true));
        const box = el('div', 'lx-example-body');
        const fr = el('div', 'lx-example-fr'); fr.textContent = x.fr;
        const zh = el('div', 'lx-example-zh'); zh.textContent = x.zh;
        box.appendChild(fr); box.appendChild(zh);
        row.appendChild(box);
        sec.appendChild(row);
      });
      card.appendChild(sec);
    }
    // 相关词：反义词 / 近义词
    const syn = rich && rich.y ? rich.y : [];
    const ant = rich && rich.a ? rich.a : [];
    if (syn.length || ant.length) {
      const sec = el('div', 'lx-sec');
      const h = el('div', 'lx-sec-title'); h.textContent = '相关词'; sec.appendChild(h);
      if (ant.length) sec.appendChild(makeRelRow('反义', ant));
      if (syn.length) sec.appendChild(makeRelRow('近义', syn));
      card.appendChild(sec);
    }
    return card;
  }
  function makeRelRow(label, words) {
    const row = el('div', 'lx-rel-row');
    const t = el('span', 'lx-rel-label'); t.textContent = label; row.appendChild(t);
    words.forEach(w => {
      const b = el('button', 'lx-rel-btn'); b.type = 'button'; b.textContent = w;
      b.onclick = () => { const input = $('#lx-input'); if (input) input.value = w; renderResults(w); };
      row.appendChild(b);
    });
    return row;
  }
  function makeTextbook(lessons) {
    const tb = el('div', 'lx-tb');
    const badge = el('span', 'lx-tb-badge'); badge.textContent = '📚 教材'; tb.appendChild(badge);
    lessons.forEach(L => {
      const b = el('button', 'lx-tb-link'); b.type = 'button';
      b.textContent = (L.no || '课次') + (L.title ? ' · ' + L.title : '');
      b.onclick = () => { if (typeof window.tbGoLesson === 'function') window.tbGoLesson(L.id); };
      tb.appendChild(b);
    });
    return tb;
  }
  function makeCompactCard(r) {
    const card = el('div', 'lx-card');
    const head = el('div', 'lx-card-head');
    const w = el('span', 'lx-word'); w.textContent = r.fr; head.appendChild(w);
    if (r.ipa) { const p = el('span', 'lx-ipa'); p.textContent = '/' + r.ipa.replace(/^\/|\/$/g, '') + '/'; head.appendChild(p); }
    if (r.pos) { const p = el('span', 'lx-pos'); p.textContent = r.pos; head.appendChild(p); }
    head.appendChild(makeSpeakBtn(r.fr));
    card.appendChild(head);
    const rich = r.rich;
    const zh = el('div', 'lx-zh');
    if (rich && rich.s && rich.s[0]) zh.textContent = rich.s[0].zh.slice(0, 6).join('、');
    else zh.textContent = r.zh;
    card.appendChild(zh);
    if (r.textbook && r.textbook.length) card.appendChild(makeTextbook(r.textbook));
    return card;
  }

  function renderResults(q) {
    const box = $('#lx-results');
    const status = $('#lx-status');
    if (!box || !status) return;
    box.innerHTML = '';
    const k = norm(q);
    if (!k) { status.textContent = '离线词库已就绪 · 输入单词开始查询'; return; }

    // 中文反查
    if (/[\u4e00-\u9fff]/.test(q)) {
      const keys = searchByChinese(q);
      if (!keys.length) { status.textContent = '未找到相关词条'; return; }
      status.textContent = '找到 ' + keys.length + ' 个结果';
      keys.forEach(key => { const r = lookupOne(key); if (r) box.appendChild(makeCompactCard(r)); });
      return;
    }

    // 精确命中：只显示主词卡，关联词放最后
    if (dictNorm[k]) {
      const r = lookupOne(dictNorm[k][0]);
      status.textContent = '找到 1 个词条';
      if (r) box.appendChild(renderSenseCard(r));
      const pref = [], cont = [];
      for (const key of uniqKeys) {
        if (key === k) continue;
        if (key.indexOf(k) === 0) pref.push(key);
        else if (key.indexOf(k) > 0) cont.push(key);
      }
      const ordered = pref.concat(cont).slice(0, 20);
      if (ordered.length) {
        const sec = el('div', 'lx-related');
        const h = el('div', 'lx-related-title'); h.textContent = '相关词（含 “' + q + '” 的词条）'; sec.appendChild(h);
        const grid = el('div', 'lx-related-grid');
        ordered.forEach(key => {
          const rr = lookupOne(key); if (!rr) return;
          const b = el('button', 'lx-related-item'); b.type = 'button';
          const w = el('span', 'lx-related-word'); w.textContent = rr.fr;
          const z = el('span', 'lx-related-zh'); z.textContent = rr.zh;
          b.appendChild(w); b.appendChild(z);
          b.onclick = () => { const input = $('#lx-input'); if (input) input.value = rr.fr; renderResults(rr.fr); };
          grid.appendChild(b);
        });
        sec.appendChild(grid);
        box.appendChild(sec);
      }
      return;
    }

    // 无精确：前缀/包含
    const pref = [], cont = [];
    for (const key of uniqKeys) {
      if (key.indexOf(k) === 0) pref.push(key);
      else if (key.indexOf(k) > 0) cont.push(key);
    }
    const keys = pref.concat(cont).slice(0, 30);
    if (!keys.length) { status.textContent = '未找到相关词条，试试别的拼写或中文意思'; return; }
    status.textContent = '找到 ' + keys.length + ' 个结果';
    keys.forEach(key => { const r = lookupOne(key); if (r) box.appendChild(makeCompactCard(r)); });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    const input = $('#lx-input');
    const clear = $('#lx-clear');
    if (!input) return;
    let timer = null;
    let composing = false;   // 输入法组字中（法语/中文输入法），此时不提前查询

    // 执行一次完整查询（提交/搜索键走这里）：取消防抖、收起联想、立即出结果
    function submitQuery() {
      clearTimeout(timer);
      if (suggestBox) suggestBox.hidden = true;
      renderResults(input.value.trim());
    }

    input.addEventListener('compositionstart', () => { composing = true; });
    input.addEventListener('compositionend', () => {
      composing = false;
      clearTimeout(timer);
      const q = input.value.trim();
      timer = setTimeout(() => { renderSuggest(q); renderResults(q); }, 60);
    });

    input.addEventListener('input', () => {
      if (composing) return;   // 组字过程中不触发，等 compositionend
      clearTimeout(timer);
      const q = input.value.trim();
      timer = setTimeout(() => { renderSuggest(q); renderResults(q); }, 160);
    });

    // ① 桌面/部分移动浏览器：keydown 里判断回车（含旧版 keyCode 与移动端别名）
    input.addEventListener('keydown', e => {
      const k = e.key;
      const isEnter = k === 'Enter' || k === 'Search' || k === 'Go' || e.keyCode === 13;
      if (isEnter) {
        e.preventDefault();
        if (composing) return;   // 组字中的第一次回车只是确认候选，不当作提交
        submitQuery();
        try { input.blur(); } catch (_) {}
      }
      if (e.key === 'Escape') { input.value = ''; if (suggestBox) suggestBox.hidden = true; renderResults(''); }
    });

    // ② type="search" 原生搜索键：部分移动端只触发 search 事件，不触发 keydown
    input.addEventListener('search', e => {
      e.preventDefault();
      submitQuery();
    });

    // ③ 兜底：若包在 form 内，软键盘"搜索/前往"键会触发 submit
    const form = $('#lx-searchform');
    if (form) form.addEventListener('submit', e => { e.preventDefault(); submitQuery(); });

    input.addEventListener('blur', () => { setTimeout(() => { if (suggestBox) suggestBox.hidden = true; }, 150); });
    if (clear) clear.onclick = () => { input.value = ''; if (suggestBox) suggestBox.hidden = true; renderResults(''); input.focus(); };
    $$('#lx-quick button').forEach(b => b.onclick = () => {
      input.value = b.dataset.q || b.textContent.trim();
      submitQuery();
    });
  }

  window.stopLexicon = stopLexSpeak;
  window.Lexicon = {
    search(q, limit) {
      limit = limit || 40;
      const k = norm(q); if (!k) return [];
      if (dictNorm[k]) { const r = lookupOne(dictNorm[k][0]); return r ? [r] : []; }
      const keys = [];
      for (const key of uniqKeys) {
        if (key.indexOf(k) >= 0) { keys.push(key); if (keys.length >= limit) break; }
      }
      return keys.map(key => lookupOne(key)).filter(Boolean).slice(0, limit);
    },
    lookupOne,
    get dictCount() { return Object.keys(dict).length; },
    get mainCount() { return mainCount; },
    get supplementCount() { return Object.keys(dict).length - mainCount; },
    get richCount() { return Object.keys(RDATA).length; },
    get textbookCount() { return Object.keys(textIndex).length; },
    render: renderResults
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
