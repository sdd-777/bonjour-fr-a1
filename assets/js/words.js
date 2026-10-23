/* =========================================================
   单词小图鉴 — 国家与国籍 / 职业 / 生活用品 / 数字 / 形容副词
   + 📞 法国电话号码听写小游戏
   依赖：words-data.js（WORD_CATS / frenchNumber）
        app.js 的全局 esc / safePlay / frVoice / toast / confetti / showView
   音频：assets/audio/words/{name}.mp3（edge-tts · fr-FR-DeniseNeural）
   ========================================================= */
'use strict';

/* $ / $$ / esc / safePlay / frVoice / toast / confetti / showView 复用 app.js 全局 */

/* =========================================================
   一、音标分段渲染
   每个 parts 分段 = 一个「字母组合 + 小一号 IPA」小块；
   p 为空串表示该组合不发音。
   ========================================================= */
function segsHTML(parts){
  return '<div class="wc-segs">' + parts.map(p => {
    const silent = (p.p === '' || p.p == null);
    return '<span class="wseg">' +
      '<span class="wseg-t' + (silent ? ' silent' : '') + '">' + esc(p.t) + '</span>' +
      '<span class="wseg-p' + (silent ? ' silent-p' : '') + '">' + (silent ? '不发音' : esc(p.p)) + '</span>' +
      '</span>';
  }).join('') + '</div>';
}
/* 整体音标：[la.ʃin]（parts 的 p 自带方括号，先剥掉再拼接） */
function fullIPA(parts){
  return '[' + parts.map(p => String(p.p).replace(/^\[|\]$/g, '')).filter(Boolean).join('.') + ']';
}
/* 一组「播放按钮」：预录音频优先，失败回退浏览器合成 */
function audioBtns(name, fr){
  return '<div class="wc-audio">' +
    '<button class="wc-play" data-a="' + esc(name) + '" data-t="' + esc(fr) + '" title="听标准法音">🔊</button>' +
    '<button class="wc-play slow" data-a="' + esc(name) + '" data-t="' + esc(fr) + '" data-slow="1" title="慢速跟读">🐢</button>' +
    '</div>';
}
/* 一个词形行：标签 + 法语词 + 整体音标 + 分段音标 */
function formRow(tagCls, tagText, fr, parts, name, zhInline){
  return '<div class="wc-form">' +
    '<div class="wc-form-top">' +
      (tagText ? '<span class="wc-tag ' + tagCls + '">' + esc(tagText) + '</span>' : '') +
      '<span class="wc-fr">' + esc(fr) + (zhInline ? '<span class="wc-zh-inline">' + esc(zhInline) + '</span>' : '') + '</span>' +
      audioBtns(name, fr) +
    '</div>' +
    '<div class="wc-ipa">' + fullIPA(parts) + '</div>' +
    segsHTML(parts) +
    '</div>';
}

/* =========================================================
   二、单词音频播放（与句子朗读同套路：文件优先 → 合成回退）
   ========================================================= */
const WAUDIO_BASE = 'assets/audio/words';
let wMedia = null;   /* 当前播放的 <audio> */
let wToken = 0;      /* 播放令牌（防竞态） */
let NUM_TEXT = {};   /* 数字读法表 0-100 */

function stopWordAudio(){
  wToken++;
  if (wMedia){ try{ wMedia.pause(); }catch(e){} wMedia = null; }
  if (window.speechSynthesis){ try{ speechSynthesis.cancel(); }catch(e){} }
  $$('.wc-play.playing').forEach(b => b.classList.remove('playing'));
  $$('#phone-inputs .pair-box.playing').forEach(b => b.classList.remove('playing'));
}

function playWordAudio(name, text, btn, slow){
  stopWordAudio();
  const token = ++wToken;
  if (btn) btn.classList.add('playing');
  const done = () => {
    if (token === wToken && btn) btn.classList.remove('playing');
    if (token === wToken) wMedia = null;
  };
  const fallback = () => {
    if (token !== wToken) return;
    if (!window.speechSynthesis){ done(); return; }
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fr-FR'; u.rate = slow ? 0.6 : 0.9;
    const v = frVoice(); if (v) u.voice = v;
    u.onend = done; u.onerror = done;
    try{ speechSynthesis.speak(u); }catch(e){ done(); }
  };
  const a = new Audio(WAUDIO_BASE + '/' + name + '.mp3');
  wMedia = a;
  try{ a.preservesPitch = true; }catch(e){}
  a.playbackRate = slow ? 0.6 : 1;
  a.onerror = fallback;
  a.onended = done;
  safePlay(a, fallback);
  setTimeout(done, 6000);   /* 超时保护 */
}

/* =========================================================
   三、职业水彩插画（SVG 手绘小人 + 职业道具，带浮动动画）
   ========================================================= */
