/* =========================================================
   动词变位模块数据（128 个常用动词 × 直陈式 4 时态 × 6 人称；含教材 L1–36 全部动词）
   时态：pres 现在时 / pc 复合过去时 / imp 未完成过去时 / fut 简单将来时
   f = 变位形式数组（6 人称），i = 对应 IPA 音标数组
   aux = 复合过去时助动词（avoir / etre）；part = 过去分词
   音频：assets/audio/verbs/vb-{id}-inf.mp3           原形
        assets/audio/verbs/vb-{id}-{pres|imp|pc|fut}-{0..5}.mp3   变位
        assets/audio/verbs/vb-{id}-ex{0|1}.mp3        例句
   ========================================================= */
'use strict';

const VERB_TENSES = [
  { id: 'pres', label: '直陈式现在时', fr: 'Présent',     use: '现在的动作、习惯、客观事实',     color: '#d35400' },
  { id: 'pc',   label: '复合过去时',   fr: 'Passé composé', use: '已经完成的动作（助动词 + 过去分词）', color: '#8e44ad' },
  { id: 'imp',  label: '未完成过去时', fr: 'Imparfait',   use: '过去的习惯、背景、同时进行的动作', color: '#16a085' },
  { id: 'fut',  label: '简单将来时',   fr: 'Futur simple', use: '将要发生的动作、计划、预测',     color: '#2980b9' }
];

const VERB_PRONOUNS = ['je', 'tu', 'il / elle', 'nous', 'vous', 'ils / elles'];

const VERB_GROUPS = [
  { id: 'er',  label: '第一组动词 (-er)',  desc: '规则动词，数量最多：aimer, parler, habiter…' },
  { id: 'ir',  label: '第二组动词 (-ir)',  desc: '词干 + -is/-issons：finir, choisir…' },
  { id: 'irr', label: '不规则动词',        desc: '变位特殊，需逐个记忆：être, avoir, aller, faire…' }
];

