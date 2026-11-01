/* ============================================================
   法语 A1 · 发音规则库（《你好！法语 1》RÈGLES À SAVOIR 对齐版）
   —— 每张卡 = 一个音标 + 多条拼读规则 + 例词
   group: voy 元音 | nas 鼻腔元音 | sv 半元音 | con 辅音 | sup 补充
   pat:   触发该规则的字母组合（供单词卡「？」提示匹配，长组合优先）
   snd:   权威音标示范音文件（assets/audio/ipa/ipa-{id}.mp3，
          源自维基百科 IPA 音标表配套音频，语音学家录制）
   另有 PRON_FALLBACK：权威音频缺失时的 TTS 兜底示范词
   ============================================================ */

const PRON_GROUPS = [
  { id: "voy", label: "口腔元音", icon: "🎼",
    tip: "气流通过口腔、不受阻碍的音。法语共有 11 个口腔元音，唇形和开口度是关键。" },
  { id: "nas", label: "鼻腔元音", icon: "👃",
    tip: "气流同时从鼻腔出来的元音，共 4 个。注意：鼻化元音后面不能再跟元音字母，也不能跟 m / n，否则鼻化被破坏（un [œ̃] → une [yn]）。" },
  { id: "sv",  label: "半元音", icon: "🌊",
    tip: "也叫半辅音，共 3 个：[j] [ɥ] [w]。发音部位与对应元音 [i] [y] [u] 相同，但肌肉更紧张、气流通道更窄、摩擦更强。" },
  { id: "con", label: "辅音", icon: "🥁",
    tip: "气流受阻碍的音。法语的清辅音不送气（p / t / k 听起来介于英语的 p 和 b 之间）。" },
  { id: "sup", label: "重要补充", icon: "📌",
    tip: "教材之外 A1 必须掌握的两条高频规律：字母 x 的读法、词尾辅音不发音。" }
];

