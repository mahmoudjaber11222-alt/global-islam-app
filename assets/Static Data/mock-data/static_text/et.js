export default {
  splash: {
    version: 'versioon',
    practice: 'harjutus',
    share: 'jaga',
    logo: 'globaalne islam',
  },
  homeApp: {
    north: 'põhi',
    east: 'ida',
    west: 'lääs',
    south: 'lõuna',
    active: 'qibla aktiivne',
    disabled: 'Ava Qibla kompass',
    welcome: 'Tere tulemast tagasi',
    greet: 'Assalamu Alaikum',
    hour: 'tund',
    minute: 'minut',
    second: 'sekund',
    toLeft: 'sinu vasakul',
    toRight: 'sinu paremal',
    fromNorth: 'põhjast',
  },
  quranApp: {
    medinan: 'Mediina',
    meccan: 'Meka',
    arabicName: 'nimi araabia keeles',
    englishName: 'nimi inglise keeles',
    details: 'Vali aja, et vaadata selle tõlget ja tafsiri (selgitust)',
    selectRes: 'Vali allikas',
    retry: 'proovi uuesti',
    loadErr1: 'Selgituse laadimine ebaõnnestus. Palun proovi uuesti.',
    loadErr2: 'Hankimine ebaõnnestus',
    author: 'autor',
    explain: 'Selgitus',
  },
  qiblaApp: {
    compass: 'Qibla kompass',
    accuracy: 'täpsus',
    offline: 'GPS offline',
    tracking: 'GPS jälgimine',
    aligned: 'Sa vaatad Qibla suunas. Hoia stabiilselt täpse palvesuuna jaoks.',
    notAligned:
      'Hoia seade tasaselt ja pöörake, kuni nool näitab Qibla suunas.',
    heading: 'Seadme suund',
    turn: 'pööra',
    alignedQibla: 'Joondatud Qibla-ga',
  },
  aiApp: {
    answer: 'vastus',
  },
  prayerApp: {
    locationRequired: 'Täpsete palveaegade jaoks on vajalikud asukohateenused.',
    schedule: 'Palvegraafik',
    refresh: 'värskenda',
    sunrise: 'Päikesetõus',
    upcoming: 'Järgmine palve',
  },
  settingsApp: {
    reciterTitle: 'Adhaani ettekandja',
    reciterSub: 'Vali oma eelistatud hääl',
    notSelected: 'valimata',
    preview: 'eelvaade',
    cancel: 'tühista',
    muezzin: 'Muezzin',
    preNot: 'Teavitus enne adhaani',
    preNotDet: 'Teavita 15 minutit enne palveaega',
    theme: 'Tume režiim',
    dark: 'Praegu tume teema',
    light: 'Praegu hele teema',
    about: 'Teave',
    selectReciter: 'Vali ettekandja',
  },
  athan: {
    mainTitle: 'ADHAAN · PALVEKUTSE',
    stop: 'Peata adhaan',
    error: 'Adhaani heli laadimine ebaõnnestus',
    prayerTime: 'Palveaeg',
    play: 'mängi',
    pause: 'paus',
    dismiss: 'sulge',
  },
  athkarApp: {
    completed: 'Lõpetatud',
    remaining: 'jäänud',
    reset: 'lähtesta',
    athkar: 'Adhkaar',
    mention: 'dhikr',
    descM: 'Alusta päeva õnnistustega',
    descE: 'Lõpeta päev kaitse all',
    remmember: 'Igapäevane meenutus',
    cat: 'palvete kategooriad',
    category: 'Kategooria',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Otsi hadithi...',
      button: 'Otsi',
      books: {
        label: 'Raamat',
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
      title: 'Praegust keelt veel ei toetata',
      msg: 'Seda keelt ei toetata hetkel hadithide andmestikus.',
      description:
        'Inglise keel valiti automaatselt varukeelena, et saaksite jätkata hadithide otsimist ja sirvimist. Võite proovida ka Täpsemat režiimi laiemaks mitmekeelseks otsinguks ja paremate tulemuste saamiseks.',
    },

    initialPlaceholder:
      'Otsi hadithi, et näha detaile nagu hinnang, edastajad ja viited',

    loading: {
      label: 'Hadithide laadimine...',
    },

    hadithCard: {
      showMore: 'Näita rohkem',
      showLess: 'Näita vähem',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Viited',
        referenceLabel: 'Viide',
        inBookReference: 'Viide raamatus',
        arabicReference: 'Araabia viide',
      },
    },

    emptyState: 'Hadithe ei leitud',

    pagination: {
      prev: 'Eelmine',
      next: 'Järgmine',
    },
  },

  switch: {
    title: {
      advanced: 'Täpsem režiim',
      normal: 'Tavaline režiim',
    },

    description: {
      advanced: 'Semantiline otsing sügavama mõistmisega',
      normal: 'Kiire filtripõhine otsing',
    },
  },

  navbar: {
    routes: {
      home: 'Avaleht',
      prayers: 'Palved',
      quran: 'Koraan',
      athkar: 'Dhikr',
      articles: 'Artiklid',

      articlesNested: {
        islamicHistory: 'Islami ajalugu',
        prayerInIslam: 'Palve islamis',
        womenInIslam: 'Naised islamis',
        purification: 'Puhastumine ja ablutsioon',
      },

      learn: 'Õpi',
      learnNested: {
        quranTajweed: 'Õpi Koraani ja tajviidi',
        arabic: 'Õpi araabia keelt',
      },

      dashboard: 'Töölaud',
      aiAssistant: 'AI assistent',
    },
  },
  hero: {
    title: {
      explore: 'Avasta islamit koos',
      clarity: 'Selgusega',
      peace: '& rahu',
    },

    description:
      'Õpi, esita küsimusi ja avasta autentne arusaam tehisintellekti ja juhendatud teadmiste kaudu, mis on loodud selguse ja mõtiskluse jaoks.',

    actions: {
      introductionToIslam: 'Õpi islami kohta',
      islamQA: 'Islam Q&A (tehisintellekti assistent)',
      continueWebsite: 'Jätka veebilehele',
    },
  },
  learning: {
    quran: {
      title: 'Õpi Koraani ja Tadžwiidi',
      subtitle:
        'Paranda oma Koraani retsiteerimist ja mõista Tadžwiidi reegleid samm-sammult.',
    },
    arabic: {
      title: 'Õpi araabia keelt',
      subtitle:
        'Arenda oma araabia keele oskusi selgete ja struktureeritud õppetundide kaudu.',
    },
    default: {
      title: 'Õppimise jaotis',
      subtitle:
        'Avasta hariduslikku sisu, mis on loodud sinu teadmiste ja arusaamise tugevdamiseks.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadithi kogude otsing',

      subtitle: 'Otsi loomulikult teemade, tähenduste või terviklausete abil.',

      placeholder: 'Näide: hadith vanemate vastu lahkuse kohta',

      button: 'Otsi',
    },

    header: {
      title: 'Hadithi otsingu raamatukogu',
      subtitle: 'Uuri autentseid hadithe koheselt kaasaegse lugemiskogemusega.',
    },

    content: {
      heroTitle: 'Avasta autentseid hadithi kogusid võimsa otsinguga',

      loading: {
        label: 'Hadithi kogude otsimine...',
      },

      error: {
        title: 'Hadithe ei õnnestunud laadida',
        message:
          'Me ei suutnud narratiive praegu laadida. Kontrolli ühendust ja proovi uuesti.',
      },

      empty: {
        title: 'Vastavaid hadithe ei leitud',
      },

      card: {
        reference: 'Hadithi viide',
        readMore: 'Loe täielikku hadithit',
      },
    },
  },

  home: {
    news: {
      title: 'Moslemi kogukonna uuendused',
      subtitle: 'Ole kursis oluliste uuendustega moslemimaailmast',
    },

    prayer: {
      title: 'Palve loendus',
      subtitle: 'Valmistu järgmiseks palveks',
      button: 'Vaata palveaegu',
      nextPrayerLabel: 'Järgmine palve kell:',
    },

    athkar: {
      title: 'Hommiku- ja õhtused athkar',
      subtitle: 'Igapäevane meenutamine südame ühendamiseks',
      button: 'Vaata rohkem athkari',
    },

    qibla: {
      title: 'Kibla suund',
      subtitle: 'Leia Kaaba suund ükskõik kus sa oled',
      locationLoading: 'Asukoha hankimine...',
      enableLocation: 'Luba asukoht',
      refreshLocation: 'Värskenda kibla suunda',

      warning:
        'Kui sinu seade ei toeta orientatsiooniandureid, võib kompassi täpsus olla mõjutatud.',

      errorTitle: 'Luba keelatud',
    },
  },

  prayers: {
    nextLabel: 'Järgmine palve kell',
    header: {
      title: 'Palveajad',
      subtitle: 'Igapäevane hetk ühenduseks oma Loojaga',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Asukoha hankimine...',
      warning:
        'Kui operatsioonisüsteem ei toeta orientatsiooni, mõjutab see kompassi suuna arvutusi.',
      errorTitle: 'Luba keelatud',
      enableLocation: 'Luba asukoht',
      refreshLocation: 'Värskenda kibla suunda',
    },

    list: {
      warning: 'Ajad võivad veidi erineda sõltuvalt arvutusmeetodist.',
    },
  },

  quran: {
    header: {
      title: 'Koraan',
      subtitle: 'Sinu igapäevane kaaslane lugemiseks ja mõtiskluseks',
    },

    search: {
      noResultTitle: 'Andmed puuduvad',
      noResultMessage: 'Kuvatavaid andmeid pole',
    },
  },

  athkar: {
    title: 'Igapäevased mälestused',
    subtitle: 'Ole järjepidev oma igapäevase meenutamise ja mõtisklusega',
  },

  ai: {
    header: {
      title: 'Globaalne islami AI-assistent',
      subtitle:
        'Saa selgeid islami vastuseid Koraani, Sunnat ja usaldusväärset õpetust kasutades',
    },

    loading: {
      label: 'Laadimine...',
    },

    error: {
      title: 'Päringulimiit täis',
      message: 'Teenusele ei pääse praegu ligi. Palun proovi varsti uuesti.',
    },

    input: {
      placeholder: 'Küsi küsimus islami kohta...',
    },

    suggestions: [
      'Kas ma võin palvetada kui mul puudub wudu?',
      'Kas intress (riba) on täielikult keelatud?',
      'Töötamine mitte-halal keskkonnas',
      'Kas ma võin palvetada reisides?',
      'Kas palve ajal võib kasutada parfüümi?',
      'Mis muudab palve kehtetuks?',
      'Palvete edasilükkamine töö tõttu',
    ],

    footer: {
      disclaimer:
        'See AI-assistent on loodud vastuste andmiseks, mis põhinevad kureeritud ja usaldusväärsetel teadmisteallikatel, sealhulgas islami viidetel ja kontrollitud hariduslikul materjalil.',

      note: 'Vastused on informatiivsed ega asenda vajadusel teadlaste nõuandeid.',
    },
  },

  footer: {
    disclaimer:
      'Kogu kuvatav sisu pärineb algsetest usaldusväärsetest allikatest. Ootame tagasisidet või vigadest teatamist, et neid saaks üle vaadata ja parandada.',

    tagline: 'Loodud hoolikalt autentse islami sisu teenimiseks',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Mine tagasi',
    },

    sections: {
      hadithText: 'Hadithi tekst',
      arabicText: 'Araabia tekst',
      explanation: 'Selgitus',
      authentication: 'Autentsus',
      lessons: 'Õppetunnid ja kasud',
    },
  },
  other: {
    note: 'Märkus',
    theLanguage: 'keel',
    part: 'Osa',
    translation: 'Tõlge',
    verse: 'Salm',
    chapter: 'Peatükk',
    page: 'Leht',
    breakingNews: 'Värsked uudised',
  },
  dailyRemined: {
    title: 'Tänase Päeva Valgus',
    subtitle:
      'Peatu hetkeks ja mõtiskle salmi ja hadiithi üle, mis on valitud sinu päevaks.',
  },
  baseFooter: {
    contact: {
      title: 'Võta meiega ühendust',
      name: 'Sinu nimi',
      email: 'Sinu e-post',
      msg: 'Sinu sõnum',
      sendMsg: 'Saada sõnum',
    },
    followUs: 'Jälgi meid',
    QA: 'Kiire juurdepääs',
    logoB:
      'Koraan, Hadith, palveajad, AI assistent ja igapäevased islami tööriistad—all ühel kaasaegsel platvormil.',
    whatsapp: 'Vestle WhatsAppis',
    rsr: 'Kõik õigused kaitstud',
  },
  compareRelg: {
    note: `See lehekülg esitab võrdleva ülevaate maailma peamistest usunditest. Islami vaatepunktist kinnitab Koraan, et varasemad jumalikud ilmutused saadeti varasematele rahvastele, kuid aja jooksul tegid inimesed neis muudatusi (tahrif). Koraanis on öeldud: "Tõesti, Meie saatsime alla Meeldetuletuse ja tõesti, Meie oleme selle kaitsjad" (15:9). See lehekülg uurib neid erinevusi ajalooliste ja tekstiliste tõendite valguses.`,
    mainTitle: 'Ratsionaalne rännak läbi religioonide',
    headerTitle: 'Küsimused, mis määratlevad inimese eksistentsi',
    story: `
Kujuta ette, et avad ootamatult silmad, avastades end istumas luksuslikus rongis, mis kihutab tohutul kiirusel läbi lõputu öö. Sinu ümber on kõikvõimalikud mugavused: elegantselt kaetud laudadel on rikkalikud toidud, helendavatel ekraanidel jooksevad filmid ja pehmetel istmetel puhkavad siidipadjad.

Pöördud enda kõrval olevate reisijate poole ja küsid murelikult:
"Kus me oleme? Kes meid sellele rongile pani? Ja kuhu me suundume?"

Kuid tõeline šokk tuleb nende reaktsioonidest.

Üks neist vastab külmalt:
"Mis vahet seal on? Maitse seda toitu – see on uskumatu."

Teine ütleb pilkavalt:
"Miks sa vaevad end selliste küsimustega? Lihtsalt lõõgastu ja naudi filmi."

Kõik sinu ümber on haaratud reisi naudingutest ja meelelahutusest, ometi jookseb sinust läbi sügav külmavärin – sest sa tead kindlalt, et see rong suundub lõppsihtkohta, jaama, kus iga reisija lõpuks maha astub.

Ja sel hetkel kerkib esile tõeline küsimus:

Kas sa kaotad end reisi luksusesse ja meelelahutusse või jätkad vastuste otsimist kõigist kolmele kõige sügavamale küsimusele:

Kes on Looja?
Miks me siin oleme?
Ja mis meid lõpus ees ootab?

See rong on planeet Maa ja teekond on sinu elu.

Ja kuna inimestel pole neid vastuseid iseenesest, tekkisid religioonid kui "kasutusjuhendid", millest igaüks väidab end pärinevat rongi enda Disainerilt.

Nii et asetagem need juhendid rahuliku ja ratsionaalse uurimise läätse alla.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kes on Looja?',

        intro: `
Filosoofilisest ja loogilisest vaatenurgast peab universumi "Esimene Põhjus" – Looja – olema täielikult transtsendentne, väljaspool mateeriat, aega ja ruumi. Kui Looja alluks näljale, väsimusele, füüsilistele piirangutele või ruumilisele suletusele, lakkaks selline olend loogiliselt olemast absoluutne Looja ja muutuks selle asemel sõltuvaks loodud üksuseks. Sõltuv olend ei saa lõppkokkuvõttes olla kogu eksistentsi vajalikuks allikaks.
  `,

        religions: {
          eastern: {
            title: 'Idamaised religioonid',
            examples: ['Hinduism', 'Budism'],

            answerNature: `
Oma varaseimas Theravāda vormis on budism üldiselt mitteteistlik; see ei keskendu loojajumala eksistentsile, vaid näeb eksistentsi tekkivat läbi igaveste looduslike protsesside, põhjuslikkuse ja omavahel seotud seaduste.

Hinduism seevastu räägib sageli ülimast metafüüsilisest reaalsusest, mida nimetatakse "Brahmaniks". Kuid praktilises kummardamises väljendub see ülim reaalsus läbi lugematute ilmingute ja jumaluste, sealhulgas inim- ja loomataoliste vormide, nagu Višnu, Šiva ja Kali.
      `,

            objectiveCritique: `
Filosoofilisest vaatepunktist seisab budism silmitsi väljakutsega selgitada, kuidas kõrgelt organiseeritud universum, mida juhivad järjekindlad seadused ja füüsikaline täpsus, võis tekkida ilma algse intelligentse põhjuseta.

Hindu traditsioonides, mis hõlmavad jumalikku kehastumist ja füüsilisi esitusi, seostatakse jumalikku piirangute, konfliktide, nälja, surma ja materiaalse vormiga. Jumalus, mida saab füüsiliselt esindada, kehastada või mis allub looduslikele protsessidele, näib ratsionaalsest vaatenurgast osalevat loomises, selle asemel et seda täielikult ületada.
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
Judaism kinnitab usku ühte Loojasse, kes on üle ebajumalatest ja füüsilisest esindatusest. Jumalat (JHVH) mõistetakse taevaste ja maa Loojana ning põhimõtteliselt eraldiseisvana loomingust.
      `,

            objectiveCritique: `
Siin tõstatatud filosoofiline mure ei puuduta peamiselt transtsendentsi ennast, vaid jumaliku universaalsuse tajutavat piiratust mõnes Heebrea Piibli tekstilõigus. Teatud tekstid kujutavad Jumalat lepingulises suhtes, mis keskendub tugevalt Iisraeli lastele viisil, mida kriitikud tõlgendavad kui etniliselt eksklusiivset.

Lisaks kirjeldavad mõned lõigud Jumalat väga inimsarnases keeles, näiteks "kahetsedes" inimkonna loomist (1. Moosese 6:6) või "puhates" seitsmendal päeval pärast loomist (2. Moosese 31:17). Kriitikud väidavad, et sellised kirjeldused tekitavad küsimusi, kas neid omadusi tuleks mõista sõna-sõnalt või metafoorselt.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristlus',

            answerNature: `
Kristlus õpetab usku ühte Jumalasse läbi Kolmainsuse doktriini: Isa, Poeg ja Püha Vaim. Inkarnatsioonidoktriini kohaselt sisenes Kolmainsuse teine isik – Poeg – inimkonna ajalukku Jeesuse Kristuse isikus, kes löödi risti ja suri inimkonna päästmiseks.
      `,

            objectiveCritique: `
Filosoofiliselt väidavad kriitikud, et inkarnatsioonidoktriin tekitab pinge jumalike ja inimlike omaduste vahel. Jumalat kirjeldatakse traditsiooniliselt igavese, piiramatu ja surmast üle olevana, samas kui inimesed on piiratud, haavatavad ja surelikud.

Väljakutse tekib siis, kui nii täielik jumalikkus kui ka täielik inimlikkus on ühendatud ühes isikus. Kriitikud seavad kahtluse alla, kuidas igavene ja iseseisev olend saaks samaaegselt kogeda nälga, und, kannatusi ja surma. Seda probleemi raamistatakse sageli pigem pinge kujul transtsendentsi ja kehastumise vahel, mitte pelgalt teoloogilise müsteeriumina.
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
Islam esitab Jumala kontseptsiooni, mis on rangelt transtsendentne ja jagamatu. Koraan võtab selle kontseptsiooni kokku suuras Al-Ikhlas:

"Ütle: Tema on Allah, Üks. Allah, Igavene Varjupaik. Ta ei sigita ega ole sündinud ja ei ole kedagi Temaga võrreldavat." (Koraan 112:1–4)

Looja on islamis täielikult väljaspool materiaalset vormi ja erineb loomingust:

"Ei ole midagi Tema sarnast." (Koraan 42:11)

Jumalat ei piira aeg, ruum ega füüsilised piirangud. Koraan ütleb ka:

"Teda ei haara tukkumine ega uni." (Koraan 2:255)

Islami teoloogias mõistetakse Jumalat iseseisva, igavese, sõltumatu ja loomingust täiesti eraldiseisvana.
      `,

            objectiveCritique: `
Islami filosoofilisest vaatenurgast püüab see arusaam säilitada absoluutset transtsendentsi, vältides samas antropomorfismi ja kehastumist. Kontseptsiooni eesmärk on viia Looja vastavusse sõltumatu ja vajaliku Esimese Põhjuse ideega, mis ei allu loodud eksistentsi piirangutele.
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

        title: 'Mis on elu meetod ja eesmärk?',

        intro: `
Kui eksisteerib tark Looja, siis oleks ebamõistlik eeldada, et inimkond jäeti ilma juhendamiseta, mis selgitaks eksistentsi eesmärki, moraalset vastutust ja põhimõtteid, mille järgi elu tuleks elada. Nii nagu keerukas süsteem vajab oma disainerilt juhiseid, väidavad religioonid, et pakuvad inimkonnale raamistikku, et mõista, miks me siin oleme ja kuidas peaksime elama.
  `,

        religions: {
          eastern: {
            title: 'Idamaised religioonid',

            examples: ['Hinduism', 'Budism'],

            answerNature: `
Idamaised traditsioonid, nagu budism ja hinduism, toetuvad üldiselt filosoofilistele õpetustele, meditatsioonipraktikatele ja vaimsete õpetajate ning tarkade poolt välja töötatud mõtisklustele.

Budismis on ülim eesmärk vabanemine kannatustest ja pääsemine taassündide tsüklist, saavutades Nirvaana – transtsendentsuse ja sisemise vabanemise seisundi.

Paljudes hindu traditsioonides on eesmärgiks vaimne vabanemine (Mokša), mis saavutatakse pühendumise, teadmiste, meditatsiooni või distsiplineeritud tegutsemise kaudu.
      `,

            objectiveCritique: `
Kriitikud väidavad, et need süsteemid on eelkõige filosoofilised ja kogemuslikud, ega põhine kontrollitaval ilmutusel transtsendentselt Loojalt.

Mõned väidavad ka, et tugev rõhk maailmaelust irdumisel, munklusel ja lahtiütlemisel võib olla vastuolus inimloomuse aspektidega, mis soodustavad ühiskondlikku arengut, teaduse progressi, pereelu ja tsivilisatsioonide ülesehitamist.
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
Judaismis juurdub elu meetod lepingulises seaduses, mis ilmutati Moosesele ja mida on säilitatud Heebrea Piiblis (Tanahis). Religioosne raamistik keskendub kuulekusele jumalikele käskudele ning lepingulise suhte säilitamisele Jumala ja Iisraeli laste vahel.
      `,

            objectiveCritique: `
Kriitikud väidavad, et judaism arenes ajalooliselt peamiselt lepingukeskse traditsioonina, mis oli seotud konkreetse rahvaga, mitte kui universaalselt misjonärlik religioon, mis oleks suunatud kogu inimkonnale.

Tekstikriitika vaatenurgast väidavad mõned õpetlased – sealhulgas Richard Elliott Friedman ja teised –, et Toora läbis sajandite jooksul koostamis- ja toimetamisprotsesse, eriti Babüloonia eksiili paiku ja pärast seda. See on pannud mõningaid kriitikuid kahtlema, kas teksti saab pidada täiuslikult säilinud ja vahetult edastatud ilmutuseks selle algsel kujul.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristlus',

            answerNature: `
Kristlus õpetab, et inimkonna keskseks probleemiks on patt ja eraldatus Jumalast, ning et pääste tuleb usu kaudu Jeesuse Kristuse ohvrisurma ja ülestõusmisse. Elu eesmärki mõistetakse seetõttu läbi leppimise Jumalaga ja vaimse muutumise.
      `,

            objectiveCritique: `
Ajalooliselt märgivad õpetlased, et Jeesuse kõneldud aramea keeles ei ole säilinud ühtegi Evangeeliumide algupärast käsikirja. Varasemad säilinud tekstid on kreekakeelsed käsikirjad, mis on kirjutatud aastakümneid pärast Jeesuse eluiga. Tekstikriitikud, nagu Bart Ehrman, on dokumenteerinud arvukate käsikirjaliste variatsioonide olemasolu Uue Testamendi varaste koopiate vahel.

Kriitikud väidavad ka, et kristlus on ajalooliselt pööranud rohkem tähelepanu vaimsele ja isiklikule päästele kui majandust, kriminaalõigust või riigihaldust reguleeriva laiaulatusliku õigusliku või poliitilise raamistiku väljatöötamisele. Mõned ajaloolased oletavad, et see aitas kaasa religiooni ja riigivõimu lõplikule eraldumisele paljudes Lääne ühiskondades.
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
Islam esitab tervikliku arusaama inimlikust eesmärgist, mis ühendab endas nii vaimse pühendumise kui ka maise vastutuse.

Koraan ütleb:

"Ma ei loonud džinne ja inimesi muuks, kui vaid Mind kummardama." (Koraan 51:56)

Islami mõtteviisis ei piirdu kummardamine ainult rituaalidega, vaid hõlmab õiglast tegutsemist, õiglust, eetilist käitumist, teadmiste otsimist ja positiivset panustamist ühiskonda.

Islami õpetuste eesmärk on tasakaalustada vaimset kasvu praktilise osalemisega pereelus, majanduses, valitsemises, heategevuses ja sotsiaalses vastutuses.
      `,

            objectiveCritique: `
Islami vaatenurgast esindab Koraan ainulaadselt säilinud ilmutust. Moslemid kinnitavad, et selle tekst on püsinud muutumatuna ja seda on pidevalt edastatud nii kirjalikes käsikirjades kui ka suulise meeldejätmise teel alates islami esimestest põlvkondadest.

Sageli toodud näidete hulka kuuluvad varajased käsikirjad, nagu Birminghami Koraani käsikiri, ja laialt levinud suulise meeldejätmise traditsioon, mida hoiavad elus miljonid moslemid üle maailma.

Islami seadus (Šariaat) esitleb end samuti kui laiaulatuslikku eetilist ja õiguslikku raamistikku, mis käsitleb selliseid valdkondi nagu rahandus, heategevus, perekonnaõigus, kriminaalõigus ja valitsemine. Pooldajad väidavad, et see annab islamile pigem tervikliku moraalse ja tsivilisatsioonilise süsteemi omadused kui puhtalt vaimse traditsiooni.
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

        title: 'Mis juhtub pärast lõppjaama?',

        subtitle: 'Saatus, õiglus ja hauatagune elu',

        intro: `
Ilma ülima õigluse olemasoluta pärast surma võib elu tunduda sügavalt meelevaldne ja moraalselt lahendamata. Türannid võivad surra ilma vastutust kandmata, samas kui ohvrid võivad lahkuda maailmast ilma õiglust saamata. See tõstatab ühe inimkonna vanimatest filosoofilistest küsimustest: kas surm on lõpp või on olemas lõplik kohtumõistmine teispool maist elu?
  `,

        religions: {
          eastern: {
            title: 'Idamaised religioonid',

            examples: ['Hinduism', 'Budism'],

            answerNature: `
Paljud idamaised traditsioonid omaks võtavad reinkarnatsiooni kontseptsiooni, kus hing või teadvuse vool läbib korduvaid taassündide tsükleid. Inimese tulevase seisundi kujundab karma – varasemate tegude moraalsed tagajärjed.
      `,

            objectiveCritique: `
Kriitikud väidavad, et reinkarnatsioon tõstatab filosoofilisi küsimusi seoses õigluse ja vastutusega. Kui inimene kannatab uues elus tagajärgi tegude eest, mis on toime pandud eelmises eksistentsis ja mida ta ei suuda teadlikult mäletada, siis muutub karistuse haridusliku ja moraalse eesmärgi mõistmine keeruliseks.

Sellest vaatenurgast võib vastutus ilma teadliku mäluta tunduda lahtiühendatuna tähendusrikkast moraalsest vastutusest.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialism ja ateism',

            answerNature: `
Materialistlikud ja ateistlikud maailmavaated peavad surma üldiselt teadliku eksistentsi lõpuks. Inimesi mõistetakse bioloogiliste organismidena, kelle teadlikkus lakkab pärast füüsilist surma täielikult.
      `,

            objectiveCritique: `
Kriitikud väidavad, et range materialism on kimpus moraalile, õiglusele ja ülimale tähendusele objektiivse aluse pakkumisega. Kui nii rõhuja kui ka ohver kaovad lõpuks olematusse ilma vastutust kandmata, võivad sellised kontseptsioonid nagu ohverdus, moraalne kohustus ja õiglus tunduda lõppkokkuvõttes subjektiivsete või sotsiaalselt konstrueeritutena, mitte universaalselt siduvatena.

Ilmaliku eetika toetajad väidavad aga, et moraal võib siiski tekkida mõistuse, empaatia ja sotsiaalse vastutustunde kaudu ilma usuta hauatagusesse ellu.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristlus',

            answerNature: `
Kristlus õpetab, et pääste ja igavene elu saavutatakse usu kaudu Jeesusesse Kristusesse ning Tema lepitusohvri vastuvõtmise kaudu inimkonna pattude eest. Taevas ja igavene pääste on seetõttu tihedalt seotud usu ja jumaliku armuga.
      `,

            objectiveCritique: `
Kriitikud seavad kahtluse alla, kuidas peamiselt usul põhinev pääste suhestub universaalse õigluse põhimõtetega. Filosoofiliselt väidavad mõned, et see raamistik võib viidata sellele, et moraalselt õiglasele inimesele, kes heitleb siiralt teatud teoloogiliste doktriinide aktsepteerimisega, võidakse keelata pääste, samas kui teine isik, kes on toime pannud tõsiseid väärteo, kuid aktsepteerinud usku vahetult enne surma, võib siiski saavutada igavese tasu.

Kristlikud teoloogid vastavad sageli, et pääste eeldab nii siirast usku kui ka tõelist meeleparandust, mitte pelgalt sõnalist uskumust.
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
Islam esitleb hauatagust elu kui täieliku moraalse vastutuse ja jumaliku õigluse süsteemi.

Koraan ütleb:

"Ükski hing ei kanna teise koormat." (Koraan 6:164)

Pääste islamis on järjekindlalt seotud nii usu kui ka õiglaste tegudega:

"Need, kes usuvad ja teevad õiglasi tegusid..." (kordub kogu Koraanis, sealhulgas 2:25)

Islam õpetab, et maine elu on pigem ajutine proovilepanek kui lõplik tasu või karistuse paik:

"Tema, kes lõi surma ja elu, et teid proovile panna, kes teist on parim tegudes." (Koraan 67:2)
      `,

            objectiveCritique: `
Islami teoloogias esindab Viimsepäeva Kohus ülimat õigluskohtut, kus iga tegu, olgu see nii väike kui tahes, on täielikult arvesse võetud.

Koraan ütleb:

"Niisiis, kes iganes teeb aatomiraskuse jagu head, see näeb seda, ja kes iganes teeb aatomiraskuse jagu halba, see näeb seda." (Koraan 99:7–8)

Selle raamistiku eesmärk on säilitada nii individuaalne vastutus kui ka absoluutne õiglus, pakkudes samas moraalset kindlustunnet, et ükski rõhumis- või headustegu ei kao lõpuks ilma tagajärjeta.
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
      navbar: 'Religioonide võrdlus',
      hero: {
        subtitle:
          'Rahulik, kuid sügavalt filosoofiline rännak, mis uurib inimkonna suurimaid küsimusi – Loojat, eksistentsi eesmärki, moraali ja seda, mis ootab ees pärast surma.',

        subtitleHighlight:
          'Loojat, eksistentsi eesmärki, moraali ja seda, mis ootab ees pärast surma.',

        scrollIndicator: 'Rulli alla, et alustada teekonda',
      },

      storySection: {
        badge: 'Rongi analoogia',

        titleLine1: 'Enne kui küsite',
        titleLine2: 'religioonide kohta...',

        intro:
          'Iga inimene jõuab lõpuks vaikusehetkeni, kus segajad hääbuvad – ja kõige sügavamad küsimused kerkivad lõpuks esile.',

        ending: 'See rong on planeet Maa,',
        ending2: 'ja teekond on sinu elu.',
      },

      coreQuestions: {
        sectionLabel: 'Peamine sektsioon',
        title: 'Põhiküsimused',

        answerNatureTitle: 'Vastuse olemus',

        philosophicalDiscussionTitle: 'Filosoofiline arutelu',

        referencesTitle: 'Viited',
      },

      futureResearch: {
        sectionLabel: 'Tulevased uuringud',

        title: 'Muud küsimused',

        loaderBadge: 'Rohkem küsimusi on tulemas',

        headingLine1: 'Teekond',
        headingLine2: 'Jätkub...',

        description:
          'Täiendavaid filosoofilisi ja teoloogilisi uuringuid uuritakse ja valmistatakse praegu ette sama struktureeritud võrdleva lähenemisviisiga.',

        topics: [
          'Moraal',
          'Teadus',
          'Imed',
          'Teadvus',
          'Vaba tahe',
          'Kannatus',
          'Ajalooline säilimine',
          'Prohvetikuulutused',
          'Inimloomus',
          'Tähendus',
          'Tsivilisatsioonid',
          'Eetika',
        ],

        footer: 'Uued sektsioonid lisatakse peagi',
      },

      imageAlt: {
        hero: 'Religioonide võrdlus',
      },
    },
  },
};
