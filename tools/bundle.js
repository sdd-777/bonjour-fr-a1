/* =========================================================
   把整个法语学习站打包成一个 HTML 单文件（离线可用）
   - 内联 CSS / JS
   - 内联全部 MP3（base64 data URI），运行时拦截 new Audio 自动改写
   用法：node tools/bundle.js
   ========================================================= */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

const SCRIPTS = [
  'assets/js/data.js', 'assets/js/app.js', 'assets/js/words-data.js',
  'assets/js/countries-data.js', 'assets/js/pron-rules.js', 'assets/js/extras-data.js',
  'assets/js/verbs-data.js', 'assets/js/videos-data.js', 'assets/js/videos.js',
  'assets/js/games-data.js', 'assets/js/games.js', 'assets/js/words.js',
  'assets/js/textbook-data.js', 'assets/js/textbook.js'
];
const AUDIO_DIRS = ['words', 'verbs', 'ipa', 'textbook', 'sentences'];

let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(ROOT, 'assets/css/style.css'), 'utf8');

/* 1) 内联 CSS */
html = html.replace('<link rel="stylesheet" href="assets/css/style.css">',
  '<style>\n' + css + '\n</style>');

/* 2) 内联 JS（按原顺序，剔掉 onerror 兜底） */
let jsAll = '';
for (const s of SCRIPTS){
  const src = fs.readFileSync(path.join(ROOT, s), 'utf8');
  jsAll += '\n/* ===== ' + s + ' ===== */\n' + src + '\n';
}
html = html.replace(/<script src="assets\/js\/[^"]+"[^>]*><\/script>\s*/g, '');
/* 注意：必须用函数形式，否则替换串里的 $$ 会被当成转义序列吞掉一个 $ */
html = html.replace('</body>', () => '<script>\n' + jsAll + '\n</script>\n</body>');

/* 3) 内联音频：生成映射表 + 拦截 new Audio */
const map = {};
let n = 0, bytes = 0;
for (const d of AUDIO_DIRS){
  const dir = path.join(ROOT, 'assets/audio', d);
  if (!fs.existsSync(dir)) continue;
  for (const d2 of fs.readdirSync(dir, { withFileTypes: true })){
    if (!d2.isFile()) continue;
    const f = d2.name;
    if (!f.endsWith('.mp3')) continue;
    const b = fs.readFileSync(path.join(dir, f));
    map[d + '/' + f] = 'data:audio/mp3;base64,' + b.toString('base64');
    n++; bytes += b.length;
  }
}
const hook = '<script>\n/* ===== 离线音频（内联 base64） ===== */\n' +
  'window.__AUDIO_DATA__ = ' + JSON.stringify(map) + ';\n' +
  '(function(){ var M = window.__AUDIO_DATA__ || {}, OA = window.Audio;\n' +
  '  function fix(u){ if(!u) return u; var k = String(u).replace(/^\\.?\\/?assets\\/audio\\//, ""); return M[k] || u; }\n' +
  '  window.Audio = function(u){ if (typeof u === "string") u = fix(u); return new OA(u); };\n' +
  '})();\n</script>\n';
html = html.replace('</body>', () => hook + '</body>');

const out = path.join(ROOT, 'french-a1-bonjour.html');
fs.writeFileSync(out, html);
console.log('音频内联：' + n + ' 个（' + (bytes / 1048576).toFixed(1) + ' MB）');
console.log('单文件：' + out + '  ' + (fs.statSync(out).size / 1048576).toFixed(1) + ' MB');
