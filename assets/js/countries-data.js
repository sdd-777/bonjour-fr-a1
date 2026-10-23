/* ============================================================
   法语 A1 · 国家与国籍数据（扩充版）
   grp : fem 阴性 / mas 阳性 / pl 复数 / ile 小岛·城邦（用 à） / spec 特殊（以 e 结尾却阳性）
   num : sg 单数 / pl 复数
   prep: 表示「去 / 在某国」的介词 —— en（阴性、元音开头的阳性）/ au（阳性）/ aux（复数）/ à（小岛城邦）
   parts: 音标分段 [{ t: "字母组合", p: "[ipa]" }]，p 为空串 = 不发音
   国旗：assets/flags/{iso}.svg
   音频：assets/audio/words/cty-{iso}.mp3 / cty-{iso}m.mp3 / cty-{iso}f.mp3
   ============================================================ */

const COUNTRY_GROUPS = [
  { id: "fem", icon: "🌸", label: "阴性国家", prep: "en",
    tip: "大多数以不发音的 -e 结尾的国家是阴性：<b>la Chine、la France</b>。冠词用 la（元音开头缩合成 l'）。「去中国」要说 <b>en Chine</b>，不是 au Chine。" },
  { id: "mas", icon: "🌲", label: "阳性国家", prep: "au",
    tip: "不以 -e 结尾的大多是阳性：<b>le Japon、le Canada</b>。「去日本」说 <b>au Japon</b>（à + le 缩合成 au）。" },
  { id: "pl", icon: "🏛️", label: "复数国家", prep: "aux",
    tip: "少数国家是复数：<b>les États-Unis、les Pays-Bas</b>。「去美国」说 <b>aux États-Unis</b>（à + les 缩合成 aux），后面的形容词也要用复数。" },
  { id: "ile", icon: "🏝️", label: "小岛与城邦（用 à）", prep: "à",
    tip: "面积小的岛国、城邦、以及部分海外属地，习惯上<b>不用冠词</b>，直接用 <b>à</b>：<b>à Cuba、à Madagascar、à Singapour</b>。" },
  { id: "spec", icon: "⚠️", label: "特殊：以 e 结尾却是阳性", prep: "au",
    tip: "规则总有例外！这几个国家明明以 -e 结尾，却是<b>阳性</b>：<b>le Mexique、le Cambodge、le Mozambique、le Zimbabwe、le Belize</b>。要单独记住。" }
];

