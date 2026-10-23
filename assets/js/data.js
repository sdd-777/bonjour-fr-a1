/* =========================================================
   Bonjour ! 法语启蒙小屋 — A1 句子数据（48 句）
   - fr: 完整法语句子
   - words: 单词拆分（t=含标点的词形, r=句子成分角色, zh=词义）
   - structure: 一句话结构总览
   - note: 语法小贴士
   拼接规则（joinWords）：前一个词以 ' 结尾，或后一个词以 - 开头时，
   直接相连不加空格 —— 这样拼接结果与 fr 完全一致。
   素材来源：《Unité 1 Rencontres》语法页（名词阴阳性、重读人称代词、
   parler 变位、名词复数、冠词）+ 原有 A1 高频句型。
   ========================================================= */

const ROLES = {
  sujet:         { label: '主语',     color: '#D0707F' },
  verbe:         { label: '谓语',     color: '#5E8F6D' },
  objet:         { label: '宾语',     color: '#5E84AC' },
  attribut:      { label: '表语',     color: '#C97F1F' },
  complement:    { label: '补语',     color: '#8A6BB8' },
  adjectif:      { label: '形容词',   color: '#B98A1F' },
  numeral:       { label: '数词',     color: '#C96A3E' },
  determinant:   { label: '限定词',   color: '#7E8AA8' },
  conjonction:   { label: '连词',     color: '#8E8378' },
  interrogation: { label: '疑问词',   color: '#B04E7E' },
  politesse:     { label: '礼貌用语', color: '#3E8A86' },
  salutation:    { label: '问候语',   color: '#C25E6E' },
  presentation:  { label: '提示词',   color: '#8A6BB8' },
  preposition:   { label: '介词',     color: '#6B8455' },
  'nom-propre':  { label: '专有名词', color: '#9C7423' }
};

