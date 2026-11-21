#!/usr/bin/env python3
"""把提取好的课次 JSON（u5_data.js / u6_data.js）转成网站的增量数据文件
textbook-u5.js / textbook-u6.js，格式与 textbook-u4.js 一致。"""
import os, re, json

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART = os.path.join(os.path.expanduser('~'), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000')

UNITS = [
    dict(n=5, title='Unité 5 · La vie est belle ! 美好生活',
         lessons=['tb-l17', 'tb-l18', 'tb-l19', 'tb-l20'],
         src='u5_data.js', dst='assets/js/textbook-u5.js'),
    dict(n=6, title='Unité 6 · Vivre avec les autres 与他人共处',
         lessons=['tb-l21', 'tb-l22', 'tb-l23', 'tb-l24'],
         src='u6_data.js', dst='assets/js/textbook-u6.js'),
    dict(n=7, title='Unité 7 · Un peu, beaucoup, passionnément… 一点儿，非常，特别……',
         lessons=['tb-l25', 'tb-l26', 'tb-l27', 'tb-l28'],
         src='u7_data.js', dst='assets/js/textbook-u7.js'),
    dict(n=8, title='Unité 8 · Tout le monde en parle... 大家在谈论……',
         lessons=['tb-l29', 'tb-l30', 'tb-l31', 'tb-l32'],
         src='u8_data.js', dst='assets/js/textbook-u8.js'),
    dict(n=9, title='Unité 9 · On verra bien ! 走着瞧吧！',
         lessons=['tb-l33', 'tb-l34', 'tb-l35', 'tb-l36'],
         src='u9_data.js', dst='assets/js/textbook-u9.js'),
]

NO_CN = {17:'咱们做可丽饼吧',18:'他怎么样？',19:'亲爱的蕾娅…',20:'节日',
         21:'这是被禁止的！',22:'小广告',23:'我们送了什么？',24:'理想的候选人…'}


def load(src=None):
    # 数据由 node tools/export_lesson_data.js 导出为标准 JSON
    path = '/tmp/lesson_data.json'
    return json.load(open(path, encoding='utf-8'))


def jdump(obj, indent='  '):
    """用 JSON 格式输出，ensure_ascii=False 保留中文，转义 </ 防打包破坏。"""
    return json.dumps(obj, ensure_ascii=False, indent=2).replace('</', '<\\/')


def gen(unit, data):
    n = unit['n']
    lines = []
    lines.append('/* =========================================================')
    lines.append('   📚 《你好！法语 1》Unité %d · Leçons %s–%s（增量数据）' % (
        n, unit['lessons'][0].replace('tb-l', ''), unit['lessons'][-1].replace('tb-l', '')))
    lines.append('   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js')
    lines.append('   ========================================================= */')
    lines.append('')
    lines.append('/* 防重复加载 */')
    lines.append('if (TB_UNITS.every(u => u.n !== %d)){' % n)
    lines.append('  TB_UNITS.push({ n: %d, title: "%s", lessons: %s });' % (
        n, unit['title'], json.dumps(unit['lessons'], ensure_ascii=False)))
    lines.append('}')
    lines.append('')
    lines.append('Object.assign(TB_LESSONS, {')
    items = []
    for lid in unit['lessons']:
        if lid not in data:
            print('  警告：缺少', lid)
            continue
        d = data[lid]
        # 确保 unit 字段正确
        d = dict(d)
        d['unit'] = n
        items.append((lid, d))
    for idx, (lid, d) in enumerate(items):
        lines.append('  /* ————— %s ————— */' % d.get('no', lid))
        body = jdump(d)
        # 每行加 2 空格缩进
        body = '\n'.join('  ' + ln for ln in body.split('\n'))
        lines.append('  ' + '"' + lid + '": ' + body.lstrip() + (',' if idx < len(items) - 1 else ''))
        lines.append('')
    if lines[-1] == '':
        lines.pop()
    lines.append('});')
    out = '\n'.join(lines) + '\n'
    path = os.path.join(ROOT, unit['dst'])
    open(path, 'w', encoding='utf-8').write(out)
    print('已生成', path, len(out), '字节', len(items), '课')


def main():
    for u in UNITS:
        data = load(u['src'])
        gen(u, data)


if __name__ == '__main__':
    main()
