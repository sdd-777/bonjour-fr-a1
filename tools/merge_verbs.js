#!/usr/bin/env node
/* 合并现有 30 个动词 + 5 批新增动词数据，校验后生成新的 verbs-data.js。
   用法： node tools/merge_verbs.js
   依赖：/tmp/final_missing_verbs.txt（新教材30词）、/tmp/old_missing_verbs2.txt（旧教材30词）
         artifact 目录下 verbs_er_a.js / verbs_er_b.js / verbs_irr_a.js / verbs_irr_b.js / verbs_nager.js
*/
const fs = require('fs'), vm = require('vm'), path = require('path'), os = require('os');
const ROOT = path.dirname(path.dirname(__filename));
const ART = path.join(os.homedir(), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000');

// 1) 读现有 verbs-data.js，提取 VERBS / VERB_TENSES / VERB_PRONOUNS / VERB_GROUPS 与头部注释
const src = fs.readFileSync(path.join(ROOT, 'assets/js/verbs-data.js'), 'utf8');
const ctx = { window: {} };  // 文件末尾有 window.__VERBS = VERBS，需提供 window
vm.createContext(ctx);
vm.runInContext(src, ctx);
const existing = vm.runInContext('VERBS', ctx);
const TENSES = vm.runInContext('VERB_TENSES', ctx);
const PRONOUNS = vm.runInContext('VERB_PRONOUNS', ctx);
const GROUPS = vm.runInContext('VERB_GROUPS', ctx);
let header = src.slice(0, src.indexOf('const VERBS'));

console.log('现有动词:', existing.length, '| 时态:', TENSES.map(t => t.id).join(','));

// 2) 读 5 批新增
const newFiles = ['verbs_er_a.js', 'verbs_er_b.js', 'verbs_irr_a.js', 'verbs_irr_b.js', 'verbs_nager.js'];
let added = [];
for (const f of newFiles) {
  const p = path.join(ART, f);
  if (!fs.existsSync(p)) { console.error('缺少', f); process.exit(1); }
  const arr = require(p);
  console.log('读取', f, arr.length, '条');
  added = added.concat(arr);
}

// 3) 校验
const norm = v => String(v).normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/œ/g, 'oe').toLowerCase();
const allIds = new Set();
const problems = [];
for (const v of added) {
  if (!v.id || !v.inf) { problems.push('缺 id/inf: ' + JSON.stringify(v).slice(0, 40)); continue; }
  if (allIds.has(v.id)) problems.push('重复 id: ' + v.id);
  allIds.add(v.id);
  if (!v.tenses) { problems.push('缺 tenses: ' + v.id); continue; }
  for (const t of TENSES) {
    const f = v.tenses[t.id] && v.tenses[t.id].f;
    const i = v.tenses[t.id] && v.tenses[t.id].i;
    if (!Array.isArray(f) || f.length !== 6) problems.push(v.id + ' 缺 ' + t.id + '.f(6)');
    if (!Array.isArray(i) || i.length !== 6) problems.push(v.id + ' 缺 ' + t.id + '.i(6)');
  }
  if (!v.ex || v.ex.length < 1) problems.push(v.id + ' 缺例句');
  if (!v.note) problems.push(v.id + ' 缺 note');
  // HTML 结束标签字面量（打包安全）
  for (const k of ['note', 'zh']) if (String(v[k] || '').match(/<\/(script|body|html)/i)) problems.push(v.id + ' 含结束标签字面量');
}
// 与现有去重
const existIds = new Set(existing.map(v => v.id));
for (const v of added) if (existIds.has(v.id)) problems.push('与现有库重复: ' + v.id);

// 覆盖检查：59 个目标是否都在新增里
const targets = [
  ...fs.readFileSync('/tmp/final_missing_verbs.txt', 'utf8').split('\n'),
  ...fs.readFileSync('/tmp/old_missing_verbs2.txt', 'utf8').split('\n')
].filter(Boolean).map(norm);
const targetSet = new Set(targets);
const addedNorm = new Set(added.map(v => norm(v.inf)));
const notCovered = targets.filter(t => !addedNorm.has(t));

console.log('\n新增总数:', added.length, '| 目标数:', targetSet.size);
console.log('未覆盖目标:', notCovered.length, notCovered.join(', ') || '无');
console.log('校验问题:', problems.length);
problems.slice(0, 30).forEach(p => console.error('  ✗', p));
if (problems.length || notCovered.length) {
  console.error('\n校验未通过，未写出文件');
  process.exit(2);
}

// 4) 合并并按 grp 分组排序
const merged = existing.concat(added);
const order = { er: 0, ir: 1, irr: 2 };
merged.sort((a, b) => (order[a.grp] ?? 9) - (order[b.grp] ?? 9) || a.id.localeCompare(b.id));
console.log('\n合并后动词总数:', merged.length);

// 5) 生成 verbs-data.js（保持原格式：头注释 + 常量 + VERBS 数组 + 导出）
const GROUP_LABELS = { er: '第一组 -er', ir: '第二组 -ir', irr: '不规则动词' };
function serialize(v) {
  const q = s => JSON.stringify(String(s)); // 双引号，转义安全
  const arr = a => '[' + a.map(q).join(',') + ']';
  const tense = t => {
    const x = v.tenses[t] || { f: [], i: [] };
    return `    ${t}: { f: ${arr(x.f)},\n            i: ${arr(x.i)} }`;
  };
  const exs = (v.ex || []).map(e =>
    `    { fr: ${q(e.fr)}, zh: ${q(e.zh)}, i: ${q(e.i || '')} }`).join(',\n');
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
// 更新头部数量说明（合并后动词数变化）
header = header.replace(/（\d+ 个常见动词/, `（${merged.length} 个常用动词`);
let body = header;
body += 'const VERBS = [\n';
let lastGrp = null;
for (const v of merged) {
  if (v.grp !== lastGrp) {
    body += `/* ================= ${GROUP_LABELS[v.grp] || v.grp} ================= */\n`;
    lastGrp = v.grp;
  }
  body += serialize(v) + ',\n';
}
body = body.replace(/,\n$/, '\n') + '];\n\n';
body += 'window.__VERBS = VERBS;\n';
body += 'window.__VERB_TENSES = VERB_TENSES;\n';
body += 'window.__VERB_PRONOUNS = VERB_PRONOUNS;\n';
body += 'window.__VERB_GROUPS = VERB_GROUPS;\n';

fs.writeFileSync(path.join(ROOT, 'assets/js/verbs-data.js'), body, 'utf8');
console.log('已写出 assets/js/verbs-data.js', body.length, '字节');
// 写出新增动词 id 列表，供 gen_verb_audio.py 使用
fs.writeFileSync('/tmp/new_verb_ids.txt', added.map(v => v.id).join('\n') + '\n', 'utf8');
console.log('已写出 /tmp/new_verb_ids.txt', added.length, '个 id');
