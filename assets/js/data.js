/* =========================================================
   Bonjour ! 法语启蒙小屋 — 句型数据（讲义精选 35 句）
   来源：《法语 A1 复习讲义 · 自我介绍 / 描述物体 / 问路方位》
   按教材单元分组：U1 相遇(L1-4) / U2 画像(L5-8) / U3 在哪儿(L9-12)
   - fr: 完整法语句子（含标点，用于朗读）
   - words: 打字填空的词形拆分（t=纯词形, r=句子成分角色, zh=词义）
   - structure: 句型结构提示（具体到成分，如 谓语/主语）
   - note: 语法小贴士
   严格比对：逐词比对 t（大小写 + 重音敏感），仅归一化撇号弯直差异。
   ========================================================= */

const ROLES = {
  "sujet": { label: "主语", color: "#D0707F" },
  "verbe": { label: "谓语", color: "#5E8F6D" },
  "objet": { label: "宾语", color: "#5E84AC" },
  "attribut": { label: "表语", color: "#C97F1F" },
  "complement": { label: "补语", color: "#8A6BB8" },
  "adjectif": { label: "形容词", color: "#B98A1F" },
  "numeral": { label: "数词", color: "#C96A3E" },
  "determinant": { label: "限定词", color: "#7E8AA8" },
  "conjonction": { label: "连词", color: "#8E8378" },
  "interrogation": { label: "疑问词", color: "#B04E7E" },
  "politesse": { label: "礼貌用语", color: "#3E8A86" },
  "salutation": { label: "问候语", color: "#C25E6E" },
  "presentation": { label: "提示词", color: "#8A6BB8" },
  "preposition": { label: "介词", color: "#6B8455" },
  "nom-propre": { label: "专有名词", color: "#9C7423" },
  "nom": { label: "名词", color: "#4E7FA6" },
  "temps": { label: "时间词", color: "#C9A227" },
  "direction": { label: "方位词", color: "#6B8455" },
  "manière": { label: "方式词", color: "#8A6BB8" },
  "lieu": { label: "地点词", color: "#7E8AA8" },
  "adverbe": { label: "副词", color: "#9C8A3C" },
  "negation": { label: "否定词", color: "#B04E4E" },
};

const UNITS = {
  U1: { name: "U1 相遇 Rencontres", sub: "自我介绍 · Leçon 1-4", emoji: "👋" },
  U2: { name: "U2 画像 Portraits", sub: "描述物体 · Leçon 5-8", emoji: "🖼️" },
  U3: { name: "U3 在哪儿 Où ça se trouve", sub: "问路方位 · Leçon 9-12", emoji: "🧭" }
};

