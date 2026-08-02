export default {
  splash: {
    version: 'version',
    practice: 'øvelse',
    share: 'del',
    logo: 'global islam',
  },
  homeApp: {
    north: 'nord',
    east: 'øst',
    west: 'vest',
    south: 'syd',
    active: 'qibla aktiv',
    disabled: 'Åbn Qibla-kompas',
    welcome: 'Velkommen tilbage',
    greet: 'Assalamu Alaikum',
    hour: 'time',
    minute: 'minut',
    second: 'sekund',
    toLeft: 'til din venstre',
    toRight: 'til din højre',
    fromNorth: 'fra nord',
  },
  quranApp: {
    medinan: 'Medinansk',
    meccan: 'Mekkansk',
    arabicName: 'navn på arabisk',
    englishName: 'navn på engelsk',
    details: 'Vælg et vers for at se dets oversættelse og tafsir (forklaring)',
    selectRes: 'Vælg ressource',
    retry: 'prøv igen',
    loadErr1: 'Kunne ikke indlæse forklaringen. Prøv igen.',
    loadErr2: 'Hentning mislykkedes',
    author: 'forfatter',
    explain: 'Forklaring',
  },
  qiblaApp: {
    compass: 'Qibla-kompas',
    accuracy: 'nøjagtighed',
    offline: 'GPS offline',
    tracking: 'GPS-sporing',
    aligned: 'Du vender mod Qibla. Hold stabil for præcis bederetning.',
    notAligned: 'Hold din enhed flad og drej indtil pilen peger mod Qibla.',
    heading: 'Enhedens retning',
    turn: 'drej',
    alignedQibla: 'Justeret med Qibla',
  },
  aiApp: {
    answer: 'svar',
  },
  prayerApp: {
    locationRequired:
      'Placeringstjenester er påkrævet for nøjagtige bedetider.',
    schedule: 'Bedeplan',
    refresh: 'opdater',
    sunrise: 'Solopgang',
    upcoming: 'Kommende bøn',
  },
  settingsApp: {
    reciterTitle: 'Adhan-recitator',
    reciterSub: 'Vælg din foretrukne stemme',
    notSelected: 'ikke valgt',
    preview: 'forhåndsvisning',
    cancel: 'annuller',
    muezzin: 'Muezzin',
    preNot: 'Forhåndsmeddelelse før Adhan',
    preNotDet: 'Giv besked 15 minutter før bedetid',
    theme: 'Mørk tilstand',
    dark: 'Nuværende mørkt tema',
    light: 'Nuværende lyst tema',
    about: 'Om',
    selectReciter: 'Vælg recitator',
  },
  athan: {
    mainTitle: 'ADHAN · KALD TIL BØN',
    stop: 'Stop Adhan',
    error: 'Kunne ikke indlæse Adhan-lyd',
    prayerTime: 'Bedetid',
    play: 'afspil',
    pause: 'pause',
    dismiss: 'luk',
  },
  athkarApp: {
    completed: 'Afsluttet',
    remaining: 'tilbage',
    reset: 'nulstil',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Begynd din dag med velsignelser',
    descE: 'Afslut din dag med beskyttelse',
    remmember: 'Daglig Erindring',
    cat: 'kategorier af bønner',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Søg hadith...',
      button: 'Søg',
      books: {
        label: 'Bog',
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
      title: 'Det nuværende sprog understøttes endnu ikke',
      msg: 'Dette sprog understøttes i øjeblikket ikke af hadith-databasen.',
      description:
        'Engelsk er valgt automatisk som standardsprog, så du stadig kan søge og browse problemfrit. Du kan også prøve Avanceret tilstand for bredere flersproget støtte og bedre resultater.',
    },

    initialPlaceholder:
      'Søg efter en hadith for at se detaljer som vurdering, overleverere og reference',

    loading: {
      label: 'Indlæser hadither...',
    },

    hadithCard: {
      showMore: 'Vis mere',
      showLess: 'Vis mindre',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referencer',
        referenceLabel: 'Reference',
        inBookReference: 'Reference i bog',
        arabicReference: 'Arabisk reference',
      },
    },

    emptyState: 'Ingen hadither fundet',

    pagination: {
      prev: 'Forrige',
      next: 'Næste',
    },
  },

  switch: {
    title: {
      advanced: 'Avanceret tilstand',
      normal: 'Normal tilstand',
    },

    description: {
      advanced: 'Semantisk søgning med dybere forståelse',
      normal: 'Hurtig filterbaseret søgning',
    },
  },

  navbar: {
    routes: {
      home: 'Hjem',
      prayers: 'Bønner',
      quran: 'Koranen',
      athkar: 'Adhkar',
      articles: 'Artikler',

      articlesNested: {
        islamicHistory: 'Islamisk historie',
        prayerInIslam: 'Bøn i islam',
        womenInIslam: 'Kvinder i islam',
        purification: 'Renselse og afvaskning',
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
      explore: 'Udforsk islam med',
      clarity: 'Klarhed',
      peace: '& Fred',
    },

    description:
      'Lær, stil spørgsmål og opdag autentisk forståelse gennem AI og vejledt viden designet til klarhed og refleksion.',

    actions: {
      introductionToIslam: 'Lær om islam',
      islamQA: 'Islam Q&A (AI-assistent)',
      continueWebsite: 'Fortsæt til hjemmesiden',
    },
  },
  learning: {
    quran: {
      title: 'Lær Koranen og Tajweed',
      subtitle:
        'Forbedr din koranrecitation og forstå Tajweed-reglerne trin for trin.',
    },
    arabic: {
      title: 'Lær arabisk',
      subtitle:
        'Opbyg dine arabiske sprogfærdigheder gennem klare og strukturerede lektioner.',
    },
    default: {
      title: 'Læringssektion',
      subtitle:
        'Udforsk undervisningsindhold designet til at styrke din viden og forståelse.',
    },
  },
  explore: {
    searchBar: {
      title: 'Søg i hadith-samlinger',

      subtitle: 'Søg naturligt med emner, betydninger eller hele sætninger.',

      placeholder: 'Eksempel: hadith om venlighed mod forældre',

      button: 'Søg',
    },

    header: {
      title: 'Hadith-søgebibliotek',
      subtitle:
        'Udforsk autentiske hadither øjeblikkeligt med en moderne læseoplevelse.',
    },

    content: {
      heroTitle: 'Opdag autentiske hadith-samlinger med kraftfuld søgning',

      loading: {
        label: 'Søger i hadith-samlinger...',
      },

      error: {
        title: 'Kunne ikke indlæse hadith',
        message:
          'Vi kunne ikke hente overleveringerne lige nu. Tjek din forbindelse og prøv igen.',
      },

      empty: {
        title: 'Ingen matchende hadither fundet',
      },

      card: {
        reference: 'Hadith-reference',
        readMore: 'Læs hele hadithen',
      },
    },
  },

  home: {
    news: {
      title: 'Opdateringer fra det muslimske fællesskab',
      subtitle:
        'Hold dig opdateret med vigtige nyheder fra den muslimske verden',
    },

    prayer: {
      title: 'Nedtælling til bøn',
      subtitle: 'Forbered dig til næste bøn',
      button: 'Se bedetider',
      nextPrayerLabel: 'Næste bøn:',
    },

    athkar: {
      title: 'Morgen- og aften-adhkar',
      subtitle: 'Daglige påmindelser der holder dit hjerte forbundet',
      button: 'Se flere adhkar',
    },

    qibla: {
      title: 'Qibla-retning',
      subtitle: 'Find retningen mod Kaaba uanset hvor du er',
      locationLoading: 'Henter din placering...',
      enableLocation: 'Aktivér placering',
      refreshLocation: 'Opdater qibla-retning',

      warning:
        'Hvis din enhed ikke understøtter orienteringssensorer, kan kompasnøjagtigheden blive påvirket.',

      errorTitle: 'Adgang nægtet',
    },
  },

  prayers: {
    nextLabel: 'Næste bøn:',

    header: {
      title: 'Bedetider',
      subtitle: 'Et dagligt øjeblik af forbindelse til din Skaber',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Henter din placering...',
      warning:
        'Hvis dit styresystem ikke understøtter orientering, påvirker det kompasberegningen.',
      errorTitle: 'Adgang nægtet',
      enableLocation: 'Aktivér placering',
      refreshLocation: 'Opdater qibla-retning',
    },

    list: {
      warning: 'Tidspunkter kan variere lidt afhængigt af beregningsmetoden.',
    },
  },

  quran: {
    header: {
      title: 'Koranen',
      subtitle: 'Din daglige ledsager til recitation og refleksion',
    },

    search: {
      noResultTitle: 'Ingen data',
      noResultMessage: 'Ingen data at vise',
    },
  },

  athkar: {
    title: 'Daglige dhikr',
    subtitle: 'Bevar kontinuitet i din daglige ihukommelse og refleksion',
  },

  ai: {
    header: {
      title: 'Global islamisk AI-assistent',
      subtitle:
        'Få klare islamiske svar baseret på Koranen, Sunnah og pålidelige lærde',
    },

    loading: {
      label: 'Indlæser...',
    },

    error: {
      title: 'Anmodningsgrænse nået',
      message: 'Kan ikke tilgå vidensservicen lige nu. Prøv igen senere.',
    },

    input: {
      placeholder: 'Stil et spørgsmål om islam...',
    },

    suggestions: [
      'Må jeg bede uden wudu?',
      'Er rente (riba) fuldstændigt forbudt?',
      'Regler for arbejde i ikke-halal miljø',
      'Må jeg bede under rejse?',
      'Er parfume tilladt under bøn?',
      'Hvad ugyldiggør bønnen?',
      'Regler for at udskyde bøn på grund af arbejde',
    ],

    footer: {
      disclaimer:
        'Denne AI-assistent er designet til at give svar baseret på pålidelige videnskilder, herunder islamiske referencer og verificeret undervisningsmateriale.',

      note: 'Svar er kun til informationsformål og erstatter ikke lærdes vejledning, hvor det er nødvendigt.',
    },
  },

  footer: {
    disclaimer:
      'Alt indhold stammer fra originale pålidelige kilder. Feedback og fejlrapportering er velkomne.',

    tagline: 'Bygget med omtanke for autentisk islamisk indhold',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Tilbage',
    },

    sections: {
      hadithText: 'Hadith-tekst',
      arabicText: 'Arabisk tekst',
      explanation: 'Forklaring',
      authentication: 'Autenticitet',
      lessons: 'Fordele & lærdomme',
    },
  },
  other: {
    part: 'Del',
    translation: 'Oversættelse',
    verse: 'Vers',
    chapter: 'Kapitel',
    page: 'Side',
    breakingNews: 'Seneste nyt',
  },
  dailyRemined: {
    title: 'Dagens Lys',
    subtitle:
      'Tag en pause og reflekter over et vers og en hadith valgt til din dag.',
  },
  baseFooter: {
    contact: {
      title: 'Kontakt os',
      name: 'Dit navn',
      email: 'Din e-mail',
      msg: 'Din besked',
      sendMsg: 'Send besked',
    },
    followUs: 'Følg os',
    QA: 'Hurtig adgang',
    logoB:
      'Koran, Hadith, bedetider, AI-assistent og daglige islamiske værktøjer—all på én moderne platform.',
    whatsapp: 'Chat på WhatsApp',
    rsr: 'Alle rettigheder forbeholdes',
  },
  compareRelg: {
    note: `Denne side præsenterer en komparativ oversigt over de store verdensreligioner. Ud fra et islamisk perspektiv bekræfter Koranen, at tidligere guddommelige åbenbaringer blev sendt til tidligere nationer, men at de med tiden undergik menneskelige ændringer (tahrif). Koranen erklærer: "Det er Vi, der har nedsendt ihukommelsen, og Vi vil sandelig vogte den" (15:9). Denne side undersøger disse forskelle i lyset af historisk og tekstuel evidens.`,
    mainTitle: 'En rationel rejse gennem religioner',
    headerTitle: 'Spørgsmål, der definerer menneskelig eksistens',
    story: `
Forestil dig, at du pludselig åbner øjnene og opdager, at du sidder i et luksuriøst tog, der bevæger sig med enorm hastighed gennem en endeløs nat. Rundt omkring dig findes enhver tænkelig komfort: overdådige måltider på elegante borde, lysende skærme der viser film, og bløde silkepuder på behagelige sæder.

Du vender dig mod passagererne ved siden af dig og spørger ængsteligt:
"Hvor er vi? Hvem har sat os på dette tog? Og hvor er vi på vej hen?"

Men det virkelige chok kommer fra deres reaktioner.

En af dem svarer koldt:
"Hvorfor betyder det noget? Smag på maden — den er fantastisk."

En anden siger hånligt:
"Hvorfor bekymre sig om sådanne spørgsmål? Bare slap af og nyd filmen."

Alle omkring dig er opslugt af rejsens fornøjelser og distraktioner, men en dyb kulde går gennem dig — fordi du med sikkerhed ved, at dette tog er på vej mod en endelig destination, en station hvor hver passager til sidst vil stige af.

Og i det øjeblik opstår det virkelige spørgsmål:

Vil du miste dig selv i rejsens luksus og underholdning, eller vil du fortsætte med at søge svar på de tre dybeste spørgsmål:

Hvem er Skaberen?
Hvorfor er vi her?
Og hvad venter os til sidst?

Dette tog er planeten Jorden, og rejsen er dit liv.

Og fordi mennesker ikke selv besidder disse svar, opstod religioner som “vejledninger”, hvor hver hævder at komme fra selve togets Designer.

Lad os placere disse “manualer” under et roligt og rationelt undersøgende lys.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Hvem er Skaberen?',

        intro: `
Fra et filosofisk og logisk perspektiv må universets “første årsag” — Skaberen — være fuldstændig transcendent, hinsides materie, tid og rum. Hvis Skaberen var underlagt sult, træthed, fysiske begrænsninger eller rumlig afhængighed, ville et sådant væsen logisk set ikke være en absolut Skaber, men en afhængig skabt entitet. Et afhængigt væsen kan ikke være den ultimative kilde til al eksistens.
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',
            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
I sin tidligste theravāda-form er buddhismen generelt ikke-teistisk; den fokuserer ikke på eksistensen af en skabergud, men ser i stedet eksistens som opstået gennem evige naturlige processer, kausalitet og sammenkoblede love.

Hinduisme taler på den anden side ofte om en ultimativ metafysisk virkelighed kaldet “Brahman”. Men i praktisk tilbedelse udtrykkes denne højeste virkelighed gennem utallige manifestationer og guddomme, inklusive menneskelige og dyrelignende former som Vishnu, Shiva og Kali.
      `,

            objectiveCritique: `
Fra et filosofisk synspunkt står buddhismen over for udfordringen med at forklare, hvordan et højt ordnet univers styret af konsistente love og fysisk præcision kan opstå uden en oprindelig intelligent årsag.

I hinduistiske traditioner, der accepterer guddommelig inkarnation og fysiske repræsentationer, forbindes det guddommelige med begrænsning, konflikt, sult, død og materiel form. En guddom, der kan repræsenteres fysisk, inkarneres eller underlægges naturlige processer, fremstår fra et rationelt perspektiv som en del af skabelsen snarere end fuldstændig transcendent.
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
Jødedommen bekræfter troen på én Skaber, som er hævet over afguder og fysisk repræsentation. Gud (YHWH) forstås som skaberen af himlen og jorden og fundamentalt adskilt fra skabelsen.
      `,

            objectiveCritique: `
Den filosofiske bekymring her handler ikke primært om transcendens i sig selv, men om en opfattet begrænsning af Guds universalitet i visse bibelske passager. Nogle tekster fremstiller Gud i en pagt primært centreret omkring Israel, hvilket kritikere tolker som etnisk eksklusivt.

Derudover beskriver nogle passager Gud med menneskelige udtryk, såsom at “fortryde” at have skabt mennesket (1 Mosebog 6:6) eller at “hvile” på den syvende dag (2 Mosebog 31:17). Kritikere mener, at dette rejser spørgsmål om bogstavelig vs. metaforisk forståelse.
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
Kristendommen lærer troen på én Gud gennem læren om treenigheden: Faderen, Sønnen og Helligånden. Ifølge inkarnationslæren trådte den anden person i treenigheden — Sønnen — ind i menneskets historie i Jesus Kristus, som blev korsfæstet og døde for menneskehedens frelse.
      `,

            objectiveCritique: `
Filosofisk hævder kritikere, at inkarnationslæren skaber en spænding mellem guddommelige og menneskelige egenskaber. Gud beskrives traditionelt som evig, ubegrænset og ude af stand til at dø, mens mennesker er begrænsede og dødelige.

Problemet opstår, når fuld guddommelighed og fuld menneskelighed forenes i én person. Kritikere spørger, hvordan et evigt væsen samtidig kan opleve sult, søvn, lidelse og død.
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
Islam præsenterer et strengt transcendent og udeleligt Gudsbegreb. Koranen opsummerer dette i sura Al-Ikhlas:

“Sig: Han er Allah, Én. Allah, Den Evige Tilflugt. Han føder ikke og er ikke født, og ingen er Hans lige.” (Koran 112:1–4)

Skaberen i islam er fuldstændigt hinsides materie og adskilt fra skabelsen:

“Der er intet som Ham.” (Koran 42:11)

Gud er ikke begrænset af tid, rum eller fysiske begrænsninger. Koranen siger også:

“Hverken døsighed eller søvn overvælder Ham.” (Koran 2:255)

I islamisk teologi forstås Gud som selvstændig, evig og absolut forskellig fra skabelsen.
      `,

            objectiveCritique: `
Fra et islamisk filosofisk perspektiv søger dette syn at bevare absolut transcendens og undgå antropomorfisme og inkarnation. Begrebet stemmer overens med ideen om en nødvendig første årsag.
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

        title: 'Hvad er livets metode og formål?',

        intro: `
Hvis en vis Skaber eksisterer, ville det være urimeligt at antage, at menneskeheden blev efterladt uden vejledning om eksistensens formål, moralsk ansvar og livets principper. Ligesom et komplekst system kræver instruktioner fra sin skaber, hævder religioner at give en ramme for, hvorfor vi er her, og hvordan vi bør leve.
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',
            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
Østlige traditioner som buddhisme og hinduisme bygger generelt på filosofiske læresætninger, meditation og refleksion udviklet af spirituelle lærere.

I buddhismen er det endelige mål frigørelse fra lidelse og genfødselscyklus gennem opnåelse af nirvana.

I mange hinduistiske traditioner er målet spirituel frigørelse (moksha) gennem hengivenhed, viden eller meditation.
      `,

            objectiveCritique: `
Kritikere hævder, at disse systemer primært er filosofiske og erfaringsbaserede snarere end baseret på åbenbaring fra en transcendent Skaber.

Nogle mener også, at fokus på afkald kan stå i kontrast til menneskelige behov for samfund, udvikling og civilisation.
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
I jødedommen er livets metode baseret på pagtsloven givet til Moses og bevaret i den hebraiske bibel. Fokus er lydighed mod Guds bud og pagten mellem Gud og Israel.
      `,

            objectiveCritique: `
Kritikere hævder, at jødedommen historisk primært udviklede sig som en folkebaseret pagtstradition snarere end en universel missionerende religion.

Nogle forskere diskuterer også Torahs redaktionelle historie.
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
Kristendommen lærer, at menneskets problem er synd og adskillelse fra Gud, og at frelse kommer gennem tro på Jesus Kristus og hans opstandelse. Livets formål er forsoning med Gud og åndelig forvandling.
      `,

            objectiveCritique: `
Historikere bemærker, at de oprindelige evangelie-manuskripter ikke findes. De ældste tekster er på græsk og blev skrevet årtier efter Jesu liv. Tekstkritik viser variationer i manuskripter.

Kritikere siger også, at kristendommen lægger mere vægt på åndelig frelse end på et juridisk system.
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
Islam giver et helhedsorienteret syn på menneskets formål, der kombinerer tilbedelse og ansvar.

Koranen siger:

“Jeg skabte ikke jinner og mennesker, undtagen for at tilbede Mig.” (Koran 51:56)

Tilbedelse inkluderer handlinger, retfærdighed og etik.

Islam balancerer det spirituelle og det praktiske liv.
      `,

            objectiveCritique: `
Fra islamisk perspektiv er Koranen en bevaret åbenbaring overleveret mundtligt og skriftligt.

Sharia præsenteres som et komplet moralsk og juridisk system.
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

        title: 'Hvad sker der efter den sidste station?',

        subtitle: 'Skæbne, retfærdighed og livet efter døden',

        intro: `
Uden endelig retfærdighed efter døden kan livet virke uretfærdigt og ufærdigt. Tyranner kan dø uden ansvar, og ofre uden retfærdighed. Dette rejser spørgsmålet: er døden slutningen, eller findes der en endelig dom?
  `,

        religions: {
          eastern: {
            title: 'Østlige religioner',

            examples: ['Hinduisme', 'Buddhisme'],

            answerNature: `
Mange østlige traditioner lærer om reinkarnation og karma.
      `,

            objectiveCritique: `
Kritikere udfordrer retfærdigheden i at lide uden hukommelse om tidligere handlinger.
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
Døden er afslutningen på bevidsthed.
      `,

            objectiveCritique: `
Kritikere hævder, at uden efterlivets retfærdighed bliver moral relativ.
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
Frelse og evigt liv opnås gennem tro på Kristus.
      `,

            objectiveCritique: `
Kritikere stiller spørgsmål ved retfærdigheden i frelse baseret på tro.
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
Islam lærer fuld moralsk ansvarlighed og dommens dag.

“Enhver atomvægt af godt og ondt vil blive set.”
      `,

            objectiveCritique: `
Fokus er på absolut retfærdighed og ansvar.
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
          'En rolig, men dyb filosofisk rejse gennem menneskets største spørgsmål.',

        subtitleHighlight:
          'Skaberen, eksistensens mening, moral og livet efter døden.',

        scrollIndicator: 'Scroll for at begynde rejsen',
      },

      storySection: {
        badge: 'Tog-analogien',

        titleLine1: 'Før vi spørger',
        titleLine2: 'om religion...',

        intro:
          'Alle mennesker når et øjeblik af stilhed, hvor distraktioner forsvinder.',

        ending: 'Dette tog er planeten Jorden,',
        ending2: 'og rejsen er dit liv.',
      },

      coreQuestions: {
        sectionLabel: 'Hovedsektion',
        title: 'Kerne spørgsmål',

        answerNatureTitle: 'Svarenes natur',

        philosophicalDiscussionTitle: 'Filosofisk diskussion',

        referencesTitle: 'Referencer',
      },

      futureResearch: {
        sectionLabel: 'Fremtidig forskning',

        title: 'Andre spørgsmål',

        loaderBadge: 'Flere spørgsmål kommer',

        headingLine1: 'Rejsen',
        headingLine2: 'fortsætter...',

        description: 'Yderligere undersøgelser er under forberedelse.',

        topics: [
          'Moral',
          'Videnskab',
          'Mirakler',
          'Bevidsthed',
          'Fri vilje',
          'Lidelse',
          'Historie',
          'Profetier',
          'Menneskelig natur',
          'Betydning',
          'Civilisationer',
          'Etik',
        ],

        footer: 'Nye sektioner kommer snart',
      },

      imageAlt: {
        hero: 'Religionssammenligning',
      },
    },
  },
};
