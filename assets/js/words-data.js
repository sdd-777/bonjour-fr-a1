/* ============================================================
   法语 A1 · 单词模块数据（国家 / 职业 / 生活用品 / 数字 / 形容副词）
   音标分段 parts: [{ t: "字母组合", p: "[ipa]" }]
   - p 为空串表示该字母组合不发音
   - 渲染时每个分段的 IPA 用小一号字体，与字母组合一一对应
   ============================================================ */

const WORD_CATS = [
  {
    id: "countries",
    icon: "🌍",
    label: "国家与国籍",
    tip: "国家名和普通名词一样分阴阳性：la Chine（阴性，多以 e 结尾）、le Japon（阳性）。国籍形容词要跟着变：il est chinois / elle est chinoise。",
    items: [
      { flag: "🇨🇳", zh: "中国",
        name: { fr: "la Chine", parts: [ {t:"la",p:"[la]"}, {t:"Chi",p:"[ʃi]"}, {t:"ne",p:"[n]"} ] },
        nat: {
          m: { fr: "chinois", zh: "中国的；中国人（男）", parts: [ {t:"chi",p:"[ʃi]"}, {t:"nois",p:"[nwɑ]"} ] },
          f: { fr: "chinoise", zh: "中国的；中国人（女）", parts: [ {t:"chi",p:"[ʃi]"}, {t:"noi",p:"[nwa]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇫🇷", zh: "法国",
        name: { fr: "la France", parts: [ {t:"la",p:"[la]"}, {t:"Fran",p:"[fʁɑ̃]"}, {t:"ce",p:"[s]"} ] },
        nat: {
          m: { fr: "français", zh: "法国的；法国人（男）", parts: [ {t:"fran",p:"[fʁɑ̃]"}, {t:"çais",p:"[sɛ]"} ] },
          f: { fr: "française", zh: "法国的；法国人（女）", parts: [ {t:"fran",p:"[fʁɑ̃]"}, {t:"çai",p:"[sɛ]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇺🇸", zh: "美国",
        name: { fr: "les États-Unis", parts: [ {t:"les",p:"[le]"}, {t:"É",p:"[e]"}, {t:"tats",p:"[ta]"}, {t:"-U",p:"[y]"}, {t:"nis",p:"[ni]"} ] },
        nat: {
          m: { fr: "américain", zh: "美国的；美国人（男）", parts: [ {t:"a",p:"[a]"}, {t:"mé",p:"[me]"}, {t:"ri",p:"[ʁi]"}, {t:"cain",p:"[kɛ̃]"} ] },
          f: { fr: "américaine", zh: "美国的；美国人（女）", parts: [ {t:"a",p:"[a]"}, {t:"mé",p:"[me]"}, {t:"ri",p:"[ʁi]"}, {t:"cai",p:"[kɛn]"} ] }
        } },
      { flag: "🇬🇧", zh: "英国",
        name: { fr: "le Royaume-Uni", parts: [ {t:"le",p:"[lə]"}, {t:"Roy",p:"[ʁwa]"}, {t:"au",p:"[jo]"}, {t:"me",p:"[m]"}, {t:"-U",p:"[y]"}, {t:"ni",p:"[ni]"} ] },
        nat: {
          m: { fr: "anglais", zh: "英国的；英国人（男）", parts: [ {t:"an",p:"[ɑ̃]"}, {t:"glais",p:"[ɡlɛ]"} ] },
          f: { fr: "anglaise", zh: "英国的；英国人（女）", parts: [ {t:"an",p:"[ɑ̃]"}, {t:"glai",p:"[ɡlɛ]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇩🇪", zh: "德国",
        name: { fr: "l'Allemagne", parts: [ {t:"l'",p:"[l]"}, {t:"Al",p:"[al]"}, {t:"ma",p:"[ma]"}, {t:"gne",p:"[ɲ]"} ] },
        nat: {
          m: { fr: "allemand", zh: "德国的；德国人（男）", parts: [ {t:"al",p:"[al]"}, {t:"le",p:"[lə]"}, {t:"mand",p:"[mɑ̃]"} ] },
          f: { fr: "allemande", zh: "德国的；德国人（女）", parts: [ {t:"al",p:"[al]"}, {t:"le",p:"[lə]"}, {t:"man",p:"[mɑ̃]"}, {t:"de",p:"[d]"} ] }
        } },
      { flag: "🇪🇸", zh: "西班牙",
        name: { fr: "l'Espagne", parts: [ {t:"l'",p:"[l]"}, {t:"Es",p:"[ɛs]"}, {t:"pa",p:"[pa]"}, {t:"gne",p:"[ɲ]"} ] },
        nat: {
          m: { fr: "espagnol", zh: "西班牙的；西班牙人（男）", parts: [ {t:"es",p:"[ɛs]"}, {t:"pa",p:"[pa]"}, {t:"gnol",p:"[ɲɔl]"} ] },
          f: { fr: "espagnole", zh: "西班牙的；西班牙人（女）", parts: [ {t:"es",p:"[ɛs]"}, {t:"pa",p:"[pa]"}, {t:"gno",p:"[ɲɔ]"}, {t:"le",p:"[l]"} ] }
        } },
      { flag: "🇮🇹", zh: "意大利",
        name: { fr: "l'Italie", parts: [ {t:"l'",p:"[l]"}, {t:"I",p:"[i]"}, {t:"ta",p:"[ta]"}, {t:"lie",p:"[li]"} ] },
        nat: {
          m: { fr: "italien", zh: "意大利的；意大利人（男）", parts: [ {t:"i",p:"[i]"}, {t:"ta",p:"[ta]"}, {t:"lien",p:"[ljɛ̃]"} ] },
          f: { fr: "italienne", zh: "意大利的；意大利人（女）", parts: [ {t:"i",p:"[i]"}, {t:"ta",p:"[ta]"}, {t:"lien",p:"[ljɛ]"}, {t:"ne",p:"[n]"} ] }
        } },
      { flag: "🇷🇺", zh: "俄罗斯",
        name: { fr: "la Russie", parts: [ {t:"la",p:"[la]"}, {t:"Rus",p:"[ʁy]"}, {t:"sie",p:"[si]"} ] },
        nat: {
          m: { fr: "russe", zh: "俄罗斯的；俄罗斯人（男）", parts: [ {t:"rus",p:"[ʁy]"}, {t:"se",p:"[s]"} ] },
          f: { fr: "russe", zh: "俄罗斯的；俄罗斯人（女）", same: true, parts: [ {t:"rus",p:"[ʁy]"}, {t:"se",p:"[s]"} ] }
        } },
      { flag: "🇯🇵", zh: "日本",
        name: { fr: "le Japon", parts: [ {t:"le",p:"[lə]"}, {t:"Ja",p:"[ʒa]"}, {t:"pon",p:"[pɔ̃]"} ] },
        nat: {
          m: { fr: "japonais", zh: "日本的；日本人（男）", parts: [ {t:"ja",p:"[ʒa]"}, {t:"po",p:"[pɔ]"}, {t:"nais",p:"[nɛ]"} ] },
          f: { fr: "japonaise", zh: "日本的；日本人（女）", parts: [ {t:"ja",p:"[ʒa]"}, {t:"po",p:"[pɔ]"}, {t:"nai",p:"[nɛ]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇰🇷", zh: "韩国",
        name: { fr: "la Corée du Sud", parts: [ {t:"la",p:"[la]"}, {t:"Co",p:"[kɔ]"}, {t:"rée",p:"[ʁe]"}, {t:"du Sud",p:"[dy sœ̃d]"} ] },
        nat: {
          m: { fr: "coréen", zh: "韩国的；韩国人（男）", parts: [ {t:"co",p:"[kɔ]"}, {t:"ré",p:"[ʁe]"}, {t:"en",p:"[ɛ̃]"} ] },
          f: { fr: "coréenne", zh: "韩国的；韩国人（女）", parts: [ {t:"co",p:"[kɔ]"}, {t:"ré",p:"[ʁe]"}, {t:"en",p:"[ɛn]"} ] }
        } },
      { flag: "🇨🇦", zh: "加拿大",
        name: { fr: "le Canada", parts: [ {t:"le",p:"[lə]"}, {t:"Ca",p:"[ka]"}, {t:"na",p:"[na]"}, {t:"da",p:"[da]"} ] },
        nat: {
          m: { fr: "canadien", zh: "加拿大的；加拿大人（男）", parts: [ {t:"ca",p:"[ka]"}, {t:"na",p:"[na]"}, {t:"dien",p:"[djɛ̃]"} ] },
          f: { fr: "canadienne", zh: "加拿大的；加拿大人（女）", parts: [ {t:"ca",p:"[ka]"}, {t:"na",p:"[na]"}, {t:"dien",p:"[djɛn]"} ] }
        } },
      { flag: "🇦🇺", zh: "澳大利亚",
        name: { fr: "l'Australie", parts: [ {t:"l'",p:"[l]"}, {t:"Aus",p:"[os]"}, {t:"tra",p:"[tʁa]"}, {t:"lie",p:"[li]"} ] },
        nat: {
          m: { fr: "australien", zh: "澳大利亚的；澳大利亚人（男）", parts: [ {t:"aus",p:"[os]"}, {t:"tra",p:"[tʁa]"}, {t:"lien",p:"[ljɛ̃]"} ] },
          f: { fr: "australienne", zh: "澳大利亚的；澳大利亚人（女）", parts: [ {t:"aus",p:"[os]"}, {t:"tra",p:"[tʁa]"}, {t:"lien",p:"[ljɛn]"} ] }
        } },
      { flag: "🇧🇷", zh: "巴西",
        name: { fr: "le Brésil", parts: [ {t:"le",p:"[lə]"}, {t:"Bré",p:"[bʁe]"}, {t:"sil",p:"[zil]"} ] },
        nat: {
          m: { fr: "brésilien", zh: "巴西的；巴西人（男）", parts: [ {t:"bré",p:"[bʁe]"}, {t:"si",p:"[zi]"}, {t:"lien",p:"[ljɛ̃]"} ] },
          f: { fr: "brésilienne", zh: "巴西的；巴西人（女）", parts: [ {t:"bré",p:"[bʁe]"}, {t:"si",p:"[zi]"}, {t:"lien",p:"[ljɛn]"} ] }
        } },
      { flag: "🇮🇳", zh: "印度",
        name: { fr: "l'Inde", parts: [ {t:"l'",p:"[l]"}, {t:"In",p:"[ɛ̃]"}, {t:"de",p:"[d]"} ] },
        nat: {
          m: { fr: "indien", zh: "印度的；印度人（男）", parts: [ {t:"in",p:"[ɛ̃]"}, {t:"dien",p:"[djɛ̃]"} ] },
          f: { fr: "indienne", zh: "印度的；印度人（女）", parts: [ {t:"in",p:"[ɛ̃]"}, {t:"dien",p:"[djɛn]"} ] }
        } },
      { flag: "🇲🇽", zh: "墨西哥",
        name: { fr: "le Mexique", parts: [ {t:"le",p:"[lə]"}, {t:"Me",p:"[mɛ]"}, {t:"xi",p:"[ksi]"}, {t:"que",p:"[k]"} ] },
        nat: {
          m: { fr: "mexicain", zh: "墨西哥的；墨西哥人（男）", parts: [ {t:"me",p:"[me]"}, {t:"xi",p:"[ksi]"}, {t:"cain",p:"[kɛ̃]"} ] },
          f: { fr: "mexicaine", zh: "墨西哥的；墨西哥人（女）", parts: [ {t:"me",p:"[me]"}, {t:"xi",p:"[ksi]"}, {t:"cai",p:"[kɛn]"} ] }
        } },
      { flag: "🇪🇬", zh: "埃及",
        name: { fr: "l'Égypte", parts: [ {t:"l'",p:"[l]"}, {t:"É",p:"[e]"}, {t:"gyp",p:"[ʒip]"}, {t:"te",p:"[t]"} ] },
        nat: {
          m: { fr: "égyptien", zh: "埃及的；埃及人（男）", parts: [ {t:"é",p:"[e]"}, {t:"gyp",p:"[ʒip]"}, {t:"tien",p:"[sjɛ̃]"} ] },
          f: { fr: "égyptienne", zh: "埃及的；埃及人（女）", parts: [ {t:"é",p:"[e]"}, {t:"gyp",p:"[ʒip]"}, {t:"tien",p:"[sjɛn]"} ] }
        } },
      { flag: "🇬🇷", zh: "希腊",
        name: { fr: "la Grèce", parts: [ {t:"la",p:"[la]"}, {t:"Grè",p:"[ɡʁɛ]"}, {t:"ce",p:"[s]"} ] },
        nat: {
          m: { fr: "grec", zh: "希腊的；希腊人（男）", parts: [ {t:"grec",p:"[ɡʁɛk]"} ] },
          f: { fr: "grecque", zh: "希腊的；希腊人（女）", parts: [ {t:"gre",p:"[ɡʁɛ]"}, {t:"cque",p:"[k]"} ] }
        } },
      { flag: "🇹🇭", zh: "泰国",
        name: { fr: "la Thaïlande", parts: [ {t:"la",p:"[la]"}, {t:"Thaï",p:"[taj]"}, {t:"lan",p:"[lɑ̃]"}, {t:"de",p:"[d]"} ] },
        nat: {
          m: { fr: "thaïlandais", zh: "泰国的；泰国人（男）", parts: [ {t:"thaï",p:"[taj]"}, {t:"lan",p:"[lɑ̃]"}, {t:"dais",p:"[dɛ]"} ] },
          f: { fr: "thaïlandaise", zh: "泰国的；泰国人（女）", parts: [ {t:"thaï",p:"[taj]"}, {t:"lan",p:"[lɑ̃]"}, {t:"dai",p:"[dɛ]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇵🇹", zh: "葡萄牙",
        name: { fr: "le Portugal", parts: [ {t:"le",p:"[lə]"}, {t:"Por",p:"[pɔʁ]"}, {t:"tu",p:"[ty]"}, {t:"gal",p:"[ɡal]"} ] },
        nat: {
          m: { fr: "portugais", zh: "葡萄牙的；葡萄牙人（男）", parts: [ {t:"por",p:"[pɔʁ]"}, {t:"tu",p:"[ty]"}, {t:"gais",p:"[ɡɛ]"} ] },
          f: { fr: "portugaise", zh: "葡萄牙的；葡萄牙人（女）", parts: [ {t:"por",p:"[pɔʁ]"}, {t:"tu",p:"[ty]"}, {t:"gai",p:"[ɡɛ]"}, {t:"se",p:"[z]"} ] }
        } },
      { flag: "🇨🇭", zh: "瑞士",
        name: { fr: "la Suisse", parts: [ {t:"la",p:"[la]"}, {t:"Sui",p:"[sɥi]"}, {t:"sse",p:"[s]"} ] },
        nat: {
          m: { fr: "suisse", zh: "瑞士的；瑞士人（男）", parts: [ {t:"sui",p:"[sɥi]"}, {t:"sse",p:"[s]"} ] },
          f: { fr: "suisse", zh: "瑞士的；瑞士人（女）", same: true, parts: [ {t:"sui",p:"[sɥi]"}, {t:"sse",p:"[s]"} ] }
        } }
    ]
  },
  {
    id: "jobs",
    icon: "👷",
    label: "职业",
    tip: "职业名词变阴性：一般在词尾加 -e（avocat → avocate）；以 -eur 结尾的常变 -euse（chanteur → chanteuse）或 -trice（acteur → actrice）。也有阴阳同形的（journaliste）。",
    items: [
      { art: "actor", zh: "演员",
        m: { fr: "acteur", parts: [ {t:"ac",p:"[ak]"}, {t:"teur",p:"[tœʁ]"} ] },
        f: { fr: "actrice", parts: [ {t:"ac",p:"[ak]"}, {t:"trice",p:"[tʁis]"} ] } },
      { art: "singer", zh: "歌手",
        m: { fr: "chanteur", parts: [ {t:"chan",p:"[ʃɑ̃]"}, {t:"teur",p:"[tœʁ]"} ] },
        f: { fr: "chanteuse", parts: [ {t:"chan",p:"[ʃɑ̃]"}, {t:"teu",p:"[tø]"}, {t:"se",p:"[z]"} ] } },
      { art: "journalist", zh: "记者", same: true,
        m: { fr: "journaliste", parts: [ {t:"jour",p:"[ʒuʁ]"}, {t:"na",p:"[na]"}, {t:"liste",p:"[list]"} ] },
        f: { fr: "journaliste", parts: [ {t:"jour",p:"[ʒuʁ]"}, {t:"na",p:"[na]"}, {t:"liste",p:"[list]"} ] } },
      { art: "student", zh: "学生",
        m: { fr: "étudiant", parts: [ {t:"é",p:"[e]"}, {t:"tu",p:"[ty]"}, {t:"diant",p:"[djɑ̃]"} ] },
        f: { fr: "étudiante", parts: [ {t:"é",p:"[e]"}, {t:"tu",p:"[ty]"}, {t:"dian",p:"[djɑ̃]"}, {t:"te",p:"[t]"} ] } },
      { art: "seller", zh: "售货员",
        m: { fr: "vendeur", parts: [ {t:"ven",p:"[vɑ̃]"}, {t:"deur",p:"[dœʁ]"} ] },
        f: { fr: "vendeuse", parts: [ {t:"ven",p:"[vɑ̃]"}, {t:"deu",p:"[dø]"}, {t:"se",p:"[z]"} ] } },
      { art: "waiter", zh: "服务员",
        m: { fr: "serveur", parts: [ {t:"ser",p:"[sɛʁ]"}, {t:"veur",p:"[vœʁ]"} ] },
        f: { fr: "serveuse", parts: [ {t:"ser",p:"[sɛʁ]"}, {t:"veu",p:"[vø]"}, {t:"se",p:"[z]"} ] } },
      { art: "chef", zh: "厨师",
        m: { fr: "cuisinier", parts: [ {t:"cui",p:"[kɥi]"}, {t:"si",p:"[zi]"}, {t:"nier",p:"[nje]"} ] },
        f: { fr: "cuisinière", parts: [ {t:"cui",p:"[kɥi]"}, {t:"si",p:"[zi]"}, {t:"niè",p:"[njɛ]"}, {t:"re",p:"[ʁ]"} ] } },
      { art: "police", zh: "警察",
        m: { fr: "policier", parts: [ {t:"po",p:"[pɔ]"}, {t:"li",p:"[li]"}, {t:"cier",p:"[sje]"} ] },
        f: { fr: "policière", parts: [ {t:"po",p:"[pɔ]"}, {t:"li",p:"[li]"}, {t:"ciè",p:"[sjɛ]"}, {t:"re",p:"[ʁ]"} ] } },
      { art: "postman", zh: "邮递员",
        m: { fr: "facteur", parts: [ {t:"fac",p:"[fak]"}, {t:"teur",p:"[tœʁ]"} ] },
        f: { fr: "factrice", parts: [ {t:"fac",p:"[fak]"}, {t:"trice",p:"[tʁis]"} ] } },
      { art: "farmer", zh: "农民",
        m: { fr: "fermier", parts: [ {t:"fer",p:"[fɛʁ]"}, {t:"mier",p:"[mje]"} ] },
        f: { fr: "fermière", parts: [ {t:"fer",p:"[fɛʁ]"}, {t:"miè",p:"[mjɛ]"}, {t:"re",p:"[ʁ]"} ] } },
      { art: "musician", zh: "音乐家",
        m: { fr: "musicien", parts: [ {t:"mu",p:"[my]"}, {t:"si",p:"[zi]"}, {t:"cien",p:"[sjɛ̃]"} ] },
        f: { fr: "musicienne", parts: [ {t:"mu",p:"[my]"}, {t:"si",p:"[zi]"}, {t:"cien",p:"[sjɛn]"} ] } },
      { art: "dancer", zh: "舞蹈家",
        m: { fr: "danseur", parts: [ {t:"dan",p:"[dɑ̃]"}, {t:"seur",p:"[sœʁ]"} ] },
        f: { fr: "danseuse", parts: [ {t:"dan",p:"[dɑ̃]"}, {t:"seu",p:"[sø]"}, {t:"se",p:"[z]"} ] } },
      { art: "photographer", zh: "摄影师", same: true,
        m: { fr: "photographe", parts: [ {t:"pho",p:"[fɔ]"}, {t:"to",p:"[tɔ]"}, {t:"graphe",p:"[ɡʁaf]"} ] },
        f: { fr: "photographe", parts: [ {t:"pho",p:"[fɔ]"}, {t:"to",p:"[tɔ]"}, {t:"graphe",p:"[ɡʁaf]"} ] } },
      { art: "painter", zh: "画家", same: true,
        m: { fr: "peintre", parts: [ {t:"pein",p:"[pɛ̃]"}, {t:"tre",p:"[tʁ]"} ] },
        f: { fr: "peintre", parts: [ {t:"pein",p:"[pɛ̃]"}, {t:"tre",p:"[tʁ]"} ] } },
      { art: "writer", zh: "作家", same: true,
        m: { fr: "écrivain", parts: [ {t:"é",p:"[e]"}, {t:"cri",p:"[kʁi]"}, {t:"vain",p:"[vɛ̃]"} ] },
        f: { fr: "écrivain", parts: [ {t:"é",p:"[e]"}, {t:"cri",p:"[kʁi]"}, {t:"vain",p:"[vɛ̃]"} ] } },
      { art: "barber", zh: "理发师",
        m: { fr: "coiffeur", parts: [ {t:"coif",p:"[kwaf]"}, {t:"feur",p:"[fœʁ]"} ] },
        f: { fr: "coiffeuse", parts: [ {t:"coif",p:"[kwaf]"}, {t:"feu",p:"[fø]"}, {t:"se",p:"[z]"} ] } },
      { art: "lawyer", zh: "律师",
        m: { fr: "avocat", parts: [ {t:"a",p:"[a]"}, {t:"vo",p:"[vɔ]"}, {t:"cat",p:"[ka]"} ] },
        f: { fr: "avocate", parts: [ {t:"a",p:"[a]"}, {t:"vo",p:"[vɔ]"}, {t:"ca",p:"[ka]"}, {t:"te",p:"[t]"} ] } },
      { art: "nurse", zh: "护士",
        m: { fr: "infirmier", parts: [ {t:"in",p:"[ɛ̃]"}, {t:"fir",p:"[fiʁ]"}, {t:"mier",p:"[mje]"} ] },
        f: { fr: "infirmière", parts: [ {t:"in",p:"[ɛ̃]"}, {t:"fir",p:"[fiʁ]"}, {t:"miè",p:"[mjɛ]"}, {t:"re",p:"[ʁ]"} ] } }
    ]
  },
  {
    id: "things",
    icon: "🏠",
    label: "生活用品",
    tip: "名词前面用冠词体现阴阳性：le（阳性）/ la（阴性）；遇到元音开头要缩合成 l'（l'eau、l'école）。",
    items: [
      { zh: "房子", w: { fr: "la maison", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"mai",p:"[mɛ]"}, {t:"son",p:"[zɔ̃]"} ] } },
      { zh: "桌子", w: { fr: "la table", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"ta",p:"[ta]"}, {t:"ble",p:"[bl]"} ] } },
      { zh: "椅子", w: { fr: "la chaise", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"chai",p:"[ʃɛ]"}, {t:"se",p:"[z]"} ] } },
      { zh: "床", w: { fr: "le lit", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"lit",p:"[li]"} ] } },
      { zh: "门", w: { fr: "la porte", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"por",p:"[pɔʁ]"}, {t:"te",p:"[t]"} ] } },
      { zh: "窗户", w: { fr: "la fenêtre", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"fe",p:"[fə]"}, {t:"nê",p:"[nɛ]"}, {t:"tre",p:"[tʁ]"} ] } },
      { zh: "书", w: { fr: "le livre", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"li",p:"[li]"}, {t:"vre",p:"[vʁ]"} ] } },
      { zh: "笔记本", w: { fr: "le cahier", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"ca",p:"[ka]"}, {t:"hier",p:"[je]"} ] } },
      { zh: "钢笔", w: { fr: "le stylo", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"sty",p:"[sti]"}, {t:"lo",p:"[lo]"} ] } },
      { zh: "包", w: { fr: "le sac", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"sac",p:"[sak]"} ] } },
      { zh: "电话", w: { fr: "le téléphone", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"té",p:"[te]"}, {t:"lé",p:"[le]"}, {t:"pho",p:"[fɔn]"} ] } },
      { zh: "电脑", w: { fr: "l'ordinateur", g: "m", parts: [ {t:"l'",p:"[l]"}, {t:"or",p:"[ɔʁ]"}, {t:"di",p:"[di]"}, {t:"na",p:"[na]"}, {t:"teur",p:"[tœʁ]"} ] } },
      { zh: "电视", w: { fr: "la télévision", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"té",p:"[te]"}, {t:"lé",p:"[le]"}, {t:"vi",p:"[vi]"}, {t:"sion",p:"[zjɔ̃]"} ] } },
      { zh: "冰箱", w: { fr: "le frigo", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"fri",p:"[fʁi]"}, {t:"go",p:"[ɡo]"} ] } },
      { zh: "厨房", w: { fr: "la cuisine", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"cui",p:"[kɥi]"}, {t:"si",p:"[zin]"} ] } },
      { zh: "卧室", w: { fr: "la chambre", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"cham",p:"[ʃɑ̃]"}, {t:"bre",p:"[bʁ]"} ] } },
      { zh: "面包", w: { fr: "le pain", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"pain",p:"[pɛ̃]"} ] } },
      { zh: "水", w: { fr: "l'eau", g: "f", parts: [ {t:"l'",p:"[l]"}, {t:"eau",p:"[o]"} ] } },
      { zh: "咖啡", w: { fr: "le café", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"ca",p:"[ka]"}, {t:"fé",p:"[fe]"} ] } },
      { zh: "茶", w: { fr: "le thé", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"thé",p:"[te]"} ] } },
      { zh: "牛奶", w: { fr: "le lait", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"lait",p:"[lɛ]"} ] } },
      { zh: "奶酪", w: { fr: "le fromage", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"fro",p:"[fʁɔ]"}, {t:"ma",p:"[ma]"}, {t:"ge",p:"[ʒ]"} ] } },
      { zh: "自行车", w: { fr: "le vélo", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"vé",p:"[ve]"}, {t:"lo",p:"[lo]"} ] } },
      { zh: "汽车", w: { fr: "la voiture", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"voi",p:"[vwa]"}, {t:"tu",p:"[ty]"}, {t:"re",p:"[ʁ]"} ] } },
      { zh: "狗", w: { fr: "le chien", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"chien",p:"[ʃjɛ̃]"} ] } }
    ]
  },
  {
    id: "numbers",
    icon: "🔢",
    label: "数字",
    tip: "70-79 = soixante + dix..dix-neuf；80-99 = quatre-vingt(s) + un..dix-neuf。21/31/41/51/61/71 要用 et un（et onze）。",
    items: [
      { n: 0, fr: "zéro", zh: "零", parts: [ {t:"zé",p:"[ze]"}, {t:"ro",p:"[ʁo]"} ] },
      { n: 1, fr: "un", zh: "一", parts: [ {t:"un",p:"[œ̃]"} ] },
      { n: 2, fr: "deux", zh: "二", parts: [ {t:"deux",p:"[dø]"} ] },
      { n: 3, fr: "trois", zh: "三", parts: [ {t:"tr",p:"[tʁ]"}, {t:"ois",p:"[wɑ]"} ] },
      { n: 4, fr: "quatre", zh: "四", parts: [ {t:"qua",p:"[ka]"}, {t:"tre",p:"[tʁ]"} ] },
      { n: 5, fr: "cinq", zh: "五", parts: [ {t:"cinq",p:"[sɛ̃k]"} ] },
      { n: 6, fr: "six", zh: "六", parts: [ {t:"six",p:"[sis]"} ] },
      { n: 7, fr: "sept", zh: "七", parts: [ {t:"sept",p:"[sɛt]"} ] },
      { n: 8, fr: "huit", zh: "八", parts: [ {t:"huit",p:"[ɥit]"} ] },
      { n: 9, fr: "neuf", zh: "九", parts: [ {t:"neuf",p:"[nœf]"} ] },
      { n: 10, fr: "dix", zh: "十", parts: [ {t:"dix",p:"[dis]"} ] },
      { n: 11, fr: "onze", zh: "十一", parts: [ {t:"onze",p:"[ɔ̃z]"} ] },
      { n: 12, fr: "douze", zh: "十二", parts: [ {t:"dou",p:"[du]"}, {t:"ze",p:"[z]"} ] },
      { n: 13, fr: "treize", zh: "十三", parts: [ {t:"trei",p:"[tʁɛ]"}, {t:"ze",p:"[z]"} ] },
      { n: 14, fr: "quatorze", zh: "十四", parts: [ {t:"qua",p:"[ka]"}, {t:"tor",p:"[tɔʁ]"}, {t:"ze",p:"[z]"} ] },
      { n: 15, fr: "quinze", zh: "十五", parts: [ {t:"quin",p:"[kɛ̃]"}, {t:"ze",p:"[z]"} ] },
      { n: 16, fr: "seize", zh: "十六", parts: [ {t:"sei",p:"[sɛ]"}, {t:"ze",p:"[z]"} ] },
      { n: 17, fr: "dix-sept", zh: "十七", parts: [ {t:"dix",p:"[dis]"}, {t:"-sept",p:"[sɛt]"} ] },
      { n: 18, fr: "dix-huit", zh: "十八", parts: [ {t:"dix",p:"[dis]"}, {t:"-huit",p:"[zɥit]"} ] },
      { n: 19, fr: "dix-neuf", zh: "十九", parts: [ {t:"dix",p:"[dis]"}, {t:"-neuf",p:"[nœf]"} ] },
      { n: 20, fr: "vingt", zh: "二十", parts: [ {t:"vingt",p:"[vɛ̃]"} ] },
      { n: 21, fr: "vingt et un", zh: "二十一", note: "21/31/41/51/61 用 et un", parts: [ {t:"vingt",p:"[vɛ̃]"}, {t:"et",p:"[e]"}, {t:"un",p:"[œ̃]"} ] },
      { n: 30, fr: "trente", zh: "三十", parts: [ {t:"tren",p:"[tʁɑ̃]"}, {t:"te",p:"[t]"} ] },
      { n: 31, fr: "trente et un", zh: "三十一", parts: [ {t:"trente",p:"[tʁɑ̃t]"}, {t:"et",p:"[e]"}, {t:"un",p:"[œ̃]"} ] },
      { n: 40, fr: "quarante", zh: "四十", parts: [ {t:"qua",p:"[ka]"}, {t:"ran",p:"[ʁɑ̃]"}, {t:"te",p:"[t]"} ] },
      { n: 41, fr: "quarante et un", zh: "四十一", parts: [ {t:"quarante",p:"[ka.ʁɑ̃t]"}, {t:"et",p:"[e]"}, {t:"un",p:"[œ̃]"} ] },
      { n: 50, fr: "cinquante", zh: "五十", parts: [ {t:"cin",p:"[sɛ̃]"}, {t:"quan",p:"[kɑ̃]"}, {t:"te",p:"[t]"} ] },
      { n: 51, fr: "cinquante et un", zh: "五十一", parts: [ {t:"cinquante",p:"[sɛ̃.kɑ̃t]"}, {t:"et",p:"[e]"}, {t:"un",p:"[œ̃]"} ] },
      { n: 60, fr: "soixante", zh: "六十", parts: [ {t:"soi",p:"[swa]"}, {t:"xan",p:"[sɑ̃]"}, {t:"te",p:"[t]"} ] },
      { n: 61, fr: "soixante et un", zh: "六十一", parts: [ {t:"soixante",p:"[swa.sɑ̃t]"}, {t:"et",p:"[e]"}, {t:"un",p:"[œ̃]"} ] },
      { n: 70, fr: "soixante-dix", zh: "七十", note: "70-79 = 60 + 10..19", parts: [ {t:"soi",p:"[swa]"}, {t:"xan",p:"[sɑ̃]"}, {t:"te",p:"[t]"}, {t:"-dix",p:"[dis]"} ] },
      { n: 71, fr: "soixante et onze", zh: "七十一", note: "71 = soixante et onze", parts: [ {t:"soixante",p:"[swa.sɑ̃t]"}, {t:"et",p:"[e]"}, {t:"onze",p:"[ɔ̃z]"} ] },
      { n: 80, fr: "quatre-vingts", zh: "八十", note: "80 的 vingt 要加 s", parts: [ {t:"qua",p:"[ka]"}, {t:"tre",p:"[tʁə]"}, {t:"-vingts",p:"[vɛ̃]"} ] },
      { n: 81, fr: "quatre-vingt-un", zh: "八十一", note: "81 不加 et，vingt 也不加 s", parts: [ {t:"quatre",p:"[ka.tʁ]"}, {t:"-vingt",p:"[vɛ̃]"}, {t:"-un",p:"[œ̃]"} ] },
      { n: 90, fr: "quatre-vingt-dix", zh: "九十", note: "90-99 = 80 + 10..19", parts: [ {t:"quatre",p:"[ka.tʁ]"}, {t:"-vingt",p:"[vɛ̃]"}, {t:"-dix",p:"[dis]"} ] },
      { n: 91, fr: "quatre-vingt-onze", zh: "九十一", note: "91 = 80 + 11", parts: [ {t:"quatre",p:"[ka.tʁ]"}, {t:"-vingt",p:"[vɛ̃]"}, {t:"-onze",p:"[ɔ̃z]"} ] },
      { n: 100, fr: "cent", zh: "一百", parts: [ {t:"cent",p:"[sɑ̃]"} ] },
      { n: 1000, fr: "mille", zh: "一千", parts: [ {t:"mil",p:"[mil]"}, {t:"le",p:"[l]"} ] }
    ]
  },
  {
    id: "adjs",
    icon: "✨",
    label: "形容词与副词",
    tip: "形容词阴阳性：一般阳性加 -e 变阴性；以 e 结尾的阴阳同形（jeune / riche）。副词通常不变，多由形容词加 -ment 变来。",
    items: [
      { zh: "大的", m: { fr: "grand", parts: [ {t:"gran",p:"[ɡʁɑ̃]"}, {t:"d",p:""} ] },
                     f: { fr: "grande", parts: [ {t:"gran",p:"[ɡʁɑ̃]"}, {t:"de",p:"[d]"} ] } },
      { zh: "小的", m: { fr: "petit", parts: [ {t:"pe",p:"[pə]"}, {t:"ti",p:"[ti]"}, {t:"t",p:""} ] },
                     f: { fr: "petite", parts: [ {t:"pe",p:"[pə]"}, {t:"ti",p:"[ti]"}, {t:"te",p:"[t]"} ] } },
      { zh: "美丽的", m: { fr: "beau", parts: [ {t:"beau",p:"[bo]"} ] },
                       f: { fr: "belle", parts: [ {t:"bel",p:"[bɛl]"}, {t:"le",p:"[l]"} ] } },
      { zh: "好的", m: { fr: "bon", parts: [ {t:"bon",p:"[bɔ̃]"} ] },
                     f: { fr: "bonne", parts: [ {t:"bo",p:"[bɔ]"}, {t:"nne",p:"[n]"} ] } },
      { zh: "坏的", m: { fr: "mauvais", parts: [ {t:"mau",p:"[mo]"}, {t:"vais",p:"[vɛ]"} ] },
                     f: { fr: "mauvaise", parts: [ {t:"mau",p:"[mo]"}, {t:"vai",p:"[vɛ]"}, {t:"se",p:"[z]"} ] } },
      { zh: "新的", m: { fr: "nouveau", parts: [ {t:"nou",p:"[nu]"}, {t:"veau",p:"[vo]"} ] },
                     f: { fr: "nouvelle", parts: [ {t:"nou",p:"[nu]"}, {t:"vel",p:"[vɛl]"}, {t:"le",p:"[l]"} ] } },
      { zh: "老的；旧的", m: { fr: "vieux", parts: [ {t:"vieux",p:"[vjø]"} ] },
                           f: { fr: "vieille", parts: [ {t:"vie",p:"[vjɛ]"}, {t:"ille",p:"[j]"} ] } },
      { zh: "年轻的", same: true, m: { fr: "jeune", parts: [ {t:"jeu",p:"[ʒœ]"}, {t:"ne",p:"[n]"} ] },
                                f: { fr: "jeune", parts: [ {t:"jeu",p:"[ʒœ]"}, {t:"ne",p:"[n]"} ] } },
      { zh: "幸福的", m: { fr: "heureux", parts: [ {t:"heu",p:"[ø]"}, {t:"reux",p:"[ʁø]"} ] },
                       f: { fr: "heureuse", parts: [ {t:"heu",p:"[ø]"}, {t:"reu",p:"[ʁø]"}, {t:"se",p:"[z]"} ] } },
      { zh: "长的", m: { fr: "long", parts: [ {t:"lon",p:"[lɔ̃]"}, {t:"g",p:""} ] },
                     f: { fr: "longue", parts: [ {t:"lon",p:"[lɔ̃]"}, {t:"gu",p:"[ɡ]"} ] } },
      { zh: "富有的", same: true, m: { fr: "riche", parts: [ {t:"ri",p:"[ʁi]"}, {t:"che",p:"[ʃ]"} ] },
                                  f: { fr: "riche", parts: [ {t:"ri",p:"[ʁi]"}, {t:"che",p:"[ʃ]"} ] } },
      { zh: "高兴的", m: { fr: "content", parts: [ {t:"con",p:"[kɔ̃]"}, {t:"ten",p:"[tɑ̃]"}, {t:"t",p:""} ] },
                       f: { fr: "contente", parts: [ {t:"con",p:"[kɔ̃]"}, {t:"ten",p:"[tɑ̃]"}, {t:"te",p:"[t]"} ] } },
      { zh: "累的", m: { fr: "fatigué", parts: [ {t:"fa",p:"[fa]"}, {t:"ti",p:"[ti]"}, {t:"gué",p:"[ɡe]"} ] },
                     f: { fr: "fatiguée", parts: [ {t:"fa",p:"[fa]"}, {t:"ti",p:"[ti]"}, {t:"gué",p:"[ɡe]"} ], note: "阴性只加 e，读音不变" } },
      { zh: "快地（副）", adv: true, w: { fr: "vite", parts: [ {t:"vi",p:"[vi]"}, {t:"te",p:"[t]"} ] } },
      { zh: "好地（副）", adv: true, w: { fr: "bien", parts: [ {t:"bien",p:"[bjɛ̃]"} ] } },
      { zh: "坏地（副）", adv: true, w: { fr: "mal", parts: [ {t:"mal",p:"[mal]"} ] } },
      { zh: "经常（副）", adv: true, w: { fr: "souvent", parts: [ {t:"sou",p:"[su]"}, {t:"vent",p:"[vɑ̃]"} ] } },
      { zh: "今天（副）", adv: true, w: { fr: "aujourd'hui", parts: [ {t:"au",p:"[o]"}, {t:"jour",p:"[ʒuʁ]"}, {t:"d'hui",p:"[dɥi]"} ] } }
    ]
  },
  {
    id: "animals",
    icon: "🐾",
    label: "动物",
    tip: "动物名词同样分阴阳性：le chien（公狗）/ la chienne（母狗）。说「一只猫」用 un chat，说「我喜欢猫」用 j'aime les chats（复数带 les）。",
    items: [
      { zh: "猫", a: "an-0",  w: { fr: "le chat", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"chat",p:"[ʃa]"} ] } },
      { zh: "狗", a: "an-1",  w: { fr: "le chien", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"chien",p:"[ʃjɛ̃]"} ] } },
      { zh: "兔子", a: "an-2", w: { fr: "le lapin", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"la",p:"[la]"}, {t:"pin",p:"[pɛ̃]"} ] } },
      { zh: "老鼠", a: "an-3", w: { fr: "la souris", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"sou",p:"[su]"}, {t:"ris",p:"[ʁi]"} ] } },
      { zh: "鸟", a: "an-4",  w: { fr: "l'oiseau", g: "m", parts: [ {t:"l'oi",p:"[lwa]"}, {t:"seau",p:"[zo]"} ] } },
      { zh: "鱼", a: "an-5",  w: { fr: "le poisson", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"pois",p:"[pwa]"}, {t:"son",p:"[sɔ̃]"} ] } },
      { zh: "奶牛", a: "an-6", w: { fr: "la vache", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"va",p:"[va]"}, {t:"che",p:"[ʃ]"} ] } },
      { zh: "马", a: "an-7",  w: { fr: "le cheval", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"che",p:"[ʃə]"}, {t:"val",p:"[val]"} ] } },
      { zh: "鸡", a: "an-8",  w: { fr: "le poulet", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"pou",p:"[pu]"}, {t:"let",p:"[lɛ]"} ] } },
      { zh: "熊", a: "an-9",  w: { fr: "l'ours", g: "m", parts: [ {t:"l'ours",p:"[luʁs]"} ] } },
      { zh: "乌龟", a: "an-10", w: { fr: "la tortue", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"tor",p:"[tɔʁ]"}, {t:"tue",p:"[ty]"} ] } },
      { zh: "鸭子", a: "an-11", w: { fr: "le canard", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"ca",p:"[ka]"}, {t:"nard",p:"[naʁ]"} ] } }
    ]
  },
  {
    id: "food",
    icon: "🍎",
    label: "食物与饮品",
    tip: "表示「一些」用 du（阳性）/ de la（阴性）：du pain 一点面包、de l'eau 一点水。点餐最简单的说法：le pain, s'il vous plaît（请给我面包）。",
    items: [
      { zh: "面包", a: "fo-0",  w: { fr: "le pain", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"pain",p:"[pɛ̃]"} ] } },
      { zh: "牛角包", a: "fo-1", w: { fr: "le croissant", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"croi",p:"[kʁwa]"}, {t:"ssant",p:"[sɑ̃]"} ] } },
      { zh: "奶酪", a: "fo-2", w: { fr: "le fromage", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"fro",p:"[fʁɔ]"}, {t:"mage",p:"[maʒ]"} ] } },
      { zh: "黄油", a: "fo-3", w: { fr: "le beurre", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"beurre",p:"[bœʁ]"} ] } },
      { zh: "牛奶", a: "fo-4", w: { fr: "le lait", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"lait",p:"[lɛ]"} ] } },
      { zh: "水", a: "fo-5",  w: { fr: "l'eau", g: "f", parts: [ {t:"l'eau",p:"[lo]"} ] } },
      { zh: "葡萄酒", a: "fo-6", w: { fr: "le vin", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"vin",p:"[vɛ̃]"} ] } },
      { zh: "苹果", a: "fo-7", w: { fr: "la pomme", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"pomme",p:"[pɔm]"} ] } },
      { zh: "香蕉", a: "fo-8", w: { fr: "la banane", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"ba",p:"[ba]"}, {t:"na",p:"[na]"}, {t:"ne",p:""} ] } },
      { zh: "胡萝卜", a: "fo-9", w: { fr: "la carotte", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"ca",p:"[ka]"}, {t:"rotte",p:"[ʁɔt]"} ] } },
      { zh: "肉", a: "fo-10", w: { fr: "la viande", g: "f", parts: [ {t:"la",p:"[la]"}, {t:"vian",p:"[vjɑ̃]"}, {t:"de",p:""} ] } },
      { zh: "蛋糕", a: "fo-11", w: { fr: "le gâteau", g: "m", parts: [ {t:"le",p:"[lə]"}, {t:"gâ",p:"[ɡɑ]"}, {t:"teau",p:"[to]"} ] } }
    ]
  },
  {
    id: "colors",
    icon: "🎨",
    label: "颜色",
    tip: "颜色是形容词，放在名词后面：une voiture rouge（一辆红色汽车）。常见阴性变化：vert → verte，blanc → blanche；marron 和 orange 阴阳性同形。",
    items: [
      { zh: "红色", a: "co-0", color: "#D9483B", w: { fr: "rouge", parts: [ {t:"rouge",p:"[ʁuʒ]"} ] } },
      { zh: "蓝色", a: "co-1", color: "#3B6ED9", w: { fr: "bleu", parts: [ {t:"bleu",p:"[blø]"} ] } },
      { zh: "绿色", a: "co-2", color: "#4E9E4E", w: { fr: "vert", parts: [ {t:"vert",p:"[vɛʁ]"} ] } },
      { zh: "黄色", a: "co-3", color: "#E3C23C", w: { fr: "jaune", parts: [ {t:"jaune",p:"[ʒon]"} ] } },
      { zh: "黑色", a: "co-4", color: "#3A3934", w: { fr: "noir", parts: [ {t:"noir",p:"[nwaʁ]"} ] } },
      { zh: "白色", a: "co-5", color: "#F5F2EA", w: { fr: "blanc", parts: [ {t:"blanc",p:"[blɑ̃]"} ] } },
      { zh: "橙色", a: "co-6", color: "#E38B3C", w: { fr: "orange", parts: [ {t:"orange",p:"[ɔʁɑ̃ʒ]"} ] } },
      { zh: "粉色", a: "co-7", color: "#E88BA6", w: { fr: "rose", parts: [ {t:"rose",p:"[ʁoz]"} ] } },
      { zh: "紫色", a: "co-8", color: "#8E5B8E", w: { fr: "violet", parts: [ {t:"vio",p:"[vjɔ]"}, {t:"let",p:"[lɛ]"} ] } },
      { zh: "棕色", a: "co-9", color: "#8A5A3B", w: { fr: "marron", parts: [ {t:"mar",p:"[ma]"}, {t:"ron",p:"[ʁɔ̃]"} ] } }
    ]
  },
  {
    id: "time",
    icon: "📅",
    label: "时间与天气",
    tip: "法语里星期和月份的首字母不大写（lundi, avril）。问「几点了」说 Quelle heure est-il ?；聊天气用 il fait...：il fait beau（天气好）、il fait chaud（很热）。",
    items: [
      { zh: "星期一", a: "tm-0",  w: { fr: "lundi", parts: [ {t:"lun",p:"[lœ̃]"}, {t:"di",p:"[di]"} ] } },
      { zh: "星期日", a: "tm-1",  w: { fr: "dimanche", parts: [ {t:"di",p:"[di]"}, {t:"man",p:"[mɑ̃]"}, {t:"che",p:"[ʃ]"} ] } },
      { zh: "早上", a: "tm-2",  w: { fr: "le matin", parts: [ {t:"le",p:"[lə]"}, {t:"ma",p:"[ma]"}, {t:"tin",p:"[tɛ̃]"} ] } },
      { zh: "晚上", a: "tm-3",  w: { fr: "le soir", parts: [ {t:"le",p:"[lə]"}, {t:"soir",p:"[swaʁ]"} ] } },
      { zh: "春天", a: "tm-4",  w: { fr: "le printemps", parts: [ {t:"le",p:"[lə]"}, {t:"prin",p:"[pʁɛ̃]"}, {t:"temps",p:"[tɑ̃]"} ] } },
      { zh: "夏天", a: "tm-5",  w: { fr: "l'été", parts: [ {t:"l'é",p:"[le]"}, {t:"té",p:"[te]"} ] } },
      { zh: "秋天", a: "tm-6",  w: { fr: "l'automne", parts: [ {t:"l'au",p:"[lo]"}, {t:"tomne",p:"[tɔn]"} ] } },
      { zh: "冬天", a: "tm-7",  w: { fr: "l'hiver", parts: [ {t:"l'hi",p:"[li]"}, {t:"ver",p:"[vɛʁ]"} ] } },
      { zh: "太阳；晴天", a: "tm-8", w: { fr: "le soleil", parts: [ {t:"le",p:"[lə]"}, {t:"so",p:"[sɔ]"}, {t:"leil",p:"[lɛj]"} ] } },
      { zh: "雨", a: "tm-9",  w: { fr: "la pluie", parts: [ {t:"la",p:"[la]"}, {t:"pluie",p:"[plɥi]"} ] } },
      { zh: "风", a: "tm-10", w: { fr: "le vent", parts: [ {t:"le",p:"[lə]"}, {t:"vent",p:"[vɑ̃]"} ] } },
      { zh: "雪", a: "tm-11", w: { fr: "la neige", parts: [ {t:"la",p:"[la]"}, {t:"nei",p:"[nɛ]"}, {t:"ge",p:"[ʒ]"} ] } }
    ]
  }
];

