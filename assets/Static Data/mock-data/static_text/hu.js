export default {
  splash: {
    version: 'verzió',
    practice: 'gyakorlás',
    share: 'megosztás',
    logo: 'globális iszlám',
  },
  homeApp: {
    north: 'észak',
    east: 'kelet',
    west: 'nyugat',
    south: 'dél',
    active: 'kibla aktív',
    disabled: 'Kibla iránytű megnyitása',
    welcome: 'Üdv újra',
    greet: 'Asszalamu alejkum',
    hour: 'óra',
    minute: 'perc',
    second: 'másodperc',
    toLeft: 'a bal oldaladon',
    toRight: 'a jobb oldaladon',
    fromNorth: 'északról',
  },
  quranApp: {
    medinan: 'Medinai',
    meccan: 'Mekkai',
    arabicName: 'név arabul',
    englishName: 'név angolul',
    details:
      'Válassz egy áyát a fordítás és a tafszír (magyarázat) megtekintéséhez',
    selectRes: 'Forrás kiválasztása',
    retry: 'próbáld újra',
    loadErr1: 'A magyarázat betöltése sikertelen. Kérjük, próbáld újra.',
    loadErr2: 'Lekérés sikertelen',
    author: 'szerző',
    explain: 'Magyarázat',
  },
  qiblaApp: {
    compass: 'Kibla iránytű',
    accuracy: 'pontosság',
    offline: 'GPS offline',
    tracking: 'GPS-követés',
    aligned: 'A Kibla felé nézel. Tartsd stabilan a pontos imairány érdekében.',
    notAligned:
      'Tartsd a készüléket vízszintesen és forgasd, amíg a nyíl a Kiblára mutat.',
    heading: 'Készülék iránya',
    turn: 'fordítsd',
    alignedQibla: 'Kibla-hoz igazítva',
  },
  aiApp: {
    answer: 'válasz',
  },
  prayerApp: {
    locationRequired:
      'A pontos imaidőkhöz szükséges a helymeghatározási szolgáltatás.',
    schedule: 'Imaidőrend',
    refresh: 'frissítés',
    sunrise: 'Napkelte',
    upcoming: 'Következő ima',
  },
  settingsApp: {
    reciterTitle: 'Ezan éneklő',
    reciterSub: 'Válaszd ki a kedvenc hangod',
    notSelected: 'nincs kiválasztva',
    preview: 'előnézet',
    cancel: 'mégse',
    muezzin: 'Muezzin',
    preNot: 'Ezan előtti értesítés',
    preNotDet: 'Értesítés 15 perccel az imaideje előtt',
    theme: 'Sötét mód',
    dark: 'Jelenleg sötét téma',
    light: 'Jelenleg világos téma',
    about: 'Névjegy',
    selectReciter: 'Éneklő kiválasztása',
  },
  athan: {
    mainTitle: 'EZÁN · IMAHÍVÁS',
    stop: 'Ezan leállítása',
    error: 'Az ezan hang betöltése sikertelen',
    prayerTime: 'Imaideje',
    play: 'lejátszás',
    pause: 'szünet',
    dismiss: 'bezárás',
  },
  athkarApp: {
    completed: 'Kész',
    remaining: 'hátralévő',
    reset: 'visszaállítás',
    athkar: 'Adhkár',
    mention: 'dhikr',
    descM: 'Kezdd a napod áldással',
    descE: 'Fejezd be a napod védelemmel',
    remmember: 'Napi Emlékeztető',
    cat: 'imák kategóriái',
    category: 'Kategória',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hadísz keresése...',
      button: 'Keresés',
      books: {
        label: 'Könyv',
        options: {
          bukhari: 'Bukhári',
          muslim: 'Muszlim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Abu Dáúd',
          nasai: 'Naszaí',
          ibnmajah: 'Ibn Mádzsa',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'A jelenlegi nyelv még nem támogatott',
      msg: 'Ez a nyelv jelenleg nem támogatott a hadísz adatbázisban.',
      description:
        'Az angol nyelv automatikusan ki lett választva tartalék nyelvként, hogy továbbra is zavartalanul tudj hadíszokat keresni és böngészni. Kipróbálhatod a Speciális módot is a szélesebb többnyelvű támogatás és jobb találatok érdekében.',
    },

    initialPlaceholder:
      'Keress hadíszt a részletek megtekintéséhez, például minősítés, közvetítők és hivatkozások',

    loading: {
      label: 'Hadíszok betöltése...',
    },

    hadithCard: {
      showMore: 'Több megjelenítése',
      showLess: 'Kevesebb megjelenítése',

      header: {
        hadithPrefix: 'Hadísz #',
        referencesTitle: 'Hivatkozások',
        referenceLabel: 'Hivatkozás',
        inBookReference: 'Könyvön belüli hivatkozás',
        arabicReference: 'Arab hivatkozás',
      },
    },

    emptyState: 'Nem található hadísz',

    pagination: {
      prev: 'Előző',
      next: 'Következő',
    },
  },

  switch: {
    title: {
      advanced: 'Speciális mód',
      normal: 'Normál mód',
    },

    description: {
      advanced: 'Szemantikus keresés mélyebb megértéssel',
      normal: 'Gyors, szűrőkön alapuló keresés',
    },
  },

  navbar: {
    routes: {
      home: 'Kezdőlap',
      prayers: 'Imák',
      quran: 'Korán',
      athkar: 'Dhikr',
      articles: 'Cikkek',

      articlesNested: {
        islamicHistory: 'Iszlám történelem',
        prayerInIslam: 'Imádság az iszlámban',
        womenInIslam: 'Nők az iszlámban',
        purification: 'Tisztulás és mosakodás',
      },

      learn: 'Tanulás',
      learnNested: {
        quranTajweed: 'Korán és tajvíd tanulás',
        arabic: 'Arab nyelv tanulás',
      },

      dashboard: 'Vezérlőpult',
      aiAssistant: 'AI asszisztens',
    },
  },
  hero: {
    title: {
      explore: 'Fedezd fel az iszlámot',
      clarity: 'tisztán',
      peace: '& békével',
    },

    description:
      'Tanulj, tegyél fel kérdéseket és fedezd fel a hiteles megértést mesterséges intelligencia és vezetett tudás segítségével, a tisztaság és elmélkedés jegyében.',

    actions: {
      introductionToIslam: 'Ismerd meg az iszlámot',
      islamQA: 'Iszlám Kérdések és Válaszok (AI asszisztens)',
      continueWebsite: 'Tovább a weboldalra',
    },
  },
  learning: {
    quran: {
      title: 'Korán és Tadzsvid tanulása',
      subtitle:
        'Fejleszd a Korán recitálását, és értsd meg a Tadzsvid szabályait lépésről lépésre.',
    },
    arabic: {
      title: 'Arab nyelv tanulása',
      subtitle:
        'Fejleszd arab nyelvi készségeidet világos és strukturált leckékkel.',
    },
    default: {
      title: 'Tanulási szekció',
      subtitle:
        'Fedezz fel oktatási tartalmakat, amelyek tudásod és megértésed erősítésére készültek.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadísz gyűjtemény keresése',

      subtitle:
        'Keress természetesen témák, jelentések vagy teljes mondatok alapján.',

      placeholder: 'Példa: hadísz a szülőkkel való kedvességről',

      button: 'Keresés',
    },

    header: {
      title: 'Hadísz kereső könyvtár',
      subtitle:
        'Fedezd fel az autentikus hadíszokat modern olvasási élménnyel.',
    },

    content: {
      heroTitle:
        'Fedezd fel az autentikus hadísz gyűjteményeket erőteljes kereséssel',

      loading: {
        label: 'Hadísz gyűjtemények keresése...',
      },

      error: {
        title: 'Nem sikerült betölteni a hadíszokat',
        message:
          'Jelenleg nem tudtuk lekérni a narrációkat. Ellenőrizd a kapcsolatot és próbáld újra.',
      },

      empty: {
        title: 'Nincs találat',
      },

      card: {
        reference: 'Hadísz hivatkozás',
        readMore: 'Teljes hadísz olvasása',
      },
    },
  },

  home: {
    news: {
      title: 'Muszlim közösségi hírek',
      subtitle: 'Maradj naprakész a muszlim világból érkező fontos hírekkel',
    },

    prayer: {
      title: 'Imaidő visszaszámlálás',
      subtitle: 'Készülj fel a következő imára',
      button: 'Imaidők megtekintése',
      nextPrayerLabel: 'Következő ima:',
    },

    athkar: {
      title: 'Reggeli és esti zikr',
      subtitle: 'Napi emlékezés a szív kapcsolatának fenntartására',
      button: 'További zikr megtekintése',
    },

    qibla: {
      title: 'Kibla irány',
      subtitle: 'Találd meg a Kába irányát bárhol is vagy',
      locationLoading: 'Hely meghatározása...',
      enableLocation: 'Hely engedélyezése',
      refreshLocation: 'Kibla irány frissítése',

      warning:
        'Ha az eszköz nem támogatja az orientációs szenzorokat, az iránytű pontossága csökkenhet.',

      errorTitle: 'Engedély megtagadva',
    },
  },

  prayers: {
    nextLabel: 'Következő ima:',
    header: {
      title: 'Imádkozási idők',
      subtitle: 'Napi pillanat a Teremtőddel való kapcsolatra',
    },
    times: {
      Fajr: 'Fadzsr',
      Dhuhr: 'Duhur',
      Asr: 'Aszr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },
    qibla: {
      loading: 'Hely meghatározása...',
      warning:
        'Ha az operációs rendszer nem támogatja az orientációt, az befolyásolja az iránytű számítását.',
      errorTitle: 'Engedély megtagadva',
      enableLocation: 'Hely engedélyezése',
      refreshLocation: 'Kibla irány frissítése',
    },

    list: {
      warning:
        'Az idők kis mértékben eltérhetnek a számítási módszertől függően.',
    },
  },

  quran: {
    header: {
      title: 'Korán',
      subtitle: 'Napi társad az olvasáshoz és elmélkedéshez',
    },

    search: {
      noResultTitle: 'Nincs adat',
      noResultMessage: 'Nincs megjeleníthető adat',
    },
  },

  athkar: {
    title: 'Napi emlékezések',
    subtitle: 'Legyél következetes a napi emlékezésben és elmélkedésben',
  },

  ai: {
    header: {
      title: 'Globális iszlám AI asszisztens',
      subtitle:
        'Világos iszlám válaszok a Korán, Szunna és megbízható tudás alapján',
    },

    loading: {
      label: 'Betöltés...',
    },

    error: {
      title: 'Elérted a kéréslimitet',
      message:
        'Jelenleg nem érhető el a tudás szolgáltatás. Próbáld újra később.',
    },

    input: {
      placeholder: 'Tegyél fel egy kérdést az iszlámról...',
    },

    suggestions: [
      'Imádkozhatok, ha nincs wudu-m?',
      'A kamat (riba) teljesen tilos?',
      'Munka nem-halal környezetben',
      'Imádkozhatok utazás közben?',
      'Használhatok parfümöt imádság közben?',
      'Mi érvényteleníti az imát?',
      'Imák késleltetése munka miatt',
    ],

    footer: {
      disclaimer:
        'Az AI asszisztens megbízható és ellenőrzött tudásforrásokon alapuló válaszokat nyújt, beleértve iszlám hivatkozásokat és oktatási anyagokat.',

      note: 'A válaszok tájékoztató jellegűek, és nem helyettesítik a tudósok tanácsát.',
    },
  },

  footer: {
    disclaimer:
      'Minden megjelenített tartalom eredeti, megbízható forrásokból származik. Visszajelzést és hibajelentést szívesen fogadunk.',

    tagline: 'Gondosan építve hiteles iszlám tartalom szolgálatára',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadísz',
      backButton: 'Vissza',
    },

    sections: {
      hadithText: 'Hadísz szöveg',
      arabicText: 'Arab szöveg',
      explanation: 'Magyarázat',
      authentication: 'Hitelesség',
      lessons: 'Tanulságok és előnyök',
    },
  },
  other: {
    part: 'Rész',
    translation: 'Fordítás',
    verse: 'Vers',
    chapter: 'Fejezet',
    page: 'Oldal',
    breakingNews: 'Friss hírek',
  },
  dailyRemined: {
    title: 'A Mai Nap Fénye',
    subtitle:
      'Állj meg egy pillanatra, és gondolkodj el egy versen és hadíszon, amelyet a napodra választottak.',
  },
  baseFooter: {
    contact: {
      title: 'Kapcsolat',
      name: 'Neved',
      email: 'Email címed',
      msg: 'Üzeneted',
      sendMsg: 'Üzenet küldése',
    },
    followUs: 'Kövess minket',
    QA: 'Gyors elérés',
    logoB:
      'Korán, Hadísz, imaidők, AI asszisztens és napi iszlám eszközök—all egy modern platformon.',
    whatsapp: 'Chat WhatsAppon',
    rsr: 'Minden jog fenntartva',
  },
  compareRelg: {
    note: `Ez az oldal a világ főbb vallásainak összehasonlító áttekintését mutatja be. Iszlám nézőpontból a Korán megerősíti, hogy a korábbi isteni kinyilatkoztatásokat a korábbi nemzetekhez küldték, ám az idők folyamán emberi változtatásokon (tahríf) mentek keresztül. A Korán kijelenti: „Bizony, Mi bocsátottuk le az Emlékeztetőt (a Koránt), és bizony, Mi vagyunk az Ő örzői” (15:9). Ez az oldal e különbségeket vizsgálja meg a történelmi és szöveges bizonyítékok fényében.`,
    mainTitle: 'Racionális utazás a vallások között',
    headerTitle: 'Az emberi létezést meghatározó kérdések',
    story: `
Képzelje el, hogy hirtelen kinyitja a szemét, és egy fényűző vonaton találja magát, amely hatalmas sebességgel robog át egy végtelen éjszakán. Körülötted minden elképzelhető kényelem: pazar ételek elegáns asztalokon, ragyogó képernyők filmekkel, és selyem párnák a puha üléseken.

Az ön mellett ülő utasokhoz fordul, és aggódva kérdezi:
"Hol vagyunk? Ki tett minket erre a vonatra? És hová tartunk?"

De az igazi meglepetést a reakcióik okozzák.

Az egyikük hidegen válaszol:
"Mit számít? Kóstold meg ezt az ételt, elképesztő."

Egy másik gúnyosan megjegyzi:
"Miért töröd magad ilyen kérdéseken? Csak dőlj hátra és élvezd a filmet."

Mindenki ön körül elmerül az utazás örömeiben és figyelemelterelőiben, mégis mély borzongás járja át, mert biztosan tudja, hogy ez a vonat egy végső célállomás felé tart, egy olyan állomásra, ahol végül minden utasnak le kell szállnia.

És abban a pillanatban felmerül az igazi kérdés:

Elvész az utazás luxusában és szórakozásában, vagy továbbra is keresi a válaszokat a három legmélyebb kérdésre:

Ki a Teremtő?
Miért vagyunk itt?
És mi vár ránk a végén?

Ez a vonat a Föld bolygó, az utazás pedig az ön élete.

És mivel az emberek nem rendelkeznek ezekkel a válaszokkal maguktól, a vallások "használati útmutatókként" jelentek meg, amelyek mindegyike azt állítja, hogy magától a vonat tervezőjétől származik.

Tehát tegyük ezeket az útmutatókat a nyugodt és racionális vizsgálat mérlegére.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Ki a Teremtő?',

        intro: `
Filozófiai és logikai szempontból a világegyetem "Első Okának" – a Teremtőnek – teljesen transzcendensnek kell lennie, az anyagon, az időn és a téren túl. Ha a Teremtő éhségnek, fáradtságnak, fizikai korlátoknak vagy térbeli kötöttségnek lenne alávetve, akkor logikailag egy ilyen lény megszűnne abszolút Teremtő lenni, és ehelyett egy teremtett és függő entitássá válna. Egy függő lény végül nem szolgálhat a teljes létezés szükségszerű forrásaként.
  `,

        religions: {
          eastern: {
            title: 'Keleti vallások',
            examples: ['Hinduizmus', 'Buddhizmus'],

            answerNature: `
Legkorábbi formájában, a théravádában a buddhizmus általában nem-teisztikus; nem a teremtő isten létezésére összpontosít, hanem úgy tekinti, hogy a létezés örök természeti folyamatokból, ok-okozati összefüggésekből és kölcsönösen összefüggő törvényekből fakad.

A hinduizmus ezzel szemben gyakran egy "Brahman" nevű alapvető metafizikai valóságról beszél. A gyakorlati imádatban azonban ez a legfőbb valóság számtalan megnyilvánuláson és istenségen keresztül fejeződik ki, beleértve az emberi és állati megjelenésű formákat, mint például Visnu, Siva és Káli.
      `,

            objectiveCritique: `
Filozófiai szempontból a buddhizmus kihívással néz szembe, hogy megmagyarázza, hogyan jöhetett létre egy magasan szervezett univerzum, amelyet következetes törvények és fizikai pontosság irányít, egy eredeti intelligens ok nélkül.

Azokban a hindu hagyományokban, amelyek elfogadják az isteni megtestesülést és a fizikai ábrázolásokat, az isteni korlátokkal, konfliktussal, éhséggel, halállal és anyagi formával társul. Egy istenség, amely fizikailag ábrázolható, megtestesülhet, vagy amely természeti folyamatoknak van alávetve, racionális perspektívából nézve inkább a teremtés részeként, semmint azt teljesen meghaladó lényként tűnik fel.
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
A judaizmus megerősíti a hitet egy olyan Teremtőben, aki a bálványok és a fizikai ábrázolás felett áll. Isten (YHWH) az ég és a föld Teremtőjeként értelmezhető, és lényegileg különbözik a teremtéstől.
      `,

            objectiveCritique: `
Az itt felvetett filozófiai aggály nem elsősorban magára a transzcendenciára vonatkozik, hanem az isteni egyetemesség észlelt korlátaira a héber Biblia egyes szakaszaiban. Bizonyos szövegek az Istent egy olyan szövetségi viszonyban ábrázolják, amely erősen Izrael Gyermekeire összpontosít, oly módon, amit a kritikusok etnikailag kirekesztőnek értelmeznek.

Ezenkívül egyes szakaszok nagyon emberi nyelvezetet használnak Isten leírására, mint például az emberiség megteremtése miatti "megbánás" (Mózes 1. könyve 6:6) vagy a teremtés utáni hetedik napi "megnyugvás" (Mózes 2. könyve 31:17). A kritikusok azzal érvelnek, hogy az ilyen leírások kérdéseket vetnek fel azzal kapcsolatban, hogy ezeket a tulajdonságokat szó szerint vagy metaforikusan kell-e érteni.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kereszténység',

            answerNature: `
A kereszténység a Szentháromság tana – Atya, Fiú és Szentlélek – révén tanítja az egy Istenbe vetett hitet. A megtestesülés (inkarnáció) tana szerint a Szentháromság második személye – a Fiú – Jézus Krisztus személyében lépett be az emberi történelembe, akit keresztre feszítettek, és aki meghalt az emberiség üdvösségéért.
      `,

            objectiveCritique: `
Filozófiailag a kritikusok azzal érvelnek, hogy a megtestesülés tana feszültséget teremt az isteni és az emberi tulajdonságok között. Hagyományosan Istent örökkévalóként, határtalanként és a halálon túl állóként írják le, míg az emberek végesek, sebezhetőek és halandók.

A kihívás akkor jelentkezik, amikor a teljes istenség és a teljes emberség egyetlen személyben egyesül. A kritikusok azt kérdezik, hogyan tapasztalhatja meg egy örök és önellátó lény egyszerre az éhséget, az alvást, a szenvedést és a halált. A problémát gyakran inkább a transzcendencia és a megtestesülés közötti feszültségként fogalmazzák meg, semmint egyszerű teológiai misztériumként.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Iszlám',

            answerNature: `
Az iszlám olyan Isten-fogalmat mutat be, amely szigorúan transzcendens és oszthatatlan. A Korán az Al-Ikhlas szúrában foglalja össze ezt a fogalmat:

"Mondd: Ő Allah, az Egyetlen. Allah, az Örök Menedék. Nem nemzett és nem született, és nincs senki, aki egyenlő lenne Vele." (Korán 112:1–4)

A Teremtő az iszlámban teljesen túl van az anyagi formán, és különbözik a teremtéstől:

"Nincs semmi hasonló Hozzá." (Korán 42:11)

Istent nem korlátozza az idő, a tér vagy a fizikai korlátok. A Korán kijelenti:

"Nem fogja el Őt sem szunyókálás, sem alvás." (Korán 2:255)

Az iszlám teológiában Istent önmagától létezőnek, örökkévalónak, függetlennek és a teremtéstől teljesen különbözőnek értelmezik.
      `,

            objectiveCritique: `
Iszlám filozófiai szempontból ez a megértés az abszolút transzcendencia megőrzésére törekszik az antropomorfizmus és a megtestesülés elkerülésével. A koncepció célja, hogy a Teremtőt egy független és szükségszerű Első Ok fogalmával hozza összhangba, amely nincs alávetve a teremtett létezés korlátainak.
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

        title: 'Mi az élet módja és célja?',

        intro: `
Ha létezik egy bölcs Teremtő, akkor irracionális lenne feltételezni, hogy az emberiség útmutatás nélkül maradt, amely megmagyarázná a létezés célját, az erkölcsi felelősséget és azokat az elveket, amelyek szerint élni kell. Ahogyan egy összetett rendszerhez útmutatások kellenek a tervezőjétől, a vallások azt állítják, hogy keretet biztosítanak az emberiségnek ahhoz, hogy megértsék, miért vagyunk itt, és hogyan kell élnünk.
  `,

        religions: {
          eastern: {
            title: 'Keleti vallások',

            examples: ['Hinduizmus', 'Buddhizmus'],

            answerNature: `
A keleti hagyományok, mint a buddhizmus és a hinduizmus, általában filozófiai tanításokra, meditációs gyakorlatokra és spirituális tanítók és bölcsek által kidolgozott elmélkedésekre támaszkodnak.

A buddhizmusban a végső cél a szenvedéstől való megszabadulás és az újraszületés körforgásából való menekülés a Nirvána elérésével, amely a transzcendencia és a belső felszabadulás állapota.

Sok hindu hagyományban a cél a spirituális felszabadulás (Moksa), amelyet odaadással, tudással, meditációval vagy fegyelmezett cselekvéssel érnek el.
      `,

            objectiveCritique: `
A kritikusok azzal érvelnek, hogy ezek a rendszerek elsősorban filozófiaiak és tapasztalatiak, nem pedig egy transzcendens Teremtőtől származó, ellenőrizhető kinyilatkoztatáson alapulnak.

Néhányan azzal is érvelnek, hogy a világi élettől való elszakadásra, a szerzetességre és a lemondásra helyezett erős hangsúly ütközhet az emberi természet azon aspektusaival, amelyek elősegítik a társadalmi fejlődést, a tudományos haladást, a családi életet és a civilizációk építését.
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
A judaizmusban az életmód a Mózesnek kinyilatkoztatott és a héber Bibliában (Tanakh) megőrzött szövetségi törvényben gyökerezik. A vallási keret az isteni parancsolatok betartására és Isten és Izrael Gyermekei közötti szövetségi kapcsolat fenntartására összpontosít.
      `,

            objectiveCritique: `
A kritikusok azzal érvelnek, hogy a judaizmus történelmileg elsősorban egy adott néphez kötődő szövetségre összpontosító hagyományként fejlődött, nem pedig egyetemes missziós vallásként, amely az egész emberiségnek szól.

A szövegkritika szempontjából egyes tudósok – köztük Richard Elliott Friedman és mások – azzal érvelnek, hogy a Tóra évszázadokon keresztül átesett összeállítási és szerkesztési folyamatokon, különösen a babilóniai fogság környékén és azt követően. Ez arra késztetett néhány kritikust, hogy megkérdőjelezzék, tekinthető-e a szöveg tökéletesen megőrzöttnek és eredeti formájában közvetlenül átadott kinyilatkoztatásnak.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kereszténység',

            answerNature: `
A kereszténység azt tanítja, hogy az emberiség központi problémája a bűn és az Istentől való elszakadás, és az üdvösség Jézus Krisztus áldozati halálába és feltámadásába vetett hit révén érhető el. Az élet célja tehát az Istennel való megbékélés és a spirituális átalakulás révén érthető meg.
      `,

            objectiveCritique: `
Történelmileg a tudósok megjegyzik, hogy az evangéliumok eredeti kéziratai nem maradtak fenn azon az arámi nyelven, amelyet Jézus beszélt. A fennmaradt legrégebbi szövegek görög kéziratok, amelyeket Jézus élete után évtizedekkel írtak. Szövegkritikusok, mint Bart Ehrman, dokumentálták számtalan kéziratváltozat létezését az Újszövetség legkorábbi másolatai között.

A kritikusok azzal is érvelnek, hogy a kereszténység történelmileg nagyobb hangsúlyt fektetett a spirituális és személyes üdvösségre, mint egy átfogó jogi vagy politikai keret kidolgozására, amely szabályozza a gazdaságot, a büntetőjogot vagy az államigazgatást. Egyes történészek szerint ez hozzájárult a vallás és az állami tekintély végső szétválásához sok nyugati társadalomban.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Iszlám',

            answerNature: `
Az iszlám az emberi cél olyan átfogó megértését mutatja be, amely integrálja a spirituális odaadást és a világi felelősséget.

A Korán kijelenti:

"Nem teremtettem a dzsinneket és az embereket, csak azért, hogy imádjanak." (Korán 51:56)

Az iszlám gondolkodásban az imádat nem korlátozódik rituálékra, hanem magában foglalja az igaz cselekvést, az igazságosságot, az etikus viselkedést, a tudás keresését és a társadalomhoz való pozitív hozzájárulást.

Az iszlám tanítások arra törekszenek, hogy egyensúlyba hozzák a spirituális növekedést a családi életben, a gazdaságban, a kormányzásban, a jótékonyságban és a társadalmi felelősségvállalásban való gyakorlati részvétellel.
      `,

            objectiveCritique: `
Iszlám szempontból a Korán egyedülállóan megőrzött kinyilatkoztatást képvisel. A muszlimok azzal érvelnek, hogy a szövege változatlan maradt, és az iszlám első generációitól kezdve folyamatosan adták át írott kéziratokban és szóbeli memorizálás útján is.

Gyakran idézett példák közé tartoznak az olyan ősi kéziratok, mint a birminghami Korán-kézirat, és a szóbeli memorizálás széles körben elterjedt hagyománya, amelyet világszerte muszlimok milliói őriznek.

Az iszlám törvényt (Saría) szintén átfogó etikai és jogi keretként mutatják be, amely olyan területekre vonatkozik, mint a pénzügy, a jótékonyság, a családjog, a büntetőjog és a kormányzás. A támogatók azzal érvelnek, hogy ez az iszlámot egy teljes erkölcsi és civilizációs rendszer jellemzőivel ruházza fel, nem pedig csak egy tisztán spirituális hagyományéval.
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

        title: 'Mi történik a Végső Állomás után?',

        subtitle: 'Sors, igazságosság és a túlvilág',

        intro: `
A halál utáni legfelsőbb igazságszolgáltatás létezése nélkül az élet mélyen önkényesnek és erkölcsileg megoldatlannak tűnhet. A zsarnokok elszámoltathatóság nélkül halhatnak meg, míg az áldozatok igazságszolgáltatás nélkül hagyhatják el a világot. Ez felveti az emberiség egyik legősibb filozófiai kérdését: a halál a vége, vagy van-e végső ítélet a földi életen túl?
  `,

        religions: {
          eastern: {
            title: 'Keleti vallások',

            examples: ['Hinduizmus', 'Buddhizmus'],

            answerNature: `
Sok keleti hagyomány elfogadja a reinkarnáció fogalmát, ahol a lélek vagy a tudatfolyam az újraszületés ismétlődő ciklusain megy keresztül. Az egyén jövőbeli állapotát a karma határozza meg: a múltbeli cselekedetek erkölcsi következményeit.
      `,

            objectiveCritique: `
A kritikusok azzal érvelnek, hogy a reinkarnáció filozófiai kérdéseket vet fel az igazságossággal és a felelősséggel kapcsolatban. Ha valaki egy új életben szenvedi el a következményeit olyan tetteknek, amelyeket egy előző létezésben követett el, és amelyekre nem tud tudatosan emlékezni, akkor a büntetés oktatási és erkölcsi célja nehezen érthető.

Ebből a perspektívából a tudatos emlék nélküli felelősség elszakadhat a jelentős erkölcsi felelősségtől.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materializmus és ateizmus',

            answerNature: `
A materialista és ateista világnézetek általában a halált a tudatos létezés végének tekintik. Az embereket olyan biológiai szervezetként értelmezik, amelynek tudata a fizikai halál után teljesen megszűnik.
      `,

            objectiveCritique: `
A kritikusok azzal érvelnek, hogy a szigorú materializmus nehezen tud objektív alapot biztosítani az erkölcsnek, az igazságosságnak és az alapvető értelemnek. Ha az elnyomó és az áldozat is végül elszámoltathatóság nélkül eltűnik a semmibe, akkor az olyan fogalmak, mint az áldozat, az erkölcsi kötelesség és az igazságosság végső soron szubjektívnek vagy társadalmi konstrukciónak tűnhetnek, nem pedig egyetemesen kötelező érvényűnek.

A szekuláris etika támogatói azonban azzal érvelnek, hogy az erkölcs a túlvilágban való hit nélkül is megszülethet az értelem, az empátia és a társadalmi felelősség révén.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kereszténység',

            answerNature: `
A kereszténység azt tanítja, hogy az üdvösség és az örök élet Jézus Krisztusba vetett hit és az emberiség bűneiért való áldozati engesztelés elfogadása révén érhető el. A mennyország és az örök üdvösség tehát szorosan összefügg a Krisztusba vetett hittel és az isteni kegyelemmel.
      `,

            objectiveCritique: `
A kritikusok azt kérdezik, hogyan viszonyul az elsősorban a hiten alapuló üdvösség az egyetemes igazságosság elveihez. Filozófiailag egyesek azzal érvelnek, hogy ez a keret azt sugallhatja, hogy egy erkölcsileg igaz ember, aki őszintén küzd bizonyos teológiai dogmák elfogadásával, az üdvösségtől megtagadhatják, míg egy másik személy, aki súlyos bűnöket követett el, de a halála előtt elfogadta a hitet, mégis elnyerheti az örök jutalmat.

A keresztény teológusok gyakran azt válaszolják, hogy az üdvösség őszinte hitet és valódi megtérést is magában foglal, nem csupán verbális hitet.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Iszlám',

            answerNature: `
Az iszlám a túlvilágot a teljes erkölcsi felelősség és az isteni igazságszolgáltatás rendszereként mutatja be.

A Korán kijelenti:

"Egyetlen bűnös sem hordozza más bűnét." (Korán 6:164)

Az üdvösség az iszlámban következetesen kapcsolódik a hithez és az igaz cselekvéshez egyaránt:

"Akik hisznek és jó cselekedeteket visznek véghez..." (a Koránban végig ismétlődik, beleértve a 2:25-öt is)

Az iszlám azt tanítja, hogy a földi élet egy átmeneti próbatétel, nem pedig a jutalom vagy a büntetés végső helye:

"Aki megteremtette a halált és az életet, hogy próbára tegyen titeket, ki közületek a legjobb cselekedetű." (Korán 67:2)
      `,

            objectiveCritique: `
Az iszlám teológiában az Ítélet Napja az igazságszolgáltatás legfelsőbb bíróságát képviseli, ahol minden cselekedetért, legyen az bármilyen kicsi is, elszámolnak.

A Korán kijelenti:

"Aki megtesz egy porszemnyi jót, az meg fogja látni azt. És aki megtesz egy porszemnyi rosszat, az meg fogja látni azt." (Korán 99:7–8)

Ez a keret arra törekszik, hogy megőrizze az egyéni felelősséget és az abszolút igazságosságot, miközben erkölcsi bizonyosságot kínál arról, hogy az elnyomás vagy a jóság egyetlen cselekedete sem tűnik el végül következmények nélkül.
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
      navbar: 'Vallások összehasonlítása',
      hero: {
        subtitle:
          'Egy nyugodt, de mélyen filozófiai utazás, amely feltárja az emberiség legnagyobb kérdéseit: a Teremtő, a létezés célja, az erkölcs és mi vár ránk a halál után.',

        subtitleHighlight:
          'a Teremtő, a létezés célja, az erkölcs és mi vár ránk a halál után.',

        scrollIndicator: 'Görgessen le az utazás megkezdéséhez',
      },

      storySection: {
        badge: 'A vonat analógiája',

        titleLine1: 'Mielőtt kérdéseket tenne fel',
        titleLine2: 'A vallásokról...',

        intro:
          'Minden ember végül eljut a csend egy olyan pillanatához, amikor az elterelő tényezők elhalványulnak – és a legmélyebb kérdések végül a felszínre kerülnek.',

        ending: 'Ez a vonat a Föld bolygó,',
        ending2: 'az utazás pedig az ön élete.',
      },

      coreQuestions: {
        sectionLabel: 'Főszakasz',
        title: 'Alapvető kérdések',

        answerNatureTitle: 'A válasz természete',

        philosophicalDiscussionTitle: 'Filozófiai vita',

        referencesTitle: 'Hivatkozások',
      },

      futureResearch: {
        sectionLabel: 'Jövőbeli kutatás',

        title: 'Egyéb kérdések',

        loaderBadge: 'További kérdések érkeznek',

        headingLine1: 'Az utazás',
        headingLine2: 'folytatódik...',

        description:
          'További filozófiai és teológiai kutatások jelenleg folyamatban vannak, és ugyanazzal a strukturált összehasonlító megközelítéssel készülnek.',

        topics: [
          'Erkölcs',
          'Tudomány',
          'Csodák',
          'Tudat',
          'Szabad akarat',
          'Szenvedés',
          'Történelmi megőrzés',
          'Próféciák',
          'Emberi természet',
          'Értelem',
          'Civilizációk',
          'Etika',
        ],

        footer: 'Új szakaszok hamarosan hozzáadásra kerülnek',
      },

      imageAlt: {
        hero: 'Vallások összehasonlítása',
      },
    },
  },
};