const INK = '#6B4F35', SKIN = '#F7CDA0';

/* 通用小人：bodyColor 衣服色 / hair 头发片段 / prop 道具片段 */
function person(bodyColor, hair, prop, armUp){
  const arms = armUp
    ? '<path d="M40 84 Q24 72 20 54" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M80 84 Q96 72 100 54" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>'
    : '<path d="M40 86 Q30 96 34 104" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>' +
      '<path d="M80 86 Q90 96 86 104" fill="none" stroke="' + INK + '" stroke-width="7" stroke-linecap="round"/>';
  return '<svg class="wc-art" viewBox="0 0 120 130" aria-hidden="true">' +
    '<ellipse cx="60" cy="123" rx="30" ry="4.5" fill="' + INK + '" opacity=".08"/>' +
    '<path d="M36 106 Q30 84 42 76 L78 76 Q90 84 84 106 Q60 116 36 106 Z" fill="' + bodyColor + '" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>' +
    arms +
    '<rect x="48" y="103" width="9" height="15" rx="4" fill="#8A6B4D"/>' +
    '<rect x="63" y="103" width="9" height="15" rx="4" fill="#8A6B4D"/>' +
    '<circle cx="60" cy="46" r="23" fill="' + SKIN + '" stroke="' + INK + '" stroke-width="3"/>' +
    hair +
    '<path d="M52 44 Q55 40 58 44 M62 44 Q65 40 68 44" fill="none" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round"/>' +
    '<path d="M55 55 Q60 59.5 65 55" fill="none" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round"/>' +
    '<ellipse cx="46" cy="51" rx="4" ry="2.8" fill="#F0B7C0" opacity=".85"/>' +
    '<ellipse cx="74" cy="51" rx="4" ry="2.8" fill="#F0B7C0" opacity=".85"/>' +
    prop +
    '</svg>';
}
/* 头发片段 */
const HAIR = {
  short: '<path d="M38 44 Q36 23 60 22 Q84 23 82 44 Q77 31 60 30 Q43 31 38 44 Z" fill="#4A3428"/>',
  long: '<path d="M38 44 Q36 23 60 22 Q84 23 82 44 Q77 31 60 30 Q43 31 38 44 Z" fill="#4A3428"/>' +
        '<path d="M39 46 Q34 72 41 84 L49 80 Q43 62 45 47 Z" fill="#4A3428"/>' +
        '<path d="M81 46 Q86 72 79 84 L71 80 Q77 62 75 47 Z" fill="#4A3428"/>',
  bun: '<path d="M38 44 Q36 23 60 22 Q84 23 82 44 Q77 31 60 30 Q43 31 38 44 Z" fill="#4A3428"/>' +
       '<circle cx="60" cy="17" r="7.5" fill="#4A3428" stroke="' + INK + '" stroke-width="2"/>',
  /* 记者软帽 / 空（帽子盖住头发） */
  fedora: '<path d="M39 36 Q39 17 60 17 Q81 17 81 36 Z" fill="#5F4A33" stroke="' + INK + '" stroke-width="2.4"/>' +
          '<rect x="37" y="34" width="46" height="6" rx="3" fill="#3A2E22" stroke="' + INK + '" stroke-width="2"/>',
  cap: ''
};
/* 道具片段 */
const PROP = {
  /* 演员：一悲一喜两张面具 */
  actor: '<g class="job-note"><circle cx="27" cy="32" r="11" fill="#FDF3E3" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M23 30 Q25 27 27 30 M29 30 Q31 27 31 30" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M23 37 Q27 34 31 37" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/></g>' +
    '<g class="job-note" style="animation-delay:-1.2s"><circle cx="93" cy="32" r="11" fill="#F6CBD2" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M89 30 Q91 27 93 30 M95 30 Q97 27 97 30" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M89 39 Q93 42 97 39" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/></g>' +
    '<path d="M53 77 L60 82 L67 77 L67 84 L60 88 L53 84 Z" fill="#DE8492" stroke="' + INK + '" stroke-width="2.2" stroke-linejoin="round"/>',
  /* 歌手：话筒 + 音符 */
  singer: '<rect x="86" y="62" width="11" height="28" rx="5.5" fill="#8A93A6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="91.5" cy="56" r="10.5" fill="#B9C2D0" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="88" cy="53" r="2" fill="#FFFDF6"/><circle cx="95" cy="53" r="2" fill="#FFFDF6"/>' +
    '<text class="job-note" x="14" y="42" font-size="17" fill="#DE8492" font-weight="bold">♪</text>' +
    '<text class="job-note" x="24" y="30" font-size="13" fill="#E8954A" font-weight="bold" style="animation-delay:-.9s">♫</text>',
  /* 记者：话筒 + 记者证 */
  journalist: '<rect x="84" y="64" width="10" height="26" rx="5" fill="#8A93A6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="89" cy="58" r="9.5" fill="#B9C2D0" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="16" y="84" width="26" height="19" rx="3" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M20 88 h18 M20 93 h18 M20 98 h11" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>' +
    '<circle cx="29" cy="86.5" r="2.4" fill="#DE8492"/>',
  /* 学生：毕业帽 + 书 */
  student: '<path d="M60 12 L86 24 L60 36 L34 24 Z" fill="#3A4A63" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<rect x="51" y="24" width="18" height="7" rx="2" fill="#26324A"/>' +
    '<path d="M86 24 v10" stroke="' + INK + '" stroke-width="2.4" stroke-linecap="round"/><circle cx="86" cy="36" r="3" fill="#F2C14E" stroke="' + INK + '" stroke-width="2"/>' +
    '<rect x="18" y="86" width="28" height="20" rx="2.5" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M32 86 v20" stroke="' + INK + '" stroke-width="2"/>' +
    '<path d="M22 91 h7 M22 96 h7 M36 91 h7 M36 96 h7" stroke="' + INK + '" stroke-width="1.5" stroke-linecap="round"/>',
  /* 售货员：价签 + 购物袋 */
  seller: '<g transform="rotate(14 90 80)"><rect x="78" y="71" width="24" height="17" rx="3.5" fill="#F2C14E" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="83" cy="75.5" r="2.2" fill="' + INK + '"/>' +
    '<path d="M88 79 h10" stroke="' + INK + '" stroke-width="2" stroke-linecap="round"/></g>' +
    '<path d="M14 82 v22 a4 4 0 0 0 4 4 h16 a4 4 0 0 0 4-4 V82" fill="#F6CBD2" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M20 82 v-5 a5 5 0 0 1 10 0 v5" fill="none" stroke="' + INK + '" stroke-width="2.4"/>',
  /* 服务员：托盘 + 水杯 */
  waiter: '<ellipse cx="90" cy="74" rx="19" ry="5.5" fill="#D9C39A" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M78 74 h24" stroke="' + INK + '" stroke-width="2"/>' +
    '<path d="M83 52 h14 v20 a7 7 0 0 1 -14 0 Z" fill="#DCE8F1" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M85 58 h10" stroke="#7FA3C4" stroke-width="2.4" stroke-linecap="round"/>',
  /* 厨师：厨师帽 + 平底锅 */
  chef: '<path d="M43 30 Q40 10 60 10 Q80 10 77 30 Z" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<rect x="44" y="27" width="32" height="9" rx="3" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="88" cy="86" r="13" fill="#8A93A6" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<circle cx="88" cy="86" r="7" fill="#6E7887" opacity=".5"/>' +
    '<rect x="99" y="83" width="16" height="6" rx="3" fill="#5F4A33" stroke="' + INK + '" stroke-width="2.2"/>',
  /* 警察：警帽 + 徽章 */
  police: '<path d="M38 36 Q38 16 60 16 Q82 16 82 36 Z" fill="#3A4A63" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<rect x="36" y="33" width="48" height="8" rx="3.5" fill="#26324A" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M60 19 l3.2 6.6 7.3.6 -5.6 4.8 1.8 7.2 -6.7-3.8 -6.7 3.8 1.8-7.2 -5.6-4.8 7.3-.6 z" fill="#F2C14E" stroke="' + INK + '" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M47 92 l4 8 4-8 z" fill="#F2C14E" stroke="' + INK + '" stroke-width="2"/>',
  /* 邮递员：信封 + 邮包 */
  postman: '<rect x="14" y="68" width="28" height="20" rx="2.5" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M14 70 L28 81 L42 70" fill="none" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<path d="M26 82 q20-8 44 4" fill="none" stroke="#7FA3C4" stroke-width="7" stroke-linecap="round"/>' +
    '<path d="M70 86 q22-4 26 12 q-14 8-24 0 q4-8-2-12z" fill="#5F4A33" stroke="' + INK + '" stroke-width="2.4"/>',
  /* 农民：草帽 + 锄头 */
  farmer: '<ellipse cx="60" cy="31" rx="35" ry="8.5" fill="#F2C14E" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<path d="M44 31 Q46 12 60 12 Q74 12 76 31 Z" fill="#F7D9A8" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M40 26 h40" stroke="' + INK + '" stroke-width="2"/>' +
    '<rect x="93" y="54" width="5" height="46" rx="2.5" fill="#8A6B4D" transform="rotate(12 95 77)"/>' +
    '<path d="M84 50 L99 45 L102 54 L87 59 Z" fill="#8A93A6" stroke="' + INK + '" stroke-width="2.2" stroke-linejoin="round"/>',
  /* 音乐家：吉他 + 音符 */
  musician: '<ellipse cx="90" cy="80" rx="14" ry="17" fill="#DE8355" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<circle cx="90" cy="80" r="4.5" fill="#5F4A33"/>' +
    '<rect x="86.5" y="50" width="7" height="20" rx="2" fill="#8A6B4D" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<rect x="85" y="47" width="10" height="5" rx="2" fill="#5F4A33"/>' +
    '<text class="job-note" x="12" y="44" font-size="17" fill="#A98BC7" font-weight="bold">♪</text>' +
    '<text class="job-note" x="22" y="30" font-size="13" fill="#DE8492" font-weight="bold" style="animation-delay:-1.1s">♫</text>',
  /* 舞蹈家：芭蕾裙 + 舒展手臂 + 音符 */
  dancer: '<path d="M34 88 Q28 78 42 73 L78 73 Q92 78 86 88 Q60 97 34 88 Z" fill="#F6CBD2" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<circle cx="60" cy="17" r="7" fill="#4A3428"/>' +
    '<text class="job-note" x="14" y="40" font-size="16" fill="#DE8492" font-weight="bold">♪</text>' +
    '<text class="job-note" x="96" y="34" font-size="13" fill="#E8954A" font-weight="bold" style="animation-delay:-.8s">♫</text>',
  /* 摄影师：相机 + 闪光 */
  photographer: '<rect x="74" y="66" width="36" height="25" rx="6" fill="#5F4A33" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<rect x="83" y="60" width="12" height="7" rx="2.5" fill="#5F4A33" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<circle cx="92" cy="78.5" r="8.5" fill="#DCE8F1" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<circle cx="92" cy="78.5" r="4" fill="#7FA3C4"/>' +
    '<circle cx="103" cy="71" r="2" fill="#DE8492"/>' +
    '<path class="job-note" d="M96 56 l0-8 M96 48 m-3 3 l3-3 3 3" stroke="#F2C14E" stroke-width="2.4" stroke-linecap="round" fill="none"/>',
  /* 画家：调色盘 + 画笔 */
  painter: '<path d="M76 70 Q95 60 106 75 Q113 92 94 95 Q75 95 72 80 Z" fill="#FDF3E3" stroke="' + INK + '" stroke-width="2.6"/>' +
    '<circle cx="84" cy="77" r="2.8" fill="#DE8492"/><circle cx="92" cy="73" r="2.8" fill="#7FA3C4"/>' +
    '<circle cx="100" cy="79" r="2.8" fill="#F2C14E"/><circle cx="88" cy="86" r="2.8" fill="#7FA886"/>' +
    '<rect x="68" y="46" width="5" height="22" rx="2.5" fill="#8A6B4D" transform="rotate(-22 70 57)"/>' +
    '<path d="M62 44 L72 41 L74 49 L64 52 Z" fill="#DE8492" stroke="' + INK + '" stroke-width="2.2" stroke-linejoin="round"/>',
  /* 作家：羽毛笔 + 书 */
  writer: '<path d="M90 96 Q101 58 82 28 Q74 58 70 78 Q79 90 90 96 Z" fill="#FDF3E3" stroke="' + INK + '" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<path d="M82 30 Q79 52 74 72" fill="none" stroke="' + INK + '" stroke-width="1.8"/>' +
    '<rect x="16" y="84" width="28" height="20" rx="2.5" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M30 84 v20" stroke="' + INK + '" stroke-width="2"/>' +
    '<path d="M20 89 h7 M20 94 h7 M35 89 h7 M35 94 h7" stroke="' + INK + '" stroke-width="1.5" stroke-linecap="round"/>',
  /* 理发师：剪刀 + 梳子 */
  barber: '<circle cx="83" cy="88" r="5.5" fill="none" stroke="' + INK + '" stroke-width="3"/>' +
    '<circle cx="99" cy="88" r="5.5" fill="none" stroke="' + INK + '" stroke-width="3"/>' +
    '<path d="M83 83 L92 62 M99 83 L90 62" stroke="' + INK + '" stroke-width="3" stroke-linecap="round"/>' +
    '<rect x="14" y="52" width="8" height="26" rx="3" fill="#F2C14E" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<path d="M16 58 v14 M19 58 v14 M22 58 v14" stroke="' + INK + '" stroke-width="1.6" stroke-linecap="round"/>',
  /* 律师：法槌 + 法典 */
  lawyer: '<g transform="rotate(-16 88 66)"><rect x="76" y="60" width="24" height="10" rx="4" fill="#8A6B4D" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="85" y="69" width="6" height="10" fill="#8A6B4D" stroke="' + INK + '" stroke-width="2"/></g>' +
    '<rect x="90" y="82" width="22" height="8" rx="2.5" fill="#F2C14E" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="16" y="82" width="28" height="22" rx="2.5" fill="#3A4A63" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<path d="M30 82 v22" stroke="#F2C14E" stroke-width="2"/>',
  /* 护士：护士帽 + 病历夹 */
  nurse: '<path d="M43 32 Q43 13 60 13 Q77 13 77 32 Z" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.6" stroke-linejoin="round"/>' +
    '<path d="M56 18 h8 v12 h12 v8 h-12 v12 h-8 v-12 h-12 v-8 h12 z" fill="#DE8492"/>' +
    '<rect x="82" y="70" width="26" height="30" rx="3" fill="#FFFDF6" stroke="' + INK + '" stroke-width="2.4"/>' +
    '<rect x="88" y="66" width="14" height="6" rx="2.5" fill="#D9C39A" stroke="' + INK + '" stroke-width="2.2"/>' +
    '<path d="M88 80 h14 M88 86 h14 M88 92 h9" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round"/>'
};

