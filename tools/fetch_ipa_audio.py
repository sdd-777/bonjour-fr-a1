#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从 Wikimedia Commons 下载「权威 IPA 音素发音」（语音学家录制，CC 授权），
转成 mp3 写入项目已使用的同名路径 assets/audio/ipa/ipa-{id}.mp3。

为什么需要这个脚本？
  沙箱（本学习站的运行环境）出口是白名单式的：能访问 GitHub，但访问
  Wikimedia / Wikipedia / Google 全部被拒。因此无法在沙箱里直接抓取这些
  权威录音。请在【你自己的电脑】上运行本脚本（那里能正常访问互联网）。

运行前提（本机需要）：
  pip install requests
  # ffmpeg 用于把 .ogg 转成 .mp3（项目统一用 mp3）
  #   macOS:  brew install ffmpeg
  #   Ubuntu: sudo apt install ffmpeg
  #   Win:    https://ffmpeg.org/download.html

用法：
  python3 fetch_ipa_audio.py
完成后把整个 assets/audio/ipa/ 目录交给我（或自行替换），无需改任何代码。
"""
import os
import subprocess
import requests
import concurrent.futures

OUT_OGG = "/tmp/ipa_ogg"          # 临时 ogg
# 输出目录：默认指向本仓库的 assets/audio/ipa（脚本放在 tools/ 下时可用）
HERE = os.path.dirname(os.path.abspath(__file__))
OUT_MP3 = os.path.normpath(os.path.join(HERE, "..", "assets", "audio", "ipa"))

ID_TO_FILES = {
    # —— 口腔元音 ——
    "a":      ["Open front unrounded vowel.ogg"],
    "e":      ["Close-mid front unrounded vowel.ogg"],
    "eps":    ["Open-mid front unrounded vowel.ogg"],
    "i":      ["Close front unrounded vowel.ogg"],
    "y":      ["Close front rounded vowel.ogg"],
    "u":      ["Close back rounded vowel.ogg"],
    "o":      ["Close-mid back rounded vowel.ogg"],
    "o_ouv":  ["Open-mid back rounded vowel.ogg"],
    "schwa":  ["Mid central vowel.ogg"],
    "eu_f":   ["Close-mid front rounded vowel.ogg"],
    "eu_o":   ["Open-mid front rounded vowel.ogg"],
    # —— 鼻腔元音（法语特有，Commons 有 Nasalized 版本）——
    "an":     ["Nasalized open back unrounded vowel.ogg",
               "Nasal open back unrounded vowel.ogg"],
    "on":     ["Nasalized open-mid back rounded vowel.ogg",
               "Nasal open-mid back rounded vowel.ogg"],
    "in":     ["Nasalized open-mid front unrounded vowel.ogg",
               "Nasal open-mid front unrounded vowel.ogg"],
    "un":     ["Nasalized open-mid front rounded vowel.ogg",
               "Nasal open-mid front rounded vowel.ogg"],
    # —— 半元音 ——
    "yod":    ["Voiced palatal approximant.ogg"],
    "hui":    ["Labial-palatal approximant.ogg",
               "Voiced labial-palatal approximant.ogg"],
    "w":      ["Voiced labial-velar approximant.ogg"],
    # —— 辅音 ——
    "p":  ["Voiceless bilabial plosive.ogg"],
    "b":  ["Voiced bilabial plosive.ogg"],
    "t":  ["Voiceless alveolar plosive.ogg"],
    "d":  ["Voiced alveolar plosive.ogg"],
    "k":  ["Voiceless velar plosive.ogg"],
    "g":  ["Voiced velar plosive.ogg"],
    "f":  ["Voiceless labiodental fricative.ogg"],
    "v":  ["Voiced labiodental fricative.ogg"],
    "s":  ["Voiceless alveolar sibilant.ogg"],
    "z":  ["Voiced alveolar sibilant.ogg"],
    "ch": ["Voiceless palato-alveolar sibilant.ogg"],
    "j":  ["Voiced palato-alveolar sibilant.ogg"],
    "m":  ["Voiced bilabial nasal.ogg"],
    "n":  ["Voiced alveolar nasal.ogg"],
    "gn": ["Voiced palatal nasal.ogg"],
    "l":  ["Voiced alveolar lateral approximant.ogg"],
    "r":  ["Voiced uvular fricative.ogg",
           "Voiced uvular trill.ogg"],
}

HDR = {"User-Agent": "FrenchA1Learning/1.0 (educational; +https://github.com/sdd-777/bonjour-fr-a1)"}


def fetch_one(item):
    iid, cands = item
    ogg = os.path.join(OUT_OGG, iid + ".ogg")
    for fn in cands:
        try:
            url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + requests.utils.quote(fn)
            r = requests.get(url, headers=HDR, timeout=60, allow_redirects=True)
            ct = r.headers.get("content-type", "")
            if r.status_code == 200 and ("audio" in ct or "ogg" in ct or len(r.content) > 5000):
                open(ogg, "wb").write(r.content)
                if os.path.getsize(ogg) > 3000:
                    return iid, fn, len(r.content)
        except Exception as e:
            print("  !", iid, fn, "->", e)
    return iid, None, 0


def main():
    os.makedirs(OUT_OGG, exist_ok=True)
    os.makedirs(OUT_MP3, exist_ok=True)
    print("输出目录:", OUT_MP3)

    results = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=6) as ex:
        for iid, fn, size in ex.map(fetch_one, ID_TO_FILES.items()):
            results[iid] = fn
            print(("OK  " if fn else "MISS"), iid, "->", (fn or "（未找到，保留现有 TTS 版）"))

    missing = [k for k, v in results.items() if not v]
    print("\n缺失 %d 个：%s" % (len(missing), missing))

    ok = 0
    for iid, fn in results.items():
        ogg = os.path.join(OUT_OGG, iid + ".ogg")
        mp3 = os.path.join(OUT_MP3, "ipa-%s.mp3" % iid)
        if not fn or not os.path.exists(ogg):
            continue  # 没抓到，保留原 TTS 文件
        try:
            rc = subprocess.run(
                ["ffmpeg", "-y", "-loglevel", "error", "-i", ogg,
                 "-ac", "1", "-ar", "22050", "-b:a", "64k", mp3],
                check=True,
            ).returncode
            if os.path.getsize(mp3) > 1000:
                ok += 1
                print("  converted:", mp3)
        except Exception as e:
            print("  ffmpeg 失败", iid, e)

    print("\n转换成功 %d/%d 个音素音频 → %s" % (ok, len(ID_TO_FILES) - len(missing), OUT_MP3))
    if missing:
        print("提示：缺失的音标已保留原有的 TTS 朗读版，不影响使用。")


if __name__ == "__main__":
    main()
