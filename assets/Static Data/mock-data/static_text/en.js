export default {
  splash: {
    version: 'version',
    practice: 'practice',
    share: 'share',
    logo: 'global islam',
  },
  homeApp: {
    north: 'north',
    east: 'east',
    west: 'west',
    south: 'south',
    active: 'qibla active',
    disabled: 'Open Qibla Compass',
    welcome: 'Welcome Back',
    greet: 'Assalamu Alaikum',
    hour: 'hour',
    minute: 'minute',
    second: 'second',
    toLeft: 'to youre left',
    toRight: 'to youre right',
    fromNorth: 'from north',
  },
  quranApp: {
    medinan: 'Medinan',
    meccan: 'meccan',
    arabicName: 'name in arabic',
    englishName: 'name in english',
    details: 'Select a verse to view its translation and tafsir (explanation)',
    selectRes: 'Select Resource',
    retry: 'retry',
    loadErr1: 'Unable to load explanation. Please try again.',
    loadErr2: 'Failed to fetch',
    author: 'author',
    explain: 'Explaination',
  },
  qiblaApp: {
    compass: 'Qibla Compass',
    accuracy: 'accuracy',
    offline: 'GPS offline',
    tracking: 'GPS tracking',
    aligned:
      'You are facing the Qibla. Hold steady for accurate prayer direction.',
    notAligned:
      'Hold your device flat and rotate until the arrow points to Qibla.',
    heading: 'Device heading',
    turn: 'turn',
    alignedQibla: 'Aligned with Qibla',
  },
  aiApp: {
    answer: 'answer',
  },
  prayerApp: {
    locationRequired:
      'Location services are required for accurate prayer times.',
    schedule: 'Prayer Schedule',
    refresh: 'refresh',
    sunrise: 'Sunrise',
    upcoming: 'Upcoming Prayer',
  },
  settingsApp: {
    reciterTitle: 'Adhan Reciter',
    reciterSub: 'Choose your preferred voice',
    notSelected: 'not selected',
    preview: 'preview',
    cancel: 'cancel',
    muezzin: 'Muezzin',
    preNot: 'Pre-Adhan Notification',
    preNotDet: 'Notify 15 minutes before prayer time',
    theme: 'Dark Mode',
    dark: 'Currently dark theme',
    light: 'Currently light theme',
    about: 'About',
    selectReciter: 'Select Reciter',
  },
  athan: {
    mainTitle: 'ATHAN · CALL TO PRAYER',
    stop: 'Stop Athan',
    error: 'Unable to load adhan audio',
    prayerTime: 'Prayer Time',
    play: 'play',
    pause: 'pause',
    dismiss: 'dismiss',
  },
  athkarApp: {
    completed: 'Completed',
    remaining: 'remaining',
    reset: 'reset',
    athkar: 'Athkar',
    mention: 'thikr',
    descM: 'Start your day with blessings',
    descE: 'End your day with protection',
    remmember: 'Daily Remembrance',
    cat: 'categories of supplications',
    category: 'Category',
  },
  hero: {
    title: {
      explore: 'Explore Islam with',
      clarity: 'Clarity',
      peace: '& Peace',
    },

    description:
      'Learn, ask questions, and discover authentic understanding through AI and guided knowledge designed for clarity and reflection.',

    actions: {
      introductionToIslam: 'Learn About Islam',
      islamQA: 'Islam Q&A (AI Assistant)',
      continueWebsite: 'Continue to Website',
    },
  },

  explore: {
    searchBar: {
      title: 'Search Hadith Collections',

      subtitle:
        'Search naturally using topics, meanings, or complete statements.',

      placeholder: 'Example: Hadith about kindness to parents',

      button: 'Search',
    },

    header: {
      title: 'Hadith Search Library',
      subtitle:
        'Instantly explore authentic Hadith with a modern reading experience.',
    },

    content: {
      heroTitle: 'Discover authentic Hadith collections with powerful search',

      loading: {
        label: 'Searching Hadith collections...',
      },

      error: {
        title: 'Unable to load Hadith',
        message:
          "We couldn't retrieve the narrations right now. Please check your connection and try again.",
      },

      empty: {
        title: 'No matching Hadith found',
      },

      card: {
        reference: 'Hadith Reference',
        readMore: 'Read full hadith',
      },
    },
  },

  contentNormal: {
    searchSection: {
      placeholder: 'Search hadith...',
      button: 'Search',
      books: {
        label: 'Book',
        options: {
          bukhari: 'Bukhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmidhi',
          abudawood: 'Abu Dawood',
          nasai: 'Nasai',
          ibnmajah: 'Ibn Majah',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Current language is not supported yet',
      msg: 'This language is not currently supported by the hadith dataset yet.',
      description:
        'English has been selected automatically as a fallback language so you can still search and browse hadiths seamlessly. You can also try Advanced Mode for broader multilingual search support and improved results.',
    },

    initialPlaceholder:
      'Search for a hadith to view details like grading, narrators, and reference',

    loading: {
      label: 'Loading hadiths...',
    },

    hadithCard: {
      showMore: 'Show More',
      showLess: 'Show Less',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'References',
        referenceLabel: 'Reference',
        inBookReference: 'In-book reference',
        arabicReference: 'Arabic reference',
      },
    },

    emptyState: 'No hadiths found',

    pagination: {
      prev: 'Prev',
      next: 'Next',
    },
  },
  switch: {
    title: {
      advanced: 'Advanced Mode',
      normal: 'Normal Mode',
    },

    description: {
      advanced: 'Semantic search with deeper understanding',
      normal: 'Fast filter-based search',
    },
  },
  navbar: {
    routes: {
      home: 'Home',
      prayers: 'Prayers',
      quran: 'Quran',
      athkar: 'Athkar',
      articles: 'Articles',

      articlesNested: {
        islamicHistory: 'Islamic History',
        prayerInIslam: 'Prayer in Islam',
        womenInIslam: 'Women in Islam',
        purification: 'Purification & Ablution',
      },

      learn: 'Learn',
      learnNested: {
        quranTajweed: 'Learn Quran & Tajweed',
        arabic: 'Learn Arabic',
      },

      dashboard: 'Dashboard',
      aiAssistant: 'AI Assistant',
    },
  },

  home: {
    news: {
      title: 'Muslim Community Updates',
      subtitle: 'Stay informed with important updates from the Muslim world',
    },

    prayer: {
      title: 'Prayer Countdown',
      subtitle: 'Prepare yourself for the next prayer',
      button: 'View Prayer Times',
      nextPrayerLabel: 'Next prayer at:',
    },

    athkar: {
      title: 'Morning & Evening Athkar',
      subtitle: 'Daily remembrance to keep your heart connected',
      button: 'See more athkar',
    },

    qibla: {
      title: 'Qibla Direction',
      subtitle: 'Find the direction of the Kaaba wherever you are',
      locationLoading: 'Getting your location...',
      enableLocation: 'Enable Location',
      refreshLocation: 'Refresh Qibla Direction',
      warning:
        "If your device doesn't support orientation sensors, compass accuracy may be affected.",
      errorTitle: 'Permission Denied',
    },
  },

  prayers: {
    nextLabel: 'Next prayer at',
    header: {
      title: 'Prayer Times',
      subtitle: 'A daily moment of connection with your Creator',
    },
    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },
    qibla: {
      loading: 'Getting your location...',
      warning:
        "If OS doesn't support orientation, this affects compass calculation.",
      errorTitle: 'Permission Denied',
      enableLocation: 'Enable Location',
      refreshLocation: 'Refresh Qibla Direction',
    },
    list: {
      warning: 'Times may vary slightly depending on calculation method.',
    },
  },

  quran: {
    header: {
      title: 'Quran',
      subtitle: 'Your daily companion for recitation and reflection',
    },

    search: {
      noResultTitle: 'No data',
      noResultMessage: 'No data to display',
    },
  },

  athkar: {
    title: 'Daily Athkar',
    subtitle: 'Stay consistent with daily remembrance and reflection',
  },
  learning: {
    quran: {
      title: 'Learn Quran & Tajweed',
      subtitle:
        'Improve your Quran recitation and understand the rules of Tajweed step by step.',
    },

    arabic: {
      title: 'Learn Arabic',
      subtitle:
        'Build your Arabic language skills through clear and structured lessons.',
    },

    default: {
      title: 'Learning Section',
      subtitle:
        'Explore educational content designed to strengthen your knowledge and understanding.',
    },
  },
  ai: {
    header: {
      title: 'Global Islam AI Assistant',
      subtitle:
        'Receive clear Islamic answers grounded in Qur’an, Sunnah, and trusted knowledge',
    },

    loading: {
      label: 'Loading...',
    },

    error: {
      title: 'Request limit reached',
      message:
        'Knowledge service is currently unavailable. Please try again shortly.',
    },

    input: {
      placeholder: 'Ask a question about Islam...',
    },

    suggestions: [
      'Can I pray if I miss wudu?',
      'Is interest (riba) completely forbidden?',
      'Ruling on working in a non-halal environment',
      'Can I pray while traveling?',
      'Is wearing perfume during prayer allowed?',
      'What invalidates prayer?',
      'Ruling on delaying prayers due to work',
    ],

    footer: {
      disclaimer:
        'This AI assistant is designed to provide responses based on curated and reliable knowledge sources, including Islamic references and verified educational material.',

      note: 'Responses are for informational purposes and should not replace scholarly advice where required.',
    },
  },

  footer: {
    disclaimer:
      'All displayed content is sourced from its original trusted references. We welcome feedback and error reports for review and correction.',

    tagline: 'Built with care to serve authentic Islamic content',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Go back',
    },

    sections: {
      hadithText: 'Hadith Text',
      arabicText: 'Arabic Text',
      explanation: 'Explanation',
      authentication: 'Authentication',
      lessons: 'Benefits & Lessons',
    },
  },
  other: {
    note: 'Note',
    theLanguage: 'the language',
    part: 'Part',
    translation: 'Translation',
    verse: 'Verse',
    chapter: 'Chapter',
    page: 'Page',
    breakingNews: 'Breaking News',
  },
  dailyRemined: {
    title: 'Light for Today',
    subtitle: 'Pause and reflect on a verse and Hadith chosen for your day.',
  },
  baseFooter: {
    contact: {
      title: 'Contact Us',
      name: 'Your Name',
      email: 'Your Email',
      msg: 'Your Message',
      sendMsg: 'Send Message',
    },
    followUs: 'Follow Us',
    QA: 'Quick Access',
    logoB:
      'Quran, Hadith, Prayer times, AI assistant, and daily Islamic tools—all in one modern platform.',
    whatsapp: 'Chat on WhatsApp',
    rsr: 'All rights reserved',
  },
  relg: {
    'Who or what is God in this religion?': {
      Islam:
        'One absolute, supreme, and independent Creator (Allah) with no partners, children, or physical form.',
      Christianity:
        'One God existing simultaneously as three distinct persons: Father, Son (Jesus Christ), and Holy Spirit.',
      Hinduism:
        'A supreme reality called Brahman, which manifests through millions of lesser deities to be worshipped.',
      Buddhism:
        'Non-theistic; it does not focus on a creator God but on cosmic laws governing existence.',
      Sikhism:
        'One supreme, formless reality (Ik Onkar) who dwells inside all of creation.',
      Judaism:
        'One singular, eternal, and incorporeal Creator (Yahweh) who made an exclusive covenant with the Jewish people.',
      'Baháʼí Faith':
        'An unknowable, supreme Creator who reveals His will through progressive divine messengers.',
      Jainism:
        'Rejects a creator God; the universe is eternal, but perfected human souls achieve god-like status.',
      Shinto:
        'No single God; focuses on millions of Kami (sacred spirits and energies found within nature).',
      Taoism:
        'The ultimate reality is the Tao (The Way)—an impersonal, cosmic force that flows through the universe.',
    },
    'Where did the holy book come from, and can it be trusted?': {
      Islam:
        'The Quran; the literal, verbatim word of God revealed to Muhammad, perfectly preserved without changes for 1,400 years.',
      Christianity:
        'The Holy Bible; written by human authors over centuries under the divine inspiration of the Holy Spirit.',
      Hinduism:
        'The Vedas, Upanishads, and Bhagavad Gita; ancient spiritual truths heard by sages and passed down.',
      Buddhism:
        'The Tripitaka and Mahayana Sutras; oral records of the teachings and discourses of Siddhartha Gautama.',
      Sikhism:
        'The Guru Granth Sahib; composed of hymns by Sikh Gurus and saints, treated as a living spiritual guide.',
      Judaism:
        'The Tanakh (Hebrew Bible) and Talmud; ancient laws dictated to Moses and expanded by rabbinic tradition.',
      'Baháʼí Faith':
        "The writings of Bahá'u'lláh and his successors, viewed as the most recent revelation for the modern world.",
      Jainism:
        'The Agamas; the oral teachings of Lord Mahavira and enlightened masters compiled by disciples.',
      Shinto:
        'No official holy book; relies on ancient historical chronicles like the Kojiki and Nihon Shoki.',
      Taoism:
        'The Tao Te Ching; a collection of poetic philosophical verses written by the ancient sage Laozi.',
    },
    'Why did God create humans, and what is our purpose?': {
      Islam:
        'To worship God through choosing good, acting as custodians on Earth, and building a just society.',
      Christianity:
        'To know, love, and glorify God, and to reflect His character by loving others.',
      Hinduism:
        "To fulfill one's moral and cosmic duty (Dharma) and eventually break free from the material world.",
      Buddhism:
        'To wake up from the illusion of the material world and put an end to personal suffering.',
      Sikhism:
        'To achieve total spiritual union with God while living an active, honest family life.',
      Judaism:
        'To act as God’s partner in repairing a broken world (Tikkun Olam) by fulfilling His commandments.',
      'Baháʼí Faith':
        'To know and love God, and to foster the spiritual, social, and structural unity of the human race.',
      Jainism:
        'To purify the soul from all physical matter and escape the cycle of rebirth.',
      Shinto:
        'To maintain harmony with nature and the Kami, and to preserve ancestral and national purity.',
      Taoism:
        'To stop fighting the natural flow of the universe and live in perfect, effortless alignment with nature.',
    },
    "What is 'wrong' with humanity according to this faith?": {
      Islam:
        'Ghaflah (spiritual forgetfulness/apathy); humans are born pure but are easily distracted by worldly illusions.',
      Christianity:
        "Original Sin; due to Adam's rebellion, all humans inherit a fallen nature inherently separated from God.",
      Hinduism:
        'Avidya (ignorance); humans mistakenly believe their individual souls are separate from Brahman.',
      Buddhism:
        'Dukkha (suffering); caused entirely by human craving, attachment, and desire for temporary things.',
      Sikhism:
        'Haumai (ego); separates humans from God and traps them in lust, anger, greed, attachment, and pride.',
      Judaism:
        "Disobedience to God's laws, often choosing the evil inclination (Yetzer hara) over the good.",
      'Baháʼí Faith':
        'Disunity, global prejudice, and an outdated attachment to old, regional religious sectarianism.',
      Jainism:
        'Material Karma; literal physical dust that sticks to the spiritual soul due to negative actions.',
      Shinto:
        'Kegare (impurity); spiritual pollution accumulated through contact with illness, death, or bad actions.',
      Taoism:
        'Resistance; forcing ego, human desires, and rigid rules onto a universe that works through balance.',
    },
    'How does a person get saved or reach paradise?': {
      Islam:
        'Through sincere belief in God and practicing the Five Pillars alongside continuous good deeds.',
      Christianity:
        "Through faith in Jesus Christ's sacrificial death and resurrection, which paid for humanity's sins.",
      Hinduism:
        'Achieving Moksha (liberation) through devotion (Bhakti), knowledge (Jnana), good deeds, or meditation.',
      Buddhism:
        'Following the Eightfold Path to extinguish worldly desire, erase the ego, and reach Nirvana.',
      Sikhism:
        "Constantly remembering God's name (Naam Simran), working honestly, and giving back to the community.",
      Judaism:
        'Focuses on sanctification of life here and now by obeying the 613 commandments (Mitzvot).',
      'Baháʼí Faith':
        "Recognizing Bahá'u'lláh as the messenger for this age and actively working for world peace.",
      Jainism:
        'Achieving Moksha by practicing extreme self-discipline, truthfulness, and absolute non-violence.',
      Shinto:
        'No concept of sin or damnation; regular ritual purification (Harae) restores blessings and luck.',
      Taoism:
        'Practicing Wu-Wei (effortless action); letting go of control and desires to align with the Tao.',
    },
    'Why does God allow bad things and suffering to happen to innocent people?':
      {
        Islam:
          "Life is a temporary testing ground; suffering elevates a believer's status or results from human free will.",
        Christianity:
          'Suffering entered the world through the Fall of Man; God uses it to build character and suffers with us.',
        Hinduism:
          'The law of Karma; suffering in this life is the mathematical result of bad deeds in a past life.',
        Buddhism:
          'Suffering is the defining feature of existence, kept alive by human attachment and ignorance.',
        Sikhism:
          'Suffering is a medicine designed to break the human ego and turn the soul back toward God.',
        Judaism:
          'Can be divine punishment for national disobedience, a mystery, or a tool to refine righteousness.',
        'Baháʼí Faith':
          'An essential catalyst that forces the human soul to grow spiritually and look beyond material comforts.',
        Jainism:
          'The universe is unfeeling; suffering is caused strictly by physical karmic particles weighing down the soul.',
        Shinto:
          'Happens when the relationship with the Kami is broken or natural spiritual forces are out of balance.',
        Taoism:
          'Suffering is just part of the cosmic cycle of balance (Yin/Yang); pain exists because humans label things.',
      },
    'How does this religion tell me to live my daily life and treat society?': {
      Islam:
        'Provides a comprehensive system covering law (Sharia), interest-free finance, mandatory charity, and family rights.',
      Christianity:
        'Emphasizes personal morality, love, forgiveness, and charity, leaving governance to civil systems.',
      Hinduism:
        "Strictly organized around one's individual duty (Dharma) based on life stage and social order.",
      Buddhism:
        'Demands mindfulness, meditation, absolute non-violence (Ahimsa), and deep compassion for all life.',
      Sikhism:
        'Rejects the caste system, demands radical gender equality, and serving free meals to all (Langar).',
      Judaism:
        'Highly ritualized; includes kosher laws, observing the Sabbath, civil laws, and community education.',
      'Baháʼí Faith':
        'Promotes equality of genders, elimination of extreme wealth/poverty, and global unity.',
      Jainism:
        'Built on strict Ahimsa (non-violence); includes veganism and avoiding professions that harm any life.',
      Shinto:
        'Ritualistic; centers on visiting neighborhood shrines, nature festivals, and ancestral respect.',
      Taoism:
        'Emphasizes simplicity, flexibility, spontaneity, and internal energy practices like Tai Chi.',
    },
    'Does this religion believe in life after death, and what exactly happens to me when I die?':
      {
        Islam:
          'Physical resurrection on Judgement Day, followed by eternal reward in Heaven or punishment in Hell.',
        Christianity:
          'Immediate spiritual transition followed by bodily resurrection into eternal Heaven or eternal Hell.',
        Hinduism:
          'Samsara; a continuous cycle of death and rebirth into a new physical body based on past Karma.',
        Buddhism:
          'Rebirth based on karmic energy until you reach Nirvana—the permanent extinguishing of the ego.',
        Sikhism:
          'Reincarnation occurs, but a soul achieving divine grace merges permanently back into God.',
        Judaism:
          'Texts are mostly silent; focuses on life on Earth rather than detailed mapping of the afterlife.',
        'Baháʼí Faith':
          'The soul progresses eternally through higher spiritual realms; Heaven/Hell are states of closeness to God.',
        Jainism:
          'Rebirth across various realms until the soul is scrubbed of karma and floats to the top of the universe.',
        Shinto:
          'Spirits of the dead become ancestors and blend into the natural world as protective Kami.',
        Taoism:
          'Death is a transition where your personal energy changes form and returns to the pool of the Tao.',
      },
  },
  compareRelg: {
    note: `This page presents a comparative overview of major world religions. From an Islamic perspective, the Qur'an affirms that previous divine revelations were sent to earlier nations, but over time underwent human alteration (tahrif). The Qur'an states: 'Indeed, it is We who sent down the Qur'an, and indeed, We will be its guardian' (15:9). This page examines these differences in light of historical and textual evidence.`,
    mainTitle: 'A Rational Journey Through Religions',
    headerTitle: 'Questions That Define Human Existence',
    story: `
Imagine opening your eyes suddenly, only to find yourself seated inside a luxurious train rushing at tremendous speed through an endless night. Around you is every form of comfort imaginable: lavish meals spread across elegant tables, glowing screens playing films, and soft silk pillows resting on plush seats.

You turn to the passengers beside you and ask anxiously:
"Where are we? Who put us on this train? And where are we heading?"

But the real shock comes from their reactions.

One of them replies coldly:
"Why does it matter? Taste this food — it’s incredible."

Another says mockingly:
"Why trouble yourself with such questions? Just relax and enjoy the movie."

Everyone around you is absorbed in the pleasures and distractions of the journey, yet a deep chill runs through you — because you know with certainty that this train is heading toward a final destination, a station where every passenger will eventually step off.

And at that moment, the real question emerges:

Will you lose yourself in the luxury and entertainment of the ride, or will you continue searching for answers to the three deepest questions of all:

Who is the Creator?
Why are we here?
And what awaits us in the end?

That train is Planet Earth, and the journey is your life.

And because human beings do not possess these answers on their own, religions emerged as “instruction manuals,” each claiming to come from the Designer of the train itself.

So let us place these manuals under the lens of calm and rational examination.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Who Is the Creator?',

        intro: `
From a philosophical and logical perspective, the “First Cause” of the universe — the Creator — must be completely transcendent beyond matter, time, and space. If the Creator were subject to hunger, fatigue, physical limitation, or spatial confinement, then logically such a being would cease to be an absolute Creator and instead become a dependent created entity. A dependent being cannot ultimately serve as the necessary source of all existence.
  `,

        religions: {
          eastern: {
            title: 'Eastern Religions',
            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
In its earliest Theravāda form, Buddhism is generally non-theistic; it does not focus on the existence of a creator deity and instead views existence as arising through eternal natural processes, causation, and interconnected laws.

Hinduism, on the other hand, often speaks of an ultimate metaphysical reality called “Brahman.” Yet in practical worship, this supreme reality becomes expressed through countless manifestations and deities, including human and animal-like forms such as Vishnu, Shiva, and Kali.
      `,

            objectiveCritique: `
From a philosophical standpoint, Buddhism faces the challenge of explaining how a highly ordered universe governed by consistent laws and physical precision could emerge without an originating intelligent cause.

In Hindu traditions that embrace divine incarnation and physical representations, the divine becomes associated with limitation, conflict, hunger, death, and material form. A deity that can be physically represented, embodied, or subjected to natural processes appears, from a rational perspective, to participate within creation rather than transcend it completely.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaism',

            answerNature: `
Judaism affirms belief in one Creator who is above idols and physical representation. God (YHWH) is understood as the Creator of the heavens and the earth and fundamentally distinct from creation.
      `,

            objectiveCritique: `
The philosophical concern raised here is not primarily about transcendence itself, but about the perceived limitation of divine universality within some passages of the Hebrew Bible. Certain texts portray God in a covenant relationship strongly centered on the Children of Israel in a way critics interpret as ethnically exclusive.

Additionally, some passages describe God using highly human-like language, such as “regretting” the creation of humanity (Genesis 6:6) or “resting” on the seventh day after creation (Exodus 31:17). Critics argue that such descriptions raise questions about whether these attributes should be understood literally or metaphorically.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Christianity',

            answerNature: `
Christianity teaches belief in one God through the doctrine of the Trinity: the Father, the Son, and the Holy Spirit. According to the doctrine of incarnation, the second person of the Trinity — the Son — entered human history in the person of Jesus Christ, who was crucified and died for the salvation of humanity.
      `,

            objectiveCritique: `
Philosophically, critics argue that the doctrine of incarnation raises a tension between divine and human attributes. God is traditionally described as eternal, unlimited, and beyond death, while human beings are finite, vulnerable, and mortal.

The challenge arises when both complete divinity and complete humanity are united in one person. Critics question how an eternal and self-sufficient being could simultaneously experience hunger, sleep, suffering, and death. The issue is often framed as a tension between transcendence and embodiment rather than merely a theological mystery.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Islam',

            answerNature: `
Islam presents a strictly transcendent and indivisible concept of God. The Qur’an summarizes this concept in Surat Al-Ikhlas:

“Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor is born, and there is none comparable to Him.” (Qur’an 112:1–4)

The Creator in Islam is entirely beyond material form and unlike creation:

“There is nothing like unto Him.” (Qur’an 42:11)

God is not confined by time, space, or physical limitation. The Qur’an also states:

“Neither drowsiness nor sleep overtakes Him.” (Qur’an 2:255)

Within Islamic theology, God is understood as self-subsisting, eternal, independent, and absolutely distinct from creation.
      `,

            objectiveCritique: `
From an Islamic philosophical perspective, this understanding seeks to preserve absolute transcendence while avoiding anthropomorphism and incarnation. The concept aims to align the Creator with the notion of an independent and necessary First Cause that is not subject to the limitations of created existence.
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

        title: 'What Is the Method and Purpose of Life?',

        intro: `
If a wise Creator exists, then it would be unreasonable to assume that humanity was left without guidance explaining the purpose of existence, moral responsibility, and the principles by which life should be lived. Just as a complex system requires instructions from its designer, religions claim to provide humanity with a framework for understanding why we are here and how we should live.
  `,

        religions: {
          eastern: {
            title: 'Eastern Religions',

            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
Eastern traditions such as Buddhism and Hinduism generally rely on philosophical teachings, meditation practices, and reflections developed by spiritual teachers and sages.

In Buddhism, the ultimate goal is liberation from suffering and escape from the cycle of rebirth through attaining Nirvana — a state of transcendence and inner release.

In many Hindu traditions, the goal is spiritual liberation (Moksha), achieved through devotion, knowledge, meditation, or disciplined action.
      `,

            objectiveCritique: `
Critics argue that these systems are primarily philosophical and experiential rather than grounded in a verifiable revelation from a transcendent Creator.

Some also argue that strong emphasis on detachment from worldly life, monasticism, and renunciation may conflict with aspects of human nature that encourage societal development, scientific progress, family life, and the building of civilizations.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaism',

            answerNature: `
In Judaism, the method of life is rooted in the covenantal law revealed to Moses and preserved within the Hebrew Bible (Tanakh). The religious framework centers on obedience to divine commandments and maintaining the covenant relationship between God and the Children of Israel.
      `,

            objectiveCritique: `
Critics argue that Judaism historically developed primarily as a covenant-centered tradition tied to a particular people rather than a universally missionary religion directed toward all humanity.

From the perspective of textual criticism, some scholars — including Richard Elliott Friedman and others — argue that the Torah underwent compilation and redaction processes over centuries, particularly around and after the Babylonian exile. This has led some critics to question whether the text can be viewed as a perfectly preserved and directly transmitted revelation in its original form.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Christianity',

            answerNature: `
Christianity teaches that humanity’s central problem is sin and separation from God, and that salvation comes through faith in the sacrificial death and resurrection of Jesus Christ. The purpose of life is therefore understood through reconciliation with God and spiritual transformation.
      `,

            objectiveCritique: `
Historically, scholars note that no original manuscripts of the Gospels survive in the Aramaic language spoken by Jesus. The earliest surviving texts are Greek manuscripts written decades after Jesus’ lifetime. Textual critics such as Bart Ehrman have documented the existence of numerous manuscript variations across early copies of the New Testament.

Critics also argue that Christianity historically placed greater emphasis on spiritual and personal salvation than on developing a comprehensive legal or political framework governing economics, criminal law, or state administration. Some historians suggest that this contributed to the eventual separation between religion and state authority in many Western societies.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Islam',

            answerNature: `
Islam presents a comprehensive understanding of human purpose that integrates both spiritual devotion and worldly responsibility.

The Qur’an states:

“I did not create jinn and mankind except to worship Me.” (Qur’an 51:56)

In Islamic thought, worship is not limited to rituals alone, but includes righteous action, justice, ethical conduct, seeking knowledge, and contributing positively to society.

Islamic teachings aim to balance spiritual growth with practical engagement in family life, economics, governance, charity, and social responsibility.
      `,

            objectiveCritique: `
From the Islamic perspective, the Qur’an represents a uniquely preserved revelation. Muslims maintain that its text has remained unchanged and continuously transmitted both in written manuscripts and oral memorization since the earliest generations of Islam.

Examples often cited include early manuscripts such as the Birmingham Qur’an manuscript and the widespread oral memorization tradition maintained by millions of Muslims worldwide.

Islamic law (Sharia) also presents itself as a comprehensive ethical and legal framework addressing areas such as finance, charity, family law, criminal justice, and governance. Supporters argue that this gives Islam the characteristics of a complete moral and civilizational system rather than a purely spiritual tradition.
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

        title: 'What Happens After the Final Station?',

        subtitle: 'Destiny, Justice, and the Afterlife',

        intro: `
Without the existence of ultimate justice after death, life can appear deeply arbitrary and morally unresolved. Tyrants may die without accountability, while victims may leave the world without receiving justice. This raises one of humanity’s oldest philosophical questions: Is death the end, or is there a final judgment beyond earthly life?
  `,

        religions: {
          eastern: {
            title: 'Eastern Religions',

            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
Many Eastern traditions embrace the concept of reincarnation, where the soul or stream of consciousness passes through repeated cycles of rebirth. A person's future condition is shaped by karma — the moral consequences of previous actions.
      `,

            objectiveCritique: `
Critics argue that reincarnation raises philosophical questions regarding justice and accountability. If a person suffers consequences in a new life for actions committed in a previous existence that they cannot consciously remember, then the educational and moral purpose of punishment becomes difficult to understand.

From this perspective, accountability without conscious memory may appear disconnected from meaningful moral responsibility.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialism and Atheism',

            answerNature: `
Materialist and atheistic worldviews generally regard death as the end of conscious existence. Human beings are understood as biological organisms whose awareness ceases completely after physical death.
      `,

            objectiveCritique: `
Critics argue that strict materialism struggles to provide an objective foundation for morality, justice, and ultimate meaning. If both the oppressor and the victim ultimately disappear into nonexistence without accountability, then concepts such as sacrifice, moral duty, and justice may appear ultimately subjective or socially constructed rather than universally binding.

Supporters of secular ethics, however, argue that morality can still arise through reason, empathy, and social responsibility without belief in an afterlife.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Christianity',

            answerNature: `
Christianity teaches that salvation and eternal life are attained through faith in Jesus Christ and acceptance of his sacrificial atonement for humanity’s sins. Heaven and eternal salvation are therefore closely connected to faith in Christ and divine grace.
      `,

            objectiveCritique: `
Critics question how salvation based primarily on belief relates to principles of universal justice. Philosophically, some argue that this framework may imply that a morally upright person who sincerely struggles with accepting certain theological doctrines could be denied salvation, while another individual who committed serious wrongdoing but accepted faith shortly before death could still attain eternal reward.

Christian theologians often respond that salvation involves both sincere faith and genuine repentance, rather than merely verbal belief.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Islam',

            answerNature: `
Islam presents the afterlife as a system of complete moral accountability and divine justice.

The Qur’an states:

“No soul bears the burden of another.” (Qur’an 6:164)

Salvation in Islam is consistently connected to both faith and righteous action:

“Those who believe and do righteous deeds...” (repeated throughout the Qur’an, including 2:25)

Islam teaches that earthly life is a temporary test rather than the final place of reward or punishment:

“He who created death and life to test you as to which of you is best in deeds.” (Qur’an 67:2)
      `,

            objectiveCritique: `
In Islamic theology, the Day of Judgment represents the ultimate court of justice in which every action, no matter how small, is fully accounted for.

The Qur’an states:

“So whoever does an atom’s weight of good will see it, and whoever does an atom’s weight of evil will see it.” (Qur’an 99:7–8)

This framework seeks to preserve both individual responsibility and absolute justice, while offering moral certainty that no act of oppression or goodness ultimately disappears without consequence.
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
      navbar: 'Religion Comparison',
      hero: {
        subtitle:
          'A calm yet deeply philosophical journey exploring humanity’s greatest questions — the Creator, the purpose of existence, morality, and what awaits beyond death.',

        subtitleHighlight:
          'the Creator, the purpose of existence, morality, and what awaits beyond death.',

        scrollIndicator: 'Scroll To Begin The Journey',
      },

      storySection: {
        badge: 'The Train Analogy',

        titleLine1: 'Before Asking',
        titleLine2: 'About Religions...',

        intro:
          'Every human being eventually reaches a moment of silence where distractions fade — and the deepest questions finally emerge.',

        ending: 'That train is Planet Earth,',
        ending2: 'and the journey is your life.',
      },

      coreQuestions: {
        sectionLabel: 'Main Section',
        title: 'Core Questions',

        answerNatureTitle: 'Nature of the Answer',

        philosophicalDiscussionTitle: 'Philosophical Discussion',

        referencesTitle: 'References',
      },

      futureResearch: {
        sectionLabel: 'Future Research',

        title: 'Other Questions',

        loaderBadge: 'More Questions Are Coming',

        headingLine1: 'The Journey',
        headingLine2: 'Continues...',

        description:
          'Additional philosophical and theological investigations are currently being researched and prepared with the same structured comparative approach.',

        topics: [
          'Morality',
          'Science',
          'Miracles',
          'Consciousness',
          'Free Will',
          'Suffering',
          'Historical Preservation',
          'Prophecies',
          'Human Nature',
          'Meaning',
          'Civilizations',
          'Ethics',
        ],

        footer: 'New Sections Will Be Added Soon',
      },

      imageAlt: {
        hero: 'Religions comparison',
      },
    },
  },
};
