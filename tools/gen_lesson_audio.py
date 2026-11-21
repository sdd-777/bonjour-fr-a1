#!/usr/bin/env python3
"""按教材课次数据（u5_data.js / u6_data.js）批量生成朗读音频。
用法： python3 tools/gen_lesson_audio.py
输出： assets/audio/textbook/tb-lN-{t,w,s}M.mp3
复用 edge-tts（fr-FR-DeniseNeural, rate=-8%），跳过已存在文件。
"""
import os, sys, json, re, subprocess, asyncio
import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'audio', 'textbook')
VOICE = 'fr-FR-DeniseNeural'
RATE = '-8%'
ART = os.path.join(os.path.expanduser('~'), '.codebuddy', 'artifact', '2f8a7d30-9c21-4f0b-1d53-75c105285000')
DATA_FILES = [os.path.join(ART, name) for name in ('u5_data.js', 'u6_data.js', 'u7_data.js', 'u8_data.js')]


def load_data():
    """读 node tools/export_lesson_data.js 导出的标准 JSON。"""
    path = '/tmp/lesson_data.json'
    if not os.path.exists(path):
        raise SystemExit('缺少 ' + path + '，请先运行 node tools/export_lesson_data.js')
    data = json.load(open(path, encoding='utf-8'))
    print('读取课次:', list(data.keys()))
    return data


async def synth(text, path):
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(path)


def clean(text):
    """去掉说话人破折号与多余空白，避免读成'破折号'。"""
    t = re.sub(r'^\s*[—–-]\s*', '', str(text))
    return t.strip()


async def main():
    data = load_data()
    tasks = []
    manifest = []
    for lid in sorted(data.keys()):
        lesson = data[lid]
        # 课文
        for i, sent in enumerate(lesson.get('text', []), 1):
            tasks.append((f'{lid}-t{i}', clean(sent.get('fr', ''))))
        # 单词
        for i, w in enumerate(lesson.get('vocab', []), 1):
            tasks.append((f'{lid}-w{i}', clean(w.get('fr', ''))))
        # 学会说
        si = 0
        for sec in lesson.get('say', []):
            for it in sec.get('items', []):
                si += 1
                tasks.append((f'{lid}-s{si}', clean(it.get('fr', ''))))

    os.makedirs(OUT, exist_ok=True)
    todo = [(name, txt) for name, txt in tasks if txt]
    print(f'待生成音频 {len(todo)} 条（总条目 {len(tasks)}）', flush=True)

    # 拆出已存在的（跳过），只并发生成缺的
    pending = []
    for name, txt in todo:
        path = os.path.join(OUT, name + '.mp3')
        if os.path.exists(path) and os.path.getsize(path) > 1000:
            manifest.append('assets/audio/textbook/' + name + '.mp3')
        else:
            pending.append((name, txt))
    skip = len(todo) - len(pending)
    print(f'已完成 {skip}，本次需生成 {len(pending)}', flush=True)

    sem = asyncio.Semaphore(8)
    counter = {'done': 0, 'fail': 0}
    lock = asyncio.Lock()

    async def one(name, txt):
        async with sem:
            path = os.path.join(OUT, name + '.mp3')
            ok = False
            for attempt in range(3):
                try:
                    await synth(txt, path)
                    if os.path.exists(path) and os.path.getsize(path) > 1000:
                        ok = True
                        break
                except Exception:
                    pass
            async with lock:
                if ok:
                    counter['done'] += 1
                    manifest.append('assets/audio/textbook/' + name + '.mp3')
                else:
                    counter['fail'] += 1
                    print('失败', name, flush=True)
                n = counter['done'] + counter['fail']
                if n % 40 == 0 or n == len(pending):
                    print(f"  进度 {counter['done']} 成功 / {counter['fail']} 失败 / {len(pending)} 总", flush=True)

    await asyncio.gather(*(one(name, txt) for name, txt in pending))
    done, fail = counter['done'], counter['fail']
    print(f'生成完成：新增 {done}，跳过 {skip}，失败 {fail}')

    # 写推送清单
    lst = os.path.join(ROOT, 'tools', 'new_audio_list.txt')
    open(lst, 'w', encoding='utf-8').write('\n'.join(manifest))
    print('清单已写:', lst, len(manifest), '条')
    if fail:
        sys.exit(2)


if __name__ == '__main__':
    asyncio.run(main())