const COUNTRIES = [
  /* ========== 阴性国家（en） ========== */
  { iso: "cn", zh: "中国", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Chine", parts: [{t:"la",p:"[la]"},{t:"Chi",p:"[ʃi]"},{t:"ne",p:"[n]"}] },
    nat: { m: { fr: "chinois", zh: "中国的；中国人（男）", parts: [{t:"chi",p:"[ʃi]"},{t:"nois",p:"[nwa]"}] },
           f: { fr: "chinoise", zh: "中国的；中国人（女）", parts: [{t:"chi",p:"[ʃi]"},{t:"noi",p:"[nwa]"},{t:"se",p:"[z]"}] } },
    fact: "法语里中国是阴性 la Chine，因为末尾那个 e 不发音却决定了性别——所以「在中国」要说 en Chine。" },

  { iso: "fr", zh: "法国", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la France", parts: [{t:"la",p:"[la]"},{t:"Fran",p:"[fʁɑ̃]"},{t:"ce",p:"[s]"}] },
    nat: { m: { fr: "français", zh: "法国的；法国人（男）", parts: [{t:"fran",p:"[fʁɑ̃]"},{t:"çais",p:"[sɛ]"}] },
           f: { fr: "française", zh: "法国的；法国人（女）", parts: [{t:"fran",p:"[fʁɑ̃]"},{t:"çai",p:"[sɛ]"},{t:"se",p:"[z]"}] } },
    fact: "高卢公鸡是法国的象征，法国人自己也常被叫作「高卢人」。français 里的 ç 是「软 c」，读 [s] 而不是 [k]。" },

  { iso: "de", zh: "德国", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Allemagne", parts: [{t:"l'",p:"[l]"},{t:"Al",p:"[al]"},{t:"ma",p:"[ma]"},{t:"gne",p:"[ɲ]"}] },
    nat: { m: { fr: "allemand", zh: "德国的；德国人（男）", parts: [{t:"al",p:"[al]"},{t:"le",p:"[lə]"},{t:"mand",p:"[mɑ̃]"}] },
           f: { fr: "allemande", zh: "德国的；德国人（女）", parts: [{t:"al",p:"[al]"},{t:"le",p:"[lə]"},{t:"mande",p:"[mɑ̃d]"}] } },
    fact: "法语 Allemagne 来自古代日耳曼部落「阿勒曼尼人」的名字；德语里德国却是 Deutschland，完全不同。" },

  { iso: "it", zh: "意大利", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Italie", parts: [{t:"l'",p:"[l]"},{t:"I",p:"[i]"},{t:"ta",p:"[ta]"},{t:"lie",p:"[li]"}] },
    nat: { m: { fr: "italien", zh: "意大利的；意大利人（男）", parts: [{t:"i",p:"[i]"},{t:"ta",p:"[ta]"},{t:"lien",p:"[ljɛ̃]"}] },
           f: { fr: "italienne", zh: "意大利的；意大利人（女）", parts: [{t:"i",p:"[i]"},{t:"ta",p:"[ta]"},{t:"lienne",p:"[ljɛn]"}] } },
    fact: "-ien / -ienne 是法语最常见的「国籍后缀」之一：italien、canadien、brésilien…… 记住一对就记住一片。" },

  { iso: "es", zh: "西班牙", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Espagne", parts: [{t:"l'",p:"[l]"},{t:"Es",p:"[ɛs]"},{t:"pa",p:"[pa]"},{t:"gne",p:"[ɲ]"}] },
    nat: { m: { fr: "espagnol", zh: "西班牙的；西班牙人（男）", parts: [{t:"es",p:"[ɛs]"},{t:"pa",p:"[pa]"},{t:"gnol",p:"[ɲɔl]"}] },
           f: { fr: "espagnole", zh: "西班牙的；西班牙人（女）", parts: [{t:"es",p:"[ɛs]"},{t:"pa",p:"[pa]"},{t:"gnole",p:"[ɲɔl]"}] } },
    fact: "gn 在法语里是一个音 [ɲ]（像中文的「泥」），Espagne 和 espagnol 都靠它发音。" },

  { iso: "kr", zh: "韩国", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Corée du Sud", parts: [{t:"la",p:"[la]"},{t:"Co",p:"[kɔ]"},{t:"ré",p:"[ʁe]"},{t:"du",p:"[dy]"},{t:"Sud",p:"[syd]"}] },
    nat: { m: { fr: "coréen", zh: "韩国的；韩国人（男）", parts: [{t:"Co",p:"[kɔ]"},{t:"ré",p:"[ʁe]"},{t:"en",p:"[ɛ̃]"}] },
           f: { fr: "coréenne", zh: "韩国的；韩国人（女）", parts: [{t:"Co",p:"[kɔ]"},{t:"ré",p:"[ʁe]"},{t:"enne",p:"[ɛn]"}] } },
    fact: "法语用 Corée du Sud（南边的朝鲜）和 Corée du Nord 来区分南北，du 是 de + le 的缩合。" },

  { iso: "ru", zh: "俄罗斯", grp: "fem", g: "f", num: "sg", prep: "en", same: true,
    name: { fr: "la Russie", parts: [{t:"la",p:"[la]"},{t:"Ru",p:"[ʁy]"},{t:"ssi",p:"[si]"},{t:"e",p:""}] },
    nat: { m: { fr: "russe", zh: "俄罗斯的；俄罗斯人（男）", parts: [{t:"ru",p:"[ʁy]"},{t:"sse",p:"[s]"}] },
           f: { fr: "russe", zh: "俄罗斯的；俄罗斯人（女）", parts: [{t:"ru",p:"[ʁy]"},{t:"sse",p:"[s]"}] } },
    fact: "russe 是「阴阳同形」：男生女生都写 russe，只变冠词（il est russe / elle est russe）。法语里 -e 结尾的国籍词常常男女一样。" },

  { iso: "ch", zh: "瑞士", grp: "fem", g: "f", num: "sg", prep: "en", same: true,
    name: { fr: "la Suisse", parts: [{t:"la",p:"[la]"},{t:"Sui",p:"[sɥi]"},{t:"sse",p:"[s]"}] },
    nat: { m: { fr: "suisse", zh: "瑞士的；瑞士人（男）", parts: [{t:"sui",p:"[sɥi]"},{t:"sse",p:"[s]"}] },
           f: { fr: "suisse", zh: "瑞士的；瑞士人（女）", parts: [{t:"sui",p:"[sɥi]"},{t:"sse",p:"[s]"}] } },
    fact: "瑞士有四种官方语言（德语、法语、意大利语、罗曼什语）——法语区就叫「瑞士法语」。" },

  { iso: "be", zh: "比利时", grp: "fem", g: "f", num: "sg", prep: "en", same: true,
    name: { fr: "la Belgique", parts: [{t:"la",p:"[la]"},{t:"Bel",p:"[bɛl]"},{t:"gi",p:"[ʒi]"},{t:"que",p:"[k]"}] },
    nat: { m: { fr: "belge", zh: "比利时的；比利时人（男）", parts: [{t:"bel",p:"[bɛl]"},{t:"ge",p:"[ʒ]"}] },
           f: { fr: "belge", zh: "比利时的；比利时人（女）", parts: [{t:"bel",p:"[bɛl]"},{t:"ge",p:"[ʒ]"}] } },
    fact: "belge 也是阴阳同形。注意 Belgique 里的 qu 读 [k]，后面的 ue 不发音——法语词尾的 -que 通常只读 [k]。" },

  { iso: "se", zh: "瑞典", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Suède", parts: [{t:"la",p:"[la]"},{t:"Suè",p:"[sɥɛ]"},{t:"de",p:"[d]"}] },
    nat: { m: { fr: "suédois", zh: "瑞典的；瑞典人（男）", parts: [{t:"sué",p:"[sɥe]"},{t:"dois",p:"[dwa]"}] },
           f: { fr: "suédoise", zh: "瑞典的；瑞典人（女）", parts: [{t:"sué",p:"[sɥe]"},{t:"doi",p:"[dwa]"},{t:"se",p:"[z]"}] } },
    fact: "诺贝尔奖大部分在瑞典斯德哥尔摩颁发，只有和平奖在邻国挪威颁发——所以这两个国家常被一起提到。" },

  { iso: "no", zh: "挪威", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Norvège", parts: [{t:"la",p:"[la]"},{t:"Nor",p:"[nɔʁ]"},{t:"vège",p:"[vɛʒ]"}] },
    nat: { m: { fr: "norvégien", zh: "挪威的；挪威人（男）", parts: [{t:"nor",p:"[nɔʁ]"},{t:"vé",p:"[ve]"},{t:"gien",p:"[ʒjɛ̃]"}] },
           f: { fr: "norvégienne", zh: "挪威的；挪威人（女）", parts: [{t:"nor",p:"[nɔʁ]"},{t:"vé",p:"[ve]"},{t:"gienne",p:"[ʒjɛn]"}] } },
    fact: "è 永远读 [ɛ]（开口的「哎」），所以 Norvège 里的 vège 读 [vɛʒ]。看到 è 就不用猜了。" },

  { iso: "gr", zh: "希腊", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Grèce", parts: [{t:"la",p:"[la]"},{t:"Grè",p:"[ɡʁɛ]"},{t:"ce",p:"[s]"}] },
    nat: { m: { fr: "grec", zh: "希腊的；希腊人（男）", parts: [{t:"gre",p:"[ɡʁɛ]"},{t:"c",p:"[k]"}] },
           f: { fr: "grecque", zh: "希腊的；希腊人（女）", parts: [{t:"gre",p:"[ɡʁɛ]"},{t:"cque",p:"[k]"}] } },
    fact: "grec 变阴性时很特别：词尾 -c 变成 -cque（grec → grecque），这是法语里少见的变化，要单独记。" },

  { iso: "tr", zh: "土耳其", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Turquie", parts: [{t:"la",p:"[la]"},{t:"Tur",p:"[tyʁ]"},{t:"quie",p:"[ki]"}] },
    nat: { m: { fr: "turc", zh: "土耳其的；土耳其人（男）", parts: [{t:"tur",p:"[tyʁ]"},{t:"c",p:"[k]"}] },
           f: { fr: "turque", zh: "土耳其的；土耳其人（女）", parts: [{t:"tur",p:"[tyʁ]"},{t:"que",p:"[k]"}] } },
    fact: "Turquie 里的 qu 读 [k]，后面 u 不发音——法语的 qu 几乎永远只读 [k]。" },

  { iso: "eg", zh: "埃及", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Égypte", parts: [{t:"l'",p:"[l]"},{t:"É",p:"[e]"},{t:"gy",p:"[ʒi]"},{t:"pte",p:"[pt]"}] },
    nat: { m: { fr: "égyptien", zh: "埃及的；埃及人（男）", parts: [{t:"é",p:"[e]"},{t:"gy",p:"[ʒi]"},{t:"ptien",p:"[sjɛ̃]"}] },
           f: { fr: "égyptienne", zh: "埃及的；埃及人（女）", parts: [{t:"é",p:"[e]"},{t:"gy",p:"[ʒi]"},{t:"ptienne",p:"[sjɛn]"}] } },
    fact: "Égypte 里的 t 要发音（不像英语 Egypt 的 pt 那样）：é-gyp-te，两个辅音都读出来。" },

  { iso: "ar", zh: "阿根廷", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Argentine", parts: [{t:"l'",p:"[l]"},{t:"Ar",p:"[aʁ]"},{t:"gen",p:"[ʒɑ̃]"},{t:"tine",p:"[tin]"}] },
    nat: { m: { fr: "argentin", zh: "阿根廷的；阿根廷人（男）", parts: [{t:"ar",p:"[aʁ]"},{t:"gen",p:"[ʒɑ̃]"},{t:"tin",p:"[tɛ̃]"}] },
           f: { fr: "argentine", zh: "阿根廷的；阿根廷人（女）", parts: [{t:"ar",p:"[aʁ]"},{t:"gen",p:"[ʒɑ̃]"},{t:"tine",p:"[tin]"}] } },
    fact: "国名 Argentine 和形容词 argentine（银白色的）拼写完全一样，只是首字母大写不同——阿根廷的名字本来就来自「白银」。" },

  { iso: "in", zh: "印度", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "l'Inde", parts: [{t:"l'",p:"[l]"},{t:"In",p:"[ɛ̃]"},{t:"de",p:"[d]"}] },
    nat: { m: { fr: "indien", zh: "印度的；印度人（男）", parts: [{t:"in",p:"[ɛ̃]"},{t:"dien",p:"[djɛ̃]"}] },
           f: { fr: "indienne", zh: "印度的；印度人（女）", parts: [{t:"in",p:"[ɛ̃]"},{t:"dienne",p:"[djɛn]"}] } },
    fact: "Inde 只有四个字母，但 in 要读鼻音 [ɛ̃]——in 后面跟辅音或词尾时就是鼻音，这是法语最有特色的发音之一。" },

  { iso: "th", zh: "泰国", grp: "fem", g: "f", num: "sg", prep: "en",
    name: { fr: "la Thaïlande", parts: [{t:"la",p:"[la]"},{t:"Tha",p:"[ta]"},{t:"ï",p:"[i]"},{t:"lande",p:"[lɑ̃d]"}] },
    nat: { m: { fr: "thaïlandais", zh: "泰国的；泰国人（男）", parts: [{t:"tha",p:"[ta]"},{t:"ï",p:"[i]"},{t:"lan",p:"[lɑ̃]"},{t:"dais",p:"[dɛ]"}] },
           f: { fr: "thaïlandaise", zh: "泰国的；泰国人（女）", parts: [{t:"tha",p:"[ta]"},{t:"ï",p:"[i]"},{t:"lan",p:"[lɑ̃]"},{t:"dai",p:"[dɛ]"},{t:"se",p:"[z]"}] } },
    fact: "Thaï 上的两点叫「分音符」（tréma），它提醒你：这里的 a 和 i 要分开读两个音，不能合成一个。" },

  /* ========== 复数国家（aux） ========== */
  { iso: "us", zh: "美国", grp: "pl", g: "m", num: "pl", prep: "aux",
    name: { fr: "les États-Unis", parts: [{t:"les",p:"[le]"},{t:"É",p:"[e]"},{t:"tats",p:"[ta]"},{t:"U",p:"[y]"},{t:"nis",p:"[ni]"}] },
    nat: { m: { fr: "américain", zh: "美国的；美国人（男）", parts: [{t:"a",p:"[a]"},{t:"mé",p:"[me]"},{t:"ri",p:"[ʁi]"},{t:"cain",p:"[kɛ̃]"}] },
           f: { fr: "américaine", zh: "美国的；美国人（女）", parts: [{t:"a",p:"[a]"},{t:"mé",p:"[me]"},{t:"ri",p:"[ʁi]"},{t:"cai",p:"[kɛn]"}] } },
    fact: "États-Unis 是复数，所以「在美国」要说 aux États-Unis（à + les = aux）。注意 États 的 s 和 Unis 的 s 都不发音。" },

  { iso: "nl", zh: "荷兰", grp: "pl", g: "m", num: "pl", prep: "aux",
    name: { fr: "les Pays-Bas", parts: [{t:"les",p:"[le]"},{t:"Pays",p:"[pɛ.i]"},{t:"Bas",p:"[bɑ]"}] },
    nat: { m: { fr: "néerlandais", zh: "荷兰的；荷兰人（男）", parts: [{t:"né",p:"[ne]"},{t:"er",p:"[ɛʁ]"},{t:"lan",p:"[lɑ̃]"},{t:"dais",p:"[dɛ]"}] },
           f: { fr: "néerlandaise", zh: "荷兰的；荷兰人（女）", parts: [{t:"né",p:"[ne]"},{t:"er",p:"[ɛʁ]"},{t:"lan",p:"[lɑ̃]"},{t:"dai",p:"[dɛ]"},{t:"se",p:"[z]"}] } },
    fact: "荷兰人自己叫 Nederland，法语却叫 Pays-Bas「低洼的国家」——因为这个国家有大片土地低于海平面。" },

  { iso: "ph", zh: "菲律宾", grp: "pl", g: "f", num: "pl", prep: "aux",
    name: { fr: "les Philippines", parts: [{t:"les",p:"[le]"},{t:"Phi",p:"[fi]"},{t:"li",p:"[li]"},{t:"ppines",p:"[pin]"}] },
    nat: { m: { fr: "philippin", zh: "菲律宾的；菲律宾人（男）", parts: [{t:"phi",p:"[fi]"},{t:"li",p:"[li]"},{t:"ppin",p:"[pɛ̃]"}] },
           f: { fr: "philippine", zh: "菲律宾的；菲律宾人（女）", parts: [{t:"phi",p:"[fi]"},{t:"li",p:"[li]"},{t:"ppine",p:"[pin]"}] } },
    fact: "菲律宾的名字来自 16 世纪西班牙国王腓力二世（Felipe）——所以是复数：les Philippines。" },

  /* ========== 阳性国家（au） ========== */
  { iso: "jp", zh: "日本", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Japon", parts: [{t:"le",p:"[lə]"},{t:"Ja",p:"[ʒa]"},{t:"pon",p:"[pɔ̃]"}] },
    nat: { m: { fr: "japonais", zh: "日本的；日本人（男）", parts: [{t:"ja",p:"[ʒa]"},{t:"po",p:"[pɔ]"},{t:"nais",p:"[nɛ]"}] },
           f: { fr: "japonaise", zh: "日本的；日本人（女）", parts: [{t:"ja",p:"[ʒa]"},{t:"po",p:"[pɔ]"},{t:"nai",p:"[nɛ]"},{t:"se",p:"[z]"}] } },
    fact: "Japon 的 on 是一个鼻音 [ɔ̃]，不要读成「on」两个音；词尾的 n 不单独发音，只把前面的元音变鼻音。" },

  { iso: "ca", zh: "加拿大", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Canada", parts: [{t:"le",p:"[lə]"},{t:"Ca",p:"[ka]"},{t:"na",p:"[na]"},{t:"da",p:"[da]"}] },
    nat: { m: { fr: "canadien", zh: "加拿大的；加拿大人（男）", parts: [{t:"ca",p:"[ka]"},{t:"na",p:"[na]"},{t:"dien",p:"[djɛ̃]"}] },
           f: { fr: "canadienne", zh: "加拿大的；加拿大人（女）", parts: [{t:"ca",p:"[ka]"},{t:"na",p:"[na]"},{t:"dienne",p:"[djɛn]"}] } },
    fact: "加拿大的魁北克省说法语，那里的法语和巴黎法语口音不太一样，但互相都能听懂。" },

  { iso: "br", zh: "巴西", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Brésil", parts: [{t:"le",p:"[lə]"},{t:"Bré",p:"[bʁe]"},{t:"sil",p:"[zil]"}] },
    nat: { m: { fr: "brésilien", zh: "巴西的；巴西人（男）", parts: [{t:"bré",p:"[bʁe]"},{t:"si",p:"[zi]"},{t:"lien",p:"[ljɛ̃]"}] },
           f: { fr: "brésilienne", zh: "巴西的；巴西人（女）", parts: [{t:"bré",p:"[bʁe]"},{t:"si",p:"[zi]"},{t:"lienne",p:"[ljɛn]"}] } },
    fact: "Brésil 里的 s 夹在两个元音中间，读 [z]（浊音）——法语里两个元音之间的 s 常常「软化」成 z。" },

  { iso: "pt", zh: "葡萄牙", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Portugal", parts: [{t:"le",p:"[lə]"},{t:"Por",p:"[pɔʁ]"},{t:"tu",p:"[ty]"},{t:"gal",p:"[ɡal]"}] },
    nat: { m: { fr: "portugais", zh: "葡萄牙的；葡萄牙人（男）", parts: [{t:"por",p:"[pɔʁ]"},{t:"tu",p:"[ty]"},{t:"gais",p:"[ɡɛ]"}] },
           f: { fr: "portugaise", zh: "葡萄牙的；葡萄牙人（女）", parts: [{t:"por",p:"[pɔʁ]"},{t:"tu",p:"[ty]"},{t:"gai",p:"[ɡɛ]"},{t:"se",p:"[z]"}] } },
    fact: "葡萄牙语和法语是「亲戚」，都从拉丁语变来，所以 portugais 和 français 长得有点像。" },

  { iso: "ma", zh: "摩洛哥", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Maroc", parts: [{t:"le",p:"[lə]"},{t:"Ma",p:"[ma]"},{t:"roc",p:"[ʁɔk]"}] },
    nat: { m: { fr: "marocain", zh: "摩洛哥的；摩洛哥人（男）", parts: [{t:"ma",p:"[ma]"},{t:"ro",p:"[ʁɔ]"},{t:"cain",p:"[kɛ̃]"}] },
           f: { fr: "marocaine", zh: "摩洛哥的；摩洛哥人（女）", parts: [{t:"ma",p:"[ma]"},{t:"ro",p:"[ʁɔ]"},{t:"cai",p:"[kɛn]"}] } },
    fact: "摩洛哥的官方语言之一是法语，是非洲法语人口最多的国家之一。" },

  { iso: "sn", zh: "塞内加尔", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Sénégal", parts: [{t:"le",p:"[lə]"},{t:"Sé",p:"[se]"},{t:"né",p:"[ne]"},{t:"gal",p:"[ɡal]"}] },
    nat: { m: { fr: "sénégalais", zh: "塞内加尔的；塞内加尔人（男）", parts: [{t:"sé",p:"[se]"},{t:"né",p:"[ne]"},{t:"ga",p:"[ɡa]"},{t:"lais",p:"[lɛ]"}] },
           f: { fr: "sénégalaise", zh: "塞内加尔的；塞内加尔人（女）", parts: [{t:"sé",p:"[se]"},{t:"né",p:"[ne]"},{t:"ga",p:"[ɡa]"},{t:"lai",p:"[lɛ]"},{t:"se",p:"[z]"}] } },
    fact: "é 永远读 [e]（闭口的「诶」），所以 Sénégal 开头是 [se] 不是 [sɛ]。看到 é 就不会读错。" },

  { iso: "dk", zh: "丹麦", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Danemark", parts: [{t:"le",p:"[lə]"},{t:"Dane",p:"[dan]"},{t:"mark",p:"[maʁk]"}] },
    nat: { m: { fr: "danois", zh: "丹麦的；丹麦人（男）", parts: [{t:"da",p:"[da]"},{t:"nois",p:"[nwa]"}] },
           f: { fr: "danoise", zh: "丹麦的；丹麦人（女）", parts: [{t:"da",p:"[da]"},{t:"noi",p:"[nwa]"},{t:"se",p:"[z]"}] } },
    fact: "国名 Danemark 里的 e 不发音（Da-ne-mark 只读两拍），但国籍词 danois 里 a 和 ois 都要读。" },

  { iso: "gb", zh: "英国", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Royaume-Uni", parts: [{t:"le",p:"[lə]"},{t:"Roy",p:"[ʁwa]"},{t:"au",p:"[jo]"},{t:"me",p:"[m]"},{t:"U",p:"[y]"},{t:"ni",p:"[ni]"}] },
    nat: { m: { fr: "anglais", zh: "英国的；英国人（男）", parts: [{t:"an",p:"[ɑ̃]"},{t:"glais",p:"[ɡlɛ]"}] },
           f: { fr: "anglaise", zh: "英国的；英国人（女）", parts: [{t:"an",p:"[ɑ̃]"},{t:"glai",p:"[ɡlɛ]"},{t:"se",p:"[z]"}] } },
    fact: "小心：Royaume-Uni 是「联合王国」（英格兰+苏格兰+威尔士+北爱尔兰），而 anglais 严格说是「英格兰人」。" },

  { iso: "vn", zh: "越南", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Vietnam", parts: [{t:"le",p:"[lə]"},{t:"Viet",p:"[vjɛt]"},{t:"nam",p:"[nam]"}] },
    nat: { m: { fr: "vietnamien", zh: "越南的；越南人（男）", parts: [{t:"viet",p:"[vjɛt]"},{t:"na",p:"[na]"},{t:"mien",p:"[mjɛ̃]"}] },
           f: { fr: "vietnamienne", zh: "越南的；越南人（女）", parts: [{t:"viet",p:"[vjɛt]"},{t:"na",p:"[na]"},{t:"mienne",p:"[mjɛn]"}] } },
    fact: "越南曾经是法语区，至今街上还能看到法语留下的词汇和面包店（bánh mì 就来自法语的 pain）。" },

  { iso: "pe", zh: "秘鲁", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Pérou", parts: [{t:"le",p:"[lə]"},{t:"Pé",p:"[pe]"},{t:"rou",p:"[ʁu]"}] },
    nat: { m: { fr: "péruvien", zh: "秘鲁的；秘鲁人（男）", parts: [{t:"pé",p:"[pe]"},{t:"ru",p:"[ʁy]"},{t:"vien",p:"[vjɛ̃]"}] },
           f: { fr: "péruvienne", zh: "秘鲁的；秘鲁人（女）", parts: [{t:"pé",p:"[pe]"},{t:"ru",p:"[ʁy]"},{t:"vienne",p:"[vjɛn]"}] } },
    fact: "Pérou 很短，只有三个音 [pe.ʁu]；ou 在法语里永远读 [u]，不会读成「欧」。" },

  { iso: "cl", zh: "智利", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Chili", parts: [{t:"le",p:"[lə]"},{t:"Chi",p:"[ʃi]"},{t:"li",p:"[li]"}] },
    nat: { m: { fr: "chilien", zh: "智利的；智利人（男）", parts: [{t:"chi",p:"[ʃi]"},{t:"lien",p:"[ljɛ̃]"}] },
           f: { fr: "chilienne", zh: "智利的；智利人（女）", parts: [{t:"chi",p:"[ʃi]"},{t:"lienne",p:"[ljɛn]"}] } },
    fact: "Chili 的 Ch 读 [ʃ]（像中文「诗」的声母），法语里 ch 几乎永远读这个音。" },

  { iso: "ng", zh: "尼日利亚", grp: "mas", g: "m", num: "sg", prep: "au",
    name: { fr: "le Nigeria", parts: [{t:"le",p:"[lə]"},{t:"Ni",p:"[ni]"},{t:"gé",p:"[ʒe]"},{t:"ria",p:"[ʁja]"}] },
    nat: { m: { fr: "nigérian", zh: "尼日利亚的；尼日利亚人（男）", parts: [{t:"ni",p:"[ni]"},{t:"gé",p:"[ʒe]"},{t:"rian",p:"[ʁjɑ̃]"}] },
           f: { fr: "nigériane", zh: "尼日利亚的；尼日利亚人（女）", parts: [{t:"ni",p:"[ni]"},{t:"gé",p:"[ʒe]"},{t:"riane",p:"[ʁjan]"}] } },
    fact: "尼日利亚是非洲人口最多的国家，英语是官方语言——而邻国尼日尔（le Niger）同样是阳性。" },

  /* ========== 小岛与城邦（à） ========== */
  { iso: "cu", zh: "古巴", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Cuba", parts: [{t:"Cu",p:"[ky]"},{t:"ba",p:"[ba]"}] },
    nat: { m: { fr: "cubain", zh: "古巴的；古巴人（男）", parts: [{t:"cu",p:"[ky]"},{t:"bain",p:"[bɛ̃]"}] },
           f: { fr: "cubaine", zh: "古巴的；古巴人（女）", parts: [{t:"cu",p:"[ky]"},{t:"bai",p:"[bɛn]"}] } },
    fact: "小岛国前面不加冠词：直接说 à Cuba、Je vais à Cuba。如果加了 la 就变成「那个古巴」，意思不对了。" },

  { iso: "mg", zh: "马达加斯加", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Madagascar", parts: [{t:"Ma",p:"[ma]"},{t:"da",p:"[da]"},{t:"gas",p:"[ɡas]"},{t:"car",p:"[kaʁ]"}] },
    nat: { m: { fr: "malgache", zh: "马达加斯加的；马达加斯加人（男）", parts: [{t:"mal",p:"[mal]"},{t:"gache",p:"[ɡaʃ]"}] },
           f: { fr: "malgache", zh: "马达加斯加的；马达加斯加人（女）", parts: [{t:"mal",p:"[mal]"},{t:"gache",p:"[ɡaʃ]"}] } },
    fact: "国名 Madagascar 和国籍词 malgache 长得完全不像——这种「对不上号」的词只能单独背。" },

  { iso: "sg", zh: "新加坡", grp: "ile", g: "m", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Singapour", parts: [{t:"Sin",p:"[sɛ̃]"},{t:"ga",p:"[ɡa]"},{t:"pour",p:"[puʁ]"}] },
    nat: { m: { fr: "singapourien", zh: "新加坡的；新加坡人（男）", parts: [{t:"sin",p:"[sɛ̃]"},{t:"ga",p:"[ɡa]"},{t:"pou",p:"[pu]"},{t:"rien",p:"[ʁjɛ̃]"}] },
           f: { fr: "singapourienne", zh: "新加坡的；新加坡人（女）", parts: [{t:"sin",p:"[sɛ̃]"},{t:"ga",p:"[ɡa]"},{t:"pou",p:"[pu]"},{t:"rienne",p:"[ʁjɛn]"}] } },
    fact: "城邦、小岛用 à：à Singapour。判断标准不是面积，而是习惯——常用的几个记住就行。" },

  { iso: "ht", zh: "海地", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Haïti", parts: [{t:"Ha",p:"[a]"},{t:"ï",p:"[i]"},{t:"ti",p:"[ti]"}] },
    nat: { m: { fr: "haïtien", zh: "海地的；海地人（男）", parts: [{t:"ha",p:"[a]"},{t:"ï",p:"[i]"},{t:"tien",p:"[sjɛ̃]"}] },
           f: { fr: "haïtienne", zh: "海地的；海地人（女）", parts: [{t:"ha",p:"[a]"},{t:"ï",p:"[i]"},{t:"tienne",p:"[sjɛn]"}] } },
    fact: "Haïti 的 H 是「嘘音 h」，不发音也不能和前面的词连读，ï 的分音符让 a 和 i 分开发音。" },

  { iso: "cy", zh: "塞浦路斯", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true, same: true,
    name: { fr: "Chypre", parts: [{t:"Chy",p:"[ʃi]"},{t:"pre",p:"[pʁ]"}] },
    nat: { m: { fr: "chypriote", zh: "塞浦路斯的；塞浦路斯人（男）", parts: [{t:"chy",p:"[ʃi]"},{t:"pri",p:"[pʁi]"},{t:"ote",p:"[ɔt]"}] },
           f: { fr: "chypriote", zh: "塞浦路斯的；塞浦路斯人（女）", parts: [{t:"chy",p:"[ʃi]"},{t:"pri",p:"[pʁi]"},{t:"ote",p:"[ɔt]"}] } },
    fact: "chypriote 又是阴阳同形。-ote 结尾的国籍词（chypriote、candidate）男女写法一样。" },

  { iso: "mt", zh: "马耳他", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Malte", parts: [{t:"Mal",p:"[malt]"},{t:"e",p:""}] },
    nat: { m: { fr: "maltais", zh: "马耳他的；马耳他人（男）", parts: [{t:"mal",p:"[mal]"},{t:"tais",p:"[tɛ]"}] },
           f: { fr: "maltaise", zh: "马耳他的；马耳他人（女）", parts: [{t:"mal",p:"[mal]"},{t:"tai",p:"[tɛ]"},{t:"se",p:"[z]"}] } },
    fact: "Malte 末尾的 e 不发音，词尾的 -te 只读 [t]。法语词尾辅音常常整个省掉不读。" },

  { iso: "mu", zh: "毛里求斯", grp: "ile", g: "f", num: "sg", prep: "à", noArticle: true,
    name: { fr: "Maurice", parts: [{t:"Mau",p:"[mɔ]"},{t:"ri",p:"[ʁi]"},{t:"ce",p:"[s]"}] },
    nat: { m: { fr: "mauricien", zh: "毛里求斯的；毛里求斯人（男）", parts: [{t:"mau",p:"[mɔ]"},{t:"ri",p:"[ʁi]"},{t:"cien",p:"[sjɛ̃]"}] },
           f: { fr: "mauricienne", zh: "毛里求斯的；毛里求斯人（女）", parts: [{t:"mau",p:"[mɔ]"},{t:"ri",p:"[ʁi]"},{t:"cienne",p:"[sjɛn]"}] } },
    fact: "Maurice 既是国名也是人名（法语里常见的男子名），au 在这里读 [ɔ]。" },

  { iso: "mc", zh: "摩纳哥", grp: "ile", g: "m", num: "sg", prep: "à", noArticle: true, same: true,
    name: { fr: "Monaco", parts: [{t:"Mo",p:"[mɔ]"},{t:"na",p:"[na]"},{t:"co",p:"[kɔ]"}] },
    nat: { m: { fr: "monégasque", zh: "摩纳哥的；摩纳哥人（男）", parts: [{t:"mo",p:"[mɔ]"},{t:"né",p:"[ne]"},{t:"gasque",p:"[ɡask]"}] },
           f: { fr: "monégasque", zh: "摩纳哥的；摩纳哥人（女）", parts: [{t:"mo",p:"[mɔ]"},{t:"né",p:"[ne]"},{t:"gasque",p:"[ɡask]"}] } },
    fact: "摩纳哥是世界第二小的国家，法语是唯一官方语言——面积比北京三环内还小。" },

  /* ========== 特殊：以 e 结尾却是阳性（au） ========== */
  { iso: "mx", zh: "墨西哥", grp: "spec", g: "m", num: "sg", prep: "au",
    name: { fr: "le Mexique", parts: [{t:"le",p:"[lə]"},{t:"Me",p:"[mɛ]"},{t:"xi",p:"[ksi]"},{t:"que",p:"[k]"}] },
    nat: { m: { fr: "mexicain", zh: "墨西哥的；墨西哥人（男）", parts: [{t:"me",p:"[mɛ]"},{t:"xi",p:"[ksi]"},{t:"cain",p:"[kɛ̃]"}] },
           f: { fr: "mexicaine", zh: "墨西哥的；墨西哥人（女）", parts: [{t:"me",p:"[mɛ]"},{t:"xi",p:"[ksi]"},{t:"cai",p:"[kɛn]"}] } },
    fact: "⚠️ 陷阱！Mexique 以 -e 结尾却是<b>阳性</b>：le Mexique、au Mexique。这类词只能单独记住。" },

  { iso: "kh", zh: "柬埔寨", grp: "spec", g: "m", num: "sg", prep: "au",
    name: { fr: "le Cambodge", parts: [{t:"le",p:"[lə]"},{t:"Cam",p:"[kɑ̃]"},{t:"bo",p:"[bɔ]"},{t:"dge",p:"[dʒ]"}] },
    nat: { m: { fr: "cambodgien", zh: "柬埔寨的；柬埔寨人（男）", parts: [{t:"cam",p:"[kɑ̃]"},{t:"bod",p:"[bɔd]"},{t:"gien",p:"[ʒjɛ̃]"}] },
           f: { fr: "cambodgienne", zh: "柬埔寨的；柬埔寨人（女）", parts: [{t:"cam",p:"[kɑ̃]"},{t:"bod",p:"[bɔd]"},{t:"gienne",p:"[ʒjɛn]"}] } },
    fact: "⚠️ 又一个 -e 结尾的阳性国家：le Cambodge。柬埔寨曾是法国殖民地，法语在当地仍有影响。" },

  { iso: "zw", zh: "津巴布韦", grp: "spec", g: "m", num: "sg", prep: "au",
    name: { fr: "le Zimbabwe", parts: [{t:"le",p:"[lə]"},{t:"Zim",p:"[zim]"},{t:"ba",p:"[ba]"},{t:"bwe",p:"[bwe]"}] },
    nat: { m: { fr: "zimbabwéen", zh: "津巴布韦的；津巴布韦人（男）", parts: [{t:"zim",p:"[zim]"},{t:"ba",p:"[ba]"},{t:"bwé",p:"[bwe]"},{t:"en",p:"[ɛ̃]"}] },
           f: { fr: "zimbabwéenne", zh: "津巴布韦的；津巴布韦人（女）", parts: [{t:"zim",p:"[zim]"},{t:"ba",p:"[ba]"},{t:"bwé",p:"[bwe]"},{t:"enne",p:"[ɛn]"}] } },
    fact: "⚠️ le Zimbabwe 也是 -e 结尾的阳性。词尾 -bwe 读 [bwe]，最后的 e 要读出来（不是不发音的 e）。" },

  { iso: "mz", zh: "莫桑比克", grp: "spec", g: "m", num: "sg", prep: "au",
    name: { fr: "le Mozambique", parts: [{t:"le",p:"[lə]"},{t:"Mo",p:"[mɔ]"},{t:"zam",p:"[zɑ̃]"},{t:"bique",p:"[bik]"}] },
    nat: { m: { fr: "mozambicain", zh: "莫桑比克的；莫桑比克人（男）", parts: [{t:"mo",p:"[mɔ]"},{t:"zam",p:"[zɑ̃]"},{t:"bi",p:"[bi]"},{t:"cain",p:"[kɛ̃]"}] },
           f: { fr: "mozambicaine", zh: "莫桑比克的；莫桑比克人（女）", parts: [{t:"mo",p:"[mɔ]"},{t:"zam",p:"[zɑ̃]"},{t:"bi",p:"[bi]"},{t:"cai",p:"[kɛn]"}] } },
    fact: "⚠️ le Mozambique —— -que 结尾却阳性！它和 la Belgique、la Turquie 结尾像，性别却相反。" },

  { iso: "bz", zh: "伯利兹", grp: "spec", g: "m", num: "sg", prep: "au",
    name: { fr: "le Belize", parts: [{t:"le",p:"[lə]"},{t:"Be",p:"[be]"},{t:"li",p:"[li]"},{t:"ze",p:"[z]"}] },
    nat: { m: { fr: "bélizien", zh: "伯利兹的；伯利兹人（男）", parts: [{t:"bé",p:"[be]"},{t:"li",p:"[li]"},{t:"zien",p:"[zjɛ̃]"}] },
           f: { fr: "bélizienne", zh: "伯利兹的；伯利兹人（女）", parts: [{t:"bé",p:"[be]"},{t:"li",p:"[li]"},{t:"zienne",p:"[zjɛn]"}] } },
    fact: "⚠️ le Belize 是 -e 结尾的阳性国家，中美洲唯一官方语言为英语的国家。" }
];

if (typeof window !== "undefined"){
  window.__COUNTRY_GROUPS = COUNTRY_GROUPS;
  window.__COUNTRIES = COUNTRIES;
}