/* art key → 完整 SVG */
const JOB_ART = {
  actor:        person('#A98BC7', HAIR.short, PROP.actor),
  singer:       person('#DE8492', HAIR.long,  PROP.singer),
  journalist:   person('#7FA886', HAIR.fedora, PROP.journalist),
  student:      person('#7FA3C4', HAIR.short, PROP.student),
  seller:       person('#F7D9A8', HAIR.bun,   PROP.seller),
  waiter:       person('#FFFDF6', HAIR.short, PROP.waiter + '<path d="M53 77 L60 82 L67 77 L67 84 L60 88 L53 84 Z" fill="#26324A" stroke="' + INK + '" stroke-width="2.2" stroke-linejoin="round"/>'),
  chef:         person('#FFFDF6', HAIR.cap, PROP.chef),
  police:       person('#3A4A63', HAIR.cap, PROP.police),
  postman:      person('#7FA3C4', HAIR.short, PROP.postman),
  farmer:       person('#7FA886', HAIR.cap, PROP.farmer),
  musician:     person('#A98BC7', HAIR.long,  PROP.musician),
  dancer:       person('#F6CBD2', HAIR.bun,   PROP.dancer, true),
  photographer: person('#5F4A33', HAIR.short, PROP.photographer),
  painter:      person('#F6CBD2', HAIR.long,  PROP.painter),
  writer:       person('#DE8355', HAIR.bun,   PROP.writer),
  barber:       person('#DCE8F1', HAIR.short, PROP.barber),
  lawyer:       person('#3A4A63', HAIR.short, PROP.lawyer),
  nurse:        person('#FFFDF6', HAIR.cap, PROP.nurse)
};
function jobArt(key){ return JOB_ART[key] || JOB_ART.writer; }

