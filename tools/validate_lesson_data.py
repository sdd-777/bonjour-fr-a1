#!/usr/bin/env python3
"""校验 u5_data.js / u6_data.js 的数据完整性。"""
import os, re, json, sys

ART = os.path.join(os.path.expanduser('~'), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000')
EXPECT = {
    'u5_data.js': ['tb-l17', 'tb-l18', 'tb-l19', 'tb-l20'],
    'u6_data.js': ['tb-l21', 'tb-l22', 'tb-l23', 'tb-l24'],
    'u7_data.js': ['tb-l25', 'tb-l26', 'tb-l27', 'tb-l28'],
    'u8_data.js': ['tb-l29', 'tb-l30', 'tb-l31', 'tb-l32'],
    'u9_data.js': ['tb-l33', 'tb-l34', 'tb-l35', 'tb-l36'],
}

def load(fn=None):
    return json.load(open('/tmp/lesson_data.json', encoding='utf-8'))

def main():
    problems = []
    grand = dict(text=0, vocab=0, grammar=0, say=0)
    for fn, lids in EXPECT.items():
        d = load(fn)
        print('=====', fn, '=====')
        for lid in lids:
            if lid not in d:
                problems.append(fn + ' 缺课次 ' + lid); continue
            L = d[lid]
            counts = {}
            for key in ('text', 'vocab', 'grammar', 'say'):
                v = L.get(key, [])
                counts[key] = len(v)
                grand[key] += len(v)
                if not isinstance(v, list) or len(v) == 0:
                    problems.append(f'{lid} 的 {key} 为空')
            # 逐条字段检查
            for i, s in enumerate(L.get('text', []), 1):
                if not s.get('fr') or not s.get('zh'):
                    problems.append(f'{lid}.text[{i}] 缺 fr/zh')
            for i, w in enumerate(L.get('vocab', []), 1):
                if not w.get('fr') or not w.get('zh') or not w.get('pos'):
                    problems.append(f'{lid}.vocab[{i}] 缺 fr/pos/zh')
            for i, g in enumerate(L.get('grammar', []), 1):
                if not g.get('t') or not g.get('d'):
                    problems.append(f'{lid}.grammar[{i}] 缺 t/d')
            si = 0
            for sec in L.get('say', []):
                if not sec.get('title') or not sec.get('items'):
                    problems.append(f'{lid}.say 段缺 title/items')
                for it in sec.get('items', []):
                    si += 1
                    if not it.get('fr') or not it.get('zh'):
                        problems.append(f'{lid}.say[{si}] 缺 fr/zh')
            title = L.get('title', '?')
            print(f"  {lid} {title}: 课文{counts['text']} 单词{counts['vocab']} 语法{counts['grammar']} 说{counts['say']}组")
    print('===== 合计 =====', json.dumps(grand, ensure_ascii=False))
    print('===== 问题 =====')
    if problems:
        for p in problems: print('  ✗', p)
        sys.exit(1)
    else:
        print('  ✅ 全部通过，无缺失')

if __name__ == '__main__':
    main()
