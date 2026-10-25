/* =========================================================
   视频小剧场
   依赖：videos-data.js（VIDEO_CATS / VIDEOS / videoCover）
   说明：B 站视频用官方嵌入播放器（player.bilibili.com），点击卡片才加载 iframe；
        TV5MONDE / YouTube / TikTok 为官网链接，新标签页打开（🔑 需外网）。
   ========================================================= */

const vesc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* 播放量：1745600 → 174.6 万 */
function fmtView(n){
  if (!n) return '';
  if (n >= 100000000) return (n / 100000000).toFixed(1).replace(/\.0$/, '') + ' 亿';
  if (n >= 10000) return (n / 10000).toFixed(1).replace(/\.0$/, '') + ' 万';
  return String(n);
}
/* 时长：227 → 3:47；187094 → 51:58:14 */
function fmtDur(s){
  if (!s) return '';
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), ss = s % 60;
  const pad = x => String(x).padStart(2, '0');
  return h > 0 ? h + ':' + pad(m) + ':' + pad(ss) : m + ':' + pad(ss);
}
function levelCls(lv){
  if (!lv) return 'lv-none';
  const t = String(lv).toUpperCase();
  if (t.indexOf('A1') === 0) return 'lv-a1';
  if (t.indexOf('A2') === 0) return 'lv-a2';
  if (t.indexOf('B1') === 0) return 'lv-b1';
  if (t.indexOf('B2') === 0) return 'lv-b2';
  return 'lv-none';
}
const SRC_LABEL = { bilibili: 'B 站', tv5monde: 'TV5MONDE', youtube: 'YouTube', tiktok: 'TikTok' };
const SRC_CLS = { bilibili: 'src-bili', tv5monde: 'src-tv5', youtube: 'src-yt', tiktok: 'src-tt' };

let curVidCat = 'fun';
let curPlayerCard = null;   /* 当前展开播放器的卡片（同时只播一个） */

/* ---------- 页签 ---------- */
function renderVideoTabs(){
  const box = $('#video-tabs');
  box.innerHTML = '';
  VIDEO_CATS.forEach(c => {
    const n = VIDEOS.filter(v => v.cat === c.id).length;
    const b = document.createElement('button');
    b.className = 'wtab' + (c.id === curVidCat ? ' active' : '');
    b.setAttribute('role', 'tab');
    b.innerHTML = vesc(c.icon) + ' ' + vesc(c.label) + ' <small>' + n + '</small>';
    b.onclick = () => selectVidCat(c.id);
    box.appendChild(b);
  });
}

function selectVidCat(id){
  closeVidPlayer();
  curVidCat = id;
  renderVideoTabs();
  renderVideoGrid();
}

/* ---------- 卡片网格 ---------- */
function renderVideoGrid(){
  const grid = $('#video-grid');
  const tip = $('#video-tip');
  const cat = VIDEO_CATS.find(c => c.id === curVidCat);
  grid.innerHTML = '';
  if (cat){
    tip.hidden = false;
    tip.innerHTML = '💡 ' + vesc(cat.tip);
  } else {
    tip.hidden = true;
  }
  VIDEOS.filter(v => v.cat === curVidCat).forEach(v => grid.appendChild(videoCard(v)));
}

