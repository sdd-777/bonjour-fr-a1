/* =========================================================
   🔍 法语词典 · 查词模块
   数据源：
   1) LEXICON —— 离线法语-中文词典（FreeDict/WikDict fra-zho，CC BY-SA 3.0，10747 词）
   2) LEXICON_EXTRA —— 补充词典（CFDICT 反转，CC BY-SA 3.0，约 3 万词）
   3) 教材词表 TB_LESSONS[*].vocab —— 带教材标识，可跳转对应课次
   4) 单词模块 WORD_CATS、动词模块 VERBS —— 合并进索引
   功能：精确/前缀/包含/中文反查、音标、词性、发音、教材词标识与跳转
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
  // 法语重音还原友好：把用户输入的重音去掉做比对，但保留原词显示

  /* ---------- 数据源 ---------- */
  // 主词典 LEXICON（带音标/词性）+ 补充词典 LEXICON_EXTRA（CFDICT 反转）
  // 冲突时主词典优先，补充词库只填空缺
  const dict = {};
  if (typeof LEXICON !== 'undefined') Object.assign(dict, LEXICON);
  if (typeof LEXICON_EXTRA !== 'undefined') {
    Object.keys(LEXICON_EXTRA).forEach(w => {
      if (dict[w]) return; // 主词典已有，不覆盖
      const a = LEXICON_EXTRA[w] || [];
      dict[w] = { zh: a[0] || '', ipa: a[1] || '', pos: a[2] || '', _src: 'cfdict' };
    });
  }
  const mainCount = (typeof LEXICON !== 'undefined') ? Object.keys(LEXICON).length : 0;

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

  // 单词模块 / 动词模块额外词 -> 并入补充词典（若离线词典没有）
  const extra = {};
  function addExtra(fr, zh, pos, ipa) {
    if (!fr) return;
    const k = norm(fr);
    if (!k) return;
    if (!extra[k]) extra[k] = { fr, zh: zh || '', pos: pos || '', ipa: ipa || '' };
  }
  function buildExtraIndex() {
    if (typeof WORD_CATS !== 'undefined') {
      WORD_CATS.forEach(cat => (cat.items || []).forEach(it => {
        if (it.name && it.name.fr) addExtra(it.name.fr, it.zh, '', '');
        if (it.nat) { ['m', 'f'].forEach(g => { if (it.nat[g]) addExtra(it.nat[g].fr, it.nat[g].zh, '', ''); }); }
      }));
    }
    if (typeof VERBS !== 'undefined') {
      VERBS.forEach(v => addExtra(v.inf, v.zh, 'v.', v.ipa || ''));
    }
  }

  buildTextbookIndex();
  buildExtraIndex();

  // 预计算离线词典的归一化 key 列表（用于模糊/前缀匹配）
  const dictKeys = Object.keys(dict);
  const dictNorm = {}; // norm -> 原词数组
  dictKeys.forEach(w => {
    const k = norm(w);
    (dictNorm[k] || (dictNorm[k] = [])).push(w);
  });
  const allNormKeys = Object.keys(dictNorm).concat(Object.keys(extra)).concat(Object.keys(textIndex));
  const uniqKeys = Array.from(new Set(allNormKeys));

  /* ---------- 发音 ---------- */
  let lxAudio = null;
  function stopLexSpeak() {
    if (lxAudio) { try { lxAudio.pause(); } catch (e) {} lxAudio = null; }
    try { window.speechSynthesis && speechSynthesis.cancel(); } catch (e) {}
    $$('#view-lexicon .lx-speak.playing').forEach(b => b.classList.remove('playing'));
  }
  function wordAudioCandidates(fr) {
    // 复用已有预录音频：words/sw-{slug}.mp3、verbs/vb-{id}-inf.mp3
    const slug = norm(fr).replace(/\s+/g, '');
    const cands = ['assets/audio/words/sw-' + slug + '.mp3', 'assets/audio/verbs/vb-' + slug + '-inf.mp3'];
    return cands;
  }
  function speakWord(fr, btn) {
    stopLexSpeak();
    if (btn) btn.classList.add('playing');
    const done = () => { if (btn) btn.classList.remove('playing'); };
    // 试预录音频
    const cands = wordAudioCandidates(fr);
    let i = 0;
    const tryNext = () => {
      if (i < cands.length) {
        const a = new Audio(cands[i++]);
        lxAudio = a;
        a.onended = done;
        a.onerror = () => { tryNext(); };
        try { a.play(); } catch (e) { tryNext(); }
      } else {
        // 回退 TTS（强制法语）
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

  /* ---------- 查询 ---------- */
  function lookupOne(word) {
    // 返回 { fr, zh, ipa, pos, textbook:[...] } 或 null
    const k = norm(word);
    if (!k) return null;
    let zh = '', ipa = '', pos = '', displayFr = word, src = '';

    // 离线词典（取最长原词显示优先）
    const dictWords = dictNorm[k];
    if (dictWords && dictWords.length) {
      displayFr = dictWords[0];
      const d = dict[displayFr] || {};
      zh = d.zh || ''; ipa = d.ipa || ''; pos = d.pos || ''; src = d._src || '';
    }
    // 补充词库（单词/动词）——优先用它的中文（更贴近教材）
    if (extra[k]) {
      if (!zh) zh = extra[k].zh;
      if (!ipa) ipa = extra[k].ipa;
      if (!pos) pos = extra[k].pos;
      if (!displayFr) displayFr = extra[k].fr;
    }
    // 教材词优先提供中文
    const tb = textIndex[k];
    if (tb) {
      if (!zh) zh = tb.zh;
      if (!displayFr) displayFr = tb.fr;
    }
    if (!zh && !ipa) return null;
    return { fr: displayFr, zh, ipa, pos, src, textbook: tb ? tb.lessons : [], key: k };
  }

  function search(q, limit) {
    limit = limit || 40;
    const k = norm(q);
    if (!k) return [];
    const exact = [], prefix = [], contains = [], zhhit = [];

    // 先精确（法语）
    const one = lookupOne(q);
    if (one) exact.push(one);

    // 遍历归一化 key
    uniqKeys.forEach(key => {
      if (key === k) return;
      if (key.indexOf(k) === 0) prefix.push(key);
      else if (key.indexOf(k) >= 0) contains.push(key);
    });

    // 中文反查（含中文时才做）
    if (/[\u4e00-\u9fff]/.test(q)) {
      const cq = q.replace(/\s+/g, '');
      uniqKeys.forEach(key => {
        const r = lookupOne(key);
        if (r && r.zh && r.zh.replace(/\s+/g, '').indexOf(cq) >= 0) zhhit.push(key);
      });
    }

    const gather = keys => {
      const seen = new Set();
      keys.forEach(key => {
        if (seen.has(key)) return;
        seen.add(key);
        const r = lookupOne(key);
        if (r && !exact.some(e => e.key === r.key)) exact.push(r); // 复用 exact 数组承载结果
      });
    };
    gather(prefix.slice(0, limit));
    if (exact.length < limit) gather(contains.slice(0, limit));
    if (exact.length < limit && zhhit.length) gather(zhhit.slice(0, limit));

    return exact.slice(0, limit);
  }

  /* ---------- 渲染 ---------- */
  function renderResults(q) {
    const box = $('#lx-results');
    const status = $('#lx-status');
    if (!box || !status) return;
    box.innerHTML = '';
    const k = norm(q);
    if (!k) {
      status.textContent = '离线词库已就绪 · 输入单词开始查询';
      return;
    }
    const results = search(q, 40);
    if (!results.length) {
      status.textContent = '未找到相关词条，试试别的拼写或中文意思';
      return;
    }
    status.textContent = '找到 ' + results.length + ' 个结果';

    results.forEach(r => {
      const card = el('div', 'lx-card');
      const head = el('div', 'lx-card-head');
      const word = el('span', 'lx-word');
      word.textContent = r.fr;
      head.appendChild(word);

      if (r.ipa) { const ipa = el('span', 'lx-ipa'); ipa.textContent = '/' + r.ipa.replace(/^\/|\/$/g, '') + '/'; head.appendChild(ipa); }
      if (r.pos) { const pos = el('span', 'lx-pos'); pos.textContent = r.pos; head.appendChild(pos); }
      if (r.src === 'cfdict') { const tag = el('span', 'lx-src'); tag.textContent = '补充词库'; head.appendChild(tag); }

      const speak = el('button', 'lx-speak');
      speak.type = 'button'; speak.textContent = '🔊'; speak.title = '听发音';
      speak.onclick = () => speakWord(r.fr, speak);
      head.appendChild(speak);
      card.appendChild(head);

      const zh = el('div', 'lx-zh');
      zh.textContent = r.zh || '（暂无中文释义）';
      card.appendChild(zh);

      if (r.textbook && r.textbook.length) {
        const tb = el('div', 'lx-tb');
        const badge = el('span', 'lx-tb-badge');
        badge.textContent = '📚 教材';
        tb.appendChild(badge);
        r.textbook.forEach(L => {
          const b = el('button', 'lx-tb-link');
          b.type = 'button';
          b.textContent = (L.no || '课次') + (L.title ? ' · ' + L.title : '');
          b.onclick = () => {
            if (typeof window.tbGoLesson === 'function') window.tbGoLesson(L.id);
          };
          tb.appendChild(b);
        });
        card.appendChild(tb);
      }

      box.appendChild(card);
    });
  }

  /* ---------- 初始化 ---------- */
  function init() {
    const input = $('#lx-input');
    const clear = $('#lx-clear');
    if (!input) return;

    let timer = null;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      const q = input.value.trim();
      timer = setTimeout(() => renderResults(q), 180);
    });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') { e.preventDefault(); clearTimeout(timer); renderResults(input.value.trim()); }
      if (e.key === 'Escape') { input.value = ''; renderResults(''); }
    });
    if (clear) clear.onclick = () => { input.value = ''; renderResults(''); input.focus(); };

    $$('#lx-quick button').forEach(b => b.onclick = () => {
      input.value = b.dataset.q || b.textContent.trim();
      renderResults(input.value);
    });
  }

  // 视图离开时停止发音
  window.stopLexicon = stopLexSpeak;

  // 暴露给测试
  window.Lexicon = {
    search, lookupOne,
    get dictCount() { return dictKeys.length; },
    get mainCount() { return mainCount; },
    get supplementCount() { return dictKeys.length - mainCount; },
    get textbookCount() { return Object.keys(textIndex).length; },
    get extraCount() { return Object.keys(extra).length; },
    render: renderResults
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
