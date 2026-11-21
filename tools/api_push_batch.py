#!/usr/bin/env python3.11
"""分批推送：先并行上传所有 blob（内容寻址去重），再分批创建 tree+commit，
避免单次 tree 条目过多触发 422。每批基于上一批 commit 串联。

用法：
  GH_TOKEN=xxx MSG="..." AUDIO_LIST_FILE=... BATCH_SIZE=300 python3.11 tools/api_push_batch.py
"""
import base64, json, os, sys, time, urllib.error, urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

API = "https://api.github.com"
TOKEN = os.environ.get("GH_TOKEN", "").strip()
if not TOKEN:
    sys.exit("缺少 GH_TOKEN")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REPO = os.environ.get("REPO", "sdd-777/bonjour-fr-a1")
MSG = os.environ.get("MSG", "批量更新").strip()
BATCH = int(os.environ.get("BATCH_SIZE", "300"))


def req(method, path, body=None, attempts=6):
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
                return json.loads(f.read())
        except urllib.error.HTTPError as e:
            if e.code == 422 and i == attempts - 1:
                try: print("  422:", e.read().decode('utf-8', 'ignore')[:500], flush=True)
                except Exception: pass
            if e.code not in (429, 500, 502, 503, 504) or i == attempts - 1:
                raise
            wait = min(int(e.headers.get("Retry-After") or 2 ** i), 30)
            print(f"  HTTP {e.code}，{wait}s 重试 ({i+1}/{attempts})", flush=True)
            time.sleep(wait)
        except Exception:
            if i == attempts - 1: raise
            time.sleep(min(2 ** i, 15))


def collect():
    files = []
    for rel in ["index.html", "assets/css/style.css"]:
        if os.path.exists(os.path.join(ROOT, rel)): files.append(rel)
    for d in ["assets/js", "tools"]:
        p = os.path.join(ROOT, d)
        if os.path.isdir(p):
            for f in sorted(os.listdir(p)):
                if f.endswith((".js", ".py")) and "__pycache__" not in f:
                    files.append(d + "/" + f)
    lst = os.environ.get("AUDIO_LIST_FILE", "").strip()
    if lst and os.path.isfile(lst):
        for line in open(lst, encoding="utf-8"):
            rel = line.strip()
            if rel and rel not in files and os.path.isfile(os.path.join(ROOT, rel)):
                files.append(rel)
    return files


def upload_blob(rel):
    with open(os.path.join(ROOT, rel), "rb") as f:
        content = f.read()
    b = req("POST", f"/repos/{REPO}/git/blobs",
            {"content": base64.b64encode(content).decode(), "encoding": "base64"})
    return rel, b["sha"]


def main():
    files = collect()
    print(f"待推送 {len(files)} 个文件 | 仓库 {REPO} | 批次 {BATCH}", flush=True)

    # 1) 并行上传所有 blob
    shas = {}
    with ThreadPoolExecutor(max_workers=12) as ex:
        futs = {ex.submit(upload_blob, rel): rel for rel in files}
        for i, fut in enumerate(as_completed(futs), 1):
            rel, sha = fut.result()
            shas[rel] = sha
            if i % 200 == 0 or i == len(files):
                print(f"  blob {i}/{len(files)}", flush=True)

    # 2) 当前父提交
    base = req("GET", f"/repos/{REPO}/git/ref/heads/main")
    parent = base["object"]["sha"]
    print("起始 commit:", parent[:8], flush=True)

    # 3) 分批创建 tree + commit（每批基于上一批）
    batches = [files[i:i+BATCH] for i in range(0, len(files), BATCH)]
    for bi, batch in enumerate(batches, 1):
        pc = req("GET", f"/repos/{REPO}/git/commits/{parent}")
        base_tree = pc["tree"]["sha"]
        tree = [{"path": rel, "mode": "100644", "type": "blob", "sha": shas[rel]} for rel in batch]
        msg = MSG if len(batches) == 1 else f"{MSG}（第 {bi}/{len(batches)} 批）"
        new_tree = req("POST", f"/repos/{REPO}/git/trees", {"base_tree": base_tree, "tree": tree})
        commit = req("POST", f"/repos/{REPO}/git/commits", {"message": msg, "tree": new_tree["sha"], "parents": [parent]})
        req("PATCH", f"/repos/{REPO}/git/refs/heads/main", {"sha": commit["sha"]})
        parent = commit["sha"]
        print(f"  批次 {bi}/{len(batches)}: {len(batch)} 文件 → {parent[:8]}", flush=True)

    print("完成：最终 commit", parent[:8], flush=True)


if __name__ == "__main__":
    main()
