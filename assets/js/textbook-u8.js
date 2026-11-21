/* =========================================================
   📚 《你好！法语 1》Unité 8 · Leçons 29–32（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 8)){
  TB_UNITS.push({ n: 8, title: "Unité 8 · Tout le monde en parle... 大家在谈论……", lessons: ["tb-l29", "tb-l30", "tb-l31", "tb-l32"] });
}

Object.assign(TB_LESSONS, {
  /* ————— Leçon 29 ————— */
  "tb-l29": {
    "unit": 8,
    "no": "Leçon 29",
    "title": "Enfant de la ville 城里的孩子",
    "text": [
      {
        "fr": "Toutes les semaines, Musik demande à un fan de parler de son artiste préféré. Cette semaine, Thomas, fan de Grand Corps Malade, nous parle de l'enfance de l'artiste.",
        "zh": "每周，《穆斯基》都会邀请一位粉丝谈论自己最喜欢的歌手。本周，「高大病体」的粉丝托马向我们讲述这位歌手的童年。"
      },
      {
        "fr": "Grand Corps Malade vient de sortir un nouvel album de slam, Enfant de la ville.",
        "zh": "「高大病体」刚刚推出了一张新的诗喃（slam）专辑《城里的孩子》。"
      },
      {
        "fr": "— Thomas, vous aimez Grand Corps Malade ?",
        "zh": "——托马，你喜欢「高大病体」吗？"
      },
      {
        "fr": "— Oui ! J'adore cet artiste et je le connais bien.",
        "zh": "——是的！我非常喜欢这位歌手，也很了解他。"
      },
      {
        "fr": "— Alors, parlez-nous de son enfance.",
        "zh": "——那么，请给我们讲讲他的童年。"
      },
      {
        "fr": "— Il a passé une enfance heureuse, dans les années 1970 et 1980.",
        "zh": "——他在 20 世纪 70 年代和 80 年代度过了一个快乐的童年。"
      },
      {
        "fr": "— C'était une belle époque pour lui.",
        "zh": "——对他来说，那是一段美好的时光。"
      },
      {
        "fr": "— Où est-ce qu'il habitait ?",
        "zh": "——他那时住在哪里？"
      },
      {
        "fr": "— Il habitait avec ses parents à Saint-Denis, au nord de Paris.",
        "zh": "——他和父母住在巴黎北部的圣但尼。"
      },
      {
        "fr": "— Cet enfant de la ville, c'était un peu lui, alors ?",
        "zh": "——那么，这个「城里的孩子」有点儿就是他本人啰？"
      },
      {
        "fr": "— Oui, c'est un peu lui, je pense.",
        "zh": "——是的，我觉得有点儿像他。"
      },
      {
        "fr": "— Qu'est-ce qu'il voulait faire comme profession, quand il était petit ?",
        "zh": "——他小时候想做什么职业？"
      },
      {
        "fr": "— Il aimait beaucoup le foot, le tennis et surtout le basket. Alors, il voulait être prof de sport.",
        "zh": "——他非常喜欢足球、网球，尤其是篮球。所以他当时想成为一名体育老师。"
      },
      {
        "fr": "— Quel type d'enfant est-ce qu'il était ?",
        "zh": "——他是个什么类型的孩子？"
      },
      {
        "fr": "— Il était assez calme... sportif, bien sûr. Tous les jours, il passait des heures avec ses copains. Il écoutait beaucoup de chansons — Brassens, Renaud... — et il écrivait des textes… Il adorait aussi raconter des histoires.",
        "zh": "——他挺安静的……当然，也很爱运动。他每天都和伙伴们待上好几个小时。他听很多歌——布拉森斯、雷诺……——还写歌词……他也非常喜欢讲故事。"
      },
      {
        "fr": "— Aujourd'hui, il s'appelle Grand Corps Malade. Mais, petit, est-ce qu'il avait un petit nom particulier ?",
        "zh": "——如今他叫「高大病体」。不过小时候，他有没有什么特别的小名？"
      },
      {
        "fr": "— Oh ! oui ! Sa mère l'appelait « petit chaton bleu »... Parce qu'il a les yeux bleus.",
        "zh": "——哦，有的！他妈妈叫他「小蓝猫」……因为他的眼睛是蓝色的。"
      }
    ],
    "vocab": [
      {
        "fr": "album",
        "pos": "n.m.",
        "g": "m",
        "zh": "影集，集邮册，纪念册；唱片集"
      },
      {
        "fr": "article",
        "pos": "n.m.",
        "g": "m",
        "zh": "（报刊）文章"
      },
      {
        "fr": "basket",
        "pos": "n.m.",
        "g": "m",
        "zh": "篮球；篮球运动（basket-ball 的缩写形式）"
      },
      {
        "fr": "chanson",
        "pos": "n.f.",
        "g": "f",
        "zh": "歌曲"
      },
      {
        "fr": "chaton",
        "pos": "n.m.",
        "g": "m",
        "zh": "小猫"
      },
      {
        "fr": "comme",
        "pos": "conj.",
        "zh": "作为，以……身份；当做；如同；好像"
      },
      {
        "fr": "corps",
        "pos": "n.m.",
        "g": "m",
        "zh": "身体"
      },
      {
        "fr": "demander",
        "pos": "v.t.",
        "zh": "请求，要求"
      },
      {
        "fr": "demander à qn de faire qch.",
        "pos": "loc.v.",
        "zh": "要求某人做某事"
      },
      {
        "fr": "enfance",
        "pos": "n.f.",
        "g": "f",
        "zh": "童年"
      },
      {
        "fr": "époque",
        "pos": "n.f.",
        "g": "f",
        "zh": "时代；时期"
      },
      {
        "fr": "fan",
        "pos": "n.",
        "zh": "粉丝，歌迷，影迷"
      },
      {
        "fr": "grand-mère (pl. grands-mères)",
        "pos": "n.f.",
        "g": "f",
        "zh": "（外）祖母"
      },
      {
        "fr": "grand-père (pl. grands-pères)",
        "pos": "n.m.",
        "g": "m",
        "zh": "（外）祖父"
      },
      {
        "fr": "heureux (euse)",
        "pos": "adj.",
        "zh": "快乐的"
      },
      {
        "fr": "interview",
        "pos": "n.f.",
        "g": "f",
        "zh": "采访，访谈"
      },
      {
        "fr": "jouet",
        "pos": "n.m.",
        "g": "m",
        "zh": "玩具"
      },
      {
        "fr": "malade",
        "pos": "adj.",
        "zh": "生病的"
      },
      {
        "fr": "parents",
        "pos": "n.m.pl.",
        "g": "m",
        "zh": "父母"
      },
      {
        "fr": "parler",
        "pos": "v.t.ind.",
        "zh": "谈，谈论，议论"
      },
      {
        "fr": "parler de qn / qch.",
        "pos": "loc.v.",
        "zh": "谈到某人/某事，议论某人/某事"
      },
      {
        "fr": "parler à qn",
        "pos": "loc.v.",
        "zh": "对某人说话"
      },
      {
        "fr": "parler de … à qn",
        "pos": "loc.v.",
        "zh": "同某人谈……"
      },
      {
        "fr": "particulier (ère)",
        "pos": "adj.",
        "zh": "特殊的；个人的；独特的"
      },
      {
        "fr": "prof",
        "pos": "n.",
        "zh": "（俗）教师；教授（professeur 的缩写形式）"
      },
      {
        "fr": "profession",
        "pos": "n.f.",
        "g": "f",
        "zh": "职业"
      },
      {
        "fr": "quand",
        "pos": "conj.",
        "zh": "当……时"
      },
      {
        "fr": "remercier",
        "pos": "v.t.",
        "zh": "感谢"
      },
      {
        "fr": "slam",
        "pos": "n.m.",
        "g": "m",
        "zh": "诗喃（一种说唱音乐形式）"
      },
      {
        "fr": "sortir",
        "pos": "v.i.",
        "zh": "出版，发表（复合过去时中助动词用 avoir）"
      },
      {
        "fr": "sportif (ive)",
        "pos": "adj.",
        "zh": "从事体育运动的，爱好体育运动的"
      },
      {
        "fr": "texte",
        "pos": "n.m.",
        "g": "m",
        "zh": "歌词（与音乐相对）；文本"
      }
    ],
    "grammar": [
      {
        "t": "L'imparfait 未完成过去时：构成与变位",
        "d": "未完成过去时表示在过去某个起止点不明确的时间段内延续的动作或持续的状态。<br><b>构成<\/b>：直陈式现在时第一人称复数去掉词尾 <b>-ons<\/b>，再依次加上 <b>-ais, -ais, -ait, -ions, -iez, -aient<\/b>。<br>parler：je parlais / tu parlais / il, elle parlait / nous parlions / vous parliez / ils, elles parlaient；<br>finir：je finissais / tu finissais / il, elle finissait / nous finissions / vous finissiez / ils, elles finissaient；<br>prendre：je prenais / tu prenais / il, elle prenait / nous prenions / vous preniez / ils, elles prenaient。<br><b>être<\/b>：j'étais / tu étais / il, elle était / nous étions / vous étiez / ils, elles étaient；<br><b>avoir<\/b>：j'avais / tu avais / il, elle avait / nous avions / vous aviez / ils, elles avaient。<br><b>特殊拼写<\/b>：commencer → je commençais, nous commencions；manger → je mangeais, nous mangions；étudier → j'étudiais, nous étudiions；voir → je voyais, nous voyions；envoyer → j'envoyais, nous envoyions；faire → je faisais [fəzɛ], nous faisions [fəzjɔ̃]。"
      },
      {
        "t": "L'imparfait 的用法：状态与习惯（Savoir dire）",
        "d": "① <b>描述过去的状态<\/b>：<b>Il était<\/b> assez calme et sportif. 他相当安静，当然也很爱运动。<br>② <b>描述过去的习惯<\/b>：<b>Tous les jours, il passait<\/b> des heures avec ses copains. 每天他都要和伙伴们待上好几个小时。<br>③ 结合 Notes：Il écoutait beaucoup de chansons et il écrivait des textes. 他听很多歌，还写歌词。<br>试比较：Il a passé une enfance heureuse.（复合过去时，陈述已完成的事实）；Il passait des heures avec ses copains.（未完成过去时，描述习惯）。"
      },
      {
        "t": "Le passé récent 最近过去时：venir de + 不定式",
        "d": "<b>构成<\/b>：venir 的直陈式现在时 + <b>de<\/b> + 动词不定式，表示「刚刚、不久前做了某事」。<br><b>Il vient de sortir<\/b> un nouvel album. 他刚刚推出了一张新专辑。<br><b>Je viens de rentrer<\/b> en Chine. 我刚刚回到中国。<br><b>Elle vient de finir<\/b> son travail. 她刚刚完成工作。<br>按语境可译为「刚……」「才……」，强调动作与现在时间距离很近。"
      },
      {
        "t": "parler 的用法小结（Notes 注释）",
        "d": "<b>parler<\/b> 是不及物动词，常借助介词引出对象：<br>① <b>parler à qn<\/b> 对某人说话：Sophie est là ? Je veux <b>lui parler<\/b>. 苏菲在吗？我想和她说话。<br>② <b>parler de qn / qch.<\/b> 谈到某人/某事：Son enfance, il n'<b>en parle<\/b> jamais. 他的童年，他从来不谈。<br>③ <b>parler de … à qn<\/b> 同某人谈……：Le professeur veut <b>parler de cet accident aux parents<\/b>. 老师想和家长谈谈这次事故。<br>④ <b>parler + 语言<\/b>（作及物用）：Il sait <b>parler<\/b> français et espagnol. 他会讲法语和西班牙语。"
      }
    ],
    "say": [
      {
        "title": "Rapporter un événement récent 讲述最近发生的事件",
        "items": [
          {
            "fr": "Il vient de sortir un nouvel album.",
            "zh": "他刚刚推出了一张新专辑。"
          },
          {
            "fr": "Je viens de rentrer en Chine.",
            "zh": "我刚刚回到中国。"
          }
        ]
      },
      {
        "title": "Rapporter des états et des habitudes passés 描述过去的状态和习惯",
        "items": [
          {
            "fr": "Il était assez calme et sportif.",
            "zh": "他相当安静，也很爱运动。"
          },
          {
            "fr": "Tous les jours, il passait des heures avec ses copains.",
            "zh": "每天他都要和伙伴们待上好几个小时。"
          }
        ]
      },
      {
        "title": "Parler de son enfance 谈论童年（Communiquez）",
        "items": [
          {
            "fr": "Qu'est-ce que vous vouliez faire plus tard, quand vous étiez petit(e) ?",
            "zh": "您小时候长大后想做什么？"
          },
          {
            "fr": "Quel type d'enfant est-ce que vous étiez ?",
            "zh": "您以前是个什么类型的孩子？"
          },
          {
            "fr": "Où est-ce que vous habitiez ?",
            "zh": "您以前住在哪里？"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 30 ————— */
  "tb-l30": {
    "unit": 8,
    "no": "Leçon 30",
    "title": "Fait divers 社会杂闻",
    "text": [
      {
        "fr": "— Sud Radio... Il est midi. Les nouvelles du jour. Michel Rebourd.",
        "zh": "——这里是南方电台……现在是中午十二点。今日新闻。米歇尔·勒布尔。"
      },
      {
        "fr": "— Bonjour. Un terrible accident vient de se passer sur l'autoroute A9, à côté de Nîmes, entre un camion et cinq voitures : il y a onze blessés.",
        "zh": "——您好。尼姆附近的 A9 高速公路上刚刚发生了一起严重的交通事故，一辆卡车和五辆小汽车相撞，造成 11 人受伤。"
      },
      {
        "fr": "— Sur place, notre journaliste, Jérôme Duchamp...",
        "zh": "——我们的记者热罗姆·迪尚正在事故现场……"
      },
      {
        "fr": "— Oui, bonjour, Michel.",
        "zh": "——是的，您好，米歇尔。"
      },
      {
        "fr": "— Alors voilà, je viens d'arriver sur l'autoroute A9, sur les lieux de l'accident et j'ai devant moi Aline Besson.",
        "zh": "——是这样，我刚刚到达 A9 高速公路的事故现场，站在我面前的是阿琳·贝松女士。"
      },
      {
        "fr": "— Quand l'accident est arrivé, Mme Besson traversait, à vélo, un pont au-dessus de l'autoroute.",
        "zh": "——事故发生时，贝松女士正骑着自行车从高速公路上方的一座桥上经过。"
      },
      {
        "fr": "— Et elle a tout vu. Alors, madame, qu'est-ce qui s'est passé exactement ?",
        "zh": "——她目睹了全过程。那么，女士，究竟发生了什么？"
      },
      {
        "fr": "— Eh bien... Comme tous les matins, je traversais le pont et alors... j'ai vu un camion se coucher sur la route.",
        "zh": "——嗯……像每天早上一样，我正在过桥，这时……我看到一辆卡车翻倒在公路上。"
      },
      {
        "fr": "— Des voitures suivaient le camion.",
        "zh": "——几辆小汽车跟在卡车后面。"
      },
      {
        "fr": "— Elles ont voulu s'arrêter mais elles roulaient trop vite, je pense.",
        "zh": "——它们想停下来，但我觉得车速太快了。"
      },
      {
        "fr": "— Et, en plus, il venait de pleuvoir, la route était glissante...",
        "zh": "——而且，刚刚下过雨，路面很滑……"
      },
      {
        "fr": "— Une première voiture a heurté le camion, et puis une deuxième, une troisième.",
        "zh": "——第一辆车撞上了卡车，接着是第二辆、第三辆。"
      },
      {
        "fr": "— J'étais terrifiée. Vraiment !",
        "zh": "——我吓坏了。真的！"
      }
    ],
    "vocab": [
      {
        "fr": "accident",
        "pos": "n.m.",
        "g": "m",
        "zh": "事故"
      },
      {
        "fr": "arriver",
        "pos": "v.i.",
        "zh": "到达，抵达；来临，来到；发生"
      },
      {
        "fr": "au-dessus de",
        "pos": "loc.prép.",
        "zh": "在……的上面，在……之上"
      },
      {
        "fr": "autoroute",
        "pos": "n.f.",
        "g": "f",
        "zh": "高速公路"
      },
      {
        "fr": "blessé(e)",
        "pos": "adj.",
        "zh": "受伤的；n. 伤者"
      },
      {
        "fr": "camion",
        "pos": "n.m.",
        "g": "m",
        "zh": "卡车"
      },
      {
        "fr": "circonstance",
        "pos": "n.f.",
        "g": "f",
        "zh": "情形，环境"
      },
      {
        "fr": "du jour",
        "pos": "loc.",
        "zh": "当天的，当日的"
      },
      {
        "fr": "en plus [plys]",
        "pos": "loc.adv.",
        "zh": "并且，而且"
      },
      {
        "fr": "fait",
        "pos": "n.m.",
        "g": "m",
        "zh": "事情，事件，情况，轶闻"
      },
      {
        "fr": "fait divers",
        "pos": "loc.",
        "zh": "杂闻，社会新闻"
      },
      {
        "fr": "glissant(e)",
        "pos": "adj.",
        "zh": "滑的"
      },
      {
        "fr": "heurter",
        "pos": "v.t.",
        "zh": "碰撞"
      },
      {
        "fr": "journaliste",
        "pos": "n.",
        "zh": "新闻工作者，新闻记者"
      },
      {
        "fr": "midi",
        "pos": "n.m.",
        "g": "m",
        "zh": "中午，正午"
      },
      {
        "fr": "Nîmes",
        "pos": "n.pr.",
        "zh": "尼姆（法国）"
      },
      {
        "fr": "nouvelle",
        "pos": "n.f.",
        "g": "f",
        "zh": "新闻，消息"
      },
      {
        "fr": "passer(se)",
        "pos": "v.pr.",
        "zh": "发生，经过（主语多为事件）"
      },
      {
        "fr": "pleuvoir",
        "pos": "v.impers.",
        "zh": "下雨"
      },
      {
        "fr": "radio",
        "pos": "n.f.",
        "g": "f",
        "zh": "无线电广播；无线电广播电台"
      },
      {
        "fr": "reportage",
        "pos": "n.m.",
        "g": "m",
        "zh": "报道"
      },
      {
        "fr": "rouler",
        "pos": "v.i.",
        "zh": "（车辆等）行驶"
      },
      {
        "fr": "route",
        "pos": "n.f.",
        "g": "f",
        "zh": "道路，公路，大路"
      },
      {
        "fr": "suivre",
        "pos": "v.t.",
        "zh": "跟随"
      },
      {
        "fr": "sur place",
        "pos": "loc.",
        "zh": "就地，原地，现场"
      },
      {
        "fr": "terrible",
        "pos": "adj.",
        "zh": "可怕的，骇人的"
      },
      {
        "fr": "terrifié(e)",
        "pos": "adj.",
        "zh": "吓坏了的"
      },
      {
        "fr": "vite",
        "pos": "adv.",
        "zh": "快速地"
      }
    ],
    "grammar": [
      {
        "t": "Les emplois de l'imparfait 未完成过去时的用法",
        "d": "① 表示在过去某个起止点不明确的时间段内延续的动作或持续的状态，不知何时开始、何时结束。<br>② 由于未完成过去时具有「延续性」，常用来交代故事背景、描写动作发生时的氛围、刻画人物的思想或精神状态：<br><b>La route était<\/b> très glissante. （当时）路很滑。<b>Elle portait<\/b> une robe bleue. 她穿着一条蓝裙子。<br><b>Il faisait<\/b> très froid, elle a mis un manteau. 天气很冷，她穿了一件大衣。<b>À ce moment-là, j'étais<\/b> terrifiée ! 那一刻，我吓坏了！<br>③ 也常用来描写经常性、反复发生的动作或习惯性活动：<br><b>Ce jour-là, comme d'habitude, je traversais<\/b> le pont. 那天，像平常一样，我从桥上经过。<br><b>Avant, je prenais<\/b> un café tous les matins. 以前我每天早上都喝一杯咖啡。<br><b>Quand j'étais<\/b> petit, je <b>me levais<\/b> toujours très tôt. 我小时候总是起得很早。"
      },
      {
        "t": "Le passé composé et l'imparfait 复合过去时与未完成过去时",
        "d": "<b>复合过去时<\/b>：动作已经完成，有确切的时间终点；在叙事中用于交代特定时间内一次性发生并已完成的动作和事件。<br><b>未完成过去时<\/b>：动作没有完成，强调延续性或重复性，没有明确的时间终点；用于描述事件发生的背景，描写人物的外表和内心世界。<br><b>Elle traversait<\/b> le pont quand l'accident <b>est arrivé<\/b>. 事故发生时，她正从桥上经过。<br><b>Il a pris<\/b> un parapluie parce qu'il <b>pleuvait<\/b>. 他拿了一把伞，因为当时在下雨。<br><b>Elle avait<\/b> 20 ans quand elle <b>s'est mariée<\/b> avec Pierre. 她和皮埃尔结婚时 20 岁。"
      },
      {
        "t": "qu'est-ce qui... 与 arriver / se passer（Notes 2、3）",
        "d": "<b>qu'est-ce qui<\/b> 作主语，提问「什么东西、什么事情」：<b>Qu'est-ce qui<\/b> fait ce bruit ? 什么东西发出这种声音？<b>Qu'est-ce qui<\/b> vous est arrivé ? 您出什么事了？<br><b>arriver<\/b> 表示「发生」，主语通常为事件；若事件发生在某人身上，用间接宾语人称代词代替 à qn：<b>Cela ne m'est jamais arrivé.<\/b> 这种事我从来没遇到过。<br><b>se passer<\/b> 表示「发生」：Qu'est-ce qui s'est passé exactement ? 究竟发生了什么？"
      },
      {
        "t": "comme 引导比较与 en plus 表示补充（Notes 4、5）",
        "d": "<b>comme<\/b> 引导比较，表示「像……一样」：<b>Comme tous les matins<\/b>, je traversais le pont. 像每天早上一样，我从桥上经过。<br>常见搭配：comme d'habitude 像平常一样、rapide comme l'éclair 如闪电般迅速、comme prévu 如期。<br><b>en plus<\/b> 表示对前面内容的补充或意思更进一步：<b>En plus<\/b>, il venait de pleuvoir. 而且，刚刚下过雨。<br>La montagne était haute, et <b>en plus<\/b>, escarpée. 山很高，而且还很陡。<br>注意 <b>venir de + 不定式<\/b> 表示「刚刚（在不久前）发生」，venir 本身用未完成过去时，强调在过去某一时点之前刚发生的事。"
      }
    ],
    "say": [
      {
        "title": "Rapporter des événements passés 叙述过去发生的事件",
        "items": [
          {
            "fr": "J'ai vu un camion se coucher sur la route.",
            "zh": "我看到一辆卡车翻倒在公路上。"
          },
          {
            "fr": "Une première voiture a heurté le camion, et puis une deuxième, une troisième.",
            "zh": "第一辆车撞上了卡车，接着是第二辆、第三辆。"
          }
        ]
      },
      {
        "title": "Décrire les circonstances d'une action 描述动作发生的背景",
        "items": [
          {
            "fr": "Quand l'accident est arrivé, la route était glissante.",
            "zh": "事故发生时，路面很滑。"
          },
          {
            "fr": "Comme tous les matins, je traversais le pont.",
            "zh": "像每天早上一样，我当时正在过桥。"
          },
          {
            "fr": "J'étais terrifiée.",
            "zh": "我吓坏了。"
          }
        ]
      },
      {
        "title": "Raconter un fait divers ou un vol 讲述社会新闻或失窃经过（Communiquez）",
        "items": [
          {
            "fr": "Qu'est-ce qui s'est passé exactement ?",
            "zh": "究竟发生了什么？"
          },
          {
            "fr": "On vous a volé votre sac / votre voiture... Racontez ce qui s'est passé et les circonstances du vol.",
            "zh": "您的包/车被偷了……请讲述事情经过和失窃时的情形。"
          },
          {
            "fr": "Écoutez les trois témoignages. Quel témoignage est correct ?",
            "zh": "听三段证词，哪一段是正确的？"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 31 ————— */
  "tb-l31": {
    "unit": 8,
    "no": "Leçon 31",
    "title": "Ma première histoire d'amour 我的初恋故事",
    "text": [
      {
        "fr": "Aujourd'hui, vous le savez tous, c'est le 14 février, la Saint-Valentin, la fête de l'amour, de tous les amoureux !",
        "zh": "众所周知，今天是 2 月 14 日，情人节，属于爱情、属于所有恋爱中人们的节日！"
      },
      {
        "fr": "Ah ! l'amour ! Mais est-ce que vous vous souvenez de votre première histoire d'amour ?",
        "zh": "啊，爱情！不过，你们还记得自己的初恋故事吗？"
      },
      {
        "fr": "1 Ma première histoire d'amour ? Oh ! là, là !... Ah ! oui, j'avais quinze ans et j'étais en vacances en Irlande pour apprendre l'anglais.",
        "zh": "1 我的初恋？哎呀！哦，对了，那时我 15 岁，正在爱尔兰度假学习英语。"
      },
      {
        "fr": "Il s'appelait Tom, il était grand, il était blond, il était très beau !",
        "zh": "他叫汤姆，个子高高的，一头金发，特别帅！"
      },
      {
        "fr": "2 Ah oui, je me souviens très bien. Aujourd'hui, c'est ma femme.",
        "zh": "2 啊，是的，我记得很清楚。如今她是我的妻子。"
      },
      {
        "fr": "Nous nous sommes rencontrés dans le train Paris-Bordeaux. C'était en 2000, j'avais vingt ans.",
        "zh": "我们是在巴黎—波尔多的火车上相遇的。那是在 2000 年，我当时 20 岁。"
      },
      {
        "fr": "Elle, elle en avait vingt-deux. Et notre premier bébé est né cinq ans plus tard.",
        "zh": "她呢，22 岁。五年后我们的第一个孩子出生了。"
      },
      {
        "fr": "3 J'avais huit ans. Il s'appelait Mathieu et, dans la classe, c'était mon voisin.",
        "zh": "3 那时我 8 岁。他叫马蒂厄，在班里是我的同桌。"
      },
      {
        "fr": "J'ai été très amoureuse de lui de 94 à... 96. Eh oui ! jusqu'en 96 ! Deux ans !",
        "zh": "从 94 年到……96 年，我一直非常迷恋他。没错，一直到 96 年！两年呢！"
      },
      {
        "fr": "Après, il est allé dans une autre école...",
        "zh": "后来，他转到另一所学校去了……"
      },
      {
        "fr": "4 Mon premier amour ? Ah ! oui, bien sûr ! J'allais tous les ans chez ma grand-mère pour passer les vacances.",
        "zh": "4 我的初恋？啊，是的，当然啦！以前我每年都去祖母家度假。"
      },
      {
        "fr": "Mais, à partir de seize ans, je suis parti avec des copains, à la mer.",
        "zh": "不过从 16 岁起，我就和伙伴们一起去海边了。"
      },
      {
        "fr": "Et là, un été, j'ai rencontré Lou... C'était en 85.",
        "zh": "就在那儿，有一年夏天，我遇到了露……那是在 85 年。"
      }
    ],
    "vocab": [
      {
        "fr": "amour",
        "pos": "n.m.",
        "g": "m",
        "zh": "爱，爱情"
      },
      {
        "fr": "amoureux(euse)",
        "pos": "adj.",
        "zh": "恋爱中的；爱情的"
      },
      {
        "fr": "à partir de",
        "pos": "loc.prép.",
        "zh": "从……起（表示时间或空间的起点）"
      },
      {
        "fr": "apprendre",
        "pos": "v.t.",
        "zh": "学习"
      },
      {
        "fr": "casting",
        "pos": "n.m.",
        "g": "m",
        "zh": "试镜，角色分配，挑选演员"
      },
      {
        "fr": "été",
        "pos": "n.m.",
        "g": "m",
        "zh": "夏天"
      },
      {
        "fr": "histoire",
        "pos": "n.f.",
        "g": "f",
        "zh": "故事"
      },
      {
        "fr": "Irlande",
        "pos": "n.f.",
        "g": "f",
        "zh": "爱尔兰"
      },
      {
        "fr": "jupe",
        "pos": "n.f.",
        "g": "f",
        "zh": "裙子"
      },
      {
        "fr": "rencontrer",
        "pos": "v.t.",
        "zh": "遇见"
      },
      {
        "fr": "se rencontrer",
        "pos": "v.pr.",
        "zh": "相遇"
      },
      {
        "fr": "souvenir(se)",
        "pos": "v.pr.",
        "zh": "记得，忆及，想起；记住，记着"
      },
      {
        "fr": "voisin(e)",
        "pos": "adj.",
        "zh": "相邻的，邻近的；n. 邻居，邻座的人"
      }
    ],
    "grammar": [
      {
        "t": "Situer dans le temps (1)：表示具体时刻（Le moment）",
        "d": "<b>à<\/b> + 时刻：Je me lève <b>à 7 heures<\/b> du matin. 我早上七点起床。<br><b>le<\/b> + 日期：Aujourd'hui, c'est <b>le 14 juillet<\/b>. 今天是 7 月 14 日。<br><b>en<\/b> + 月份/年份：J'ai rencontré Alice <b>en septembre<\/b> (au mois de septembre). 我九月份遇到了爱丽丝。On est <b>en 2012<\/b>. 现在是 2012 年。<br><b>... plus tard<\/b> 表示「……以后」：Notre premier bébé est né <b>cinq ans plus tard<\/b>. 五年后我们的第一个孩子出生了。<br><b>à partir de<\/b> 表示「从……起」：J'apprends l'anglais <b>à partir de 6 ans<\/b>. 我从六岁起开始学英语。"
      },
      {
        "t": "Situer dans le temps (2)：表示持续时间（La durée）",
        "d": "<b>de... à...<\/b> 表示「从……到……」：Il a travaillé à Paris <b>de 2000 à 2010<\/b>. 他从 2000 年到 2010 年在巴黎工作。<br><b>jusqu'en / jusqu'à<\/b> 表示「直到……」：J'ai travaillé chez Renault <b>jusqu'en 2008<\/b>. 我在雷诺公司工作到 2008 年。<br><b>pendant<\/b> 表示「持续……之久」：Nous sommes restés à Tokyo <b>pendant 10 jours<\/b>. 我们在东京停留了 10 天。<br> Notes 提示：「一段时间 + plus tard / après」表示从过去某一点开始，一段时间之后；「dans + 一段时间」表示从说话当下算起，一段时间之后：Les invités vont arriver <b>dans cinq minutes<\/b>. 客人们再过五分钟就到了。"
      },
      {
        "t": "Exprimer le but 表示目的：pour",
        "d": "介词 <b>pour<\/b> 引导状语，可以表示目的、目标。<br>① <b>pour + 名词<\/b>：Il travaille <b>pour le plaisir<\/b>. 他为了乐趣而工作。Elle lutte <b>pour la liberté<\/b>. 她为自由而斗争。<br>② <b>pour + 动词不定式<\/b>：Je vais à Paris <b>pour apprendre<\/b> le français. 我去巴黎是为了学法语。Nous travaillons beaucoup <b>pour réussir<\/b>. 我们为了成功而努力工作。<br>课文例：J'allais chez ma grand-mère <b>pour passer<\/b> les vacances. 我以前每年去祖母家是为了度假。"
      },
      {
        "t": "se souvenir de 与 être amoureux de（Notes 2、4）",
        "d": "<b>se souvenir de qn / qch.<\/b> 记得、想起某人/某事（代词式动词，介词 de 不可省略）：<br>Je <b>me souviens très bien de<\/b> cette jeune fille. 我很清楚地记得这个女孩。<b>Vous vous souvenez de<\/b> notre rencontre ? 您还记得我们的相遇吗？<br>宾语若为人，可用重读人称代词：Son premier petit ami, elle <b>se souvient toujours de lui<\/b>. 她的第一个男朋友，她一直记得他。若为事物，用副代词 en：Mon enfance, je <b>m'en souviens<\/b> très bien. 我的童年，我记得很清楚。<br><b>être amoureux (de qn / qch.)<\/b> 爱上某人/某物（强调状态）：Il est follement <b>amoureux de<\/b> Marguerite. 他疯狂地爱着玛格丽特。Elle est <b>amoureuse de<\/b> la photo depuis son enfance. 她从小就热爱摄影。"
      }
    ],
    "say": [
      {
        "title": "Situer des événements dans le temps 在时间中定位事件",
        "items": [
          {
            "fr": "— C'est le 14 février.",
            "zh": "——今天是 2 月 14 日。"
          },
          {
            "fr": "— C'était en 2000.",
            "zh": "——那是在 2000 年。"
          },
          {
            "fr": "— Notre premier bébé est né cinq ans plus tard.",
            "zh": "——我们的第一个孩子五年后出生。"
          }
        ]
      },
      {
        "title": "Exprimer le but 表达目的",
        "items": [
          {
            "fr": "J'allais chez ma grand-mère pour passer les vacances.",
            "zh": "我以前去祖母家是为了度假。"
          },
          {
            "fr": "Il travaille pour le plaisir.",
            "zh": "他为了乐趣而工作。"
          },
          {
            "fr": "Je vais à Paris pour apprendre le français.",
            "zh": "我去巴黎是为了学法语。"
          }
        ]
      },
      {
        "title": "Raconter sa première fois 讲述自己的「第一次」（Communiquez）",
        "items": [
          {
            "fr": "Racontez votre première histoire d'amour.",
            "zh": "讲述您的初恋故事。"
          },
          {
            "fr": "Racontez vos premières vacances.",
            "zh": "讲述您第一次度假的经历。"
          },
          {
            "fr": "Racontez votre premier voyage en train ou en avion.",
            "zh": "讲述您第一次坐火车或飞机的旅行。"
          },
          {
            "fr": "Racontez votre premier jour d'école.",
            "zh": "讲述您第一天上学的经历。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 32 ————— */
  "tb-l32": {
    "unit": 8,
    "no": "Leçon 32",
    "title": "La 2CV 两马力车",
    "text": [
      {
        "fr": "Elle s'est d'abord appelée la TPV, la Toute Petite Voiture.",
        "zh": "它最初叫 TPV，即「超小车」（la Toute Petite Voiture）。"
      },
      {
        "fr": "Eh oui ! Et puis, plus tard, la 2CV. Aujourd'hui, en France, tout le monde l'appelle la « deudeuche ».",
        "zh": "没错！后来又成了 2CV。如今在法国，大家都把它叫作「deudeuche」。"
      },
      {
        "fr": "Elle est célèbre dans tous les pays du monde. Mais est-ce que vous connaissez son histoire ?",
        "zh": "它闻名于世界各国。可是，您了解它的历史吗？"
      },
      {
        "fr": "Quatre roues sous un parapluie",
        "zh": "雨伞下的四个轮子"
      },
      {
        "fr": "Tout a commencé en 1935.",
        "zh": "一切始于 1935 年。"
      },
      {
        "fr": "Pierre Boulanger, le directeur de Citroën, voulait sortir une nouvelle voiture, petite et pas chère : il a alors demandé de fabriquer « quatre roues sous un parapluie »…",
        "zh": "雪铁龙公司总经理皮埃尔·布朗热想推出一款小巧、便宜的新车：于是他要求制造「雨伞下的四个轮子」……"
      },
      {
        "fr": "Quatre ans plus tard, le 3 septembre 1939, la première 2CV est née…",
        "zh": "四年后，1939 年 9 月 3 日，第一辆 2CV 诞生了……"
      },
      {
        "fr": "Et, le 4 septembre, chez Citroën, on a tout arrêté ! C'était la guerre…",
        "zh": "可是，9 月 4 日，雪铁龙公司的一切都停了下来！战争爆发了……"
      },
      {
        "fr": "Finalement, on a présenté la nouvelle Citroën aux Français le 7 octobre… 1948.",
        "zh": "最终，这款新雪铁龙汽车于 1948 年 10 月 7 日才向法国人亮相……"
      },
      {
        "fr": "Et, à partir de là, la « deudeuche » a tout fait : elle a voyagé dans le monde, elle a travaillé pour la poste, elle a été taxi…",
        "zh": "从那以后，「deudeuche」什么活儿都干过：它走遍世界，为邮政部门效力，还当过出租车……"
      },
      {
        "fr": "Et elle a fait du cinéma ! Célèbre. Elle était célèbre !",
        "zh": "它甚至还拍过电影！有名，它可真有名！"
      },
      {
        "fr": "Jusqu'en 1990… Parce que, le 27 juillet 1990, on a arrêté de fabriquer la petite Citroën préférée des Français…",
        "zh": "一直到 1990 年……因为 1990 年 7 月 27 日，这款深受法国人喜爱的小雪铁龙停产了……"
      },
      {
        "fr": "Et aujourd'hui ? Eh bien, aujourd'hui, il existe un club, le Club des Amis de la 2CV.",
        "zh": "那今天呢？嗯，如今有一个俱乐部，叫作「2CV 之友俱乐部」。"
      },
      {
        "fr": "Et, tous les ans, ces amis de la « deudeuche » se rencontrent en France, en Finlande, en Hollande mais aussi dans d'autres pays du monde.",
        "zh": "每年，这些「deudeuche」的车友都会在法国、芬兰、荷兰以及世界上其他国家相聚。"
      }
    ],
    "vocab": [
      {
        "fr": "appeler",
        "pos": "v.t.",
        "zh": "称呼……为"
      },
      {
        "fr": "baguette",
        "pos": "n.f.",
        "g": "f",
        "zh": "法国长棍面包，法棍"
      },
      {
        "fr": "camembert",
        "pos": "n.m.",
        "g": "m",
        "zh": "卡芒贝尔奶酪"
      },
      {
        "fr": "célèbre",
        "pos": "adj.",
        "zh": "有名的，著名的"
      },
      {
        "fr": "champagne",
        "pos": "n.m.",
        "g": "m",
        "zh": "香槟酒"
      },
      {
        "fr": "cheval (pl. chevaux)",
        "pos": "n.m.",
        "g": "m",
        "zh": "马；［机］马力"
      },
      {
        "fr": "club",
        "pos": "n.m.",
        "g": "m",
        "zh": "（英）俱乐部，会，社"
      },
      {
        "fr": "construction",
        "pos": "n.f.",
        "g": "f",
        "zh": "建造，建筑；建筑物"
      },
      {
        "fr": "coq",
        "pos": "n.m.",
        "g": "m",
        "zh": "公鸡，雄鸡"
      },
      {
        "fr": "croissant",
        "pos": "n.m.",
        "g": "m",
        "zh": "羊角面包；月牙"
      },
      {
        "fr": "couture",
        "pos": "n.f.",
        "g": "f",
        "zh": "服装业，时装业"
      },
      {
        "fr": "haute couture",
        "pos": "loc.",
        "zh": "高档时装业"
      },
      {
        "fr": "deux-chevaux",
        "pos": "n.f.",
        "g": "f",
        "zh": "两马力的小汽车"
      },
      {
        "fr": "fabriquer",
        "pos": "v.t.",
        "zh": "制造，生产"
      },
      {
        "fr": "finalement",
        "pos": "adv.",
        "zh": "最终，终于"
      },
      {
        "fr": "Finlande",
        "pos": "n.f.",
        "g": "f",
        "zh": "芬兰"
      },
      {
        "fr": "guerre",
        "pos": "n.f.",
        "g": "f",
        "zh": "战争"
      },
      {
        "fr": "haut(e)",
        "pos": "adj.",
        "zh": "高的；高等的"
      },
      {
        "fr": "Hollande",
        "pos": "n.f.",
        "g": "f",
        "zh": "荷兰（非官方称谓）"
      },
      {
        "fr": "Marianne",
        "pos": "n.pr.",
        "zh": "玛丽安娜，法国的别称，共和国的象征"
      },
      {
        "fr": "octobre",
        "pos": "n.m.",
        "g": "m",
        "zh": "十月"
      },
      {
        "fr": "parapluie",
        "pos": "n.m.",
        "g": "m",
        "zh": "雨伞"
      },
      {
        "fr": "pays",
        "pos": "n.m.",
        "g": "m",
        "zh": "国家"
      },
      {
        "fr": "présenter",
        "pos": "v.t.",
        "zh": "展示；介绍"
      },
      {
        "fr": "roue",
        "pos": "n.f.",
        "g": "f",
        "zh": "轮子"
      },
      {
        "fr": "septembre",
        "pos": "n.m.",
        "g": "m",
        "zh": "九月"
      },
      {
        "fr": "sortir",
        "pos": "v.i.",
        "zh": "出产"
      },
      {
        "fr": "symbole",
        "pos": "n.m.",
        "g": "m",
        "zh": "象征，标志，符号"
      },
      {
        "fr": "taxi",
        "pos": "n.m.",
        "g": "m",
        "zh": "出租车"
      },
      {
        "fr": "tour",
        "pos": "n.f.",
        "g": "f",
        "zh": "塔，细高建筑物"
      }
    ],
    "grammar": [
      {
        "t": "用复合过去时叙述历史事件（本课无独立 GRAMMAIRE 框，据课文与 Notes 整理）",
        "d": "文章叙述 2CV 的历史，一次性发生并已完成的事件用<b>复合过去时<\/b>，并常与具体日期连用：<br><b>Tout a commencé<\/b> en 1935. 一切始于 1935 年。<b>La première 2CV est née<\/b> le 3 septembre 1939. 第一辆 2CV 于 1939 年 9 月 3 日诞生。<b>On a présenté<\/b> la nouvelle Citroën le 7 octobre 1948. 1948 年 10 月 7 日，新雪铁龙亮相。<br>而描写当时的背景、状态则用<b>未完成过去时<\/b>：<b>C'était<\/b> la guerre. 那是战争时期。<b>Elle était<\/b> célèbre ! 它很有名！<b>voulait<\/b> sortir une nouvelle voiture 想推出一款新车。"
      },
      {
        "t": "时间表达小结：en / le / à partir de / jusqu'en / plus tard",
        "d": "<b>en + 年份/月份<\/b>：Tout a commencé <b>en 1935<\/b>. 一切始于 1935 年。<br><b>le + 具体日期<\/b>：<b>le 3 septembre 1939<\/b>, <b>le 7 octobre 1948<\/b>, <b>le 27 juillet 1990<\/b>。<br><b>... plus tard<\/b> 表示「……之后」：<b>Quatre ans plus tard<\/b>, la première 2CV est née. 四年后，第一辆 2CV 诞生了。<br><b>à partir de là<\/b> 从那以后：<b>À partir de là<\/b>, la « deudeuche » a tout fait. 从那以后，「deudeuche」什么都干过。<br><b>jusqu'en + 年份<\/b> 直到……：<b>Jusqu'en 1990<\/b>… 一直到 1990 年……<br><b>tous les ans<\/b> 每年：<b>Tous les ans<\/b>, ces amis se rencontrent… 每年，这些车友都相聚……"
      },
      {
        "t": "appeler qn / qch. + 名称（Notes 1）",
        "d": "<b>appeler qn / qch. XXX<\/b> 表示「称某人或某物为 XXX」，其中 qn / qch. 是 appeler 的直接宾语，XXX 是宾语补语，用来补充说明宾语的名称。<br>Tout le monde <b>l'appelle la « deudeuche »<\/b>. 大家都把它叫作「deudeuche」。<br>Elle <b>s'est d'abord appelée la TPV<\/b>. 它最初叫 TPV。<br>本课标题 La 2CV 也常读作 <b>la deux-chevaux<\/b>（Notes 2）。"
      },
      {
        "t": "泛指代词 tout 与 faire du cinéma（Notes 3、4）",
        "d": "<b>tout<\/b> 作泛指代词，可作动词的直接宾语，意为「一切、所有的事情」；在复合过去时中，它位于<b>助动词和过去分词之间<\/b>：<br>chez Citroën, on a <b>tout<\/b> arrêté ! 在雪铁龙，一切都停了下来！la « deudeuche » a <b>tout<\/b> fait. 「deudeuche」什么都干过。<br><b>faire du + 活动类名词<\/b>：部分冠词用在表示职业、活动的名词前，表示从事该活动。<b>faire du cinéma<\/b> 指「拍电影、从事电影行业」；同类还有 faire du sport 做运动、faire de la musique 搞音乐。<br>文中把 2CV 当作人来描写（拟人）：elle a voyagé, elle a travaillé pour la poste, elle a été taxi, elle a fait du cinéma——表现这款车用途广泛、经历丰富。"
      }
    ],
    "say": [
      {
        "title": "Raconter l'histoire d'un objet 讲述一个事物的历史",
        "items": [
          {
            "fr": "Tout a commencé en 1935.",
            "zh": "一切始于 1935 年。"
          },
          {
            "fr": "Quatre ans plus tard, la première 2CV est née.",
            "zh": "四年后，第一辆 2CV 诞生了。"
          },
          {
            "fr": "Jusqu'en 1990... on a arrêté de fabriquer la petite Citroën.",
            "zh": "直到 1990 年……这款小雪铁龙停产了。"
          },
          {
            "fr": "Aujourd'hui, il existe un club, le Club des Amis de la 2CV.",
            "zh": "如今有一个「2CV 之友俱乐部」。"
          }
        ]
      },
      {
        "title": "Présenter les symboles de la France 介绍法国的标志（Communiquez）",
        "items": [
          {
            "fr": "le TGV, Marianne, la tour Eiffel, la baguette, la haute couture",
            "zh": "高速列车、玛丽安娜、埃菲尔铁塔、法棍面包、高级时装"
          },
          {
            "fr": "le champagne, le camembert, le tour de France, le croissant, le coq",
            "zh": "香槟、卡芒贝尔奶酪、环法自行车赛、羊角面包、雄鸡"
          },
          {
            "fr": "Avec votre voisin(e), choisissez vos trois symboles de la France.",
            "zh": "和邻座同学一起，选出你们心目中法国的三个标志。"
          }
        ]
      },
      {
        "title": "Raconter un souvenir ou un fait divers 讲述一段回忆或社会新闻（Savoir-faire）",
        "items": [
          {
            "fr": "Je me souviens, c'était en 2008.",
            "zh": "我记得，那是在 2008 年。"
          },
          {
            "fr": "Racontez le jour de votre mariage : où et comment s'est passée la journée ?",
            "zh": "讲述你结婚那天：婚礼在哪里举行、是怎么度过的？"
          },
          {
            "fr": "Racontez-nous votre premier souvenir de film au cinéma : où, quand, avec qui et quel était le film ?",
            "zh": "给我们讲讲你第一次在电影院看电影的记忆：在哪里、什么时候、和谁一起、看的是什么电影？"
          }
        ]
      }
    ]
  }
});
