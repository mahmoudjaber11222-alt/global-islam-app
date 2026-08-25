export default {
  splash: {
    version: '버전',
    practice: '연습',
    share: '공유',
    logo: '글로벌 이슬람',
  },
  homeApp: {
    north: '북',
    east: '동',
    west: '서',
    south: '남',
    active: '큐블라 활성화',
    disabled: '큐블라 나침반 열기',
    welcome: '돌아오신 것을 환영합니다',
    greet: '아살라무 알라이쿰',
    hour: '시간',
    minute: '분',
    second: '초',
    toLeft: '왼쪽으로',
    toRight: '오른쪽으로',
    fromNorth: '북쪽에서',
  },
  quranApp: {
    medinan: '메디나 편',
    meccan: '메카 편',
    arabicName: '아랍어 이름',
    englishName: '영어 이름',
    details: '번역과 타프시르(해설)을 보려면 구절을 선택하세요',
    selectRes: '자료 선택',
    retry: '다시 시도',
    loadErr1: '해설을 불러올 수 없습니다. 다시 시도해 주세요.',
    loadErr2: '불러오기 실패',
    author: '저자',
    explain: '해설',
  },
  qiblaApp: {
    compass: '큐블라 나침반',
    accuracy: '정확도',
    offline: 'GPS 오프라인',
    tracking: 'GPS 추적 중',
    aligned:
      '큐블라 방향을 향하고 있습니다. 정확한 예배 방향을 위해 안정적으로 잡으세요.',
    notAligned:
      '기기를 수평으로 들고 화살표가 큐블라를 가리킬 때까지 회전하세요.',
    heading: '기기 방향',
    turn: '회전',
    alignedQibla: '큐블라와 정렬됨',
  },
  aiApp: {
    answer: '답변',
  },
  prayerApp: {
    locationRequired: '정확한 예배 시간을 위해 위치 서비스가 필요합니다.',
    schedule: '예배 시간표',
    refresh: '새로고침',
    sunrise: '일출',
    upcoming: '다음 예배',
  },
  settingsApp: {
    reciterTitle: '아잔 낭송자',
    reciterSub: '선호하는 목소리를 선택하세요',
    notSelected: '선택 안 됨',
    preview: '미리듣기',
    cancel: '취소',
    muezzin: '무에진',
    preNot: '아잔 전 알림',
    preNotDet: '예배 시간 15분 전에 알림',
    theme: '다크 모드',
    dark: '현재 다크 테마',
    light: '현재 라이트 테마',
    about: '정보',
    selectReciter: '낭송자 선택',
  },
  athan: {
    mainTitle: '아잔 · 예배의 부름',
    stop: '아잔 중지',
    error: '아잔 오디오를 불러올 수 없습니다',
    prayerTime: '예배 시간',
    play: '재생',
    pause: '일시정지',
    dismiss: '닫기',
  },
  athkarApp: {
    completed: '완료',
    remaining: '남음',
    reset: '초기화',
    athkar: '아즈카르',
    mention: '지크르',
    descM: '축복으로 하루를 시작하세요',
    descE: '보호로 하루를 마무리하세요',
    remmember: '일일 기억',
    cat: '기도 카테고리',
    category: '카테고리',
  },
  contentNormal: {
    searchSection: {
      placeholder: '하디스 검색...',
      button: '검색',
      books: {
        label: '도서',
        options: {
          bukhari: '부카리',
          muslim: '무슬림',
          tirmidhi: '티르미디',
          abudawood: '아부 다우드',
          nasai: '나사이',
          ibnmajah: '이븐 마자',
        },
      },
    },

    fallbackLanguageToast: {
      title: '현재 언어는 아직 지원되지 않습니다',
      msg: '이 언어는 현재 하디스 데이터셋에서 아직 지원되지 않습니다.',
      description:
        '하디스를 원활하게 검색하고 탐색할 수 있도록 영어가 자동으로 대체 언어로 선택되었습니다. 더 넓은 다국어 지원과 향상된 결과를 위해 고급 모드를 사용해볼 수도 있습니다.',
    },

    initialPlaceholder:
      '하디스를 검색하여 등급, 전승자 및 참고 정보 등의 세부 정보를 확인하세요',

    loading: {
      label: '하디스 불러오는 중...',
    },

    hadithCard: {
      showMore: '더 보기',
      showLess: '간단히 보기',

      header: {
        hadithPrefix: '하디스 #',
        referencesTitle: '참고 자료',
        referenceLabel: '참고',
        inBookReference: '도서 내 참고',
        arabicReference: '아랍어 참고',
      },
    },

    emptyState: '하디스를 찾을 수 없습니다',

    pagination: {
      prev: '이전',
      next: '다음',
    },
  },

  switch: {
    title: {
      advanced: '고급 모드',
      normal: '일반 모드',
    },

    description: {
      advanced: '더 깊은 이해를 제공하는 의미 기반 검색',
      normal: '필터 기반의 빠른 검색',
    },
  },

  navbar: {
    routes: {
      home: '홈',
      prayers: '기도',
      quran: '꾸란',
      athkar: '아즈카르',
      articles: '기사',

      articlesNested: {
        islamicHistory: '이슬람 역사',
        prayerInIslam: '이슬람의 기도',
        womenInIslam: '이슬람의 여성',
        purification: '정결과 우두',
      },

      learn: '배우기',

      learnNested: {
        quranTajweed: '꾸란과 타즈위드 배우기',
        arabic: '아랍어 배우기',
      },

      dashboard: '대시보드',
      aiAssistant: 'AI 어시스턴트',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: '다음과 함께 이슬람을 탐구하세요',
      clarity: '명확성',
      peace: '& 평화',
    },

    description:
      'AI와 안내된 지식을 통해 배우고 질문하며 진정한 이해를 발견하세요. 명확성과 성찰을 위해 설계되었습니다.',

    actions: {
      introductionToIslam: '이슬람 알아보기',
      islamQA: '이슬람 Q&A (AI 어시스턴트)',
      continueWebsite: '웹사이트로 계속하기',
    },
  },
  learning: {
    quran: {
      title: '꾸란과 타즈위드 배우기',
      subtitle: '꾸란 암송을 향상시키고 타즈위드 규칙을 단계별로 이해하세요.',
    },
    arabic: {
      title: '아랍어 배우기',
      subtitle: '명확하고 체계적인 수업을 통해 아랍어 실력을 키워보세요.',
    },
    default: {
      title: '학습 섹션',
      subtitle: '지식과 이해를 강화하기 위해 설계된 교육 콘텐츠를 탐색하세요.',
    },
  },
  explore: {
    searchBar: {
      title: '하디스 컬렉션 검색',

      subtitle: '주제, 의미 또는 전체 문장을 사용하여 자연스럽게 검색하세요.',

      placeholder: '예: 부모에 대한 친절에 관한 하디스',

      button: '검색',
    },

    header: {
      title: '하디스 검색 라이브러리',
      subtitle: '현대적인 읽기 경험으로 정통 하디스를 즉시 탐색하세요.',
    },

    content: {
      heroTitle: '강력한 검색으로 정통 하디스 컬렉션을 발견하세요',

      loading: {
        label: '하디스 컬렉션 검색 중...',
      },

      error: {
        title: '하디스를 불러올 수 없습니다',
        message:
          '현재 전승을 가져올 수 없습니다. 연결을 확인하고 다시 시도하세요.',
      },

      empty: {
        title: '일치하는 하디스를 찾을 수 없습니다',
      },

      card: {
        reference: '하디스 참고',
        readMore: '전체 하디스 읽기',
      },
    },
  },

  home: {
    news: {
      title: '무슬림 커뮤니티 소식',
      subtitle: '이슬람 세계의 주요 업데이트를 확인하세요',
    },

    prayer: {
      title: '예배 카운트다운',
      subtitle: '다음 예배를 준비하세요',
      button: '예배 시간 보기',
      nextPrayerLabel: '다음 예배 시간:',
    },

    athkar: {
      title: '아침 & 저녁 아즈카르',
      subtitle: '마음을 연결하는 매일의 기억',
      button: '더 보기',
    },

    qibla: {
      title: '키블라 방향',
      subtitle: '어디에 있든 카바 방향을 찾으세요',
      locationLoading: '위치 정보를 가져오는 중...',
      enableLocation: '위치 활성화',
      refreshLocation: '키블라 방향 새로고침',

      warning:
        '기기가 방향 센서를 지원하지 않으면 나침반 정확도가 영향을 받을 수 있습니다.',

      errorTitle: '권한 거부됨',
    },
  },

  prayers: {
    nextLabel: '다음 예배 시간',

    header: {
      title: '예배 시간',
      subtitle: '창조주와의 매일의 연결 순간',
    },

    times: {
      Fajr: '파즈르',
      Dhuhr: '주흐르',
      Asr: '아스르',
      Maghrib: '마그리브',
      Isha: '이샤',
    },

    qibla: {
      loading: '위치 정보를 가져오는 중...',
      warning:
        'OS가 방향을 지원하지 않으면 나침반 계산에 영향을 줄 수 있습니다.',
      errorTitle: '권한 거부됨',
      enableLocation: '위치 활성화',
      refreshLocation: '키블라 방향 새로고침',
    },

    list: {
      warning: '시간은 계산 방식에 따라 약간 다를 수 있습니다.',
    },
  },

  quran: {
    header: {
      title: '꾸란',
      subtitle: '낭송과 성찰을 위한 일상의 동반자',
    },

    search: {
      noResultTitle: '데이터 없음',
      noResultMessage: '표시할 데이터가 없습니다',
    },
  },

  athkar: {
    title: '일일 기억',
    subtitle: '매일의 기억과 성찰을 꾸준히 유지하세요',
  },

  ai: {
    header: {
      title: '글로벌 이슬람 AI 어시스턴트',
      subtitle:
        '꾸란, 순나, 신뢰할 수 있는 학자에 기반한 명확한 이슬람 답변을 제공합니다',
    },

    loading: {
      label: '로딩 중...',
    },

    error: {
      title: '요청 한도 초과',
      message:
        '현재 지식 서비스에 연결할 수 없습니다. 잠시 후 다시 시도하세요.',
    },

    input: {
      placeholder: '이슬람에 대해 질문하세요...',
    },

    suggestions: [
      '우두가 없으면 기도할 수 있나요?',
      '이자(리바)는 완전히 금지인가요?',
      '비할랄 환경에서의 근무 규정',
      '여행 중 기도할 수 있나요?',
      '기도 중 향수를 사용하는 것이 허용되나요?',
      '기도를 무효화하는 것은 무엇인가요?',
      '일 때문에 기도를 지연시키는 규정',
    ],

    footer: {
      disclaimer:
        '이 AI 어시스턴트는 꾸란, 순나 및 검증된 교육 자료를 포함한 신뢰할 수 있는 지식 소스를 기반으로 답변을 제공합니다.',

      note: '답변은 정보 제공용이며 필요한 경우 학자의 조언을 대체하지 않습니다.',
    },
  },

  footer: {
    disclaimer:
      '모든 콘텐츠는 신뢰할 수 있는 원본 출처에서 제공됩니다. 오류나 피드백은 검토 및 수정됩니다.',

    tagline: '정통 이슬람 콘텐츠를 위해 정성스럽게 제작됨',
  },

  hadith: {
    header: {
      hadithLabel: '하디스',
      backButton: '뒤로',
    },

    sections: {
      hadithText: '하디스 본문',
      arabicText: '아랍어 본문',
      explanation: '해설',
      authentication: '검증',
      lessons: '교훈 및 فوائد',
    },
  },
  other: {
    note: '참고',
    theLanguage: '언어',
    part: '부분',
    translation: '번역',
    verse: '절',
    chapter: '장',
    page: '페이지',
    breakingNews: '속보',
  },
  dailyRemined: {
    title: '오늘의 빛',
    subtitle: '오늘을 위해 선택된 성구와 하디스를 잠시 멈추고 묵상해보세요.',
  },
  baseFooter: {
    contact: {
      title: '문의하기',
      name: '이름',
      email: '이메일',
      msg: '메시지',
      sendMsg: '메시지 보내기',
    },
    followUs: '팔로우하기',
    QA: '빠른 접근',
    logoB:
      '꾸란, 하디스, 기도 시간, AI 도우미 및 일일 이슬람 도구—all 를 하나의 현대적인 플랫폼에서 제공합니다.',
    whatsapp: 'WhatsApp으로 채팅',
    rsr: '모든 권리 보유',
  },
  compareRelg: {
    note: '이 페이지는 세계 주요 종교에 대한 비교 개요를 제공합니다. 이슬람적 관점에서 꾸란은 이전의 신성한 계시가 과거의 민족들에게 보내졌으나, 시간이 흐르면서 인간에 의한 변개(타흐리프)를 겪었다고 확언합니다. 꾸란에는 다음과 같이 기록되어 있습니다. "실로 우리가 꾸란을 내렸으며, 실로 우리가 그것을 수호하리라" (15:9). 이 페이지는 역사적 및 문헌적 증거에 비추어 이러한 차이점들을 검토합니다.',
    mainTitle: '종교를 가로지르는 이성적인 여정',
    headerTitle: '인간의 존재를 정의하는 질문들',
    story: `
상상해보십시오. 당신이 문득 눈을 떠보니, 끝없는 밤을 뚫고 고속으로 달리는 호화로운 열차 안에 앉아 있습니다. 주위에는 상상할 수 있는 모든 안락함이 갖춰져 있습니다. 우아한 식탁에 차려진 호화로운 식사, 영화를 상영하는 빛나는 스크린, 그리고 푹신한 좌석 위에 놓인 실크 베개까지 말입니다.

당신은 옆에 앉은 승객에게 불안한 마음으로 묻습니다.
"우리는 어디에 있는 거죠? 누가 우리를 이 열차에 태운 건가요? 그리고 우리는 어디로 가고 있는 거죠?"

하지만 놀라운 것은 그들의 반응이었습니다.

어떤 승객은 차갑게 대꾸합니다.
"그게 무슨 상관이죠? 이 음식 좀 맛보세요, 정말 놀라워요."

또 다른 승객은 조롱하듯 말합니다.
"왜 그런 질문으로 골치를 썩이죠? 그냥 편히 앉아서 영화나 즐기세요."

주위의 모든 이들이 여행의 즐거움과 유흥에 빠져 있지만, 당신은 깊은 두려움에 사로잡힙니다. 이 열차가 결국 모든 승객이 내려야만 하는 종착역을 향해 달려가고 있음을 당신은 분명히 알고 있기 때문입니다.

바로 그때, 진정한 질문이 떠오릅니다.

당신은 여행의 사치와 유흥에 묻혀 지낼 것입니까, 아니면 가장 깊은 세 가지 질문에 대한 답을 계속해서 찾아 나갈 것입니까?

창조주는 누구인가?
우리는 왜 여기에 있는가?
그리고 마지막에는 무엇이 우리를 기다리고 있는가?

이 열차는 지구이고, 그 여행은 당신의 삶 그 자체입니다.

인간은 스스로 이러한 해답을 가지고 있지 않기에, 종교는 각자가 열차의 설계자로부터 직접 전해 받았다고 주장하는 "사용 설명서"로 등장했습니다.

그렇다면, 이 사용 설명서들을 차분하고 이성적인 검증의 잣대 위에 올려놓아 봅시다.
  `,
    core: {
      q1: {
        id: 'q1',

        title: '창조주는 누구인가?',

        intro: `
철학적이고 논리적인 관점에서 볼 때, 우주의 "제1원인"인 창조주는 물질, 시간, 공간을 완전히 초월한 존재여야 합니다. 만약 창조주가 굶주림, 피로, 물리적 한계, 또는 공간적 제약을 받는다면, 논리적으로 그러한 존재는 절대적인 창조주로서의 지위를 잃게 되며, 오히려 피조물이고 의존적인 존재가 됩니다. 의존적인 존재는 궁극적으로 존재 전체의 필연적인 근원으로서 기능할 수 없습니다.
  `,

        religions: {
          eastern: {
            title: '동양 종교',
            examples: ['힌두교', '불교'],

            answerNature: `
가장 초기 형태인 상좌부 불교에서 불교는 일반적으로 무신론적입니다. 창조주 신의 존재에 집중하기보다는, 존재란 영원한 자연 과정, 인과율, 그리고 서로 연결된 법칙에서 발생한다고 봅니다.

반면 힌두교는 흔히 "브라만"이라 불리는 근본적인 형이상학적 실재에 대해 이야기합니다. 그러나 실제 숭배에 있어서 이 궁극적인 실재는 비슈누, 시바, 칼리처럼 인간이나 동물의 모습을 한 수많은 현현과 신들을 통해 표현됩니다.
      `,

            objectiveCritique: `
철학적 관점에서 불교는 일관된 법칙과 물리적 정밀함에 의해 지배되는 고도로 질서 정연한 우주가, 본래의 지적인 원인 없이 어떻게 생겨날 수 있는지 설명해야 하는 과제에 직면해 있습니다.

신의 화신이나 물리적 묘사를 받아들이는 힌두교 전통에서 신성은 한계, 갈등, 굶주림, 죽음, 물질적 형태와 결합되어 있습니다. 물리적으로 묘사되거나 육신을 입거나 자연적인 과정에 종속되는 신은, 이성적인 시각에서 볼 때 그것을 완전히 초월한 존재라기보다 창조물의 일부처럼 보일 수 있습니다.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: '유대교',

            answerNature: `
유대교는 우상이나 물리적 묘사를 초월한 창조주에 대한 믿음을 확언합니다. 신(YHWH)은 하늘과 땅의 창조주로 이해되며 창조물과는 본질적으로 구별됩니다.
      `,

            objectiveCritique: `
여기서 제기되는 철학적 우려는 초월성 그 자체가 아니라, 히브리 성경의 일부 구절에서 나타나는 신의 보편성에 대한 경계에 관한 것입니다. 특정 텍스트는 신을 이스라엘 자손들과 밀접하게 맺어진 계약 관계에 있는 존재로 묘사하며, 이는 비판자들로부터 민족적으로 배타적이라는 해석을 낳기도 합니다.

게다가 일부 구절은 "인류를 창조한 것을 후회"(창세기 6:6)하거나 창조 후 일곱째 날에 "쉬었다"(출애굽기 31:17)는 등 신을 묘사하기 위해 매우 인간적인 언어를 사용합니다. 비판자들은 그러한 묘사가 이러한 속성을 문자 그대로 해석해야 할지, 은유적으로 해석해야 할지 의문을 제기한다고 주장합니다.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: '기독교',

            answerNature: `
기독교는 성부, 성자, 성령이라는 삼위일체 교리를 통해 유일신에 대한 믿음을 가르칩니다. 성육신 교리에 따르면 삼위일체의 제2위격인 '성자'가 예수 그리스도라는 인물로 인류 역사에 들어와 인류의 구원을 위해 십자가에서 죽었습니다.
      `,

            objectiveCritique: `
철학적으로 비판자들은 성육신 교리가 신의 속성과 인간의 속성 사이에 긴장을 유발한다고 주장합니다. 전통적으로 신은 영원하고 무한하며 죽음을 초월한 존재로 묘사되는 반면, 인간은 유한하고 취약하며 죽을 운명으로 묘사됩니다.

완전한 신성과 완전한 인성이 한 인격으로 통합될 때 과제가 발생합니다. 비판자들은 어떻게 영원하고 자족적인 존재가 동시에 굶주림, 수면, 고통, 죽음을 경험할 수 있는지 묻습니다. 이 문제는 단순한 신학적 신비라기보다 초월과 성육신 사이의 긴장으로 규정되는 경우가 많습니다.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: '이슬람교',

            answerNature: `
이슬람교는 완전히 초월적이고 분할 불가능한 신의 개념을 제시합니다. 꾸란은 이 개념을 '알 이클라스(순수) 장'에서 간결하게 요약합니다.

"일러가로되, 그는 알라, 유일하신 분이시라. 알라는 자존하시며, 낳지도 아니하시고 낳음을 받지도 아니하셨으니, 그와 비견되는 자 아무도 없음이라." (꾸란 112:1–4)

이슬람에서 창조주는 물질적 형태를 완전히 벗어나 있으며 창조물과 구별됩니다.

"그와 같은 것은 아무것도 없느니라." (꾸란 42:11)

신은 시간, 공간, 물리적 제한에 얽매이지 않습니다. 또한 꾸란은 다음과 같이 말합니다.

"그분은 졸지도 않으시고 주무시지도 않으시느니라." (꾸란 2:255)

이슬람 신학에서 신은 자존하고, 영원하며, 독립적이고, 창조물과는 완전히 구별되는 존재로 이해됩니다.
      `,

            objectiveCritique: `
이슬람 철학적 관점에서 이러한 이해는 의인화나 성육신을 배제함으로써 절대적인 초월성을 유지하려 노력합니다. 이 개념은 창조주를 창조된 존재의 한계에 얽매이지 않는 독립적이고 필연적인 제1원인이라는 생각과 정렬시키는 것을 목적으로 합니다.
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

        title: '삶의 방식과 목적은 무엇인가?',

        intro: `
만약 현명한 창조주가 존재한다면, 인류가 삶의 목적, 도덕적 책임, 그리고 살아가야 할 원칙을 설명하는 지침 없이 방치되었다고 가정하는 것은 비합리적입니다. 복잡한 시스템이 설계자로부터의 지시를 필요로 하는 것과 마찬가지로, 종교들은 우리가 왜 여기에 존재하며 어떻게 살아야 하는지 이해하기 위한 틀을 제공한다고 주장합니다.
  `,

        religions: {
          eastern: {
            title: '동양 종교',

            examples: ['힌두교', '불교'],

            answerNature: `
불교나 힌두교와 같은 동양 전통은 보통 영적 스승이나 현자들에 의해 발전된 철학적 가르침, 명상 수행, 성찰에 의존합니다.

불교에서 궁극적인 목표는 초월과 내면적 해탈의 상태인 '열반(니르바나)'에 도달하여 고통으로부터 해방되고 윤회의 고리에서 벗어나는 것입니다.

많은 힌두교 전통에서 목표는 '해탈(목샤)'이며, 이는 헌신, 지식, 명상, 혹은 규율 있는 행동을 통해 달성됩니다.
      `,

            objectiveCritique: `
비판자들은 이러한 시스템이 주로 철학적이고 경험적인 성격이 강하며, 초월적인 창조주로부터 온 검증 가능한 계시에 기반한 것이 아니라고 주장합니다.

또한 세속적인 삶으로부터의 이탈, 수도 생활, 금욕에 대한 강한 강조가 사회 발전, 과학적 진보, 가족 생활, 문명 구축을 촉진하는 인간 본연의 측면과 충돌할 수 있다고 논하는 이들도 있습니다.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: '유대교',

            answerNature: `
유대교에서 삶의 방식은 모세에게 계시되고 히브리 성경(타나흐)에 보존된 계약의 율법에 뿌리를 두고 있습니다. 종교적 틀은 신의 계명에 대한 복종과 신과 이스라엘 자손 간의 계약 관계 유지에 초점을 맞춥니다.
      `,

            objectiveCritique: `
비판자들은 유대교가 역사적으로 인류 전체를 향한 보편적인 포교 종교가 아니라, 특정 민족과 맺은 계약을 중심으로 발전한 전통이라고 주장합니다.

문헌 비평 관점에서 리처드 엘리엇 프리드먼을 포함한 일부 학자들은 토라가 수세기에 걸쳐, 특히 바빌론 유수 전후로 편집과 개정 과정을 거쳤다고 주장합니다. 이로 인해 일부 비판자들은 해당 텍스트를 원형 그대로 직접 전달된 완벽하게 보존된 계시로 간주할 수 있는지 의문을 제기합니다.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: '기독교',

            answerNature: `
기독교는 인류의 근본적인 문제는 죄와 신으로부터의 분리이며, 구원은 예수의 희생적인 죽음과 부활에 대한 믿음을 통해 달성된다고 가르칩니다. 따라서 삶의 목적은 신과의 화해와 영적인 변화를 통해 이해됩니다.
      `,

            objectiveCritique: `
역사적으로 예수가 사용한 아람어 복음서의 원본 원고는 현존하지 않음이 학술적으로 지적됩니다. 가장 오래된 텍스트는 예수의 삶 이후 수십 년 뒤에 기록된 그리스어 사본입니다. 바트 어만과 같은 문헌 비평가들은 신약성경의 초기 사본들 사이에 수많은 이본이 존재함을 문서화해 왔습니다.

비판자들은 또한 기독교가 역사적으로 경제, 형법, 국가 행정을 다스리는 포괄적인 법적 또는 정치적 틀을 구축하기보다 영적이고 개인적인 구원에 더 큰 무게를 두어왔다고 논합니다. 일부 역사가들은 이것이 많은 서구 사회에서 종교와 국가 권력의 최종적인 분리에 기여했다고 시사합니다.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: '이슬람교',

            answerNature: `
이슬람교는 영적인 헌신과 세속적인 책임을 통합한 인류 목적에 대한 포괄적인 이해를 제시합니다.

꾸란은 이렇게 말합니다.

"나는 진들과 인간들을 오직 나를 예배하게 하려고 창조하였노라." (꾸란 51:56)

이슬람적 사고에서 예배는 의식에만 국한되지 않고, 올바른 행동, 정의, 윤리적 태도, 지식 탐구, 사회에 대한 적극적인 기여를 포함합니다.

이슬람의 가르침은 가족 생활, 경제, 통치, 자선, 사회적 책임에 대한 실천적 참여와 영적 성장의 균형을 이룰 것을 요구합니다.
      `,

            objectiveCritique: `
이슬람적 시각에서 볼 때 꾸란은 독특하게 보존된 계시를 대표합니다. 무슬림들은 그 텍스트가 불변하며, 이슬람 초기 세대부터 현재에 이르기까지 기록된 사본과 구전 암기를 통해 지속적으로 전해져 왔다고 주장합니다.

자주 인용되는 예로는 버밍엄 꾸란 사본과 같은 고대 텍스트들과 전 세계 수백만 무슬림들에 의해 유지되고 있는 광범위한 구전 암기 전통이 있습니다.

이슬람법(샤리아) 또한 금융, 자선, 가족법, 형법, 통치와 같은 분야를 다루는 포괄적인 윤리 및 법적 틀로 제시됩니다. 지지자들은 이것이 이슬람에 순수한 영적 전통을 넘어선 완전한 도덕적·문명적 시스템의 특성을 부여한다고 논합니다.
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

        title: '종착역 이후에는 무슨 일이 일어나는가?',

        subtitle: '운명, 정의, 그리고 내세',

        intro: `
사후에 궁극적인 정의가 존재하지 않는다면, 삶은 매우 자의적이고 도덕적으로 미해결인 상태로 느껴질 수 있습니다. 독재자는 아무런 대가도 치르지 않고 죽을 수 있고, 피해자는 정의를 얻지 못한 채 세상을 떠날 수 있습니다. 이는 인류의 가장 오래된 철학적 질문 중 하나를 불러일으킵니다. 죽음은 끝인가, 아니면 현세를 넘어선 마지막 심판이 있는가?
  `,

        religions: {
          eastern: {
            title: '동양 종교',

            examples: ['힌두교', '불교'],

            answerNature: `
많은 동양 전통은 영혼이나 의식의 흐름이 반복되는 재생의 고리를 거친다는 윤회 개념을 받아들입니다. 개인의 미래 상태는 '카르마', 즉 과거 행동의 도덕적 결과에 의해 결정됩니다.
      `,

            objectiveCritique: `
비판자들은 윤회가 정의와 책임에 관한 철학적 문제를 제기한다고 논합니다. 만약 사람이 의식적으로 기억할 수 없는 과거의 생에서 저지른 행동 때문에 새로운 삶에서 결과를 겪는다면, 처벌의 교육적·도덕적 목적을 이해하기는 어려워집니다.

이러한 관점에서 볼 때, 의식적인 기억이 없는 책임은 의미 있는 도덕적 책임으로부터 단절된 것처럼 보일 수 있습니다.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: '물질주의와 무신론',

            answerNature: `
물질주의적이고 무신론적인 세계관은 일반적으로 죽음을 의식적인 존재의 끝으로 봅니다. 인간은 생물학적 죽음 이후 의식이 완전히 멈추는 생물학적 유기체로 이해됩니다.
      `,

            objectiveCritique: `
비판자들은 엄격한 물질주의가 도덕, 정의, 근원적인 의미에 대한 객관적인 기초를 제공하는 데 어려움을 겪는다고 논합니다. 만약 억압자도 피해자도 결국 아무런 설명 책임도 지지 않고 허무 속으로 사라진다면, 희생, 도덕적 의무, 정의와 같은 개념들은 궁극적으로 보편적인 구속력을 갖지 못한 채 주관적이거나 사회적인 구성물로 비칠 수 있습니다.

하지만 세속적 윤리 지지자들은 내세에 대한 믿음 없이도 이성, 공감, 사회적 책임을 통해 도덕이 여전히 발생할 수 있다고 주장합니다.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: '기독교',

            answerNature: `
기독교는 구원과 영생이 예수 그리스도에 대한 믿음과 인류의 죄를 위한 그의 희생적 대속을 받아들임으로써 달성된다고 가르칩니다. 따라서 천국과 영원한 구원은 그리스도에 대한 믿음 및 신의 은총과 밀접하게 연관됩니다.
      `,

            objectiveCritique: `
비판자들은 주로 믿음에 기반한 구원이 보편적인 정의의 원칙과 어떻게 관계하는지 의문을 제기합니다. 철학적으로 일부 사람들은 이 틀이 특정 신학적 교리를 받아들이는 데 정직하게 고뇌하는 도덕적으로 올바른 사람이 구원을 거부당할 수 있는 반면, 중대한 악행을 저질렀지만 죽기 직전 믿음을 받아들인 사람이 영원한 보상을 얻을 수 있음을 암시한다고 주장합니다.

기독교 신학자들은 구원이 단순한 입술만의 믿음이 아니라 진실한 신앙과 진정한 회개를 모두 포함하는 것이라고 자주 답합니다.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: '이슬람교',

            answerNature: `
이슬람교는 내세를 완전한 도덕적 책임과 신의 정의 시스템으로 제시합니다.

꾸란은 이렇게 말합니다.

"어떠한 죄인도 타인의 죄를 짊어지지 않느니라." (꾸란 6:164)

이슬람에서 구원은 믿음과 올바른 행동 모두와 일관되게 연관됩니다.

"믿고 선행을 행하는 자들..." (2:25를 포함하여 꾸란 전체에 걸쳐 반복됨)

이슬람교는 세속적인 삶이 일시적인 시험이며, 궁극적인 보상이나 처벌의 장소가 아니라고 가르칩니다.

"생과 사를 창조하신 것은 너희 중 누가 가장 훌륭한 행위를 하는지 시험하기 위함이라." (꾸란 67:2)
      `,

            objectiveCritique: `
이슬람 신학에서 심판의 날은 아무리 사소한 행동이라도 설명 책임을 져야 하는 궁극적인 정의의 법정을 의미합니다.

꾸란은 이렇게 말합니다.

"원자 무게만큼의 선을 행한 자도 그것을 보리라. 원자 무게만큼의 악을 행한 자도 그것을 보리라." (꾸란 99:7–8)

이 틀은 개인의 책임과 절대적인 정의를 모두 유지하려고 하며, 동시에 그 어떤 억압이나 선행도 결국 아무런 결과 없이 사라지지 않는다는 도덕적 확신을 제공합니다.
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
      navbar: '종교 비교',
      hero: {
        subtitle:
          '창조주, 존재의 목적, 도덕, 그리고 사후에는 무엇이 기다리고 있는가라는 인류의 가장 큰 질문들을 탐구하는, 차분하고 깊이 있는 철학적 여정.',

        subtitleHighlight:
          '창조주, 존재의 목적, 도덕, 그리고 사후에는 무엇이 기다리고 있는가.',

        scrollIndicator: '아래로 스크롤하여 여행을 시작하세요',
      },

      storySection: {
        badge: '열차의 비유',

        titleLine1: '질문을 던지기 전에',
        titleLine2: '종교에 관하여...',

        intro:
          '모든 인간은 결국 유흥이 사라지는 고요한 순간에 도달합니다. 그리고 가장 심오한 질문들이 마침내 표면 위로 떠오릅니다.',

        ending: '이 열차는 지구이고,',
        ending2: '그 여행은 당신의 삶 그 자체입니다.',
      },

      coreQuestions: {
        sectionLabel: '주요 섹션',
        title: '근본적인 질문들',

        answerNatureTitle: '답변의 성격',

        philosophicalDiscussionTitle: '철학적 논의',

        referencesTitle: '참고 문헌',
      },

      futureResearch: {
        sectionLabel: '향후 연구',

        title: '기타 질문들',

        loaderBadge: '기타 질문 준비 중',

        headingLine1: '여행은',
        headingLine2: '계속됩니다...',

        description:
          '추가적인 철학적·신학적 연구가 동일한 구조화된 비교 접근 방식을 사용하여 조사 및 준비되고 있습니다.',

        topics: [
          '도덕',
          '과학',
          '기적',
          '의식',
          '자유의지',
          '고통',
          '역사적 보존',
          '예언',
          '인간 본성',
          '의미',
          '문명',
          '윤리',
        ],

        footer: '새로운 섹션이 곧 추가될 예정입니다',
      },

      imageAlt: {
        hero: '종교 비교',
      },
    },
  },
};
