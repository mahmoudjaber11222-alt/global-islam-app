export default {
  splash: {
    version: 'verze',
    practice: 'cvičení',
    share: 'sdílet',
    logo: 'globální islám',
  },
  homeApp: {
    north: 'sever',
    east: 'východ',
    west: 'západ',
    south: 'jih',
    active: 'kibla aktivní',
    disabled: 'Otevřít kompas kibla',
    welcome: 'Vítejte zpět',
    greet: 'As-salámu alajkum',
    hour: 'hodina',
    minute: 'minuta',
    second: 'sekunda',
    toLeft: 'nalevo od vás',
    toRight: 'napravo od vás',
    fromNorth: 'od severu',
  },
  quranApp: {
    medinan: 'Medínská',
    meccan: 'Mekkánská',
    arabicName: 'název v arabštině',
    englishName: 'název v angličtině',
    details: 'Vyberte verš pro zobrazení překladu a tafsíru (vysvětlení)',
    selectRes: 'Vybrat zdroj',
    retry: 'zkusit znovu',
    loadErr1: 'Nelze načíst vysvětlení. Zkuste to znovu.',
    loadErr2: 'Načtení se nezdařilo',
    author: 'autor',
    explain: 'Vysvětlení',
  },
  qiblaApp: {
    compass: 'Kompas kibla',
    accuracy: 'přesnost',
    offline: 'GPS offline',
    tracking: 'Sledování GPS',
    aligned:
      'Díváte se směrem k ible. Držte stabilně pro přesný směr modlitby.',
    notAligned:
      'Držte zařízení vodorovně a otáčejte, dokud šipka neukáže na kiblu.',
    heading: 'Směr zařízení',
    turn: 'otočit',
    alignedQibla: 'Zarovnáno s kiblou',
  },
  aiApp: {
    answer: 'odpověď',
  },
  prayerApp: {
    locationRequired:
      'Pro přesné časy modliteb jsou vyžadovány služby určování polohy.',
    schedule: 'Harmonogram modliteb',
    refresh: 'obnovit',
    sunrise: 'Východ slunce',
    upcoming: 'Nadcházející modlitba',
  },
  settingsApp: {
    reciterTitle: 'Recitátor azánu',
    reciterSub: 'Vyberte preferovaný hlas',
    notSelected: 'nevybráno',
    preview: 'náhled',
    cancel: 'zrušit',
    muezzin: 'Muezzin',
    preNot: 'Upozornění před azánem',
    preNotDet: 'Upozornit 15 minut před časem modlitby',
    theme: 'Tmavý režim',
    dark: 'Aktuálně tmavý motiv',
    light: 'Aktuálně světlý motiv',
    about: 'O aplikaci',
    selectReciter: 'Vybrat recitátora',
  },
  athan: {
    mainTitle: 'AZÁN · VÝZVA K MODLITBĚ',
    stop: 'Zastavit azán',
    error: 'Nelze načíst zvuk azánu',
    prayerTime: 'Čas modlitby',
    play: 'přehrát',
    pause: 'pauza',
    dismiss: 'zavřít',
  },
  athkarApp: {
    completed: 'Dokončeno',
    remaining: 'zbývá',
    reset: 'resetovat',
    athkar: 'Adhkár',
    mention: 'dhikr',
    descM: 'Začněte den požehnáním',
    descE: 'Ukončete den pod ochranou',
    remmember: 'Denní připomínka',
    cat: 'kategorie prosieb',
    category: 'Kategorie',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hledat hadís...',
      button: 'Hledat',
      books: {
        label: 'Kniha',
        options: {
          bukhari: 'Bukhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Abú Dáwúd',
          nasai: 'Nasáí',
          ibnmajah: 'Ibn Mádža',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Současný jazyk zatím není podporován',
      msg: 'Tento jazyk momentálně není podporován v databázi hadísů.',
      description:
        'Angličtina byla automaticky vybrána jako náhradní jazyk, abyste mohli nadále bez problémů vyhledávat a procházet hadísy. Můžete také vyzkoušet Pokročilý režim pro širší vícejazyčnou podporu a lepší výsledky.',
    },

    initialPlaceholder:
      'Vyhledejte hadís pro zobrazení detailů, jako je hodnocení, vypravěči a odkazy',

    loading: {
      label: 'Načítání hadísů...',
    },

    hadithCard: {
      showMore: 'Zobrazit více',
      showLess: 'Zobrazit méně',

      header: {
        hadithPrefix: 'Hadís #',
        referencesTitle: 'Odkazy',
        referenceLabel: 'Odkaz',
        inBookReference: 'Odkaz v knize',
        arabicReference: 'Arabský odkaz',
      },
    },

    emptyState: 'Nebyly nalezeny žádné hadísy',

    pagination: {
      prev: 'Předchozí',
      next: 'Další',
    },
  },

  switch: {
    title: {
      advanced: 'Pokročilý režim',
      normal: 'Normální režim',
    },

    description: {
      advanced: 'Sémantické vyhledávání s hlubším porozuměním',
      normal: 'Rychlé filtrové vyhledávání',
    },
  },

  navbar: {
    routes: {
      home: 'Domů',
      prayers: 'Modlitby',
      quran: 'Korán',
      athkar: 'Dhikr',
      articles: 'Články',

      articlesNested: {
        islamicHistory: 'Islámská historie',
        prayerInIslam: 'Modlitba v islámu',
        womenInIslam: 'Ženy v islámu',
        purification: 'Očištění a omytí',
      },

      learn: 'Učit se',
      learnNested: {
        quranTajweed: 'Učit se Korán a tajwíd',
        arabic: 'Učit se arabštinu',
      },

      dashboard: 'Panel',
      aiAssistant: 'AI asistent',
    },
  },
  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Objevujte islám s',
      clarity: 'Jasností',
      peace: '& Mírem',
    },

    description:
      'Učte se, ptejte se a objevujte autentické porozumění prostřednictvím AI a řízeného poznání navrženého pro jasnost a zamyšlení.',

    actions: {
      introductionToIslam: 'Poznejte islám',
      islamQA: 'Islám otázky a odpovědi (AI asistent)',
      continueWebsite: 'Pokračovat na web',
    },
  },
  learning: {
    quran: {
      title: 'Učte se Korán a Tadžwíd',
      subtitle:
        'Zlepšete svou recitaci Koránu a pochopte pravidla Tadžwídu krok za krokem.',
    },
    arabic: {
      title: 'Učte se arabsky',
      subtitle:
        'Rozvíjejte své znalosti arabského jazyka prostřednictvím jasných a strukturovaných lekcí.',
    },
    default: {
      title: 'Sekce vzdělávání',
      subtitle:
        'Prozkoumejte vzdělávací obsah navržený k posílení vašich znalostí a porozumění.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hledat v sbírkách hadísů',

      subtitle: 'Vyhledávejte přirozeně pomocí témat, významů nebo celých vět.',

      placeholder: 'Příklad: hadís o laskavosti k rodičům',

      button: 'Hledat',
    },

    header: {
      title: 'Knihovna vyhledávání hadísů',
      subtitle:
        'Okamžitě objevujte autentické hadísy v moderním čtecím prostředí.',
    },

    content: {
      heroTitle:
        'Objevte autentické sbírky hadísů pomocí výkonného vyhledávání',

      loading: {
        label: 'Vyhledávání hadísů...',
      },

      error: {
        title: 'Nelze načíst hadís',
        message:
          'V tuto chvíli se nepodařilo načíst tradice. Zkontrolujte připojení a zkuste to znovu.',
      },

      empty: {
        title: 'Žádné odpovídající hadísy nenalezeny',
      },

      card: {
        reference: 'Odkaz na hadís',
        readMore: 'Přečíst celý hadís',
      },
    },
  },

  home: {
    news: {
      title: 'Aktuality muslimské komunity',
      subtitle: 'Buďte informováni o důležitých zprávách z muslimského světa',
    },

    prayer: {
      title: 'Odpočet do modlitby',
      subtitle: 'Připravte se na další modlitbu',
      button: 'Zobrazit časy modliteb',
      nextPrayerLabel: 'Další modlitba:',
    },

    athkar: {
      title: 'Ranní a večerní azkary',
      subtitle: 'Každodenní připomínky pro spojení srdce',
      button: 'Zobrazit více azkarů',
    },

    qibla: {
      title: 'Směr kibla',
      subtitle: 'Najděte směr Kaaby kdekoliv jste',
      locationLoading: 'Získávání polohy...',
      enableLocation: 'Povolit polohu',
      refreshLocation: 'Obnovit směr kibla',

      warning:
        'Pokud zařízení nepodporuje orientační senzory, může být přesnost kompasu snížena.',

      errorTitle: 'Přístup zamítnut',
    },
  },

  prayers: {
    nextLabel: 'Další modlitba:',

    header: {
      title: 'Časy modliteb',
      subtitle: 'Každodenní okamžik spojení s vaším Stvořitelem',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Získávání polohy...',
      warning: 'Pokud OS nepodporuje orientaci, ovlivní to výpočty kompasu.',
      errorTitle: 'Přístup zamítnut',
      enableLocation: 'Povolit polohu',
      refreshLocation: 'Obnovit směr kibla',
    },

    list: {
      warning: 'Časy se mohou mírně lišit podle metody výpočtu.',
    },
  },

  quran: {
    header: {
      title: 'Korán',
      subtitle: 'Váš každodenní společník pro recitaci a zamyšlení',
    },

    search: {
      noResultTitle: 'Žádná data',
      noResultMessage: 'Žádná data k zobrazení',
    },
  },

  athkar: {
    title: 'Denní vzpomínání',
    subtitle: 'Udržujte pravidelnost v denním dhikru a zamyšlení',
  },

  ai: {
    header: {
      title: 'Globální islámský AI asistent',
      subtitle:
        'Získejte jasné islámské odpovědi založené na Koránu, sunně a důvěryhodných učencích',
    },

    loading: {
      label: 'Načítání...',
    },

    error: {
      title: 'Dosažen limit požadavků',
      message: 'Služba je momentálně nedostupná. Zkuste to prosím později.',
    },

    input: {
      placeholder: 'Zeptejte se na islám...',
    },

    suggestions: [
      'Mohu se modlit bez wudu?',
      'Je úrok (riba) zcela zakázán?',
      'Pravidla práce v ne-halal prostředí',
      'Mohu se modlit při cestování?',
      'Je parfém povolen během modlitby?',
      'Co ruší modlitbu?',
      'Odkládání modlitby kvůli práci',
    ],

    footer: {
      disclaimer:
        'Tento AI asistent poskytuje odpovědi založené na důvěryhodných zdrojích znalostí, včetně islámských referencí a ověřených vzdělávacích materiálů.',

      note: 'Odpovědi slouží pouze pro informační účely a nenahrazují názor učenců, kde je to potřeba.',
    },
  },

  footer: {
    disclaimer:
      'Veškerý obsah pochází z původních důvěryhodných zdrojů. Zpětná vazba a hlášení chyb jsou vítány.',

    tagline: 'Vytvořeno s péčí pro autentický islámský obsah',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadís',
      backButton: 'Zpět',
    },

    sections: {
      hadithText: 'Text hadísu',
      arabicText: 'Arabský text',
      explanation: 'Vysvětlení',
      authentication: 'Autenticita',
      lessons: 'Přínosy a ponaučení',
    },
  },
  other: {
    note: 'Poznámka',
    theLanguage: 'jazyk',
    part: 'Část',
    translation: 'Překlad',
    verse: 'Verš',
    chapter: 'Kapitola',
    page: 'Stránka',
    breakingNews: 'Nejnovější zprávy',
  },
  dailyRemined: {
    title: 'Světlo Dne',
    subtitle:
      'Zastavte se a zamyslete se nad veršem a hadísem vybranými pro váš den.',
  },
  baseFooter: {
    contact: {
      title: 'Kontaktujte nás',
      name: 'Vaše jméno',
      email: 'Váš e-mail',
      msg: 'Vaše zpráva',
      sendMsg: 'Odeslat zprávu',
    },
    followUs: 'Sledujte nás',
    QA: 'Rychlý přístup',
    logoB:
      'Korán, Hadísy, časy modliteb, AI asistent a každodenní islámské nástroje—all na jedné moderní platformě.',
    whatsapp: 'Chat na WhatsApp',
    rsr: 'Všechna práva vyhrazena',
  },
  compareRelg: {
    note: `Tato stránka představuje srovnávací přehled hlavních světových náboženství. Z islámské perspektivy Korán potvrzuje, že dřívější božská zjevení byla seslána dřívějším národům, avšak v průběhu času prošla lidskými úpravami (tahríf). Korán uvádí: „A jmatrix jsme to My, kdo seslal Připomenutí, a My nad ním jistě budeme bdít“ (15:9). Tato stránka zkoumá tyto rozdíly ve světle historických a textových důkazů.`,
    mainTitle: 'Racionální cesta napříč náboženstvími',
    headerTitle: 'Otázky, které definují lidskou existenci',
    story: `
Představ si, že náhle otevřeš oči a zjistíš, že sedíš v luxusním vlaku, který se obrovskou rychlostí řítí nekonečnou nocí. Kolem tebe je veškerý myslitelný komfort: bohatá jídla rozložená na elegantních stolech, zářící obrazovky přehrávající filmy a měkké hedvábné polštáře na pohodlných sedadlech.

Otočíš se na cestující vedle sebe a úzkostně se ptáš:
"Kde jsme? Kdo nás do tohoto vlaku dostal? A kam míříme?"

Ale skutečný šok přichází z jejich reakcí.

Jeden z nich chladně odpoví:
"Na tom nezáleží. Ochutnej to jídlo — je úžasné."

Jiný se posměšně ozve:
"Proč se trápit takovými otázkami? Prostě se uvolni a dívej se na film."

Všichni kolem tebe jsou pohlceni potěšením a rozptýlením cesty, ale v tobě se šíří hluboký chlad — protože s jistotou víš, že tento vlak míří k finální destinaci, stanici, kde každý cestující nakonec vystoupí.

A v tu chvíli se objevuje skutečná otázka:

Ztratíš se v luxusu a zábavě cesty, nebo budeš pokračovat v hledání odpovědí na tři nejhlubší otázky:

Kdo je Stvořitel?
Proč jsme tady?
A co nás čeká na konci?

Ten vlak je planeta Země a cesta je tvůj život.

A protože lidé tyto odpovědi sami nemají, náboženství vznikla jako „návody“, z nichž každé tvrdí, že pochází od samotného Tvůrce vlaku.

Pojďme tyto „manuály“ položit pod čočku klidného a racionálního zkoumání.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kdo je Stvořitel?',

        intro: `
Z filozofického a logického pohledu musí být „První příčina“ vesmíru — Stvořitel — zcela transcendentní, mimo hmotu, čas a prostor. Pokud by byl Stvořitel podroben hladu, únavě, fyzickým omezením nebo prostorové závislosti, pak by logicky taková bytost nebyla absolutním Stvořitelem, ale závislou stvořenou entitou. Závislá bytost nemůže být konečným zdrojem veškeré existence.
  `,

        religions: {
          eastern: {
            title: 'Východní náboženství',
            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
V nejranější theravádové formě je buddhismus obecně neteistický; nezaměřuje se na existenci stvořitelského božstva a místo toho chápe existenci jako výsledek věčných přírodních procesů, kauzality a propojených zákonů.

Hinduismus naopak často hovoří o konečné metafyzické realitě zvané „Brahman“. V praktickém uctívání se však tato nejvyšší realita projevuje skrze nesčetné podoby a božstva, včetně lidských a zvířecích forem jako Višnu, Šiva a Kálí.
      `,

            objectiveCritique: `
Z filozofického hlediska buddhismus čelí otázce, jak může vysoce uspořádaný vesmír řízený konzistentními zákony a fyzikální přesností vzniknout bez počáteční inteligentní příčiny.

V hinduistických tradicích, které přijímají božské inkarnace a fyzická znázornění, je božství spojeno s omezením, konfliktem, hladem, smrtí a hmotnou formou. Bůh, který může být fyzicky znázorněn, vtělen nebo podroben přírodním procesům, se z racionálního pohledu jeví spíše jako součást stvoření než jako něco, co jej zcela přesahuje.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaismus',

            answerNature: `
Judaismus potvrzuje víru v jednoho Stvořitele, který stojí nad modlami a fyzickým znázorněním. Bůh (JHVH) je chápán jako Stvořitel nebes a země a zásadně odlišný od stvoření.
      `,

            objectiveCritique: `
Filozofická otázka zde nesměřuje primárně k transcendenci samotné, ale k vnímanému omezení univerzálnosti Boha v některých pasážích Hebrejské Bible. Některé texty zobrazují Boha v rámci smlouvy silně zaměřené na Izraelity, což kritici interpretují jako etnicky exkluzivní.

Navíc některé pasáže používají antropomorfní jazyk, například že Bůh „litoval“, že stvořil člověka (Genesis 6:6), nebo že „odpočíval“ sedmého dne (Exodus 31:17). Kritici tvrdí, že to vyvolává otázku, zda jde o doslovný nebo metaforický jazyk.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Křesťanství',

            answerNature: `
Křesťanství učí víru v jednoho Boha prostřednictvím nauky o Trojici: Otec, Syn a Duch svatý. Podle nauky o vtělení druhá osoba Trojice — Syn — vstoupila do lidských dějin v osobě Ježíše Krista, který byl ukřižován a zemřel za spásu lidstva.
      `,

            objectiveCritique: `
Filozoficky kritici tvrdí, že nauka o vtělení vytváří napětí mezi božskými a lidskými vlastnostmi. Bůh je tradičně popisován jako věčný, neomezený a nepodléhající smrti, zatímco člověk je konečný a smrtelný.

Problém nastává, když se v jedné osobě spojuje plná božskost a plná lidskost. Kritici se ptají, jak může věčná bytost současně zažívat hlad, spánek, utrpení a smrt.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Islám',

            answerNature: `
Islám představuje přísně transcendentní a nedělitelný koncept Boha. Korán shrnuje tento koncept v súře Al-Ichlás:

„Rci: On je Bůh, Jediný. Bůh, Věčný útočiště. Nenarodil se a nebyl zplozen a není mu nic rovno.“ (Korán 112:1–4)

Stvořitel v islámu je zcela mimo hmotu a odlišný od stvoření:

„Není nic jako On.“ (Korán 42:11)

Bůh není omezen časem, prostorem ani fyzickými limity. Korán také uvádí:

„Nezmocňuje se Ho ani spánek ani dřímota.“ (Korán 2:255)

V islámské teologii je Bůh chápán jako nezávislý, věčný a absolutně odlišný od stvoření.
      `,

            objectiveCritique: `
Z islámské filozofické perspektivy toto pojetí usiluje o zachování absolutní transcendence a vyhýbá se antropomorfismu a vtělení. Koncept odpovídá myšlence nezávislé a nutné První příčiny.
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

        title: 'Jaká je metoda a smysl života?',

        intro: `
Pokud existuje moudrý Stvořitel, pak by bylo nerozumné předpokládat, že lidstvo bylo ponecháno bez vedení vysvětlujícího smysl existence, morální odpovědnost a principy života. Stejně jako složitý systém vyžaduje instrukce od svého tvůrce, náboženství tvrdí, že poskytují rámec pro pochopení, proč jsme zde a jak máme žít.
  `,

        religions: {
          eastern: {
            title: 'Východní náboženství',

            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
Východní tradice jako buddhismus a hinduismus obecně vycházejí z filozofických učení, meditačních praktik a úvah duchovních učitelů.

V buddhismu je konečným cílem osvobození od utrpení a cyklu znovuzrození dosažením nirvány.

V mnoha hinduistických tradicích je cílem duchovní osvobození (mókša) prostřednictvím oddanosti, poznání nebo meditace.
      `,

            objectiveCritique: `
Kritici tvrdí, že tyto systémy jsou spíše filozofické a zkušenostní než založené na ověřitelném zjevení od transcendentního Stvořitele.

Také se uvádí, že důraz na odříkání může být v rozporu s přirozenými aspekty lidského života, jako je rozvoj společnosti, rodina a civilizace.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaismus',

            answerNature: `
V judaismu je způsob života založen na smluvním zákonu daném Mojžíšovi a zachyceném v Hebrejské Bibli (Tanach). Důraz je na dodržování Božích přikázání a smlouvy mezi Bohem a Izraelem.
      `,

            objectiveCritique: `
Kritici tvrdí, že judaismus se historicky vyvinul jako tradice spojená s konkrétním národem, nikoli univerzální misijní náboženství.

Někteří učenci také diskutují o redakci a sestavování Tóry v průběhu dějin.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Křesťanství',

            answerNature: `
Křesťanství učí, že problémem lidstva je hřích a oddělení od Boha, a že spása přichází skrze víru v Ježíše Krista a jeho vzkříšení. Smysl života je tedy smíření s Bohem a duchovní proměna.
      `,

            objectiveCritique: `
Historici uvádějí, že se nezachovaly originální rukopisy evangelií v jazyce, kterým mluvil Ježíš. Nejstarší texty jsou řecké a vznikly desítky let po jeho životě. Textová kritika poukazuje na variace v rukopisech Nového zákona.

Kritici také tvrdí, že křesťanství více zdůrazňuje duchovní spásu než právní a politický systém.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Islám',

            answerNature: `
Islám představuje komplexní pohled na lidský smysl, který spojuje duchovní uctívání a světskou odpovědnost.

Korán říká:

„Nevytvořil jsem džiny a lidi, leda aby Mne uctívali.“ (Korán 51:56)

Uctívání v islámu zahrnuje i činy, spravedlnost, etiku a společenský přínos.

Islám klade důraz na rovnováhu mezi duchovním a praktickým životem.
      `,

            objectiveCritique: `
Z islámského pohledu je Korán zachované zjevení, předávané písemně i ústně.

Islámské právo (šaría) je prezentováno jako komplexní systém etiky, práva a společenského řádu.
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

        title: 'Co se stane po poslední stanici?',

        subtitle: 'Osud, spravedlnost a posmrtný život',

        intro: `
Bez existence konečné spravedlnosti po smrti může být život vnímán jako nespravedlivý a nedokončený. Tyrani mohou zemřít bez odpovědnosti a oběti bez spravedlnosti. To otevírá otázku: je smrt konec, nebo existuje konečný soud?
  `,

        religions: {
          eastern: {
            title: 'Východní náboženství',

            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
Mnoho východních tradic učí o reinkarnaci a karmě.
      `,

            objectiveCritique: `
Kritici zpochybňují spravedlnost systému, kde člověk trpí bez paměti na své předchozí činy.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismus a ateismus',

            answerNature: `
Smrt je konec vědomí.
      `,

            objectiveCritique: `
Kritici tvrdí, že bez posmrtné spravedlnosti je morálka relativní.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Křesťanství',

            answerNature: `
Spása a věčný život jsou skrze víru v Krista.
      `,

            objectiveCritique: `
Kritici zpochybňují spravedlnost spásy založené na víře.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Islám',

            answerNature: `
Islám učí úplné morální odpovědnosti a soudný den.

„Každý atom dobra i zla bude viděn.“
      `,

            objectiveCritique: `
Důraz je na absolutní spravedlnost a odpovědnost.
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
      navbar: 'Srovnání náboženství',
      hero: {
        subtitle:
          'Klidná, ale hluboká filozofická cesta zkoumající největší otázky lidstva.',

        subtitleHighlight:
          'Stvořitele, smysl existence, morálku a posmrtný život.',

        scrollIndicator: 'Posuň pro začátek cesty',
      },

      storySection: {
        badge: 'Analogie vlaku',

        titleLine1: 'Než se zeptáme',
        titleLine2: 'na náboženství...',

        intro:
          'Každý člověk jednou dospěje k tichu, kde mizí rozptýlení a objevují se otázky.',

        ending: 'Ten vlak je planeta Země,',
        ending2: 'a cesta je tvůj život.',
      },

      coreQuestions: {
        sectionLabel: 'Hlavní sekce',
        title: 'Základní otázky',

        answerNatureTitle: 'Povaha odpovědi',

        philosophicalDiscussionTitle: 'Filozofická diskuse',

        referencesTitle: 'Reference',
      },

      futureResearch: {
        sectionLabel: 'Budoucí výzkum',

        title: 'Další otázky',

        loaderBadge: 'Další otázky přicházejí',

        headingLine1: 'Cesta',
        headingLine2: 'pokračuje...',

        description: 'Další filozofická a teologická zkoumání se připravují.',

        topics: [
          'Morálka',
          'Věda',
          'Zázraky',
          'Vědomí',
          'Svobodná vůle',
          'Utrpení',
          'Historie',
          'Proroctví',
          'Lidská přirozenost',
          'Smysl',
          'Civilizace',
          'Etika',
        ],

        footer: 'Nové sekce budou brzy přidány',
      },

      imageAlt: {
        hero: 'Srovnání náboženství',
      },
    },
  },
};