const SENTENCES = [
  {
    id: 101, unit: "U1", cat: "问候", emoji: "👋",
    fr: "Bonjour, je m'appelle Li Na.",
    zh: "你好，我叫李娜。",
    structure: "问候语(Bonjour) + 主语(je) + 自反谓语(m'appelle) + 专有名词",
    note: "s'appeler 是自反动词：je m'appelle（我叫）、tu t'appelles、il s'appelle。人名前不加冠词。",
    words: [
      { t: "Bonjour", r: "salutation", zh: "你好" },
      { t: "je", r: "sujet", zh: "我" },
      { t: "m'appelle", r: "verbe", zh: "名叫（自反动词）" },
      { t: "Li Na", r: "nom-propre", zh: "李娜" },
    ]
  },
  {
    id: 102, unit: "U1", cat: "姓名", emoji: "🪪",
    fr: "Comment vous appelez-vous ?",
    zh: "您叫什么名字？",
    structure: "特殊疑问词(Comment) + 主语(vous) + 谓语(appelez-vous，主谓倒装)",
    note: "正式问法把动词与主语倒装（appelez-vous）；口语也可说 Vous vous appelez comment ?",
    words: [
      { t: "Comment", r: "interrogation", zh: "什么／怎样" },
      { t: "vous", r: "sujet", zh: "您" },
      { t: "appelez-vous", r: "verbe", zh: "名叫（倒装）" },
    ]
  },
  {
    id: 103, unit: "U1", cat: "姓名", emoji: "🪪",
    fr: "Je m'appelle Wang Ming.",
    zh: "我叫王明。",
    structure: "主语(Je) + 自反谓语(m'appelle) + 专有名词",
    note: "回答姓名用 Je m'appelle + 名字；中文姓名直接按拼音写。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "m'appelle", r: "verbe", zh: "名叫" },
      { t: "Wang Ming", r: "nom-propre", zh: "王明" },
    ]
  },
  {
    id: 104, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Est-ce que vous êtes étudiant ?",
    zh: "您是学生吗？",
    structure: "est-ce que（一般疑问引导） + 主语(vous) + 系动词(êtes) + 表语(étudiant)",
    note: "est-ce que 后接陈述句语序，是最常用的一般疑问句；回答 Oui / Non。",
    words: [
      { t: "Est-ce que", r: "interrogation", zh: "是否（一般疑问）" },
      { t: "vous", r: "sujet", zh: "您" },
      { t: "êtes", r: "verbe", zh: "是" },
      { t: "étudiant", r: "attribut", zh: "学生" },
    ]
  },
  {
    id: 105, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Je suis étudiant.",
    zh: "我是学生。",
    structure: "主语(Je) + 系动词(suis) + 表语(étudiant)",
    note: "être 的变位：je suis / tu es / il est / nous sommes / vous êtes / ils sont。职业名词作表语前不加冠词。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "suis", r: "verbe", zh: "是" },
      { t: "étudiant", r: "attribut", zh: "学生" },
    ]
  },
  {
    id: 106, unit: "U1", cat: "国籍", emoji: "🌍",
    fr: "D'où venez-vous ?",
    zh: "您来自哪里？",
    structure: "特殊疑问词(D'où) + 谓语(venez，主谓倒装) + 主语(vous)",
    note: "d'où = de + où，问「从哪儿来」；venir de + 国家／城市。",
    words: [
      { t: "D'où", r: "interrogation", zh: "从哪儿" },
      { t: "venez-vous", r: "verbe", zh: "来（倒装）" },
    ]
  },
  {
    id: 107, unit: "U1", cat: "国籍", emoji: "🌍",
    fr: "Je viens de Chine.",
    zh: "我来自中国。",
    structure: "主语(Je) + 谓语(viens) + 介词(de) + 专有名词(Chine)",
    note: "venir de + 国家；国家名前用 de，如 de Chine、de France。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "viens", r: "verbe", zh: "来" },
      { t: "de", r: "preposition", zh: "从" },
      { t: "Chine", r: "nom-propre", zh: "中国" },
    ]
  },
  {
    id: 108, unit: "U1", cat: "国籍", emoji: "🇨🇳",
    fr: "Je suis chinois.",
    zh: "我是中国人。",
    structure: "主语(Je) + 系动词(suis) + 表语(国籍形容词 chinois)",
    note: "国籍形容词与主语性数配合：chinois / chinoise。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "suis", r: "verbe", zh: "是" },
      { t: "chinois", r: "attribut", zh: "中国的；中国人" },
    ]
  },
  {
    id: 109, unit: "U1", cat: "年龄", emoji: "🎂",
    fr: "Quel âge avez-vous ?",
    zh: "您多大年纪？",
    structure: "特殊疑问词(Quel âge) + 谓语(avez，主谓倒装) + 主语(vous)",
    note: "问年龄用 avoir：Quel âge avez-vous ? 回答 J'ai vingt ans.",
    words: [
      { t: "Quel", r: "interrogation", zh: "什么" },
      { t: "âge", r: "nom", zh: "年龄" },
      { t: "avez-vous", r: "verbe", zh: "有（倒装）" },
    ]
  },
  {
    id: 110, unit: "U1", cat: "年龄", emoji: "🎂",
    fr: "J'ai vingt ans.",
    zh: "我二十岁。",
    structure: "主语(J') + 谓语(ai) + 数词(vingt) + 补语(ans)",
    note: "法语年龄用 avoir + 数字 + ans，不用 être。",
    words: [
      { t: "J'", r: "sujet", zh: "我（元音前缩合）" },
      { t: "ai", r: "verbe", zh: "有" },
      { t: "vingt", r: "numeral", zh: "二十" },
      { t: "ans", r: "nom", zh: "岁" },
    ]
  },
  {
    id: 111, unit: "U1", cat: "住址", emoji: "🏠",
    fr: "J'habite à Shanghai.",
    zh: "我住在上海。",
    structure: "主语(J') + 谓语(habite) + 介词(à) + 专有名词(Shanghai)",
    note: "habiter à + 城市：à Paris、à Shanghai。",
    words: [
      { t: "J'", r: "sujet", zh: "我" },
      { t: "habite", r: "verbe", zh: "居住" },
      { t: "à", r: "preposition", zh: "在" },
      { t: "Shanghai", r: "nom-propre", zh: "上海" },
    ]
  },
  {
    id: 112, unit: "U1", cat: "近况", emoji: "😊",
    fr: "Ça va bien, merci.",
    zh: "很好，谢谢。",
    structure: "主语(Ça) + 谓语(va) + 状语(bien) + 礼貌用语(merci)",
    note: "回答近况的标准说法；反问对方可加 Et vous ?",
    words: [
      { t: "Ça", r: "sujet", zh: "这／情况" },
      { t: "va", r: "verbe", zh: "进行" },
      { t: "bien", r: "adverbe", zh: "好" },
      { t: "merci", r: "politesse", zh: "谢谢" },
    ]
  },
  {
    id: 113, unit: "U2", cat: "名称", emoji: "📖",
    fr: "Qu'est-ce que c'est ?",
    zh: "这是什么？",
    structure: "固定疑问短语(Qu'est-ce que) + 主语(c') + 系动词(est)",
    note: "问「这是什么」，回答 C'est un/une... 或 Ce sont des...",
    words: [
      { t: "Qu'est-ce que", r: "interrogation", zh: "是什么" },
      { t: "c'", r: "sujet", zh: "这" },
      { t: "est", r: "verbe", zh: "是" },
    ]
  },
  {
    id: 114, unit: "U2", cat: "名称", emoji: "📖",
    fr: "C'est un livre.",
    zh: "这是一本书。",
    structure: "主语(C') + 系动词(est) + 不定冠词(un) + 名词(livre)",
    note: "un 阳性、une 阴性、des 复数；livre 是阳性名词。",
    words: [
      { t: "C'", r: "sujet", zh: "这" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "un", r: "determinant", zh: "一个（阳性）" },
      { t: "livre", r: "nom", zh: "书" },
    ]
  },
  {
    id: 115, unit: "U2", cat: "名称", emoji: "🔑",
    fr: "Ce sont des clés.",
    zh: "这些是钥匙。",
    structure: "主语(Ce) + 系动词(sont) + 不定冠词(des) + 名词复数(clés)",
    note: "复数用 Ce sont...；clé 是阴性名词，复数加 s。",
    words: [
      { t: "Ce", r: "sujet", zh: "这些" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "des", r: "determinant", zh: "一些（复数）" },
      { t: "clés", r: "nom", zh: "钥匙" },
    ]
  },
  {
    id: 116, unit: "U2", cat: "颜色", emoji: "🎨",
    fr: "De quelle couleur est ce sac ?",
    zh: "这个包是什么颜色？",
    structure: "介词(De) + 特殊疑问词(quelle couleur) + 系动词(est) + 主语(ce sac)",
    note: "问颜色用 De quelle couleur est... ? 回答 Il est rouge.",
    words: [
      { t: "De", r: "preposition", zh: "的" },
      { t: "quelle", r: "interrogation", zh: "什么（阴性）" },
      { t: "couleur", r: "nom", zh: "颜色" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "ce", r: "determinant", zh: "这个" },
      { t: "sac", r: "nom", zh: "包" },
    ]
  },
  {
    id: 117, unit: "U2", cat: "颜色", emoji: "🔴",
    fr: "Il est rouge.",
    zh: "它是红色的。",
    structure: "主语(Il) + 系动词(est) + 形容词表语(rouge)",
    note: "颜色形容词与名词性数配合；rouge 阴阳同形，复数加 s。",
    words: [
      { t: "Il", r: "sujet", zh: "它（阳性）" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "rouge", r: "adjectif", zh: "红色的" },
    ]
  },
  {
    id: 118, unit: "U2", cat: "所属", emoji: "🧥",
    fr: "À qui est ce manteau ?",
    zh: "这件外套是谁的？",
    structure: "介词(À) + 疑问词(qui) + 系动词(est) + 主语(ce manteau)",
    note: "问所属用 À qui est... ? 回答 C'est à moi.",
    words: [
      { t: "À", r: "preposition", zh: "属于" },
      { t: "qui", r: "interrogation", zh: "谁" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "ce", r: "determinant", zh: "这件" },
      { t: "manteau", r: "nom", zh: "外套" },
    ]
  },
  {
    id: 119, unit: "U2", cat: "所属", emoji: "🙋",
    fr: "C'est à moi.",
    zh: "是我的。",
    structure: "主语(C') + 系动词(est) + 介词(à) + 补语(moi，重读人称代词)",
    note: "à + 重读人称代词：à moi（我的）、à toi、à lui、à elle。",
    words: [
      { t: "C'", r: "sujet", zh: "这" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "à", r: "preposition", zh: "属于" },
      { t: "moi", r: "complement", zh: "我（重读）" },
    ]
  },
  {
    id: 120, unit: "U2", cat: "位置", emoji: "🔍",
    fr: "Où est la clé ?",
    zh: "钥匙在哪里？",
    structure: "特殊疑问词(Où) + 系动词(est) + 主语(la clé)",
    note: "问位置用 Où est... ? 回答 Elle est sur la table.",
    words: [
      { t: "Où", r: "interrogation", zh: "哪里" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "la", r: "determinant", zh: "这（阴性）" },
      { t: "clé", r: "nom", zh: "钥匙" },
    ]
  },
  {
    id: 121, unit: "U2", cat: "位置", emoji: "🪑",
    fr: "Elle est sur la table.",
    zh: "它在桌子上。",
    structure: "主语(Elle) + 系动词(est) + 介词(sur) + 定冠词(la) + 名词(table)",
    note: "方位介词：sur 在…上、dans 在…里、sous 在…下。",
    words: [
      { t: "Elle", r: "sujet", zh: "它（阴性）" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "sur", r: "preposition", zh: "在…上" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "table", r: "nom", zh: "桌子" },
    ]
  },
  {
    id: 122, unit: "U2", cat: "价格", emoji: "💶",
    fr: "Combien coûte ce livre ?",
    zh: "这本书多少钱？",
    structure: "特殊疑问词(Combien) + 谓语(coûte) + 主语(ce livre)",
    note: "问价格用 Combien coûte... ? 或 Ça coûte combien ?",
    words: [
      { t: "Combien", r: "interrogation", zh: "多少" },
      { t: "coûte", r: "verbe", zh: "价值／卖" },
      { t: "ce", r: "determinant", zh: "这本" },
      { t: "livre", r: "nom", zh: "书" },
    ]
  },
  {
    id: 123, unit: "U2", cat: "价格", emoji: "💶",
    fr: "Ça coûte 15 euros.",
    zh: "这个卖 15 欧元。",
    structure: "主语(Ça) + 谓语(coûte) + 数词(15) + 货币单位(euros)",
    note: "coûter 表价值；euro 复数加 s。",
    words: [
      { t: "Ça", r: "sujet", zh: "这" },
      { t: "coûte", r: "verbe", zh: "卖" },
      { t: "15", r: "numeral", zh: "十五" },
      { t: "euros", r: "nom", zh: "欧元" },
    ]
  },
  {
    id: 124, unit: "U3", cat: "问路", emoji: "🏛️",
    fr: "Où est la mairie, s'il vous plaît ?",
    zh: "请问市政厅在哪里？",
    structure: "特殊疑问词(Où) + 系动词(est) + 主语(la mairie) + 礼貌用语(s'il vous plaît)",
    note: "s'il vous plaît 是礼貌用语「请」，句首句尾均可。",
    words: [
      { t: "Où", r: "interrogation", zh: "哪里" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "mairie", r: "nom", zh: "市政厅" },
      { t: "s'il vous plaît", r: "politesse", zh: "请" },
    ]
  },
  {
    id: 125, unit: "U3", cat: "方位", emoji: "📍",
    fr: "Elle se trouve sur la place.",
    zh: "它在广场上。",
    structure: "主语(Elle) + 代词式谓语(se trouve) + 介词(sur) + 名词(la place)",
    note: "se trouver 表示「位于」，比 être 更正式。",
    words: [
      { t: "Elle", r: "sujet", zh: "它（阴性）" },
      { t: "se trouve", r: "verbe", zh: "位于（代词式）" },
      { t: "sur", r: "preposition", zh: "在…上" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "place", r: "nom", zh: "广场" },
    ]
  },
  {
    id: 126, unit: "U3", cat: "方位", emoji: "🚇",
    fr: "Où se trouve la station de métro ?",
    zh: "地铁站在哪里？",
    structure: "特殊疑问词(Où) + 代词式谓语(se trouve) + 主语(la station de métro)",
    note: "la station de métro 地铁站；se trouver 用于问地点。",
    words: [
      { t: "Où", r: "interrogation", zh: "哪里" },
      { t: "se trouve", r: "verbe", zh: "位于" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "station", r: "nom", zh: "车站" },
      { t: "de", r: "preposition", zh: "的" },
      { t: "métro", r: "nom", zh: "地铁" },
    ]
  },
  {
    id: 127, unit: "U3", cat: "方位", emoji: "🏫",
    fr: "Elle est à côté de l'école.",
    zh: "它在学校旁边。",
    structure: "主语(Elle) + 系动词(est) + 方位短语(à côté de l'école)",
    note: "à côté de 在…旁边；l'école = l' + école（元音前缩合）。",
    words: [
      { t: "Elle", r: "sujet", zh: "它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "à", r: "preposition", zh: "在" },
      { t: "côté", r: "nom", zh: "旁边" },
      { t: "de", r: "preposition", zh: "的" },
      { t: "l'école", r: "nom", zh: "学校" },
    ]
  },
  {
    id: 128, unit: "U3", cat: "问路", emoji: "📏",
    fr: "C'est loin d'ici ?",
    zh: "离这儿远吗？",
    structure: "主语(C') + 系动词(est) + 副词(loin) + 地点短语(d'ici，语调疑问)",
    note: "口语疑问句可不用 est-ce que，靠语调上扬表疑问。",
    words: [
      { t: "C'", r: "sujet", zh: "这" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "loin", r: "adverbe", zh: "远" },
      { t: "d'ici", r: "lieu", zh: "这儿" },
    ]
  },
  {
    id: 129, unit: "U3", cat: "问路", emoji: "🚶",
    fr: "Non, c'est tout près.",
    zh: "不，很近。",
    structure: "否定回答(Non) + 主语(c') + 系动词(est) + 状语(tout près)",
    note: "tout près 很近；près de 在…附近。",
    words: [
      { t: "Non", r: "politesse", zh: "不" },
      { t: "c'", r: "sujet", zh: "这" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "tout", r: "adverbe", zh: "很／完全" },
      { t: "près", r: "lieu", zh: "近" },
    ]
  },
  {
    id: 130, unit: "U3", cat: "指路", emoji: "⬆️",
    fr: "Allez tout droit.",
    zh: "一直往前走。",
    structure: "命令式谓语(Allez, vous 形) + 副词短语(tout droit)",
    note: "命令式 vous 形式由直陈式去掉主语得到：Allez；tout droit 直走。",
    words: [
      { t: "Allez", r: "verbe", zh: "走（命令式）" },
      { t: "tout", r: "adverbe", zh: "完全／一直" },
      { t: "droit", r: "direction", zh: "直" },
    ]
  },
  {
    id: 131, unit: "U3", cat: "指路", emoji: "➡️",
    fr: "Tournez à droite.",
    zh: "右转。",
    structure: "命令式谓语(Tournez) + 介词(à) + 方位词(droite)",
    note: "tourner à droite 右转；à gauche 左转。",
    words: [
      { t: "Tournez", r: "verbe", zh: "转（命令式）" },
      { t: "à", r: "preposition", zh: "向" },
      { t: "droite", r: "direction", zh: "右" },
    ]
  },
  {
    id: 132, unit: "U3", cat: "指路", emoji: "↩️",
    fr: "Prenez la deuxième rue à gauche.",
    zh: "走左边第二条街。",
    structure: "命令式谓语(Prenez) + 宾语(la deuxième rue) + 方位短语(à gauche)",
    note: "deuxième 第二（序数词）；prendre la rue 走某条街。",
    words: [
      { t: "Prenez", r: "verbe", zh: "走（命令式）" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "deuxième", r: "numeral", zh: "第二" },
      { t: "rue", r: "nom", zh: "街道" },
      { t: "à", r: "preposition", zh: "向" },
      { t: "gauche", r: "direction", zh: "左" },
    ]
  },
  {
    id: 133, unit: "U3", cat: "交通", emoji: "🚶",
    fr: "Je vais à l'université à pied.",
    zh: "我走路去大学。",
    structure: "主语(Je) + 谓语(vais) + 地点(à l'université) + 方式(à pied)",
    note: "交通方式：à pied 步行、en métro 地铁、en bus 公交、à vélo 骑车。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "vais", r: "verbe", zh: "去" },
      { t: "à", r: "preposition", zh: "到" },
      { t: "l'université", r: "nom", zh: "大学" },
      { t: "à", r: "preposition", zh: "以…方式" },
      { t: "pied", r: "manière", zh: "步行" },
    ]
  },
  {
    id: 134, unit: "U3", cat: "交通", emoji: "🚇",
    fr: "Allez-y en métro.",
    zh: "坐地铁去吧。",
    structure: "命令式谓语(Allez-y，含副代词 y) + 方式状语(en métro)",
    note: "y 代替前面提到的地点；Allez-y 去那儿；en métro 坐地铁。",
    words: [
      { t: "Allez-y", r: "verbe", zh: "去（那儿，命令式）" },
      { t: "en", r: "preposition", zh: "乘" },
      { t: "métro", r: "manière", zh: "地铁" },
    ]
  },
  {
    id: 135, unit: "U3", cat: "方位", emoji: "🏦",
    fr: "La banque est en face de la poste.",
    zh: "银行在邮局对面。",
    structure: "主语(La banque) + 系动词(est) + 方位短语(en face de la poste)",
    note: "en face de 在…正对面；la poste 邮局。",
    words: [
      { t: "La", r: "determinant", zh: "这" },
      { t: "banque", r: "nom", zh: "银行" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "en", r: "preposition", zh: "在" },
      { t: "face", r: "nom", zh: "对面" },
      { t: "de", r: "preposition", zh: "的" },
      { t: "la", r: "determinant", zh: "这" },
      { t: "poste", r: "nom", zh: "邮局" },
    ]
  },
  {
    id: 136, unit: "U1", cat: "姓名", emoji: "🪪",
    fr: "Est-ce que vous vous appelez Wang ?",
    zh: "您叫王吗？",
    structure: "est-ce que（一般疑问引导） + 主语(vous) + 自反谓语(vous appelez) + 专有名词(Wang)",
    note: "est-ce que 后接陈述语序，s'appeler 的主语要与动词配合。",
    words: [
      { t: "Est-ce que", r: "interrogation", zh: "是否（一般疑问）" },
      { t: "vous", r: "sujet", zh: "您/你们" },
      { t: "vous", r: "sujet", zh: "您/你们" },
      { t: "appelez", r: "verbe", zh: "叫（自反动词）" },
      { t: "Wang", r: "nom-propre", zh: "王" },
    ]
  },
  {
    id: 137, unit: "U1", cat: "姓名", emoji: "🪪",
    fr: "Tu t'appelles comment ?",
    zh: "你叫什么名字？",
    structure: "主语(Tu) + 自反谓语(t'appelles) + 疑问词(comment，语调疑问)",
    note: "熟人之间用 tu；疑问词放句尾，靠语调提问。",
    words: [
      { t: "Tu", r: "sujet", zh: "你" },
      { t: "t'appelles", r: "verbe", zh: "自反谓语" },
      { t: "comment", r: "interrogation", zh: "怎样" },
    ]
  },
  {
    id: 138, unit: "U1", cat: "姓名", emoji: "🪪",
    fr: "Je m'appelle Alice Doucet.",
    zh: "我叫爱丽丝·杜塞。",
    structure: "主语(Je) + 自反谓语(m'appelle) + 名 + 姓",
    note: "法语全名=名(prénom)+姓(nom)。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "m'appelle", r: "verbe", zh: "自反谓语" },
      { t: "Alice", r: "nom-propre", zh: "爱丽丝" },
      { t: "Doucet", r: "nom-propre", zh: "杜塞" },
    ]
  },
  {
    id: 139, unit: "U1", cat: "问候", emoji: "👋",
    fr: "Bonjour, monsieur.",
    zh: "您好，先生。",
    structure: "问候语(Bonjour) + 称呼(monsieur)",
    note: "bonjour 白天通用问候；madame 女士、mademoiselle 小姐。",
    words: [
      { t: "Bonjour", r: "salutation", zh: "你好" },
      { t: "monsieur", r: "nom", zh: "先生" },
    ]
  },
  {
    id: 140, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Êtes-vous étudiant ?",
    zh: "您是学生吗？",
    structure: "系动词(êtes) + 主语(vous，主谓倒装) + 表语(étudiant)",
    note: "主谓倒装是正式的一般疑问句；口语可说 Vous êtes étudiant ?",
    words: [
      { t: "Êtes-vous", r: "verbe", zh: "系动词+主语（倒装疑问）" },
      { t: "étudiant", r: "attribut", zh: "学生" },
    ]
  },
  {
    id: 141, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Vous êtes étudiant ?",
    zh: "您是学生吗？",
    structure: "主语(Vous) + 系动词(êtes) + 表语(étudiant，语调疑问)",
    note: "口语靠句尾语调上扬表疑问，语序不变。",
    words: [
      { t: "Vous", r: "sujet", zh: "您/你们" },
      { t: "êtes", r: "verbe", zh: "是" },
      { t: "étudiant", r: "attribut", zh: "学生" },
    ]
  },
  {
    id: 142, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Quelle est votre profession ?",
    zh: "您做什么工作？",
    structure: "疑问词(Quelle) + 系动词(est) + 主语(votre profession)",
    note: "问职业也可用 Que faites-vous dans la vie ?",
    words: [
      { t: "Quelle", r: "interrogation", zh: "哪个（阴）" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "votre", r: "determinant", zh: "您的" },
      { t: "profession", r: "nom", zh: "职业" },
    ]
  },
  {
    id: 143, unit: "U1", cat: "身份", emoji: "🎓",
    fr: "Je travaille comme ingénieur.",
    zh: "我当工程师。",
    structure: "主语(Je) + 谓语(travaille) + 介词(comme) + 表职业名词(ingénieur)",
    note: "comme 表示「作为」；职业名词前一般不加冠词。",
    words: [
      { t: "Je", r: "sujet", zh: "我" },
      { t: "travaille", r: "verbe", zh: "工作" },
      { t: "comme", r: "preposition", zh: "作为" },
      { t: "ingénieur", r: "attribut", zh: "工程师" },
    ]
  },
  {
    id: 144, unit: "U1", cat: "国籍", emoji: "🌍",
    fr: "De quel pays êtes-vous ?",
    zh: "您来自哪个国家？",
    structure: "介词(De) + 疑问词(quel pays) + 系动词(êtes) + 主语(vous)",
    note: "de quel pays 问国籍来源；回答用 Je viens de + 国家。",
    words: [
      { t: "De", r: "preposition", zh: "的/从" },
      { t: "quel", r: "interrogation", zh: "哪个" },
      { t: "pays", r: "nom", zh: "国家" },
      { t: "êtes-vous", r: "nom", zh: "" },
    ]
  },
  {
    id: 145, unit: "U1", cat: "国籍", emoji: "🌍",
    fr: "Elle habite en Suisse, à Genève.",
    zh: "她住在瑞士日内瓦。",
    structure: "主语(Elle) + 谓语(habite) + 国家(en Suisse) + 城市(à Genève)",
    note: "阴性国家用 en；城市用 à。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "habite", r: "verbe", zh: "居住" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "Suisse", r: "nom-propre", zh: "瑞士" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "Genève", r: "nom-propre", zh: "日内瓦" },
    ]
  },
  {
    id: 146, unit: "U1", cat: "近况", emoji: "😊",
    fr: "Comment allez-vous ?",
    zh: "您好吗？",
    structure: "疑问词(Comment) + 谓语(allez) + 主语(vous)",
    note: "aller bien 问近况；回答 Ça va bien / Je vais bien。",
    words: [
      { t: "Comment", r: "interrogation", zh: "怎样" },
      { t: "allez-vous", r: "nom", zh: "" },
    ]
  },
  {
    id: 147, unit: "U1", cat: "近况", emoji: "😊",
    fr: "Pas très bien.",
    zh: "不太好。",
    structure: "副词(Pas) + 副词(très) + 形容词(bien)",
    note: "否定回答近况；très 修饰 bien。",
    words: [
      { t: "Pas", r: "negation", zh: "不" },
      { t: "très", r: "adverbe", zh: "很" },
      { t: "bien", r: "adverbe", zh: "好" },
    ]
  },
  {
    id: 148, unit: "U1", cat: "电话", emoji: "📞",
    fr: "Quel est votre numéro de téléphone ?",
    zh: "您的电话号码是多少？",
    structure: "疑问词(Quel) + 系动词(est) + 主语(votre numéro de téléphone)",
    note: "numéro 是阳性名词；电话号码常分组朗读。",
    words: [
      { t: "Quel", r: "interrogation", zh: "哪个" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "votre", r: "determinant", zh: "您的" },
      { t: "numéro de téléphone", r: "nom", zh: "电话号码" },
    ]
  },
  {
    id: 149, unit: "U1", cat: "电话", emoji: "📞",
    fr: "Mon numéro de téléphone est le 06 12 34 56 78.",
    zh: "我的电话号码是 06 12 34 56 78。",
    structure: "主语(Mon numéro de téléphone) + 系动词(est) + 定冠词(le) + 号码",
    note: "号码前用定冠词 le；常两位一组朗读。",
    words: [
      { t: "Mon", r: "determinant", zh: "我的" },
      { t: "numéro de téléphone", r: "nom", zh: "电话号码" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "06", r: "numeral", zh: "数字" },
      { t: "12", r: "numeral", zh: "数字" },
      { t: "34", r: "numeral", zh: "数字" },
      { t: "56", r: "numeral", zh: "数字" },
      { t: "78", r: "numeral", zh: "数字" },
    ]
  },
  {
    id: 150, unit: "U1", cat: "邮箱", emoji: "✉️",
    fr: "Quelle est votre adresse e-mail ?",
    zh: "您的邮箱地址是什么？",
    structure: "疑问词(Quelle) + 系动词(est) + 主语(votre adresse e-mail)",
    note: "adresse 是阴性名词，故用 Quelle。",
    words: [
      { t: "Quelle", r: "interrogation", zh: "哪个（阴）" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "votre", r: "determinant", zh: "您的" },
      { t: "adresse e-mail", r: "nom", zh: "邮箱地址" },
    ]
  },
  {
    id: 151, unit: "U1", cat: "邮箱", emoji: "✉️",
    fr: "Mon e-mail est wangming@exemple.fr.",
    zh: "我的邮箱是 wangming@exemple.fr。",
    structure: "主语(Mon e-mail) + 系动词(est) + 邮箱地址",
    note: "邮箱地址逐字母/分段拼读。",
    words: [
      { t: "Mon", r: "determinant", zh: "我的" },
      { t: "e-mail", r: "nom", zh: "邮箱" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "wangming@exemple.fr", r: "nom", zh: "邮箱地址" },
    ]
  },
  {
    id: 152, unit: "U1", cat: "年龄", emoji: "🎂",
    fr: "Est-ce que vous avez vingt ans ?",
    zh: "您二十岁吗？",
    structure: "est-ce que + 主语(vous) + 谓语(avez) + 年龄(vignt ans)",
    note: "年龄用 avoir；est-ce que 引导一般疑问。",
    words: [
      { t: "Est-ce que", r: "interrogation", zh: "是否（一般疑问）" },
      { t: "vous", r: "sujet", zh: "您/你们" },
      { t: "avez", r: "verbe", zh: "有" },
      { t: "vingt", r: "numeral", zh: "二十" },
      { t: "ans", r: "nom", zh: "岁" },
    ]
  },
  {
    id: 153, unit: "U1", cat: "住址", emoji: "🏠",
    fr: "Quelle est votre adresse ?",
    zh: "您的地址是什么？",
    structure: "疑问词(Quelle) + 系动词(est) + 主语(votre adresse)",
    note: "adresse 阴性，用 Quelle；回答 Mon adresse est le…",
    words: [
      { t: "Quelle", r: "interrogation", zh: "哪个（阴）" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "votre", r: "determinant", zh: "您的" },
      { t: "adresse", r: "nom", zh: "地址" },
    ]
  },
  {
    id: 154, unit: "U1", cat: "近况", emoji: "😊",
    fr: "Enchanté !",
    zh: "很高兴认识您！",
    structure: "固定用语(Enchanté)",
    note: "初次见面用语；对女性说 Enchantée。",
    words: [
      { t: "Enchanté", r: "politesse", zh: "很高兴" },
    ]
  },
  {
    id: 155, unit: "U2", cat: "名称", emoji: "📖",
    fr: "C'est quoi, cela ?",
    zh: "这是什么？",
    structure: "主语(C') + 系动词(est) + 疑问词(quoi) + 主语(cela，口语)",
    note: "口语问法，等于 Qu'est-ce que c'est ?",
    words: [
      { t: "C'est", r: "nom", zh: "" },
      { t: "quoi", r: "interrogation", zh: "什么" },
      { t: "cela", r: "sujet", zh: "这" },
    ]
  },
  {
    id: 156, unit: "U2", cat: "颜色", emoji: "🎨",
    fr: "De quelle couleur sont ces chaussures ?",
    zh: "这些鞋是什么颜色？",
    structure: "介词(De) + 疑问词(quelle couleur) + 系动词(sont) + 主语(ces chaussures)",
    note: "复数主语用 sont；回答 Elles sont noires。",
    words: [
      { t: "De", r: "preposition", zh: "的/从" },
      { t: "quelle", r: "interrogation", zh: "哪个（阴）" },
      { t: "couleur", r: "nom", zh: "颜色" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "ces", r: "determinant", zh: "这些" },
      { t: "chaussures", r: "nom", zh: "鞋" },
    ]
  },
  {
    id: 157, unit: "U2", cat: "颜色", emoji: "🎨",
    fr: "Elle est bleue.",
    zh: "它是蓝色的。",
    structure: "主语(Elle) + 系动词(est) + 形容词表语(bleue)",
    note: "颜色形容词与主语性数配合：bleu/bleue。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "bleue", r: "adjectif", zh: "蓝的（阴）" },
    ]
  },
  {
    id: 158, unit: "U2", cat: "颜色", emoji: "🎨",
    fr: "Elles sont noires.",
    zh: "它们是黑色的。",
    structure: "主语(Elles) + 系动词(sont) + 形容词表语(noires)",
    note: "阴性复数：noire + s。",
    words: [
      { t: "Elles", r: "sujet", zh: "她们" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "noires", r: "adjectif", zh: "黑的（阴复）" },
    ]
  },
  {
    id: 159, unit: "U2", cat: "所属", emoji: "🧥",
    fr: "Est-ce que c'est à toi ?",
    zh: "这是你的吗？",
    structure: "est-ce que + 主语(c') + 系动词(est) + 介词(à) + 重读代词(toi)",
    note: "熟人所属用 à toi；正式用 à vous。",
    words: [
      { t: "Est-ce que", r: "interrogation", zh: "是否（一般疑问）" },
      { t: "c'est", r: "nom", zh: "" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "toi", r: "complement", zh: "你（重读）" },
    ]
  },
  {
    id: 160, unit: "U2", cat: "所属", emoji: "🧥",
    fr: "C'est à Pierre.",
    zh: "这是皮埃尔的。",
    structure: "主语(C') + 系动词(est) + 介词(à) + 专有名词(Pierre)",
    note: "à + 人名表所属。",
    words: [
      { t: "C'est", r: "nom", zh: "" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "Pierre", r: "nom-propre", zh: "皮埃尔" },
    ]
  },
  {
    id: 161, unit: "U2", cat: "形状", emoji: "📐",
    fr: "Comment est cette table ?",
    zh: "这张桌子是什么样的？",
    structure: "疑问词(Comment) + 系动词(est) + 主语(cette table)",
    note: "问形状/特征；回答 Elle est grande, rectangulaire。",
    words: [
      { t: "Comment", r: "interrogation", zh: "怎样" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "cette", r: "determinant", zh: "这个（阴）" },
      { t: "table", r: "nom", zh: "桌子" },
    ]
  },
  {
    id: 162, unit: "U2", cat: "形状", emoji: "📐",
    fr: "Elle est grande, rectangulaire.",
    zh: "它很大，是长方形的。",
    structure: "主语(Elle) + 系动词(est) + 形容词(grande) + 形容词(rectangulaire)",
    note: "多个形容词并列，用逗号隔开。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "grande", r: "adjectif", zh: "大的（阴）" },
      { t: "rectangulaire", r: "adjectif", zh: "长方形的" },
    ]
  },
  {
    id: 163, unit: "U2", cat: "新旧", emoji: "🆕",
    fr: "Est-elle neuve ou ancienne ?",
    zh: "它是新的还是旧的？",
    structure: "系动词(Est) + 主语(elle，倒装) + 形容词(neuve) + 连词(ou) + 形容词(ancienne)",
    note: "选择疑问句用 ou（或者）；neuve/ancienne 阴性。",
    words: [
      { t: "Est-elle", r: "verbe", zh: "系动词+主语（倒装疑问）" },
      { t: "neuve", r: "adjectif", zh: "新的（阴）" },
      { t: "ou", r: "conjonction", zh: "或者" },
      { t: "ancienne", r: "adjectif", zh: "旧的（阴）" },
    ]
  },
  {
    id: 164, unit: "U2", cat: "新旧", emoji: "🆕",
    fr: "Elle est ancienne.",
    zh: "它是旧的。",
    structure: "主语(Elle) + 系动词(est) + 形容词表语(ancienne)",
    note: "ancien 阴性 ancienne。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "ancienne", r: "adjectif", zh: "旧的（阴）" },
    ]
  },
  {
    id: 165, unit: "U2", cat: "位置", emoji: "🔍",
    fr: "Où sont les livres ?",
    zh: "书在哪里？",
    structure: "疑问词(Où) + 系动词(sont) + 主语(les livres)",
    note: "复数主语用 sont；回答 Ils sont dans le sac。",
    words: [
      { t: "Où", r: "interrogation", zh: "哪里" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "les", r: "determinant", zh: "定冠词（复）" },
      { t: "livres", r: "nom", zh: "书" },
    ]
  },
  {
    id: 166, unit: "U2", cat: "位置", emoji: "🔍",
    fr: "Ils sont dans le sac.",
    zh: "它们在包里。",
    structure: "主语(Ils) + 系动词(sont) + 介词(dans) + 名词(le sac)",
    note: "dans 在…里；les livres 是阳性复数，用 Ils 指代。",
    words: [
      { t: "Ils", r: "sujet", zh: "他们" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "dans", r: "preposition", zh: "在…里" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "sac", r: "nom", zh: "包" },
    ]
  },
  {
    id: 167, unit: "U2", cat: "价格", emoji: "💶",
    fr: "Quel est le prix de cette robe ?",
    zh: "这条裙子多少钱？",
    structure: "疑问词(Quel) + 系动词(est) + 主语(le prix de cette robe)",
    note: "问价格也可用 Combien coûte… ?",
    words: [
      { t: "Quel", r: "interrogation", zh: "哪个" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "prix", r: "nom", zh: "价格" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "cette", r: "determinant", zh: "这个（阴）" },
      { t: "robe", r: "nom", zh: "裙子" },
    ]
  },
  {
    id: 168, unit: "U2", cat: "价格", emoji: "💶",
    fr: "La robe coûte 80 euros.",
    zh: "这条裙子卖 80 欧元。",
    structure: "主语(La robe) + 谓语(coûte) + 数词(80) + 货币(euros)",
    note: "coûter 表价值；euro 复数加 s。",
    words: [
      { t: "La", r: "determinant", zh: "定冠词（阴）" },
      { t: "robe", r: "nom", zh: "裙子" },
      { t: "coûte", r: "verbe", zh: "价值" },
      { t: "80", r: "numeral", zh: "数字" },
      { t: "euros", r: "nom", zh: "欧元" },
    ]
  },
  {
    id: 169, unit: "U2", cat: "材质", emoji: "🧴",
    fr: "En quoi est cette bague ?",
    zh: "这枚戒指是什么材质的？",
    structure: "介词(En) + 疑问词(quoi) + 系动词(est) + 主语(cette bague)",
    note: "en + 材料；回答 Elle est en argent。",
    words: [
      { t: "En", r: "preposition", zh: "在/乘" },
      { t: "quoi", r: "interrogation", zh: "什么" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "cette", r: "determinant", zh: "这个（阴）" },
      { t: "bague", r: "nom", zh: "戒指" },
    ]
  },
  {
    id: 170, unit: "U2", cat: "材质", emoji: "🧴",
    fr: "Elle est en argent.",
    zh: "它是银的。",
    structure: "主语(Elle) + 系动词(est) + 介词(en) + 材料(argent)",
    note: "en + 材料名词（不加冠词）。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "argent", r: "nom", zh: "银" },
    ]
  },
  {
    id: 171, unit: "U2", cat: "描述", emoji: "👜",
    fr: "Ce sac est en cuir.",
    zh: "这个包是皮的。",
    structure: "主语(Ce sac) + 系动词(est) + 介词(en) + 材料(cuir)",
    note: "描述材质用 en + 材料。",
    words: [
      { t: "Ce", r: "determinant", zh: "这个" },
      { t: "sac", r: "nom", zh: "包" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "cuir", r: "nom", zh: "皮革" },
    ]
  },
  {
    id: 172, unit: "U2", cat: "描述", emoji: "👜",
    fr: "Il est grand, noir et carré.",
    zh: "它很大，是黑色方形的。",
    structure: "主语(Il) + 系动词(est) + 形容词(grand) + 形容词(noir) + 连词(et) + 形容词(carré)",
    note: "多形容词并列：前用逗号，最后两个用 et 连接。",
    words: [
      { t: "Il", r: "sujet", zh: "他/它" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "grand", r: "adjectif", zh: "大的" },
      { t: "noir", r: "adjectif", zh: "黑的" },
      { t: "et", r: "conjonction", zh: "和" },
      { t: "carré", r: "adjectif", zh: "方的" },
    ]
  },
  {
    id: 173, unit: "U3", cat: "问路", emoji: "🚉",
    fr: "Excusez-moi, où est la gare ?",
    zh: "打扰一下，火车站在哪里？",
    structure: "礼貌用语(Excusez-moi) + 疑问词(où) + 系动词(est) + 主语(la gare)",
    note: "Excusez-moi 是礼貌开场。",
    words: [
      { t: "Excusez-moi", r: "politesse", zh: "打扰一下" },
      { t: "où", r: "interrogation", zh: "哪里" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "gare", r: "nom", zh: "火车站" },
    ]
  },
  {
    id: 174, unit: "U3", cat: "问路", emoji: "🚉",
    fr: "La gare est en face de la banque.",
    zh: "火车站在银行对面。",
    structure: "主语(La gare) + 系动词(est) + 方位短语(en face de la banque)",
    note: "en face de 在…正对面。",
    words: [
      { t: "La", r: "determinant", zh: "定冠词（阴）" },
      { t: "gare", r: "nom", zh: "火车站" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "en face", r: "preposition", zh: "在…对面" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "banque", r: "nom", zh: "银行" },
    ]
  },
  {
    id: 175, unit: "U3", cat: "问路", emoji: "🏥",
    fr: "Pour aller à l'hôpital, s'il vous plaît ?",
    zh: "请问去医院怎么走？",
    structure: "介词(Pour) + 动词(aller) + 地点(à l'hôpital) + 礼貌用语(s'il vous plaît)",
    note: "Pour aller à… ? 问路常用句。",
    words: [
      { t: "Pour", r: "preposition", zh: "为了" },
      { t: "aller", r: "verbe", zh: "去" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "l'hôpital", r: "nom", zh: "" },
      { t: "s'il vous plaît", r: "politesse", zh: "请" },
    ]
  },
  {
    id: 176, unit: "U3", cat: "指路", emoji: "🚇",
    fr: "Prenez le métro ligne 1.",
    zh: "乘地铁 1 号线。",
    structure: "命令式谓语(Prenez) + 宾语(le métro) + 线路(ligne 1)",
    note: "Prenez 是 prendre 的 vous 命令式。",
    words: [
      { t: "Prenez", r: "verbe", zh: "拿/乘（命令式）" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "métro", r: "nom", zh: "地铁" },
      { t: "ligne", r: "nom", zh: "线路" },
      { t: "1", r: "numeral", zh: "数字" },
    ]
  },
  {
    id: 177, unit: "U3", cat: "指路", emoji: "🛣️",
    fr: "Continuez tout droit.",
    zh: "继续直走。",
    structure: "命令式谓语(Continuez) + 副词短语(tout droit)",
    note: "continuez 是 continuer 的 vous 命令式。",
    words: [
      { t: "Continuez", r: "verbe", zh: "继续（命令式）" },
      { t: "tout droit", r: "adverbe", zh: "一直/直走" },
    ]
  },
  {
    id: 178, unit: "U3", cat: "指路", emoji: "🌉",
    fr: "Traversez le boulevard.",
    zh: "穿过大道。",
    structure: "命令式谓语(Traversez) + 宾语(le boulevard)",
    note: "traversez 是 traverser 的 vous 命令式。",
    words: [
      { t: "Traversez", r: "verbe", zh: "穿过（命令式）" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "boulevard", r: "nom", zh: "大道" },
    ]
  },
  {
    id: 179, unit: "U3", cat: "方位", emoji: "🏛️",
    fr: "Le café est en face de la mairie.",
    zh: "咖啡馆在市政厅对面。",
    structure: "主语(Le café) + 系动词(est) + 方位短语(en face de la mairie)",
    note: "en face de 在…正对面。",
    words: [
      { t: "Le", r: "determinant", zh: "定冠词（阳）" },
      { t: "café", r: "nom", zh: "咖啡馆" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "en face", r: "preposition", zh: "在…对面" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "mairie", r: "nom", zh: "市政厅" },
    ]
  },
  {
    id: 180, unit: "U3", cat: "方位", emoji: "🏨",
    fr: "L'hôtel est au bord de la mer.",
    zh: "酒店在海边。",
    structure: "主语(L'hôtel) + 系动词(est) + 方位短语(au bord de la mer)",
    note: "au bord de 在…边缘/岸边。",
    words: [
      { t: "L'hôtel", r: "nom", zh: "" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "au bord", r: "preposition", zh: "在…边缘" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "mer", r: "nom", zh: "海" },
    ]
  },
  {
    id: 181, unit: "U3", cat: "方位", emoji: "🔑",
    fr: "Les clés sont dans le tiroir.",
    zh: "钥匙在抽屉里。",
    structure: "主语(Les clés) + 系动词(sont) + 介词(dans) + 名词(le tiroir)",
    note: "dans 在…里；复数用 sont。",
    words: [
      { t: "Les", r: "determinant", zh: "定冠词（复）" },
      { t: "clés", r: "nom", zh: "钥匙" },
      { t: "sont", r: "verbe", zh: "是" },
      { t: "dans", r: "preposition", zh: "在…里" },
      { t: "le", r: "determinant", zh: "定冠词（阳）" },
      { t: "tiroir", r: "nom", zh: "抽屉" },
    ]
  },
  {
    id: 182, unit: "U3", cat: "方位", emoji: "🐱",
    fr: "Le chat est sous la chaise.",
    zh: "猫在椅子下面。",
    structure: "主语(Le chat) + 系动词(est) + 介词(sous) + 名词(la chaise)",
    note: "sous 在…下。",
    words: [
      { t: "Le", r: "determinant", zh: "定冠词（阳）" },
      { t: "chat", r: "nom", zh: "猫" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "sous", r: "preposition", zh: "在…下" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "chaise", r: "nom", zh: "椅子" },
    ]
  },
  {
    id: 183, unit: "U3", cat: "方位", emoji: "🌳",
    fr: "L'école est près du parc.",
    zh: "学校在公园附近。",
    structure: "主语(L'école) + 系动词(est) + 方位短语(près du parc)",
    note: "près de + le = près du。",
    words: [
      { t: "L'école", r: "nom", zh: "" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "près du", r: "preposition", zh: "在…附近" },
      { t: "parc", r: "nom", zh: "公园" },
    ]
  },
  {
    id: 184, unit: "U3", cat: "方位", emoji: "↩️",
    fr: "Tournez à gauche.",
    zh: "左转。",
    structure: "命令式谓语(Tournez) + 介词(à) + 方位词(gauche)",
    note: "tourner à gauche 左转。",
    words: [
      { t: "Tournez", r: "verbe", zh: "转（命令式）" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "gauche", r: "direction", zh: "左" },
    ]
  },
  {
    id: 185, unit: "U3", cat: "方位", emoji: "🛤️",
    fr: "La rue est au bout de l'avenue.",
    zh: "这条街在大街尽头。",
    structure: "主语(La rue) + 系动词(est) + 方位短语(au bout de l'avenue)",
    note: "au bout de 在…尽头。",
    words: [
      { t: "La", r: "determinant", zh: "定冠词（阴）" },
      { t: "rue", r: "nom", zh: "街" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "au bout", r: "preposition", zh: "在…尽头" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "l'avenue", r: "nom", zh: "" },
    ]
  },
  {
    id: 186, unit: "U3", cat: "交通", emoji: "🚗",
    fr: "Il va au centre-ville en voiture.",
    zh: "他开汽车去市中心。",
    structure: "主语(Il) + 谓语(va) + 地点(au centre-ville) + 方式(en voiture)",
    note: "en + 交通工具（voiture/bus/métro/train）。",
    words: [
      { t: "Il", r: "sujet", zh: "他/它" },
      { t: "va", r: "verbe", zh: "去" },
      { t: "au", r: "preposition", zh: "在（à+le）" },
      { t: "centre-ville", r: "nom", zh: "市中心" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "voiture", r: "nom", zh: "汽车" },
    ]
  },
  {
    id: 187, unit: "U3", cat: "交通", emoji: "🚌",
    fr: "Elle vient en bus.",
    zh: "她坐公交车来。",
    structure: "主语(Elle) + 谓语(vient) + 方式(en bus)",
    note: "venir en bus 坐公交来。",
    words: [
      { t: "Elle", r: "sujet", zh: "她/它" },
      { t: "vient", r: "verbe", zh: "来" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "bus", r: "nom", zh: "公交" },
    ]
  },
  {
    id: 188, unit: "U3", cat: "交通", emoji: "🚄",
    fr: "Nous allons à Lyon en train.",
    zh: "我们坐火车去里昂。",
    structure: "主语(Nous) + 谓语(allons) + 地点(à Lyon) + 方式(en train)",
    note: "aller en train 坐火车去。",
    words: [
      { t: "Nous", r: "sujet", zh: "我们" },
      { t: "allons", r: "verbe", zh: "去" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "Lyon", r: "nom-propre", zh: "里昂" },
      { t: "en", r: "preposition", zh: "在/乘" },
      { t: "train", r: "nom", zh: "火车" },
    ]
  },
  {
    id: 189, unit: "U3", cat: "交通", emoji: "🚲",
    fr: "Tu vas à l'école à vélo ?",
    zh: "你骑自行车上学吗？",
    structure: "主语(Tu) + 谓语(vas) + 地点(à l'école) + 方式(à vélo)",
    note: "à vélo 骑车； Metro 等用 en。",
    words: [
      { t: "Tu", r: "sujet", zh: "你" },
      { t: "vas", r: "verbe", zh: "去" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "l'école", r: "nom", zh: "" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "vélo", r: "nom", zh: "自行车" },
    ]
  },
  {
    id: 190, unit: "U3", cat: "方位", emoji: "🗺️",
    fr: "Orléans se trouve au sud de Paris.",
    zh: "奥尔良在巴黎以南。",
    structure: "主语(Orléans) + 代词式谓语(se trouve) + 方位(au sud de Paris)",
    note: "au sud de 在…以南（范围之外）。",
    words: [
      { t: "Orléans", r: "nom-propre", zh: "奥尔良" },
      { t: "se", r: "verbe", zh: "自反代词" },
      { t: "trouve", r: "verbe", zh: "位于" },
      { t: "au sud", r: "preposition", zh: "在…以南" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "Paris", r: "nom-propre", zh: "巴黎" },
    ]
  },
  {
    id: 191, unit: "U3", cat: "方位", emoji: "🗺️",
    fr: "Lyon est à l'est de Paris.",
    zh: "里昂在巴黎以东。",
    structure: "主语(Lyon) + 系动词(est) + 方位(à l'est de Paris)",
    note: "à l'est de 在…以东。",
    words: [
      { t: "Lyon", r: "nom-propre", zh: "里昂" },
      { t: "est", r: "verbe", zh: "是" },
      { t: "à l'est", r: "preposition", zh: "在…以东" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "Paris", r: "nom-propre", zh: "巴黎" },
    ]
  },
  {
    id: 192, unit: "U3", cat: "问路", emoji: "🙋",
    fr: "Pardon, monsieur.",
    zh: "打扰一下，先生。",
    structure: "礼貌用语(Pardon) + 称呼(monsieur)",
    note: "Pardon 用于礼貌打断或问路开场。",
    words: [
      { t: "Pardon", r: "politesse", zh: "打扰一下" },
      { t: "monsieur", r: "nom", zh: "先生" },
    ]
  },
  {
    id: 193, unit: "U3", cat: "问路", emoji: "🏛️",
    fr: "Le musée du Louvre, c'est par où ?",
    zh: "卢浮宫怎么走？",
    structure: "主语(Le musée du Louvre) + 系动词(c') + 疑问词(par où)",
    note: "par où 从哪儿走，口语问路。",
    words: [
      { t: "Le", r: "determinant", zh: "定冠词（阳）" },
      { t: "musée", r: "nom", zh: "博物馆" },
      { t: "du", r: "determinant", zh: "缩合冠词(de+le)" },
      { t: "Louvre", r: "nom-propre", zh: "卢浮宫" },
      { t: "c'est", r: "nom", zh: "" },
      { t: "par", r: "preposition", zh: "经/由" },
      { t: "où", r: "interrogation", zh: "哪里" },
    ]
  },
  {
    id: 194, unit: "U3", cat: "指路", emoji: "📍",
    fr: "C'est au bout de la rue.",
    zh: "在街道尽头。",
    structure: "主语(C') + 系动词(est) + 方位短语(au bout de la rue)",
    note: "au bout de 在…尽头。",
    words: [
      { t: "C'est", r: "nom", zh: "" },
      { t: "au bout", r: "preposition", zh: "在…尽头" },
      { t: "de", r: "preposition", zh: "的/从" },
      { t: "la", r: "determinant", zh: "定冠词（阴）" },
      { t: "rue", r: "nom", zh: "街" },
    ]
  },
  {
    id: 195, unit: "U3", cat: "交通", emoji: "🚶",
    fr: "J'y vais à pied.",
    zh: "我走路去那儿。",
    structure: "主语(J') + 副代词(y) + 谓语(vais) + 方式(à pied)",
    note: "y 代替前面提到的地点；à pied 步行。",
    words: [
      { t: "J'y", r: "sujet", zh: "我（缩合）+副代词y" },
      { t: "vais", r: "verbe", zh: "去" },
      { t: "à", r: "preposition", zh: "在/向/乘" },
      { t: "pied", r: "nom", zh: "步行" },
    ]
  },
];

