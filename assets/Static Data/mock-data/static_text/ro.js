export default {
  splash: {
    version: 'versiune',
    practice: 'practică',
    share: 'partajează',
    logo: 'islam global',
  },
  homeApp: {
    north: 'nord',
    east: 'est',
    west: 'vest',
    south: 'sud',
    active: 'qibla activă',
    disabled: 'Deschide busola Qibla',
    welcome: 'Bine ai revenit',
    greet: 'Assalamu Alaikum',
    hour: 'oră',
    minute: 'minut',
    second: 'secundă',
    toLeft: 'în stânga ta',
    toRight: 'în dreapta ta',
    fromNorth: 'de la nord',
  },
  quranApp: {
    medinan: 'Medinezană',
    meccan: 'Meccană',
    arabicName: 'nume în arabă',
    englishName: 'nume în engleză',
    details:
      'Selectează un verset pentru a vedea traducerea și tafsirul (explicația)',
    selectRes: 'Selectează resursa',
    retry: 'încearcă din nou',
    loadErr1: 'Nu s-a putut încărca explicația. Te rugăm să încerci din nou.',
    loadErr2: 'Preluarea a eșuat',
    author: 'autor',
    explain: 'Explicație',
  },
  qiblaApp: {
    compass: 'Busola Qibla',
    accuracy: 'acuratețe',
    offline: 'GPS offline',
    tracking: 'Urmărire GPS',
    aligned:
      'Ești orientat spre Qibla. Menține stabil pentru o direcție precisă a rugăciunii.',
    notAligned:
      'Ține dispozitivul orizontal și rotește până când săgeata indică Qibla.',
    heading: 'Direcția dispozitivului',
    turn: 'rotește',
    alignedQibla: 'Aliniat cu Qibla',
  },
  aiApp: {
    answer: 'răspuns',
  },
  prayerApp: {
    locationRequired:
      'Serviciile de localizare sunt necesare pentru orele exacte de rugăciune.',
    schedule: 'Programul rugăciunilor',
    refresh: 'reîmprospătează',
    sunrise: 'Răsărit',
    upcoming: 'Rugăciunea următoare',
  },
  settingsApp: {
    reciterTitle: 'Recitatorul Adhan',
    reciterSub: 'Alege vocea preferată',
    notSelected: 'neselectat',
    preview: 'previzualizare',
    cancel: 'anulează',
    muezzin: 'Muezzin',
    preNot: 'Notificare pre-Adhan',
    preNotDet: 'Notifică cu 15 minute înainte de ora rugăciunii',
    theme: 'Mod întunecat',
    dark: 'Tema întunecată activă',
    light: 'Tema deschisă activă',
    about: 'Despre',
    selectReciter: 'Selectează recitatorul',
  },
  athan: {
    mainTitle: 'ADHAN · CHEAMĂ LA RUGĂCIUNE',
    stop: 'Oprește Adhan',
    error: 'Nu s-a putut încărca audio-ul Adhan',
    prayerTime: 'Ora rugăciunii',
    play: 'redă',
    pause: 'pauză',
    dismiss: 'închide',
  },
  athkarApp: {
    completed: 'Finalizat',
    remaining: 'rămas',
    reset: 'resetează',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Începe-ți ziua cu binecuvântări',
    descE: 'Încheie-ți ziua sub protecție',
    remmember: 'Amintire Zilnică',
    cat: 'categorii de rugăciuni',
    category: 'Categorie',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Caută un hadith...',
      button: 'Caută',
      books: {
        label: 'Carte',
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
      title: 'Limba curentă nu este încă suportată',
      msg: 'Această limbă nu este momentan suportată în baza de date a hadithurilor.',
      description:
        'Engleza a fost selectată automat ca limbă de rezervă pentru a putea continua căutarea și navigarea hadithurilor fără probleme. De asemenea, poți încerca Modul Avansat pentru suport mai larg pentru mai multe limbi și rezultate îmbunătățite.',
    },

    initialPlaceholder:
      'Caută un hadith pentru a vedea detalii precum gradarea, naratorii și referințele',

    loading: {
      label: 'Se încarcă hadithurile...',
    },

    hadithCard: {
      showMore: 'Afișează mai mult',
      showLess: 'Afișează mai puțin',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referințe',
        referenceLabel: 'Referință',
        inBookReference: 'Referință în carte',
        arabicReference: 'Referință în arabă',
      },
    },

    emptyState: 'Nu au fost găsite hadithuri',

    pagination: {
      prev: 'Anterior',
      next: 'Următor',
    },
  },

  switch: {
    title: {
      advanced: 'Mod avansat',
      normal: 'Mod normal',
    },

    description: {
      advanced: 'Căutare semantică cu înțelegere mai profundă',
      normal: 'Căutare rapidă bazată pe filtre',
    },
  },

  navbar: {
    routes: {
      home: 'Acasă',
      prayers: 'Rugăciuni',
      quran: 'Coran',
      athkar: 'Dhikr',
      articles: 'Articole',

      articlesNested: {
        islamicHistory: 'Istorie islamică',
        prayerInIslam: 'Rugăciunea în Islam',
        womenInIslam: 'Femeile în Islam',
        purification: 'Purificare și abluțiune',
      },

      learn: 'Învață',
      learnNested: {
        quranTajweed: 'Învață Coranul și tajwid',
        arabic: 'Învață limba arabă',
      },

      dashboard: 'Panou de control',
      aiAssistant: 'Asistent AI',
    },
  },
  hero: {
    title: {
      explore: 'Explorează Islamul cu',
      clarity: 'Claritate',
      peace: '& Pace',
    },

    description:
      'Învață, pune întrebări și descoperă o înțelegere autentică prin AI și cunoștințe ghidate, concepute pentru claritate și reflecție.',

    actions: {
      introductionToIslam: 'Învață despre Islam',
      islamQA: 'Întrebări și Răspunsuri Islamice (Asistent AI)',
      continueWebsite: 'Continuă pe site',
    },
  },
  learning: {
    quran: {
      title: 'Învață Coranul și Tajwid',
      subtitle:
        'Îmbunătățește-ți recitarea Coranului și înțelege regulile Tajwid pas cu pas.',
    },
    arabic: {
      title: 'Învață limba arabă',
      subtitle:
        'Dezvoltă-ți abilitățile de limbă arabă prin lecții clare și structurate.',
    },
    default: {
      title: 'Secțiunea de învățare',
      subtitle:
        'Explorează conținut educațional conceput pentru a-ți consolida cunoștințele și înțelegerea.',
    },
  },

  explore: {
    searchBar: {
      title: 'Căutare colecții de hadith',

      subtitle:
        'Caută natural folosind subiecte, semnificații sau propoziții complete.',

      placeholder: 'Exemplu: hadith despre bunătatea față de părinți',

      button: 'Caută',
    },

    header: {
      title: 'Biblioteca de căutare hadith',
      subtitle:
        'Explorează instant hadith-uri autentice cu o experiență modernă de citire.',
    },

    content: {
      heroTitle:
        'Descoperă colecții autentice de hadith cu o căutare puternică',

      loading: {
        label: 'Se caută colecțiile de hadith...',
      },

      error: {
        title: 'Nu s-au putut încărca hadith-urile',
        message:
          'Nu am putut prelua relatările în acest moment. Verifică conexiunea și încearcă din nou.',
      },

      empty: {
        title: 'Nu au fost găsite hadith-uri potrivite',
      },

      card: {
        reference: 'Referință hadith',
        readMore: 'Citește hadith-ul complet',
      },
    },
  },

  home: {
    news: {
      title: 'Actualizări comunitare musulmane',
      subtitle: 'Rămâi informat cu actualizări importante din lumea musulmană',
    },

    prayer: {
      title: 'Numărătoare inversă pentru rugăciune',
      subtitle: 'Pregătește-te pentru următoarea rugăciune',
      button: 'Vezi orele de rugăciune',
      nextPrayerLabel: 'Următoarea rugăciune la:',
    },

    athkar: {
      title: 'Dhikr de dimineață și seară',
      subtitle: 'Amintire zilnică pentru conectarea inimii',
      button: 'Vezi mai multe dhikr',
    },

    qibla: {
      title: 'Direcția Qibla',
      subtitle: 'Găsește direcția Kaabei oriunde te afli',
      locationLoading: 'Se obține locația...',
      enableLocation: 'Activează locația',
      refreshLocation: 'Reîmprospătează direcția Qibla',

      warning:
        'Dacă dispozitivul nu suportă senzori de orientare, precizia busolei poate fi afectată.',

      errorTitle: 'Permisiune refuzată',
    },
  },

  prayers: {
    nextLabel: 'Următoarea rugăciune la',
    header: {
      title: 'Orele de rugăciune',
      subtitle: 'Un moment zilnic de conexiune cu Creatorul tău',
    },
    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },
    qibla: {
      loading: 'Se obține locația...',
      warning:
        'Dacă sistemul de operare nu suportă orientarea, acest lucru afectează calculul busolei.',
      errorTitle: 'Permisiune refuzată',
      enableLocation: 'Activează locația',
      refreshLocation: 'Reîmprospătează direcția Qibla',
    },

    list: {
      warning: 'Orele pot varia ușor în funcție de metoda de calcul.',
    },
  },

  quran: {
    header: {
      title: 'Coran',
      subtitle: 'Însoțitorul tău zilnic pentru recitare și reflecție',
    },

    search: {
      noResultTitle: 'Nu există date',
      noResultMessage: 'Nu există date de afișat',
    },
  },

  athkar: {
    title: 'Dhikr zilnic',
    subtitle: 'Rămâi consecvent în amintirea și reflecția zilnică',
  },

  ai: {
    header: {
      title: 'Asistent AI Islamic Global',
      subtitle:
        'Primește răspunsuri clare islamice bazate pe Coran, Sunnah și cunoștințe de încredere',
    },

    loading: {
      label: 'Se încarcă...',
    },

    error: {
      title: 'Limita de cereri a fost atinsă',
      message:
        'Serviciul de cunoștințe nu este disponibil momentan. Încearcă din nou mai târziu.',
    },

    input: {
      placeholder: 'Pune o întrebare despre Islam...',
    },

    suggestions: [
      'Pot să mă rog dacă nu am abluțiune (wudu)?',
      'Este dobânda (riba) complet interzisă?',
      'Reguli despre munca într-un mediu non-halal',
      'Pot să mă rog în timpul călătoriei?',
      'Este permis parfumul în timpul rugăciunii?',
      'Ce anulează rugăciunea?',
      'Amânarea rugăciunii din cauza muncii',
    ],

    footer: {
      disclaimer:
        'Acest asistent AI oferă răspunsuri bazate pe surse de cunoștințe verificate, inclusiv referințe islamice și materiale educaționale.',

      note: 'Răspunsurile sunt informative și nu înlocuiesc sfatul savanților atunci când este necesar.',
    },
  },

  footer: {
    disclaimer:
      'Tot conținutul afișat provine din surse originale de încredere. Apreciem feedback-ul și raportările de erori pentru revizuire și corectare.',

    tagline: 'Construit cu grijă pentru conținut islamic autentic',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Înapoi',
    },

    sections: {
      hadithText: 'Text hadith',
      arabicText: 'Text arab',
      explanation: 'Explicație',
      authentication: 'Autenticitate',
      lessons: 'Lecții și beneficii',
    },
  },
  other: {
    part: 'Parte',
    translation: 'Traducere',
    verse: 'Verset',
    chapter: 'Capitol',
    page: 'Pagină',
    breakingNews: 'Știri de ultimă oră',
  },
  dailyRemined: {
    title: 'Lumina Zilei',
    subtitle:
      'Oprește-te puțin și reflectează asupra unui verset și unui hadith alese pentru ziua ta.',
  },
  baseFooter: {
    contact: {
      title: 'Contactează-ne',
      name: 'Numele tău',
      email: 'Emailul tău',
      msg: 'Mesajul tău',
      sendMsg: 'Trimite mesaj',
    },
    followUs: 'Urmărește-ne',
    QA: 'Acces rapid',
    logoB:
      'Coran, Hadith, orele de rugăciune, asistent AI și instrumente islamice zilnice—all într-o platformă modernă.',
    whatsapp: 'Chat pe WhatsApp',
    rsr: 'Toate drepturile rezervate',
  },
  compareRelg: {
    note: `Această pagină prezintă o privire de ansamblu comparativă asupra principalelor religii ale lumii. Din perspectivă islamică, Coranul afirmă că revelațiile divine anterioare au fost trimise națiunilor din trecut, dar, de-a lungul timpului, au suferit alterări umane (tahrif). Coranul stipulează: „Într-adevăr, Noi am coborât Coranul și, cu siguranță, Noi vom fi păzitorii săi” (15:9). Această pagină examinează aceste diferențe în lumina dovezilor istorice și textuale.`,
    mainTitle: 'O călătorie rațională prin religii',
    headerTitle: 'Întrebări care definesc existența umană',
    story: `
Imaginează-ți că deschizi brusc ochii și îți dai seama că te afli într-un tren luxos care gonește cu viteză printr-o noapte nesfârșită. În jurul tău se află tot confortul imaginabil: mese copioase servite pe tăvi elegante, ecrane care rulează filme și perne de mătase pe scaune moi.

Cu un sentiment de neliniște, îl întrebi pe pasagerul de lângă tine:
"Unde suntem? Cine ne-a pus în acest tren? Și încotro ne îndreptăm?"

Dar cea mai surprinzătoare este reacția lor.

Unul răspunde rece:
"Ce te interesează pe tine? Doar bucură-te de mâncare, este fantastică."

Altul răspunde batjocoritor:
"De ce să te chinui cu astfel de întrebări? Lasă-te pe spate și privește filmul."

Toți cei din jurul tău se pierd în plăcerile călătoriei, dar pe tine te cuprinde o frică profundă, pentru că știi că acest tren gonește spre stația finală – un loc în care fiecare pasager trebuie, în cele din urmă, să coboare.

În acel moment, apare întrebarea esențială:

Te vei lăsa absorbit de luxul și divertismentul călătoriei sau vei continua să cauți răspunsuri la cele mai profunde trei întrebări:

Cine este Creatorul?
De ce suntem aici?
Și ce ne așteaptă la final?

Acest tren este planeta Pământ, iar călătoria este însăși viața ta.

Deoarece oamenii nu dețin aceste răspunsuri de la sine, religiile au apărut ca „manuale de instrucțiuni”, fiecare pretinzând că vine direct de la proiectantul trenului.

Să analizăm aceste manuale cu o privire calmă și rațională.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Cine este Creatorul?',

        intro: `
Din perspectivă filosofică și logică, Creatorul, ca „Primă Cauză” a universului, trebuie să fie complet transcendent, dincolo de limitele materiei, timpului și spațiului. Dacă Creatorul ar fi supus foamei, oboselii, limitărilor fizice sau cadrelor spațiale, o astfel de ființă ar pierde logic statutul de Creator absolut și ar deveni o ființă creată și dependentă. O ființă dependentă nu poate fi sursa necesară a întregii existențe.
  `,

        religions: {
          eastern: {
            title: 'Religii orientale',
            examples: ['Hinduism', 'Budism'],

            answerNature: `
În forma sa cea mai veche, Theravada, budismul este în general non-teist; nu se concentrează pe existența unui zeu creator, ci privește existența ca rezultat al proceselor naturale eterne, cauzalității și legilor interdependente.

Hinduismul, pe de altă parte, vorbește adesea despre o realitate metafizică fundamentală numită „Brahman”. Totuși, în practică, această realitate supremă se manifestă prin nenumărate forme și divinități, incluzând figuri umane și animale precum Vishnu, Shiva și Kali.
      `,

            objectiveCritique: `
Din punct de vedere filosofic, budismul se confruntă cu provocarea de a explica cum un univers extrem de ordonat, guvernat de legi consistente și precizie fizică, poate apărea fără o cauză conștientă originară.

În tradițiile hinduiste care acceptă încarnări divine și reprezentări fizice, divinitatea este asociată cu limitări, conflicte, foame, moarte și formă materială. O divinitate care poate fi reprezentată fizic, încarnată sau care este supusă proceselor naturale pare, dintr-o perspectivă rațională, mai degrabă o parte a creației decât o ființă care o depășește complet.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Iudaism',

            answerNature: `
Iudaismul confirmă credința într-un Creator care este înălțat deasupra idolilor și a imaginilor fizice. Dumnezeu (YHWH) este înțeles ca Creator al cerurilor și al pământului și este esențialmente distinct de creația Sa.
      `,

            objectiveCritique: `
Problema filosofică ridicată aici nu privește atât transcendența în sine, cât limitele universalității lui Dumnezeu, așa cum apar în anumite pasaje din Biblia ebraică. Anumite texte îl portretizează pe Dumnezeu într-o relație de legământ, puternic orientată spre fiii lui Israel, ceea ce este interpretat de critici ca un exclusivism etnic.

În plus, unele pasaje folosesc limbaj uman pentru a-l descrie pe Dumnezeu, cum ar fi „căința” pentru crearea omului (Geneza 6:6) sau „odihna” în a șaptea zi după creație (Exodul 31:17). Criticii susțin că astfel de descrieri ridică întrebarea dacă aceste trăsături trebuie înțelese literal sau metaforic.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Creștinism',

            answerNature: `
Creștinismul învață credința într-un singur Dumnezeu prin doctrina Trinității: Tatăl, Fiul și Duhul Sfânt. Conform doctrinei întrupării, a doua persoană a Trinității – Fiul – a intrat în istoria umanității în persoana lui Iisus Hristos, care a fost răstignit și a murit pentru mântuirea umanității.
      `,

            objectiveCritique: `
Din punct de vedere filosofic, criticii susțin că doctrina întrupării creează o tensiune între atributele divine și cele umane. Tradițional, Dumnezeu este descris ca etern, nelimitat și dincolo de moarte, în timp ce oamenii sunt descriși ca finiți, vulnerabili și muritori.

Provocarea apare când divinitatea deplină și umanitatea deplină sunt unite într-o singură persoană. Criticii întreabă cum o ființă eternă și independentă poate experimenta simultan foamea, somnul, suferința și moartea. Această problemă este adesea formulată ca o tensiune între transcendență și întrupare, mai degrabă decât doar ca un mister teologic.
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
Islamul prezintă un concept al lui Dumnezeu care este complet transcendent și indivizibil. Coranul rezumă acest concept în Sura Al-Ikhlas:

"Spune: El este Allah, Unul. Allah, Absolutul. El nu a născut și nu a fost născut. Și nu există nimic care să-I fie egal." (Coran 112:1–4)

În Islam, Creatorul este complet în afara formei materiale și este distinct de creație:

"Nu există nimic asemenea Lui." (Coran 42:11)

Dumnezeu nu este limitat de timp, spațiu sau limitări fizice. Coranul afirmă, de asemenea:

"Nici ațipirea, nici somnul nu-L cuprind." (Coran 2:255)

În teologia islamică, Dumnezeu este înțeles ca o ființă independentă, eternă, autosuficientă și absolut distinctă de creație.
      `,

            objectiveCritique: `
Din perspectivă filosofică islamică, acest concept caută să păstreze transcendența absolută evitând antropomorfismul și întruparea. El urmărește să alinieze Creatorul cu ideea unei Prime Cauze independente și necesare, care nu este supusă limitărilor existenței create.
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

        title: 'Care este modul de viață și scopul?',

        intro: `
Dacă există un Creator înțelept, este irațional să presupunem că umanitatea a fost lăsată fără directive care să explice scopul existenței, responsabilitatea morală și principiile de urmat. Așa cum sistemele complexe necesită instrucțiuni de la proiectantul lor, religiile pretind că oferă un cadru care ajută ființa umană să înțeleagă de ce suntem aici și cum ar trebui să trăim.
  `,

        religions: {
          eastern: {
            title: 'Religii orientale',

            examples: ['Hinduism', 'Budism'],

            answerNature: `
Tradițiile orientale precum budismul și hinduismul se bazează, în general, pe învățături filosofice, practici de meditație și reflecții dezvoltate de profesori spirituali și înțelepți.

În budism, scopul final este eliberarea de suferință și evadarea din ciclul reîncarnărilor prin atingerea Nirvanei – o stare de transcendență și eliberare interioară.

În multe tradiții hinduiste, scopul este eliberarea spirituală (Moksha), atingibilă prin devotament, cunoaștere, meditație sau acțiune disciplinată.
      `,

            objectiveCritique: `
Criticii susțin că aceste sisteme sunt în principal filosofice și bazate pe experiență, mai degrabă decât pe o revelație verificabilă de la un Creator transcendent.

Unii argumentează, de asemenea, că accentul puternic pe retragerea din viața lumească, monahism și abnegație poate intra în conflict cu aspecte ale naturii umane care stimulează dezvoltarea socială, progresul științific, viața de familie și civilizația.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Iudaism',

            answerNature: `
În iudaism, modul de viață este înrădăcinat în legea legământului revelată lui Moise și păstrată în Biblia ebraică (Tanakh). Cadrul religios se concentrează pe ascultarea poruncilor divine și menținerea relației de legământ între Dumnezeu și fiii lui Israel.
      `,

            objectiveCritique: `
Criticii argumentează că iudaismul s-a dezvoltat istoric ca o tradiție orientată spre legământul cu o națiune specifică, mai degrabă decât ca o religie misionară universală pentru întreaga umanitate.

Din perspectivă de analiză textuală, unii cărturari – inclusiv Richard Elliott Friedman – susțin că Tora a trecut prin procese de compilare și editare de-a lungul secolelor, în special în jurul captivității babiloniene și după aceasta. Aceasta îi face pe unii critici să se îndoiască dacă textul poate fi considerat o revelație păstrată perfect în forma sa originală.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Creștinism',

            answerNature: `
Creștinismul învață că problema centrală a umanității este păcatul și separarea de Dumnezeu, iar mântuirea este atinsă prin credința în moartea jertfelnică a lui Iisus și învierea Sa. Prin urmare, scopul vieții este înțeles prin reconcilierea cu Dumnezeu și transformarea spirituală.
      `,

            objectiveCritique: `
Istoric, cărturarii notează că manuscrisele originale ale evangheliilor în aramaică (limba lui Iisus) nu au fost păstrate. Cele mai vechi texte păstrate sunt manuscrise grecești, scrise la decenii după viața lui Iisus. Critici textuali precum Bart Ehrman au documentat numeroase variații în primele copii ale Noului Testament.

Criticii susțin, de asemenea, că creștinismul a pus istoric mai mult accent pe mântuirea spirituală și personală decât pe construirea unui cadru juridic sau politic cuprinzător pentru economie, drept penal sau guvernare statală. Unii istorici cred că acest lucru a contribuit la separarea ulterioară dintre biserică și stat în multe societăți occidentale.
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
Islamul oferă o înțelegere cuprinzătoare a scopului uman prin integrarea devotamentului spiritual și a responsabilității lumești.

Coranul afirmă:

"Nu i-am creat pe djinn și pe oameni decât pentru ca ei să Mă slujească." (Coran 51:56)

În gândirea islamică, adorarea nu se limitează la ritualuri, ci include acțiunea corectă, dreptatea, comportamentul etic, căutarea cunoașterii și contribuția pozitivă la societate.

Învățăturile islamice urmăresc echilibrul între creșterea spirituală și participarea practică la viața de familie, economie, guvernare, caritate și responsabilitate socială.
      `,

            objectiveCritique: `
Din perspectivă islamică, Coranul reprezintă o revelație păstrată în mod unic. Musulmanii susțin că textul a rămas neschimbat și a fost transmis continuu prin manuscrise scrise și memorare orală încă de la primele generații ale Islamului.

Exemple frecvent citate sunt texte antice, cum ar fi manuscrisul Coranului din Birmingham, și tradiția imensă de memorare orală menținută de milioane de musulmani în întreaga lume.

Legea islamică (Sharia) este de asemenea prezentată ca un cadru etic și juridic care acoperă domenii precum finanțele, caritatea, dreptul familial, dreptul penal și guvernarea. Susținătorii argumentează că acest lucru conferă Islamului caracteristicile unui sistem moral și civilizațional complet, mai degrabă decât doar o tradiție spirituală.
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

        title: 'Ce se întâmplă după Stația Finală?',

        subtitle: 'Destin, dreptate și lumea de dincolo',

        intro: `
Fără existența unei dreptăți finale după moarte, viața poate părea foarte arbitrară și nerezolvată moral. Tiranii pot muri fără să dea socoteală, iar victimele pot părăsi lumea fără să găsească dreptate. Acest lucru evocă una dintre cele mai vechi întrebări filosofice ale umanității: moartea este sfârșitul sau există o judecată finală dincolo de viața pământească?
  `,

        religions: {
          eastern: {
            title: 'Religii orientale',

            examples: ['Hinduism', 'Budism'],

            answerNature: `
Multe tradiții orientale acceptă conceptul reîncarnării, în care sufletul sau fluxul de conștiință trece prin cicluri repetate de renaștere. Starea viitoare a unui individ este determinată de karma: consecințele morale ale acțiunilor trecute.
      `,

            objectiveCritique: `
Criticii argumentează că reîncarnarea ridică întrebări filosofice despre dreptate și responsabilitate. Dacă cineva într-o viață nouă suportă consecințele acțiunilor dintr-o existență anterioară de care nu își poate aminti conștient, scopul educațional și moral al pedepsei devine dificil de înțeles.

Din această perspectivă, responsabilitatea fără memorie conștientă pare deconectată de o responsabilitate morală semnificativă.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialism și ateism',

            answerNature: `
Viziunile asupra lumii materialiste și ateiste consideră, de regulă, moartea ca fiind sfârșitul existenței conștiente. Ființele umane sunt înțelese ca organisme biologice a căror conștiință încetează complet după moartea fizică.
      `,

            objectiveCritique: `
Criticii susțin că materialismul strict are dificultăți în a oferi o bază obiectivă pentru moralitate, dreptate și sens fundamental. Dacă atât opresorul, cât și victima dispar în final în neant fără a da socoteală, concepte precum sacrificiul, datoria morală și dreptatea pot părea subiective sau construite social, mai degrabă decât obligatorii universal.

Susținătorii eticii seculare argumentează, totuși, că moralitatea poate apărea în continuare prin rațiune, empatie și responsabilitate socială, fără credința într-o viață de apoi.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Creștinism',

            answerNature: `
Creștinismul învață că mântuirea și viața veșnică sunt atinse prin credința în Iisus Hristos și acceptarea sacrificiului Său pentru păcatele umanității. Raiul și mântuirea veșnică sunt strâns legate de credința în Hristos și de harul divin.
      `,

            objectiveCritique: `
Criticii întreabă cum mântuirea bazată în principal pe credință se raportează la principiile universale ale dreptății. Din punct de vedere filosofic, unii argumentează că acest cadru poate însemna că o persoană moralmente bună care se luptă onest să accepte anumite dogme teologice poate fi privată de mântuire, în timp ce o altă persoană care a comis crime grave, dar a crezut în ultimul moment, poate primi răsplata veșnică.

Teologii creștini răspund frecvent că mântuirea implică atât o credință sinceră, cât și o pocăință autentică, mai degrabă decât doar o mărturisire orală.
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
Islamul prezintă viața de apoi ca un sistem de responsabilitate morală absolută și dreptate divină.

Coranul afirmă:

"Niciun suflet nu va purta povara altuia." (Coran 6:164)

Mântuirea în Islam este legată constant de credință și fapte bune:

"Și vestește-i pe cei care cred și săvârșesc fapte bune..." (repetat în tot Coranul, inclusiv 2:25)

Islamul învață că viața pământească este o probă temporară, nu un loc pentru răsplată sau pedeapsă finală:

"Cel care a creat moartea și viața pentru a vă încerca, care dintre voi este mai bun la faptă." (Coran 67:2)
      `,

            objectiveCritique: `
În teologia islamică, Ziua Judecății reprezintă tribunalul final unde fiecare acțiune, oricât de mică, va fi contabilizată.

Coranul afirmă:

"Cine face un bine cât un atom, îl va vedea. Și cine face un rău cât un atom, îl va vedea." (Coran 99:7–8)

Acest cadru urmărește să păstreze atât responsabilitatea individuală, cât și dreptatea absolută, oferind certitudinea morală că niciun act de opresiune sau bunătate nu rămâne în final fără consecințe.
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
      navbar: 'Compararea religiilor',
      hero: {
        subtitle:
          'O călătorie filosofică calmă și profundă prin cele mai mari întrebări ale umanității: Creatorul, scopul existenței, moralitatea și ce ne așteaptă după moarte.',

        subtitleHighlight:
          'Creatorul, scopul existenței, moralitatea și ce ne așteaptă după moarte.',

        scrollIndicator: 'Derulați în jos pentru a începe călătoria',
      },

      storySection: {
        badge: 'Analogia trenului',

        titleLine1: 'Înainte de a pune întrebările',
        titleLine2: 'Despre religie...',

        intro:
          'Fiecare ființă umană atinge în cele din urmă un moment de liniște când distragerile dispar – iar cele mai profunde întrebări ies în sfârșit la suprafață.',

        ending: 'Acest tren este planeta Pământ,',
        ending2: 'iar călătoria este însăși viața ta.',
      },

      coreQuestions: {
        sectionLabel: 'Secțiuni principale',
        title: 'Întrebări fundamentale',

        answerNatureTitle: 'Natura răspunsului',

        philosophicalDiscussionTitle: 'Discuție filosofică',

        referencesTitle: 'Referințe',
      },

      futureResearch: {
        sectionLabel: 'Cercetare viitoare',

        title: 'Alte întrebări',

        loaderBadge: 'Mai multe întrebări în pregătire',

        headingLine1: 'Călătoria',
        headingLine2: 'continuă...',

        description:
          'Cercetări filosofice și teologice suplimentare sunt studiate și pregătite folosind aceeași abordare comparativă structurată.',

        topics: [
          'Moralitate',
          'Știință',
          'Miracole',
          'Conștiință',
          'Liber arbitru',
          'Suferință',
          'Transmitere istorică',
          'Profeții',
          'Natură umană',
          'Sens',
          'Civilizație',
          'Etică',
        ],

        footer: 'Noi secțiuni vor fi adăugate în curând',
      },

      imageAlt: {
        hero: 'Compararea religiilor',
      },
    },
  },
};
