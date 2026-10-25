/* =========================================================
   Bonjour ! 法语启蒙小屋 — A1 句子数据（56 句）
   - fr: 完整法语句子
   - words: 单词拆分（t=含标点的词形, r=句子成分角色, zh=词义）
   - structure: 一句话结构总览
   - note: 语法小贴士
   拼接规则（joinWords）：前一个词以 ' 结尾，或后一个词以 - 开头时，
   直接相连不加空格 —— 这样拼接结果与 fr 完全一致。
   素材来源：《你好，法语！1》（Le Nouveau Taxi 1 · 学生用书）各单元核心句型
   —— 问候、自我介绍、国籍职业、年龄日期、时间作息、方位、购物、
   描述外貌、过去记述、约定邀请、天气否定、存在、感叹与日常口语。
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
    id: 1,
    cat: '寒暄',
    emoji: '👋',
    fr: 'Bonjour, ça va ?',
    zh: '你好，好吗？',
    structure: '问候语 + 主语 + 谓语（一般疑问句）',
    note: 'ça va ? 是法语里使用频率最高的寒暄，直译是“这进行得怎么样？”。回答可以说 Ça va bien !（我很好！）。',
    words: [
      {
        t: 'Bonjour,',
        r: 'salutation',
        zh: '你好（白天问候）'
      },
      {
        t: 'ça',
        r: 'sujet',
        zh: '这；情况'
      },
      {
        t: 'va ?',
        r: 'verbe',
        zh: '进行；去'
      }
    ]
  },
  {
    id: 2,
    cat: '寒暄',
    emoji: '😊',
    fr: 'Je vais bien, merci.',
    zh: '我很好，谢谢。',
    structure: '主语 + 谓语 + 程度补语 + 礼貌用语',
    note: 'aller（走）是不规则动词，je vais 是它最常用的变位；bien 是副词，表示“好”。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'vais',
        r: 'verbe',
        zh: '去；处于……状态'
      },
      {
        t: 'bien,',
        r: 'complement',
        zh: '好'
      },
      {
        t: 'merci.',
        r: 'politesse',
        zh: '谢谢'
      }
    ]
  },
  {
    id: 3,
    cat: '寒暄',
    emoji: '🎩',
    fr: 'Comment allez-vous ?',
    zh: '您好吗？',
    structure: '疑问词 + 谓语 + 主语（主谓倒装 · 礼貌体）',
    note: 'allez-vous 把动词放到主语前面，这叫“主谓倒装”，是礼貌的说法。朋友之间可以说 Comment tu vas ?（不用倒装）。',
    words: [
      {
        t: 'Comment',
        r: 'interrogation',
        zh: '怎样；如何'
      },
      {
        t: 'allez',
        r: 'verbe',
        zh: '去；走（vous 的变位）'
      },
      {
        t: '-vous ?',
        r: 'sujet',
        zh: '您；你们'
      }
    ]
  },
  {
    id: 4,
    cat: '寒暄',
    emoji: '🚪',
    fr: 'Au revoir !',
    zh: '再见！',
    structure: '介词 + 动词不定式（固定告别语）',
    note: 'au revoir 直译是“到再次相见（的时候）”，正式场合和口语都能用。au = à + le 的合写。',
    words: [
      {
        t: 'Au',
        r: 'preposition',
        zh: '到……去（à + le）'
      },
      {
        t: 'revoir !',
        r: 'verbe',
        zh: '再次见到'
      }
    ]
  },
  {
    id: 5,
    cat: '自我介绍',
    emoji: '🙋',
    fr: 'Je m\'appelle Marie.',
    zh: '我叫玛丽。',
    structure: '主语 + 代词式谓语 + 专有名词',
    note: 's\'appeler 是“代词式动词”，me 在以元音开头的词前要写成 m\'，所以是 Je m\'appelle（不是 Je appelle）。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'm\'appelle',
        r: 'verbe',
        zh: '名叫（s\'appeler）'
      },
      {
        t: 'Marie.',
        r: 'nom-propre',
        zh: '玛丽（人名）'
      }
    ]
  },
  {
    id: 6,
    cat: '自我介绍',
    emoji: '🎓',
    fr: 'Je suis étudiant.',
    zh: '我是学生。',
    structure: '主语 + 系动词 + 表语',
    note: 'être（是）的变位：je suis。女生要把 étudiant 改成 étudiante（阴性加 -e）。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'suis',
        r: 'verbe',
        zh: '是（être）'
      },
      {
        t: 'étudiant.',
        r: 'attribut',
        zh: '学生（男）'
      }
    ]
  },
  {
    id: 7,
    cat: '自我介绍',
    emoji: '❓',
    fr: 'Tu t\'appelles comment ?',
    zh: '你叫什么名字？',
    structure: '主语 + 谓语 + 疑问词（口语不倒装）',
    note: '口语里 comment 直接放在句尾就可以，这是朋友之间最自然的问法。',
    words: [
      {
        t: 'Tu',
        r: 'sujet',
        zh: '你'
      },
      {
        t: 't\'appelles',
        r: 'verbe',
        zh: '名叫（s\'appeler）'
      },
      {
        t: 'comment ?',
        r: 'interrogation',
        zh: '怎样；什么'
      }
    ]
  },
  {
    id: 8,
    cat: '自我介绍',
    emoji: '🎂',
    fr: 'J\'ai vingt ans.',
    zh: '我二十岁。',
    structure: '主语 + 谓语 + 数词 + 数量补语',
    note: '问年龄说 Quel âge as-tu ?（你几岁？）。J\'ai = je ai，je 在元音前省音写成 J\'。',
    words: [
      {
        t: 'J\'',
        r: 'sujet',
        zh: '我（je 的省音）'
      },
      {
        t: 'ai',
        r: 'verbe',
        zh: '有（avoir）'
      },
      {
        t: 'vingt',
        r: 'numeral',
        zh: '二十'
      },
      {
        t: 'ans.',
        r: 'complement',
        zh: '岁；年'
      }
    ]
  },
  {
    id: 9,
    cat: '家庭',
    emoji: '👨‍👩‍👧',
    fr: 'Voici ma famille.',
    zh: '这是我的家人。',
    structure: '提示词 + 限定词 + 宾语',
    note: 'famille 是阴性名词，所以用 ma famille；阳性会用 mon，比如 mon frère（我的兄弟）。',
    words: [
      {
        t: 'Voici',
        r: 'presentation',
        zh: '这是；请看'
      },
      {
        t: 'ma',
        r: 'determinant',
        zh: '我的（阴性）'
      },
      {
        t: 'famille.',
        r: 'objet',
        zh: '家人；家庭'
      }
    ]
  },
  {
    id: 10,
    cat: '家庭',
    emoji: '👨‍⚕️',
    fr: 'Mon père est médecin.',
    zh: '我爸爸是医生。',
    structure: '限定词 + 主语 + 系动词 + 表语',
    note: 'médecin 男女同形：mon père est médecin 和 ma mère est médecin 都能说。',
    words: [
      {
        t: 'Mon',
        r: 'determinant',
        zh: '我的（阳性）'
      },
      {
        t: 'père',
        r: 'sujet',
        zh: '父亲'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是（il/elle 的变位）'
      },
      {
        t: 'médecin.',
        r: 'attribut',
        zh: '医生'
      }
    ]
  },
  {
    id: 11,
    cat: '家庭',
    emoji: '🐱',
    fr: 'J\'ai un chat.',
    zh: '我有一只猫。',
    structure: '主语 + 谓语 + 不定冠词 + 宾语',
    note: 'un 用在阳性单数可数名词前；如果想特指“那只猫”，要用定冠词 le chat。',
    words: [
      {
        t: 'J\'',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'ai',
        r: 'verbe',
        zh: '有'
      },
      {
        t: 'un',
        r: 'determinant',
        zh: '一只；一个'
      },
      {
        t: 'chat.',
        r: 'objet',
        zh: '猫'
      }
    ]
  },
  {
    id: 12,
    cat: '日常生活',
    emoji: '🏠',
    fr: 'J\'habite à Paris.',
    zh: '我住在巴黎。',
    structure: '主语 + 谓语 + 介词 + 地点',
    note: '城市前用 à（à Paris 在巴黎），国家前常说 en（en Chine）或 au（au Japon）。',
    words: [
      {
        t: 'J\'',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'habite',
        r: 'verbe',
        zh: '居住'
      },
      {
        t: 'à',
        r: 'preposition',
        zh: '在；到'
      },
      {
        t: 'Paris.',
        r: 'nom-propre',
        zh: '巴黎（城市）'
      }
    ]
  },
  {
    id: 14,
    cat: '日常生活',
    emoji: '🕗',
    fr: 'Il est huit heures.',
    zh: '现在八点钟。',
    structure: '形式主语 + 谓语 + 数词 + 时间补语',
    note: '报时用 Il est + 时间：Il est huit heures（八点了）。heures 永远是复数。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '他；它（表时间）'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'huit',
        r: 'numeral',
        zh: '八'
      },
      {
        t: 'heures.',
        r: 'complement',
        zh: '点钟；小时'
      }
    ]
  },
  {
    id: 15,
    cat: '喜好',
    emoji: '☕',
    fr: 'J\'aime le café.',
    zh: '我喜欢咖啡。',
    structure: '主语 + 谓语 + 定冠词 + 宾语',
    note: 'aimer 表示“喜欢”；定冠词 le 让 café 泛指“（这种）咖啡”这类事物。',
    words: [
      {
        t: 'J\'',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'aime',
        r: 'verbe',
        zh: '喜欢'
      },
      {
        t: 'le',
        r: 'determinant',
        zh: '这；那个（定冠词）'
      },
      {
        t: 'café.',
        r: 'objet',
        zh: '咖啡'
      }
    ]
  },
  {
    id: 16,
    cat: '喜好',
    emoji: '😻',
    fr: 'Le chat est mignon.',
    zh: '这只猫很可爱。',
    structure: '限定词 + 主语 + 系动词 + 形容词表语',
    note: '很多法语形容词放在名词后面：un chat mignon。mignon 的阴性形式是 mignonne。',
    words: [
      {
        t: 'Le',
        r: 'determinant',
        zh: '这；那只（定冠词）'
      },
      {
        t: 'chat',
        r: 'sujet',
        zh: '猫'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'mignon.',
        r: 'adjectif',
        zh: '可爱的'
      }
    ]
  },
  {
    id: 17,
    cat: '喜好',
    emoji: '🥤',
    fr: 'Je voudrais un café.',
    zh: '我想要一杯咖啡。',
    structure: '主语 + 谓语 + 冠词 + 宾语',
    note: 'voudrais 是 vouloir 的条件式，比 je veux（我想要）礼貌得多，点餐时说 Je voudrais… 就对了。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'voudrais',
        r: 'verbe',
        zh: '想要（vouloir 条件式）'
      },
      {
        t: 'un',
        r: 'determinant',
        zh: '一杯；一个'
      },
      {
        t: 'café.',
        r: 'objet',
        zh: '咖啡'
      }
    ]
  },
  {
    id: 18,
    cat: '餐厅',
    emoji: '🧾',
    fr: 'L\'addition, s\'il vous plaît !',
    zh: '买单，谢谢！',
    structure: '宾语 + 礼貌用语（省略句）',
    note: '完整句是 Je voudrais l\'addition, s\'il vous plaît。s\'il = si + il 的省音，直译“如果这使您愉快”。',
    words: [
      {
        t: 'L\'addition,',
        r: 'objet',
        zh: '账单（le 的省音）'
      },
      {
        t: 's\'il vous plaît !',
        r: 'politesse',
        zh: '请（礼貌用语）'
      }
    ]
  },
  {
    id: 13,
    cat: '语言',
    emoji: '🗣️',
    fr: 'Je parle français.',
    zh: '我说法语。',
    structure: '主语 + 谓语 + 宾语',
    note: 'parler 后面直接跟语言，中间不加介词：parler français / anglais / chinois。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'parle',
        r: 'verbe',
        zh: '说（某种语言）'
      },
      {
        t: 'français.',
        r: 'objet',
        zh: '法语'
      }
    ]
  },
  {
    id: 25,
    cat: '语言',
    emoji: '🌍',
    fr: 'Je parle chinois, anglais et français.',
    zh: '我说中文、英语和法语。',
    structure: '主语 + 谓语 + 宾语 × 3（et 连接）',
    note: '多项并列时，只有最后一项前面才加 et（和）。这句话一口气练三种语言，跟读挑战会很有成就感！',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'parle',
        r: 'verbe',
        zh: '说'
      },
      {
        t: 'chinois,',
        r: 'objet',
        zh: '中文'
      },
      {
        t: 'anglais',
        r: 'objet',
        zh: '英语'
      },
      {
        t: 'et',
        r: 'conjonction',
        zh: '和'
      },
      {
        t: 'français.',
        r: 'objet',
        zh: '法语'
      }
    ]
  },
  {
    id: 28,
    cat: '代词',
    emoji: '🙋',
    fr: 'Moi, c\'est Antonio.',
    zh: '我是安东尼奥。',
    structure: '重读代词（强调主语）+ c\'est + 专有名词',
    note: 'Moi, c\'est… 介绍自己时强调“是我”，比 Je m\'appelle… 更随意、更热情。moi 是第一人称重读人称代词。',
    words: [
      {
        t: 'Moi,',
        r: 'sujet',
        zh: '我（重读代词）'
      },
      {
        t: 'c\'est',
        r: 'verbe',
        zh: '这是；他是（ce + est）'
      },
      {
        t: 'Antonio.',
        r: 'nom-propre',
        zh: '安东尼奥（人名）'
      }
    ]
  },
  {
    id: 29,
    cat: '代词',
    emoji: '🙂',
    fr: 'Il est américain, et toi ?',
    zh: '他是美国人，你呢？',
    structure: '主语 + 系动词 + 表语 + 连词 + 重读代词（省略问句）',
    note: 'et toi ?（你呢？）是无动词省略句，完整形式是 Et toi, tu es américain ? 重读代词 toi 在这里单独站成问句。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '他'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'américain,',
        r: 'attribut',
        zh: '美国人'
      },
      {
        t: 'et',
        r: 'conjonction',
        zh: '那么；和'
      },
      {
        t: 'toi ?',
        r: 'complement',
        zh: '你呢（重读代词）'
      }
    ]
  },
  {
    id: 30,
    cat: '代词',
    emoji: '🏡',
    fr: 'Elle est chez elle.',
    zh: '她在自己家里。',
    structure: '主语 + 系动词 + 介词 + 重读代词',
    note: 'chez 表示“在……家里”：chez moi（在我家）、chez toi（在你家）、chez elle（在她家）。',
    words: [
      {
        t: 'Elle',
        r: 'sujet',
        zh: '她'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是；在'
      },
      {
        t: 'chez',
        r: 'preposition',
        zh: '在……家'
      },
      {
        t: 'elle.',
        r: 'complement',
        zh: '她（重读代词）'
      }
    ]
  },
  {
    id: 31,
    cat: '职业',
    emoji: '🎬',
    fr: 'C\'est un acteur.',
    zh: '他是一位演员。',
    structure: 'c\'est + 不定冠词 + 表语（介绍身份）',
    note: 'c\'est = ce + est，用来介绍“这是……”。介绍职业时说 C\'est un acteur.（他是演员。）',
    words: [
      {
        t: 'C\'est',
        r: 'verbe',
        zh: '这是'
      },
      {
        t: 'un',
        r: 'determinant',
        zh: '一位（阳性不定冠词）'
      },
      {
        t: 'acteur.',
        r: 'attribut',
        zh: '演员（男）'
      }
    ]
  },
  {
    id: 34,
    cat: '职业',
    emoji: '📰',
    fr: 'Je suis journaliste.',
    zh: '我是记者。',
    structure: '主语 + 系动词 + 表语（零冠词）',
    note: 'journaliste（记者）阴阳同形：un journaliste / une journaliste 都是它。作表语同样省略冠词。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'suis',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'journaliste.',
        r: 'attribut',
        zh: '记者'
      }
    ]
  },
  {
    id: 42,
    cat: '名词与冠词',
    emoji: '🗞️',
    fr: 'Le journal est là.',
    zh: '报纸在那儿。',
    structure: '定冠词 + 主语 + 系动词 + 地点副词',
    note: 'journal（报纸）的复数把 -al 改成 -aux：des journaux。-al 结尾的名词都走这条路。',
    words: [
      {
        t: 'Le',
        r: 'determinant',
        zh: '那份（定冠词）'
      },
      {
        t: 'journal',
        r: 'sujet',
        zh: '报纸'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是；在'
      },
      {
        t: 'là.',
        r: 'complement',
        zh: '那里'
      }
    ]
  },
  {
    id: 46,
    cat: '名词与冠词',
    emoji: '📕',
    fr: 'C\'est le livre de Pascal.',
    zh: '这是帕斯卡尔的书。',
    structure: 'c\'est + 定冠词 + 宾语 + de + 专有名词',
    note: 'le + 名词 + de + 人名 表示“某人的某物”。对比：C\'est un livre.（这是一本书。）不定冠词介绍，定冠词特指。',
    words: [
      {
        t: 'C\'est',
        r: 'verbe',
        zh: '这是'
      },
      {
        t: 'le',
        r: 'determinant',
        zh: '那本（定冠词）'
      },
      {
        t: 'livre',
        r: 'objet',
        zh: '书'
      },
      {
        t: 'de',
        r: 'preposition',
        zh: '……的'
      },
      {
        t: 'Pascal.',
        r: 'nom-propre',
        zh: '帕斯卡尔（人名）'
      }
    ]
  },
  {
    id: 49,
    cat: '结识他人',
    emoji: '🌍',
    fr: 'Tu viens d\'où ?',
    zh: '你来自哪里？',
    structure: '主语 + 谓语 + 介词 de + 疑问代词 où（口语不倒装）',
    note: 'venir de + 地点 = 来自某地；回答用 Je viens de Chine.（我来自中国）。',
    words: [
      {
        t: 'Tu',
        r: 'sujet',
        zh: '你'
      },
      {
        t: 'viens',
        r: 'verbe',
        zh: '来（venir 的 tu 变位）'
      },
      {
        t: 'd\'où ?',
        r: 'interrogation',
        zh: '从哪里（de + où）'
      }
    ]
  },
  {
    id: 50,
    cat: '结识他人',
    emoji: '🧭',
    fr: 'Je viens de Chine.',
    zh: '我来自中国。',
    structure: '主语 + 谓语 + 介词 de + 地点',
    note: '城市用 de（je viens de Paris），阴性国家用 de la，阳性国家用 du：je viens du Japon。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'viens',
        r: 'verbe',
        zh: '来（venir）'
      },
      {
        t: 'de',
        r: 'preposition',
        zh: '从；来自'
      },
      {
        t: 'Chine.',
        r: 'nom-propre',
        zh: '中国（阴性国名）'
      }
    ]
  },
  {
    id: 51,
    cat: '结识他人',
    emoji: '✍️',
    fr: 'Comment ça s\'écrit ?',
    zh: '这个怎么拼写？',
    structure: '疑问词 + 主语 + 代词式动词（第三人称单数）',
    note: 's\'écrire 是「被书写」。问姓名拼写最自然的一句：— Marie. — Comment ça s\'écrit ? — M-A-R-I-E.',
    words: [
      {
        t: 'Comment',
        r: 'interrogation',
        zh: '怎样'
      },
      {
        t: 'ça',
        r: 'sujet',
        zh: '这；这个（cela 的口语）'
      },
      {
        t: 's\'écrit ?',
        r: 'verbe',
        zh: '被写；拼作（s\'écrire）'
      }
    ]
  },
  {
    id: 52,
    cat: '个人信息',
    emoji: '🎂',
    fr: 'Quel âge as-tu ?',
    zh: '你多大了？',
    structure: '疑问形容词 + 主语 + 谓语 + 倒装主语代词',
    note: 'quel 疑问形容词要与名词阴阳性配合：Quel âge ?（阳性）/ Quelle heure ?（阴性）。as-tu 是主谓倒装。',
    words: [
      {
        t: 'Quel',
        r: 'interrogation',
        zh: '什么；哪（阳性疑问形容词）'
      },
      {
        t: 'âge',
        r: 'complement',
        zh: '年龄'
      },
      {
        t: 'as-tu ?',
        r: 'verbe',
        zh: '你有吗（avoir + tu 倒装）'
      }
    ]
  },
  {
    id: 53,
    cat: '日常生活',
    emoji: '🕗',
    fr: 'Il est quelle heure ?',
    zh: '现在几点了？',
    structure: '形式主语 + 系动词 + 阴性疑问形容词 + 主语（口语语序）',
    note: '口语说 Il est quelle heure ?，正式一点是 Quelle heure est-il ? 两种都要会。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '它（表时间的形式主语）'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'quelle',
        r: 'interrogation',
        zh: '哪一（阴性疑问形容词）'
      },
      {
        t: 'heure ?',
        r: 'complement',
        zh: '时刻；点钟'
      }
    ]
  },
  {
    id: 54,
    cat: '方位',
    emoji: '👜',
    fr: 'Où est le sac ?',
    zh: '包在哪里？',
    structure: '疑问副词 + 系动词 + 定冠词 + 主语',
    note: 'où 问地点；复数变 Où sont les sacs ? 定冠词 le/les 别漏。',
    words: [
      {
        t: 'Où',
        r: 'interrogation',
        zh: '在哪里'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是；在'
      },
      {
        t: 'le',
        r: 'determinant',
        zh: '那个（定冠词）'
      },
      {
        t: 'sac ?',
        r: 'sujet',
        zh: '包；袋子'
      }
    ]
  },
  {
    id: 55,
    cat: '方位',
    emoji: '📖',
    fr: 'Le livre est sur la table.',
    zh: '书在桌子上。',
    structure: '定冠词 + 主语 + 系动词 + 介词 + 定冠词 + 地点补语',
    note: '方位介词家族：sur 在……上、sous 在……下、dans 在……里、devant 在……前、derrière 在……后。',
    words: [
      {
        t: 'Le',
        r: 'determinant',
        zh: '那本（定冠词）'
      },
      {
        t: 'livre',
        r: 'sujet',
        zh: '书'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是；在'
      },
      {
        t: 'sur',
        r: 'preposition',
        zh: '在……上面'
      },
      {
        t: 'la',
        r: 'determinant',
        zh: '这张（定冠词）'
      },
      {
        t: 'table.',
        r: 'complement',
        zh: '桌子'
      }
    ]
  },
  {
    id: 56,
    cat: '购物',
    emoji: '💶',
    fr: 'C\'est combien ?',
    zh: '这个多少钱？',
    structure: '指示代词 + 系动词 + 疑问副词（省略句）',
    note: '问价格万能句。正式一点：Ça coûte combien ? 日常 C\'est combien ? 最顺口。',
    words: [
      {
        t: 'C\'est',
        r: 'verbe',
        zh: '这是'
      },
      {
        t: 'combien ?',
        r: 'interrogation',
        zh: '多少（数量/价格）'
      }
    ]
  },
  {
    id: 57,
    cat: '购物',
    emoji: '🧾',
    fr: 'C\'est quinze euros.',
    zh: '十五欧元。',
    structure: '指示代词 + 系动词 + 数词 + 货币单位',
    note: '报价句型 C\'est + 价格。quinze = 15；欧元 euro 复数加 s。',
    words: [
      {
        t: 'C\'est',
        r: 'verbe',
        zh: '这是（售价）'
      },
      {
        t: 'quinze',
        r: 'numeral',
        zh: '十五'
      },
      {
        t: 'euros.',
        r: 'complement',
        zh: '欧元（复数）'
      }
    ]
  },
  {
    id: 58,
    cat: '购物',
    emoji: '🥖',
    fr: 'Je voudrais du pain et de l\'eau.',
    zh: '我想要面包和水。',
    structure: '主语 + 谓语（条件式）+ 部分冠词 + 宾语 + 连词 + 部分冠词 + 宾语',
    note: '部分冠词 du/de la/de l\'/des 表示「一些」不确定的量：du pain 一些面包，de l\'eau 一些水。voudrais 比 vouloir 礼貌得多。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'voudrais',
        r: 'verbe',
        zh: '想要（vouloir 条件式，礼貌）'
      },
      {
        t: 'du',
        r: 'determinant',
        zh: '一些（de + le，阳性部分冠词）'
      },
      {
        t: 'pain',
        r: 'objet',
        zh: '面包'
      },
      {
        t: 'et',
        r: 'conjonction',
        zh: '和'
      },
      {
        t: 'de',
        r: 'determinant',
        zh: '一些（阴性部分冠词 de + la）'
      },
      {
        t: 'l\'eau.',
        r: 'objet',
        zh: '水（le 的省音）'
      }
    ]
  },
  {
    id: 59,
    cat: '职业',
    emoji: '💼',
    fr: 'Qu\'est-ce que tu fais dans la vie ?',
    zh: '你做什么工作？',
    structure: '疑问短语 + 主语 + 谓语 + 介词短语',
    note: '问职业最地道的问法！faire dans la vie = 以……为业。回答：Je suis étudiant. / Je travaille dans le marketing.',
    words: [
      {
        t: 'Qu\'est-ce',
        r: 'interrogation',
        zh: '什么（que + est-ce 的缩合）'
      },
      {
        t: 'que',
        r: 'interrogation',
        zh: '什么（疑问代词）'
      },
      {
        t: 'tu',
        r: 'sujet',
        zh: '你'
      },
      {
        t: 'fais',
        r: 'verbe',
        zh: '做（faire 的 tu 变位）'
      },
      {
        t: 'dans',
        r: 'preposition',
        zh: '在……方面'
      },
      {
        t: 'la',
        r: 'determinant',
        zh: '（定冠词）'
      },
      {
        t: 'vie ?',
        r: 'complement',
        zh: '生活；人生'
      }
    ]
  },
  {
    id: 60,
    cat: '过去的事',
    emoji: '🎉',
    fr: 'Tu as fait quoi ce week-end ?',
    zh: '你周末做了什么？',
    structure: '主语 + 助动词 + 过去分词 + 疑问代词 + 指示形容词 + 时间主语',
    note: '口语过去时：avoir/être + 过去分词。faire 的过去分词是 fait（不变）。ce week-end = 这个周末。',
    words: [
      {
        t: 'Tu',
        r: 'sujet',
        zh: '你'
      },
      {
        t: 'as',
        r: 'verbe',
        zh: '有（助动词 avoir）'
      },
      {
        t: 'fait',
        r: 'verbe',
        zh: '做（faire 的过去分词）'
      },
      {
        t: 'quoi',
        r: 'interrogation',
        zh: '什么'
      },
      {
        t: 'ce',
        r: 'determinant',
        zh: '这个（指示形容词）'
      },
      {
        t: 'week-end ?',
        r: 'sujet',
        zh: '周末'
      }
    ]
  },
  {
    id: 61,
    cat: '过去的事',
    emoji: '🎬',
    fr: 'Je suis allé au cinéma hier.',
    zh: '我昨天去电影院了。',
    structure: '主语 + 助动词 + 过去分词 + 缩合冠词 + 地点 + 时间副词',
    note: 'aller 用 être 作助动词：je suis allé（男）/ allée（女）。au cinéma = à + le cinéma，缩合成 au。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'suis',
        r: 'verbe',
        zh: '是（助动词 être）'
      },
      {
        t: 'allé',
        r: 'verbe',
        zh: '去了（aller 的过去分词）'
      },
      {
        t: 'au',
        r: 'preposition',
        zh: '到（à + le 缩合）'
      },
      {
        t: 'cinéma',
        r: 'complement',
        zh: '电影院'
      },
      {
        t: 'hier.',
        r: 'complement',
        zh: '昨天'
      }
    ]
  },
  {
    id: 62,
    cat: '过去的事',
    emoji: '🖼️',
    fr: 'Elle a visité le Louvre.',
    zh: '她参观了卢浮宫。',
    structure: '主语 + 助动词 + 过去分词 + 定冠词 + 宾语',
    note: '第一组动词的过去分词 = 词干 + é：visiter → visité。avisiter le Louvre 是《你好，法语！》里的经典句子。',
    words: [
      {
        t: 'Elle',
        r: 'sujet',
        zh: '她'
      },
      {
        t: 'a',
        r: 'verbe',
        zh: '有（助动词 avoir）'
      },
      {
        t: 'visité',
        r: 'verbe',
        zh: '参观了（visiter 的过去分词）'
      },
      {
        t: 'le',
        r: 'determinant',
        zh: '（定冠词）'
      },
      {
        t: 'Louvre.',
        r: 'nom-propre',
        zh: '卢浮宫'
      }
    ]
  },
  {
    id: 63,
    cat: '外貌衣着',
    emoji: '👩',
    fr: 'Elle a les cheveux longs et blonds.',
    zh: '她有一头金色长发。',
    structure: '主语 + 谓语 + 定冠词复数宾语 + 形容词 × 2（后置）',
    note: '描述外貌用 avoir：Elle a les cheveux longs（她头发长）。法语形容词多数放在名词后面，还要阴阳性配合：blonds 是阳性复数。',
    words: [
      {
        t: 'Elle',
        r: 'sujet',
        zh: '她'
      },
      {
        t: 'a',
        r: 'verbe',
        zh: '有'
      },
      {
        t: 'les',
        r: 'determinant',
        zh: '（定冠词复数）'
      },
      {
        t: 'cheveux',
        r: 'objet',
        zh: '头发（复数）'
      },
      {
        t: 'longs',
        r: 'adjectif',
        zh: '长的（阳性复数，后置）'
      },
      {
        t: 'et',
        r: 'conjonction',
        zh: '并且'
      },
      {
        t: 'blonds.',
        r: 'adjectif',
        zh: '金色的（阳性复数，后置）'
      }
    ]
  },
  {
    id: 64,
    cat: '外貌衣着',
    emoji: '🧥',
    fr: 'Il porte un pull bleu.',
    zh: '他穿着一件蓝色毛衣。',
    structure: '主语 + 谓语 + 不定冠词 + 宾语 + 形容词（后置）',
    note: 'porter = 穿着/戴着。颜色形容词后置：un pull bleu（阴性则说 une jupe bleue）。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '他'
      },
      {
        t: 'porte',
        r: 'verbe',
        zh: '穿着；戴着（porter）'
      },
      {
        t: 'un',
        r: 'determinant',
        zh: '一件（阳性不定冠词）'
      },
      {
        t: 'pull',
        r: 'objet',
        zh: '毛衣'
      },
      {
        t: 'bleu.',
        r: 'adjectif',
        zh: '蓝色的（后置）'
      }
    ]
  },
  {
    id: 65,
    cat: '日常生活',
    emoji: '⏰',
    fr: 'Je me lève à sept heures.',
    zh: '我七点钟起床。',
    structure: '主语 + 自反代词 + 谓语 + 介词 + 时间补语',
    note: 'se lever 是代词式动词：je me lève, tu te lèves, il se lève… 主语代词和自反代词要配对出现。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'me',
        r: 'complement',
        zh: '我自己（自反代词）'
      },
      {
        t: 'lève',
        r: 'verbe',
        zh: '举起；起身（se lever）'
      },
      {
        t: 'à',
        r: 'preposition',
        zh: '在（时刻）'
      },
      {
        t: 'sept',
        r: 'numeral',
        zh: '七'
      },
      {
        t: 'heures.',
        r: 'complement',
        zh: '点钟'
      }
    ]
  },
  {
    id: 66,
    cat: '日常生活',
    emoji: '🚇',
    fr: 'Je prends le métro pour aller au bureau.',
    zh: '我坐地铁去办公室。',
    structure: '主语 + 谓语 + 宾语 + 目的连词 + 动词不定式 + 缩合冠词 + 地点',
    note: 'prendre le métro 坐地铁（交通工具用 prendre 不加 in）；pour + 原形表目的；aller au bureau 去办公室。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'prends',
        r: 'verbe',
        zh: '拿；乘坐（prendre）'
      },
      {
        t: 'le',
        r: 'determinant',
        zh: '（定冠词）'
      },
      {
        t: 'métro',
        r: 'objet',
        zh: '地铁'
      },
      {
        t: 'pour',
        r: 'preposition',
        zh: '为了；以便'
      },
      {
        t: 'aller',
        r: 'verbe',
        zh: '去（动词不定式）'
      },
      {
        t: 'au',
        r: 'preposition',
        zh: '到（à + le）'
      },
      {
        t: 'bureau.',
        r: 'complement',
        zh: '办公室'
      }
    ]
  },
  {
    id: 67,
    cat: '约定',
    emoji: '🤝',
    fr: 'On se voit à huit heures ?',
    zh: '我们八点见好吗？',
    structure: '主语 + 自反代词 + 谓语 + 介词 + 时间（建议句型）',
    note: 'on 口语里常当「我们」用；se voir 见面；上升语调就是提议：On se voit à huit heures ?',
    words: [
      {
        t: 'On',
        r: 'sujet',
        zh: '人们；我们（口语）'
      },
      {
        t: 'se',
        r: 'complement',
        zh: '互相（自反代词）'
      },
      {
        t: 'voit',
        r: 'verbe',
        zh: '看见；见面（se voir）'
      },
      {
        t: 'à',
        r: 'preposition',
        zh: '在（时刻）'
      },
      {
        t: 'huit',
        r: 'numeral',
        zh: '八'
      },
      {
        t: 'heures ?',
        r: 'complement',
        zh: '点钟'
      }
    ]
  },
  {
    id: 68,
    cat: '天气',
    emoji: '☀️',
    fr: 'Il fait beau aujourd\'hui.',
    zh: '今天天气很好。',
    structure: '形式主语 + 谓语 + 形容词 + 时间副词',
    note: '问天气：Quel temps fait-il ? 回答：Il fait beau 晴天 / Il fait chaud 热 / Il pleut 下雨。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '它（表天气的形式主语）'
      },
      {
        t: 'fait',
        r: 'verbe',
        zh: '做；处于（faire）'
      },
      {
        t: 'beau',
        r: 'adjectif',
        zh: '好的；晴朗的'
      },
      {
        t: 'aujourd\'hui.',
        r: 'complement',
        zh: '今天'
      }
    ]
  },
  {
    id: 69,
    cat: '否定',
    emoji: '🚗',
    fr: 'Je n\'ai pas de voiture.',
    zh: '我没有汽车。',
    structure: '主语 + ne + 助动词 + pas + de + 宾语（否定句）',
    note: '否定句 ne…pas 夹住动词：Je n\'ai pas de voiture. 注意否定句中不定冠词/部分冠词要换成 de。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'n\'ai',
        r: 'verbe',
        zh: '没有（ne + ai 省音）'
      },
      {
        t: 'pas',
        r: 'complement',
        zh: '不（否定第二成分）'
      },
      {
        t: 'de',
        r: 'determinant',
        zh: '（否定句中代替 du/des）'
      },
      {
        t: 'voiture.',
        r: 'objet',
        zh: '汽车'
      }
    ]
  },
  {
    id: 70,
    cat: '地理',
    emoji: '🗺️',
    fr: 'La France est en Europe.',
    zh: '法国在欧洲。',
    structure: '定冠词 + 主语 + 系动词 + 介词 en + 大洲补语',
    note: '阴性单数大洲/国家前用 en：en Europe, en France, en Chine；阳性用 au：au Japon, au Canada。',
    words: [
      {
        t: 'La',
        r: 'determinant',
        zh: '（定冠词）'
      },
      {
        t: 'France',
        r: 'sujet',
        zh: '法国'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是；位于'
      },
      {
        t: 'en',
        r: 'preposition',
        zh: '在（阴性地点前）'
      },
      {
        t: 'Europe.',
        r: 'complement',
        zh: '欧洲'
      }
    ]
  },
  {
    id: 71,
    cat: '存在',
    emoji: '☕',
    fr: 'Il y a un café sur la table.',
    zh: '桌上有一杯咖啡。',
    structure: '形式主语 + y + 谓语 + 不定冠词 + 宾语 + 方位短语',
    note: 'il y a = 有（存在句），是法语里最高频的表达之一；否定是 il n\'y a pas de…。',
    words: [
      {
        t: 'Il',
        r: 'sujet',
        zh: '它（形式主语）'
      },
      {
        t: 'y',
        r: 'complement',
        zh: '那里（il y a 固定结构）'
      },
      {
        t: 'a',
        r: 'verbe',
        zh: '有（avoir）'
      },
      {
        t: 'un',
        r: 'determinant',
        zh: '一杯'
      },
      {
        t: 'café',
        r: 'objet',
        zh: '咖啡'
      },
      {
        t: 'sur',
        r: 'preposition',
        zh: '在……上'
      },
      {
        t: 'la',
        r: 'determinant',
        zh: '（定冠词）'
      },
      {
        t: 'table.',
        r: 'complement',
        zh: '桌子'
      }
    ]
  },
  {
    id: 72,
    cat: '感叹',
    emoji: '😍',
    fr: 'Comme elle est belle !',
    zh: '她真美啊！',
    structure: '感叹连词 + 主语 + 系动词 + 形容词（感叹句）',
    note: 'comme 引导感叹句 = 多么……！另一种说法：Qu\'elle est belle ! 口语里 C\'est beau ! 更简单。',
    words: [
      {
        t: 'Comme',
        r: 'interrogation',
        zh: '多么（感叹连词）'
      },
      {
        t: 'elle',
        r: 'sujet',
        zh: '她'
      },
      {
        t: 'est',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'belle !',
        r: 'adjectif',
        zh: '美的（阴性）'
      }
    ]
  },
  {
    id: 73,
    cat: '感叹',
    emoji: '🚲',
    fr: 'Quel beau vélo !',
    zh: '多漂亮的自行车啊！',
    structure: '感叹形容词 + 形容词 + 名词（省略句）',
    note: 'quel 要与名词性数配合：Quel beau vélo !（阳单）/ Quelles belles fleurs !（阴复）。',
    words: [
      {
        t: 'Quel',
        r: 'interrogation',
        zh: '多么（阳性感叹形容词）'
      },
      {
        t: 'beau',
        r: 'adjectif',
        zh: '漂亮的（阳性）'
      },
      {
        t: 'vélo !',
        r: 'objet',
        zh: '自行车'
      }
    ]
  },
  {
    id: 74,
    cat: '感叹',
    emoji: '🌟',
    fr: 'C\'est super !',
    zh: '太棒了！',
    structure: '指示代词 + 系动词 + 形容词（感叹省略句）',
    note: '日常口语夸东西三连：C\'est super ! 太棒了 / C\'est génial ! 绝了 / C\'est pas mal ! 还不错。',
    words: [
      {
        t: 'C\'est',
        r: 'verbe',
        zh: '这是'
      },
      {
        t: 'super !',
        r: 'adjectif',
        zh: '超级棒的'
      }
    ]
  },
  {
    id: 75,
    cat: '口语',
    emoji: '😅',
    fr: 'Je suis désolé, je suis en retard !',
    zh: '对不起，我迟到了！',
    structure: '主语 + 系动词 + 形容词 + 主语 + 系动词 + 介词 + 名词',
    note: '迟到道歉金句；女性说 Je suis désolée。en retard 迟到，反义词 à l\'heure 准时。',
    words: [
      {
        t: 'Je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'suis',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'désolé,',
        r: 'adjectif',
        zh: '抱歉的（阳性）'
      },
      {
        t: 'je',
        r: 'sujet',
        zh: '我'
      },
      {
        t: 'suis',
        r: 'verbe',
        zh: '是'
      },
      {
        t: 'en',
        r: 'preposition',
        zh: '处于（状态）'
      },
      {
        t: 'retard !',
        r: 'complement',
        zh: '迟到'
      }
    ]
  },
  {
    id: 76,
    cat: '口语',
    emoji: '🍽️',
    fr: 'Bon appétit !',
    zh: '好好享用！（用餐前的祝福）',
    structure: '形容词 + 名词（固定祝福语）',
    note: '开吃前全场说 Bon appétit ! 相当于日语「いただきます」、中文「请慢用」。',
    words: [
      {
        t: 'Bon',
        r: 'adjectif',
        zh: '好的'
      },
      {
        t: 'appétit !',
        r: 'complement',
        zh: '胃口'
      }
    ]
  },
  {
    id: 77,
    cat: '口语',
    emoji: '👋',
    fr: 'À tout à l\'heure !',
    zh: '一会儿见！',
    structure: '介词 + 代词 + 介词 + 时间名词（固定告别语）',
    note: '当天还会见面说 À tout à l\'heure !；改天再见说 À bientôt !；明天见 À demain !',
    words: [
      {
        t: 'À',
        r: 'preposition',
        zh: '到'
      },
      {
        t: 'tout',
        r: 'complement',
        zh: '全部'
      },
      {
        t: 'à',
        r: 'preposition',
        zh: '在'
      },
      {
        t: 'l\'heure !',
        r: 'complement',
        zh: '时刻（le 的省音）'
      }
    ]
  },
  {
    id: 78,
    cat: '口语',
    emoji: '🔁',
    fr: 'Tu peux répéter, s\'il te plaît ?',
    zh: '你能再说一遍吗？',
    structure: '主语 + 谓语 + 动词不定式 + 礼貌插入语',
    note: '没听清就礼貌地说这句；更短：Répète, s\'il te plaît ? 或 Pardon, tu peux répéter ?',
    words: [
      {
        t: 'Tu',
        r: 'sujet',
        zh: '你'
      },
      {
        t: 'peux',
        r: 'verbe',
        zh: '能够（pouvoir）'
      },
      {
        t: 'répéter,',
        r: 'verbe',
        zh: '重复（动词不定式）'
      },
      {
        t: 's\'il',
        r: 'politesse',
        zh: '如果（si + il 省音）'
      },
      {
        t: 'te',
        r: 'complement',
        zh: '你（间接宾语代词）'
      },
      {
        t: 'plaît ?',
        r: 'politesse',
        zh: '取悦（s\'il te plaît 请）'
      }
    ]
  }
];