/* =========================================================
   四、各类别卡片渲染
   ========================================================= */
function genderTag(g){
  return g === 'f' ? '<span class="wc-gender gt-f">la · 阴性</span>'
       : g === 'm' ? '<span class="wc-gender gt-m">le · 阳性</span>'
       : '<span class="wc-gender gt-pl">复数</span>';
}

/* 国家卡：国旗 + 国名（阴阳性）+ 国籍形容词男女两行 */
function countryCard(it, i){
  const fr = it.name.fr;
  const g = fr.startsWith('les') ? 'pl'
          : fr.startsWith('la') ? 'f'
          : fr.startsWith('le') ? 'm'
          : /e$/.test(fr) ? 'f' : 'm';
  return '<div class="wc-head">' +
    '<span class="wc-flag">' + it.flag + '</span>' +
    '<div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' + genderTag(g) + '</div>' +
    '</div><div class="wc-forms">' +
    formRow('gt-pl', '国家名', it.name.fr, it.name.parts, 'c-' + i) +
    formRow('tag-m', '男 · il est', it.nat.m.fr, it.nat.m.parts, 'c-' + i + 'm', it.nat.m.zh) +
    formRow('tag-f', '女 · elle est', it.nat.f.fr, it.nat.f.parts, 'c-' + i + 'f', it.nat.f.zh) +
    '</div>';
}

