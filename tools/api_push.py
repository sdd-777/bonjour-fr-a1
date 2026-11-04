#!/usr/bin/env python3.11
"""把本地文件推送到 GitHub 仓库（Git Data API，逐文件 blob → 单次 tree → commit）。

用法：
    GH_TOKEN=ghp_xxx python3.11 tools/api_push.py                 # 推送全站代码/样式/数据（小文件，默认）
    GH_TOKEN=ghp_xxx python3.11 tools/api_push.py --with-audio    # 额外重推音频目录
    GH_TOKEN=ghp_xxx python3.11 tools/api_push.py --with-bundle   # 额外推送单文件 HTML / zip
    GH_TOKEN=ghp_xxx REPO=owner/repo python3.11 tools/api_push.py # 指定仓库
    MSG="说明" GH_TOKEN=... python3.11 tools/api_push.py           # 自定义提交信息
"""
import base64, json, os, sys, time, urllib.error, urllib.request

API = "https://api.github.com"
TOKEN = os.environ.get("GH_TOKEN", "").strip()
if not TOKEN:
    sys.exit("缺少 GH_TOKEN 环境变量")

def req(method, path, body=None, raw=False, attempts=6):
    """带重试：大批量 blob 上传时 GitHub 偶发断连 / 429 / 5xx，指数退避后重试。
    blob 按内容 SHA 去重，POST 重试不会产生重复对象。"""
    data = json.dumps(body).encode() if body is not None else None
    for i in range(attempts):
        try:
            r = urllib.request.Request(API + path, data=data, method=method)
            r.add_header("Authorization", "token " + TOKEN)
            r.add_header("Accept", "application/vnd.github+json")
            r.add_header("User-Agent", "bonjour-fr-a1-push")
            if data:
                r.add_header("Content-Type", "application/json")
            with urllib.request.urlopen(r, timeout=180) as f:
                txt = f.read()
            return txt if raw else json.loads(txt)
        except urllib.error.HTTPError as e:
            retryable = e.code in (429, 500, 502, 503, 504)
            if not retryable or i == attempts - 1:
                raise
            wait = min(int(e.headers.get("Retry-After") or 2 ** i), 30)
            print("  HTTP %d，%ds 后重试 (%d/%d)" % (e.code, wait, i + 1, attempts), flush=True)
            time.sleep(wait)
        except Exception as e:
            if i == attempts - 1:
                raise
            wait = min(2 ** i, 15)
            print("  %s，%ds 后重试 (%d/%d)" % (type(e).__name__, wait, i + 1, attempts), flush=True)
            time.sleep(wait)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def collect():
    """默认推送全部站点代码/样式/数据（体积都很小），避免固定清单漏掉改动文件。"""
    files = []
    for rel in ["index.html", "assets/css/style.css"]:
        if os.path.exists(os.path.join(ROOT, rel)):
            files.append(rel)
    for d in ["assets/js", "tools"]:
        p = os.path.join(ROOT, d)
        if not os.path.isdir(p):
            continue
        for f in sorted(os.listdir(p)):
            if f.endswith((".js", ".py")) and "__pycache__" not in f:
                files.append(d + "/" + f)
    # 音频：--with-audio 推全部；AUDIO_PREFIX 只推指定前缀（增量推送时用，省时）
    audio_prefix = [x for x in os.environ.get("AUDIO_PREFIX", "").split(",") if x.strip()]
    if "--with-audio" in sys.argv or audio_prefix:
        for d in ["assets/audio/textbook", "assets/audio/words",
                  "assets/audio/ipa", "assets/audio/verbs", "assets/audio/sentences"]:
            p = os.path.join(ROOT, d)
            if not os.path.isdir(p):
                continue
            for f in sorted(os.listdir(p)):
                if not f.endswith(".mp3"):
                    continue
                if audio_prefix and not any(f.startswith(pre.strip()) for pre in audio_prefix):
                    continue
                files.append(d + "/" + f)
    if "--with-bundle" in sys.argv:
        for rel in ["french-a1-bonjour.html", "french-a1-portable.zip"]:
            if os.path.exists(os.path.join(ROOT, rel)):
                files.append(rel)
    return files

def repo():
    if os.environ.get("REPO"):
        return os.environ["REPO"]
    rs = req("GET", "/user/repos?per_page=100&sort=pushed")
    if not rs:
        sys.exit("账号下没有仓库")
    return rs[0]["full_name"]

def main():
    repo_full = repo()
    print("仓库:", repo_full)
    info = req("GET", "/" + "/".join(["repos", repo_full]))
    branch = info.get("default_branch", "main")
    base = req("GET", "/repos/%s/git/ref/heads/%s" % (repo_full, branch))
    parent = base["object"]["sha"]

    files = collect()
    print("待推送文件:", len(files))
    tree = []
    for i, rel in enumerate(files, 1):
        with open(os.path.join(ROOT, rel), "rb") as f:
            content = f.read()
        b = req("POST", "/repos/%s/git/blobs" % repo_full,
                {"content": base64.b64encode(content).decode(), "encoding": "base64"})
        tree.append({"path": rel, "mode": "100644", "type": "blob", "sha": b["sha"]})
        if i % 50 == 0 or i == len(files):
            print("  已上传 %d/%d" % (i, len(files)), flush=True)

    msg = os.environ.get("MSG", "").strip() or \
          "修复 Apple 移动端单词模块打不开：iOS SpeechSynthesis 兼容 + 单词卡延迟/分批渲染"
    new_tree = req("POST", "/repos/%s/git/trees" % repo_full, {"base_tree": parent, "tree": tree})
    commit = req("POST", "/repos/%s/git/commits" % repo_full,
                 {"message": msg, "tree": new_tree["sha"], "parents": [parent]})
    ref_path = "/repos/%s/git/refs/heads/%s" % (repo_full, branch)
    try:
        req("PATCH", ref_path, {"sha": commit["sha"]})
    except Exception:
        # 可能首次 PATCH 已生效但响应丢失：核验 ref 后再决定是否算失败
        cur = req("GET", ref_path)
        if cur["object"]["sha"] != commit["sha"]:
            raise
        print("  ref 已更新（响应丢失，已核验）", flush=True)
    print("完成：%s  %s" % (commit["sha"][:8], msg), flush=True)

if __name__ == "__main__":
    main()
