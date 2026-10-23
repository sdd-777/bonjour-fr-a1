/* ============================================================
   法语 A1 · 板块提问模板 + 趣味小故事
   QA_TEMPLATES：每个单词板块「怎么开口问」的常用句型
   STORIES：用已学单词编的小故事（分句 + 中文 + 语法点）
   音频：assets/audio/words/q-{cat}-{i}.mp3 / st-{story}-{line}.mp3
   ============================================================ */

const QA_TEMPLATES = {
  countries: {
    label: "国家与国籍 · 怎么问",
    tip: "问国籍有三种套路：<b>De quel pays / D'où / être + 国籍形容词</b>。注意形容词要跟着对方变阴阳：Tu es chinois ? / Tu es chinoise ?",
    items: [
      { fr: "Tu es de quel pays ?", zh: "你是哪国人？（你来自哪个国家？）",
        parts: [{t:"Tu",p:"[ty]"},{t:"es",p:"[e]"},{t:"de",p:"[də]"},{t:"quel",p:"[kɛl]"},{t:"pays",p:"[pɛ.i]"}] },
      { fr: "Elle est chinoise ?", zh: "她是中国人吗？",
        parts: [{t:"Elle",p:"[ɛl]"},{t:"est",p:"[ɛ]"},{t:"chi",p:"[ʃi]"},{t:"noi",p:"[nwa]"},{t:"se",p:"[z]"}] },
      { fr: "D'où viens-tu ?", zh: "你来自哪里？",
        parts: [{t:"D'où",p:"[du]"},{t:"viens",p:"[vjɛ̃]"},{t:"tu",p:"[ty]"}] },
      { fr: "Il est français ou canadien ?", zh: "他是法国人还是加拿大人？",
        parts: [{t:"Il",p:"[il]"},{t:"est",p:"[ɛ]"},{t:"fran",p:"[fʁɑ̃]"},{t:"çais",p:"[sɛ]"},{t:"ou",p:"[u]"},{t:"ca",p:"[ka]"},{t:"na",p:"[na]"},{t:"dien",p:"[djɛ̃]"}] },
      { fr: "Je suis japonais. Et toi ?", zh: "我是日本人。你呢？",
        parts: [{t:"Je",p:"[ʒə]"},{t:"suis",p:"[sɥi]"},{t:"ja",p:"[ʒa]"},{t:"po",p:"[pɔ]"},{t:"nais",p:"[nɛ]"},{t:"Et",p:"[e]"},{t:"toi",p:"[twa]"}] },
      { fr: "Vous êtes américaine ?", zh: "您（女士）是美国人吗？",
        parts: [{t:"Vous",p:"[vu]"},{t:"êtes",p:"[ɛt]"},{t:"a",p:"[a]"},{t:"mé",p:"[me]"},{t:"ri",p:"[ʁi]"},{t:"cai",p:"[kɛ]"},{t:"ne",p:"[n]"}] }
    ]
  },
  jobs: {
    label: "职业 · 怎么问",
    tip: "问职业用 <b>Qu'est-ce que tu fais ?</b>（直译：你做什么？）。回答：<b>Je suis + 职业</b>——注意法语这里<b>不加冠词</b>，不说 je suis un étudiant。",
    items: [
      { fr: "Qu'est-ce que tu fais ?", zh: "你是做什么的？",
        parts: [{t:"Qu'est",p:"[kɛs]"},{t:"ce",p:"[sə]"},{t:"que",p:"[kə]"},{t:"tu",p:"[ty]"},{t:"fais",p:"[fɛ]"}] },
      { fr: "Il est chanteur ?", zh: "他是歌手吗？",
        parts: [{t:"Il",p:"[il]"},{t:"est",p:"[ɛ]"},{t:"chan",p:"[ʃɑ̃]"},{t:"teur",p:"[tœʁ]"}] },
      { fr: "Elle travaille où ?", zh: "她在哪里工作？",
        parts: [{t:"Elle",p:"[ɛl]"},{t:"tra",p:"[tʁa]"},{t:"vaille",p:"[vaj]"},{t:"où",p:"[u]"}] },
      { fr: "Je suis étudiante. Et vous ?", zh: "我是大学生（女）。您呢？",
        parts: [{t:"Je",p:"[ʒə]"},{t:"suis",p:"[sɥi]"},{t:"é",p:"[e]"},{t:"tu",p:"[ty]"},{t:"diante",p:"[djɑ̃t]"},{t:"Et",p:"[e]"},{t:"vous",p:"[vu]"}] },
      { fr: "Tu veux être quoi ?", zh: "你想当什么？（将来想做什么）",
        parts: [{t:"Tu",p:"[ty]"},{t:"veux",p:"[vø]"},{t:"être",p:"[ɛtʁ]"},{t:"quoi",p:"[kwa]"}] },
      { fr: "Madame, vous êtes professeur ?", zh: "女士，您是老师吗？",
        parts: [{t:"Ma",p:"[ma]"},{t:"dame",p:"[dam]"},{t:"vous",p:"[vu]"},{t:"êtes",p:"[ɛt]"},{t:"pro",p:"[pʁɔ]"},{t:"fes",p:"[fɛ]"},{t:"seur",p:"[sœʁ]"}] }
    ]
  },
  things: {
    label: "生活用品 · 怎么问",
    tip: "指认东西用 <b>Qu'est-ce que c'est ?</b>（这是什么）、<b>C'est + 名词</b>。别忘了法语每个名词都有性别：c'est <b>un</b> livre / c'est <b>une</b> table。",
    items: [
      { fr: "Qu'est-ce que c'est ?", zh: "这是什么？",
        parts: [{t:"Qu'est",p:"[kɛs]"},{t:"ce",p:"[sə]"},{t:"que",p:"[kə]"},{t:"c'est",p:"[sɛ]"}] },
      { fr: "C'est un livre ou un cahier ?", zh: "这是书还是本子？",
        parts: [{t:"C'est",p:"[sɛ]"},{t:"un",p:"[œ̃]"},{t:"livre",p:"[livʁ]"},{t:"ou",p:"[u]"},{t:"un",p:"[œ̃]"},{t:"ca",p:"[ka]"},{t:"hier",p:"[je]"}] },
      { fr: "Où est la clé ?", zh: "钥匙在哪里？",
        parts: [{t:"Où",p:"[u]"},{t:"est",p:"[ɛ]"},{t:"la",p:"[la]"},{t:"clé",p:"[kle]"}] },
      { fr: "Tu as un stylo ?", zh: "你有笔吗？",
        parts: [{t:"Tu",p:"[ty]"},{t:"as",p:"[a]"},{t:"un",p:"[œ̃]"},{t:"sty",p:"[sti]"},{t:"lo",p:"[lo]"}] },
      { fr: "Il y a une table dans la chambre.", zh: "房间里有一张桌子。",
        parts: [{t:"Il",p:"[il]"},{t:"y",p:"[i]"},{t:"a",p:"[a]"},{t:"une",p:"[yn]"},{t:"table",p:"[tabl]"},{t:"dans",p:"[dɑ̃]"},{t:"la",p:"[la]"},{t:"cham",p:"[ʃɑ̃]"},{t:"bre",p:"[bʁ]"}] }
    ]
  },
  numbers: {
    label: "数字 · 怎么问",
    tip: "问年龄 <b>Quel âge as-tu ?</b>，问价格 <b>Combien ça coûte ?</b>，问号码 <b>Quel est ton numéro ?</b>。法语 70-99 要说 soixante-dix、quatre-vingts，慢慢来。",
    items: [
      { fr: "Quel âge as-tu ?", zh: "你几岁了？",
        parts: [{t:"Quel",p:"[kɛl]"},{t:"âge",p:"[ɑʒ]"},{t:"as",p:"[a]"},{t:"tu",p:"[ty]"}] },
      { fr: "J'ai vingt ans. Et toi ?", zh: "我二十岁。你呢？",
        parts: [{t:"J'ai",p:"[ʒe]"},{t:"vingt",p:"[vɛ̃]"},{t:"ans",p:"[ɑ̃]"},{t:"Et",p:"[e]"},{t:"toi",p:"[twa]"}] },
      { fr: "Combien ça coûte ?", zh: "这个多少钱？",
        parts: [{t:"Com",p:"[kɔ̃]"},{t:"bien",p:"[bjɛ̃]"},{t:"ça",p:"[sa]"},{t:"coûte",p:"[kut]"}] },
      { fr: "Quel est ton numéro de téléphone ?", zh: "你的电话号码是多少？",
        parts: [{t:"Quel",p:"[kɛl]"},{t:"est",p:"[ɛ]"},{t:"ton",p:"[tɔ̃]"},{t:"nu",p:"[ny]"},{t:"mé",p:"[me]"},{t:"ro",p:"[ʁo]"},{t:"de",p:"[də]"},{t:"té",p:"[te]"},{t:"lé",p:"[le]"},{t:"pho",p:"[fɔ]"},{t:"ne",p:"[n]"}] },
      { fr: "Il est quelle heure ?", zh: "现在几点？",
        parts: [{t:"Il",p:"[il]"},{t:"est",p:"[ɛ]"},{t:"quelle",p:"[kɛl]"},{t:"heure",p:"[œʁ]"}] }
    ]
  },
  adjs: {
    label: "形容词 · 副词 · 怎么问",
    tip: "问「怎么样」用 <b>Il est comment ? / Elle est comment ?</b>；形容词要跟名词变阴阳（grand / grande），副词则不变形（vite、bien、beaucoup）。",
    items: [
      { fr: "Il est comment, ton prof ?", zh: "你的老师（男）怎么样？",
        parts: [{t:"Il",p:"[il]"},{t:"est",p:"[ɛ]"},{t:"com",p:"[kɔ]"},{t:"ment",p:"[mɑ̃]"},{t:"ton",p:"[tɔ̃]"},{t:"prof",p:"[pʁɔf]"}] },
      { fr: "Elle est grande ou petite ?", zh: "她（个子）高还是矮？",
        parts: [{t:"Elle",p:"[ɛl]"},{t:"est",p:"[ɛ]"},{t:"gran",p:"[ɡʁɑ̃]"},{t:"de",p:"[d]"},{t:"ou",p:"[u]"},{t:"pe",p:"[pə]"},{t:"tite",p:"[tit]"}] },
      { fr: "Tu parles français bien ?", zh: "你法语说得好吗？",
        parts: [{t:"Tu",p:"[ty]"},{t:"parles",p:"[paʁl]"},{t:"fran",p:"[fʁɑ̃]"},{t:"çais",p:"[sɛ]"},{t:"bien",p:"[bjɛ̃]"}] },
      { fr: "C'est cher ?", zh: "贵吗？",
        parts: [{t:"C'est",p:"[sɛ]"},{t:"cher",p:"[ʃɛʁ]"}] },
      { fr: "Il parle vite.", zh: "他说话很快。",
        parts: [{t:"Il",p:"[il]"},{t:"parle",p:"[paʁl]"},{t:"vite",p:"[vit]"}] }
    ]
  }
};

