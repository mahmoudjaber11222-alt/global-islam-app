export default {
  splash: {
    version: 'versjon',
    practice: 'øvelse',
    share: 'del',
    logo: 'global islam',
  },
  homeApp: {
    north: 'nord',
    east: 'øst',
    west: 'vest',
    south: 'sør',
    active: 'qibla aktiv',
    disabled: 'Åpne Qibla-kompass',
    welcome: 'Velkommen tilbake',
    greet: 'Assalamu Alaikum',
    hour: 'time',
    minute: 'minutt',
    second: 'sekund',
    toLeft: 'til venstre for deg',
    toRight: 'til høyre for deg',
    fromNorth: 'fra nord',
  },
  quranApp: {
    medinan: 'Medinsk',
    meccan: 'Mekkansk',
    arabicName: 'navn på arabisk',
    englishName: 'navn på engelsk',
    details: 'Velg et vers for å se oversettelsen og tafsir (forklaring)',
    selectRes: 'Velg ressurs',
    retry: 'prøv igjen',
    loadErr1: 'Kunne ikke laste forklaringen. Prøv igjen.',
    loadErr2: 'Henting mislyktes',
    author: 'forfatter',
    explain: 'Forklaring',
  },
  qiblaApp: {
    compass: 'Qibla-kompass',
    accuracy: 'nøyaktighet',
    offline: 'GPS offline',
    tracking: 'GPS-sporing',
    aligned: 'Du vender mot Qibla. Hold stødig for nøyaktig bønneretning.',
    notAligned: 'Hold enheten flat og roter til pilen peker mot Qibla.',
    heading: 'Enhetens retning',
    turn: 'snu',
    alignedQibla: 'Justert med Qibla',
  },
  aiApp: {
    answer: 'svar',
  },
  prayerApp: {
    locationRequired: 'Stedstjenester er nødvendige for nøyaktige bønnetider.',
    schedule: 'Bønnetidsskjema',
    refresh: 'oppdater',
    sunrise: 'Soloppgang',
    upcoming: 'Neste bønn',
  },
  settingsApp: {
    reciterTitle: 'Adhan-resitatør',
    reciterSub: 'Velg din foretrukne stemme',
    notSelected: 'ikke valgt',
    preview: 'forhåndsvisning',
    cancel: 'avbryt',
    muezzin: 'Muezzin',
    preNot: 'Forhåndsvarsel før Adhan',
    preNotDet: 'Varsle 15 minutter før bønnetid',
    theme: 'Mørk modus',
    dark: 'Nåværende mørkt tema',
    light: 'Nåværende lyst tema',
    about: 'Om',
    selectReciter: 'Velg resitatør',
  },
  athan: {
    mainTitle: 'ADHAN · KALL TIL BØNN',
    stop: 'Stopp Adhan',
    error: 'Kunne ikke laste Adhan-lyd',
    prayerTime: 'Bønnetid',
    play: 'spill av',
    pause: 'pause',
    dismiss: 'lukk',
  },
  athkarApp: {
    completed: 'Fullført',
    remaining: 'gjenstående',
    reset: 'tilbakestill',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Begynn dagen med velsignelser',
    descE: 'Avslutt dagen med beskyttelse',
    remmember: 'Daglig Minne',
    cat: 'kategorier av bønner',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Søk hadither...',
      button: 'Søk',
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
      title: 'Nåværende språk støttes ikke ennå',
      msg: 'Dette språket støttes ikke i hadith-databasen ennå.',
      description:
        'Engelsk er valgt automatisk som reserve for å sikre fortsatt søk og navigasjon. Du kan også prøve avansert modus for bredere språkstøtte.',
    },

    initialPlaceholder:
      'Søk etter en hadith for å se detaljer som vurdering, fortellere og referanse',

    loading: {
      label: 'Laster hadither...',
    },

    hadithCard: {
      showMore: 'Vis mer',
      showLess: 'Vis mindre',
      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referanser',
        referenceLabel: 'Referanse',
        inBookReference: 'I-bok referanse',
        arabicReference: 'Arabisk referanse',
      },
    },

    emptyState: 'Ingen hadither funnet',

    pagination: {
      prev: 'Forrige',
      next: 'Neste',
    },
  },

  switch: {
    title: {
      advanced: 'Avansert modus',
      normal: 'Normal modus',
    },
    description: {
      advanced: 'Semantisk søk med dypere forståelse',
      normal: 'Rask filterbasert søk',
    },
  },

  navbar: {
    routes: {
      home: 'Hjem',
      prayers: 'Bønner',
      quran: 'Koranen',
      athkar: 'Dhikr',
      articles: 'Artikler',
      articlesNested: {
        islamicHistory: 'اسلامisk historie',
        prayerInIslam: 'Bønn i islam',
        womenInIslam: 'Kvinner i islam',
        purification: 'Renselse og avvasking',
      },
      learn: 'Lær',
      learnNested: {
        quranTajweed: 'Lær Koranen og tajwid',
        arabic: 'Lær arabisk',
      },
      dashboard: 'Dashboard',
      aiAssistant: 'AI-assistent',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Utforsk islam med',
      clarity: 'Klarhet',
      peace: '& Fred',
    },

    description:
      'Lær, still spørsmål og oppdag ekte forståelse gjennom AI og veiledet kunnskap designet for klarhet og refleksjon.',

    actions: {
      introductionToIslam: 'Lær om islam',
      islamQA: 'Islam spørsmål og svar (AI-assistent)',
      continueWebsite: 'Fortsett til nettstedet',
    },
  },
  learning: {
    quran: {
      title: 'Lær Koranen og Tajweed',
      subtitle:
        'Forbedre din koranresitasjon og forstå Tajweed-reglene steg for steg.',
    },
    arabic: {
      title: 'Lær arabisk',
      subtitle:
        'Bygg dine arabiske språkferdigheter gjennom klare og strukturerte leksjoner.',
    },
    default: {
      title: 'Læringsseksjon',
      subtitle:
        'Utforsk pedagogisk innhold designet for å styrke din kunnskap og forståelse.',
    },
  },
  explore: {
    searchBar: {
      title: 'Søk i hadith-samlinger',

      subtitle: 'Søk naturlig med temaer, betydninger eller hele setninger.',

      placeholder: 'Eksempel: hadith om vennlighet mot foreldre',

      button: 'Søk',
    },

    header: {
      title: 'Hadith-søkbibliotek',
      subtitle:
        'Utforsk autentiske hadither umiddelbart med en moderne leseopplevelse.',
    },

    content: {
      heroTitle: 'Oppdag autentiske hadith-samlinger med kraftig søk',

      loading: {
        label: 'Søker i hadith-samlinger...',
      },

      error: {
        title: 'Kunne ikke laste hadith',
        message:
          'Vi kunne ikke hente overleveringene akkurat nå. Sjekk tilkoblingen din og prøv igjen.',
      },

      empty: {
        title: 'Ingen samsvarende hadither funnet',
      },

      card: {
        reference: 'Hadith-referanse',
        readMore: 'Les hele hadithen',
      },
    },
  },

  home: {
    news: {
      title: 'Oppdateringer fra muslimsk fellesskap',
      subtitle:
        'Hold deg informert om viktige oppdateringer fra den muslimske verden',
    },

    prayer: {
      title: 'Nedtelling til bønn',
      subtitle: 'Gjør deg klar til neste bønn',
      button: 'Se bønnetider',
      nextPrayerLabel: 'Neste bønn:',
    },

    athkar: {
      title: 'Morgen- og kvelds-adhkar',
      subtitle: 'Daglige påminnelser som holder hjertet ditt tilkoblet',
      button: 'Se flere adhkar',
    },

    qibla: {
      title: 'Qibla-retning',
      subtitle: 'Finn retningen mot Kaaba uansett hvor du er',
      locationLoading: 'Henter posisjonen din...',
      enableLocation: 'Aktiver posisjon',
      refreshLocation: 'Oppdater qibla-retning',

      warning:
        'Hvis enheten din ikke støtter orienteringssensorer, kan kompassnøyaktigheten bli påvirket.',

      errorTitle: 'Tilgang nektet',
    },
  },

  prayers: {
    nextLabel: 'Neste bønn:',

    header: {
      title: 'Bønnetider',
      subtitle: 'Et daglig øyeblikk av forbindelse med din Skaper',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Henter posisjonen din...',
      warning:
        'Hvis operativsystemet ikke støtter orientering, påvirker det kompassberegningene.',
      errorTitle: 'Tilgang nektet',
      enableLocation: 'Aktiver posisjon',
      refreshLocation: 'Oppdater qibla-retning',
    },

    list: {
      warning: 'Tidene kan variere litt avhengig av beregningsmetode.',
    },
  },

  quran: {
    header: {
      title: 'Koranen',
      subtitle: 'Din daglige følgesvenn for resitasjon og refleksjon',
    },

    search: {
      noResultTitle: 'Ingen data',
      noResultMessage: 'Ingen data å vise',
    },
  },

  athkar: {
    title: 'Daglige dhikr',
    subtitle: 'Oppretthold kontinuitet i daglig ihukommelse og refleksjon',
  },

  ai: {
    header: {
      title: 'Global islamisk AI-assistent',
      subtitle:
        'Få klare islamske svar basert på Koranen, sunnah og pålitelige lærde',
    },

    loading: {
      label: 'Laster...',
    },

    error: {
      title: 'Forespørselsgrense nådd',
      message: 'Kan ikke nå kunnskapstjenesten akkurat nå. Prøv igjen senere.',
    },

    input: {
      placeholder: 'Still et spørsmål om islam...',
    },

    suggestions: [
      'Kan jeg be uten wudu?',
      'Er rente (riba) helt forbudt?',
      'Regler for arbeid i ikke-halal miljø',
      'Kan jeg be på reise?',
      'Er parfyme tillatt under bønn?',
      'Hva ugyldiggjør bønnen?',
      'Regler for å utsette bønn på grunn av arbeid',
    ],

    footer: {
      disclaimer:
        'Denne AI-assistenten er designet for å gi svar basert på pålitelige kunnskapskilder, inkludert islamske referanser og verifisert undervisningsmateriale.',

      note: 'Svar er kun til informasjonsformål og erstatter ikke lærdes veiledning der det er nødvendig.',
    },
  },

  footer: {
    disclaimer:
      'Alt innhold er hentet fra originale pålitelige kilder. Tilbakemeldinger og feilrapporter er velkomne.',

    tagline: 'Bygget med omtanke for autentisk islamsk innhold',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Tilbake',
    },

    sections: {
      hadithText: 'Hadith-tekst',
      arabicText: 'Arabisk tekst',
      explanation: 'Forklaring',
      authentication: 'Autentisitet',
      lessons: 'Fordeler og lærdommer',
    },
  },
  other: {
    note: 'Merknad',
    theLanguage: 'språket',
    part: 'Del',
    translation: 'Oversettelse',
    verse: 'Vers',
    chapter: 'Kapittel',
    page: 'Side',
    breakingNews: 'Siste nytt',
  },
  dailyRemined: {
    title: 'Dagens Lys',
    subtitle:
      'Ta en pause og reflekter over et vers og en hadith valgt for dagen din.',
  },
  baseFooter: {
    contact: {
      title: 'Kontakt oss',
      name: 'Ditt navn',
      email: 'Din e-post',
      msg: 'Din melding',
      sendMsg: 'Send melding',
    },
    followUs: 'Følg oss',
    QA: 'Rask tilgang',
    logoB:
      'Koranen, Hadith, bønnetider, AI-assistent og daglige islamske verktøy—all på én moderne plattform.',
    whatsapp: 'Chat på WhatsApp',
    rsr: 'Alle rettigheter reservert',
  },
  compareRelg: {
    note: `Denne siden presenterer en komparativ oversikt over verdens store religioner. Fra et islamsk perspektiv bekrefter Koranen at tidligere guddommelige åpenbaringer ble sendt til tidligere nasjoner, men at de over tid gjennomgikk menneskelige endringer (tahrif). Koranen slår fast: «Det er Vi som har sendt ned Påminnelsen, og det er Vi som skal bevare den» (15:9). Denne siden undersøker disse forskjellene i lys av historiske og tekstlige bevis.`,
    mainTitle: 'En rasjonell reise gjennom religioner',
    headerTitle: 'Spørsmål som definerer menneskets eksistens',
    story: `
Se for deg at du plutselig åpner øynene og innser at du sitter på et luksuriøst tog som suser av sted gjennom en endeløs natt. Rundt deg er alt du kan tenke deg av komfort: overdådige måltider servert på elegante bord, skjermer som viser filmer, og silkeputer i myke seter.

Du spør med en urolig følelse passasjeren ved siden av deg:
"Hvor er vi? Hvem satte oss på dette toget? Og hvor skal vi?"

Men det mest overraskende er reaksjonen deres.

Den ene svarer kaldt:
"Hva har det å si? Bare nyt maten, den er fantastisk."

En annen svarer spottende:
"Hvorfor plage deg selv med slike spørsmål? Len deg tilbake og nyt filmen."

Alle rundt deg går opp i reisens fornøyelser, men du blir grepet av en dyp frykt, fordi du vet at dette toget suser mot endestasjonen – et sted der hver passasjer til slutt må gå av.

I det øyeblikket oppstår det essensielle spørsmålet:

Vil du gå opp i reisens luksus og underholdning, eller vil du fortsette å søke svar på de tre dypeste spørsmålene:

Hvem er Skaperen?
Hvorfor er vi her?
Og hva venter oss til slutt?

Dette toget er planeten Jorden, og reisen er ditt eget liv.

Siden mennesker ikke har disse svarene av seg selv, har religioner oppstått som "bruksanvisninger", der hver av dem hevder å komme direkte fra togets designer.

La oss legge disse manualene under lupen med et rolig og rasjonelt blikk.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Hvem er Skaperen?',

        intro: `
Fra et filosofisk og logisk perspektiv må Skaperen som universets "første årsak" være fullstendig transcendent, utenfor grensene for materie, tid og rom. Hvis Skaperen var underlagt sult, tretthet, fysiske begrensninger eller romlige rammer, ville et slikt vesen logisk sett miste sin status som absolutt Skaper og bli til et skapt og avhengig vesen. Et avhengig vesen kan ikke være den nødvendige kilden til hele eksistensen.
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',
            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
I sin tidligste form, Theravada, er buddhismen vanligvis ikke-teistisk; den fokuserer ikke på eksistensen av en skapergud, men ser eksistensen som et resultat av evige naturlige prosesser, kausalitet og gjensidig avhengige lover.

Hinduismen snakker derimot ofte om en fundamental metafysisk realitet kalt "Brahman". I praksis manifesterer imidlertid denne høyeste realiteten seg gjennom utallige former og guddommer, inkludert menneskelige og animalske skikkelser som Vishnu, Shiva og Kali.
      `,

            objectiveCritique: `
Fra et filosofisk ståsted står buddhismen overfor utfordringen med å forklare hvordan et høyt ordnet univers, styrt av konsistente lover og fysisk presisjon, kan oppstå uten en opprinnelig bevisst årsak.

I hinduistiske tradisjoner som aksepterer guddommelige inkarnasjoner og fysiske avbildninger, blir det guddommelige assosiert med begrensninger, konflikter, sult, død og materiell form. En guddom som kan avbildes fysisk, inkarneres eller er underlagt naturlige prosesser, virker fra et rasjonelt perspektiv snarere som en del av skaperverket enn et vesen som fullstendig overgår det.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Jødedom',

            answerNature: `
Jødedommen bekrefter troen på en Skaper som er opphøyd over avguder og fysiske bilder. Gud (JHWH) forstås som Skaperen av himmel og jord og er vesentlig forskjellig fra sitt skaperverk.
      `,

            objectiveCritique: `
Det filosofiske problemet som reises her, gjelder ikke så mye selve transcendensen, men grensene for Guds universalitet, slik det kommer frem i enkelte passasjer i den hebraiske bibelen. Visse tekster fremstiller Gud i et paktforhold, sterkt rettet mot Israels barn, noe som av kritikere tolkes som etnisk eksklusivt.

I tillegg bruker noen passasjer menneskelig språk for å beskrive Gud, som å "angre" på skapelsen av mennesket (1. Mosebok 6:6) eller å "hvile" på den syvende dagen etter skapelsen (2. Mosebok 31:17). Kritikere hevder at slike beskrivelser reiser spørsmål om hvorvidt disse egenskapene skal forstås bokstavelig eller metaforisk.
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
Kristendommen lærer troen på én Gud gjennom læren om Treenigheten: Faderen, Sønnen og Den hellige ånd. Ifølge læren om inkarnasjonen trådte den andre personen i Treenigheten – Sønnen – inn i menneskehetens historie i skikkelse av Jesus Kristus, som ble korsfestet og døde for menneskehetens frelse.
      `,

            objectiveCritique: `
Filosofisk hevder kritikere at læren om inkarnasjonen skaper en spenning mellom guddommelige og menneskelige egenskaper. Tradisjonelt beskrives Gud som evig, ubegrenset og hinsides døden, mens mennesker beskrives som begrensede, sårbare og dødelige.

Utfordringen oppstår når full guddommelighet og full menneskelighet forenes i én person. Kritikere spør seg hvordan et evig og selvstendig vesen samtidig kan oppleve sult, søvn, lidelse og død. Dette problemet formuleres ofte som en spenning mellom transcendens og inkarnasjon, fremfor bare et teologisk mysterium.
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
Islam presenterer et konsept om Gud som er fullstendig transcendent og udelelig. Koranen oppsummerer dette konseptet i Surah Al-Ikhlas:

"Si: 'Han er Allah, den Ene. Allah, den Selvforsynte. Han har ikke avlet, og er ikke avlet. Og det er ingen som er lik Ham.'" (Koranen 112:1–4)

I islam står Skaperen fullstendig utenfor materiell form og er forskjellig fra skaperverket:

"Ingenting er som Ham." (Koranen 42:11)

Gud er ikke bundet av tid, rom eller fysiske begrensninger. Koranen uttaler også:

"Hverken døsighet eller søvn overmanner Ham." (Koranen 2:255)

I islamsk teologi forstås Gud som et selvstendig, evig, uavhengig og absolutt vesen, skilt fra skaperverket.
      `,

            objectiveCritique: `
Fra et islamsk filosofisk perspektiv tilstreber dette konseptet å bevare absolutt transcendens ved å unngå antropomorfisme og inkarnasjon. Dette konseptet tar sikte på å bringe Skaperen i tråd med ideen om en uavhengig og nødvendig første årsak, som ikke er underlagt grensene for den skapte eksistensen.
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

        title: 'Hva er livsførselen og formålet?',

        intro: `
Hvis det finnes en vis Skaper, er det irrasjonelt å anta at menneskeheten er overlatt til seg selv uten retningslinjer som forklarer eksistensens formål, moralsk ansvar og prinsipper man bør følge. Akkurat som komplekse systemer trenger instruksjoner fra sin designer, hevder religioner å tilby et rammeverk som hjelper mennesket å forstå hvorfor vi er her og hvordan vi bør leve.
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',

            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
Østlige tradisjoner som buddhisme og hinduisme baserer seg vanligvis på filosofiske læresetninger, meditasjonspraksis og refleksjon utviklet av åndelige lærere og vismenn.

I buddhismen er det endelige målet frigjøring fra lidelse og unnslippelse fra gjenfødelsessyklusen ved å oppnå Nirvana – en tilstand av transcendens og indre frigjøring.

I mange hinduistiske tradisjoner er målet åndelig frigjøring (Moksha), oppnåelig gjennom hengivenhet, kunnskap, meditasjon eller disiplinert handling.
      `,

            objectiveCritique: `
Kritikere hevder at disse systemene primært er filosofiske og erfaringsbaserte, fremfor å være basert på verifiserbar åpenbaring fra en transcendent Skaper.

Noen hevder også at den sterke vektleggingen av tilbaketrekning fra det verdslige liv, klostertilværelse og selvfornektelse kan kollidere med aspekter ved menneskelig natur som stimulerer sosial utvikling, vitenskapelig fremgang, familieliv og sivilisasjon.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Jødedom',

            answerNature: `
I jødedommen er livsførselen forankret i paktloven som ble åpenbart til Moses og bevart i den hebraiske bibelen (Tanakh). Det religiøse rammeverket fokuserer på lydighet mot guddommelige bud og opprettholdelsen av paktforholdet mellom Gud og Israels barn.
      `,

            objectiveCritique: `
Kritikere hevder at jødedommen historisk sett utviklet seg som en tradisjon rettet mot pakten med et spesifikt folk, fremfor som en universell misjonsreligion for hele menneskeheten.

Fra et tekstanalyse-perspektiv hevder enkelte forskere – deriblant Richard Elliott Friedman – at Toraen gjennom århundrene har gjennomgått komplikasjons- og redigeringsprosesser, spesielt rundt den babylonske fangenskapet og tiden etter. Dette fører til at enkelte kritikere tviler på om teksten kan betraktes som en perfekt bevart åpenbaring i sin opprinnelige form.
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
Kristendommen lærer at menneskehetens sentrale problem er synd og adskillelse fra Gud, og at frelse oppnås gjennom tro på Jesu offerdød og oppstandelse. Derfor forstås livets formål gjennom forsoning med Gud og åndelig transformasjon.
      `,

            objectiveCritique: `
Historisk sett bemerker forskere at det ikke finnes originale manuskripter av evangeliene på arameisk (Jesu språk) bevart. De eldste bevarte tekstene er greske manuskripter, skrevet tiår etter Jesu liv. Tekstkritikere som Bart Ehrman har dokumentert utallige varianter i tidlige kopier av Det nye testamente.

Kritikere hevder også at kristendommen historisk sett la større vekt på åndelig og personlig frelse enn på å bygge et omfattende juridisk eller politisk rammeverk for økonomi, strafferett eller statsstyre. Noen historikere mener dette bidro til det endelige skillet mellom kirke og stat i mange vestlige samfunn.
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
Islam tilbyr en omfattende forståelse av menneskets formål ved å integrere åndelig hengivenhet og verdslig ansvar.

Koranen uttaler:

"Jeg har skapt menneskene og jinnene bare for at de skal tjene Meg." (Koranen 51:56)

I islamsk tenkning er tilbedelse ikke begrenset til ritualer, men inkluderer rettskaffen handling, rettferdighet, etisk adferd, søken etter kunnskap og et positivt bidrag til samfunnet.

Islamsk lære tilstreber balanse mellom åndelig vekst og praktisk deltakelse i familieliv, økonomi, styre, veldedighet og sosialt ansvar.
      `,

            objectiveCritique: `
Fra et islamsk perspektiv representerer Koranen en unikt bevart åpenbaring. Muslimer hevder at teksten har forblitt uendret og kontinuerlig blitt overlevert via skriftlige manuskripter og muntlig memorering siden islams tidlige generasjoner.

Mye siterte eksempler er gamle tekster som Birmingham-Koranmanuskriptet og den enorme tradisjonen med muntlig memorering som vedlikeholdes av millioner av muslimer verden over.

Islamsk lov (Sharia) presenteres også som et etisk og juridisk rammeverk som dekker områder som finans, veldedighet, familierett, strafferett og styre. Tilhengere hevder at dette gir islam kjennetegnene til et komplett moralsk- og sivilisasjonssystem, fremfor bare en åndelig tradisjon.
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

        title: 'Hva skjer etter endestasjonen?',

        subtitle: 'Skjebne, rettferdighet og det hinsidige',

        intro: `
Uten eksistensen av en endelig rettferdighet etter døden kan livet føles veldig vilkårlig og moralsk uløst. Tyranner kan dø uten å stå til ansvar, og ofre kan forlate verden uten å få rettferdighet. Dette reiser et av menneskehetens eldste filosofiske spørsmål: Er døden slutten, eller finnes det en siste dom hinsides det jordiske liv?
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',

            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
Mange østlige tradisjoner aksepterer konseptet om reinkarnasjon, der sjelen eller bevissthetsstrømmen går gjennom gjentatte sykluser av gjenfødelse. Et individs fremtidige tilstand bestemmes av karma: de moralske konsekvensene av tidligere handlinger.
      `,

            objectiveCritique: `
Kritikere hevder at reinkarnasjon reiser filosofiske spørsmål om rettferdighet og ansvar. Hvis noen i et nytt liv bærer konsekvensene av handlinger fra en tidligere eksistens som de ikke bevisst kan huske, blir straffens oppdragende og moralske formål vanskelig å forstå.

Fra dette perspektivet virker ansvar uten bevisst minne koblet fra meningsfullt moralsk ansvar.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialisme og ateisme',

            answerNature: `
Materialistiske og ateistiske verdensbilder betrakter vanligvis døden som slutten på bevisst eksistens. Mennesker forstås som biologiske organismer hvis bevissthet stopper fullstendig etter den fysiske døden.
      `,

            objectiveCritique: `
Kritikere hevder at streng materialisme har problemer med å tilby et objektivt grunnlag for moral, rettferdighet og fundamental mening. Hvis både undertrykkeren og offeret til slutt forsvinner inn i intetheten uten å stå til ansvar, kan begreper som oppofrelse, moralsk plikt og rettferdighet virke subjektive eller sosialt konstruerte, fremfor universelt bindende.

Tilhengere av sekulær etikk hevder imidlertid at moral fortsatt kan oppstå gjennom fornuft, empati og sosialt ansvar, uten tro på et hinsidig liv.
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
Kristendommen lærer at frelse og evig liv oppnås gjennom tro på Jesus Kristus og aksept av Hans offer for menneskehetens synder. Himmelen og evig frelse er tett knyttet til tro på Kristus og guddommelig nåde.
      `,

            objectiveCritique: `
Kritikere spør seg hvordan frelse som primært er basert på tro, forholder seg til universelle prinsipper om rettferdighet. Filosofisk hevder noen at dette rammeverket kan bety at en moralsk god person som ærlig strever med å akseptere visse teologiske dogmer, kan nektes frelse, mens en annen person som begikk alvorlige forbrytelser, men trodde i siste liten, kan motta den evige belønningen.

Kristne teologer svarer ofte at frelse innebærer både oppriktig tro og autentisk omvendelse, fremfor bare en muntlig bekjennelse.
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
Islam presenterer det hinsidige som et system av absolutt moralsk ansvar og guddommelig rettferdighet.

Koranen uttaler:

"Ingen sjel skal bære en annens byrde." (Koranen 6:164)

Frelse i islam er konsekvent knyttet til tro og gode gjerninger:

"Og forkynn for dem som tror og gjør gode gjerninger..." (gjentatt gjennom hele Koranen, inkludert 2:25)

Islam lærer at det jordiske liv er en midlertidig prøvelse, ikke et sted for endelig belønning eller straff:

"Han som skapte døden og livet for å prøve dere, hvem av dere som er best i handling." (Koranen 67:2)
      `,

            objectiveCritique: `
I islamsk teologi representerer Dommens dag den ultimate domstolen hvor hver handling, uansett hvor liten, vil bli gjort rede for.

Koranen uttaler:

"Den som har gjort en atoms vekt av godt, skal se det. Og den som har gjort en atoms vekt av ondt, skal se det." (Koranen 99:7–8)

Dette rammeverket tilstreber å bevare både individuelt ansvar og absolutt rettferdighet, samtidig som det tilbyr den moralske vissheten om at ingen handling av undertrykkelse eller godhet til slutt forblir uten konsekvenser.
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
      navbar: 'Religionssammenligning',
      hero: {
        subtitle:
          'En rolig, dyp filosofisk reise gjennom menneskehetens største spørsmål: Skaperen, eksistensens formål, moral og hva som venter etter døden.',

        subtitleHighlight:
          'Skaperen, eksistensens formål, moral og hva som venter etter døden.',

        scrollIndicator: 'Skroll ned for å starte reisen',
      },

      storySection: {
        badge: 'Toganali',

        titleLine1: 'Før du stiller spørsmålene',
        titleLine2: 'Om religion...',

        intro:
          'Hvert menneske når til slutt et øyeblikk av stillhet når distraksjonene forsvinner – og de dypeste spørsmålene endelig kommer til overflaten.',

        ending: 'Dette toget er planeten Jorden,',
        ending2: 'og reisen er ditt eget liv.',
      },

      coreQuestions: {
        sectionLabel: 'Kjerneseksjoner',
        title: 'Fundamentale spørsmål',

        answerNatureTitle: 'Svarets natur',

        philosophicalDiscussionTitle: 'Filosofisk diskusjon',

        referencesTitle: 'Referanser',
      },

      futureResearch: {
        sectionLabel: 'Fremtidig forskning',

        title: 'Andre spørsmål',

        loaderBadge: 'Flere spørsmål under forberedelse',

        headingLine1: 'Reisen',
        headingLine2: 'fortsetter...',

        description:
          'Ytterligere filosofisk og teologisk forskning studeres og forberedes ved hjelp av den samme strukturerte sammenlignende tilnærmingen.',

        topics: [
          'Moral',
          'Vitenskap',
          'Mirakler',
          'Bevissthet',
          'Fri vilje',
          'Lidelse',
          'Historisk overlevering',
          'Profetier',
          'Menneskelig natur',
          'Mening',
          'Sivilisasjon',
          'Etikk',
        ],

        footer: 'Nye seksjoner vil bli lagt til snart',
      },

      imageAlt: {
        hero: 'Religionssammenligning',
      },
    },
  },
};
