export default {
  splash: {
    version: 'version',
    practice: 'övning',
    share: 'dela',
    logo: 'global islam',
  },
  homeApp: {
    north: 'norr',
    east: 'öst',
    west: 'väst',
    south: 'söder',
    active: 'qibla aktiv',
    disabled: 'Öppna Qibla-kompass',
    welcome: 'Välkommen tillbaka',
    greet: 'Assalamu Alaikum',
    hour: 'timme',
    minute: 'minut',
    second: 'sekund',
    toLeft: 'till vänster om dig',
    toRight: 'till höger om dig',
    fromNorth: 'från norr',
  },
  quranApp: {
    medinan: 'Medinsk',
    meccan: 'Mekkansk',
    arabicName: 'namn på arabiska',
    englishName: 'namn på engelska',
    details:
      'Välj en vers för att se dess översättning och tafsir (förklaring)',
    selectRes: 'Välj källa',
    retry: 'försök igen',
    loadErr1: 'Kunde inte ladda förklaringen. Försök igen.',
    loadErr2: 'Hämtning misslyckades',
    author: 'författare',
    explain: 'Förklaring',
  },
  qiblaApp: {
    compass: 'Qibla-kompass',
    accuracy: 'noggrannhet',
    offline: 'GPS offline',
    tracking: 'GPS-spårning',
    aligned: 'Du vänder mot Qibla. Håll stadigt för exakt böneriktning.',
    notAligned: 'Håll din enhet platt och rotera tills pilen pekar mot Qibla.',
    heading: 'Enhetens riktning',
    turn: 'sväng',
    alignedQibla: 'Justerad med Qibla',
  },
  aiApp: {
    answer: 'svar',
  },
  prayerApp: {
    locationRequired: 'Platstjänster krävs för exakta bönetider.',
    schedule: 'Böneschema',
    refresh: 'uppdatera',
    sunrise: 'Soluppgång',
    upcoming: 'Kommande bön',
  },
  settingsApp: {
    reciterTitle: 'Adhan-recitatör',
    reciterSub: 'Välj din föredragna röst',
    notSelected: 'inte vald',
    preview: 'förhandsgranska',
    cancel: 'avbryt',
    muezzin: 'Muezzin',
    preNot: 'Förhandsavisering före Adhan',
    preNotDet: 'Meddela 15 minuter före bönetid',
    theme: 'Mörkt läge',
    dark: 'Nuvarande mörkt tema',
    light: 'Nuvarande ljust tema',
    about: 'Om',
    selectReciter: 'Välj recitatör',
  },
  athan: {
    mainTitle: 'ADHAN · BÖNEKALL',
    stop: 'Stoppa Adhan',
    error: 'Kunde inte ladda Adhan-ljud',
    prayerTime: 'Bönetid',
    play: 'spela',
    pause: 'paus',
    dismiss: 'stäng',
  },
  athkarApp: {
    completed: 'Slutfört',
    remaining: 'återstående',
    reset: 'återställ',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Börja din dag med välsignelser',
    descE: 'Avsluta din dag med beskydd',
    remmember: 'Dagligen Åminnelse',
    cat: 'kategorier av böner',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Sök hadither...',
      button: 'Sök',
      books: {
        label: 'Bok',
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
      title: 'Det aktuella språket stöds inte ännu',
      msg: 'Detta språk stöds för närvarande inte av hadith-databasen.',
      description:
        'Engelska har valts automatiskt som reservspråk så att du fortfarande kan söka och bläddra smidigt. Du kan också prova Avancerat läge för bredare flerspråkigt stöd och bättre resultat.',
    },

    initialPlaceholder:
      'Sök efter en hadith för att se detaljer som klassificering, berättare och referens',

    loading: {
      label: 'Laddar hadither...',
    },

    hadithCard: {
      showMore: 'Visa mer',
      showLess: 'Visa mindre',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referenser',
        referenceLabel: 'Referens',
        inBookReference: 'Referens i bok',
        arabicReference: 'Arabisk referens',
      },
    },

    emptyState: 'Inga hadither hittades',

    pagination: {
      prev: 'Föregående',
      next: 'Nästa',
    },
  },

  switch: {
    title: {
      advanced: 'Avancerat läge',
      normal: 'Normalt läge',
    },

    description: {
      advanced: 'Semantisk sökning med djupare förståelse',
      normal: 'Snabb filtreringsbaserad sökning',
    },
  },

  navbar: {
    routes: {
      home: 'Hem',
      prayers: 'Böner',
      quran: 'Koranen',
      athkar: 'Adhkar',
      articles: 'Artiklar',

      articlesNested: {
        islamicHistory: 'Islamisk historia',
        prayerInIslam: 'Bön i islam',
        womenInIslam: 'Kvinnor i islam',
        purification: 'Rening och tvagning',
      },

      learn: 'Lär dig',
      learnNested: {
        quranTajweed: 'Lär dig Koranen och tajwid',
        arabic: 'Lär dig arabiska',
      },

      dashboard: 'Instrumentpanel',
      aiAssistant: 'AI-assistent',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Utforska islam med',
      clarity: 'Tydlighet',
      peace: '& Frid',
    },

    description:
      'Lär dig, ställ frågor och upptäck autentisk förståelse genom AI och vägledd kunskap utformad för tydlighet och reflektion.',

    actions: {
      introductionToIslam: 'Lär dig om islam',
      islamQA: 'Islam Frågor & Svar (AI-assistent)',
      continueWebsite: 'Fortsätt till webbplatsen',
    },
  },
  learning: {
    quran: {
      title: 'Lär dig Koranen och Tajweed',
      subtitle:
        'Förbättra din Koranrecitation och förstå Tajweed-regler steg för steg.',
    },
    arabic: {
      title: 'Lär dig arabiska',
      subtitle:
        'Bygg upp dina kunskaper i arabiska genom tydliga och strukturerade lektioner.',
    },
    default: {
      title: 'Lärsektion',
      subtitle:
        'Utforska utbildningsinnehåll utformat för att stärka din kunskap och förståelse.',
    },
  },
  explore: {
    searchBar: {
      title: 'Sök i hadith-samlingar',

      subtitle: 'Sök naturligt med ämnen, betydelser eller hela meningar.',

      placeholder: 'Exempel: hadith om vänlighet mot föräldrar',

      button: 'Sök',
    },

    header: {
      title: 'Hadith-sökbibliotek',
      subtitle:
        'Utforska autentiska hadither direkt med en modern läsupplevelse.',
    },

    content: {
      heroTitle: 'Upptäck autentiska hadith-samlingar med kraftfull sökning',

      loading: {
        label: 'Söker i hadith-samlingar...',
      },

      error: {
        title: 'Kunde inte ladda hadith',
        message:
          'Vi kunde inte hämta berättelserna just nu. Kontrollera din anslutning och försök igen.',
      },

      empty: {
        title: 'Inga matchande hadither hittades',
      },

      card: {
        reference: 'Hadithreferens',
        readMore: 'Läs hela hadithen',
      },
    },
  },

  home: {
    news: {
      title: 'Uppdateringar från muslimska gemenskapen',
      subtitle:
        'Håll dig informerad med viktiga uppdateringar från den muslimska världen',
    },

    prayer: {
      title: 'Nedräkning till bön',
      subtitle: 'Förbered dig för nästa bön',
      button: 'Visa bönetider',
      nextPrayerLabel: 'Nästa bön:',
    },

    athkar: {
      title: 'Morgon- och kvällsadhkar',
      subtitle: 'Dagliga åkallelser för att hålla ditt hjärta anslutet',
      button: 'Se fler adhkar',
    },

    qibla: {
      title: 'Qibla-riktning',
      subtitle: 'Hitta Kaabas riktning var du än är',
      locationLoading: 'Hämtar din plats...',
      enableLocation: 'Aktivera plats',
      refreshLocation: 'Uppdatera qibla-riktning',

      warning:
        'Om din enhet inte stöder orienteringssensorer kan kompassens noggrannhet påverkas.',

      errorTitle: 'Åtkomst nekad',
    },
  },

  prayers: {
    nextLabel: 'Nästa bön:',

    header: {
      title: 'Bönetider',
      subtitle: 'En daglig stund av kontakt med din Skapare',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Hämtar din plats...',
      warning:
        'Om ditt operativsystem inte stöder orientering påverkas kompassberäkningar.',
      errorTitle: 'Åtkomst nekad',
      enableLocation: 'Aktivera plats',
      refreshLocation: 'Uppdatera qibla-riktning',
    },

    list: {
      warning: 'Tider kan variera något beroende på beräkningsmetod.',
    },
  },

  quran: {
    header: {
      title: 'Koranen',
      subtitle: 'Din dagliga följeslagare för recitation och reflektion',
    },

    search: {
      noResultTitle: 'Ingen data',
      noResultMessage: 'Ingen data att visa',
    },
  },

  athkar: {
    title: 'Dagliga åkallelser',
    subtitle: 'Behåll kontinuitet i din dagliga dhikr och reflektion',
  },

  ai: {
    header: {
      title: 'Global islamisk AI-assistent',
      subtitle:
        'Få tydliga islamiska svar baserade på Koranen, sunnan och pålitliga lärda',
    },

    loading: {
      label: 'Laddar...',
    },

    error: {
      title: 'Förfrågningsgräns nådd',
      message: 'Kan inte nå kunskapstjänsten just nu. Försök igen senare.',
    },

    input: {
      placeholder: 'Ställ en fråga om islam...',
    },

    suggestions: [
      'Kan jag be utan wudu?',
      'Är ränta (riba) helt förbjudet?',
      'Regler för arbete i icke-halal miljö',
      'Kan jag be under resa?',
      'Är parfym tillåtet under bön?',
      'Vad gör bönen ogiltig?',
      'Regler för att fördröja bön på grund av arbete',
    ],

    footer: {
      disclaimer:
        'Denna AI-assistent är utformad för att ge svar baserade på pålitliga kunskapskällor, inklusive islamiska referenser och verifierat utbildningsmaterial.',

      note: 'Svar är endast för informationsändamål och ersätter inte vid behov lärdas vägledning.',
    },
  },

  footer: {
    disclaimer:
      'Allt innehåll kommer från dess ursprungliga pålitliga källor. Feedback och felrapporter välkomnas.',

    tagline: 'Byggt med omsorg för autentiskt islamiskt innehåll',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Tillbaka',
    },

    sections: {
      hadithText: 'Hadith-text',
      arabicText: 'Arabisk text',
      explanation: 'Förklaring',
      authentication: 'Autenticitet',
      lessons: 'Fördelar & lärdomar',
    },
  },
  other: {
    part: 'Del',
    translation: 'Översättning',
    verse: 'Vers',
    chapter: 'Kapitel',
    page: 'Sida',
    breakingNews: 'Senaste nytt',
  },
  dailyRemined: {
    title: 'Dagens Ljus',
    subtitle:
      'Stanna upp och reflektera över en vers och hadith utvalda för din dag.',
  },
  baseFooter: {
    contact: {
      title: 'Kontakta oss',
      name: 'Ditt namn',
      email: 'Din e-post',
      msg: 'Ditt meddelande',
      sendMsg: 'Skicka meddelande',
    },
    followUs: 'Följ oss',
    QA: 'Snabbåtkomst',
    logoB:
      'Koranen, Hadith, bönetider, AI-assistent och dagliga islamiska verktyg—all på en modern plattform.',
    whatsapp: 'Chatta på WhatsApp',
    rsr: 'Alla rättigheter förbehållna',
  },
  compareRelg: {
    note: `Denna sida presenterar en jämförande översikt över världens stora religioner. Ur ett islamiskt perspektiv bekräftar Koranen att tidigare gudomliga uppenbarelser sändes till äldre nationer, men att de med tiden undergick mänskliga förändringar (tahrif). Koranen slår fast: "Det är Vi som har uppenbarat denna påminnelse och Vi skall helt visst slå vakt om den" (15:9). Denna sida undersöker dessa skillnader i ljuset av historiska och textuella bevis.`,
    mainTitle: 'En rationell resa genom religioner',
    headerTitle: 'Frågorna som definierar mänsklig existens',
    story: `
Föreställ dig att du plötsligt öppnar ögonen och inser att du befinner dig på ett lyxtåg som rusar fram genom en oändlig natt i hög hastighet. Runt omkring dig finns all tänkbar bekvämlighet: rikliga måltider serverade på eleganta bord, skärmar med filmer och silkessjalar på mjuka säten.

Med en känsla av oro frågar du medpassageraren bredvid dig:
"Var är vi? Vem satte oss på det här tåget? Och vart är vi på väg?"

Det mest överraskande är deras reaktion.

En svarar kallt:
"Vad angår det dig? Njut bara av maten, den är fantastisk."

En annan svarar hånfullt:
"Varför plåga dig själv med sådana frågor? Luta dig tillbaka och se en film."

Alla omkring dig förlorar sig i resans njutningar, men du grips av en djup rädsla, för du vet att tåget rusar mot sin slutstation – en plats där varje passagerare till slut måste stiga av.

I det ögonblicket uppstår den avgörande frågan:

Kommer du att hänge dig åt resans lyx och underhållning, eller kommer du att fortsätta söka svar på de tre djupaste frågorna:

Vem är Skaparen?
Varför är vi här?
Och vad väntar oss vid vägs ände?

Detta tåg är planeten jorden, och resan är ditt eget liv.

Eftersom människor inte har dessa svar medfödda, har religioner uppstått som "bruksanvisningar", där var och en hävdar att den kommer direkt från tågets konstruktör.

Låt oss analysera dessa instruktioner ur ett lugnt och rationellt perspektiv.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Vem är Skaparen?',

        intro: `
Ur ett filosofiskt och logiskt perspektiv måste Skaparen som universums "Första orsak" vara helt transcendent, utanför gränserna för materia, tid och rum. Om Skaparen vore underkastad hunger, trötthet, fysiska begränsningar eller rumsliga ramar, skulle en sådan varelse logiskt sett förlora sin status som absolut Skapare och bli en skapad och beroende varelse. En beroende varelse kan inte vara den nödvändiga källan till all existens.
  `,

        religions: {
          eastern: {
            title: 'Österländska religioner',
            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
I sin äldsta form, Theravada, är buddhismen generellt icke-teistisk; den fokuserar inte på existensen av en skapargud, utan ser tillvaron som ett resultat av eviga naturliga processer, kausalitet och ömsesidigt beroende lagar.

Hinduismen talar däremot ofta om en fundamental metafysisk verklighet kallad "Brahman". I praktiken manifesteras dock denna högsta verklighet genom oräkneliga former och gudomligheter, inklusive mänskliga och djurliknande figurer, såsom Vishnu, Shiva och Kali.
      `,

            objectiveCritique: `
Ur ett filosofiskt perspektiv står buddhismen inför utmaningen att förklara hur ett högt ordnat universum, styrt av konsekventa lagar och fysisk precision, kan uppstå utan en ursprunglig medveten orsak.

I hinduistiska traditioner som accepterar gudomliga inkarnationer och fysiska avbildningar, förknippas gudomligheten med begränsningar, konflikter, hunger, död och materiell form. En gudom som fysiskt kan avbildas, förkroppsligas eller som är underkastad naturliga processer framstår ur ett rationellt perspektiv snarare som en del av skapelsen än som en varelse som helt överskrider den.
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
Judendomen bekräftar tron på en Skapare som är upphöjd över avgudar och fysiska bilder. Gud (JHWH) förstås som skapare av himmel och jord och är i sitt väsen skild från sin skapelse.
      `,

            objectiveCritique: `
Det filosofiska problem som uppstår här gäller inte så mycket transcendensen i sig, utan snarare gränserna för Guds universalitet, så som de framträder i vissa passager i den hebreiska bibeln. Vissa texter skildrar Gud i ett förbundsförhållande som är starkt orienterat mot Israels söner, vilket kritiker tolkar som en etnisk exklusivism.

Dessutom använder vissa passager mänskligt språk för att beskriva Gud, som till exempel "ånger" över att ha skapat människan (1 Mos 6:6) eller "vila" den sjunde dagen efter skapelsen (2 Mos 31:17). Kritiker hävdar att sådana beskrivningar väcker frågan om dessa egenskaper bör förstås bokstavligt eller metaforiskt.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristendom',

            answerNature: `
Kristendomen lär ut tron på en Gud genom läran om den Heliga Treenigheten: Fadern, Sonen och den Helige Ande. Enligt läran om inkarnationen trädde Treenighetens andra person – Sonen – in i mänsklighetens historia som personen Jesus Kristus, som korsfästes och dog för mänsklighetens frälsning.
      `,

            objectiveCritique: `
Filosofiskt hävdar kritiker att läran om inkarnationen skapar en spänning mellan gudomliga och mänskliga attribut. Traditionellt beskrivs Gud som evig, obegränsad och utanför döden, medan människor beskrivs som ändliga, sårbara och dödliga.

Problemet uppstår när full gudomlighet och full mänsklighet förenas i en person. Kritiker frågar sig hur en evig och oberoende varelse samtidigt kan uppleva hunger, sömn, lidande och död. Detta problem formuleras ofta som en spänning mellan transcendens och inkarnation, inte bara som ett teologiskt mysterium.
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
Islam presenterar ett koncept av Gud som är helt transcendent och odelbar. Koranen sammanfattar detta koncept i sura Al-Ikhlas:

"Säg: Han är Gud, den Enade. Gud, den Absoluta. Han har inte avlat och är inte född. Och ingenting är Honom likt." (Koranen 112:1–4)

Inom islam är Skaparen helt utanför materiell form och är skild från skapelsen:

"Ingenting är Honom likt." (Koranen 42:11)

Gud är inte begränsad av tid, rum eller fysiska begränsningar. Koranen uppger också:

"Inte heller slumrar Han eller sover." (Koranen 2:255)

Inom islamsk teologi förstås Gud som en oberoende, evig, självförsörjande varelse som är helt skild från skapelsen.
      `,

            objectiveCritique: `
Ur ett islamskt filosofiskt perspektiv strävar detta koncept efter att bevara absolut transcendens genom att undvika antropomorfism och inkarnation. Målet är att förena Skaparen med idén om en oberoende och nödvändig Första orsak som inte är underkastad den skapade varelsens begränsningar.
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

        title: 'Vad är livets väg och mål?',

        intro: `
Om en vis Skapare existerar är det irrationellt att anta att mänskligheten lämnats utan riktlinjer som förklarar existensens syfte, moraliskt ansvar och principer att leva efter. Precis som komplexa system kräver instruktioner från sin konstruktör, hävdar religioner att de tillhandahåller ett ramverk som hjälper människan att förstå varför vi är här och hur vi bör leva.
  `,

        religions: {
          eastern: {
            title: 'Österländska religioner',

            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
Österländska traditioner som buddhism och hinduism förlitar sig generellt på filosofiska läror, meditativa praktiker och reflektioner utvecklade av andliga lärare och vise.

Inom buddhismen är det slutgiltiga målet befrielse från lidande och att undkomma återfödelsens kretslopp genom att uppnå Nirvana – ett tillstånd av transcendens och inre befrielse.

Inom många hinduistiska traditioner är målet andlig befrielse (Moksha), nåbar genom hängivenhet, kunskap, meditation eller disciplinerat handlande.
      `,

            objectiveCritique: `
Kritiker hävdar att dessa system främst är filosofiska och erfarenhetsbaserade snarare än baserade på en verifierbar uppenbarelse från en transcendent Skapare.

Vissa argumenterar också att den starka betoningen på tillbakadragande från världsligt liv, klosterväsen och självförnekelse kan komma i konflikt med aspekter av den mänskliga naturen som stimulerar social utveckling, vetenskapliga framsteg, familjeliv och civilisation.
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
Inom judendomen är livets väg rotad i förbundslagen som uppenbarades för Mose och bevarades i den hebreiska bibeln (Tanakh). Det religiösa ramverket fokuserar på lydnad mot Guds bud och att upprätthålla förbundsförhållandet mellan Gud och Israels söner.
      `,

            objectiveCritique: `
Kritiker hävdar att judendomen historiskt sett utvecklades som en tradition orienterad mot förbundet med ett specifikt folk, snarare än som en universell missionerande religion för hela mänskligheten.

Ur ett textanalytiskt perspektiv hävdar vissa forskare – inklusive Richard Elliott Friedman – att Tora genomgick kompilerings- och redigeringsprocesser under århundraden, särskilt kring den babyloniska fångenskapen och därefter. Detta leder vissa kritiker att tvivla på om texten kan betraktas som en fullständigt bevarad uppenbarelse i sin ursprungliga form.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristendom',

            answerNature: `
Kristendomen lär att mänsklighetens huvudproblem är synd och separation från Gud, och att frälsning nås genom tron på Jesu offerdöd och hans uppståndelse. Livets mål förstås därför genom försoning med Gud och andlig förvandling.
      `,

            objectiveCritique: `
Historiker noterar att de ursprungliga manuskripten till evangelierna på arameiska (Jesu språk) inte har bevarats. De äldsta bevarade texterna är grekiska manuskript, skrivna decennier efter Jesu liv. Textkritiker som Bart Ehrman har dokumenterat otaliga variationer i de äldsta kopiorna av Nya testamentet.

Kritiker hävdar också att kristendomen historiskt sett lagt större vikt vid andlig och personlig frälsning än vid att bygga ett omfattande juridiskt eller politiskt ramverk för ekonomi, straffrätt eller statsförvaltning. Vissa historiker menar att detta bidrog till den senare separationen mellan kyrka och stat i många västerländska samhällen.
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
Islam erbjuder en helhetsförståelse av människans syfte genom integration av andlig hängivenhet och världsligt ansvar.

Koranen uppger:

"Jag har skapat de osynliga väsendena och människorna endast för att de skall tillbe Mig." (Koranen 51:56)

Inom islamsk tanketradition är tillbedjan inte begränsad till ritualer, utan inkluderar rätt handlande, rättvisa, etiskt beteende, sökande efter kunskap och positivt bidrag till samhället.

Islamsk lära eftersträvar balans mellan andlig tillväxt och praktiskt deltagande i familjeliv, ekonomi, förvaltning, välgörenhet och socialt ansvar.
      `,

            objectiveCritique: `
Ur ett islamskt perspektiv utgör Koranen en unikt bevarad uppenbarelse. Muslimer hävdar att texten förblivit oförändrad och kontinuerligt förmedlats genom skrivna manuskript och muntlig memorering ända sedan islams första generationer.

Ofta citerade exempel är uråldriga texter, såsom Birmingham-manuskriptet av Koranen, och den enorma traditionen av muntlig memorering som upprätthålls av miljontals muslimer världen över.

Islamsk lag (Sharia) presenteras också som ett etiskt och juridiskt ramverk som täcker områden som finanser, välgörenhet, familjerätt, straffrätt och förvaltning. Förespråkare hävdar att detta ger islam egenskaperna hos ett komplett moraliskt och civilisatoriskt system, inte bara en andlig tradition.
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

        title: 'Vad händer efter slutstationen?',

        subtitle: 'Öde, rättvisa och efterlivet',

        intro: `
Utan existensen av en slutgiltig rättvisa efter döden kan livet verka mycket godtyckligt och moraliskt olöst. Tyranner kan dö utan att ställas till svars, och offer kan lämna världen utan att finna rättvisa. Detta väcker en av mänsklighetens äldsta filosofiska frågor: är döden slutet, eller finns det en slutgiltig dom utanför det jordiska livet?
  `,

        religions: {
          eastern: {
            title: 'Österländska religioner',

            examples: ['Hinduism', 'Buddhism'],

            answerNature: `
Många österländska traditioner accepterar konceptet reinkarnation, där själen eller medvetandeströmmen genomgår upprepade återfödelsecykler. Individens framtida tillstånd bestäms av karma: de moraliska konsekvenserna av tidigare handlingar.
      `,

            objectiveCritique: `
Kritiker hävdar att reinkarnation väcker filosofiska frågor om rättvisa och ansvar. Om någon i ett nytt liv bär konsekvenserna av handlingar från en tidigare existens som de inte medvetet kan minnas, blir straffets fostrande och moraliska syfte svårt att förstå.

Ur detta perspektiv verkar ansvar utan medvetet minne vara avskuret från ett meningsfullt moraliskt ansvar.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialism och ateism',

            answerNature: `
Materialistiska och ateistiska världsbilder betraktar vanligtvis döden som slutet på den medvetna existensen. Människor förstås som biologiska organismer vars medvetande upphör helt efter den fysiska döden.
      `,

            objectiveCritique: `
Kritiker hävdar att strikt materialism har svårt att ge en objektiv grund för moral, rättvisa och fundamentala syften. Om både förtryckaren och offret till slut försvinner i intet utan att ställas till svars, kan begrepp som uppoffring, moralisk plikt och rättvisa verka subjektiva eller socialt konstruerade snarare än universellt bindande.

Förespråkare för sekulär etik argumenterar dock för att moral fortfarande kan uppstå genom förnuft, empati och socialt ansvar utan tro på ett efterliv.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristendom',

            answerNature: `
Kristendomen lär att frälsning och evigt liv nås genom tro på Jesus Kristus och acceptans av hans offer för mänsklighetens synder. Himmel och evig frälsning är nära kopplade till tron på Kristus och Guds nåd.
      `,

            objectiveCritique: `
Kritiker frågar sig hur frälsning som främst bygger på tro förhåller sig till universella principer om rättvisa. Filosofiskt argumenterar vissa för att detta ramverk kan innebära att en moraliskt god person, som uppriktigt försöker acceptera vissa teologiska dogmer, kan bli utan frälsning, medan en annan person, som begått svåra brott men trott i sista stund, kan erhålla en evig belöning.

Kristna teologer svarar ofta att frälsning innefattar både uppriktig tro och autentisk ånger, inte bara en muntlig bekännelse.
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
Islam presenterar efterlivet som ett system av absolut moraliskt ansvar och gudomlig rättvisa.

Koranen uppger:

"Ingen bärare av en börda skall bära en annans börda." (Koranen 6:164)

Frälsning inom islam är konsekvent kopplad till tro och goda handlingar:

"Och ge de goda nyheterna till dem som tror och gör goda gärningar..." (upprepas genom hela Koranen, inklusive 2:25)

Islam lär att det jordiska livet är ett tillfälligt test, inte en plats för slutgiltig belöning eller straff:

"Han som har skapat döden och livet för att pröva er, vem av er som är bäst i handling." (Koranen 67:2)
      `,

            objectiveCritique: `
Inom islamsk teologi utgör Domedagen en slutgiltig tribunal, där varje handling, hur liten den än är, kommer att räknas.

Koranen uppger:

"Den som har gjort gott vägande som ett atomkorn skall se det. Och den som har gjort ont vägande som ett atomkorn skall se det." (Koranen 99:7–8)

Detta ramverk strävar efter att bevara både individuellt ansvar och absolut rättvisa, och erbjuder en moralisk trygghet i att ingen handling av förtryck eller godhet i slutändan kommer att förbli utan konsekvenser.
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
      navbar: 'Religioner jämförda',
      hero: {
        subtitle:
          'En lugn och djup filosofisk resa genom mänsklighetens största frågor: Skaparen, existensens syfte, moral och vad som väntar efter döden.',

        subtitleHighlight:
          'Skaparen, existensens syfte, moral och vad som väntar efter döden.',

        scrollIndicator: 'Skrolla ned för att påbörja resan',
      },

      storySection: {
        badge: 'Tåganalogin',

        titleLine1: 'Innan du ställer frågorna',
        titleLine2: 'Om religion...',

        intro:
          'Varje människa når till slut ett ögonblick av tystnad när de störande intrycken försvinner – och de djupaste frågorna äntligen kommer upp till ytan.',

        ending: 'Detta tåg är planeten jorden,',
        ending2: 'och resan är ditt eget liv.',
      },

      coreQuestions: {
        sectionLabel: 'Huvudavsnitt',
        title: 'Fundamentala frågor',

        answerNatureTitle: 'Svarets natur',

        philosophicalDiscussionTitle: 'Filosofisk diskussion',

        referencesTitle: 'Referenser',
      },

      futureResearch: {
        sectionLabel: 'Framtida forskning',

        title: 'Fler frågor',

        loaderBadge: 'Fler frågor under förberedelse',

        headingLine1: 'Resan',
        headingLine2: 'fortsätter...',

        description:
          'Ytterligare filosofiska och teologiska studier förbereds med samma strukturerade jämförande ansats.',

        topics: [
          'Moral',
          'Vetenskap',
          'Mirakel',
          'Medvetande',
          'Fri vilja',
          'Lidande',
          'Historisk överföring',
          'Profetior',
          'Mänsklig natur',
          'Mening',
          'Civilisation',
          'Etik',
        ],

        footer: 'Nya avsnitt läggs till snart',
      },

      imageAlt: {
        hero: 'Religioner jämförda',
      },
    },
  },
};