const PRON_RULES = [
  /* ═══════════ 🎼 口腔元音（11）═══════════ */
  { id: "a", group: "voy", ipa: "[a]", snd: true,
    pat: ["a","à","â"],
    title: "a / à / â 读 [a]",
    desc: "开口最大的前元音，像医生压舌头时的「啊」。â 上的长音符不改变读音，只提示历史上曾有过 s（âme / assommer）。",
    rules: [
      { sp: "字母 a", ex: [{ w: "papa", ipa: "[papa]" }] },
      { sp: "字母 à, â", ex: [{ w: "là", ipa: "[la]" }, { w: "âge", ipa: "[ɑʒ]" }] },
      { sp: "字母 e 在字母 mm 前", ex: [{ w: "femme", ipa: "[fam]" }] }
    ] },
  { id: "e", group: "voy", ipa: "[e]", snd: true,
    pat: ["é"],
    title: "é / -er / -ez 读 [e]",
    desc: "闭口的 [e]，嘴角向两边拉紧。-er / -ez 词尾是法语最常见的词尾，全读 [e]。",
    rules: [
      { sp: "字母 é", ex: [{ w: "été", ipa: "[ete]" }, { w: "clé", ipa: "[kle]" }] },
      { sp: "字母组合 ai 在少数词末或动词第一人称变位结尾", ex: [{ w: "j'ai", ipa: "[ʒe]" }, { w: "j'irai", ipa: "[ʒiʁe]" }] },
      { sp: "字母组合 er 在包含两个或多个音节的单词词末", ex: [{ w: "laisser", ipa: "[lese]" }, { w: "répéter", ipa: "[repidete]" }] },
      { sp: "字母组合 es 在单音节词末", ex: [{ w: "des", ipa: "[de]" }, { w: "mes", ipa: "[me]" }] },
      { sp: "字母组合 ez 在词末", ex: [{ w: "chez", ipa: "[ʃe]" }, { w: "allez", ipa: "[ale]" }] }
    ] },
  { id: "eps", group: "voy", ipa: "[ɛ]", snd: true,
    pat: ["è","ê","ai","ei","ay","ey"],
    title: "è / ê / ai / ei 读 [ɛ]",
    desc: "开口的 [ɛ]，嘴张得比 [e] 大，像「诶」到一半。注意：单音节词末的 -er 反而读 [ɛʁ]（fer、hier）。",
    rules: [
      { sp: "字母 è, ê", ex: [{ w: "mère", ipa: "[mɛʁ]" }, { w: "fête", ipa: "[fɛt]" }] },
      { sp: "字母 e 在闭音节中", ex: [{ w: "sel", ipa: "[sɛl]" }, { w: "est", ipa: "[ɛ]" }] },
      { sp: "字母 e 在两个相同的辅音字母前", ex: [{ w: "baguette", ipa: "[bagɛt]" }, { w: "ticket", ipa: "[tikɛ]" }] },
      { sp: "字母组合 ai, ei, ay, ey", ex: [{ w: "mais", ipa: "[mɛ]" }, { w: "peine", ipa: "[pɛn]" }, { w: "Orsay", ipa: "[ɔʁsɛ]" }, { w: "jersey", ipa: "[ʒɛʁzɛ]" }] },
      { sp: "字母 é 在词首且后面接 -ff, -ss, -ll 时", ex: [{ w: "effet", ipa: "[efɛ]" }, { w: "essai", ipa: "[esɛ]" }, { w: "ellipse", ipa: "[elips]" }] }
    ] },
  { id: "i", group: "voy", ipa: "[i]", snd: true,
    pat: ["i","î","ï"],
    title: "i / î / ï / y 读 [i]",
    desc: "扁平嘴形的「衣」。ï 上的分音符提醒它与前面的元音分开读；y 相当于两个 i（crayon [kʁɛjɔ̃] = kra-i-on 连读）。",
    rules: [
      { sp: "字母 i, î, ï", ex: [{ w: "si", ipa: "[si]" }, { w: "île", ipa: "[il]" }, { w: "maïs", ipa: "[mais]" }] },
      { sp: "字母 y", ex: [{ w: "style", ipa: "[stil]" }] }
    ] },
  { id: "y", group: "voy", ipa: "[y]", snd: true,
    pat: ["u","û"],
    title: "u / û 读 [y]",
    desc: "法语的招牌音：撮圆嘴唇发「衣」。别读成汉语「乌」——那是 [u]，ou 才是它。",
    rules: [
      { sp: "字母 u", ex: [{ w: "tu", ipa: "[ty]" }, { w: "une", ipa: "[yn]" }] },
      { sp: "字母 û", ex: [{ w: "sûr", ipa: "[syʁ]" }] }
    ] },
  { id: "u", group: "voy", ipa: "[u]", snd: true,
    pat: ["ou","où","oû","aoû"],
    title: "ou / où / aoû 读 [u]",
    desc: "嘴唇圆拢，和汉语「乌」相同。注意它和字母 u（[y]）完全是两个音。",
    rules: [
      { sp: "字母组合 ou, où, oû, aoû", ex: [{ w: "nous", ipa: "[nu]" }, { w: "coût", ipa: "[ku]" }, { w: "août", ipa: "[u]" }] }
    ] },
  { id: "o", group: "voy", ipa: "[o]", snd: true,
    pat: ["au","eau","ô"],
    title: "au / eau / ô 读 [o]",
    desc: "闭口的 [o]。eau 后面的 x 复数时不发音：beau / beaux 读音相同。",
    rules: [
      { sp: "字母组合 au, eau", ex: [{ w: "animaux", ipa: "[animo]" }, { w: "seau", ipa: "[so]" }] },
      { sp: "字母 o 在词末开音节中", ex: [{ w: "stylo", ipa: "[stilo]" }, { w: "canot", ipa: "[kano]" }] },
      { sp: "字母 o 在 [z] 音前", ex: [{ w: "rose", ipa: "[ʁoz]" }, { w: "oser", ipa: "[oze]" }] },
      { sp: "字母 ô", ex: [{ w: "tôt", ipa: "[to]" }, { w: "hôtel", ipa: "[otɛl]" }] }
    ] },
  { id: "o_ouv", group: "voy", ipa: "[ɔ]", snd: true,
    pat: ["o"],
    title: "o 读 [ɔ]",
    desc: "开口的 [ɔ]，嘴张得比 [o] 大，介于「欧」和「奥」之间。o 词末读 [ɔp] 类闭音节时通常是它。",
    rules: [
      { sp: "字母 o", ex: [{ w: "comme", ipa: "[kɔm]" }, { w: "normaux", ipa: "[nɔʁmo]" }] },
      { sp: "字母组合 um 在词末有时读 [ɔm]", ex: [{ w: "minimum", ipa: "[minimɔm]" }] }
    ] },
  { id: "schwa", group: "voy", ipa: "[ə]", snd: true,
    pat: ["e"],
    title: "e 读 [ə]（或常被弱化）",
    desc: "轻轻的「额」。法语快读时它常被吞掉：petit 读 [pti] 也不少见。词尾的 e 通常完全不发音。",
    rules: [
      { sp: "字母 e 在单音节词末", ex: [{ w: "le", ipa: "[lə]" }, { w: "ne", ipa: "[nə]" }] },
      { sp: "字母 e 在词首开音节中", ex: [{ w: "petit", ipa: "[pəti]" }, { w: "semaine", ipa: "[səmɛn]" }] },
      { sp: "字母 e 在「辅辅 e 辅元」组合中", ex: [{ w: "mercredi", ipa: "[mɛʁkʁədi]" }] }
    ] },
  { id: "eu_f", group: "voy", ipa: "[ø]", snd: true,
    pat: ["eu","œu"],
    title: "eu / œu 读 [ø]（闭口）",
    desc: "先做 [e] 的口形再把嘴唇撮圆。口诀：词尾或 [z] 音前 → 闭口 [ø]。",
    rules: [
      { sp: "字母组合 eu, œu 在词末开音节中", ex: [{ w: "pleut", ipa: "[plø]" }, { w: "fameux", ipa: "[famo]" }, { w: "nœud", ipa: "[nø]" }] },
      { sp: "字母组合 eu 在 [z] 音前", ex: [{ w: "fameuse", ipa: "[famøz]" }, { w: "creuser", ipa: "[kʁøze]" }] },
      { sp: "字母组合 eu 在词首开音节中", ex: [{ w: "euro", ipa: "[øʁo]" }, { w: "Europe", ipa: "[øʁɔp]" }] }
    ] },
  { id: "eu_o", group: "voy", ipa: "[œ]", snd: true,
    pat: ["eu","œu","œ","ue"],
    title: "eu / œu / œ 读 [œ]（开口）",
    desc: "先做 [ɛ] 的口形再撮圆嘴唇。口诀：后面还有发音的辅音 → 开口 [œ]。",
    rules: [
      { sp: "字母组合 eu, œu, œ", ex: [{ w: "seul", ipa: "[sœl]" }, { w: "sœur", ipa: "[sœʁ]" }, { w: "œil", ipa: "[œj]" }] },
      { sp: "字母组合 ue 在字母 c 或 g 后", ex: [{ w: "accueil", ipa: "[akœj]" }, { w: "orgueil", ipa: "[ɔʁɡœj]" }] }
    ] },

  /* ═══════════ 👃 鼻腔元音（4）═══════════ */
  { id: "an", group: "nas", ipa: "[ɑ̃]", snd: true,
    pat: ["an","am","en","em"],
    title: "an / am / en / em 读 [ɑ̃]",
    desc: "最大的鼻化元音，偏「昂」。气流同时走鼻子和嘴，n / m 本身不发音，只把元音「染」成鼻音。",
    rules: [
      { sp: "字母组合 an, am", ex: [{ w: "maman", ipa: "[mamɑ̃]" }, { w: "champ", ipa: "[ʃɑ̃]" }] },
      { sp: "字母组合 en, em", ex: [{ w: "enfant", ipa: "[ɑ̃fɑ̃]" }, { w: "tempête", ipa: "[tɑ̃pɛt]" }] }
    ] },
  { id: "on", group: "nas", ipa: "[ɔ̃]", snd: true,
    pat: ["on","om"],
    title: "on / om 读 [ɔ̃]",
    desc: "偏「翁」的鼻音。bon 读 [bɔ̃]，词尾的 n 完全不发音。",
    rules: [
      { sp: "字母组合 on, om", ex: [{ w: "honte", ipa: "[ɔ̃t]" }, { w: "bombe", ipa: "[bɔ̃b]" }] }
    ] },
  { id: "in", group: "nas", ipa: "[ɛ̃]", snd: true,
    pat: ["in","im","ain","ein","yn","ym","aim"],
    title: "in / im / ain / ein 读 [ɛ̃]",
    desc: "拼法最多的鼻化元音。en 在 i / y 之后（bien）、少数情况下（examen）也读它。",
    rules: [
      { sp: "字母组合 in, yn, ain, ein", ex: [{ w: "dinde", ipa: "[dɛ̃d]" }, { w: "lynx", ipa: "[lɛ̃ks]" }, { w: "pain", ipa: "[pɛ̃]" }, { w: "ceinture", ipa: "[sɛ̃tyʁ]" }] },
      { sp: "字母组合 im, ym, aim", ex: [{ w: "simple", ipa: "[sɛ̃pl]" }, { w: "sympathique", ipa: "[sɛ̃patik]" }, { w: "daim", ipa: "[dɛ̃]" }, { w: "Reims", ipa: "[ʁɛ̃s]" }] },
      { sp: "字母组合 en 在字母 i, y 之后", ex: [{ w: "coréen", ipa: "[kɔʁeɛ̃]" }, { w: "bien", ipa: "[bjɛ̃]" }, { w: "moyen", ipa: "[mwajɛ̃]" }] },
      { sp: "字母组合 en 在少数情况下", ex: [{ w: "examen", ipa: "[ɛɡzamɛ̃]" }] }
    ] },
  { id: "un", group: "nas", ipa: "[œ̃]", snd: true,
    pat: ["un","um"],
    title: "un / um 读 [œ̃]",
    desc: "嘴唇最圆的鼻化元音。un（一）、parfum（香水）都是。有些地区读音已并入 [ɛ̃]。",
    rules: [
      { sp: "字母组合 un, um", ex: [{ w: "lundi", ipa: "[lœ̃di]" }, { w: "parfum", ipa: "[paʁfœ̃]" }] }
    ] },

  /* ═══════════ 🌊 半元音（3）═══════════ */
  { id: "yod", group: "sv", ipa: "[j]", snd: true,
    pat: ["ill","il"],
    title: "i / il / ill 读 [j]",
    desc: "发音部位与 [i] 相同但更紧张。ill 在辅音后读 [ij]，i 在辅音群和元音之间也读 [ij]。",
    rules: [
      { sp: "字母 i 在元音前", ex: [{ w: "miel", ipa: "[mjɛl]" }, { w: "nation", ipa: "[nasjɔ̃]" }, { w: "yeux", ipa: "[jø]" }, { w: "yaourt", ipa: "[jauʁt]" }] },
      { sp: "字母组合 il 在词末且在元音后", ex: [{ w: "ail", ipa: "[aj]" }, { w: "ciel", ipa: "[sjɛl]" }, { w: "travail", ipa: "[tʁavaj]" }] },
      { sp: "字母组合 ill 在元音后", ex: [{ w: "taille", ipa: "[taj]" }, { w: "mouiller", ipa: "[muje]" }] },
      { sp: "字母组合 ill 在辅音后读 [ij]", ex: [{ w: "famille", ipa: "[famij]" }, { w: "sillage", ipa: "[sijaʒ]" }] },
      { sp: "字母 i 在辅音群和元音之间读 [ij]", ex: [{ w: "prier", ipa: "[pʁije]" }, { w: "triable", ipa: "[tʁjabl]" }] }
    ] },
  { id: "hui", group: "sv", ipa: "[ɥ]", snd: true,
    pat: ["u"],
    title: "u 在元音前读 [ɥ]",
    desc: "发音部位与 [y] 相同，只是更短促、摩擦更强。ui 就是 [ɥ] + [i]：先撮嘴「鱼」，再滑到「衣」。",
    rules: [
      { sp: "字母 u 在元音前", ex: [{ w: "lui", ipa: "[lɥi]" }, { w: "nuage", ipa: "[nɥaʒ]" }] }
    ] },
  { id: "w", group: "sv", ipa: "[w]", snd: true,
    pat: ["ou","oi","oin"],
    title: "ou / oi / oin 读 [w] 系",
    desc: "发音部位与 [u] 相同。oi 永远读 [wa]（「哇」）；oin 读鼻化的 [wɛ̃]。",
    rules: [
      { sp: "字母组合 ou 在元音前", ex: [{ w: "oui", ipa: "[wi]" }, { w: "douane", ipa: "[dwan]" }] },
      { sp: "字母组合 oi 读 [wa]", ex: [{ w: "soi", ipa: "[swa]" }, { w: "oiseau", ipa: "[wazo]" }] },
      { sp: "字母组合 oin 读 [wɛ̃]", ex: [{ w: "point", ipa: "[pwɛ̃]" }, { w: "lointain", ipa: "[lwɛ̃tɛ̃]" }] }
    ] },

  /* ═══════════ 🥁 辅音（17）═══════════ */
  { id: "p", group: "con", ipa: "[p]", snd: true,
    pat: ["p","pp"],
    title: "p / pp 读 [p]",
    desc: "清辅音，不送气：法语 [p] 听起来介于英语 p 和 b 之间，纸巾不会有明显气流。",
    rules: [
      { sp: "字母 p, pp", ex: [{ w: "père", ipa: "[pɛʁ]" }, { w: "attaque", ipa: "[atak]" }] }
    ] },
  { id: "b", group: "con", ipa: "[b]", snd: true,
    pat: ["b","bb"],
    title: "b / bb 读 [b]",
    desc: "和 [p] 同部位，但声带振动。注意词尾的 b 通常不发音（aube [ob] 例外，读出来）。",
    rules: [
      { sp: "字母 b, bb", ex: [{ w: "beauté", ipa: "[bote]" }, { w: "aube", ipa: "[ob]" }, { w: "abbé", ipa: "[abe]" }] }
    ] },
  { id: "t", group: "con", ipa: "[t]", snd: true,
    pat: ["t","tt","th"],
    title: "t / tt / th 读 [t]",
    desc: "清辅音不送气。th 里的 h 完全不发音，不像英语要咬舌。",
    rules: [
      { sp: "字母 t, tt", ex: [{ w: "tête", ipa: "[tɛt]" }, { w: "attaque", ipa: "[atak]" }] }
    ] },
  { id: "d", group: "con", ipa: "[d]", snd: true,
    pat: ["d"],
    title: "d 读 [d]",
    desc: "和 [t] 同部位、声带振动。词尾 d 通常不发音（grand [ɡʁɑ̃]），联诵时才读 [t]。",
    rules: [
      { sp: "字母 d", ex: [{ w: "dos", ipa: "[do]" }, { w: "chaude", ipa: "[ʃod]" }] }
    ] },
  { id: "k", group: "con", ipa: "[k]", snd: true,
    pat: ["k","qu","q","c","ck"],
    title: "c / k / qu / q 读 [k]",
    desc: "c 是多面手：a / o / u 前读 [k]，e / i / y 前读 [s]。qu 里的 u 不发音。",
    rules: [
      { sp: "字母 c 在字母 a, o, u 之前", ex: [{ w: "casquette", ipa: "[kaskɛt]" }, { w: "cou", ipa: "[ku]" }, { w: "cube", ipa: "[kyb]" }] },
      { sp: "字母 c 在辅音字母前或在词末时", ex: [{ w: "acte", ipa: "[akt]" }, { w: "sac", ipa: "[sak]" }] },
      { sp: "字母组合 ch 在少数单词中", ex: [{ w: "technique", ipa: "[tɛknik]" }, { w: "archéologie", ipa: "[aʁkeɔlɔʒi]" }] },
      { sp: "字母 k", ex: [{ w: "kaki", ipa: "[kaki]" }] },
      { sp: "字母 q 在词末", ex: [{ w: "coq", ipa: "[kɔk]" }] },
      { sp: "字母组合 qu 在元音字母 e, i, y 前", ex: [{ w: "quel", ipa: "[kɛl]" }, { w: "casque", ipa: "[kask]" }] }
    ] },
  { id: "g", group: "con", ipa: "[ɡ]", snd: true,
    pat: ["g","gu"],
    title: "g / gu 读 [ɡ]",
    desc: "g 在 a / o / u 或辅音前读 [ɡ]；要拼出 [ɡ] + e / i / y 的音就加 u（u 不发音）：guerre。",
    rules: [
      { sp: "字母 g 在字母 a, o, u 前", ex: [{ w: "égal", ipa: "[egal]" }, { w: "goût", ipa: "[ɡu]" }, { w: "légume", ipa: "[leɡym]" }] },
      { sp: "字母 g 在辅音前", ex: [{ w: "glisser", ipa: "[ɡlise]" }, { w: "énigmatique", ipa: "[enigmatik]" }] },
      { sp: "字母组合 gu 在元音字母 e, i, y 前", ex: [{ w: "guerre", ipa: "[ɡɛʁ]" }, { w: "digue", ipa: "[diɡ]" }] }
    ] },
  { id: "f", group: "con", ipa: "[f]", snd: true,
    pat: ["f","ff","ph"],
    title: "f / ff / ph 读 [f]",
    desc: "来自希腊语的 ph 也读 [f]：photo、téléphone。词尾 f 通常发音（chef）。",
    rules: [
      { sp: "字母 f, ff", ex: [{ w: "faire", ipa: "[fɛʁ]" }, { w: "effet", ipa: "[efɛ]" }] },
      { sp: "字母组合 ph", ex: [{ w: "phare", ipa: "[faʁ]" }, { w: "Sisyphe", ipa: "[sizif]" }] }
    ] },
  { id: "v", group: "con", ipa: "[v]", snd: true,
    pat: ["v","w"],
    title: "v 读 [v]",
    desc: "和 [f] 同部位、声带振动。注意 w 在外来词里也常读 [v]（le wifi 读 [vifi]）。",
    rules: [
      { sp: "字母 v", ex: [{ w: "vive", ipa: "[viv]" }, { w: "vœux", ipa: "[vø]" }] }
    ] },
  { id: "s", group: "con", ipa: "[s]", snd: true,
    pat: ["s","ss","ç","c","sc","ti"],
    title: "s / ss / ç / c(e,i,y) 读 [s]",
    desc: "c 在 e / i / y 前变软读 [s]，ç 永远读 [s]。s 只要不夹在两个元音之间就读 [s]。",
    rules: [
      { sp: "字母 c 在字母 e, i, y 前", ex: [{ w: "cesser", ipa: "[sɛse]" }, { w: "ici", ipa: "[isi]" }, { w: "cycle", ipa: "[sikl]" }] },
      { sp: "字母 ç", ex: [{ w: "ça", ipa: "[sa]" }, { w: "leçon", ipa: "[ləsɔ̃]" }] },
      { sp: "字母 s（不在两个元音之间）, ss", ex: [{ w: "site", ipa: "[sit]" }, { w: "passe", ipa: "[pas]" }] },
      { sp: "字母组合 ti 遇到另外一个元音字母时读 [s]（在其他情况下）", ex: [{ w: "initiative", ipa: "[inisjativ]" }, { w: "partiel", ipa: "[parsjɛl]" }] },
      { sp: "字母 x 在少数情况下", ex: [{ w: "six", ipa: "[sis]" }, { w: "dix", ipa: "[dis]" }, { w: "soixante", ipa: "[swasɑ̃t]" }] }
    ] },
  { id: "z", group: "con", ipa: "[z]", snd: true,
    pat: ["z","s"],
    title: "两元音间的 s / 字母 z 读 [z]",
    desc: "s 夹在两个元音之间会「软化」成 [z]：maison 读 [mɛ.zɔ̃]。联诵时 s / x 也读 [z]（les amis [le.zami]）。",
    rules: [
      { sp: "字母 s 在两个元音之间", ex: [{ w: "rose", ipa: "[ʁoz]" }, { w: "isoler", ipa: "[izɔle]" }] },
      { sp: "字母 z", ex: [{ w: "zèle", ipa: "[zɛl]" }, { w: "nazi", ipa: "[nazi]" }] }
    ] },
  { id: "ch", group: "con", ipa: "[ʃ]", snd: true,
    pat: ["ch","sch"],
    title: "ch / sch 读 [ʃ]",
    desc: "像中文「诗」的声母，不是英语的 [tʃ]（别把 chat 读成「恰」）。",
    rules: [
      { sp: "字母组合 ch, sch", ex: [{ w: "cher", ipa: "[ʃɛʁ]" }, { w: "fiche", ipa: "[fiʃ]" }, { w: "schéma", ipa: "[ʃema]" }] }
    ] },
  { id: "j", group: "con", ipa: "[ʒ]", snd: true,
    pat: ["j","g"],
    title: "j / g(e,i,y) 读 [ʒ]",
    desc: "像中文「日」的声母但更柔和。g 在 e / i / y 前读 [ʒ]，在 a / o / u 前读 [ɡ]。",
    rules: [
      { sp: "字母 g 在字母 e, i, y 前", ex: [{ w: "âge", ipa: "[ɑʒ]" }, { w: "gèle", ipa: "[ʒɛl]" }, { w: "argile", ipa: "[aʁʒil]" }, { w: "gymnase", ipa: "[ʒimnaz]" }] },
      { sp: "字母 j", ex: [{ w: "jour", ipa: "[ʒuʁ]" }, { w: "jeune", ipa: "[ʒœn]" }, { w: "déjà", ipa: "[deʒa]" }] }
    ] },
  { id: "m", group: "con", ipa: "[m]", snd: true,
    pat: ["m","mm"],
    title: "m / mm 读 [m]",
    desc: "双唇闭拢、气流从鼻子出。mm 双写不变音。",
    rules: [
      { sp: "字母 m, mm", ex: [{ w: "masse", ipa: "[mas]" }, { w: "immaculé", ipa: "[imakyle]" }] }
    ] },
  { id: "n", group: "con", ipa: "[n]", snd: true,
    pat: ["n","nn","mn"],
    title: "n / nn 读 [n]",
    desc: "舌尖抵上齿龈。mn 组合也读 [n]（autumn 是英语词，法语如 condamner [kɔ̃dane]）。",
    rules: [
      { sp: "字母 n, nn", ex: [{ w: "nul", ipa: "[nyl]" }, { w: "année", ipa: "[ane]" }] }
    ] },
  { id: "gn", group: "con", ipa: "[ɲ]", snd: true,
    pat: ["gn"],
    title: "gn 读 [ɲ]",
    desc: "一个音 [ɲ]（像「泥」的声母），不是 g + n 两个音。Espagne、montagne 都靠它。",
    rules: [
      { sp: "字母组合 gn", ex: [{ w: "ligne", ipa: "[liɲ]" }, { w: "signal", ipa: "[siɲal]" }] }
    ] },
  { id: "l", group: "con", ipa: "[l]", snd: true,
    pat: ["l","ll"],
    title: "l / ll 读 [l]",
    desc: "舌尖抵上齿龈、气流从舌两侧出。ll 大多数时候不变音；元音后的 ill 例外，读 [j]。",
    rules: [
      { sp: "字母 l, ll", ex: [{ w: "les", ipa: "[le]" }, { w: "elle", ipa: "[ɛl]" }, { w: "animal", ipa: "[animal]" }] }
    ] },
  { id: "r", group: "con", ipa: "[ʁ]", snd: true,
    pat: ["r","rr"],
    title: "r / rr 读 [ʁ]",
    desc: "小舌音：喉咙深处（小舌）摩擦，像轻轻漱口。词尾的 r 发音（Paris、merci 都能听到）。",
    rules: [
      { sp: "字母 r, rr", ex: [{ w: "rire", ipa: "[ʁiʁ]" }, { w: "hurler", ipa: "[yʁle]" }, { w: "terrible", ipa: "[tɛʁibl]" }] }
    ] },

  /* ═══════════ 📌 重要补充 ═══════════ */
  { id: "x", group: "sup", ipa: "[ks] / [ɡz] / [s] / 无声", snd: false,
    pat: ["x"],
    title: "字母 x 的五种读法",
    desc: "x 是个变色龙：一般 [ks]，ex- 后接元音读 [ɡz]，数字里读 [s]，词尾常常不发音。",
    rules: [
      { sp: "在一般情况下读 [ks]", ex: [{ w: "taxi", ipa: "[taksi]" }, { w: "lynx", ipa: "[lɛ̃ks]" }, { w: "xénon", ipa: "[ksenɔ̃]" }, { w: "texte", ipa: "[tɛkst]" }] },
      { sp: "在词首后接字母 a 时读 [ɡz]", ex: [{ w: "Xavier", ipa: "[ɡzavje]" }, { w: "xanthe", ipa: "[ɡzɑ̃t]" }] },
      { sp: "在词首作为组合 ex- 且后接元音时读 [ɡz]", ex: [{ w: "exercice", ipa: "[ɛɡzɛʁsis]" }, { w: "examen", ipa: "[ɛɡzamɛ̃]" }] },
      { sp: "少数情况下读 [s]", ex: [{ w: "six", ipa: "[sis]" }, { w: "dix", ipa: "[dis]" }] },
      { sp: "在词末时多数情况下不发音", ex: [{ w: "paix", ipa: "[pɛ]" }, { w: "vieux", ipa: "[vjø]" }] }
    ] },
  { id: "silent_final", group: "sup", ipa: "（词尾通常不发音）", snd: false,
    pat: ["s","t","d","x","z","p","g"],
    title: "词尾辅音大多不发音",
    desc: "词尾的 s、t、d、x、z、p、g 通常一个都不读：Paris 读 [pa.ʁi]、chat 读 [ʃa]。这是听力最难也最省力的规则（r / l / f / c / q 例外，要发音）。",
    rules: [
      { sp: "词尾辅音 s, t, d, x, z, p, g", ex: [{ w: "Paris", ipa: "[paʁi]" }, { w: "chat", ipa: "[ʃa]" }, { w: "beaucoup", ipa: "[boku]" }] }
    ] }
];

