/* =========================================================
   📚 《你好！法语 1》Unité 5 · Leçons 17–20（增量数据）
   依赖：textbook-data.js 先加载；用法同 textbook-u3.js / u4.js
   ========================================================= */

/* 防重复加载 */
if (TB_UNITS.every(u => u.n !== 5)){
  TB_UNITS.push({ n: 5, title: "Unité 5 · La vie est belle ! 美好生活", lessons: ["tb-l17", "tb-l18", "tb-l19", "tb-l20"] });
}

Object.assign(TB_LESSONS, {
  /* ————— Leçon 17 ————— */
  "tb-l17": {
    "unit": 5,
    "no": "Leçon 17",
    "title": "On fait des crêpes ? 咱们做可丽饼吧？",
    "text": [
      {
        "fr": "— C'est la Chandeleur. On fait des crêpes, ce soir ?",
        "zh": "今天是圣蜡节。今晚我们做可丽饼吗？"
      },
      {
        "fr": "— D'accord, mais tu fais les courses.",
        "zh": "好啊，不过你负责去采购。"
      },
      {
        "fr": "— Et toi, tu fais les crêpes, alors.",
        "zh": "那你来做可丽饼咯。"
      },
      {
        "fr": "— Oui, bien sûr. On invite Max et Sarah ?",
        "zh": "对，当然。我们邀请马克斯和萨拉吗？"
      },
      {
        "fr": "— Ah, oui ! Bon. Il faut de la farine et des œufs, c'est ça ?",
        "zh": "啊，对！好。需要面粉和鸡蛋，是吗？"
      },
      {
        "fr": "— Hum, hum.",
        "zh": "嗯，嗯。"
      },
      {
        "fr": "— Combien de kilos de farine ?",
        "zh": "要几公斤面粉？"
      },
      {
        "fr": "— Un kilo de farine et six œufs. Achète aussi un litre de lait et 250 grammes de beurre.",
        "zh": "一公斤面粉和六个鸡蛋。再买一升牛奶和 250 克黄油。"
      },
      {
        "fr": "— C'est tout ?",
        "zh": "就这些吗？"
      },
      {
        "fr": "— Non, prends du sucre et de la confiture. Et du cidre.",
        "zh": "不，还要买糖和果酱。还有苹果酒。"
      },
      {
        "fr": "— Deux bouteilles, c'est assez ?",
        "zh": "两瓶够吗？"
      },
      {
        "fr": "— Oui, ça va. Et achète aussi de l'eau minérale, du Coca et des céréales...",
        "zh": "够，行。另外再买矿泉水、可乐和麦片……"
      },
      {
        "fr": "— Des céréales ? Pour faire des crêpes !",
        "zh": "麦片？做可丽饼用吗！"
      },
      {
        "fr": "— Non, pour le petit déjeuner.",
        "zh": "不，是当早餐吃的。"
      },
      {
        "fr": "— Ah ! Tu téléphones à Max et Sarah ?",
        "zh": "啊！你给马克斯和萨拉打电话吗？"
      },
      {
        "fr": "— D'accord.",
        "zh": "好的。"
      },
      {
        "fr": "— Bon. J'y vais.",
        "zh": "好，我去了。"
      }
    ],
    "vocab": [
      {
        "fr": "acheter",
        "pos": "v.t.",
        "zh": "买"
      },
      {
        "fr": "assez",
        "pos": "adv.",
        "zh": "足够地"
      },
      {
        "fr": "beurre",
        "pos": "n.m.",
        "g": "m",
        "zh": "黄油"
      },
      {
        "fr": "boire",
        "pos": "v.t.",
        "zh": "喝"
      },
      {
        "fr": "bouteille",
        "pos": "n.f.",
        "g": "f",
        "zh": "瓶子"
      },
      {
        "fr": "Chandeleur",
        "pos": "n.f.",
        "g": "f",
        "zh": "圣蜡节（天主教节日）"
      },
      {
        "fr": "cidre",
        "pos": "n.m.",
        "g": "m",
        "zh": "苹果酒"
      },
      {
        "fr": "coca",
        "pos": "n.m.",
        "g": "m",
        "zh": "可乐"
      },
      {
        "fr": "confiture",
        "pos": "n.f.",
        "g": "f",
        "zh": "果酱"
      },
      {
        "fr": "crêpe",
        "pos": "n.f.",
        "g": "f",
        "zh": "可丽饼（一种以鸡蛋、面粉为原料的油煎薄饼）"
      },
      {
        "fr": "dîner",
        "pos": "n.m.",
        "g": "m",
        "zh": "晚餐；v.i. 吃晚餐"
      },
      {
        "fr": "eau",
        "pos": "n.f.",
        "g": "f",
        "zh": "水"
      },
      {
        "fr": "il faut",
        "pos": "v.impers.",
        "zh": "需要；必须，应该，应当（原形动词为 falloir）"
      },
      {
        "fr": "farine",
        "pos": "n.f.",
        "g": "f",
        "zh": "面粉"
      },
      {
        "fr": "fromage",
        "pos": "n.m.",
        "g": "m",
        "zh": "奶酪"
      },
      {
        "fr": "gramme",
        "pos": "n.m.",
        "g": "m",
        "zh": "克"
      },
      {
        "fr": "inviter",
        "pos": "v.t.",
        "zh": "邀请"
      },
      {
        "fr": "kilo",
        "pos": "n.m.",
        "g": "m",
        "zh": "公斤，千克（kilogramme 的缩写）"
      },
      {
        "fr": "lait",
        "pos": "n.m.",
        "g": "m",
        "zh": "牛奶"
      },
      {
        "fr": "légumes",
        "pos": "n.m.pl.",
        "g": "m",
        "zh": "蔬菜"
      },
      {
        "fr": "liste",
        "pos": "n.f.",
        "g": "f",
        "zh": "单子，清单"
      },
      {
        "fr": "livre",
        "pos": "n.f.",
        "g": "f",
        "zh": "半公斤；磅"
      },
      {
        "fr": "litre",
        "pos": "n.m.",
        "g": "m",
        "zh": "升"
      },
      {
        "fr": "minéral(e)",
        "pos": "adj.",
        "zh": "矿物质的；含矿物质的"
      },
      {
        "fr": "eau minérale",
        "pos": "loc.n.f.",
        "g": "f",
        "zh": "矿泉水"
      },
      {
        "fr": "œuf",
        "pos": "n.m.",
        "g": "m",
        "zh": "鸡蛋（pl. œufs）"
      },
      {
        "fr": "pain",
        "pos": "n.m.",
        "g": "m",
        "zh": "面包"
      },
      {
        "fr": "poisson",
        "pos": "n.m.",
        "g": "m",
        "zh": "鱼"
      },
      {
        "fr": "pomme",
        "pos": "n.f.",
        "g": "f",
        "zh": "苹果"
      },
      {
        "fr": "pomme de terre",
        "pos": "loc.n.f.",
        "g": "f",
        "zh": "土豆"
      },
      {
        "fr": "repas",
        "pos": "n.m.",
        "g": "m",
        "zh": "餐；进餐"
      },
      {
        "fr": "riz",
        "pos": "n.m.",
        "g": "m",
        "zh": "大米；米饭"
      },
      {
        "fr": "salade",
        "pos": "n.f.",
        "g": "f",
        "zh": "凉拌生菜；生菜；沙拉"
      },
      {
        "fr": "sucre",
        "pos": "n.m.",
        "g": "m",
        "zh": "糖"
      },
      {
        "fr": "supermarché",
        "pos": "n.m.",
        "g": "m",
        "zh": "超市"
      },
      {
        "fr": "téléphoner",
        "pos": "v.i.",
        "zh": "打电话"
      },
      {
        "fr": "téléphoner à qn",
        "pos": "loc.v.",
        "zh": "给某人打电话"
      },
      {
        "fr": "tout",
        "pos": "n.m.sing.",
        "g": "m",
        "zh": "全部，一切，整体，全体"
      },
      {
        "fr": "viande",
        "pos": "n.f.",
        "g": "f",
        "zh": "肉"
      },
      {
        "fr": "vin",
        "pos": "n.m.",
        "g": "m",
        "zh": "葡萄酒"
      }
    ],
    "grammar": [
      {
        "t": "部分冠词 l'article partitif",
        "d": "部分冠词表示「整体中一部分不确定的数量」，由介词 <b>de<\/b> 与定冠词组合而成：<br><b>du<\/b>（de + le）→ 单数阳性名词：du pain, du sucre, du cidre；<br><b>de la<\/b> → 单数阴性名词：de la farine, de la confiture, de la viande；<br><b>de l'<\/b> → 元音或哑音 h 开头的阴、阳性单数名词：de l'eau, de l'œuf；<br><b>des<\/b> → 复数名词：des œufs, des légumes, des céréales。<br>例：Achète de l'eau, du sucre, de la farine et des légumes. 买矿泉水、糖、面粉和蔬菜。On mange de la viande avec du vin rouge. 吃肉时喝红葡萄酒。"
      },
      {
        "t": "部分冠词的否定与代换",
        "d": "否定句中，部分冠词 du / de la / des 一律改为 <b>de (d')<\/b>，表示「零数量」：<br>Je bois du café, je ne bois pas <b>de<\/b> thé. 我喝咖啡，不喝茶。Il ne prend pas <b>de<\/b> fromage le matin. 他早上不吃奶酪。<br>若名词表示总体概念、分类列举或特指，则用定冠词、不定冠词、主有形容词或指示形容词，而非部分冠词：<br>Elle aime bien <b>le<\/b> café. 她很喜欢咖啡。Le bordeaux est <b>un<\/b> vin excellent. 波尔多是一种很好的葡萄酒。<br>— Voulez-vous du pain ? 您要面包吗？— Oui, mais je ne veux pas <b>ce<\/b> pain-là. 要，但不要这种面包。Je prends <b>mon<\/b> petit-déjeuner à 7 heures. 我七点吃早饭。"
      },
      {
        "t": "动词 boire / acheter / manger 的现在时",
        "d": "<b>boire<\/b>：je bois / tu bois / il, elle <b>boit<\/b> / nous <b>buvons<\/b> / vous buvez / ils, elles <b>boivent<\/b>。<br><b>acheter<\/b>：j'achète / tu achètes / il, elle achète / nous achetons / vous achetez / ils, elles achètent。<br><b>manger<\/b>：je mange / tu manges / il, elle mange / nous <b>mangeons<\/b> / vous mangez / ils, elles mangent。<br>注意 nous 形式的特殊拼写：buvons、mangeons（保留 e 以保持读音）。"
      },
      {
        "t": "询问与表述数量 combien de",
        "d": "「多少……」用疑问词组 <b>combien de<\/b> + 不带冠词的名词：<br><b>Combien de kilos de farine<\/b> faut-il ? 需要几公斤面粉？— Un kilo. 一公斤。<br>Combien de filles a-t-il dans votre classe ? 你们班上有几个女生？— Il y a 5 filles. 有五个。<br>计量单位：<b>un gramme<\/b> 一克、<b>une livre<\/b> 半公斤（500 克）、<b>un kilo<\/b> 一公斤（1000 克）、<b>un litre<\/b> 一升、<b>une bouteille de<\/b> 一瓶。<br>例：Deux bouteilles, c'est assez ? 两瓶够吗？Prends une bouteille d'eau minérale et un litre de lait. 拿一瓶矿泉水和一升牛奶。"
      }
    ],
    "say": [
      {
        "title": "Demander et exprimer des besoins 询问和表述需求",
        "items": [
          {
            "fr": "Qu'est-ce qu'il faut ? — Il faut de la confiture.",
            "zh": "需要什么？——需要果酱。"
          },
          {
            "fr": "Il faut de la farine et des œufs, c'est ça ?",
            "zh": "需要面粉和鸡蛋，对吧？"
          }
        ]
      },
      {
        "title": "S'informer sur des habitudes 询问他人的习惯",
        "items": [
          {
            "fr": "Qu'est-ce que tu prends au petit déjeuner ? — Je prends du café au lait.",
            "zh": "你早饭吃什么？——我喝牛奶咖啡。"
          },
          {
            "fr": "Qu'est-ce que tu bois ? — De l'eau, s'il te plaît.",
            "zh": "你喝什么？——请给我水。"
          }
        ]
      },
      {
        "title": "Indiquer des quantités 表述数量",
        "items": [
          {
            "fr": "Combien de kilos de farine ? — Un kilo.",
            "zh": "几公斤面粉？——一公斤。"
          },
          {
            "fr": "Prends une bouteille d'eau minérale et un litre de lait.",
            "zh": "买一瓶矿泉水和一升牛奶。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 18 ————— */
  "tb-l18": {
    "unit": 5,
    "no": "Leçon 18",
    "title": "Il est comment ? 它是什么样的？",
    "text": [
      {
        "fr": "— Alors, Fabien, qu'est-ce que tu as fait hier ?",
        "zh": "那么，法比安，你昨天做什么了？"
      },
      {
        "fr": "— Eh bien, j'ai fait les magasins.",
        "zh": "嗯，我逛商店去了。"
      },
      {
        "fr": "— Non ! Toi ?",
        "zh": "不会吧！你？"
      },
      {
        "fr": "— Oui, oui. C'est pour le ski. Je pars à Val d'Isère dimanche.",
        "zh": "是真的，真的。是为了滑雪。我周日去瓦尔迪泽尔。"
      },
      {
        "fr": "— Et qu'est-ce que tu as acheté, alors ?",
        "zh": "那你买了什么？"
      },
      {
        "fr": "— Eh bien, j'ai acheté ces chaussures.",
        "zh": "嗯，我买了这双鞋。"
      },
      {
        "fr": "— Waouh ! Elles sont très jolies !",
        "zh": "哇！真漂亮！"
      },
      {
        "fr": "— Ouais, bon... Ce sont des chaussures de ski, c'est tout !... J'ai aussi pris un pull.",
        "zh": "嗯，还行……就是滑雪鞋而已！……我还买了一件毛衣。"
      },
      {
        "fr": "— Il est comment ton pull ?",
        "zh": "你的毛衣是什么样的？"
      },
      {
        "fr": "— Tiens, regarde.",
        "zh": "喏，你看。"
      },
      {
        "fr": "— Ah oui, c'est un beau pull !",
        "zh": "啊，是件漂亮的毛衣！"
      },
      {
        "fr": "— Hum, hum... Il est très chaud.",
        "zh": "嗯，嗯……很保暖。"
      },
      {
        "fr": "— Et hier soir, qu'est-ce que tu as fait ?",
        "zh": "那昨晚你做什么了？"
      },
      {
        "fr": "— J'ai dîné dans un petit restaurant italien à côté de chez moi, avec ma sœur.",
        "zh": "我和姐姐在我家旁边一家小意大利餐馆吃了晚饭。"
      },
      {
        "fr": "— Il est bien, ce restaurant ?",
        "zh": "那家餐馆怎么样？"
      },
      {
        "fr": "— Très bien. Il est simple, mais la cuisine est bonne. Ma sœur a pris des pâtes et, moi, j'ai mangé une pizza.",
        "zh": "很好。很朴素，但菜做得不错。姐姐点了面条，我吃了披萨。"
      },
      {
        "fr": "— Et pour le dessert ?",
        "zh": "那甜点呢？"
      },
      {
        "fr": "— Nous n'avons pas pris de dessert.",
        "zh": "我们没吃甜点。"
      },
      {
        "fr": "— Et bien, moi, j'ai travaillé toute la journée et j'ai dîné seul !",
        "zh": "唉，我呢，工作了一整天，还是一个人吃的晚饭！"
      }
    ],
    "vocab": [
      {
        "fr": "beau",
        "pos": "adj.",
        "zh": "美丽的，漂亮的；优美的"
      },
      {
        "fr": "cadeau (pl. cadeaux)",
        "pos": "n.m.",
        "g": "m",
        "zh": "礼物"
      },
      {
        "fr": "chaud(e)",
        "pos": "adj.",
        "zh": "热的，暖的，烫的；暖和的，保暖的"
      },
      {
        "fr": "dessert",
        "pos": "n.m.",
        "g": "m",
        "zh": "甜点"
      },
      {
        "fr": "excellent(e)",
        "pos": "adj.",
        "zh": "特别好的"
      },
      {
        "fr": "hier",
        "pos": "adv.",
        "zh": "昨天"
      },
      {
        "fr": "inspecteur(trice)",
        "pos": "n.",
        "zh": "检察员，视察员"
      },
      {
        "fr": "inspecteur de police",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "便衣警察"
      },
      {
        "fr": "magasin",
        "pos": "n.m.",
        "g": "m",
        "zh": "商店"
      },
      {
        "fr": "maison",
        "pos": "n.f.",
        "g": "f",
        "zh": "房子；家"
      },
      {
        "fr": "ouais",
        "pos": "interj.",
        "zh": "（俗）哦，嗯"
      },
      {
        "fr": "pâtes",
        "pos": "n.f.pl.",
        "g": "f",
        "zh": "面条"
      },
      {
        "fr": "pizza",
        "pos": "n.f.",
        "g": "f",
        "zh": "比萨饼"
      },
      {
        "fr": "seul(e)",
        "pos": "adj.",
        "zh": "单独的，独自的；孤单的"
      },
      {
        "fr": "tout(e)",
        "pos": "adj.indéf.sing.",
        "zh": "整个的，全部的"
      },
      {
        "fr": "tout",
        "pos": "pron.indéf.sing.",
        "zh": "一切，所有事物"
      },
      {
        "fr": "waouh",
        "pos": "interj.",
        "zh": "哇！（表示惊叹、赞美）"
      }
    ],
    "grammar": [
      {
        "t": "复合过去时 (1) Le passé composé (1)：avoir + 过去分词",
        "d": "表示过去某个确定时间内发生并已结束的动作或事实，并与现在有某种联系。<br>构成：助动词 <b>avoir<\/b>（直陈式现在时）+ 谓语动词的<b>过去分词<\/b>。<br>j'<b>ai<\/b> / tu <b>as<\/b> / il, elle <b>a<\/b> / nous <b>avons<\/b> / vous <b>avez<\/b> / ils, elles <b>ont<\/b> + acheté, fait, pris...<br>所有及物动词和大部分不及物动词都用 avoir 作助动词：J'<b>ai acheté<\/b> ces chaussures. 我买了这双鞋。<br>否定句中 <b>ne...pas<\/b> 分置助动词前后：Ils <b>n'ont pas<\/b> parlé. 他们没有交谈。Je <b>n'ai pas pris<\/b> de dessert. 我没吃甜点。<br>副词（aussi, toujours, beaucoup, bien 等）须放在助动词与过去分词之间：J'<b>ai beaucoup travaillé<\/b> ce week-end. 这周末我做了很多工作。Tu <b>as bien mangé<\/b> ? 你吃得好吗？"
      },
      {
        "t": "过去分词 Le participe passé",
        "d": "第一组规则动词（-er）：去掉词尾 <b>-er<\/b> 加 <b>-é<\/b>：dîner → dîné、manger → mangé、acheter → acheté。<br>第二组规则动词（-ir）：去掉词尾 <b>-ir<\/b> 加 <b>-i<\/b>：finir → fini、choisir → choisi。<br>不规则动词需单独记忆：<b>avoir → eu<\/b>、<b>être → été<\/b>、<b>faire → fait<\/b>、dormir → dormi、sortir → sorti、<b>prendre → pris<\/b>、boire → bu、lire → lu、vendre → vendu、voir → vu、vivre → vécu。<br>注意：aller → <b>allé<\/b>（虽以 -er 结尾但拼写特殊）。"
      },
      {
        "t": "形容词 beau 的性数配合 L'accord de l'adjectif beau",
        "d": "阳性单数：<b>un beau pull<\/b>（一件漂亮毛衣）、<b>un bel ami<\/b>、<b>un bel homme<\/b>；阴性单数：<b>une belle maison<\/b>、<b>une belle fille<\/b>。<br>阳性复数：<b>de beaux vêtements / de beaux appartements / de beaux hôtels<\/b>；阴性复数：<b>de belles fleurs / de belles chaussures<\/b>。<br>要点：beau 有两种阳性单数形式，<b>bel<\/b> 用于以元音或哑音 h 开头的阳性单数名词前；形容词位于复数名词前时，名词前的 <b>un/une/des 要改为 de<\/b>。<br>例：C'est <b>un beau<\/b> pull ! / Tes chaussures sont très <b>jolies<\/b>. / Elles ont coûté <b>de belles<\/b> chaussures."
      }
    ],
    "say": [
      {
        "title": "Rapporter des événements passés 复述过去发生的事件",
        "items": [
          {
            "fr": "J'ai fait les magasins.",
            "zh": "我逛商店去了。"
          },
          {
            "fr": "Qu'est-ce que tu as acheté ? — J'ai acheté ces chaussures.",
            "zh": "你买了什么？——我买了这双鞋。"
          },
          {
            "fr": "Nous n'avons pas pris de dessert.",
            "zh": "我们没有吃甜点。"
          }
        ]
      },
      {
        "title": "Exprimer une opinion 表达观点看法",
        "items": [
          {
            "fr": "Ce restaurant est très bien. La cuisine est bonne.",
            "zh": "这家餐馆很好。菜做得不错。"
          },
          {
            "fr": "C'est un beau pull.",
            "zh": "这是件漂亮的毛衣。"
          },
          {
            "fr": "Tes chaussures sont très jolies.",
            "zh": "你的鞋真漂亮。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 19 ————— */
  "tb-l19": {
    "unit": 5,
    "no": "Leçon 19",
    "title": "Chère Léa... 亲爱的蕾娅……",
    "text": [
      {
        "fr": "Chère Léa,",
        "zh": "亲爱的蕾娅："
      },
      {
        "fr": "Étienne et moi, nous sommes à Barcelone pour le week-end, chez Alicia.",
        "zh": "我和艾蒂安周末在巴塞罗那，住在阿丽西亚家。"
      },
      {
        "fr": "Nous sommes arrivés vendredi en avion.",
        "zh": "我们周五坐飞机到的。"
      },
      {
        "fr": "Samedi, Alicia et moi, nous sommes allées faire des courses.",
        "zh": "周六，我和阿丽西亚去购物了。"
      },
      {
        "fr": "Nous avons marché toute la journée.",
        "zh": "我们逛了一整天。"
      },
      {
        "fr": "Le soir, nous sommes allés au restaurant tous les trois et nous sommes rentrés à deux heures du matin.",
        "zh": "晚上我们三个人一起去了餐馆，凌晨两点才回来。"
      },
      {
        "fr": "Nous avons passé une excellente soirée !",
        "zh": "我们度过了一个非常棒的夜晚！"
      },
      {
        "fr": "Ce matin, nous avons visité le musée Picasso et, cet après-midi, nous sommes allés au parc Güell.",
        "zh": "今天上午我们参观了毕加索博物馆，下午去了古埃尔公园。"
      },
      {
        "fr": "C'est magnifique !",
        "zh": "太美了！"
      },
      {
        "fr": "Nous rentrons dans deux jours.",
        "zh": "我们两天后回去。"
      },
      {
        "fr": "À bientôt. Bisous,",
        "zh": "回头见。亲你，"
      },
      {
        "fr": "Mathilde",
        "zh": "玛蒂尔德"
      }
    ],
    "vocab": [
      {
        "fr": "année",
        "pos": "n.f.",
        "g": "f",
        "zh": "年"
      },
      {
        "fr": "Barcelone",
        "pos": "n.pr.",
        "zh": "巴塞罗那（西班牙）"
      },
      {
        "fr": "Bordeaux",
        "pos": "n.pr.",
        "zh": "波尔多（法国）"
      },
      {
        "fr": "bisou",
        "pos": "n.m.",
        "g": "m",
        "zh": "（俗）（在脸颊上的）亲吻"
      },
      {
        "fr": "descendre",
        "pos": "v.i.",
        "zh": "下来"
      },
      {
        "fr": "fois",
        "pos": "n.f.",
        "g": "f",
        "zh": "次"
      },
      {
        "fr": "là-bas",
        "pos": "adv.",
        "zh": "那里，那边"
      },
      {
        "fr": "magnifique",
        "pos": "adj.",
        "zh": "壮丽的；豪华的；极美的，极好的；非凡的"
      },
      {
        "fr": "marcher",
        "pos": "v.i.",
        "zh": "走；行走"
      },
      {
        "fr": "minute",
        "pos": "n.f.",
        "g": "f",
        "zh": "分钟"
      },
      {
        "fr": "monter",
        "pos": "v.i.",
        "zh": "登上，上升"
      },
      {
        "fr": "parc",
        "pos": "n.m.",
        "g": "m",
        "zh": "公园"
      },
      {
        "fr": "république",
        "pos": "n.f.",
        "g": "f",
        "zh": "共和国"
      },
      {
        "fr": "rester",
        "pos": "v.i.",
        "zh": "停留，逗留"
      },
      {
        "fr": "revenir",
        "pos": "v.i.",
        "zh": "回来"
      },
      {
        "fr": "soirée",
        "pos": "n.f.",
        "g": "f",
        "zh": "夜晚"
      },
      {
        "fr": "tomber",
        "pos": "v.i.",
        "zh": "跌落，落下来"
      },
      {
        "fr": "venir",
        "pos": "v.i.",
        "zh": "来"
      }
    ],
    "grammar": [
      {
        "t": "复合过去时 (2) Le passé composé (2)：être + 过去分词",
        "d": "第 18 课讲的是以 avoir 为助动词的动词，本课涉及以 <b>être<\/b> 为助动词的动词。这类动词多为表示趋向性的不及物动词：<br><b>aller / venir<\/b> → allé(e) / venu(e)；<b>entrer / sortir<\/b> → entré(e) / sorti(e)；<b>arriver / partir<\/b> → arrivé(e) / parti(e)；<b>monter / descendre<\/b> → monté(e) / descendu(e)；<b>naître / mourir<\/b>（出生／死亡）→ né(e) / mort(e)；<b>rester<\/b> → resté(e)；<b>tomber<\/b> → tombé(e)；<b>devenir<\/b>（变成，成为）→ devenu(e)。<br>以 être 作助动词时，过去分词必须<b>与主语性数一致<\/b>（规则同形容词）：<br>Elle est arriv<b>ée<\/b> vendredi. 她周五到的。Mathilde et Alicia sont all<b>ées<\/b> faire des courses. 玛蒂尔德和阿丽西亚购物去了。Sophie et Étienne sont all<b>és<\/b> au restaurant. 索菲和艾蒂安去了饭店。"
      },
      {
        "t": "副代词 y 在复合过去时中的位置",
        "d": "副代词 <b>y<\/b> 代替地点状语，一般位于相关动词之前；若动词使用复合过去时，<b>y 要放在助动词 être 或 avoir 之前<\/b>。<br>C'est un très bon restaurant. On <b>y est allé<\/b> deux fois. 这家餐馆很不错，我们去过两次。<br>— Vous êtes allés chez elle ? 你们去过她家吗？— Non, on <b>n'y est pas allé<\/b>. 没，我们还没去。<br>Paris ? J'<b>y ai vécu<\/b> plusieurs années. 巴黎？我在那儿生活了好几年。"
      },
      {
        "t": "pour 或 dans + 一段时间",
        "d": "<b>pour + 一段时间<\/b>：表示动作发生以后预计其进程、结果或影响持续的时间。<br>— Ils sont partis <b>pour<\/b> combien de temps ? 他们要离开多久？— Pour trois mois. 三个月。<br><b>dans + 一段时间<\/b>：表示动作将在这段时间<b>之后<\/b>发生。<br>— Ils rentrent quand / <b>dans<\/b> combien de temps ? 他们多久以后回来？— Dans une semaine. 一周以后。<br>本课：Nous rentrons <b>dans deux jours<\/b>. 我们两天后回去。"
      }
    ],
    "say": [
      {
        "title": "Parler d'événements passés 谈论已经过去的事件",
        "items": [
          {
            "fr": "Nous sommes arrivés vendredi soir.",
            "zh": "我们周五晚上到的。"
          },
          {
            "fr": "Ils sont rentrés hier.",
            "zh": "他们昨天回来了。"
          },
          {
            "fr": "Nous avons passé une excellente soirée !",
            "zh": "我们度过了一个非常棒的夜晚！"
          }
        ]
      },
      {
        "title": "Interroger sur le moment et la durée 询问时点和时长",
        "items": [
          {
            "fr": "Ils sont arrivés quand ? — Aujourd'hui. La semaine dernière. Le mois dernier.",
            "zh": "他们什么时候到的？——今天。上周。上个月。"
          },
          {
            "fr": "Tu es restée combien de temps ? — Cinq jours.",
            "zh": "你待了多久？——五天。"
          },
          {
            "fr": "Ils sont partis pour combien de temps ? — Pour deux jours.",
            "zh": "他们要离开多久？——两天。"
          },
          {
            "fr": "Tu reviens quand ? — Dans une semaine.",
            "zh": "你什么时候回来？——一周后。"
          }
        ]
      }
    ]
  },

  /* ————— Leçon 20 ————— */
  "tb-l20": {
    "unit": 5,
    "no": "Leçon 20",
    "title": "Les fêtes 节日",
    "text": [
      {
        "fr": "Pour le 14 juillet, la Saint-Valentin ou pour Noël, qu'est-ce que vous faites ?",
        "zh": "7 月 14 日国庆日、情人节或圣诞节，你们都做些什么？"
      },
      {
        "fr": "La fête avec des amis ou un dîner à deux ?",
        "zh": "和朋友一起庆祝，还是两人共进晚餐？"
      },
      {
        "fr": "Le Nouveau Magazine a fait son enquête.",
        "zh": "《新杂志》做了一次调查。"
      },
      {
        "fr": "a. « Pour le 14 juillet, cette année, je suis allée à Paris, avec deux copines de la fac.",
        "zh": "a.「今年 7 月 14 日国庆日，我和大学里的两个女同学一起去了巴黎。"
      },
      {
        "fr": "Nous avons vu le feu d'artifice à côté de l'Arc de triomphe et ensuite nous sommes allées dans une boîte sur les Champs-Élysées.",
        "zh": "我们在凯旋门旁边看了焰火，然后去了香榭丽舍大街的一家夜店。"
      },
      {
        "fr": "Et on a fait la fête toute la nuit. »",
        "zh": "我们狂欢了一整夜。」"
      },
      {
        "fr": "b. « À Noël, l'année dernière, avec mon mari, nous sommes allés une semaine à Vienne pour fêter nos vingt ans de mariage.",
        "zh": "b.「去年圣诞节，我和丈夫去维也纳待了一周，庆祝我们结婚二十周年。"
      },
      {
        "fr": "Nous avons visité toute la ville à pied.",
        "zh": "我们步行游览了整座城市。"
      },
      {
        "fr": "Nous sommes bien sûr allés dans des pâtisseries viennoises ; nous aimons beaucoup les gâteaux !",
        "zh": "我们当然还去了维也纳的糕点店，我们特别喜欢吃糕点！"
      },
      {
        "fr": "Nous avons passé des moments magnifiques là-bas. »",
        "zh": "我们在那儿度过了美妙的时光。」"
      },
      {
        "fr": "c. « Arthur et moi, nous allons toujours au restaurant pour la Saint-Valentin.",
        "zh": "c.「我和亚瑟每年情人节都去餐馆。"
      },
      {
        "fr": "Cette année, nous avons mangé sur un bateau, dans un très bon restaurant.",
        "zh": "今年我们在一艘船上的一家很棒的餐馆里吃饭。"
      },
      {
        "fr": "C'est romantique, non ? »",
        "zh": "很浪漫，不是吗？」"
      },
      {
        "fr": "d. « Pour la fête de la Musique, le 21 juin, on a passé la nuit dans les rues à écouter de la musique avec des copains.",
        "zh": "d.「6 月 21 日音乐节那天晚上，我们和朋友们整夜待在街上听音乐。"
      },
      {
        "fr": "On a beaucoup marché et on a vu des groupes sympa.",
        "zh": "我们走了很多路，看了一些很棒的乐队演出。"
      },
      {
        "fr": "Et c'est gratuit !",
        "zh": "而且还是免费的！"
      },
      {
        "fr": "Je suis rentré à trois heures du matin. »",
        "zh": "我凌晨三点才回家。」"
      }
    ],
    "vocab": [
      {
        "fr": "arc",
        "pos": "n.m.",
        "g": "m",
        "zh": "（建筑术语）拱，法圈"
      },
      {
        "fr": "arc de triomphe",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "凯旋门"
      },
      {
        "fr": "Bonne année !",
        "pos": "interj.",
        "zh": "新年好！"
      },
      {
        "fr": "copain(copine)",
        "pos": "n.",
        "zh": "（俗）朋友，伙伴，同伴"
      },
      {
        "fr": "dernier(ère)",
        "pos": "adj.",
        "zh": "最近的，最新的；最后的"
      },
      {
        "fr": "enquête",
        "pos": "n.f.",
        "g": "f",
        "zh": "调查"
      },
      {
        "fr": "exister",
        "pos": "v.i.",
        "zh": "存在"
      },
      {
        "fr": "fac",
        "pos": "n.f.",
        "g": "f",
        "zh": "（俗）大学（faculté 的缩写）"
      },
      {
        "fr": "fête",
        "pos": "n.f.",
        "g": "f",
        "zh": "节日；晚会"
      },
      {
        "fr": "fêter",
        "pos": "v.t.",
        "zh": "庆祝，纪念"
      },
      {
        "fr": "feu",
        "pos": "n.m.",
        "g": "m",
        "zh": "火；焰火"
      },
      {
        "fr": "feu d'artifice",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "焰火"
      },
      {
        "fr": "gâteau",
        "pos": "n.m.",
        "g": "m",
        "zh": "蛋糕"
      },
      {
        "fr": "groupe",
        "pos": "n.m.",
        "g": "m",
        "zh": "合唱队（团），演奏乐团，小乐队"
      },
      {
        "fr": "juin",
        "pos": "n.m.",
        "g": "m",
        "zh": "六月"
      },
      {
        "fr": "juillet",
        "pos": "n.m.",
        "g": "m",
        "zh": "七月"
      },
      {
        "fr": "magazine",
        "pos": "n.m.",
        "g": "m",
        "zh": "杂志"
      },
      {
        "fr": "mariage",
        "pos": "n.m.",
        "g": "m",
        "zh": "结婚"
      },
      {
        "fr": "moment",
        "pos": "n.m.",
        "g": "m",
        "zh": "时刻"
      },
      {
        "fr": "muguet",
        "pos": "n.m.",
        "g": "m",
        "zh": "铃兰"
      },
      {
        "fr": "Noël",
        "pos": "n.m.",
        "g": "m",
        "zh": "圣诞节"
      },
      {
        "fr": "nouvel an",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "新年"
      },
      {
        "fr": "papa",
        "pos": "n.m.",
        "g": "m",
        "zh": "爸爸"
      },
      {
        "fr": "pâtisserie",
        "pos": "n.f.",
        "g": "f",
        "zh": "糕点店"
      },
      {
        "fr": "petit ami",
        "pos": "loc.n.m.",
        "g": "m",
        "zh": "男朋友"
      },
      {
        "fr": "romantique",
        "pos": "adj.",
        "zh": "浪漫的，罗曼蒂克的"
      },
      {
        "fr": "Saint-Valentin (la)",
        "pos": "loc.n.f.",
        "g": "f",
        "zh": "情人节"
      },
      {
        "fr": "souvenir",
        "pos": "n.m.",
        "g": "m",
        "zh": "回忆"
      },
      {
        "fr": "triomphe",
        "pos": "n.m.",
        "g": "m",
        "zh": "胜利，凯旋"
      },
      {
        "fr": "Vienne",
        "pos": "n.pr.",
        "zh": "维也纳（奥地利）"
      },
      {
        "fr": "viennois(e)",
        "pos": "adj.",
        "zh": "维也纳的"
      }
    ],
    "grammar": [
      {
        "t": "形容词 dernier(ère) 修饰时间名词",
        "d": "本课无独立 GRAMMAIRE 框，以下要点摘自 Notes 注释。<br><b>dernier<\/b> 修饰时间名词时有两种含义：<br>① 位于时间名词之后，表示「（以说话时间为起点）最近的、上一次的」：<b>l'année dernière<\/b> 去年、<b>la semaine dernière<\/b> 上周、<b>mardi dernier<\/b> 上周二。<br>② 位于时间名词之前，表示「最后的」：<b>Le 31 décembre est le dernier jour de l'année.<\/b> 12 月 31 日是一年的最后一天。<br>例：À Noël, <b>l'année dernière<\/b>, avec mon mari, nous sommes allés une semaine à Vienne. 去年圣诞节，我和丈夫去维也纳待了一周。"
      },
      {
        "t": "passer + 时间 + à + 动词不定式",
        "d": "「<b>passer + 一段时间 + à + 动词不定式<\/b>」意为「花（多少）时间做某事」：<br>On <b>a passé la nuit<\/b> <b>à écouter<\/b> de la musique avec des copains. 我们整夜和朋友们一起听音乐。<br>Il <b>a passé cinq ans à faire<\/b> ces recherches. 他用了五年时间做这项研究。<br>J'<b>ai passé toute ma soirée à regarder<\/b> la télé. 我看了整整一晚上的电视。<br>注意：<b>à<\/b> 后接动词不定式，不接名词。"
      },
      {
        "t": "数量词作状语：un dîner à deux",
        "d": "介绍酒后加基数词可作数量状语，表示「几个人一起（做某事）」：<br><b>un dîner à deux<\/b> 两人共进晚餐、<b>aller à six<\/b> 六个人一起去。<br>Ils sont venus <b>à six<\/b>. 他们来了六个人。Nous avons fini ça <b>à dix<\/b> ! 我们十个人才完成了这（个工作）。<br><b>tous les trois<\/b> 三人一起（tous 为阳性复数，若全为女性用 toutes les trois）：Le soir, nous sommes allés au restaurant <b>tous les trois<\/b>. 晚上我们三个人一起去了餐馆。"
      }
    ],
    "say": [
      {
        "title": "Demander ce qu'on fait pour une fête 询问过节做什么",
        "items": [
          {
            "fr": "Pour le 14 juillet, la Saint-Valentin ou pour Noël, qu'est-ce que vous faites ?",
            "zh": "国庆日、情人节或圣诞节，你们做些什么？"
          },
          {
            "fr": "La fête avec des amis ou un dîner à deux ?",
            "zh": "和朋友一起庆祝，还是两人共进晚餐？"
          }
        ]
      },
      {
        "title": "Raconter une fête 讲述一次节日庆祝",
        "items": [
          {
            "fr": "Pour le 14 juillet, cette année, je suis allée à Paris, avec deux copines de la fac.",
            "zh": "今年国庆日，我和大学里的两个女同学去了巴黎。"
          },
          {
            "fr": "Nous avons vu le feu d'artifice à côté de l'Arc de triomphe.",
            "zh": "我们在凯旋门旁看了焰火。"
          },
          {
            "fr": "Nous avons passé des moments magnifiques là-bas.",
            "zh": "我们在那儿度过了美妙的时光。"
          },
          {
            "fr": "Et on a fait la fête toute la nuit.",
            "zh": "我们狂欢了一整夜。"
          }
        ]
      },
      {
        "title": "Décrire un repas ou une sortie 描述一餐饭或一次外出",
        "items": [
          {
            "fr": "Cette année, nous avons mangé sur un bateau, dans un très bon restaurant. C'est romantique, non ?",
            "zh": "今年我们在一艘船上的一家很棒的餐馆吃饭。很浪漫，不是吗？"
          },
          {
            "fr": "On a beaucoup marché et on a vu des groupes sympa. Et c'est gratuit !",
            "zh": "我们走了很多路，看了一些很棒的乐队演出，而且还免费！"
          },
          {
            "fr": "Je suis rentré à trois heures du matin.",
            "zh": "我凌晨三点才回家。"
          }
        ]
      }
    ]
  }
});
