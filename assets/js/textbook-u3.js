/* =========================================================
   📚 《你好！法语 1》Unité 3 · Leçons 9–12（增量数据）
   依赖：textbook-data.js 先加载（TB_UNITS / TB_LESSONS 已存在）
   做法：push / Object.assign 原地扩充，window.__TB_* 引用同步生效
   音频命名沿用：tb-l9-t1.mp3 / tb-l9-w1.mp3 / tb-l9-s1.mp3 …
   ========================================================= */

/* 防重复加载：脚本被重试时不会插入两个 Unité 3 */
if (TB_UNITS.every(u => u.n !== 3)){
  TB_UNITS.push({ n: 3, title: "Unité 3 · Ça se trouve où ? 在哪儿？", lessons: ["tb-l9", "tb-l10", "tb-l11", "tb-l12"] });
}

Object.assign(TB_LESSONS, {

  /* ————— Leçon 9 ————— */
  "tb-l9": {
    unit: 3, no: "Leçon 9", title: "Appartement à louer 公寓出租",
    text: [
      { fr: "À louer : près du centre, 2 pièces, 68 m², salon, chambre, cuisine, salle de bains, immeuble récent. 550 € / mois.", zh: "出租：市中心附近，两室，68 平方米，客厅、卧室、厨房、浴室，新楼。每月 550 欧元。" },
      { fr: "Monsieur,", zh: "先生：" },
      { fr: "L'immeuble est au coin de la rue Victor-Hugo et de la rue Michelet. C'est un immeuble récent avec un parking.", zh: "楼房位于维克多·雨果街和米什莱街的拐角处，是一栋带停车场的新楼。" },
      { fr: "L'appartement est au troisième étage avec ascenseur.", zh: "公寓在四楼（法国说法：第三层），有电梯。" },
      { fr: "La cuisine est à gauche de l'entrée.", zh: "厨房在进门处的左边。" },
      { fr: "En face de la cuisine, vous avez les toilettes et une salle de bains avec une douche.", zh: "厨房对面是卫生间和带淋浴的浴室。" },
      { fr: "La chambre est au bout du couloir, à droite : il y a un lit et un bureau avec une chaise.", zh: "卧室在走廊尽头靠右：有一张床和一张带椅子的书桌。" },
      { fr: "À gauche du couloir, il y a le salon. C'est calme.", zh: "走廊左边是客厅，很安静。" },
      { fr: "Vous avez deux placards dans l'appartement.", zh: "公寓里还有两个壁橱。" },
      { fr: "Meilleures salutations.", zh: "顺致诚挚的问候。" },
      { fr: "Alain Dauger, responsable de l'agence Loca-loisirs.", zh: "阿兰·多热，Loca-loisirs 中介负责人。" }
    ],
    vocab: [
      { fr: "agence", pos: "n.f.", g: "f", zh: "代理行，事务所" },
      { fr: "agence immobilière", pos: "n.f.", g: "f", zh: "房产中介" },
      { fr: "immobilier(ère)", pos: "adj.", zh: "房地产的" },
      { fr: "ancien(ne)", pos: "adj.", zh: "旧的，古老的" },
      { fr: "annonce", pos: "n.f.", g: "f", zh: "启事，公告" },
      { fr: "petite annonce", pos: "n.f.", g: "f", zh: "分类小广告" },
      { fr: "appartement", pos: "n.m.", g: "m", zh: "公寓，成套房间" },
      { fr: "avenue", pos: "n.f.", g: "f", zh: "大道，大街" },
      { fr: "bout", pos: "n.m.", g: "m", zh: "末端，尽头" },
      { fr: "bruyant(e)", pos: "adj.", zh: "吵闹的" },
      { fr: "bureau", pos: "n.m.", g: "m", zh: "书桌；办公室" },
      { fr: "chez", pos: "prép.", zh: "在…家里，在…处" },
      { fr: "clair(e)", pos: "adj.", zh: "明亮的" },
      { fr: "couloir", pos: "n.m.", g: "m", zh: "走廊" },
      { fr: "cuisine", pos: "n.f.", g: "f", zh: "厨房；烹饪" },
      { fr: "douche", pos: "n.f.", g: "f", zh: "淋浴" },
      { fr: "entrée", pos: "n.f.", g: "f", zh: "入口，门厅" },
      { fr: "étage", pos: "n.m.", g: "m", zh: "（楼）层" },
      { fr: "face", pos: "n.f.", g: "f", zh: "面；en face de 在…对面" },
      { fr: "immeuble", pos: "n.m.", g: "m", zh: "楼房，大楼" },
      { fr: "louer", pos: "v.t.", zh: "出租；租用" },
      { fr: "mètre", pos: "n.m.", g: "m", zh: "米" },
      { fr: "mètre carré", pos: "n.m.", g: "m", zh: "平方米" },
      { fr: "mois", pos: "n.m.", g: "m", zh: "月份" },
      { fr: "parking", pos: "n.m.", g: "m", zh: "停车场" },
      { fr: "placard", pos: "n.m.", g: "m", zh: "壁橱" },
      { fr: "plan", pos: "n.m.", g: "m", zh: "平面图，地图" },
      { fr: "premier(ère)", pos: "adj.", zh: "第一的" },
      { fr: "récent(e)", pos: "adj.", zh: "新近的，新建的" },
      { fr: "responsable", pos: "n.", zh: "负责人" },
      { fr: "rez-de-chaussée", pos: "n.m.", g: "m", zh: "底层（中国说法的一楼）" },
      { fr: "salle de bains", pos: "n.f.", g: "f", zh: "浴室" },
      { fr: "sombre", pos: "adj.", zh: "昏暗的" },
      { fr: "toilettes", pos: "n.f.pl.", g: "f", zh: "卫生间，厕所" },
      { fr: "troisième", pos: "adj.num.ord.", zh: "第三" },
      { fr: "où", pos: "adv.interr.", zh: "在哪儿，去哪里" },
      { fr: "salle", pos: "n.f.", g: "f", zh: "房间，室；厅" },
    ],
    grammar: [
      { t: "重读人称代词 le pronom tonique (2)", d: "<b>moi / toi / lui / elle / nous / vous / eux / elles</b> 用在介词后面、表示强调，或单独成句。<br>例：Ma mère habite avec <b>nous</b>. 我妈妈和我们住。Vous travaillez <b>chez vous</b> ? 您在家里办公吗？<b>Eux</b>, ils adorent le football ; et <b>elles</b>, elles adorent la musique. 他们喜欢足球，而她们喜欢音乐。" },
      { t: "介词 la préposition", d: "常用简单介词：<b>à, de, avant, après, avec, chez, dans, contre, devant, derrière, sous, depuis, en, entre, pour, jusque</b>。<br>复合介词：<b>en face de</b> 在…对面、<b>au bout de</b> 在…尽头、<b>au coin de</b> 在…拐角、<b>près de</b> 靠近、<b>au bord de</b> 在…边上、<b>à côté de</b> 在…旁边、<b>au-dessus de / au-dessous de</b> 在…上方／下方。<br>注意 <b>avant de</b> + 动词、<b>à cause de / grâce à / en raison de</b> 表原因。" },
      { t: "pour 的用法", d: "<b>pour + 人</b>：— Cette robe, c'est pour qui ? — C'est pour Alice. / C'est pour <b>elle</b>.<br><b>pour + 事物或目的</b>：— Vous venez pour quoi ? — Pour un rendez-vous. / Pour ça. / Pour parler avec vous.<br>问「为了谁」用 <b>pour qui</b>，问「为了什么」用 <b>pour quoi</b>。" },
      { t: "avec 的用法", d: "① 陪同：Tu viens <b>avec moi</b> ? 你和我一起去吗？<br>② 带有：Il y a un bureau <b>avec</b> une chaise ici. 这儿有一张带椅子的书桌。C'est un immeuble récent <b>avec</b> un parking. 这是一栋带停车场的新楼。" },
      { t: "疑问副词 où 与楼层", d: "问地点：— <b>Où</b> sont les placards ? — Dans la chambre. / C'est <b>où</b>, le cinéma ? — C'est par là. / <b>Ça se trouve où</b>, le restaurant japonais ?<br>楼层：au <b>rez-de-chaussée</b> 底层 → au <b>premier</b> → au <b>deuxième</b> → au <b>troisième</b> → au <b>quatrième</b> … au <b>dernier</b> étage。" },
      { t: "形容词的反义词", d: "<b>petit(e)</b> ↔ <b>grand(e)</b> 小／大；<b>ancien(ne)</b> ↔ <b>récent(e)</b> 旧／新；<b>bruyant(e)</b> ↔ <b>calme</b> 吵／安静；<b>clair(e)</b> ↔ <b>sombre</b> 明亮／昏暗。<br>形容词要与名词性数配合：Chez nous, le salon est clair. → Chez <b>eux</b>, le salon est <b>sombre</b>." }
    ],
    say: [
      { title: "Situer un lieu sur un plan 在平面图上说明位置", items: [
        { fr: "La salle de bains est en face de la cuisine.", zh: "浴室在厨房对面。" },
        { fr: "La chambre est au bout du couloir, à droite.", zh: "卧室在走廊尽头，靠右。" },
        { fr: "L'immeuble est au coin de la rue.", zh: "楼房在街角。" }
      ]},
      { title: "S'informer sur un lieu 询问房屋情况", items: [
        { fr: "Où est l'appartement ?", zh: "公寓在哪里？" },
        { fr: "Il y a une fenêtre dans la salle de bains ?", zh: "浴室里有窗户吗？" },
        { fr: "Quel étage, s'il vous plaît ? — Au troisième.", zh: "请问在几层？——在第四层（troisième étage）。" }
      ]},
      { title: "Chercher un appartement 找房对话", items: [
        { fr: "Bonjour, je cherche un appartement à louer.", zh: "您好，我想租一套公寓。" },
        { fr: "Il est clair, calme, avec ascenseur.", zh: "房子明亮、安静，有电梯。" }
      ]}
    ]
  },

  /* ————— Leçon 10 ————— */
  "tb-l10": {
    unit: 3, no: "Leçon 10", title: "C'est par où ? 怎么走？",
    text: [
      { fr: "— Pardon, monsieur. Le musée du Louvre, c'est par où ?", zh: "打扰一下，先生。卢浮宫博物馆怎么走？" },
      { fr: "— Oh ! là, là ! Vous êtes loin. Prenez le métro.", zh: "哎呀！您离得可远呢，坐地铁吧。" },
      { fr: "— Je n'aime pas le métro.", zh: "我不喜欢坐地铁。" },
      { fr: "— Alors, allez-y en bus ou à vélo : il y a des Vélib', au coin de la rue.", zh: "那就坐公交或者骑车去吧：街角就有 Vélib' 公共自行车。" },
      { fr: "— Non, non. J'y vais à pied.", zh: "不用不用，我走着去。" },
      { fr: "— Bien. Alors, passez par là. Traversez le boulevard Haussmann et prenez la rue Scribe en face de vous.", zh: "好吧。那从这边走：穿过奥斯曼大道，走您正对面的斯克里布街。" },
      { fr: "Tournez à gauche dans la rue Auber. Passez devant la poste et la banque et vous arrivez place de l'Opéra. Ça va ?", zh: "在奥贝尔街向左拐，经过邮局和银行，就到歌剧院广场了。清楚吗？" },
      { fr: "— Oui, oui.", zh: "清楚，清楚。" },
      { fr: "— Ensuite, prenez la grande avenue en face et continuez tout droit, jusqu'au bout.", zh: "然后走对面的那条大街，一直往前走到头。" },
      { fr: "— Hum, hum.", zh: "嗯，嗯。" },
      { fr: "— Et après, traversez la rue de Rivoli et entrez dans la cour du Louvre. À droite, vous avez le jardin des Tuileries et à gauche le Louvre. L'entrée du musée est sous la Pyramide.", zh: "之后穿过里沃利街，进入卢浮宫庭院。右边是杜乐丽花园，左边就是卢浮宫，博物馆入口在金字塔下面。" },
      { fr: "— Merci, euh... les Vélib', c'est où ?", zh: "谢谢，呃……那 Vélib' 自行车在哪儿呢？" }
    ],
    vocab: [
      { fr: "après", pos: "adv.", zh: "之后，然后" },
      { fr: "banque", pos: "n.f.", g: "f", zh: "银行" },
      { fr: "bien sûr", pos: "loc.adv.", zh: "当然" },
      { fr: "bus", pos: "n.m.", g: "m", zh: "公共汽车" },
      { fr: "continuer", pos: "v.", zh: "继续" },
      { fr: "direct(e)", pos: "adj.", zh: "直的，径直的" },
      { fr: "droit", pos: "adv.", zh: "笔直地；tout droit 一直往前" },
      { fr: "ensuite", pos: "adv.", zh: "接着，然后" },
      { fr: "entrer", pos: "v.i.", zh: "进入" },
      { fr: "jardin", pos: "n.m.", g: "m", zh: "花园" },
      { fr: "jusque", pos: "prép.", zh: "直到；jusqu'au bout 一直到头" },
      { fr: "là", pos: "adv.", zh: "那里，这儿" },
      { fr: "ligne", pos: "n.f.", g: "f", zh: "线路；线" },
      { fr: "loin", pos: "adv.", zh: "远" },
      { fr: "métro", pos: "n.m.", g: "m", zh: "地铁" },
      { fr: "moto", pos: "n.f.", g: "f", zh: "摩托车" },
      { fr: "musée", pos: "n.m.", g: "m", zh: "博物馆" },
      { fr: "opéra", pos: "n.m.", g: "m", zh: "歌剧院" },
      { fr: "par", pos: "prép.", zh: "经过，由，通过" },
      { fr: "pardon", pos: "n.m.", g: "m", zh: "对不起，劳驾" },
      { fr: "passer", pos: "v.", zh: "经过；通过" },
      { fr: "pied", pos: "n.m.", g: "m", zh: "脚；à pied 步行" },
      { fr: "place", pos: "n.f.", g: "f", zh: "广场" },
      { fr: "pont", pos: "n.m.", g: "m", zh: "桥" },
      { fr: "poste", pos: "n.f.", g: "f", zh: "邮局" },
      { fr: "prendre", pos: "v.t.", zh: "乘（车）；拿；走（某条路）" },
      { fr: "rollers", pos: "n.m.pl.", g: "m", zh: "轮滑鞋" },
      { fr: "tout", pos: "adv.", zh: "完全地，十分" },
      { fr: "travail", pos: "n.m.", g: "m", zh: "工作" },
      { fr: "traverser", pos: "v.t.", zh: "穿过，横过" },
      { fr: "vélo", pos: "n.m.", g: "m", zh: "自行车" },
      { fr: "voiture", pos: "n.f.", g: "f", zh: "汽车" }
    ],
    grammar: [
      { t: "命令式 l'impératif", d: "对 <b>tu / vous / nous</b> 下指令时，去掉主语，用现在时变位；-er 动词的 tu 形式去掉词尾 s。<br><b>tu</b>：Va tout droit. 一直走。Prends le bus. 坐公交。Tourne à gauche. 向左拐。Entre. 进来。<br><b>vous</b>：Allez au coin de la rue. Prenez un taxi. Tournez à droite. Entrez.<br>不规则：Soyez le bienvenu ! 欢迎！Ayez du courage ! 勇敢点！" },
      { t: "动词 prendre 的现在时", d: "je <b>prends</b> / tu <b>prends</b> / il, elle <b>prend</b> / nous <b>prenons</b> / vous <b>prenez</b> / ils, elles <b>prennent</b>。<br>例：Prenez le métro. 坐地铁。Elle ouvre le placard et y met la robe. 她打开壁橱把裙子放进去。" },
      { t: "缩合冠词 à / de + 定冠词", d: "<b>à + le = au</b>、<b>à + les = aux</b>：Je vais <b>au</b> Canada. Il habite <b>aux</b> États-Unis. Elle va <b>à la</b> bibliothèque. Il travaille <b>à l'</b>hôtel.<br><b>de + le = du</b>、<b>de + les = des</b>：C'est le manteau <b>du</b> directeur. Elle vient <b>du</b> bureau <b>des</b> professeurs. de + la 不变：de la；de + l' 不变：de l'。<br>注意区分 <b>au</b>（à+le）与 <b>eau</b>（水），以及 <b>des</b> 也可能是复数不定冠词。" },
      { t: "副代词 y", d: "<b>y</b> 代替「à / dans / en / chez + 地点」，通常指「去那儿、在那儿」，放在变位动词前。<br>— Vous habitez en banlieue ? — Oui, j'<b>y</b> habite.<br>— Vous allez à la banque ? — Oui, j'<b>y</b> vais.<br>否定：Il n'<b>y</b> a pas de métro près de chez moi." },
      { t: "疑问与指路的固定说法", d: "问路：<b>Le musée du Louvre, c'est par où ?</b> / Pour aller à la gare, s'il vous plaît ? / Pardon, madame, je cherche la poste.<br>指路：<b>C'est par là</b> / au bout de la rue / à droite. <b>Allez tout droit</b> / continuez tout droit. <b>Prenez</b> l'avenue en face de vous.<br>交通方式：<b>Allez-y en métro.</b> — Tu vas au lycée comment ? — J'y vais <b>à pied</b>. 注意：en + 交通工具（en bus, en voiture, en métro），但 <b>à pied / à vélo / à moto</b> 用 à。" }
    ],
    say: [
      { title: "Demander son chemin 问路", items: [
        { fr: "Le musée du Louvre, c'est par où ?", zh: "卢浮宫博物馆怎么走？" },
        { fr: "Pour aller à la gare, s'il vous plaît ?", zh: "请问去火车站怎么走？" },
        { fr: "Pardon, madame, je cherche la poste.", zh: "劳驾，夫人，我在找邮局。" }
      ]},
      { title: "Indiquer la direction 指方向", items: [
        { fr: "C'est par là / au bout de la rue / à droite.", zh: "从那边走／在街尽头／在右边。" },
        { fr: "Allez tout droit. Prenez l'avenue en face de vous.", zh: "一直往前走，走您对面那条大街。" },
        { fr: "Traversez le boulevard et tournez à gauche.", zh: "穿过大马路，然后向左拐。" }
      ]},
      { title: "Indiquer le moyen de transport 说明交通方式", items: [
        { fr: "Allez-y en métro.", zh: "坐地铁去吧。" },
        { fr: "Tu vas au lycée comment ? — J'y vais à pied.", zh: "你怎么去学校？——我走着去。" },
        { fr: "Prenez le bus ou allez-y à vélo.", zh: "坐公交，或者骑车去。" }
      ]}
    ]
  },

  /* ————— Leçon 11 ————— */
  "tb-l11": {
    unit: 3, no: "Leçon 11", title: "Bon voyage ! 一路顺风！",
    text: [
      { fr: "— Bien, alors, le premier jour, vous partez de Paris et vous arrivez à l'aéroport de Fort-de-France.", zh: "好，那么第一天您从巴黎出发，抵达法兰西堡机场。" },
      { fr: "Là, vous prenez un bus jusqu'à votre hôtel, La Marina, à l'ouest de l'île.", zh: "在那里坐大巴到您下榻的 La Marina 酒店，位于岛的西部。" },
      { fr: "— On est au bord de la mer ?", zh: "我们是在海边吗？" },
      { fr: "— Oui, c'est un hôtel à côté de la plage. Votre chambre a une terrasse en face de la mer.", zh: "是的，酒店就在海滩旁边。您的房间有一个正对大海的露台。" },
      { fr: "— Et il y a une salle de bains dans la chambre ?", zh: "房间里有浴室吗？" },
      { fr: "— Oui, bien sûr, monsieur : une salle de bains, le téléphone, la télévision et l'air conditionné. Et, dans l'hôtel, vous avez deux bars, deux restaurants, des boutiques et une piscine.", zh: "当然有，先生：浴室、电话、电视和空调。酒店里还有两个酒吧、两家餐厅、商店和游泳池。" },
      { fr: "— Ah ! C'est parfait ! Et on visite l'île aussi ?", zh: "啊！太棒了！那我们也游览全岛吗？" },
      { fr: "— Oui, en hélicoptère. Vous allez aussi en bus à Fort-de-France et à Sainte-Luce au sud, à la montagne Pelée et à Saint-Pierre, au nord. Ah ! bien sûr, visitez le musée Gauguin, à côté de votre hôtel. C'est très sympa !", zh: "是的，坐直升机。您还会坐大巴去法兰西堡和南部的圣吕斯，去北部的培雷火山和圣皮埃尔。啊，当然，一定要参观酒店旁边的高更博物馆，特别有意思！" }
    ],
    vocab: [
      { fr: "air conditionné", pos: "n.m.", g: "m", zh: "空调" },
      { fr: "bar", pos: "n.m.", g: "m", zh: "酒吧" },
      { fr: "bien sûr", pos: "loc.adv.", zh: "当然" },
      { fr: "bon(ne)", pos: "adj.", zh: "好的；Bon voyage ! 一路顺风" },
      { fr: "bord", pos: "n.m.", g: "m", zh: "边缘；au bord de 在…边上" },
      { fr: "circuit", pos: "n.m.", g: "m", zh: "旅行线路，环游" },
      { fr: "conditionné(e)", pos: "adj.", zh: "（空气）调节的" },
      { fr: "conseil", pos: "n.m.", g: "m", zh: "建议，忠告" },
      { fr: "est", pos: "n.m.", g: "m", zh: "东，东部" },
      { fr: "hélicoptère", pos: "n.m.", g: "m", zh: "直升机" },
      { fr: "île", pos: "n.f.", g: "f", zh: "岛，岛屿" },
      { fr: "jour", pos: "n.m.", g: "m", zh: "天，日子" },
      { fr: "juste", pos: "adv.", zh: "正好，仅仅" },
      { fr: "mer", pos: "n.f.", g: "f", zh: "海" },
      { fr: "nord", pos: "n.m.", g: "m", zh: "北，北部" },
      { fr: "on", pos: "pron.indéf.", zh: "人们；我们；有人（泛指）" },
      { fr: "ouest", pos: "n.m.", g: "m", zh: "西，西部" },
      { fr: "parfait(e)", pos: "adj.", zh: "完美的，极好的" },
      { fr: "partir", pos: "v.i.", zh: "出发，动身" },
      { fr: "piscine", pos: "n.f.", g: "f", zh: "游泳池" },
      { fr: "plage", pos: "n.f.", g: "f", zh: "海滩" },
      { fr: "puis", pos: "adv.", zh: "然后，接着" },
      { fr: "réception", pos: "n.f.", g: "f", zh: "接待处，前台" },
      { fr: "restaurant", pos: "n.m.", g: "m", zh: "餐厅" },
      { fr: "sud", pos: "n.m.", g: "m", zh: "南，南部" },
      { fr: "télévision", pos: "n.f.", g: "f", zh: "电视" },
      { fr: "terrasse", pos: "n.f.", g: "f", zh: "露台，平台" },
      { fr: "ville", pos: "n.f.", g: "f", zh: "城市" },
      { fr: "agence de voyages", pos: "n.f.", g: "f", zh: "旅行社" },
      { fr: "week-end", pos: "n.m.", g: "m", zh: "周末" },
      { fr: "air", pos: "n.m.", g: "m", zh: "空气" },
    ],
    grammar: [
      { t: "c'est / ce sont 的用法", d: "<b>c'est</b>（中性指示代词 ce + est）后接名词或形容词，<b>ce sont</b> 后接复数名词。<br>① 回答「在哪里」：— Où se trouve l'hôtel ? — <b>C'est</b> à l'ouest de l'île.<br>② 说明性质：C'est un hôtel au bord de la plage. C'est parfait !<br>③ 指认复数：Ce sont les livres de Paul. Ce sont mes amis.<br>注意：C'est mon ami Jean et son frère Jacques.（列举时虽是多人仍常用 c'est）" },
      { t: "泛指代词 on", d: "<b>on</b> 可指「人们、大家、有人」，口语里常代替 <b>nous</b>（我们），动词永远用第三人称单数。<br>À la Martinique, <b>on</b> parle français. 在马提尼克，大家讲法语。<br><b>On</b> fait des crêpes, ce soir ? 今晚咱们做可丽饼吧？（= nous）<br>课文中 On est au bord de la mer ? 意为「我们是在海边吗？」。" },
      { t: "方位介词：le nord / sud / ouest / est", d: "方位名词前用 <b>dans le / au / à l'</b>：<br><b>au nord de</b> 在…以北、<b>au sud de</b> 在…以南、<b>à l'est de</b> 在…以东、<b>à l'ouest de</b> 在…以西；<b>dans le nord de</b> 在…北部（内部）。<br>例：Orléans se trouve <b>au sud de</b> Paris. 奥尔良在巴黎以南。Ils voyagent <b>dans le sud de</b> la Chine. 他们在中国南方旅行。<br>La Martinique, c'est une île des Antilles, <b>au sud de</b> la Guadeloupe." },
      { t: "祝福语 Bon / Bonne + 名词", d: "<b>Bon voyage !</b> 一路顺风！<b>Bonne fête !</b> 节日快乐！<b>Bon week-end !</b> 周末愉快！<b>Bon anniversaire !</b> 生日快乐！<br>bon 与后面名词的阴阳性配合：voyage 阳性用 bon，fête 阴性用 bonne。" },
      { t: "au bord de 与 bien sûr", d: "<b>au bord de</b> 在…边缘：Elle habite au bord de la mer. 她住在海边。Il y a une jolie maison au bord du bois. 树林边有栋漂亮房子。<br><b>bien sûr</b> 当然、肯定：— Tu vas à la bibliothèque avec moi ? — (Oui !) Bien sûr." }
    ],
    say: [
      { title: "Situer un lieu sur une carte 在地图上定位", items: [
        { fr: "Où est la montagne Pelée ? — C'est au nord de l'île.", zh: "培雷火山在哪儿？——在岛的北部。" },
        { fr: "La Martinique, c'est une île des Antilles, au sud de la Guadeloupe.", zh: "马提尼克是安的列斯群岛中的一个岛，位于瓜德罗普以南。" }
      ]},
      { title: "Donner un conseil 提建议", items: [
        { fr: "Allez au musée Gauguin, c'est très sympa !", zh: "去高更博物馆吧，特别有意思！" },
        { fr: "Et puis, visitez Fort-de-France.", zh: "另外，去逛逛法兰西堡。" },
        { fr: "Prends un taxi. / Va à l'hôtel Concorde, c'est bien.", zh: "打个出租车吧。／去协和酒店，那家不错。" }
      ]}
    ]
  },

  /* ————— Leçon 12 ————— */
  "tb-l12": {
    unit: 3, no: "Leçon 12", title: "Marseille 马赛",
    text: [
      { fr: "Office de tourisme : 4, La Canebière, 13001 Marseille. Tél : +33 (0)4 91 13 89 00. www.marseille-tourisme.com", zh: "旅游局：马赛 13001，卡纳比耶尔大街 4 号。电话 +33 (0)4 91 13 89 00。网站 www.marseille-tourisme.com" },
      { fr: "Dans la ville : Le Vieux-Port, l'Hôtel de ville, le vieux quartier du Panier, Notre-Dame-de-la-Garde, le palais du Pharo, la Cité radieuse de Le Corbusier.", zh: "市区景点：旧港、市政厅、帕尼耶老城区、圣母加德大教堂、法罗宫、勒·柯布西耶的马赛公寓。" },
      { fr: "En avion : Aéroport Marseille Provence. En voiture : Paris (790 kilomètres), Genève (630 kilomètres), Nice (250 kilomètres).", zh: "乘飞机：马赛普罗旺斯机场。自驾：距巴黎 790 公里、日内瓦 630 公里、尼斯 250 公里。" },
      { fr: "En train : Gare Marseille-Saint-Charles. 200 trains par jour, 3 heures de Paris par le TGV Méditerranée. www.voyages-sncf.com", zh: "乘火车：马赛圣夏尔站。每天 200 趟列车，乘地中海线 TGV 从巴黎出发 3 小时抵达。www.voyages-sncf.com" },
      { fr: "En bateau : Port de Marseille, plus de 200 destinations. Visites en bateau : le château d'If et les îles du Frioul, la prison du comte de Monte-Cristo ; les calanques, par la mer, entre Marseille et Cassis.", zh: "乘船：马赛港，200 多个目的地。海上游览：伊夫堡与弗里乌尔群岛（基督山伯爵囚牢）、马赛与卡西斯之间的峡湾。" },
      { fr: "Les musées : Musée d'histoire de Marseille (entrée gratuite), Musée Cantini (2,50 €), Musée d'art contemporain (3 €, étudiants 1,50 €), Musée d'archéologie méditerranéenne.", zh: "博物馆：马赛历史博物馆（免费）、康蒂尼博物馆（2.5 欧元）、当代艺术博物馆（3 欧元，学生 1.5 欧元）、地中海考古博物馆。" },
      { fr: "Chère Pauline, Lille, dans le nord de la France, c'est très joli. J'habite dans le centre avec Idoia, une amie espagnole.", zh: "亲爱的波利娜：法国北部的里尔非常漂亮。我和西班牙朋友伊多娅住在市中心。" },
      { fr: "Nous avons un appartement de 50 m² avec deux chambres : il est très bien. On va au cinéma, dans les bars. On visite aussi des musées.", zh: "我们有一套 50 平米、两间卧室的公寓，特别好。我们去看电影、泡酒吧，也参观博物馆。" },
      { fr: "Il y a un musée d'art moderne très intéressant et gratuit pour les étudiants ! Ce week-end, nous allons à Paris en train. Et toi, comment ça va ?", zh: "有一家现代艺术博物馆非常有意思，而且对学生免费！这个周末我们坐火车去巴黎。你呢，过得怎么样？" },
      { fr: "À bientôt. Bises, Audrey.", zh: "回头见。亲亲，奥德蕾。" }
    ],
    vocab: [
      { fr: "aéroport", pos: "n.m.", g: "m", zh: "机场" },
      { fr: "aquarium", pos: "n.m.", g: "m", zh: "水族馆" },
      { fr: "archéologie", pos: "n.f.", g: "f", zh: "考古学" },
      { fr: "art", pos: "n.m.", g: "m", zh: "艺术" },
      { fr: "autour de", pos: "loc.prép.", zh: "在…周围，围绕" },
      { fr: "avion", pos: "n.m.", g: "m", zh: "飞机" },
      { fr: "bateau", pos: "n.m.", g: "m", zh: "船" },
      { fr: "billet", pos: "n.m.", g: "m", zh: "票" },
      { fr: "bise", pos: "n.f.", g: "f", zh: "亲吻（信件结尾用语）" },
      { fr: "carte", pos: "n.f.", g: "f", zh: "地图；卡片" },
      { fr: "carte postale", pos: "n.f.", g: "f", zh: "明信片" },
      { fr: "centre", pos: "n.m.", g: "m", zh: "中心，市中心" },
      { fr: "château", pos: "n.m.", g: "m", zh: "城堡" },
      { fr: "contemporain(e)", pos: "adj.", zh: "当代的" },
      { fr: "destination", pos: "n.f.", g: "f", zh: "目的地" },
      { fr: "gratuit(e)", pos: "adj.", zh: "免费的" },
      { fr: "hôtel", pos: "n.m.", g: "m", zh: "旅馆，酒店" },
      { fr: "hôtel de ville", pos: "n.m.", g: "m", zh: "市政厅" },
      { fr: "intéressant(e)", pos: "adj.", zh: "有趣的" },
      { fr: "kilomètre", pos: "n.m.", g: "m", zh: "公里" },
      { fr: "méditerranéen(ne)", pos: "adj.", zh: "地中海的" },
      { fr: "office", pos: "n.m.", g: "m", zh: "办事处，局" },
      { fr: "office de tourisme", pos: "n.m.", g: "m", zh: "旅游局" },
      { fr: "palais", pos: "n.m.", g: "m", zh: "宫殿" },
      { fr: "port", pos: "n.m.", g: "m", zh: "港口" },
      { fr: "postal(e)", pos: "adj.", zh: "邮政的" },
      { fr: "prison", pos: "n.f.", g: "f", zh: "监狱" },
      { fr: "quai", pos: "n.m.", g: "m", zh: "码头，站台" },
      { fr: "quartier", pos: "n.m.", g: "m", zh: "街区，城区" },
      { fr: "SNCF", pos: "n.f.", g: "f", zh: "法国国家铁路公司" },
      { fr: "TGV", pos: "n.m.", g: "m", zh: "高速列车" },
      { fr: "tourisme", pos: "n.m.", g: "m", zh: "旅游，旅游业" },
      { fr: "train", pos: "n.m.", g: "m", zh: "火车" },
      { fr: "vieux (vieille)", pos: "adj.", zh: "老的，旧的" },
      { fr: "vitesse", pos: "n.f.", g: "f", zh: "速度" },
      { fr: "Marseille", pos: "n.", zh: "马赛（法国）" },
    ],
    grammar: [
      { t: "autour de 与 Office de tourisme", d: "<b>autour de</b> 在…周围、围绕：La Terre tourne <b>autour du</b> Soleil. 地球绕太阳转。Elle met un foulard <b>autour de</b> son cou. 她在脖子上围了条围巾。<br><b>Office de tourisme</b> 旅游局（提供城市地图、景点、交通信息），区别于 <b>agence de voyages</b> 旅行社（售卖旅行产品）。" },
      { t: "交通方式表达 en + 交通工具", d: "<b>en avion</b> 乘飞机、<b>en voiture</b> 开车、<b>en train</b> 坐火车、<b>en bateau</b> 乘船、<b>en bus / en métro / en taxi</b>。<br>但「步行、骑车」用 à：<b>à pied / à vélo / à moto / à rollers</b>。<br>课文：En train : Gare Marseille-Saint-Charles, 200 trains par jour, 3 heures de Paris par le TGV Méditerranée." },
      { t: "par：频率与经由", d: "<b>par</b> 可表示「每」：550 euros <b>par</b> mois 每月 550 欧、200 trains <b>par</b> jour 每天 200 趟、deux heures <b>par</b> semaine 每周两小时、15 kilomètres <b>par</b> jour 每天 15 公里。<br>也可表示「经由、通过」：<b>par</b> le TGV 乘 TGV、<b>par</b> la mer 走海路、passez <b>par</b> là 从那边走。" },
      { t: "文化点滴：法国铁路与巴黎交通", d: "<b>SNCF</b> = Société nationale des chemins de fer français（法国国铁）；<b>TGV</b> = Train à grande vitesse（高速列车），1981 年开通，巴黎—马赛约 3 小时。<br><b>RER</b> = Réseau express régional d'Île-de-France（大区快铁，分 1–6 区）；<b>métro</b> 由 <b>RATP</b> 运营，1900 年开通。常见票种：un carnet（十张一本）、Carte Orange、Paris Visite、Mobilis。<br>巴黎主要火车站：gare du Nord、gare de l'Est、gare Saint-Lazare、gare Montparnasse、gare d'Austerlitz、gare de Lyon；机场：Roissy-Charles-de-Gaulle（CDG）、Orly（ORY）。" },
      { t: "明信片的书写格式", d: "开头 <b>Cher / Chère + 名字</b>（亲爱的…），结尾常用 <b>À bientôt</b>（回头见）、<b>Bises</b>（亲亲）、<b>Amitiés</b>。<br>描述住处：<b>J'habite dans le centre</b> 我住在市中心、<b>Nous avons un appartement de 50 m² avec deux chambres</b> 我们有一套 50 平米两室的公寓。<br>描述活动：<b>On va au cinéma / dans les bars. On visite aussi des musées.</b>" }
    ],
    say: [
      { title: "Présenter une ville 介绍一座城市", items: [
        { fr: "Marseille est au bord de la mer, dans le sud de la France.", zh: "马赛在法国南部，濒临地中海。" },
        { fr: "Il y a un musée d'art moderne très intéressant et gratuit pour les étudiants.", zh: "有一家很有意思的现代艺术博物馆，对学生免费。" },
        { fr: "On peut visiter le Vieux-Port et le château d'If en bateau.", zh: "可以乘船游览旧港和伊夫堡。" }
      ]},
      { title: "Écrire une carte postale 写明信片", items: [
        { fr: "Chère Pauline, Lille, dans le nord de la France, c'est très joli.", zh: "亲爱的波利娜：法国北部的里尔非常漂亮。" },
        { fr: "Ce week-end, nous allons à Paris en train. Et toi, comment ça va ?", zh: "这个周末我们坐火车去巴黎。你呢，过得怎么样？" },
        { fr: "À bientôt. Bises, Audrey.", zh: "回头见。亲亲，奥德蕾。" }
      ]}
    ]
  }
});