function videoCard(v){
  const card = document.createElement('div');
  card.className = 'video-card' + (v.needNet ? ' need-net' : '');
  card.dataset.vid = v.id;

  const isBili = (v.src === 'bilibili');
  const meta = [
    v.up ? 'UP：' + vesc(v.up) : '',
    v.view ? fmtView(v.view) + ' 次播放' : ''
  ].filter(Boolean).join(' · ');

  card.innerHTML =
    '<div class="vc-cover">' +
      '<img src="' + vesc(videoCover(v.id)) + '" alt="' + vesc(v.title) + '" loading="lazy">' +
      '<span class="vc-lv ' + levelCls(v.level) + '">' + vesc(v.level || '—') + '</span>' +
      (v.dur ? '<span class="vc-dur">' + fmtDur(v.dur) + '</span>' : '') +
      '<span class="vc-src ' + SRC_CLS[v.src] + '">' + vesc(SRC_LABEL[v.src] || v.src) + '</span>' +
      (v.needNet ? '<span class="vc-net">🔑 需外网</span>' : '') +
      '<span class="vc-play-icon">▶</span>' +
    '</div>' +
    '<div class="vc-body">' +
      '<h3 class="vc-title">' + vesc(v.title) + '</h3>' +
      (meta ? '<p class="vc-meta">' + meta + '</p>' : '') +
      '<p class="vc-desc">' + vesc(v.desc) + '</p>' +
      '<div class="vc-actions">' +
        (isBili
          ? '<button class="btn btn-primary vc-open">▶ 站内播放</button>' +
            '<a class="btn btn-ghost" href="https://www.bilibili.com/video/' + vesc(v.bvid) + '/" target="_blank" rel="noopener">↗ B 站打开</a>'
          : '<a class="btn btn-primary vc-open" href="' + vesc(v.url) + '" target="_blank" rel="noopener">↗ 打开 ' + vesc(SRC_LABEL[v.src] || '') + ' 页面</a>') +
      '</div>' +
    '</div>' +
    '<div class="vc-player" hidden></div>';

  if (isBili){
    const btn = card.querySelector('.vc-open');
    btn.onclick = () => toggleVidPlayer(card, v);
    card.querySelector('.vc-cover').onclick = () => toggleVidPlayer(card, v);
  }
  /* 封面加载失败（外网/TV5 无本地封面）→ 平台品牌色占位 */
  const img = card.querySelector('.vc-cover img');
  img.addEventListener('error', () => {
    if (img.dataset.failed) return;
    img.dataset.failed = '1';
    img.hidden = true;
    const ph = document.createElement('span');
    ph.className = 'vc-ph ' + String(SRC_CLS[v.src] || '').replace('src-', 'ph-');
    ph.textContent = SRC_LABEL[v.src] || '视频';
    img.parentNode.appendChild(ph);
  });
  return card;
}

/* ---------- 播放器（懒加载 iframe，同时只开一个） ---------- */
function toggleVidPlayer(card, v){
  const box = card.querySelector('.vc-player');
  if (curPlayerCard === card){
    closeVidPlayer();
    return;
  }
  closeVidPlayer();
  box.hidden = false;
  box.innerHTML =
    '<iframe src="https://player.bilibili.com/player.html?bvid=' + vesc(v.bvid) +
      '&page=1&high_quality=1&autoplay=1&danmaku=0" ' +
    'scrolling="no" border="0" frameborder="no" framespacing="0" ' +
    'allowfullscreen="true" allow="autoplay; fullscreen; picture-in-picture" ' +
    'title="' + vesc(v.title) + '"></iframe>' +
    '<p class="vc-fallback">⚠️ 若长时间黑屏或提示「无法正常播放」（个别浏览器会限制第三方播放器），请点上方 <b>↗ B 站打开</b> 去官网观看</p>' +
    '<button class="btn btn-ghost vc-close">⏹ 收起播放器</button>';
  box.querySelector('.vc-close').onclick = closeVidPlayer;
  card.classList.add('playing');
  curPlayerCard = card;
  setTimeout(() => card.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
}

function closeVidPlayer(){
  if (!curPlayerCard) return;
  const box = curPlayerCard.querySelector('.vc-player');
  if (box){ box.hidden = true; box.innerHTML = ''; }
  curPlayerCard.classList.remove('playing');
  curPlayerCard = null;
}

/* 切换视图时停掉播放（供 app.js showView 调用） */
function stopVideoPlayers(){
  closeVidPlayer();
}

/* ---------- 初始化 ---------- */
function initVideos(){
  renderVideoTabs();
  renderVideoGrid();
  /* 首页菜单卡 */
  const mc = $('#card-videos');
  if (mc) mc.onclick = () => showView('videos');
}
