/* =========================================================
   📚 教材模块数据 —— 《你好！法语 1》（外研社，改编自 Le Nouveau Taxi）
   结构：TB_UNITS（单元 → 课次）+ TB_LESSONS（每课详情）
   每课含：text 课文（逐句 fr + zh） / vocab 单词表 / grammar 语法知识 / say 学会说
   音频命名：assets/audio/textbook/{lessonId}-t{i}.mp3（课文）
             assets/audio/textbook/{lessonId}-w{i}.mp3（单词）
             assets/audio/textbook/{lessonId}-s{i}.mp3（学会说）
   ========================================================= */

const TB_UNITS = [
  { n: 1, title: "Unité 1 · Rencontres 相遇", lessons: ["tb-l1", "tb-l2", "tb-l3", "tb-l4"] },
  { n: 2, title: "Unité 2 · Portraits 画像",   lessons: ["tb-l5", "tb-l6", "tb-l7", "tb-l8"] }
];

const TB_LESSONS = {
  /* ————— Unité 1 相遇 ————— */
  "tb-l1": {
    unit: 1, no: "Leçon 1", title: "Bienvenue ! 欢迎！",
    text: [
      { fr: "— Bonjour, monsieur. Vous vous appelez… ?", zh: "您好，先生。您叫什么名字？" },
      { fr: "— Doucet. Yves Doucet. Et voici ma femme, Alice.", zh: "杜塞。伊夫·杜塞。这位是我的妻子，爱丽丝。" },
      { fr: "— Bonjour. Je suis Alice Doucet. Vous êtes madame Falco ?", zh: "您好。我是爱丽丝·杜塞。您是法尔科夫人吗？" },
      { fr: "— Bonjour, madame.", zh: "您好，夫人。" },
      { fr: "— Bonjour. Oui, je m'appelle Nicole Falco. Aldo, mon mari.", zh: "您好。是的，我叫妮科尔·法尔科。阿尔多，我的丈夫。" },
      { fr: "— Arnaud ?", zh: "阿尔诺？" },
      { fr: "— Non. Aldo. Il s'appelle Aldo.", zh: "不是。阿尔多。他叫阿尔多。" },
      { fr: "— Qui est-ce ?", zh: "这是谁？" },
      { fr: "— C'est Aldo. Aldo Falco.", zh: "这是阿尔多。阿尔多·法尔科。" },
      { fr: "— Aldo ? Il est italien ?", zh: "阿尔多？他是意大利人吗？" },
      { fr: "— Oui, et elle, c'est Nicole, elle est française.", zh: "是的，而她，是妮科尔，她是法国人。" },
      { fr: "— Tu t'appelles Giacomo ! Tu es italien ?", zh: "你叫贾科莫！你是意大利人吗？" },
      { fr: "— Oui, oui. Je suis italien.", zh: "是的，是的。我是意大利人。" }
    ],
    vocab: [
      { fr: "appeler (s')",   pos: "v.pr.",      zh: "名叫；叫" },
      { fr: "bienvenue",      pos: "n.f.",      g: "f", zh: "欢迎" },
      { fr: "bonjour",        pos: "n.m.",      g: "m", zh: "你好，早上好／白天好" },
      { fr: "ce",             pos: "pron.dém.", zh: "这，这个" },
      { fr: "elle",           pos: "pron.pers.", zh: "她，它" },
      { fr: "et",             pos: "conj.",     zh: "和，与，而且" },
      { fr: "être",           pos: "v.i.",      zh: "是；在" },
      { fr: "étudiant(e)",    pos: "n.",        zh: "大学生" },
      { fr: "femme",          pos: "n.f.",      g: "f", zh: "女人；妻子" },
      { fr: "français(e)",    pos: "adj.",      zh: "法国的，法国人的" },
      { fr: "Français(e)",    pos: "n.",        zh: "法国人" },
      { fr: "il",             pos: "pron.pers.", zh: "他，它" },
      { fr: "italien(ne)",    pos: "adj.",      zh: "意大利的" },
      { fr: "Italien(ne)",    pos: "n.",        zh: "意大利人" },
      { fr: "je",             pos: "pron.pers.", zh: "我" },
      { fr: "ma",             pos: "adj.poss.", zh: "我的" },
      { fr: "madame",         pos: "n.f.",      g: "f", zh: "夫人，太太，女士（复数 mesdames）" },
      { fr: "mari",           pos: "n.m.",      g: "m", zh: "丈夫" },
      { fr: "mon",            pos: "adj.poss.", zh: "我的" },
      { fr: "monsieur",       pos: "n.m.",      g: "m", zh: "先生" },
      { fr: "nationalité",    pos: "n.f.",      g: "f", zh: "国籍" },
      { fr: "nom",            pos: "n.m.",      g: "m", zh: "姓；名字" },
      { fr: "non",            pos: "adv.",      zh: "不，不是" },
      { fr: "oui",            pos: "adv.",      zh: "是，对" },
      { fr: "prénom",         pos: "n.m.",      g: "m", zh: "名字（名）" },
      { fr: "qui",            pos: "pron.interr.", zh: "谁" },
      { fr: "tu",             pos: "pron.pers.", zh: "你" },
      { fr: "voici",          pos: "prép.",     zh: "这是，这就是（用于介绍）" },
      { fr: "vous",           pos: "pron.pers.", zh: "您；你们" }
    ],
    grammar: [
      { t: "vous 还是 tu？", d: "法语的「你」有两种说法：<b>tu</b> 用于熟人、朋友、家人之间（单数第二人称）；" +
        "<b>vous</b> 用于第一次见面、上下级或不熟悉的人（尊称），同时也是「你们」（复数第二人称）。<br>" +
        "Vous vous appelez comment ? 您叫什么名字？<br>Tu t'appelles comment ? 你叫什么名字？" },
      { t: "动词变位：être（是）", d: "je <b>suis</b> ／ tu <b>es</b> ／ il/elle <b>est</b> ／ nous <b>sommes</b> ／ vous <b>êtes</b> ／ ils/elles <b>sont</b><br>" +
        "Je <b>suis</b> Alice Doucet. 我是爱丽丝·杜塞。<br>Elle <b>est</b> française. 她是法国人。" },
      { t: "动词变位：s'appeler（名叫）", d: "je m'<b>appelle</b> ／ tu t'<b>appelles</b> ／ il/elle s'<b>appelle</b> ／ nous nous <b>appelons</b> ／ vous vous <b>appelez</b> ／ ils/elles s'<b>appellent</b><br>" +
        "Je m'<b>appelle</b> Nicole Falco. 我叫妮科尔·法尔科。<br>Il s'<b>appelle</b> Aldo. 他叫阿尔多。" },
      { t: "阳性 / 阴性", d: "法语形容词要和名词性数一致：阳性 <b>français / italien</b>，阴性在词尾加 -e → <b>française / italienne</b>。<br>" +
        "Il est italien. 他是意大利人。<br>Elle est française. 她是法国人。<br>" +
        "名词也一样：un étudiant（男生）／ une étudiante（女生）。" },
      { t: "疑问句的三种说法", d: "<b>① 用语调</b>（口语最常用）：Vous êtes italien ? 您是意大利人吗？<br>" +
        "<b>② est-ce que + 主语 + 动词</b>：Est-ce que vous êtes italien ?<br>" +
        "<b>③ 主谓倒装</b>（较正式）：Êtes-vous italien ?" },
      { t: "疑问词 qui（谁）", d: "<b>Qui est-ce ?</b> 这是谁？（回答用 C'est… / Ce sont…）<br>" +
        "<b>Qui êtes-vous ?</b> 您是谁？<br>Qui est-ce ? — Ce sont Aldo et Giacomo. 他们是谁？——是阿尔多和贾科莫。" },
      { t: "C'est… / Ce sont…", d: "介绍某人、某物：单数用 <b>C'est</b>，复数用 <b>Ce sont</b>。<br>" +
        "C'est Aldo. 这是阿尔多。<br>Ce sont Aldo et Giacomo. 这是阿尔多和贾科莫。" }
    ],
    say: [
      { title: "Saluer 打招呼", items: [
        { fr: "— Bonjour.", zh: "您好。／早上好。" },
        { fr: "— Bonjour, monsieur.", zh: "您好，先生。" },
        { fr: "— Bonjour, madame Doucet.", zh: "您好，杜塞夫人。" }
      ]},
      { title: "Se présenter 自我介绍", items: [
        { fr: "— Je suis Alice Doucet.", zh: "我是爱丽丝·杜塞。" },
        { fr: "— Je m'appelle Nicole Falco. Voici Aldo, mon mari.", zh: "我叫妮科尔·法尔科。这位是阿尔多，我丈夫。" },
        { fr: "— Je suis français(e).", zh: "我是法国人。" }
      ]},
      { title: "Demander et dire le prénom et le nom 询问并说出姓名", items: [
        { fr: "— Qui est-ce ? — C'est Aldo Falco.", zh: "这是谁？——这是阿尔多·法尔科。" },
        { fr: "— Il/Elle s'appelle Doucet.", zh: "他／她姓杜塞。" }
      ]}
    ]
  },

  "tb-l2": {
    unit: 1, no: "Leçon 2", title: "Qui est-ce ? 这是谁？",
    text: [
      { fr: "— Qui est-ce ?", zh: "这是谁？" },
      { fr: "— C'est Naoko, non ?", zh: "是直子吧？" },
      { fr: "— Naoko ?", zh: "直子？" },
      { fr: "— Oui, Naoko Yamada. Elle est étudiante.", zh: "是的，山田直子。她是大学生。" },
      { fr: "— Elle est sympa ?", zh: "她人好吗？" },
      { fr: "— Oui. Elle est dans le cours de français, elle est japonaise.", zh: "好。她在法语班上课，她是日本人。" },
      { fr: "— Elle habite en France ou au Japon ?", zh: "她住在法国还是日本？" },
      { fr: "— Elle habite en Suisse, à Genève.", zh: "她住在瑞士，日内瓦。" },
      { fr: "— Ah ! c'est Émilie Constant, l'assistante de M. Devaux, le directeur. Et elle, c'est la secrétaire, Mme Moreno.",
        zh: "啊！这是艾米莉·康斯坦，德沃先生——主任——的助理。而她，是秘书，莫雷诺夫人。" },
      { fr: "— Et lui, qui est-ce ?", zh: "那他呢，他是谁？" },
      { fr: "— C'est Pierre, il est professeur.", zh: "这是皮埃尔，他是老师。" },
      { fr: "— Elle, c'est Anna. Elle est étudiante et elle est belge. Luigi, lui, il est italien.",
        zh: "她嘛，是安娜。她是大学生，比利时人。路易吉呢，他是意大利人。" },
      { fr: "— Carlos est espagnol et Lin est chinoise.", zh: "卡洛斯是西班牙人，林是中国人。" }
    ],
    vocab: [
      { fr: "à",               pos: "prép.",     zh: "在，向（用于城市：à Paris）" },
      { fr: "ah",              pos: "interj.",   zh: "啊！嘿！（表示惊讶、领会）" },
      { fr: "assistant(e)",    pos: "n.",        zh: "助理，助手" },
      { fr: "belge",           pos: "adj.",      zh: "比利时的" },
      { fr: "Belge",           pos: "n.",        zh: "比利时人" },
      { fr: "café",            pos: "n.m.",      g: "m", zh: "咖啡；咖啡馆" },
      { fr: "chinois(e)",      pos: "adj.",      zh: "中国的" },
      { fr: "Chinois(e)",      pos: "n.",        zh: "中国人" },
      { fr: "cours",           pos: "n.m.",      g: "m", zh: "课，课程" },
      { fr: "dans",            pos: "prép.",     zh: "在……里，在……中" },
      { fr: "directeur (trice)", pos: "n.",      zh: "主任，经理，负责人" },
      { fr: "en",              pos: "prép.",     zh: "在……（用于阴性国家／元音开头国家）" },
      { fr: "espagnol(e)",     pos: "adj.",      zh: "西班牙的" },
      { fr: "Espagnol(e)",     pos: "n.",        zh: "西班牙人" },
      { fr: "français",        pos: "n.m.",      g: "m", zh: "法语" },
      { fr: "France",          pos: "n.f.",      g: "f", zh: "法国" },
      { fr: "Genève",          pos: "n.pr.",     zh: "日内瓦" },
      { fr: "habiter",         pos: "v.",        zh: "居住" },
      { fr: "Japon",           pos: "n.m.",      g: "m", zh: "日本" },
      { fr: "japonais(e)",     pos: "adj.",      zh: "日本的" },
      { fr: "Japonais(e)",     pos: "n.",        zh: "日本人" },
      { fr: "ou",              pos: "conj.",     zh: "或者" },
      { fr: "professeur",      pos: "n.m.",      g: "m", zh: "教师，教授" },
      { fr: "rendez-vous",     pos: "n.m.",      g: "m", zh: "约会，会面（sur rendez-vous 需预约）" },
      { fr: "secrétaire",      pos: "n.",        zh: "秘书" },
      { fr: "s'il vous plaît", pos: "loc.",      zh: "请，劳驾" },
      { fr: "Suisse",          pos: "n.f.",      g: "f", zh: "瑞士" },
      { fr: "sympa",           pos: "adj.inv.",  zh: "热情的，好相处的人（sympathique 的口语形式）" },
      { fr: "téléphone",       pos: "n.m.",      g: "m", zh: "电话" },
      { fr: "thé",             pos: "n.m.",      g: "m", zh: "茶" }
    ],
    grammar: [
      { t: "定冠词（1）：le / la / les", d: "法语名词前一般要加冠词：<b>le</b>（阳性单数）、<b>la</b>（阴性单数）、<b>les</b>（复数）。<br>" +
        "le cours ／ la secrétaire ／ les étudiants<br>" +
        "以元音或哑音 h 开头的名词前，le / la 要省音变成 <b>l'</b>：le étudiant → <b>l'</b>étudiant，la étudiante → <b>l'</b>étudiante，" +
        "le homme → <b>l'</b>homme，la héroïne → <b>l'</b>héroïne。" },
      { t: "职业名词前不加冠词", d: "表示职业、身份时，动词 être 后面<b>直接加名词，不加冠词</b>：<br>" +
        "Elle est <b>étudiante</b>. 她是大学生。× Elle est une étudiante.<br>Il est <b>professeur</b>. 他是老师。<br>" +
        "但用 c'est / ce sont 时又要有冠词：C'est <b>une</b> étudiante. Ce sont <b>des</b> médecins." },
      { t: "non 放在句末表示确认", d: "<b>non</b> 放在句末，相当于中文的「……吧？」，希望对方确认。<br>" +
        "C'est Naoko, <b>non</b> ? 是直子吧？<br>Naoko est dans le cours de français, <b>non</b> ? 直子在法语班，对吧？" },
      { t: "介词 + 城市名", d: "城市前一律用 <b>à</b>：Il habite <b>à</b> Paris. ／ Elle habite <b>à</b> Genève. ／ Il habite <b>au</b> Caire.（au = à + le，因为 le Caire 带冠词）" },
      { t: "介词 + 国家名", d: "<b>en</b> + 阴性国家／元音开头国家：en France, en Italie, en Iran, en Suisse, en Belgique<br>" +
        "<b>au</b> + 阳性国家：au Japon, au Canada, au Sénégal<br>" +
        "<b>aux</b> + 复数国家：aux États-Unis, aux Philippines, aux Pays-Bas" },
      { t: "名词的阴性形式", d: "同一职业的男女形式：<b>le secrétaire / la secrétaire</b>、<b>le photographe / la photographe</b>（词形相同）；" +
        "传统上只用阳性的职业，要区分时用 <b>femme</b>：le professeur → la <b>femme</b> professeur；le médecin → la <b>femme</b> médecin。<br>" +
        "也有完全不同的词：un homme / une femme，un garçon / une fille。" },
      { t: "形容词的阴性形式", d: "一般在阳性形容词后加 <b>-e</b>：japonais → japonaise，espagnol → espagnole，belge → belge（已以 -e 结尾不变）。" +
        "注意：<b>sympa</b> 是口语缩略词，性数永远不变（un ami sympa / une amie sympa）。" }
    ],
    say: [
      { title: "Identifier une personne 辨认某人", items: [
        { fr: "— Qui est-ce ?", zh: "这是谁？" },
        { fr: "— C'est Mario / Claudia.", zh: "这是马里奥／克劳迪娅。" },
        { fr: "— Il/Elle s'appelle…", zh: "他／她叫……" },
        { fr: "— Il/Elle est français(e).", zh: "他／她是法国人。" },
        { fr: "— Il/Elle est étudiant(e).", zh: "他／她是大学生。" }
      ]}
    ]
  },

  "tb-l3": {
    unit: 1, no: "Leçon 3", title: "Ça va bien ? 你好吗？",
    text: [
      { fr: "— Salut, Céline, tu vas bien ?", zh: "你好，塞琳，你还好吗？" },
      { fr: "— Oui, ça va bien. Et toi ?", zh: "挺好的。你呢？" },
      { fr: "— Je vais bien, merci. J'habite à Montréal, maintenant, avec ma femme.", zh: "我很好，谢谢。我现在和我妻子住在蒙特利尔。" },
      { fr: "— Au Canada ?", zh: "在加拿大？" },
      { fr: "— Oui, oui, au Canada.", zh: "是的，是的，在加拿大。" },
      { fr: "— Ah ! C'est bien. Et quelle est ton adresse ?", zh: "啊！真好。那你的地址是什么？" },
      { fr: "— Mon adresse ? Alors, c'est : David Delage. 35, rue Notre-Dame, à Montréal.", zh: "我的地址？是这样的：大卫·德拉热。蒙特利尔圣母街 35 号。" },
      { fr: "— Et tu as une adresse e-mail ?", zh: "你有电子邮箱吗？" },
      { fr: "— Oui, c'est : ddelage@hotmail.com.", zh: "有，是：ddelage@hotmail.com。" },
      { fr: "— Comment va ton ami espagnol ?", zh: "你的西班牙朋友好吗？" },
      { fr: "— Luis ? Il va bien. Il est à Paris avec son fils. Il parle français maintenant.", zh: "路易斯？他很好。他和儿子在巴黎。他现在说法语了。" },
      { fr: "— Ah ! bonjour, monsieur Legrand. Comment allez-vous ?", zh: "啊！您好，勒格朗先生。您近来可好？" },
      { fr: "— Ça va, ça va, merci. Et vous, madame Lebon ?", zh: "挺好的，挺好的，谢谢。您呢，勒邦夫人？" },
      { fr: "— Oh ! oui, moi, je vais bien.", zh: "噢！我呀，我很好。" },
      { fr: "— Et votre bébé ? Il va bien ?", zh: "您的宝宝呢？他好吗？" },
      { fr: "— Ça va, ça va.", zh: "挺好的，挺好的。" },
      { fr: "— C'est un garçon ou une fille ?", zh: "是男孩还是女孩？" },
      { fr: "— Ah ! un garçon.", zh: "啊！是个男孩。" },
      { fr: "— Et il a quel âge maintenant ?", zh: "那他现在多大了？" },
      { fr: "— Vous aussi, monsieur Legrand, au revoir, bonne journée.", zh: "您也一样，勒格朗先生，再见，祝您度过愉快的一天。" }
    ],
    vocab: [
      { fr: "adresse",         pos: "n.f.",      g: "f", zh: "地址" },
      { fr: "âge",             pos: "n.m.",      g: "m", zh: "年龄" },
      { fr: "aller",           pos: "v.i.",      zh: "去；（身体）情况如何" },
      { fr: "ami(e)",          pos: "n.",        zh: "朋友" },
      { fr: "au revoir",       pos: "loc.",      zh: "再见" },
      { fr: "avoir",           pos: "v.t.",      zh: "有" },
      { fr: "bébé",            pos: "n.m.",      g: "m", zh: "婴儿，宝宝" },
      { fr: "bonne journée",   pos: "loc.",      zh: "祝你白天愉快（白天分别时说）" },
      { fr: "bonne soirée",    pos: "loc.",      zh: "祝你晚上愉快（傍晚分别时说）" },
      { fr: "comment",         pos: "adv.interr.", zh: "怎样，怎么" },
      { fr: "e-mail",          pos: "n.m.",      g: "m", zh: "电子邮件（une adresse e-mail 电子邮箱）" },
      { fr: "fille",           pos: "n.f.",      g: "f", zh: "女孩；女儿" },
      { fr: "garçon",          pos: "n.m.",      g: "m", zh: "男孩；儿子" },
      { fr: "hôtel",           pos: "n.m.",      g: "m", zh: "旅馆，酒店" },
      { fr: "maintenant",      pos: "adv.",      zh: "现在" },
      { fr: "merci",           pos: "interj.",   zh: "谢谢" },
      { fr: "numéro",          pos: "n.m.",      g: "m", zh: "号码，号数" },
      { fr: "profession",      pos: "n.f.",      g: "f", zh: "职业" },
      { fr: "quel(le)",        pos: "adj.interr.", zh: "什么样的，哪（一）个" },
      { fr: "salut",           pos: "interj.",   zh: "你好！／再见！（熟人之间，口语）" },
      { fr: "un / une",        pos: "art.indéf.", zh: "一个（不定冠词）" },
      { fr: "voisin(e)",       pos: "n.",        zh: "邻居，邻座" },
      { fr: "Montréal",        pos: "n.pr.",     zh: "蒙特利尔（加拿大城市）" },
      { fr: "arobase",         pos: "n.m.",      g: "m", zh: "「@」符号（法语读作 arobase）" },
      { fr: "affaire",         pos: "n.f.",      g: "f", zh: "事情（Les affaires vont bien. 一切顺利）" }
    ],
    grammar: [
      { t: "动词 aller（去／身体如何）", d: "je <b>vais</b> ／ tu <b>vas</b> ／ il/elle <b>va</b> ／ nous <b>allons</b> ／ vous <b>allez</b> ／ ils/elles <b>vont</b><br>" +
        "Comment allez-vous ? 您好吗？<br>Je vais bien. 我很好。／ Ça va. 挺好的。" },
      { t: "动词 avoir（有）", d: "j'<b>ai</b> ／ tu <b>as</b> ／ il/elle <b>a</b> ／ nous <b>avons</b> ／ vous <b>avez</b> ／ ils/elles <b>ont</b><br>" +
        "J'<b>ai</b> 25 ans. 我 25 岁。<br>Il <b>a</b> quel âge ? 他多大了？" },
      { t: "主有形容词（1）", d: "mon / ma / mes（我的）；ton / ta / tes（你的）；son / sa / ses（他／她的）；notre / nos（我们的）；votre / vos（您的，你们的）；leur / leurs（他们的）。<br>" +
        "注意：以元音或哑音 h 开头的阴性名词前，ma / ta / sa 要换成 <b>mon / ton / son</b>：<b>mon</b> école、<b>ton</b> amie、<b>son</b> histoire。" },
      { t: "不定冠词（1）：un / une / des", d: "<b>un</b> + 阳性名词，<b>une</b> + 阴性名词，<b>des</b> + 复数。<br>" +
        "C'est <b>un</b> livre. 这是一本书。<br>C'est <b>un</b> professeur. 这是一位老师。<br>C'est <b>une</b> étudiante. 这是一位女大学生。" },
      { t: "疑问词 quel（什么样的／哪一）", d: "quel / quelle / quels / quelles，要和后面的名词性数一致。<br>" +
        "<b>Quel</b> est votre nom ? 您贵姓？<br><b>Quelle</b> est votre adresse ? 您的地址是什么？<br>" +
        "<b>Quels</b> livres ? 哪些书？<br><b>Quelle</b> voiture tu cherches ? 你在找哪辆车？" },
      { t: "词末重音（l'accent tonique）", d: "法语的重音落在<b>词组的最后一个音节</b>上（不是每个单词都有重音）。朗读时把词组连起来，只在末尾加重。<br>" +
        "例：Paul Du<b>faut</b> // a une adresse e-<b>mail</b>." },
      { t: "回答「你好吗」的多种说法", d: "Ça va bien ? ／ Tu vas bien ? ／ Comment allez-vous ? 的回答可以是：<br>" +
        "Ça va bien. 挺好的。／ Je vais très bien. 我非常好。／ Tout va bien. 一切顺利。<br>" +
        "Les affaires vont bien. 事情进展顺利（用于工作、生意）。<br>aller bien 的变位要记牢：je vais bien、tu vas bien、il/elle va bien。" },
      { t: "邮箱地址里的 @ 怎么读", d: "法语把「@」读作 <b>arobase</b>（[aʁɔbaz]）。邮箱地址读法：<br>" +
        "ddelage@hotmail.com → ddelage <b>arobase</b> hotmail point com（「.」读作 point）。" }
    ],
    say: [
      { title: "Demander des nouvelles 询问近况", items: [
        { fr: "— Comment allez-vous ? — Ça va, merci. Et vous ?", zh: "您近来可好？——挺好的，谢谢。您呢？" },
        { fr: "— Tu vas bien ? — Ça va. Et toi ?", zh: "你还好吗？——挺好的。你呢？" }
      ]},
      { title: "Demander l'âge, l'adresse, le numéro de téléphone 询问年龄、地址、电话", items: [
        { fr: "— Il a quel âge maintenant ?", zh: "他现在多大了？" },
        { fr: "— Quel est votre numéro de téléphone ?", zh: "您的电话号码是多少？" },
        { fr: "— Quelle est votre adresse e-mail ?", zh: "您的电子邮箱地址是什么？" }
      ]}
    ]
  },

  "tb-l4": {
    unit: 1, no: "Leçon 4", title: "Correspondants 寻找笔友",
    text: [
      { fr: "Salut ! Je m'appelle Diouf. J'ai 29 ans. J'habite à Dakar, au Sénégal. Je vais souvent au cinéma. Je cherche un correspondant en France ou au Canada. Mon e-mail : diouf29@webzine.com",
        zh: "大家好！我叫迪乌夫。我 29 岁。我住在塞内加尔的达喀尔。我常去看电影。我想找一位在法国或加拿大的笔友。我的邮箱：diouf29@webzine.com" },
      { fr: "Je m'appelle Antoine. J'ai 25 ans et j'habite à Bruxelles, en Belgique. Je suis étudiant. J'aime la lecture, la nature et la musique classique. Mon e-mail : antoine.leconte@webzine.com",
        zh: "我叫安托万。我 25 岁，住在比利时的布鲁塞尔。我是大学生。我喜欢阅读、大自然和古典音乐。我的邮箱：antoine.leconte@webzine.com" },
      { fr: "Moi, c'est Marion. Je suis québécoise. J'ai 18 ans et j'habite à Montréal. J'aime le sport : le volley-ball, le golf… Je cherche une amie en Europe. Mon e-mail : marion@webzine.net",
        zh: "我嘛，是玛丽翁。我是魁北克人。我 18 岁，住在蒙特利尔。我喜欢运动：排球、高尔夫……我想找一位欧洲的女性朋友。我的邮箱：marion@webzine.net" },
      { fr: "Bonjour, je m'appelle Pauline et j'ai 31 ans. Je suis guyanaise : j'habite à Cayenne. Je suis secrétaire. Je parle français, anglais et espagnol. J'aime beaucoup la danse. Je cherche une correspondante de 30 à 40 ans. Mon e-mail : pauline31@webzine.fr",
        zh: "你们好，我叫波琳，31 岁。我是圭亚那人：住在卡宴。我是秘书。我会说法语、英语和西班牙语。我很喜欢舞蹈。我想找一位 30 到 40 岁之间的女性笔友。我的邮箱：pauline31@webzine.fr" },
      { fr: "Je m'appelle Sandro et j'habite en Suisse, à Lausanne. J'ai 22 ans. Je suis boulanger. J'aime la photo. Mon e-mail : sandro.carre@webzine.ch",
        zh: "我叫桑德罗，住在瑞士洛桑。我 22 岁。我是面包师。我喜欢摄影。我的邮箱：sandro.carre@webzine.ch" },
      { fr: "Bonjour Sandro, je m'appelle Marco et j'ai dix-neuf ans. J'habite au Brésil. Mon père est dentiste et ma mère est professeur. J'aime beaucoup la lecture, le football et le rap. Je parle portugais, espagnol, anglais et français (un peu). À bientôt ! Marco",
        zh: "你好桑德罗，我叫马可，19 岁。我住在巴西。我父亲是牙医，母亲是教师。我很喜欢阅读、足球和说唱音乐。我会说葡萄牙语、西班牙语、英语和（一点点）法语。再见！马可" }
    ],
    vocab: [
      { fr: "aimer",           pos: "v.t.",      zh: "喜欢，爱" },
      { fr: "an",              pos: "n.m.",      g: "m", zh: "年；岁（avoir … ans ……岁）" },
      { fr: "assez",           pos: "adv.",      zh: "相当，足够" },
      { fr: "aussi",           pos: "adv.",      zh: "也，同样" },
      { fr: "beaucoup",        pos: "adv.",      zh: "很，非常（beaucoup de + 名词 许多）" },
      { fr: "Belgique",        pos: "n.f.",      g: "f", zh: "比利时" },
      { fr: "Bruxelles",       pos: "n.pr.",     zh: "布鲁塞尔" },
      { fr: "chercher",        pos: "v.t.",      zh: "寻找" },
      { fr: "classique",       pos: "adj.",      zh: "古典的，经典的" },
      { fr: "correspondance",  pos: "n.f.",      g: "f", zh: "通信，书信往来" },
      { fr: "correspondant(e)", pos: "n.",       zh: "笔友，通信朋友" },
      { fr: "Dakar",           pos: "n.pr.",     zh: "达喀尔" },
      { fr: "danse",           pos: "n.f.",      g: "f", zh: "舞蹈" },
      { fr: "de",              pos: "prép.",     zh: "从；……的（de … à … 从……到……）" },
      { fr: "espagnol",        pos: "n.m.",      g: "m", zh: "西班牙语" },
      { fr: "Europe",          pos: "n.f.",      g: "f", zh: "欧洲" },
      { fr: "golf",            pos: "n.m.",      g: "m", zh: "高尔夫球" },
      { fr: "guyanais(e)",     pos: "adj./n.",   zh: "圭亚那的；圭亚那人" },
      { fr: "Lausanne",        pos: "n.pr.",     zh: "洛桑" },
      { fr: "lecture",         pos: "n.f.",      g: "f", zh: "阅读" },
      { fr: "moi",             pos: "pron.pers.", zh: "我（重读人称代词）" },
      { fr: "monde",           pos: "n.m.",      g: "m", zh: "世界（tout le monde 大家）" },
      { fr: "musique",         pos: "n.f.",      g: "f", zh: "音乐" },
      { fr: "nature",          pos: "n.f.",      g: "f", zh: "大自然，自然" },
      { fr: "photo(graphie)",  pos: "n.f.",      g: "f", zh: "照片；摄影" },
      { fr: "québécois(e)",    pos: "adj./n.",   zh: "魁北克的；魁北克人" },
      { fr: "Sénégal",         pos: "n.m.",      g: "m", zh: "塞内加尔" },
      { fr: "sœur",            pos: "n.f.",      g: "f", zh: "姐妹" },
      { fr: "souvent",         pos: "adv.",      zh: "经常" },
      { fr: "sport",           pos: "n.m.",      g: "m", zh: "运动，体育" },
      { fr: "volley-ball",     pos: "n.m.",      g: "m", zh: "排球" }
    ],
    grammar: [
      { t: "-er 动词的现在时变位", d: "法语最多的规则动词以 -er 结尾，变位规律：词干 + -e, -es, -e, -ons, -ez, -ent。<br>" +
        "aimer：j'aime ／ tu aimes ／ il/elle aime ／ nous aimons ／ vous aimez ／ ils/elles aiment<br>" +
        "chercher：je cherche ／ tu cherches ／ il cherche ／ nous cherchons ／ vous cherchez ／ ils cherchent<br>" +
        "parler：je parle ／ tu parles ／ elle parle ／ nous parlons ／ vous parlez ／ ils parlent" },
      { t: "表达年龄：avoir + 数字 + ans", d: "法语说「多少岁」用<b> avoir</b>（有），不用 être：<br>" +
        "J'<b>ai</b> 29 ans. 我 29 岁。<br>Il <b>a</b> quel âge ? 他几岁？" },
      { t: "de … à … 从……到……", d: "用来表示范围、距离：<br>de Paris <b>à</b> Marseille 从巴黎到马赛<br>" +
        "une correspondante <b>de</b> 30 <b>à</b> 40 ans 一位 30 到 40 岁之间的女性笔友" },
      { t: "国家与城市前的介词（复习）", d: "城市：<b>à</b> Dakar、<b>à</b> Bruxelles、<b>à</b> Cayenne<br>" +
        "阴性／元音开头国家：<b>en</b> France、<b>en</b> Belgique、<b>en</b> Suisse、<b>en</b> Guyane<br>" +
        "阳性国家：<b>au</b> Sénégal、<b>au</b> Canada、<b>au</b> Japon<br>复数国家：<b>aux</b> États-Unis" },
      { t: "parler + 语言", d: "说某种语言直接用 parler + 语言名词，不加介词也不加冠词：<br>" +
        "Je parle <b>français</b>, anglais et espagnol. 我说法语、英语和西班牙语。<br>" +
        "Je parle français <b>un peu</b>. 我会说一点法语。" },
      { t: "文化点滴：La Francophonie 法语国家和地区", d: "全世界有 40 多个国家和地区使用法语，除法国本土外还有：la Belgique、la Suisse、le Luxembourg、le Monaco、" +
        "le Canada（la province de Québec）、la Guyane française、la Guadeloupe、la Martinique，以及非洲的 le Sénégal、le Mali、" +
        "le Maroc、l'Algérie、la Tunisie、la Côte d'Ivoire、le Bénin、le Burkina Faso 等。" }
    ],
    say: [
      { title: "Parler de ses goûts 谈论自己的爱好", items: [
        { fr: "— J'aime beaucoup la lecture et la musique classique.", zh: "我很喜欢阅读和古典音乐。" },
        { fr: "— J'aime le sport : le volley-ball, le golf…", zh: "我喜欢运动：排球、高尔夫……" }
      ]},
      { title: "Écrire à un(e) correspondant(e) 给笔友写邮件", items: [
        { fr: "— Bonjour, je m'appelle … et j'ai … ans.", zh: "你好，我叫……，我……岁。" },
        { fr: "— J'habite à … Je suis … Je cherche un(e) correspondant(e).", zh: "我住在……。我是……。我想找一位笔友。" },
        { fr: "— Mon e-mail : …", zh: "我的邮箱：……" }
      ]}
    ]
  },

  /* ————— Unité 2 画像 ————— */
  "tb-l5": {
    unit: 2, no: "Leçon 5", title: "Trouvez l'objet 找出物品",
    text: [
      { fr: "— Son chapeau et son blouson, c'est ça ?",
        zh: "她的帽子和她的夹克衫，是这些吗？" },
      { fr: "— Oui, son chapeau et son blouson. Ils sont dans la chambre de Madame, sous l'étagère à côté de la fenêtre.",
        zh: "是的，她的帽子和夹克衫。它们在夫人的卧室里，窗户旁边的架子底下。" },
      { fr: "— L'étagère avec des livres à gauche de la fenêtre ?",
        zh: "是带着书的、在窗户左边的那个架子吗？" },
      { fr: "— Non ! L'étagère contre le mur à droite de la fenêtre… sous les affiches ! Oh là là !",
        zh: "不！是靠着墙、在窗户右边的那个架子……在海报底下！哎呀呀！" },
      { fr: "— À droite de… Ah oui ! Sur la chaise, il y a un blouson et un chapeau.",
        zh: "在……的右边……啊，对了！椅子上有一件夹克衫和一顶帽子。" },
      { fr: "— Voilà ! C'est ça !",
        zh: "瞧！就是这些！" }
    ],
    vocab: [
      { fr: "affiche",        pos: "n.f.",      g: "f", zh: "海报，广告" },
      { fr: "assiette",       pos: "n.f.",      g: "f", zh: "盘子" },
      { fr: "au-dessus",      pos: "loc.adv.",  zh: "在上面" },
      { fr: "au-dessus de",   pos: "loc.prép.", zh: "在上面，……以上" },
      { fr: "avec",           pos: "prép.",     zh: "具有，带有" },
      { fr: "blouson",        pos: "n.m.",      g: "m", zh: "夹克衫" },
      { fr: "chaise",         pos: "n.f.",      g: "f", zh: "椅子" },
      { fr: "chambre",        pos: "n.f.",      g: "f", zh: "房间；卧室" },
      { fr: "chapeau",        pos: "n.m.",      g: "m", zh: "帽子" },
      { fr: "chat",           pos: "n.m.",      g: "m", zh: "猫" },
      { fr: "contre",         pos: "prép.",     zh: "靠，挨" },
      { fr: "côté",           pos: "n.m.",      g: "m", zh: "旁，侧" },
      { fr: "à côté (de)",    pos: "loc.adv.",  zh: "在（……的）旁边" },
      { fr: "cuiller",        pos: "n.f.",      g: "f", zh: "匙，勺" },
      { fr: "de",             pos: "prép.",     zh: "[表示所属、所有]" },
      { fr: "devant",         pos: "prép.",     zh: "在……前面" },
      { fr: "droite",         pos: "n.f.",      g: "f", zh: "右面，右边，右方" },
      { fr: "à droite (de)",  pos: "loc.adv.",  zh: "在（……的）右边" },
      { fr: "étagère",        pos: "n.f.",      g: "f", zh: "（固定在墙上的）格，隔板，架子；多层架子" },
      { fr: "fauteuil",       pos: "n.m.",      g: "m", zh: "扶手椅" },
      { fr: "fenêtre",        pos: "n.f.",      g: "f", zh: "窗，窗子，窗户；玻璃窗" },
      { fr: "fleur",          pos: "n.f.",      g: "f", zh: "花" },
      { fr: "gauche",         pos: "n.f.",      g: "f", zh: "左，左边，左面" },
      { fr: "à gauche (de)",  pos: "loc.adv.",  zh: "在（……的）左边" },
      { fr: "il y a",         pos: "loc.v.",    zh: "有……" },
      { fr: "là",             pos: "interj.",   zh: "好啦，哟；咦" },
      { fr: "lit",            pos: "n.m.",      g: "m", zh: "床" },
      { fr: "livre",          pos: "n.m.",      g: "m", zh: "书，书本，书籍" },
      { fr: "meuble",         pos: "n.m.",      g: "m", zh: "家具" },
      { fr: "mur",            pos: "n.m.",      g: "m", zh: "墙，壁" },
      { fr: "nounours",       pos: "n.m.",      g: "m", zh: "小熊毛绒玩偶（儿语）" },
      { fr: "objet",          pos: "n.m.",      g: "m", zh: "物，物体；物品，东西" },
      { fr: "oh",             pos: "interj.",   zh: "噢！哦！哟！哎呀！" },
      { fr: "ordinateur",     pos: "n.m.",      g: "m", zh: "电脑" },
      { fr: "pièce",          pos: "n.f.",      g: "f", zh: "房间" },
      { fr: "pomme",          pos: "n.f.",      g: "f", zh: "苹果" },
      { fr: "porte",          pos: "n.f.",      g: "f", zh: "门" },
      { fr: "que",            pos: "pron.interrog.", zh: "什么" },
      { fr: "sac",            pos: "n.m.",      g: "m", zh: "包" },
      { fr: "sous",           pos: "prép.",     zh: "在……下面" },
      { fr: "sur",            pos: "prép.",     zh: "在……上面" },
      { fr: "table",          pos: "n.f.",      g: "f", zh: "桌子" },
      { fr: "tapis",          pos: "n.m.",      g: "m", zh: "地毯" },
      { fr: "trouver",        pos: "v.t.",      zh: "找到，发现" },
      { fr: "vase",           pos: "n.m.",      g: "m", zh: "花瓶" },
      { fr: "verre",          pos: "n.m.",      g: "m", zh: "玻璃杯" },
      { fr: "voilà",          pos: "prép.",     zh: "那就是这，这就是" },
      { fr: "portable",       pos: "n.m.",      g: "m", zh: "手机", extra: true }
    ],
    grammar: [
      { t: "ça 的用法", d: "ça 在口语中用得很多，意为「这，这个，这样」，可以指代一件事、一个状态。" +
        "在课文这句话里，ça 指前面「要找帽子和夹克衫」这件事。<br>" +
        "<b>Son chapeau et son blouson, c'est ça ?</b> （要找的）她的帽子和夹克衫，是这样吗？" },
      { t: "à côté / à côté de 在旁边", d: "<b>à côté</b> 在旁边<br>Il habite <b>à côté</b>. 他住在旁边。<br>" +
        "<b>à côté de</b> 在……的旁边<br><b>À côté de</b> la table, il y a une chaise. 桌子的旁边有一把椅子。" },
      { t: "à gauche / à gauche de 在左边", d: "<b>à gauche</b> 在左边；朝左，向左<br>" +
        "En Angleterre, les voitures roulent <b>à gauche</b>. 在英国，汽车靠左行驶。<br>" +
        "<b>à gauche de</b> 在……的左边<br>Anne est assise <b>à gauche de</b> Sophie. 安娜坐在索菲的左边。" },
      { t: "à droite / à droite de 在右边", d: "<b>à droite</b> 在右边；朝右，向右<br>tourner <b>à droite</b> 向右转<br>" +
        "<b>à droite de</b> 在……的右边<br>La cafétéria est <b>à droite du</b> cinéma. 咖啡馆在电影院右侧。" },
      { t: "Oh là là ! 哎呀呀！", d: "这里表示<b>不耐烦</b>，暗含的意思是「怎么这么笨，找这点东西都这么费劲！」" },
      { t: "il y a 表示「有，存在」", d: "后面接人或事物。<b>il y a 的形式保持不变</b>（无论后面的名词是单数还是复数），" +
        "这与英语的 there be 结构恰好相反。<br>Il y a <b>un livre</b> sur la chaise. 椅子上有一本书。<br>" +
        "Il y a <b>des livres</b> sur la chaise. 椅子上有一些书。" }
    ],
    say: [
      { title: "Nommer des objets 说出物品的名称",
        items: [
          { fr: "— Qu'est-ce que c'est ?", zh: "这是什么？" },
          { fr: "— C'est une photo. / Ce sont des photos.", zh: "这是（一张）照片。/ 这些是照片。" }
        ] },
      { title: "Montrer et situer des objets 指出物品，确定其位置",
        items: [
          { fr: "— Les livres sont sur l'étagère.", zh: "书在架子上。" },
          { fr: "— Ils sont dans la chambre, sous l'étagère à côté de la fenêtre.", zh: "它们在卧室里，窗户旁边的架子底下。" }
        ] }
    ]
  },

  "tb-l6": {
    unit: 2, no: "Leçon 6", title: "Portrait-robot 模拟画像",
    text: [
      { fr: "— Alors. Ils sont grands ? petits ?", zh: "那么。他们个子高吗？矮吗？" },
      { fr: "— Il y a un homme, grand et… blond.", zh: "有一个男人，高个子，而且……金色头发。" },
      { fr: "— Oui, c'est ça, il est blond. L'autre homme, il est petit et brun.", zh: "对，就是这样，他是金发。另一个男人，个子矮，深色头发。" },
      { fr: "— D'accord. Est-ce qu'ils ont des lunettes ?", zh: "好的。他们戴眼镜吗？" },
      { fr: "— Non, non, ils n'ont pas de lunettes.", zh: "不，不，他们不戴眼镜。" },
      { fr: "— Et leurs vêtements ?", zh: "他们的衣服呢？" },
      { fr: "— L'homme blond porte un tee-shirt blanc et un pantalon noir.", zh: "金发男人穿着白色 T 恤和黑色长裤。" },
      { fr: "— Non, bleu, un pantalon bleu. C'est un jean.", zh: "不对，蓝色的，一条蓝色长裤。那是条牛仔裤。" },
      { fr: "— L'homme brun, lui, il a un blouson.", zh: "深色头发的那个男人呢，他有一件夹克。" },
      { fr: "— De quelle couleur ?", zh: "什么颜色的？" },
      { fr: "— La couleur de son blouson… non, ce n'est pas noir. rouge. oui, rouge.", zh: "他夹克的颜色……不，不是黑色。红色。对，红色。" },
      { fr: "— Autre chose ?", zh: "还有别的吗？" },
      { fr: "— Oui, sa chemise est verte.", zh: "有，他的衬衫是绿色的。" },
      { fr: "— Et ses chaussures ?", zh: "他的鞋呢？" },
      { fr: "— Ah ! ce sont des baskets.", zh: "啊！是运动鞋。" }
    ],
    vocab: [
      { fr: "autre",           pos: "adj.",      zh: "另外的，其他的" },
      { fr: "basket",          pos: "n.f.",      g: "f", zh: "运动鞋（多用复数 baskets）" },
      { fr: "blanc(che)",      pos: "adj.",      zh: "白色的" },
      { fr: "bleu(e)",         pos: "adj.",      zh: "蓝色的" },
      { fr: "blond(e)",        pos: "adj.",      zh: "金黄色的（头发）" },
      { fr: "brun(e)",         pos: "adj.",      zh: "棕色的，深褐色的（头发）" },
      { fr: "chaussure",       pos: "n.f.",      g: "f", zh: "鞋" },
      { fr: "chemise",         pos: "n.f.",      g: "f", zh: "（男式）衬衫（女式为 chemisier）" },
      { fr: "chose",           pos: "n.f.",      g: "f", zh: "事情，东西" },
      { fr: "couleur",         pos: "n.f.",      g: "f", zh: "颜色" },
      { fr: "d'accord",        pos: "loc.adv.",  zh: "同意，好的，行" },
      { fr: "grand(e)",        pos: "adj.",      zh: "大的；高个子的" },
      { fr: "homme",           pos: "n.m.",      g: "m", zh: "男人；人" },
      { fr: "jean",            pos: "n.m.",      g: "m", zh: "牛仔裤" },
      { fr: "leur(s)",         pos: "adj.poss.", zh: "他／她们的" },
      { fr: "lui",             pos: "pron.pers.", zh: "他（重读人称代词）" },
      { fr: "lunettes",        pos: "n.f.pl.",   zh: "眼镜（永远用复数）" },
      { fr: "ne … pas",        pos: "adv.",      zh: "不，没有（否定）" },
      { fr: "noir(e)",         pos: "adj.",      zh: "黑色的" },
      { fr: "pantalon",        pos: "n.m.",      g: "m", zh: "长裤" },
      { fr: "petit(e)",        pos: "adj.",      zh: "小的；矮个子的" },
      { fr: "porter",          pos: "v.t.",      zh: "穿着，戴着，拿着" },
      { fr: "portrait-robot",  pos: "n.m.",      g: "m", zh: "（根据描述拼出的）模拟画像" },
      { fr: "rouge",           pos: "adj.",      zh: "红色的" },
      { fr: "tee-shirt",       pos: "n.m.",      g: "m", zh: "T 恤衫" },
      { fr: "vert(e)",         pos: "adj.",      zh: "绿色的" },
      { fr: "vêtement",        pos: "n.m.",      g: "m", zh: "衣服，服装" }
    ],
    grammar: [
      { t: "否定：ne … pas", d: "法语否定要把 ne 放在<b>动词前</b>，pas 放在<b>动词后</b>，把动词夹在中间。<br>" +
        "Je <b>n'</b>habite <b>pas</b> ici. 我不住这儿。<br>Il <b>n'</b>aime <b>pas</b> cette ville. 他不喜欢这座城市。<br>" +
        "Ce ne sont <b>pas</b> mes fleurs. 这些不是我的花。（注意 ne 在句首动词前）" },
      { t: "否定句中的 de", d: "完全否定时，不定冠词 un / une / des 和部分冠词要变成 <b>de</b>（在元音前 de → d'）。<br>" +
        "J'ai un frère. → Je <b>n'</b>ai <b>pas de</b> frère. 我没有兄弟。<br>" +
        "Ils ont des lunettes. → Ils <b>n'</b>ont <b>pas de</b> lunettes. 他们没有眼镜。<br>" +
        "Il y a une table. → Il <b>n'</b>y a <b>pas de</b> table. 这儿没有桌子。" },
      { t: "重读人称代词（1）", d: "moi（我）、toi（你）、lui（他）／elle（她）、nous（我们）、vous（您／你们）、eux／elles（他们／她们）。<br>" +
        "用在介词后、c'est 后，或强调主语：<br>Tu viens avec <b>moi</b> ? 你和我一起来吗？<br>" +
        "Moi, je m'appelle Paul. 我嘛，我叫保罗。<br>La chemise verte est à <b>lui</b>. 那件绿衬衫是他的。" },
      { t: "主有形容词（2）：notre / votre / leur", d: "notre, nos（我们的）；votre, vos（你们的／您的）；leur, leurs（他／她们的）。<br>" +
        "注意复数：nos amis、vos amies、leurs vêtements。<br>" +
        "提醒：单数时遇到元音开头的阴性名词仍用阳性形式 —— mon erreur、ton habitude、son histoire。" },
      { t: "形容词的性数配合", d: "形容词必须与所修饰的名词<b>性（阴／阳）数（单／复）</b>一致：<br>" +
        "Elle a une robe <b>verte</b> et des chaussures <b>noires</b>. 她有一条绿裙子和几双黑鞋。<br>" +
        "Il a des cheveux <b>blonds</b>. 他有金色头发。<br>Il est grand, sa sœur est <b>petite</b>. 他个子高，他妹妹个子矮。" },
      { t: "名词 / 形容词的复数", d: "一般加 <b>-s</b>：un livre → des livres，vert → verts。<br>" +
        "以 -s, -x, -z 结尾的<b>不变</b>：un cours → des cours，gris → gris。<br>" +
        "以 -eau 结尾加 <b>-x</b>：un drapeau → des drapeaux，nouveau → nouveaux。<br>" +
        "以 -al 结尾变 <b>-aux</b>：un cheval → des chevaux，national → nationaux。" },
      { t: "lunettes 只有复数", d: "lunettes（眼镜）和法语里一些「成双」的名词永远用复数，配合也要用复数：<br>" +
        "des lunettes <b>noires</b> 墨镜；des lunettes <b>de</b> soleil 太阳镜。" }
    ],
    say: [
      { title: "Décrire une personne 描述一个人", items: [
        { fr: "— Il est grand / petit / blond / brun.", zh: "他个子高／矮／金发／深褐色头发。" },
        { fr: "— Il porte un tee-shirt blanc et un pantalon bleu.", zh: "他穿着白色 T 恤和蓝色长裤。" },
        { fr: "— Il n'a pas de lunettes.", zh: "他不戴眼镜。" }
      ]},
      { title: "Indiquer les couleurs 说明颜色", items: [
        { fr: "— Le pantalon est de quelle couleur ? — Il est noir.", zh: "这条裤子是什么颜色的？——是黑色的。" },
        { fr: "— De quelle couleur est son blouson ? — Il est rouge.", zh: "他的夹克是什么颜色的？——是红色的。" }
      ]},
      { title: "Exprimer la possession 表示所属", items: [
        { fr: "— À qui est le tee-shirt rouge ? À Patrick ? — Oui, il est à lui.", zh: "这件红 T 恤是谁的？帕特里克的？——是的，是他的。" },
        { fr: "— Ses chaussures sont noires.", zh: "他的鞋是黑色的。" }
      ]}
    ]
  },

  "tb-l7": {
    unit: 2, no: "Leçon 7", title: "Shopping 购物",
    text: [
      { fr: "— Bonjour, mesdames, qu'est-ce que vous cherchez ?", zh: "您好，女士们，你们想买什么？" },
      { fr: "— Des vêtements pour ma fille et mon fils.", zh: "给我女儿和儿子买些衣服。" },
      { fr: "— Quel âge ont-ils ?", zh: "他们多大了？" },
      { fr: "— Ma fille a 16 ans et mon fils 14.", zh: "我女儿 16 岁，儿子 14 岁。" },
      { fr: "— Pour les filles, c'est sur les étagères à gauche et pour les garçons, à droite.", zh: "女孩的衣服在左边货架上，男孩的在右边。" },
      { fr: "— Comment est-ce que tu trouves ce pantalon ?", zh: "你觉得这条裤子怎么样？" },
      { fr: "— J'aime bien ce type de pantalon, c'est très joli !", zh: "我挺喜欢这种款式的裤子，很漂亮！" },
      { fr: "— Vous avez quelles couleurs, s'il vous plaît ?", zh: "请问有哪些颜色？" },
      { fr: "— Ce pantalon ? Il y a bleu, gris ou noir.", zh: "这条裤子吗？有蓝色、灰色和黑色。" },
      { fr: "— Il coûte combien ?", zh: "多少钱？" },
      { fr: "— 59 euros.", zh: "59 欧元。" },
      { fr: "— Ce n'est pas très cher !", zh: "不算太贵！" },
      { fr: "— Hum, hum. Pas très cher.", zh: "嗯，嗯。不太贵。" },
      { fr: "— Vous avez le gris en taille 38 ?", zh: "灰色的有 38 码吗？" },
      { fr: "— Oui, oui.", zh: "有的，有的。" },
      { fr: "— Cette robe verte, tu aimes ?", zh: "这条绿色连衣裙，你喜欢吗？" },
      { fr: "— Oh, non ! Pas du tout.", zh: "噢，不！一点也不喜欢。" },
      { fr: "— Ah bon ! Et ce pull ? Il est joli, non ?", zh: "是吗！那这件毛衣呢？挺漂亮的，不是吗？" },
      { fr: "— Oui, le bleu et blanc, j'aime bien.", zh: "是的，蓝白相间的那件，我挺喜欢。" },
      { fr: "— Combien ça coûte ?", zh: "这个多少钱？" },
      { fr: "— 35 euros.", zh: "35 欧元。" },
      { fr: "— Bon, alors… Ce pull et ce pantalon, ça fait combien, s'il vous plaît ?", zh: "那么……这件毛衣和这条裤子，请问一共多少钱？" },
      { fr: "— 35 et 59… ça fait 94 euros, madame.", zh: "35 加 59……一共 94 欧元，夫人。" },
      { fr: "— Voilà.", zh: "给您。" }
    ],
    vocab: [
      { fr: "bien",           pos: "adv.",        zh: "好（J'aime bien 我挺喜欢）" },
      { fr: "bon(ne)",        pos: "adj.",        zh: "好的；合适的" },
      { fr: "cher(ère)",      pos: "adj.",        zh: "昂贵的（cher / chère）" },
      { fr: "combien",        pos: "adv.interr.", zh: "多少（问数量、价格）" },
      { fr: "coûter",         pos: "v.i.",        zh: "值，价钱为" },
      { fr: "euro",           pos: "n.m.",        g: "m", zh: "欧元" },
      { fr: "faire",          pos: "v.t.",        zh: "做；faire + 金额 = 共计" },
      { fr: "gris(e)",        pos: "adj.",        zh: "灰色的" },
      { fr: "hum",            pos: "interj.",     zh: "嗯（表示犹豫、思考）" },
      { fr: "joli(e)",        pos: "adj.",        zh: "漂亮的，好看的" },
      { fr: "pour",           pos: "prép.",       zh: "为了，给" },
      { fr: "pull",           pos: "n.m.",        g: "m", zh: "套头毛衣（pull-over 的简写）" },
      { fr: "robe",           pos: "n.f.",        g: "f", zh: "连衣裙" },
      { fr: "shopping",       pos: "n.m.",        g: "m", zh: "购物，逛街买东西" },
      { fr: "taille",         pos: "n.f.",        g: "f", zh: "尺码；（腰）身" },
      { fr: "très",           pos: "adv.",        zh: "很，非常" },
      { fr: "trouver",        pos: "v.t.",        zh: "觉得，认为；找到" },
      { fr: "type",           pos: "n.m.",        g: "m", zh: "类型，款式（ce type de… 这种……）" }
    ],
    grammar: [
      { t: "疑问词 quel 的复数形式", d: "quel / quelle / quels / quelles，与后面名词性数一致。<br>" +
        "<b>Quels</b> vêtements est-ce qu'il porte ? 他穿哪些衣服？<br>" +
        "Vous avez <b>quelles</b> couleurs ? 您有哪些颜色？<br><b>Quels</b> sont vos romans ? 您的小说有哪些？" },
      { t: "疑问词 comment 和 combien", d: "<b>comment</b> 问「怎么样」：<br>Comment est-ce que tu trouves ce pantalon ? 你觉得这条裤子怎么样？<br>" +
        "Elle est comment, ton amie Christine ? 你的朋友克里斯蒂娜人怎么样？<br>" +
        "<b>combien</b> 问数量、价格：<br>Elle coûte combien, cette robe ? 这条裙子多少钱？<br>Combien ça coûte ? 这个多少钱？" },
      { t: "指示形容词：ce / cet / cette / ces", d: "<b>ce</b> + 阳性单数（ce pantalon）；<b>cet</b> + 元音／哑音 h 开头的阳性单数（cet objet, cet hôtel）；" +
        "<b>cette</b> + 阴性单数（cette année, cette robe）；<b>ces</b> + 所有复数（ces étudiants, ces chaussures）。<br>" +
        "相当于中文的「这个／那个」，复数是 ces（这些／那些）。" },
      { t: "问价格与回答", d: "<b>Il/Elle coûte combien ?</b> ／ <b>Combien ça coûte ?</b> ／ <b>Quel est le prix de… ?</b><br>" +
        "回答：<b>Ça fait</b> 59 euros. 一共 59 欧元。／ Il coûte 30 euros.<br>" +
        "注意：faire 用于算术 —— Deux et deux <b>font</b> quatre. 二加二等于四。" },
      { t: "cher / chère 的性是配合出来的", d: "cher 是形容词，要跟着名词变：<br>Ce pantalon n'est pas très <b>cher</b>. 这条裤子不太贵。<br>" +
        "Cette robe n'est pas très <b>chère</b>. 这条裙子不太贵。<br>" +
        "作副词「贵」时用 coûter：Elle ne coûte pas très <b>cher</b>.（此处 cher 不变）" },
      { t: "数字 70 – 1000", d: "70 soixante-dix ／ 71 soixante et onze ／ 80 quatre-vingts ／ 90 quatre-vingt-dix ／ 100 cent ／ 1000 mille。<br>" +
        "注意：法语 70–99 用「60+10、4×20」的方式表达，需要单独记。" }
    ],
    say: [
      { title: "Caractériser un objet 描述物品特征", items: [
        { fr: "— C'est un pull bleu. Il est très joli.", zh: "这是一件蓝色毛衣。它很漂亮。" },
        { fr: "— Ce sac est très grand.", zh: "这个包很大。" },
        { fr: "— Ce n'est pas cher.", zh: "这个不贵。" }
      ]},
      { title: "Demander et indiquer le prix 询问并说出价格", items: [
        { fr: "— Il coûte combien ? — Ça fait 59 euros.", zh: "这个多少钱？——一共 59 欧元。" },
        { fr: "— Quel est le prix de ce pull ? — Il coûte 30 euros.", zh: "这件毛衣多少钱？——30 欧元。" }
      ]},
      { title: "Exprimer des goûts 表达喜好", items: [
        { fr: "— Tu aimes cette robe ? — J'aime beaucoup.", zh: "你喜欢这条裙子吗？——我很喜欢。" },
        { fr: "— Pas du tout.", zh: "一点也不（喜欢）。" }
      ]}
    ]
  },

  "tb-l8": {
    unit: 2, no: "Leçon 8", title: "Le coin des artistes 艺术家之角",
    text: [
      { fr: "La femme est au centre de la photo et l'homme est à côté d'elle, à gauche : il porte des vêtements noirs.",
        zh: "女人站在照片中央，男人挨着她、在左边：他穿着黑色衣服。" },
      { fr: "Elle, elle porte un chapeau. Sur la table, il y a des verres et des fleurs.",
        zh: "她呢，戴着一顶帽子。桌子上有玻璃杯和花。" },
      { fr: "Une autre femme est à côté de la femme au chapeau.",
        zh: "另一位女人挨着戴帽子的那位女人。" },
      { fr: "Il y a un homme et une femme. L'homme porte une chemise blanche.",
        zh: "有一个男人和一个女人。男人穿着白衬衫。" },
      { fr: "Il n'a pas de lunettes et il n'a pas de chapeau.",
        zh: "他不戴眼镜，也不戴帽子。" },
      { fr: "La table est entre l'homme et la femme. Sur la table, il y a du café ou du thé.",
        zh: "桌子在男人和女人之间。桌上有咖啡或茶。" },
      { fr: "Le poète est entre Henri Matisse et Camille Claudel.", zh: "诗人在亨利·马蒂斯和卡米耶·克洛岱尔之间。" },
      { fr: "Claude Debussy est à droite dans le tableau.", zh: "克洛德·德彪西在画的右边。" },
      { fr: "Le sculpteur est une femme.", zh: "雕塑家是位女性。" },
      { fr: "Colette est à gauche du peintre.", zh: "科莱特在画家的左边。" },
      { fr: "Le poète est à gauche du sculpteur et à droite du peintre.", zh: "诗人在雕塑家左边、画家右边。" },
      { fr: "À côté de Claude Debussy, il y a le sculpteur.", zh: "在克洛德·德彪西旁边的是雕塑家。" },
      { fr: "Le peintre est à côté de l'écrivain.", zh: "画家挨着作家。" },
      { fr: "L'écrivain est à gauche dans le tableau.", zh: "作家在画的左边。" },
      { fr: "Guillaume Apollinaire n'est pas le musicien.", zh: "纪尧姆·阿波利奈尔不是那位音乐家。" }
    ],
    vocab: [
      { fr: "artiste",         pos: "n.",        zh: "艺术家" },
      { fr: "coin",            pos: "n.m.",      g: "m", zh: "角落；专栏" },
      { fr: "des",             pos: "art.contr.", zh: "缩合冠词（de + les），一些" },
      { fr: "du",              pos: "art.contr.", zh: "缩合冠词（de + le），一些" },
      { fr: "écrivain",        pos: "n.m.",      g: "m", zh: "作家" },
      { fr: "entre",           pos: "prép.",     zh: "在……之间" },
      { fr: "film",            pos: "n.m.",      g: "m", zh: "电影" },
      { fr: "même",            pos: "adj./n.",   zh: "相同的；同样（le/la même 同一个）" },
      { fr: "musicien(ne)",    pos: "n.",        zh: "音乐家" },
      { fr: "orange",          pos: "n.f.",      g: "f", zh: "橙子" },
      { fr: "peintre",         pos: "n.",        zh: "画家" },
      { fr: "poème",           pos: "n.m.",      g: "m", zh: "诗，诗作" },
      { fr: "poète",           pos: "n.m.",      g: "m", zh: "诗人" },
      { fr: "sculpteur(trice)", pos: "n.",       zh: "雕塑家" },
      { fr: "tableau",         pos: "n.m.",      g: "m", zh: "①画，画作 ②表格" },
      { fr: "tapis",           pos: "n.m.",      g: "m", zh: "地毯" }
    ],
    grammar: [
      { t: "缩合冠词 du / des", d: "介词 <b>de</b> 遇到定冠词要缩合：de + le = <b>du</b>，de + les = <b>des</b>（de + la、de + l' 不变）。<br>" +
        "在「有……」的句子里表示不确定的量：<br>Sur la table, il y a <b>du</b> café（一些咖啡，不可数）／ <b>des</b> fleurs（一些花，可数复数）。" },
      { t: "方位表达（复习与扩充）", d: "<b>entre</b> A et B 在 A 与 B 之间；<b>à côté de</b> 在……旁边；<b>à gauche de</b> 在……左边；" +
        "<b>à droite de</b> 在……右边；<b>au centre de</b> 在……中央；<b>sur</b> 在……上面；<b>dans</b> 在……里面。<br>" +
        "注意缩合：à côté <b>du</b> peintre（de + le）；au centre <b>de la</b> photo。" },
      { t: "Il y a … 有……", d: "表示某处存在某物，后面加 du / de la / des + 名词（不确指）。<br>" +
        "Il y a <b>du</b> café sur la table. 桌上有咖啡。<br>Il y a <b>des</b> verres et <b>des</b> fleurs. 有玻璃杯和花。<br>" +
        "否定：Il n'y a <b>pas de</b> table dans ma chambre." },
      { t: "职业名词与定冠词", d: "指某个人（尤其是特指画中／照片中的人）时要用定冠词：<br>" +
        "<b>le</b> peintre 画家、<b>l'</b>écrivain 作家、<b>le</b> musicien 音乐家、<b>la</b> sculptrice 女雕塑家、<b>le</b> poète 诗人。<br>" +
        "而说「他是画家」时不用冠词：Il est peintre." },
      { t: "文化点滴：艺术家之角", d: "本课照片与画作里出现的法语艺术家：Édith Piaf（1915-1963，歌手）、" +
        "Marion Cotillard（1975- ，演员，《玫瑰人生》主演）、Gérard Depardieu（1948- ，演员）、" +
        "Henri Matisse（1869-1954，画家）、Camille Claudel（1864-1943，雕塑家）、Claude Debussy（1862-1918，作曲家）、" +
        "Colette（1873-1954，作家）、Guillaume Apollinaire（1880-1918，诗人）。" }
    ],
    say: [
      { title: "Décrire une photo / un tableau 描述照片或画作", items: [
        { fr: "— La femme est au centre de la photo.", zh: "女人在照片中央。" },
        { fr: "— L'homme est à côté d'elle, à gauche : il porte des vêtements noirs.", zh: "男人在她旁边、靠左：他穿着黑色衣服。" },
        { fr: "— Sur la table, il y a des verres et des fleurs.", zh: "桌上有玻璃杯和花。" }
      ]},
      { title: "Situer des personnes 确定人物的位置", items: [
        { fr: "— Le poète est entre Henri Matisse et Camille Claudel.", zh: "诗人在亨利·马蒂斯和卡米耶·克洛岱尔之间。" },
        { fr: "— Colette est à gauche du peintre.", zh: "科莱特在画家的左边。" }
      ]},
      { title: "Identifier une profession artistique 说出艺术职业", items: [
        { fr: "— C'est un peintre / un écrivain / un musicien.", zh: "这是一位画家／作家／音乐家。" },
        { fr: "— Le sculpteur est une femme.", zh: "雕塑家是位女性。" }
      ]}
    ]
  }
};

if (typeof window !== "undefined"){
  window.__TB_UNITS = TB_UNITS;
  window.__TB_LESSONS = TB_LESSONS;
}