/* =========================================================
   造句练习「题组」：把问答句配对到同一界面，独立句单独成组。
   - lines: 引用的 SENTENCES id 数组（问句在前、答句在后）；每组 1~2 句
   - 同一个句子 id 只出现一次，避免重复计数（35 句全覆盖）
   - qa=true 表示这是一组问答（界面上会标注「问 / 答」）
   - 严格按 lines 顺序逐句手写、逐句批改
   ========================================================= */
const BUILD_GROUPS = [
  /* ---------- U1 相遇 ---------- */
  { id: "G01", unit: "U1", cat: "问候", emoji: "👋", qa: false, lines: [101] },
  { id: "G02", unit: "U1", cat: "姓名", emoji: "🪪", qa: true,  lines: [102, 103] },
  { id: "G03", unit: "U1", cat: "身份", emoji: "🎓", qa: true,  lines: [104, 105] },
  { id: "G04", unit: "U1", cat: "国籍", emoji: "🌍", qa: true,  lines: [106, 107] },
  { id: "G05", unit: "U1", cat: "国籍", emoji: "🇨🇳", qa: false, lines: [108] },
  { id: "G06", unit: "U1", cat: "年龄", emoji: "🎂", qa: true,  lines: [109, 110] },
  { id: "G07", unit: "U1", cat: "住址", emoji: "🏠", qa: false, lines: [111] },
  { id: "G08", unit: "U1", cat: "近况", emoji: "😊", qa: false, lines: [112] },
  /* ---------- U2 画像 ---------- */
  { id: "G09", unit: "U2", cat: "名称", emoji: "📖", qa: true,  lines: [113, 114] },
  { id: "G10", unit: "U2", cat: "名称", emoji: "🔑", qa: false, lines: [115] },
  { id: "G11", unit: "U2", cat: "颜色", emoji: "🎨", qa: true,  lines: [116, 117] },
  { id: "G12", unit: "U2", cat: "所属", emoji: "🧥", qa: true,  lines: [118, 119] },
  { id: "G13", unit: "U2", cat: "位置", emoji: "🔍", qa: true,  lines: [120, 121] },
  { id: "G14", unit: "U2", cat: "价格", emoji: "💶", qa: true,  lines: [122, 123] },
  /* ---------- U3 在哪儿 ---------- */
  { id: "G15", unit: "U3", cat: "问路", emoji: "🏛️", qa: true,  lines: [124, 125] },
  { id: "G16", unit: "U3", cat: "方位", emoji: "🚇", qa: true,  lines: [126, 127] },
  { id: "G17", unit: "U3", cat: "问路", emoji: "📏", qa: true,  lines: [128, 129] },
  { id: "G18", unit: "U3", cat: "指路", emoji: "⬆️", qa: false, lines: [130] },
  { id: "G19", unit: "U3", cat: "指路", emoji: "➡️", qa: false, lines: [131] },
  { id: "G20", unit: "U3", cat: "指路", emoji: "↩️", qa: false, lines: [132] },
  { id: "G21", unit: "U3", cat: "交通", emoji: "🚶", qa: false, lines: [133] },
  { id: "G22", unit: "U3", cat: "交通", emoji: "🚇", qa: false, lines: [134] },
  { id: "G23", unit: "U3", cat: "方位", emoji: "🏦", qa: false, lines: [135] },
  { id: "G24", unit: "U1", cat: "姓名", emoji: "🪪", qa: true, lines: [136, 138] },
  { id: "G25", unit: "U1", cat: "姓名", emoji: "🪪", qa: false, lines: [137] },
  { id: "G26", unit: "U1", cat: "问候", emoji: "👋", qa: false, lines: [139] },
  { id: "G27", unit: "U1", cat: "身份", emoji: "🎓", qa: false, lines: [140] },
  { id: "G28", unit: "U1", cat: "身份", emoji: "🎓", qa: false, lines: [141] },
  { id: "G29", unit: "U1", cat: "身份", emoji: "🎓", qa: true, lines: [142, 143] },
  { id: "G30", unit: "U1", cat: "国籍", emoji: "🌍", qa: false, lines: [144] },
  { id: "G31", unit: "U1", cat: "国籍", emoji: "🌍", qa: false, lines: [145] },
  { id: "G32", unit: "U1", cat: "近况", emoji: "😊", qa: false, lines: [146] },
  { id: "G33", unit: "U1", cat: "近况", emoji: "😊", qa: false, lines: [147] },
  { id: "G34", unit: "U1", cat: "电话", emoji: "📞", qa: true, lines: [148, 149] },
  { id: "G35", unit: "U1", cat: "邮箱", emoji: "✉️", qa: true, lines: [150, 151] },
  { id: "G36", unit: "U1", cat: "年龄", emoji: "🎂", qa: false, lines: [152] },
  { id: "G37", unit: "U1", cat: "住址", emoji: "🏠", qa: false, lines: [153] },
  { id: "G38", unit: "U1", cat: "近况", emoji: "😊", qa: false, lines: [154] },
  { id: "G39", unit: "U2", cat: "名称", emoji: "📖", qa: false, lines: [155] },
  { id: "G40", unit: "U2", cat: "颜色", emoji: "🎨", qa: true, lines: [156, 158] },
  { id: "G41", unit: "U2", cat: "颜色", emoji: "🎨", qa: false, lines: [157] },
  { id: "G42", unit: "U2", cat: "所属", emoji: "🧥", qa: false, lines: [159] },
  { id: "G43", unit: "U2", cat: "所属", emoji: "🧥", qa: false, lines: [160] },
  { id: "G44", unit: "U2", cat: "形状", emoji: "📐", qa: true, lines: [161, 162] },
  { id: "G45", unit: "U2", cat: "新旧", emoji: "🆕", qa: true, lines: [163, 164] },
  { id: "G46", unit: "U2", cat: "位置", emoji: "🔍", qa: true, lines: [165, 166] },
  { id: "G47", unit: "U2", cat: "价格", emoji: "💶", qa: true, lines: [167, 168] },
  { id: "G48", unit: "U2", cat: "材质", emoji: "🧴", qa: true, lines: [169, 170] },
  { id: "G49", unit: "U2", cat: "描述", emoji: "👜", qa: false, lines: [171] },
  { id: "G50", unit: "U2", cat: "描述", emoji: "👜", qa: false, lines: [172] },
  { id: "G51", unit: "U3", cat: "问路", emoji: "🚉", qa: true, lines: [173, 174] },
  { id: "G52", unit: "U3", cat: "问路", emoji: "🏥", qa: true, lines: [175, 176] },
  { id: "G53", unit: "U3", cat: "指路", emoji: "🛣️", qa: false, lines: [177] },
  { id: "G54", unit: "U3", cat: "指路", emoji: "🌉", qa: false, lines: [178] },
  { id: "G55", unit: "U3", cat: "方位", emoji: "🏛️", qa: false, lines: [179] },
  { id: "G56", unit: "U3", cat: "方位", emoji: "🏨", qa: false, lines: [180] },
  { id: "G57", unit: "U3", cat: "方位", emoji: "🔑", qa: false, lines: [181] },
  { id: "G58", unit: "U3", cat: "方位", emoji: "🐱", qa: false, lines: [182] },
  { id: "G59", unit: "U3", cat: "方位", emoji: "🌳", qa: false, lines: [183] },
  { id: "G60", unit: "U3", cat: "方位", emoji: "↩️", qa: false, lines: [184] },
  { id: "G61", unit: "U3", cat: "方位", emoji: "🛤️", qa: false, lines: [185] },
  { id: "G62", unit: "U3", cat: "交通", emoji: "🚗", qa: false, lines: [186] },
  { id: "G63", unit: "U3", cat: "交通", emoji: "🚌", qa: false, lines: [187] },
  { id: "G64", unit: "U3", cat: "交通", emoji: "🚄", qa: false, lines: [188] },
  { id: "G65", unit: "U3", cat: "交通", emoji: "🚲", qa: false, lines: [189] },
  { id: "G66", unit: "U3", cat: "方位", emoji: "🗺️", qa: false, lines: [190] },
  { id: "G67", unit: "U3", cat: "方位", emoji: "🗺️", qa: false, lines: [191] },
  { id: "G68", unit: "U3", cat: "问路", emoji: "🙋", qa: false, lines: [192] },
  { id: "G69", unit: "U3", cat: "问路", emoji: "🏛️", qa: false, lines: [193] },
  { id: "G70", unit: "U3", cat: "指路", emoji: "📍", qa: false, lines: [194] },
  { id: "G71", unit: "U3", cat: "交通", emoji: "🚶", qa: false, lines: [195] },
];