const STORIES = [
  {
    id: "s1", emoji: "👋", title: "相遇在语言学校",
    tip: "自我介绍的固定套路：<b>Je m'appelle + 名字</b>、<b>Je suis + 国籍/职业</b>、<b>J'ai + 数字 + ans</b>。",
    lines: [
      { fr: "Bonjour ! Je m'appelle Marie.", zh: "你好！我叫玛丽。", note: "Je m'appelle 字面是「我称呼自己」，就是「我叫」。" },
      { fr: "Je suis française. Je viens de Paris.", zh: "我是法国人。我来自巴黎。", note: "venir de = 来自；注意 française 阴性要加 e。" },
      { fr: "Et toi ? Comment tu t'appelles ?", zh: "你呢？你叫什么名字？", note: "朋友之间用 tu；不熟的人用 vous。" },
      { fr: "Je m'appelle Paul. Je suis canadien.", zh: "我叫保罗。我是加拿大人。", note: "canadien 阳性；女生要说 canadienne。" },
      { fr: "Tu as quel âge ?", zh: "你几岁？", note: "问年龄的标准句型，字面「你有多少年纪」。" },
      { fr: "J'ai vingt et un ans.", zh: "我二十一岁。", note: "vingt et un 里 21 要加 et；22 以后不加（vingt-deux）。" },
      { fr: "Enchanté, Paul !", zh: "很高兴认识你，保罗！", note: "男士说 enchanté，女士说 enchantée。" }
    ]
  },
  {
    id: "s2", emoji: "👨‍👩‍👧", title: "玛丽的家人",
    tip: "家庭成员 + 职业：法语说职业时<b>不加冠词</b>（Il est ingénieur，不是 un ingénieur）。",
    lines: [
      { fr: "Voici ma famille.", zh: "这是我的家人。", note: "Voici = 这是（介绍用）；ma 是阴性物主形容词。" },
      { fr: "Mon père est ingénieur. Il travaille à Paris.", zh: "我爸爸是工程师。他在巴黎工作。", note: "travailler à + 城市名；在国家前要用 en / au。" },
      { fr: "Ma mère est infirmière. Elle travaille à l'hôpital.", zh: "我妈妈是护士。她在医院工作。", note: "职业分阴阳：ingénieur / ingénieure。" },
      { fr: "Mon frère est étudiant. Il a dix-huit ans.", zh: "我哥哥是大学生。他十八岁。", note: "dix-huit 有连字符，是一个词。" },
      { fr: "Nous avons un chat. Il s'appelle Minou.", zh: "我们有一只猫。它叫米努。", note: "avoir = 有；un chat 阳性。" },
      { fr: "Ma famille est grande et très sympa.", zh: "我的家庭很大，而且很友好。", note: "sympa 是 familiar 的缩写，口语超常用。" }
    ]
  },
  {
    id: "s3", emoji: "☕", title: "在咖啡馆",
    tip: "点单 + 问价格：<b>je voudrais…</b>（我想要，比 je veux 礼貌）、<b>combien ?</b>（多少钱）。",
    lines: [
      { fr: "Bonjour madame, je voudrais un café, s'il vous plaît.", zh: "您好女士，我想要一杯咖啡，谢谢。", note: "je voudrais 是条件式，最礼貌的点单说法。" },
      { fr: "Un café ? Ça fait deux euros cinquante.", zh: "一杯咖啡？一共两欧五。", note: "Ça fait… = 一共……；法语用逗号做小数点：2,50。" },
      { fr: "Et un croissant, combien ?", zh: "那一个牛角包多少钱？", note: "combien 放在后面也可以，口语很自然。" },
      { fr: "Un euro quatre-vingts.", zh: "一欧八。", note: "注意：80 是 quatre-vingts（四个二十），有 s；81 是 quatre-vingt-un，没有 s。" },
      { fr: "Voilà cinq euros. Merci !", zh: "给您五欧。谢谢！", note: "Voilà = 给您/瞧，递东西时说。" },
      { fr: "Merci à vous. Bonne journée !", zh: "谢谢您。祝您愉快！", note: "Bonne journée 是最常用的告别祝福。" }
    ]
  },
  {
    id: "s4", emoji: "🌍", title: "来自世界各地的朋友",
    tip: "国籍形容词要跟着人变：Kenji est japon<b>ais</b>（男）/ Maria est espagn<b>ole</b>（女）。",
    lines: [
      { fr: "J'ai des amis du monde entier.", zh: "我有来自世界各地的朋友。", note: "du = de + le；monde entier = 整个世界。" },
      { fr: "Kenji est japonais. Il habite à Tokyo.", zh: "健二是日本人。他住在东京。", note: "habiter à + 城市；国家前要用 en / au / aux。" },
      { fr: "Maria est espagnole. Elle est étudiante.", zh: "玛丽亚是西班牙人。她是学生。", note: "阴性：-ol → -ole；étudiant → étudiante。" },
      { fr: "Ahmed est marocain et Sophie est belge.", zh: "艾哈迈德是摩洛哥人，索菲是比利时人。", note: "belge 阴阳同形，男女写法一样。" },
      { fr: "Nous parlons français ensemble.", zh: "我们一起讲法语。", note: "parler + 语言，中间不加冠词。" },
      { fr: "C'est amusant !", zh: "这很有趣！", note: "amusant 阳性；形容阴性名词时用 amusante。" }
    ]
  },
  {
    id: "s5", emoji: "🕗", title: "我的一天",
    tip: "副词（vite、bien、tranquillement）放在动词后面，<b>不变形</b>——这是它和形容词最大的区别。",
    lines: [
      { fr: "Je me lève à sept heures.", zh: "我七点起床。", note: "se lever 是代词式动词；à + 钟点。" },
      { fr: "Je prends le bus à huit heures moins le quart.", zh: "我七点四十五分坐公交。", note: "moins le quart = 差一刻；et quart = 过一刻。" },
      { fr: "Je travaille bien le matin.", zh: "我上午工作得很好。", note: "bien 是副词，放在动词后面。" },
      { fr: "Le midi, je mange vite.", zh: "中午我吃得很快。", note: "vite 副词，不管谁吃都不变。" },
      { fr: "Le soir, je lis tranquillement.", zh: "晚上我安静地看书。", note: "-ment 结尾多半是副词：tranquillement。" },
      { fr: "Je me couche à dix heures et demie.", zh: "我十点半睡觉。", note: "et demie = 半（阴性，因为 heure 是阴性）。" }
    ]
  }
];

if (typeof window !== "undefined"){
  window.__QA_TEMPLATES = QA_TEMPLATES;
  window.__STORIES = STORIES;
}