const SENTENCES = [
  {
    id: 1, cat: '寒暄', emoji: '👋',
    fr: 'Bonjour, ça va ?',
    zh: '你好，好吗？',
    structure: '问候语 + 主语 + 谓语（一般疑问句）',
    note: 'ça va ? 是法语里使用频率最高的寒暄，直译是“这进行得怎么样？”。回答可以说 Ça va bien !（我很好！）。',
    words: [
      { t: 'Bonjour,', r: 'salutation', zh: '你好（白天问候）' },
      { t: 'ça', r: 'sujet', zh: '这；情况' },
      { t: 'va ?', r: 'verbe', zh: '进行；去' }
    ]
  },
  {
    id: 2, cat: '寒暄', emoji: '😊',
    fr: 'Je vais bien, merci.',
    zh: '我很好，谢谢。',
    structure: '主语 + 谓语 + 程度补语 + 礼貌用语',
    note: 'aller（走）是不规则动词，je vais 是它最常用的变位；bien 是副词，表示“好”。',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'vais', r: 'verbe', zh: '去；处于……状态' },
      { t: 'bien,', r: 'complement', zh: '好' },
      { t: 'merci.', r: 'politesse', zh: '谢谢' }
    ]
  },
  {
    id: 3, cat: '寒暄', emoji: '🎩',
    fr: 'Comment allez-vous ?',
    zh: '您好吗？',
    structure: '疑问词 + 谓语 + 主语（主谓倒装 · 礼貌体）',
    note: 'allez-vous 把动词放到主语前面，这叫“主谓倒装”，是礼貌的说法。朋友之间可以说 Comment tu vas ?（不用倒装）。',
    words: [
      { t: 'Comment', r: 'interrogation', zh: '怎样；如何' },
      { t: 'allez', r: 'verbe', zh: '去；走（vous 的变位）' },
      { t: '-vous ?', r: 'sujet', zh: '您；你们' }
    ]
  },
  {
    id: 4, cat: '寒暄', emoji: '🚪',
    fr: 'Au revoir !',
    zh: '再见！',
    structure: '介词 + 动词不定式（固定告别语）',
    note: 'au revoir 直译是“到再次相见（的时候）”，正式场合和口语都能用。au = à + le 的合写。',
    words: [
      { t: 'Au', r: 'preposition', zh: '到……去（à + le）' },
      { t: 'revoir !', r: 'verbe', zh: '再次见到' }
    ]
  },
  {
    id: 5, cat: '自我介绍', emoji: '🙋',
    fr: "Je m'appelle Marie.",
    zh: '我叫玛丽。',
    structure: '主语 + 代词式谓语 + 专有名词',
    note: "s'appeler 是“代词式动词”，me 在以元音开头的词前要写成 m'，所以是 Je m'appelle（不是 Je appelle）。",
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: "m'appelle", r: 'verbe', zh: "名叫（s'appeler）" },
      { t: 'Marie.', r: 'nom-propre', zh: '玛丽（人名）' }
    ]
  },
  {
    id: 6, cat: '自我介绍', emoji: '🎓',
    fr: 'Je suis étudiant.',
    zh: '我是学生。',
    structure: '主语 + 系动词 + 表语',
    note: 'être（是）的变位：je suis。女生要把 étudiant 改成 étudiante（阴性加 -e）。',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'suis', r: 'verbe', zh: '是（être）' },
      { t: 'étudiant.', r: 'attribut', zh: '学生（男）' }
    ]
  },
  {
    id: 7, cat: '自我介绍', emoji: '❓',
    fr: "Tu t'appelles comment ?",
    zh: '你叫什么名字？',
    structure: '主语 + 谓语 + 疑问词（口语不倒装）',
    note: '口语里 comment 直接放在句尾就可以，这是朋友之间最自然的问法。',
    words: [
      { t: 'Tu', r: 'sujet', zh: '你' },
      { t: "t'appelles", r: 'verbe', zh: "名叫（s'appeler）" },
      { t: 'comment ?', r: 'interrogation', zh: '怎样；什么' }
    ]
  },
  {
    id: 8, cat: '自我介绍', emoji: '🎂',
    fr: "J'ai vingt ans.",
    zh: '我二十岁。',
    structure: '主语 + 谓语 + 数词 + 数量补语',
    note: "问年龄说 Quel âge as-tu ?（你几岁？）。J'ai = je ai，je 在元音前省音写成 J'。",
    words: [
      { t: "J'", r: 'sujet', zh: '我（je 的省音）' },
      { t: 'ai', r: 'verbe', zh: '有（avoir）' },
      { t: 'vingt', r: 'numeral', zh: '二十' },
      { t: 'ans.', r: 'complement', zh: '岁；年' }
    ]
  },
  {
    id: 9, cat: '家庭', emoji: '👨‍👩‍👧',
    fr: 'Voici ma famille.',
    zh: '这是我的家人。',
    structure: '提示词 + 限定词 + 宾语',
    note: 'famille 是阴性名词，所以用 ma famille；阳性会用 mon，比如 mon frère（我的兄弟）。',
    words: [
      { t: 'Voici', r: 'presentation', zh: '这是；请看' },
      { t: 'ma', r: 'determinant', zh: '我的（阴性）' },
      { t: 'famille.', r: 'objet', zh: '家人；家庭' }
    ]
  },
  {
    id: 10, cat: '家庭', emoji: '👨‍⚕️',
    fr: 'Mon père est médecin.',
    zh: '我爸爸是医生。',
    structure: '限定词 + 主语 + 系动词 + 表语',
    note: 'médecin 男女同形：mon père est médecin 和 ma mère est médecin 都能说。',
    words: [
      { t: 'Mon', r: 'determinant', zh: '我的（阳性）' },
      { t: 'père', r: 'sujet', zh: '父亲' },
      { t: 'est', r: 'verbe', zh: '是（il/elle 的变位）' },
      { t: 'médecin.', r: 'attribut', zh: '医生' }
    ]
  },
  {
    id: 11, cat: '家庭', emoji: '🐱',
    fr: "J'ai un chat.",
    zh: '我有一只猫。',
    structure: '主语 + 谓语 + 不定冠词 + 宾语',
    note: 'un 用在阳性单数可数名词前；如果想特指“那只猫”，要用定冠词 le chat。',
    words: [
      { t: "J'", r: 'sujet', zh: '我' },
      { t: 'ai', r: 'verbe', zh: '有' },
      { t: 'un', r: 'determinant', zh: '一只；一个' },
      { t: 'chat.', r: 'objet', zh: '猫' }
    ]
  },
  {
    id: 12, cat: '日常生活', emoji: '🏠',
    fr: "J'habite à Paris.",
    zh: '我住在巴黎。',
    structure: '主语 + 谓语 + 介词 + 地点',
    note: '城市前用 à（à Paris 在巴黎），国家前常说 en（en Chine）或 au（au Japon）。',
    words: [
      { t: "J'", r: 'sujet', zh: '我' },
      { t: 'habite', r: 'verbe', zh: '居住' },
      { t: 'à', r: 'preposition', zh: '在；到' },
      { t: 'Paris.', r: 'nom-propre', zh: '巴黎（城市）' }
    ]
  },
  {
    id: 14, cat: '日常生活', emoji: '🕗',
    fr: 'Il est huit heures.',
    zh: '现在八点钟。',
    structure: '形式主语 + 谓语 + 数词 + 时间补语',
    note: '报时用 Il est + 时间：Il est huit heures（八点了）。heures 永远是复数。',
    words: [
      { t: 'Il', r: 'sujet', zh: '他；它（表时间）' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'huit', r: 'numeral', zh: '八' },
      { t: 'heures.', r: 'complement', zh: '点钟；小时' }
    ]
  },
  {
    id: 15, cat: '喜好', emoji: '☕',
    fr: "J'aime le café.",
    zh: '我喜欢咖啡。',
    structure: '主语 + 谓语 + 定冠词 + 宾语',
    note: 'aimer 表示“喜欢”；定冠词 le 让 café 泛指“（这种）咖啡”这类事物。',
    words: [
      { t: "J'", r: 'sujet', zh: '我' },
      { t: 'aime', r: 'verbe', zh: '喜欢' },
      { t: 'le', r: 'determinant', zh: '这；那个（定冠词）' },
      { t: 'café.', r: 'objet', zh: '咖啡' }
    ]
  },
  {
    id: 16, cat: '喜好', emoji: '😻',
    fr: 'Le chat est mignon.',
    zh: '这只猫很可爱。',
    structure: '限定词 + 主语 + 系动词 + 形容词表语',
    note: '很多法语形容词放在名词后面：un chat mignon。mignon 的阴性形式是 mignonne。',
    words: [
      { t: 'Le', r: 'determinant', zh: '这；那只（定冠词）' },
      { t: 'chat', r: 'sujet', zh: '猫' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'mignon.', r: 'adjectif', zh: '可爱的' }
    ]
  },
  {
    id: 17, cat: '喜好', emoji: '🥤',
    fr: 'Je voudrais un café.',
    zh: '我想要一杯咖啡。',
    structure: '主语 + 谓语 + 冠词 + 宾语',
    note: 'voudrais 是 vouloir 的条件式，比 je veux（我想要）礼貌得多，点餐时说 Je voudrais… 就对了。',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'voudrais', r: 'verbe', zh: '想要（vouloir 条件式）' },
      { t: 'un', r: 'determinant', zh: '一杯；一个' },
      { t: 'café.', r: 'objet', zh: '咖啡' }
    ]
  },
  {
    id: 18, cat: '餐厅', emoji: '🧾',
    fr: "L'addition, s'il vous plaît !",
    zh: '买单，谢谢！',
    structure: '宾语 + 礼貌用语（省略句）',
    note: "完整句是 Je voudrais l'addition, s'il vous plaît。s'il = si + il 的省音，直译“如果这使您愉快”。",
    words: [
      { t: "L'addition,", r: 'objet', zh: '账单（le 的省音）' },
      { t: "s'il vous plaît !", r: 'politesse', zh: '请（礼貌用语）' }
    ]
  },
  {
    id: 19, cat: '家庭', emoji: '🐶',
    fr: 'Elle a un chien.',
    zh: '她有一只狗。',
    structure: '主语 + 谓语 + 冠词 + 宾语',
    note: "avoir（有）的变位：j'ai, tu as, il a, elle a。il a un chat / elle a un chien 是对照记忆的好句型。",
    words: [
      { t: 'Elle', r: 'sujet', zh: '她' },
      { t: 'a', r: 'verbe', zh: '有（avoir）' },
      { t: 'un', r: 'determinant', zh: '一只' },
      { t: 'chien.', r: 'objet', zh: '狗' }
    ]
  },

  /* ===== 语言：parler 变位全家桶（教材 Unité 1 变位表） ===== */
  {
    id: 13, cat: '语言', emoji: '🗣️',
    fr: 'Je parle français.',
    zh: '我说法语。',
    structure: '主语 + 谓语 + 宾语',
    note: 'parler 后面直接跟语言，中间不加介词：parler français / anglais / chinois。',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'parle', r: 'verbe', zh: '说（某种语言）' },
      { t: 'français.', r: 'objet', zh: '法语' }
    ]
  },
  {
    id: 20, cat: '语言', emoji: '🇨🇳',
    fr: 'Tu parles chinois.',
    zh: '你说中文。',
    structure: '主语 + 谓语 + 宾语',
    note: 'parler 是以 -er 结尾的第一组规则动词：tu parles（你说）。je / tu / il 的变位只差一个 -s，很好记。',
    words: [
      { t: 'Tu', r: 'sujet', zh: '你' },
      { t: 'parles', r: 'verbe', zh: '说（tu 的变位）' },
      { t: 'chinois.', r: 'objet', zh: '中文' }
    ]
  },
  {
    id: 21, cat: '语言', emoji: '🇬🇧',
    fr: 'Il parle anglais.',
    zh: '他说英语。',
    structure: '主语 + 谓语 + 宾语',
    note: '语言名词直接跟在 parler 后面，不加冠词：parler anglais（说英语）。il 和 elle 的变位完全一样，都是 parle。',
    words: [
      { t: 'Il', r: 'sujet', zh: '他' },
      { t: 'parle', r: 'verbe', zh: '说' },
      { t: 'anglais.', r: 'objet', zh: '英语' }
    ]
  },
  {
    id: 22, cat: '语言', emoji: '🇯🇵',
    fr: 'Nous parlons japonais.',
    zh: '我们说日语。',
    structure: '主语 + 谓语 + 宾语',
    note: 'nous 的变位固定是 -ons：nous parlons（我们说）。从 je parle 到 nous parlons，是法语入门的第一个变位阶梯。',
    words: [
      { t: 'Nous', r: 'sujet', zh: '我们' },
      { t: 'parlons', r: 'verbe', zh: '说（nous 的变位）' },
      { t: 'japonais.', r: 'objet', zh: '日语' }
    ]
  },
  {
    id: 23, cat: '语言', emoji: '🇪🇸',
    fr: 'Vous parlez espagnol.',
    zh: '您（你们）说西班牙语。',
    structure: '主语 + 谓语 + 宾语',
    note: 'vous 的变位固定是 -ez：vous parlez。vous 既是“你们”，也是对长辈、老师的敬称“您”。',
    words: [
      { t: 'Vous', r: 'sujet', zh: '您；你们' },
      { t: 'parlez', r: 'verbe', zh: '说（vous 的变位）' },
      { t: 'espagnol.', r: 'objet', zh: '西班牙语' }
    ]
  },
  {
    id: 24, cat: '语言', emoji: '🇷🇺',
    fr: 'Elles parlent russe.',
    zh: '她们说俄语。',
    structure: '主语 + 谓语 + 宾语',
    note: 'il / elle / ils / elles 的变位都不加词尾：parle / parlent，只差一个 -nt。russe（俄语）以 -sse 结尾，男女通用。',
    words: [
      { t: 'Elles', r: 'sujet', zh: '她们' },
      { t: 'parlent', r: 'verbe', zh: '说（复数变位）' },
      { t: 'russe.', r: 'objet', zh: '俄语' }
    ]
  },
  {
    id: 25, cat: '语言', emoji: '🌍',
    fr: 'Je parle chinois, anglais et français.',
    zh: '我说中文、英语和法语。',
    structure: '主语 + 谓语 + 宾语 × 3（et 连接）',
    note: '多项并列时，只有最后一项前面才加 et（和）。这句话一口气练三种语言，跟读挑战会很有成就感！',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'parle', r: 'verbe', zh: '说' },
      { t: 'chinois,', r: 'objet', zh: '中文' },
      { t: 'anglais', r: 'objet', zh: '英语' },
      { t: 'et', r: 'conjonction', zh: '和' },
      { t: 'français.', r: 'objet', zh: '法语' }
    ]
  },
  {
    id: 26, cat: '语言', emoji: '🤝',
    fr: 'Avec elle, je parle français et anglais.',
    zh: '我和她一起说法语和英语。',
    structure: '介词短语 + 主语 + 谓语 + 宾语 × 2',
    note: 'avec 表示“和……一起”，后面要跟重读人称代词：avec moi / avec toi / avec elle。',
    words: [
      { t: 'Avec', r: 'preposition', zh: '和……一起' },
      { t: 'elle,', r: 'complement', zh: '她（重读代词）' },
      { t: 'je', r: 'sujet', zh: '我' },
      { t: 'parle', r: 'verbe', zh: '说' },
      { t: 'français', r: 'objet', zh: '法语' },
      { t: 'et', r: 'conjonction', zh: '和' },
      { t: 'anglais.', r: 'objet', zh: '英语' }
    ]
  },
  {
    id: 27, cat: '语言', emoji: '🏫',
    fr: "Nous sommes dans la classe d'italien.",
    zh: '我们在意大利语课上。',
    structure: '主语 + 系动词 + dans + 定冠词 + 宾语 + de + 语言补语',
    note: "dans 表示“在……里面”。d'italien = de + italien 的省音，表示“意大利语的”。être 的 nous 变位是 sommes。",
    words: [
      { t: 'Nous', r: 'sujet', zh: '我们' },
      { t: 'sommes', r: 'verbe', zh: '是（nous 的变位）' },
      { t: 'dans', r: 'preposition', zh: '在……里' },
      { t: 'la', r: 'determinant', zh: '这门（定冠词）' },
      { t: 'classe', r: 'objet', zh: '课；班级' },
      { t: "d'italien.", r: 'complement', zh: '意大利语的（de 的省音）' }
    ]
  },

  /* ===== 代词：重读人称代词（教材 Pronoms toniques） ===== */
  {
    id: 28, cat: '代词', emoji: '🙋',
    fr: "Moi, c'est Antonio.",
    zh: '我是安东尼奥。',
    structure: "重读代词（强调主语）+ c'est + 专有名词",
    note: "Moi, c'est… 介绍自己时强调“是我”，比 Je m'appelle… 更随意、更热情。moi 是第一人称重读人称代词。",
    words: [
      { t: 'Moi,', r: 'sujet', zh: '我（重读代词）' },
      { t: "c'est", r: 'verbe', zh: '这是；他是（ce + est）' },
      { t: 'Antonio.', r: 'nom-propre', zh: '安东尼奥（人名）' }
    ]
  },
  {
    id: 29, cat: '代词', emoji: '🙂',
    fr: 'Il est américain, et toi ?',
    zh: '他是美国人，你呢？',
    structure: '主语 + 系动词 + 表语 + 连词 + 重读代词（省略问句）',
    note: 'et toi ?（你呢？）是无动词省略句，完整形式是 Et toi, tu es américain ? 重读代词 toi 在这里单独站成问句。',
    words: [
      { t: 'Il', r: 'sujet', zh: '他' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'américain,', r: 'attribut', zh: '美国人' },
      { t: 'et', r: 'conjonction', zh: '那么；和' },
      { t: 'toi ?', r: 'complement', zh: '你呢（重读代词）' }
    ]
  },
  {
    id: 30, cat: '代词', emoji: '🏡',
    fr: 'Elle est chez elle.',
    zh: '她在自己家里。',
    structure: '主语 + 系动词 + 介词 + 重读代词',
    note: 'chez 表示“在……家里”：chez moi（在我家）、chez toi（在你家）、chez elle（在她家）。',
    words: [
      { t: 'Elle', r: 'sujet', zh: '她' },
      { t: 'est', r: 'verbe', zh: '是；在' },
      { t: 'chez', r: 'preposition', zh: '在……家' },
      { t: 'elle.', r: 'complement', zh: '她（重读代词）' }
    ]
  },

  /* ===== 职业：c'est / il est 与阴阳性（教材冠词页 + 阴阳性页） ===== */
  {
    id: 31, cat: '职业', emoji: '🎬',
    fr: "C'est un acteur.",
    zh: '他是一位演员。',
    structure: "c'est + 不定冠词 + 表语（介绍身份）",
    note: "c'est = ce + est，用来介绍“这是……”。介绍职业时说 C'est un acteur.（他是演员。）",
    words: [
      { t: "C'est", r: 'verbe', zh: '这是' },
      { t: 'un', r: 'determinant', zh: '一位（阳性不定冠词）' },
      { t: 'acteur.', r: 'attribut', zh: '演员（男）' }
    ]
  },
  {
    id: 32, cat: '职业', emoji: '🎭',
    fr: 'Elle est actrice.',
    zh: '她是女演员。',
    structure: '主语 + 系动词 + 表语（零冠词）',
    note: "职业名词作表语时通常省略冠词：Elle est actrice.（她是演员。）对比：C'est une actrice.（这是一位女演员。）",
    words: [
      { t: 'Elle', r: 'sujet', zh: '她' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'actrice.', r: 'attribut', zh: '女演员' }
    ]
  },
  {
    id: 33, cat: '职业', emoji: '👥',
    fr: 'Ce sont des acteurs.',
    zh: '他们是演员。',
    structure: 'ce + sont + 不定冠词复数 + 表语',
    note: 'ce sont 是 c\'est 的复数，后面必须接复数：Ce sont des acteurs. 复数句子要“全家一起变”：动词加 -nt、冠词变 des、名词加 -s。',
    words: [
      { t: 'Ce', r: 'sujet', zh: '这' },
      { t: 'sont', r: 'verbe', zh: '是（复数）' },
      { t: 'des', r: 'determinant', zh: '一些（复数冠词）' },
      { t: 'acteurs.', r: 'attribut', zh: '演员（复数）' }
    ]
  },
  {
    id: 34, cat: '职业', emoji: '📰',
    fr: 'Je suis journaliste.',
    zh: '我是记者。',
    structure: '主语 + 系动词 + 表语（零冠词）',
    note: 'journaliste（记者）阴阳同形：un journaliste / une journaliste 都是它。作表语同样省略冠词。',
    words: [
      { t: 'Je', r: 'sujet', zh: '我' },
      { t: 'suis', r: 'verbe', zh: '是' },
      { t: 'journaliste.', r: 'attribut', zh: '记者' }
    ]
  },
  {
    id: 35, cat: '职业', emoji: '🗾',
    fr: 'Elle est japonaise.',
    zh: '她是日本人。',
    structure: '主语 + 系动词 + 表语（国籍）',
    note: '国籍的阴性一般在阳性后加 -e：japonais → japonaise。国家名 le Japon 首字母大写，语言 le japonais 小写。',
    words: [
      { t: 'Elle', r: 'sujet', zh: '她' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'japonaise.', r: 'attribut', zh: '日本人（女）' }
    ]
  },
  {
    id: 36, cat: '职业', emoji: '🎤',
    fr: 'Il est chanteur.',
    zh: '他是歌手。',
    structure: '主语 + 系动词 + 表语（职业）',
    note: 'chanteur / chanteuse（歌手）是最常用的阴阳性词对之一：阳性 -eur 变阴性 -euse。',
    words: [
      { t: 'Il', r: 'sujet', zh: '他' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'chanteur.', r: 'attribut', zh: '歌手（男）' }
    ]
  },
  {
    id: 37, cat: '职业', emoji: '🎵',
    fr: 'Elle est chanteuse.',
    zh: '她是女歌手。',
    structure: '主语 + 系动词 + 表语（职业）',
    note: '阳性变阴性：chanteur → chanteuse。类似的还有 acteur → actrice（不规则，要单独记）。',
    words: [
      { t: 'Elle', r: 'sujet', zh: '她' },
      { t: 'est', r: 'verbe', zh: '是' },
      { t: 'chanteuse.', r: 'attribut', zh: '女歌手' }
    ]
  },

  /* ===== 名词与冠词：单复数变换（教材 Mettez au pluriel） ===== */
  {
    id: 38, cat: '名词与冠词', emoji: '🚲',
    fr: "C'est un vélo.",
    zh: '这是一辆自行车。',
    structure: "c'est + 不定冠词 + 宾语",
    note: 'vélo 是 bicyclette（自行车）的口语简称，复数直接加 -s：des vélos。',
    words: [
      { t: "C'est", r: 'verbe', zh: '这是' },
      { t: 'un', r: 'determinant', zh: '一辆' },
      { t: 'vélo.', r: 'objet', zh: '自行车' }
    ]
  },
  {
    id: 39, cat: '名词与冠词', emoji: '🚴',
    fr: 'Ce sont des vélos.',
    zh: '这些是自行车。',
    structure: 'ce + sont + 不定冠词复数 + 宾语',
    note: '变复数要看懂三处联动：un → des、名词加 -s、c\'est → ce sont。',
    words: [
      { t: 'Ce', r: 'sujet', zh: '这些' },
      { t: 'sont', r: 'verbe', zh: '是（复数）' },
      { t: 'des', r: 'determinant', zh: '一些（复数冠词）' },
      { t: 'vélos.', r: 'objet', zh: '自行车（复数）' }
    ]
  },
  {
    id: 40, cat: '名词与冠词', emoji: '🎮',
    fr: "C'est un jeu.",
    zh: '这是一个游戏。',
    structure: "c'est + 不定冠词 + 宾语",
    note: 'jeu（游戏）的复数加 -x：des jeux。-eu 结尾的名词大多这样变。',
    words: [
      { t: "C'est", r: 'verbe', zh: '这是' },
      { t: 'un', r: 'determinant', zh: '一个' },
      { t: 'jeu.', r: 'objet', zh: '游戏' }
    ]
  },
  {
    id: 41, cat: '名词与冠词', emoji: '🕹️',
    fr: 'Ce sont des jeux.',
    zh: '这些是游戏。',
    structure: 'ce + sont + 不定冠词复数 + 宾语',
    note: '-eu 结尾变 -eux：jeu → jeux。例外是 bleu（蓝色）：des bleus。',
    words: [
      { t: 'Ce', r: 'sujet', zh: '这些' },
      { t: 'sont', r: 'verbe', zh: '是（复数）' },
      { t: 'des', r: 'determinant', zh: '一些（复数冠词）' },
      { t: 'jeux.', r: 'objet', zh: '游戏（复数）' }
    ]
  },
  {
    id: 42, cat: '名词与冠词', emoji: '🗞️',
    fr: 'Le journal est là.',
    zh: '报纸在那儿。',
    structure: '定冠词 + 主语 + 系动词 + 地点副词',
    note: 'journal（报纸）的复数把 -al 改成 -aux：des journaux。-al 结尾的名词都走这条路。',
    words: [
      { t: 'Le', r: 'determinant', zh: '那份（定冠词）' },
      { t: 'journal', r: 'sujet', zh: '报纸' },
      { t: 'est', r: 'verbe', zh: '是；在' },
      { t: 'là.', r: 'complement', zh: '那里' }
    ]
  },
  {
    id: 43, cat: '名词与冠词', emoji: '🗞️',
    fr: 'Les journaux sont là.',
    zh: '那些报纸在那儿。',
    structure: '定冠词复数 + 主语 + 系动词 + 地点副词',
    note: '变复数时全句联动：le journal est → les journaux sont。冠词、名词、动词都要一起改。',
    words: [
      { t: 'Les', r: 'determinant', zh: '那些（定冠词复数）' },
      { t: 'journaux', r: 'sujet', zh: '报纸（复数）' },
      { t: 'sont', r: 'verbe', zh: '是；在（复数）' },
      { t: 'là.', r: 'complement', zh: '那里' }
    ]
  },
  {
    id: 44, cat: '名词与冠词', emoji: '👫',
    fr: "L'ami de Pascal est à Paris.",
    zh: '帕斯卡尔的朋友在巴黎。',
    structure: '定冠词（省音）+ 主语 + de + 专有名词 + 系动词 + à + 地点',
    note: "ami 以元音开头，le 要省音成 l'。de 表示所属：l'ami de Pascal（帕斯卡尔的朋友）。",
    words: [
      { t: "L'ami", r: 'sujet', zh: '这位朋友（le 的省音）' },
      { t: 'de', r: 'preposition', zh: '……的' },
      { t: 'Pascal', r: 'nom-propre', zh: '帕斯卡尔（人名）' },
      { t: 'est', r: 'verbe', zh: '是；在' },
      { t: 'à', r: 'preposition', zh: '在' },
      { t: 'Paris.', r: 'nom-propre', zh: '巴黎（城市）' }
    ]
  },
  {
    id: 45, cat: '名词与冠词', emoji: '👬',
    fr: 'Les amis de Pascal sont à Paris.',
    zh: '帕斯卡尔的朋友们在巴黎。',
    structure: '定冠词复数 + 主语 + de + 专有名词 + 系动词 + à + 地点',
    note: "复数全句联动：l'ami → les amis、est → sont。主语从“一个朋友”变成“朋友们”。",
    words: [
      { t: 'Les', r: 'determinant', zh: '那些（定冠词复数）' },
      { t: 'amis', r: 'sujet', zh: '朋友们' },
      { t: 'de', r: 'preposition', zh: '……的' },
      { t: 'Pascal', r: 'nom-propre', zh: '帕斯卡尔（人名）' },
      { t: 'sont', r: 'verbe', zh: '是；在（复数）' },
      { t: 'à', r: 'preposition', zh: '在' },
      { t: 'Paris.', r: 'nom-propre', zh: '巴黎（城市）' }
    ]
  },
  {
    id: 46, cat: '名词与冠词', emoji: '📕',
    fr: 'C\'est le livre de Pascal.',
    zh: '这是帕斯卡尔的书。',
    structure: "c'est + 定冠词 + 宾语 + de + 专有名词",
    note: 'le + 名词 + de + 人名 表示“某人的某物”。对比：C\'est un livre.（这是一本书。）不定冠词介绍，定冠词特指。',
    words: [
      { t: "C'est", r: 'verbe', zh: '这是' },
      { t: 'le', r: 'determinant', zh: '那本（定冠词）' },
      { t: 'livre', r: 'objet', zh: '书' },
      { t: 'de', r: 'preposition', zh: '……的' },
      { t: 'Pascal.', r: 'nom-propre', zh: '帕斯卡尔（人名）' }
    ]
  },

  /* ===== 人称变换：tu → vous（礼貌体） ===== */
  {
    id: 47, cat: '人称变换', emoji: '🫵',
    fr: 'Tu es chinois ?',
    zh: '你是中国人吗？',
    structure: '主语 + 系动词 + 表语（口语疑问句）',
    note: '口语疑问句只升语调、不用倒装：Tu es chinois ? 对平辈、朋友和孩子用 tu。',
    words: [
      { t: 'Tu', r: 'sujet', zh: '你' },
      { t: 'es', r: 'verbe', zh: '是（tu 的变位）' },
      { t: 'chinois ?', r: 'attribut', zh: '中国人吗' }
    ]
  },
  {
    id: 48, cat: '人称变换', emoji: '🎩',
    fr: 'Vous êtes chinois ?',
    zh: '您是中国人吗？',
    structure: '主语 + 系动词 + 表语（礼貌体疑问句）',
    note: 'vous 是礼貌体，也是“你们”。把 Tu es… 换成 Vous êtes…，语气立刻从 casual 变成有礼貌。',
    words: [
      { t: 'Vous', r: 'sujet', zh: '您；你们' },
      { t: 'êtes', r: 'verbe', zh: '是（vous 的变位）' },
      { t: 'chinois ?', r: 'attribut', zh: '中国人吗' }
    ]
  }
];
