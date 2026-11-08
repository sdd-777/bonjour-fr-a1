/* =========================================================
   fMP4 -> 标准 MP4 重封装（纯字节搬运，不转码）
   ---------------------------------------------------------
   MediaRecorder 在 Chrome / 安卓上录出的是 fragmented MP4：
     ftyp + moov(stbl 为空) + [moof + mdat] x N
   网页里用 blob URL 试听完全正常，但把文件交给系统相册、
   微信视频转码或从 <video> 播放器右上角「分享 / 存储」时，
   不少安卓转码器只读第一个 fragment（约 0.5 秒），于是相册里
   只剩一个静止的开头画面。

   这里把全部分片合并成：
     ftyp + moov(完整 stbl / 正确 duration) + mdat(连续样本)
   产出的就是任何相册、播放器都能读到完整时长的标准 MP4。
   只搬字节，不解码不编码，几 MB 文件耗时可忽略。

   输入 ArrayBuffer / Uint8Array；不是分片 MP4 或解析失败返回 null，
   调用方应原样保留原文件。
   ========================================================= */
(function (root) {
  'use strict';

  function u32(b, o) {
    return ((b[o] << 24) | (b[o + 1] << 16) | (b[o + 2] << 8) | b[o + 3]) >>> 0;
  }
  function u64(b, o) { return u32(b, o) * 4294967296 + u32(b, o + 4); }
  function tag(b, o) {
    return String.fromCharCode(b[o], b[o + 1], b[o + 2], b[o + 3]);
  }
  function put32(a, v) {
    a[0] = (v >>> 24) & 255; a[1] = (v >>> 16) & 255;
    a[2] = (v >>> 8) & 255;  a[3] = v & 255;
  }
  function cat(parts) {
    var n = 0, i, p = 0, out;
    for (i = 0; i < parts.length; i++) n += parts[i].length;
    out = new Uint8Array(n);
    for (i = 0; i < parts.length; i++) { out.set(parts[i], p); p += parts[i].length; }
    return out;
  }
  function box(type, parts) {
    var body = cat(parts), out = new Uint8Array(8 + body.length);
    put32(out.subarray(0, 4), out.length);
    out[4] = type.charCodeAt(0); out[5] = type.charCodeAt(1);
    out[6] = type.charCodeAt(2); out[7] = type.charCodeAt(3);
    out.set(body, 8);
    return out;
  }
  function full(type, ver, flags, payload) {
    var h = new Uint8Array(4);
    h[0] = ver; h[1] = (flags >>> 16) & 255;
    h[2] = (flags >>> 8) & 255; h[3] = flags & 255;
    return box(type, [h, payload]);
  }
  function u32arr(vals) {
    var o = new Uint8Array(vals.length * 4), i;
    for (i = 0; i < vals.length; i++) put32(o.subarray(i * 4, i * 4 + 4), vals[i]);
    return o;
  }

  /* 解析 [start, end) 里的顶层 box */
  function parseBoxes(b, start, end) {
    var list = [], off = start, sz, t, hdr;
    while (off + 8 <= end) {
      sz = u32(b, off); t = tag(b, off + 4); hdr = 8;
      if (sz === 1) { sz = u64(b, off + 8); hdr = 16; }
      else if (sz === 0) sz = end - off;
      if (sz < hdr || off + sz > end) break;
      list.push({ type: t, start: off, end: off + sz, hdr: hdr });
      off += sz;
    }
    return list;
  }
  function kids(b, e) { return parseBoxes(b, e.start + e.hdr, e.end); }
  function raw(b, e) { return b.subarray(e.start, e.end); }
  function find(bs, t) {
    for (var i = 0; i < bs.length; i++) if (bs[i].type === t) return bs[i];
    return null;
  }

  function isFragmented(buf) {
    try {
      var b = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
      var top = parseBoxes(b, 0, b.length), i;
      for (i = 0; i < top.length; i++) if (top[i].type === 'moof') return true;
      return false;
    } catch (e) { return false; }
  }

  /* 把已有 box 复制一份，并改写 duration 字段（mvhd / tkhd / mdhd） */
  function patchDuration(b, e, dur, kind) {
    var c = new Uint8Array(raw(b, e));           /* 复制，别改到原数据 */
    var p = e.hdr, ver = c[p], off;
    if (kind === 'tkhd') off = ver === 1 ? 28 : 20;
    else off = ver === 1 ? 24 : 16;              /* mvhd / mdhd */
    if (ver === 1) {
      var hi = Math.floor(dur / 4294967296), lo = dur >>> 0;
      put32(c.subarray(p + off, p + off + 4), hi);
      put32(c.subarray(p + off + 4, p + off + 8), lo);
    } else {
      put32(c.subarray(p + off, p + off + 4), dur >>> 0);
    }
    return c;
  }
  function boxTimescale(b, e, kind) {
    var p = e.start + e.hdr, ver = b[p];
    var off = kind === 'mvhd' ? (ver === 1 ? 20 : 12)
            : kind === 'mdhd' ? (ver === 1 ? 20 : 12) : 12;
    return u32(b, p + off) || 1000;
  }
  function trackIdOf(b, tkhd) {
    var p = tkhd.start + tkhd.hdr, ver = b[p];
    return u32(b, p + (ver === 1 ? 20 : 12));
  }

  /* 构造 stbl：stsd 沿用原字节，其余索引表全部重建 */
  function buildStbl(b, stbl, samples, chunkOffset) {
    var orig = kids(b, stbl), parts = [], i, s;
    var stsd = find(orig, 'stsd');
    if (!stsd) return null;
    parts.push(raw(b, stsd));

    /* stts：相同 duration 压成一个 entry */
    var stts = [];
    for (i = 0; i < samples.length; i++) {
      var d = samples[i].dur;
      if (stts.length && stts[stts.length - 1].d === d) stts[stts.length - 1].c++;
      else stts.push({ c: 1, d: d });
    }
    var sttsVals = [stts.length];
    for (i = 0; i < stts.length; i++) sttsVals.push(stts[i].c, stts[i].d);
    parts.push(full('stts', 0, 0, u32arr(sttsVals)));

    /* stss：全关键帧时省略该 box（规范：省略即全部为关键帧） */
    var syncs = [];
    for (i = 0; i < samples.length; i++) if (samples[i].sync) syncs.push(i + 1);
    if (syncs.length && syncs.length < samples.length)
      parts.push(full('stss', 0, 0, u32arr([syncs.length].concat(syncs))));

    /* ctts：B 帧带来的 composition offset，MediaRecorder 一般没有 */
    var ctts = [], hasCts = false;
    for (i = 0; i < samples.length; i++) {
      var o = samples[i].cto || 0;
      if (o) hasCts = true;
      if (ctts.length && ctts[ctts.length - 1].o === o) ctts[ctts.length - 1].c++;
      else ctts.push({ c: 1, o: o });
    }
    if (hasCts) {
      var cv = [ctts.length], ver = 0;
      for (i = 0; i < ctts.length; i++) { cv.push(ctts[i].c, ctts[i].o); if (ctts[i].o < 0) ver = 1; }
      parts.push(full('ctts', ver, 0, u32arr(cv)));
    }

    /* stsz */
    var szVals = [0, samples.length];
    for (i = 0; i < samples.length; i++) szVals.push(samples[i].data.length);
    parts.push(full('stsz', 0, 0, u32arr(szVals)));

    /* stsc：整条轨数据连续放，只需一个 chunk */
    parts.push(full('stsc', 0, 0, u32arr([1, 1, samples.length, 1])));

    /* stco / co64：chunk 在 mdat 里的绝对偏移 */
    if (chunkOffset + 8 > 0xFFFFFFFF)
      parts.push(full('co64', 0, 0, u32arr([1, 0, chunkOffset >>> 0])));
    else
      parts.push(full('stco', 0, 0, u32arr([1, chunkOffset >>> 0])));

    return box('stbl', parts);
  }

  function rebuildMinf(b, minf, samples, chunkOffset) {
    var ks = kids(b, minf), parts = [];
    for (var i = 0; i < ks.length; i++) {
      if (ks[i].type === 'stbl') {
        var st = buildStbl(b, ks[i], samples, chunkOffset);
        if (!st) return null;
        parts.push(st);
      } else parts.push(raw(b, ks[i]));
    }
    return box('minf', parts);
  }
  function rebuildMdia(b, mdia, samples, chunkOffset, mediaDur) {
    var ks = kids(b, mdia), parts = [];
    for (var i = 0; i < ks.length; i++) {
      var k = ks[i];
      if (k.type === 'edts') continue;           /* 丢掉 edit list，我们的 dts 从 0 开始 */
      if (k.type === 'mdhd') parts.push(patchDuration(b, k, mediaDur, 'mdhd'));
      else if (k.type === 'minf') {
        var m = rebuildMinf(b, k, samples, chunkOffset);
        if (!m) return null;
        parts.push(m);
      } else parts.push(raw(b, k));
    }
    return box('mdia', parts);
  }
  function rebuildTrak(b, trak, tracks, movieDur) {
    var ks = kids(b, trak), tkhd = find(ks, 'tkhd');
    if (!tkhd) return raw(b, trak);
    var id = trackIdOf(b, tkhd), info = tracks[id];
    if (!info || !info.samples.length) return raw(b, trak);

    var parts = [];
    for (var i = 0; i < ks.length; i++) {
      var k = ks[i];
      if (k.type === 'tkhd') parts.push(patchDuration(b, k, movieDur, 'tkhd'));
      else if (k.type === 'mdia')
        parts.push(rebuildMdia(b, k, info.samples, info.chunkOffset, info.mediaDur));
      else if (k.type === 'edts') continue;
      else parts.push(raw(b, k));
    }
    return box('trak', parts);
  }
  function rebuildMoov(b, moov, tracks, movieDur) {
    var ks = kids(b, moov), parts = [];
    for (var i = 0; i < ks.length; i++) {
      var k = ks[i];
      if (k.type === 'mvex') continue;           /* 标准 MP4 不需要 mvex */
      if (k.type === 'mvhd') parts.push(patchDuration(b, k, movieDur, 'mvhd'));
      else if (k.type === 'trak') parts.push(rebuildTrak(b, k, tracks, movieDur));
      else parts.push(raw(b, k));
    }
    return box('moov', parts);
  }

  /* 读 trex，给 tfhd 没写全的默认值兜底 */
  function readTrex(b, moov) {
    var ks = kids(b, moov), out = {}, i, j;
    var mvex = find(ks, 'mvex');
    if (!mvex) return out;
    var ts = kids(b, mvex);
    for (i = 0; i < ts.length; i++) {
      if (ts[i].type !== 'trex') continue;
      var p = ts[i].start + ts[i].hdr + 4;      /* version + flags */
      var id = u32(b, p);
      out[id] = {
        desc: u32(b, p + 4), dur: u32(b, p + 8),
        size: u32(b, p + 12), flags: u32(b, p + 16)
      };
    }
    return out;
  }

  function collectSamples(b, moofs, tracks, trex, firstMoofStart) {
    for (var m = 0; m < moofs.length; m++) {
      var mf = moofs[m], ks = kids(b, mf);
      for (var t = 0; t < ks.length; t++) {
        if (ks[t].type !== 'traf') continue;
        var items = kids(b, ks[t]);
        var tfhd = find(items, 'tfhd');
        if (!tfhd) continue;
        var p = tfhd.start + tfhd.hdr;
        var ver = b[p];
        var fl = ((b[p + 1] << 16) | (b[p + 2] << 8) | b[p + 3]) >>> 0;
        p += 4;
        var id = u32(b, p); p += 4;
        var tr = tracks[id], ex = trex[id] || {};
        if (!tr) continue;
        var base = (fl & 0x1) ? u64(b, p) : ((fl & 0x020000) ? mf.start : firstMoofStart);
        if (fl & 0x1) p += 8;
        if (fl & 0x2) p += 4;
        var dDur = ex.dur || 0, dSize = ex.size || 0, dFlags = ex.flags || 0;
        if (fl & 0x8) { dDur = u32(b, p); p += 4; }
        if (fl & 0x10) { dSize = u32(b, p); p += 4; }
        if (fl & 0x20) { dFlags = u32(b, p); p += 4; }

        for (var r = 0; r < items.length; r++) {
          if (items[r].type !== 'trun') continue;
          var q = items[r].start + items[r].hdr;
          var tv = b[q];
          var tfl = ((b[q + 1] << 16) | (b[q + 2] << 8) | b[q + 3]) >>> 0;
          q += 4;
          var count = u32(b, q); q += 4;
          var dataOff = 0, firstFlags = 0;
          if (tfl & 0x1) { dataOff = u32(b, q) | 0; q += 4; }
          if (tfl & 0x4) { firstFlags = u32(b, q); q += 4; }
          var pos = base + dataOff;
          for (var s = 0; s < count; s++) {
            var dur = dDur, size = dSize, sf = dFlags, cto = 0;
            if (tfl & 0x100) { dur = u32(b, q); q += 4; }
            if (tfl & 0x200) { size = u32(b, q); q += 4; }
            if (tfl & 0x400) { sf = u32(b, q); q += 4; }
            else if (s === 0 && (tfl & 0x4)) sf = firstFlags;
            if (tfl & 0x800) { cto = tv === 1 ? (u32(b, q) | 0) : u32(b, q); q += 4; }
            if (!size || pos + size > b.length) return false;
            tr.samples.push({
              data: b.subarray(pos, pos + size),
              dur: dur || 1,
              cto: cto,
              sync: (sf & 0x10000) === 0
            });
            pos += size;
          }
        }
      }
    }
    return true;
  }

  function remux(input) {
    try {
      var b = input instanceof Uint8Array ? input : new Uint8Array(input);
      var top = parseBoxes(b, 0, b.length);
      var ftyp = find(top, 'ftyp'), moov = find(top, 'moov');
      var moofs = [], i;
      for (i = 0; i < top.length; i++) if (top[i].type === 'moof') moofs.push(top[i]);
      if (!ftyp || !moov || !moofs.length) return null;

      var trex = readTrex(b, moov);
      var tracks = {}, order = [];
      var mks = kids(b, moov);
      for (i = 0; i < mks.length; i++) {
        if (mks[i].type !== 'trak') continue;
        var ts = kids(b, mks[i]), tkhd = find(ts, 'tkhd'), mdia = find(ts, 'mdia');
        if (!tkhd || !mdia) continue;
        var mdks = kids(b, mdia), mdhd = find(mdks, 'mdhd');
        if (!mdhd) continue;
        var id = trackIdOf(b, tkhd);
        tracks[id] = { samples: [], timescale: boxTimescale(b, mdhd, 'mdhd'), mediaDur: 0, chunkOffset: 0 };
        order.push(id);
      }
      if (!order.length || !collectSamples(b, moofs, tracks, trex, moofs[0].start)) return null;

      var movieTs = 1000, mv = find(mks, 'mvhd');
      if (mv) movieTs = boxTimescale(b, mv, 'mvhd') || 1000;

      /* 每轨样本连续存放，chunkOffset 先占位，moov 体积确定后再回填 */
      var total = 0, movieDur = 0;
      for (i = 0; i < order.length; i++) {
        var tr = tracks[order[i]], sum = 0;
        for (var j = 0; j < tr.samples.length; j++) sum += tr.samples[j].dur;
        tr.mediaDur = sum;
        movieDur = Math.max(movieDur, Math.round(sum / tr.timescale * movieTs));
        tr.chunkOffset = total;
        for (j = 0; j < tr.samples.length; j++) total += tr.samples[j].data.length;
      }
      if (!total || !movieDur) return null;

      var probe = rebuildMoov(b, moov, tracks, movieDur);
      var mdatDataStart = raw(b, ftyp).length + probe.length + 8;
      /* 用真实偏移重建（大小不变，仅 stco 数值不同） */
      for (i = 0; i < order.length; i++) tracks[order[i]].chunkOffset += mdatDataStart;
      var outMoov = rebuildMoov(b, moov, tracks, movieDur);
      if (outMoov.length !== probe.length) return null;

      var mdat = new Uint8Array(8 + total);
      put32(mdat.subarray(0, 4), mdat.length);
      mdat[4] = 109; mdat[5] = 100; mdat[6] = 97; mdat[7] = 116;  /* 'mdat' */
      var at = 8;
      for (i = 0; i < order.length; i++) {
        var ss = tracks[order[i]].samples;
        for (var k = 0; k < ss.length; k++) { mdat.set(ss[k].data, at); at += ss[k].data.length; }
      }
      return cat([raw(b, ftyp), outMoov, mdat]);
    } catch (e) { return null; }
  }

  var api = { remux: remux, isFragmented: isFragmented };
  root.Mp4Remux = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : this));