/* 不规则 / 特殊词：按常规规则猜不出读音，必须单独记 */
const PRON_SPECIAL = [
  { w: "femme", ipa: "[fam]", note: "明明是 -e-，却读成 [a]：fa-m（像「法姆」）。法语最出名的不规则词之一。" },
  { w: "monsieur", ipa: "[mə.sjø]", note: "中间的 -ieu 缩成一个 [ø]，整个词只有两个音：me-sieu。" },
  { w: "et", ipa: "[e]", note: "⚠️ 陷阱！et 读 [e]（闭口），不是 [ɛ]。和 est（est 读 [ɛ]）刚好相反。" },
  { w: "est", ipa: "[ɛ]", note: "est（est / 是）读开口的 [ɛ]，和 et（和）读 [e] 不同，靠耳朵分辨。" },
  { w: "six", ipa: "[sis] / [si]", note: "单独数数时读 [sis]；后面跟辅音开头的词时常只读 [si]（six livres）。" },
  { w: "dix", ipa: "[dis] / [di]", note: "和 six 一样：单独读 [dis]，后面跟辅音时读 [di]。" },
  { w: "huit", ipa: "[ɥit]", note: "h 不发音但它是「嘘音 h」：不能和前面的词连读（les huit 不连读）。" },
  { w: "oignon", ipa: "[ɔ.ɲɔ̃]", note: "gn 前面多了个 i，但仍然读 [ɲ]：o-gnon，不是 [wa.ɲɔ̃]。" },
  { w: "paix", ipa: "[pɛ]", note: "ai 读 [ɛ]，词尾 x 不发音。" },
  { w: "oeuf", ipa: "[œf]", note: "单数读 [œf]（f 发音），复数 œufs 读 [ø]（f 也不发音了！）。" },
  { w: "boeuf", ipa: "[bœf]", note: "同上：bœuf 读 [bœf]，bœufs 读 [bø]。" },
  { w: "second", ipa: "[sə.ɡɔ̃]", note: "c 在这里读 [g] 而不是 [s]，很少见：se-cond。" },
  { w: "aujourd'hui", ipa: "[o.ʒuʁ.dɥi]", note: "一个词里塞了 au、ou、ui 三个组合，读成四拍：au-jour-d'hui。" },
  { w: "beaucoup", ipa: "[bo.ku]", note: "au 读 [o]、ou 读 [u]，词尾 p 不发音——「很多」只要两个音。" },
  { w: "Monsieur", ipa: "[mə.sjø]", note: "（重复提醒）这是 A1 最早遇到、也最容易读错的词，务必单独练。" }
];

