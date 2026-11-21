#!/usr/bin/env python3
"""按 verbs-data.js 生成动词变位音频（新增动词）。
每个动词：vb-{id}-inf.mp3 + vb-{id}-{pres|pc|imp|fut}-{0..5}.mp3 + vb-{id}-ex{0|1}.mp3 = 27 条
复用 edge-tts，跳过已存在文件，并发 8。
"""
import os, asyncio, json, re
import edge_tts

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'assets', 'audio', 'verbs')
VOICE = 'fr-FR-DeniseNeural'
RATE = '-8%'


def load_new_verbs():
    """读合并后的 verbs-data.js，返回新增动词（不在原始30个里的）。
    用 /tmp/new_verb_ids.txt（合并脚本写出的新增 id 列表）判断。"""
    ids_path = '/tmp/new_verb_ids.txt'
    if not os.path.exists(ids_path):
        raise SystemExit('缺少 /tmp/new_verb_ids.txt，请先运行 node tools/merge_verbs.js')
    new_ids = set(open(ids_path, encoding='utf-8').read().split())
    # 从合并后的 verbs-data.js 用 node 导出 JSON
    import subprocess
    data = json.loads(subprocess.check_output(
        ['node', '-e', "const vm=require('vm'),fs=require('fs');const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('"+os.path.join(ROOT,'assets/js/verbs-data.js')+"','utf8'),c);process.stdout.write(JSON.stringify(vm.runInContext('VERBS',c)))"],
        text=True))
    return [v for v in data if v['id'] in new_ids]


async def synth(text, path):
    await edge_tts.Communicate(text, VOICE, rate=RATE).save(path)


def speakable(text):
    """去掉性数配合提示括号，如 'suis revenu(e)' -> 'suis revenu'，
    避免 TTS 把括号里的 (e)/(s) 读出来。"""
    return re.sub(r'\([^)]*\)', '', str(text)).strip()


async def main():
    verbs = load_new_verbs()
    print('新增动词:', len(verbs), '| 需生成音频:', len(verbs) * 27, '条', flush=True)
    os.makedirs(OUT, exist_ok=True)

    tasks = []
    for v in verbs:
        vid = v['id']
        tasks.append((f'vb-{vid}-inf', v['inf']))
        for t in ('pres', 'pc', 'imp', 'fut'):
            forms = (v.get('tenses', {}).get(t, {}) or {}).get('f', [])
            for i, form in enumerate(forms):
                if form and form != '—':
                    tasks.append((f'vb-{vid}-{t}-{i}', speakable(form)))
        for i, e in enumerate(v.get('ex', [])):
            tasks.append((f'vb-{vid}-ex{i}', speakable(e['fr'])))

    pending = []
    skip = 0
    manifest = []
    for name, txt in tasks:
        p = os.path.join(OUT, name + '.mp3')
        if os.path.exists(p) and os.path.getsize(p) > 1000:
            skip += 1
        else:
            pending.append((name, txt))
        manifest.append('assets/audio/verbs/' + name + '.mp3')
    print(f'已存在 {skip}，本次生成 {len(pending)}', flush=True)

    sem = asyncio.Semaphore(8)
    counter = {'ok': 0, 'fail': 0}
    lock = asyncio.Lock()

    async def one(name, txt):
        async with sem:
            p = os.path.join(OUT, name + '.mp3')
            ok = False
            for attempt in range(3):
                try:
                    await synth(txt, p)
                    if os.path.exists(p) and os.path.getsize(p) > 1000:
                        ok = True
                        break
                except Exception:
                    pass
            async with lock:
                if ok: counter['ok'] += 1
                else:
                    counter['fail'] += 1
                    print('失败', name, flush=True)
                n = counter['ok'] + counter['fail']
                if n % 100 == 0 or n == len(pending):
                    print(f"  进度 {counter['ok']} 成功 / {counter['fail']} 失败 / {len(pending)}", flush=True)

    await asyncio.gather(*(one(n, t) for n, t in pending))
    print(f"完成：新增 {counter['ok']}，跳过 {skip}，失败 {counter['fail']}", flush=True)
    open(os.path.join(ROOT, 'tools', 'new_verb_audio_list.txt'), 'w', encoding='utf-8').write('\n'.join(manifest))
    print('清单已写 tools/new_verb_audio_list.txt', len(manifest), '条', flush=True)
    if counter['fail']:
        raise SystemExit(2)


if __name__ == '__main__':
    asyncio.run(main())