/* ---------- 法语数字 0-99 / 100 / 1000 构词 ---------- */
function frenchNumber(n) {
  const U = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf",
             "dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
  if (n < 20) return U[n];
  if (n === 100) return "cent";
  if (n === 1000) return "mille";
  const t = Math.floor(n / 10), r = n % 10;
  const T = ["","","vingt","trente","quarante","cinquante","soixante"];
  if (t === 7) {                                   // 70-79 = soixante-dix .. soixante-dix-neuf
    if (r === 0) return "soixante-dix";
    if (r === 1) return "soixante et onze";
    return "soixante-" + U[10 + r];
  }
  if (t === 8) {                                   // 80-89 = quatre-vingts ..
    if (r === 0) return "quatre-vingts";
    return "quatre-vingt-" + U[r];
  }
  if (t === 9) {                                   // 90-99 = quatre-vingt-dix ..
    if (r === 0) return "quatre-vingt-dix";
    return "quatre-vingt-" + U[10 + r];
  }
  if (r === 0) return T[t];                        // 20 30 40 50 60
  if (r === 1) return T[t] + " et un";             // 21 31 41 51 61
  return T[t] + "-" + U[r];
}

if (typeof window !== "undefined") {
  window.__WORD_CATS = WORD_CATS;
  window.__FRENCH_NUMBER = frenchNumber;
}
