/* =========================================================
   动词变位模块数据（30 个常见动词 × 直陈式 4 时态 × 6 人称）
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
  id: 'parler', inf: 'parler', ipa: '[paʁ.le]', zh: '说；讲话', grp: 'er', aux: 'avoir', part: 'parlé',
  tenses: {
    pres: { f: ['parle','parles','parle','parlons','parlez','parlent'],
            i: ['[paʁl]','[paʁl]','[paʁl]','[paʁ.lɔ̃]','[paʁ.le]','[paʁl]'] },
    pc:   { f: ['ai parlé','as parlé','a parlé','avons parlé','avez parlé','ont parlé'],
            i: ['[ʒe paʁ.le]','[ty a paʁ.le]','[i.la paʁ.le]','[nu.z‿a.vɔ̃ paʁ.le]','[vu.z‿a.ve paʁ.le]','[il.z‿ɔ̃ paʁ.le]'] },
    imp:  { f: ['parlais','parlais','parlait','parlions','parliez','parlaient'],
            i: ['[paʁ.lɛ]','[paʁ.lɛ]','[paʁ.lɛ]','[paʁ.li.jɔ̃]','[paʁ.li.je]','[paʁ.lɛ]'] },
    fut:  { f: ['parlerai','parleras','parlera','parlerons','parlerez','parleront'],
            i: ['[paʁ.lə.ʁe]','[paʁ.lə.ʁe]','[paʁ.lə.ʁa]','[paʁ.lə.ʁɔ̃]','[paʁ.lə.ʁe]','[paʁ.lə.ʁɔ̃]'] }
  },
  note: '第一组动词：现在时 = 词干 parler- 去 -er 加 -e, -es, -e, -ons, -ez, -ent；je parle 不写 je parles。',
  ex: [
    { fr: 'Je parle français avec Paul.', zh: '我和保罗讲法语。', i: '[ʒə paʁl fʁɑ̃.sɛ a.vɛk pɔl]' },
    { fr: "J'ai parlé au téléphone.", zh: '我打了电话。', i: '[ʒe paʁ.le o te.le.fɔn]' }
  ]
},
{
  id: 'habiter', inf: 'habiter', ipa: '[a.bi.te]', zh: '居住', grp: 'er', aux: 'avoir', part: 'habité',
  tenses: {
    pres: { f: ['habite','habites','habite','habitons','habitez','habitent'],
            i: ['[a.bit]','[a.bit]','[a.bit]','[a.bi.tɔ̃]','[a.bi.te]','[a.bit]'] },
    pc:   { f: ['ai habité','as habité','a habité','avons habité','avez habité','ont habité'],
            i: ['[ʒe a.bi.te]','[ty a a.bi.te]','[i.la a.bi.te]','[nu.z‿a.vɔ̃.z‿a.bi.te]','[vu.z‿a.ve.z‿a.bi.te]','[il.z‿ɔ̃.z‿a.bi.te]'] },
    imp:  { f: ['habitais','habitais','habitait','habitions','habitiez','habitaient'],
            i: ['[a.bi.tɛ]','[a.bi.tɛ]','[a.bi.tɛ]','[a.bi.tjɔ̃]','[a.bi.tje]','[a.bi.tɛ]'] },
    fut:  { f: ['habiterai','habiteras','habitera','habiterons','habiterez','habiteront'],
            i: ['[a.bi.tə.ʁe]','[a.bi.tə.ʁe]','[a.bi.tə.ʁa]','[a.bi.tə.ʁɔ̃]','[a.bi.tə.ʁe]','[a.bi.tə.ʁɔ̃]'] }
  },
  note: '表示「住在某地」用 habiter + 城市（不住在……用 sans 或 loin de）。',
  ex: [
    { fr: "J'habite à Paris.", zh: '我住在巴黎。', i: '[ʒa.bit a pa.ʁi]' },
    { fr: 'Nous avons habité à Lyon.', zh: '我们曾在里昂住过。', i: '[nu.z‿a.vɔ̃.z‿a.bi.te a ljɔ̃]' }
  ]
},
{
  id: 'manger', inf: 'manger', ipa: '[mɑ̃.ʒe]', zh: '吃', grp: 'er', aux: 'avoir', part: 'mangé',
  tenses: {
    pres: { f: ['mange','manges','mange','mangeons','mangez','mangent'],
            i: ['[mɑ̃ʒ]','[mɑ̃ʒ]','[mɑ̃ʒ]','[mɑ̃.ʒɔ̃]','[mɑ̃.ʒe]','[mɑ̃ʒ]'] },
    pc:   { f: ['ai mangé','as mangé','a mangé','avons mangé','avez mangé','ont mangé'],
            i: ['[ʒe mɑ̃.ʒe]','[ty a mɑ̃.ʒe]','[i.la mɑ̃.ʒe]','[nu.z‿a.vɔ̃ mɑ̃.ʒe]','[vu.z‿a.ve mɑ̃.ʒe]','[il.z‿ɔ̃ mɑ̃.ʒe]'] },
    imp:  { f: ['mangeais','mangeais','mangeait','mangions','mangiez','mangeaient'],
            i: ['[mɑ̃.ʒɛ]','[mɑ̃.ʒɛ]','[mɑ̃.ʒɛ]','[mɑ̃.ʒjɔ̃]','[mɑ̃.ʒje]','[mɑ̃.ʒɛ]'] },
    fut:  { f: ['mangerai','mangeras','mangera','mangerons','mangerez','mangeront'],
            i: ['[mɑ̃.ʒə.ʁe]','[mɑ̃.ʒə.ʁe]','[mɑ̃.ʒə.ʁa]','[mɑ̃.ʒə.ʁɔ̃]','[mɑ̃.ʒə.ʁe]','[mɑ̃.ʒə.ʁɔ̃]'] }
  },
  note: '-ger 结尾：nous 形式写作 mangeons（加 e 保 [ʒ] 软音，否则会读 [ɡ]）。',
  ex: [
    { fr: 'Je mange une pomme.', zh: '我吃一个苹果。', i: '[ʒə mɑ̃.ʒy.nə pɔm]' },
    { fr: 'Nous avons mangé au restaurant.', zh: '我们在餐馆吃了饭。', i: '[nu.z‿a.vɔ̃ mɑ̃.ʒe o ʁɛs.to.ʁɑ̃]' }
  ]
},
{
  id: 'ecouter', inf: 'écouter', ipa: '[e.ku.te]', zh: '听', grp: 'er', aux: 'avoir', part: 'écouté',
  tenses: {
    pres: { f: ['écoute','écoutes','écoute','écoutons','écoutez','écoutent'],
            i: ['[e.kut]','[e.kut]','[e.kut]','[e.ku.tɔ̃]','[e.ku.te]','[e.kut]'] },
    pc:   { f: ['ai écouté','as écouté','a écouté','avons écouté','avez écouté','ont écouté'],
            i: ['[ʒe.t‿e.ku.te]','[ty a.z‿e.ku.te]','[i.la.z‿e.ku.te]','[nu.z‿a.vɔ̃.z‿e.ku.te]','[vu.z‿a.ve.z‿e.ku.te]','[il.z‿ɔ̃.z‿e.ku.te]'] },
    imp:  { f: ['écoutais','écoutais','écoutait','écoutions','écoutiez','écoutaient'],
            i: ['[e.ku.tɛ]','[e.ku.tɛ]','[e.ku.tɛ]','[e.ku.tjɔ̃]','[e.ku.tje]','[e.ku.tɛ]'] },
    fut:  { f: ['écouterai','écouteras','écoutera','écouterons','écouterez','écouteront'],
            i: ['[e.ku.tə.ʁe]','[e.ku.tə.ʁe]','[e.ku.tə.ʁa]','[e.ku.tə.ʁɔ̃]','[e.ku.tə.ʁe]','[e.ku.tə.ʁɔ̃]'] }
  },
  note: 'écouter de la musique 听音乐；écouter la radio 听广播。',
  ex: [
    { fr: "J'écoute de la musique.", zh: '我在听音乐。', i: '[ʒe.kut də la my.zik]' },
    { fr: 'Tu as écouté la radio ?', zh: '你听了广播吗？', i: '[ty a.z‿e.ku.te la ʁa.djo]' }
  ]
},
{
  id: 'regarder', inf: 'regarder', ipa: '[ʁə.ɡaʁ.de]', zh: '看；注视', grp: 'er', aux: 'avoir', part: 'regardé',
  tenses: {
    pres: { f: ['regarde','regardes','regarde','regardons','regardez','regardent'],
            i: ['[ʁə.ɡaʁd]','[ʁə.ɡaʁd]','[ʁə.ɡaʁd]','[ʁə.ɡaʁ.dɔ̃]','[ʁə.ɡaʁ.de]','[ʁə.ɡaʁd]'] },
    pc:   { f: ['ai regardé','as regardé','a regardé','avons regardé','avez regardé','ont regardé'],
            i: ['[ʒe ʁə.ɡaʁ.de]','[ty a ʁə.ɡaʁ.de]','[i.la ʁə.ɡaʁ.de]','[nu.z‿a.vɔ̃ ʁə.ɡaʁ.de]','[vu.z‿a.ve ʁə.ɡaʁ.de]','[il.z‿ɔ̃ ʁə.ɡaʁ.de]'] },
    imp:  { f: ['regardais','regardais','regardait','regardions','regardiez','regardaient'],
            i: ['[ʁə.ɡaʁ.dɛ]','[ʁə.ɡaʁ.dɛ]','[ʁə.ɡaʁ.dɛ]','[ʁə.ɡaʁ.djɔ̃]','[ʁə.ɡaʁ.dje]','[ʁə.ɡaʁ.dɛ]'] },
    fut:  { f: ['regarderai','regarderas','regardera','regarderons','regarderez','regarderont'],
            i: ['[ʁə.ɡaʁ.də.ʁe]','[ʁə.ɡaʁ.də.ʁe]','[ʁə.ɡaʁ.də.ʁa]','[ʁə.ɡaʁ.də.ʁɔ̃]','[ʁə.ɡaʁ.də.ʁe]','[ʁə.ɡaʁ.də.ʁɔ̃]'] }
  },
  note: 'regarder 表示「注视」；voir 表示「看见」的结果，两者不同。',
  ex: [
    { fr: 'Je regarde la télévision.', zh: '我看电视。', i: '[ʒə ʁə.ɡaʁd la te.le.vi.zjɔ̃]' },
    { fr: 'Elle a regardé un film.', zh: '她看了一部电影。', i: '[ɛ.la ʁə.ɡaʁ.de œ̃ film]' }
  ]
},
{
  id: 'aimer', inf: 'aimer', ipa: '[ɛ.me] / [e.me]', zh: '爱；喜欢', grp: 'er', aux: 'avoir', part: 'aimé',
  tenses: {
    pres: { f: ["j'aime",'aimes','aime','aimons','aimez','aiment'],
            i: ['[ʒɛm]','[ɛm]','[ɛm]','[ɛ.mɔ̃]','[ɛ.me]','[ɛm]'] },
    pc:   { f: ["ai aimé",'as aimé','a aimé','avons aimé','avez aimé','ont aimé'],
            i: ['[ʒe.t‿ɛ.me]','[ty a.z‿ɛ.me]','[i.la.z‿ɛ.me]','[nu.z‿a.vɔ̃.z‿ɛ.me]','[vu.z‿a.ve.z‿ɛ.me]','[il.z‿ɔ̃.z‿ɛ.me]'] },
    imp:  { f: ['aimais','aimais','aimait','aimions','aimiez','aimaient'],
            i: ['[ɛ.mɛ]','[ɛ.mɛ]','[ɛ.mɛ]','[ɛ.mjɔ̃]','[ɛ.mje]','[ɛ.mɛ]'] },
    fut:  { f: ['aimerai','aimeras','aimera','aimerons','aimerez','aimeront'],
            i: ['[ɛ.mə.ʁe]','[ɛ.mə.ʁe]','[ɛ.mə.ʁa]','[ɛ.mə.ʁɔ̃]','[ɛ.mə.ʁe]','[ɛ.mə.ʁɔ̃]'] }
  },
  note: "je 在元音前变成 j'：j'aime [ʒɛm]；aimer mieux 意为「更喜欢」。",
  ex: [
    { fr: "J'aime le café.", zh: '我喜欢咖啡。', i: '[ʒɛm lə ka.fe]' },
    { fr: 'Il a aimé le film.', zh: '他喜欢这部电影。', i: '[i.la.z‿ɛ.me lə film]' }
  ]
},
{
  id: 'etudier', inf: 'étudier', ipa: '[e.ty.dje]', zh: '学习', grp: 'er', aux: 'avoir', part: 'étudié',
  tenses: {
    pres: { f: ["j'étudie",'étudies','étudie','étudions','étudiez','étudient'],
            i: ['[ʒe.ty.di]','[e.ty.di]','[e.ty.di]','[e.ty.djɔ̃]','[e.ty.dje]','[e.ty.di]'] },
    pc:   { f: ['ai étudié','as étudié','a étudié','avons étudié','avez étudié','ont étudié'],
            i: ['[ʒe.t‿e.ty.dje]','[ty a.z‿e.ty.dje]','[i.la.z‿e.ty.dje]','[nu.z‿a.vɔ̃.z‿e.ty.dje]','[vu.z‿a.ve.z‿e.ty.dje]','[il.z‿ɔ̃.z‿e.ty.dje]'] },
    imp:  { f: ['étudiais','étudiais','étudiait','étudiions','étudiiez','étudiaient'],
            i: ['[e.ty.djɛ]','[e.ty.djɛ]','[e.ty.djɛ]','[e.ty.dijɔ̃]','[e.ty.dije]','[e.ty.djɛ]'] },
    fut:  { f: ['étudierai','étudieras','étudiera','étudierons','étudierez','étudieront'],
            i: ['[e.ty.di.ʁe]','[e.ty.di.ʁe]','[e.ty.di.ʁa]','[e.ty.di.ʁɔ̃]','[e.ty.di.ʁe]','[e.ty.di.ʁɔ̃]'] }
  },
  note: '-yer 动词：y → i（nous / vous 除外：étudions, étudiez）。',
  ex: [
    { fr: "J'étudie le français.", zh: '我学法语。', i: '[ʒe.ty.di lə fʁɑ̃.sɛ]' },
    { fr: 'Vous avez étudié la leçon ?', zh: '你们学习了这一课吗？', i: '[vu.z‿a.ve.z‿e.ty.dje la lə.sɔ̃]' }
  ]
},
{
  id: 'jouer', inf: 'jouer', ipa: '[ʒwe]', zh: '玩；演奏', grp: 'er', aux: 'avoir', part: 'joué',
  tenses: {
    pres: { f: ['joue','joues','joue','jouons','jouez','jouent'],
            i: ['[ʒu]','[ʒu]','[ʒu]','[ʒu.ɔ̃]','[ʒu.e]','[ʒu]'] },
    pc:   { f: ['ai joué','as joué','a joué','avons joué','avez joué','ont joué'],
            i: ['[ʒe ʒu.e]','[ty a ʒu.e]','[i.la ʒu.e]','[nu.z‿a.vɔ̃ ʒu.e]','[vu.z‿a.ve ʒu.e]','[il.z‿ɔ̃ ʒu.e]'] },
    imp:  { f: ['jouais','jouais','jouait','jouions','jouiez','jouaient'],
            i: ['[ʒu.ɛ]','[ʒu.ɛ]','[ʒu.ɛ]','[ʒu.jɔ̃]','[ʒu.je]','[ʒu.ɛ]'] },
    fut:  { f: ['jouerai','joueras','jouera','jouerons','jouerez','joueront'],
            i: ['[ʒu.ʁe]','[ʒu.ʁe]','[ʒu.ʁa]','[ʒu.ʁɔ̃]','[ʒu.ʁe]','[ʒu.ʁɔ̃]'] }
  },
  note: 'jouer à 玩（球类）；jouer de 演奏（乐器）。nous jouons 词干不变。',
  ex: [
    { fr: 'Je joue au foot.', zh: '我踢足球。', i: '[ʒə ʒu o fut]' },
    { fr: 'Les enfants ont joué au parc.', zh: '孩子们在公园玩了。', i: '[le.z‿ɑ̃.fɑ̃.z‿ɔ̃ ʒu.e o paʁk]' }
  ]
},
{
  id: 'travailler', inf: 'travailler', ipa: '[tʁa.va.je]', zh: '工作', grp: 'er', aux: 'avoir', part: 'travaillé',
  tenses: {
    pres: { f: ['travaille','travailles','travaille','travaillons','travaillez','travaillent'],
            i: ['[tʁa.vaj]','[tʁa.vaj]','[tʁa.vaj]','[tʁa.va.jɔ̃]','[tʁa.va.je]','[tʁa.vaj]'] },
    pc:   { f: ['ai travaillé','as travaillé','a travaillé','avons travaillé','avez travaillé','ont travaillé'],
            i: ['[ʒe tʁa.va.je]','[ty a tʁa.va.je]','[i.la tʁa.va.je]','[nu.z‿a.vɔ̃ tʁa.va.je]','[vu.z‿a.ve tʁa.va.je]','[il.z‿ɔ̃ tʁa.va.je]'] },
    imp:  { f: ['travaillais','travaillais','travaillait','travaillions','travailliez','travaillaient'],
            i: ['[tʁa.va.jɛ]','[tʁa.va.jɛ]','[tʁa.va.jɛ]','[tʁa.va.jjɔ̃]','[tʁa.va.jje]','[tʁa.va.jɛ]'] },
    fut:  { f: ['travaillerai','travailleras','travaillera','travaillerons','travaillerez','travailleront'],
            i: ['[tʁa.va.jə.ʁe]','[tʁa.va.jə.ʁe]','[tʁa.va.jə.ʁa]','[tʁa.va.jə.ʁɔ̃]','[tʁa.va.jə.ʁe]','[tʁa.va.jə.ʁɔ̃]'] }
  },
  note: 'travailler pour 为……工作；travailler dans 在……（公司/领域）工作。',
  ex: [
    { fr: "Je travaille à l'hôpital.", zh: '我在医院工作。', i: '[ʒə tʁa.vaj a lɔ.pi.tal]' },
    { fr: 'Elle a travaillé tard.', zh: '她工作到很晚。', i: '[ɛ.la tʁa.va.je taʁ]' }
  ]
},
{
  id: 'commencer', inf: 'commencer', ipa: '[kɔ.mɑ̃.se]', zh: '开始', grp: 'er', aux: 'avoir', part: 'commencé',
  tenses: {
    pres: { f: ['commence','commences','commence','commençons','commencez','commencent'],
            i: ['[kɔ.mɑ̃s]','[kɔ.mɑ̃s]','[kɔ.mɑ̃s]','[kɔ.mɑ̃.sɔ̃]','[kɔ.mɑ̃.se]','[kɔ.mɑ̃s]'] },
    pc:   { f: ['ai commencé','as commencé','a commencé','avons commencé','avez commencé','ont commencé'],
            i: ['[ʒe kɔ.mɑ̃.se]','[ty a kɔ.mɑ̃.se]','[i.la kɔ.mɑ̃.se]','[nu.z‿a.vɔ̃ kɔ.mɑ̃.se]','[vu.z‿a.ve kɔ.mɑ̃.se]','[il.z‿ɔ̃ kɔ.mɑ̃.se]'] },
    imp:  { f: ['commençais','commençais','commençait','commencions','commenciez','commençaient'],
            i: ['[kɔ.mɑ̃.sɛ]','[kɔ.mɑ̃.sɛ]','[kɔ.mɑ̃.sɛ]','[kɔ.mɑ̃.sjɔ̃]','[kɔ.mɑ̃.sje]','[kɔ.mɑ̃.sɛ]'] },
    fut:  { f: ['commencerai','commenceras','commencera','commencerons','commencerez','commenceront'],
            i: ['[kɔ.mɑ̃.sə.ʁe]','[kɔ.mɑ̃.sə.ʁe]','[kɔ.mɑ̃.sə.ʁa]','[kɔ.mɑ̃.sə.ʁɔ̃]','[kɔ.mɑ̃.sə.ʁe]','[kɔ.mɑ̃.sə.ʁɔ̃]'] }
  },
  note: '-cer 动词：nous 写作 commençons（ç 保持 [s] 音，不读 [k]）。',
  ex: [
    { fr: 'Le cours commence à neuf heures.', zh: '课九点开始。', i: '[lə kuʁ kɔ.mɑ̃s a nœ.v‿œʁ]' },
    { fr: "J'ai commencé le français en janvier.", zh: '我一月份开始学法语。', i: '[ʒe kɔ.mɑ̃.se lə fʁɑ̃.sɛ ɑ̃ ʒɑ̃.vje]' }
  ]
},
{
  id: 'acheter', inf: 'acheter', ipa: '[aʃ.te]', zh: '买', grp: 'er', aux: 'avoir', part: 'acheté',
  tenses: {
    pres: { f: ['achète','achètes','achète','achetons','achetez','achètent'],
            i: ['[a.ʃɛt]','[a.ʃɛt]','[a.ʃɛt]','[aʃ.tɔ̃]','[aʃ.te]','[a.ʃɛt]'] },
    pc:   { f: ['ai acheté','as acheté','a acheté','avons acheté','avez acheté','ont acheté'],
            i: ['[ʒe.t‿aʃ.te]','[ty a.z‿aʃ.te]','[i.la.z‿aʃ.te]','[nu.z‿a.vɔ̃.z‿aʃ.te]','[vu.z‿a.ve.z‿aʃ.te]','[il.z‿ɔ̃.z‿aʃ.te]'] },
    imp:  { f: ['achetais','achetais','achetait','achetions','achetiez','achetaient'],
            i: ['[aʃ.tɛ]','[aʃ.tɛ]','[aʃ.tɛ]','[aʃ.tjɔ̃]','[aʃ.tje]','[aʃ.tɛ]'] },
    fut:  { f: ['achèterai','achèteras','achètera','achèterons','achèterez','achèteront'],
            i: ['[a.ʃɛ.tə.ʁe]','[a.ʃɛ.tə.ʁe]','[a.ʃɛ.tə.ʁa]','[a.ʃɛ.tə.ʁɔ̃]','[a.ʃɛ.tə.ʁe]','[a.ʃɛ.tə.ʁɔ̃]'] }
  },
  note: '-eter 动词：单数人称 é → è（il achète），将来时也用 achèter-。',
  ex: [
    { fr: "J'achète du pain.", zh: '我买面包。', i: '[ʒa.ʃɛt dy pɛ̃]' },
    { fr: 'Nous avons acheté une maison.', zh: '我们买了一栋房子。', i: '[nu.z‿a.vɔ̃.z‿aʃ.te yn mɛ.zɔ̃]' }
  ]
},
{
  id: 'appeler', inf: 'appeler', ipa: '[a.ple]', zh: '叫；打电话', grp: 'er', aux: 'avoir', part: 'appelé',
  tenses: {
    pres: { f: ['appelle','appelles','appelle','appelons','appelez','appellent'],
            i: ['[a.pɛl]','[a.pɛl]','[a.pɛl]','[a.pə.lɔ̃]','[a.pə.le]','[a.pɛl]'] },
    pc:   { f: ['ai appelé','as appelé','a appelé','avons appelé','avez appelé','ont appelé'],
            i: ['[ʒe.t‿a.pə.le]','[ty a.z‿a.pə.le]','[i.la.z‿a.pə.le]','[nu.z‿a.vɔ̃.z‿a.pə.le]','[vu.z‿a.ve.z‿a.pə.le]','[il.z‿ɔ̃.z‿a.pə.le]'] },
    imp:  { f: ['appelais','appelais','appelait','appelions','appeliez','appelaient'],
            i: ['[a.pə.lɛ]','[a.pə.lɛ]','[a.pə.lɛ]','[a.pə.ljɔ̃]','[a.pə.lje]','[a.pə.lɛ]'] },
    fut:  { f: ['appellerai','appelleras','appellera','appellerons','appellerez','appelleront'],
            i: ['[a.pɛ.lə.ʁe]','[a.pɛ.lə.ʁe]','[a.pɛ.lə.ʁa]','[a.pɛ.lə.ʁɔ̃]','[a.pɛ.lə.ʁe]','[a.pɛ.lə.ʁɔ̃]'] }
  },
  note: '-eler 动词双写 l：appelle；appeler qqn 给某人打电话。',
  ex: [
    { fr: "Je t'appelle ce soir.", zh: '我今晚给你打电话。', i: '[ʒə ta.pɛl sə swaʁ]' },
    { fr: 'Il a appelé le médecin.', zh: '他给医生打了电话。', i: '[i.la.z‿a.pə.le lə med.sɛ̃]' }
  ]
},
{
  id: 'preferer', inf: 'préférer', ipa: '[pʁe.fe.ʁe]', zh: '更喜欢', grp: 'er', aux: 'avoir', part: 'préféré',
  tenses: {
    pres: { f: ['préfère','préfères','préfère','préférons','préférez','préfèrent'],
            i: ['[pʁe.fɛʁ]','[pʁe.fɛʁ]','[pʁe.fɛʁ]','[pʁe.fe.ʁɔ̃]','[pʁe.fe.ʁe]','[pʁe.fɛʁ]'] },
    pc:   { f: ['ai préféré','as préféré','a préféré','avons préféré','avez préféré','ont préféré'],
            i: ['[ʒe pʁe.fe.ʁe]','[ty a pʁe.fe.ʁe]','[i.la pʁe.fe.ʁe]','[nu.z‿a.vɔ̃ pʁe.fe.ʁe]','[vu.z‿a.ve pʁe.fe.ʁe]','[il.z‿ɔ̃ pʁe.fe.ʁe]'] },
    imp:  { f: ['préférais','préférais','préférait','préférions','préfériez','préféraient'],
            i: ['[pʁe.fe.ʁɛ]','[pʁe.fe.ʁɛ]','[pʁe.fe.ʁɛ]','[pʁe.fe.ʁjɔ̃]','[pʁe.fe.ʁje]','[pʁe.fe.ʁɛ]'] },
    fut:  { f: ['préférerai','préféreras','préférera','préférerons','préférerez','préféreront'],
            i: ['[pʁe.fe.ʁə.ʁe]','[pʁe.fe.ʁə.ʁe]','[pʁe.fe.ʁə.ʁa]','[pʁe.fe.ʁə.ʁɔ̃]','[pʁe.fe.ʁə.ʁe]','[pʁe.fe.ʁə.ʁɔ̃]'] }
  },
  note: '-é(é)er 动词同 acheter：第三人称单数 préfère（é → è）。',
  ex: [
    { fr: 'Je préfère le thé.', zh: '我更喜欢茶。', i: '[ʒə pʁe.fɛʁ lə te]' },
    { fr: 'Vous avez préféré le train.', zh: '你们更喜欢火车。', i: '[vu.z‿a.ve pʁe.fe.ʁe lə tʁɛ̃]' }
  ]
},

/* ================= 第二组 -ir ================= */
{
  id: 'finir', inf: 'finir', ipa: '[fi.niʁ]', zh: '完成；结束', grp: 'ir', aux: 'avoir', part: 'fini',
  tenses: {
    pres: { f: ['finis','finis','finit','finissons','finissez','finissent'],
            i: ['[fi.ni]','[fi.ni]','[fi.ni]','[fi.ni.sɔ̃]','[fi.ni.se]','[fi.nis]'] },
    pc:   { f: ['ai fini','as fini','a fini','avons fini','avez fini','ont fini'],
            i: ['[ʒe fi.ni]','[ty a fi.ni]','[i.la fi.ni]','[nu.z‿a.vɔ̃ fi.ni]','[vu.z‿a.ve fi.ni]','[il.z‿ɔ̃ fi.ni]'] },
    imp:  { f: ['finissais','finissais','finissait','finissions','finissiez','finissaient'],
            i: ['[fi.ni.sɛ]','[fi.ni.sɛ]','[fi.ni.sɛ]','[fi.ni.sjɔ̃]','[fi.ni.sje]','[fi.ni.sɛ]'] },
    fut:  { f: ['finirai','finiras','finira','finirons','finirez','finiront'],
            i: ['[fi.ni.ʁe]','[fi.ni.ʁe]','[fi.ni.ʁa]','[fi.ni.ʁɔ̃]','[fi.ni.ʁe]','[fi.ni.ʁɔ̃]'] }
  },
  note: '第二组动词：词干 fin- + is / it / issons / issez / issent，各部分都带 -iss-。',
  ex: [
    { fr: 'Je finis mes devoirs.', zh: '我完成作业。', i: '[ʒə fi.ni me də.vwaʁ]' },
    { fr: 'Nous avons fini le travail.', zh: '我们完成了工作。', i: '[nu.z‿a.vɔ̃ fi.ni lə tʁa.vaj]' }
  ]
},
{
  id: 'choisir', inf: 'choisir', ipa: '[ʃwa.ziʁ]', zh: '选择', grp: 'ir', aux: 'avoir', part: 'choisi',
  tenses: {
    pres: { f: ['choisis','choisis','choisit','choisissons','choisissez','choisissent'],
            i: ['[ʃwa.zi]','[ʃwa.zi]','[ʃwa.zi]','[ʃwa.zi.sɔ̃]','[ʃwa.zi.se]','[ʃwa.zis]'] },
    pc:   { f: ['ai choisi','as choisi','a choisi','avons choisi','avez choisi','ont choisi'],
            i: ['[ʒe ʃwa.zi]','[ty a ʃwa.zi]','[i.la ʃwa.zi]','[nu.z‿a.vɔ̃ ʃwa.zi]','[vu.z‿a.ve ʃwa.zi]','[il.z‿ɔ̃ ʃwa.zi]'] },
    imp:  { f: ['choisissais','choisissais','choisissait','choisissions','choisissiez','choisissaient'],
            i: ['[ʃwa.zi.sɛ]','[ʃwa.zi.sɛ]','[ʃwa.zi.sɛ]','[ʃwa.zi.sjɔ̃]','[ʃwa.zi.sje]','[ʃwa.zi.sɛ]'] },
    fut:  { f: ['choisirai','choisiras','choisira','choisirons','choisirez','choisiront'],
            i: ['[ʃwa.zi.ʁe]','[ʃwa.zi.ʁe]','[ʃwa.zi.ʁa]','[ʃwa.zi.ʁɔ̃]','[ʃwa.zi.ʁe]','[ʃwa.zi.ʁɔ̃]'] }
  },
  note: 'choisir de faire 决定做某事。',
  ex: [
    { fr: 'Je choisis le café.', zh: '我选择咖啡。', i: '[ʒə ʃwa.zi lə ka.fe]' },
    { fr: 'Elle a choisi la robe rouge.', zh: '她选了那条红裙子。', i: '[ɛ.la ʃwa.zi la ʁɔb ʁuʒ]' }
  ]
},
{
  id: 'grandir', inf: 'grandir', ipa: '[ɡʁɑ̃.diʁ]', zh: '长大；变高', grp: 'ir', aux: 'avoir', part: 'grandi',
  tenses: {
    pres: { f: ['grandis','grandis','grandit','grandissons','grandissez','grandissent'],
            i: ['[ɡʁɑ̃.di]','[ɡʁɑ̃.di]','[ɡʁɑ̃.di]','[ɡʁɑ̃.di.sɔ̃]','[ɡʁɑ̃.di.se]','[ɡʁɑ̃.dis]'] },
    pc:   { f: ['ai grandi','as grandi','a grandi','avons grandi','avez grandi','ont grandi'],
            i: ['[ʒe ɡʁɑ̃.di]','[ty a ɡʁɑ̃.di]','[i.la ɡʁɑ̃.di]','[nu.z‿a.vɔ̃ ɡʁɑ̃.di]','[vu.z‿a.ve ɡʁɑ̃.di]','[il.z‿ɔ̃ ɡʁɑ̃.di]'] },
    imp:  { f: ['grandissais','grandissais','grandissait','grandissions','grandissiez','grandissaient'],
            i: ['[ɡʁɑ̃.di.sɛ]','[ɡʁɑ̃.di.sɛ]','[ɡʁɑ̃.di.sɛ]','[ɡʁɑ̃.di.sjɔ̃]','[ɡʁɑ̃.di.sje]','[ɡʁɑ̃.di.sɛ]'] },
    fut:  { f: ['grandirai','grandiras','grandira','grandirons','grandirez','grandiront'],
            i: ['[ɡʁɑ̃.di.ʁe]','[ɡʁɑ̃.di.ʁe]','[ɡʁɑ̃.di.ʁa]','[ɡʁɑ̃.di.ʁɔ̃]','[ɡʁɑ̃.di.ʁe]','[ɡʁɑ̃.di.ʁɔ̃]'] }
  },
  note: 'grandir 也可以指「长大成人」。',
  ex: [
    { fr: 'Les enfants grandissent vite.', zh: '孩子们长得很快。', i: '[le.z‿ɑ̃.fɑ̃ ɡʁɑ̃.dis vit]' },
    { fr: "J'ai grandi à Nantes.", zh: '我在南特长大。', i: '[ʒe ɡʁɑ̃.di a nɑ̃t]' }
  ]
},

