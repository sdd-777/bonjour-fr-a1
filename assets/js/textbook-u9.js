/* =========================================================
   📚 《你好！法语 1》Unité 9 · Leçons 33–36（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 9)){
  TB_UNITS.push({ n: 9, title: "Unité 9 · On verra bien ! 走着瞧吧！", lessons: ["tb-l33", "tb-l34", "tb-l35", "tb-l36"] });
}

Object.assign(TB_LESSONS, {
  /* ————— Leçon 33 ————— */
  "tb-l33": {
    "unit": 9,
    "no": "Leçon 33",
    "title": "Beau fixe 持续晴天",
    "text": [
      {
        "fr": "— Tu peux allumer la radio, s'il te plaît ? Je vais en Bretagne demain et je veux savoir quel temps il fera.",
        "zh": "——请你把收音机打开好吗？我明天要去布列塔尼，我想知道那边天气怎么样。"
      },
      {
        "fr": "… Et maintenant, la météo de demain. Florence Arnaud.",
        "zh": "……下面是明天的天气预报。弗洛伦斯·阿尔诺。"
      },
      {
        "fr": "— Bonjour ! Vous habitez à Strasbourg ou à Lille ? Eh bien, demain, sortez vos parapluies !",
        "zh": "——您好！您住在斯特拉斯堡还是里尔？嗯，明天，把雨伞带上吧！"
      },
      {
        "fr": "Eh oui, il pleuvra toute la journée à l'est et au nord de la France.",
        "zh": "是啊，法国东部和北部将下上一整天雨。"
      },
      {
        "fr": "À l'ouest et au centre du pays, vous aurez du soleil le matin mais l'après-midi, attention : des nuages arriveront par la Bretagne et vous aurez peut-être un peu de pluie.",
        "zh": "在西部和中部，上午有阳光，但下午要注意：云会从布列塔尼过来，你们可能会下一点雨。"
      },
      {
        "fr": "Au sud, vous avez de la chance : le soleil brillera certainement toute la journée.",
        "zh": "南方的话，你们运气不错：太阳肯定会照耀一整天。"
      },
      {
        "fr": "Pour les températures, dans l'après-midi, il fera 15 degrés à Lille, 17 à Paris, 20 à Brest et à La Rochelle, 18 à Saint-Étienne et 23 à Marseille.",
        "zh": "至于气温，下午里尔 15 度，巴黎 17 度，布列斯特和拉罗谢尔 20 度，圣艾蒂安 18 度，马赛 23 度。"
      },
      {
        "fr": "Bonne journée !",
        "zh": "祝大家一天愉快！"
      },
      {
        "fr": "— Et voilà ! Oh non !",
        "zh": "——好了！哎呀，不会吧！"
      },
      {
        "fr": "— Mais ne t'inquiète pas ! Tu verras, je suis certain qu'il ne pleuvra pas.",
        "zh": "——别担心！你等着瞧，我肯定不会下雨。"
      },
      {
        "fr": "— Tu crois qu'il fera beau, toi ?",
        "zh": "——你觉得天气会晴吗？"
      },
      {
        "fr": "— Mais oui, j'en suis sûr...",
        "zh": "——当然啦，我确信……"
      }
    ],
    "vocab": [
      {
        "fr": "allumer",
        "pos": "v.t.",
        "zh": "点亮；（俗）打开（暖气、收音机、电视、电脑等）"
      },
      {
        "fr": "beau",
        "pos": "n.m.",
        "g": "m",
        "zh": "天气（好的天气）"
      },
      {
        "fr": "Brest",
        "pos": "n.pr.",
        "zh": "布列斯特（法国）"
      },
      {
        "fr": "Bretagne",
        "pos": "n.f.",
        "g": "f",
        "zh": "布列塔尼（法国西部省份，首府为雷恩 Rennes）"
      },
      {
        "fr": "briller",
        "pos": "v.i.",
        "zh": "发光，闪耀"
      },
      {
        "fr": "certain(e)",
        "pos": "adj.",
        "zh": "肯定的，一定的；确信无疑的"
      },
      {
        "fr": "certainement",
        "pos": "adv.",
        "zh": "肯定地，一定地；确实地，当然"
      },
      {
        "fr": "chance",
        "pos": "n.f.",
        "g": "f",
        "zh": "运气"
      },
      {
        "fr": "croire",
        "pos": "v.t.",
        "zh": "相信"
      },
      {
        "fr": "degré",
        "pos": "n.m.",
        "g": "m",
        "zh": "程度，度"
      },
      {
        "fr": "erreur",
        "pos": "n.f.",
        "g": "f",
        "zh": "错误"
      },
      {
        "fr": "fixe",
        "pos": "adj.",
        "zh": "固定的；长久的，持久的"
      },
      {
        "fr": "beau fixe",
        "pos": "loc.",
        "zh": "持续晴天"
      },
      {
        "fr": "inquiéter(s')",
        "pos": "v.pr.",
        "zh": "担心"
      },
      {
        "fr": "Lille",
        "pos": "n.pr.",
        "zh": "里尔（法国）"
      },
      {
        "fr": "météo",
        "pos": "n.f.",
        "g": "f",
        "zh": "气象预报（météorologie 的缩写）"
      },
      {
        "fr": "bulletin météo",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "天气预报"
      },
      {
        "fr": "nuage",
        "pos": "n.m.",
        "g": "m",
        "zh": "云"
      },
      {
        "fr": "pluie",
        "pos": "n.f.",
        "g": "f",
        "zh": "雨"
      },
      {
        "fr": "Rochelle (La)",
        "pos": "n.pr.",
        "zh": "拉罗谢尔（法国）"
      },
      {
        "fr": "Saint-Étienne",
        "pos": "n.pr.",
        "zh": "圣艾蒂安（法国）"
      },
      {
        "fr": "sortir",
        "pos": "v.i.",
        "zh": "拿出，取出"
      },
      {
        "fr": "Strasbourg",
        "pos": "n.pr.",
        "zh": "斯特拉斯堡（法国阿尔萨斯大区下莱茵省首府，欧洲议会所在地）"
      },
      {
        "fr": "sûr(e)",
        "pos": "adj.",
        "zh": "确信的，肯定的，有把握的"
      },
      {
        "fr": "température",
        "pos": "n.f.",
        "g": "f",
        "zh": "温度"
      },
      {
        "fr": "temps",
        "pos": "n.m.",
        "g": "m",
        "zh": "天气"
      }
    ],
    "grammar": [
      {
        "t": "Le futur simple 简单将来时：构成与变位",
        "d": "简单将来时表示未来的可能性或将来发生的动作、出现的状况。<br><b>构成<\/b>：根据人称顺序，在动词不定式后面分别加上词尾 <b>-ai, -as, -a, -ons, -ez, -ont<\/b>。<br>第一组 parler：je parlerai / tu parleras / il, elle parlera / nous parlerons / vous parlerez / ils, elles parleront；<br>第二组 finir：je finirai / tu finiras / il, elle finira / nous finirons / vous finirez / ils, elles finiront；<br>第三组 prendre：je prendrai / tu prendras / il, elle prendra / nous prendrons / vous prendrez / ils, elles prendront。<br><b>注意<\/b>：以 -re 结尾的第三组动词变简单将来时，要先去掉动词词尾字母 e 再加上述词尾，如 mettre → je mettrai, croire → ils croiront。"
      },
      {
        "t": "Le futur simple 简单将来时：不规则词干与用法",
        "d": "大多数第三组动词在简单将来时中词根有变化，但词尾仍用 -ai, -as, -a, -ons, -ez, -ont：<br>avoir → j'aurai；être → je serai；aller → j'irai；faire → je ferai；devoir → je devrai；pouvoir → je pourrai；savoir → je saurai；venir → je viendrai；voir → je verrai；vouloir → je voudrai；falloir → il faudra；pleuvoir → il pleuvra。<br><b>例句<\/b>：Il fera beau demain. 明天晴天。Elle viendra me voir ce week-end. 她这个周末来看我。J'enverrai cette lettre dans deux jours. 我两天后把这封信寄出去。"
      },
      {
        "t": "Quel temps fait-il ? 天气表达（无人称句）",
        "d": "表述天气多用<b>无人称句<\/b>：主语用无人称代词 <b>il<\/b>，仅有语法意义，不指代任何人和事物。<br>除了无人称动词 neiger（下雪）、pleuvoir（下雨），还常用 <b>faire<\/b> 作谓语动词，均按单数第三人称变位。<br>提问天气状况，疑问词用 <b>quel temps<\/b>：Quel temps fera-t-il demain ? 明天什么天气？<br>Il fait beau / mauvais. 天气晴朗／不好。Il pleuvra / neigera. 要下雨／下雪。Il fera du vent. 要刮风。Il fait du soleil. 阳光灿烂。Il fera très chaud / froid. 天气会很热／很冷。Il fera 15 degrés. 气温将是 15 度。"
      },
      {
        "t": "être certain / sûr 的用法与副代词 en（Notes 1、2）",
        "d": "<b>je veux savoir quel temps il fera<\/b>：savoir 的宾语是一个问题（quel temps il fera），即<b>间接疑问句<\/b>，疑问词之后的主语和谓语不必倒装。<br>形容词 <b>certain<\/b> 和 <b>sûr<\/b> 表示「确信的、肯定的」，有两种用法：<br>① <b>être certain (sûr) que + 从句<\/b>：Je suis certain qu'il réussira. 我确信他会成功。Tu es sûre qu'il fera beau ! 你肯定天气会晴！<br>② <b>être certain (sûr) de qch. / de faire qch.<\/b>：Nos clients sont certains de la qualité de nos produits. 顾客信得过我们产品的质量。Ils sont sûrs de gagner la partie. 他们确信会赢。<br>其中 de + 名词可用副代词 <b>en<\/b> 代替：Je crois qu'il fera beau demain. J'<b>en<\/b> suis certain (sûr). 明天是晴天，我确信是这样。<br>副词 <b>certainement<\/b> 可替代上述结构：Le soleil brillera certainement toute la journée. 太阳肯定会照耀一整天。<br>注意：certain 表示「肯定的、一定的」作名词修饰语时须<b>后置<\/b>：C'est une information certaine. 这是一个可靠的消息。"
      },
      {
        "t": "Savoir dire：预报、可能性与确定性",
        "d": "<b>做预报 Faire une prévision<\/b>：Il pleuvra toute la journée à l'est et au nord. 东部和北部将下上一整天雨。Vous aurez du soleil. 你们会有阳光。Il fera chaud / froid à Lille. 里尔天气会很热／很冷。<br><b>表达可能性 Exprimer une probabilité<\/b>：Vous aurez peut-être un peu de pluie. 你们可能会有一点雨。Je crois qu'il fera beau. 我觉得天气会晴。<br><b>表达确定性 Exprimer une certitude<\/b>：Je suis certain qu'il ne pleuvra pas. 我肯定不会下雨。Il fera beau, j'en suis sûr. 天气会晴，我确信。Le soleil brillera certainement toute la journée. 太阳肯定会照耀一整天。"
      }
    ],
    "say": [
      {
        "title": "Faire une prévision 进行天气预报",
        "items": [
          {
            "fr": "Il pleuvra toute la journée à l'est et au nord.",
            "zh": "东部和北部将下上一整天雨。"
          },
          {
            "fr": "Vous aurez du soleil.",
            "zh": "你们会有阳光。"
          },
          {
            "fr": "Il fera 15 degrés à Lille.",
            "zh": "里尔气温将是 15 度。"
          }
        ]
      },
      {
        "title": "Exprimer une probabilité ou une certitude 表达可能性或确定性",
        "items": [
          {
            "fr": "Vous aurez peut-être un peu de pluie.",
            "zh": "你们可能会下一点雨。"
          },
          {
            "fr": "Je crois qu'il fera beau.",
            "zh": "我觉得天气会晴。"
          },
          {
            "fr": "Il fera beau, j'en suis sûr.",
            "zh": "天气会晴，我确信。"
          }
        ]
      },
      {
        "title": "Parler du temps qu'il fera 谈论未来天气（Communiquez）",
        "items": [
          {
            "fr": "— Quel temps fera-t-il demain ?",
            "zh": "——明天什么天气？"
          },
          {
            "fr": "— Il fera beau / mauvais.",
            "zh": "——天气晴朗／不好。"
          },
          {
            "fr": "Avec votre voisin(e), présentez la météo à la classe.",
            "zh": "和邻座同学一起，向全班做天气预报。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 34 ————— */
  "tb-l34": {
    "unit": 9,
    "no": "Leçon 34",
    "title": "Projets d'avenir 未来计划",
    "text": [
      {
        "fr": "— Allô !",
        "zh": "——喂！"
      },
      {
        "fr": "— Bonjour madame, c'est Justine. Est-ce que Sophie est là ? Je peux lui parler ?",
        "zh": "——您好，夫人，我是朱斯蒂娜。索菲在吗？我可以和她说话吗？"
      },
      {
        "fr": "— Oui, bien sûr. Sophie, c'est Justine !... Elle arrive tout de suite !",
        "zh": "——好的，当然。索菲，是朱斯蒂娜！……她马上就来！"
      },
      {
        "fr": "— Allô ! Justine ?",
        "zh": "——喂！朱斯蒂娜？"
      },
      {
        "fr": "— Salut Sophie ! Bravo pour ton bac !",
        "zh": "——你好索菲！祝贺你高中毕业会考通过！"
      },
      {
        "fr": "— Merci. Toi aussi, félicitations !",
        "zh": "——谢谢。你也一样，祝贺你！"
      },
      {
        "fr": "— Alors ? Qu'est-ce que tu vas faire ? Tu as des projets ?",
        "zh": "——那么？你打算做什么？有什么计划吗？"
      },
      {
        "fr": "— Ah ! oui, bien sûr... Je vais d'abord me reposer ! Je pars demain en vacances au Maroc... Deux semaines.",
        "zh": "——啊，是的，当然……我先要好好休息！我明天就去摩洛哥度假……两个星期。"
      },
      {
        "fr": "— Au Maroc ! Ben, ce n'est pas comme ici ! Là, tu es sûre qu'il fera beau !... Et après ?",
        "zh": "——摩洛哥！哎呀，那可不像这儿！在那儿，你肯定天气会晴！……之后呢？"
      },
      {
        "fr": "— Après ? Bien... j'essaierai de trouver un travail. Ce n'est pas facile ! Peut-être en Corse pour commencer. Mon frère ouvre une crêperie dans un ou deux mois. Enfin, je ne sais pas. On verra. Et toi ?",
        "zh": "——之后？嗯……我会试着找份工作。这可不容易！也许先在科西嘉岛开始。我哥哥一两个月后会开一家可丽饼店。总之，我也说不好。再说吧。你呢？"
      },
      {
        "fr": "— Eh bien, moi, je n'ai pas d'argent, donc je ne prends pas de vacances ! Enfin, pas tout de suite, quoi !",
        "zh": "——嗯，我呢，我没钱，所以我就不度假了！总之，不是马上啦！"
      },
      {
        "fr": "Et j'ai trouvé un boulot pour l'été. Je commence à travailler la semaine prochaine. Je vais donner des cours de tennis au club Océan.",
        "zh": "不过我找到了一份暑期工作。我下周就开始上班。我要去海洋俱乐部教网球课。"
      },
      {
        "fr": "Et puis, en octobre, j'entre à la fac. Et on pourra peut-être se voir en septembre ? Je serai à la maison.",
        "zh": "然后，十月我进大学。也许我们九月能见面？那时候我会在家。"
      },
      {
        "fr": "— Bon, eh bien, d'accord. On s'appelle, alors ! Je t'embrasse.",
        "zh": "——好吧，那行。我们再联系！亲你。"
      },
      {
        "fr": "— Moi aussi. On se rappelle bientôt !",
        "zh": "——我也是。咱们很快再通电话！"
      }
    ],
    "vocab": [
      {
        "fr": "allô",
        "pos": "interj.",
        "zh": "喂！（打电话用语）"
      },
      {
        "fr": "appeler",
        "pos": "v.t.",
        "zh": "给（某人）打电话"
      },
      {
        "fr": "s'appeler",
        "pos": "v.pr.",
        "zh": "互相通电话"
      },
      {
        "fr": "avenir",
        "pos": "n.m.",
        "g": "m",
        "zh": "未来"
      },
      {
        "fr": "bac",
        "pos": "n.m.",
        "g": "m",
        "zh": "（法国）中学毕业会考，中学毕业（业）证书和学士学位（baccalauréat 的简称）"
      },
      {
        "fr": "boulot",
        "pos": "n.m.",
        "g": "m",
        "zh": "（俗）工作，活儿"
      },
      {
        "fr": "commencer à faire qch.",
        "pos": "loc.v.",
        "zh": "开始做某事"
      },
      {
        "fr": "Corse (la)",
        "pos": "n.pr.",
        "zh": "科西嘉（岛）（法国）"
      },
      {
        "fr": "crêperie",
        "pos": "n.f.",
        "g": "f",
        "zh": "薄饼店，可丽饼店"
      },
      {
        "fr": "embrasser",
        "pos": "v.t.",
        "zh": "拥抱；亲吻"
      },
      {
        "fr": "essayer",
        "pos": "v.t.ind.",
        "zh": "力争，力图"
      },
      {
        "fr": "essayer de faire qch.",
        "pos": "loc.v.",
        "zh": "努力做某事"
      },
      {
        "fr": "facile",
        "pos": "adj.",
        "zh": "容易的"
      },
      {
        "fr": "félicitations",
        "pos": "n.f.pl.",
        "g": "f",
        "zh": "祝贺，贺词；称赞，赞扬"
      },
      {
        "fr": "longtemps",
        "pos": "adv.",
        "zh": "长时间地"
      },
      {
        "fr": "Maroc",
        "pos": "n.m.",
        "g": "m",
        "zh": "摩洛哥"
      },
      {
        "fr": "océan",
        "pos": "n.m.",
        "g": "m",
        "zh": "海洋"
      },
      {
        "fr": "ouvrir",
        "pos": "v.t.",
        "zh": "打开；开办；创办"
      },
      {
        "fr": "projet",
        "pos": "n.m.",
        "g": "m",
        "zh": "计划"
      },
      {
        "fr": "rappeler",
        "pos": "v.t.",
        "zh": "再打电话给某人"
      },
      {
        "fr": "se rappeler",
        "pos": "v.pr.",
        "zh": "再次互通电话"
      },
      {
        "fr": "tout de suite",
        "pos": "loc.adv.",
        "zh": "立即，马上"
      },
      {
        "fr": "voir",
        "pos": "v.t.",
        "zh": "细想，思考，考虑"
      }
    ],
    "grammar": [
      {
        "t": "L'expression du futur 有关「将来」的表达",
        "d": "① <b>用现在时<\/b>：可表示不久之后、甚至在较远的未来将发生的动作或事情，一般带时间状语，口语中非常普遍。<br>Elle arrive demain à Paris. 她明天到巴黎。Tu vas à la bibliothèque ce soir ? 你今晚去图书馆吗？<br>② <b>用最近将来时（aller + 动词不定式）<\/b>：Je vais suivre le cours d'espagnol. 我要上西班牙语课了。Demain, elle va visiter le musée du Louvre. 明天她将参观卢浮宫。<br>③ <b>用简单将来时<\/b>：Après, j'essaierai de trouver un travail. 之后，我会试着找工作。Nous partirons en Italie la semaine prochaine. 我们下周出发去意大利。"
      },
      {
        "t": "Les indications de temps 时间标志词",
        "d": "谈论未来计划时要配合时间状语定位：<br><b>tout de suite<\/b> 立即、马上：Elle arrive tout de suite. 她马上就到。<br><b>bientôt<\/b> 不久、很快：On se rappelle bientôt ! 咱们很快再联系！<br><b>ce soir<\/b> 今晚；<b>dans une semaine<\/b> 一周后；<b>l'année prochaine<\/b> 明年。<br><b>d'abord... après...<\/b> 先……然后……：Je vais d'abord téléphoner à Justine et, après, je ferai les courses. 我先给朱斯蒂娜打电话，然后去采购。<br>课文中：Je pars demain en vacances au Maroc. 我明天去摩洛哥度假。Mon frère ouvre une crêperie dans un ou deux mois. 我哥哥一两个月后开一家可丽饼店。Je commence à travailler la semaine prochaine. 我下周开始工作。"
      },
      {
        "t": "On verra 与 expressions de projet（Notes 2、4、5）",
        "d": "<b>on verra<\/b> 是固定表达，表示「以后再说吧、走着瞧」，也可说 <b>nous verrons<\/b>。课文：Enfin, je ne sais pas. On verra. 总之我也说不好，再说吧。<br><b>commencer à + 动词不定式<\/b> 意为「开始……、着手……」：Commençons à manger. 咱们开始吃吧。La nuit commence à tomber. 夜幕开始降临。<br><b>essayer de + 动词不定式<\/b> 意为「努力做某事」：J'essaierai de trouver un travail. 我会试着找份工作。<br><b>donner des cours à qn<\/b> 意为「给某人上课」：Il donne des cours aux étudiants de la première année. 他给一年级大学生上课。<br><b>cours de + 课程名词<\/b> 表示「……课」：cours de tennis 网球课、cours de français 法语课、cours de musique 音乐课。"
      },
      {
        "t": "打电话用语、否定句中的 de 与 Je t'embrasse（Notes 1、3、6）",
        "d": "① 打电话时表明身份一般用 <b>c'est...<\/b>：Bonjour madame, c'est Justine. 您好，夫人，我是朱斯蒂娜。<br>② 否定句中，直接宾语前的不定冠词 un/une/des、部分冠词 du/de la 一律改为 <b>de<\/b>：Je n'ai pas <b>d'<\/b>argent, donc je ne prends pas <b>de<\/b> vacances ! 我没钱，所以就不度假了！<br>③ <b>Je t'embrasse<\/b> 字面意「我亲吻你」，是法国人亲友之间通话、告别、写信时的常用礼节用语，此处为通话结束时的告别语。"
      }
    ],
    "say": [
      {
        "title": "Parler de ses intentions et de ses projets 谈论自己的意图和计划",
        "items": [
          {
            "fr": "Je vais d'abord me reposer.",
            "zh": "我先要好好休息。"
          },
          {
            "fr": "J'essaierai de trouver un travail.",
            "zh": "我会试着找份工作。"
          },
          {
            "fr": "Enfin, je ne sais pas. On verra.",
            "zh": "总之我也说不好，再说吧。"
          }
        ]
      },
      {
        "title": "Situer dans le temps 在时间中定位",
        "items": [
          {
            "fr": "Je commence la semaine prochaine.",
            "zh": "我下周开始。"
          },
          {
            "fr": "Mon frère ouvre une crêperie dans un ou deux mois.",
            "zh": "我哥哥一两个月后开一家可丽饼店。"
          },
          {
            "fr": "On pourra peut-être se voir en septembre ?",
            "zh": "也许我们九月能见面？"
          },
          {
            "fr": "Elle arrive tout de suite. / On se rappelle bientôt.",
            "zh": "她马上到。／咱们很快再联系。"
          }
        ]
      },
      {
        "title": "Parler de ses projets 谈论自己的计划（Communiquez）",
        "items": [
          {
            "fr": "Dites à votre voisin(e) quels sont vos projets pour demain, pour le week-end, pour les prochaines vacances et pour l'année prochaine.",
            "zh": "告诉邻座同学你明天、周末、下次假期和明年的计划。"
          },
          {
            "fr": "Qu'est-ce que tu vas faire ? Tu as des projets ?",
            "zh": "你打算做什么？有什么计划吗？"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 35 ————— */
  "tb-l35": {
    "unit": 9,
    "no": "Leçon 35",
    "title": "Envie de changement 作出改变的意愿",
    "text": [
      {
        "fr": "— Alors, qu'est-ce que tu en penses ?",
        "zh": "——那么，你怎么看？"
      },
      {
        "fr": "— Ouais... J'aime bien. Il est grand, il est clair et puis, il est calme ; ça, c'est bien !",
        "zh": "——嗯……我挺喜欢的。它很大，很明亮，而且很安静；这点挺好！"
      },
      {
        "fr": "Mais, si on l'achète, il faudra faire des travaux. Regarde, tu as vu la couleur des murs dans les chambres ?",
        "zh": "不过，要是买下它，就得装修。你看，你看到几个房间墙的颜色了吗？"
      },
      {
        "fr": "— La couleur des murs, ce n'est pas un problème : un peu de peinture et puis c'est bon !",
        "zh": "——墙的颜色不成问题：刷点漆就行了！"
      },
      {
        "fr": "— Oui, d'accord, mais le salon et la salle à manger sont un peu petits, non ?",
        "zh": "——好吧，可是客厅和饭厅有点小，不是吗？"
      },
      {
        "fr": "— Tu sais, si on supprime le mur entre ces deux pièces, ça fera un grand salon...",
        "zh": "——你知道吗，如果把这两间屋子之间的墙拆掉，就会成一个大客厅……"
      },
      {
        "fr": "On pourra facilement mettre tous nos meubles.",
        "zh": "我们就能轻轻松松把全部家具摆进去。"
      },
      {
        "fr": "— C'est vrai, tu as raison. Et quand on aura un peu d'argent, on pourra peut-être installer une cheminée, là dans le coin ?",
        "zh": "——没错，你说得对。等我们手里有点钱，也许可以在那个角落装一个壁炉？"
      },
      {
        "fr": "— Et pour la cuisine et la salle de bains ?",
        "zh": "——那厨房和浴室呢？"
      },
      {
        "fr": "— Écoute, ça, on verra plus tard !",
        "zh": "——听着，这些以后再说！"
      },
      {
        "fr": "On changera peut-être la cuisine dans un an ou deux mais pas tout de suite ! Ça va faire beaucoup de dépenses.",
        "zh": "也许一两年后我们会翻新厨房，但不是马上！那会花很多钱。"
      },
      {
        "fr": "— Bon, alors, qu'est-ce qu'on fait ? On l'achète ou pas ?",
        "zh": "——那么，咱们到底怎么办？买还是不买？"
      }
    ],
    "vocab": [
      {
        "fr": "bouche",
        "pos": "n.f.",
        "g": "f",
        "zh": "嘴"
      },
      {
        "fr": "changement",
        "pos": "n.m.",
        "g": "m",
        "zh": "变化"
      },
      {
        "fr": "changer",
        "pos": "v.t.direct.",
        "zh": "改变，改动；更换"
      },
      {
        "fr": "cheminée",
        "pos": "n.f.",
        "g": "f",
        "zh": "壁炉；烟囱"
      },
      {
        "fr": "dépense",
        "pos": "n.f.",
        "g": "f",
        "zh": "开销，花费"
      },
      {
        "fr": "envie",
        "pos": "n.f.",
        "g": "f",
        "zh": "欲望，强烈的愿望"
      },
      {
        "fr": "avoir envie de qch. / faire qch.",
        "pos": "loc.v.",
        "zh": "想要某物／想做某事"
      },
      {
        "fr": "facilement",
        "pos": "adv.",
        "zh": "容易地，轻易地"
      },
      {
        "fr": "installer",
        "pos": "v.t.",
        "zh": "安置，放置"
      },
      {
        "fr": "mettre",
        "pos": "v.t.",
        "zh": "放置，摆放"
      },
      {
        "fr": "meuble",
        "pos": "n.m.",
        "g": "m",
        "zh": "家具"
      },
      {
        "fr": "peinture",
        "pos": "n.f.",
        "g": "f",
        "zh": "油漆，涂料"
      },
      {
        "fr": "pièce",
        "pos": "n.f.",
        "g": "f",
        "zh": "房间"
      },
      {
        "fr": "salon",
        "pos": "n.m.",
        "g": "m",
        "zh": "客厅"
      },
      {
        "fr": "supprimer",
        "pos": "v.t.",
        "zh": "除去，除掉"
      },
      {
        "fr": "travaux",
        "pos": "n.m.pl.",
        "g": "m",
        "zh": "工程"
      },
      {
        "fr": "faire des travaux",
        "pos": "loc.v.",
        "zh": "装修，翻修"
      }
    ],
    "grammar": [
      {
        "t": "Si 引导的条件从句",
        "d": "连词 <b>si<\/b> 引导的从句（即从句）可表示条件或假设，意为「如果……、只要……」。<br>一般来说，si 引导的从句使用<b>直陈式现在时<\/b>，主句动词可用直陈式现在时、简单将来时、最近将来时或命令式现在时：<br>从句（现在时）+ 主句（现在时）：Si tu veux, on fait une promenade au bord du lac. 如果你愿意，我们去湖边散步。<br>从句（现在时）+ 主句（简单将来时）：Si on supprime le mur entre ces deux pièces, ça fera un grand salon. 如果拆掉这两间屋子中间的墙，就成了一个大客厅。<br>从句（现在时）+ 主句（最近将来时）：Si tu n'aimes pas la couleur des murs, je vais la changer. 如果你不喜欢墙的颜色，我就换一种。<br>从句（现在时）+ 主句（命令式）：Si tu es pressé, prends un taxi. 如果你时间紧，就坐出租车吧。"
      },
      {
        "t": "Quand 引导的时间状语从句",
        "d": "连词 <b>quand<\/b> 表示「当……的时候」，用来引导时间状语从句：<br>Quand j'étais petite, on habitait à la campagne. 小时候，我家住在乡下。<br><b>quand 引导的从句用简单将来时，可表示条件<\/b>：Quand on aura un peu d'argent, on pourra peut-être installer une cheminée. 等我们钱多点的时候，也许可以装个壁炉。Quand tu finiras ce travail, tu pourras prendre des vacances. 完成这项工作后，你就可以去度假了。"
      },
      {
        "t": "changer 的两种用法（Notes 3）",
        "d": "① <b>changer + 带定冠词的名词（直接及物）<\/b>，表示「更换、更新」：changer l'ampoule 换灯泡、changer le draps 换床单、changer les meubles 换家具、changer les pneus 换轮胎。课文：On changera peut-être la cuisine dans un an ou deux. 也许一两年后我们会翻新厨房（changer la cuisine 指装修厨房并更换全部厨具设施）。<br>② <b>changer de + 名词（间接及物，名词不带限定词）<\/b>，表示「改变、更换（更换的对象）」：changer d'appartement 换住房、changer de profession 换职业、changer de sujet 转换话题、changer d'idée 改变主意、changer de baby-sitter 换保姆。"
      },
      {
        "t": "名词 + à + 名词/不定式 表用途（Notes 1）",
        "d": "介绍某物用途时，后面可接名词或动词不定式作宾语：<br>une salle à manger 一间饭厅、une machine à laver 一台洗衣机、un service à thé 一套茶具、une boîte aux lettres 一个信箱。<br><b>faire<\/b> 还可表示「形成、组成、造成」：Si on supprime le mur entre ces deux pièces, ça fera un grand salon. 如果拆掉这两间屋子中间的墙，就会形成一个大客厅。Les petits ruisseaux font les grandes rivières. 千百条小溪汇成大河（积少成多）。"
      },
      {
        "t": "插入语 tu sais / écoute（Notes 2、4）",
        "d": "<b>tu sais<\/b>（或 vous savez）作插入语，用来向对方强调说话人的主观意识、主张：<br>Tu sais, si on supprime le mur... 你知道吗，如果把墙拆掉……<br><b>Écoute<\/b>（或 Écoutez）作插入语，用来提请对方注意，引出拒绝或反对意见，可译为「听着！听好！注意听！」：<br>Écoute, ça, on verra plus tard ! 听着，这些以后再说！"
      }
    ],
    "say": [
      {
        "title": "Exprimer une condition 提出条件",
        "items": [
          {
            "fr": "Si on l'achète, il faudra faire des travaux.",
            "zh": "如果买下它，就得装修。"
          },
          {
            "fr": "Si on supprime le mur, ça fera un grand salon.",
            "zh": "如果把墙拆掉，就会成一个大客厅。"
          },
          {
            "fr": "Quand on aura un peu d'argent, on pourra installer une cheminée.",
            "zh": "等有点钱，我们可以装一个壁炉。"
          }
        ]
      },
      {
        "title": "Parler de ses intentions et de ses projets 谈论意图和计划",
        "items": [
          {
            "fr": "On changera peut-être la cuisine dans un an ou deux.",
            "zh": "也许一两年后我们会翻新厨房。"
          },
          {
            "fr": "Écoute, ça, on verra plus tard !",
            "zh": "听着，这些以后再说！"
          }
        ]
      },
      {
        "title": "Décrire la maison de ses rêves 描述梦想中的家（Communiquez）",
        "items": [
          {
            "fr": "Faites la description de la maison de vos rêves à votre voisin(e).",
            "zh": "向邻座同学描述你梦想中的房子。"
          },
          {
            "fr": "Si je peux, plus tard, j'achèterai une maison au bord de la mer, une maison avec une piscine.",
            "zh": "如果可以，以后我要买一栋海边的房子，一栋带泳池的房子。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 36 ————— */
  "tb-l36": {
    "unit": 9,
    "no": "Leçon 36",
    "title": "Le pain, mangez-en! 面包，吃吧！",
    "text": [
      {
        "fr": "Le pain, mangez-en !",
        "zh": "面包，吃吧！"
      },
      {
        "fr": "Si vous ne mangez pas de pain, un jour, il n'y en aura plus.",
        "zh": "如果你们不吃面包，总有一天就没得吃了。"
      },
      {
        "fr": "Le pain...",
        "zh": "面包……"
      },
      {
        "fr": "En 1900, les Français mangeaient 328 kg de pain par personne et par an.",
        "zh": "1900 年，法国人每人每年吃 328 公斤面包。"
      },
      {
        "fr": "Aujourd'hui, ils en mangent 58 kg en moyenne.",
        "zh": "如今，他们平均吃 58 公斤。"
      },
      {
        "fr": "Et demain ?",
        "zh": "那明天呢？"
      },
      {
        "fr": "Si vous ne mangez pas de pain, un jour, peut-être, il n'y aura plus de boulangers...",
        "zh": "如果你们不再吃面包，也许有一天就没有面包师了……"
      },
      {
        "fr": "... et vos enfants ne connaîtront pas le goût fantastique de la baguette.",
        "zh": "……你们的孩子也将无从知晓法棍那奇妙无比的味道。"
      },
      {
        "fr": "Le saviez-vous ?",
        "zh": "你知道吗？"
      },
      {
        "fr": "La boulangerie est le commerce préféré des Français.",
        "zh": "面包店是法国人最喜爱的商店。"
      },
      {
        "fr": "• 74 % des pains achetés sont des baguettes !",
        "zh": "• 74% 买来的面包是法棍！"
      },
      {
        "fr": "• 83 % des Français mangent du pain tous les jours.",
        "zh": "• 83% 的法国人每天都吃面包。"
      },
      {
        "fr": "• 34 000 C'est le nombre de boulangeries en France, aujourd'hui.",
        "zh": "• 34 000——这是如今法国面包店的数量。"
      }
    ],
    "vocab": [
      {
        "fr": "boulangerie",
        "pos": "n.f.",
        "g": "f",
        "zh": "面包店"
      },
      {
        "fr": "commerce",
        "pos": "n.m.",
        "g": "m",
        "zh": "买，交易；商业，贸易；商店，店铺"
      },
      {
        "fr": "document",
        "pos": "n.m.",
        "g": "m",
        "zh": "材料，文件"
      },
      {
        "fr": "fantastique",
        "pos": "adj.",
        "zh": "神奇的，幻想的；奇特的"
      },
      {
        "fr": "goût",
        "pos": "n.m.",
        "g": "m",
        "zh": "味道"
      },
      {
        "fr": "même",
        "pos": "adj.",
        "zh": "同样的"
      },
      {
        "fr": "moyenne",
        "pos": "n.f.",
        "g": "f",
        "zh": "中等；平均数，平均值"
      },
      {
        "fr": "en moyenne",
        "pos": "loc.",
        "zh": "平均"
      },
      {
        "fr": "nombre",
        "pos": "n.m.",
        "g": "m",
        "zh": "数，数目，数量"
      },
      {
        "fr": "page",
        "pos": "n.f.",
        "g": "f",
        "zh": "页"
      },
      {
        "fr": "probable",
        "pos": "adj.",
        "zh": "很有可能的"
      },
      {
        "fr": "publicité",
        "pos": "n.f.",
        "g": "f",
        "zh": "广告"
      }
    ],
    "grammar": [
      {
        "t": "Les expressions de quantité 数量表达（本课无独立 GRAMMAIRE 框，据 Notes 与课文提炼）",
        "d": "① <b>数量 + de + 名词<\/b>：328 kg <b>de<\/b> pain par personne et par an 每人每年 328 公斤面包；58 kg <b>de<\/b> pain 58 公斤面包。注意：数量词后名词前用 de，不加冠词。<br>② <b>par<\/b> 表示「每」：par personne et par an 每人每年。<br>③ <b>en moyenne<\/b> 表示「平均」：Ils en mangent 58 kg en moyenne. 他们平均吃 58 公斤。<br>④ <b>百分数 + de + 名词<\/b>：74 % <b>des<\/b> pains achetés sont des baguettes. 买来的面包中 74% 是法棍。83 % des Français mangent du pain tous les jours. 83% 的法国人每天吃面包。<br>⑤ <b>le nombre de + 名词<\/b> 表示「……的数量」：C'est le nombre de boulangeries en France. 这是法国面包店的数量。"
      },
      {
        "t": "Le pronom en 副代词 en（Notes 1、3）",
        "d": "<b>en<\/b> 代替「de + 名词」，可指代前面提到的数量补语或 de 引导的名词。<br>① 课文：Si vous ne mangez pas de pain, un jour, il n'<b>y en<\/b> aura plus. 如果你们不吃面包，总有一天就没得吃了。（en = de pain；同时使用 en 和 y 时，<b>en 在后<\/b>：Elle a mis du sel dans une assiette. → Elle <b>y en<\/b> a mis. 她在盘子里撒了盐。）<br>② 课文：Aujourd'hui, ils <b>en<\/b> mangent 58 kg en moyenne. 如今他们平均吃 58 公斤。（en 代替 de pain，是数量词 58 kg 的补语。）<br>③ 命令式中：Le pain, mangez-<b>en<\/b> ! 面包，吃吧！（肯定命令式，en 位于动词后并用连字符连接。）"
      },
      {
        "t": "Le pronom le 中性代词 le（Notes 2）",
        "d": "<b>le saviez-vous<\/b> = <b>le savez-vous<\/b>，句首的中性代词 <b>le<\/b> 代替后面一整句话所表达的事实：La boulangerie est le commerce préféré des Français. 面包店是法国人最喜爱的商店。<br>又如：Il est malade, tu <b>le<\/b> sais ? 他病了，你知道吗？<br>这里的未完成过去时 <b>saviez<\/b> 已失去其时态功能，只用于表达一种委婉的语气。"
      },
      {
        "t": "Si + 现在时 → 简单将来时：假设与后果",
        "d": " Article 用 si 从句提出假设，主句用简单将来时表达后果：<br><b>Si vous ne mangez pas de pain<\/b>, un jour, il n'y aura plus de boulangers et vos enfants <b>ne connaîtront<\/b> pas le goût fantastique de la baguette. 如果你们不吃面包，有一天就没有面包师了，你们的孩子也尝不到法棍的美妙味道。<br>邮件中：Si je trouve un travail à Lausanne ou à Genève, on <b>pourra<\/b> se voir le week-end. 如果我在洛桑或日内瓦找到工作，我们周末就能见面。"
      },
      {
        "t": "connaître 与 savoir 的区别（Notes 4）",
        "d": "两者都有「知道、晓得、了解、明白」之意，但有差别：<br>① <b>connaître<\/b> 多指以<b>感性<\/b>方式获得认识：知道某物的存在、某人的姓名，记得其模样、状态，或根据经验、听说而知晓。Tu connais la ville de Lyon ? 你了解里昂这座城市吗？（含「你去过里昂吗」之意。）Connais-tu le goût de ce fruit tropical ? 你知道这种热带水果的味道吗？（含「你尝过吗」之意。）<br>② <b>savoir (qch)<\/b> 多指以<b>理性<\/b>方式获得知识，表示「熟知、熟记、记得、了解透彻」：savoir sa leçon 熟记所学课程；savoir deux langues étrangères 精通两门外语（connaître deux langues étrangères 仅表示「会两门外语」，掌握程度有限）。"
      }
    ],
    "say": [
      {
        "title": "Parler des habitudes alimentaires et des quantités 谈论饮食习惯与数量",
        "items": [
          {
            "fr": "En 1900, les Français mangeaient 328 kg de pain par personne et par an.",
            "zh": "1900 年，法国人每人每年吃 328 公斤面包。"
          },
          {
            "fr": "Aujourd'hui, ils en mangent 58 kg en moyenne.",
            "zh": "如今，他们平均吃 58 公斤。"
          },
          {
            "fr": "83 % des Français mangent du pain tous les jours.",
            "zh": "83% 的法国人每天都吃面包。"
          }
        ]
      },
      {
        "title": "Exprimer une hypothèse et ses conséquences 表达假设与后果",
        "items": [
          {
            "fr": "Si vous ne mangez pas de pain, il n'y en aura plus.",
            "zh": "如果你们不吃面包，总有一天就没得吃了。"
          },
          {
            "fr": "Je crois que tout le monde parlera la même langue, un jour. Tu verras.",
            "zh": "我觉得总有一天大家都会说同一种语言。你等着瞧。"
          },
          {
            "fr": "Eh bien, moi, je suis sûr(e) que non. Ça n'arrivera pas.",
            "zh": "嗯，我敢肯定不会。这不会发生。"
          }
        ]
      },
      {
        "title": "Parler de ses projets 谈论计划（Savoir-faire：e-mail）",
        "items": [
          {
            "fr": "Je vais rentrer chez mes parents et me reposer.",
            "zh": "我要回父母家好好休息。"
          },
          {
            "fr": "Je commence dans deux semaines un cours de français, en France.",
            "zh": "两周后我要在法国开始一门法语课。"
          },
          {
            "fr": "Après, je commencerai à chercher du travail en France ou peut-être en Suisse. On verra.",
            "zh": "之后我会开始在法国、也许在瑞士找工作。再说吧。"
          }
        ]
      },
      {
        "title": "Prendre un rendez-vous 约会（Savoir-faire）",
        "items": [
          {
            "fr": "Il faut d'abord trouver un jour et une heure pour le rendez-vous.",
            "zh": "首先得为约会找一个日子和一个时间。"
          },
          {
            "fr": "Vous appelez un(e) ami(e) pour le/la voir demain.",
            "zh": "你打电话给一位朋友，约明天见面。"
          }
        ]
      }
    ]
  }
});