const VERBS = [
/* ================= 第一组 -er ================= */
{
  id: "acheter", inf: "acheter", ipa: "[aʃ.te]", zh: "买", grp: "er", aux: "avoir", part: "acheté",
  tenses: {
    pres: { f: ["achète","achètes","achète","achetons","achetez","achètent"],
            i: ["[a.ʃɛt]","[a.ʃɛt]","[a.ʃɛt]","[aʃ.tɔ̃]","[aʃ.te]","[a.ʃɛt]"] },
    pc: { f: ["ai acheté","as acheté","a acheté","avons acheté","avez acheté","ont acheté"],
            i: ["[ʒe.t‿aʃ.te]","[ty a.z‿aʃ.te]","[i.la.z‿aʃ.te]","[nu.z‿a.vɔ̃.z‿aʃ.te]","[vu.z‿a.ve.z‿aʃ.te]","[il.z‿ɔ̃.z‿aʃ.te]"] },
    imp: { f: ["achetais","achetais","achetait","achetions","achetiez","achetaient"],
            i: ["[aʃ.tɛ]","[aʃ.tɛ]","[aʃ.tɛ]","[aʃ.tjɔ̃]","[aʃ.tje]","[aʃ.tɛ]"] },
    fut: { f: ["achèterai","achèteras","achètera","achèterons","achèterez","achèteront"],
            i: ["[a.ʃɛ.tə.ʁe]","[a.ʃɛ.tə.ʁe]","[a.ʃɛ.tə.ʁa]","[a.ʃɛ.tə.ʁɔ̃]","[a.ʃɛ.tə.ʁe]","[a.ʃɛ.tə.ʁɔ̃]"] }
  },
  note: "-eter 动词：单数人称 é → è（il achète），将来时也用 achèter-。",
  ex: [
    { fr: "J'achète du pain.", zh: "我买面包。", i: "[ʒa.ʃɛt dy pɛ̃]" },
    { fr: "Nous avons acheté une maison.", zh: "我们买了一栋房子。", i: "[nu.z‿a.vɔ̃.z‿aʃ.te yn mɛ.zɔ̃]" }
  ]
},
{
  id: "adorer", inf: "adorer", ipa: "[a.dɔ.ʁe]", zh: "崇拜；非常喜欢", grp: "er", aux: "avoir", part: "adoré",
  tenses: {
    pres: { f: ["j'adore","adores","adore","adorons","adorez","adorent"],
            i: ["[ʒa.dɔʁ]","[a.dɔʁ]","[a.dɔʁ]","[a.dɔ.ʁɔ̃]","[a.dɔ.ʁe]","[a.dɔʁ]"] },
    pc: { f: ["ai adoré","as adoré","a adoré","avons adoré","avez adoré","ont adoré"],
            i: ["[ʒe.t‿a.dɔ.ʁe]","[ty a.z‿a.dɔ.ʁe]","[i.la.z‿a.dɔ.ʁe]","[nu.z‿a.vɔ̃.z‿a.dɔ.ʁe]","[vu.z‿a.ve.z‿a.dɔ.ʁe]","[il.z‿ɔ̃.z‿a.dɔ.ʁe]"] },
    imp: { f: ["adorais","adorais","adorait","adorions","adoriez","adoraient"],
            i: ["[a.dɔ.ʁɛ]","[a.dɔ.ʁɛ]","[a.dɔ.ʁɛ]","[a.dɔ.ʁjɔ̃]","[a.dɔ.ʁje]","[a.dɔ.ʁɛ]"] },
    fut: { f: ["adorerai","adoreras","adorera","adorerons","adorerez","adoreront"],
            i: ["[a.dɔ.ʁə.ʁe]","[a.dɔ.ʁə.ʁe]","[a.dɔ.ʁə.ʁa]","[a.dɔ.ʁə.ʁɔ̃]","[a.dɔ.ʁə.ʁe]","[a.dɔ.ʁə.ʁɔ̃]"] }
  },
  note: "adorer 是规则 -er 动词，变位同 aimer；adorer qqn/qch 表示「崇拜、非常喜欢」。",
  ex: [
    { fr: "J'adore ce film.", zh: "我超爱这部电影。", i: "[ʒa.dɔʁ sə film]" },
    { fr: "Elle a adoré le cadeau.", zh: "她非常喜欢这份礼物。", i: "[ɛ.la.z‿a.dɔ.ʁe lə ka.do]" }
  ]
},
{
  id: "aimer", inf: "aimer", ipa: "[ɛ.me] / [e.me]", zh: "爱；喜欢", grp: "er", aux: "avoir", part: "aimé",
  tenses: {
    pres: { f: ["j'aime","aimes","aime","aimons","aimez","aiment"],
            i: ["[ʒɛm]","[ɛm]","[ɛm]","[ɛ.mɔ̃]","[ɛ.me]","[ɛm]"] },
    pc: { f: ["ai aimé","as aimé","a aimé","avons aimé","avez aimé","ont aimé"],
            i: ["[ʒe.t‿ɛ.me]","[ty a.z‿ɛ.me]","[i.la.z‿ɛ.me]","[nu.z‿a.vɔ̃.z‿ɛ.me]","[vu.z‿a.ve.z‿ɛ.me]","[il.z‿ɔ̃.z‿ɛ.me]"] },
    imp: { f: ["aimais","aimais","aimait","aimions","aimiez","aimaient"],
            i: ["[ɛ.mɛ]","[ɛ.mɛ]","[ɛ.mɛ]","[ɛ.mjɔ̃]","[ɛ.mje]","[ɛ.mɛ]"] },
    fut: { f: ["aimerai","aimeras","aimera","aimerons","aimerez","aimeront"],
            i: ["[ɛ.mə.ʁe]","[ɛ.mə.ʁe]","[ɛ.mə.ʁa]","[ɛ.mə.ʁɔ̃]","[ɛ.mə.ʁe]","[ɛ.mə.ʁɔ̃]"] }
  },
  note: "je 在元音前变成 j'：j'aime [ʒɛm]；aimer mieux 意为「更喜欢」。",
  ex: [
    { fr: "J'aime le café.", zh: "我喜欢咖啡。", i: "[ʒɛm lə ka.fe]" },
    { fr: "Il a aimé le film.", zh: "他喜欢这部电影。", i: "[i.la.z‿ɛ.me lə film]" }
  ]
},
{
  id: "allumer", inf: "allumer", ipa: "[a.ly.me]", zh: "点亮；点燃；打开（灯）", grp: "er", aux: "avoir", part: "allumé",
  tenses: {
    pres: { f: ["j'allume","allumes","allume","allumons","allumez","allument"],
            i: ["[ʒa.lym]","[a.lym]","[a.lym]","[a.ly.mɔ̃]","[a.ly.me]","[a.lym]"] },
    pc: { f: ["ai allumé","as allumé","a allumé","avons allumé","avez allumé","ont allumé"],
            i: ["[ʒe.t‿a.ly.me]","[ty a.z‿a.ly.me]","[i.la.z‿a.ly.me]","[nu.z‿a.vɔ̃.z‿a.ly.me]","[vu.z‿a.ve.z‿a.ly.me]","[il.z‿ɔ̃.z‿a.ly.me]"] },
    imp: { f: ["allumais","allumais","allumait","allumions","allumiez","allumaient"],
            i: ["[a.ly.mɛ]","[a.ly.mɛ]","[a.ly.mɛ]","[a.ly.mjɔ̃]","[a.ly.mje]","[a.ly.mɛ]"] },
    fut: { f: ["allumerai","allumeras","allumera","allumerons","allumerez","allumeront"],
            i: ["[a.ly.mə.ʁe]","[a.ly.mə.ʁe]","[a.ly.mə.ʁa]","[a.ly.mə.ʁɔ̃]","[a.ly.mə.ʁe]","[a.ly.mə.ʁɔ̃]"] }
  },
  note: "allumer 是规则 -er 动词（变位同 aimer），意为「点亮、点燃」；je 在元音前缩合为 j'allume；s'allumer 表「（灯）自己亮起」。",
  ex: [
    { fr: "J'allume la lumière.", zh: "我打开灯。", i: "[ʒa.lym la ly.mjɛʁ]" },
    { fr: "Il a allumé une cigarette.", zh: "他点了一支烟。", i: "[i.la.z‿a.ly.me yn si.ɡa.ʁɛt]" }
  ]
},
{
  id: "amuser", inf: "amuser", ipa: "[a.my.ze]", zh: "娱乐；使开心", grp: "er", aux: "etre", part: "amusé",
  tenses: {
    pres: { f: ["j'amuse","amuses","amuse","amusons","amusez","amusent"],
            i: ["[ʒa.myz]","[a.myz]","[a.myz]","[a.my.zɔ̃]","[a.my.ze]","[a.myz]"] },
    pc: { f: ["suis amusé(e)","es amusé(e)","est amusé(e)","sommes amusé(e)s","êtes amusé(e)s","sont amusé(e)s"],
            i: ["[sɥi.z‿a.my.ze]","[ɛ.z‿a.my.ze]","[ɛ.t‿a.my.ze]","[sɔm.z‿a.my.ze]","[ɛt.z‿a.my.ze]","[sɔ̃.z‿a.my.ze]"] },
    imp: { f: ["amusais","amusais","amusait","amusions","amusiez","amusaient"],
            i: ["[a.my.zɛ]","[a.my.zɛ]","[a.my.zɛ]","[a.my.zjɔ̃]","[a.my.zje]","[a.my.zɛ]"] },
    fut: { f: ["amuserai","amuseras","amusera","amuserons","amuserez","amuseront"],
            i: ["[a.my.zə.ʁe]","[a.my.zə.ʁe]","[a.my.zə.ʁa]","[a.my.zə.ʁɔ̃]","[a.my.zə.ʁe]","[a.my.zə.ʁɔ̃]"] }
  },
  note: "s'amuser 玩得开心（代词式动词：se + amuser）；复合过去时用 être 并性数配合：je me suis amusé(e)；amuser qqn 使某人发笑。",
  ex: [
    { fr: "Les enfants s'amusent dans le jardin.", zh: "孩子们在花园里玩。", i: "[le.z‿ɑ̃.fɑ̃ s‿a.myz dɑ̃ lə ʒaʁ.dɛ̃]" },
    { fr: "Je me suis amusé hier.", zh: "我昨天玩得很开心。", i: "[ʒə mə sɥi.z‿a.my.ze jɛʁ]" }
  ]
},
{
  id: "appeler", inf: "appeler", ipa: "[a.ple]", zh: "叫；打电话", grp: "er", aux: "avoir", part: "appelé",
  tenses: {
    pres: { f: ["appelle","appelles","appelle","appelons","appelez","appellent"],
            i: ["[a.pɛl]","[a.pɛl]","[a.pɛl]","[a.pə.lɔ̃]","[a.pə.le]","[a.pɛl]"] },
    pc: { f: ["ai appelé","as appelé","a appelé","avons appelé","avez appelé","ont appelé"],
            i: ["[ʒe.t‿a.pə.le]","[ty a.z‿a.pə.le]","[i.la.z‿a.pə.le]","[nu.z‿a.vɔ̃.z‿a.pə.le]","[vu.z‿a.ve.z‿a.pə.le]","[il.z‿ɔ̃.z‿a.pə.le]"] },
    imp: { f: ["appelais","appelais","appelait","appelions","appeliez","appelaient"],
            i: ["[a.pə.lɛ]","[a.pə.lɛ]","[a.pə.lɛ]","[a.pə.ljɔ̃]","[a.pə.lje]","[a.pə.lɛ]"] },
    fut: { f: ["appellerai","appelleras","appellera","appellerons","appellerez","appelleront"],
            i: ["[a.pɛ.lə.ʁe]","[a.pɛ.lə.ʁe]","[a.pɛ.lə.ʁa]","[a.pɛ.lə.ʁɔ̃]","[a.pɛ.lə.ʁe]","[a.pɛ.lə.ʁɔ̃]"] }
  },
  note: "-eler 动词双写 l：appelle；appeler qqn 给某人打电话。",
  ex: [
    { fr: "Je t'appelle ce soir.", zh: "我今晚给你打电话。", i: "[ʒə ta.pɛl sə swaʁ]" },
    { fr: "Il a appelé le médecin.", zh: "他给医生打了电话。", i: "[i.la.z‿a.pə.le lə med.sɛ̃]" }
  ]
},
{
  id: "arrêter", inf: "arrêter", ipa: "[a.ʁɛ.te]", zh: "停止；逮捕", grp: "er", aux: "avoir", part: "arrêté",
  tenses: {
    pres: { f: ["j'arrête","arrêtes","arrête","arrêtons","arrêtez","arrêtent"],
            i: ["[ʒa.ʁɛt]","[a.ʁɛt]","[a.ʁɛt]","[a.ʁɛ.tɔ̃]","[a.ʁɛ.te]","[a.ʁɛt]"] },
    pc: { f: ["ai arrêté","as arrêté","a arrêté","avons arrêté","avez arrêté","ont arrêté"],
            i: ["[ʒe.t‿a.ʁɛ.te]","[ty a.z‿a.ʁɛ.te]","[i.la.z‿a.ʁɛ.te]","[nu.z‿a.vɔ̃.z‿a.ʁɛ.te]","[vu.z‿a.ve.z‿a.ʁɛ.te]","[il.z‿ɔ̃.z‿a.ʁɛ.te]"] },
    imp: { f: ["arrêtais","arrêtais","arrêtait","arrêtions","arrêtiez","arrêtaient"],
            i: ["[a.ʁɛ.tɛ]","[a.ʁɛ.tɛ]","[a.ʁɛ.tɛ]","[a.ʁɛ.tjɔ̃]","[a.ʁɛ.tje]","[a.ʁɛ.tɛ]"] },
    fut: { f: ["arrêterai","arrêteras","arrêtera","arrêterons","arrêterez","arrêteront"],
            i: ["[a.ʁɛ.tə.ʁe]","[a.ʁɛ.tə.ʁe]","[a.ʁɛ.tə.ʁa]","[a.ʁɛ.tə.ʁɔ̃]","[a.ʁɛ.tə.ʁe]","[a.ʁɛ.tə.ʁɔ̃]"] }
  },
  note: "arrêter 是规则 -er 动词，ê 读 [ɛ] 且各人称不变（il arrête [a.ʁɛt]）；s'arrêter 表示「停下」（代词式，pc 用 être）。",
  ex: [
    { fr: "Le train s'arrête à midi.", zh: "火车中午停下。", i: "[lə tʁɛ̃ s‿a.ʁɛt a mi.di]" },
    { fr: "La police a arrêté le voleur.", zh: "警察抓住了小偷。", i: "[la pɔ.lis a.z‿a.ʁɛ.te lə vɔ.lœʁ]" }
  ]
},
{
  id: "arriver", inf: "arriver", ipa: "[a.ʁi.ve]", zh: "到达；抵达；发生", grp: "er", aux: "etre", part: "arrivé",
  tenses: {
    pres: { f: ["arrive","arrives","arrive","arrivons","arrivez","arrivent"],
            i: ["[a.ʁiv]","[a.ʁiv]","[a.ʁiv]","[a.ʁi.vɔ̃]","[a.ʁi.ve]","[a.ʁiv]"] },
    pc: { f: ["suis arrivé(e)","es arrivé(e)","est arrivé(e)","sommes arrivé(e)s","êtes arrivé(e)s","sont arrivé(e)s"],
            i: ["[sɥi.z‿a.ʁi.ve]","[ɛ.z‿a.ʁi.ve]","[ɛ.t‿a.ʁi.ve]","[sɔm.z‿a.ʁi.ve]","[ɛt.z‿a.ʁi.ve]","[sɔ̃.z‿a.ʁi.ve]"] },
    imp: { f: ["arrivais","arrivais","arrivait","arrivions","arriviez","arrivaient"],
            i: ["[a.ʁi.vɛ]","[a.ʁi.vɛ]","[a.ʁi.vɛ]","[a.ʁi.vjɔ̃]","[a.ʁi.vje]","[a.ʁi.vɛ]"] },
    fut: { f: ["arriverai","arriveras","arrivera","arriverons","arriverez","arriveront"],
            i: ["[a.ʁi.və.ʁe]","[a.ʁi.və.ʁe]","[a.ʁi.və.ʁa]","[a.ʁi.və.ʁɔ̃]","[a.ʁi.və.ʁe]","[a.ʁi.və.ʁɔ̃]"] }
  },
  note: "用 être 作助动词，过去分词与主语性数配合：je suis arrivé（男）/ arrivée（女）；arriver à 到达，也可表「发生」。",
  ex: [
    { fr: "Je suis arrivé à Paris.", zh: "我到了巴黎。", i: "[ʒə sɥi.z‿a.ʁi.ve.a pa.ʁi]" },
    { fr: "Elle est arrivée en retard.", zh: "她迟到了。", i: "[ɛ.lɛ.t‿a.ʁi.ve.ɑ̃ ʁə.taʁ]" }
  ]
},
{
  id: "baigner", inf: "baigner", ipa: "[bɛ.ɲe]", zh: "洗澡；游泳", grp: "er", aux: "etre", part: "baigné",
  tenses: {
    pres: { f: ["baigne","baignes","baigne","baignons","baignez","baignent"],
            i: ["[bɛɲ]","[bɛɲ]","[bɛɲ]","[bɛ.ɲɔ̃]","[bɛ.ɲe]","[bɛɲ]"] },
    pc: { f: ["suis baigné(e)","es baigné(e)","est baigné(e)","sommes baigné(e)s","êtes baigné(e)s","sont baigné(e)s"],
            i: ["[sɥi.z‿bɛ.ɲe]","[ɛ.z‿bɛ.ɲe]","[ɛ.t‿bɛ.ɲe]","[sɔm.z‿bɛ.ɲe]","[ɛt.z‿bɛ.ɲe]","[sɔ̃.z‿bɛ.ɲe]"] },
    imp: { f: ["baignais","baignais","baignait","baignions","baigniez","baignaient"],
            i: ["[bɛ.ɲɛ]","[bɛ.ɲɛ]","[bɛ.ɲɛ]","[bɛ.ɲjɔ̃]","[bɛ.ɲje]","[bɛ.ɲɛ]"] },
    fut: { f: ["baignerai","baigneras","baignera","baignerons","baignerez","baigneront"],
            i: ["[bɛ.ɲə.ʁe]","[bɛ.ɲə.ʁe]","[bɛ.ɲə.ʁa]","[bɛ.ɲə.ʁɔ̃]","[bɛ.ɲə.ʁe]","[bɛ.ɲə.ʁɔ̃]"] }
  },
  note: "se baigner 洗澡/游泳（代词式动词：se + baigner）；复合过去时用 être 并性数配合：je me suis baigné(e)；gn 读 [ɲ]。",
  ex: [
    { fr: "Je me baigne dans la mer.", zh: "我在海里游泳。", i: "[ʒə mə bɛɲ dɑ̃ la mɛʁ]" },
    { fr: "Nous nous sommes baignés hier.", zh: "我们昨天游泳了。", i: "[nu nu sɔm.z‿bɛ.ɲe jɛʁ]" }
  ]
},
{
  id: "briller", inf: "briller", ipa: "[bʁi.je]", zh: "发光；闪耀；出众", grp: "er", aux: "avoir", part: "brillé",
  tenses: {
    pres: { f: ["brille","brilles","brille","brillons","brillez","brillent"],
            i: ["[bʁij]","[bʁij]","[bʁij]","[bʁi.jɔ̃]","[bʁi.je]","[bʁij]"] },
    pc: { f: ["ai brillé","as brillé","a brillé","avons brillé","avez brillé","ont brillé"],
            i: ["[ʒe bʁi.je]","[ty a bʁi.je]","[i.la bʁi.je]","[nu.z‿a.vɔ̃ bʁi.je]","[vu.z‿a.ve bʁi.je]","[il.z‿ɔ̃ bʁi.je]"] },
    imp: { f: ["brillais","brillais","brillait","brillions","brilliez","brillaient"],
            i: ["[bʁi.jɛ]","[bʁi.jɛ]","[bʁi.jɛ]","[bʁi.jɔ̃]","[bʁi.je]","[bʁi.jɛ]"] },
    fut: { f: ["brillerai","brilleras","brillera","brillerons","brillerez","brilleront"],
            i: ["[bʁi.jə.ʁe]","[bʁi.jə.ʁe]","[bʁi.jə.ʁa]","[bʁi.jə.ʁɔ̃]","[bʁi.jə.ʁe]","[bʁi.jə.ʁɔ̃]"] }
  },
  note: "briller 是规则 -er 动词，词干 brill- 中的 ill 读半元音 [j]（il brille [bʁij]）；也可引申为「才华出众」。",
  ex: [
    { fr: "Le soleil brille.", zh: "阳光闪耀。", i: "[lə sɔ.lɛj bʁij]" },
    { fr: "Ses yeux brillaient de joie.", zh: "他的眼睛因喜悦而闪亮。", i: "[se.z‿jø bʁi.jɛ də ʒwa]" }
  ]
},
{
  id: "calmer", inf: "calmer", ipa: "[kal.me]", zh: "使平静；安慰", grp: "er", aux: "etre", part: "calmé",
  tenses: {
    pres: { f: ["calme","calmes","calme","calmons","calmez","calment"],
            i: ["[kalm]","[kalm]","[kalm]","[kal.mɔ̃]","[kal.me]","[kalm]"] },
    pc: { f: ["suis calmé(e)","es calmé(e)","est calmé(e)","sommes calmé(e)s","êtes calmé(e)s","sont calmé(e)s"],
            i: ["[sɥi.z‿kal.me]","[ɛ.z‿kal.me]","[ɛ.t‿kal.me]","[sɔm.z‿kal.me]","[ɛt.z‿kal.me]","[sɔ̃.z‿kal.me]"] },
    imp: { f: ["calmais","calmais","calmait","calmions","calmiez","calmaient"],
            i: ["[kal.mɛ]","[kal.mɛ]","[kal.mɛ]","[kal.mjɔ̃]","[kal.mje]","[kal.mɛ]"] },
    fut: { f: ["calmerai","calmeras","calmera","calmerons","calmerez","calmeront"],
            i: ["[kal.mə.ʁe]","[kal.mə.ʁe]","[kal.mə.ʁa]","[kal.mə.ʁɔ̃]","[kal.mə.ʁe]","[kal.mə.ʁɔ̃]"] }
  },
  note: "se calmer 冷静下来（代词式动词：se + calmer）；复合过去时用 être 并性数配合：je me suis calmé(e)；calmer qqn 安抚某人。",
  ex: [
    { fr: "Je me calme.", zh: "我冷静下来。", i: "[ʒə mə kalm]" },
    { fr: "Elle s'est calmée après la dispute.", zh: "争吵后她平静下来了。", i: "[ɛ.la sɛ.t‿kal.me a.pʁɛ la dis.pyt]" }
  ]
},
{
  id: "changer", inf: "changer", ipa: "[ʃɑ̃.ʒe]", zh: "改变；更换；兑换", grp: "er", aux: "avoir", part: "changé",
  tenses: {
    pres: { f: ["change","changes","change","changeons","changez","changent"],
            i: ["[ʃɑ̃ʒ]","[ʃɑ̃ʒ]","[ʃɑ̃ʒ]","[ʃɑ̃.ʒɔ̃]","[ʃɑ̃.ʒe]","[ʃɑ̃ʒ]"] },
    pc: { f: ["ai changé","as changé","a changé","avons changé","avez changé","ont changé"],
            i: ["[ʒe ʃɑ̃.ʒe]","[ty a ʃɑ̃.ʒe]","[i.la ʃɑ̃.ʒe]","[nu.z‿a.vɔ̃ ʃɑ̃.ʒe]","[vu.z‿a.ve ʃɑ̃.ʒe]","[il.z‿ɔ̃ ʃɑ̃.ʒe]"] },
    imp: { f: ["changeais","changeais","changeait","changions","changiez","changeaient"],
            i: ["[ʃɑ̃.ʒɛ]","[ʃɑ̃.ʒɛ]","[ʃɑ̃.ʒɛ]","[ʃɑ̃.ʒjɔ̃]","[ʃɑ̃.ʒje]","[ʃɑ̃.ʒɛ]"] },
    fut: { f: ["changerai","changeras","changera","changerons","changerez","changeront"],
            i: ["[ʃɑ̃.ʒə.ʁe]","[ʃɑ̃.ʒə.ʁe]","[ʃɑ̃.ʒə.ʁa]","[ʃɑ̃.ʒə.ʁɔ̃]","[ʃɑ̃.ʒə.ʁe]","[ʃɑ̃.ʒə.ʁɔ̃]"] }
  },
  note: "changer 以 -ger 结尾：为在元音 a/o 前保持 [ʒ] 软音，nous/vous 现在时要加 e 写作 changeons / changez（否则会读成 [ɡ]）；未完成过去时则写作 changions / changiez。change de 意为「更换（工作、主意等）」。",
  ex: [
    { fr: "Je change de travail.", zh: "我换工作。", i: "[ʒə ʃɑ̃ʒ də tʁa.vaj]" },
    { fr: "Nous avons changé d'avis.", zh: "我们改变了主意。", i: "[nu.z‿a.vɔ̃ ʃɑ̃.ʒe d‿a.vi]" }
  ]
},
{
  id: "chercher", inf: "chercher", ipa: "[ʃɛʁ.ʃe]", zh: "寻找；搜寻", grp: "er", aux: "avoir", part: "cherché",
  tenses: {
    pres: { f: ["cherche","cherches","cherche","cherchons","cherchez","cherchent"],
            i: ["[ʃɛʁʃ]","[ʃɛʁʃ]","[ʃɛʁʃ]","[ʃɛʁ.ʃɔ̃]","[ʃɛʁ.ʃe]","[ʃɛʁʃ]"] },
    pc: { f: ["ai cherché","as cherché","a cherché","avons cherché","avez cherché","ont cherché"],
            i: ["[ʒe ʃɛʁ.ʃe]","[ty a ʃɛʁ.ʃe]","[i.la ʃɛʁ.ʃe]","[nu.z‿a.vɔ̃ ʃɛʁ.ʃe]","[vu.z‿a.ve ʃɛʁ.ʃe]","[il.z‿ɔ̃ ʃɛʁ.ʃe]"] },
    imp: { f: ["cherchais","cherchais","cherchait","cherchions","cherchiez","cherchaient"],
            i: ["[ʃɛʁ.ʃɛ]","[ʃɛʁ.ʃɛ]","[ʃɛʁ.ʃɛ]","[ʃɛʁ.ʃjɔ̃]","[ʃɛʁ.ʃje]","[ʃɛʁ.ʃɛ]"] },
    fut: { f: ["chercherai","chercheras","cherchera","chercherons","chercherez","chercheront"],
            i: ["[ʃɛʁ.ʃə.ʁe]","[ʃɛʁ.ʃə.ʁe]","[ʃɛʁ.ʃə.ʁa]","[ʃɛʁ.ʃə.ʁɔ̃]","[ʃɛʁ.ʃə.ʁe]","[ʃɛʁ.ʃə.ʁɔ̃]"] }
  },
  note: "chercher 表示「寻找」的动作，trouver 表示「找到」的结果，两者不可混用。",
  ex: [
    { fr: "Je cherche mes clés.", zh: "我在找我的钥匙。", i: "[ʒə ʃɛʁʃ me kle]" },
    { fr: "Elle a cherché un emploi.", zh: "她找过一份工作。", i: "[ɛ.la ʃɛʁ.ʃe œ̃ ɑ̃.plwa]" }
  ]
},
{
  id: "commencer", inf: "commencer", ipa: "[kɔ.mɑ̃.se]", zh: "开始", grp: "er", aux: "avoir", part: "commencé",
  tenses: {
    pres: { f: ["commence","commences","commence","commençons","commencez","commencent"],
            i: ["[kɔ.mɑ̃s]","[kɔ.mɑ̃s]","[kɔ.mɑ̃s]","[kɔ.mɑ̃.sɔ̃]","[kɔ.mɑ̃.se]","[kɔ.mɑ̃s]"] },
    pc: { f: ["ai commencé","as commencé","a commencé","avons commencé","avez commencé","ont commencé"],
            i: ["[ʒe kɔ.mɑ̃.se]","[ty a kɔ.mɑ̃.se]","[i.la kɔ.mɑ̃.se]","[nu.z‿a.vɔ̃ kɔ.mɑ̃.se]","[vu.z‿a.ve kɔ.mɑ̃.se]","[il.z‿ɔ̃ kɔ.mɑ̃.se]"] },
    imp: { f: ["commençais","commençais","commençait","commencions","commenciez","commençaient"],
            i: ["[kɔ.mɑ̃.sɛ]","[kɔ.mɑ̃.sɛ]","[kɔ.mɑ̃.sɛ]","[kɔ.mɑ̃.sjɔ̃]","[kɔ.mɑ̃.sje]","[kɔ.mɑ̃.sɛ]"] },
    fut: { f: ["commencerai","commenceras","commencera","commencerons","commencerez","commenceront"],
            i: ["[kɔ.mɑ̃.sə.ʁe]","[kɔ.mɑ̃.sə.ʁe]","[kɔ.mɑ̃.sə.ʁa]","[kɔ.mɑ̃.sə.ʁɔ̃]","[kɔ.mɑ̃.sə.ʁe]","[kɔ.mɑ̃.sə.ʁɔ̃]"] }
  },
  note: "-cer 动词：nous 写作 commençons（ç 保持 [s] 音，不读 [k]）。",
  ex: [
    { fr: "Le cours commence à neuf heures.", zh: "课九点开始。", i: "[lə kuʁ kɔ.mɑ̃s a nœ.v‿œʁ]" },
    { fr: "J'ai commencé le français en janvier.", zh: "我一月份开始学法语。", i: "[ʒe kɔ.mɑ̃.se lə fʁɑ̃.sɛ ɑ̃ ʒɑ̃.vje]" }
  ]
},
{
  id: "contacter", inf: "contacter", ipa: "[kɔ̃.tak.te]", zh: "联系；联络", grp: "er", aux: "avoir", part: "contacté",
  tenses: {
    pres: { f: ["contacte","contactes","contacte","contactons","contactez","contactent"],
            i: ["[kɔ̃.takt]","[kɔ̃.takt]","[kɔ̃.takt]","[kɔ̃.tak.tɔ̃]","[kɔ̃.tak.te]","[kɔ̃.takt]"] },
    pc: { f: ["ai contacté","as contacté","a contacté","avons contacté","avez contacté","ont contacté"],
            i: ["[ʒe kɔ̃.tak.te]","[ty a kɔ̃.tak.te]","[i.la kɔ̃.tak.te]","[nu.z‿a.vɔ̃ kɔ̃.tak.te]","[vu.z‿a.ve kɔ̃.tak.te]","[il.z‿ɔ̃ kɔ̃.tak.te]"] },
    imp: { f: ["contactais","contactais","contactait","contactions","contactiez","contactaient"],
            i: ["[kɔ̃.tak.tɛ]","[kɔ̃.tak.tɛ]","[kɔ̃.tak.tɛ]","[kɔ̃.tak.tjɔ̃]","[kɔ̃.tak.tje]","[kɔ̃.tak.tɛ]"] },
    fut: { f: ["contacterai","contacteras","contactera","contacterons","contacterez","contacteront"],
            i: ["[kɔ̃.tak.tə.ʁe]","[kɔ̃.tak.tə.ʁe]","[kɔ̃.tak.tə.ʁa]","[kɔ̃.tak.tə.ʁɔ̃]","[kɔ̃.tak.tə.ʁe]","[kɔ̃.tak.tə.ʁɔ̃]"] }
  },
  note: "contacter 是及物动词，直接接宾语：contacter quelqu'un 联系某人，不加介词 à。",
  ex: [
    { fr: "Je contacte le client.", zh: "我联系客户。", i: "[ʒə kɔ̃.takt lə kli.jɑ̃]" },
    { fr: "Nous avons contacté le professeur.", zh: "我们联系了老师。", i: "[nu.z‿a.vɔ̃ kɔ̃.tak.te lə pʁɔ.fɛ.sœʁ]" }
  ]
},
{
  id: "continuer", inf: "continuer", ipa: "[kɔ̃.ti.nɥe]", zh: "继续", grp: "er", aux: "avoir", part: "continué",
  tenses: {
    pres: { f: ["continue","continues","continue","continuons","continuez","continuent"],
            i: ["[kɔ̃.ti.nɥ]","[kɔ̃.ti.nɥ]","[kɔ̃.ti.nɥ]","[kɔ̃.ti.nɥ.ɔ̃]","[kɔ̃.ti.nɥ.e]","[kɔ̃.ti.nɥ]"] },
    pc: { f: ["ai continué","as continué","a continué","avons continué","avez continué","ont continué"],
            i: ["[ʒe kɔ̃.ti.nɥ.e]","[ty a kɔ̃.ti.nɥ.e]","[i.la kɔ̃.ti.nɥ.e]","[nu.z‿a.vɔ̃ kɔ̃.ti.nɥ.e]","[vu.z‿a.ve kɔ̃.ti.nɥ.e]","[il.z‿ɔ̃ kɔ̃.ti.nɥ.e]"] },
    imp: { f: ["continuais","continuais","continuait","continuions","continuiez","continuaient"],
            i: ["[kɔ̃.ti.nɥ.ɛ]","[kɔ̃.ti.nɥ.ɛ]","[kɔ̃.ti.nɥ.ɛ]","[kɔ̃.ti.nɥ.jɔ̃]","[kɔ̃.ti.nɥ.je]","[kɔ̃.ti.nɥ.ɛ]"] },
    fut: { f: ["continuerai","continueras","continuera","continuerons","continuerez","continueront"],
            i: ["[kɔ̃.ti.nɥ.ə.ʁe]","[kɔ̃.ti.nɥ.ə.ʁe]","[kɔ̃.ti.nɥ.ə.ʁa]","[kɔ̃.ti.nɥ.ə.ʁɔ̃]","[kɔ̃.ti.nɥ.ə.ʁe]","[kɔ̃.ti.nɥ.ə.ʁɔ̃]"] }
  },
  note: "continuer à + 动词不定式 表示「继续做某事」，如 continuer à étudier 继续学习。",
  ex: [
    { fr: "Je continue à étudier.", zh: "我继续学习。", i: "[ʒə kɔ̃.ti.nɥ a e.ty.dje]" },
    { fr: "Elle a continué à parler.", zh: "她继续说了下去。", i: "[ɛ.la kɔ̃.ti.nɥ.e a paʁ.le]" }
  ]
},
{
  id: "coucher", inf: "coucher", ipa: "[ku.ʃe]", zh: "睡觉；使躺下", grp: "er", aux: "avoir", part: "couché",
  tenses: {
    pres: { f: ["couche","couches","couche","couchons","couchez","couchent"],
            i: ["[kuʃ]","[kuʃ]","[kuʃ]","[ku.ʃɔ̃]","[ku.ʃe]","[kuʃ]"] },
    pc: { f: ["ai couché","as couché","a couché","avons couché","avez couché","ont couché"],
            i: ["[ʒe ku.ʃe]","[ty a ku.ʃe]","[i.la ku.ʃe]","[nu.z‿a.vɔ̃ ku.ʃe]","[vu.z‿a.ve ku.ʃe]","[il.z‿ɔ̃ ku.ʃe]"] },
    imp: { f: ["couchais","couchais","couchait","couchions","couchiez","couchaient"],
            i: ["[ku.ʃɛ]","[ku.ʃɛ]","[ku.ʃɛ]","[ku.ʃjɔ̃]","[ku.ʃje]","[ku.ʃɛ]"] },
    fut: { f: ["coucherai","coucheras","couchera","coucherons","coucherez","coucheront"],
            i: ["[ku.ʃə.ʁe]","[ku.ʃə.ʁe]","[ku.ʃə.ʁa]","[ku.ʃə.ʁɔ̃]","[ku.ʃə.ʁe]","[ku.ʃə.ʁɔ̃]"] }
  },
  note: "se coucher 表示「上床睡觉」；coucher 作及物动词时表示「使某人躺下、安顿某人睡觉」。",
  ex: [
    { fr: "Je me couche tôt.", zh: "我很早就睡。", i: "[ʒə mə kuʃ to]" },
    { fr: "Elle a couché l'enfant.", zh: "她把孩子安顿上床。", i: "[ɛ.la ku.ʃe lɑ̃.fɑ̃]" }
  ]
},
{
  id: "couter", inf: "coûter", ipa: "[ku.te]", zh: "花费；值", grp: "er", aux: "avoir", part: "coûté",
  tenses: {
    pres: { f: ["coûte","coûtes","coûte","coûtons","coûtez","coûtent"],
            i: ["[kut]","[kut]","[kut]","[ku.tɔ̃]","[ku.te]","[kut]"] },
    pc: { f: ["ai coûté","as coûté","a coûté","avons coûté","avez coûté","ont coûté"],
            i: ["[ʒe ku.te]","[ty a ku.te]","[i.la ku.te]","[nu.z‿a.vɔ̃ ku.te]","[vu.z‿a.ve ku.te]","[il.z‿ɔ̃ ku.te]"] },
    imp: { f: ["coûtais","coûtais","coûtait","coûtions","coûtiez","coûtaient"],
            i: ["[ku.tɛ]","[ku.tɛ]","[ku.tɛ]","[ku.tjɔ̃]","[ku.tje]","[ku.tɛ]"] },
    fut: { f: ["coûterai","coûteras","coûtera","coûterons","coûterez","coûteront"],
            i: ["[ku.tə.ʁe]","[ku.tə.ʁe]","[ku.tə.ʁa]","[ku.tə.ʁɔ̃]","[ku.tə.ʁe]","[ku.tə.ʁɔ̃]"] }
  },
  note: "coûter 表示「花费（金钱）」，主语通常是事物：Ça coûte cher. 这东西很贵。",
  ex: [
    { fr: "Ce livre coûte vingt euros.", zh: "这本书售价二十欧元。", i: "[sə livʁ kut vɛ̃.t‿ø.ʁo]" },
    { fr: "Le voyage a coûté cher.", zh: "这趟旅行花了很多钱。", i: "[lə vwa.jaʒ a ku.te ʃɛʁ]" }
  ]
},
{
  id: "demander", inf: "demander", ipa: "[də.mɑ̃.de]", zh: "要求；请求；询问", grp: "er", aux: "avoir", part: "demandé",
  tenses: {
    pres: { f: ["demande","demandes","demande","demandons","demandez","demandent"],
            i: ["[də.mɑ̃d]","[də.mɑ̃d]","[də.mɑ̃d]","[də.mɑ̃.dɔ̃]","[də.mɑ̃.de]","[də.mɑ̃d]"] },
    pc: { f: ["ai demandé","as demandé","a demandé","avons demandé","avez demandé","ont demandé"],
            i: ["[ʒe də.mɑ̃.de]","[ty a də.mɑ̃.de]","[i.la də.mɑ̃.de]","[nu.z‿a.vɔ̃ də.mɑ̃.de]","[vu.z‿a.ve də.mɑ̃.de]","[il.z‿ɔ̃ də.mɑ̃.de]"] },
    imp: { f: ["demandais","demandais","demandait","demandions","demandiez","demandaient"],
            i: ["[də.mɑ̃.dɛ]","[də.mɑ̃.dɛ]","[də.mɑ̃.dɛ]","[də.mɑ̃.djɔ̃]","[də.mɑ̃.dje]","[də.mɑ̃.dɛ]"] },
    fut: { f: ["demanderai","demanderas","demandera","demanderons","demanderez","demanderont"],
            i: ["[də.mɑ̃.də.ʁe]","[də.mɑ̃.də.ʁe]","[də.mɑ̃.də.ʁa]","[də.mɑ̃.də.ʁɔ̃]","[də.mɑ̃.də.ʁe]","[də.mɑ̃.də.ʁɔ̃]"] }
  },
  note: "demander qch (à qqn) 向某人要某物；demander à faire qch 请求做某事。",
  ex: [
    { fr: "Je demande un café.", zh: "我要一杯咖啡。", i: "[ʒə də.mɑ̃d œ̃ ka.fe]" },
    { fr: "Elle m'a demandé mon nom.", zh: "她问了我的名字。", i: "[ɛ.la ma də.mɑ̃.de mɔ̃ nɔ̃]" }
  ]
},
{
  id: "détester", inf: "détester", ipa: "[de.tɛs.te]", zh: "讨厌；憎恨", grp: "er", aux: "avoir", part: "détesté",
  tenses: {
    pres: { f: ["déteste","détestes","déteste","détestons","détestez","détestent"],
            i: ["[de.tɛst]","[de.tɛst]","[de.tɛst]","[de.tɛs.tɔ̃]","[de.tɛs.te]","[de.tɛst]"] },
    pc: { f: ["ai détesté","as détesté","a détesté","avons détesté","avez détesté","ont détesté"],
            i: ["[ʒe de.tɛs.te]","[ty a de.tɛs.te]","[i.la de.tɛs.te]","[nu.z‿a.vɔ̃ de.tɛs.te]","[vu.z‿a.ve de.tɛs.te]","[il.z‿ɔ̃ de.tɛs.te]"] },
    imp: { f: ["détestais","détestais","détestait","détestions","détestiez","détestaient"],
            i: ["[de.tɛs.tɛ]","[de.tɛs.tɛ]","[de.tɛs.tɛ]","[de.tɛs.tjɔ̃]","[de.tɛs.tje]","[de.tɛs.tɛ]"] },
    fut: { f: ["détesterai","détesteras","détestera","détesterons","détesterez","détesteront"],
            i: ["[de.tɛs.tə.ʁe]","[de.tɛs.tə.ʁe]","[de.tɛs.tə.ʁa]","[de.tɛs.tə.ʁɔ̃]","[de.tɛs.tə.ʁe]","[de.tɛs.tə.ʁɔ̃]"] }
  },
  note: "détester 是规则 -er 动词，与 adorer 互为反义；détester faire qch 表示讨厌做某事。",
  ex: [
    { fr: "Je déteste le café.", zh: "我讨厌咖啡。", i: "[ʒə de.tɛst lə ka.fe]" },
    { fr: "Il a détesté ce livre.", zh: "他讨厌这本书。", i: "[i.la de.tɛs.te sə livʁ]" }
  ]
},
{
  id: "donner", inf: "donner", ipa: "[dɔ.ne]", zh: "给；给予", grp: "er", aux: "avoir", part: "donné",
  tenses: {
    pres: { f: ["donne","donnes","donne","donnons","donnez","donnent"],
            i: ["[dɔn]","[dɔn]","[dɔn]","[dɔ.nɔ̃]","[dɔ.ne]","[dɔn]"] },
    pc: { f: ["ai donné","as donné","a donné","avons donné","avez donné","ont donné"],
            i: ["[ʒe dɔ.ne]","[ty a dɔ.ne]","[i.la dɔ.ne]","[nu.z‿a.vɔ̃ dɔ.ne]","[vu.z‿a.ve dɔ.ne]","[il.z‿ɔ̃ dɔ.ne]"] },
    imp: { f: ["donnais","donnais","donnait","donnions","donniez","donnaient"],
            i: ["[dɔ.nɛ]","[dɔ.nɛ]","[dɔ.nɛ]","[dɔ.njɔ̃]","[dɔ.nje]","[dɔ.nɛ]"] },
    fut: { f: ["donnerai","donneras","donnera","donnerons","donnerez","donneront"],
            i: ["[dɔ.nə.ʁe]","[dɔ.nə.ʁe]","[dɔ.nə.ʁa]","[dɔ.nə.ʁɔ̃]","[dɔ.nə.ʁe]","[dɔ.nə.ʁɔ̃]"] }
  },
  note: "donner 可带双宾语：donner quelque chose à quelqu'un 给某人某物。",
  ex: [
    { fr: "Je te donne un livre.", zh: "我给你一本书。", i: "[ʒə tə dɔn œ̃ livʁ]" },
    { fr: "Elle a donné un cadeau à Paul.", zh: "她给了保罗一份礼物。", i: "[ɛ.la dɔ.ne œ̃ ka.do a pɔl]" }
  ]
},
{
  id: "ecouter", inf: "écouter", ipa: "[e.ku.te]", zh: "听", grp: "er", aux: "avoir", part: "écouté",
  tenses: {
    pres: { f: ["écoute","écoutes","écoute","écoutons","écoutez","écoutent"],
            i: ["[e.kut]","[e.kut]","[e.kut]","[e.ku.tɔ̃]","[e.ku.te]","[e.kut]"] },
    pc: { f: ["ai écouté","as écouté","a écouté","avons écouté","avez écouté","ont écouté"],
            i: ["[ʒe.t‿e.ku.te]","[ty a.z‿e.ku.te]","[i.la.z‿e.ku.te]","[nu.z‿a.vɔ̃.z‿e.ku.te]","[vu.z‿a.ve.z‿e.ku.te]","[il.z‿ɔ̃.z‿e.ku.te]"] },
    imp: { f: ["écoutais","écoutais","écoutait","écoutions","écoutiez","écoutaient"],
            i: ["[e.ku.tɛ]","[e.ku.tɛ]","[e.ku.tɛ]","[e.ku.tjɔ̃]","[e.ku.tje]","[e.ku.tɛ]"] },
    fut: { f: ["écouterai","écouteras","écoutera","écouterons","écouterez","écouteront"],
            i: ["[e.ku.tə.ʁe]","[e.ku.tə.ʁe]","[e.ku.tə.ʁa]","[e.ku.tə.ʁɔ̃]","[e.ku.tə.ʁe]","[e.ku.tə.ʁɔ̃]"] }
  },
  note: "écouter de la musique 听音乐；écouter la radio 听广播。",
  ex: [
    { fr: "J'écoute de la musique.", zh: "我在听音乐。", i: "[ʒe.kut də la my.zik]" },
    { fr: "Tu as écouté la radio ?", zh: "你听了广播吗？", i: "[ty a.z‿e.ku.te la ʁa.djo]" }
  ]
},
{
  id: "embrasser", inf: "embrasser", ipa: "[ɑ̃.bʁa.se]", zh: "拥抱；亲吻", grp: "er", aux: "avoir", part: "embrassé",
  tenses: {
    pres: { f: ["j'embrasse","embrasses","embrasse","embrassons","embrassez","embrassent"],
            i: ["[ʒɑ̃.bʁas]","[ɑ̃.bʁas]","[ɑ̃.bʁas]","[ɑ̃.bʁa.sɔ̃]","[ɑ̃.bʁa.se]","[ɑ̃.bʁas]"] },
    pc: { f: ["ai embrassé","as embrassé","a embrassé","avons embrassé","avez embrassé","ont embrassé"],
            i: ["[ʒe.t‿ɑ̃.bʁa.se]","[ty a.z‿ɑ̃.bʁa.se]","[i.la.z‿ɑ̃.bʁa.se]","[nu.z‿a.vɔ̃.z‿ɑ̃.bʁa.se]","[vu.z‿a.ve.z‿ɑ̃.bʁa.se]","[il.z‿ɔ̃.z‿ɑ̃.bʁa.se]"] },
    imp: { f: ["embrassais","embrassais","embrassait","embrassions","embrassiez","embrassaient"],
            i: ["[ɑ̃.bʁa.sɛ]","[ɑ̃.bʁa.sɛ]","[ɑ̃.bʁa.sɛ]","[ɑ̃.bʁa.sjɔ̃]","[ɑ̃.bʁa.sje]","[ɑ̃.bʁa.sɛ]"] },
    fut: { f: ["embrasserai","embrasseras","embrassera","embrasserons","embrasserez","embrasseront"],
            i: ["[ɑ̃.bʁa.sə.ʁe]","[ɑ̃.bʁa.sə.ʁe]","[ɑ̃.bʁa.sə.ʁa]","[ɑ̃.bʁa.sə.ʁɔ̃]","[ɑ̃.bʁa.sə.ʁe]","[ɑ̃.bʁa.sə.ʁɔ̃]"] }
  },
  note: "embrasser 是规则 -er 动词（同 aimer），意为「拥抱、亲吻」；je 在元音前缩合为 j'embrasse；s'embrasser 表「互相亲吻」（代词式，pc 用 être 并配合）。",
  ex: [
    { fr: "Il embrasse sa mère.", zh: "他亲吻他的母亲。", i: "[il ɑ̃.bʁas sa mɛʁ]" },
    { fr: "Elle a embrassé son ami.", zh: "她拥抱了她的朋友。", i: "[ɛ.la.z‿ɑ̃.bʁa.se sɔ̃.n‿a.mi]" }
  ]
},
{
  id: "ennuyer", inf: "ennuyer", ipa: "[ɑ̃.nɥi.je]", zh: "使厌烦；使无聊", grp: "er", aux: "etre", part: "ennuyé",
  tenses: {
    pres: { f: ["j'ennuie","ennuies","ennuie","ennuyons","ennuyez","ennuient"],
            i: ["[ʒɑ̃.nɥi]","[ɑ̃.nɥi]","[ɑ̃.nɥi]","[ɑ̃.nɥi.jɔ̃]","[ɑ̃.nɥi.je]","[ɑ̃.nɥi]"] },
    pc: { f: ["suis ennuyé(e)","es ennuyé(e)","est ennuyé(e)","sommes ennuyé(e)s","êtes ennuyé(e)s","sont ennuyé(e)s"],
            i: ["[sɥi.z‿ɑ̃.nɥi.je]","[ɛ.z‿ɑ̃.nɥi.je]","[ɛ.t‿ɑ̃.nɥi.je]","[sɔm.z‿ɑ̃.nɥi.je]","[ɛt.z‿ɑ̃.nɥi.je]","[sɔ̃.z‿ɑ̃.nɥi.je]"] },
    imp: { f: ["ennuiais","ennuiais","ennuiait","ennuyions","ennuyiez","ennuiaient"],
            i: ["[ɑ̃.nɥi.jɛ]","[ɑ̃.nɥi.jɛ]","[ɑ̃.nɥi.jɛ]","[ɑ̃.nɥi.jɔ̃]","[ɑ̃.nɥi.je]","[ɑ̃.nɥi.jɛ]"] },
    fut: { f: ["ennuierai","ennuieras","ennuiera","ennuierons","ennuierez","ennuieront"],
            i: ["[ɑ̃.nɥi.jə.ʁe]","[ɑ̃.nɥi.jə.ʁe]","[ɑ̃.nɥi.jə.ʁa]","[ɑ̃.nɥi.jə.ʁɔ̃]","[ɑ̃.nɥi.jə.ʁe]","[ɑ̃.nɥi.jə.ʁɔ̃]"] }
  },
  note: "s'ennuyer 感到无聊（代词式动词：se + ennuyer）；-yer 动词 je m'ennuie / nous nous ennuyons；pc 用 être 并配合：je me suis ennuyé(e)。",
  ex: [
    { fr: "Je m'ennuie.", zh: "我觉得无聊。", i: "[ʒə mɑ̃.nɥi]" },
    { fr: "Elle s'est ennuyée pendant le cours.", zh: "上课时她觉得无聊。", i: "[ɛ.la sɛ.t‿ɑ̃.nɥi.je pɑ̃.dɑ̃ lə kuʁ]" }
  ]
},
{
  id: "entrainer", inf: "entraîner", ipa: "[ɑ̃.tʁɛ.ne]", zh: "训练；导致；拖累", grp: "er", aux: "avoir", part: "entraîné",
  tenses: {
    pres: { f: ["entraîne","entraînes","entraîne","entraînons","entraînez","entraînent"],
            i: ["[ɑ̃.tʁɛn]","[ɑ̃.tʁɛn]","[ɑ̃.tʁɛn]","[ɑ̃.tʁɛ.nɔ̃]","[ɑ̃.tʁɛ.ne]","[ɑ̃.tʁɛn]"] },
    pc: { f: ["ai entraîné","as entraîné","a entraîné","avons entraîné","avez entraîné","ont entraîné"],
            i: ["[ʒe.t‿ɑ̃.tʁɛ.ne]","[ty a.z‿ɑ̃.tʁɛ.ne]","[i.la.z‿ɑ̃.tʁɛ.ne]","[nu.z‿a.vɔ̃.z‿ɑ̃.tʁɛ.ne]","[vu.z‿a.ve.z‿ɑ̃.tʁɛ.ne]","[il.z‿ɔ̃.z‿ɑ̃.tʁɛ.ne]"] },
    imp: { f: ["entraînais","entraînais","entraînait","entraînions","entraîniez","entraînaient"],
            i: ["[ɑ̃.tʁɛ.nɛ]","[ɑ̃.tʁɛ.nɛ]","[ɑ̃.tʁɛ.nɛ]","[ɑ̃.tʁɛ.njɔ̃]","[ɑ̃.tʁɛ.nje]","[ɑ̃.tʁɛ.nɛ]"] },
    fut: { f: ["entraînerai","entraîneras","entraînera","entraînerons","entraînerez","entraîneront"],
            i: ["[ɑ̃.tʁɛ.nə.ʁe]","[ɑ̃.tʁɛ.nə.ʁe]","[ɑ̃.tʁɛ.nə.ʁa]","[ɑ̃.tʁɛ.nə.ʁɔ̃]","[ɑ̃.tʁɛ.nə.ʁe]","[ɑ̃.tʁɛ.nə.ʁɔ̃]"] }
  },
  note: "entraîner 既可表示「训练（队伍、运动员）」，也常表示「导致、引起」（Cela entraîne des conséquences）。",
  ex: [
    { fr: "Il entraîne l'équipe.", zh: "他训练球队。", i: "[il ɑ̃.tʁɛn l‿e.kip]" },
    { fr: "Cette erreur a entraîné des problèmes.", zh: "这个错误引发了一些问题。", i: "[sɛ.t‿ɛ.ʁœʁ a ɑ̃.tʁɛ.ne de pʁɔ.blɛm]" }
  ]
},
{
  id: "entrer", inf: "entrer", ipa: "[ɑ̃.tʁe]", zh: "进入；进来", grp: "er", aux: "avoir", part: "entré",
  tenses: {
    pres: { f: ["entre","entres","entre","entrons","entrez","entrent"],
            i: ["[ɑ̃tʁ]","[ɑ̃tʁ]","[ɑ̃tʁ]","[ɑ̃.tʁɔ̃]","[ɑ̃.tʁe]","[ɑ̃tʁ]"] },
    pc: { f: ["ai entré","as entré","a entré","avons entré","avez entré","ont entré"],
            i: ["[ʒe.t‿ɑ̃.tʁe]","[ty a.z‿ɑ̃.tʁe]","[i.la.z‿ɑ̃.tʁe]","[nu.z‿a.vɔ̃.z‿ɑ̃.tʁe]","[vu.z‿a.ve.z‿ɑ̃.tʁe]","[il.z‿ɔ̃.z‿ɑ̃.tʁe]"] },
    imp: { f: ["entrais","entrais","entrait","entrions","entriez","entraient"],
            i: ["[ɑ̃.tʁɛ]","[ɑ̃.tʁɛ]","[ɑ̃.tʁɛ]","[ɑ̃.tʁjɔ̃]","[ɑ̃.tʁje]","[ɑ̃.tʁɛ]"] },
    fut: { f: ["entrerai","entreras","entrera","entrerons","entrerez","entreront"],
            i: ["[ɑ̃.tʁə.ʁe]","[ɑ̃.tʁə.ʁe]","[ɑ̃.tʁə.ʁa]","[ɑ̃.tʁə.ʁɔ̃]","[ɑ̃.tʁə.ʁe]","[ɑ̃.tʁə.ʁɔ̃]"] }
  },
  note: "entrer 表「进入」时复合过去时常用 être（je suis entré(e)）；此处按 avoir 变位，及物义「把……放入」也用 avoir。",
  ex: [
    { fr: "Il entre dans la pièce.", zh: "他走进房间。", i: "[il ɑ̃tʁ dɑ̃ la pjɛs]" },
    { fr: "Nous avons entré les données.", zh: "我们录入了数据。", i: "[nu.z‿a.vɔ̃ ɑ̃.tʁe le dɔ.ne]" }
  ]
},
{
  id: "essayer", inf: "essayer", ipa: "[ɛ.sɛ.je]", zh: "尝试；试穿；试用", grp: "er", aux: "avoir", part: "essayé",
  tenses: {
    pres: { f: ["j'essaie","essaies","essaie","essayons","essayez","essaient"],
            i: ["[ʒɛ.sɛ]","[ɛ.sɛ]","[ɛ.sɛ]","[ɛ.sɛ.jɔ̃]","[ɛ.sɛ.je]","[ɛ.sɛ]"] },
    pc: { f: ["ai essayé","as essayé","a essayé","avons essayé","avez essayé","ont essayé"],
            i: ["[ʒe.t‿ɛ.sɛ.je]","[ty a.z‿ɛ.sɛ.je]","[i.la.z‿ɛ.sɛ.je]","[nu.z‿a.vɔ̃.z‿ɛ.sɛ.je]","[vu.z‿a.ve.z‿ɛ.sɛ.je]","[il.z‿ɔ̃.z‿ɛ.sɛ.je]"] },
    imp: { f: ["essayais","essayais","essayait","essayions","essayiez","essayaient"],
            i: ["[ɛ.sɛ.jɛ]","[ɛ.sɛ.jɛ]","[ɛ.sɛ.jɛ]","[ɛ.sɛ.jɔ̃]","[ɛ.sɛ.je]","[ɛ.sɛ.jɛ]"] },
    fut: { f: ["essayerai","essayeras","essayera","essayerons","essayerez","essayeront"],
            i: ["[ɛ.sɛ.jə.ʁe]","[ɛ.sɛ.jə.ʁe]","[ɛ.sɛ.jə.ʁa]","[ɛ.sɛ.jə.ʁɔ̃]","[ɛ.sɛ.jə.ʁe]","[ɛ.sɛ.jə.ʁɔ̃]"] }
  },
  note: "essayer 属 -ayer 类动词：单数人称及 ils 用 ai（j'essaie, tu essaies, il essaie, ils essaient），nous/vous 保留 y（nous essayons, vous essayez）；未完成过去时与将来时词干均保留 y；意为「尝试、试穿」。",
  ex: [
    { fr: "J'essaie de comprendre.", zh: "我试着去理解。", i: "[ʒɛ.sɛ də kɔ̃.pʁɑ̃dʁ]" },
    { fr: "Il a essayé la nouvelle méthode.", zh: "他试了那个新方法。", i: "[i.la.z‿ɛ.sɛ.je la nu.vɛl me.tɔd]" }
  ]
},
{
  id: "etudier", inf: "étudier", ipa: "[e.ty.dje]", zh: "学习", grp: "er", aux: "avoir", part: "étudié",
  tenses: {
    pres: { f: ["j'étudie","étudies","étudie","étudions","étudiez","étudient"],
            i: ["[ʒe.ty.di]","[e.ty.di]","[e.ty.di]","[e.ty.djɔ̃]","[e.ty.dje]","[e.ty.di]"] },
    pc: { f: ["ai étudié","as étudié","a étudié","avons étudié","avez étudié","ont étudié"],
            i: ["[ʒe.t‿e.ty.dje]","[ty a.z‿e.ty.dje]","[i.la.z‿e.ty.dje]","[nu.z‿a.vɔ̃.z‿e.ty.dje]","[vu.z‿a.ve.z‿e.ty.dje]","[il.z‿ɔ̃.z‿e.ty.dje]"] },
    imp: { f: ["étudiais","étudiais","étudiait","étudiions","étudiiez","étudiaient"],
            i: ["[e.ty.djɛ]","[e.ty.djɛ]","[e.ty.djɛ]","[e.ty.dijɔ̃]","[e.ty.dije]","[e.ty.djɛ]"] },
    fut: { f: ["étudierai","étudieras","étudiera","étudierons","étudierez","étudieront"],
            i: ["[e.ty.di.ʁe]","[e.ty.di.ʁe]","[e.ty.di.ʁa]","[e.ty.di.ʁɔ̃]","[e.ty.di.ʁe]","[e.ty.di.ʁɔ̃]"] }
  },
  note: "-yer 动词：y → i（nous / vous 除外：étudions, étudiez）。",
  ex: [
    { fr: "J'étudie le français.", zh: "我学法语。", i: "[ʒe.ty.di lə fʁɑ̃.sɛ]" },
    { fr: "Vous avez étudié la leçon ?", zh: "你们学习了这一课吗？", i: "[vu.z‿a.ve.z‿e.ty.dje la lə.sɔ̃]" }
  ]
},
{
  id: "eviter", inf: "éviter", ipa: "[e.vi.te]", zh: "避免；避开", grp: "er", aux: "avoir", part: "évité",
  tenses: {
    pres: { f: ["évite","évites","évite","évitons","évitez","évitent"],
            i: ["[e.vit]","[e.vit]","[e.vit]","[e.vi.tɔ̃]","[e.vi.te]","[e.vit]"] },
    pc: { f: ["ai évité","as évité","a évité","avons évité","avez évité","ont évité"],
            i: ["[ʒe.t‿e.vi.te]","[ty a.z‿e.vi.te]","[i.la.z‿e.vi.te]","[nu.z‿a.vɔ̃.z‿e.vi.te]","[vu.z‿a.ve.z‿e.vi.te]","[il.z‿ɔ̃.z‿e.vi.te]"] },
    imp: { f: ["évitais","évitais","évitait","évitions","évitiez","évitaient"],
            i: ["[e.vi.tɛ]","[e.vi.tɛ]","[e.vi.tɛ]","[e.vi.tjɔ̃]","[e.vi.tje]","[e.vi.tɛ]"] },
    fut: { f: ["éviterai","éviteras","évitera","éviterons","éviterez","éviteront"],
            i: ["[e.vi.tə.ʁe]","[e.vi.tə.ʁe]","[e.vi.tə.ʁa]","[e.vi.tə.ʁɔ̃]","[e.vi.tə.ʁe]","[e.vi.tə.ʁɔ̃]"] }
  },
  note: "éviter de + 动词不定式 表示「避免做某事」，如 éviter de parler 避免说话。",
  ex: [
    { fr: "Je veux éviter les embouteillages.", zh: "我想避开堵车。", i: "[ʒə vø e.vi.te le.z‿ɑ̃.bu.tɛ.jaʒ]" },
    { fr: "Elle a évité la question.", zh: "她回避了这个问题。", i: "[ɛ.la e.vi.te la kɛs.tjɔ̃]" }
  ]
},
{
  id: "excuser", inf: "excuser", ipa: "[ɛk.sky.ze]", zh: "原谅；辩解", grp: "er", aux: "avoir", part: "excusé",
  tenses: {
    pres: { f: ["excuse","excuses","excuse","excusons","excusez","excusent"],
            i: ["[ɛk.skyz]","[ɛk.skyz]","[ɛk.skyz]","[ɛk.sky.zɔ̃]","[ɛk.sky.ze]","[ɛk.skyz]"] },
    pc: { f: ["ai excusé","as excusé","a excusé","avons excusé","avez excusé","ont excusé"],
            i: ["[ʒe.t‿ɛk.sky.ze]","[ty a.z‿ɛk.sky.ze]","[i.la.z‿ɛk.sky.ze]","[nu.z‿a.vɔ̃.z‿ɛk.sky.ze]","[vu.z‿a.ve.z‿ɛk.sky.ze]","[il.z‿ɔ̃.z‿ɛk.sky.ze]"] },
    imp: { f: ["excusais","excusais","excusait","excusions","excusiez","excusaient"],
            i: ["[ɛk.sky.zɛ]","[ɛk.sky.zɛ]","[ɛk.sky.zɛ]","[ɛk.sky.zjɔ̃]","[ɛk.sky.zje]","[ɛk.sky.zɛ]"] },
    fut: { f: ["excuserai","excuseras","excusera","excuserons","excuserez","excuseront"],
            i: ["[ɛk.sky.zə.ʁe]","[ɛk.sky.zə.ʁe]","[ɛk.sky.zə.ʁa]","[ɛk.sky.zə.ʁɔ̃]","[ɛk.sky.zə.ʁe]","[ɛk.sky.zə.ʁɔ̃]"] }
  },
  note: "s'excuser 表示「道歉」；excuser quelqu'un 表示「原谅某人」，Excusez-moi 意为「对不起」。",
  ex: [
    { fr: "Excusez-moi, je suis en retard.", zh: "对不起，我迟到了。", i: "[ɛk.sky.ze mwa ʒə sɥi.z‿ɑ̃ ʁə.taʁ]" },
    { fr: "J'ai excusé son retard.", zh: "我原谅了他的迟到。", i: "[ʒe.t‿ɛk.sky.ze sɔ̃ ʁə.taʁ]" }
  ]
},
{
  id: "exister", inf: "exister", ipa: "[ɛɡ.zis.te]", zh: "存在", grp: "er", aux: "avoir", part: "existé",
  tenses: {
    pres: { f: ["existe","existes","existe","existons","existez","existent"],
            i: ["[ɛɡ.zist]","[ɛɡ.zist]","[ɛɡ.zist]","[ɛɡ.zis.tɔ̃]","[ɛɡ.zis.te]","[ɛɡ.zist]"] },
    pc: { f: ["ai existé","as existé","a existé","avons existé","avez existé","ont existé"],
            i: ["[ʒe.t‿ɛɡ.zis.te]","[ty a.z‿ɛɡ.zis.te]","[i.la.z‿ɛɡ.zis.te]","[nu.z‿a.vɔ̃.z‿ɛɡ.zis.te]","[vu.z‿a.ve.z‿ɛɡ.zis.te]","[il.z‿ɔ̃.z‿ɛɡ.zis.te]"] },
    imp: { f: ["existais","existais","existait","existions","existiez","existaient"],
            i: ["[ɛɡ.zis.tɛ]","[ɛɡ.zis.tɛ]","[ɛɡ.zis.tɛ]","[ɛɡ.zis.tjɔ̃]","[ɛɡ.zis.tje]","[ɛɡ.zis.tɛ]"] },
    fut: { f: ["existerai","existeras","existera","existerons","existerez","existeront"],
            i: ["[ɛɡ.zis.tə.ʁe]","[ɛɡ.zis.tə.ʁe]","[ɛɡ.zis.tə.ʁa]","[ɛɡ.zis.tə.ʁɔ̃]","[ɛɡ.zis.tə.ʁe]","[ɛɡ.zis.tə.ʁɔ̃]"] }
  },
  note: "exister 是不及物动词，没有被动语态：Dieu existe. 上帝存在。",
  ex: [
    { fr: "Cette solution existe déjà.", zh: "这个办法已经存在。", i: "[sɛt sɔ.ly.sjɔ̃ ɛɡ.zist de.ʒa]" },
    { fr: "De nombreux problèmes ont existé.", zh: "曾存在许多问题。", i: "[də nɔ̃.bʁø pʁɔ.blɛm.z‿ɔ̃ ɛɡ.zis.te]" }
  ]
},
{
  id: "fabriquer", inf: "fabriquer", ipa: "[fa.bʁi.ke]", zh: "制造；制作", grp: "er", aux: "avoir", part: "fabriqué",
  tenses: {
    pres: { f: ["fabrique","fabriques","fabrique","fabriquons","fabriquez","fabriquent"],
            i: ["[fa.bʁik]","[fa.bʁik]","[fa.bʁik]","[fa.bʁi.kɔ̃]","[fa.bʁi.ke]","[fa.bʁik]"] },
    pc: { f: ["ai fabriqué","as fabriqué","a fabriqué","avons fabriqué","avez fabriqué","ont fabriqué"],
            i: ["[ʒe fa.bʁi.ke]","[ty a fa.bʁi.ke]","[i.la fa.bʁi.ke]","[nu.z‿a.vɔ̃ fa.bʁi.ke]","[vu.z‿a.ve fa.bʁi.ke]","[il.z‿ɔ̃ fa.bʁi.ke]"] },
    imp: { f: ["fabriquais","fabriquais","fabriquait","fabriquions","fabriquiez","fabriquaient"],
            i: ["[fa.bʁi.kɛ]","[fa.bʁi.kɛ]","[fa.bʁi.kɛ]","[fa.bʁi.kjɔ̃]","[fa.bʁi.kje]","[fa.bʁi.kɛ]"] },
    fut: { f: ["fabriquerai","fabriqueras","fabriquera","fabriquerons","fabriquerez","fabriqueront"],
            i: ["[fa.bʁi.kə.ʁe]","[fa.bʁi.kə.ʁe]","[fa.bʁi.kə.ʁa]","[fa.bʁi.kə.ʁɔ̃]","[fa.bʁi.kə.ʁe]","[fa.bʁi.kə.ʁɔ̃]"] }
  },
  note: "-quer 动词保留 [k] 音：nous fabriquons [fa.bʁi.kɔ̃]（不读 [s]）；相关词 fabricant、fabrication。",
  ex: [
    { fr: "Je fabrique une table.", zh: "我做一张桌子。", i: "[ʒə fa.bʁik yn tabl]" },
    { fr: "Elle a fabriqué un gâteau.", zh: "她做了一个蛋糕。", i: "[ɛ.la fa.bʁi.ke œ̃ ɡa.to]" }
  ]
},
{
  id: "feter", inf: "fêter", ipa: "[fe.te]", zh: "庆祝；欢度", grp: "er", aux: "avoir", part: "fêté",
  tenses: {
    pres: { f: ["fête","fêtes","fête","fêtons","fêtez","fêtent"],
            i: ["[fɛt]","[fɛt]","[fɛt]","[fɛ.tɔ̃]","[fɛ.te]","[fɛt]"] },
    pc: { f: ["ai fêté","as fêté","a fêté","avons fêté","avez fêté","ont fêté"],
            i: ["[ʒe fɛ.te]","[ty a fɛ.te]","[i.la fɛ.te]","[nu.z‿a.vɔ̃ fɛ.te]","[vu.z‿a.ve fɛ.te]","[il.z‿ɔ̃ fɛ.te]"] },
    imp: { f: ["fêtais","fêtais","fêtait","fêtions","fêtiez","fêtaient"],
            i: ["[fɛ.tɛ]","[fɛ.tɛ]","[fɛ.tɛ]","[fɛ.tjɔ̃]","[fɛ.tje]","[fɛ.tɛ]"] },
    fut: { f: ["fêterai","fêteras","fêtera","fêterons","fêterez","fêteront"],
            i: ["[fɛ.tə.ʁe]","[fɛ.tə.ʁe]","[fɛ.tə.ʁa]","[fɛ.tə.ʁɔ̃]","[fɛ.tə.ʁe]","[fɛ.tə.ʁɔ̃]"] }
  },
  note: "fêter 表示「庆祝（节日、生日等）」，如 fêter son anniversaire 庆祝生日。",
  ex: [
    { fr: "Nous fêtons Noël.", zh: "我们庆祝圣诞节。", i: "[nu fɛ.tɔ̃ nɔ.ɛl]" },
    { fr: "Elle a fêté son anniversaire.", zh: "她庆祝了生日。", i: "[ɛ.la fɛ.te sɔ̃.n‿a.ni.vɛʁ.sɛʁ]" }
  ]
},
{
  id: "gagner", inf: "gagner", ipa: "[ɡa.ɲe]", zh: "赢得；赚取", grp: "er", aux: "avoir", part: "gagné",
  tenses: {
    pres: { f: ["gagne","gagnes","gagne","gagnons","gagnez","gagnent"],
            i: ["[ɡaɲ]","[ɡaɲ]","[ɡaɲ]","[ɡa.ɲɔ̃]","[ɡa.ɲe]","[ɡaɲ]"] },
    pc: { f: ["ai gagné","as gagné","a gagné","avons gagné","avez gagné","ont gagné"],
            i: ["[ʒe ɡa.ɲe]","[ty a ɡa.ɲe]","[i.la ɡa.ɲe]","[nu.z‿a.vɔ̃ ɡa.ɲe]","[vu.z‿a.ve ɡa.ɲe]","[il.z‿ɔ̃ ɡa.ɲe]"] },
    imp: { f: ["gagnais","gagnais","gagnait","gagnions","gagniez","gagnaient"],
            i: ["[ɡa.ɲɛ]","[ɡa.ɲɛ]","[ɡa.ɲɛ]","[ɡa.ɲjɔ̃]","[ɡa.ɲje]","[ɡa.ɲɛ]"] },
    fut: { f: ["gagnerai","gagneras","gagnera","gagnerons","gagnererez","gagneront"],
            i: ["[ɡa.ɲə.ʁe]","[ɡa.ɲə.ʁe]","[ɡa.ɲə.ʁa]","[ɡa.ɲə.ʁɔ̃]","[ɡa.ɲə.ʁe]","[ɡa.ɲə.ʁɔ̃]"] }
  },
  note: "gagner 是规则 -er 动词，gn 读 [ɲ]；gagner un match 赢比赛，gagner sa vie 谋生。",
  ex: [
    { fr: "Nous gagnons le match.", zh: "我们赢了比赛。", i: "[nu ɡa.ɲɔ̃ lə matʃ]" },
    { fr: "Il a gagné beaucoup d'argent.", zh: "他赚了很多钱。", i: "[i.la ɡa.ɲe bo.ku daʁ.ʒɑ̃]" }
  ]
},
{
  id: "habiller", inf: "habiller", ipa: "[a.bi.je]", zh: "给……穿衣", grp: "er", aux: "avoir", part: "habillé",
  tenses: {
    pres: { f: ["habille","habilles","habille","habillons","habillez","habillent"],
            i: ["[a.bij]","[a.bij]","[a.bij]","[a.bi.jɔ̃]","[a.bi.je]","[a.bij]"] },
    pc: { f: ["ai habillé","as habillé","a habillé","avons habillé","avez habillé","ont habillé"],
            i: ["[ʒe a.bi.je]","[ty a a.bi.je]","[i.la a.bi.je]","[nu.z‿a.vɔ̃.z‿a.bi.je]","[vu.z‿a.ve.z‿a.bi.je]","[il.z‿ɔ̃.z‿a.bi.je]"] },
    imp: { f: ["habillais","habillais","habillait","habillions","habilliez","habillaient"],
            i: ["[a.bi.jɛ]","[a.bi.jɛ]","[a.bi.jɛ]","[a.bi.jɔ̃]","[a.bi.je]","[a.bi.jɛ]"] },
    fut: { f: ["habillerai","habilleras","habillera","habillerons","habillerez","habilleront"],
            i: ["[a.bi.jə.ʁe]","[a.bi.jə.ʁe]","[a.bi.jə.ʁa]","[a.bi.jə.ʁɔ̃]","[a.bi.jə.ʁe]","[a.bi.jə.ʁɔ̃]"] }
  },
  note: "s'habiller 表示「给自己穿衣服」；habiller quelqu'un 表示「给某人穿衣服」。",
  ex: [
    { fr: "Je m'habille vite.", zh: "我很快穿好衣服。", i: "[ʒə m‿a.bij vit]" },
    { fr: "Elle a habillé l'enfant.", zh: "她给孩子穿好了衣服。", i: "[ɛ.la a.bi.je lɑ̃.fɑ̃]" }
  ]
},
{
  id: "habiter", inf: "habiter", ipa: "[a.bi.te]", zh: "居住", grp: "er", aux: "avoir", part: "habité",
  tenses: {
    pres: { f: ["habite","habites","habite","habitons","habitez","habitent"],
            i: ["[a.bit]","[a.bit]","[a.bit]","[a.bi.tɔ̃]","[a.bi.te]","[a.bit]"] },
    pc: { f: ["ai habité","as habité","a habité","avons habité","avez habité","ont habité"],
            i: ["[ʒe a.bi.te]","[ty a a.bi.te]","[i.la a.bi.te]","[nu.z‿a.vɔ̃.z‿a.bi.te]","[vu.z‿a.ve.z‿a.bi.te]","[il.z‿ɔ̃.z‿a.bi.te]"] },
    imp: { f: ["habitais","habitais","habitait","habitions","habitiez","habitaient"],
            i: ["[a.bi.tɛ]","[a.bi.tɛ]","[a.bi.tɛ]","[a.bi.tjɔ̃]","[a.bi.tje]","[a.bi.tɛ]"] },
    fut: { f: ["habiterai","habiteras","habitera","habiterons","habiterez","habiteront"],
            i: ["[a.bi.tə.ʁe]","[a.bi.tə.ʁe]","[a.bi.tə.ʁa]","[a.bi.tə.ʁɔ̃]","[a.bi.tə.ʁe]","[a.bi.tə.ʁɔ̃]"] }
  },
  note: "表示「住在某地」用 habiter + 城市（不住在……用 sans 或 loin de）。",
  ex: [
    { fr: "J'habite à Paris.", zh: "我住在巴黎。", i: "[ʒa.bit a pa.ʁi]" },
    { fr: "Nous avons habité à Lyon.", zh: "我们曾在里昂住过。", i: "[nu.z‿a.vɔ̃.z‿a.bi.te a ljɔ̃]" }
  ]
},
{
  id: "heurter", inf: "heurter", ipa: "[œʁ.te]", zh: "撞；碰", grp: "er", aux: "avoir", part: "heurté",
  tenses: {
    pres: { f: ["heurte","heurtes","heurte","heurtons","heurtez","heurtent"],
            i: ["[œʁt]","[œʁt]","[œʁt]","[œʁ.tɔ̃]","[œʁ.te]","[œʁt]"] },
    pc: { f: ["ai heurté","as heurté","a heurté","avons heurté","avez heurté","ont heurté"],
            i: ["[ʒe.t‿œʁ.te]","[ty a.z‿œʁ.te]","[i.la.z‿œʁ.te]","[nu.z‿a.vɔ̃.z‿œʁ.te]","[vu.z‿a.ve.z‿œʁ.te]","[il.z‿ɔ̃.z‿œʁ.te]"] },
    imp: { f: ["heurtais","heurtais","heurtait","heurtions","heurtiez","heurtaient"],
            i: ["[œʁ.tɛ]","[œʁ.tɛ]","[œʁ.tɛ]","[œʁ.tjɔ̃]","[œʁ.tje]","[œʁ.tɛ]"] },
    fut: { f: ["heurterai","heurteras","heurtera","heurterons","heurterez","heurteront"],
            i: ["[œʁ.tə.ʁe]","[œʁ.tə.ʁe]","[œʁ.tə.ʁa]","[œʁ.tə.ʁɔ̃]","[œʁ.tə.ʁe]","[œʁ.tə.ʁɔ̃]"] }
  },
  note: "heurter 表「撞击、碰撞」，如 heurter la porte 撞门；过去分词 heurté 以元音 œ 开头，复合过去时要联诵。",
  ex: [
    { fr: "Il a heurté un arbre.", zh: "他撞到了一棵树。", i: "[i.la.z‿œʁ.te œ̃ ɑʁbʁ]" },
    { fr: "Je me suis heurté le genou.", zh: "我撞到了膝盖。", i: "[ʒə mə sɥi.z‿œʁ.te lə ʒə.nu]" }
  ]
},
{
  id: "imaginer", inf: "imaginer", ipa: "[i.ma.ʒi.ne]", zh: "想象；设想", grp: "er", aux: "avoir", part: "imaginé",
  tenses: {
    pres: { f: ["imagine","imagines","imagine","imaginons","imaginez","imaginent"],
            i: ["[i.ma.ʒin]","[i.ma.ʒin]","[i.ma.ʒin]","[i.ma.ʒi.nɔ̃]","[i.ma.ʒi.ne]","[i.ma.ʒin]"] },
    pc: { f: ["ai imaginé","as imaginé","a imaginé","avons imaginé","avez imaginé","ont imaginé"],
            i: ["[ʒe.t‿i.ma.ʒi.ne]","[ty a.z‿i.ma.ʒi.ne]","[i.la.z‿i.ma.ʒi.ne]","[nu.z‿a.vɔ̃.z‿i.ma.ʒi.ne]","[vu.z‿a.ve.z‿i.ma.ʒi.ne]","[il.z‿ɔ̃.z‿i.ma.ʒi.ne]"] },
    imp: { f: ["imaginais","imaginais","imaginait","imaginions","imaginiez","imaginaient"],
            i: ["[i.ma.ʒi.nɛ]","[i.ma.ʒi.nɛ]","[i.ma.ʒi.nɛ]","[i.ma.ʒi.njɔ̃]","[i.ma.ʒi.nje]","[i.ma.ʒi.nɛ]"] },
    fut: { f: ["imaginerai","imagineras","imaginera","imaginerons","imaginerez","imagineront"],
            i: ["[i.ma.ʒi.nə.ʁe]","[i.ma.ʒi.nə.ʁe]","[i.ma.ʒi.nə.ʁa]","[i.ma.ʒi.nə.ʁɔ̃]","[i.ma.ʒi.nə.ʁe]","[i.ma.ʒi.nə.ʁɔ̃]"] }
  },
  note: "imaginer 表示「想象」，可接名词或 que 引导的从句：J'imagine qu'il vient. 我想象他会来。",
  ex: [
    { fr: "J'imagine la scène.", zh: "我想象那个场景。", i: "[ʒi.ma.ʒin la sɛn]" },
    { fr: "Elle a imaginé une histoire.", zh: "她想象出一个故事。", i: "[ɛ.la i.ma.ʒi.ne yn is.twaʁ]" }
  ]
},
{
  id: "inquiéter", inf: "inquiéter", ipa: "[ɛ̃.kje.te]", zh: "使担心；担忧（s'inquiéter）", grp: "er", aux: "etre", part: "inquiété",
  tenses: {
    pres: { f: ["je m'inquiète","tu t'inquiètes","il s'inquiète","nous nous inquiétons","vous vous inquiétez","ils s'inquiètent"],
            i: ["[ʒə m‿ɛ̃.kjɛt]","[ty t‿ɛ̃.kjɛt]","[il s‿ɛ̃.kjɛt]","[nu nu.z‿ɛ̃.kje.tɔ̃]","[vu vu.z‿ɛ̃.kje.te]","[il s‿ɛ̃.kjɛt]"] },
    pc: { f: ["suis inquiété(e)","es inquiété(e)","est inquiété(e)","sommes inquiété(e)s","êtes inquiété(e)s","sont inquiété(e)s"],
            i: ["[sɥi.z‿ɛ̃.kje.te]","[ɛ.z‿ɛ̃.kje.te]","[ɛ.t‿ɛ̃.kje.te]","[sɔm.z‿ɛ̃.kje.te]","[ɛt.z‿ɛ̃.kje.te]","[sɔ̃.z‿ɛ̃.kje.te]"] },
    imp: { f: ["inquiétais","inquiétais","inquiétait","inquiétions","inquiétiez","inquiétaient"],
            i: ["[ɛ̃.kje.tɛ]","[ɛ̃.kje.tɛ]","[ɛ̃.kje.tɛ]","[ɛ̃.kje.tjɔ̃]","[ɛ̃.kje.tje]","[ɛ̃.kje.tɛ]"] },
    fut: { f: ["inquiéterai","inquiéteras","inquiétera","inquiéterons","inquiéterez","inquiéteront"],
            i: ["[ɛ̃.kje.tə.ʁe]","[ɛ̃.kje.tə.ʁe]","[ɛ̃.kje.tə.ʁa]","[ɛ̃.kje.tə.ʁɔ̃]","[ɛ̃.kje.tə.ʁe]","[ɛ̃.kje.tə.ʁɔ̃]"] }
  },
  note: "s'inquiéter 是代词式动词（se + inquiéter），意为「担心、担忧」；变位同 -éter 类：单数 é→è（il s'inquiète），nous/vous 保留 é（nous nous inquiétons）；复合过去时用 être 并与主语性数配合：je me suis inquiété(e)。",
  ex: [
    { fr: "Je m'inquiète pour toi.", zh: "我为你担心。", i: "[ʒə m‿ɛ̃.kjɛt puʁ twa]" },
    { fr: "Elle s'est inquiétée de son fils.", zh: "她为儿子担心了。", i: "[ɛ.la sɛ.t‿ɛ̃.kje.te də sɔ̃ fis]" }
  ]
},
{
  id: "installer", inf: "installer", ipa: "[ɛ̃s.ta.le]", zh: "安装；安置；任命", grp: "er", aux: "avoir", part: "installé",
  tenses: {
    pres: { f: ["j'installe","installes","installe","installons","installez","installent"],
            i: ["[ʒɛ̃s.tal]","[ɛ̃s.tal]","[ɛ̃s.tal]","[ɛ̃s.ta.lɔ̃]","[ɛ̃s.ta.le]","[ɛ̃s.tal]"] },
    pc: { f: ["ai installé","as installé","a installé","avons installé","avez installé","ont installé"],
            i: ["[ʒe.t‿ɛ̃s.ta.le]","[ty a.z‿ɛ̃s.ta.le]","[i.la.z‿ɛ̃s.ta.le]","[nu.z‿a.vɔ̃.z‿ɛ̃s.ta.le]","[vu.z‿a.ve.z‿ɛ̃s.ta.le]","[il.z‿ɔ̃.z‿ɛ̃s.ta.le]"] },
    imp: { f: ["installais","installais","installait","installions","installiez","installaient"],
            i: ["[ɛ̃s.ta.lɛ]","[ɛ̃s.ta.lɛ]","[ɛ̃s.ta.lɛ]","[ɛ̃s.ta.ljɔ̃]","[ɛ̃s.ta.lje]","[ɛ̃s.ta.lɛ]"] },
    fut: { f: ["installerai","installeras","installera","installerons","installerez","installeront"],
            i: ["[ɛ̃s.ta.lə.ʁe]","[ɛ̃s.ta.lə.ʁe]","[ɛ̃s.ta.lə.ʁa]","[ɛ̃s.ta.lə.ʁɔ̃]","[ɛ̃s.ta.lə.ʁe]","[ɛ̃s.ta.lə.ʁɔ̃]"] }
  },
  note: "installer 是规则 -er 动词，变位同 aimer；因词首为元音，je 形式写作 j'installe [ʒɛ̃s.tal]。常用 installer qch 安装某物、installer qqn 安置某人。",
  ex: [
    { fr: "J'installe le logiciel.", zh: "我安装软件。", i: "[ʒɛ̃s.tal lə lɔ.ʒi.sjɛl]" },
    { fr: "Ils ont installé la caméra.", zh: "他们装好了摄像机。", i: "[il.z‿ɔ̃.z‿ɛ̃s.ta.le la ka.me.ʁa]" }
  ]
},
{
  id: "inviter", inf: "inviter", ipa: "[ɛ̃.vi.te]", zh: "邀请", grp: "er", aux: "avoir", part: "invité",
  tenses: {
    pres: { f: ["invite","invites","invite","invitons","invitez","invitent"],
            i: ["[ɛ̃.vit]","[ɛ̃.vit]","[ɛ̃.vit]","[ɛ̃.vi.tɔ̃]","[ɛ̃.vi.te]","[ɛ̃.vit]"] },
    pc: { f: ["ai invité","as invité","a invité","avons invité","avez invité","ont invité"],
            i: ["[ʒe.t‿ɛ̃.vi.te]","[ty a.z‿ɛ̃.vi.te]","[i.la.z‿ɛ̃.vi.te]","[nu.z‿a.vɔ̃.z‿ɛ̃.vi.te]","[vu.z‿a.ve.z‿ɛ̃.vi.te]","[il.z‿ɔ̃.z‿ɛ̃.vi.te]"] },
    imp: { f: ["invitais","invitais","invitait","invitions","invitiez","invitaient"],
            i: ["[ɛ̃.vi.tɛ]","[ɛ̃.vi.tɛ]","[ɛ̃.vi.tɛ]","[ɛ̃.vi.tjɔ̃]","[ɛ̃.vi.tje]","[ɛ̃.vi.tɛ]"] },
    fut: { f: ["inviterai","inviteras","invitera","inviterons","inviterez","inviteront"],
            i: ["[ɛ̃.vi.tə.ʁe]","[ɛ̃.vi.tə.ʁe]","[ɛ̃.vi.tə.ʁa]","[ɛ̃.vi.tə.ʁɔ̃]","[ɛ̃.vi.tə.ʁe]","[ɛ̃.vi.tə.ʁɔ̃]"] }
  },
  note: "inviter quelqu'un à + 活动 表示「邀请某人参加」，如 inviter un ami au dîner 邀请朋友吃晚饭。",
  ex: [
    { fr: "Je t'invite au cinéma.", zh: "我请你看电影。", i: "[ʒɛ̃.vit o si.ne.ma]" },
    { fr: "Nous avons invité des amis.", zh: "我们邀请了一些朋友。", i: "[nu.z‿a.vɔ̃ ɛ̃.vi.te de.z‿ami]" }
  ]
},
{
  id: "jouer", inf: "jouer", ipa: "[ʒwe]", zh: "玩；演奏", grp: "er", aux: "avoir", part: "joué",
  tenses: {
    pres: { f: ["joue","joues","joue","jouons","jouez","jouent"],
            i: ["[ʒu]","[ʒu]","[ʒu]","[ʒu.ɔ̃]","[ʒu.e]","[ʒu]"] },
    pc: { f: ["ai joué","as joué","a joué","avons joué","avez joué","ont joué"],
            i: ["[ʒe ʒu.e]","[ty a ʒu.e]","[i.la ʒu.e]","[nu.z‿a.vɔ̃ ʒu.e]","[vu.z‿a.ve ʒu.e]","[il.z‿ɔ̃ ʒu.e]"] },
    imp: { f: ["jouais","jouais","jouait","jouions","jouiez","jouaient"],
            i: ["[ʒu.ɛ]","[ʒu.ɛ]","[ʒu.ɛ]","[ʒu.jɔ̃]","[ʒu.je]","[ʒu.ɛ]"] },
    fut: { f: ["jouerai","joueras","jouera","jouerons","jouerez","joueront"],
            i: ["[ʒu.ʁe]","[ʒu.ʁe]","[ʒu.ʁa]","[ʒu.ʁɔ̃]","[ʒu.ʁe]","[ʒu.ʁɔ̃]"] }
  },
  note: "jouer à 玩（球类）；jouer de 演奏（乐器）。nous jouons 词干不变。",
  ex: [
    { fr: "Je joue au foot.", zh: "我踢足球。", i: "[ʒə ʒu o fut]" },
    { fr: "Les enfants ont joué au parc.", zh: "孩子们在公园玩了。", i: "[le.z‿ɑ̃.fɑ̃.z‿ɔ̃ ʒu.e o paʁk]" }
  ]
},
{
  id: "laisser", inf: "laisser", ipa: "[lɛ.se]", zh: "留下；让；放开", grp: "er", aux: "avoir", part: "laissé",
  tenses: {
    pres: { f: ["laisse","laisses","laisse","laissons","laissez","laissent"],
            i: ["[lɛs]","[lɛs]","[lɛs]","[lɛ.sɔ̃]","[lɛ.se]","[lɛs]"] },
    pc: { f: ["ai laissé","as laissé","a laissé","avons laissé","avez laissé","ont laissé"],
            i: ["[ʒe lɛ.se]","[ty a lɛ.se]","[i.la lɛ.se]","[nu.z‿a.vɔ̃ lɛ.se]","[vu.z‿a.ve lɛ.se]","[il.z‿ɔ̃ lɛ.se]"] },
    imp: { f: ["laissais","laissais","laissait","laissions","laissiez","laissaient"],
            i: ["[lɛ.sɛ]","[lɛ.sɛ]","[lɛ.sɛ]","[lɛ.sjɔ̃]","[lɛ.sje]","[lɛ.sɛ]"] },
    fut: { f: ["laisserai","laisseras","laissera","laisserons","laisserez","laisseront"],
            i: ["[lɛ.sə.ʁe]","[lɛ.sə.ʁe]","[lɛ.sə.ʁa]","[lɛ.sə.ʁɔ̃]","[lɛ.sə.ʁe]","[lɛ.sə.ʁɔ̃]"] }
  },
  note: "laisser + 宾语 + 动词不定式 表示「让某人做某事」；laisser tomber 意为「放弃、算了」。",
  ex: [
    { fr: "Laisse-moi t'aider.", zh: "让我帮你。", i: "[lɛs.mwa t‿e.de]" },
    { fr: "Elle a laissé la porte ouverte.", zh: "她把门开着。", i: "[ɛ.la lɛ.se la pɔʁt u.vɛʁt]" }
  ]
},
{
  id: "laver", inf: "laver", ipa: "[la.ve]", zh: "洗；洗涤", grp: "er", aux: "avoir", part: "lavé",
  tenses: {
    pres: { f: ["lave","laves","lave","lavons","lavez","lavent"],
            i: ["[lav]","[lav]","[lav]","[la.vɔ̃]","[la.ve]","[lav]"] },
    pc: { f: ["ai lavé","as lavé","a lavé","avons lavé","avez lavé","ont lavé"],
            i: ["[ʒe la.ve]","[ty a la.ve]","[i.la la.ve]","[nu.z‿a.vɔ̃ la.ve]","[vu.z‿a.ve la.ve]","[il.z‿ɔ̃ la.ve]"] },
    imp: { f: ["lavais","lavais","lavait","lavions","laviez","lavaient"],
            i: ["[la.vɛ]","[la.vɛ]","[la.vɛ]","[la.vjɔ̃]","[la.vje]","[la.vɛ]"] },
    fut: { f: ["laverai","laveras","lavera","laverons","laverez","laveront"],
            i: ["[la.və.ʁe]","[la.və.ʁe]","[la.və.ʁa]","[la.və.ʁɔ̃]","[la.və.ʁe]","[la.və.ʁɔ̃]"] }
  },
  note: "se laver 表示「洗脸、洗澡」，如 se laver les mains 洗手；laver la voiture 洗车。",
  ex: [
    { fr: "Je me lave les mains.", zh: "我洗手。", i: "[ʒə mə lav le mɛ̃]" },
    { fr: "Elle a lavé la voiture.", zh: "她洗了车。", i: "[ɛ.la la.ve la vwa.tyʁ]" }
  ]
},
{
  id: "lever", inf: "lever", ipa: "[lə.ve]", zh: "举起；抬起；起床", grp: "er", aux: "avoir", part: "levé",
  tenses: {
    pres: { f: ["lève","lèves","lève","levons","levez","lèvent"],
            i: ["[lɛv]","[lɛv]","[lɛv]","[lə.vɔ̃]","[lə.ve]","[lɛv]"] },
    pc: { f: ["ai levé","as levé","a levé","avons levé","avez levé","ont levé"],
            i: ["[ʒe lə.ve]","[ty a lə.ve]","[i.la lə.ve]","[nu.z‿a.vɔ̃ lə.ve]","[vu.z‿a.ve lə.ve]","[il.z‿ɔ̃ lə.ve]"] },
    imp: { f: ["levais","levais","levait","levions","leviez","levaient"],
            i: ["[lə.vɛ]","[lə.vɛ]","[lə.vɛ]","[lə.vjɔ̃]","[lə.vje]","[lə.vɛ]"] },
    fut: { f: ["lèverai","lèveras","lèvera","lèverons","lèverez","lèveront"],
            i: ["[lɛ.və.ʁe]","[lɛ.və.ʁe]","[lɛ.və.ʁa]","[lɛ.və.ʁɔ̃]","[lɛ.və.ʁe]","[lɛ.və.ʁɔ̃]"] }
  },
  note: "lever 有 é→è 交替：je lève / nous levons；简单将来时同样变 è，写作 lèverai。se lever 表示「起床」。",
  ex: [
    { fr: "Je me lève à sept heures.", zh: "我七点起床。", i: "[ʒə mə lɛv a sɛ.t‿œʁ]" },
    { fr: "Elle a levé la main.", zh: "她举起了手。", i: "[ɛ.la lə.ve la mɛ̃]" }
  ]
},
{
  id: "louer", inf: "louer", ipa: "[lwe]", zh: "租；租用；赞美", grp: "er", aux: "avoir", part: "loué",
  tenses: {
    pres: { f: ["loue","loues","loue","louons","louez","louent"],
            i: ["[lu]","[lu]","[lu]","[lu.ɔ̃]","[lu.e]","[lu]"] },
    pc: { f: ["ai loué","as loué","a loué","avons loué","avez loué","ont loué"],
            i: ["[ʒe lu.e]","[ty a lu.e]","[i.la lu.e]","[nu.z‿a.vɔ̃ lu.e]","[vu.z‿a.ve lu.e]","[il.z‿ɔ̃ lu.e]"] },
    imp: { f: ["louais","louais","louait","louions","louiez","louaient"],
            i: ["[lu.ɛ]","[lu.ɛ]","[lu.ɛ]","[lu.jɔ̃]","[lu.je]","[lu.ɛ]"] },
    fut: { f: ["louerai","loueras","louera","louerons","louerez","loueront"],
            i: ["[lu.ə.ʁe]","[lu.ə.ʁe]","[lu.ə.ʁa]","[lu.ə.ʁɔ̃]","[lu.ə.ʁe]","[lu.ə.ʁɔ̃]"] }
  },
  note: "louer 既可表示「租借」（louer un appartement 租公寓），也可表示「赞美、称颂」。",
  ex: [
    { fr: "Je loue un appartement.", zh: "我租了一套公寓。", i: "[ʒə lu œ̃.n‿a.paʁ.tə.mɑ̃]" },
    { fr: "Elle a loué une voiture.", zh: "她租了一辆车。", i: "[ɛ.la lu.e yn vwa.tyʁ]" }
  ]
},
{
  id: "manger", inf: "manger", ipa: "[mɑ̃.ʒe]", zh: "吃", grp: "er", aux: "avoir", part: "mangé",
  tenses: {
    pres: { f: ["mange","manges","mange","mangeons","mangez","mangent"],
            i: ["[mɑ̃ʒ]","[mɑ̃ʒ]","[mɑ̃ʒ]","[mɑ̃.ʒɔ̃]","[mɑ̃.ʒe]","[mɑ̃ʒ]"] },
    pc: { f: ["ai mangé","as mangé","a mangé","avons mangé","avez mangé","ont mangé"],
            i: ["[ʒe mɑ̃.ʒe]","[ty a mɑ̃.ʒe]","[i.la mɑ̃.ʒe]","[nu.z‿a.vɔ̃ mɑ̃.ʒe]","[vu.z‿a.ve mɑ̃.ʒe]","[il.z‿ɔ̃ mɑ̃.ʒe]"] },
    imp: { f: ["mangeais","mangeais","mangeait","mangions","mangiez","mangeaient"],
            i: ["[mɑ̃.ʒɛ]","[mɑ̃.ʒɛ]","[mɑ̃.ʒɛ]","[mɑ̃.ʒjɔ̃]","[mɑ̃.ʒje]","[mɑ̃.ʒɛ]"] },
    fut: { f: ["mangerai","mangeras","mangera","mangerons","mangerez","mangeront"],
            i: ["[mɑ̃.ʒə.ʁe]","[mɑ̃.ʒə.ʁe]","[mɑ̃.ʒə.ʁa]","[mɑ̃.ʒə.ʁɔ̃]","[mɑ̃.ʒə.ʁe]","[mɑ̃.ʒə.ʁɔ̃]"] }
  },
  note: "-ger 结尾：nous 形式写作 mangeons（加 e 保 [ʒ] 软音，否则会读 [ɡ]）。",
  ex: [
    { fr: "Je mange une pomme.", zh: "我吃一个苹果。", i: "[ʒə mɑ̃.ʒy.nə pɔm]" },
    { fr: "Nous avons mangé au restaurant.", zh: "我们在餐馆吃了饭。", i: "[nu.z‿a.vɔ̃ mɑ̃.ʒe o ʁɛs.to.ʁɑ̃]" }
  ]
},
{
  id: "marcher", inf: "marcher", ipa: "[maʁ.ʃe]", zh: "走；步行；运转", grp: "er", aux: "avoir", part: "marché",
  tenses: {
    pres: { f: ["marche","marches","marche","marchons","marchez","marchent"],
            i: ["[maʁʃ]","[maʁʃ]","[maʁʃ]","[maʁ.ʃɔ̃]","[maʁ.ʃe]","[maʁʃ]"] },
    pc: { f: ["ai marché","as marché","a marché","avons marché","avez marché","ont marché"],
            i: ["[ʒe maʁ.ʃe]","[ty a maʁ.ʃe]","[i.la maʁ.ʃe]","[nu.z‿a.vɔ̃ maʁ.ʃe]","[vu.z‿a.ve maʁ.ʃe]","[il.z‿ɔ̃ maʁ.ʃe]"] },
    imp: { f: ["marchais","marchais","marchait","marchions","marchiez","marchaient"],
            i: ["[maʁ.ʃɛ]","[maʁ.ʃɛ]","[maʁ.ʃɛ]","[maʁ.ʃjɔ̃]","[maʁ.ʃje]","[maʁ.ʃɛ]"] },
    fut: { f: ["marcherai","marcheras","marchera","marcherons","marcherez","marcheront"],
            i: ["[maʁ.ʃə.ʁe]","[maʁ.ʃə.ʁe]","[maʁ.ʃə.ʁa]","[maʁ.ʃə.ʁɔ̃]","[maʁ.ʃə.ʁe]","[maʁ.ʃə.ʁɔ̃]"] }
  },
  note: "marcher 表示「步行、走路」，口语中也表示「行得通、运转正常」：Ça marche. 行得通。",
  ex: [
    { fr: "Je marche au travail.", zh: "我步行上班。", i: "[ʒə maʁʃ o tʁa.vaj]" },
    { fr: "Nous avons marché deux heures.", zh: "我们走了两个小时。", i: "[nu.z‿a.vɔ̃ maʁ.ʃe dø.z‿œʁ]" }
  ]
},
{
  id: "marier", inf: "marier", ipa: "[ma.ʁje]", zh: "结婚；嫁娶", grp: "er", aux: "etre", part: "marié",
  tenses: {
    pres: { f: ["marie","maries","marie","marions","mariez","marient"],
            i: ["[ma.ʁi]","[ma.ʁi]","[ma.ʁi]","[ma.ʁjɔ̃]","[ma.ʁje]","[ma.ʁi]"] },
    pc: { f: ["suis marié(e)","es marié(e)","est marié(e)","sommes marié(e)s","êtes marié(e)s","sont marié(e)s"],
            i: ["[sɥi.z‿ma.ʁje]","[ɛ.z‿ma.ʁje]","[ɛ.t‿ma.ʁje]","[sɔm.z‿ma.ʁje]","[ɛt.z‿ma.ʁje]","[sɔ̃.z‿ma.ʁje]"] },
    imp: { f: ["mariais","mariais","mariait","mariions","mariiez","mariaient"],
            i: ["[ma.ʁjɛ]","[ma.ʁjɛ]","[ma.ʁjɛ]","[ma.ʁi.jɔ̃]","[ma.ʁi.je]","[ma.ʁjɛ]"] },
    fut: { f: ["marierai","marieras","mariera","marierons","marierez","marieront"],
            i: ["[ma.ʁjə.ʁe]","[ma.ʁjə.ʁe]","[ma.ʁjə.ʁa]","[ma.ʁjə.ʁɔ̃]","[ma.ʁjə.ʁe]","[ma.ʁjə.ʁɔ̃]"] }
  },
  note: "se marier 结婚（代词式动词：se + marier）；复合过去时用 être 并性数配合：je me suis marié(e)；marier qqn 指为某人主持婚礼。",
  ex: [
    { fr: "Je me marie demain.", zh: "我明天结婚。", i: "[ʒə mə ma.ʁi də.mɛ̃]" },
    { fr: "Elle s'est mariée avec un médecin.", zh: "她和一位医生结婚了。", i: "[ɛ.la sɛ.t‿ma.ʁje a.vɛk œ̃ med.sɛ̃]" }
  ]
},
{
  id: "monter", inf: "monter", ipa: "[mɔ̃.te]", zh: "上去；爬；搬运", grp: "er", aux: "avoir", part: "monté",
  tenses: {
    pres: { f: ["monte","montes","monte","montons","montez","montent"],
            i: ["[mɔ̃t]","[mɔ̃t]","[mɔ̃t]","[mɔ̃.tɔ̃]","[mɔ̃.te]","[mɔ̃t]"] },
    pc: { f: ["ai monté","as monté","a monté","avons monté","avez monté","ont monté"],
            i: ["[ʒe mɔ̃.te]","[ty a mɔ̃.te]","[i.la mɔ̃.te]","[nu.z‿a.vɔ̃ mɔ̃.te]","[vu.z‿a.ve mɔ̃.te]","[il.z‿ɔ̃ mɔ̃.te]"] },
    imp: { f: ["montais","montais","montait","montions","montiez","montaient"],
            i: ["[mɔ̃.tɛ]","[mɔ̃.tɛ]","[mɔ̃.tɛ]","[mɔ̃.tjɔ̃]","[mɔ̃.tje]","[mɔ̃.tɛ]"] },
    fut: { f: ["monterai","monteras","montera","monterons","monterez","monteront"],
            i: ["[mɔ̃.tə.ʁe]","[mɔ̃.tə.ʁe]","[mɔ̃.tə.ʁa]","[mɔ̃.tə.ʁɔ̃]","[mɔ̃.tə.ʁe]","[mɔ̃.tə.ʁɔ̃]"] }
  },
  note: "monter 表「上去」时复合过去时常用 être（je suis monté(e)）；表「搬运、攀登」等及物义用 avoir（j'ai monté les valises），此处按 avoir 变位。",
  ex: [
    { fr: "Il monte l'escalier.", zh: "他上楼梯。", i: "[il mɔ̃t l‿ɛs.ka.lje]" },
    { fr: "Elle a monté les valises.", zh: "她把行李搬上去了。", i: "[ɛ.la mɔ̃.te le va.liz]" }
  ]
},
{
  id: "nager", inf: "nager", ipa: "[na.ʒe]", zh: "游泳", grp: "er", aux: "avoir", part: "nagé",
  tenses: {
    pres: { f: ["nage","nages","nage","nageons","nagez","nagent"],
            i: ["[naʒ]","[naʒ]","[naʒ]","[na.ʒɔ̃]","[na.ʒe]","[naʒ]"] },
    pc: { f: ["ai nagé","as nagé","a nagé","avons nagé","avez nagé","ont nagé"],
            i: ["[ʒe na.ʒe]","[ty a na.ʒe]","[i.la na.ʒe]","[nu.z‿a.vɔ̃ na.ʒe]","[vu.z‿a.ve na.ʒe]","[il.z‿ɔ̃ na.ʒe]"] },
    imp: { f: ["nageais","nageais","nageait","nagions","nagiez","nageaient"],
            i: ["[na.ʒɛ]","[na.ʒɛ]","[na.ʒɛ]","[na.ʒjɔ̃]","[na.ʒje]","[na.ʒɛ]"] },
    fut: { f: ["nagerai","nageras","nagera","nagerons","nagerez","nageront"],
            i: ["[na.ʒə.ʁe]","[na.ʒə.ʁe]","[na.ʒə.ʁa]","[na.ʒə.ʁɔ̃]","[na.ʒə.ʁe]","[na.ʒə.ʁɔ̃]"] }
  },
  note: "-ger 结尾：nous 形式写作 nageons（加 e 保 [ʒ] 软音，否则会读 [ɡ]）；与其他 -er 动词变位规律相同。",
  ex: [
    { fr: "Je nage dans la mer.", zh: "我在海里游泳。", i: "[ʒə naʒ dɑ̃ la mɛʁ]" },
    { fr: "Nous avons nagé toute la journée.", zh: "我们游了一整天泳。", i: "[nu.z‿a.vɔ̃ na.ʒe tut la ʒuʁ.ne]" }
  ]
},
{
  id: "parler", inf: "parler", ipa: "[paʁ.le]", zh: "说；讲话", grp: "er", aux: "avoir", part: "parlé",
  tenses: {
    pres: { f: ["parle","parles","parle","parlons","parlez","parlent"],
            i: ["[paʁl]","[paʁl]","[paʁl]","[paʁ.lɔ̃]","[paʁ.le]","[paʁl]"] },
    pc: { f: ["ai parlé","as parlé","a parlé","avons parlé","avez parlé","ont parlé"],
            i: ["[ʒe paʁ.le]","[ty a paʁ.le]","[i.la paʁ.le]","[nu.z‿a.vɔ̃ paʁ.le]","[vu.z‿a.ve paʁ.le]","[il.z‿ɔ̃ paʁ.le]"] },
    imp: { f: ["parlais","parlais","parlait","parlions","parliez","parlaient"],
            i: ["[paʁ.lɛ]","[paʁ.lɛ]","[paʁ.lɛ]","[paʁ.li.jɔ̃]","[paʁ.li.je]","[paʁ.lɛ]"] },
    fut: { f: ["parlerai","parleras","parlera","parlerons","parlerez","parleront"],
            i: ["[paʁ.lə.ʁe]","[paʁ.lə.ʁe]","[paʁ.lə.ʁa]","[paʁ.lə.ʁɔ̃]","[paʁ.lə.ʁe]","[paʁ.lə.ʁɔ̃]"] }
  },
  note: "第一组动词：现在时 = 词干 parler- 去 -er 加 -e, -es, -e, -ons, -ez, -ent；je parle 不写 je parles。",
  ex: [
    { fr: "Je parle français avec Paul.", zh: "我和保罗讲法语。", i: "[ʒə paʁl fʁɑ̃.sɛ a.vɛk pɔl]" },
    { fr: "J'ai parlé au téléphone.", zh: "我打了电话。", i: "[ʒe paʁ.le o te.le.fɔn]" }
  ]
},
{
  id: "passer", inf: "passer", ipa: "[pa.se]", zh: "经过；通过；度过", grp: "er", aux: "avoir", part: "passé",
  tenses: {
    pres: { f: ["passe","passes","passe","passons","passez","passent"],
            i: ["[pas]","[pas]","[pas]","[pa.sɔ̃]","[pa.se]","[pas]"] },
    pc: { f: ["ai passé","as passé","a passé","avons passé","avez passé","ont passé"],
            i: ["[ʒe pa.se]","[ty a pa.se]","[i.la pa.se]","[nu.z‿a.vɔ̃ pa.se]","[vu.z‿a.ve pa.se]","[il.z‿ɔ̃ pa.se]"] },
    imp: { f: ["passais","passais","passait","passions","passiez","passaient"],
            i: ["[pa.sɛ]","[pa.sɛ]","[pa.sɛ]","[pa.sjɔ̃]","[pa.sje]","[pa.sɛ]"] },
    fut: { f: ["passerai","passeras","passera","passerons","passerez","passeront"],
            i: ["[pa.sə.ʁe]","[pa.sə.ʁe]","[pa.sə.ʁa]","[pa.sə.ʁɔ̃]","[pa.sə.ʁe]","[pa.sə.ʁɔ̃]"] }
  },
  note: "passer 既可作不及物「经过」，也可作及物「通过（考试）、度过（时间）」；复合过去时用 avoir。",
  ex: [
    { fr: "Je passe devant la maison.", zh: "我从那座房子前经过。", i: "[ʒə pas də.vɑ̃ la mɛ.zɔ̃]" },
    { fr: "J'ai passé un examen.", zh: "我参加并通过了一门考试。", i: "[ʒe pa.se œ̃n‿ɛɡ.za.mɛ̃]" }
  ]
},
{
  id: "penser", inf: "penser", ipa: "[pɑ̃.se]", zh: "想；认为", grp: "er", aux: "avoir", part: "pensé",
  tenses: {
    pres: { f: ["pense","penses","pense","pensons","pensez","pensent"],
            i: ["[pɑ̃s]","[pɑ̃s]","[pɑ̃s]","[pɑ̃.sɔ̃]","[pɑ̃.se]","[pɑ̃s]"] },
    pc: { f: ["ai pensé","as pensé","a pensé","avons pensé","avez pensé","ont pensé"],
            i: ["[ʒe pɑ̃.se]","[ty a pɑ̃.se]","[i.la pɑ̃.se]","[nu.z‿a.vɔ̃ pɑ̃.se]","[vu.z‿a.ve pɑ̃.se]","[il.z‿ɔ̃ pɑ̃.se]"] },
    imp: { f: ["pensais","pensais","pensait","pensions","pensiez","pensaient"],
            i: ["[pɑ̃.sɛ]","[pɑ̃.sɛ]","[pɑ̃.sɛ]","[pɑ̃.sjɔ̃]","[pɑ̃.sje]","[pɑ̃.sɛ]"] },
    fut: { f: ["penserai","penseras","pensera","penserons","penserez","penseront"],
            i: ["[pɑ̃.sə.ʁe]","[pɑ̃.sə.ʁe]","[pɑ̃.sə.ʁa]","[pɑ̃.sə.ʁɔ̃]","[pɑ̃.sə.ʁe]","[pɑ̃.sə.ʁɔ̃]"] }
  },
  note: "penser 是规则 -er 动词；penser à qqn/qch 想起、考虑，penser de qqn/qch 对……有看法。",
  ex: [
    { fr: "Je pense à toi.", zh: "我想着你。", i: "[ʒə pɑ̃.z‿a twa]" },
    { fr: "Elle a pensé à son frère.", zh: "她想起了她的兄弟。", i: "[ɛ.la pɑ̃.se a sɔ̃ fʁɛʁ]" }
  ]
},
{
  id: "porter", inf: "porter", ipa: "[pɔʁ.te]", zh: "拿；携带；穿；戴", grp: "er", aux: "avoir", part: "porté",
  tenses: {
    pres: { f: ["porte","portes","porte","portons","portez","portent"],
            i: ["[pɔʁt]","[pɔʁt]","[pɔʁt]","[pɔʁ.tɔ̃]","[pɔʁ.te]","[pɔʁt]"] },
    pc: { f: ["ai porté","as porté","a porté","avons porté","avez porté","ont porté"],
            i: ["[ʒe pɔʁ.te]","[ty a pɔʁ.te]","[i.la pɔʁ.te]","[nu.z‿a.vɔ̃ pɔʁ.te]","[vu.z‿a.ve pɔʁ.te]","[il.z‿ɔ̃ pɔʁ.te]"] },
    imp: { f: ["portais","portais","portait","portions","portiez","portaient"],
            i: ["[pɔʁ.tɛ]","[pɔʁ.tɛ]","[pɔʁ.tɛ]","[pɔʁ.tjɔ̃]","[pɔʁ.tje]","[pɔʁ.tɛ]"] },
    fut: { f: ["porterai","porteras","portera","porterons","porterez","porteront"],
            i: ["[pɔʁ.tə.ʁe]","[pɔʁ.tə.ʁe]","[pɔʁ.tə.ʁa]","[pɔʁ.tə.ʁɔ̃]","[pɔʁ.tə.ʁe]","[pɔʁ.tə.ʁɔ̃]"] }
  },
  note: "porter 表示「穿着、戴着」的状态；「给某人携带/穿」用 porter quelque chose à quelqu'un。",
  ex: [
    { fr: "Il porte un chapeau.", zh: "他戴着一顶帽子。", i: "[il pɔʁt œ̃ ʃa.po]" },
    { fr: "Elle a porté le sac.", zh: "她提着那个包。", i: "[ɛ.la pɔʁ.te lə sak]" }
  ]
},
{
  id: "poser", inf: "poser", ipa: "[po.ze]", zh: "放；摆；放置", grp: "er", aux: "avoir", part: "posé",
  tenses: {
    pres: { f: ["pose","poses","pose","posons","posez","posent"],
            i: ["[poz]","[poz]","[poz]","[po.zɔ̃]","[po.ze]","[poz]"] },
    pc: { f: ["ai posé","as posé","a posé","avons posé","avez posé","ont posé"],
            i: ["[ʒe po.ze]","[ty a po.ze]","[i.la po.ze]","[nu.z‿a.vɔ̃ po.ze]","[vu.z‿a.ve po.ze]","[il.z‿ɔ̃ po.ze]"] },
    imp: { f: ["posais","posais","posait","posions","posiez","posaient"],
            i: ["[po.zɛ]","[po.zɛ]","[po.zɛ]","[po.zjɔ̃]","[po.zje]","[po.zɛ]"] },
    fut: { f: ["poserai","poseras","posera","poserons","poserez","poseront"],
            i: ["[po.zə.ʁe]","[po.zə.ʁe]","[po.zə.ʁa]","[po.zə.ʁɔ̃]","[po.zə.ʁe]","[po.zə.ʁɔ̃]"] }
  },
  note: "poser une question 提问；poser 也指「把某物平稳放下」。",
  ex: [
    { fr: "Je pose le livre sur la table.", zh: "我把书放在桌上。", i: "[ʒə poz lə livʁ syʁ la tabl]" },
    { fr: "Il a posé une question.", zh: "他提了一个问题。", i: "[i.la po.ze yn kɛs.tjɔ̃]" }
  ]
},
{
  id: "preferer", inf: "préférer", ipa: "[pʁe.fe.ʁe]", zh: "更喜欢", grp: "er", aux: "avoir", part: "préféré",
  tenses: {
    pres: { f: ["préfère","préfères","préfère","préférons","préférez","préfèrent"],
            i: ["[pʁe.fɛʁ]","[pʁe.fɛʁ]","[pʁe.fɛʁ]","[pʁe.fe.ʁɔ̃]","[pʁe.fe.ʁe]","[pʁe.fɛʁ]"] },
    pc: { f: ["ai préféré","as préféré","a préféré","avons préféré","avez préféré","ont préféré"],
            i: ["[ʒe pʁe.fe.ʁe]","[ty a pʁe.fe.ʁe]","[i.la pʁe.fe.ʁe]","[nu.z‿a.vɔ̃ pʁe.fe.ʁe]","[vu.z‿a.ve pʁe.fe.ʁe]","[il.z‿ɔ̃ pʁe.fe.ʁe]"] },
    imp: { f: ["préférais","préférais","préférait","préférions","préfériez","préféraient"],
            i: ["[pʁe.fe.ʁɛ]","[pʁe.fe.ʁɛ]","[pʁe.fe.ʁɛ]","[pʁe.fe.ʁjɔ̃]","[pʁe.fe.ʁje]","[pʁe.fe.ʁɛ]"] },
    fut: { f: ["préférerai","préféreras","préférera","préférerons","préférerez","préféreront"],
            i: ["[pʁe.fe.ʁə.ʁe]","[pʁe.fe.ʁə.ʁe]","[pʁe.fe.ʁə.ʁa]","[pʁe.fe.ʁə.ʁɔ̃]","[pʁe.fe.ʁə.ʁe]","[pʁe.fe.ʁə.ʁɔ̃]"] }
  },
  note: "-é(é)er 动词同 acheter：第三人称单数 préfère（é → è）。",
  ex: [
    { fr: "Je préfère le thé.", zh: "我更喜欢茶。", i: "[ʒə pʁe.fɛʁ lə te]" },
    { fr: "Vous avez préféré le train.", zh: "你们更喜欢火车。", i: "[vu.z‿a.ve pʁe.fe.ʁe lə tʁɛ̃]" }
  ]
},
{
  id: "preparer", inf: "préparer", ipa: "[pʁe.pa.ʁe]", zh: "准备", grp: "er", aux: "avoir", part: "préparé",
  tenses: {
    pres: { f: ["prépare","prépares","prépare","préparons","préparez","préparent"],
            i: ["[pʁe.paʁ]","[pʁe.paʁ]","[pʁe.paʁ]","[pʁe.pa.ʁɔ̃]","[pʁe.pa.ʁe]","[pʁe.paʁ]"] },
    pc: { f: ["ai préparé","as préparé","a préparé","avons préparé","avez préparé","ont préparé"],
            i: ["[ʒe pʁe.pa.ʁe]","[ty a pʁe.pa.ʁe]","[i.la pʁe.pa.ʁe]","[nu.z‿a.vɔ̃ pʁe.pa.ʁe]","[vu.z‿a.ve pʁe.pa.ʁe]","[il.z‿ɔ̃ pʁe.pa.ʁe]"] },
    imp: { f: ["préparais","préparais","préparait","préparions","prépariez","préparaient"],
            i: ["[pʁe.pa.ʁɛ]","[pʁe.pa.ʁɛ]","[pʁe.pa.ʁɛ]","[pʁe.pa.ʁjɔ̃]","[pʁe.pa.ʁje]","[pʁe.pa.ʁɛ]"] },
    fut: { f: ["préparerai","prépareras","préparera","préparerons","préparerez","prépareront"],
            i: ["[pʁe.pa.ʁə.ʁe]","[pʁe.pa.ʁə.ʁe]","[pʁe.pa.ʁə.ʁa]","[pʁe.pa.ʁə.ʁɔ̃]","[pʁe.pa.ʁə.ʁe]","[pʁe.pa.ʁə.ʁɔ̃]"] }
  },
  note: "préparer quelque chose 准备某物；se préparer à faire 准备做某事。",
  ex: [
    { fr: "Je prépare le dîner.", zh: "我准备晚餐。", i: "[ʒə pʁe.paʁ lə di.ne]" },
    { fr: "Elle a préparé un gâteau.", zh: "她准备了一个蛋糕。", i: "[ɛ.la pʁe.pa.ʁe œ̃ ɡa.to]" }
  ]
},
{
  id: "présenter", inf: "présenter", ipa: "[pʁe.zɑ̃.te]", zh: "呈现；介绍；展示", grp: "er", aux: "avoir", part: "présenté",
  tenses: {
    pres: { f: ["présente","présentes","présente","présentons","présentez","présentent"],
            i: ["[pʁe.zɑ̃t]","[pʁe.zɑ̃t]","[pʁe.zɑ̃t]","[pʁe.zɑ̃.tɔ̃]","[pʁe.zɑ̃.te]","[pʁe.zɑ̃t]"] },
    pc: { f: ["ai présenté","as présenté","a présenté","avons présenté","avez présenté","ont présenté"],
            i: ["[ʒe pʁe.zɑ̃.te]","[ty a pʁe.zɑ̃.te]","[i.la pʁe.zɑ̃.te]","[nu.z‿a.vɔ̃ pʁe.zɑ̃.te]","[vu.z‿a.ve pʁe.zɑ̃.te]","[il.z‿ɔ̃ pʁe.zɑ̃.te]"] },
    imp: { f: ["présentais","présentais","présentait","présentions","présentiez","présentaient"],
            i: ["[pʁe.zɑ̃.tɛ]","[pʁe.zɑ̃.tɛ]","[pʁe.zɑ̃.tɛ]","[pʁe.zɑ̃.tjɔ̃]","[pʁe.zɑ̃.tje]","[pʁe.zɑ̃.tɛ]"] },
    fut: { f: ["présenterai","présenteras","présentera","présenterons","présenterez","présenteront"],
            i: ["[pʁe.zɑ̃.tə.ʁe]","[pʁe.zɑ̃.tə.ʁe]","[pʁe.zɑ̃.tə.ʁa]","[pʁe.zɑ̃.tə.ʁɔ̃]","[pʁe.zɑ̃.tə.ʁe]","[pʁe.zɑ̃.tə.ʁɔ̃]"] }
  },
  note: "présenter qqn à qqn 把某人介绍给某人；se présenter 自我介绍、出现；é 在重读开音节变 è（il présente），nous présentons 不变。",
  ex: [
    { fr: "Je te présente mon ami.", zh: "我给你介绍我的朋友。", i: "[ʒə tə pʁe.zɑ̃t mɔ̃.n‿a.mi]" },
    { fr: "Elle a présenté son projet.", zh: "她展示了她的计划。", i: "[ɛ.la pʁe.zɑ̃.te sɔ̃ pʁɔ.ʒɛ]" }
  ]
},
{
  id: "promener", inf: "promener", ipa: "[pʁɔm.ne]", zh: "遛（狗）；散步", grp: "er", aux: "avoir", part: "promené",
  tenses: {
    pres: { f: ["promène","promènes","promène","promenons","promenez","promènent"],
            i: ["[pʁɔ.mɛn]","[pʁɔ.mɛn]","[pʁɔ.mɛn]","[pʁɔm.nɔ̃]","[pʁɔm.ne]","[pʁɔ.mɛn]"] },
    pc: { f: ["ai promené","as promené","a promené","avons promené","avez promené","ont promené"],
            i: ["[ʒe pʁɔm.ne]","[ty a pʁɔm.ne]","[i.la pʁɔm.ne]","[nu.z‿a.vɔ̃ pʁɔm.ne]","[vu.z‿a.ve pʁɔm.ne]","[il.z‿ɔ̃ pʁɔm.ne]"] },
    imp: { f: ["promenais","promenais","promenait","promenions","promeniez","promenaient"],
            i: ["[pʁɔm.nɛ]","[pʁɔm.nɛ]","[pʁɔm.nɛ]","[pʁɔm.njɔ̃]","[pʁɔm.nje]","[pʁɔm.nɛ]"] },
    fut: { f: ["promènerai","promèneras","promènera","promènerons","promènerez","promèneront"],
            i: ["[pʁɔ.mɛ.nə.ʁe]","[pʁɔ.mɛ.nə.ʁe]","[pʁɔ.mɛ.nə.ʁa]","[pʁɔ.mɛ.nə.ʁɔ̃]","[pʁɔ.mɛ.nə.ʁe]","[pʁɔ.mɛ.nə.ʁɔ̃]"] }
  },
  note: "promener 的 é 在重读开音节变 è：je promène / ils promènent，但 nous promenons / vous promenez 不变；将来时 promènerai。se promener 表示「散步」。",
  ex: [
    { fr: "Je promène mon chien.", zh: "我遛我的狗。", i: "[ʒə pʁɔ.mɛn mɔ̃ ʃjɛ̃]" },
    { fr: "J'ai promené le chien.", zh: "我遛了狗。", i: "[ʒe pʁɔm.ne lə ʃjɛ̃]" }
  ]
},
{
  id: "quitter", inf: "quitter", ipa: "[ki.te]", zh: "离开；放弃", grp: "er", aux: "avoir", part: "quitté",
  tenses: {
    pres: { f: ["quitte","quittes","quitte","quittons","quittez","quittent"],
            i: ["[kit]","[kit]","[kit]","[ki.tɔ̃]","[ki.te]","[kit]"] },
    pc: { f: ["ai quitté","as quitté","a quitté","avons quitté","avez quitté","ont quitté"],
            i: ["[ʒe ki.te]","[ty a ki.te]","[i.la ki.te]","[nu.z‿a.vɔ̃ ki.te]","[vu.z‿a.ve ki.te]","[il.z‿ɔ̃ ki.te]"] },
    imp: { f: ["quittais","quittais","quittait","quittions","quittiez","quittaient"],
            i: ["[ki.tɛ]","[ki.tɛ]","[ki.tɛ]","[ki.tjɔ̃]","[ki.tje]","[ki.tɛ]"] },
    fut: { f: ["quitterai","quitteras","quittera","quitterons","quitterez","quitteront"],
            i: ["[ki.tə.ʁe]","[ki.tə.ʁe]","[ki.tə.ʁa]","[ki.tə.ʁɔ̃]","[ki.tə.ʁe]","[ki.tə.ʁɔ̃]"] }
  },
  note: "quitter 表示「离开某地/某人」；quitter 也可指「脱下（衣物）」。",
  ex: [
    { fr: "Je quitte la maison.", zh: "我离开家。", i: "[ʒə kit la mɛ.zɔ̃]" },
    { fr: "Il a quitté Paris.", zh: "他离开了巴黎。", i: "[i.la ki.te pa.ʁi]" }
  ]
},
{
  id: "raconter", inf: "raconter", ipa: "[ʁa.kɔ̃.te]", zh: "讲述；叙述", grp: "er", aux: "avoir", part: "raconté",
  tenses: {
    pres: { f: ["raconte","racontes","raconte","racontons","racontez","racontent"],
            i: ["[ʁa.kɔ̃t]","[ʁa.kɔ̃t]","[ʁa.kɔ̃t]","[ʁa.kɔ̃.tɔ̃]","[ʁa.kɔ̃.te]","[ʁa.kɔ̃t]"] },
    pc: { f: ["ai raconté","as raconté","a raconté","avons raconté","avez raconté","ont raconté"],
            i: ["[ʒe ʁa.kɔ̃.te]","[ty a ʁa.kɔ̃.te]","[i.la ʁa.kɔ̃.te]","[nu.z‿a.vɔ̃ ʁa.kɔ̃.te]","[vu.z‿a.ve ʁa.kɔ̃.te]","[il.z‿ɔ̃ ʁa.kɔ̃.te]"] },
    imp: { f: ["racontais","racontais","racontait","racontions","racontiez","racontaient"],
            i: ["[ʁa.kɔ̃.tɛ]","[ʁa.kɔ̃.tɛ]","[ʁa.kɔ̃.tɛ]","[ʁa.kɔ̃.tjɔ̃]","[ʁa.kɔ̃.tje]","[ʁa.kɔ̃.tɛ]"] },
    fut: { f: ["raconterai","raconteras","racontera","raconterons","raconterez","raconteront"],
            i: ["[ʁa.kɔ̃.tə.ʁe]","[ʁa.kɔ̃.tə.ʁe]","[ʁa.kɔ̃.tə.ʁa]","[ʁa.kɔ̃.tə.ʁɔ̃]","[ʁa.kɔ̃.tə.ʁe]","[ʁa.kɔ̃.tə.ʁɔ̃]"] }
  },
  note: "raconter une histoire 讲故事；raconter quelque chose à quelqu'un 把事情讲给某人听。",
  ex: [
    { fr: "Je raconte une histoire.", zh: "我讲一个故事。", i: "[ʒə ʁa.kɔ̃t yn i.stwaʁ]" },
    { fr: "Il a raconté son voyage.", zh: "他讲述了自己的旅行。", i: "[i.la ʁa.kɔ̃.te sɔ̃ vwa.jaʒ]" }
  ]
},
{
  id: "rappeler", inf: "rappeler", ipa: "[ʁa.pə.le]", zh: "召回；提醒；再打电话", grp: "er", aux: "avoir", part: "rappelé",
  tenses: {
    pres: { f: ["rappelle","rappelles","rappelle","rappelons","rappelez","rappellent"],
            i: ["[ʁa.pɛl]","[ʁa.pɛl]","[ʁa.pɛl]","[ʁa.pə.lɔ̃]","[ʁa.pə.le]","[ʁa.pɛl]"] },
    pc: { f: ["ai rappelé","as rappelé","a rappelé","avons rappelé","avez rappelé","ont rappelé"],
            i: ["[ʒe ʁa.pə.le]","[ty a ʁa.pə.le]","[i.la ʁa.pə.le]","[nu.z‿a.vɔ̃ ʁa.pə.le]","[vu.z‿a.ve ʁa.pə.le]","[il.z‿ɔ̃ ʁa.pə.le]"] },
    imp: { f: ["rappelais","rappelais","rappelait","rappelions","rappeliez","rappelaient"],
            i: ["[ʁa.pə.lɛ]","[ʁa.pə.lɛ]","[ʁa.pə.lɛ]","[ʁa.pə.ljɔ̃]","[ʁa.pə.lje]","[ʁa.pə.lɛ]"] },
    fut: { f: ["rappellerai","rappelleras","rappellera","rappellerons","rappellerez","rappelleront"],
            i: ["[ʁa.pɛ.lə.ʁe]","[ʁa.pɛ.lə.ʁe]","[ʁa.pɛ.lə.ʁa]","[ʁa.pɛ.lə.ʁɔ̃]","[ʁa.pɛ.lə.ʁe]","[ʁa.pɛ.lə.ʁɔ̃]"] }
  },
  note: "rappeler 属 -eler 类动词：单数各人称与 ils 把 é 变 è 并双写 l（rappelle, rappelles, rappelle, rappellent），nous/vous 保持单 l（rappelons, rappelez）；将来时词干双 l（rappeller-）。意为「召回、提醒、再打电话」，如 rappeler qqn 给某人回电。",
  ex: [
    { fr: "Je te rappelle ce soir.", zh: "我今晚再打给你。", i: "[ʒə tə ʁa.pɛl sə swaʁ]" },
    { fr: "Elle m'a rappelé hier.", zh: "她昨天给我回了电话。", i: "[ɛ.la.ma ʁa.pə.le jɛʁ]" }
  ]
},
{
  id: "rechercher", inf: "rechercher", ipa: "[ʁə.ʃɛʁ.ʃe]", zh: "寻找；研究", grp: "er", aux: "avoir", part: "recherché",
  tenses: {
    pres: { f: ["recherche","recherches","recherche","recherchons","recherchez","recherchent"],
            i: ["[ʁə.ʃɛʁʃ]","[ʁə.ʃɛʁʃ]","[ʁə.ʃɛʁʃ]","[ʁə.ʃɛʁ.ʃɔ̃]","[ʁə.ʃɛʁ.ʃe]","[ʁə.ʃɛʁʃ]"] },
    pc: { f: ["ai recherché","as recherché","a recherché","avons recherché","avez recherché","ont recherché"],
            i: ["[ʒe ʁə.ʃɛʁ.ʃe]","[ty a ʁə.ʃɛʁ.ʃe]","[i.la ʁə.ʃɛʁ.ʃe]","[nu.z‿a.vɔ̃ ʁə.ʃɛʁ.ʃe]","[vu.z‿a.ve ʁə.ʃɛʁ.ʃe]","[il.z‿ɔ̃ ʁə.ʃɛʁ.ʃe]"] },
    imp: { f: ["recherchais","recherchais","recherchait","recherchions","recherchiez","recherchaient"],
            i: ["[ʁə.ʃɛʁ.ʃɛ]","[ʁə.ʃɛʁ.ʃɛ]","[ʁə.ʃɛʁ.ʃɛ]","[ʁə.ʃɛʁ.ʃjɔ̃]","[ʁə.ʃɛʁ.ʃje]","[ʁə.ʃɛʁ.ʃɛ]"] },
    fut: { f: ["rechercherai","rechercheras","recherchera","rechercherons","rechercherez","rechercheront"],
            i: ["[ʁə.ʃɛʁ.ʃə.ʁe]","[ʁə.ʃɛʁ.ʃə.ʁe]","[ʁə.ʃɛʁ.ʃə.ʁa]","[ʁə.ʃɛʁ.ʃə.ʁɔ̃]","[ʁə.ʃɛʁ.ʃə.ʁe]","[ʁə.ʃɛʁ.ʃə.ʁɔ̃]"] }
  },
  note: "rechercher = re- + chercher，语气比 chercher 更强，指「仔细寻找、深入研究」。",
  ex: [
    { fr: "Je recherche un emploi.", zh: "我在找工作。", i: "[ʒə ʁə.ʃɛʁʃ œ̃n‿ɑ̃.plwa]" },
    { fr: "Ils ont recherché le coupable.", zh: "他们追查了罪犯。", i: "[il.z‿ɔ̃ ʁə.ʃɛʁ.ʃe lə ku.pabl]" }
  ]
},
{
  id: "recommencer", inf: "recommencer", ipa: "[ʁə.kɔ.mɑ̃.se]", zh: "重新开始", grp: "er", aux: "avoir", part: "recommencé",
  tenses: {
    pres: { f: ["recommence","recommences","recommence","recommençons","recommencez","recommencent"],
            i: ["[ʁə.kɔ.mɑ̃s]","[ʁə.kɔ.mɑ̃s]","[ʁə.kɔ.mɑ̃s]","[ʁə.kɔ.mɑ̃.sɔ̃]","[ʁə.kɔ.mɑ̃.se]","[ʁə.kɔ.mɑ̃s]"] },
    pc: { f: ["ai recommencé","as recommencé","a recommencé","avons recommencé","avez recommencé","ont recommencé"],
            i: ["[ʒe ʁə.kɔ.mɑ̃.se]","[ty a ʁə.kɔ.mɑ̃.se]","[i.la ʁə.kɔ.mɑ̃.se]","[nu.z‿a.vɔ̃ ʁə.kɔ.mɑ̃.se]","[vu.z‿a.ve ʁə.kɔ.mɑ̃.se]","[il.z‿ɔ̃ ʁə.kɔ.mɑ̃.se]"] },
    imp: { f: ["recommençais","recommençais","recommençait","recommencions","recommenciez","recommençaient"],
            i: ["[ʁə.kɔ.mɑ̃.sɛ]","[ʁə.kɔ.mɑ̃.sɛ]","[ʁə.kɔ.mɑ̃.sɛ]","[ʁə.kɔ.mɑ̃.sjɔ̃]","[ʁə.kɔ.mɑ̃.sje]","[ʁə.kɔ.mɑ̃.sɛ]"] },
    fut: { f: ["recommencerai","recommenceras","recommencera","recommencerons","recommencerez","recommenceront"],
            i: ["[ʁə.kɔ.mɑ̃.sə.ʁe]","[ʁə.kɔ.mɑ̃.sə.ʁe]","[ʁə.kɔ.mɑ̃.sə.ʁa]","[ʁə.kɔ.mɑ̃.sə.ʁɔ̃]","[ʁə.kɔ.mɑ̃.sə.ʁe]","[ʁə.kɔ.mɑ̃.sə.ʁɔ̃]"] }
  },
  note: "-cer 结尾：ç 只用于 a、o 前（recommençons, recommençais），在 e、i 前仍用 c（recommencez, recommencions, recommenciez）。",
  ex: [
    { fr: "Je recommence mon travail.", zh: "我重新开始我的工作。", i: "[ʒə ʁə.kɔ.mɑ̃s mɔ̃ tʁa.vaj]" },
    { fr: "Elle a recommencé à pleurer.", zh: "她又开始哭了。", i: "[ɛ.la ʁə.kɔ.mɑ̃.se a plø.ʁe]" }
  ]
},
{
  id: "regarder", inf: "regarder", ipa: "[ʁə.ɡaʁ.de]", zh: "看；注视", grp: "er", aux: "avoir", part: "regardé",
  tenses: {
    pres: { f: ["regarde","regardes","regarde","regardons","regardez","regardent"],
            i: ["[ʁə.ɡaʁd]","[ʁə.ɡaʁd]","[ʁə.ɡaʁd]","[ʁə.ɡaʁ.dɔ̃]","[ʁə.ɡaʁ.de]","[ʁə.ɡaʁd]"] },
    pc: { f: ["ai regardé","as regardé","a regardé","avons regardé","avez regardé","ont regardé"],
            i: ["[ʒe ʁə.ɡaʁ.de]","[ty a ʁə.ɡaʁ.de]","[i.la ʁə.ɡaʁ.de]","[nu.z‿a.vɔ̃ ʁə.ɡaʁ.de]","[vu.z‿a.ve ʁə.ɡaʁ.de]","[il.z‿ɔ̃ ʁə.ɡaʁ.de]"] },
    imp: { f: ["regardais","regardais","regardait","regardions","regardiez","regardaient"],
            i: ["[ʁə.ɡaʁ.dɛ]","[ʁə.ɡaʁ.dɛ]","[ʁə.ɡaʁ.dɛ]","[ʁə.ɡaʁ.djɔ̃]","[ʁə.ɡaʁ.dje]","[ʁə.ɡaʁ.dɛ]"] },
    fut: { f: ["regarderai","regarderas","regardera","regarderons","regarderez","regarderont"],
            i: ["[ʁə.ɡaʁ.də.ʁe]","[ʁə.ɡaʁ.də.ʁe]","[ʁə.ɡaʁ.də.ʁa]","[ʁə.ɡaʁ.də.ʁɔ̃]","[ʁə.ɡaʁ.də.ʁe]","[ʁə.ɡaʁ.də.ʁɔ̃]"] }
  },
  note: "regarder 表示「注视」；voir 表示「看见」的结果，两者不同。",
  ex: [
    { fr: "Je regarde la télévision.", zh: "我看电视。", i: "[ʒə ʁə.ɡaʁd la te.le.vi.zjɔ̃]" },
    { fr: "Elle a regardé un film.", zh: "她看了一部电影。", i: "[ɛ.la ʁə.ɡaʁ.de œ̃ film]" }
  ]
},
{
  id: "remercier", inf: "remercier", ipa: "[ʁə.mɛʁ.sje]", zh: "感谢", grp: "er", aux: "avoir", part: "remercié",
  tenses: {
    pres: { f: ["remercie","remercies","remercie","remercions","remerciez","remercient"],
            i: ["[ʁə.mɛʁ.si]","[ʁə.mɛʁ.si]","[ʁə.mɛʁ.si]","[ʁə.mɛʁ.sjɔ̃]","[ʁə.mɛʁ.sje]","[ʁə.mɛʁ.si]"] },
    pc: { f: ["ai remercié","as remercié","a remercié","avons remercié","avez remercié","ont remercié"],
            i: ["[ʒe ʁə.mɛʁ.sje]","[ty a ʁə.mɛʁ.sje]","[i.la ʁə.mɛʁ.sje]","[nu.z‿a.vɔ̃ ʁə.mɛʁ.sje]","[vu.z‿a.ve ʁə.mɛʁ.sje]","[il.z‿ɔ̃ ʁə.mɛʁ.sje]"] },
    imp: { f: ["remerciais","remerciais","remerciait","remerciions","remerciiez","remerciaient"],
            i: ["[ʁə.mɛʁ.sjɛ]","[ʁə.mɛʁ.sjɛ]","[ʁə.mɛʁ.sjɛ]","[ʁə.mɛʁ.si.jɔ̃]","[ʁə.mɛʁ.si.je]","[ʁə.mɛʁ.sjɛ]"] },
    fut: { f: ["remercierai","remercieras","remerciera","remercierons","remercierez","remercieront"],
            i: ["[ʁə.mɛʁ.sje.ʁe]","[ʁə.mɛʁ.sje.ʁe]","[ʁə.mɛʁ.sje.ʁa]","[ʁə.mɛʁ.sje.ʁɔ̃]","[ʁə.mɛʁ.sje.ʁe]","[ʁə.mɛʁ.sje.ʁɔ̃]"] }
  },
  note: "-ier 动词：je remercie / nous remercions（词干以 i 结尾，单数不加 è）；remercier qqn de qch 因某事感谢某人。",
  ex: [
    { fr: "Je vous remercie.", zh: "谢谢您。", i: "[ʒə vu ʁə.mɛʁ.si]" },
    { fr: "Elle m'a remercié.", zh: "她感谢了我。", i: "[ɛ.la ma ʁə.mɛʁ.sje]" }
  ]
},
{
  id: "rencontrer", inf: "rencontrer", ipa: "[ʁɑ̃.kɔ̃.tʁe]", zh: "遇见；遇到", grp: "er", aux: "avoir", part: "rencontré",
  tenses: {
    pres: { f: ["rencontre","rencontres","rencontre","rencontrons","rencontrez","rencontrent"],
            i: ["[ʁɑ̃.kɔ̃tʁ]","[ʁɑ̃.kɔ̃tʁ]","[ʁɑ̃.kɔ̃tʁ]","[ʁɑ̃.kɔ̃.tʁɔ̃]","[ʁɑ̃.kɔ̃.tʁe]","[ʁɑ̃.kɔ̃tʁ]"] },
    pc: { f: ["ai rencontré","as rencontré","a rencontré","avons rencontré","avez rencontré","ont rencontré"],
            i: ["[ʒe ʁɑ̃.kɔ̃.tʁe]","[ty a ʁɑ̃.kɔ̃.tʁe]","[i.la ʁɑ̃.kɔ̃.tʁe]","[nu.z‿a.vɔ̃ ʁɑ̃.kɔ̃.tʁe]","[vu.z‿a.ve ʁɑ̃.kɔ̃.tʁe]","[il.z‿ɔ̃ ʁɑ̃.kɔ̃.tʁe]"] },
    imp: { f: ["rencontrais","rencontrais","rencontrait","rencontrions","rencontriez","rencontraient"],
            i: ["[ʁɑ̃.kɔ̃.tʁɛ]","[ʁɑ̃.kɔ̃.tʁɛ]","[ʁɑ̃.kɔ̃.tʁɛ]","[ʁɑ̃.kɔ̃.tʁjɔ̃]","[ʁɑ̃.kɔ̃.tʁje]","[ʁɑ̃.kɔ̃.tʁɛ]"] },
    fut: { f: ["rencontrerai","rencontreras","rencontrera","rencontrerons","rencontrerez","rencontreront"],
            i: ["[ʁɑ̃.kɔ̃.tʁə.ʁe]","[ʁɑ̃.kɔ̃.tʁə.ʁe]","[ʁɑ̃.kɔ̃.tʁə.ʁa]","[ʁɑ̃.kɔ̃.tʁə.ʁɔ̃]","[ʁɑ̃.kɔ̃.tʁə.ʁe]","[ʁɑ̃.kɔ̃.tʁə.ʁɔ̃]"] }
  },
  note: "rencontrer qqn 遇见某人；se rencontrer 相遇、见面；名词为 rencontre。",
  ex: [
    { fr: "J'ai rencontré Marie.", zh: "我遇到了玛丽。", i: "[ʒe ʁɑ̃.kɔ̃.tʁe ma.ʁi]" },
    { fr: "Nous nous rencontrons souvent.", zh: "我们经常见面。", i: "[nu nu ʁɑ̃.kɔ̃.tʁɔ̃ su.vɑ̃]" }
  ]
},
{
  id: "rentrer", inf: "rentrer", ipa: "[ʁɑ̃.tʁe]", zh: "回家；回来；驶入", grp: "er", aux: "etre", part: "rentré",
  tenses: {
    pres: { f: ["rentre","rentres","rentre","rentrons","rentrez","rentrent"],
            i: ["[ʁɑ̃tʁ]","[ʁɑ̃tʁ]","[ʁɑ̃tʁ]","[ʁɑ̃.tʁɔ̃]","[ʁɑ̃.tʁe]","[ʁɑ̃tʁ]"] },
    pc: { f: ["suis rentré(e)","es rentré(e)","est rentré(e)","sommes rentré(e)s","êtes rentré(e)s","sont rentré(e)s"],
            i: ["[sɥi.z‿ʁɑ̃.tʁe]","[ɛ.z‿ʁɑ̃.tʁe]","[ɛ.t‿ʁɑ̃.tʁe]","[sɔm.z‿ʁɑ̃.tʁe]","[ɛt.z‿ʁɑ̃.tʁe]","[sɔ̃.z‿ʁɑ̃.tʁe]"] },
    imp: { f: ["rentrais","rentrais","rentrait","rentrions","rentriez","rentraient"],
            i: ["[ʁɑ̃.tʁɛ]","[ʁɑ̃.tʁɛ]","[ʁɑ̃.tʁɛ]","[ʁɑ̃.tʁjɔ̃]","[ʁɑ̃.tʁje]","[ʁɑ̃.tʁɛ]"] },
    fut: { f: ["rentrerai","rentreras","rentrera","rentrerons","rentrerez","rentreront"],
            i: ["[ʁɑ̃.tʁə.ʁe]","[ʁɑ̃.tʁə.ʁe]","[ʁɑ̃.tʁə.ʁa]","[ʁɑ̃.tʁə.ʁɔ̃]","[ʁɑ̃.tʁə.ʁe]","[ʁɑ̃.tʁə.ʁɔ̃]"] }
  },
  note: "rentrer 表「回家、进入」是位移动词，标准复合过去时用 être（je suis rentré），过去分词须与主语性数配合；现代口语中也可用 avoir，但须全篇保持一致。",
  ex: [
    { fr: "Je rentre à la maison.", zh: "我回家。", i: "[ʒə ʁɑ̃tʁ a la mɛ.zɔ̃]" },
    { fr: "Il est rentré tard.", zh: "他很晚才回来。", i: "[i.lɛ.t‿ʁɑ̃.tʁe taʁ]" }
  ]
},
{
  id: "reposer", inf: "reposer", ipa: "[ʁə.po.ze]", zh: "休息；放置；使安稳", grp: "er", aux: "avoir", part: "reposé",
  tenses: {
    pres: { f: ["repose","reposes","repose","reposons","reposez","reposent"],
            i: ["[ʁə.poz]","[ʁə.poz]","[ʁə.poz]","[ʁə.po.zɔ̃]","[ʁə.po.ze]","[ʁə.poz]"] },
    pc: { f: ["ai reposé","as reposé","a reposé","avons reposé","avez reposé","ont reposé"],
            i: ["[ʒe ʁə.po.ze]","[ty a ʁə.po.ze]","[i.la ʁə.po.ze]","[nu.z‿a.vɔ̃ ʁə.po.ze]","[vu.z‿a.ve ʁə.po.ze]","[il.z‿ɔ̃ ʁə.po.ze]"] },
    imp: { f: ["reposais","reposais","reposait","reposions","reposiez","reposaient"],
            i: ["[ʁə.po.zɛ]","[ʁə.po.zɛ]","[ʁə.po.zɛ]","[ʁə.po.zjɔ̃]","[ʁə.po.zje]","[ʁə.po.zɛ]"] },
    fut: { f: ["reposerai","reposeras","reposera","reposerons","reposerez","reposeront"],
            i: ["[ʁə.po.zə.ʁe]","[ʁə.po.zə.ʁe]","[ʁə.po.zə.ʁa]","[ʁə.po.zə.ʁɔ̃]","[ʁə.po.zə.ʁe]","[ʁə.po.zə.ʁɔ̃]"] }
  },
  note: "se reposer 休息（自反动词，复合过去时用 être：je me suis reposé）；reposer sur 表示「建立在……之上、取决于」。",
  ex: [
    { fr: "Je me repose un peu.", zh: "我休息一会儿。", i: "[ʒə mə ʁə.poz œ̃ pø]" },
    { fr: "La maison repose sur un rocher.", zh: "房子坐落在岩石上。", i: "[la mɛ.zɔ̃ ʁə.poz syʁ œ̃ ʁɔ.ʃe]" }
  ]
},
{
  id: "reserver", inf: "réserver", ipa: "[ʁe.zɛʁ.ve]", zh: "预订；保留", grp: "er", aux: "avoir", part: "réservé",
  tenses: {
    pres: { f: ["réserve","réserves","réserve","réservons","réservez","réservent"],
            i: ["[ʁe.zɛʁv]","[ʁe.zɛʁv]","[ʁe.zɛʁv]","[ʁe.zɛʁ.vɔ̃]","[ʁe.zɛʁ.ve]","[ʁe.zɛʁv]"] },
    pc: { f: ["ai réservé","as réservé","a réservé","avons réservé","avez réservé","ont réservé"],
            i: ["[ʒe ʁe.zɛʁ.ve]","[ty a ʁe.zɛʁ.ve]","[i.la ʁe.zɛʁ.ve]","[nu.z‿a.vɔ̃ ʁe.zɛʁ.ve]","[vu.z‿a.ve ʁe.zɛʁ.ve]","[il.z‿ɔ̃ ʁe.zɛʁ.ve]"] },
    imp: { f: ["réservais","réservais","réservait","réservions","réserviez","réservaient"],
            i: ["[ʁe.zɛʁ.vɛ]","[ʁe.zɛʁ.vɛ]","[ʁe.zɛʁ.vɛ]","[ʁe.zɛʁ.vjɔ̃]","[ʁe.zɛʁ.vje]","[ʁe.zɛʁ.vɛ]"] },
    fut: { f: ["réserverai","réserveras","réservera","réserverons","réserverez","réserveront"],
            i: ["[ʁe.zɛʁ.və.ʁe]","[ʁe.zɛʁ.və.ʁe]","[ʁe.zɛʁ.və.ʁa]","[ʁe.zɛʁ.və.ʁɔ̃]","[ʁe.zɛʁ.və.ʁe]","[ʁe.zɛʁ.və.ʁɔ̃]"] }
  },
  note: "réserver une table 订餐位；réserver une chambre 订房间。",
  ex: [
    { fr: "Je réserve une table.", zh: "我预订一桌。", i: "[ʒe ʁe.zɛʁv yn tabl]" },
    { fr: "Elle a réservé une chambre.", zh: "她订了一间房。", i: "[ɛ.la ʁe.zɛʁ.ve yn ʃɑ̃bʁ]" }
  ]
},
{
  id: "rester", inf: "rester", ipa: "[ʁɛs.te]", zh: "停留；留下；仍然是", grp: "er", aux: "etre", part: "resté",
  tenses: {
    pres: { f: ["reste","restes","reste","restons","restez","restent"],
            i: ["[ʁɛst]","[ʁɛst]","[ʁɛst]","[ʁɛs.tɔ̃]","[ʁɛs.te]","[ʁɛst]"] },
    pc: { f: ["suis resté(e)","es resté(e)","est resté(e)","sommes resté(e)s","êtes resté(e)s","sont resté(e)s"],
            i: ["[sɥi.z‿ʁɛs.te]","[ɛ.z‿ʁɛs.te]","[ɛ.t‿ʁɛs.te]","[sɔm.z‿ʁɛs.te]","[ɛt.z‿ʁɛs.te]","[sɔ̃.z‿ʁɛs.te]"] },
    imp: { f: ["restais","restais","restait","restions","restiez","restaient"],
            i: ["[ʁɛs.tɛ]","[ʁɛs.tɛ]","[ʁɛs.tɛ]","[ʁɛs.tjɔ̃]","[ʁɛs.tje]","[ʁɛs.tɛ]"] },
    fut: { f: ["resterai","resteras","restera","resterons","resterez","resteront"],
            i: ["[ʁɛs.tə.ʁe]","[ʁɛs.tə.ʁe]","[ʁɛs.tə.ʁa]","[ʁɛs.tə.ʁɔ̃]","[ʁɛs.tə.ʁe]","[ʁɛs.tə.ʁɔ̃]"] }
  },
  note: "rester 是不及物动词，复合过去时用 être（je suis resté），过去分词与主语性数配合；rester + 形容词表示「保持某种状态」。",
  ex: [
    { fr: "Je reste à la maison.", zh: "我待在家里。", i: "[ʒə ʁɛst a la mɛ.zɔ̃]" },
    { fr: "Je suis resté longtemps.", zh: "我待了很久。", i: "[ʒə sɥi.z‿ʁɛs.te lɔ̃.tɑ̃]" }
  ]
},
{
  id: "retourner", inf: "retourner", ipa: "[ʁə.tuʁ.ne]", zh: "返回；翻面", grp: "er", aux: "etre", part: "retourné",
  tenses: {
    pres: { f: ["retourne","retournes","retourne","retournons","retournez","retournent"],
            i: ["[ʁə.tuʁn]","[ʁə.tuʁn]","[ʁə.tuʁn]","[ʁə.tuʁ.nɔ̃]","[ʁə.tuʁ.ne]","[ʁə.tuʁn]"] },
    pc: { f: ["suis retourné(e)","es retourné(e)","est retourné(e)","sommes retourné(e)s","êtes retourné(e)s","sont retourné(e)s"],
            i: ["[sɥi.z‿ʁə.tuʁ.ne]","[ɛ.z‿ʁə.tuʁ.ne]","[ɛ.t‿ʁə.tuʁ.ne]","[sɔm.z‿ʁə.tuʁ.ne]","[ɛt.z‿ʁə.tuʁ.ne]","[sɔ̃.z‿ʁə.tuʁ.ne]"] },
    imp: { f: ["retournais","retournais","retournait","retournions","retourniez","retournaient"],
            i: ["[ʁə.tuʁ.nɛ]","[ʁə.tuʁ.nɛ]","[ʁə.tuʁ.nɛ]","[ʁə.tuʁ.njɔ̃]","[ʁə.tuʁ.nje]","[ʁə.tuʁ.nɛ]"] },
    fut: { f: ["retournerai","retourneras","retournera","retournerons","retournerez","retourneront"],
            i: ["[ʁə.tuʁ.nə.ʁe]","[ʁə.tuʁ.nə.ʁe]","[ʁə.tuʁ.nə.ʁa]","[ʁə.tuʁ.nə.ʁɔ̃]","[ʁə.tuʁ.nə.ʁe]","[ʁə.tuʁ.nə.ʁɔ̃]"] }
  },
  note: "retourner 表「返回、回去」是位移动词，标准复合过去时用 être（je suis retourné）；作及物「翻转」时可用 avoir，注意全篇保持一致。",
  ex: [
    { fr: "Je retourne à Paris.", zh: "我返回巴黎。", i: "[ʒə ʁə.tuʁn a pa.ʁi]" },
    { fr: "Il est retourné chez lui.", zh: "他回了自己家。", i: "[i.lɛ.t‿ʁə.tuʁ.ne ʃe lɥi]" }
  ]
},
{
  id: "retrouver", inf: "retrouver", ipa: "[ʁə.tʁu.ve]", zh: "重新找到；找回", grp: "er", aux: "avoir", part: "retrouvé",
  tenses: {
    pres: { f: ["retrouve","retrouves","retrouve","retrouvons","retrouvez","retrouvent"],
            i: ["[ʁə.tʁuv]","[ʁə.tʁuv]","[ʁə.tʁuv]","[ʁə.tʁu.vɔ̃]","[ʁə.tʁu.ve]","[ʁə.tʁuv]"] },
    pc: { f: ["ai retrouvé","as retrouvé","a retrouvé","avons retrouvé","avez retrouvé","ont retrouvé"],
            i: ["[ʒe ʁə.tʁu.ve]","[ty a ʁə.tʁu.ve]","[i.la ʁə.tʁu.ve]","[nu.z‿a.vɔ̃ ʁə.tʁu.ve]","[vu.z‿a.ve ʁə.tʁu.ve]","[il.z‿ɔ̃ ʁə.tʁu.ve]"] },
    imp: { f: ["retrouvais","retrouvais","retrouvait","retrouvions","retrouviez","retrouvaient"],
            i: ["[ʁə.tʁu.vɛ]","[ʁə.tʁu.vɛ]","[ʁə.tʁu.vɛ]","[ʁə.tʁu.vjɔ̃]","[ʁə.tʁu.vje]","[ʁə.tʁu.vɛ]"] },
    fut: { f: ["retrouverai","retrouveras","retrouvera","retrouverons","retrouverez","retrouveront"],
            i: ["[ʁə.tʁu.və.ʁe]","[ʁə.tʁu.və.ʁe]","[ʁə.tʁu.və.ʁa]","[ʁə.tʁu.və.ʁɔ̃]","[ʁə.tʁu.və.ʁe]","[ʁə.tʁu.və.ʁɔ̃]"] }
  },
  note: "前缀 re- 表「再次」，retrouver 即「再找到、找回」；se retrouver 意为相聚。",
  ex: [
    { fr: "J'ai retrouvé mes clés.", zh: "我找回了钥匙。", i: "[ʒe ʁə.tʁu.ve me kle]" },
    { fr: "On se retrouve demain.", zh: "我们明天见。", i: "[ɔ̃ sə ʁə.tʁuv də.mɛ̃]" }
  ]
},
{
  id: "rêver", inf: "rêver", ipa: "[ʁɛ.ve]", zh: "做梦；梦想", grp: "er", aux: "avoir", part: "rêvé",
  tenses: {
    pres: { f: ["rêve","rêves","rêve","rêvons","rêvez","rêvent"],
            i: ["[ʁɛv]","[ʁɛv]","[ʁɛv]","[ʁɛ.vɔ̃]","[ʁɛ.ve]","[ʁɛv]"] },
    pc: { f: ["ai rêvé","as rêvé","a rêvé","avons rêvé","avez rêvé","ont rêvé"],
            i: ["[ʒe ʁɛ.ve]","[ty a ʁɛ.ve]","[i.la ʁɛ.ve]","[nu.z‿a.vɔ̃ ʁɛ.ve]","[vu.z‿a.ve ʁɛ.ve]","[il.z‿ɔ̃ ʁɛ.ve]"] },
    imp: { f: ["rêvais","rêvais","rêvait","rêvions","rêviez","rêvaient"],
            i: ["[ʁɛ.vɛ]","[ʁɛ.vɛ]","[ʁɛ.vɛ]","[ʁɛ.vjɔ̃]","[ʁɛ.vje]","[ʁɛ.vɛ]"] },
    fut: { f: ["rêverai","rêveras","rêvera","rêverons","rêverez","rêveront"],
            i: ["[ʁɛ.və.ʁe]","[ʁɛ.və.ʁe]","[ʁɛ.və.ʁa]","[ʁɛ.və.ʁɔ̃]","[ʁɛ.və.ʁe]","[ʁɛ.və.ʁɔ̃]"] }
  },
  note: "rêver de 梦见、梦想；注意词中有 ê [ʁɛ]，rêvasser 指「做白日梦」。",
  ex: [
    { fr: "Je rêve de toi.", zh: "我梦见你。", i: "[ʒə ʁɛv də twa]" },
    { fr: "Elle a rêvé d'un voyage.", zh: "她梦想去旅行。", i: "[ɛ.la ʁɛ.ve dœ̃ vwa.jaʒ]" }
  ]
},
{
  id: "rouler", inf: "rouler", ipa: "[ʁu.le]", zh: "滚动；行驶；卷", grp: "er", aux: "avoir", part: "roulé",
  tenses: {
    pres: { f: ["roule","roules","roule","roulons","roulez","roulent"],
            i: ["[ʁul]","[ʁul]","[ʁul]","[ʁu.lɔ̃]","[ʁu.le]","[ʁul]"] },
    pc: { f: ["ai roulé","as roulé","a roulé","avons roulé","avez roulé","ont roulé"],
            i: ["[ʒe ʁu.le]","[ty a ʁu.le]","[i.la ʁu.le]","[nu.z‿a.vɔ̃ ʁu.le]","[vu.z‿a.ve ʁu.le]","[il.z‿ɔ̃ ʁu.le]"] },
    imp: { f: ["roulais","roulais","roulait","roulions","rouliez","roulaient"],
            i: ["[ʁu.lɛ]","[ʁu.lɛ]","[ʁu.lɛ]","[ʁu.ljɔ̃]","[ʁu.lje]","[ʁu.lɛ]"] },
    fut: { f: ["roulerai","rouleras","roulera","roulerons","roulerez","rouleront"],
            i: ["[ʁu.lə.ʁe]","[ʁu.lə.ʁe]","[ʁu.lə.ʁa]","[ʁu.lə.ʁɔ̃]","[ʁu.lə.ʁe]","[ʁu.lə.ʁɔ̃]"] }
  },
  note: "rouler 表「滚动、行驶」，la voiture roule 车在行驶；rouler en voiture 指开车兜风。",
  ex: [
    { fr: "La voiture roule vite.", zh: "车开得很快。", i: "[la vwa.tyʁ ʁul vit]" },
    { fr: "Nous avons roulé toute la nuit.", zh: "我们开了一整夜的车。", i: "[nu.z‿a.vɔ̃ ʁu.le tut la nɥi]" }
  ]
},
{
  id: "supprimer", inf: "supprimer", ipa: "[sy.pʁi.me]", zh: "删除；取消；撤除", grp: "er", aux: "avoir", part: "supprimé",
  tenses: {
    pres: { f: ["supprime","supprimes","supprime","supprimons","supprimez","suppriment"],
            i: ["[sy.pʁim]","[sy.pʁim]","[sy.pʁim]","[sy.pʁi.mɔ̃]","[sy.pʁi.me]","[sy.pʁim]"] },
    pc: { f: ["ai supprimé","as supprimé","a supprimé","avons supprimé","avez supprimé","ont supprimé"],
            i: ["[ʒe sy.pʁi.me]","[ty a sy.pʁi.me]","[i.la sy.pʁi.me]","[nu.z‿a.vɔ̃ sy.pʁi.me]","[vu.z‿a.ve sy.pʁi.me]","[il.z‿ɔ̃ sy.pʁi.me]"] },
    imp: { f: ["supprimais","supprimais","supprimait","supprimions","supprimiez","supprimaient"],
            i: ["[sy.pʁi.mɛ]","[sy.pʁi.mɛ]","[sy.pʁi.mɛ]","[sy.pʁi.mjɔ̃]","[sy.pʁi.mje]","[sy.pʁi.mɛ]"] },
    fut: { f: ["supprimerai","supprimeras","supprimera","supprimerons","supprimerez","supprimeront"],
            i: ["[sy.pʁi.mə.ʁe]","[sy.pʁi.mə.ʁe]","[sy.pʁi.mə.ʁa]","[sy.pʁi.mə.ʁɔ̃]","[sy.pʁi.mə.ʁe]","[sy.pʁi.mə.ʁɔ̃]"] }
  },
  note: "supprimer 是规则 -er 动词，变位同 aimer；意为「删除、取消、撤除」，如 supprimer un fichier 删除文件。名词形式为 suppression。",
  ex: [
    { fr: "Je supprime ce fichier.", zh: "我删除这个文件。", i: "[ʒə sy.pʁim sə fi.ʃje]" },
    { fr: "Ils ont supprimé la publication.", zh: "他们删除了那条帖子。", i: "[il.z‿ɔ̃ sy.pʁi.me la py.bli.ka.sjɔ̃]" }
  ]
},
{
  id: "telephoner", inf: "téléphoner", ipa: "[te.le.fɔ.ne]", zh: "打电话", grp: "er", aux: "avoir", part: "téléphoné",
  tenses: {
    pres: { f: ["téléphone","téléphones","téléphone","téléphonons","téléphonez","téléphonent"],
            i: ["[te.le.fɔn]","[te.le.fɔn]","[te.le.fɔn]","[te.le.fɔ.nɔ̃]","[te.le.fɔ.ne]","[te.le.fɔn]"] },
    pc: { f: ["ai téléphoné","as téléphoné","a téléphoné","avons téléphoné","avez téléphoné","ont téléphoné"],
            i: ["[ʒe te.le.fɔ.ne]","[ty a te.le.fɔ.ne]","[i.la te.le.fɔ.ne]","[nu.z‿a.vɔ̃ te.le.fɔ.ne]","[vu.z‿a.ve te.le.fɔ.ne]","[il.z‿ɔ̃ te.le.fɔ.ne]"] },
    imp: { f: ["téléphonais","téléphonais","téléphonait","téléphonions","téléphoniez","téléphonaient"],
            i: ["[te.le.fɔ.nɛ]","[te.le.fɔ.nɛ]","[te.le.fɔ.nɛ]","[te.le.fɔ.njɔ̃]","[te.le.fɔ.nje]","[te.le.fɔ.nɛ]"] },
    fut: { f: ["téléphonerai","téléphoneras","téléphonera","téléphonerons","téléphonerez","téléphoneront"],
            i: ["[te.le.fɔ.nə.ʁe]","[te.le.fɔ.nə.ʁe]","[te.le.fɔ.nə.ʁa]","[te.le.fɔ.nə.ʁɔ̃]","[te.le.fɔ.nə.ʁe]","[te.le.fɔ.nə.ʁɔ̃]"] }
  },
  note: "téléphoner à quelqu'un 给某人打电话；「电话响」用 sonner，不要混淆。",
  ex: [
    { fr: "Je téléphone à Marie.", zh: "我给玛丽打电话。", i: "[ʒə te.le.fɔn a ma.ʁi]" },
    { fr: "Elle a téléphoné au médecin.", zh: "她给医生打了电话。", i: "[ɛ.la te.le.fɔ.ne o me.də.sɛ̃]" }
  ]
},
{
  id: "terminer", inf: "terminer", ipa: "[tɛʁ.mi.ne]", zh: "结束；完成", grp: "er", aux: "avoir", part: "terminé",
  tenses: {
    pres: { f: ["termine","termines","termine","terminons","terminez","terminent"],
            i: ["[tɛʁ.min]","[tɛʁ.min]","[tɛʁ.min]","[tɛʁ.mi.nɔ̃]","[tɛʁ.mi.ne]","[tɛʁ.min]"] },
    pc: { f: ["ai terminé","as terminé","a terminé","avons terminé","avez terminé","ont terminé"],
            i: ["[ʒe tɛʁ.mi.ne]","[ty a tɛʁ.mi.ne]","[i.la tɛʁ.mi.ne]","[nu.z‿a.vɔ̃ tɛʁ.mi.ne]","[vu.z‿a.ve tɛʁ.mi.ne]","[il.z‿ɔ̃ tɛʁ.mi.ne]"] },
    imp: { f: ["terminais","terminais","terminait","terminions","terminiez","terminaient"],
            i: ["[tɛʁ.mi.nɛ]","[tɛʁ.mi.nɛ]","[tɛʁ.mi.nɛ]","[tɛʁ.mi.njɔ̃]","[tɛʁ.mi.nje]","[tɛʁ.mi.nɛ]"] },
    fut: { f: ["terminerai","termineras","terminera","terminerons","terminerez","termineront"],
            i: ["[tɛʁ.mi.nə.ʁe]","[tɛʁ.mi.nə.ʁe]","[tɛʁ.mi.nə.ʁa]","[tɛʁ.mi.nə.ʁɔ̃]","[tɛʁ.mi.nə.ʁe]","[tɛʁ.mi.nə.ʁɔ̃]"] }
  },
  note: "terminer 是及物动词「完成、结束」；se terminer 表示「（活动）自行结束」。",
  ex: [
    { fr: "Je termine mon travail.", zh: "我完成我的工作。", i: "[ʒə tɛʁ.min mɔ̃ tʁa.vaj]" },
    { fr: "Elle a terminé son livre.", zh: "她读完了她的书。", i: "[ɛ.la tɛʁ.mi.ne sɔ̃ livʁ]" }
  ]
},
{
  id: "tomber", inf: "tomber", ipa: "[tɔ̃.be]", zh: "落下；跌倒", grp: "er", aux: "etre", part: "tombé",
  tenses: {
    pres: { f: ["tombe","tombes","tombe","tombons","tombez","tombent"],
            i: ["[tɔ̃b]","[tɔ̃b]","[tɔ̃b]","[tɔ̃.bɔ̃]","[tɔ̃.be]","[tɔ̃b]"] },
    pc: { f: ["suis tombé(e)","es tombé(e)","est tombé(e)","sommes tombé(e)s","êtes tombé(e)s","sont tombé(e)s"],
            i: ["[sɥi.z‿tɔ̃.be]","[ɛ.z‿tɔ̃.be]","[ɛ.t‿tɔ̃.be]","[sɔm.z‿tɔ̃.be]","[ɛt.z‿tɔ̃.be]","[sɔ̃.z‿tɔ̃.be]"] },
    imp: { f: ["tombais","tombais","tombait","tombions","tombiez","tombaient"],
            i: ["[tɔ̃.bɛ]","[tɔ̃.bɛ]","[tɔ̃.bɛ]","[tɔ̃.bjɔ̃]","[tɔ̃.bje]","[tɔ̃.bɛ]"] },
    fut: { f: ["tomberai","tomberas","tombera","tomberons","tomberez","tomberont"],
            i: ["[tɔ̃.bə.ʁe]","[tɔ̃.bə.ʁe]","[tɔ̃.bə.ʁa]","[tɔ̃.bə.ʁɔ̃]","[tɔ̃.bə.ʁe]","[tɔ̃.bə.ʁɔ̃]"] }
  },
  note: "tomber 表「落下、跌倒」是位移动词，标准复合过去时用 être（je suis tombé），过去分词与主语性数配合；tomber amoureux 坠入爱河。",
  ex: [
    { fr: "Il tombe malade.", zh: "他病倒了。", i: "[il tɔ̃b ma.lad]" },
    { fr: "Elle est tombée dans l'escalier.", zh: "她在楼梯上摔倒了。", i: "[ɛ.lɛ.t‿tɔ̃.be dɑ̃ lɛs.ka.lje]" }
  ]
},
{
  id: "travailler", inf: "travailler", ipa: "[tʁa.va.je]", zh: "工作", grp: "er", aux: "avoir", part: "travaillé",
  tenses: {
    pres: { f: ["travaille","travailles","travaille","travaillons","travaillez","travaillent"],
            i: ["[tʁa.vaj]","[tʁa.vaj]","[tʁa.vaj]","[tʁa.va.jɔ̃]","[tʁa.va.je]","[tʁa.vaj]"] },
    pc: { f: ["ai travaillé","as travaillé","a travaillé","avons travaillé","avez travaillé","ont travaillé"],
            i: ["[ʒe tʁa.va.je]","[ty a tʁa.va.je]","[i.la tʁa.va.je]","[nu.z‿a.vɔ̃ tʁa.va.je]","[vu.z‿a.ve tʁa.va.je]","[il.z‿ɔ̃ tʁa.va.je]"] },
    imp: { f: ["travaillais","travaillais","travaillait","travaillions","travailliez","travaillaient"],
            i: ["[tʁa.va.jɛ]","[tʁa.va.jɛ]","[tʁa.va.jɛ]","[tʁa.va.jjɔ̃]","[tʁa.va.jje]","[tʁa.va.jɛ]"] },
    fut: { f: ["travaillerai","travailleras","travaillera","travaillerons","travaillerez","travailleront"],
            i: ["[tʁa.va.jə.ʁe]","[tʁa.va.jə.ʁe]","[tʁa.va.jə.ʁa]","[tʁa.va.jə.ʁɔ̃]","[tʁa.va.jə.ʁe]","[tʁa.va.jə.ʁɔ̃]"] }
  },
  note: "travailler pour 为……工作；travailler dans 在……（公司/领域）工作。",
  ex: [
    { fr: "Je travaille à l'hôpital.", zh: "我在医院工作。", i: "[ʒə tʁa.vaj a lɔ.pi.tal]" },
    { fr: "Elle a travaillé tard.", zh: "她工作到很晚。", i: "[ɛ.la tʁa.va.je taʁ]" }
  ]
},
{
  id: "traverser", inf: "traverser", ipa: "[tʁa.vɛʁ.se]", zh: "穿过；横渡", grp: "er", aux: "avoir", part: "traversé",
  tenses: {
    pres: { f: ["traverse","traverses","traverse","traversons","traversez","traversent"],
            i: ["[tʁa.vɛʁs]","[tʁa.vɛʁs]","[tʁa.vɛʁs]","[tʁa.vɛʁ.sɔ̃]","[tʁa.vɛʁ.se]","[tʁa.vɛʁs]"] },
    pc: { f: ["ai traversé","as traversé","a traversé","avons traversé","avez traversé","ont traversé"],
            i: ["[ʒe tʁa.vɛʁ.se]","[ty a tʁa.vɛʁ.se]","[i.la tʁa.vɛʁ.se]","[nu.z‿a.vɔ̃ tʁa.vɛʁ.se]","[vu.z‿a.ve tʁa.vɛʁ.se]","[il.z‿ɔ̃ tʁa.vɛʁ.se]"] },
    imp: { f: ["traversais","traversais","traversait","traversions","traversiez","traversaient"],
            i: ["[tʁa.vɛʁ.sɛ]","[tʁa.vɛʁ.sɛ]","[tʁa.vɛʁ.sɛ]","[tʁa.vɛʁ.sjɔ̃]","[tʁa.vɛʁ.sje]","[tʁa.vɛʁ.sɛ]"] },
    fut: { f: ["traverserai","traverseras","traversera","traverserons","traverserez","traverseront"],
            i: ["[tʁa.vɛʁ.sə.ʁe]","[tʁa.vɛʁ.sə.ʁe]","[tʁa.vɛʁ.sə.ʁa]","[tʁa.vɛʁ.sə.ʁɔ̃]","[tʁa.vɛʁ.sə.ʁe]","[tʁa.vɛʁ.sə.ʁɔ̃]"] }
  },
  note: "traverser 是及物动词「穿过」，直接接宾语不加介词：traverser la rivière 过河。",
  ex: [
    { fr: "Je traverse la rue.", zh: "我穿过街道。", i: "[ʒə tʁa.vɛʁs la ʁy]" },
    { fr: "Ils ont traversé le pont.", zh: "他们过了桥。", i: "[il.z‿ɔ̃ tʁa.vɛʁ.se lə pɔ̃]" }
  ]
},
{
  id: "trouver", inf: "trouver", ipa: "[tʁu.ve]", zh: "找到；发现；认为", grp: "er", aux: "avoir", part: "trouvé",
  tenses: {
    pres: { f: ["trouve","trouves","trouve","trouvons","trouvez","trouvent"],
            i: ["[tʁuv]","[tʁuv]","[tʁuv]","[tʁu.vɔ̃]","[tʁu.ve]","[tʁuv]"] },
    pc: { f: ["ai trouvé","as trouvé","a trouvé","avons trouvé","avez trouvé","ont trouvé"],
            i: ["[ʒe tʁu.ve]","[ty a tʁu.ve]","[i.la tʁu.ve]","[nu.z‿a.vɔ̃ tʁu.ve]","[vu.z‿a.ve tʁu.ve]","[il.z‿ɔ̃ tʁu.ve]"] },
    imp: { f: ["trouvais","trouvais","trouvait","trouvions","trouviez","trouvaient"],
            i: ["[tʁu.vɛ]","[tʁu.vɛ]","[tʁu.vɛ]","[tʁu.vjɔ̃]","[tʁu.vje]","[tʁu.vɛ]"] },
    fut: { f: ["trouverai","trouveras","trouvera","trouverons","trouverez","trouveront"],
            i: ["[tʁu.və.ʁe]","[tʁu.və.ʁe]","[tʁu.və.ʁa]","[tʁu.və.ʁɔ̃]","[tʁu.və.ʁe]","[tʁu.və.ʁɔ̃]"] }
  },
  note: "trouver 表「找到、发现」；trouver que 表示「认为……」。",
  ex: [
    { fr: "Je trouve mes clés.", zh: "我找到了钥匙。", i: "[ʒə tʁuv me kle]" },
    { fr: "Elle a trouvé un bon restaurant.", zh: "她发现了一家好餐馆。", i: "[ɛ.la tʁu.ve œ̃ bɔ̃ ʁɛs.to.ʁɑ̃]" }
  ]
},
{
  id: "utiliser", inf: "utiliser", ipa: "[y.ti.li.ze]", zh: "使用", grp: "er", aux: "avoir", part: "utilisé",
  tenses: {
    pres: { f: ["utilise","utilises","utilise","utilisons","utilisez","utilisent"],
            i: ["[y.ti.liz]","[y.ti.liz]","[y.ti.liz]","[y.ti.li.zɔ̃]","[y.ti.li.ze]","[y.ti.liz]"] },
    pc: { f: ["ai utilisé","as utilisé","a utilisé","avons utilisé","avez utilisé","ont utilisé"],
            i: ["[ʒe.t‿y.ti.li.ze]","[ty a.z‿y.ti.li.ze]","[i.la.z‿y.ti.li.ze]","[nu.z‿a.vɔ̃.z‿y.ti.li.ze]","[vu.z‿a.ve.z‿y.ti.li.ze]","[il.z‿ɔ̃.z‿y.ti.li.ze]"] },
    imp: { f: ["utilisais","utilisais","utilisait","utilisions","utilisiez","utilisaient"],
            i: ["[y.ti.li.zɛ]","[y.ti.li.zɛ]","[y.ti.li.zɛ]","[y.ti.li.zjɔ̃]","[y.ti.li.zje]","[y.ti.li.zɛ]"] },
    fut: { f: ["utiliserai","utiliseras","utilisera","utiliserons","utiliserez","utiliseront"],
            i: ["[y.ti.li.zə.ʁe]","[y.ti.li.zə.ʁe]","[y.ti.li.zə.ʁa]","[y.ti.li.zə.ʁɔ̃]","[y.ti.li.zə.ʁe]","[y.ti.li.zə.ʁɔ̃]"] }
  },
  note: "utiliser 是及物动词「使用」，直接接宾语：utiliser un ordinateur 用电脑。过去分词以元音开头，复合过去时中联诵。",
  ex: [
    { fr: "J'utilise un ordinateur.", zh: "我使用一台电脑。", i: "[ʒy.ti.liz œ̃.n‿ɔʁ.di.na.tœʁ]" },
    { fr: "Elle a utilisé cette méthode.", zh: "她用了这个方法。", i: "[ɛ.la.z‿y.ti.li.ze sɛt me.tɔd]" }
  ]
},
{
  id: "voyager", inf: "voyager", ipa: "[vwa.ja.ʒe]", zh: "旅行", grp: "er", aux: "avoir", part: "voyagé",
  tenses: {
    pres: { f: ["voyage","voyages","voyage","voyageons","voyagez","voyagent"],
            i: ["[vwa.jaʒ]","[vwa.jaʒ]","[vwa.jaʒ]","[vwa.ja.ʒɔ̃]","[vwa.ja.ʒe]","[vwa.jaʒ]"] },
    pc: { f: ["ai voyagé","as voyagé","a voyagé","avons voyagé","avez voyagé","ont voyagé"],
            i: ["[ʒe vwa.ja.ʒe]","[ty a vwa.ja.ʒe]","[i.la vwa.ja.ʒe]","[nu.z‿a.vɔ̃ vwa.ja.ʒe]","[vu.z‿a.ve vwa.ja.ʒe]","[il.z‿ɔ̃ vwa.ja.ʒe]"] },
    imp: { f: ["voyageais","voyageais","voyageait","voyagions","voyagiez","voyageaient"],
            i: ["[vwa.ja.ʒɛ]","[vwa.ja.ʒɛ]","[vwa.ja.ʒɛ]","[vwa.ja.ʒjɔ̃]","[vwa.ja.ʒje]","[vwa.ja.ʒɛ]"] },
    fut: { f: ["voyagerai","voyageras","voyagera","voyagerons","voyagerez","voyageront"],
            i: ["[vwa.ja.ʒə.ʁe]","[vwa.ja.ʒə.ʁe]","[vwa.ja.ʒə.ʁa]","[vwa.ja.ʒə.ʁɔ̃]","[vwa.ja.ʒə.ʁe]","[vwa.ja.ʒə.ʁɔ̃]"] }
  },
  note: "voyager 是 -ger 结尾动词，nous 写作 voyageons（加 e 保持 [ʒ] 软音）；名词 voyageur 旅行者。",
  ex: [
    { fr: "Je voyage en France.", zh: "我在法国旅行。", i: "[ʒə vwa.jaʒ ɑ̃ fʁɑ̃s]" },
    { fr: "Nous avons voyagé au Japon.", zh: "我们去日本旅行过。", i: "[nu.z‿a.vɔ̃ vwa.ja.ʒe o ʒa.pɔ̃]" }
  ]
},
/* ================= 第二组 -ir ================= */
{
  id: "choisir", inf: "choisir", ipa: "[ʃwa.ziʁ]", zh: "选择", grp: "ir", aux: "avoir", part: "choisi",
  tenses: {
    pres: { f: ["choisis","choisis","choisit","choisissons","choisissez","choisissent"],
            i: ["[ʃwa.zi]","[ʃwa.zi]","[ʃwa.zi]","[ʃwa.zi.sɔ̃]","[ʃwa.zi.se]","[ʃwa.zis]"] },
    pc: { f: ["ai choisi","as choisi","a choisi","avons choisi","avez choisi","ont choisi"],
            i: ["[ʒe ʃwa.zi]","[ty a ʃwa.zi]","[i.la ʃwa.zi]","[nu.z‿a.vɔ̃ ʃwa.zi]","[vu.z‿a.ve ʃwa.zi]","[il.z‿ɔ̃ ʃwa.zi]"] },
    imp: { f: ["choisissais","choisissais","choisissait","choisissions","choisissiez","choisissaient"],
            i: ["[ʃwa.zi.sɛ]","[ʃwa.zi.sɛ]","[ʃwa.zi.sɛ]","[ʃwa.zi.sjɔ̃]","[ʃwa.zi.sje]","[ʃwa.zi.sɛ]"] },
    fut: { f: ["choisirai","choisiras","choisira","choisirons","choisirez","choisiront"],
            i: ["[ʃwa.zi.ʁe]","[ʃwa.zi.ʁe]","[ʃwa.zi.ʁa]","[ʃwa.zi.ʁɔ̃]","[ʃwa.zi.ʁe]","[ʃwa.zi.ʁɔ̃]"] }
  },
  note: "choisir de faire 决定做某事。",
  ex: [
    { fr: "Je choisis le café.", zh: "我选择咖啡。", i: "[ʒə ʃwa.zi lə ka.fe]" },
    { fr: "Elle a choisi la robe rouge.", zh: "她选了那条红裙子。", i: "[ɛ.la ʃwa.zi la ʁɔb ʁuʒ]" }
  ]
},
{
  id: "finir", inf: "finir", ipa: "[fi.niʁ]", zh: "完成；结束", grp: "ir", aux: "avoir", part: "fini",
  tenses: {
    pres: { f: ["finis","finis","finit","finissons","finissez","finissent"],
            i: ["[fi.ni]","[fi.ni]","[fi.ni]","[fi.ni.sɔ̃]","[fi.ni.se]","[fi.nis]"] },
    pc: { f: ["ai fini","as fini","a fini","avons fini","avez fini","ont fini"],
            i: ["[ʒe fi.ni]","[ty a fi.ni]","[i.la fi.ni]","[nu.z‿a.vɔ̃ fi.ni]","[vu.z‿a.ve fi.ni]","[il.z‿ɔ̃ fi.ni]"] },
    imp: { f: ["finissais","finissais","finissait","finissions","finissiez","finissaient"],
            i: ["[fi.ni.sɛ]","[fi.ni.sɛ]","[fi.ni.sɛ]","[fi.ni.sjɔ̃]","[fi.ni.sje]","[fi.ni.sɛ]"] },
    fut: { f: ["finirai","finiras","finira","finirons","finirez","finiront"],
            i: ["[fi.ni.ʁe]","[fi.ni.ʁe]","[fi.ni.ʁa]","[fi.ni.ʁɔ̃]","[fi.ni.ʁe]","[fi.ni.ʁɔ̃]"] }
  },
  note: "第二组动词：词干 fin- + is / it / issons / issez / issent，各部分都带 -iss-。",
  ex: [
    { fr: "Je finis mes devoirs.", zh: "我完成作业。", i: "[ʒə fi.ni me də.vwaʁ]" },
    { fr: "Nous avons fini le travail.", zh: "我们完成了工作。", i: "[nu.z‿a.vɔ̃ fi.ni lə tʁa.vaj]" }
  ]
},
{
  id: "grandir", inf: "grandir", ipa: "[ɡʁɑ̃.diʁ]", zh: "长大；变高", grp: "ir", aux: "avoir", part: "grandi",
  tenses: {
    pres: { f: ["grandis","grandis","grandit","grandissons","grandissez","grandissent"],
            i: ["[ɡʁɑ̃.di]","[ɡʁɑ̃.di]","[ɡʁɑ̃.di]","[ɡʁɑ̃.di.sɔ̃]","[ɡʁɑ̃.di.se]","[ɡʁɑ̃.dis]"] },
    pc: { f: ["ai grandi","as grandi","a grandi","avons grandi","avez grandi","ont grandi"],
            i: ["[ʒe ɡʁɑ̃.di]","[ty a ɡʁɑ̃.di]","[i.la ɡʁɑ̃.di]","[nu.z‿a.vɔ̃ ɡʁɑ̃.di]","[vu.z‿a.ve ɡʁɑ̃.di]","[il.z‿ɔ̃ ɡʁɑ̃.di]"] },
    imp: { f: ["grandissais","grandissais","grandissait","grandissions","grandissiez","grandissaient"],
            i: ["[ɡʁɑ̃.di.sɛ]","[ɡʁɑ̃.di.sɛ]","[ɡʁɑ̃.di.sɛ]","[ɡʁɑ̃.di.sjɔ̃]","[ɡʁɑ̃.di.sje]","[ɡʁɑ̃.di.sɛ]"] },
    fut: { f: ["grandirai","grandiras","grandira","grandirons","grandirez","grandiront"],
            i: ["[ɡʁɑ̃.di.ʁe]","[ɡʁɑ̃.di.ʁe]","[ɡʁɑ̃.di.ʁa]","[ɡʁɑ̃.di.ʁɔ̃]","[ɡʁɑ̃.di.ʁe]","[ɡʁɑ̃.di.ʁɔ̃]"] }
  },
  note: "grandir 也可以指「长大成人」。",
  ex: [
    { fr: "Les enfants grandissent vite.", zh: "孩子们长得很快。", i: "[le.z‿ɑ̃.fɑ̃ ɡʁɑ̃.dis vit]" },
    { fr: "J'ai grandi à Nantes.", zh: "我在南特长大。", i: "[ʒe ɡʁɑ̃.di a nɑ̃t]" }
  ]
},
{
  id: "reussir", inf: "réussir", ipa: "[ʁe.y.siʁ]", zh: "成功", grp: "ir", aux: "avoir", part: "réussi",
  tenses: {
    pres: { f: ["réussis","réussis","réussit","réussissons","réussissez","réussissent"],
            i: ["[ʁe.y.si]","[ʁe.y.si]","[ʁe.y.si]","[ʁe.y.si.sɔ̃]","[ʁe.y.si.se]","[ʁe.y.sis]"] },
    pc: { f: ["ai réussi","as réussi","a réussi","avons réussi","avez réussi","ont réussi"],
            i: ["[ʒe ʁe.y.si]","[ty a ʁe.y.si]","[i.la ʁe.y.si]","[nu.z‿a.vɔ̃ ʁe.y.si]","[vu.z‿a.ve ʁe.y.si]","[il.z‿ɔ̃ ʁe.y.si]"] },
    imp: { f: ["réussissais","réussissais","réussissait","réussissions","réussissiez","réussissaient"],
            i: ["[ʁe.y.si.sɛ]","[ʁe.y.si.sɛ]","[ʁe.y.si.sɛ]","[ʁe.y.si.sjɔ̃]","[ʁe.y.si.sje]","[ʁe.y.si.sɛ]"] },
    fut: { f: ["réussirai","réussiras","réussira","réussirons","réussirez","réussiront"],
            i: ["[ʁe.y.si.ʁe]","[ʁe.y.si.ʁe]","[ʁe.y.si.ʁa]","[ʁe.y.si.ʁɔ̃]","[ʁe.y.si.ʁe]","[ʁe.y.si.ʁɔ̃]"] }
  },
  note: "réussir 是规则第二组动词，变同 finir：réussis / réussit / réussissons；réussir à faire 成功做成某事。",
  ex: [
    { fr: "Il réussit son examen.", zh: "他考试通过了。", i: "[i.l ʁe.y.si sɔ̃.nɛɡ.za.mɛ̃]" },
    { fr: "Nous avons réussi.", zh: "我们成功了。", i: "[nu.z‿a.vɔ̃ ʁe.y.si]" }
  ]
},
/* ================= 不规则动词 ================= */
{
  id: "aller", inf: "aller", ipa: "[a.le]", zh: "去", grp: "irr", aux: "etre", part: "allé",
  tenses: {
    pres: { f: ["vais","vas","va","allons","allez","vont"],
            i: ["[vɛ]","[vɑ]","[va]","[a.lɔ̃]","[a.le]","[vɔ̃]"] },
    pc: { f: ["suis allé(e)","es allé(e)","est allé(e)","sommes allé(e)s","êtes allé(e)s","sont allé(e)s"],
            i: ["[sɥi.z‿a.le]","[ɛ.z‿a.le]","[ɛ.t‿a.le]","[sɔm.z‿a.le]","[ɛt.z‿a.le]","[sɔ̃.z‿a.le]"] },
    imp: { f: ["allais","allais","allait","allions","alliez","allaient"],
            i: ["[a.lɛ]","[a.lɛ]","[a.lɛ]","[a.ljɔ̃]","[a.lje]","[a.lɛ]"] },
    fut: { f: ["irai","iras","ira","irons","irez","iront"],
            i: ["[i.ʁe]","[i.ʁe]","[i.ʁa]","[i.ʁɔ̃]","[i.ʁe]","[i.ʁɔ̃]"] }
  },
  note: "aller 用 être 作助动词，过去分词要配合主语：je suis allé（男）/ allée（女）。",
  ex: [
    { fr: "Je vais à l'école.", zh: "我去学校。", i: "[ʒə vɛ.z‿a le.kɔl]" },
    { fr: "Elle est allée au marché.", zh: "她去了市场。", i: "[ɛ.lɛ.t‿a.le.o maʁ.ʃe]" }
  ]
},
{
  id: "apprendre", inf: "apprendre", ipa: "[a.pʁɑ̃dʁ]", zh: "学习；学会；得知", grp: "irr", aux: "avoir", part: "appris",
  tenses: {
    pres: { f: ["apprends","apprends","apprend","apprenons","apprenez","apprennent"],
            i: ["[a.pʁɑ̃]","[a.pʁɑ̃]","[a.pʁɑ̃]","[a.pʁə.nɔ̃]","[a.pʁə.ne]","[a.pʁɛn]"] },
    pc: { f: ["ai appris","as appris","a appris","avons appris","avez appris","ont appris"],
            i: ["[ʒe.t‿a.pʁi]","[ty a.z‿a.pʁi]","[i.la.z‿a.pʁi]","[nu.z‿a.vɔ̃.z‿a.pʁi]","[vu.z‿a.ve.z‿a.pʁi]","[il.z‿ɔ̃.z‿a.pʁi]"] },
    imp: { f: ["apprenais","apprenais","apprenait","apprenions","appreniez","apprenaient"],
            i: ["[a.pʁə.nɛ]","[a.pʁə.nɛ]","[a.pʁə.nɛ]","[a.pʁə.njɔ̃]","[a.pʁə.nje]","[a.pʁə.nɛ]"] },
    fut: { f: ["apprendrai","apprendras","apprendra","apprendrons","apprendrez","apprendront"],
            i: ["[a.pʁɑ̃.dʁe]","[a.pʁɑ̃.dʁe]","[a.pʁɑ̃.dʁa]","[a.pʁɑ̃.dʁɔ̃]","[a.pʁɑ̃.dʁe]","[a.pʁɑ̃.dʁɔ̃]"] }
  },
  note: "不规则动词，过去分词 appris（同 prendre→pris）；apprendre que 得知；apprendre par cœur 背诵。",
  ex: [
    { fr: "J'apprends le français.", zh: "我学法语。", i: "[ʒa.pʁɑ̃ lə fʁɑ̃.sɛ]" },
    { fr: "Elle a appris la nouvelle.", zh: "她得知了这个消息。", i: "[ɛ.la.z‿a.pʁi la nu.vɛl]" }
  ]
},
{
  id: "attendre", inf: "attendre", ipa: "[a.tɑ̃dʁ]", zh: "等待；等候", grp: "irr", aux: "avoir", part: "attendu",
  tenses: {
    pres: { f: ["j'attends","attends","attend","attendons","attendez","attendent"],
            i: ["[ʒa.tɑ̃]","[a.tɑ̃]","[a.tɑ̃]","[a.tɑ̃.dɔ̃]","[a.tɑ̃.de]","[a.tɑ̃d]"] },
    pc: { f: ["ai attendu","as attendu","a attendu","avons attendu","avez attendu","ont attendu"],
            i: ["[ʒe.t‿a.tɑ̃.dy]","[ty a.z‿a.tɑ̃.dy]","[i.la.z‿a.tɑ̃.dy]","[nu.z‿a.vɔ̃.z‿a.tɑ̃.dy]","[vu.z‿a.ve.z‿a.tɑ̃.dy]","[il.z‿ɔ̃.z‿a.tɑ̃.dy]"] },
    imp: { f: ["attendais","attendais","attendait","attendions","attendiez","attendaient"],
            i: ["[a.tɑ̃.dɛ]","[a.tɑ̃.dɛ]","[a.tɑ̃.dɛ]","[a.tɑ̃.djɔ̃]","[a.tɑ̃.dje]","[a.tɑ̃.dɛ]"] },
    fut: { f: ["attendrai","attendras","attendra","attendrons","attendrez","attendront"],
            i: ["[a.tɑ̃.dʁe]","[a.tɑ̃.dʁe]","[a.tɑ̃.dʁa]","[a.tɑ̃.dʁɔ̃]","[a.tɑ̃.dʁe]","[a.tɑ̃.dʁɔ̃]"] }
  },
  note: "attendre 属第三组 -re 动词（按不规则组归类），变位同 descendre；过去分词 attendu；attendre qqn/qch 等待某人/某物。",
  ex: [
    { fr: "J'attends le bus.", zh: "我在等公交车。", i: "[ʒa.tɑ̃ lə bys]" },
    { fr: "Nous avons attendu une heure.", zh: "我们等了一个小时。", i: "[nu.z‿a.vɔ̃.z‿a.tɑ̃.dy yn œʁ]" }
  ]
},
{
  id: "avoir", inf: "avoir", ipa: "[a.vwaʁ]", zh: "有", grp: "irr", aux: "avoir", part: "eu",
  tenses: {
    pres: { f: ["ai","as","a","avons","avez","ont"],
            i: ["[e]","[a]","[a]","[a.vɔ̃]","[a.ve]","[ɔ̃]"] },
    pc: { f: ["ai eu","as eu","a eu","avons eu","avez eu","ont eu"],
            i: ["[e y]","[a y]","[a y]","[a.vɔ̃.z‿y]","[a.ve.z‿y]","[ɔ̃.z‿y]"] },
    imp: { f: ["avais","avais","avait","avions","aviez","avaient"],
            i: ["[a.vɛ]","[a.vɛ]","[a.vɛ]","[a.vjɔ̃]","[a.vje]","[a.vɛ]"] },
    fut: { f: ["aurai","auras","aura","aurons","aurez","auront"],
            i: ["[o.ʁe]","[o.ʁe]","[o.ʁa]","[o.ʁɔ̃]","[o.ʁe]","[o.ʁɔ̃]"] }
  },
  note: "avoir 表示「有」，也是大多数动词复合过去时的助动词；aur- 是将来时词干。",
  ex: [
    { fr: "J'ai un chat.", zh: "我有一只猫。", i: "[ʒe œ̃ ʃa]" },
    { fr: "Nous avons eu peur !", zh: "我们吓了一跳！", i: "[nu.z‿a.vɔ̃.z‿y pœʁ]" }
  ]
},
{
  id: "boire", inf: "boire", ipa: "[bwaʁ]", zh: "喝", grp: "irr", aux: "avoir", part: "bu",
  tenses: {
    pres: { f: ["bois","bois","boit","buvons","buvez","boivent"],
            i: ["[bwa]","[bwa]","[bwa]","[by.vɔ̃]","[by.ve]","[bwav]"] },
    pc: { f: ["ai bu","as bu","a bu","avons bu","avez bu","ont bu"],
            i: ["[ʒe by]","[ty a by]","[i.la by]","[nu.z‿a.vɔ̃ by]","[vu.z‿a.ve by]","[il.z‿ɔ̃ by]"] },
    imp: { f: ["buvais","buvais","buvait","buvions","buviez","buvaient"],
            i: ["[by.vɛ]","[by.vɛ]","[by.vɛ]","[by.vjɔ̃]","[by.vje]","[by.vɛ]"] },
    fut: { f: ["boirai","boiras","boira","boirons","boirez","boiront"],
            i: ["[bwa.ʁe]","[bwa.ʁe]","[bwa.ʁa]","[bwa.ʁɔ̃]","[bwa.ʁe]","[bwa.ʁɔ̃]"] }
  },
  note: "boire 单数用 bo-，复数变为 buv-（buvons），将来时词干 boir-。",
  ex: [
    { fr: "Je bois de l'eau.", zh: "我喝水。", i: "[ʒə bwa də lo]" },
    { fr: "Nous avons bu du vin.", zh: "我们喝了葡萄酒。", i: "[nu.z‿a.vɔ̃ by dy vɛ̃]" }
  ]
},
{
  id: "comprendre", inf: "comprendre", ipa: "[kɔ̃.pʁɑ̃dʁ]", zh: "理解；明白", grp: "irr", aux: "avoir", part: "compris",
  tenses: {
    pres: { f: ["comprends","comprends","comprend","comprenons","comprenez","comprennent"],
            i: ["[kɔ̃.pʁɑ̃]","[kɔ̃.pʁɑ̃]","[kɔ̃.pʁɑ̃]","[kɔ̃.pʁə.nɔ̃]","[kɔ̃.pʁə.ne]","[kɔ̃.pʁɛn]"] },
    pc: { f: ["ai compris","as compris","a compris","avons compris","avez compris","ont compris"],
            i: ["[ʒe kɔ̃.pʁi]","[ty a kɔ̃.pʁi]","[i.la kɔ̃.pʁi]","[nu.z‿a.vɔ̃ kɔ̃.pʁi]","[vu.z‿a.ve kɔ̃.pʁi]","[il.z‿ɔ̃ kɔ̃.pʁi]"] },
    imp: { f: ["comprenais","comprenais","comprenait","comprenions","compreniez","comprenaient"],
            i: ["[kɔ̃.pʁə.nɛ]","[kɔ̃.pʁə.nɛ]","[kɔ̃.pʁə.nɛ]","[kɔ̃.pʁə.njɔ̃]","[kɔ̃.pʁə.nje]","[kɔ̃.pʁə.nɛ]"] },
    fut: { f: ["comprendrai","comprendras","comprendra","comprendrons","comprendrez","comprendront"],
            i: ["[kɔ̃.pʁɑ̃.dʁe]","[kɔ̃.pʁɑ̃.dʁe]","[kɔ̃.pʁɑ̃.dʁa]","[kɔ̃.pʁɑ̃.dʁɔ̃]","[kɔ̃.pʁɑ̃.dʁe]","[kɔ̃.pʁɑ̃.dʁɔ̃]"] }
  },
  note: "comprendre 属第三组不规则动词，过去分词为 compris（不规则）；il/ils 词干变为 comprenn-（ils comprennent）。",
  ex: [
    { fr: "Je comprends la question.", zh: "我理解这个问题。", i: "[ʒə kɔ̃.pʁɑ̃ la kɛs.tjɔ̃]" },
    { fr: "Elle a compris le problème.", zh: "她明白了这个问题。", i: "[ɛ.la kɔ̃.pʁi lə pʁɔ.blɛm]" }
  ]
},
{
  id: "connaitre", inf: "connaître", ipa: "[kɔ.nɛtʁ]", zh: "认识；了解", grp: "irr", aux: "avoir", part: "connu",
  tenses: {
    pres: { f: ["connais","connais","connaît","connaissons","connaissez","connaissent"],
            i: ["[kɔ.nɛ]","[kɔ.nɛ]","[kɔ.nɛ]","[kɔ.nɛ.sɔ̃]","[kɔ.nɛ.se]","[kɔ.nɛs]"] },
    pc: { f: ["ai connu","as connu","a connu","avons connu","avez connu","ont connu"],
            i: ["[ʒe kɔ.ny]","[ty a kɔ.ny]","[i.la kɔ.ny]","[nu.z‿a.vɔ̃ kɔ.ny]","[vu.z‿a.ve kɔ.ny]","[il.z‿ɔ̃ kɔ.ny]"] },
    imp: { f: ["connaissais","connaissais","connaissait","connaissions","connaissiez","connaissaient"],
            i: ["[kɔ.nɛ.sɛ]","[kɔ.nɛ.sɛ]","[kɔ.nɛ.sɛ]","[kɔ.nɛ.sjɔ̃]","[kɔ.nɛ.sje]","[kɔ.nɛ.sɛ]"] },
    fut: { f: ["connaîtrai","connaîtras","connaîtra","connaîtrons","connaîtrez","connaîtront"],
            i: ["[kɔ.nɛ.tʁe]","[kɔ.nɛ.tʁe]","[kɔ.nɛ.tʁa]","[kɔ.nɛ.tʁɔ̃]","[kɔ.nɛ.tʁe]","[kɔ.nɛ.tʁɔ̃]"] }
  },
  note: "现在时复数词干为 connaiss-（单数 ê 在复数变 iss），未完成过去时也用 connaiss-；将来时词干 connaîtr-；过去分词 connu。connaître 指「认识人、熟悉/了解某事」，savoir 指「知道事实、会做某事」。",
  ex: [
    { fr: "Je connais Paul.", zh: "我认识保罗。", i: "[ʒə kɔ.nɛ pɔl]" },
    { fr: "Nous avons connu cette ville.", zh: "我们曾了解这座城市。", i: "[nu.z‿a.vɔ̃ kɔ.ny sɛt vil]" }
  ]
},
{
  id: "croire", inf: "croire", ipa: "[kʁwaʁ]", zh: "相信；认为", grp: "irr", aux: "avoir", part: "cru",
  tenses: {
    pres: { f: ["crois","crois","croit","croyons","croyez","croient"],
            i: ["[kʁwa]","[kʁwa]","[kʁwa]","[kʁwa.jɔ̃]","[kʁwa.je]","[kʁwa]"] },
    pc: { f: ["ai cru","as cru","a cru","avons cru","avez cru","ont cru"],
            i: ["[ʒe kʁy]","[ty a kʁy]","[i.la kʁy]","[nu.z‿a.vɔ̃ kʁy]","[vu.z‿a.ve kʁy]","[il.z‿ɔ̃ kʁy]"] },
    imp: { f: ["croyais","croyais","croyait","croyions","croyiez","croyaient"],
            i: ["[kʁwa.jɛ]","[kʁwa.jɛ]","[kʁwa.jɛ]","[kʁwa.jɔ̃]","[kʁwa.je]","[kʁwa.jɛ]"] },
    fut: { f: ["croirai","croiras","croira","croirons","croirez","croiront"],
            i: ["[kʁwa.ʁe]","[kʁwa.ʁe]","[kʁwa.ʁa]","[kʁwa.ʁɔ̃]","[kʁwa.ʁe]","[kʁwa.ʁɔ̃]"] }
  },
  note: "croire 属第三组不规则动词：单数词干 croi-，nous/vous 用 croy-（nous croyons）；过去分词为 cru（无重音），助动词用 avoir；将来时 ils croiront；croire que 表示「认为、相信」。",
  ex: [
    { fr: "Je crois que tu as raison.", zh: "我相信你是对的。", i: "[ʒə kʁwa kə ty a ʁɛ.zɔ̃]" },
    { fr: "Ils croiront à la victoire.", zh: "他们会相信胜利。", i: "[il kʁwa.ʁɔ̃ a la vik.twaʁ]" }
  ]
},
{
  id: "descendre", inf: "descendre", ipa: "[də.sɑ̃dʁ]", zh: "下来；下降", grp: "irr", aux: "avoir", part: "descendu",
  tenses: {
    pres: { f: ["descends","descends","descend","descendons","descendez","descendent"],
            i: ["[də.sɑ̃]","[də.sɑ̃]","[də.sɑ̃]","[də.sɑ̃.dɔ̃]","[də.sɑ̃.de]","[də.sɑ̃d]"] },
    pc: { f: ["ai descendu","as descendu","a descendu","avons descendu","avez descendu","ont descendu"],
            i: ["[ʒe də.sɑ̃.dy]","[ty a də.sɑ̃.dy]","[i.la də.sɑ̃.dy]","[nu.z‿a.vɔ̃ də.sɑ̃.dy]","[vu.z‿a.ve də.sɑ̃.dy]","[il.z‿ɔ̃ də.sɑ̃.dy]"] },
    imp: { f: ["descendais","descendais","descendait","descendions","descendiez","descendaient"],
            i: ["[də.sɑ̃.dɛ]","[də.sɑ̃.dɛ]","[də.sɑ̃.dɛ]","[də.sɑ̃.djɔ̃]","[də.sɑ̃.dje]","[də.sɑ̃.dɛ]"] },
    fut: { f: ["descendrai","descendras","descendra","descendrons","descendrez","descendront"],
            i: ["[də.sɑ̃.dʁe]","[də.sɑ̃.dʁe]","[də.sɑ̃.dʁa]","[də.sɑ̃.dʁɔ̃]","[də.sɑ̃.dʁe]","[də.sɑ̃.dʁɔ̃]"] }
  },
  note: "descendre 通常用 avoir 作助动词（j'ai descendu la valise，有直接宾语时);也可按运动动词用 être（je suis descendu），用 être 时过去分词要与主语性数配合。单数形式的 -e- 不发音。",
  ex: [
    { fr: "Je descends les escaliers.", zh: "我下楼梯。", i: "[ʒə də.sɑ̃ le.z‿es.ka.lje]" },
    { fr: "Il est descendu au sous-sol.", zh: "他下到了地下室。", i: "[i.lɛ də.sɑ̃.dy o su.sɔl]" }
  ]
},
{
  id: "detendre", inf: "détendre", ipa: "[de.tɑ̃dʁ]", zh: "放松；使松弛", grp: "irr", aux: "avoir", part: "détendu",
  tenses: {
    pres: { f: ["détends","détends","détend","détendons","détendez","détendent"],
            i: ["[də.tɑ̃]","[də.tɑ̃]","[də.tɑ̃]","[də.tɑ̃.dɔ̃]","[də.tɑ̃.de]","[də.tɑ̃d]"] },
    pc: { f: ["ai détendu","as détendu","a détendu","avons détendu","avez détendu","ont détendu"],
            i: ["[ʒe də.tɑ̃.dy]","[ty a də.tɑ̃.dy]","[i.la də.tɑ̃.dy]","[nu.z‿a.vɔ̃ də.tɑ̃.dy]","[vu.z‿a.ve də.tɑ̃.dy]","[il.z‿ɔ̃ də.tɑ̃.dy]"] },
    imp: { f: ["détendais","détendais","détendait","détendions","détendiez","détendaient"],
            i: ["[də.tɑ̃.dɛ]","[də.tɑ̃.dɛ]","[də.tɑ̃.dɛ]","[də.tɑ̃.djɔ̃]","[də.tɑ̃.dje]","[də.tɑ̃.dɛ]"] },
    fut: { f: ["détendrai","détendras","détendra","détendrons","détendrez","détendront"],
            i: ["[də.tɑ̃.dʁe]","[də.tɑ̃.dʁe]","[də.tɑ̃.dʁa]","[də.tɑ̃.dʁɔ̃]","[də.tɑ̃.dʁe]","[də.tɑ̃.dʁɔ̃]"] }
  },
  note: "détendre 按规则 -re 动词变位（同 descendre），过去分词 détendu。更常见的是代动词 se détendre「放松自己」：je me détends, je me suis détendu。",
  ex: [
    { fr: "Je me détends après le travail.", zh: "下班后我放松一下。", i: "[ʒə mə də.tɑ̃ apʁɛ lə tʁa.vaj]" },
    { fr: "Il a détendu les muscles.", zh: "他放松了肌肉。", i: "[i.la də.tɑ̃.dy le myskl]" }
  ]
},
{
  id: "devoir", inf: "devoir", ipa: "[də.vwaʁ]", zh: "应该；欠", grp: "irr", aux: "avoir", part: "dû",
  tenses: {
    pres: { f: ["dois","dois","doit","devons","devez","doivent"],
            i: ["[dwa]","[dwa]","[dwa]","[də.vɔ̃]","[də.ve]","[dwav]"] },
    pc: { f: ["ai dû","as dû","a dû","avons dû","avez dû","ont dû"],
            i: ["[ʒe dy]","[ty a dy]","[i.la dy]","[nu.z‿a.vɔ̃ dy]","[vu.z‿a.ve dy]","[il.z‿ɔ̃ dy]"] },
    imp: { f: ["devais","devais","devait","devions","deviez","devaient"],
            i: ["[də.vɛ]","[də.vɛ]","[də.vɛ]","[də.vjɔ̃]","[də.vje]","[də.vɛ]"] },
    fut: { f: ["devrai","devras","devra","devrons","devrez","devront"],
            i: ["[də.vʁe]","[də.vʁe]","[də.vʁa]","[də.vʁɔ̃]","[də.vʁe]","[də.vʁɔ̃]"] }
  },
  note: "devoir + 动词原形表示「应该」；过去分词 dû 的阴性 dû / du 不变（本身无阴阳变化，单数同形）。",
  ex: [
    { fr: "Je dois étudier.", zh: "我应该学习。", i: "[ʒə dwa.z‿e.ty.dje]" },
    { fr: "Tu as dû attendre.", zh: "你只好等了。", i: "[ty a dy a.tɑ̃dʁ]" }
  ]
},
{
  id: "dire", inf: "dire", ipa: "[diʁ]", zh: "说；告诉", grp: "irr", aux: "avoir", part: "dit",
  tenses: {
    pres: { f: ["dis","dis","dit","disons","dites","disent"],
            i: ["[di]","[di]","[di]","[di.zɔ̃]","[dit]","[diz]"] },
    pc: { f: ["ai dit","as dit","a dit","avons dit","avez dit","ont dit"],
            i: ["[ʒe di]","[ty a di]","[i.la di]","[nu.z‿a.vɔ̃ di]","[vu.z‿a.ve di]","[il.z‿ɔ̃ di]"] },
    imp: { f: ["disais","disais","disait","disions","disiez","disaient"],
            i: ["[di.zɛ]","[di.zɛ]","[di.zɛ]","[di.zjɔ̃]","[di.zje]","[di.zɛ]"] },
    fut: { f: ["dirai","diras","dira","dirons","direz","diront"],
            i: ["[di.ʁe]","[di.ʁe]","[di.ʁa]","[di.ʁɔ̃]","[di.ʁe]","[di.ʁɔ̃]"] }
  },
  note: "dire 的 vous 形式是不规则拼写 dites（读 [dit]，不是 *disez），ils 形式 disent 读 [diz]；过去分词 dit；将来时词干 dir-。常用 dire qch à qqn 把某事告诉某人。",
  ex: [
    { fr: "Je dis la vérité.", zh: "我说实话。", i: "[ʒə di la ve.ʁi.te]" },
    { fr: "Vous avez dit bonjour.", zh: "你们说了你好。", i: "[vu.z‿a.ve di bɔ̃.ʒuʁ]" }
  ]
},
{
  id: "dormir", inf: "dormir", ipa: "[dɔʁ.miʁ]", zh: "睡觉", grp: "irr", aux: "avoir", part: "dormi",
  tenses: {
    pres: { f: ["dors","dors","dort","dormons","dormez","dorment"],
            i: ["[dɔʁ]","[dɔʁ]","[dɔʁ]","[dɔʁ.mɔ̃]","[dɔʁ.me]","[dɔʁm]"] },
    pc: { f: ["ai dormi","as dormi","a dormi","avons dormi","avez dormi","ont dormi"],
            i: ["[ʒe dɔʁ.mi]","[ty a dɔʁ.mi]","[i.la dɔʁ.mi]","[nu.z‿a.vɔ̃ dɔʁ.mi]","[vu.z‿a.ve dɔʁ.mi]","[il.z‿ɔ̃ dɔʁ.mi]"] },
    imp: { f: ["dormais","dormais","dormait","dormions","dormiez","dormaient"],
            i: ["[dɔʁ.mɛ]","[dɔʁ.mɛ]","[dɔʁ.mɛ]","[dɔʁ.mjɔ̃]","[dɔʁ.mje]","[dɔʁ.mɛ]"] },
    fut: { f: ["dormirai","dormiras","dormira","dormirons","dormirez","dormiront"],
            i: ["[dɔʁ.mi.ʁe]","[dɔʁ.mi.ʁe]","[dɔʁ.mi.ʁa]","[dɔʁ.mi.ʁɔ̃]","[dɔʁ.mi.ʁe]","[dɔʁ.mi.ʁɔ̃]"] }
  },
  note: "dormir 属第二组 -ir 动词，但单数不用 -iss-：je dors, tu dors, il dort；复数才是 dormons, dormez。未完成过去时词干 dorm-，将来时词干 dormir-。同族：endormir, s'endormir。",
  ex: [
    { fr: "Je dors huit heures.", zh: "我睡八个小时。", i: "[ʒə dɔʁ ɥit œʁ]" },
    { fr: "Elle a dormi toute la nuit.", zh: "她睡了一整夜。", i: "[ɛ.la dɔʁ.mi tut la nɥi]" }
  ]
},
{
  id: "ecrire", inf: "écrire", ipa: "[e.kʁiʁ]", zh: "写", grp: "irr", aux: "avoir", part: "écrit",
  tenses: {
    pres: { f: ["écris","écris","écrit","écrivons","écrivez","écrivent"],
            i: ["[e.kʁi]","[e.kʁi]","[e.kʁi]","[e.kʁi.vɔ̃]","[e.kʁi.ve]","[e.kʁiv]"] },
    pc: { f: ["ai écrit","as écrit","a écrit","avons écrit","avez écrit","ont écrit"],
            i: ["[ʒe.t‿e.kʁi]","[ty a.z‿e.kʁi]","[i.la.z‿e.kʁi]","[nu.z‿a.vɔ̃.z‿e.kʁi]","[vu.z‿a.ve.z‿e.kʁi]","[il.z‿ɔ̃.z‿e.kʁi]"] },
    imp: { f: ["écrivais","écrivais","écrivait","écrivions","écriviez","écrivaient"],
            i: ["[e.kʁi.vɛ]","[e.kʁi.vɛ]","[e.kʁi.vɛ]","[e.kʁi.vjɔ̃]","[e.kʁi.vje]","[e.kʁi.vɛ]"] },
    fut: { f: ["écrirai","écriras","écrira","écrirons","écrirez","écriront"],
            i: ["[e.kʁi.ʁe]","[e.kʁi.ʁe]","[e.kʁi.ʁa]","[e.kʁi.ʁɔ̃]","[e.kʁi.ʁe]","[e.kʁi.ʁɔ̃]"] }
  },
  note: "écrire 现在时复数带 -iv-（écrivons），将来时词干 écrir-。",
  ex: [
    { fr: "J'écris une lettre.", zh: "我写一封信。", i: "[ʒe.kʁi.zy.nə lɛtʁ]" },
    { fr: "Tu as écrit un mail.", zh: "你写了一封邮件。", i: "[ty a.z‿e.kʁi.t‿œ̃ mail]" }
  ]
},
{
  id: "endormir", inf: "endormir", ipa: "[ɑ̃.dɔʁ.miʁ]", zh: "使入睡；催眠", grp: "irr", aux: "avoir", part: "endormi",
  tenses: {
    pres: { f: ["endors","endors","endort","endormons","endormez","endorment"],
            i: ["[ɑ̃.dɔʁ]","[ɑ̃.dɔʁ]","[ɑ̃.dɔʁ]","[ɑ̃.dɔʁ.mɔ̃]","[ɑ̃.dɔʁ.me]","[ɑ̃.dɔʁm]"] },
    pc: { f: ["ai endormi","as endormi","a endormi","avons endormi","avez endormi","ont endormi"],
            i: ["[ʒe ɑ̃.dɔʁ.mi]","[ty a ɑ̃.dɔʁ.mi]","[i.la ɑ̃.dɔʁ.mi]","[nu.z‿a.vɔ̃ ɑ̃.dɔʁ.mi]","[vu.z‿a.ve ɑ̃.dɔʁ.mi]","[il.z‿ɔ̃ ɑ̃.dɔʁ.mi]"] },
    imp: { f: ["endormais","endormais","endormait","endormions","endormiez","endormaient"],
            i: ["[ɑ̃.dɔʁ.mɛ]","[ɑ̃.dɔʁ.mɛ]","[ɑ̃.dɔʁ.mɛ]","[ɑ̃.dɔʁ.mjɔ̃]","[ɑ̃.dɔʁ.mje]","[ɑ̃.dɔʁ.mɛ]"] },
    fut: { f: ["endormirai","endormiras","endormira","endormirons","endormirez","endormiront"],
            i: ["[ɑ̃.dɔʁ.mi.ʁe]","[ɑ̃.dɔʁ.mi.ʁe]","[ɑ̃.dɔʁ.mi.ʁa]","[ɑ̃.dɔʁ.mi.ʁɔ̃]","[ɑ̃.dɔʁ.mi.ʁe]","[ɑ̃.dɔʁ.mi.ʁɔ̃]"] }
  },
  note: "endormir 变位同 dormir：单数词干 endors-（无 -iss-），复数为 endormons / endormez；过去分词 endormi。代动词 s'endormir 表示「入睡、睡着」。",
  ex: [
    { fr: "Le bébé s’endort.", zh: "宝宝睡着了。", i: "[lə be.be s‿ɑ̃.dɔʁ]" },
    { fr: "La musique a endormi les enfants.", zh: "音乐把孩子们哄睡了。", i: "[la my.zik a ɑ̃.dɔʁ.mi le.z‿ɑ̃.fɑ̃]" }
  ]
},
{
  id: "etre", inf: "être", ipa: "[ɛtʁ]", zh: "是", grp: "irr", aux: "avoir", part: "été",
  tenses: {
    pres: { f: ["suis","es","est","sommes","êtes","sont"],
            i: ["[sɥi]","[ɛ]","[ɛ]","[sɔm]","[ɛt]","[sɔ̃]"] },
    pc: { f: ["ai été","as été","a été","avons été","avez été","ont été"],
            i: ["[ʒe.t‿e.te]","[ty a.z‿e.te]","[i.la.z‿e.te]","[nu.z‿a.vɔ̃.z‿e.te]","[vu.z‿a.ve.z‿e.te]","[il.z‿ɔ̃.z‿e.te]"] },
    imp: { f: ["étais","étais","était","étions","étiez","étaient"],
            i: ["[e.tɛ]","[e.tɛ]","[e.tɛ]","[e.tjɔ̃]","[e.tje]","[e.tɛ]"] },
    fut: { f: ["serai","seras","sera","serons","serez","seront"],
            i: ["[sə.ʁe]","[sə.ʁe]","[sə.ʁa]","[sə.ʁɔ̃]","[sə.ʁe]","[sə.ʁɔ̃]"] }
  },
  note: "être 变位完全特殊，必须整体记忆；它的复合时态用 avoir：j'ai été。ét- 是未完成过去时的词干。",
  ex: [
    { fr: "Je suis étudiant.", zh: "我是学生。", i: "[ʒə sɥi.z‿e.ty.djɑ̃]" },
    { fr: "Il a été malade hier.", zh: "他昨天生病了。", i: "[i.la.z‿e.te ma.lad jɛʁ]" }
  ]
},
{
  id: "faire", inf: "faire", ipa: "[fɛʁ]", zh: "做", grp: "irr", aux: "avoir", part: "fait",
  tenses: {
    pres: { f: ["fais","fais","fait","faisons","faites","font"],
            i: ["[fɛ]","[fɛ]","[fɛ]","[fə.zɔ̃]","[fɛt]","[fɔ̃]"] },
    pc: { f: ["ai fait","as fait","a fait","avons fait","avez fait","ont fait"],
            i: ["[ʒe fɛ]","[ty a fɛ]","[i.la fɛ]","[nu.z‿a.vɔ̃ fɛ]","[vu.z‿a.ve fɛ]","[il.z‿ɔ̃ fɛ]"] },
    imp: { f: ["faisais","faisais","faisait","faisions","faisiez","faisaient"],
            i: ["[fə.zɛ]","[fə.zɛ]","[fə.zɛ]","[fə.zjɔ̃]","[fə.zje]","[fə.zɛ]"] },
    fut: { f: ["ferai","feras","fera","ferons","ferez","feront"],
            i: ["[fə.ʁe]","[fə.ʁe]","[fə.ʁa]","[fə.ʁɔ̃]","[fə.ʁe]","[fə.ʁɔ̃]"] }
  },
  note: "faire du sport 做运动；faire les courses 购物。第三人称复数 sont fait 变 font。",
  ex: [
    { fr: "Je fais du sport.", zh: "我做运动。", i: "[ʒə fɛ dy spɔʁ]" },
    { fr: "Vous avez fait un gâteau ?", zh: "你们做了蛋糕吗？", i: "[vu.z‿a.ve fɛ œ̃ ɡa.to]" }
  ]
},
{
  id: "falloir", inf: "falloir", ipa: "[fa.lwaʁ]", zh: "需要；必须（无人称）", grp: "irr", aux: "avoir", part: "fallu",
  tenses: {
    pres: { f: ["—","—","faut","—","—","—"],
            i: ["","","[fo]","","",""] },
    pc: { f: ["—","—","a fallu","—","—","—"],
            i: ["","","[a fa.ly]","","",""] },
    imp: { f: ["—","—","fallait","—","—","—"],
            i: ["","","[fa.lɛ]","","",""] },
    fut: { f: ["—","—","faudra","—","—","—"],
            i: ["","","[fo.dʁa]","","",""] }
  },
  note: "falloir 是无人称动词（verbe impersonnel），只有第三人称单数 il：il faut（现在）、il fallait（未完成过去）、il a fallu（复合过去）、il faudra（简单将来），其余人称不存在。常用结构：il faut + 动词原形，或 il faut que + 虚拟式。",
  ex: [
    { fr: "Il faut étudier.", zh: "必须学习。", i: "[il fo.z‿e.ty.dje]" },
    { fr: "Il a fallu partir tôt.", zh: "当时不得不早早出发。", i: "[i.la fa.ly paʁ.tiʁ to]" }
  ]
},
{
  id: "lire", inf: "lire", ipa: "[liʁ]", zh: "读", grp: "irr", aux: "avoir", part: "lu",
  tenses: {
    pres: { f: ["lis","lis","lit","lisons","lisez","lisent"],
            i: ["[lis]","[lis]","[li]","[li.zɔ̃]","[li.ze]","[liz]"] },
    pc: { f: ["ai lu","as lu","a lu","avons lu","avez lu","ont lu"],
            i: ["[ʒe ly]","[ty a ly]","[i.la ly]","[nu.z‿a.vɔ̃ ly]","[vu.z‿a.ve ly]","[il.z‿ɔ̃ ly]"] },
    imp: { f: ["lisais","lisais","lisait","lisions","lisiez","lisaient"],
            i: ["[li.zɛ]","[li.zɛ]","[li.zɛ]","[li.zjɔ̃]","[li.zje]","[li.zɛ]"] },
    fut: { f: ["lirai","liras","lira","lirons","lirez","liront"],
            i: ["[li.ʁe]","[li.ʁe]","[li.ʁa]","[li.ʁɔ̃]","[li.ʁe]","[li.ʁɔ̃]"] }
  },
  note: "lire 只有三个字母却很不规则：il lit [li] 词尾 t 不发音。",
  ex: [
    { fr: "Je lis un livre.", zh: "我读一本书。", i: "[ʒə li.z‿œ̃ livʁ]" },
    { fr: "Elle a lu le journal.", zh: "她读了报纸。", i: "[ɛ.la ly lə ʒuʁ.nal]" }
  ]
},
{
  id: "mettre", inf: "mettre", ipa: "[mɛtʁ]", zh: "放", grp: "irr", aux: "avoir", part: "mis",
  tenses: {
    pres: { f: ["mets","mets","met","mettons","mettez","mettent"],
            i: ["[mɛ]","[mɛ]","[mɛ]","[mɛ.tɔ̃]","[mɛ.te]","[mɛt]"] },
    pc: { f: ["ai mis","as mis","a mis","avons mis","avez mis","ont mis"],
            i: ["[ʒe mi]","[ty a mi]","[i.la mi]","[nu.z‿a.vɔ̃ mi]","[vu.z‿a.ve mi]","[il.z‿ɔ̃ mi]"] },
    imp: { f: ["mettais","mettais","mettait","mettions","mettiez","mettaient"],
            i: ["[mɛ.tɛ]","[mɛ.tɛ]","[mɛ.tɛ]","[mɛ.tjɔ̃]","[mɛ.tje]","[mɛ.tɛ]"] },
    fut: { f: ["mettrai","mettras","mettra","mettrons","mettrez","mettront"],
            i: ["[mɛ.tʁe]","[mɛ.tʁe]","[mɛ.tʁa]","[mɛ.tʁɔ̃]","[mɛ.tʁe]","[mɛ.tʁɔ̃]"] }
  },
  note: "mettre 双写 t；同族：permettre 允许，promettre 许诺。",
  ex: [
    { fr: "Je mets mon manteau.", zh: "我穿上外套。", i: "[ʒə mɛ mɔ̃ mɑ̃.to]" },
    { fr: "Elle a mis la table.", zh: "她摆好了桌子。", i: "[ɛ.la mi la tabl]" }
  ]
},
{
  id: "offrir", inf: "offrir", ipa: "[ɔ.fʁiʁ]", zh: "提供；赠送", grp: "irr", aux: "avoir", part: "offert",
  tenses: {
    pres: { f: ["offre","offres","offre","offrons","offrez","offrent"],
            i: ["[ɔfʁ]","[ɔfʁ]","[ɔfʁ]","[ɔ.fʁɔ̃]","[ɔ.fʁe]","[ɔfʁ]"] },
    pc: { f: ["ai offert","as offert","a offert","avons offert","avez offert","ont offert"],
            i: ["[ʒe ɔ.fɛʁ]","[ty a ɔ.fɛʁ]","[i.la ɔ.fɛʁ]","[nu.z‿a.vɔ̃ ɔ.fɛʁ]","[vu.z‿a.ve ɔ.fɛʁ]","[il.z‿ɔ̃ ɔ.fɛʁ]"] },
    imp: { f: ["offrais","offrais","offrait","offrions","offriez","offraient"],
            i: ["[ɔ.fʁɛ]","[ɔ.fʁɛ]","[ɔ.fʁɛ]","[ɔ.fʁjɔ̃]","[ɔ.fʁje]","[ɔ.fʁɛ]"] },
    fut: { f: ["offrirai","offriras","offrira","offrirons","offrirez","offriront"],
            i: ["[ɔ.fʁi.ʁe]","[ɔ.fʁi.ʁe]","[ɔ.fʁi.ʁa]","[ɔ.fʁi.ʁɔ̃]","[ɔ.fʁi.ʁe]","[ɔ.fʁi.ʁɔ̃]"] }
  },
  note: "offrir 虽以 -ir 结尾，却按 -er 型变位（offre, offres, offre, offrons, offrez, offrent），不带 -iss-；过去分词 offert，将来时词干 offrir-。常用 offrir qch à qqn 把某物送给某人。",
  ex: [
    { fr: "Je t’offre un café.", zh: "我请你喝杯咖啡。", i: "[ʒə tɔfʁ œ̃ ka.fe]" },
    { fr: "Elle a offert un cadeau.", zh: "她送了一份礼物。", i: "[ɛ.la ɔ.fɛʁ œ̃ ka.do]" }
  ]
},
{
  id: "ouvrir", inf: "ouvrir", ipa: "[u.vʁiʁ]", zh: "打开；开启", grp: "irr", aux: "avoir", part: "ouvert",
  tenses: {
    pres: { f: ["j'ouvre","ouvres","ouvre","ouvrons","ouvrez","ouvrent"],
            i: ["[ʒu.vʁ]","[u.vʁ]","[u.vʁ]","[u.vʁɔ̃]","[u.vʁe]","[u.vʁ]"] },
    pc: { f: ["ai ouvert","as ouvert","a ouvert","avons ouvert","avez ouvert","ont ouvert"],
            i: ["[ʒe.t‿u.vɛʁ]","[ty a.z‿u.vɛʁ]","[i.la.z‿u.vɛʁ]","[nu.z‿a.vɔ̃.z‿u.vɛʁ]","[vu.z‿a.ve.z‿u.vɛʁ]","[il.z‿ɔ̃.z‿u.vɛʁ]"] },
    imp: { f: ["ouvrais","ouvrais","ouvrait","ouvrions","ouvriez","ouvraient"],
            i: ["[u.vʁɛ]","[u.vʁɛ]","[u.vʁɛ]","[u.vʁjɔ̃]","[u.vʁje]","[u.vʁɛ]"] },
    fut: { f: ["ouvrirai","ouvriras","ouvrira","ouvrirons","ouvrirez","ouvriront"],
            i: ["[u.vʁi.ʁe]","[u.vʁi.ʁe]","[u.vʁi.ʁa]","[u.vʁi.ʁɔ̃]","[u.vʁi.ʁe]","[u.vʁi.ʁɔ̃]"] }
  },
  note: "ouvrir 虽以 -ir 结尾，却按 -er 型变位（ouvre / ouvres / ouvre / ouvrons / ouvrez / ouvrent），不带 -iss-；过去分词为不规则形式 ouvert，将来时词干为 ouvrir-。同族：découvrir, offrir。",
  ex: [
    { fr: "J'ouvre la porte.", zh: "我打开门。", i: "[ʒu.vʁ la pɔʁt]" },
    { fr: "Elle a ouvert la fenêtre.", zh: "她打开了窗户。", i: "[ɛ.la.z‿u.vɛʁ la fə.nɛtʁ]" }
  ]
},
{
  id: "partir", inf: "partir", ipa: "[paʁ.tiʁ]", zh: "出发；离开", grp: "irr", aux: "etre", part: "parti",
  tenses: {
    pres: { f: ["pars","pars","part","partons","partez","partent"],
            i: ["[paʁ]","[paʁ]","[paʁ]","[paʁ.tɔ̃]","[paʁ.te]","[paʁt]"] },
    pc: { f: ["suis parti","es parti","est parti","sommes partis","êtes partis","sont partis"],
            i: ["[sɥi.z‿paʁ.ti]","[ɛ.z‿paʁ.ti]","[ɛ.t‿paʁ.ti]","[sɔm.z‿paʁ.ti]","[ɛt.z‿paʁ.ti]","[sɔ̃.z‿paʁ.ti]"] },
    imp: { f: ["partais","partais","partait","partions","partiez","partaient"],
            i: ["[paʁ.tɛ]","[paʁ.tɛ]","[paʁ.tɛ]","[paʁ.tjɔ̃]","[paʁ.tje]","[paʁ.tɛ]"] },
    fut: { f: ["partirai","partiras","partira","partirons","partirez","partiront"],
            i: ["[paʁ.ti.ʁe]","[paʁ.ti.ʁe]","[paʁ.ti.ʁa]","[paʁ.ti.ʁɔ̃]","[paʁ.ti.ʁe]","[paʁ.ti.ʁɔ̃]"] }
  },
  note: "partir 用 être 作助动词，过去分词须与主语性数配合：je suis parti（男）/ partie（女），nous sommes partis / parties（复数加 -s）。表中一律用阳性形式。同族：repartir 再出发，départ（名词）出发。",
  ex: [
    { fr: "Je pars demain.", zh: "我明天出发。", i: "[ʒə paʁ də.mɛ̃]" },
    { fr: "Elle est partie tôt.", zh: "她早早离开了。", i: "[ɛ.lɛ.t‿paʁ.ti to]" }
  ]
},
{
  id: "pleuvoir", inf: "pleuvoir", ipa: "[plœ.vwaʁ]", zh: "下雨", grp: "irr", aux: "avoir", part: "plu",
  tenses: {
    pres: { f: ["il pleut","il pleut","il pleut","il pleut","il pleut","il pleut"],
            i: ["[il plø]","[il plø]","[il plø]","[il plø]","[il plø]","[il plø]"] },
    pc: { f: ["il a plu","il a plu","il a plu","il a plu","il a plu","il a plu"],
            i: ["[i.la ply]","[i.la ply]","[i.la ply]","[i.la ply]","[i.la ply]","[i.la ply]"] },
    imp: { f: ["il pleuvait","il pleuvait","il pleuvait","il pleuvait","il pleuvait","il pleuvait"],
            i: ["[il plø.vɛ]","[il plø.vɛ]","[il plø.vɛ]","[il plø.vɛ]","[il plø.vɛ]","[il plø.vɛ]"] },
    fut: { f: ["il pleuvra","il pleuvra","il pleuvra","il pleuvra","il pleuvra","il pleuvra"],
            i: ["[il plø.vʁa]","[il plø.vʁa]","[il plø.vʁa]","[il plø.vʁa]","[il plø.vʁa]","[il plø.vʁa]"] }
  },
  note: "无人称动词（仅第三人称单数 il pleut 下雨），没有 je/tu/nous/vous/ils 人称，故六个人称位置均填 il- 形式；助动词 avoir，过去分词 plu，天气表达用无人称 il。",
  ex: [
    { fr: "Il pleut aujourd'hui.", zh: "今天下雨。", i: "[il plø o.ʒuʁ.d‿ɥi]" },
    { fr: "Il a plu toute la nuit.", zh: "下了整整一夜的雨。", i: "[i.la ply tut la nɥi]" }
  ]
},
{
  id: "pouvoir", inf: "pouvoir", ipa: "[pu.vwaʁ]", zh: "能够；可以", grp: "irr", aux: "avoir", part: "pu",
  tenses: {
    pres: { f: ["peux","peux","peut","pouvons","pouvez","peuvent"],
            i: ["[pø]","[pø]","[pø]","[pu.vɔ̃]","[pu.ve]","[pøv]"] },
    pc: { f: ["ai pu","as pu","a pu","avons pu","avez pu","ont pu"],
            i: ["[ʒe py]","[ty a py]","[i.la py]","[nu.z‿a.vɔ̃ py]","[vu.z‿a.ve py]","[il.z‿ɔ̃ py]"] },
    imp: { f: ["pouvais","pouvais","pouvait","pouvions","pouviez","pouvaient"],
            i: ["[pu.vɛ]","[pu.vɛ]","[pu.vɛ]","[pu.vjɔ̃]","[pu.vje]","[pu.vɛ]"] },
    fut: { f: ["pourrai","pourras","pourra","pourrons","pourrez","pourront"],
            i: ["[pu.ʁe]","[pu.ʁe]","[pu.ʁa]","[pu.ʁɔ̃]","[pu.ʁe]","[pu.ʁɔ̃]"] }
  },
  note: "pouvoir 后接动词原形：Je peux t'aider 我能帮你。",
  ex: [
    { fr: "Je peux t’aider.", zh: "我可以帮你。", i: "[ʒə pø tɛ.de]" },
    { fr: "Nous avons pu entrer.", zh: "我们能够进来。", i: "[nu.z‿a.vɔ̃ py ɑ̃.tʁe]" }
  ]
},
{
  id: "prendre", inf: "prendre", ipa: "[pʁɑ̃dʁ]", zh: "拿；乘坐", grp: "irr", aux: "avoir", part: "pris",
  tenses: {
    pres: { f: ["prends","prends","prend","prenons","prenez","prennent"],
            i: ["[pʁɑ̃]","[pʁɑ̃]","[pʁɑ̃]","[pʁə.nɔ̃]","[pʁə.ne]","[pʁɛn]"] },
    pc: { f: ["ai pris","as pris","a pris","avons pris","avez pris","ont pris"],
            i: ["[ʒe pʁi]","[ty a pʁi]","[i.la pʁi]","[nu.z‿a.vɔ̃ pʁi]","[vu.z‿a.ve pʁi]","[il.z‿ɔ̃ pʁi]"] },
    imp: { f: ["prenais","prenais","prenait","prenions","preniez","prenaient"],
            i: ["[pʁə.nɛ]","[pʁə.nɛ]","[pʁə.nɛ]","[pʁə.njɔ̃]","[pʁə.nje]","[pʁə.nɛ]"] },
    fut: { f: ["prendrai","prendras","prendra","prendrons","prendrez","prendront"],
            i: ["[pʁɑ̃.dʁe]","[pʁɑ̃.dʁe]","[pʁɑ̃.dʁa]","[pʁɑ̃.dʁɔ̃]","[pʁɑ̃.dʁe]","[pʁɑ̃.dʁɔ̃]"] }
  },
  note: "同族词：apprendre 学习，comprendre 明白，reprendre 再拿/重新开始。",
  ex: [
    { fr: "Je prends le bus.", zh: "我坐公交车。", i: "[ʒə pʁɑ̃ lə bys]" },
    { fr: "J'ai pris un café.", zh: "我喝了一杯咖啡。", i: "[ʒe pʁi.z‿œ̃ ka.fe]" }
  ]
},
{
  id: "repondre", inf: "répondre", ipa: "[ʁe.pɔ̃dʁ]", zh: "回答", grp: "irr", aux: "avoir", part: "répondu",
  tenses: {
    pres: { f: ["réponds","réponds","répond","répondons","répondez","répondent"],
            i: ["[ʁe.pɔ̃]","[ʁe.pɔ̃]","[ʁe.pɔ̃]","[ʁe.pɔ̃.dɔ̃]","[ʁe.pɔ̃.de]","[ʁe.pɔ̃d]"] },
    pc: { f: ["ai répondu","as répondu","a répondu","avons répondu","avez répondu","ont répondu"],
            i: ["[ʒe ʁe.pɔ̃.dy]","[ty a ʁe.pɔ̃.dy]","[i.la ʁe.pɔ̃.dy]","[nu.z‿a.vɔ̃ ʁe.pɔ̃.dy]","[vu.z‿a.ve ʁe.pɔ̃.dy]","[il.z‿ɔ̃ ʁe.pɔ̃.dy]"] },
    imp: { f: ["répondais","répondais","répondait","répondions","répondiez","répondaient"],
            i: ["[ʁe.pɔ̃.dɛ]","[ʁe.pɔ̃.dɛ]","[ʁe.pɔ̃.dɛ]","[ʁe.pɔ̃.djɔ̃]","[ʁe.pɔ̃.dje]","[ʁe.pɔ̃.dɛ]"] },
    fut: { f: ["répondrai","répondras","répondra","répondrons","répondrez","répondront"],
            i: ["[ʁe.pɔ̃.dʁe]","[ʁe.pɔ̃.dʁe]","[ʁe.pɔ̃.dʁa]","[ʁe.pɔ̃.dʁɔ̃]","[ʁe.pɔ̃.dʁe]","[ʁe.pɔ̃.dʁɔ̃]"] }
  },
  note: "répondre à 回答某人/某事；répondre au téléphone 接电话。词干 -pond-，变位有规则：réponds / répondons，将来时 répondr-。",
  ex: [
    { fr: "Je réponds à ta question.", zh: "我回答你的问题。", i: "[ʒə ʁe.pɔ̃ a ta kɛs.tjɔ̃]" },
    { fr: "Elle a répondu au téléphone.", zh: "她接了电话。", i: "[ɛ.la ʁe.pɔ̃.dy o te.le.fɔn]" }
  ]
},
{
  id: "reprendre", inf: "reprendre", ipa: "[ʁə.pʁɑ̃dʁ]", zh: "再做；继续", grp: "irr", aux: "avoir", part: "repris",
  tenses: {
    pres: { f: ["reprends","reprends","reprend","reprenons","reprenez","reprennent"],
            i: ["[ʁə.pʁɑ̃]","[ʁə.pʁɑ̃]","[ʁə.pʁɑ̃]","[ʁə.pʁə.nɔ̃]","[ʁə.pʁə.ne]","[ʁə.pʁɛn]"] },
    pc: { f: ["ai repris","as repris","a repris","avons repris","avez repris","ont repris"],
            i: ["[ʒe ʁə.pʁi]","[ty a ʁə.pʁi]","[i.la ʁə.pʁi]","[nu.z‿a.vɔ̃ ʁə.pʁi]","[vu.z‿a.ve ʁə.pʁi]","[il.z‿ɔ̃ ʁə.pʁi]"] },
    imp: { f: ["reprenais","reprenais","reprenait","reprenions","repreniez","reprenaient"],
            i: ["[ʁə.pʁə.nɛ]","[ʁə.pʁə.nɛ]","[ʁə.pʁə.nɛ]","[ʁə.pʁə.njɔ̃]","[ʁə.pʁə.nje]","[ʁə.pʁə.nɛ]"] },
    fut: { f: ["reprendrai","reprendras","reprendra","reprendrons","reprendrez","reprendront"],
            i: ["[ʁə.pʁɑ̃.dʁe]","[ʁə.pʁɑ̃.dʁe]","[ʁə.pʁɑ̃.dʁa]","[ʁə.pʁɑ̃.dʁɔ̃]","[ʁə.pʁɑ̃.dʁe]","[ʁə.pʁɑ̃.dʁɔ̃]"] }
  },
  note: "reprendre = re- + prendre，变位完全同 prendre（注意 reprenons / reprenez / reprennent 的 -en- 词干）；过去分词 repris。",
  ex: [
    { fr: "Je reprends le travail.", zh: "我重新开始工作。", i: "[ʒə ʁə.pʁɑ̃ lə tʁa.vaj]" },
    { fr: "Elle a repris courage.", zh: "她重新鼓起了勇气。", i: "[ɛ.la ʁə.pʁi ku.ʁaʒ]" }
  ]
},
{
  id: "revenir", inf: "revenir", ipa: "[ʁə.və.niʁ]", zh: "回来", grp: "irr", aux: "etre", part: "revenu",
  tenses: {
    pres: { f: ["reviens","reviens","revient","revenons","revenez","reviennent"],
            i: ["[ʁə.vjɛ̃]","[ʁə.vjɛ̃]","[ʁə.vjɛ̃]","[ʁə.və.nɔ̃]","[ʁə.və.ne]","[ʁə.vjɛn]"] },
    pc: { f: ["suis revenu(e)","es revenu(e)","est revenu(e)","sommes revenu(e)s","êtes revenu(e)s","sont revenu(e)s"],
            i: ["[sɥi.z‿ʁə.və.ny]","[ɛ.z‿ʁə.və.ny]","[ɛ.t‿ʁə.və.ny]","[sɔm.z‿ʁə.və.ny]","[ɛt.z‿ʁə.və.ny]","[sɔ̃.z‿ʁə.və.ny]"] },
    imp: { f: ["revenais","revenais","revenait","revenions","reveniez","revenaient"],
            i: ["[ʁə.və.nɛ]","[ʁə.və.nɛ]","[ʁə.və.nɛ]","[ʁə.və.njɔ̃]","[ʁə.və.nje]","[ʁə.və.nɛ]"] },
    fut: { f: ["reviendrai","reviendras","reviendra","reviendrons","reviendrez","reviendront"],
            i: ["[ʁə.vjɛ̃.dʁe]","[ʁə.vjɛ̃.dʁe]","[ʁə.vjɛ̃.dʁa]","[ʁə.vjɛ̃.dʁɔ̃]","[ʁə.vjɛ̃.dʁe]","[ʁə.vjɛ̃.dʁɔ̃]"] }
  },
  note: "revenir = re- + venir，变同 venir（reviens / revenons / reviendrai）；用 être 作助动词，过去分词须与主语性数配合：je suis revenu(e)。",
  ex: [
    { fr: "Je reviens demain.", zh: "我明天回来。", i: "[ʒə ʁə.vjɛ̃ də.mɛ̃]" },
    { fr: "Elle est revenue tard.", zh: "她很晚才回来。", i: "[ɛ.lɛ.t‿ʁə.və.ny taʁ]" }
  ]
},
{
  id: "savoir", inf: "savoir", ipa: "[sa.vwaʁ]", zh: "知道；会", grp: "irr", aux: "avoir", part: "su",
  tenses: {
    pres: { f: ["sais","sais","sait","savons","savez","savent"],
            i: ["[sɛ]","[sɛ]","[sɛ]","[sa.vɔ̃]","[sa.ve]","[sav]"] },
    pc: { f: ["ai su","as su","a su","avons su","avez su","ont su"],
            i: ["[ʒe sy]","[ty a sy]","[i.la sy]","[nu.z‿a.vɔ̃ sy]","[vu.z‿a.ve sy]","[il.z‿ɔ̃ sy]"] },
    imp: { f: ["savais","savais","savait","savions","saviez","savaient"],
            i: ["[sa.vɛ]","[sa.vɛ]","[sa.vɛ]","[sa.vjɔ̃]","[sa.vje]","[sa.vɛ]"] },
    fut: { f: ["saurai","sauras","saura","saurons","saurez","sauront"],
            i: ["[so.ʁe]","[so.ʁe]","[so.ʁa]","[so.ʁɔ̃]","[so.ʁe]","[so.ʁɔ̃]"] }
  },
  note: "savoir + 动词原形 = 会做某事（Je sais nager 我会游泳）；savoir que 知道……",
  ex: [
    { fr: "Je sais parler français.", zh: "我会讲法语。", i: "[ʒə sɛ paʁ.le fʁɑ̃.sɛ]" },
    { fr: "Il a su la vérité.", zh: "他知道了真相。", i: "[i.la sy la ve.ʁi.te]" }
  ]
},
{
  id: "sortir", inf: "sortir", ipa: "[sɔʁ.tiʁ]", zh: "外出；出去", grp: "irr", aux: "etre", part: "sorti",
  tenses: {
    pres: { f: ["sors","sors","sort","sortons","sortez","sortent"],
            i: ["[sɔʁ]","[sɔʁ]","[sɔʁ]","[sɔʁ.tɔ̃]","[sɔʁ.te]","[sɔʁt]"] },
    pc: { f: ["suis sorti(e)","es sorti(e)","est sorti(e)","sommes sorti(e)s","êtes sorti(e)s","sont sorti(e)s"],
            i: ["[sɥi.z‿sɔʁ.ti]","[ɛ.z‿sɔʁ.ti]","[ɛ.t‿sɔʁ.ti]","[sɔm.z‿sɔʁ.ti]","[ɛt.z‿sɔʁ.ti]","[sɔ̃.z‿sɔʁ.ti]"] },
    imp: { f: ["sortais","sortais","sortait","sortions","sortiez","sortaient"],
            i: ["[sɔʁ.tɛ]","[sɔʁ.tɛ]","[sɔʁ.tɛ]","[sɔʁ.tjɔ̃]","[sɔʁ.tje]","[sɔʁ.tɛ]"] },
    fut: { f: ["sortirai","sortiras","sortira","sortirons","sortirez","sortiront"],
            i: ["[sɔʁ.ti.ʁe]","[sɔʁ.ti.ʁe]","[sɔʁ.ti.ʁa]","[sɔʁ.ti.ʁɔ̃]","[sɔʁ.ti.ʁe]","[sɔʁ.ti.ʁɔ̃]"] }
  },
  note: "sortir 用 être 作助动词，过去分词配合主语：je suis sorti(e)；sortir de 从……出来。",
  ex: [
    { fr: "Je sors avec des amis.", zh: "我和朋友们出去。", i: "[ʒə sɔʁ a.vɛk de.z‿a.mi]" },
    { fr: "Ils sont sortis hier soir.", zh: "他们昨晚出去了。", i: "[il.z‿sɔ̃ sɔʁ.ti jɛʁ swaʁ]" }
  ]
},
{
  id: "souvenir", inf: "souvenir", ipa: "[su.və.niʁ]", zh: "记得；回忆", grp: "irr", aux: "etre", part: "souvenu",
  tenses: {
    pres: { f: ["me souviens","te souviens","se souvient","nous souvenons","vous souvenez","se souviennent"],
            i: ["[mə su.vjɛ̃]","[tə su.vjɛ̃]","[sə su.vjɛ̃]","[nu su.və.nɔ̃]","[vu su.və.ne]","[sə su.vjɛn]"] },
    pc: { f: ["me suis souvenu(e)","t'es souvenu(e)","s'est souvenu(e)","nous sommes souvenu(e)s","vous êtes souvenu(e)s","se sont souvenu(e)s"],
            i: ["[mə sɥi.z‿su.və.ny]","[te.z‿su.və.ny]","[sɛ.t‿su.və.ny]","[nu sɔm.z‿su.və.ny]","[vu.z‿ɛt.z‿su.və.ny]","[sə sɔ̃.z‿su.və.ny]"] },
    imp: { f: ["me souvenais","te souvenais","se souvenait","nous souvenions","vous souveniez","se souvenaient"],
            i: ["[mə su.və.nɛ]","[tə su.və.nɛ]","[sə su.və.nɛ]","[nu su.və.njɔ̃]","[vu su.və.nje]","[sə su.və.nɛ]"] },
    fut: { f: ["me souviendrai","te souviendras","se souviendra","nous souviendrons","vous souviendrez","se souviendront"],
            i: ["[mə su.vjɛ̃.dʁe]","[tə su.vjɛ̃.dʁe]","[sə su.vjɛ̃.dʁa]","[nu su.vjɛ̃.dʁɔ̃]","[vu su.vjɛ̃.dʁe]","[sə su.vjɛ̃.dʁɔ̃]"] }
  },
  note: "代词式动词 se souvenir（se + venir 类不规则变位，如 je me souviens）：用 être 作助动词，过去分词与主语性数配合（je me suis souvenu(e)）；se souvenir de qch/qqn 记得某事/某人。",
  ex: [
    { fr: "Je me souviens de toi.", zh: "我记得你。", i: "[ʒə mə su.vjɛ̃ də twa]" },
    { fr: "Elle s'est souvenue de son enfance.", zh: "她回忆起了童年。", i: "[ɛ.l sɛ.t‿su.və.ny də sɔ̃.n‿ɑ̃.fɑ̃s]" }
  ]
},
{
  id: "suivre", inf: "suivre", ipa: "[sɥivʁ]", zh: "跟随；遵循；上（课）", grp: "irr", aux: "avoir", part: "suivi",
  tenses: {
    pres: { f: ["suis","suis","suit","suivons","suivez","suivent"],
            i: ["[sɥi]","[sɥi]","[sɥi]","[sɥi.vɔ̃]","[sɥi.ve]","[sɥi]"] },
    pc: { f: ["ai suivi","as suivi","a suivi","avons suivi","avez suivi","ont suivi"],
            i: ["[ʒe sɥi.vi]","[ty a sɥi.vi]","[i.la sɥi.vi]","[nu.z‿a.vɔ̃ sɥi.vi]","[vu.z‿a.ve sɥi.vi]","[il.z‿ɔ̃ sɥi.vi]"] },
    imp: { f: ["suivais","suivais","suivait","suivions","suiviez","suivaient"],
            i: ["[sɥi.vɛ]","[sɥi.vɛ]","[sɥi.vɛ]","[sɥi.vjɔ̃]","[sɥi.vje]","[sɥi.vɛ]"] },
    fut: { f: ["suivrai","suivras","suivra","suivrons","suivrez","suivront"],
            i: ["[sɥi.vʁe]","[sɥi.vʁe]","[sɥi.vʁa]","[sɥi.vʁɔ̃]","[sɥi.vʁe]","[sɥi.vʁɔ̃]"] }
  },
  note: "不规则动词，过去分词 suivi；suivre un cours 上课；名词 suite（suite à 由于）。",
  ex: [
    { fr: "Je suis le cours de français.", zh: "我上法语课。", i: "[ʒə sɥi lə kuʁ də fʁɑ̃.sɛ]" },
    { fr: "Elle a suivi mon conseil.", zh: "她听从了我的建议。", i: "[ɛ.la sɥi.vi mɔ̃ kɔ̃.sɛj]" }
  ]
},
{
  id: "tenir", inf: "tenir", ipa: "[tə.niʁ]", zh: "拿着；保持", grp: "irr", aux: "avoir", part: "tenu",
  tenses: {
    pres: { f: ["tiens","tiens","tient","tenons","tenez","tiennent"],
            i: ["[tjɛ̃]","[tjɛ̃]","[tjɛ̃]","[tə.nɔ̃]","[tə.ne]","[tjɛn]"] },
    pc: { f: ["ai tenu","as tenu","a tenu","avons tenu","avez tenu","ont tenu"],
            i: ["[ʒe tə.ny]","[ty a tə.ny]","[i.la tə.ny]","[nu.z‿a.vɔ̃ tə.ny]","[vu.z‿a.ve tə.ny]","[il.z‿ɔ̃ tə.ny]"] },
    imp: { f: ["tenais","tenais","tenait","tenions","teniez","tenaient"],
            i: ["[tə.nɛ]","[tə.nɛ]","[tə.nɛ]","[tə.njɔ̃]","[tə.nje]","[tə.nɛ]"] },
    fut: { f: ["tiendrai","tiendras","tiendra","tiendrons","tiendrez","tiendront"],
            i: ["[tjɛ̃.dʁe]","[tjɛ̃.dʁe]","[tjɛ̃.dʁa]","[tjɛ̃.dʁɔ̃]","[tjɛ̃.dʁe]","[tjɛ̃.dʁɔ̃]"] }
  },
  note: "tenir 变同 venir（tiens / tient / tenons / tiendrai）；tenir compte de 考虑到，tenir sa promesse 遵守诺言。",
  ex: [
    { fr: "Je tiens mon stylo.", zh: "我拿着我的笔。", i: "[ʒə tjɛ̃ mɔ̃ sti.lo]" },
    { fr: "Elle a tenu sa promesse.", zh: "她遵守了诺言。", i: "[ɛ.la tə.ny sa pʁɔ.mɛs]" }
  ]
},
{
  id: "vendre", inf: "vendre", ipa: "[vɑ̃dʁ]", zh: "卖；出售", grp: "irr", aux: "avoir", part: "vendu",
  tenses: {
    pres: { f: ["vends","vends","vend","vendons","vendez","vendent"],
            i: ["[vɑ̃]","[vɑ̃]","[vɑ̃]","[vɑ̃.dɔ̃]","[vɑ̃.de]","[vɑ̃d]"] },
    pc: { f: ["ai vendu","as vendu","a vendu","avons vendu","avez vendu","ont vendu"],
            i: ["[ʒe vɑ̃.dy]","[ty a vɑ̃.dy]","[i.la vɑ̃.dy]","[nu.z‿a.vɔ̃ vɑ̃.dy]","[vu.z‿a.ve vɑ̃.dy]","[il.z‿ɔ̃ vɑ̃.dy]"] },
    imp: { f: ["vendais","vendais","vendait","vendions","vendiez","vendaient"],
            i: ["[vɑ̃.dɛ]","[vɑ̃.dɛ]","[vɑ̃.dɛ]","[vɑ̃.djɔ̃]","[vɑ̃.dje]","[vɑ̃.dɛ]"] },
    fut: { f: ["vendrai","vendras","vendra","vendrons","vendrez","vendront"],
            i: ["[vɑ̃.dʁe]","[vɑ̃.dʁe]","[vɑ̃.dʁa]","[vɑ̃.dʁɔ̃]","[vɑ̃.dʁe]","[vɑ̃.dʁɔ̃]"] }
  },
  note: "vendre 是第三组 -re 动词：现在时 vends / vends / vend / vendons / vendez / vendent；过去分词 vendu；将来时词干 vendr-；复合过去时用 avoir。",
  ex: [
    { fr: "Je vends des livres.", zh: "我卖书。", i: "[ʒə vɑ̃ de livʁ]" },
    { fr: "Elle a vendu sa voiture.", zh: "她卖掉了她的车。", i: "[ɛ.la vɑ̃.dy sa vwa.tyʁ]" }
  ]
},
{
  id: "venir", inf: "venir", ipa: "[və.niʁ]", zh: "来", grp: "irr", aux: "etre", part: "venu",
  tenses: {
    pres: { f: ["viens","viens","vient","venons","venez","viennent"],
            i: ["[vjɛ̃]","[vjɛ̃]","[vjɛ̃]","[və.nɔ̃]","[və.ne]","[vjɛn]"] },
    pc: { f: ["suis venu(e)","es venu(e)","est venu(e)","sommes venu(e)s","êtes venu(e)s","sont venu(e)s"],
            i: ["[sɥi.z‿və.ny]","[ɛ.z‿və.ny]","[ɛ.t‿və.ny]","[sɔm.z‿və.ny]","[ɛt.z‿və.ny]","[sɔ̃.z‿və.ny]"] },
    imp: { f: ["venais","venais","venait","venions","veniez","venaient"],
            i: ["[və.nɛ]","[və.nɛ]","[və.nɛ]","[və.njɔ̃]","[və.nje]","[və.nɛ]"] },
    fut: { f: ["viendrai","viendras","viendra","viendrons","viendrez","viendront"],
            i: ["[vjɛ̃.dʁe]","[vjɛ̃.dʁe]","[vjɛ̃.dʁa]","[vjɛ̃.dʁɔ̃]","[vjɛ̃.dʁe]","[vjɛ̃.dʁɔ̃]"] }
  },
  note: "venir de + 城市 来自某地；venir de faire 刚刚做了某事。同族：revenir, devenir, tenir。",
  ex: [
    { fr: "Je viens de Chine.", zh: "我来自中国。", i: "[ʒə vjɛ̃ də ʃin]" },
    { fr: "Il est venu hier soir.", zh: "他昨晚来了。", i: "[i.lɛ.t‿və.ny jɛʁ swaʁ]" }
  ]
},
{
  id: "vivre", inf: "vivre", ipa: "[vivʁ]", zh: "生活；活着", grp: "irr", aux: "avoir", part: "vécu",
  tenses: {
    pres: { f: ["vis","vis","vit","vivons","vivez","vivent"],
            i: ["[vi]","[vi]","[vi]","[vi.vɔ̃]","[vi.ve]","[viv]"] },
    pc: { f: ["ai vécu","as vécu","a vécu","avons vécu","avez vécu","ont vécu"],
            i: ["[ʒe ve.ky]","[ty a ve.ky]","[i.la ve.ky]","[nu.z‿a.vɔ̃ ve.ky]","[vu.z‿a.ve ve.ky]","[il.z‿ɔ̃ ve.ky]"] },
    imp: { f: ["vivais","vivais","vivait","vivions","viviez","vivaient"],
            i: ["[vi.vɛ]","[vi.vɛ]","[vi.vɛ]","[vi.vjɔ̃]","[vi.vje]","[vi.vɛ]"] },
    fut: { f: ["vivrai","vivras","vivra","vivrons","vivrez","vivront"],
            i: ["[vi.vʁe]","[vi.vʁe]","[vi.vʁa]","[vi.vʁɔ̃]","[vi.vʁe]","[vi.vʁɔ̃]"] }
  },
  note: "vivre 属第三组不规则动词，过去分词为 vécu，助动词用 avoir；vivre de qch 靠……谋生。",
  ex: [
    { fr: "Je vis à Paris.", zh: "我住在巴黎。", i: "[ʒə vi.z‿a pa.ʁi]" },
    { fr: "Ils ont vécu à la campagne.", zh: "他们在乡下生活过。", i: "[il.z‿ɔ̃ ve.ky a la kɑ̃.paɲ]" }
  ]
},
{
  id: "voir", inf: "voir", ipa: "[vwaʁ]", zh: "看见", grp: "irr", aux: "avoir", part: "vu",
  tenses: {
    pres: { f: ["vois","vois","voit","voyons","voyez","voient"],
            i: ["[vwa]","[vwa]","[vwa]","[vwa.jɔ̃]","[vwa.je]","[vwa]"] },
    pc: { f: ["ai vu","as vu","a vu","avons vu","avez vu","ont vu"],
            i: ["[ʒe vy]","[ty a vy]","[i.la vy]","[nu.z‿a.vɔ̃ vy]","[vu.z‿a.ve vy]","[il.z‿ɔ̃ vy]"] },
    imp: { f: ["voyais","voyais","voyait","voyions","voyiez","voyaient"],
            i: ["[vwa.jɛ]","[vwa.jɛ]","[vwa.jɛ]","[vwa.jjɔ̃]","[vwa.jje]","[vwa.jɛ]"] },
    fut: { f: ["verrai","verras","verra","verrons","verrez","verront"],
            i: ["[vɛ.ʁe]","[vɛ.ʁe]","[vɛ.ʁa]","[vɛ.ʁɔ̃]","[vɛ.ʁe]","[vɛ.ʁɔ̃]"] }
  },
  note: "voir 现在时复数特殊：voyons / voyez / voient（词干 voy-），未完成过去时 voyais；将来时词干 verr-。voir 表看见的结果，regarder 表注视的动作。",
  ex: [
    { fr: "Je vois un oiseau.", zh: "我看见一只鸟。", i: "[ʒə vwa.z‿œ̃.nwa.zo]" },
    { fr: "Elle a vu le film.", zh: "她看了那部电影。", i: "[ɛ.la vy lə film]" }
  ]
},
{
  id: "vouloir", inf: "vouloir", ipa: "[vu.lwaʁ]", zh: "想要", grp: "irr", aux: "avoir", part: "voulu",
  tenses: {
    pres: { f: ["veux","veux","veut","voulons","voulez","veulent"],
            i: ["[vø]","[vø]","[vø]","[vu.lɔ̃]","[vu.le]","[vøl]"] },
    pc: { f: ["ai voulu","as voulu","a voulu","avons voulu","avez voulu","ont voulu"],
            i: ["[ʒe vu.lu]","[ty a vu.lu]","[i.la vu.lu]","[nu.z‿a.vɔ̃ vu.lu]","[vu.z‿a.ve vu.lu]","[il.z‿ɔ̃ vu.lu]"] },
    imp: { f: ["voulais","voulais","voulait","voulions","vouliez","voulaient"],
            i: ["[vu.lɛ]","[vu.lɛ]","[vu.lɛ]","[vu.ljɔ̃]","[vu.lje]","[vu.lɛ]"] },
    fut: { f: ["voudrai","voudras","voudra","voudrons","voudrez","voudront"],
            i: ["[vu.dʁe]","[vu.dʁe]","[vu.dʁa]","[vu.dʁɔ̃]","[vu.dʁe]","[vu.dʁɔ̃]"] }
  },
  note: "veux-tu…? 你想要……吗（礼貌请求）；vouloir bien 乐意。",
  ex: [
    { fr: "Je veux un café.", zh: "我想要一杯咖啡。", i: "[ʒə vø.z‿œ̃ ka.fe]" },
    { fr: "Elle a voulu partir.", zh: "她想要离开。", i: "[ɛ.la vu.lu paʁ.tiʁ]" }
  ]
}
];

window.__VERBS = VERBS;
window.__VERB_TENSES = VERB_TENSES;
window.__VERB_PRONOUNS = VERB_PRONOUNS;
window.__VERB_GROUPS = VERB_GROUPS;
