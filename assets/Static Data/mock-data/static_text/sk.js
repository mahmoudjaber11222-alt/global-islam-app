export default {
  splash: {
    version: 'verzia',
    practice: 'prax',
    share: 'zdieľať',
    logo: 'globálny islam',
  },
  homeApp: {
    north: 'sever',
    east: 'východ',
    west: 'západ',
    south: 'juh',
    active: 'kibla aktívna',
    disabled: 'Otvoriť kompas kibla',
    welcome: 'Vitajte späť',
    greet: 'As-salámu alajkum',
    hour: 'hodina',
    minute: 'minúta',
    second: 'sekunda',
    toLeft: 'vľavo od vás',
    toRight: 'vpravo od vás',
    fromNorth: 'zo severu',
  },
  quranApp: {
    medinan: 'Medinská',
    meccan: 'Mekkánska',
    arabicName: 'názov v arabčine',
    englishName: 'názov v angličtine',
    details: 'Vyberte verš na zobrazenie prekladu a tafsíru (vysvetlenia)',
    selectRes: 'Vybrať zdroj',
    retry: 'skúsiť znova',
    loadErr1: 'Nepodarilo sa načítať vysvetlenie. Skúste to znova.',
    loadErr2: 'Načítanie zlyhalo',
    author: 'autor',
    explain: 'Vysvetlenie',
  },
  qiblaApp: {
    compass: 'Kompas kibla',
    accuracy: 'presnosť',
    offline: 'GPS offline',
    tracking: 'Sledovanie GPS',
    aligned:
      'Dívate sa smerom k ible. Držte stabilne pre presný smer modlitby.',
    notAligned:
      'Držte zariadenie vodorovne a otáčajte, kým šípka neukáže na kiblu.',
    heading: 'Smer zariadenia',
    turn: 'otočte',
    alignedQibla: 'Zarovnané s kiblou',
  },
  aiApp: {
    answer: 'odpoveď',
  },
  prayerApp: {
    locationRequired:
      'Pre presné časy modlitieb sú potrebné lokalizačné služby.',
    schedule: 'Harmonogram modlitieb',
    refresh: 'obnoviť',
    sunrise: 'Východ slnka',
    upcoming: 'Nasledujúca modlitba',
  },
  settingsApp: {
    reciterTitle: 'Recitátor azánu',
    reciterSub: 'Vyberte preferovaný hlas',
    notSelected: 'nevybrané',
    preview: 'náhľad',
    cancel: 'zrušiť',
    muezzin: 'Muezzin',
    preNot: 'Upozornenie pred azánom',
    preNotDet: 'Upozorniť 15 minút pred časom modlitby',
    theme: 'Tmavý režim',
    dark: 'Aktuálne tmavá téma',
    light: 'Aktuálne svetlá téma',
    about: 'O aplikácii',
    selectReciter: 'Vybrať recitátora',
  },
  athan: {
    mainTitle: 'AZÁN · VÝZVA K MODLITBE',
    stop: 'Zastaviť azán',
    error: 'Nepodarilo sa načítať zvuk azánu',
    prayerTime: 'Čas modlitby',
    play: 'prehrať',
    pause: 'pauza',
    dismiss: 'zavrieť',
  },
  athkarApp: {
    completed: 'Dokončené',
    remaining: 'zostáva',
    reset: 'resetovať',
    athkar: 'Adhkár',
    mention: 'dhikr',
    descM: 'Začnite deň požehnaním',
    descE: 'Ukončite deň pod ochranou',
    remmember: 'Denná pripomienka',
    cat: 'kategórie prosieb',
    category: 'Kategória',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hľadať hadíth...',
      button: 'Hľadať',
      books: {
        label: 'Kniha',
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
      title: 'Aktuálny jazyk zatiaľ nie je podporovaný',
      msg: 'Tento jazyk momentálne nie je podporovaný v dátovej sade hadíthov.',
      description:
        'Angličtina bola automaticky vybraná ako záložný jazyk, aby ste mohli naďalej bez problémov vyhľadávať a prehliadať hadíthy. Môžete tiež vyskúšať Pokročilý režim pre širšiu viacjazyčnú podporu vyhľadávania a lepšie výsledky.',
    },

    initialPlaceholder:
      'Vyhľadajte hadíth pre zobrazenie detailov ako hodnotenie, rozprávači a referencie',

    loading: {
      label: 'Načítavajú sa hadíthy...',
    },

    hadithCard: {
      showMore: 'Zobraziť viac',
      showLess: 'Zobraziť menej',

      header: {
        hadithPrefix: 'Hadíth #',
        referencesTitle: 'Referencie',
        referenceLabel: 'Referencia',
        inBookReference: 'Referencia v knihe',
        arabicReference: 'Arabská referencia',
      },
    },

    emptyState: 'Nenašli sa žiadne hadíthy',

    pagination: {
      prev: 'Predch.',
      next: 'Ďalej',
    },
  },

  switch: {
    title: {
      advanced: 'Pokročilý režim',
      normal: 'Normálny režim',
    },

    description: {
      advanced: 'Sémantické vyhľadávanie s hlbším porozumením',
      normal: 'Rýchle vyhľadávanie založené na filtroch',
    },
  },

  navbar: {
    routes: {
      home: 'Domov',
      prayers: 'Modlitby',
      quran: 'Korán',
      athkar: 'Dhikr',
      articles: 'Články',

      articlesNested: {
        islamicHistory: 'Islamská história',
        prayerInIslam: 'Modlitba v islame',
        womenInIslam: 'Ženy v islame',
        purification: 'Očista a omývanie',
      },

      learn: 'Učiť sa',
      learnNested: {
        quranTajweed: 'Učiť sa Korán a tajwíd',
        arabic: 'Učiť sa arabčinu',
      },

      dashboard: 'Dashboard',
      aiAssistant: 'AI asistent',
    },
  },
  hero: {
    title: {
      explore: 'Preskúmaj islam s',
      clarity: 'jasnosťou',
      peace: '& pokojom',
    },

    description:
      'Uč sa, pýtaj sa a objavuj autentické porozumenie prostredníctvom AI a riadeného poznania navrhnutého pre jasnosť a reflexiu.',

    actions: {
      introductionToIslam: 'Nauč sa o islame',
      islamQA: 'Islamské otázky a odpovede (AI asistent)',
      continueWebsite: 'Pokračovať na web',
    },
  },
  learning: {
    quran: {
      title: 'Naučte sa Korán a Tadžwíd',
      subtitle:
        'Zlepšite svoju recitáciu Koránu a pochopte pravidlá Tadžwídu krok za krokom.',
    },
    arabic: {
      title: 'Naučte sa arabčinu',
      subtitle:
        'Rozvíjajte svoje znalosti arabského jazyka prostredníctvom jasných a štruktúrovaných lekcií.',
    },
    default: {
      title: 'Sekcia vzdelávania',
      subtitle:
        'Preskúmajte vzdelávací obsah navrhnutý na posilnenie vašich vedomostí a porozumenia.',
    },
  },
  explore: {
    searchBar: {
      title: 'Vyhľadávanie zbierok hadísov',

      subtitle:
        'Vyhľadávaj prirodzene pomocou tém, významov alebo celých viet.',

      placeholder: 'Príklad: hadís o láskavosti k rodičom',

      button: 'Hľadať',
    },

    header: {
      title: 'Knižnica vyhľadávania hadísov',
      subtitle:
        'Okamžite preskúmaj autentické hadísy s moderným čítacím zážitkom.',
    },

    content: {
      heroTitle:
        'Objav autentické zbierky hadísov pomocou výkonného vyhľadávania',

      loading: {
        label: 'Vyhľadávanie zbierok hadísov...',
      },

      error: {
        title: 'Nepodarilo sa načítať hadísy',
        message:
          'Momentálne sa nám nepodarilo získať tradície. Skontroluj pripojenie a skús znova.',
      },

      empty: {
        title: 'Neboli nájdené žiadne zodpovedajúce hadísy',
      },

      card: {
        reference: 'Odkaz hadísu',
        readMore: 'Prečítať celý hadís',
      },
    },
  },

  home: {
    news: {
      title: 'Aktualizácie moslimskej komunity',
      subtitle: 'Zostaň informovaný o dôležitých správach z moslimského sveta',
    },

    prayer: {
      title: 'Odpočítavanie do modlitby',
      subtitle: 'Priprav sa na ďalšiu modlitbu',
      button: 'Zobraziť časy modlitieb',
      nextPrayerLabel: 'Ďalšia modlitba o:',
    },

    athkar: {
      title: 'Ranné a večerné dhikry',
      subtitle: 'Denná spomienka pre spojenie srdca',
      button: 'Zobraziť viac dhikrov',
    },

    qibla: {
      title: 'Smer Kibla',
      subtitle: 'Nájdi smer Kaaby kdekoľvek si',
      locationLoading: 'Získava sa poloha...',
      enableLocation: 'Povoliť polohu',
      refreshLocation: 'Obnoviť smer kibly',

      warning:
        'Ak tvoje zariadenie nepodporuje orientačné senzory, presnosť kompasu môže byť ovplyvnená.',

      errorTitle: 'Oprávnenie zamietnuté',
    },
  },

  prayers: {
    nextLabel: 'Ďalšia modlitba o',
    header: {
      title: 'Časy modlitieb',
      subtitle: 'Denný moment spojenia s tvojím Stvoriteľom',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Získava sa poloha...',
      warning:
        'Ak operačný systém nepodporuje orientáciu, ovplyvní to výpočty kompasu.',
      errorTitle: 'Oprávnenie zamietnuté',
      enableLocation: 'Povoliť polohu',
      refreshLocation: 'Obnoviť smer kibly',
    },

    list: {
      warning: 'Časy sa môžu mierne líšiť podľa metódy výpočtu.',
    },
  },

  quran: {
    header: {
      title: 'Korán',
      subtitle: 'Tvoj každodenný spoločník na čítanie a zamyslenie',
    },

    search: {
      noResultTitle: 'Žiadne dáta',
      noResultMessage: 'Žiadne dáta na zobrazenie',
    },
  },

  athkar: {
    title: 'Denné dhikry',
    subtitle: 'Zostaň dôsledný v každodennej spomienke a reflexii',
  },

  ai: {
    header: {
      title: 'Globálny islamský AI asistent',
      subtitle:
        'Získaj jasné islamské odpovede založené na Koráne, Sunnah a dôveryhodnom poznaní',
    },

    loading: {
      label: 'Načítava sa...',
    },

    error: {
      title: 'Dosiahnutý limit požiadaviek',
      message: 'Služba poznania je momentálne nedostupná. Skús to neskôr.',
    },

    input: {
      placeholder: 'Opýtaj sa otázku o islame...',
    },

    suggestions: [
      'Môžem sa modliť bez wudu?',
      'Je úrok (riba) úplne zakázaný?',
      'Pravidlá práce v ne-halal prostredí',
      'Môžem sa modliť počas cestovania?',
      'Je povolené používať parfum počas modlitby?',
      'Čo ruší modlitbu?',
      'Odsúvanie modlitieb kvôli práci',
    ],

    footer: {
      disclaimer:
        'Tento AI asistent poskytuje odpovede založené na overených zdrojoch poznania vrátane islamských referencií a vzdelávacích materiálov.',

      note: 'Odpovede sú informačné a nenahrádzajú radu učencov, kde je to potrebné.',
    },
  },

  footer: {
    disclaimer:
      'Všetok zobrazený obsah pochádza z pôvodných dôveryhodných zdrojov. Uvítame spätnú väzbu a hlásenia chýb na kontrolu a opravu.',

    tagline: 'Vytvorené s dôrazom na autentický islamský obsah',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadís',
      backButton: 'Späť',
    },

    sections: {
      hadithText: 'Text hadísu',
      arabicText: 'Arabský text',
      explanation: 'Vysvetlenie',
      authentication: 'Autenticita',
      lessons: 'Poučenia a prínosy',
    },
  },
  other: {
    part: 'Časť',
    translation: 'Preklad',
    verse: 'Verš',
    chapter: 'Kapitola',
    page: 'Strana',
    breakingNews: 'Najnovšie správy',
  },
  dailyRemined: {
    title: 'Svetlo Dňa',
    subtitle:
      'Zastavte sa na chvíľu a zamyslite sa nad veršom a hadísom vybranými pre váš deň.',
  },
  baseFooter: {
    contact: {
      title: 'Kontaktujte nás',
      name: 'Vaše meno',
      email: 'Váš e-mail',
      msg: 'Vaša správa',
      sendMsg: 'Odoslať správu',
    },
    followUs: 'Sledujte nás',
    QA: 'Rýchly prístup',
    logoB:
      'Korán, Hadísy, časy modlitieb, AI asistent a každodenné islamské nástroje—all na jednej modernej platforme.',
    whatsapp: 'Chat na WhatsApp',
    rsr: 'Všetky práva vyhradené',
  },
  compareRelg: {
    note: `Táto stránka predstavuje komparatívny prehľad hlavných svetových náboženstiev. Z islamskej perspektívy Korán potvrdzuje, že predchádzajúce božské zjavenia boli zoslané skorším národom, avšak v priebehu času prešli ľudskými úpravami (tahríf). Korán uvádza: „Naozaj sme to My, kto zoslal Pripomenutie, a My nad ním určite budeme bdieť“ (15:9). Táto stránka skúma tieto rozdiely vo svetle historických a textových dôkazov.`,
    mainTitle: 'Racionálna cesta svetom náboženstiev',
    headerTitle: 'Otázky, ktoré definujú ľudskú existenciu',
    story: `
Predstavte si, že zrazu otvoríte oči a zistíte, že ste v luxusnom vlaku, ktorý sa vysokou rýchlosťou rúti nekonečnou nocou. Okolo vás je všetko mysliteľné pohodlie: bohaté jedlá podávané na elegantných stoloch, obrazovky s filmami a hodvábne vankúše na mäkkých sedadlách.

S pocitom nepokoja sa spýtate spolucestujúceho vedľa seba:
"Kde sme? Kto nás do tohto vlaku posadil? A kam smerujeme?"

Najprekvapivejšia je však ich reakcia.

Jeden odpovie chladne:
"Čo je ťa do toho? Len si užívaj jedlo, je fantastické."

Iný odpovie s posmechom:
"Prečo sa trápiť takýmito otázkami? Pohodlne sa usaď a pozri si film."

Všetci okolo vás sa strácajú v pôžitkoch cesty, ale vás zachváti hlboký strach, pretože viete, že tento vlak uháňa ku konečnej stanici – miestu, kde musí každý cestujúci napokon vystúpiť.

V tej chvíli vyvstáva zásadná otázka:

Oddáte sa luxusu a zábave cesty, alebo budete ďalej hľadať odpovede na tri najhlbšie otázky:

Kto je Stvoriteľ?
Prečo sme tu?
A čo nás čaká na konci?

Tento vlak je planéta Zem a cesta je váš samotný život.

Keďže ľudia tieto odpovede od prírody nemajú, náboženstvá vznikli ako „návody na použitie“, pričom každé z nich tvrdí, že pochádza priamo od projektanta vlaku.

Poďme tieto návody analyzovať pokojným a racionálnym pohľadom.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kto je Stvoriteľ?',

        intro: `
Z filozofického a logického hľadiska musí byť Stvoriteľ ako „Prvá príčina“ vesmíru úplne transcendentný, mimo hraníc hmoty, času a priestoru. Keby bol Stvoriteľ podrobený hladu, únave, fyzickým obmedzeniam alebo priestorovým rámcom, takáto bytosť by logicky stratila štatút absolútneho Stvoriteľa a stala by sa stvorenou a závislou bytosťou. Závislá bytosť nemôže byť nevyhnutným zdrojom celej existencie.
  `,

        religions: {
          eastern: {
            title: 'Východné náboženstvá',
            examples: ['Hinduizmus', 'Budhizmus'],

            answerNature: `
Vo svojej najstaršej forme, Theravada, je budhizmus vo všeobecnosti neteistický; nezameriava sa na existenciu stvoriteľa, ale vníma bytie ako výsledok večných prírodných procesov, kauzality a vzájomne závislých zákonov.

Hinduizmus naopak často hovorí o fundamentálnej metafyzickej realite zvanej „Brahman“. V praxi sa však táto najvyššia realita prejavuje prostredníctvom nespočetných foriem a božstiev, vrátane ľudských a zvieracích postáv, ako sú Višnu, Šiva a Kálí.
      `,

            objectiveCritique: `
Z filozofického hľadiska čelí budhizmus výzve vysvetliť, ako môže vysoko usporiadaný vesmír, ovládaný konzistentnými zákonmi a fyzikálnou presnosťou, vzniknúť bez pôvodnej vedomej príčiny.

V hinduistických tradíciách, ktoré akceptujú božské inkarnácie a fyzické zobrazenia, sa božstvo spája s obmedzeniami, konfliktmi, hladom, smrťou a materiálnou formou. Božstvo, ktoré možno fyzicky zobraziť, vteliť alebo ktoré podlieha prírodným procesom, sa z racionálneho hľadiska zdá byť skôr súčasťou stvorenia než bytosťou, ktorá ho úplne presahuje.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaizmus',

            answerNature: `
Judaizmus potvrdzuje vieru v Stvoriteľa, ktorý je vyvýšený nad modlami a fyzickými obrazmi. Boh (JHWH) je chápaný ako Stvoriteľ nebies a zeme a je v podstate odlišný od svojho stvorenia.
      `,

            objectiveCritique: `
Filozofický problém, ktorý tu vyvstáva, sa netýka ani tak transcendencie samotnej, ako skôr hraníc univerzálnosti Boha, ako sa objavujú v niektorých pasážach Hebrejskej biblie. Určité texty vykresľujú Boha vo vzťahu zmluvy, silne orientovanej na synov Izraela, čo kritici interpretujú ako etnický exkluzivizmus.

Okrem toho niektoré pasáže používajú ľudský jazyk na opis Boha, ako napríklad „ľutovanie“ stvorenia človeka (Genezis 6:6) alebo „odpočinok“ v siedmy deň po stvorení (Exodus 31:17). Kritici tvrdia, že takéto opisy vyvolávajú otázku, či treba tieto vlastnosti chápať doslovne alebo metaforicky.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kresťanstvo',

            answerNature: `
Kresťanstvo učí vieru v jedného Boha prostredníctvom doktríny Najsvätejšej Trojice: Otca, Syna a Ducha Svätého. Podľa doktríny vtelenia druhá osoba Trojice – Syn – vstúpila do dejín ľudstva v osobe Ježiša Krista, ktorý bol ukrižovaný a zomrel za spásu ľudstva.
      `,

            objectiveCritique: `
Filozoficky kritici tvrdia, že doktrína vtelenia vytvára napätie medzi božskými a ľudskými atribútmi. Tradične je Boh opisovaný ako večný, neobmedzený a mimo smrti, zatiaľ čo ľudia sú opisovaní ako koneční, zraniteľní a smrteľní.

Problém nastáva, keď sú plná božskosť a plná ľudskosť spojené v jednej osobe. Kritici sa pýtajú, ako môže večná a nezávislá bytosť súčasne prežívať hlad, spánok, utrpenie a smrť. Tento problém sa často formuluje ako napätie medzi transcendenciou a vtelením, nie len ako teologické tajomstvo.
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
Islam predstavuje koncepciu Boha, ktorý je úplne transcendentný a nedeliteľný. Korán túto koncepciu zhŕňa v súre Al-Ichlás:

„Povedz: On je Alah, Jediný. Alah, Absolútny. Nesplodil a nebol splodený. A nič sa Mu nevyrovná.“ (Korán 112:1–4)

V islame je Stvoriteľ úplne mimo materiálnej formy a je odlišný od stvorenia:

„Nič sa Mu nepodobá.“ (Korán 42:11)

Boh nie je obmedzený časom, priestorom ani fyzickými obmedzeniami. Korán tiež uvádza:

„Nezachváti Ho ani driemota, ani spánok.“ (Korán 2:255)

V islamskej teológii je Boh chápaný ako nezávislá, večná, sebestačná a od stvorenia absolútne odlišná bytosť.
      `,

            objectiveCritique: `
Z islamského filozofického hľadiska sa táto koncepcia snaží zachovať absolútnu transcendenciu vyhýbaním sa antropomorfizmu a vtleniu. Jej cieľom je zosúladiť Stvoriteľa s ideou nezávislej a nevyhnutnej Prvej príčiny, ktorá nepodlieha obmedzeniam stvoreného bytia.
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

        title: 'Aký je spôsob života a cieľ?',

        intro: `
Ak existuje múdry Stvoriteľ, je iracionálne predpokladať, že ľudstvo bolo ponechané bez smerníc, ktoré by vysvetľovali účel existencie, morálnu zodpovednosť a zásady, ktorými sa treba riadiť. Rovnako ako zložité systémy vyžadujú pokyny od svojho projektanta, náboženstvá tvrdia, že poskytujú rámec, ktorý pomáha človeku pochopiť, prečo sme tu a ako by sme mali žiť.
  `,

        religions: {
          eastern: {
            title: 'Východné náboženstvá',

            examples: ['Hinduizmus', 'Budhizmus'],

            answerNature: `
Východné tradície ako budhizmus a hinduizmus sa vo všeobecnosti spoliehajú na filozofické učenia, meditačné praktiky a úvahy rozvinuté duchovnými učiteľmi a mudrcmi.

V budhizme je konečným cieľom oslobodenie od utrpenia a únik z kolobehu znovuzrodení dosiahnutím Nirvány – stavu transcendencie a vnútorného oslobodenia.

V mnohých hinduistických tradíciách je cieľom duchovné oslobodenie (Mókša), dosiahnuteľné prostredníctvom oddanosti, poznania, meditácie alebo disciplinovaného konania.
      `,

            objectiveCritique: `
Kritici tvrdia, že tieto systémy sú primárne filozofické a založené na skúsenosti, než na overiteľnom zjavení od transcendentného Stvoriteľa.

Niektorí tiež argumentujú, že silný dôraz na ústup zo svetského života, mníšstvo a sebazaprenie môže byť v konflikte s aspektmi ľudskej prirodzenosti, ktoré stimulujú sociálny rozvoj, vedecký pokrok, rodinný život a civilizáciu.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaizmus',

            answerNature: `
V judaizme je spôsob života zakorenený v zákone zmluvy zjavenom Mojžišovi a uchovanom v Hebrejskej biblii (Tanach). Náboženský rámec sa zameriava na poslušnosť voči Božím prikázaniam a udržiavanie vzťahu zmluvy medzi Bohom a synmi Izraela.
      `,

            objectiveCritique: `
Kritici argumentujú, že judaizmus sa historicky vyvíjal ako tradícia orientovaná na zmluvu s konkrétnym národom, nie ako univerzálne misijné náboženstvo pre celé ľudstvo.

Z hľadiska textovej analýzy niektorí učenci – vrátane Richarda Elliotta Friedmana – tvrdia, že Tóra prešla procesmi kompilácie a úprav v priebehu storočí, najmä okolo babylonského zajatia a po ňom. To vedie niektorých kritikov k pochybnostiam, či možno text považovať za dokonale zachované zjavenie v jeho pôvodnej podobe.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kresťanstvo',

            answerNature: `
Kresťanstvo učí, že hlavným problémom ľudstva je hriech a odlúčenie od Boha a že spása sa dosahuje vierou v obetnú smrť Ježiša a Jeho zmŕtvychvstanie. Cieľ života sa preto chápe cez zmierenie s Bohom a duchovnú premenu.
      `,

            objectiveCritique: `
Historicky učenci poznamenávajú, že pôvodné rukopisy evanjelií v aramejčine (jazyk Ježiša) sa nezachovali. Najstaršie zachované texty sú grécke rukopisy, napísané desaťročia po Ježišovom živote. Textoví kritici ako Bart Ehrman zdokumentovali početné variácie v najstarších kópiách Nového zákona.

Kritici tiež argumentujú, že kresťanstvo historicky kládlo väčší dôraz na duchovnú a osobnú spásu než na budovanie komplexného právneho alebo politického rámca pre ekonomiku, trestné právo alebo štátnu správu. Niektorí historici sa domnievajú, že to prispelo k následnej odluke cirkvi od štátu v mnohých západných spoločnostiach.
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
Islam ponúka komplexné pochopenie ľudského účelu prostredníctvom integrácie duchovnej oddanosti a svetskej zodpovednosti.

Korán uvádza:

„Džinov a ľudí som stvoril iba preto, aby Mi slúžili.“ (Korán 51:56)

V islamskom myslení sa uctievanie neobmedzuje na rituály, ale zahŕňa správne konanie, spravodlivosť, etické správanie, hľadanie poznania a pozitívny prínos pre spoločnosť.

Islamské učenie sleduje rovnováhu medzi duchovným rastom a praktickou účasťou na rodinnom živote, ekonomike, správe vecí verejných, charite a sociálnej zodpovednosti.
      `,

            objectiveCritique: `
Z islamského hľadiska predstavuje Korán jedinečne zachované zjavenie. Moslimovia tvrdia, že text zostal nezmenený a bol nepretržite odovzdávaný prostredníctvom písomných rukopisov a ústneho memorovania už od prvých generácií islamu.

Často citovanými príkladmi sú staroveké texty, ako napríklad Korán z Birminghamu, a obrovská tradícia ústneho memorovania, ktorú udržiavajú milióny moslimov na celom svete.

Islamské právo (Šaría) sa tiež prezentuje ako etický a právny rámec pokrývajúci oblasti ako financie, charita, rodinné právo, trestné právo a správa vecí verejných. Zástancovia argumentujú, že to dáva islamu črty úplného morálneho a civilizačného systému, nie len duchovnej tradície.
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

        title: 'Čo sa deje po Konečnej stanici?',

        subtitle: 'Osud, spravodlivosť a posmrtný život',

        intro: `
Bez existencie konečnej spravodlivosti po smrti môže život pôsobiť veľmi ľubovoľne a morálne nevyriešene. Tyrani môžu zomrieť bez toho, aby sa zodpovedali, a obete môžu opustiť svet bez toho, aby našli spravodlivosť. To vyvoláva jednu z najstarších filozofických otázok ľudstva: je smrť koncom, alebo existuje konečný súd mimo pozemského života?
  `,

        religions: {
          eastern: {
            title: 'Východné náboženstvá',

            examples: ['Hinduizmus', 'Budhizmus'],

            answerNature: `
Mnohé východné tradície akceptujú koncept reinkarnácie, v ktorej duša alebo prúd vedomia prechádza opakovanými cyklami znovuzrodenia. Budúci stav jednotlivca je určený karmou: morálnymi následkami minulých činov.
      `,

            objectiveCritique: `
Kritici argumentujú, že reinkarnácia vyvoláva filozofické otázky o spravodlivosti a zodpovednosti. Ak niekto v novom živote znáša následky činov z predchádzajúcej existencie, na ktoré si nemôže vedome spomenúť, výchovný a morálny cieľ trestu sa stáva ťažko pochopiteľným.

Z tejto perspektívy sa zodpovednosť bez vedomého pamäti zdá byť odtrhnutá od zmysluplnej morálnej zodpovednosti.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materializmus a ateizmus',

            answerNature: `
Materialistické a ateistické svetonázory zvyčajne považujú smrť za koniec vedomého bytia. Ľudské bytosti sú chápané ako biologické organizmy, ktorých vedomie úplne zaniká po fyzickej smrti.
      `,

            objectiveCritique: `
Kritici tvrdia, že prísny materializmus má problém poskytnúť objektívny základ pre morálku, spravodlivosť a fundamentálny zmysel. Ak útlakateľ aj obeť nakoniec zmiznú v ničote bez toho, aby sa zodpovedali, pojmy ako obeta, morálna povinnosť a spravodlivosť môžu pôsobiť subjektívne alebo sociálne konštruované, než univerzálne záväzné.

Zástancovia sekulárnej etiky však argumentujú, že morálka môže stále vznikať prostredníctvom rozumu, empatie a sociálnej zodpovednosti bez viery v posmrtný život.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kresťanstvo',

            answerNature: `
Kresťanstvo učí, že spása a večný život sa dosahujú vierou v Ježiša Krista a prijatím Jeho obety za hriechy ľudstva. Nebo a večná spása sú úzko späté s vierou v Krista a Božou milosťou.
      `,

            objectiveCritique: `
Kritici sa pýtajú, ako sa spása založená primárne na viere vzťahuje na univerzálne princípy spravodlivosti. Filozoficky niektorí argumentujú, že tento rámec môže znamenať, že morálne dobrý človek, ktorý sa úprimne snaží prijať určité teologické dogmy, môže byť spásy zbavený, zatiaľ čo iný človek, ktorý spáchal ťažké zločiny, ale uveril v poslednej chvíli, môže získať večnú odmenu.

Kresťanskí teológovia často odpovedajú, že spása zahŕňa úprimnú vieru aj autentické pokánie, nie len ústne vyznanie.
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
Islam predstavuje posmrtný život ako systém absolútnej morálnej zodpovednosti a Božej spravodlivosti.

Korán uvádza:

„Žiadna duša neponesie bremeno inej.“ (Korán 6:164)

Spása v islame je dôsledne spojená s vierou a dobrými skutkami:

„A zvestuj radostnú zvesť tým, ktorí veria a konajú dobré skutky...“ (opakuje sa v celom Koráne, vrátane 2:25)

Islam učí, že pozemský život je dočasná skúška, nie miesto konečnej odmeny alebo trestu:

„On, ktorý stvoril smrť a život, aby vás vyskúšal, kto z vás je lepší v konaní.“ (Korán 67:2)
      `,

            objectiveCritique: `
V islamskej teológii predstavuje Súdny deň konečný tribunál, kde sa započíta každý skutok, akokoľvek malý.

Korán uvádza:

„Kto urobí dobro vážiace čo i len čiastočku atómu, uvidí ho. A kto urobí zlo vážiace čo i len čiastočku atómu, uvidí ho.“ (Korán 99:7–8)

Tento rámec sa snaží zachovať individuálnu zodpovednosť aj absolútnu spravodlivosť, pričom ponúka morálnu istotu, že žiadny akt útlaku alebo dobra nezostane nakoniec bez následkov.
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
      navbar: 'Porovnanie náboženstiev',
      hero: {
        subtitle:
          'Pokojná a hlboká filozofická cesta po najväčších otázkach ľudstva: Stvoriteľ, účel existencie, morálka a to, čo nás čaká po smrti.',

        subtitleHighlight:
          'Stvoriteľ, účel existencie, morálka a to, čo nás čaká po smrti.',

        scrollIndicator: 'Posuňte nadol, aby ste začali cestu',
      },

      storySection: {
        badge: 'Analógia vlaku',

        titleLine1: 'Predtým, než položíte otázky',
        titleLine2: 'O náboženstve...',

        intro:
          'Každý človek napokon dosiahne okamih ticha, keď rušivé vplyvy zmiznú – a tie najhlbšie otázky konečne vyplávajú na povrch.',

        ending: 'Tento vlak je planéta Zem,',
        ending2: 'a cesta je váš samotný život.',
      },

      coreQuestions: {
        sectionLabel: 'Hlavné sekcie',
        title: 'Fundamentálne otázky',

        answerNatureTitle: 'Povaha odpovede',

        philosophicalDiscussionTitle: 'Filozofická diskusia',

        referencesTitle: 'Referencie',
      },

      futureResearch: {
        sectionLabel: 'Budúci výskum',

        title: 'Ďalšie otázky',

        loaderBadge: 'Ďalšie otázky v príprave',

        headingLine1: 'Cesta',
        headingLine2: 'pokračuje...',

        description:
          'Ďalšie filozofické a teologické výskumy sú študované a pripravované s použitím rovnakého štruktúrovaného porovnávacieho prístupu.',

        topics: [
          'Morálka',
          'Veda',
          'Zázraky',
          'Vedomie',
          'Slobodná vôľa',
          'Utrpenie',
          'Historický prenos',
          'Proroctvá',
          'Ľudská prirodzenosť',
          'Zmysel',
          'Civilizácia',
          'Etika',
        ],

        footer: 'Nové sekcie budú pridané čoskoro',
      },

      imageAlt: {
        hero: 'Porovnanie náboženstiev',
      },
    },
  },
};