/* =========================================================
   🔊 音标示范音
   每张卡点 🔊 播放权威音标本音 assets/audio/ipa/ipa-{id}.mp3
   （源自维基百科 IPA 音标表配套音频，语音学家录制，CC 授权）。
   PRON_FALLBACK 是音频缺失 / 加载失败时的 TTS 兜底示范词；
   PRON_NOSOUND 列出的卡没有音标本音（如「词尾不发音」），不显示喇叭。
   ========================================================= */
const PRON_FALLBACK = {
  a: "a", e: "é", eps: "è", i: "i", y: "u", u: "ou",
  o: "eau", o_ouv: "o", schwa: "le", eu_f: "eu", eu_o: "seur",
  an: "an", on: "on", in: "in", un: "un",
  yod: "i", hui: "u", w: "ou",
  p: "pe", b: "be", t: "te", d: "de", k: "que", g: "gue",
  f: "fe", v: "ve", s: "se", z: "ze", ch: "che", j: "je",
  m: "me", n: "ne", gn: "gne", l: "le", r: "re"
};
const PRON_NOSOUND = { x: true, silent_final: true };

/* =========================================================
   🎯 发音小练习：看单词 → 选正确音标（每张卡至少一题，全 38 卡覆盖）
   ========================================================= */
const PRON_QUIZ = [
  { w: "papa",      ipa: "[papa]",      rule: "a",            dis: ["[pama]", "[paba]", "[pata]"] },
  { w: "été",       ipa: "[ete]",       rule: "e",            dis: ["[ɛte]", "[ate]", "[øte]"] },
  { w: "mère",      ipa: "[mɛʁ]",       rule: "eps",          dis: ["[meʁ]", "[məʁ]", "[me]"] },
  { w: "ici",       ipa: "[isi]",       rule: "i",            dis: ["[iʃi]", "[izi]", "[iji]"] },
  { w: "tu",        ipa: "[ty]",        rule: "y",            dis: ["[tu]", "[tə]", "[tɛ]"] },
  { w: "nous",      ipa: "[nu]",        rule: "u",            dis: ["[no]", "[nɔ]", "[ny]"] },
  { w: "beau",      ipa: "[bo]",        rule: "o",            dis: ["[bɔ]", "[bu]", "[bə]"] },
  { w: "comme",     ipa: "[kɔm]",       rule: "o_ouv",        dis: ["[kom]", "[kɔn]", "[kum]"] },
  { w: "le",        ipa: "[lə]",        rule: "schwa",        dis: ["[le]", "[lø]", "[li]"] },
  { w: "deux",      ipa: "[dø]",        rule: "eu_f",         dis: ["[dœ]", "[də]", "[do]"] },
  { w: "sœur",      ipa: "[sœʁ]",       rule: "eu_o",         dis: ["[søʁ]", "[səʁ]", "[sɔʁ]"] },
  { w: "maman",     ipa: "[mamɑ̃]",     rule: "an",           dis: ["[maman]", "[mamɛ̃]", "[mamɔ̃]"] },
  { w: "bombe",     ipa: "[bɔ̃b]",      rule: "on",           dis: ["[bɔnb]", "[bɑ̃b]", "[bɔ̃p]"] },
  { w: "pain",      ipa: "[pɛ̃]",       rule: "in",           dis: ["[pɛn]", "[pœ̃]", "[pɛ]"] },
  { w: "lundi",     ipa: "[lœ̃di]",     rule: "un",           dis: ["[lɔ̃di]", "[lɛ̃di]", "[lœdi]"] },
  { w: "yeux",      ipa: "[jø]",        rule: "yod",          dis: ["[jo]", "[ʒø]", "[jɔ]"] },
  { w: "lui",       ipa: "[lɥi]",       rule: "hui",          dis: ["[lwi]", "[li]", "[lyi]"] },
  { w: "trois",     ipa: "[tʁwa]",      rule: "w",            dis: ["[tʁwɛ]", "[tʁɔi]", "[tʁa]"] },
  { w: "père",      ipa: "[pɛʁ]",       rule: "p",            dis: ["[bɛʁ]", "[fɛʁ]", "[pɛr]"] },
  { w: "aube",      ipa: "[ob]",        rule: "b",            dis: ["[ɔp]", "[of]", "[ɔv]"] },
  { w: "tête",      ipa: "[tɛt]",       rule: "t",            dis: ["[tɛd]", "[dɛt]", "[sɛt]"] },
  { w: "dos",       ipa: "[do]",        rule: "d",            dis: ["[to]", "[dɔ]", "[zo]"] },
  { w: "café",      ipa: "[kafe]",      rule: "k",            dis: ["[ka.fɛ]", "[ʃafe]", "[ɡafe]"] },
  { w: "gare",      ipa: "[ɡaʁ]",       rule: "g",            dis: ["[ʒaʁ]", "[ɡɑʁ]", "[zaʁ]"] },
  { w: "faire",     ipa: "[fɛʁ]",       rule: "f",            dis: ["[vɛʁ]", "[faʁ]", "[fɛl]"] },
  { w: "vive",      ipa: "[viv]",       rule: "v",            dis: ["[vif]", "[wiv]", "[vive]"] },
  { w: "site",      ipa: "[sit]",       rule: "s",            dis: ["[zit]", "[ʃit]", "[siz]"] },
  { w: "rose",      ipa: "[ʁoz]",       rule: "z",            dis: ["[ʁos]", "[ʁɔz]", "[ʁɔs]"] },
  { w: "chat",      ipa: "[ʃa]",        rule: "ch",           dis: ["[tʃa]", "[sa]", "[ka]"] },
  { w: "jour",      ipa: "[ʒuʁ]",       rule: "j",            dis: ["[dʒuʁ]", "[zuʁ]", "[ʒɔʁ]"] },
  { w: "masse",     ipa: "[mas]",       rule: "m",            dis: ["[maz]", "[nas]", "[maʃ]"] },
  { w: "nul",       ipa: "[nyl]",       rule: "n",            dis: ["[myl]", "[nyʁ]", "[nœl]"] },
  { w: "montagne",  ipa: "[mɔ̃.taɲ]",   rule: "gn",           dis: ["[mɔ̃.tan]", "[mɔ̃.taɡ]", "[mɔ̃.tajn]"] },
  { w: "lire",      ipa: "[liʁ]",       rule: "l",            dis: ["[li]", "[nil]", "[liʒ]"] },
  { w: "Paris",     ipa: "[pa.ʁi]",     rule: "r",            dis: ["[pa.ri]", "[pa.li]", "[pa.ɣi]"] },
  { w: "taxi",      ipa: "[taksi]",     rule: "x",            dis: ["[taɡzi]", "[tasi]", "[taks]"] },
  { w: "examen",    ipa: "[ɛɡzamɛ̃]",   rule: "x",            dis: ["[ɛksamɛ̃]", "[ɛzamɛ̃]", "[ɛɡzamɛn]"] },
  { w: "tard",      ipa: "[taʁ]",       rule: "silent_final", dis: ["[taʁd]", "[taʁt]", "[taʁs]"] }
];

if (typeof window !== "undefined"){
  window.__PRON_GROUPS = PRON_GROUPS;
  window.__PRON_RULES = PRON_RULES;
  window.__PRON_SPECIAL = PRON_SPECIAL;
  window.__PRON_FALLBACK = PRON_FALLBACK;
  window.__PRON_NOSOUND = PRON_NOSOUND;
  window.__PRON_QUIZ = PRON_QUIZ;
}
