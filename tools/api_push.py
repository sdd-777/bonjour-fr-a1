#!/usr/bin/env python3.11
"""把本地文件推送到 GitHub 仓库（Git Data API，逐文件 blob → 单次 tree → commit）。

用法：
    GH_TOKEN=ghp_xxx python3.11 tools/api_push.py                 # 推送默认清单（代码 + 音频）
    GH_TOKEN=ghp_xxx python3.11 tools/api_push.py --with-bundle   # 连同单文件 HTML / zip 一起推
    GH_TOKEN=ghp_xxx REPO=owner/repo python3.11 tools/api_push.py # 指定仓库（不指定则取最近推送的仓库）
"""
import base64, json, os, sys, urllib.request

API = "https://api.github.com"
TOKEN = os.environ.get("GH_TOKEN", "").strip()
if not TOKEN:
    sys.exit("缺少 GH_TOKEN 环境变量")

def req(method, path, body=None, raw=False):
    data = json.dumps(body).encode() if body is not None else None
    r = urllib.request.Request(API + path, data=data, method=method)
    r.add_header("Authorization", "token " + TOKEN)
    r.add_header("Accept", "application/vnd.github+json")
    if data:
        r.add_header("Content-Type", "application/json")
    with urllib.request.urlopen(r, timeout=180) as f:
        txt = f.read()
    return txt if raw else json.loads(txt)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def collect():
    files = []
    for rel in ["assets/js/games.js", "assets/js/textbook-data.js",
                "tools/bundle.js", "tools/api_push.py"]:
        if os.path.exists(os.path.join(ROOT, rel)):
            files.append(rel)
    for d in ["assets/audio/textbook", "assets/audio/words"]:
        p = os.path.join(ROOT, d)
        if not os.path.isdir(p):
            continue
        for f in sorted(os.listdir(p)):
            if f.endswith(".mp3") and (d.endswith("textbook") or f.startswith("obj-")):
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
            print("  已上传 %d/%d" % (i, len(files)))

    msg = "教材 L1-L8 全部录入 + 点击场景物体发音 + 打包更新"
    new_tree = req("POST", "/repos/%s/git/trees" % repo_full, {"base_tree": parent, "tree": tree})
    commit = req("POST", "/repos/%s/git/commits" % repo_full,
                 {"message": msg, "tree": new_tree["sha"], "parents": [parent]})
    req("PATCH", "/repos/%s/git/refs/heads/%s" % (repo_full, branch), {"sha": commit["sha"]})
    print("完成：%s  %s" % (commit["sha"][:8], msg))

if __name__ == "__main__":
    main()
