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
];