/* 职业卡：SVG 插画 + 阴阳性两行 */
function jobCard(it, i){
  const head = '<div class="wc-head">' + jobArt(it.art) +
    '<div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
    (it.same ? '<span class="wc-gender gt-pl">男女同形</span>' : '<span class="wc-gender gt-m">un / une</span>') +
    '</div></div>';
  const forms = it.same
    ? formRow('tag-m', 'un / une', it.m.fr, it.m.parts, 'j-' + i)
    : formRow('tag-m', 'un · 男', it.m.fr, it.m.parts, 'j-' + i) +
      formRow('tag-f', 'une · 女', it.f.fr, it.f.parts, 'j-' + i + 'f');
  return head + '<div class="wc-forms">' + forms + '</div>';
}

/* 用品卡：冠词徽章（体现阴阳性）+ 单词行 */
function thingCard(it, i){
  const art = (it.w.fr.match(/^(la|le|l')/) || [''])[0];
  const g = it.w.g === 'm' ? 'm' : 'f';
  return '<div class="wc-head">' +
    '<span class="wc-badge ' + (g === 'm' ? 'gt-m' : 'gt-f') + '">' + esc(art) + '</span>' +
    '<div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
    (g === 'm' ? '<span class="wc-gender gt-m">le · 阳性</span>' : '<span class="wc-gender gt-f">la · 阴性</span>') +
    '</div></div><div class="wc-forms">' +
    formRow(g === 'm' ? 'tag-m' : 'tag-f', g === 'm' ? 'le' : 'la', it.w.fr, it.w.parts, 'h-' + i) +
    '</div>';
}

/* 数字卡：大数字 + 读法 */
function numberCard(it, i){
  return '<div class="wc-head">' +
    '<span class="wc-num">' + it.n + '</span>' +
    '<div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
    '<span class="wc-ipa">' + fullIPA(it.parts) + '</span></div>' +
    '</div><div class="wc-forms">' +
    formRow('', '', it.fr, it.parts, 'num-' + it.n) +
    '</div>' +
    (it.note ? '<p class="wc-note">💡 ' + esc(it.note) + '</p>' : '');
}

/* 形容词 / 副词卡 */
function adjCard(it, i){
  let head, forms;
  if (it.adv){
    head = '<div class="wc-head"><div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
      '<span class="wc-gender gt-pl">副词 · 不变</span></div></div>';
    forms = formRow('tag-adv', 'adv.', it.w.fr, it.w.parts, 'a-' + i);
  } else if (it.same){
    head = '<div class="wc-head"><div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
      '<span class="wc-gender gt-pl">阴阳同形</span></div></div>';
    forms = formRow('tag-m', '男 / 女', it.m.fr, it.m.parts, 'a-' + i);
  } else {
    head = '<div class="wc-head"><div class="wc-title"><span class="wc-zh">' + esc(it.zh) + '</span>' +
      '<span class="wc-gender gt-m">男 / 女变形</span></div></div>';
    forms = formRow('tag-m', '阳性 · 男', it.m.fr, it.m.parts, 'a-' + i) +
            formRow('tag-f', '阴性 · 女', it.f.fr, it.f.parts, 'a-' + i + 'f');
  }
  const note = (it.f && it.f.note) ? '<p class="wc-note">💡 ' + esc(it.f.note) + '</p>' : '';
  return head + '<div class="wc-forms">' + forms + '</div>' + note;
}

const CARD_RENDER = {
  countries: countryCard,
  jobs: jobCard,
  things: thingCard,
  numbers: numberCard,
  adjs: adjCard
};

/* =========================================================
   五、页签与网格
   ========================================================= */
let curCat = 'countries';

function renderTabs(){
  const box = $('#word-tabs');
  box.innerHTML = '';
  WORD_CATS.forEach(c => {
    const b = document.createElement('button');
    b.className = 'wtab' + (c.id === curCat ? ' active' : '');
    b.textContent = c.icon + ' ' + c.label;
    b.onclick = () => selectCat(c.id);
    box.appendChild(b);
  });
  const g = document.createElement('button');
  g.className = 'wtab wtab-game' + (curCat === 'phone' ? ' active' : '');
  g.textContent = '📞 电话听写';
  g.onclick = () => selectCat('phone');
  box.appendChild(g);
}

function selectCat(id){
  stopWordAudio();
  curCat = id;
  renderTabs();
  const isPhone = (id === 'phone');
  const cat = WORD_CATS.find(c => c.id === id);
  $('#game-phone').hidden = !isPhone;
  $('#word-grid').hidden = isPhone;
  const tip = $('#words-tip');
  if (!isPhone && cat){
    tip.hidden = false;
    tip.innerHTML = '💡 ' + esc(cat.tip);
    const grid = $('#word-grid');
    grid.innerHTML = '';
    cat.items.forEach((it, i) => {
      const card = document.createElement('div');
      card.className = 'word-card' + (id === 'numbers' ? ' num-card' : '');
      card.innerHTML = CARD_RENDER[id](it, i);
      grid.appendChild(card);
    });
  } else {
    tip.hidden = true;
    renderPhoneStats();
  }
}

/* =========================================================
   六、📞 法国电话号码听写小游戏
   规则：随机 10 位（0 开头），两位两位报读；05 → 「zéro cinq」
   ========================================================= */
const PHONE_KEY = 'bonjour-fr-a1-phone-v1';
const phone = { num: '', rounds: 0, perfect: 0, solved: false };

function loadPhone(){
  try{
    const r = JSON.parse(localStorage.getItem(PHONE_KEY) || '{}');
    phone.rounds = r.rounds || 0;
    phone.perfect = r.perfect || 0;
  }catch(e){}
}
function savePhone(){
  try{ localStorage.setItem(PHONE_KEY, JSON.stringify({ rounds: phone.rounds, perfect: phone.perfect })); }catch(e){}
}
function renderPhoneStats(){
  $('#ph-round').textContent = phone.rounds;
  $('#ph-perfect').textContent = phone.perfect;
}

function renderPhoneInputs(){
  const box = $('#phone-inputs');
  box.innerHTML = '';
  for (let i = 0; i < 5; i++){
    const wrap = document.createElement('div');
    wrap.className = 'pair-box';
    wrap.id = 'pair-' + i;
    const inp = document.createElement('input');
    inp.type = 'text';
    inp.inputMode = 'numeric';
    inp.maxLength = 2;
    inp.dataset.i = i;
    inp.placeholder = '··';
    inp.setAttribute('aria-label', '第 ' + (i + 1) + ' 组，两位数字');
    wrap.appendChild(inp);
    box.appendChild(wrap);
    if (i < 4){
      const sep = document.createElement('span');
      sep.className = 'pair-sep';
      sep.textContent = '·';
      box.appendChild(sep);
    }
  }
  box.addEventListener('input', e => {
    const inp = e.target;
    if (!inp.matches('input')) return;
    inp.value = inp.value.replace(/\D/g, '').slice(0, 2);
    inp.classList.remove('ok', 'bad');
    if (inp.value.length === 2){
      const next = box.querySelector('input[data-i="' + (parseInt(inp.dataset.i, 10) + 1) + '"]');
      if (next) next.focus();
    }
  });
  box.addEventListener('keydown', e => {
    if (e.key === 'Enter'){ e.preventDefault(); checkPhone(); }
  });
}

function newPhoneNumber(){
  stopWordAudio();
  /* 法国号码：0 开头 + 第二位 1-9 + 8 位随机，共 10 位 */
  let d = [0, 1 + Math.floor(Math.random() * 9)];
  for (let i = 0; i < 8; i++) d.push(Math.floor(Math.random() * 10));
  phone.num = d.join('');
  phone.solved = false;
  const disp = $('#phone-display');
  disp.textContent = '·· ·· ·· ·· ··';
  disp.classList.remove('revealed');
  $$('#phone-inputs input').forEach(inp => {
    inp.value = ''; inp.disabled = false;
    inp.classList.remove('ok', 'bad');
  });
  const res = $('#phone-result');
  res.textContent = '';
  res.className = 'phone-result';
  playPhoneNumber(false);   /* 生成后自动报读一遍 */
}

/* 两位两位报读：p<10 读作「zéro p」，否则直接读两位数 */
function phoneSeq(){
  const seq = [];
  for (let i = 0; i < 10; i += 2){
    const p = parseInt(phone.num.substr(i, 2), 10);
    const pair = i / 2;
    if (p < 10){
      seq.push({ n: 'num-0', t: 'zéro', pair: pair });
      seq.push({ n: 'num-' + p, t: NUM_TEXT[p], pair: pair });
    } else {
      seq.push({ n: 'num-' + p, t: NUM_TEXT[p], pair: pair });
    }
  }
  return seq;
}

function playPhoneNumber(slow){
  if (!phone.num){ newPhoneNumber(); return; }
  stopWordAudio();
  const token = ++wToken;
  const seq = phoneSeq();
  const res = $('#phone-result');
  if (!phone.solved){
    res.textContent = '🔊 正在两位两位报读，注意听…';
    res.className = 'phone-result';
  }
  playSeq(seq, token, slow, 0);
}

function playSeq(seq, token, slow, i){
  if (token !== wToken){ $$('#phone-inputs .pair-box.playing').forEach(b => b.classList.remove('playing')); return; }
  if (i >= seq.length){
    $$('#phone-inputs .pair-box.playing').forEach(b => b.classList.remove('playing'));
    const res = $('#phone-result');
    if (res.textContent.indexOf('正在') === 0) res.textContent = '';
    return;
  }
  $$('#phone-inputs .pair-box.playing').forEach(b => b.classList.remove('playing'));
  const pb = $('#pair-' + seq[i].pair);
  if (pb) pb.classList.add('playing');

  const a = new Audio(WAUDIO_BASE + '/' + seq[i].n + '.mp3');
  wMedia = a;
  try{ a.preservesPitch = true; }catch(e){}
  a.playbackRate = slow ? 0.6 : 1;
  const next = () => {
    if (token === wToken) setTimeout(() => playSeq(seq, token, slow, i + 1), slow ? 300 : 140);
  };
  let fell = false;
  const fallback = () => {
    if (fell) return;
    fell = true;
    if (!window.speechSynthesis){ next(); return; }
    const u = new SpeechSynthesisUtterance(seq[i].t);
    u.lang = 'fr-FR'; u.rate = slow ? 0.6 : 0.9;
    const v = frVoice(); if (v) u.voice = v;
    u.onend = next; u.onerror = next;
    try{ speechSynthesis.speak(u); }catch(e){ next(); }
  };
  a.onerror = fallback;
  a.onended = next;
  safePlay(a, fallback);
}

function checkPhone(){
  if (!phone.num){ toast('先点「🎲 新号码」生成一个号码吧'); return; }
  if (phone.solved){ toast('本轮已完成，点「🎲 新号码」开始下一轮'); return; }
  const inputs = $$('#phone-inputs input');
  let ok = 0, filled = 0;
  inputs.forEach((inp, i) => {
    const expect = phone.num.substr(i * 2, 2);
    inp.classList.remove('ok', 'bad');
    if (inp.value !== '') filled++;
    if (inp.value !== '' && inp.value.padStart(2, '0') === expect){
      inp.classList.add('ok');
      ok++;
    } else if (inp.value !== ''){
      inp.classList.add('bad');
    }
  });
  const res = $('#phone-result');
  if (ok === 5){
    phone.solved = true;
    phone.rounds++;
    phone.perfect++;
    savePhone();
    renderPhoneStats();
    inputs.forEach(inp => { inp.disabled = true; });
    res.textContent = '🎉 全对！五个两位数全都听对了，太棒了！';
    res.className = 'phone-result ok';
    if (window.confetti) confetti();
  } else if (filled < 5){
    res.textContent = '还有 ' + (5 - filled) + ' 组没填，填满 5 组再点检查～';
    res.className = 'phone-result part';
  } else {
    res.textContent = '对了 ' + ok + ' / 5 组，红色格子是错的，点 🐢 慢速报读再听一遍';
    res.className = 'phone-result ' + (ok >= 3 ? 'part' : 'bad');
  }
}

function revealPhone(){
  if (!phone.num){ toast('先点「🎲 新号码」生成一个号码吧'); return; }
  const inputs = $$('#phone-inputs input');
  inputs.forEach((inp, i) => {
    inp.value = phone.num.substr(i * 2, 2);
    inp.classList.remove('ok', 'bad');
    inp.disabled = true;
  });
  const disp = $('#phone-display');
  disp.textContent = phone.num.replace(/(\d{2})(?=\d)/g, '$1 ');
  disp.classList.add('revealed');
  if (!phone.solved){
    phone.rounds++;
    savePhone();
    renderPhoneStats();
  }
  phone.solved = true;
  const res = $('#phone-result');
  res.textContent = '👀 答案就是上面这个号码，对照输入框看看刚才漏听了哪两位';
  res.className = 'phone-result part';
}

/* =========================================================
   七、初始化
   ========================================================= */
function initWords(){
  /* 数字读法表（0-100），电话听写与合成回退都用它 */
  NUM_TEXT = {};
  for (let n = 0; n <= 100; n++) NUM_TEXT[n] = frenchNumber(n);

  renderTabs();
  selectCat('countries');
  loadPhone();
  renderPhoneStats();
  renderPhoneInputs();

  /* 单词卡播放（事件委托） */
  $('#word-grid').addEventListener('click', e => {
    const btn = e.target.closest('.wc-play');
    if (!btn) return;
    playWordAudio(btn.dataset.a, btn.dataset.t, btn, btn.dataset.slow === '1');
  });

  /* 游戏按钮 */
  $('#ph-new').onclick = newPhoneNumber;
  $('#ph-play').onclick = () => playPhoneNumber(false);
  $('#ph-slow').onclick = () => playPhoneNumber(true);
  $('#ph-check').onclick = checkPhone;
  $('#ph-reveal').onclick = revealPhone;

  /* 首页菜单卡 */
  $('#card-words').onclick = () => showView('words');

  /* 视图切换时停掉单词音频（包装 app.js 的 showView） */
  const origShowView = window.showView;
  if (typeof origShowView === 'function'){
    window.showView = function(name){
      origShowView(name);
      stopWordAudio();
    };
  }
}

document.addEventListener('DOMContentLoaded', initWords);

/* 供自动化测试/调试读取游戏状态 */
if (typeof window !== 'undefined') window.__phone = phone;
