/* =========================================================
   📚 《你好！法语 1》Unité 4 · Leçons 13–16（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 4)){
  TB_UNITS.push({ n: 4, title: "Unité 4 · Le temps qui passe 时光流转", lessons: ["tb-l13", "tb-l14", "tb-l15", "tb-l16"] });
}

Object.assign(TB_LESSONS, {

  /* ————— Leçon 13 ————— */
  "tb-l13": {
    unit: 4, no: "Leçon 13", title: "Un aller simple 一张单程票",
    text: [
      { fr: "— Bonjour, monsieur, je voudrais un aller Paris-Marseille, s'il vous plaît.", zh: "您好，先生，我想买一张巴黎到马赛的单程票。" },
      { fr: "— Vous partez quand ?", zh: "您什么时候出发？" },
      { fr: "— Mardi prochain.", zh: "下周二。" },
      { fr: "— Le 15 ?", zh: "15 号吗？" },
      { fr: "— Oui, c'est ça.", zh: "对，没错。" },
      { fr: "— Le matin ou l'après-midi ?", zh: "上午还是下午？" },
      { fr: "— Le matin.", zh: "上午。" },
      { fr: "— Alors. Il y a un train à 7 h 18... un autre à 8 h 46... à 9 h 22...", zh: "好的。有一趟 7 点 18 分的……还有一趟 8 点 46 分……9 点 22 分……" },
      { fr: "— Le train de 7 h 18, s'il vous plaît.", zh: "请给我 7 点 18 分那趟。" },
      { fr: "— Ah ! Je suis désolé, monsieur. Ce train est complet.", zh: "啊！很抱歉，先生，这趟车满员了。" },
      { fr: "— Et le train de 8 h 46, il est complet aussi ?", zh: "那 8 点 46 分那趟也满了吗？" },
      { fr: "— Non, il y a de la place.", zh: "没有，还有座位。" },
      { fr: "— C'est parfait.", zh: "太好了。" },
      { fr: "— Un aller simple ou un aller-retour ?", zh: "单程还是往返？" },
      { fr: "— Un aller simple. En deuxième classe.", zh: "单程，二等舱。" },
      { fr: "— Voilà.", zh: "给您。" },
      { fr: "— C'est combien ?", zh: "多少钱？" }
    ],
    vocab: [
      { fr: "aller", pos: "n.m.", g: "m", zh: "去程；单程票" },
      { fr: "aller-retour", pos: "n.m.", g: "m", zh: "往返票" },
      { fr: "après-midi", pos: "n.m.", g: "m", zh: "下午" },
      { fr: "classe", pos: "n.f.", g: "f", zh: "等级，舱位" },
      { fr: "complet(ète)", pos: "adj.", zh: "满的，满员的" },
      { fr: "départ", pos: "n.m.", g: "m", zh: "出发，开车" },
      { fr: "désolé(e)", pos: "adj.", zh: "抱歉的" },
      { fr: "deuxième", pos: "adj.num.ord.", zh: "第二" },
      { fr: "dimanche", pos: "n.m.", g: "m", zh: "星期日" },
      { fr: "employé(e)", pos: "n.", zh: "职员，雇员" },
      { fr: "gare", pos: "n.f.", g: "f", zh: "火车站" },
      { fr: "heure", pos: "n.f.", g: "f", zh: "小时；钟点" },
      { fr: "horaire", pos: "n.m.", g: "m", zh: "时刻表" },
      { fr: "jeudi", pos: "n.m.", g: "m", zh: "星期四" },
      { fr: "lundi", pos: "n.m.", g: "m", zh: "星期一" },
      { fr: "mardi", pos: "n.m.", g: "m", zh: "星期二" },
      { fr: "matin", pos: "n.m.", g: "m", zh: "早晨，上午" },
      { fr: "mercredi", pos: "n.m.", g: "m", zh: "星期三" },
      { fr: "pendule", pos: "n.f.", g: "f", zh: "挂钟，座钟" },
      { fr: "quand", pos: "adv.interr.", zh: "什么时候" },
      { fr: "renseignements", pos: "n.m.pl.", g: "m", zh: "咨询，信息" },
      { fr: "samedi", pos: "n.m.", g: "m", zh: "星期六" },
      { fr: "simple", pos: "adj.", zh: "单程的；简单的" },
      { fr: "tarif", pos: "n.m.", g: "m", zh: "票价，价目" },
      { fr: "vendredi", pos: "n.m.", g: "m", zh: "星期五" },
      { fr: "voie", pos: "n.f.", g: "f", zh: "站台，轨道" },
      { fr: "place", pos: "n.f.", g: "f", zh: "地方，位置；座位" },
      { fr: "prochain(e)", pos: "adj.", zh: "下一个的，即将到来的" },
    ],
    grammar: [
      { t: "询问与表达时间 Donner l'heure", d: "问：<b>Quelle heure est-il ?</b> / <b>Vous avez l'heure</b>, s'il vous plaît ? / <b>Tu as l'heure</b> ?<br>答：<b>Il est</b> + 数字 + <b>heure(s)</b>。Il est huit heures. 八点。Il est midi / minuit. 中午／午夜。<br>常用表达：<b>et quart</b> 一刻、<b>et demie</b> 半、<b>moins le quart</b> 差一刻、<b>moins dix</b> 差十分。<br>例：Il est cinq heures moins dix. 差十分五点。Il est deux heures et demie. 两点半。<br>注意：une heure 前的 et 不省：Il est une heure et quart." },
      { t: "12 小时制与 24 小时制", d: "官方时刻表用 24 小时制，日常口语用 12 小时制并加时段：<br><b>trois heures</b> / <b>quinze heures</b> = trois heures (de l'après-midi)；<b>6 h 30</b> = six heures et demie du matin；<b>18 h 30</b> = six heures et demie de l'après-midi；<b>10 h 15</b> = dix heures et quart du matin；<b>22 h 15</b> = dix heures et quart du soir；<b>15 h 45</b> = quatre heures moins le quart de l'après-midi。<br>时段：<b>du matin</b> 上午、<b>de l'après-midi</b> 下午、<b>du soir</b> 晚上。" },
      { t: "询问时刻与日期", d: "<b>à quelle heure</b> 几点：Le train part à quelle heure ? / Tu as cours de quelle heure à quelle heure ?<br><b>quand</b> 何时：— Vous partez quand ? — Samedi prochain, le 15.<br>日期用定冠词 + 数字：<b>le 15</b>、<b>le premier</b>（1 号，唯一用序数）。今天是几号／星期几：<b>Nous sommes le samedi 15.</b><br>星期的「下周…」用 <b>prochain(e)</b>：mardi prochain 下周二、vendredi prochain 下周五。" },
      { t: "礼貌地提出请求：je voudrais", d: "<b>je voudrais</b>（vouloir 的条件式）比 je veux 委婉，用于点单、买票、提出请求。<br>Je voudrais un café, s'il vous plaît. 请给我一杯咖啡。<b>Je voudrais un aller simple Paris-Marseille, s'il vous plaît.</b><br>名词搭配：<b>un aller simple</b> 单程票、<b>un aller-retour</b> 往返票、prendre un aller simple pour Paris 买一张去巴黎的单程票；<b>en première classe</b> 头等舱 / <b>en deuxième classe</b> 二等舱 / classe Affaires 商务舱 / classe économique 经济舱。" },
      { t: "动词 partir 的现在时", d: "je <b>pars</b> / tu <b>pars</b> / il, elle <b>part</b> / nous <b>partons</b> / vous <b>partez</b> / ils, elles <b>partent</b>。<br>例：Vous <b>partez</b> quand ? 您什么时候动身？Le train <b>part</b> à 7 h 18. 列车 7 点 18 分开。<br>相关：le départ 出发 / l'arrivée 到达 / l'horaire 时刻表 / la voie 站台。" },
      { t: "Il y a de la place / être complet", d: "<b>de la place</b> 是部分冠词 + 不可数名词，表示「有空位、有地方」。<br>— Ce train est <b>complet</b>. 这趟车满了。— Et le train de 8 h 46 ? — Non, <b>il y a de la place</b>. 还有座位。<br>否定句中部分冠词变为 <b>de</b>：Il n'y a <b>pas de</b> place." }
    ],
    say: [
      { title: "Demander et donner l'heure 问时间、报时间", items: [
        { fr: "Quelle heure est-il ? — Il est cinq heures moins dix.", zh: "几点了？——差十分五点。" },
        { fr: "Vous avez l'heure, s'il vous plaît ? — Oui, il est deux heures et demie.", zh: "请问几点了？——两点半。" },
        { fr: "Le train part à quelle heure ? — À 7 h 18.", zh: "火车几点开？——7 点 18 分。" }
      ]},
      { title: "Indiquer une date 说明日期", items: [
        { fr: "Nous sommes le samedi 15.", zh: "今天是 15 号，星期六。" },
        { fr: "Vous partez quand ? — Mardi prochain, le 15.", zh: "您什么时候出发？——下周二，15 号。" }
      ]},
      { title: "Demander poliment 礼貌地请求", items: [
        { fr: "Je voudrais un aller simple Paris-Marseille, s'il vous plaît.", zh: "我想买一张巴黎到马赛的单程票，谢谢。" },
        { fr: "Un aller simple. En deuxième classe. C'est combien ?", zh: "单程，二等舱。多少钱？" }
      ]}
    ]
  },

  /* ————— Leçon 14 ————— */
  "tb-l14": {
    unit: 4, no: "Leçon 14", title: "À Londres 在伦敦",
    text: [
      { fr: "— Mais c'est Isabelle ! Isabelle, Isabelle !", zh: "这不是伊莎贝尔吗！伊莎贝尔！伊莎贝尔！" },
      { fr: "— Farid ! Oh ! mais quelle surprise ! Comment vas-tu ?", zh: "法里德！哎呀，真是太巧了！你还好吗？" },
      { fr: "— Bien. Et toi ? Mais qu'est-ce que tu fais là ?", zh: "挺好的。你呢？不过你在这儿做什么？" },
      { fr: "— Ben, tu vois, je travaille. Je suis secrétaire à l'Institut français. Et toi, alors, qu'est-ce que tu fais dans la vie, maintenant ?", zh: "呃，你看，我在这儿工作。我是法兰西学院的秘书。那你呢，现在做什么工作？" },
      { fr: "— Je suis informaticien.", zh: "我是电脑工程师。" },
      { fr: "— Ah ! oui, et où est-ce que tu travailles ? À Londres ?", zh: "啊，是嘛，那你在哪儿工作？在伦敦吗？" },
      { fr: "— Non, non. Je travaille à Paris, mais j'habite à Vendôme. Je prends le TGV pour aller travailler.", zh: "不不，我在巴黎上班，但住在旺多姆。我坐 TGV 去上班。" },
      { fr: "— Ah ? Tous les jours ?", zh: "啊？每天都这样？" },
      { fr: "— Non, je vais à Paris du lundi au mercredi seulement. Le reste de la semaine, je travaille à la maison.", zh: "不是，我只有周一到周三去巴黎。一周剩下的时间在家工作。" },
      { fr: "— Et tu pars à quelle heure le matin ?", zh: "那你早上几点出门？" },
      { fr: "— Très tôt. À 6 h 30. Et je rentre tard le soir, vers 21 h, 21 h 30. Mais c'est seulement trois jours par semaine, ça va.", zh: "很早，6 点半。晚上很晚才回来，大约 21 点、21 点半。不过一周只有三天，还行。" },
      { fr: "— Qu'est-ce que tu fais à Londres, alors ?", zh: "那你在伦敦做什么呢？" },
      { fr: "— Ah ! là, je suis en vacances.", zh: "啊！这回我是来度假的。" }
    ],
    vocab: [
      { fr: "acteur(trice)", pos: "n.", zh: "演员" },
      { fr: "agenda", pos: "n.m.", g: "m", zh: "记事本，日程本" },
      { fr: "ben", pos: "interj.", zh: "嗯，呃（口语）" },
      { fr: "cabinet", pos: "n.m.", g: "m", zh: "诊所，事务所" },
      { fr: "coiffure", pos: "n.f.", g: "f", zh: "发型；理发" },
      { fr: "commencer", pos: "v.", zh: "开始" },
      { fr: "docteur", pos: "n.m.", g: "m", zh: "医生，博士" },
      { fr: "donc", pos: "conj.", zh: "所以，那么" },
      { fr: "faire", pos: "v.t.", zh: "做，干" },
      { fr: "guitare", pos: "n.f.", g: "f", zh: "吉他" },
      { fr: "informaticien(ienne)", pos: "n.", zh: "电脑工程师，信息技术员" },
      { fr: "institut", pos: "n.m.", g: "m", zh: "学院，研究所" },
      { fr: "journal", pos: "n.m.", g: "m", zh: "报纸；日记" },
      { fr: "là", pos: "adv.", zh: "那里，这里" },
      { fr: "Londres", pos: "n.pr.", zh: "伦敦" },
      { fr: "mais", pos: "conj.", zh: "但是；用于感叹加强语气" },
      { fr: "possible", pos: "adj.", zh: "可能的" },
      { fr: "quel(le)", pos: "adj.exclam.", zh: "多么（感叹）" },
      { fr: "rentrer", pos: "v.i.", zh: "回家，回去" },
      { fr: "reste", pos: "n.m.", g: "m", zh: "剩余部分" },
      { fr: "réunion", pos: "n.f.", g: "f", zh: "会议" },
      { fr: "semaine", pos: "n.f.", g: "f", zh: "星期，一周" },
      { fr: "seulement", pos: "adv.", zh: "仅仅，只" },
      { fr: "société", pos: "n.f.", g: "f", zh: "公司；社会" },
      { fr: "soir", pos: "n.m.", g: "m", zh: "晚上" },
      { fr: "surprise", pos: "n.f.", g: "f", zh: "惊喜，惊讶" },
      { fr: "tard", pos: "adv.", zh: "晚，迟" },
      { fr: "tôt", pos: "adv.", zh: "早" },
      { fr: "tous, toutes", pos: "adj.indéf.pl.", zh: "所有的，每个" },
      { fr: "travailler", pos: "v.i.", zh: "工作，劳动" },
      { fr: "vacances", pos: "n.f.pl.", g: "f", zh: "假期" },
      { fr: "Vendôme", pos: "n.pr.", zh: "旺多姆（法国城市）" },
      { fr: "vers", pos: "prép.", zh: "大约（时间）；朝，向" },
      { fr: "voir", pos: "v.t.", zh: "看见，明白" },
      { fr: "vie", pos: "n.f.", g: "f", zh: "人生；生活，生活方式" },
    ],
    grammar: [
      { t: "动词 faire 的现在时", d: "je <b>fais</b> / tu <b>fais</b> / il, elle <b>fait</b> / nous <b>faisons</b> / vous <b>faites</b> / ils, elles <b>font</b>。<br>faire 用法很广：<b>Qu'est-ce que tu fais ?</b> 你在做什么？<b>faire du sport / du tennis / les courses / le ménage / la cuisine</b>、faire un footing、faire des photos。<br>问职业：<b>Qu'est-ce que tu fais dans la vie ?</b> 你是做什么工作的？" },
      { t: "est-ce que 疑问句", d: "<b>est-ce que</b> 放在陈述句前即可构成疑问句，无须倒装；后接元音开头词时省音为 <b>est-ce qu'</b>。<br>Est-ce que vous êtes français ? 您是法国人吗？Est-ce que tu travailles à Londres ? 你在伦敦工作吗？<br>疑问词 + est-ce que：<b>Où</b> est-ce que vous habitez ? / <b>Quand</b> est-ce que tu pars ? / <b>Comment</b> est-ce qu'elle trouve cet appartement ? / <b>Combien</b> est-ce qu'il coûte, ce jean ? / <b>Qu'est-ce que</b> tu fais ?" },
      { t: "三种疑问形式", d: "① 语调上升：Tu travailles où ?（最口语）<br>② <b>est-ce que</b>：Où est-ce que tu travailles ?（最常用、最稳妥）<br>③ 主谓倒装：Où travailles-tu ? / Quand pars-tu ?（较书面）<br>注意：以 <b>que</b> 作宾语时只能用 <b>Qu'est-ce que...</b> 或 <b>Que + 倒装</b>：Qu'est-ce que tu fais ? / Que fais-tu ?" },
      { t: "职业名词与冠词", d: "说明职业时，<b>不加不定冠词</b>：Je suis <b>informaticien</b>. 我是电脑工程师。Je suis <b>secrétaire</b> à l'Institut français. 我是法兰西学院的秘书。Il est <b>acteur</b>. Elle est <b>docteur</b>.<br>但若加形容词修饰则保留冠词：C'est <b>un</b> bon informaticien.<br>常见职业：un vendeur / une vendeuse 店员、un musicien、un photographe、un journaliste、un guitariste。" },
      { t: "时间定位：习惯、范围与频率", d: "<b>tous les jours</b> 每天、<b>tous les samedis soir</b> 每周六晚上、<b>du lundi au mercredi</b> 从周一到周三、<b>le reste de la semaine</b> 一周剩下的时间、<b>trois jours par semaine</b> 每周三天。<br>比较：le mardi（单个周二，也可指每逢周二）／mardi prochain（下周二）／tous les mardis（每个周二）。<br>其他：<b>vers</b> 21 h 大约 21 点、<b>tard / tôt</b> 晚／早、<b>être en vacances</b> 在度假、partir en vacances 去度假、prendre ses vacances 休假。" },
      { t: "感叹句 quel(le) + 名词", d: "<b>Quelle surprise !</b> 真是太巧了！<b>Quelle jolie maison !</b> 多漂亮的房子啊！<br>quel 要与名词性数配合：quel + 阳性、quelle + 阴性。<br>mais 在口语中常用来加强感叹语气：Mais qu'est-ce que tu fais là ? 你到底在这儿干嘛？" }
    ],
    say: [
      { title: "Demander et dire la profession 询问与说明职业", items: [
        { fr: "Qu'est-ce que tu fais dans la vie ? — Je suis informaticien.", zh: "你是做什么工作的？——我是电脑工程师。" },
        { fr: "Quelle est votre profession ? — Je suis secrétaire à l'Institut français.", zh: "您从事什么职业？——我是法兰西学院的秘书。" },
        { fr: "Qu'est-ce que vous faites comme métier ?", zh: "您做什么工作？" }
      ]},
      { title: "Situer dans le temps 说明时间安排", items: [
        { fr: "Je prends le TGV tous les jours.", zh: "我每天都坐 TGV。" },
        { fr: "Je vais au bureau le mardi et le jeudi, deux jours par semaine.", zh: "我周二和周四去办公室，每周两天。" },
        { fr: "Je travaille du lundi au mercredi. Le soir, je rentre tard, vers 22 heures.", zh: "我周一到周三上班，晚上很晚才回，大约 22 点。" }
      ]}
    ]
  },

  /* ————— Leçon 15 ————— */
  "tb-l15": {
    unit: 4, no: "Leçon 15", title: "Le dimanche matin 周日早晨",
    text: [
      { fr: "En général, qu'est-ce que vous faites le dimanche matin ?", zh: "一般来说，您周日早上都做些什么？" },
      { fr: "1. Le dimanche matin ? Je fais d'abord un footing. Ensuite, je joue au foot ou au tennis avec des amis. Et l'après-midi, je me repose.", zh: "① 周日早上？我先去慢跑，然后和朋友踢足球或打网球，下午休息。" },
      { fr: "2. Moi, je fais les courses. Et ma femme prépare les enfants et elle joue avec eux. Ou alors on part pour la journée. Et on va souvent à la campagne.", zh: "② 我嘛，去买东西。我妻子给孩子们做准备、陪他们玩。要不我们就出门玩一整天，经常去乡下。" },
      { fr: "3. Le dimanche matin, je fais le ménage ; après, je me lave et je m'habille. Ensuite, j'écoute de la musique, je lis ou j'écris à des amis.", zh: "③ 周日早上我打扫卫生，之后洗漱、穿衣服。接着听听音乐、看看书，或者给朋友写信。" },
      { fr: "4. Moi, tous les samedis soir, je vais en boîte et je rentre vers 5 ou 6 heures du matin. Alors, moi, le dimanche, je dors ! Et je me lève à midi.", zh: "④ 我呢，每周六晚上都去夜店，凌晨五六点才回家。所以到了周日，我就睡觉！中午才起床。" },
      { fr: "5. Ah ! Ma femme et moi, nous prenons le petit déjeuner vers 9 heures. Après, on va au marché. À midi, nous déjeunons avec nos enfants, chez eux ou chez nous.", zh: "⑤ 啊！我和妻子 9 点左右吃早饭，之后去逛集市。中午和孩子们一起吃午饭，在他们家或者我们家。" }
    ],
    vocab: [
      { fr: "athlétisme", pos: "n.m.", g: "m", zh: "田径运动" },
      { fr: "boîte", pos: "n.f.", g: "f", zh: "盒子；boîte de nuit 夜店" },
      { fr: "campagne", pos: "n.f.", g: "f", zh: "乡下，农村" },
      { fr: "course", pos: "n.f.", g: "f", zh: "跑步；赛跑" },
      { fr: "faire les courses", pos: "loc.v.", zh: "买东西，采购" },
      { fr: "d'abord", pos: "loc.adv.", zh: "首先" },
      { fr: "déjeuner", pos: "n.m.", g: "m", zh: "午饭" },
      { fr: "dormir", pos: "v.i.", zh: "睡觉" },
      { fr: "écouter", pos: "v.t.", zh: "听" },
      { fr: "écrire", pos: "v.t.", zh: "写" },
      { fr: "enfant", pos: "n.m.", g: "m", zh: "孩子" },
      { fr: "foot", pos: "n.m.", g: "m", zh: "足球（football 的口语缩写）" },
      { fr: "footing", pos: "n.m.", g: "m", zh: "慢跑" },
      { fr: "en général", pos: "loc.adv.", zh: "通常，一般来说" },
      { fr: "gymnastique", pos: "n.f.", g: "f", zh: "体操" },
      { fr: "s'habiller", pos: "v.pr.", zh: "穿衣，打扮" },
      { fr: "jouer", pos: "v.i.", zh: "玩；打（球）；演奏" },
      { fr: "se laver", pos: "v.pr.", zh: "洗漱，洗澡" },
      { fr: "se lever", pos: "v.pr.", zh: "起床；站起来" },
      { fr: "lire", pos: "v.t.", zh: "读，阅读" },
      { fr: "marché", pos: "n.m.", g: "m", zh: "市场，集市" },
      { fr: "ménage", pos: "n.m.", g: "m", zh: "家务；faire le ménage 做家务" },
      { fr: "natation", pos: "n.f.", g: "f", zh: "游泳" },
      { fr: "petit-déjeuner", pos: "n.m.", g: "m", zh: "早饭" },
      { fr: "prendre", pos: "v.t.", zh: "吃，喝；拿；乘" },
      { fr: "préparer", pos: "v.t.", zh: "准备" },
      { fr: "se reposer", pos: "v.pr.", zh: "休息" },
      { fr: "ski", pos: "n.m.", g: "m", zh: "滑雪" },
      { fr: "témoignage", pos: "n.m.", g: "m", zh: "证言，自述" },
      { fr: "tennis", pos: "n.m.", g: "m", zh: "网球" },
      { fr: "général(e)", pos: "adj.", zh: "一般的，普遍的（pl. généraux）" },
      { fr: "faire le ménage", pos: "loc.", zh: "做清洁，打扫屋子" },
    ],
    grammar: [
      { t: "动词 lire 与 écrire 的现在时", d: "<b>lire</b>：je lis / tu lis / il, elle lit / nous <b>lisons</b> / vous <b>lisez</b> / ils, elles <b>lisent</b>。<br><b>écrire</b>：j'écris / tu écris / il, elle écrit / nous <b>écrivons</b> / vous <b>écrivez</b> / ils, elles <b>écrivent</b>。<br>例：Je <b>lis</b> le journal et après j'<b>écris</b> à des amis. 我看报纸，然后给朋友写信。écrire une lettre 写信、écrire une carte postale 写明信片、écrire à qn 给某人写信。" },
      { t: "代词式动词 les verbes pronominaux (1)", d: "动词前带自反代词 <b>se / s'</b>，表示动作作用于自己，变位时代词随主语变化并放在动词前：<br><b>se lever</b>：je <b>me</b> lève / tu <b>te</b> lèves / il, elle <b>se</b> lève / nous <b>nous</b> levons / vous <b>vous</b> levez / ils, elles <b>se</b> lèvent。<br>常用：se laver 洗漱、s'habiller 穿衣、se reposer 休息、se coucher 上床睡觉、s'endormir 入睡、se détendre 放松。<br>例：Le dimanche, je <b>me lève</b> à midi. / Je <b>me lave</b> et je <b>m'habille</b>." },
      { t: "代词式动词与身体部位", d: "自反动词后接身体部位时，用定冠词而不用主有形容词：<br>Il <b>se lave les mains</b>. 他洗手。（不说 Il lave ses mains）<br>Elle <b>se lave</b>. 她洗澡。Ils <b>se regardent</b>. 他们互相看着。Ils <b>se serrent la main</b> et <b>se disent</b> bonjour. 他们握手问好。<br>se + 动词还可表示「相互」或「被动」含义。" },
      { t: "jouer à / jouer de", d: "<b>jouer à + 球类／游戏</b>（缩合冠词）：jouer <b>au</b> football、<b>au</b> tennis、<b>au</b> basket-ball、<b>aux</b> échecs、<b>aux</b> cartes。<br><b>jouer de + 乐器</b>：jouer <b>du</b> violon、<b>de la</b> guitare。<br>做某项运动也可用 <b>faire de + 阴性名词</b>：faire <b>du</b> vélo / <b>du</b> ski / <b>de la</b> natation / <b>de l'</b>athlétisme / <b>de la</b> gymnastique。" },
      { t: "习惯性时间表达", d: "<b>le dimanche matin</b> 每逢周日早上（定冠词 le + 星期，表示习惯）：le lundi, le mercredi…<br><b>tous les samedis soir</b> 每周六晚上 = le samedi soir, tous les samedis。<br><b>le matin / l'après-midi / le soir</b> 泛指时段；<b>dimanche</b>（不加 le）指「这个周日」。<br>其他：d'abord 首先、ensuite 接着、puis 然后、après 之后、en général 通常、souvent 经常。" },
      { t: "faire 的常见搭配", d: "<b>faire le ménage</b> 打扫卫生、<b>faire les courses</b> 采购、<b>faire un footing</b> 慢跑、<b>faire du sport / du tennis / de la natation</b>、<b>faire la cuisine</b> 做饭。<br><b>prendre</b> 也可用于餐饮：prendre le petit déjeuner 吃早饭、prendre son déjeuner 吃午饭、prendre son dîner 吃晚饭；但更常用动词形式：Je déjeune à midi. / Ce soir, je dîne avec M. Dupont." }
    ],
    say: [
      { title: "S'informer sur une activité en cours / habituelle 询问正在做与平常做的事", items: [
        { fr: "Qu'est-ce que vous faites (maintenant) ? — Je lis.", zh: "您（现在）在做什么？——我在看书。" },
        { fr: "Qu'est-ce que vous faites le dimanche ? — Je fais du sport.", zh: "您周日一般做什么？——我做运动。" },
        { fr: "Qu'est-ce que vous faites le dimanche après-midi ?", zh: "您周日下午做什么？" }
      ]},
      { title: "Dire quel sport on fait 说明自己做什么运动", items: [
        { fr: "Quel sport est-ce que tu fais ? — Je joue au tennis et je fais de la natation.", zh: "你做什么运动？——我打网球，也游泳。" },
        { fr: "Qu'est-ce que vous faites comme sport ? — Nous faisons du vélo.", zh: "你们做什么运动？——我们骑车。" },
        { fr: "Il fait du ski. / Elle fait de la gymnastique.", zh: "他滑雪。／她练体操。" }
      ]}
    ]
  },

  /* ————— Leçon 16 ————— */
  "tb-l16": {
    unit: 4, no: "Leçon 16", title: "Une journée avec Laure Manaudou 与洛尔·马纳多共度一天",
    text: [
      { fr: "Laure Manaudou est championne de France, d'Europe et du monde de natation. Mais une vie de championne est difficile !", zh: "洛尔·马纳多是法国、欧洲和世界游泳冠军。但冠军的生活并不轻松！" },
      { fr: "Elle se lève tous les matins vers 6 heures. Elle fait sa toilette.", zh: "她每天早上 6 点左右起床，洗漱。" },
      { fr: "Ensuite, elle s'habille et elle prend son petit déjeuner : fruit, yaourt, céréales et jus d'orange.", zh: "接着穿好衣服，吃早饭：水果、酸奶、麦片和橙汁。" },
      { fr: "À 7 heures, elle est à la piscine. Elle s'entraîne jusqu'à 10 heures.", zh: "7 点她已经到游泳池了，一直训练到 10 点。" },
      { fr: "Puis elle retourne à son appartement à côté de la piscine.", zh: "然后回到泳池旁边的公寓。" },
      { fr: "Elle reprend l'entraînement l'après-midi, à 15 heures 30. Elle nage 15 kilomètres par jour !", zh: "下午 3 点半重新开始训练。她每天要游 15 公里！" },
      { fr: "Sa journée se termine vers 19 heures 30. Elle rentre chez elle.", zh: "一天的训练大约 19 点半结束，她回到家里。" },
      { fr: "Elle mange, elle regarde un peu la télé et elle téléphone à des amis.", zh: "她吃晚饭，看一会儿电视，给朋友打电话。" },
      { fr: "Elle se couche tôt, vers 22 heures. Elle dort huit heures par nuit.", zh: "她睡得早，大约 22 点就寝，每晚睡 8 个小时。" },
      { fr: "Pour se détendre, elle écoute de la musique, elle joue aux cartes, elle dort beaucoup.", zh: "为了放松，她听听音乐、打打牌、多睡睡觉。" },
      { fr: "Le samedi soir, elle est libre. Elle sort, elle va au restaurant ou au cinéma avec des amis.", zh: "周六晚上她是自由的：出门，和朋友去餐馆或看电影。" },
      { fr: "Le dimanche, elle dort jusqu'à midi. Elle passe l'après-midi avec des amis ou avec sa famille.", zh: "周日她睡到中午，下午和朋友或家人一起度过。" },
      { fr: "Et, le lundi, une nouvelle semaine recommence…", zh: "到了周一，新的一周又开始了……" },
      { fr: "D'après Actuelles, janvier 2008.", zh: "据《Actuelles》杂志 2008 年 1 月号。" }
    ],
    vocab: [
      { fr: "actuel(le)", pos: "adj.", zh: "当前的，当下的" },
      { fr: "bravo", pos: "interj.", zh: "好样的！ bravo" },
      { fr: "céréales", pos: "n.f.pl.", g: "f", zh: "麦片，谷物食品" },
      { fr: "champion(ne)", pos: "n.", zh: "冠军" },
      { fr: "se coucher", pos: "v.pr.", zh: "上床睡觉" },
      { fr: "se détendre", pos: "v.pr.", zh: "放松" },
      { fr: "difficile", pos: "adj.", zh: "困难的，辛苦的" },
      { fr: "s'endormir", pos: "v.pr.", zh: "入睡，睡着" },
      { fr: "entraînement", pos: "n.m.", g: "m", zh: "训练" },
      { fr: "s'entraîner", pos: "v.pr.", zh: "训练，锻炼" },
      { fr: "éviter", pos: "v.t.", zh: "避免，避开" },
      { fr: "famille", pos: "n.f.", g: "f", zh: "家庭，家人" },
      { fr: "fruit", pos: "n.m.", g: "m", zh: "水果" },
      { fr: "habituel(le)", pos: "adj.", zh: "习惯的，惯常的" },
      { fr: "janvier", pos: "n.m.", g: "m", zh: "一月" },
      { fr: "jus", pos: "n.m.", g: "m", zh: "汁，果汁" },
      { fr: "libre", pos: "adj.", zh: "自由的，有空的" },
      { fr: "long(ue)", pos: "adj.", zh: "长的" },
      { fr: "manger", pos: "v.", zh: "吃" },
      { fr: "match", pos: "n.m.", g: "m", zh: "比赛" },
      { fr: "musculation", pos: "n.f.", g: "f", zh: "力量训练，健身" },
      { fr: "nager", pos: "v.i.", zh: "游泳" },
      { fr: "nouveau (nouvelle)", pos: "adj.", zh: "新的" },
      { fr: "peu", pos: "adv.", zh: "少，不多" },
      { fr: "se promener", pos: "v.pr.", zh: "散步" },
      { fr: "recommencer", pos: "v.", zh: "重新开始" },
      { fr: "regarder", pos: "v.t.", zh: "看，观看" },
      { fr: "reprendre", pos: "v.t.", zh: "重新开始；重新拿起" },
      { fr: "retourner", pos: "v.i.", zh: "返回，回去" },
      { fr: "sortir", pos: "v.i.", zh: "出去，外出" },
      { fr: "stress", pos: "n.m.", g: "m", zh: "压力，紧张" },
      { fr: "se terminer", pos: "v.pr.", zh: "结束" },
      { fr: "toilette", pos: "n.f.", g: "f", zh: "梳洗，洗漱" },
      { fr: "yaourt", pos: "n.m.", g: "m", zh: "酸奶" }
    ],
    grammar: [
      { t: "代词式动词 (2)：描述一天的作息", d: "本课集中出现：<b>se lever</b> 起床、<b>faire sa toilette</b> 洗漱、<b>s'habiller</b> 穿衣、<b>s'entraîner</b> 训练、<b>se détendre</b> 放松、<b>se coucher</b> 上床、<b>s'endormir</b> 入睡、<b>se terminer</b> 结束。<br>例：Elle <b>se lève</b> tous les matins vers 6 heures. Sa journée <b>se termine</b> vers 19 h 30. Elle <b>se couche</b> tôt.<br>注意 <b>se lever</b> 与 <b>se coucher</b> 是一对反义动作，<b>s'endormir</b>（睡着）不同于 <b>se coucher</b>（上床）。" },
      { t: "faire sa toilette ≠ les toilettes", d: "<b>faire sa toilette</b> 洗漱、梳洗（动词短语）；<b>les toilettes</b> 是「卫生间、厕所」，<b>aller aux toilettes</b> 上厕所。<br>类似区分：prendre son petit déjeuner 吃早饭（= petit-déjeuner 名词）。" },
      { t: "前缀 re- / ré- 表示「再、重新」", d: "<b>reprendre</b> 重新开始（Elle <b>reprend</b> l'entraînement à 15 h 30.）、<b>recommencer</b> 重新开始（Une nouvelle semaine <b>recommence</b>.）、<b>retourner</b> 返回、<b>revenir</b> 回来、<b>relire</b> 重读、<b>peindre d'après nature</b> 写生（此处 d'après 另义）。<br>注意 re- 后接元音时写法：ré-（récrire）或直接 re-（recommencer 双 c）。" },
      { t: "un peu / peu / beaucoup", d: "<b>un peu</b> 一点儿（程度较小、语气积极）：Elle regarde <b>un peu</b> la télé. 她看一会儿电视。Elle aime <b>un peu</b> l'opéra. 她有点喜欢歌剧。<br><b>peu</b> 不多、几乎不（语气消极）：Elle aime <b>peu</b> l'opéra. 她不太喜欢歌剧。<br><b>beaucoup</b> 很多：Elle dort <b>beaucoup</b>. 她睡得很多。" },
      { t: "d'après 与频率、时间段", d: "<b>d'après</b> 根据、据…所说：D'après <b>Actuelles</b>, janvier 2008. 据《Actuelles》2008 年 1 月号。D'après lui, tout va bien. 据他说一切都好。<br>频率：<b>tous les matins</b> 每天早上、<b>15 kilomètres par jour</b> 每天 15 公里、<b>huit heures par nuit</b> 每晚 8 小时、<b>le samedi soir</b> 周六晚上。<br>时间界限：<b>jusqu'à</b> 10 heures 直到 10 点、<b>jusqu'à midi</b> 直到中午、<b>vers</b> 22 heures 大约 22 点。" },
      { t: "文化点滴：法国的节假日", d: "法定假日（jours fériés）：<b>1<sup>er</sup> janvier</b> 元旦、<b>1<sup>er</sup> mai</b> 劳动节、<b>8 mai</b> 二战胜利日、<b>14 juillet</b> 国庆日、<b>15 août</b> 圣母升天节、<b>1<sup>er</sup> novembre</b> 诸圣节、<b>11 novembre</b> 一战停战日、<b>25 décembre</b> 圣诞节；另有随宗教历变动的 <b>lundi de Pâques</b> 复活节周一、<b>jeudi de l'Ascension</b> 耶稣升天节、<b>lundi de Pentecôte</b> 圣灵降临节周一。<br><b>faire le pont</b>「搭桥」：假日靠近周末时把中间的工作日也休掉，连成长假。法国人常说 <b>Les grandes vacances sont sacrées !</b> 暑假是神圣不可侵犯的。" }
    ],
    say: [
      { title: "Décrire une journée 描述一天的作息", items: [
        { fr: "Je me lève à 6 heures, je fais ma toilette et je prends mon petit déjeuner.", zh: "我 6 点起床，洗漱，吃早饭。" },
        { fr: "Je travaille jusqu'à 19 h 30, puis je rentre chez moi.", zh: "我工作到 19 点半，然后回家。" },
        { fr: "Je me couche tôt et je dors huit heures par nuit.", zh: "我睡得早，每晚睡 8 小时。" }
      ]},
      { title: "Interview : questions sur l'emploi du temps 采访提问", items: [
        { fr: "À quelle heure est-ce que vous vous levez le matin ?", zh: "您早上几点起床？" },
        { fr: "Qu'est-ce que vous faites le week-end ?", zh: "您周末做什么？" },
        { fr: "Qu'est-ce que vous faites pour vous détendre ?", zh: "您做什么来放松？" }
      ]}
    ]
  }
});
