export default {
  splash: {
    version: 'versija',
    practice: 'prakse',
    share: 'kopīgot',
    logo: 'globālais islāms',
  },
  homeApp: {
    north: 'ziemeļi',
    east: 'austrumi',
    west: 'rieti',
    south: 'dienvidi',
    active: 'kibla aktīva',
    disabled: 'Atvērt Kiblas kompasu',
    welcome: 'Laipni lūdzam atpakaļ',
    greet: 'As-salamu alaikum',
    hour: 'stunda',
    minute: 'minūte',
    second: 'sekunde',
    toLeft: 'pa kreisi no jums',
    toRight: 'pa labi no jums',
    fromNorth: 'no ziemeļiem',
  },
  quranApp: {
    medinan: 'Medīnas',
    meccan: 'Mekas',
    arabicName: 'nosaukums arābiski',
    englishName: 'nosaukums angliski',
    details: 'Atlasiet āju, lai skatītu tulkojumu un tafsir (skaidrojumu)',
    selectRes: 'Atlasīt resursu',
    retry: 'mēģināt vēlreiz',
    loadErr1: 'Nevar ielādēt skaidrojumu. Lūdzu, mēģiniet vēlreiz.',
    loadErr2: 'Izgūšana neizdevās',
    author: 'autors',
    explain: 'Skaidrojums',
  },
  qiblaApp: {
    compass: 'Kiblas kompass',
    accuracy: 'precizitāte',
    offline: 'GPS bezsaistē',
    tracking: 'GPS izsekošana',
    aligned:
      'Jūs skatāties Kiblas virzienā. Turiet stabili precīzai lūgšanu virzienam.',
    notAligned:
      'Turiet ierīci horizontāli un grieziet, līdz bultiņa norāda uz Kiblu.',
    heading: 'Ierīces virziens',
    turn: 'griezt',
    alignedQibla: 'Saskaņots ar Kiblu',
  },
  aiApp: {
    answer: 'atbilde',
  },
  prayerApp: {
    locationRequired:
      'Precīziem lūgšanu laikiem nepieciešami atrašanās vietas pakalpojumi.',
    schedule: 'Lūgšanu grafiks',
    refresh: 'atjaunot',
    sunrise: 'Saullēkts',
    upcoming: 'Nākamā lūgšana',
  },
  settingsApp: {
    reciterTitle: 'Adhana recitētājs',
    reciterSub: 'Izvēlieties vēlamo balsi',
    notSelected: 'nav atlasīts',
    preview: 'priekšskatījums',
    cancel: 'atcelt',
    muezzin: 'Muezzins',
    preNot: 'Paziņojums pirms adhana',
    preNotDet: 'Paziņot 15 minūtes pirms lūgšanu laika',
    theme: 'Tumšais režīms',
    dark: 'Pašlaik tumšā tēma',
    light: 'Pašlaik gaišā tēma',
    about: 'Par',
    selectReciter: 'Atlasīt recitētāju',
  },
  athan: {
    mainTitle: 'ADHANS · AICINĀJUMS UZ LŪGŠANU',
    stop: 'Apturēt adhanu',
    error: 'Nevar ielādēt adhana audio',
    prayerTime: 'Lūgšanu laiks',
    play: 'atskaņot',
    pause: 'pauze',
    dismiss: 'aizvērt',
  },
  athkarApp: {
    completed: 'Pabeigts',
    remaining: 'atlikušais',
    reset: 'atiestatīt',
    athkar: 'Adhkar',
    mention: 'dhikr',
    descM: 'Sāciet dienu ar svētībām',
    descE: 'Beidziet dienu aizsardzībā',
    remmember: 'Ikdienas Atgādinājums',
    cat: 'lūgšanu kategorijas',
    category: 'Kategorija',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Meklēt hadīsu...',
      button: 'Meklēt',
      books: {
        label: 'Grāmata',
        options: {
          bukhari: 'Bukhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmidhi',
          abudawood: 'Abu Davud',
          nasai: 'Nasai',
          ibnmajah: 'Ibn Majah',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Pašreizējā valoda vēl netiek atbalstīta',
      msg: 'Šī valoda pašlaik nav atbalstīta hadīsu datu kopā.',
      description:
        'Angļu valoda tika automātiski izvēlēta kā rezerves valoda, lai jūs joprojām varētu netraucēti meklēt un pārlūkot hadīsus. Varat arī izmēģināt Paplašināto režīmu plašākam daudzvalodu atbalstam un labākiem rezultātiem.',
    },

    initialPlaceholder:
      'Meklējiet hadīsu, lai redzētu detaļas, piemēram, vērtējumu, pārsūtītājus un atsauces',

    loading: {
      label: 'Hadīsu ielāde...',
    },

    hadithCard: {
      showMore: 'Rādīt vairāk',
      showLess: 'Rādīt mazāk',

      header: {
        hadithPrefix: 'Hadīss #',
        referencesTitle: 'Atsauces',
        referenceLabel: 'Atsauce',
        inBookReference: 'Atsauce grāmatā',
        arabicReference: 'Arābu atsauce',
      },
    },

    emptyState: 'Hadīsi nav atrasti',

    pagination: {
      prev: 'Iepriekšējais',
      next: 'Nākamais',
    },
  },

  switch: {
    title: {
      advanced: 'Paplašinātais režīms',
      normal: 'Normālais režīms',
    },

    description: {
      advanced: 'Semantiskā meklēšana ar dziļāku izpratni',
      normal: 'Ātra filtrēta meklēšana',
    },
  },

  navbar: {
    routes: {
      home: 'Sākums',
      prayers: 'Lūgšanas',
      quran: 'Korāns',
      athkar: 'Zikr',
      articles: 'Raksti',

      articlesNested: {
        islamicHistory: 'Islāma vēsture',
        prayerInIslam: 'Lūgšana islāmā',
        womenInIslam: 'Sievietes islāmā',
        purification: 'Attīrīšana un mazgāšanās',
      },

      learn: 'Mācīties',
      learnNested: {
        quranTajweed: 'Mācīties Korānu un tajvīdu',
        arabic: 'Mācīties arābu valodu',
      },

      dashboard: 'Panelis',
      aiAssistant: 'AI asistents',
    },
  },
  hero: {
    title: {
      explore: 'Izpēti islāmu ar',
      clarity: 'skaidrību',
      peace: '& mieru',
    },

    description:
      'Mācies, uzdod jautājumus un atklāj autentisku izpratni, izmantojot mākslīgo intelektu un vadītas zināšanas, kas paredzētas skaidrībai un pārdomām.',

    actions: {
      introductionToIslam: 'Uzzini par islāmu',
      islamQA: 'Islāma jautājumi un atbildes (AI asistents)',
      continueWebsite: 'Turpināt uz vietni',
    },
  },
  learning: {
    quran: {
      title: 'Mācies Korānu un Tadžvīdu',
      subtitle:
        'Uzlabojiet savu Korāna lasīšanu un soli pa solim izprotiet Tadžvīda noteikumus.',
    },
    arabic: {
      title: 'Mācies arābu valodu',
      subtitle:
        'Attīstiet savas arābu valodas prasmes ar skaidrām un strukturētām nodarbībām.',
    },
    default: {
      title: 'Mācību sadaļa',
      subtitle:
        'Izpētiet izglītojošu saturu, kas paredzēts jūsu zināšanu un izpratnes stiprināšanai.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadisu kolekciju meklēšana',

      subtitle: 'Meklē dabiski, izmantojot tēmas, nozīmes vai pilnus teikumus.',

      placeholder: 'Piemērs: hadiss par laipnību pret vecākiem',

      button: 'Meklēt',
    },

    header: {
      title: 'Hadisu meklēšanas bibliotēka',
      subtitle:
        'Tūlīt izpēti autentiskus hadīsus ar mūsdienīgu lasīšanas pieredzi.',
    },

    content: {
      heroTitle: 'Atklāj autentiskas hadisu kolekcijas ar jaudīgu meklēšanu',

      loading: {
        label: 'Meklē hadisu kolekcijas...',
      },

      error: {
        title: 'Nevar ielādēt hadīsus',
        message:
          'Šobrīd nevarējām iegūt nostāstus. Pārbaudi savienojumu un mēģini vēlreiz.',
      },

      empty: {
        title: 'Nav atrasti atbilstoši hadīsi',
      },

      card: {
        reference: 'Hadisa atsauce',
        readMore: 'Lasīt pilnu hadīsu',
      },
    },
  },

  home: {
    news: {
      title: 'Musulmaņu kopienas jaunumi',
      subtitle: 'Esi informēts par svarīgākajiem jaunumiem musulmaņu pasaulē',
    },

    prayer: {
      title: 'Lūgšanu atskaite',
      subtitle: 'Sagatavojies nākamajai lūgšanai',
      button: 'Skatīt lūgšanu laikus',
      nextPrayerLabel: 'Nākamā lūgšana:',
    },

    athkar: {
      title: 'Rīta un vakara zikri',
      subtitle: 'Ikdienas atcerēšanās sirds savienojumam',
      button: 'Skatīt vairāk zikru',
    },

    qibla: {
      title: 'Kiblas virziens',
      subtitle: 'Atrodi Kaabas virzienu, lai kur tu būtu',
      locationLoading: 'Iegūst atrašanās vietu...',
      enableLocation: 'Iespējot atrašanās vietu',
      refreshLocation: 'Atjaunot kiblas virzienu',

      warning:
        'Ja ierīce neatbalsta orientācijas sensorus, kompasa precizitāte var tikt ietekmēta.',

      errorTitle: 'Atļauja liegta',
    },
  },

  prayers: {
    nextLabel: 'Nākamā lūgšana:',
    header: {
      title: 'Lūgšanu laiki',
      subtitle: 'Ikdienas saiknes brīdis ar Radītāju',
    },
    times: {
      Fajr: 'Fadžrs',
      Dhuhr: 'Duhra',
      Asr: 'Asrs',
      Maghrib: 'Magribs',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Iegūst atrašanās vietu...',
      warning:
        'Ja operētājsistēma neatbalsta orientāciju, tas ietekmēs kompasa aprēķinus.',
      errorTitle: 'Atļauja liegta',
      enableLocation: 'Iespējot atrašanās vietu',
      refreshLocation: 'Atjaunot kiblas virzienu',
    },

    list: {
      warning: 'Laiki var nedaudz atšķirties atkarībā no aprēķina metodes.',
    },
  },

  quran: {
    header: {
      title: 'Korāns',
      subtitle: 'Tavs ikdienas lasīšanas un pārdomu pavadonis',
    },

    search: {
      noResultTitle: 'Nav datu',
      noResultMessage: 'Nav ko parādīt',
    },
  },

  athkar: {
    title: 'Ikdienas zikri',
    subtitle: 'Esi konsekvents ikdienas atcerēšanās un pārdomās',
  },

  ai: {
    header: {
      title: 'Globālais islāma AI asistents',
      subtitle:
        'Saņem skaidras islāma atbildes, balstītas Korānā, Sunnā un uzticamās zināšanās',
    },

    loading: {
      label: 'Ielādē...',
    },

    error: {
      title: 'Sasniegts pieprasījumu limits',
      message:
        'Zināšanu pakalpojums šobrīd nav pieejams. Mēģini vēlreiz vēlāk.',
    },

    input: {
      placeholder: 'Uzdod jautājumu par islāmu...',
    },

    suggestions: [
      'Vai varu lūgt, ja man nav wudu?',
      'Vai procenti (riba) ir pilnībā aizliegti?',
      'Noteikumi par darbu ne-halal vidē',
      'Vai varu lūgt ceļojuma laikā?',
      'Vai drīkst lietot smaržas lūgšanas laikā?',
      'Kas anulē lūgšanu?',
      'Lūgšanu atlikšana darba dēļ',
    ],

    footer: {
      disclaimer:
        'Šis AI asistents sniedz atbildes, kas balstītas uz atlasītiem un uzticamiem zināšanu avotiem, tostarp islāma atsaucēm un pārbaudītiem izglītības materiāliem.',

      note: 'Atbildes ir informatīvas un neaizstāj zinātnieku padomu, ja tas nepieciešams.',
    },
  },

  footer: {
    disclaimer:
      'Visi attēlotie dati nāk no oriģināliem uzticamiem avotiem. Mēs gaidām atsauksmes un kļūdu ziņojumus pārskatīšanai un labošanai.',

    tagline: 'Veidots ar rūpību autentiska islāma satura sniegšanai',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadīss',
      backButton: 'Atpakaļ',
    },

    sections: {
      hadithText: 'Hadīsa teksts',
      arabicText: 'Arābu teksts',
      explanation: 'Paskaidrojums',
      authentication: 'Autentiskums',
      lessons: 'Mācības un ieguvumi',
    },
  },
  other: {
    note: 'Piezīme',
    theLanguage: 'valoda',
    part: 'Daļa',
    translation: 'Tulkojums',
    verse: 'Pants',
    chapter: 'Nodaļa',
    page: 'Lapa',
    breakingNews: 'Jaunākās ziņas',
  },
  dailyRemined: {
    title: 'Šodienas Gaisma',
    subtitle:
      'Apstājieties uz brīdi un pārdomājiet pantu un hadītu, kas izvēlēti jūsu dienai.',
  },
  baseFooter: {
    contact: {
      title: 'Sazinieties ar mums',
      name: 'Jūsu vārds',
      email: 'Jūsu e-pasts',
      msg: 'Jūsu ziņojums',
      sendMsg: 'Sūtīt ziņojumu',
    },
    followUs: 'Sekojiet mums',
    QA: 'Ātrā piekļuve',
    logoB:
      'Korāns, Hadīti, lūgšanu laiki, AI asistents un ikdienas islāma rīki—all vienā modernā platformā.',
    whatsapp: 'Tērzēt WhatsApp',
    rsr: 'Visas tiesības aizsargātas',
  },
  compareRelg: {
    note: `Šajā lapā ir sniegts salīdzinošs pārskats par galvenajām pasaules reliģijām. No islāma perspektīvas Korāns apstiprina, ka iepriekšējās dievišķās atklāsmes tika sūtītas agrākām tautām, taču laika gaitā tās piedzīvoja cilvēka veiktas izmaiņas (tahrif). Korānā ir teikts: "Patiesi, Mēs esam sūtījuši lejā Atgādinājumu, un patiesi, Mēs būsim tā sargātāji" (15:9). Šajā lapā šīs atšķirības tiek pētītas, balstoties uz vēsturiskiem un tekstuāliem pierādījumiem.`,
    mainTitle: 'Racionāls ceļojums caur reliģijām',
    headerTitle: 'Jautājumi, kas definē cilvēka eksistenci',
    story: `
Iedomājieties, ka pēkšņi atverat acis un saprotat, ka sēžat greznā vilcienā, kas lielā ātrumā traucas cauri bezgalīgai naktij. Jums apkārt ir visi iedomājamie ērtumi: krāšņas maltītes uz elegantiem galdiem, mirdzoši ekrāni, kuros rāda filmas, un zīda spilveni uz mīkstiem sēdekļiem.

Jūs ar nemieru vēršaties pie blakussēdētāja:
"Kur mēs atrodamies? Kas mūs iesēdināja šajā vilcienā? Un uz kurieni mēs dodamies?"

Taču patiesais pārsteigums ir viņu reakcija.

Viens atcērt auksti:
"Kāda tev starpība? Vienkārši izbaudi ēdienu, tas ir neticams."

Cits paņirgājoties atbild:
"Kāpēc tu mocies ar tādiem jautājumiem? Vienkārši atpūties un skaties filmu."

Visi apkārtējie ir iegrimuši ceļojuma baudās un izklaidēs, taču jūs pārņem dziļas bailes, jo zināt, ka šis vilciens traucas uz galapunktu – staciju, kurā ikvienam pasažierim galu galā būs jāizkāpj.

Un tajā mirklī rodas īstais jautājums:

Vai jūs nodosieties ceļojuma greznībai un izklaidēm, vai arī turpināsiet meklēt atbildes uz trim dziļākajiem jautājumiem:

Kas ir Radītājs?
Kāpēc mēs esam šeit?
Un kas mūs sagaida beigās?

Šis vilciens ir Zemes planēta, bet ceļojums – tā ir jūsu dzīve.

Tā kā cilvēkiem pašiem nav šo atbilžu, reliģijas ir parādījušās kā "lietošanas instrukcijas", kuras katra apgalvo, ka nākusi no paša vilciena projektētāja.

Tātad, paliksim šīs instrukcijas zem mierīgas un racionālas izvērtēšanas objektīva.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kas ir Radītājs?',

        intro: `
No filozofiskā un loģiskā viedokļa, Visuma "Pirmcēlonim" – Radītājam – ir jābūt pilnīgi transcendentam, kas atrodas ārpus matērijas, laika un telpas robežām. Ja Radītājs būtu pakļauts badam, nogurumam, fiziskiem ierobežojumiem vai telpiskiem sašaurinājumiem, loģiski šāda būtne zaudētu statusu kā absolūtais Radītājs un kļūtu par radītu un atkarīgu būtni. Atkarīga būtne nevar būt par visu eksistences avotu.
  `,

        religions: {
          eastern: {
            title: 'Austrumu reliģijas',
            examples: ['Induisms', 'Budisms'],

            answerNature: `
Savas agrīnākās formas, Theravada, budisms parasti ir neteistisks; tas nekoncentrējas uz radītāja dieva esamību, bet uzskata, ka eksistence rodas no mūžīgiem dabiskiem procesiem, cēloņsakarībām un savstarpēji saistītiem likumiem.

Induisms, savukārt, bieži runā par fundamentālu metafizisku realitāti, ko sauc par "Brahmanu". Taču praktiskajā pielūgsmē šī augstākā realitāte izpaužas caur neskaitāmām manifestācijām un dievībām, ieskaitot cilvēciska un dzīvnieciska izskata veidolus, tādus kā Višnu, Šiva un Kālī.
      `,

            objectiveCritique: `
No filozofiskā skatupunkta budisms saskaras ar izaicinājumu izskaidrot, kā augsti kārtīga Visums, ko vada konsekventi likumi un fiziska precizitāte, var rasties bez oriģināla saprātīga cēloņa.

Induisma tradīcijās, kas pieņem dievišķo iemiesošanos un fiziskus atveidus, dievišķība tiek saistīta ar robežām, konfliktiem, badu, nāvi un materiālu formu. Dievība, kuru var fiziski attēlot, iemiesot vai kura ir pakļauta dabiskiem procesiem, no racionālas perspektīvas izskatās kā radības daļa, nevis būtne, kas to pilnībā pārspēj.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Jūdaisms',

            answerNature: `
Jūdaisms apliecina ticību Radītājam, kas atrodas pāri elkiem un fiziskiem atveidiem. Dievs (JHWH) tiek saprasts kā debess un zemes Radītājs un ir būtiski atšķirīgs no savas radības.
      `,

            objectiveCritique: `
Šeit izvirzītā filozofiskā problēma saistīta ne tik daudz ar pašu transcendenci, cik ar Dieva universalitātes robežām, kas manāmas dažās ebreju Bībeles fragmentos. Noteikti teksti attēlo Dievu derības attiecībās, spēcīgi orientētu uz Izraēla bērniem, veidā, ko kritiķi interpretē kā etniski ekskluzīvu.

Turklāt dažos fragmentos Dieva raksturošanai tiek izmantota ļoti cilvēciska valoda, piemēram, "nožēla" par cilvēces radīšanu (1. Mozus grāmata 6:6) vai "atpūta" septītajā dienā pēc radīšanas (2. Mozus grāmata 31:17). Kritiķi apgalvo, ka šādi apraksti rada jautājumu, vai šie atribūti būtu jāsaprot tieši vai metaforiski.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristietība',

            answerNature: `
Kristietība māca ticību vienam Dievam caur Trīsvienības doktrīnu: Tēvu, Dēlu un Svēto Garu. Saskaņā ar iemiesošanās doktrīnu, otrais Trīsvienības personā – Dēls – ienāca cilvēces vēsturē Jēzus Kristus personā, kurš tika krustā sists un mira par cilvēces pestīšanu.
      `,

            objectiveCritique: `
Filozofiski kritiķi apgalvo, ka iemiesošanās doktrīna rada spriedzi starp dievišķajiem un cilvēciskajiem atribūtiem. Tradicionāli Dievs tiek raksturots kā mūžīgs, neierobežots un ārpus nāves, savukārt cilvēki – kā ierobežoti, ievainojami un mirstīgi.

Izaicinājums rodas, kad pilnīga dievišķība un pilnīgs cilvēciskums tiek apvienoti vienā personā. Kritiķi jautā, kā mūžīga un patstāvīga būtne var vienlaikus piedzīvot badu, miegu, ciešanas un nāvi. Šī problēma bieži tiek formulēta kā transcendences un iemiesošanās spriedze, nevis vienkārši kā teoloģisks noslēpums.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Islāms',

            answerNature: `
Islāms sniedz Dieva koncepciju, kas ir pilnīgi transcendenta un nedalāma. Korāns apkopo šo koncepciju Al-Ikhlas (Nekļūdības) sūrā:

"Saki: Viņš – Dievs, Viens. Dievs, Mūžīgais Patvērums. Viņš nav dzemdinājis un nav dzemdināts, un nav neviena, kas Viņam būtu līdzīgs." (Korāns 112:1–4)

Islāmā Radītājs ir pilnīgi ārpus materiālās formas un atšķiras no radības:

"Nav nekā, kas būtu Viņam līdzīgs." (Korāns 42:11)

Dievu neierobežo laiks, telpa vai fiziski ierobežojumi. Korānā arī teikts:

"Viņu nepārņem ne miegainība, ne miegs." (Korāns 2:255)

Islāma teoloģijā Dievs tiek saprasts kā patstāvīga, mūžīga, neatkarīga un absolūti no radības atšķirīga būtne.
      `,

            objectiveCritique: `
No islāma filozofiskās perspektīvas šī koncepcija cenšas saglabāt absolūtu transcendenci, izvairoties no antropomorfisma un iemiesošanās. Šī koncepcija cenšas saskaņot Radītāju ar neatkarīga un nepieciešamā Pirmcēloņa ideju, kas nav pakļauts radītās esamības robežām.
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

        title: 'Kāds ir dzīvesveids un mērķis?',

        intro: `
Ja eksistē gudrs Radītājs, būtu neracionāli domāt, ka cilvēce atstāta bez vadlīnijām, kas izskaidro eksistences mērķi, morālo atbildību un principus, pēc kuriem vadīties. Tāpat kā sarežģītām sistēmām ir nepieciešamas instrukcijas no to radītāja, tā reliģijas apgalvo, ka sniedz cilvēcei ietvaru, kas palīdz saprast, kāpēc mēs esam šeit un kā mums vajadzētu dzīvot.
  `,

        religions: {
          eastern: {
            title: 'Austrumu reliģijas',

            examples: ['Induisms', 'Budisms'],

            answerNature: `
Austrumu tradīcijas, tādas kā budisms un induisms, parasti balstās uz filozofiskām mācībām, meditatīvām praksēm un pārdomām, kuras attīstījuši garīgie skolotāji un gudrie.

Budismā galīgais mērķis ir atbrīvošanās no ciešanām un izbēgšana no atdzimšanas cikla, sasniedzot Nirvānu – transcendences un iekšējās atbrīvošanās stāvokli.

Daudzās induisma tradīcijās mērķis ir garīga atbrīvošanās (Mokša), kas sasniedzama caur ziedošanos, zināšanām, meditāciju vai disciplinētu rīcību.
      `,

            objectiveCritique: `
Kritiķi apgalvo, ka šīs sistēmas ir primāri filozofiskas un pieredzes balstītas, nevis balstītas uz pārbaudāmu atklāsmi, kas nāk no transcendentāla Radītāja.

Daži arī argumentē, ka spēcīgais uzsvars uz atiešanu no laicīgās dzīves, mūku dzīvi un sevis noliegšanu var būt pretrunā ar cilvēka dabas aspektiem, kas veicina sociālo attīstību, zinātnisko progresu, ģimenes dzīvi un civilizāciju būvniecību.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Jūdaisms',

            answerNature: `
Jūdaismā dzīvesveids sakņojas derības likumā, kas atklāts Mozum un saglabāts ebreju Bībelē (Tanaḥ). Reliģiskais ietvars ir orientēts uz paklausību dievišķajiem baušļiem un derības attiecību starp Dievu un Izraēla bērniem saglabāšanu.
      `,

            objectiveCritique: `
Kritiķi apgalvo, ka jūdaisms vēsturiski attīstījās primāri kā tradīcija, kas orientēta uz derību, kas saistīta ar konkrētu tautu, nevis kā universāla misionāra reliģija, kas paredzēta visai cilvēcei.

Teksta kritikas skatījumā daži zinātnieki – tostarp Ričards Eliots Frīdmens un citi – argumentē, ka Tora piedzīvoja kompilācijas un rediģēšanas procesus gadsimtu gaitā, īpaši ap Babilonijas trimdu un pēc tās. Tas licis dažiem kritiķiem apšaubīt, vai tekstu var uzskatīt par perfekti saglabātu atklāsmi, kas nodota tieši oriģinālajā formā.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristietība',

            answerNature: `
Kristietība māca, ka centrālā cilvēces problēma ir grēks un nošķirtība no Dieva, un pestīšana sasniedzama caur ticību Jēzus izpirkuma nāvei un augšāmcelšanai. Tāpēc dzīves mērķis tiek saprasts caur izlīgšanu ar Dievu un garīgo transformāciju.
      `,

            objectiveCritique: `
Vēsturiski zinātnieki atzīmē, ka nav saglabājušies oriģinālie Evaņģēliju manuskripti aramiešu valodā, kurā runāja Jēzus. Senākie saglabājušies teksti ir grieķu manuskripti, rakstīti gadu desmitiem pēc Jēzus dzīves. Teksta kritikas speciālisti, tādi kā Bārts Ermans, dokumentējuši neskaitāmus rokrakstu variantus starp agrīnajām Jaunās Derības kopijām.

Kritiķi arī apgalvo, ka kristietība vēsturiski piešķīrusi lielāku nozīmi garīgajai un personīgajai pestīšanai nekā visaptveroša juridiska vai politiska ietvara radīšanai, kas regulētu ekonomiku, krimināltiesības vai valsts pārvaldi. Daži vēsturnieki uzskata, ka tas veicināja reliģijas un valsts varas galīgo nošķiršanu daudzās Rietumu sabiedrībās.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Islāms',

            answerNature: `
Islāms sniedz visaptverošu cilvēka mērķa izpratni, integrējot garīgo ziedošanos un laicīgo atbildību.

Korānā teikts:

"Es radīju džinus un cilvēkus tikai tam, lai viņi Pielūgtu Mani." (Korāns 51:56)

Islāma domāšanā pielūgsme neaprobežojas ar rituāliem, bet ietver pareizu rīcību, taisnīgumu, ētisku uzvedību, zināšanu meklēšanu un pozitīvu ieguldījumu sabiedrībā.

Islāma mācības cenšas līdzsvarot garīgo izaugsmi ar praktisku dalību ģimenes dzīvē, ekonomikā, pārvaldē, labdarībā un sociālajā atbildībā.
      `,

            objectiveCritique: `
No islāma perspektīvas Korāns pārstāv unikāli saglabātu atklāsmi. Musulmaņi apgalvo, ka tā teksts palicis nemainīgs un ticis nepārtraukti nodots gan rakstiskos rokrakstos, gan mutiskā iegaumēšanā kopš pirmajām islāma paaudzēm.

Bieži citēti piemēri ir senie teksti, tādi kā Birmingemas Korāna manuskripts, un plašā mutiskās iegaumēšanas tradīcija, kuru uztur miljoniem musulmaņu visā pasaulē.

Islāma likums (Šariats) arī tiek pasniegts kā visaptverošs ētisks un juridisks ietvars, kas risina tādas jomas kā finanses, labdarība, ģimenes tiesības, krimināltiesības un pārvalde. Atbalstītāji apgalvo, ka tas piešķir islāmam pilnas morālas un civilizatoriskas sistēmas, nevis tikai tīri garīgas tradīcijas, iezīmes.
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

        title: 'Kas notiek pēc Galīgās stacijas?',

        subtitle: 'Liktenis, taisnīgums un pēcnāves dzīve',

        intro: `
Bez augstākā taisnīguma esamības pēc nāves dzīve var šķist dziļi patvaļīga un morāli neatrisināta. Tirāni var mirt, neatskaitījušies, bet upuri var pamest pasauli, nesaņēmuši taisnīgumu. Tas izvirza vienu no vecākajiem cilvēces filozofiskajiem jautājumiem: vai nāve ir beigas, vai pastāv galīgā tiesa aiz laicīgās dzīves robežām?
  `,

        religions: {
          eastern: {
            title: 'Austrumu reliģijas',

            examples: ['Induisms', 'Budisms'],

            answerNature: `
Daudzas Austrumu tradīcijas pieņem reinkarnācijas koncepciju, kur dvēsele vai apziņas plūsma pāriet atkārtotos atdzimšanas ciklos. Personas nākamo stāvokli nosaka karma: morālās pagātnes darbību sekas.
      `,

            objectiveCritique: `
Kritiķi apgalvo, ka reinkarnācija rada filozofiskus jautājumus par taisnīgumu un atbildību. Ja persona cieš sekas jaunā dzīvē par darbībām, kas veiktas iepriekšējā eksistencē, kuru tā nespēj apzināti atcerēties, tad soda izglītojošais un morālais mērķis kļūst grūti saprotams.

No šīs perspektīvas atbildība bez apzinātas atmiņas var šķist atdalīta no nozīmīgas morālās atbildības.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materiālisms un ateisms',

            answerNature: `
Materiālistiski un ateistiski pasaules uzskati nāvi parasti uzskata par apzinātas eksistences beigām. Cilvēki tiek saprasti kā bioloģiski organismi, kuru apziņa pilnīgi izbeidzas pēc fiziskās nāves.
      `,

            objectiveCritique: `
Kritiķi apgalvo, ka stingrs materiālisms grūti spēj sniegt objektīvu pamatu morālei, taisnīgumam un fundamentālai jēgai. Ja gan apspiešanas veicējs, gan upuris galu galā izgaist nebūtībā, neatskaitījušies, tad tādi jēdzieni kā pašaizliedzība, morālais pienākums un taisnīgums var šķist subjektīvi vai sociāli konstruēti, nevis universāli saistoši.

Tomēr laicīgās ētikas atbalstītāji argumentē, ka morāle joprojām var rasties caur prātu, empātiju un sociālo atbildību bez ticības pēcnāves dzīvei.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristietība',

            answerNature: `
Kristietība māca, ka pestīšana un mūžīgā dzīve sasniedzama caur ticību Jēzum Kristum un Viņa izpirkuma upura pieņemšanu par cilvēces grēkiem. Debesis un mūžīgā pestīšana ir cieši saistītas ar ticību Kristum un dievišķo žēlastību.
      `,

            objectiveCritique: `
Kritiķi jautā, kā pestīšana, kas primāri balstīta uz ticību, saskan ar universālā taisnīguma principiem. Filozofiski daži argumentē, ka šis ietvars var nozīmēt, ka morāli pareiza persona, kas godīgi cīnās ar noteiktu teoloģisku doktrīnu pieņemšanu, var tikt atstumta no pestīšanas, savukārt cita persona, kas pastrādājusi smagus noziegumus, bet pieņēmusi ticību tieši pirms nāves, var saņemt mūžīgo atalgojumu.

Kristietības teologi bieži atbild, ka pestīšana ietver gan sirsnīgu ticību, gan autentisku nožēlu, nevis tikai verbālu ticības apliecināšanu.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Islāms',

            answerNature: `
Islāms sniedz pēcnāves dzīvi kā pilnīgas morālās atbildības un dievišķā taisnīguma sistēmu.

Korānā teikts:

"Neviens grēcinieks nenes cita nastu." (Korāns 6:164)

Pestīšana islāmā konsekventi saistīta gan ar ticību, gan ar pareizu rīcību:

"Tie, kas tic un dara labus darbus..." (atkārtots visā Korānā, tostarp 2:25)

Islāms māca, ka laicīgā dzīve ir īslaicīgs pārbaudījums, nevis galīgā atalgojuma vai soda vieta:

"Tas, kurš radīja nāvi un dzīvi, lai pārbaudītu jūs, kurš no jums ir vislabākais savos darbos." (Korāns 67:2)
      `,

            objectiveCritique: `
Islāma teoloģijā Tiesas diena pārstāv augstāko taisnīguma tribunālu, kurā par katru darbību, lai cik maza tā būtu, būs jāatskaitās.

Korānā teikts:

"Kas dara labu kaut putekļa tiesu – redzēs to. Un kas dara ļaunu kaut putekļa tiesu – redzēs to." (Korāns 99:7–8)

Šis ietvars cenšas saglabāt gan individuālo atbildību, gan absolūtu taisnīgumu, vienlaikus piedāvājot morālu pārliecību, ka neviena apspiešanas vai labestības darbība galu galā nepaliks bez sekām.
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
      navbar: 'Reliģiju salīdzinājums',
      hero: {
        subtitle:
          'Mierpilns, bet dziļš filozofisks ceļojums, kas aplūko lielākos cilvēces jautājumus: Radītāju, eksistences mērķi, morāli un to, kas sagaida pēc nāves.',

        subtitleHighlight:
          'Radītāju, eksistences mērķi, morāli un to, kas sagaida pēc nāves.',

        scrollIndicator: 'Ritiniet uz leju, lai sāktu ceļojumu',
      },

      storySection: {
        badge: 'Vilciena analoģija',

        titleLine1: 'Pirms jautājumu uzdošanas',
        titleLine2: 'Par reliģiju...',

        intro:
          'Ikviens cilvēks galu galā sasniedz klusuma mirkli, kad izklīst izklaidēšanās – un dziļākie jautājumi beidzot iznirst virspusē.',

        ending: 'Šis vilciens ir Zemes planēta,',
        ending2: 'bet ceļojums – tā ir jūsu dzīve.',
      },

      coreQuestions: {
        sectionLabel: 'Galvenās sadaļas',
        title: 'Fundamentālie jautājumi',

        answerNatureTitle: 'Atbildes būtība',

        philosophicalDiscussionTitle: 'Filozofiska diskusija',

        referencesTitle: 'Atsauces',
      },

      futureResearch: {
        sectionLabel: 'Nākotnes pētījumi',

        title: 'Citi jautājumi',

        loaderBadge: 'Vairāk jautājumu drīz',

        headingLine1: 'Ceļojums',
        headingLine2: 'turpinās...',

        description:
          'Papildu filozofiskie un teoloģiskie pētījumi pašlaik tiek studēti un gatavoti, izmantojot to pašu strukturēto salīdzinošo pieeju.',

        topics: [
          'Morāle',
          'Zinātne',
          'Brīnumi',
          'Apziņa',
          'Brīvā griba',
          'Ciešanas',
          'Vēsturiskā saglabāšana',
          'Pravietojumi',
          'Cilvēka daba',
          'Jēga',
          'Civilizācija',
          'Ētika',
        ],

        footer: 'Jaunas sadaļas tiks pievienotas drīzumā',
      },

      imageAlt: {
        hero: 'Reliģiju salīdzinājums',
      },
    },
  },
};
