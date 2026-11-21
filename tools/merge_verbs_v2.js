#!/usr/bin/env node
/* 合并现有 verbs-data.js 与新增动词批次（verbs_batch_a.js / verbs_batch_b.js）。
   校验后重写 verbs-data.js，并写出 /tmp/new_verb_ids.txt 供音频脚本使用。
   用法： node tools/merge_verbs_v2.js
*/
const fs = require('fs'), vm = require('vm'), path = require('path'), os = require('os');
const ROOT = path.dirname(path.dirname(__filename));
const ART = path.join(os.homedir(), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000');

// 1) 读现有 verbs-data.js
const src = fs.readFileSync(path.join(ROOT, 'assets/js/verbs-data.js'), 'utf8');
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(src, ctx);
const existing = vm.runInContext('VERBS', ctx);
const TENSES = vm.runInContext('VERB_TENSES', ctx);
const PRONOUNS = vm.runInContext('VERB_PRONOUNS', ctx);
const GROUPS = vm.runInContext('VERB_GROUPS', ctx);
let header = src.slice(0, src.indexOf('const VERBS'));

console.log('现有动词:', existing.length);

// 2) 读新增批次
let added = [];
for (const f of ['verbs_batch_a.js', 'verbs_batch_b.js']) {
  const p = path.join(ART, f);
  if (!fs.existsSync(p)) { console.error('缺少', f); process.exit(1); }
  const arr = require(p);
  console.log('读取', f, arr.length, '条');
  added = added.concat(arr);
}

// 3) 校验
const norm = v => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/œ/g, 'oe').toLowerCase();
const problems = [];
const allIds = new Set();
const existIds = new Set(existing.map(v => norm(v.id)));
for (const v of added) {
  if (!v.id || !v.inf) { problems.push('缺 id/inf: ' + JSON.stringify(v).slice(0, 50)); continue; }
  const nid = norm(v.id);
  if (allIds.has(nid)) problems.push('批内重复 id: ' + v.id);
  allIds.add(nid);
  if (existIds.has(nid)) problems.push('与现有库重复: ' + v.id);
  for (const t of TENSES) {
    const x = v.tenses && v.tenses[t.id];
    if (!x || !Array.isArray(x.f) || x.f.length !== 6) problems.push(v.id + ' 缺 ' + t.id + '.f(6)');
    if (!x || !Array.isArray(x.i) || x.i.length !== 6) problems.push(v.id + ' 缺 ' + t.id + '.i(6)');
  }
  if (!v.ex || v.ex.length < 1) problems.push(v.id + ' 缺例句');
  if (!v.note) problems.push(v.id + ' 缺 note');
  if (!v.ipa || !v.zh || !v.grp || !v.aux || !v.part) problems.push(v.id + ' 缺基础字段');
  for (const k of ['note', 'zh']) if (String(v[k] || '').match(/<\/(script|body|html)/i)) problems.push(v.id + ' 含结束标签');
}
// 目标覆盖
const targets = fs.readFileSync('/tmp/new_verbs_target.txt', 'utf8').split('\n').map(norm).filter(Boolean);
const addedNorm = new Set(added.map(v => norm(v.id)));
const notCovered = targets.filter(t => !addedNorm.has(t));
console.log('新增总数:', added.length, '| 目标数:', targets.length);
console.log('未覆盖目标:', notCovered.length, notCovered.join(', ') || '无');
console.log('校验问题:', problems.length);
problems.slice(0, 40).forEach(p => console.error('  ✗', p));
if (problems.length || notCovered.length || added.length !== targets.length) {
  console.error('\n校验未通过，未写出文件');
  process.exit(2);
}

// 4) 合并并按 grp 分组排序
const merged = existing.concat(added);
const order = { er: 0, ir: 1, irr: 2 };
merged.sort((a, b) => (order[a.grp] ?? 9) - (order[b.grp] ?? 9) || a.id.localeCompare(b.id));
console.log('\n合并后动词总数:', merged.length);

// 5) 序列化
const GROUP_LABELS = { er: '第一组 -er', ir: '第二组 -ir', irr: '不规则动词' };
const q = s => JSON.stringify(String(s));
const arr = a => '[' + a.map(q).join(',') + ']';
function serialize(v) {
  const tense = t => {
    const x = v.tenses[t] || { f: [], i: [] };
    return `    ${t}: { f: ${arr(x.f)},\n            i: ${arr(x.i)} }`;
  };
  const exs = (v.ex || []).map(e => `    { fr: ${q(e.fr)}, zh: ${q(e.zh)}, i: ${q(e.i || '')} }`).join(',\n');
  return `{
  id: ${q(v.id)}, inf: ${q(v.inf)}, ipa: ${q(v.ipa)}, zh: ${q(v.zh)}, grp: ${q(v.grp)}, aux: ${q(v.aux)}, part: ${q(v.part)},
  tenses: {
${TENSES.map(t => tense(t.id)).join(',\n')}
  },
  note: ${q(v.note)},
  ex: [
${exs}
  ]
}`;
}
header = header.replace(/（\d+ 个常用动词/, `（${merged.length} 个常用动词`);
header = header.replace(/含教材 L1–24 全部动词/, `含教材 L1–32 全部动词`);
let body = header + 'const VERBS = [\n';
let lastGrp = null;
for (const v of merged) {
  if (v.grp !== lastGrp) { body += `/* ================= ${GROUP_LABELS[v.grp] || v.grp} ================= */\n`; lastGrp = v.grp; }
  body += serialize(v) + ',\n';
}
body = body.replace(/,\n$/, '\n') + '];\n\n';
body += 'window.__VERBS = VERBS;\nwindow.__VERB_TENSES = VERB_TENSES;\nwindow.__VERB_PRONOUNS = VERB_PRONOUNS;\nwindow.__VERB_GROUPS = VERB_GROUPS;\n';

fs.writeFileSync(path.join(ROOT, 'assets/js/verbs-data.js'), body, 'utf8');
fs.writeFileSync('/tmp/new_verb_ids.txt', added.map(v => v.id).join('\n') + '\n', 'utf8');
console.log('已写出 verbs-data.js', body.length, '字节；新增 id 列表', added.length, '个');
