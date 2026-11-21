/* =========================================================
   📚 《你好！法语 1》Unité 6 · Leçons 21–24（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 6)){
  TB_UNITS.push({ n: 6, title: "Unité 6 · Vivre avec les autres 与他人共处", lessons: ["tb-l21", "tb-l22", "tb-l23", "tb-l24"] });
}

Object.assign(TB_LESSONS, {
  /* ————— Leçon 21 ————— */
  "tb-l21": {
    "unit": 6,
    "no": "Leçon 21",
    "title": "C'est interdit ! 这是被禁止的！",
    "text": [
      {
        "fr": "— Excusez-moi, madame, il est interdit de fumer dans le restaurant.",
        "zh": "——夫人，请原谅，本餐厅禁止吸烟。"
      },
      {
        "fr": "— Où est-ce que je peux fumer, alors ?",
        "zh": "——那我在哪儿可以吸烟呢？"
      },
      {
        "fr": "— Vous pouvez fumer sur la terrasse.",
        "zh": "——您可以在露天座吸烟。"
      },
      {
        "fr": "— Sur la terrasse ? Alors, ça ! Non merci !",
        "zh": "——在露天座？那……谢谢，我不去！"
      },
      {
        "fr": "— Madame, s'il vous plaît ! Ne fumez pas ici !",
        "zh": "——夫人，请不要在这里吸烟！"
      },
      {
        "fr": "— Je voudrais une chambre, s'il vous plaît. Pour une personne.",
        "zh": "——我想要一个房间。单人间的。"
      },
      {
        "fr": "— Pour une personne... D'accord. Donnez-moi votre passeport, s'il vous plaît... Ah ! Vous avez un chien ?",
        "zh": "——单人间……好的。请把护照给我……啊！您带了一只狗？"
      },
      {
        "fr": "— Oui.",
        "zh": "——是的。"
      },
      {
        "fr": "— Je suis désolée, monsieur, mais vous ne pouvez pas prendre votre chien avec vous dans la chambre.",
        "zh": "——十分抱歉，先生，您不能把狗带进房间。"
      },
      {
        "fr": "— Mais comment ça ? !",
        "zh": "——啊，怎么回事啊？！"
      },
      {
        "fr": "— Pardon, madame, vous ne pouvez pas utiliser votre portable.",
        "zh": "——请原谅，夫人，您不能使用手机。"
      },
      {
        "fr": "— Comment ça, je ne peux pas téléphoner à mon fils ? C'est très important !",
        "zh": "——怎么回事，我不能用手机？我要给我儿子打电话！这很重要！"
      },
      {
        "fr": "— Non, madame, je suis désolée. Ce n'est pas possible. On ne peut pas téléphoner dans l'avion. Téléphonez-lui à l'aéroport, à l'arrivée.",
        "zh": "——不行，夫人，十分抱歉。这绝对不行，飞机上不能打电话。请到机场落地后再给他打电话。"
      }
    ],
    "vocab": [
      {
        "fr": "arrivée",
        "pos": "n.f.",
        "g": "f",
        "zh": "到达"
      },
      {
        "fr": "chien(ne)",
        "pos": "n.",
        "zh": "狗"
      },
      {
        "fr": "chocolat",
        "pos": "n.m.",
        "g": "m",
        "zh": "巧克力"
      },
      {
        "fr": "classe",
        "pos": "n.f.",
        "g": "f",
        "zh": "班级；教室"
      },
      {
        "fr": "donner",
        "pos": "v.t.",
        "zh": "给"
      },
      {
        "fr": "excuser",
        "pos": "v.t.",
        "zh": "原谅，宽恕"
      },
      {
        "fr": "interdit(e)",
        "pos": "adj.",
        "zh": "被禁止的"
      },
      {
        "fr": "important(e)",
        "pos": "adj.",
        "zh": "重要的"
      },
      {
        "fr": "médecin",
        "pos": "n.m.",
        "g": "m",
        "zh": "医生"
      },
      {
        "fr": "permis(e)",
        "pos": "adj.",
        "zh": "被允许的"
      },
      {
        "fr": "place",
        "pos": "n.f.",
        "g": "f",
        "zh": "（演出场地的）座位；位置"
      },
      {
        "fr": "portable",
        "pos": "n.m.",
        "g": "m",
        "zh": "手机；笔记本电脑"
      },
      {
        "fr": "pouvoir",
        "pos": "v.t.",
        "zh": "能，会；可以"
      },
      {
        "fr": "voiture",
        "pos": "n.f.",
        "g": "f",
        "zh": "（火车）车厢"
      }
    ],
    "grammar": [
      {
        "t": "Le verbe pouvoir au présent 动词 pouvoir 的现在时",
        "d": "je <b>peux<\/b> / tu <b>peux<\/b> / il, elle <b>peut<\/b> / nous <b>pouvons<\/b> / vous <b>pouvez<\/b> / ils, elles <b>peuvent<\/b>。<br>例：Où est-ce que je <b>peux<\/b> fumer ? 我在哪儿能吸烟？Vous <b>pouvez<\/b> fumer sur la terrasse. 您可以在露天座吸烟。<br><b>On ne peut pas<\/b> téléphoner dans l'avion. 飞机上不能打电话。"
      },
      {
        "t": "La négation de l'impératif 命令式的否定形式",
        "d": "在命令式的否定形式中，<b>ne...pas<\/b> 分别位于变位动词的前后两边。<br><b>N'entrons pas.<\/b>（咱们）别进去。<b>Ne fais pas de bruit, il dort.<\/b> 别出声，他在睡觉。<br>课文例：<b>Ne fumez pas ici !<\/b> 不要在这里吸烟！"
      },
      {
        "t": "Les pronoms compléments d'objet indirect (COI) 间接宾语人称代词",
        "d": "间接宾语人称代词用来代替以介词 <b>à<\/b> 或 <b>pour<\/b> 引导的间接宾语，共六种形式：<br><b>me (m')<\/b> 我 / <b>te (t')<\/b> 你 / <b>lui<\/b> 他、她 / <b>nous<\/b> 我们 / <b>vous<\/b> 你们 / <b>leur<\/b> 他们、她们。<br>请注意：如果 me 和 te 后面的词以元音或哑音 h 开头，要省音为 <b>m'<\/b> 和 <b>t'<\/b>。<br>代词原则上位于相关动词前面；否定句中 ne 提到代词前面。<br>Nous disons bonjour à Sophie. → Nous <b>lui<\/b> disons bonjour. 我们向她问好。<br>Il ne parle pas à ses parents. → Il ne <b>leur<\/b> parle pas. 他不和父母说话。"
      },
      {
        "t": "COI 在复合过去时中的位置",
        "d": "在复合过去式中，动词由助动词 + 过去分词构成，间接宾语人称代词位于<b>助动词前面<\/b>；表示否定时，ne 也要提到代词前面。<br>Paul a téléphoné à sa copine hier matin. → Paul <b>lui<\/b> a téléphoné hier matin. 保罗昨天上午给她女朋友打了电话。<br>Je n'ai pas acheté ce livre pour mes enfants. → Je ne <b>leur<\/b> ai pas acheté ce livre. 我没有给孩子们买这本书。"
      },
      {
        "t": "COI 在命令式中的位置",
        "d": "肯定命令式中，间接宾语代词位于动词后，用连字符连接；<b>me → moi<\/b>、<b>te → toi<\/b>，其他人称词形不变：<br><b>Raconte-moi cette histoire.<\/b> 给我讲讲这个故事。<b>Présente-nous ton ami.<\/b> 给我们介绍一下你的朋友。<b>Téléphonez-lui.<\/b> 给他/她打电话。<b>Donnons-leur notre adresse.<\/b> 把我们的地址给他们。<br>否定命令式中，代词位于动词前，ne 放在代词后，词形不变：<b>Ne lui parle pas de ça !<\/b> 别跟他说这件事！<b>Ne leur donnons pas notre numéro de téléphone.<\/b> 别把我们的电话号码给他们。"
      },
      {
        "t": "Il est interdit de + 不定式：表达禁止",
        "d": "<b>Il est interdit de + 动词不定式<\/b> 意为「禁止做某事」，其中 il 是形式主语，不代表任何人，是无人称句式。<br><b>Il est interdit de fumer dans le restaurant.<\/b> 本餐厅禁止吸烟。<b>Il est interdit de fumer dans la classe.<\/b> 教室里禁止吸烟。<br>其他禁止表达：<b>On ne peut pas + 不定式<\/b>（不能……）、<b>Ce n'est pas possible<\/b>（这不行）、<b>Ne fumez pas !<\/b>（别吸烟！）。"
      }
    ],
    "say": [
      {
        "title": "Demander, donner et refuser une permission 请求、给予许可和拒绝",
        "items": [
          {
            "fr": "— Où est-ce que je peux fumer ? — Vous pouvez fumer sur la terrasse.",
            "zh": "——我在哪儿可以吸烟？——您可以在露天座吸烟。"
          },
          {
            "fr": "— Vous ne pouvez pas prendre votre chien.",
            "zh": "——您不能带您的狗。"
          },
          {
            "fr": "— Pardon, madame, vous ne pouvez pas utiliser votre portable.",
            "zh": "——对不起，夫人，您不能使用手机。"
          }
        ]
      },
      {
        "title": "Exprimer des interdictions 表达禁令",
        "items": [
          {
            "fr": "Il est interdit de fumer. / Il est interdit de fumer dans le restaurant.",
            "zh": "禁止吸烟。／本餐厅禁止吸烟。"
          },
          {
            "fr": "On ne peut pas téléphoner dans l'avion.",
            "zh": "飞机上不能打电话。"
          },
          {
            "fr": "Ce n'est pas possible. / Ne fumez pas !",
            "zh": "这不行。／别吸烟！"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 22 ————— */
  "tb-l22": {
    "unit": 6,
    "no": "Leçon 22",
    "title": "Petites annonces 启事",
    "text": [
      {
        "fr": "HÔTEL DU MUSÉE — NICE",
        "zh": "尼斯·博物馆酒店"
      },
      {
        "fr": "Vous êtes un H ou une F entre 25 et 35 ans, souriant(e) et dynamique.",
        "zh": "您是一位25到35岁之间的男性或女性，面带微笑且充满活力。"
      },
      {
        "fr": "Vous voulez travailler avec des clients français et étrangers.",
        "zh": "您希望与法国和外国客户一起工作。"
      },
      {
        "fr": "Vous savez parler anglais, espagnol et italien.",
        "zh": "您会讲英语、西班牙语和意大利语。"
      },
      {
        "fr": "Vous pouvez travailler parfois le week-end.",
        "zh": "您有时可以在周末工作。"
      },
      {
        "fr": "Nous cherchons un(e) réceptionniste.",
        "zh": "我们诚聘一名接待员。"
      },
      {
        "fr": "Contactez Madame Davoust, Directrice, Hôtel du musée, 56, promenade des Anglais, 06200 Nice, 04 93 75 28 39",
        "zh": "请联系总经理达武斯特女士：博物馆酒店，英国人漫步大道56号，06200 尼斯，电话 04 93 75 28 39。"
      },
      {
        "fr": "— Alors, vous avez quel âge, s'il vous plaît ?",
        "zh": "——那么，请问您多大年纪？"
      },
      {
        "fr": "— Je vais avoir 22 ans dans un mois.",
        "zh": "——还有一个月我就满22岁了。"
      },
      {
        "fr": "— Très bien. Et vous avez déjà travaillé dans un hôtel ?",
        "zh": "——很好。您曾经在酒店工作过吗？"
      },
      {
        "fr": "— Oui, j'ai travaillé un an à la réception d'un hôtel, à Berlin.",
        "zh": "——是的，我在柏林一家酒店的前台工作过一年。"
      },
      {
        "fr": "— Oh ! vous savez parler allemand, alors ?",
        "zh": "——哦！那您会讲德语？"
      },
      {
        "fr": "— Oui, oui, je parle allemand et anglais, et je vais apprendre l'espagnol.",
        "zh": "——是的，我讲德语和英语，而且我打算学西班牙语。"
      },
      {
        "fr": "— Très bien. Dites-moi, est-ce que vous faites du sport ?",
        "zh": "——很好。告诉我，您做运动吗？"
      },
      {
        "fr": "— Du sport ? Oui, je fais du tennis et de la natation. C'est important ?",
        "zh": "——运动？是的，我打网球、游泳。这很重要吗？"
      },
      {
        "fr": "— Écoutez, non, non... Non, ce n'est pas très important. Mais il faut parfois travailler le samedi et le dimanche. Vous pouvez travailler le week-end ?",
        "zh": "——听我说，不，不……不，这不太重要。但我们这里有时周六和周日也要工作。您周末能上班吗？"
      },
      {
        "fr": "— Ah ! oui, oui, pas de problème.",
        "zh": "——啊，可以，没问题。"
      }
    ],
    "vocab": [
      {
        "fr": "avec",
        "pos": "prép.",
        "zh": "［表示人际相互关联、亲和］同，跟，与"
      },
      {
        "fr": "client(e)",
        "pos": "n.",
        "zh": "顾客，客户"
      },
      {
        "fr": "contacter",
        "pos": "v.t.",
        "zh": "联系"
      },
      {
        "fr": "déjà",
        "pos": "adv.",
        "zh": "已经"
      },
      {
        "fr": "dire",
        "pos": "v.t.",
        "zh": "说，说出"
      },
      {
        "fr": "dynamique",
        "pos": "adj.",
        "zh": "有活力的"
      },
      {
        "fr": "école",
        "pos": "n.f.",
        "g": "f",
        "zh": "小学，学校"
      },
      {
        "fr": "entretien",
        "pos": "n.m.",
        "g": "m",
        "zh": "面试，会面"
      },
      {
        "fr": "étranger(ère)",
        "pos": "adj.",
        "zh": "外国的，外界的"
      },
      {
        "fr": "expérience",
        "pos": "n.f.",
        "g": "f",
        "zh": "经验；经历"
      },
      {
        "fr": "indispensable",
        "pos": "adj.",
        "zh": "不可或缺的"
      },
      {
        "fr": "italien",
        "pos": "n.m.",
        "g": "m",
        "zh": "意大利语"
      },
      {
        "fr": "langue",
        "pos": "n.f.",
        "g": "f",
        "zh": "语言；舌头"
      },
      {
        "fr": "lettre",
        "pos": "n.f.",
        "g": "f",
        "zh": "信；字母"
      },
      {
        "fr": "mot",
        "pos": "n.m.",
        "g": "m",
        "zh": "词语"
      },
      {
        "fr": "Nice",
        "pos": "n.pr.",
        "zh": "尼斯（法国）"
      },
      {
        "fr": "parfois",
        "pos": "adv.",
        "zh": "有时"
      },
      {
        "fr": "privé(e)",
        "pos": "adj.",
        "zh": "私人的"
      },
      {
        "fr": "problème",
        "pos": "n.m.",
        "g": "m",
        "zh": "问题"
      },
      {
        "fr": "promenade",
        "pos": "n.f.",
        "g": "f",
        "zh": "散步；散步场所，散步大道"
      },
      {
        "fr": "qualité",
        "pos": "n.f.",
        "g": "f",
        "zh": "品质，质量"
      },
      {
        "fr": "réceptionniste",
        "pos": "n.",
        "zh": "（旅店、商店等的）接待员"
      },
      {
        "fr": "réserver",
        "pos": "v.t.",
        "zh": "预订，保留，预留"
      },
      {
        "fr": "savoir",
        "pos": "v.t.",
        "zh": "知道，会"
      },
      {
        "fr": "souriant(e)",
        "pos": "adj.",
        "zh": "面带微笑的"
      },
      {
        "fr": "vouloir",
        "pos": "v.t.",
        "zh": "想要"
      }
    ],
    "grammar": [
      {
        "t": "Les verbes vouloir et savoir au présent 动词 vouloir 和 savoir 的现在时",
        "d": "<b>vouloir<\/b>：je <b>veux<\/b> / tu <b>veux<\/b> / il, elle <b>veut<\/b> / nous <b>voulons<\/b> / vous <b>voulez<\/b> / ils, elles <b>veulent<\/b>。<br><b>savoir<\/b>：je <b>sais<\/b> / tu <b>sais<\/b> / il, elle <b>sait<\/b> / nous <b>savons<\/b> / vous <b>savez<\/b> / ils, elles <b>savent<\/b>。<br>例：Je <b>veux<\/b> travailler avec des clients français. 我想和法国客户一起工作。Vous <b>savez<\/b> parler anglais ? 您会讲英语吗？"
      },
      {
        "t": "Je voudrais：委婉地表达意愿",
        "d": "「我想要一杯茶」有两种说法：<b>Je veux un thé, s'il vous plaît.<\/b> 和 <b>Je voudrais un thé.<\/b><br>第一句靠 s'il vous plaît 表示礼貌；第二句借助 vouloir 的条件式现在时变位 <b>voudrais<\/b> 体现婉转语气。<br>例：<b>Je voudrais une chambre, s'il vous plaît.<\/b> 请给我一个房间。"
      },
      {
        "t": "Il faut（无人称动词 falloir）",
        "d": "falloir 是无人称动词（le verbe impersonnel），只有第三人称单数变位，主语用中性代词 il，但 il 没有实际意义。<br><b>il faut<\/b> 表示「必须、需要」，后可接名词（词组）：<br><b>Il faut de la farine et des œufs, c'est ça ?<\/b> 需要面粉和鸡蛋，对吧？<b>Combien de kilos de farine faut-il ?<\/b> 需要几公斤面粉？<b>Il faut un ingénieur ici pour ce travail.<\/b> 这项工作需要一名工程师。<br><b>il faut + 动词不定式<\/b> 表示「必须……、应该……」：<b>Il faut finir ce travail avant midi.<\/b> 中午前要完成这项工作。<b>Est-ce qu'il faut prendre un taxi ?<\/b> 要乘出租车吗？<b>Il ne faut pas fumer dans cette salle.<\/b> 这间大厅里禁止吸烟。"
      },
      {
        "t": "Le futur proche 最近将来时",
        "d": "最近将来时口语中使用广泛，表示即将发生的动作或有关将来的意向，包含「要」的意思。<br>基本结构：<b>aller 的直陈式现在时 + 动词不定式<\/b>。<br><b>Il va avoir 22 ans.<\/b> 他马上就22岁了。<b>Je vais acheter une nouvelle voiture.<\/b> 我要买一辆新车。<b>Je vais apprendre l'espagnol.<\/b> 我打算学西班牙语。<br>代词（间接宾语代词、y、en）应置于相关动词不定式前：<b>Elle va y habiter.<\/b> 她将住在那里。<b>Je vais lui téléphoner demain.<\/b> 明天我给他打电话。"
      },
      {
        "t": "savoir + 动词不定式：会做某事",
        "d": "<b>savoir + 不定式<\/b> 表示「有做某事的能力、会做某事」。<br><b>Vous savez parler anglais, espagnol et italien.<\/b> 您会讲英语、西班牙语和意大利语。<b>Il sait nager.<\/b> 他会游泳。<br>比较：<b>Je veux travailler<\/b>（我想工作，表意愿）与 <b>Je sais travailler<\/b>（我会工作，表能力）。"
      }
    ],
    "say": [
      {
        "title": "Exprimer la possibilité 表达可能性",
        "items": [
          {
            "fr": "Oui, je peux travailler le week-end.",
            "zh": "是的，我周末可以工作。"
          },
          {
            "fr": "Vous pouvez travailler parfois le week-end.",
            "zh": "您有时可以在周末工作。"
          }
        ]
      },
      {
        "title": "Exprimer le savoir-faire 表达技能",
        "items": [
          {
            "fr": "Je sais parler anglais et allemand.",
            "zh": "我会讲英语和德语。"
          },
          {
            "fr": "Vous savez parler anglais, espagnol et italien.",
            "zh": "您会讲英语、西班牙语和意大利语。"
          }
        ]
      },
      {
        "title": "Exprimer la volonté 表达意愿",
        "items": [
          {
            "fr": "Elle veut travailler.",
            "zh": "她想工作。"
          },
          {
            "fr": "Je veux travailler avec des clients français et étrangers.",
            "zh": "我想和法国及外国客户一起工作。"
          }
        ]
      },
      {
        "title": "Exprimer l'obligation 表达必须性",
        "items": [
          {
            "fr": "Il faut travailler le week-end.",
            "zh": "周末必须工作。"
          },
          {
            "fr": "Il faut finir ce travail avant midi.",
            "zh": "中午之前必须完成这项工作。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 23 ————— */
  "tb-l23": {
    "unit": 6,
    "no": "Leçon 23",
    "title": "Qu'est-ce qu'on lui offre ? 我们送她什么呢？",
    "text": [
      {
        "fr": "— Mais qu'est-ce que vous faites ?",
        "zh": "——哎，你们在做什么呢？"
      },
      {
        "fr": "— Eh bien, on cherche une idée de cadeau pour Colette.",
        "zh": "——嗯，我们正在商量送什么礼物给科莱特。"
      },
      {
        "fr": "— Mais pourquoi ? C'est son anniversaire ?",
        "zh": "——为什么？她要过生日了？"
      },
      {
        "fr": "— Mais non ! Elle quitte l'agence cette semaine. Elle part à la retraite.",
        "zh": "——不是！这周她就要离开公司了。她要退休了。"
      },
      {
        "fr": "— Ah ! mais oui, c'est vrai !",
        "zh": "——哦！就是啊，确实如此！"
      },
      {
        "fr": "— Et alors, on lui offre un cadeau pour son départ.",
        "zh": "——所以，我们要送她一个离别礼物。"
      },
      {
        "fr": "— Oui, mais on ne sait pas quoi acheter.",
        "zh": "——是，但我们不知道买什么好。"
      },
      {
        "fr": "— Tu la connais bien, toi, Colette. Quels sont ses goûts ?",
        "zh": "——你很了解科莱特呀。她有什么爱好？"
      },
      {
        "fr": "— Qu'est-ce qu'elle aime ? Je ne sais pas, moi... Offrez-lui des fleurs... Ou pourquoi pas un CD de Pavarotti ? Elle l'adore !",
        "zh": "——她喜欢什么？我也不知道嘛……送她鲜花吧……或者，为什么不买一张帕瓦罗蒂的CD呢？她特别喜欢！"
      },
      {
        "fr": "— Ce n'est pas très original !",
        "zh": "——这礼物不太有新意！"
      },
      {
        "fr": "— Bon, alors, vous pouvez lui offrir un livre d'art sur la photo ou sur la peinture.",
        "zh": "——那好吧，你们可以送她一本关于摄影或绘画的艺术书。"
      },
      {
        "fr": "— Ah ! oui, tiens, ça c'est une bonne idée... Ah ! mais non, le directeur lui achète un livre !",
        "zh": "——噢！对呀，这可是个好主意……哎呀，不行，经理给她买书了！"
      },
      {
        "fr": "— Ah ! Écoutez, bon, je suis désolé mais je n'ai pas d'autre idée.",
        "zh": "——咳！听我说，好吧，很抱歉，我实在没有别的主意了。"
      }
    ],
    "vocab": [
      {
        "fr": "anniversaire",
        "pos": "n.m.",
        "g": "m",
        "zh": "生日"
      },
      {
        "fr": "CD",
        "pos": "n.m.",
        "g": "m",
        "zh": "激光唱片；光盘（英文 Compact Disc 的缩写）"
      },
      {
        "fr": "choisir",
        "pos": "v.t.",
        "zh": "选择"
      },
      {
        "fr": "collègue",
        "pos": "n.",
        "zh": "同事"
      },
      {
        "fr": "connaître",
        "pos": "v.t.",
        "zh": "了解；认识"
      },
      {
        "fr": "fleur",
        "pos": "n.f.",
        "g": "f",
        "zh": "花"
      },
      {
        "fr": "goût",
        "pos": "n.m.",
        "g": "m",
        "zh": "爱好，兴趣；品位"
      },
      {
        "fr": "idée",
        "pos": "n.f.",
        "g": "f",
        "zh": "主意"
      },
      {
        "fr": "invité(e)",
        "pos": "n.",
        "zh": "来宾"
      },
      {
        "fr": "laisser",
        "pos": "v.t.",
        "zh": "放弃，使得"
      },
      {
        "fr": "lieu",
        "pos": "n.m.",
        "g": "m",
        "zh": "地点，地方"
      },
      {
        "fr": "mauvais(e)",
        "pos": "adj.",
        "zh": "坏的，不好的"
      },
      {
        "fr": "offrir",
        "pos": "v.t.",
        "zh": "赠送，提供"
      },
      {
        "fr": "original(e)",
        "pos": "adj.",
        "zh": "独到的，新颖的"
      },
      {
        "fr": "peinture",
        "pos": "n.f.",
        "g": "f",
        "zh": "绘画；油画"
      },
      {
        "fr": "plat",
        "pos": "n.m.",
        "g": "m",
        "zh": "菜肴"
      },
      {
        "fr": "pourquoi",
        "pos": "adv.",
        "zh": "为什么"
      },
      {
        "fr": "quelque chose",
        "pos": "loc.",
        "zh": "某个东西，某物（≈ qch）"
      },
      {
        "fr": "quitter",
        "pos": "v.t.",
        "zh": "离开"
      },
      {
        "fr": "quoi",
        "pos": "pron.interr.",
        "zh": "什么，什么事，什么东西（无性数变化，只用来指物）"
      },
      {
        "fr": "retraite",
        "pos": "n.f.",
        "g": "f",
        "zh": "退休"
      },
      {
        "fr": "sur",
        "pos": "prép.",
        "zh": "（表示相关）关于，对于"
      },
      {
        "fr": "tenir",
        "pos": "v.t.",
        "zh": "拿着"
      },
      {
        "fr": "vrai",
        "pos": "adj.",
        "zh": "真实的，确实的"
      }
    ],
    "grammar": [
      {
        "t": "Le verbe connaître au présent 动词 connaître 的现在时",
        "d": "je <b>connais<\/b> / tu <b>connais<\/b> / il, elle <b>connaît<\/b> / nous <b>connaissons<\/b> / vous <b>connaissez<\/b> / ils, elles <b>connaissent<\/b>。<br>例：<b>Tu connais<\/b> Colette et sa sœur ? 你认识科莱特和她姐姐吗？Oui, je <b>les connais<\/b>. 是的，我认识她们。"
      },
      {
        "t": "Les pronoms COD 直接宾语人称代词",
        "d": "直接宾语人称代词用来代替动词的直接宾语（即不需要介词引导的宾语），可指人也可指物：<br><b>me, m'<\/b> 我 / <b>te, t'<\/b> 你 / <b>le, l'<\/b> 他、它 / <b>nous<\/b> 我们 / <b>vous<\/b> 你们 / <b>les<\/b> 他们、她们、它们。<br>与间接宾语代词一样，直接宾语代词原则上位于相关动词前面。<br><b>Tu connais Colette et sa sœur ? — Oui, je les connais.<\/b> 你认识科莱特和她姐姐吗？——是的，我认识她们。<br><b>Vous aimez la musique ? — Oui, je l'aime beaucoup.<\/b> 您喜欢音乐吗？——是的，我很喜欢。<br>如果动词用最近将来时，代词应放在动词不定式前面。"
      },
      {
        "t": "COD 在否定句中的位次",
        "d": "在否定句中，如果谓语动词带有直接宾语人称代词，否定词 <b>ne<\/b> 应提到该代词前面。<br><b>Il ne nous regarde pas.<\/b> 他不看我们。<b>Tu ne m'écoutes pas.<\/b> 你不听我的。<br>比较肯定式：Il <b>nous<\/b> regarde. / Tu <b>m'<\/b> écoutes."
      },
      {
        "t": "quoi / pourquoi 与 pourquoi pas",
        "d": "<b>quoi<\/b> 是疑问代词，指「什么」，无性数变化，只用来指物；可作不定式的直接宾语：<b>On ne sait pas quoi acheter.<\/b> 我们不知道买什么。<br><b>pourquoi<\/b> 是疑问副词「为什么」；<b>pourquoi pas + 名词／不定式<\/b> 意为「为什么不……呢」，用来提出建议：<b>Ou pourquoi pas un CD de Pavarotti ?<\/b> 或者为什么不买张帕瓦罗蒂的CD呢？<b>Pourquoi pas lui acheter un livre ?<\/b> 为什么不给他买本书呢？"
      },
      {
        "t": "partir à la retraite 与一些固定搭配",
        "d": "<b>partir à la retraite = prendre sa retraite<\/b> 退休（强调「步入退休」这个动作）；<b>être à la retraite<\/b> 表示「处于退休的状态」。<br>例：Elle va prendre sa retraite dans un mois. 她一个月后退休。Elle est à la retraite depuis un an. 她退休一年了。<br><b>un livre d'art sur la photo ou sur la peinture<\/b>：介词 sur 此处表示「关于」，用于表达对一个方案的意见（exprimer son opinion sur un projet）。"
      }
    ],
    "say": [
      {
        "title": "Faire des propositions 提出建议",
        "items": [
          {
            "fr": "Offrez-lui des fleurs.",
            "zh": "送她鲜花吧。"
          },
          {
            "fr": "Pourquoi pas un CD ?",
            "zh": "为什么不买张CD呢？"
          },
          {
            "fr": "Vous pouvez offrir un livre d'art.",
            "zh": "您可以送一本艺术书。"
          }
        ]
      },
      {
        "title": "Accepter une proposition 接受提议",
        "items": [
          {
            "fr": "Oui. C'est une bonne idée.",
            "zh": "是的，这是个好主意。"
          }
        ]
      },
      {
        "title": "Refuser une proposition 拒绝提议",
        "items": [
          {
            "fr": "Ah ! mais non...",
            "zh": "啊！不行……"
          },
          {
            "fr": "Ce n'est pas très original.",
            "zh": "这不太有新意。"
          },
          {
            "fr": "Non, je ne peux pas.",
            "zh": "不，我不能。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 24 ————— */
  "tb-l24": {
    "unit": 6,
    "no": "Leçon 24",
    "title": "Le candidat idéal... 理想的应聘者",
    "text": [
      {
        "fr": "Comment réussir un entretien ?",
        "zh": "如何成功面试？"
      },
      {
        "fr": "Avant l'entretien",
        "zh": "面试前"
      },
      {
        "fr": "Recherchez des informations sur l'entreprise.",
        "zh": "研究企业的相关信息。"
      },
      {
        "fr": "Passez une bonne nuit.",
        "zh": "前一晚保证充足的睡眠。"
      },
      {
        "fr": "Faites attention à votre présentation générale : les vêtements, les cheveux...",
        "zh": "注意整体仪表：着装、发型等等。"
      },
      {
        "fr": "Arrivez à l'heure.",
        "zh": "准时到场。"
      },
      {
        "fr": "Pendant l'entretien",
        "zh": "面试中"
      },
      {
        "fr": "Restez calme et souriant(e).",
        "zh": "保持冷静，面带微笑。"
      },
      {
        "fr": "Regardez dans les yeux la personne en face de vous.",
        "zh": "注视着对面人的眼睛。"
      },
      {
        "fr": "Écoutez avec attention et répondez avec des phrases courtes.",
        "zh": "注意倾听面试官的问题，并用简短的语句回答。"
      },
      {
        "fr": "Ne racontez pas votre vie ou vos problèmes.",
        "zh": "不要讲述您的个人生活和私人问题。"
      },
      {
        "fr": "Parlez correctement : n'utilisez pas de mots familiers.",
        "zh": "谈吐得体：不要使用过于随意的词语。"
      },
      {
        "fr": "Posez, vous aussi, des questions : sur le travail, les horaires, l'entreprise",
        "zh": "您自己也要提一些问题：关于工作、工时以及企业的问题。"
      },
      {
        "fr": "D'après les conseils donnés par l'ANPE (Agence nationale pour l'emploi).",
        "zh": "据法国全国就业办事处（ANPE）提供的建议。"
      }
    ],
    "vocab": [
      {
        "fr": "attention",
        "pos": "n.f.",
        "g": "f",
        "zh": "注意，专心"
      },
      {
        "fr": "faire attention à",
        "pos": "loc.v.",
        "zh": "注意……，当心……"
      },
      {
        "fr": "avant",
        "pos": "prép.",
        "zh": "在……之前"
      },
      {
        "fr": "avec",
        "pos": "prép.",
        "zh": "（表示方式）……地"
      },
      {
        "fr": "calme",
        "pos": "adj.",
        "zh": "平静的，安静的；冷静的，镇静的"
      },
      {
        "fr": "candidat(e)",
        "pos": "n.",
        "zh": "应聘者，求职者；候选人"
      },
      {
        "fr": "cheveux",
        "pos": "n.m.pl.",
        "g": "m",
        "zh": "头发"
      },
      {
        "fr": "correctement",
        "pos": "adv.",
        "zh": "正确地；合适地；合乎礼仪地"
      },
      {
        "fr": "court(e)",
        "pos": "adj.",
        "zh": "短的"
      },
      {
        "fr": "entreprise",
        "pos": "n.f.",
        "g": "f",
        "zh": "企业"
      },
      {
        "fr": "exactement",
        "pos": "adv.",
        "zh": "准确地"
      },
      {
        "fr": "familier(ère)",
        "pos": "adj.",
        "zh": "通俗的"
      },
      {
        "fr": "idéal(e)",
        "pos": "adj.",
        "zh": "理想的"
      },
      {
        "fr": "imaginer",
        "pos": "v.t.",
        "zh": "想象"
      },
      {
        "fr": "œil [œj] (pl. yeux [jo])",
        "pos": "n.m.",
        "g": "m",
        "zh": "眼睛"
      },
      {
        "fr": "pendant",
        "pos": "prép.",
        "zh": "在……期间"
      },
      {
        "fr": "personne",
        "pos": "n.f.",
        "g": "f",
        "zh": "人"
      },
      {
        "fr": "peut-être",
        "pos": "adv.",
        "zh": "也许"
      },
      {
        "fr": "phrase",
        "pos": "n.f.",
        "g": "f",
        "zh": "句子，语句"
      },
      {
        "fr": "poser",
        "pos": "v.t.",
        "zh": "提出（问题）"
      },
      {
        "fr": "présentation",
        "pos": "n.f.",
        "g": "f",
        "zh": "外表，仪表"
      },
      {
        "fr": "raconter",
        "pos": "v.t.",
        "zh": "讲述"
      },
      {
        "fr": "rechercher",
        "pos": "v.t.",
        "zh": "研究，探索"
      },
      {
        "fr": "répondre(à)",
        "pos": "v.t.ind.",
        "zh": "回答，答复"
      },
      {
        "fr": "rester",
        "pos": "v.i.",
        "zh": "保持，始终处于（某种姿势、状态）"
      },
      {
        "fr": "réussir",
        "pos": "v.t.",
        "zh": "使成功，做成功"
      },
      {
        "fr": "utiliser",
        "pos": "v.t.",
        "zh": "使用"
      },
      {
        "fr": "vendre",
        "pos": "v.t.",
        "zh": "销售，卖"
      },
      {
        "fr": "vie",
        "pos": "n.f.",
        "g": "f",
        "zh": "生平"
      }
    ],
    "grammar": [
      {
        "t": "祈使句给出建议（据课文提炼）",
        "d": "本课是一篇求职指南，通篇用<b>祈使句（l'impératif）<\/b>给出建议，动词只用 vous 形式的变位：<br><b>Recherchez<\/b> des informations sur l'entreprise. 研究企业信息。<b>Passez<\/b> une bonne nuit. 好好睡一觉。<b>Faites attention à<\/b> votre présentation générale. 注意整体仪表。<b>Arrivez<\/b> à l'heure. 准时到达。<br><b>Restez<\/b> calme et souriant(e). 保持冷静、面带微笑。<b>Écoutez<\/b> avec attention et <b>répondez<\/b> avec des phrases courtes. 认真听，用短句回答。<b>Parlez<\/b> correctement. 谈吐得体。<b>POSEZ<\/b> des questions. 也要提问。"
      },
      {
        "t": "否定祈使句 ne...pas（据课文提炼）",
        "d": "否定祈使句中，<b>ne...pas<\/b> 分别放在变位动词前后：<br><b>Ne racontez pas<\/b> votre vie ou vos problèmes. 不要讲述您的生活和私人问题。<b>N'utilisez pas<\/b> de mots familiers. 不要使用过于随意的词语。<br>与第21课所学一致：<b>Ne fumez pas ici !<\/b> 别在这里吸烟！<b>N'entrons pas.<\/b> 咱们别进去。"
      }
    ],
    "say": [
      {
        "title": "Donner des conseils 提出建议（据课文提炼）",
        "items": [
          {
            "fr": "Recherchez des informations sur l'entreprise.",
            "zh": "研究企业的相关信息。"
          },
          {
            "fr": "Faites attention à votre présentation générale.",
            "zh": "注意您的整体仪表。"
          },
          {
            "fr": "Restez calme et souriant(e).",
            "zh": "保持冷静，面带微笑。"
          },
          {
            "fr": "Écoutez avec attention et répondez avec des phrases courtes.",
            "zh": "认真倾听并用简短的句子回答。"
          },
          {
            "fr": "Posez, vous aussi, des questions sur le travail, les horaires, l'entreprise.",
            "zh": "您也要提一些关于工作、工时和企业的问题。"
          }
        ]
      },
      {
        "title": "Savoir-faire : Règlement intérieur / Fête d'anniversaire 学以致用",
        "items": [
          {
            "fr": "Il est interdit de fumer dans l'école.",
            "zh": "学校里禁止吸烟。"
          },
          {
            "fr": "C'est l'anniversaire de Mathilde samedi.",
            "zh": "周六是玛蒂尔德的生日。"
          },
          {
            "fr": "Est-ce que tu peux faire une fête chez toi ?",
            "zh": "你能在你家办个派对吗？"
          },
          {
            "fr": "Et qu'est-ce qu'on lui offre ? Je n'ai pas d'idée.",
            "zh": "那我们送她什么呢？我没主意。"
          }
        ]
      }
    ]
  }
});