/* ================= 不规则动词 ================= */
{
  id: 'etre', inf: 'être', ipa: '[ɛtʁ]', zh: '是', grp: 'irr', aux: 'avoir', part: 'été',
  tenses: {
    pres: { f: ['suis','es','est','sommes','êtes','sont'],
            i: ['[sɥi]','[ɛ]','[ɛ]','[sɔm]','[ɛt]','[sɔ̃]'] },
    pc:   { f: ['ai été','as été','a été','avons été','avez été','ont été'],
            i: ['[ʒe.t‿e.te]','[ty a.z‿e.te]','[i.la.z‿e.te]','[nu.z‿a.vɔ̃.z‿e.te]','[vu.z‿a.ve.z‿e.te]','[il.z‿ɔ̃.z‿e.te]'] },
    imp:  { f: ['étais','étais','était','étions','étiez','étaient'],
            i: ['[e.tɛ]','[e.tɛ]','[e.tɛ]','[e.tjɔ̃]','[e.tje]','[e.tɛ]'] },
    fut:  { f: ['serai','seras','sera','serons','serez','seront'],
            i: ['[sə.ʁe]','[sə.ʁe]','[sə.ʁa]','[sə.ʁɔ̃]','[sə.ʁe]','[sə.ʁɔ̃]'] }
  },
  note: 'être 变位完全特殊，必须整体记忆；它的复合时态用 avoir：j\'ai été。ét- 是未完成过去时的词干。',
  ex: [
    { fr: 'Je suis étudiant.', zh: '我是学生。', i: '[ʒə sɥi.z‿e.ty.djɑ̃]' },
    { fr: 'Il a été malade hier.', zh: '他昨天生病了。', i: '[i.la.z‿e.te ma.lad jɛʁ]' }
  ]
},
{
  id: 'avoir', inf: 'avoir', ipa: '[a.vwaʁ]', zh: '有', grp: 'irr', aux: 'avoir', part: 'eu',
  tenses: {
    pres: { f: ['ai','as','a','avons','avez','ont'],
            i: ['[e]','[a]','[a]','[a.vɔ̃]','[a.ve]','[ɔ̃]'] },
    pc:   { f: ['ai eu','as eu','a eu','avons eu','avez eu','ont eu'],
            i: ['[e y]','[a y]','[a y]','[a.vɔ̃.z‿y]','[a.ve.z‿y]','[ɔ̃.z‿y]'] },
    imp:  { f: ['avais','avais','avait','avions','aviez','avaient'],
            i: ['[a.vɛ]','[a.vɛ]','[a.vɛ]','[a.vjɔ̃]','[a.vje]','[a.vɛ]'] },
    fut:  { f: ['aurai','auras','aura','aurons','aurez','auront'],
            i: ['[o.ʁe]','[o.ʁe]','[o.ʁa]','[o.ʁɔ̃]','[o.ʁe]','[o.ʁɔ̃]'] }
  },
  note: 'avoir 表示「有」，也是大多数动词复合过去时的助动词；aur- 是将来时词干。',
  ex: [
    { fr: "J'ai un chat.", zh: '我有一只猫。', i: '[ʒe œ̃ ʃa]' },
    { fr: 'Nous avons eu peur !', zh: '我们吓了一跳！', i: '[nu.z‿a.vɔ̃.z‿y pœʁ]' }
  ]
},
{
  id: 'aller', inf: 'aller', ipa: '[a.le]', zh: '去', grp: 'irr', aux: 'etre', part: 'allé',
  tenses: {
    pres: { f: ['vais','vas','va','allons','allez','vont'],
            i: ['[vɛ]','[vɑ]','[va]','[a.lɔ̃]','[a.le]','[vɔ̃]'] },
    pc:   { f: ['suis allé(e)','es allé(e)','est allé(e)','sommes allé(e)s','êtes allé(e)s','sont allé(e)s'],
            i: ['[sɥi.z‿a.le]','[ɛ.z‿a.le]','[ɛ.t‿a.le]','[sɔm.z‿a.le]','[ɛt.z‿a.le]','[sɔ̃.z‿a.le]'] },
    imp:  { f: ['allais','allais','allait','allions','alliez','allaient'],
            i: ['[a.lɛ]','[a.lɛ]','[a.lɛ]','[a.ljɔ̃]','[a.lje]','[a.lɛ]'] },
    fut:  { f: ['irai','iras','ira','irons','irez','iront'],
            i: ['[i.ʁe]','[i.ʁe]','[i.ʁa]','[i.ʁɔ̃]','[i.ʁe]','[i.ʁɔ̃]'] }
  },
  note: 'aller 用 être 作助动词，过去分词要配合主语：je suis allé（男）/ allée（女）。',
  ex: [
    { fr: "Je vais à l'école.", zh: '我去学校。', i: '[ʒə vɛ.z‿a le.kɔl]' },
    { fr: 'Elle est allée au marché.', zh: '她去了市场。', i: '[ɛ.lɛ.t‿a.le.o maʁ.ʃe]' }
  ]
},
{
  id: 'faire', inf: 'faire', ipa: '[fɛʁ]', zh: '做', grp: 'irr', aux: 'avoir', part: 'fait',
  tenses: {
    pres: { f: ['fais','fais','fait','faisons','faites','font'],
            i: ['[fɛ]','[fɛ]','[fɛ]','[fə.zɔ̃]','[fɛt]','[fɔ̃]'] },
    pc:   { f: ['ai fait','as fait','a fait','avons fait','avez fait','ont fait'],
            i: ['[ʒe fɛ]','[ty a fɛ]','[i.la fɛ]','[nu.z‿a.vɔ̃ fɛ]','[vu.z‿a.ve fɛ]','[il.z‿ɔ̃ fɛ]'] },
    imp:  { f: ['faisais','faisais','faisait','faisions','faisiez','faisaient'],
            i: ['[fə.zɛ]','[fə.zɛ]','[fə.zɛ]','[fə.zjɔ̃]','[fə.zje]','[fə.zɛ]'] },
    fut:  { f: ['ferai','feras','fera','ferons','ferez','feront'],
            i: ['[fə.ʁe]','[fə.ʁe]','[fə.ʁa]','[fə.ʁɔ̃]','[fə.ʁe]','[fə.ʁɔ̃]'] }
  },
  note: 'faire du sport 做运动；faire les courses 购物。第三人称复数 sont fait 变 font。',
  ex: [
    { fr: 'Je fais du sport.', zh: '我做运动。', i: '[ʒə fɛ dy spɔʁ]' },
    { fr: 'Vous avez fait un gâteau ?', zh: '你们做了蛋糕吗？', i: '[vu.z‿a.ve fɛ œ̃ ɡa.to]' }
  ]
},
{
  id: 'venir', inf: 'venir', ipa: '[və.niʁ]', zh: '来', grp: 'irr', aux: 'etre', part: 'venu',
  tenses: {
    pres: { f: ['viens','viens','vient','venons','venez','viennent'],
            i: ['[vjɛ̃]','[vjɛ̃]','[vjɛ̃]','[və.nɔ̃]','[və.ne]','[vjɛn]'] },
    pc:   { f: ['suis venu(e)','es venu(e)','est venu(e)','sommes venu(e)s','êtes venu(e)s','sont venu(e)s'],
            i: ['[sɥi.z‿və.ny]','[ɛ.z‿və.ny]','[ɛ.t‿və.ny]','[sɔm.z‿və.ny]','[ɛt.z‿və.ny]','[sɔ̃.z‿və.ny]'] },
    imp:  { f: ['venais','venais','venait','venions','veniez','venaient'],
            i: ['[və.nɛ]','[və.nɛ]','[və.nɛ]','[və.njɔ̃]','[və.nje]','[və.nɛ]'] },
    fut:  { f: ['viendrai','viendras','viendra','viendrons','viendrez','viendront'],
            i: ['[vjɛ̃.dʁe]','[vjɛ̃.dʁe]','[vjɛ̃.dʁa]','[vjɛ̃.dʁɔ̃]','[vjɛ̃.dʁe]','[vjɛ̃.dʁɔ̃]'] }
  },
  note: 'venir de + 城市 来自某地；venir de faire 刚刚做了某事。同族：revenir, devenir, tenir。',
  ex: [
    { fr: 'Je viens de Chine.', zh: '我来自中国。', i: '[ʒə vjɛ̃ də ʃin]' },
    { fr: 'Il est venu hier soir.', zh: '他昨晚来了。', i: '[i.lɛ.t‿və.ny jɛʁ swaʁ]' }
  ]
},
{
  id: 'pouvoir', inf: 'pouvoir', ipa: '[pu.vwaʁ]', zh: '能够；可以', grp: 'irr', aux: 'avoir', part: 'pu',
  tenses: {
    pres: { f: ['peux','peux','peut','pouvons','pouvez','peuvent'],
            i: ['[pø]','[pø]','[pø]','[pu.vɔ̃]','[pu.ve]','[pøv]'] },
    pc:   { f: ['ai pu','as pu','a pu','avons pu','avez pu','ont pu'],
            i: ['[ʒe py]','[ty a py]','[i.la py]','[nu.z‿a.vɔ̃ py]','[vu.z‿a.ve py]','[il.z‿ɔ̃ py]'] },
    imp:  { f: ['pouvais','pouvais','pouvait','pouvions','pouviez','pouvaient'],
            i: ['[pu.vɛ]','[pu.vɛ]','[pu.vɛ]','[pu.vjɔ̃]','[pu.vje]','[pu.vɛ]'] },
    fut:  { f: ['pourrai','pourras','pourra','pourrons','pourrez','pourront'],
            i: ['[pu.ʁe]','[pu.ʁe]','[pu.ʁa]','[pu.ʁɔ̃]','[pu.ʁe]','[pu.ʁɔ̃]'] }
  },
  note: 'pouvoir 后接动词原形：Je peux t\'aider 我能帮你。',
  ex: [
    { fr: 'Je peux t’aider.', zh: '我可以帮你。', i: '[ʒə pø tɛ.de]' },
    { fr: 'Nous avons pu entrer.', zh: '我们能够进来。', i: '[nu.z‿a.vɔ̃ py ɑ̃.tʁe]' }
  ]
},
{
  id: 'vouloir', inf: 'vouloir', ipa: '[vu.lwaʁ]', zh: '想要', grp: 'irr', aux: 'avoir', part: 'voulu',
  tenses: {
    pres: { f: ['veux','veux','veut','voulons','voulez','veulent'],
            i: ['[vø]','[vø]','[vø]','[vu.lɔ̃]','[vu.le]','[vøl]'] },
    pc:   { f: ['ai voulu','as voulu','a voulu','avons voulu','avez voulu','ont voulu'],
            i: ['[ʒe vu.lu]','[ty a vu.lu]','[i.la vu.lu]','[nu.z‿a.vɔ̃ vu.lu]','[vu.z‿a.ve vu.lu]','[il.z‿ɔ̃ vu.lu]'] },
    imp:  { f: ['voulais','voulais','voulait','voulions','vouliez','voulaient'],
            i: ['[vu.lɛ]','[vu.lɛ]','[vu.lɛ]','[vu.ljɔ̃]','[vu.lje]','[vu.lɛ]'] },
    fut:  { f: ['voudrai','voudras','voudra','voudrons','voudrez','voudront'],
            i: ['[vu.dʁe]','[vu.dʁe]','[vu.dʁa]','[vu.dʁɔ̃]','[vu.dʁe]','[vu.dʁɔ̃]'] }
  },
  note: 'veux-tu…? 你想要……吗（礼貌请求）；vouloir bien 乐意。',
  ex: [
    { fr: 'Je veux un café.', zh: '我想要一杯咖啡。', i: '[ʒə vø.z‿œ̃ ka.fe]' },
    { fr: 'Elle a voulu partir.', zh: '她想要离开。', i: '[ɛ.la vu.lu paʁ.tiʁ]' }
  ]
},
{
  id: 'devoir', inf: 'devoir', ipa: '[də.vwaʁ]', zh: '应该；欠', grp: 'irr', aux: 'avoir', part: 'dû',
  tenses: {
    pres: { f: ['dois','dois','doit','devons','devez','doivent'],
            i: ['[dwa]','[dwa]','[dwa]','[də.vɔ̃]','[də.ve]','[dwav]'] },
    pc:   { f: ['ai dû','as dû','a dû','avons dû','avez dû','ont dû'],
            i: ['[ʒe dy]','[ty a dy]','[i.la dy]','[nu.z‿a.vɔ̃ dy]','[vu.z‿a.ve dy]','[il.z‿ɔ̃ dy]'] },
    imp:  { f: ['devais','devais','devait','devions','deviez','devaient'],
            i: ['[də.vɛ]','[də.vɛ]','[də.vɛ]','[də.vjɔ̃]','[də.vje]','[də.vɛ]'] },
    fut:  { f: ['devrai','devras','devra','devrons','devrez','devront'],
            i: ['[də.vʁe]','[də.vʁe]','[də.vʁa]','[də.vʁɔ̃]','[də.vʁe]','[də.vʁɔ̃]'] }
  },
  note: 'devoir + 动词原形表示「应该」；过去分词 dû 的阴性 dû / du 不变（本身无阴阳变化，单数同形）。',
  ex: [
    { fr: 'Je dois étudier.', zh: '我应该学习。', i: '[ʒə dwa.z‿e.ty.dje]' },
    { fr: 'Tu as dû attendre.', zh: '你只好等了。', i: '[ty a dy a.tɑ̃dʁ]' }
  ]
},
{
  id: 'prendre', inf: 'prendre', ipa: '[pʁɑ̃dʁ]', zh: '拿；乘坐', grp: 'irr', aux: 'avoir', part: 'pris',
  tenses: {
    pres: { f: ['prends','prends','prend','prenons','prenez','prennent'],
            i: ['[pʁɑ̃]','[pʁɑ̃]','[pʁɑ̃]','[pʁə.nɔ̃]','[pʁə.ne]','[pʁɛn]'] },
    pc:   { f: ['ai pris','as pris','a pris','avons pris','avez pris','ont pris'],
            i: ['[ʒe pʁi]','[ty a pʁi]','[i.la pʁi]','[nu.z‿a.vɔ̃ pʁi]','[vu.z‿a.ve pʁi]','[il.z‿ɔ̃ pʁi]'] },
    imp:  { f: ['prenais','prenais','prenait','prenions','preniez','prenaient'],
            i: ['[pʁə.nɛ]','[pʁə.nɛ]','[pʁə.nɛ]','[pʁə.njɔ̃]','[pʁə.nje]','[pʁə.nɛ]'] },
    fut:  { f: ['prendrai','prendras','prendra','prendrons','prendrez','prendront'],
            i: ['[pʁɑ̃.dʁe]','[pʁɑ̃.dʁe]','[pʁɑ̃.dʁa]','[pʁɑ̃.dʁɔ̃]','[pʁɑ̃.dʁe]','[pʁɑ̃.dʁɔ̃]'] }
  },
  note: '同族词：apprendre 学习，comprendre 明白，reprendre 再拿/重新开始。',
  ex: [
    { fr: 'Je prends le bus.', zh: '我坐公交车。', i: '[ʒə pʁɑ̃ lə bys]' },
    { fr: "J'ai pris un café.", zh: '我喝了一杯咖啡。', i: '[ʒe pʁi.z‿œ̃ ka.fe]' }
  ]
},
{
  id: 'mettre', inf: 'mettre', ipa: '[mɛtʁ]', zh: '放', grp: 'irr', aux: 'avoir', part: 'mis',
  tenses: {
    pres: { f: ['mets','mets','met','mettons','mettez','mettent'],
            i: ['[mɛ]','[mɛ]','[mɛ]','[mɛ.tɔ̃]','[mɛ.te]','[mɛt]'] },
    pc:   { f: ['ai mis','as mis','a mis','avons mis','avez mis','ont mis'],
            i: ['[ʒe mi]','[ty a mi]','[i.la mi]','[nu.z‿a.vɔ̃ mi]','[vu.z‿a.ve mi]','[il.z‿ɔ̃ mi]'] },
    imp:  { f: ['mettais','mettais','mettait','mettions','mettiez','mettaient'],
            i: ['[mɛ.tɛ]','[mɛ.tɛ]','[mɛ.tɛ]','[mɛ.tjɔ̃]','[mɛ.tje]','[mɛ.tɛ]'] },
    fut:  { f: ['mettrai','mettras','mettra','mettrons','mettrez','mettront'],
            i: ['[mɛ.tʁe]','[mɛ.tʁe]','[mɛ.tʁa]','[mɛ.tʁɔ̃]','[mɛ.tʁe]','[mɛ.tʁɔ̃]'] }
  },
  note: 'mettre 双写 t；同族：permettre 允许，promettre 许诺。',
  ex: [
    { fr: 'Je mets mon manteau.', zh: '我穿上外套。', i: '[ʒə mɛ mɔ̃ mɑ̃.to]' },
    { fr: 'Elle a mis la table.', zh: '她摆好了桌子。', i: '[ɛ.la mi la tabl]' }
  ]
},
{
  id: 'savoir', inf: 'savoir', ipa: '[sa.vwaʁ]', zh: '知道；会', grp: 'irr', aux: 'avoir', part: 'su',
  tenses: {
    pres: { f: ['sais','sais','sait','savons','savez','savent'],
            i: ['[sɛ]','[sɛ]','[sɛ]','[sa.vɔ̃]','[sa.ve]','[sav]'] },
    pc:   { f: ['ai su','as su','a su','avons su','avez su','ont su'],
            i: ['[ʒe sy]','[ty a sy]','[i.la sy]','[nu.z‿a.vɔ̃ sy]','[vu.z‿a.ve sy]','[il.z‿ɔ̃ sy]'] },
    imp:  { f: ['savais','savais','savait','savions','saviez','savaient'],
            i: ['[sa.vɛ]','[sa.vɛ]','[sa.vɛ]','[sa.vjɔ̃]','[sa.vje]','[sa.vɛ]'] },
    fut:  { f: ['saurai','sauras','saura','saurons','saurez','sauront'],
            i: ['[so.ʁe]','[so.ʁe]','[so.ʁa]','[so.ʁɔ̃]','[so.ʁe]','[so.ʁɔ̃]'] }
  },
  note: 'savoir + 动词原形 = 会做某事（Je sais nager 我会游泳）；savoir que 知道……',
  ex: [
    { fr: 'Je sais parler français.', zh: '我会讲法语。', i: '[ʒə sɛ paʁ.le fʁɑ̃.sɛ]' },
    { fr: 'Il a su la vérité.', zh: '他知道了真相。', i: '[i.la sy la ve.ʁi.te]' }
  ]
},
{
  id: 'ecrire', inf: 'écrire', ipa: '[e.kʁiʁ]', zh: '写', grp: 'irr', aux: 'avoir', part: 'écrit',
  tenses: {
    pres: { f: ['écris','écris','écrit','écrivons','écrivez','écrivent'],
            i: ['[e.kʁi]','[e.kʁi]','[e.kʁi]','[e.kʁi.vɔ̃]','[e.kʁi.ve]','[e.kʁiv]'] },
    pc:   { f: ['ai écrit','as écrit','a écrit','avons écrit','avez écrit','ont écrit'],
            i: ['[ʒe.t‿e.kʁi]','[ty a.z‿e.kʁi]','[i.la.z‿e.kʁi]','[nu.z‿a.vɔ̃.z‿e.kʁi]','[vu.z‿a.ve.z‿e.kʁi]','[il.z‿ɔ̃.z‿e.kʁi]'] },
    imp:  { f: ['écrivais','écrivais','écrivait','écrivions','écriviez','écrivaient'],
            i: ['[e.kʁi.vɛ]','[e.kʁi.vɛ]','[e.kʁi.vɛ]','[e.kʁi.vjɔ̃]','[e.kʁi.vje]','[e.kʁi.vɛ]'] },
    fut:  { f: ['écrirai','écriras','écrira','écrirons','écrirez','écriront'],
            i: ['[e.kʁi.ʁe]','[e.kʁi.ʁe]','[e.kʁi.ʁa]','[e.kʁi.ʁɔ̃]','[e.kʁi.ʁe]','[e.kʁi.ʁɔ̃]'] }
  },
  note: 'écrire 现在时复数带 -iv-（écrivons），将来时词干 écrir-。',
  ex: [
    { fr: "J'écris une lettre.", zh: '我写一封信。', i: '[ʒe.kʁi.zy.nə lɛtʁ]' },
    { fr: 'Tu as écrit un mail.', zh: '你写了一封邮件。', i: '[ty a.z‿e.kʁi.t‿œ̃ mail]' }
  ]
},
{
  id: 'lire', inf: 'lire', ipa: '[liʁ]', zh: '读', grp: 'irr', aux: 'avoir', part: 'lu',
  tenses: {
    pres: { f: ['lis','lis','lit','lisons','lisez','lisent'],
            i: ['[lis]','[lis]','[li]','[li.zɔ̃]','[li.ze]','[liz]'] },
    pc:   { f: ['ai lu','as lu','a lu','avons lu','avez lu','ont lu'],
            i: ['[ʒe ly]','[ty a ly]','[i.la ly]','[nu.z‿a.vɔ̃ ly]','[vu.z‿a.ve ly]','[il.z‿ɔ̃ ly]'] },
    imp:  { f: ['lisais','lisais','lisait','lisions','lisiez','lisaient'],
            i: ['[li.zɛ]','[li.zɛ]','[li.zɛ]','[li.zjɔ̃]','[li.zje]','[li.zɛ]'] },
    fut:  { f: ['lirai','liras','lira','lirons','lirez','liront'],
            i: ['[li.ʁe]','[li.ʁe]','[li.ʁa]','[li.ʁɔ̃]','[li.ʁe]','[li.ʁɔ̃]'] }
  },
  note: 'lire 只有三个字母却很不规则：il lit [li] 词尾 t 不发音。',
  ex: [
    { fr: 'Je lis un livre.', zh: '我读一本书。', i: '[ʒə li.z‿œ̃ livʁ]' },
    { fr: 'Elle a lu le journal.', zh: '她读了报纸。', i: '[ɛ.la ly lə ʒuʁ.nal]' }
  ]
},
{
  id: 'boire', inf: 'boire', ipa: '[bwaʁ]', zh: '喝', grp: 'irr', aux: 'avoir', part: 'bu',
  tenses: {
    pres: { f: ['bois','bois','boit','buvons','buvez','boivent'],
            i: ['[bwa]','[bwa]','[bwa]','[by.vɔ̃]','[by.ve]','[bwav]'] },
    pc:   { f: ['ai bu','as bu','a bu','avons bu','avez bu','ont bu'],
            i: ['[ʒe by]','[ty a by]','[i.la by]','[nu.z‿a.vɔ̃ by]','[vu.z‿a.ve by]','[il.z‿ɔ̃ by]'] },
    imp:  { f: ['buvais','buvais','buvait','buvions','buviez','buvaient'],
            i: ['[by.vɛ]','[by.vɛ]','[by.vɛ]','[by.vjɔ̃]','[by.vje]','[by.vɛ]'] },
    fut:  { f: ['boirai','boiras','boira','boirons','boirez','boiront'],
            i: ['[bwa.ʁe]','[bwa.ʁe]','[bwa.ʁa]','[bwa.ʁɔ̃]','[bwa.ʁe]','[bwa.ʁɔ̃]'] }
  },
  note: 'boire 单数用 bo-，复数变为 buv-（buvons），将来时词干 boir-。',
  ex: [
    { fr: "Je bois de l'eau.", zh: '我喝水。', i: '[ʒə bwa də lo]' },
    { fr: 'Nous avons bu du vin.', zh: '我们喝了葡萄酒。', i: '[nu.z‿a.vɔ̃ by dy vɛ̃]' }
  ]
}
];

window.__VERBS = VERBS;
window.__VERB_TENSES = VERB_TENSES;
window.__VERB_PRONOUNS = VERB_PRONOUNS;
window.__VERB_GROUPS = VERB_GROUPS;
