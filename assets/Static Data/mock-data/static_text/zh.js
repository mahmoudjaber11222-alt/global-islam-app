export default {
  splash: {
    version: '版本',
    practice: '练习',
    share: '分享',
    logo: '全球伊斯兰',
  },
  homeApp: {
    north: '北',
    east: '东',
    west: '西',
    south: '南',
    active: '朝向已激活',
    disabled: '打开朝向指南针',
    welcome: '欢迎回来',
    greet: '愿和平降临于你',
    hour: '小时',
    minute: '分钟',
    second: '秒',
    toLeft: '在你的左侧',
    toRight: '在你的右侧',
    fromNorth: '从北方',
  },
  quranApp: {
    medinan: '麦地那章',
    meccan: '麦加章',
    arabicName: '阿拉伯语名称',
    englishName: '英语名称',
    details: '选择一节经文以查看其翻译和塔夫西尔（注释）',
    selectRes: '选择资源',
    retry: '重试',
    loadErr1: '无法加载注释。请重试。',
    loadErr2: '获取失败',
    author: '作者',
    explain: '注释',
  },
  qiblaApp: {
    compass: '朝向指南针',
    accuracy: '精度',
    offline: 'GPS 离线',
    tracking: 'GPS 追踪中',
    aligned: '您正朝向天房。请保持稳定以获得准确的礼拜方向。',
    notAligned: '请将设备放平并旋转，直到箭头指向朝向。',
    heading: '设备方向',
    turn: '转动',
    alignedQibla: '已与朝向对齐',
  },
  aiApp: {
    answer: '回答',
  },
  prayerApp: {
    locationRequired: '需要定位服务以获取准确的礼拜时间。',
    schedule: '礼拜时间表',
    refresh: '刷新',
    sunrise: '日出',
    upcoming: '即将到来的礼拜',
  },
  settingsApp: {
    reciterTitle: '宣礼诵念者',
    reciterSub: '选择您喜欢的声音',
    notSelected: '未选择',
    preview: '预览',
    cancel: '取消',
    muezzin: '宣礼员',
    preNot: '宣礼前通知',
    preNotDet: '在礼拜时间前15分钟通知',
    theme: '深色模式',
    dark: '当前为深色主题',
    light: '当前为浅色主题',
    about: '关于',
    selectReciter: '选择诵念者',
  },
  athan: {
    mainTitle: '宣礼 · 礼拜召唤',
    stop: '停止宣礼',
    error: '无法加载宣礼音频',
    prayerTime: '礼拜时间',
    play: '播放',
    pause: '暂停',
    dismiss: '忽略',
  },
  athkarApp: {
    completed: '已完成',
    remaining: '剩余',
    reset: '重置',
    athkar: '记主词',
    mention: '赞念',
    descM: '以祝福开启您的一天',
    descE: '以护佑结束您的一天',
    remmember: '每日记念',
    cat: '祈祷类别',
    category: '类别',
  },
  contentNormal: {
    searchSection: {
      placeholder: '搜索圣训...',
      button: '搜索',
      books: {
        label: '书籍',
        options: {
          bukhari: '布哈里',
          muslim: '穆斯林',
          tirmidhi: '提尔密济',
          abudawood: '艾布·达伍德',
          nasai: '奈萨仪',
          ibnmajah: '伊本·马哲',
        },
      },
    },

    fallbackLanguageToast: {
      title: '当前语言暂未受支持',
      msg: '该语言目前尚未被圣训数据库支持。',
      description:
        '系统已自动选择英语作为备用语言，以便您仍然可以顺畅地搜索和浏览圣训。您还可以尝试高级模式，以获得更广泛的多语言支持和更好的搜索结果。',
    },

    initialPlaceholder: '搜索圣训以查看等级、传述者和参考信息等详细内容',

    loading: {
      label: '正在加载圣训...',
    },

    hadithCard: {
      showMore: '显示更多',
      showLess: '显示更少',

      header: {
        hadithPrefix: '圣训 #',
        referencesTitle: '参考资料',
        referenceLabel: '参考',
        inBookReference: '书中参考',
        arabicReference: '阿拉伯语参考',
      },
    },

    emptyState: '未找到圣训',

    pagination: {
      prev: '上一页',
      next: '下一页',
    },
  },

  switch: {
    title: {
      advanced: '高级模式',
      normal: '普通模式',
    },

    description: {
      advanced: '具有更深层理解的语义搜索',
      normal: '基于筛选条件的快速搜索',
    },
  },

  navbar: {
    routes: {
      home: '首页',
      prayers: '礼拜',
      quran: '古兰经',
      athkar: '祈祷词',
      articles: '文章',

      articlesNested: {
        islamicHistory: '伊斯兰历史',
        prayerInIslam: '伊斯兰中的礼拜',
        womenInIslam: '伊斯兰中的女性',
        purification: '净化与小净',
      },

      learn: '学习',

      learnNested: {
        quranTajweed: '学习古兰经与诵读规则',
        arabic: '学习阿拉伯语',
      },

      dashboard: '控制面板',
      aiAssistant: 'AI 助手',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: '与以下一起探索伊斯兰',
      clarity: '清晰',
      peace: '& 平和',
    },

    description:
      '通过人工智能与引导式知识学习、提问并发现真实理解，专为清晰与反思而设计。',

    actions: {
      introductionToIslam: '了解伊斯兰',
      islamQA: '伊斯兰问答（AI助手）',
      continueWebsite: '继续访问网站',
    },
  },
  learning: {
    quran: {
      title: '学习《古兰经》和诵读规则',
      subtitle: '逐步提高你的《古兰经》诵读能力，并理解诵读规则。',
    },
    arabic: {
      title: '学习阿拉伯语',
      subtitle: '通过清晰且结构化的课程提升你的阿拉伯语能力。',
    },
    default: {
      title: '学习部分',
      subtitle: '探索旨在增强你的知识和理解的教育内容。',
    },
  },
  explore: {
    searchBar: {
      title: '搜索圣训合集',

      subtitle: '可通过主题、含义或完整句子进行自然搜索。',

      placeholder: '示例：关于孝敬父母的圣训',

      button: '搜索',
    },

    header: {
      title: '圣训搜索库',
      subtitle: '以现代阅读体验即时探索真实可靠的圣训。',
    },

    content: {
      heroTitle: '通过强大搜索发现真实圣训合集',

      loading: {
        label: '正在搜索圣训合集...',
      },

      error: {
        title: '无法加载圣训',
        message: '目前无法获取相关传述，请检查网络连接并重试。',
      },

      empty: {
        title: '未找到匹配的圣训',
      },

      card: {
        reference: '圣训来源',
        readMore: '阅读完整圣训',
      },
    },
  },

  home: {
    news: {
      title: '穆斯林社区动态',
      subtitle: '了解来自穆斯林世界的重要更新',
    },

    prayer: {
      title: '礼拜倒计时',
      subtitle: '为下一次礼拜做好准备',
      button: '查看礼拜时间',
      nextPrayerLabel: '下一次礼拜时间：',
    },

    athkar: {
      title: '早晚祈祷词',
      subtitle: '每日记念，使你的心保持连接',
      button: '查看更多祈祷词',
    },

    qibla: {
      title: '朝向（克尔白方向）',
      subtitle: '无论你身在何处，找到克尔白方向',
      locationLoading: '正在获取你的位置信息...',
      enableLocation: '启用定位',
      refreshLocation: '刷新朝向方向',

      warning: '如果设备不支持方向传感器，指南针精度可能会受到影响。',

      errorTitle: '权限被拒绝',
    },
  },

  prayers: {
    nextLabel: '下一次礼拜时间',

    header: {
      title: '礼拜时间',
      subtitle: '与你的创造者每日连接的时刻',
    },

    times: {
      Fajr: '晨礼',
      Dhuhr: '晌礼',
      Asr: '晡礼',
      Maghrib: '昏礼',
      Isha: '宵礼',
    },

    qibla: {
      loading: '正在获取你的位置信息...',
      warning: '如果系统不支持方向传感器，将影响指南针计算。',
      errorTitle: '权限被拒绝',
      enableLocation: '启用定位',
      refreshLocation: '刷新朝向方向',
    },

    list: {
      warning: '时间可能因计算方式不同而略有差异。',
    },
  },

  quran: {
    header: {
      title: '古兰经',
      subtitle: '你每日诵读与反思的伙伴',
    },

    search: {
      noResultTitle: '数据为空',
      noResultMessage: '没有可显示的数据',
    },
  },

  athkar: {
    title: '每日记念',
    subtitle: '保持每日记念与反思的坚持',
  },

  ai: {
    header: {
      title: '全球伊斯兰AI助手',
      subtitle: '基于《古兰经》、圣训及可靠学者的清晰伊斯兰解答',
    },

    loading: {
      label: '加载中...',
    },

    error: {
      title: '请求已达上限',
      message: '当前无法连接知识服务，请稍后再试。',
    },

    input: {
      placeholder: '提出关于伊斯兰的问题...',
    },

    suggestions: [
      '如果失去小净还能礼拜吗？',
      '利息（里巴）是否完全被禁止？',
      '在非清真环境工作的教法判定',
      '旅行中可以礼拜吗？',
      '礼拜时使用香水是否允许？',
      '什么会使礼拜无效？',
      '因工作而延迟礼拜的教法判定',
    ],

    footer: {
      disclaimer:
        '本AI助手旨在基于可靠且精选的知识来源提供回答，包括伊斯兰参考资料与经过验证的教育内容。',

      note: '回答仅供参考，在必要时不应替代学者的指导。',
    },
  },

  footer: {
    disclaimer:
      '所有展示内容均来源于其原始可靠出处。欢迎反馈或错误报告，以便审核与修正。',

    tagline: '用心打造，服务真实可靠的伊斯兰内容',
  },

  hadith: {
    header: {
      hadithLabel: '圣训',
      backButton: '返回',
    },

    sections: {
      hadithText: '圣训文本',
      arabicText: '阿拉伯文文本',
      explanation: '解释',
      authentication: '考证',
      lessons: '益处与教导',
    },
  },
  other: {
    note: '备注',
    theLanguage: '语言',
    part: '部分',
    translation: '翻译',
    verse: '经文',
    chapter: '章节',
    page: '页面',
    breakingNews: '快讯',
  },
  baseFooter: {
    contact: {
      title: '联系我们',
      name: '你的名字',
      email: '你的邮箱',
      msg: '你的信息',
      sendMsg: '发送信息',
    },
    followUs: '关注我们',
    QA: '快速访问',
    logoB:
      '《古兰经》、圣训、祈祷时间、AI助手和每日伊斯兰工具——全部集成在一个现代平台中。',
    whatsapp: '通过WhatsApp聊天',
    rsr: '版权所有',
  },
  dailyRemined: {
    title: '今日之光',
    subtitle: '停下来，思考为你今天精选的一段经文和圣训。',
  },
  compareRelg: {
    note: '本页面提供了世界主要宗教 Comparative 的概述。从伊斯兰教的角度来看，《古兰经》确认先前的神圣启示曾被派遣给早期的国家，但随着时间的推移，这些启示经历了人为的篡改（tahrif）。《古兰经》指出：“我确已降示教诲，我确是那教诲的保護者。”（15:9）。本页面将结合历史和文献证据来探讨这些差异。',
    mainTitle: '宗教间的理性之旅',
    headerTitle: '定义人类存在的问题',
    story: `
想象一下，你突然睁开眼睛，发现自己身处一列高速行驶在无尽黑暗中的豪华列车上。四周设施齐备：精美的餐桌上摆满了丰盛的食物，电影屏幕闪烁，柔软的座椅上铺着丝绸靠垫。

你带着一丝不安询问身边的乘客：
“我们在哪儿？是谁让我们上了这列火车？我们要去往何方？”

最令人惊讶的是他们的反应。

一个人冷漠地回答：
“关你什么事？好好享受食物就行了，这儿很棒。”

另一个人讽刺道：
“何必用这些问题折磨自己？靠在椅背上看电影吧。”

周围的人都沉浸在旅途的享乐中，但你却被深深的恐惧所笼罩，因为你知道这列火车正飞驰向终点站——那是每个乘客最终都必须下车的地方。

就在那一刻，一个决定性的问题浮现出来：

你是要沉溺于旅途的奢华与娱乐，还是继续追寻那三个最深奥的问题的答案：

造物主是谁？
我们为何在此？
终点等待我们的是什么？

这列火车就是地球，而这趟旅程就是你的人生。

由于人类并非生来就拥有这些答案，宗教便作为“使用说明书”应运而生，每一本都声称自己直接来自列车的设计者。

让我们以冷静和理性的视角来剖析这些说明书。
  `,
    core: {
      q1: {
        id: 'q1',

        title: '造物主是谁？',

        intro: `
从哲学和逻辑的角度来看，作为宇宙“第一因”的造物主必然是绝对超验的，超越物质、时间和空间。如果造物主受制于饥饿、疲劳、物理极限或空间框架，那么该存在在逻辑上将失去其绝对造物主的地位，转而成为一个被造的、依赖性的存在。一个依赖性的存在不可能成为万物存在的必要源头。
  `,

        religions: {
          eastern: {
            title: '东方宗教',
            examples: ['印度教', '佛教'],

            answerNature: `
佛教在其最古老的形式（上座部）中，通常是非有神论的；它不关注造物主的存在，而是将存在视为永恒自然过程、因果律和相互依存规律的结果。

相比之下，印度教通常谈论一个称为“梵”（Brahman）的根本形而上学现实。但在实践中，这一最高现实通过无数的形式和神灵体现出来，包括毗湿奴、湿婆和迦梨等人类或动物形态的化身。
      `,

            objectiveCritique: `
从哲学角度看，佛教面临着如何解释一个高度有序、由一致规律和物理精度运行的宇宙如何在没有意识的初衷下产生的问题。

在承认神圣化身和物理形象的印度教传统中，神性与局限、冲突、饥饿、死亡和物质形态联系在一起。一个可以被物理描绘、体现或受制于自然过程的神，从理性角度看，似乎更像是创造的一部分，而非完全超越创造本身的存在。
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: '犹太教',

            answerNature: `
犹太教确认对超越偶像和物理形象的造物主的信仰。上帝（YHWH）被理解为天地的创造者，其本质与受造物是分离的。
      `,

            objectiveCritique: `
这里产生的哲学问题并不在于超验性本身，而在于上帝普遍性的边界，这一点在《希伯来圣经》的某些段落中有所体现。部分文本将上帝描绘在一种高度聚焦于以色列后裔的盟约关系中，这被批评者解读为种族排他性。

此外，一些段落使用人类语言来描述上帝，例如因创造人类而感到“后悔”（创世记 6:6）或在创造后第七日“休息”（出埃及记 31:17）。批评者认为，这些描述引发了质疑：这些属性究竟应该按字面理解还是隐喻理解。
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: '基督教',

            answerNature: `
基督教通过三位一体（圣父、圣子、圣灵）教义教导对单一上帝的信仰。根据道成肉身教义，三位一体的第二位——圣子，以耶稣基督的身份进入人类历史，为拯救人类而被钉十字架并死亡。
      `,

            objectiveCritique: `
从哲学角度看，批评者认为道成肉身教义在神性与人性属性之间制造了紧张关系。传统上，上帝被描述为永恒、无限且超越死亡的，而人类被描述为有限、脆弱且必死的。

当完全的神性与完全的人性结合在同一个体中时，问题就产生了。批评者质疑，一个永恒且独立的存在如何能同时体验饥饿、睡眠、痛苦和死亡。这个问题通常被表述为超验性与道成肉身之间的紧张关系，而不仅仅是一个神学奥秘。
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: '伊斯兰教',

            answerNature: `
伊斯兰教呈现了一个完全超验且不可分割的上帝概念。《古兰经》在忠诚章（Al-Ikhlas）中总结了这一概念：

“你说：他是真主，是独一的主。真主是万物所仰赖的。他没有生产，也没有被生产。没有任何事物能与他匹敌。”（古兰经 112:1–4）

在伊斯兰教中，造物主完全处于物质形态之外，且独立于受造物：

“任何事物都不能与他相似。”（古兰经 42:11）

上帝不受时间、空间或物理限制的束缚。《古兰经》还指出：

“瞌睡不能侵犯他，睡眠不能克服他。”（古兰经 2:255）

在伊斯兰神学中，上帝被理解为一个独立、永恒、自给自足且完全独立于创造的存在。
      `,

            objectiveCritique: `
从伊斯兰哲学角度看，这一概念旨在通过避免拟人化和道成肉身来保持绝对超验性。其目标是将造物主与一个独立且必然的“第一因”概念相协调，使其不受被造存在之局限的束缚。
      `,

            refs: [
              'https://quran.com/112',
              'https://quran.com/42/11',
              'https://quran.com/2/255',
              'https://sunnah.com/bukhari:7375',
              'https://www.abuaminaelias.com/what-are-the-islamic-evidences-for-the-existence-of-the-creator/',
              'https://www.islamweb.net/en/fatwa/252391/',
            ],
          },
        },
      },
      q2: {
        id: 'q2',

        title: '生命的道路与目的是什么？',

        intro: `
如果存在一位明智的造物主，假设人类在没有指导的情况下被遗弃，且没有任何关于存在目的、道德责任和行为准则的解释，这在逻辑上是说不通的。正如复杂的系统需要设计者的说明一样，宗教声称它们提供了一个框架，帮助人们理解我们为何在此以及应当如何生活。
  `,

        religions: {
          eastern: {
            title: '东方宗教',

            examples: ['印度教', '佛教'],

            answerNature: `
东方传统（如佛教和印度教）通常依赖于哲学教义、冥想实践以及由灵性导师和智者开发的沉思。

在佛教中，最终目标是通过达到“涅槃”——一种超验和内在自由的状态——来脱离苦难并结束轮回。

在许多印度教传统中，目的是通过奉献、知识、冥想或纪律行动达到的灵性解脱（Moksha）。
      `,

            objectiveCritique: `
批评者认为，这些系统主要是哲学和经验性的，而不是基于来自超验造物主的、可验证的启示。

有些人还认为，对远离尘世、苦行和放弃自我的强烈强调，可能与促进社会发展、科学进步、家庭生活和文明的人性侧面相冲突。
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: '犹太教',

            answerNature: `
在犹太教中，生活方式根植于向摩西启示并保存在《希伯来圣经》（Tanakh）中的盟约法律。宗教框架专注于服从上帝的诫命并维持上帝与以色列后裔之间的盟约关系。
      `,

            objectiveCritique: `
批评者认为，犹太教在历史上发展为一种专注于与特定民族盟约的传统，而非一种针对全人类的普遍传教宗教。

从文本分析角度看，一些学者（包括 Richard Elliott Friedman）认为，《托拉》经历了数世纪的编纂和修订过程，特别是在巴比伦流亡及其后时期。这使得一些批评者怀疑，该文本是否能被视为以其原始形式完美保存的启示。
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: '基督教',

            answerNature: `
基督教教导称，人类的核心问题是罪和与上帝的疏离，而救赎是通过对耶稣的牺牲和复活的信仰获得的。因此，生命的目的是通过与上帝和解和灵性转变来理解的。
      `,

            objectiveCritique: `
历史学家指出，福音书的阿拉姆语（耶稣的语言）原始手稿并未保存下来。现存最古老的文本是耶稣生后数十年用希腊语写成的手稿。像 Bart Ehrman 这样的文本批评家记录了《新约》最古老抄本中的无数差异。

批评者还认为，基督教历史上更强调灵性和个人救赎，而非为经济、刑法或政府管理建立全面的法律或政治框架。一些历史学家认为，这促进了后来在许多西方社会中政教的分离。
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: '伊斯兰教',

            answerNature: `
伊斯兰教通过灵性奉献与世俗责任的整合，提供了关于人类目的的全面理解。

《古兰经》指出：

“我创造精灵和人类，只为让他们崇拜我。”（古兰经 51:56）

在伊斯兰思想中，崇拜不仅限于仪式，还包括正确的行为、正义、道德操守、求知以及对社会的积极贡献。

伊斯兰教义旨在平衡灵性成长与对家庭生活、经济、管理、慈善和社会责任的实践参与。
      `,

            objectiveCritique: `
从伊斯兰角度来看，《古兰经》代表了一种独特保存的启示。穆斯林认为，该文本自伊斯兰教早期起，通过文字手稿和口头诵读的方式持续传承，始终保持不变。

常被引用的例子包括伯明翰古兰经残卷等古籍，以及全球数百万穆斯林维护的庞大的口头背诵传统。

伊斯兰法（Sharia）也被呈现为一个涵盖金融、慈善、家庭法、刑法和管理等领域的伦理与法律框架。支持者认为，这赋予了伊斯兰教一种完整道德和文明体系的特征，而不仅仅是一个灵性传统。
      `,

            refs: [
              'https://quran.com/51/56',
              'https://quran.com/2/275',
              'https://quran.com/9/60',
              'https://www.birmingham.ac.uk/research/projects/quran-manuscript.aspx',
              'https://sunnah.com/bukhari:5027',
              'https://www.britannica.com/topic/Shariah',
            ],
          },
        },
      },
      q3: {
        id: 'q3',

        title: '终点站之后会发生什么？',

        subtitle: '命运、正义与来世',

        intro: `
如果没有死后的终极正义，生活可能显得非常随意且缺乏道德归宿。暴君可能死而未受惩罚，受害者可能离世而未得公道。这引发了人类最古老的哲学问题之一：死亡是终点，还是存在超越尘世生活的最终审判？
  `,

        religions: {
          eastern: {
            title: '东方宗教',

            examples: ['印度教', '佛教'],

            answerNature: `
许多东方传统接受轮回概念，即灵魂或意识流经历反复的再生循环。个人的未来状态由“业”（Karma）决定：即过去行为的道德后果。
      `,

            objectiveCritique: `
批评者认为，轮回引发了关于正义和责任的哲学问题。如果某人在新的一生中要为前世的行为承担后果，而他们又无法有意识地回忆起这些行为，那么惩罚的教育和道德目的就变得难以理解。

从这个角度看，没有意识记忆的责任似乎与有意义的道德责任脱节了。
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: '唯物主义与无神论',

            answerNature: `
唯物主义和无神论世界观通常视死亡为有意识存在的终结。人类被理解为生物有机体，其意识在身体死亡后彻底终结。
      `,

            objectiveCritique: `
批评者认为，严格的唯物主义难以提供道德、正义和基本意义的客观基础。如果压迫者和受害者最终都消逝于虚无，且未对各自行为负责，那么牺牲、道德义务和正义等概念可能看起来是主观的或由社会构建的，而非具有普世约束力。

然而，世俗伦理的支持者认为，即便没有对来世的信仰，道德依然可以通过理性、共情和社会责任产生。
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: '基督教',

            answerNature: `
基督教教导说，救赎和永生是通过信仰耶稣基督并接受他为人类罪孽的牺牲而获得的。天堂和永恒救赎与对基督的信仰以及上帝的恩典紧密相关。
      `,

            objectiveCritique: `
批评者质疑，主要基于信仰的救赎如何与普世正义原则相适应。从哲学上讲，有人认为该框架可能意味着一个真诚努力去接受某些神学教条的道德高尚者可能被排除在救赎之外，而另一个犯下重罪但在最后时刻信仰的人却可能获得永恒奖赏。

基督教神学家通常回应称，救赎包含真诚的信仰和真实的忏悔，而不仅仅是言语上的承认。
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: '伊斯兰教',

            answerNature: `
伊斯兰教将来世呈现为一个绝对道德责任与上帝公正的体系。

《古兰经》指出：

“一个负罪的人，不再负别人的罪。”（古兰经 6:164）

伊斯兰教中的救赎与信仰和善行始终关联：

“你当向信道而且行善者报喜……”（在《古兰经》中反复出现，包括 2:25）

伊斯兰教教导说，尘世生活是一个暂时的考验，而非最终奖励或惩罚的地方：

“他创造了死与生，以便考验你们中谁的行为更优美。”（古兰经 67:2）
      `,

            objectiveCritique: `
在伊斯兰神学中，审判日代表最终法庭，每一项行为，无论多微小，都将被清算。

《古兰经》指出：

“行一个微尘的善事者，必见其善报。作一个微尘的恶事者，必见其恶报。”（古兰经 99:7–8）

该框架旨在维护个人责任与绝对正义，并提供了一种道德保证：任何压迫或善行在终点都不会毫无回应。
      `,

            refs: [
              'https://quran.com/6/164',
              'https://quran.com/2/25',
              'https://quran.com/67/2',
              'https://quran.com/99/7-8',
              'https://sunnah.com/muslim:2577',
              'https://www.muslimaid.org/media-centre/blog/what-will-happen-after-death-according-to-islam/',
            ],
          },
        },
      },
    },
    other: {},
    staticText: {
      navbar: '宗教比较',
      hero: {
        subtitle:
          '一场关于人类最大问题的平静而深邃的哲学之旅：造物主、存在目的、道德以及死后等待我们的一切。',

        subtitleHighlight: '造物主、存在目的、道德以及死后等待我们的一切。',

        scrollIndicator: '向下滚动开始旅程',
      },

      storySection: {
        badge: '列车比喻',

        titleLine1: '在你提问之前',
        titleLine2: '关于宗教...',

        intro:
          '每个人最终都会抵达一个宁静的时刻，当干扰因素消失，最深奥的问题终于浮出水面。',

        ending: '这列火车就是地球，',
        ending2: '而这趟旅程就是你的人生。',
      },

      coreQuestions: {
        sectionLabel: '核心章节',
        title: '基础问题',

        answerNatureTitle: '答案的本质',

        philosophicalDiscussionTitle: '哲学讨论',

        referencesTitle: '参考资料',
      },

      futureResearch: {
        sectionLabel: '后续研究',

        title: '更多问题',

        loaderBadge: '更多问题筹备中',

        headingLine1: '旅程',
        headingLine2: '仍在继续...',

        description: '正使用相同的结构化比较方法筹备后续的哲学与神学研究。',

        topics: [
          '道德',
          '科学',
          '神迹',
          '意识',
          '自由意志',
          '痛苦',
          '历史传承',
          '预言',
          '人性',
          '意义',
          '文明',
          '伦理学',
        ],

        footer: '新章节即将添加',
      },

      imageAlt: {
        hero: '宗教比较',
      },
    },
  },
};
