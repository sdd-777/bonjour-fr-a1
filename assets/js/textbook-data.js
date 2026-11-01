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
  "tb-l1": { unit: 1, no: "Leçon 1", title: "Bienvenue ! 欢迎！", empty: true },
  "tb-l2": { unit: 1, no: "Leçon 2", title: "Qui est-ce ? 这是谁？", empty: true },
  "tb-l3": { unit: 1, no: "Leçon 3", title: "Ça va bien ? 你好吗？", empty: true },
  "tb-l4": { unit: 1, no: "Leçon 4", title: "Correspondants 寻找笔友", empty: true },

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

  "tb-l6": { unit: 2, no: "Leçon 6", title: "Portrait-robot 模拟画像", empty: true },
  "tb-l7": { unit: 2, no: "Leçon 7", title: "Shopping 购物", empty: true },
  "tb-l8": { unit: 2, no: "Leçon 8", title: "Le coin des artistes 艺术家之角", empty: true }
};

if (typeof window !== "undefined"){
  window.__TB_UNITS = TB_UNITS;
  window.__TB_LESSONS = TB_LESSONS;
}
