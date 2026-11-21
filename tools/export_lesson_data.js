#!/usr/bin/env node
/* 用 Node 读取 agent 提取的 JS 对象字面量数据（u5_data.js / u6_data.js），
   合并导出为标准 JSON，供 Python 生成脚本 / 音频脚本 / 校验脚本消费。
   用法： node tools/export_lesson_data.js > /tmp/lesson_data.json
*/
const path = require('path');
const os = require('os');
const ART = path.join(os.homedir(), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000');
const merged = {};
for (const name of ['u5_data.js', 'u6_data.js', 'u7_data.js', 'u8_data.js']){
  const p = path.join(ART, name);
  try{
    const d = require(p);
    Object.assign(merged, d);
    process.stderr.write('读取 ' + name + ': ' + Object.keys(d).join(', ') + '\n');
  }catch(e){
    process.stderr.write('跳过 ' + name + ': ' + e.message.split('\n')[0] + '\n');
  }
}
process.stdout.write(JSON.stringify(merged));
