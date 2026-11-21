/* =========================================================
   📚 《你好！法语 1》Unité 7 · Leçons 25–28（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 7)){
  TB_UNITS.push({ n: 7, title: "Unité 7 · Un peu, beaucoup, passionnément… 一点儿，非常，特别……", lessons: ["tb-l25", "tb-l26", "tb-l27", "tb-l28"] });
}

Object.assign(TB_LESSONS, {
  /* ————— Leçon 25 ————— */
  "tb-l25": {
    "unit": 7,
    "no": "Leçon 25",
    "title": "Enquête 街头调查",
    "text": [
      {
        "fr": "Sexe : H / F. Âge : 18/25, 26/35, 36/50, 51 et +.",
        "zh": "性别：男／女。年龄：18/25 岁、26/35 岁、36/50 岁、51 岁及以上。"
      },
      {
        "fr": "Faites-vous du sport ?",
        "zh": "您做运动吗？"
      },
      {
        "fr": "oui (un peu, beaucoup) / non",
        "zh": "是（一点儿、很多）／不是"
      },
      {
        "fr": "Le week-end, vous sortez...",
        "zh": "周末，您外出……"
      },
      {
        "fr": "beaucoup / un peu / pas du tout",
        "zh": "很多／一点儿／完全不"
      },
      {
        "fr": "Avec qui sortez-vous ?",
        "zh": "您和谁一起外出？"
      },
      {
        "fr": "avec votre famille / avec des amis",
        "zh": "和家人一起／和朋友一起"
      },
      {
        "fr": "Quelles sont vos activités préférées ?",
        "zh": "您最喜欢的活动是什么？"
      },
      {
        "fr": "le cinéma / le théâtre / l'opéra / les musées",
        "zh": "看电影／看戏／听歌剧／逛博物馆"
      },
      {
        "fr": "Que préférez-vous ?",
        "zh": "您更喜欢做什么？"
      },
      {
        "fr": "lire (un livre, un journal, un magazine) / regarder la télévision / aller sur Internet",
        "zh": "阅读（书、报纸、杂志）／看电视／上网"
      },
      {
        "fr": "Avec vos amis, où préférez-vous dîner ?",
        "zh": "您和朋友更喜欢在哪里吃饭？"
      },
      {
        "fr": "au restaurant / chez vous/eux",
        "zh": "在餐馆／在你家／在他们家"
      },
      {
        "fr": "Et après, où sortez-vous, en général ?",
        "zh": "之后，您通常去哪里消遣？"
      },
      {
        "fr": "dans les bars / dans les discothèques",
        "zh": "去酒吧／去迪斯科舞厅"
      }
    ],
    "vocab": [
      {
        "fr": "activité",
        "pos": "n.f.",
        "g": "f",
        "zh": "活动"
      },
      {
        "fr": "adorer",
        "pos": "v.t.",
        "zh": "喜爱，爱慕，宠爱；（俗）"
      },
      {
        "fr": "aujourd'hui",
        "pos": "adv.",
        "zh": "今天，现今"
      },
      {
        "fr": "détester",
        "pos": "v.t.",
        "zh": "厌恶，憎恨"
      },
      {
        "fr": "discothèque",
        "pos": "n.f.",
        "g": "f",
        "zh": "迪斯科舞厅"
      },
      {
        "fr": "Internet",
        "pos": "n.m.",
        "g": "m",
        "zh": "因特网"
      },
      {
        "fr": "préféré(e)",
        "pos": "adj.",
        "zh": "最受人喜爱的，喜欢的"
      },
      {
        "fr": "préférer",
        "pos": "v.t.",
        "zh": "更喜欢，偏爱"
      },
      {
        "fr": "questionnaire",
        "pos": "n.m.",
        "g": "m",
        "zh": "调查问卷"
      },
      {
        "fr": "sexe",
        "pos": "n.m.",
        "g": "m",
        "zh": "性别"
      },
      {
        "fr": "théâtre",
        "pos": "n.m.",
        "g": "m",
        "zh": "剧场；戏剧；戏剧艺术"
      },
      {
        "fr": "beaucoup",
        "pos": "adv.",
        "zh": "很，非常；很多（课文中表频率与数量）"
      },
      {
        "fr": "peu",
        "pos": "adv.",
        "zh": "少，不多"
      },
      {
        "fr": "un peu",
        "pos": "loc.adv.",
        "zh": "一点儿，有些"
      },
      {
        "fr": "cinéma",
        "pos": "n.m.",
        "g": "m",
        "zh": "电影；电影院"
      },
      {
        "fr": "opéra",
        "pos": "n.m.",
        "g": "m",
        "zh": "歌剧；歌剧院"
      },
      {
        "fr": "musée",
        "pos": "n.m.",
        "g": "m",
        "zh": "博物馆"
      },
      {
        "fr": "natation",
        "pos": "n.f.",
        "g": "f",
        "zh": "游泳"
      },
      {
        "fr": "roman",
        "pos": "n.m.",
        "g": "m",
        "zh": "小说"
      },
      {
        "fr": "week-end",
        "pos": "n.m.",
        "g": "m",
        "zh": "周末"
      },
      {
        "fr": "fatigué(e)",
        "pos": "adj.",
        "zh": "疲倦的"
      },
      {
        "fr": "journal",
        "pos": "n.m.",
        "g": "m",
        "zh": "报纸；日记"
      },
      {
        "fr": "magazine",
        "pos": "n.m.",
        "g": "m",
        "zh": "杂志"
      }
    ],
    "grammar": [
      {
        "t": "La fréquence et la quantité : beaucoup / peu / un peu 频率与数量",
        "d": "副词 beaucoup、peu、un peu 既可修饰动词表示程度，也可与 <b>de + 名词<\/b> 连用表示数量。<br>① 动词 + beaucoup / peu / un peu：beaucoup 表示「很、非常」：<b>J'aime beaucoup ce livre.<\/b> 我很喜欢这本书。Elle sort beaucoup en ce moment. 她经常外出。peu 表示「不大、不太」：<b>Il aime peu la musique classique.<\/b> 他不太喜欢古典音乐。Mon père boit peu. 我父亲喝酒不多。un peu 表示「一点儿、有点儿」：<b>Elle est un peu fatiguée.<\/b> 她有点儿累了。Attendez un peu. 请稍等片刻。<br>② beaucoup / peu / un peu + de + 名词：J'ai <b>beaucoup de<\/b> livres anglais. 我有很多英文书。Elle a <b>peu d'<\/b> amis. 她朋友不多。Il faut mettre <b>un peu de<\/b> sucre dans le café. 应该在咖啡里放点糖。<br>注意：beaucoup de 和 peu de 后可接可数或不可数名词，un peu de 后通常接不可数名词；名词前不加冠词。"
      },
      {
        "t": "Le pronom en 副代词 en",
        "d": "代词 en 的基本用法是代替「<b>de + 名词<\/b>」的结构，位置与间接宾语人称代词相同。<br>① 代替「部分冠词 + 名词」：— Vous faites de la natation ? 您游泳吗？— Non, je n'<b>en<\/b> fais pas. 不，我不游泳。— Tu veux du pain ? 你想要面包吗？— Non, je n'<b>en<\/b> veux pas. 不，我不想要。<br>② 遇「数量词 + (de) + 名词」时，en 代替「(de) + 名词」，数量词保留：— Tu as beaucoup de cours ? 你有很多课吗？— Oui, j'<b>en<\/b> ai beaucoup. 是的，我有不少课。— Tu vas acheter combien de robes ? 你要买几条裙子？— Je vais <b>en<\/b> acheter deux. 我要买两条。— Est-ce que tu as des frères ? 你有兄弟吗？— Oui, j'<b>en<\/b> ai trois. 是的，我有三个。<br>肯定命令式中 en 位于动词之后并用连字符连接：Oui, prends-<b>en<\/b> un kilo. 是的，买一公斤。"
      },
      {
        "t": "Le pronom ça 代词 ça",
        "d": "ça 是指示代词 cela 的缩略词，口语中常用，表示「这个、那个」。<br>① 代替名词：Le chocolat ? Oui j'aime <b>ça<\/b>. 巧克力吗？我喜欢。Donne-moi <b>ça<\/b>. 给我这个。<br>② 代替一个不定的句子：Dîner dans un restaurant italien ? J'adore <b>ça<\/b> ! 去意大利餐厅吃饭？我太喜欢了！Aller jouer au foot ? Non, je n'aime pas beaucoup <b>ça<\/b>. 去踢足球？这个我不太喜欢。"
      },
      {
        "t": "La négation ne...plus 否定形式 ne...plus",
        "d": "ne...plus 表示「<b>不再<\/b>」，用法与 ne...pas 相同，ne 和 plus 分别位于谓语动词前后。<br>Je ne vais <b>plus<\/b> au restaurant. 我不再去餐馆了。<br>J'ai fait du ski, mais maintenant, je n'<b>en<\/b> fais <b>plus<\/b>. 我滑过雪，但现在不再滑了。"
      },
      {
        "t": "préférer 的用法（Notes 注释）",
        "d": "① <b>préférer + 动词不定式<\/b> 表示「宁愿做某事、更喜欢做某事」：Le week-end, je <b>préfère aller<\/b> à la campagne. 周末我更喜欢去乡下。<br>② <b>préférer A à B<\/b> 表示「喜欢 A 甚于 B」（A、B 均为名词）：Elle <b>préfère<\/b> Paul <b>à<\/b> André. 她宁愿要保罗而不要安德烈。Je <b>préfère<\/b> le café <b>au<\/b> thé. 我喜欢咖啡胜过茶。<br>③ préféré 是 préférer 的过去分词，此处用作形容词，需与被修饰名词性数配合：Quelles sont vos activités <b>préférées<\/b> ? 您最喜欢哪些活动？Voici mon roman <b>préféré<\/b>. 这是我最喜欢的小说。"
      }
    ],
    "say": [
      {
        "title": "Exprimer des goûts et des préférences 表达兴趣和喜好",
        "items": [
          {
            "fr": "J'aime bien le théâtre. — Moi, j'adore faire la cuisine.",
            "zh": "我很喜欢看戏。——我呢，我特别喜欢做饭。"
          },
          {
            "fr": "J'aime beaucoup le cinéma mais je préfère le théâtre.",
            "zh": "我很喜欢看电影，但我更喜欢看戏。"
          },
          {
            "fr": "Je déteste ça.",
            "zh": "我讨厌这个。"
          }
        ]
      },
      {
        "title": "Exprimer la fréquence et l'intensité 表达频率和程度",
        "items": [
          {
            "fr": "Je sors un peu. — Oui, j'en fais beaucoup.",
            "zh": "我偶尔出去一下。——是的，我经常做。"
          },
          {
            "fr": "J'aime bien. / J'aime beaucoup. / Un peu. / Pas du tout.",
            "zh": "挺喜欢。／非常喜欢。／有一点。／一点也不。"
          }
        ]
      },
      {
        "title": "Parler de ses goûts avec un camarade 与同学谈论兴趣爱好（COMMUNIQUEZ）",
        "items": [
          {
            "fr": "Il/Elle fait un peu de sport.",
            "zh": "他／她做一点运动。"
          },
          {
            "fr": "Il/Elle regarde beaucoup la télé mais il/elle aime bien lire aussi.",
            "zh": "他／她看电视很多，不过也挺喜欢读书。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 26 ————— */
  "tb-l26": {
    "unit": 7,
    "no": "Leçon 26",
    "title": "Quitter Paris 离开巴黎",
    "text": [
      {
        "fr": "— Comment ! Céline et toi, vous quittez Paris ?",
        "zh": "——什么！塞西尔和你，你们要离开巴黎？"
      },
      {
        "fr": "— Eh oui, on a acheté une maison à la campagne, à côté d'Albi.",
        "zh": "——是啊，我们在乡下买了一栋房子，就在阿尔比旁边。"
      },
      {
        "fr": "— Et vous… ?",
        "zh": "——那你们……？"
      },
      {
        "fr": "— Eh oui, on va habiter là-bas.",
        "zh": "——是的，我们要搬到那儿去住。"
      },
      {
        "fr": "— Mais attends… Je ne comprends pas… Pourquoi est-ce que vous partez à la campagne ?",
        "zh": "——等等……我不明白……你们为什么要搬到乡下去？"
      },
      {
        "fr": "— Mais parce qu'à Paris, il y a trop de voitures, trop de pollution, il n'y a pas assez d'espaces verts…",
        "zh": "——因为巴黎车太多、污染太严重，绿地又不够……"
      },
      {
        "fr": "— Et puis, c'est trop bruyant aussi ! Moi, tu comprends, je ne peux plus vivre ici.",
        "zh": "——而且太吵了！你知道，我在这儿再也住不下去了。"
      },
      {
        "fr": "— Écoute, il y a aussi beaucoup d'avantages à Paris ! Il y a des théâtres, des cinémas…",
        "zh": "——听我说，巴黎也有很多好处！有剧院、有电影院……"
      },
      {
        "fr": "— On peut sortir tous les jours dans les bars ou en boîte. Il y a des magasins ouverts le dimanche…",
        "zh": "——每天都可以去酒吧或者夜店。还有周日开门的商店……"
      },
      {
        "fr": "— Mais attends, mais qu'est-ce que tu t'imagines ! À la campagne aussi, il y a des choses à faire.",
        "zh": "——等等，你在想什么呢！乡下也有事情可做啊。"
      },
      {
        "fr": "— Oh, oui, mais alors vraiment pas beaucoup ! Et puis, tout le monde se connaît ; moi, je n'aime pas ça.",
        "zh": "——哦，是有，可真没多少！再说，在那儿大家互相都认识；我可不喜欢这样。"
      },
      {
        "fr": "— Eh bien, moi, je trouve ça pas mal du tout. On connaît les gens, on parle ensemble…",
        "zh": "——嗯，我倒觉得挺不错的。大家认识彼此，还能一起聊聊……"
      },
      {
        "fr": "— Ici, dans mon immeuble, je ne connais pas du tout mes voisins.",
        "zh": "——在这儿，我住的这栋楼里，我根本不认识邻居。"
      },
      {
        "fr": "— Eh bien, moi, je les connais tous… Et Céline, qu'est-ce qu'elle en pense ?",
        "zh": "——嗨，我可都认识他们……那塞西尔怎么想？"
      },
      {
        "fr": "— Ah ! Céline, elle est d'accord avec moi. Elle aussi, elle préfère partir.",
        "zh": "——啊！塞西尔同意我的看法。她也更想搬走。"
      },
      {
        "fr": "— Vous avez peut-être raison…",
        "zh": "——也许你们是对的……"
      }
    ],
    "vocab": [
      {
        "fr": "Albi",
        "pos": "n.pr.",
        "zh": "阿尔比（法国城镇，位于塔恩省 Tarn）"
      },
      {
        "fr": "attendre",
        "pos": "v.t.",
        "zh": "等待"
      },
      {
        "fr": "argent",
        "pos": "n.m.",
        "g": "m",
        "zh": "银，白银；钱"
      },
      {
        "fr": "avantage",
        "pos": "n.m.",
        "g": "m",
        "zh": "好处，利处，优点"
      },
      {
        "fr": "comment",
        "pos": "adv.",
        "zh": "怎么！（表示惊讶、愤怒、谴责）"
      },
      {
        "fr": "comprendre",
        "pos": "v.t.",
        "zh": "理解，懂得"
      },
      {
        "fr": "contre",
        "pos": "n.m.",
        "g": "m",
        "zh": "反对；不利"
      },
      {
        "fr": "ensemble",
        "pos": "adv.",
        "zh": "一起"
      },
      {
        "fr": "espace",
        "pos": "n.m.",
        "g": "m",
        "zh": "空间；场地，场所"
      },
      {
        "fr": "espace vert",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "绿地"
      },
      {
        "fr": "fatigué(e)",
        "pos": "adj.",
        "zh": "疲倦的"
      },
      {
        "fr": "gagner",
        "pos": "v.t.",
        "zh": "赢得；赢"
      },
      {
        "fr": "gens",
        "pos": "n.pl.",
        "g": "m",
        "zh": "人，人们"
      },
      {
        "fr": "ici",
        "pos": "adv.",
        "zh": "这里"
      },
      {
        "fr": "inconvénient",
        "pos": "n.m.",
        "g": "m",
        "zh": "弊端，不便之处"
      },
      {
        "fr": "marier(se)",
        "pos": "v.pr.",
        "zh": "结婚"
      },
      {
        "fr": "monde",
        "pos": "n.m.",
        "g": "m",
        "zh": "人们"
      },
      {
        "fr": "ouvert(e)",
        "pos": "adj.",
        "zh": "打开的；开放的，开门营业的"
      },
      {
        "fr": "parce que",
        "pos": "conj.",
        "zh": "因为"
      },
      {
        "fr": "penser",
        "pos": "v.t.",
        "zh": "认为，以为"
      },
      {
        "fr": "pollution",
        "pos": "n.f.",
        "g": "f",
        "zh": "污染"
      },
      {
        "fr": "pour",
        "pos": "n.m.",
        "g": "m",
        "zh": "赞成；有利的方面；肯定的方面"
      },
      {
        "fr": "raison",
        "pos": "n.f.",
        "g": "f",
        "zh": "理智，理性；道理"
      },
      {
        "fr": "avoir raison",
        "pos": "loc.v.",
        "zh": "有理，正确"
      },
      {
        "fr": "trop",
        "pos": "adv.",
        "zh": "过多地"
      },
      {
        "fr": "tous, toutes",
        "pos": "pron.indéf.pl.",
        "zh": "所有的人；所有的事物"
      },
      {
        "fr": "vivre",
        "pos": "v.i.",
        "zh": "生活"
      },
      {
        "fr": "voyager",
        "pos": "v.t.",
        "zh": "旅行"
      }
    ],
    "grammar": [
      {
        "t": "L'expression de la cause : pourquoi / parce que 表达原因",
        "d": "提问原因用 <b>pourquoi<\/b>，回答理由用 <b>parce que<\/b>。<br>— Pourquoi est-ce que vous partez à la campagne ? 你们为什么要搬到乡下去？<br>— Parce que c'est trop bruyant à Paris. 因为巴黎太吵了。<br>— Parce qu'à Paris, il y a trop de voitures. 因为巴黎的车太多了。<br>口语中也常用 comme（因为）等表达原因。"
      },
      {
        "t": "Trop et assez 太、足够",
        "d": "副词 trop 和 assez 既可以修饰动词、形容词表示程度，也可以在后面接 <b>de + 名词<\/b> 表示数量。<br>① trop / assez + 形容词／动词：<b>Cette rue est trop bruyante.<\/b> 这条街太吵了。Tu travailles trop, tu vas te fatiguer. 你干得太多，会累着的。Ce manteau est assez chaud. 这件大衣挺暖和。Vous avez assez travaillé. 您干得够多了。<br>② trop / assez + de + 名词：Il y a <b>trop de<\/b> monde à Beijing. 北京的人太多了。Ne mange pas <b>trop de<\/b> viande ! 别吃太多肉！Il y a <b>assez de<\/b> choses à faire. 有相当多的事要做。Il n'a pas <b>assez de<\/b> temps libre pour voyager. 他没有足够的空闲时间去旅行。<br>注意：无论肯定还是否定句，「beaucoup / un peu / peu / trop / assez + de + 名词」中名词前都不带冠词。"
      },
      {
        "t": "Tout 泛指形容词与泛指代词",
        "d": "tout 可作泛指形容词（adjectif indéfini）或泛指代词（pronom indéfini）。<br>① 泛指形容词位于名词及其限定词之前，与名词性数一致：tout / toute / tous / toutes。单数表示「整个的」，复数表示「所有的」：<b>Tout le monde<\/b> se connaît. 所有人都互相认识。<b>Toute sa famille<\/b> habite là-bas. 他全家都住在那儿。<b>Tous nos amis<\/b> viennent ce soir. 我们所有朋友今晚都来。<b>Toutes les filles<\/b> aiment ce film. 所有女孩都喜欢这部电影。<br>② 泛指代词表示「一切、所有的人／事物」，作主语、宾语或同位语：Tout va bien. 一切都好。Je mange tout. 我什么都吃。Je les connais <b>tous<\/b>. 我认识他们所有人。Elles aiment <b>toutes<\/b> ce chanteur. 她们都喜欢这位歌手。"
      },
      {
        "t": "en 代替 de + ça（Notes 注释 5）",
        "d": "动词短语 <b>penser de qch<\/b>（对某事／某人有看法）中的 de + 名词可用副代词 <b>en<\/b> 代替。<br>— Et Céline, qu'est-ce qu'elle <b>en<\/b> pense ? 那塞西尔对此怎么看？<br>这里 en 代替「de + ça」，即「对离开巴黎这件事」。<br>Que pensez-vous <b>de<\/b> cette solution ? 您对这个解决方案怎么看？— Qu'<b>en<\/b> penses-tu ? 你觉得怎么样？<br>Que penses-tu <b>de<\/b> ton patron ? 你觉得你老板怎么样？<br>注意：若宾语指人，不能用 en，要用「de + 重读人称代词」：Que penses-tu <b>d'<\/b> elle ? 你觉得她怎么样？"
      },
      {
        "t": "代动词的相互意义与自反意义（Notes 注释 1、2）",
        "d": "代动词 se connaître、s'imaginer 等除了相互意义（「互相……」）外，还可有自反意义（「自己……」）。<br>se connaître：Ils <b>se connaissent<\/b> en Chine. 他们是在中国相识的。（相互）Il ne <b>se connaît<\/b> pas très bien. 他不太了解自己。（自反）<br>s'imaginer（想象、确信）与 imaginer（想象）语气不同：J'<b>imagine<\/b> que je réussirai. 我想象我能成功（只认为可能）。Je <b>m'imagine<\/b> que je réussirai. 我确信我能成功。<br>另外：<b>tout le monde<\/b>（大家）作主语时谓语动词用单数第三人称；<b>le monde entier<\/b> 意为「全世界」。"
      },
      {
        "t": "avoir raison / être d'accord / pas du tout（Notes 注释 3、6、7）",
        "d": "<b>avoir raison<\/b> 意为「（说的或做的）有道理、正确」，后可接介词 de + 不定式：Ils <b>ont raison<\/b> de quitter Paris. 他们离开巴黎是对的。Vous avez peut-être raison. 也许你们是对的。<br><b>être d'accord avec qn<\/b> 意为「同意某人」：Céline est <b>d'accord avec<\/b> moi. 塞西尔同意我的看法。<br><b>pas du tout<\/b> 用于否定之后加强语气，可插入句中成分：Je trouve ça <b>pas mal du tout<\/b>. 我觉得这挺不错。Je me sens pas bien <b>du tout<\/b>. 我感觉一点儿也不好。"
      }
    ],
    "say": [
      {
        "title": "Demander et exprimer une opinion 询问和表达意见",
        "items": [
          {
            "fr": "— Et Céline, qu'est-ce qu'elle en pense ? — Je trouve ça pas mal du tout.",
            "zh": "——那塞西尔怎么想？——我觉得这挺不错。"
          },
          {
            "fr": "Je n'aime pas ça. / Je suis d'accord. / Vous avez raison.",
            "zh": "我不喜欢这个。／我同意。／您说得对。"
          }
        ]
      },
      {
        "title": "Exprimer une contestation 表达异议",
        "items": [
          {
            "fr": "Mais qu'est-ce que tu t'imagines !",
            "zh": "你这是在想什么呢！"
          },
          {
            "fr": "Je ne comprends pas !",
            "zh": "我不明白！"
          },
          {
            "fr": "Oh, oui, mais alors vraiment pas beaucoup !",
            "zh": "哦，是有，可真没多少！"
          }
        ]
      },
      {
        "title": "Parler des avantages et des inconvénients 谈论优点与缺点",
        "items": [
          {
            "fr": "Il y a trop de voitures, trop de pollution et il n'y a pas assez d'espaces verts à Paris.",
            "zh": "巴黎车太多、污染太严重，而且绿地不够。"
          },
          {
            "fr": "Il y a aussi beaucoup d'avantages à Paris : il y a des théâtres, des cinémas…",
            "zh": "巴黎也有很多好处：有剧院、有电影院……"
          },
          {
            "fr": "À la campagne aussi, il y a des choses à faire et tout le monde se connaît.",
            "zh": "乡下也有事情可做，而且大家都互相认识。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 27 ————— */
  "tb-l27": {
    "unit": 7,
    "no": "Leçon 27",
    "title": "Vivement les vacances ! 假期快来吧！",
    "text": [
      {
        "fr": "— Alors, dites-moi, les filles, vous allez où pendant les vacances ?",
        "zh": "——那么，姑娘们，告诉我，假期你们要去哪儿？"
      },
      {
        "fr": "— Ah ! moi, je pars à Arcachon dans ma famille.",
        "zh": "——啊！我呢，我要去阿卡雄，到我家人那儿。"
      },
      {
        "fr": "— Ah bon ? Ta famille habite là-bas ?",
        "zh": "——是吗？你的家人在那儿住？"
      },
      {
        "fr": "— Oui, enfin, mon frère et sa femme. Avec leurs deux enfants.",
        "zh": "——是的，准确说是我哥哥和他妻子，带着他们的两个孩子。"
      },
      {
        "fr": "— Ah ! mais j'adore les vacances avec eux ! On va à la plage, on se baigne, on s'amuse, on mange des glaces, on se repose.",
        "zh": "——啊！我特别喜欢和他们一起度假！我们去沙滩、游泳、玩耍、吃冰淇淋，还能好好休息。"
      },
      {
        "fr": "— Enfin, bref, les vacances, quoi !",
        "zh": "——总之，假期就是这样呗！"
      },
      {
        "fr": "— Eh bien, amuse-toi bien ! Mais moi, la plage, je ne peux pas. Je déteste ça ! Il fait trop chaud. Et je m'ennuie !",
        "zh": "——那好吧，祝你玩得开心！可我呢，沙滩我可受不了。我讨厌那儿！太热了。而且我觉得无聊！"
      },
      {
        "fr": "— Ah bon ? Tu vas faire quoi, alors ?",
        "zh": "——是吗？那你打算做什么？"
      },
      {
        "fr": "— Cette année, avec Max, nous allons faire du camping dans le Cantal, à la campagne.",
        "zh": "——今年，我和马克斯要去康塔尔乡下露营。"
      },
      {
        "fr": "— Tu sais, nous, on aime beaucoup le calme, la nature… et le camping. On adore ça !",
        "zh": "——你知道，我们特别喜欢安静、大自然……还有露营。我们太喜欢了！"
      },
      {
        "fr": "— Ah ! oui, oui… Et toi, alors, Virginie, tu fais quoi ?",
        "zh": "——啊，对，对……那你呢，维吉妮，你做什么？"
      },
      {
        "fr": "— Moi, je vais toujours à l'étranger. Cette année, je pars deux semaines en Sicile, dans un hôtel avec piscine.",
        "zh": "——我呢，我总是去国外。今年我要去西西里岛待两周，住一家带泳池的旅馆。"
      },
      {
        "fr": "— J'y suis allée deux fois. C'est vraiment beau et je me suis bien amusée.",
        "zh": "——我去过两次。那儿真的很美，我玩得很开心。"
      },
      {
        "fr": "— Bon, eh bien, les filles, calmez-vous maintenant, et arrêtez de rêver, parce que la pause-café, c'est fini. Allez, au travail !",
        "zh": "——好了，姑娘们，现在冷静下来，别再做梦了，因为咖啡休息时间结束了。来吧，工作吧！"
      },
      {
        "fr": "— Oh ! là, là ! Vivement les vacances !",
        "zh": "——哎呀！假期快来吧！"
      }
    ],
    "vocab": [
      {
        "fr": "Arcachon",
        "pos": "n.pr.",
        "zh": "阿卡雄（法国）"
      },
      {
        "fr": "amuser(s')",
        "pos": "v.pr.",
        "zh": "玩耍，游乐，自娱"
      },
      {
        "fr": "arrêter",
        "pos": "v.t.",
        "zh": "停止"
      },
      {
        "fr": "arrêter de faire qch.",
        "pos": "loc.v.",
        "zh": "停止做某事"
      },
      {
        "fr": "baigner(se)",
        "pos": "v.pr.",
        "zh": "游泳；洗澡，沐浴"
      },
      {
        "fr": "bref",
        "pos": "adv.",
        "zh": "总之，简而言之，简言之"
      },
      {
        "fr": "calmer(se)",
        "pos": "v.pr.",
        "zh": "冷静下来，镇定下来"
      },
      {
        "fr": "camping",
        "pos": "n.m.",
        "g": "m",
        "zh": "野营"
      },
      {
        "fr": "faire du camping",
        "pos": "loc.v.",
        "zh": "露营"
      },
      {
        "fr": "Cantal",
        "pos": "n.m.",
        "g": "m",
        "zh": "康塔尔（法国中南部大区省份）"
      },
      {
        "fr": "enfin",
        "pos": "adv.",
        "zh": "最后，终于；总之；（更正前面的话）其实，至少，不过"
      },
      {
        "fr": "ennuyer(s')",
        "pos": "v.pr.",
        "zh": "感到厌倦；感到烦恼"
      },
      {
        "fr": "étranger",
        "pos": "n.m.",
        "g": "m",
        "zh": "外国，异国"
      },
      {
        "fr": "à l'étranger",
        "pos": "loc.adv.",
        "zh": "去国外；在国外"
      },
      {
        "fr": "fini(e)",
        "pos": "adj.",
        "zh": "完成的，结束的"
      },
      {
        "fr": "glace",
        "pos": "n.f.",
        "g": "f",
        "zh": "冰；冰淇淋"
      },
      {
        "fr": "habitude",
        "pos": "n.f.",
        "g": "f",
        "zh": "习惯"
      },
      {
        "fr": "pause",
        "pos": "n.f.",
        "g": "f",
        "zh": "暂停，间歇，休息"
      },
      {
        "fr": "pause-café",
        "pos": "n.f.",
        "g": "f",
        "zh": "（俗）喝咖啡的休息时间"
      },
      {
        "fr": "rêver",
        "pos": "v.i.",
        "zh": "做梦"
      },
      {
        "fr": "Sicile(la)",
        "pos": "n.pr.",
        "zh": "西西里岛（意大利）"
      },
      {
        "fr": "soleil",
        "pos": "n.m.",
        "g": "m",
        "zh": "太阳，阳光"
      },
      {
        "fr": "super",
        "pos": "adj.inv.",
        "zh": "（俗）棒极了，最棒的"
      },
      {
        "fr": "toujours",
        "pos": "adv.",
        "zh": "一直，总是"
      },
      {
        "fr": "vivement",
        "pos": "adv.",
        "zh": "快，赶快（用作感叹词，表示命令或愿望）"
      },
      {
        "fr": "vraiment",
        "pos": "adv.",
        "zh": "真的，的确（用来加强肯定语气或表示惊奇等）"
      }
    ],
    "grammar": [
      {
        "t": "Le verbe pronominal (2) 代动词的命令式",
        "d": "第 15 课讲了代动词的构成和意义，本课讲代动词在命令式中的使用。<br>① 肯定命令式：自反代词位于动词<b>之后<\/b>，用连字符「-」连接，<b>te 要改为 toi<\/b>：<br><b>Couche-toi<\/b> tôt. 早点儿上床。<b>Levons-nous<\/b> tôt. 咱们早点儿起床。<b>Promenez-vous<\/b>. 您／你们散散步吧。<br>② 否定命令式：自反代词位于动词<b>之前<\/b>，否定词 ne 放在代词前面：<br><b>Ne te couche<\/b> pas trop tard. 别睡得太晚。<b>Ne nous levons<\/b> pas tard. 咱们别起晚了。Il pleut, <b>ne vous promenez<\/b> pas. 下雨了，您／你们别散步了。"
      },
      {
        "t": "代动词的复合过去时",
        "d": "代动词的复合过去时用 <b>être<\/b> 作助动词，过去分词是否与原主语性数配合，取决于自反代词在动词中是直接宾语还是间接宾语。<br>① 自反代词是直接宾语时，过去分词与主语性数配合：<b>Elles se sont lavées<\/b> avant le petit-déjeuner. 早饭前她们洗了澡。Elles <b>se sont rencontrées<\/b> à Paris. 她们是在巴黎认识的。（rencontrer 是及物动词，se 是直接宾语）。<br>② 自反代词是间接宾语时，过去分词不配合：<b>Elle s'est lavé<\/b> les mains avant le petit-déjeuner. 早饭前她洗了手。（直接宾语是 les mains）。Hier, elles <b>se sont parlé<\/b> longuement. 昨天她们交谈了很久。（parler à qn，se 是间接宾语）。<br>③ 课文中：Je <b>me suis bien amusée<\/b>. 我玩得很开心。（主语为女性，故配合）。"
      },
      {
        "t": "Les pronoms COD à l'impératif 命令式中的直接宾语人称代词",
        "d": "命令式中直接宾语人称代词的位置与间接宾语人称代词相同（参见第 21 课）。<br>① 肯定命令式：代词位于动词<b>之后<\/b>，用连字符连接，<b>me → moi，te → toi<\/b>：<br><b>Écoute-moi.<\/b> 听我说。<b>Appelle-nous<\/b> ce soir. 今晚给我们打电话。<b>Lève-toi<\/b> à 7 heures ! 七点起床！<b>Regardez-vous<\/b> dans la glace ! 照照镜子！<b>Excusez-le/la.<\/b> 原谅他／她吧。<b>Suivons-les !<\/b> 跟着他们／她们！<br>② 否定命令式：代词位于动词<b>之前<\/b>，ne 放在代词后，词形不变：<br><b>Ne la crois pas<\/b>, c'est une menteuse ! 别相信她，她是个骗子！Ce billet est à Philippe, <b>ne le prends pas<\/b> ! 这张票是菲利普的，别拿！"
      },
      {
        "t": "arrêter de + 不定式 与 aller 命令式感叹（Notes 注释 3、4）",
        "d": "<b>arrêter de + 动词不定式<\/b> 意为「停止做……」：Arrêtez de rêver ! 别做梦了！Elle a <b>arrêté d'<\/b> écrire. 她已经停止写作了。<br><b>aller 的命令式<\/b>可用作感叹词，带催促、鼓励或不耐烦的语气：Allez ! Fais un effort ! 来吧！努把力！Allons donc ! Tu plaisantes ! 得了吧！你开玩笑吧！Allez, arrête de pleurer ! 好啦，别哭啦！Va te promener ! （俗）滚开！"
      },
      {
        "t": "quoi 加强语气、结束列举（Notes 注释 1）",
        "d": "<b>quoi<\/b> 用来加强语气或结束解释和列举，意为「总之、就是这样、就是这么个」。<br>Enfin, bref, les vacances, <b>quoi<\/b> ! 总之，假期就是这样呗！<br>C'est un policier, un flic <b>quoi<\/b> ! 他是个警察，一个警察什么的！<br>Il m'a donné sa maison, sa voiture, son argent, tout, <b>quoi<\/b>. 他把房子、车、钱，总之所有的一切都给了我。"
      }
    ],
    "say": [
      {
        "title": "Exprimer des goûts 表达兴趣和喜好",
        "items": [
          {
            "fr": "J'adore les vacances avec les enfants !",
            "zh": "我特别喜欢和孩子们一起度假！"
          },
          {
            "fr": "Moi, la plage, je déteste ça. — On aime beaucoup la nature.",
            "zh": "我呢，沙滩我讨厌。——我们特别喜欢大自然。"
          },
          {
            "fr": "C'est vraiment beau ! / À la plage, je m'ennuie.",
            "zh": "真是太美了！／在沙滩上我觉得无聊。"
          }
        ]
      },
      {
        "title": "Donner des conseils 提出建议",
        "items": [
          {
            "fr": "Calmez-vous, les filles, et arrêtez de rêver !",
            "zh": "姑娘们，冷静点，别做梦了！"
          },
          {
            "fr": "Amuse-toi bien. / Repose-toi pendant les vacances.",
            "zh": "祝你玩得开心。／假期好好休息。"
          },
          {
            "fr": "Ne vous levez pas tard !",
            "zh": "别起晚了！"
          }
        ]
      },
      {
        "title": "Parler de ses projets de vacances 谈论假期计划",
        "items": [
          {
            "fr": "— Vous allez où pendant les vacances ? — Je pars à Arcachon dans ma famille.",
            "zh": "——假期你们去哪儿？——我去阿卡雄，到家人那儿。"
          },
          {
            "fr": "Nous allons faire du camping dans le Cantal.",
            "zh": "我们要去康塔尔露营。"
          },
          {
            "fr": "Cette année, je pars deux semaines en Sicile, dans un hôtel avec piscine.",
            "zh": "今年我要去西西里岛待两周，住一家带泳池的旅馆。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 28 ————— */
  "tb-l28": {
    "unit": 7,
    "no": "Leçon 28",
    "title": "Les Français en vacances 法国人过假期",
    "text": [
      {
        "fr": "ENQUÊTE — 1 à la mer 53, à la campagne 34, à la montagne 20, en ville 19.",
        "zh": "调查——① 去哪里度假：海边 53%，乡下 34%，山区 20%，城市 19%。"
      },
      {
        "fr": "2 en France 74, à l'étranger 26.",
        "zh": "② 在法国国内 74%，在国外 26%。"
      },
      {
        "fr": "3 en famille ou chez des amis 34, en location 19, en camping 17, à l'hôtel 13, en résidence secondaire 11, autres 6.",
        "zh": "③ 住宿方式：住亲友家 34%，租房 19%，露营 17%，住旅馆 13%，住第二住宅 11%，其他 6%。"
      },
      {
        "fr": "4 en juillet ou en août 80, pendant les autres mois 20.",
        "zh": "④ 出行时间：七月或八月 80%，其他月份 20%。"
      },
      {
        "fr": "5 pour retrouver ma famille 36, pour le soleil 20, pour la mer 17, pour les activités culturelles 14, pour les activités sportives 9, pour voir des amis 6.",
        "zh": "⑤ 出行原因：与家人团聚 36%，为了阳光 20%，为了大海 17%，为了文化活动 14%，为了体育活动 9%，为了看望朋友 6%。"
      },
      {
        "fr": "6 en famille 37, à deux, en couple 24, seul 12, avec des amis 9, en couple et avec des amis 6, en groupe organisé 2, autres 10.",
        "zh": "⑥ 与谁同行：全家 37%，两人、情侣 24%，独自 12%，和朋友 9%，情侣加朋友 6%，随团 2%，其他 10%。"
      },
      {
        "fr": "Chiffres donnés en pourcentages. Plusieurs réponses sont possibles.",
        "zh": "数字均以百分比表示。可以多选。"
      },
      {
        "fr": "D'après un sondage BVA pour le ministère du Tourisme, mai 2007.",
        "zh": "据 BVA 调查公司为法国旅游部所做的调查，2007 年 5 月。"
      },
      {
        "fr": "POINT DE VUE / par Michel Kling — Des vacances, oui… mais alors tranquilles !",
        "zh": "观点／米歇尔·克林——要度假，没错……但可得清静！"
      },
      {
        "fr": "Vous aimez être tranquille en vacances ? Alors, ne partez pas en juin et en juillet.",
        "zh": "您喜欢度假时清清静静？那就在六月和七月别出门。"
      },
      {
        "fr": "Ou bien partez à la montagne, il n'y a pas trop de monde.",
        "zh": "或者去山里，那儿人不太多。"
      },
      {
        "fr": "Eh oui ! les Français partent principalement pendant ces deux mois de l'année, en famille, et préfèrent aller à la mer…",
        "zh": "是啊！法国人主要在这两个月里全家出行，而且更喜欢去海边……"
      },
      {
        "fr": "C'est comme ça, ils détestent la campagne et adorent la plage.",
        "zh": "就是这样，他们讨厌乡下，却酷爱沙滩。"
      },
      {
        "fr": "Autre conseil. Dormez à l'hôtel : les Français dorment en général dans des campings.",
        "zh": "另一个建议：住旅馆吧——法国人一般都在露营地过夜。"
      },
      {
        "fr": "Ils trouvent ça pratique et pas cher.",
        "zh": "他们觉得这样方便又不贵。"
      },
      {
        "fr": "Et à l'étranger ? Vous ne voulez pas rencontrer trop de Français ? Là, pas trop de problèmes : beaucoup d'entre eux restent en France pour les vacances.",
        "zh": "那出国呢？您不想遇上太多法国人？这倒问题不大：他们中很多人度假都留在法国。"
      },
      {
        "fr": "Le temps des vacances — Ma chère Salima, je suis en ce moment au bord de la mer, à Arcachon, avec Élisa et Pauline.",
        "zh": "假期时光——亲爱的萨利玛：我这会儿正在阿卡雄的海边，和埃莉萨、波利娜在一起。"
      },
      {
        "fr": "Nous avons trouvé un petit hôtel très calme et très joli. Nous allons tous les jours à la plage à vélo et nous nous baignons souvent.",
        "zh": "我们找到一家很小、很安静也很漂亮的旅馆。我们每天骑车去沙滩，还经常游泳。"
      },
      {
        "fr": "Après la plage, on mange des glaces chez Ernest. Et, le soir, nous sortons au restaurant. Il fait chaud. On se repose. On adore !",
        "zh": "游完泳我们去欧内斯特家吃冰淇淋。晚上我们下馆子。天气很热。我们好好休息。太棒了！"
      },
      {
        "fr": "Et toi, comment se passent tes vacances à Venise ? Je t'embrasse, ma Salima. À bientôt. Adriana",
        "zh": "你呢，你在威尼斯的假期过得怎么样？亲你，我的萨利玛。回头见。阿德里亚娜"
      }
    ],
    "vocab": [
      {
        "fr": "août [u(t)]",
        "pos": "n.m.",
        "g": "m",
        "zh": "八月"
      },
      {
        "fr": "chiffre",
        "pos": "n.m.",
        "g": "m",
        "zh": "数字"
      },
      {
        "fr": "couple",
        "pos": "n.m.",
        "g": "m",
        "zh": "一对夫妇；一对情侣"
      },
      {
        "fr": "culturel(le)",
        "pos": "adj.",
        "zh": "文化的"
      },
      {
        "fr": "en",
        "pos": "prép.",
        "zh": "在……（状态、处境）；在……时候（多为月份、年份、季节等）；以……（方式、形式）"
      },
      {
        "fr": "mai",
        "pos": "n.m.",
        "g": "m",
        "zh": "五月"
      },
      {
        "fr": "ministère",
        "pos": "n.m.",
        "g": "m",
        "zh": "内阁；（政府的）部委"
      },
      {
        "fr": "montagne",
        "pos": "n.f.",
        "g": "f",
        "zh": "山"
      },
      {
        "fr": "organisé(e)",
        "pos": "adj.",
        "zh": "有组织的"
      },
      {
        "fr": "plusieurs",
        "pos": "adj.indéf.",
        "zh": "几个，好几个"
      },
      {
        "fr": "point de vue",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "观点，视角"
      },
      {
        "fr": "pourcentage",
        "pos": "n.m.",
        "g": "m",
        "zh": "百分比，百分率"
      },
      {
        "fr": "pratique",
        "pos": "adj.",
        "zh": "好用的，方便的"
      },
      {
        "fr": "principalement",
        "pos": "adv.",
        "zh": "主要地"
      },
      {
        "fr": "rencontrer",
        "pos": "v.t.",
        "zh": "碰见，遇见，结识"
      },
      {
        "fr": "réponse",
        "pos": "n.f.",
        "g": "f",
        "zh": "回答，答复；回信；答案"
      },
      {
        "fr": "résidence",
        "pos": "n.f.",
        "g": "f",
        "zh": "住所，住处，寓所"
      },
      {
        "fr": "résultat",
        "pos": "n.m.",
        "g": "m",
        "zh": "结果"
      },
      {
        "fr": "retrouver",
        "pos": "v.t.",
        "zh": "找；再次见到"
      },
      {
        "fr": "sondage",
        "pos": "n.m.",
        "g": "m",
        "zh": "抽样调查，民意测验"
      },
      {
        "fr": "secondaire",
        "pos": "adj.",
        "zh": "第二的；次要的"
      },
      {
        "fr": "sportif(ive)",
        "pos": "adj.",
        "zh": "有关体育的，运动的"
      },
      {
        "fr": "tranquille",
        "pos": "adj.",
        "zh": "安静的"
      },
      {
        "fr": "voir",
        "pos": "v.t.",
        "zh": "看望"
      }
    ],
    "grammar": [
      {
        "t": "Chiffres donnés en pourcentages（Notes 注释 2）",
        "d": "本课无独立 GRAMMAIRE 框，以下要点摘自 Notes 注释与课文。<br><b> donnés<\/b> 是动词 donner 的过去分词，此处可视为形容词（「给出的」），需与所修饰的名词 chiffres 保持性、数一致：Chiffres <b>donnés<\/b> en pourcentages. 以百分比给出的数据。<br>介词 <b>en<\/b> 引导的短语表示「以……的方式／形式」：en pourcentages 以百分比（形式）、en famille 以家庭为单位、en couple 两人一组。<br>注意：en 后面的名词无论单复数，均<b>不带冠词<\/b>：en France、en ville、en camping、en location、en juillet。"
      },
      {
        "t": "en 与 à 引出地点、住宿方式",
        "d": "调查图表中的地点与住宿表达：<br><b>en<\/b> + 阴性地名或泛指方式名词：en France 在法国、en ville 在城市、en famille 与家人一起、en couple 两人结伴、en location 租房、en camping 露营、en résidence secondaire 住第二住宅、en groupe organisé 随团。<br><b>à<\/b> + 地点：à la mer 在海边、à la campagne 在乡下、à la montagne 在山区、à l'hôtel 在旅馆、à l'étranger 在国外、en famille ou <b>chez<\/b> des amis 在亲友家。<br>例：Les Français dorment en général <b>dans des<\/b> campings. 法国人一般住露营地。Dormez <b>à l'hôtel<\/b> ! 住旅馆吧！"
      },
      {
        "t": "祈使句给出建议（POINT DE VUE 文章）",
        "d": "文章通篇用<b>祈使句（l'impératif）<\/b>给读者提建议，只用 vous 形式：<br><b>Ne partez pas<\/b> en juin et en juillet. 六月和七月别出门。<b>Ou bien partez<\/b> à la montagne. 或者去山里。<b>Dormez<\/b> à l'hôtel. 住旅馆吧。<br>否定祈使句 ne...pas 分置动词两侧：Ne partez pas... 别出发……<br>Savoir-faire 中：Calmez-vous et arrêtez de rêver ! 冷静点，别做梦了！"
      },
      {
        "t": "表达喜好与数量（阅读文章与调查）",
        "d": "<b>préférer + 动词不定式<\/b>：ils <b>préfèrent aller<\/b> à la mer. 他们更喜欢去海边。<br><b>détester / adorer + 名词<\/b>：ils <b>détestent<\/b> la campagne et <b>adorent<\/b> la plage. 他们讨厌乡下，酷爱沙滩。<br><b>trouver + 宾语 + 形容词<\/b>：Ils <b>trouvent ça pratique et pas cher<\/b>. 他们觉得这样方便又不贵。<br><b>beaucoup d'entre eux<\/b> 意为「他们中的许多人」：<b>Beaucoup d'entre eux<\/b> restent en France pour les vacances. 他们中很多人度假都留在法国。Il n'y a <b>pas trop de<\/b> monde. 人不太多。"
      }
    ],
    "say": [
      {
        "title": "Parler des résultats d'une enquête 谈论调查结果",
        "items": [
          {
            "fr": "53 % des Français vont à la mer, 34 % à la campagne.",
            "zh": "53% 的法国人去海边，34% 去乡下。"
          },
          {
            "fr": "Ils partent principalement en juillet ou en août.",
            "zh": "他们主要在七月或八月出发。"
          },
          {
            "fr": "En général, ils dorment dans des campings : ils trouvent ça pratique et pas cher.",
            "zh": "一般来说他们住露营地：觉得方便又不贵。"
          }
        ]
      },
      {
        "title": "Donner des conseils de voyage 给出旅行建议",
        "items": [
          {
            "fr": "Vous aimez être tranquille ? Ne partez pas en juin et en juillet !",
            "zh": "您喜欢清静？六月和七月就别出门！"
          },
          {
            "fr": "Ou bien partez à la montagne, il n'y a pas trop de monde.",
            "zh": "或者去山里，那儿人不太多。"
          },
          {
            "fr": "Dormez à l'hôtel, c'est pratique et pas cher.",
            "zh": "住旅馆吧，方便又不贵。"
          }
        ]
      },
      {
        "title": "Raconter ses vacances 讲述自己的假期（e-mail）",
        "items": [
          {
            "fr": "Je suis au bord de la mer, à Arcachon, avec Élisa et Pauline.",
            "zh": "我在阿卡雄海边，和埃莉萨、波利娜在一起。"
          },
          {
            "fr": "Nous allons tous les jours à la plage à vélo et nous nous baignons souvent.",
            "zh": "我们每天骑车去沙滩，经常游泳。"
          },
          {
            "fr": "Et toi, comment se passent tes vacances à Venise ?",
            "zh": "你呢，你在威尼斯的假期过得怎么样？"
          }
        ]
      }
    ]
  }
});
