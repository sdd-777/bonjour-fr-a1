#!/usr/bin/env python3
"""检查新增 8 课的音频是否全部生成（t/w/s 三类）。"""
import os, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'audio', 'textbook')
data = json.load(open('/tmp/lesson_data.json', encoding='utf-8'))

missing = []
small = []
total = 0
for lid in sorted(data.keys()):
    L = data[lid]
    names = []
    for i in range(1, len(L.get('text', [])) + 1): names.append(f'{lid}-t{i}')
    for i in range(1, len(L.get('vocab', [])) + 1): names.append(f'{lid}-w{i}')
    si = 0
    for sec in L.get('say', []):
        for _ in sec.get('items', []):
            si += 1; names.append(f'{lid}-s{si}')
    for name in names:
        total += 1
        p = os.path.join(OUT, name + '.mp3')
        if not os.path.exists(p):
            missing.append(name)
        elif os.path.getsize(p) < 1000:
            small.append(name)

print(f'应生成 {total} 条音频')
print('缺失:', len(missing), missing[:30])
print('过小:', len(small), small[:30])
if not missing and not small:
    print('✅ 全部齐全')
