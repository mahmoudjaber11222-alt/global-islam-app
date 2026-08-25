export default {
  splash: {
    version: 'バージョン',
    practice: '練習',
    share: '共有',
    logo: 'グローバル・イスラム',
  },
  homeApp: {
    north: '北',
    east: '東',
    west: '西',
    south: '南',
    active: 'キブラ有効',
    disabled: 'キブラコンパスを開く',
    welcome: 'お帰りなさい',
    greet: 'アッサラーム・アライクム',
    hour: '時間',
    minute: '分',
    second: '秒',
    toLeft: '左方向',
    toRight: '右方向',
    fromNorth: '北から',
  },
  quranApp: {
    medinan: 'マディナ章',
    meccan: 'メッカ章',
    arabicName: 'アラビア語名',
    englishName: '英語名',
    details: '翻訳とタフスィール（解説）を表示する節を選択してください',
    selectRes: 'リソースを選択',
    retry: '再試行',
    loadErr1: '解説を読み込めません。もう一度お試しください。',
    loadErr2: '取得に失敗しました',
    author: '著者',
    explain: '解説',
  },
  qiblaApp: {
    compass: 'キブラコンパス',
    accuracy: '精度',
    offline: 'GPSオフライン',
    tracking: 'GPS追跡中',
    aligned:
      'キブラの方向を向いています。正確な礼拝方向のため、安定してお持ちください。',
    notAligned:
      'デバイスを水平に持ち、矢印がキブラを指すまで回転させてください。',
    heading: 'デバイスの向き',
    turn: '回転',
    alignedQibla: 'キブラと一致',
  },
  aiApp: {
    answer: '回答',
  },
  prayerApp: {
    locationRequired: '正確な礼拝時間のため、位置情報サービスが必要です。',
    schedule: '礼拝時間表',
    refresh: '更新',
    sunrise: '日の出',
    upcoming: '次の礼拝',
  },
  settingsApp: {
    reciterTitle: 'アザーン朗唱者',
    reciterSub: 'お好みの声を選択',
    notSelected: '未選択',
    preview: 'プレビュー',
    cancel: 'キャンセル',
    muezzin: 'ムアッジン',
    preNot: 'アザーン前通知',
    preNotDet: '礼拝時間の15分前に通知',
    theme: 'ダークモード',
    dark: '現在ダークテーマ',
    light: '現在ライトテーマ',
    about: 'アプリについて',
    selectReciter: '朗唱者を選択',
  },
  athan: {
    mainTitle: 'アザーン · 礼拝の呼びかけ',
    stop: 'アザーンを停止',
    error: 'アザーン音声を読み込めません',
    prayerTime: '礼拝時間',
    play: '再生',
    pause: '一時停止',
    dismiss: '閉じる',
  },
  athkarApp: {
    completed: '完了',
    remaining: '残り',
    reset: 'リセット',
    athkar: 'アズカール',
    mention: 'ジクル',
    descM: '祝福と共に一日を始めましょう',
    descE: '守護と共に一日を終えましょう',
    remmember: '日々の唱念',
    cat: '祈りのカテゴリー',
    category: 'カテゴリー',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'ハディースを検索...',
      button: '検索',
      books: {
        label: '書籍',
        options: {
          bukhari: 'ブハーリー',
          muslim: 'ムスリム',
          tirmidhi: 'ティルミズィー',
          abudawood: 'アブー・ダーウード',
          nasai: 'ナサーイー',
          ibnmajah: 'イブン・マージャ',
        },
      },
    },

    fallbackLanguageToast: {
      title: '現在の言語はまだサポートされていません',
      msg: 'この言語は現在、ハディースデータセットでまだサポートされていません。',
      description:
        '引き続きスムーズにハディースを検索・閲覧できるよう、英語が自動的に代替言語として選択されました。より幅広い多言語サポートと改善された検索結果のために、高度モードを試すこともできます。',
    },

    initialPlaceholder:
      'ハディースを検索して、格付け、語り手、参照情報などの詳細を表示します',

    loading: {
      label: 'ハディースを読み込み中...',
    },

    hadithCard: {
      showMore: 'もっと見る',
      showLess: '表示を減らす',

      header: {
        hadithPrefix: 'ハディース #',
        referencesTitle: '参照',
        referenceLabel: '参照',
        inBookReference: '書籍内参照',
        arabicReference: 'アラビア語参照',
      },
    },

    emptyState: 'ハディースが見つかりません',

    pagination: {
      prev: '前へ',
      next: '次へ',
    },
  },

  switch: {
    title: {
      advanced: '高度モード',
      normal: '通常モード',
    },

    description: {
      advanced: 'より深い理解を備えたセマンティック検索',
      normal: 'フィルターベースの高速検索',
    },
  },

  navbar: {
    routes: {
      home: 'ホーム',
      prayers: '礼拝',
      quran: 'クルアーン',
      athkar: 'アズカル',
      articles: '記事',

      articlesNested: {
        islamicHistory: 'イスラムの歴史',
        prayerInIslam: 'イスラムにおける礼拝',
        womenInIslam: 'イスラムにおける女性',
        purification: '浄化とウドゥー',
      },

      learn: '学ぶ',

      learnNested: {
        quranTajweed: 'クルアーンとタジュウィードを学ぶ',
        arabic: 'アラビア語を学ぶ',
      },

      dashboard: 'ダッシュボード',
      aiAssistant: 'AI アシスタント',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: '以下とともにイスラームを探求する',
      clarity: '明確さ',
      peace: '& 平穏',
    },

    description:
      'AIとガイド付きの知識を通して学び、質問し、真の理解を発見します。明確さと内省のために設計されています。',

    actions: {
      introductionToIslam: 'イスラームについて学ぶ',
      islamQA: 'イスラームQ&A（AIアシスタント）',
      continueWebsite: 'サイトへ進む',
    },
  },
  learning: {
    quran: {
      title: 'クルアーンとタジュウィードを学ぶ',
      subtitle:
        'クルアーンの朗読を改善し、タジュウィードの規則を段階的に理解します。',
    },
    arabic: {
      title: 'アラビア語を学ぶ',
      subtitle:
        '分かりやすく体系的なレッスンでアラビア語のスキルを身につけます。',
    },
    default: {
      title: '学習セクション',
      subtitle: '知識と理解を深めるための教育コンテンツを探しましょう。',
    },
  },
  explore: {
    searchBar: {
      title: 'ハディースコレクションを検索',

      subtitle: 'テーマ、意味、または完全な文章を使って自然に検索できます。',

      placeholder: '例：両親への親切に関するハディース',

      button: '検索',
    },

    header: {
      title: 'ハディース検索ライブラリ',
      subtitle: '現代的な読書体験で、真正なハディースを即座に探索できます。',
    },

    content: {
      heroTitle: '強力な検索で真正なハディースコレクションを発見する',

      loading: {
        label: 'ハディースコレクションを検索中...',
      },

      error: {
        title: 'ハディースを読み込めません',
        message:
          '現在、伝承を取得できませんでした。接続を確認して再試行してください。',
      },

      empty: {
        title: '一致するハディースが見つかりません',
      },

      card: {
        reference: 'ハディース参照',
        readMore: '全文を読む',
      },
    },
  },

  home: {
    news: {
      title: 'ムスリムコミュニティの最新情報',
      subtitle: 'イスラーム世界の重要な最新情報を確認できます',
    },

    prayer: {
      title: '礼拝カウントダウン',
      subtitle: '次の礼拝に備えましょう',
      button: '礼拝時間を見る',
      nextPrayerLabel: '次の礼拝時間：',
    },

    athkar: {
      title: '朝夕のアズカール',
      subtitle: '心をつなぎ続ける日々の記念',
      button: 'さらに見る',
    },

    qibla: {
      title: 'キブラの方向',
      subtitle: 'どこにいてもカアバの方向を確認できます',
      locationLoading: '位置情報を取得中...',
      enableLocation: '位置情報を有効にする',
      refreshLocation: 'キブラ方向を更新',

      warning:
        '端末が方位センサーに対応していない場合、コンパスの精度に影響が出る可能性があります。',

      errorTitle: '権限が拒否されました',
    },
  },

  prayers: {
    nextLabel: '次の礼拝時間',

    header: {
      title: '礼拝時間',
      subtitle: '創造主との日々のつながりの瞬間',
    },

    times: {
      Fajr: 'ファジュル',
      Dhuhr: 'ズフル',
      Asr: 'アスル',
      Maghrib: 'マグリブ',
      Isha: 'イシャー',
    },

    qibla: {
      loading: '位置情報を取得中...',
      warning: 'OSが方位に対応していない場合、コンパス計算に影響します。',
      errorTitle: '権限が拒否されました',
      enableLocation: '位置情報を有効にする',
      refreshLocation: 'キブラ方向を更新',
    },

    list: {
      warning: '計算方法により時間が多少異なる場合があります。',
    },
  },

  quran: {
    header: {
      title: 'クルアーン',
      subtitle: '朗読と内省のための日々の伴侶',
    },

    search: {
      noResultTitle: 'データがありません',
      noResultMessage: '表示するデータがありません',
    },
  },

  athkar: {
    title: '日々の記念',
    subtitle: '毎日のズィクルと内省を継続しましょう',
  },

  ai: {
    header: {
      title: 'グローバル・イスラームAIアシスタント',
      subtitle:
        'クルアーン、スンナ、信頼できる学者に基づいた明確なイスラーム回答を提供します',
    },

    loading: {
      label: '読み込み中...',
    },

    error: {
      title: 'リクエスト上限に達しました',
      message:
        '現在サービスに接続できません。しばらくしてから再試行してください。',
    },

    input: {
      placeholder: 'イスラームについて質問してください...',
    },

    suggestions: [
      'ウドゥがない状態で礼拝できますか？',
      '利子（リバー）は完全に禁止されていますか？',
      '非ハラール環境での仕事の حكم',
      '旅行中に礼拝できますか？',
      '礼拝中に香水を使うことは許されますか？',
      '礼拝を無効にするものは何ですか？',
      '仕事で礼拝を遅らせる حكم',
    ],

    footer: {
      disclaimer:
        'このAIアシスタントは、イスラーム参考資料や検証された教育資料を含む、信頼できる知識ソースに基づいて回答を提供するよう設計されています。',

      note: '回答は情報提供のみを目的としており、必要に応じて学者の助言に代わるものではありません。',
    },
  },

  footer: {
    disclaimer:
      '表示されているすべてのコンテンツは信頼できる元の情報源に基づいています。誤りの報告やフィードバックを歓迎します。',

    tagline: '真正なイスラームコンテンツのために丁寧に構築されています',
  },

  hadith: {
    header: {
      hadithLabel: 'ハディース',
      backButton: '戻る',
    },

    sections: {
      hadithText: 'ハディース本文',
      arabicText: 'アラビア語本文',
      explanation: '解説',
      authentication: '真正性',
      lessons: '教訓と فائد',
    },
  },
  other: {
    note: '注記',
    theLanguage: '言語',
    part: 'パート',
    translation: '翻訳',
    verse: '節',
    chapter: '章',
    page: 'ページ',
    breakingNews: '速報',
  },
  dailyRemined: {
    title: '今日の光',
    subtitle:
      '今日のために選ばれた聖句とハディースについて、少し立ち止まって考えてみましょう。',
  },
  baseFooter: {
    contact: {
      title: 'お問い合わせ',
      name: 'あなたの名前',
      email: 'あなたのメール',
      msg: 'あなたのメッセージ',
      sendMsg: 'メッセージを送信',
    },
    followUs: 'フォローする',
    QA: 'クイックアクセス',
    logoB:
      'クルアーン、ハディース、礼拝時間、AIアシスタント、毎日のイスラムツール—all を1つのモダンプラットフォームに。',
    whatsapp: 'WhatsAppでチャット',
    rsr: '全著作権所有',
  },
  compareRelg: {
    note: 'このページでは、世界の主要な宗教の比較概要を紹介しています。イスラームの視点から言えば、クルアーンは以前の神聖な啓示がかつての諸民族に遣わされたものの、時の経過とともに人間の手による改変（タハリーフ）を被ったことを認めています。クルアーンにはこう記されています。「本当にわれこそは、その訓戒（クルアーン）をくだしたのである。また必ずそれを守護するものである。」（15:9）。このページでは、歴史的および文献的な証拠に照らして、これらの相違点を検証します。',
    mainTitle: '宗教を巡る理性的な旅',
    headerTitle: '人間の存在を定義する問い',
    story: `
想像してみてください。ふと目を開けると、あなたは終わりのない夜を高速で突き進む豪華な列車の中に座っています。周囲には考えうる限りの快適さがあります。優雅なテーブルに並ぶ豪華な食事、映画を映し出す輝くスクリーン、そして柔らかな座席に置かれたシルクの枕。

あなたは隣の乗客に不安げに尋ねます。
「私たちはどこにいるの？ 誰が私たちをこの列車に乗せたの？ そしてどこへ向かっているの？」

しかし、驚くべきは彼らの反応でした。

ある乗客は冷淡にこう答えます。
「そんなことがどうでもいいだろう？ この素晴らしい食事を楽しめよ。」

また別の乗客は嘲笑して言います。
「なぜそんな質問に頭を悩ませるんだ？ リラックスして映画でも見ていればいい。」

周囲の誰もが旅の楽しみと気晴らしに浸っています。しかし、あなたは深い恐怖に包まれます。なぜなら、この列車が最終目的地――すべての乗客がいつか降りなければならない駅――に向かっていることを、あなたは確信しているからです。

その時、真の問いが浮かび上がります。

あなたは旅の贅沢と気晴らしに没頭するのでしょうか。それとも、以下の3つの深淵な問いに対する答えを探し続けるのでしょうか。

創造主は誰か？
なぜ私たちはここにいるのか？
そして最後に何が待ち受けているのか？

この列車は地球であり、その旅とはあなたの人生そのものです。

人間自身にはこれらの答えがないため、宗教は「取扱説明書」として現れました。それぞれの宗教が、その列車の設計者自身から伝わったものであると主張しています。

それでは、これらの取扱説明書を、冷静で理性的な視点から精査してみましょう。
  `,
    core: {
      q1: {
        id: 'q1',

        title: '創造主は誰か？',

        intro: `
哲学的・論理的な観点から見ると、宇宙の「第一原因」である創造主は、物質、時間、空間を超越した存在でなければなりません。もし創造主が空腹、疲労、物理的な制限、あるいは空間的な制約を受けるのであれば、論理的にその存在は絶対的な創造主であることをやめ、被造物であり依存的な存在となってしまいます。依存的な存在は、究極的には存在全体の必然的な源泉としては機能し得ません。
  `,

        religions: {
          eastern: {
            title: '東洋の宗教',
            examples: ['ヒンドゥー教', '仏教'],

            answerNature: `
最古の形態である上座部仏教において、仏教は一般的に無神論的です。創造主としての神の存在に焦点を当てるのではなく、存在とは永遠の自然プロセス、因果律、相互に関連する法則から生じると考えます。

一方でヒンドゥー教は、「ブラフマン」と呼ばれる根本的な形而上学的実在について語ることがよくあります。しかし実際の崇拝においては、この究極の実在は、ヴィシュヌ、シヴァ、カーリーといった人間や動物の姿をした数え切れないほどの顕現や神々を通じて表現されます。
      `,

            objectiveCritique: `
哲学的な観点から見ると、仏教は、一貫した法則と物理的精度によって支配された高度に秩序ある宇宙が、本来の知的な原因なしにどのように生じ得るのかを説明するという課題に直面しています。

神の化身や物理的な表現を受け入れるヒンドゥー教の伝統では、神性は制限、葛藤、空腹、死、物質的な形態と結びついています。物理的に描写され、受肉し、あるいは自然プロセスに服する神は、理性的な視点からは、それを完全に超越した存在というよりも、創造物の一部のように見えてしまいます。
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'ユダヤ教',

            answerNature: `
ユダヤ教は、偶像や物理的な表現を超越した創造主への信仰を断言します。神（YHWH）は天と地の創造主として理解され、創造物とは本質的に区別されます。
      `,

            objectiveCritique: `
ここで提起される哲学的な懸念は、主に超越性そのものではなく、ヘブライ聖書のいくつかの箇所に見られる、神の普遍性の境界に関するものです。特定のテキストは、神をイスラエルの子らと密接に結びついた契約関係にあるものとして描いており、これが批判者からは民族的に排他的であると解釈されています。

さらに、一部の箇所では「人類を創造したことを悔やむ」（創世記6:6）や、創造の7日目に「休んだ」（出エジプト記31:17）など、神を描写するために非常に人間的な言葉が使われています。批判者は、そのような記述が、これらの属性を文字通りに解釈すべきか、比喩的に解釈すべきかという疑問を投げかけていると論じています。
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'キリスト教',

            answerNature: `
キリスト教は、父・子・聖霊という三位一体の教義を通じて、唯一の神への信仰を教えます。受肉の教義によれば、三位一体の第二の位格である「子」が、イエス・キリストという人物として人類の歴史に入り、人類の救いのために十字架で死にました。
      `,

            objectiveCritique: `
哲学的に、批判者は、受肉の教義が神性と人間性の属性の間に緊張を生み出すと主張します。伝統的に、神は永遠で無限で死を超越したものとして描写され、人間は有限で脆弱で死すべきものとされます。

完全な神性と完全な人間性が一つの人格において統合されるとき、課題が生じます。批判者は、永遠で自足的な存在が、どのようにして同時に空腹、睡眠、苦しみ、そして死を経験できるのかと問いかけます。この問題は、単純な神学的な神秘というよりも、超越と受肉の間の緊張として定式化されることが多いです。
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'イスラム教',

            answerNature: `
イスラム教は、完全に超越的で分割不可能な神の概念を提示します。クルアーンは、この概念を「アル・イフラース章」で簡潔にまとめています。

「言え、『彼はアッラー、唯一の方。アッラー、自存される方。産むこともなく、生まれることもなく、彼に比肩する者は何一人もいない。』」（クルアーン 112:1–4）

イスラム教における創造主は、物質的な形態の完全に外にあり、創造物とは区別されます。

「彼に似たものは何もない。」（クルアーン 42:11）

神は時間、空間、物理的な制限によって制限されることはありません。またクルアーンはこう述べています。

「彼を眠気が襲うこともなく、眠ることもない。」（クルアーン 2:255）

イスラム神学において、神は自存し、永遠であり、独立しており、創造物とは完全に区別される存在として理解されています。
      `,

            objectiveCritique: `
イスラムの哲学的観点から見ると、この理解は擬人化や受肉を避けることで、絶対的な超越性を維持しようと努めています。この概念は、創造主を、創造された存在の限界に縛られない、独立した必然的な第一原因という考え方と整合させることを目的としています。
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

        title: '人生の方法と目的は何か？',

        intro: `
もし賢明な創造主が存在するならば、人類が人生の目的、道徳的責任、そして生きるべき原則を説明する指針なしに放置されていると想定することは非合理的です。複雑なシステムが設計者からの指示を必要とするのと同様に、諸宗教は、なぜ私たちがここに存在し、どのように生きるべきかを理解するための枠組みを提供すると主張しています。
  `,

        religions: {
          eastern: {
            title: '東洋の宗教',

            examples: ['ヒンドゥー教', '仏教'],

            answerNature: `
仏教やヒンドゥー教などの東洋の伝統は、通常、霊的な教師や賢者によって発展させられた哲学的な教え、瞑想の実践、そして省察に依存しています。

仏教における究極の目標は、超越と内面的な解放の状態である「涅槃（ニルヴァーナ）」に到達し、苦しみから解放され、再生のサイクルから逃れることです。

多くのヒンドゥー教の伝統では、目標は「解脱（モクシャ）」であり、献身、知識、瞑想、あるいは規律ある行動を通じて達成されます。
      `,

            objectiveCritique: `
批判者は、これらのシステムは主に哲学的および体験的なものであり、超越的な創造主からの検証可能な啓示に基づくものではないと論じています。

また、世俗的な生活からの離脱、修道生活、禁欲に対する強い強調が、社会発展、科学の進歩、家族生活、文明の構築を促進する人間の本質的な側面と矛盾する可能性があると論じる人もいます。
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'ユダヤ教',

            answerNature: `
ユダヤ教において、生き方はモーセに啓示され、ヘブライ聖書（タナハ）に保存された契約の律法に根ざしています。宗教的な枠組みは、神の戒めへの服従と、神とイスラエルの子らの間の契約関係の維持に焦点を当てています。
      `,

            objectiveCritique: `
批判者は、ユダヤ教は歴史的に、人類全体に向けた普遍的な布教宗教としてではなく、特定の民族と結びついた契約を中心とした伝統として発展したと主張しています。

文献批判の観点からは、リチャード・エリオット・フリードマンらを含む一部の学者は、トーラーは数世紀にわたって、特にバビロン捕囚の頃からそれ以降にかけて、編集や改訂のプロセスを経たと主張しています。これにより、一部の批判者は、そのテキストをオリジナルな形で直接伝えられた完璧に保存された啓示と見なせるのかという疑問を抱いています。
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'キリスト教',

            answerNature: `
キリスト教は、人類の根本的な問題は罪と神からの分離であり、救いはイエスの犠牲的な死と復活への信仰を通じて達成されると教えています。したがって、人生の目的は神との和解と霊的な変容を通じて理解されます。
      `,

            objectiveCritique: `
歴史的に、イエスが語ったアラム語の福音書のオリジナル原稿は現存していないことが学術的に指摘されています。現存する最古のテキストは、イエスの死後数十年後に書かれたギリシャ語の写本です。バート・アーマンのような文献批判家は、新約聖書の初期のコピー間に数え切れないほどの異本が存在することを文書化してきました。

批判者はまた、キリスト教が歴史的に、経済、刑法、あるいは国家行政を統治する包括的な法的または政治的枠組みの構築よりも、霊的で個人的な救いにより大きな重きを置いてきたと論じています。一部の歴史家は、これが多くの西洋社会における宗教と国家権力の最終的な分離に寄与したと示唆しています。
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'イスラム教',

            answerNature: `
イスラム教は、霊的な献身と世俗的な責任を統合した、人間目的の包括的な理解を提示します。

クルアーンはこう述べています。

「私は、ジンと人間を、ただ私を礼拝するためだけに創造した。」（クルアーン 51:56）

イスラムの思考において、礼拝は儀式に限らず、正しい行い、正義、倫理的な振る舞い、知識の探求、そして社会への積極的な貢献を網羅しています。

イスラムの教えは、家族生活、経済、統治、慈善、社会的な責任への実践的な関わりと、霊的な成長のバランスをとることを求めています。
      `,

            objectiveCritique: `
イスラムの視点から見ると、クルアーンはユニークに保存された啓示を代表しています。イスラム教徒は、そのテキストが不変であり、イスラムの初期世代から現在に至るまで、書かれた写本と口承暗記の両方を通じて継続的に伝えられてきたと主張しています。

よく引用される例としては、バーミンガムのクルアーン写本などの古代のテキストや、世界中の何百万人ものイスラム教徒によって維持されている広範な口承暗記の伝統があります。

イスラム法（シャリーア）もまた、金融、慈善、家族法、刑法、統治といった分野を扱う、包括的な倫理・法的枠組みとして提示されています。支持者は、これがイスラムに、単なる純粋な霊的伝統ではない、完全な道徳的かつ文明的なシステムの特性を与えていると論じています。
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

        title: '最終駅の後に何が起こるか？',

        subtitle: '運命、正義、そして来世',

        intro: `
死後に究極の正義が存在しなければ、人生は非常に恣意的で、道徳的に未解決なものに感じられるかもしれません。独裁者は何の報いも受けずに死ぬ可能性があり、被害者は正義を得られないまま世界を去る可能性があります。これは人類の最も古い哲学的問いの一つを呼び起こします。死は終わりなのか、それとも現世を超えた最後の審判があるのか？
  `,

        religions: {
          eastern: {
            title: '東洋の宗教',

            examples: ['ヒンドゥー教', '仏教'],

            answerNature: `
多くの東洋の伝統は、魂や意識の流れが繰り返される再生のサイクルを経るという、輪廻の概念を受け入れています。個人の将来の状態は「カルマ」、すなわち過去の行為の道徳的帰結によって決定されます。
      `,

            objectiveCritique: `
批判者は、輪廻が正義と責任に関する哲学的問題を提起すると論じています。もし人が、意識的に思い出せない過去の生存中に行われた行為のために、新しい人生で結果を被るならば、処罰の教育的・道徳的目的を理解することは困難になります。

この観点からは、意識的な記憶を伴わない責任は、意味のある道徳的責任から切り離されているように見えるかもしれません。
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: '物質主義と無神論',

            answerNature: `
物質主義的および無神論的な世界観は、一般的に死を意識的な存在の終わりと見なします。人間は、生物学的な死後に意識が完全に停止する生物学的有機体として理解されています。
      `,

            objectiveCritique: `
批判者は、厳格な物質主義は、道徳、正義、根源的な意味の客観的な基礎を提供することに苦労すると論じています。もし抑圧者も被害者も、最終的には説明責任を果たすことなく虚無の中に消えていくのであれば、犠牲、道徳的義務、正義といった概念は、最終的には普遍的に拘束力のあるものではなく、主観的または社会的な構築物にすぎないように見えるかもしれません。

しかし、世俗的倫理の支持者は、来世への信仰なしに、理性、共感、社会的な責任を通じて道徳が依然として生じ得ると論じています。
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'キリスト教',

            answerNature: `
キリスト教は、救いと永遠の命は、イエス・キリストへの信仰と、人類の罪のための彼の犠牲的な贖いを受け入れることによって達成されると教えています。したがって、天国と永遠の救いは、キリストへの信仰と神の恵みに密接に関連しています。
      `,

            objectiveCritique: `
批判者は、主に信仰に基づく救いが、どのように普遍的な正義の原則と関係するのかと疑問を抱いています。哲学的に、一部の人々は、この枠組みが、特定の神学的な教義の受け入れに正直に苦闘する道徳的に正しい人が救いを否定される可能性がある一方で、重大な悪事を働いたものの死の直前に信仰を受け入れた人が永遠の報いを得る可能性があることを暗示していると主張しています。

キリスト教の神学者は、救いとは単なる口先だけの信仰ではなく、誠実な信仰と本物の悔い改めの両方を伴うものだとしばしば回答します。
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'イスラム教',

            answerNature: `
イスラム教は、来世を、完全な道徳的責任と神の正義のシステムとして提示します。

クルアーンはこう述べています。

「いかなる罪人も、他人の罪を背負うことはない。」（クルアーン 6:164）

イスラム教における救いは、信仰と正しい行いの両方に一貫して関連付けられています。

「信仰し、善行を行う者たち…」（2:25を含むクルアーン全体で繰り返される）

イスラム教は、世俗的な人生は一時的な試練であり、最終的な報酬や罰の場所ではないと教えています。

「生と死を創造されたのは、あなたがたの中の誰が最も優れた行いをするかを試すためである。」（クルアーン 67:2）
      `,

            objectiveCritique: `
イスラム神学において、審判の日は、どんなに些細な行いであっても説明責任を問われる、究極の正義の法廷を代表しています。

クルアーンはこう述べています。

「原子の重さであれ善を行えば、それを見ることになる。原子の重さであれ悪を行えば、それを見ることになる。」（クルアーン 99:7–8）

この枠組みは、個人の責任と絶対的な正義の両方を維持しようとし、同時に、いかなる抑圧や善行も、最終的には結果なしに失われることはないという道徳的な確信を提供します。
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
      navbar: '宗教比較',
      hero: {
        subtitle:
          '創造主、存在の目的、道徳、そして死後に何が待ち受けているのかという、人類の最大の問いを探求する、穏やかで深淵な哲学的旅。',

        subtitleHighlight:
          '創造主、存在の目的、道徳、そして死後に何が待ち受けているのか。',

        scrollIndicator: '下にスクロールして旅を始める',
      },

      storySection: {
        badge: '列車の例え',

        titleLine1: '問いを立てる前に',
        titleLine2: '宗教について…',

        intro:
          'すべての人間は、いつか気晴らしが消え去る静寂の瞬間に到達します。そして、最も深淵な問いがついに浮かび上がるのです。',

        ending: 'この列車は地球であり、',
        ending2: 'その旅とはあなたの人生そのものです。',
      },

      coreQuestions: {
        sectionLabel: '主要セクション',
        title: '根本的な問い',

        answerNatureTitle: '答えの性質',

        philosophicalDiscussionTitle: '哲学的な議論',

        referencesTitle: '参照',
      },

      futureResearch: {
        sectionLabel: '今後の研究',

        title: 'その他の問い',

        loaderBadge: 'その他の問いを準備中',

        headingLine1: '旅は',
        headingLine2: '続く…',

        description:
          '追加の哲学的・神学的な研究が、同じ構造化された比較アプローチを用いて調査・準備されています。',

        topics: [
          '道徳',
          '科学',
          '奇跡',
          '意識',
          '自由意志',
          '苦しみ',
          '歴史的な保存',
          '予言',
          '人間の本質',
          '意味',
          '文明',
          '倫理',
        ],

        footer: '新しいセクションがまもなく追加されます',
      },

      imageAlt: {
        hero: '宗教比較',
      },
    },
  },
};
