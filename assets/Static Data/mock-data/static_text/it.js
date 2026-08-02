export default {
  splash: {
    version: 'versione',
    practice: 'pratica',
    share: 'condividi',
    logo: 'islam globale',
  },
  homeApp: {
    north: 'nord',
    east: 'est',
    west: 'ovest',
    south: 'sud',
    active: 'qibla attiva',
    disabled: 'Apri bussola Qibla',
    welcome: 'Bentornato',
    greet: 'Assalamu Alaikum',
    hour: 'ora',
    minute: 'minuto',
    second: 'secondo',
    toLeft: 'alla tua sinistra',
    toRight: 'alla tua destra',
    fromNorth: 'dal nord',
  },
  quranApp: {
    medinan: 'Medinese',
    meccan: 'Meccana',
    arabicName: 'nome in arabo',
    englishName: 'nome in inglese',
    details:
      'Seleziona un verso per vedere la sua traduzione e tafsir (spiegazione)',
    selectRes: 'Seleziona risorsa',
    retry: 'riprova',
    loadErr1: 'Impossibile caricare la spiegazione. Riprova.',
    loadErr2: 'Recupero fallito',
    author: 'autore',
    explain: 'Spiegazione',
  },
  qiblaApp: {
    compass: 'Bussola Qibla',
    accuracy: 'precisione',
    offline: 'GPS offline',
    tracking: 'Tracciamento GPS',
    aligned:
      'Stai fronteggiando la Qibla. Tieni fermo per una direzione di preghiera accurata.',
    notAligned:
      'Tieni il dispositivo in piano e ruota finché la freccia non punta alla Qibla.',
    heading: 'Orientamento dispositivo',
    turn: 'gira',
    alignedQibla: 'Allineato con la Qibla',
  },
  aiApp: {
    answer: 'risposta',
  },
  prayerApp: {
    locationRequired:
      'I servizi di localizzazione sono necessari per orari di preghiera accurati.',
    schedule: 'Orario preghiere',
    refresh: 'aggiorna',
    sunrise: 'Alba',
    upcoming: 'Prossima preghiera',
  },
  settingsApp: {
    reciterTitle: 'Recitatore Adhan',
    reciterSub: 'Scegli la voce preferita',
    notSelected: 'non selezionato',
    preview: 'anteprima',
    cancel: 'annulla',
    muezzin: 'Muezzin',
    preNot: 'Notifica pre-Adhan',
    preNotDet: "Notifica 15 minuti prima dell'ora di preghiera",
    theme: 'Modalità scura',
    dark: 'Tema scuro attualmente',
    light: 'Tema chiaro attualmente',
    about: 'Informazioni',
    selectReciter: 'Seleziona recitatore',
  },
  athan: {
    mainTitle: 'ADHAN · CHIAMATA ALLA PREGHIERA',
    stop: 'Ferma Adhan',
    error: "Impossibile caricare l'audio dell'Adhan",
    prayerTime: 'Ora di preghiera',
    play: 'riproduci',
    pause: 'pausa',
    dismiss: 'ignora',
  },
  athkarApp: {
    completed: 'Completato',
    remaining: 'rimanente',
    reset: 'reimposta',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Inizia la giornata con benedizioni',
    descE: 'Termina la giornata con protezione',
    remmember: 'Ricordo quotidiano',
    cat: 'categorie di suppliche',
    category: 'Categoria',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Cerca hadith...',
      button: 'Cerca',
      books: {
        label: 'Libro',
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
      title: 'La lingua corrente non è ancora supportata',
      msg: 'Questa lingua non è ancora supportata dal database degli hadith.',
      description:
        "L'inglese è stato selezionato automaticamente come lingua di riserva così puoi comunque cercare e consultare gli hadith senza problemi. Puoi anche provare la Modalità Avanzata per un supporto multilingue più ampio e risultati migliori.",
    },

    initialPlaceholder:
      'Cerca un hadith per visualizzare dettagli come classificazione, narratori e riferimento',

    loading: {
      label: 'Caricamento degli hadith...',
    },

    hadithCard: {
      showMore: 'Mostra altro',
      showLess: 'Mostra meno',

      header: {
        hadithPrefix: 'Hadith n.',
        referencesTitle: 'Riferimenti',
        referenceLabel: 'Riferimento',
        inBookReference: 'Riferimento nel libro',
        arabicReference: 'Riferimento arabo',
      },
    },

    emptyState: 'Nessun hadith trovato',

    pagination: {
      prev: 'Precedente',
      next: 'Successivo',
    },
  },

  switch: {
    title: {
      advanced: 'Modalità avanzata',
      normal: 'Modalità normale',
    },

    description: {
      advanced: 'Ricerca semantica con comprensione più approfondita',
      normal: 'Ricerca rapida basata su filtri',
    },
  },

  navbar: {
    routes: {
      home: 'Home',
      prayers: 'Preghiere',
      quran: 'Corano',
      athkar: 'Athkar',
      articles: 'Articoli',

      articlesNested: {
        islamicHistory: 'Storia islamica',
        prayerInIslam: "La preghiera nell'Islam",
        womenInIslam: "Le donne nell'Islam",
        purification: 'Purificazione e abluzione',
      },

      learn: 'Imparare',

      learnNested: {
        quranTajweed: 'Imparare il Corano e il Tajweed',
        arabic: "Imparare l'arabo",
      },

      dashboard: 'Dashboard',
      aiAssistant: 'Assistente IA',
    },
  },

  hero: {
    title: {
      explore: 'Atrask islamą su',
      clarity: 'Aiškumu',
      peace: '& ramybe',
    },

    description:
      'Mokykis, užduok klausimus ir atrask autentišką supratimą per dirbtinį intelektą ir vadovaujamas žinias, sukurtas aiškumui ir apmąstymui.',

    actions: {
      introductionToIslam: 'Sužinok apie islamą',
      islamQA: 'Islamo klausimai ir atsakymai (AI asistentas)',
      continueWebsite: 'Tęsti į svetainę',
    },
  },
  learning: {
    quran: {
      title: 'Impara il Corano e il Tajwid',
      subtitle:
        'Migliora la tua recitazione del Corano e comprendi le regole del Tajwid passo dopo passo.',
    },
    arabic: {
      title: 'Impara l’arabo',
      subtitle:
        'Sviluppa le tue competenze in lingua araba attraverso lezioni chiare e strutturate.',
    },
    default: {
      title: 'Sezione di apprendimento',
      subtitle:
        'Esplora contenuti educativi progettati per rafforzare le tue conoscenze e comprensione.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadisų kolekcijų paieška',

      subtitle: 'Ieškok natūraliai pagal temas, reikšmes ar pilnus sakinius.',

      placeholder: 'Pavyzdys: hadis apie gerumą tėvams',

      button: 'Ieškoti',
    },

    header: {
      title: 'Hadisų paieškos biblioteka',
      subtitle:
        'Iškart tyrinėk autentiškus hadisu su modernia skaitymo patirtimi.',
    },

    content: {
      heroTitle: 'Atrask autentiškas hadisų kolekcijas su galinga paieška',

      loading: {
        label: 'Ieškoma hadisų kolekcijų...',
      },

      error: {
        title: 'Nepavyko įkelti hadisų',
        message:
          'Šiuo metu nepavyko gauti pasakojimų. Patikrink ryšį ir bandyk dar kartą.',
      },

      empty: {
        title: 'Nerasta atitinkančių hadisų',
      },

      card: {
        reference: 'Hadiso nuoroda',
        readMore: 'Skaityti visą hadisą',
      },
    },
  },

  home: {
    news: {
      title: 'Musulmonų bendruomenės naujienos',
      subtitle: 'Sek svarbiausius atnaujinimus iš musulmonų pasaulio',
    },

    prayer: {
      title: 'Maldos atgalinis skaičiavimas',
      subtitle: 'Pasiruošk kitai maldai',
      button: 'Peržiūrėti maldų laikus',
      nextPrayerLabel: 'Kita malda:',
    },

    athkar: {
      title: 'Rytiniai ir vakariniai zikrai',
      subtitle: 'Kasdienis prisiminimas širdies ryšiui stiprinti',
      button: 'Žiūrėti daugiau zikrų',
    },

    qibla: {
      title: 'Kiblės kryptis',
      subtitle: 'Rask Kaabos kryptį, kad ir kur būtum',
      locationLoading: 'Gaunama vieta...',
      enableLocation: 'Įgalinti vietą',
      refreshLocation: 'Atnaujinti kiblės kryptį',

      warning:
        'Jei jūsų įrenginys nepalaiko orientacijos jutiklių, kompaso tikslumas gali būti paveiktas.',

      errorTitle: 'Leidimas atmestas',
    },
  },

  prayers: {
    nextLabel: 'Kita malda:',
    header: {
      title: 'Maldų laikai',
      subtitle: 'Kasdienis ryšio su Kūrėju momentas',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Gaunama vieta...',
      warning:
        'Jei operacinė sistema nepalaiko orientacijos, tai paveiks kompaso skaičiavimus.',
      errorTitle: 'Leidimas atmestas',
      enableLocation: 'Įgalinti vietą',
      refreshLocation: 'Atnaujinti kiblės kryptį',
    },

    list: {
      warning:
        'Laikai gali šiek tiek skirtis priklausomai nuo skaičiavimo metodo.',
    },
  },

  quran: {
    header: {
      title: 'Koranas',
      subtitle: 'Tavo kasdienis skaitymo ir apmąstymo palydovas',
    },

    search: {
      noResultTitle: 'Duomenų nėra',
      noResultMessage: 'Nėra ką rodyti',
    },
  },

  athkar: {
    title: 'Kasdieniai zikrai',
    subtitle: 'Išlaikyk nuoseklumą kasdieniame prisiminime ir apmąstyme',
  },

  ai: {
    header: {
      title: 'Pasaulinis islamo AI asistentas',
      subtitle:
        'Gauk aiškius islamo atsakymus, pagrįstus Koranu, Sunna ir patikimomis žiniomis',
    },

    loading: {
      label: 'Kraunama...',
    },

    error: {
      title: 'Pasiektas užklausų limitas',
      message: 'Žinių paslauga šiuo metu nepasiekiama. Pabandyk vėliau.',
    },

    input: {
      placeholder: 'Užduok klausimą apie islamą...',
    },

    suggestions: [
      'Ar galiu melstis be wudu?',
      'Ar palūkanos (riba) visiškai draudžiamos?',
      'Darbas ne halal aplinkoje',
      'Ar galiu melstis keliaujant?',
      'Ar galima naudoti kvepalus maldos metu?',
      'Kas panaikina maldą?',
      'Maldų atidėjimas dėl darbo',
    ],

    footer: {
      disclaimer:
        'Šis AI asistentas pateikia atsakymus, pagrįstus patikimais ir kruopščiai atrinktais žinių šaltiniais, įskaitant islamo nuorodas ir patikrintą mokomąją medžiagą.',

      note: 'Atsakymai yra informacinio pobūdžio ir nepakeičia mokslininkų konsultacijų, kai jos reikalingos.',
    },
  },

  footer: {
    disclaimer:
      'Visas rodomas turinys yra iš originalių patikimų šaltinių. Laukiame atsiliepimų ir klaidų pranešimų peržiūrai ir taisymui.',

    tagline: 'Sukurta kruopščiai, siekiant pateikti autentišką islamo turinį',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadisas',
      backButton: 'Grįžti',
    },

    sections: {
      hadithText: 'Hadiso tekstas',
      arabicText: 'Arabų tekstas',
      explanation: 'Paaiškinimas',
      authentication: 'Autentiškumas',
      lessons: 'Pamokos ir nauda',
    },
  },
  other: {
    part: 'Parte',
    translation: 'Traduzione',
    verse: 'Versetto',
    chapter: 'Capitolo',
    page: 'Pagina',
    breakingNews: 'Ultime notizie',
  },

  dailyRemined: {
    title: 'Luce di Oggi',
    subtitle:
      'Fermati un momento e rifletti su un versetto e un hadith scelti per la tua giornata.',
  },
  baseFooter: {
    contact: {
      title: 'Contattaci',
      name: 'Il tuo nome',
      email: 'La tua email',
      msg: 'Il tuo messaggio',
      sendMsg: 'Invia messaggio',
    },
    followUs: 'Seguici',
    QA: 'Accesso rapido',
    logoB:
      "Corano, Hadith, orari delle preghiere, assistente IA e strumenti islamici quotidiani — tutto in un'unica piattaforma moderna.",
    whatsapp: 'Chatta su WhatsApp',
    rsr: 'Tutti i diritti riservati',
  },
  compareRelg: {
    note: 'Questa pagina presenta una panoramica comparativa delle principali religioni del mondo. Da una prospettiva islamica, il Corano afferma che le precedenti rivelazioni divine furono inviate alle nazioni passate, ma che nel tempo hanno subito alterazioni umane (tahrif). Il Corano dichiara: "In verità, Noi abbiamo fatto scendere il Monito, e Noi ne siamo i custodi" (15:9). Questa pagina esamina queste differenze alla luce delle evidenze storiche e testuali.',
    mainTitle: 'Un viaggio razionale attraverso le religioni',
    headerTitle: "Le domande che definiscono l'esistenza umana",
    story: `
Immaginate di aprire improvvisamente gli occhi e di trovarvi seduti su un treno di lusso che sfreccia ad alta velocità attraverso una notte infinita. Attorno a voi c'è ogni comfort immaginabile: pasti sontuosi serviti su tavoli eleganti, schermi luminosi che proiettano film e cuscini di seta su sedili morbidi.

Vi voltate verso i passeggeri accanto a voi e chiedete con ansia:
"Dove siamo? Chi ci ha messo su questo treno? E dove stiamo andando?"

Ma la vera sorpresa arriva dalle loro reazioni.

Uno di loro risponde freddamente:
"Che ti importa? Assaggia questo piatto, è incredibile."

Un altro replica con sarcasmo:
"Perché ti tormenti con domande simili? Rilassati e goditi il film."

Tutti intorno a voi sono immersi nei piaceri e nelle distrazioni del viaggio, eppure un profondo brivido vi attraversa perché sapete con certezza che questo treno sta correndo verso una destinazione finale, una stazione in cui ogni passeggero dovrà alla fine scendere.

Ed è in quel momento che sorge la vera domanda:

Vi perderete nel lusso e nello svago del viaggio, o continuerete a cercare le risposte alle tre domande più profonde:

Chi è il Creatore?
Perché siamo qui?
E cosa ci attende alla fine?

Questo treno è il pianeta Terra e il viaggio è la vostra vita.

Poiché gli esseri umani non possiedono queste risposte di per sé, le religioni sono emerse come "manuali di istruzioni", ognuno dei quali sostiene di provenire dal progettista del treno stesso.

Mettiamo quindi questi manuali sotto la lente di un esame calmo e razionale.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Chi è il Creatore?',

        intro: `
Da una prospettiva filosofica e logica, la "Causa Prima" dell'universo — il Creatore — deve essere totalmente trascendente, al di fuori della materia, del tempo e dello spazio. Se il Creatore fosse soggetto a fame, stanchezza, limiti fisici o vincoli spaziali, logicamente tale essere cesserebbe di essere il Creatore assoluto, diventando invece un'entità creata e dipendente. Un essere dipendente, in ultima analisi, non può fungere da fonte necessaria dell'intera esistenza.
  `,

        religions: {
          eastern: {
            title: 'Religioni orientali',
            examples: ['Induismo', 'Buddismo'],

            answerNature: `
Nella sua forma più antica, il Theravada, il Buddismo è generalmente non teistico; non si concentra sull'esistenza di un dio creatore, ma ritiene che l'esistenza scaturisca da processi naturali eterni, causalità e leggi interconnesse.

L'Induismo, d'altra parte, parla spesso di una realtà metafisica fondamentale chiamata "Brahman". Tuttavia, nel culto pratico, questa realtà suprema si manifesta attraverso innumerevoli manifestazioni e divinità, incluse forme dall'aspetto umano e animale, come Vishnu, Shiva e Kali.
      `,

            objectiveCritique: `
Da un punto di vista filosofico, il Buddismo affronta la sfida di spiegare come un universo altamente ordinato, governato da leggi coerenti e precisione fisica, possa avere origine senza una causa intelligente originale.

Nelle tradizioni induiste che abbracciano l'incarnazione divina e le rappresentazioni fisiche, il divino è associato a limiti, conflitti, fame, morte e forma materiale. Una divinità che può essere rappresentata fisicamente, incarnata o soggetta a processi naturali appare, da una prospettiva razionale, come parte del creato, piuttosto che come un essere che lo trascende totalmente.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Ebraismo',

            answerNature: `
L'Ebraismo afferma la fede in un Creatore che è al di sopra di idoli e rappresentazioni fisiche. Dio (YHWH) è inteso come Creatore del cielo e della terra ed è essenzialmente distinto dal creato.
      `,

            objectiveCritique: `
La preoccupazione filosofica sollevata qui non riguarda primariamente la trascendenza in sé, ma il limite percepito dell'universalità divina in alcuni passaggi della Bibbia ebraica. Alcuni testi ritraggono Dio in un rapporto di alleanza fortemente incentrato sui Figli d'Israele, in un modo interpretato dai critici come etnicamente esclusivo.

Inoltre, alcuni passaggi usano un linguaggio molto umano per descrivere Dio, come il "pentimento" per aver creato l'umanità (Genesi 6,6) o il "riposo" nel settimo giorno dopo la creazione (Esodo 31,17). I critici sostengono che tali descrizioni sollevino dubbi sul fatto se tali attributi debbano essere intesi letteralmente o metaforicamente.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Cristianesimo',

            answerNature: `
Il Cristianesimo insegna la fede in un unico Dio attraverso la dottrina della Trinità: Padre, Figlio e Spirito Santo. Secondo la dottrina dell'incarnazione, la seconda persona della Trinità — il Figlio — è entrata nella storia umana nella persona di Gesù Cristo, che è stato crocifisso ed è morto per la salvezza dell'umanità.
      `,

            objectiveCritique: `
Filosoficamente, i critici sostengono che la dottrina dell'incarnazione crei una tensione tra attributi divini e umani. Tradizionalmente, Dio è descritto come eterno, illimitato e al di là della morte, mentre gli esseri umani sono finiti, vulnerabili e mortali.

La sfida emerge quando piena divinità e piena umanità sono unite in un'unica persona. I critici si chiedono come un essere eterno e autosufficiente possa sperimentare simultaneamente fame, sonno, sofferenza e morte. Il problema è spesso formulato come una tensione tra trascendenza e incarnazione, piuttosto che come un semplice mistero teologico.
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
L'Islam presenta un concetto di Dio che è rigorosamente trascendente e indivisibile. Il Corano riassume questo concetto nella Sura Al-Ikhlas:

"Di': Egli è Allah, l'Uno. Allah, il Rifugio Eterno. Non ha generato e non è stato generato, e nessuno è pari a Lui." (Corano 112:1–4)

Il Creatore nell'Islam è completamente al di fuori della forma materiale e distinto dal creato:

"Nulla è simile a Lui." (Corano 42:11)

Dio non è limitato dal tempo, dallo spazio o da limiti fisici. Il Corano afferma anche:

"Non lo coglie né sonnolenza né sonno." (Corano 2:255)

Nella teologia islamica, Dio è inteso come autoconsistente, eterno, indipendente e assolutamente distinto dal creato.
      `,

            objectiveCritique: `
Da una prospettiva filosofica islamica, questa comprensione cerca di preservare la trascendenza assoluta evitando l'antropomorfismo e l'incarnazione. Il concetto mira ad allineare il Creatore con l'idea di una Causa Prima indipendente e necessaria che non è soggetta ai limiti dell'esistenza creata.
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

        title: 'Qual è il modo e lo scopo della vita?',

        intro: `
Se esiste un Creatore saggio, sarebbe irrazionale presumere che l'umanità sia stata lasciata senza linee guida che spieghino lo scopo dell'esistenza, la responsabilità morale e i principi secondo cui vivere. Proprio come un sistema complesso richiede istruzioni dal suo progettista, le religioni sostengono di fornire all'umanità un quadro per comprendere perché siamo qui e come dovremmo vivere.
  `,

        religions: {
          eastern: {
            title: 'Religioni orientali',

            examples: ['Induismo', 'Buddismo'],

            answerNature: `
Le tradizioni orientali, come il Buddismo e l'Induismo, si basano solitamente su insegnamenti filosofici, pratiche meditative e riflessioni sviluppate da maestri spirituali e saggi.

Nel Buddismo, l'obiettivo finale è la liberazione dalla sofferenza e la fuga dal ciclo della rinascita raggiungendo il Nirvana, uno stato di trascendenza e liberazione interiore.

In molte tradizioni induiste, l'obiettivo è la liberazione spirituale (Moksha), raggiunta attraverso devozione, conoscenza, meditazione o azione disciplinata.
      `,

            objectiveCritique: `
I critici sostengono che questi sistemi siano principalmente filosofici ed esperienziali, non basati su una rivelazione verificabile proveniente da un Creatore trascendente.

Alcuni sostengono inoltre che il forte accento sul distacco dalla vita mondana, sul monachesimo e sulla rinuncia possa entrare in conflitto con aspetti della natura umana che promuovono lo sviluppo sociale, il progresso scientifico, la vita familiare e la costruzione di civiltà.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Ebraismo',

            answerNature: `
Nell'Ebraismo, il modo di vivere è radicato nella legge dell'alleanza rivelata a Mosè e conservata nella Bibbia ebraica (Tanakh). Il quadro religioso si concentra sull'obbedienza ai comandamenti divini e sul mantenimento del rapporto di alleanza tra Dio e i Figli d'Israele.
      `,

            objectiveCritique: `
I critici sostengono che l'Ebraismo si sia storicamente sviluppato principalmente come una tradizione incentrata su un'alleanza legata a un popolo specifico, non come una religione missionaria universale rivolta a tutta l'umanità.

Dal punto di vista della critica testuale, alcuni studiosi — tra cui Richard Elliott Friedman e altri — sostengono che la Torah abbia attraversato processi di compilazione e redazione nel corso dei secoli, specialmente intorno e dopo l'esilio babilonese. Ciò ha spinto alcuni critici a chiedersi se il testo possa essere considerato una rivelazione perfettamente conservata e trasmessa direttamente nella sua forma originale.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Cristianesimo',

            answerNature: `
Il Cristianesimo insegna che il problema centrale dell'umanità è il peccato e la separazione da Dio, e che la salvezza si ottiene attraverso la fede nella morte sacrificale di Gesù e la sua risurrezione. Lo scopo della vita è quindi inteso attraverso la riconciliazione con Dio e la trasformazione spirituale.
      `,

            objectiveCritique: `
Storicamente, gli studiosi notano che non esistono manoscritti originali conservati dei Vangeli nella lingua aramaica parlata da Gesù. I testi più antichi sopravvissuti sono manoscritti greci scritti decenni dopo la vita di Gesù. Critici testuali, come Bart Ehrman, hanno documentato l'esistenza di innumerevoli varianti manoscritte tra le prime copie del Nuovo Testamento.

I critici sostengono inoltre che il Cristianesimo abbia storicamente posto maggiore enfasi sulla salvezza spirituale e personale che sullo sviluppo di un quadro giuridico o politico completo che regoli l'economia, il diritto penale o l'amministrazione statale. Alcuni storici suggeriscono che ciò abbia contribuito alla definitiva separazione tra religione e autorità statale in molte società occidentali.
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
L'Islam presenta una comprensione globale dello scopo umano che integra devozione spirituale e responsabilità mondana.

Il Corano afferma:

"Non ho creato i Jinn e gli uomini se non perché Mi adorino." (Corano 51:56)

Nel pensiero islamico, l'adorazione non è limitata ai rituali, ma include l'agire corretto, la giustizia, il comportamento etico, la ricerca della conoscenza e il contributo positivo alla società.

Gli insegnamenti islamici cercano di bilanciare la crescita spirituale con la partecipazione pratica alla vita familiare, all'economia, al governo, alla carità e alla responsabilità sociale.
      `,

            objectiveCritique: `
Da una prospettiva islamica, il Corano rappresenta una rivelazione conservata in modo unico. I musulmani sostengono che il suo testo sia rimasto invariato e sia stato continuamente trasmesso sia in manoscritti scritti che tramite la memorizzazione orale dalle prime generazioni dell'Islam.

Esempi spesso citati includono manoscritti antichi come il manoscritto coranico di Birmingham e la diffusa tradizione della memorizzazione orale mantenuta da milioni di musulmani in tutto il mondo.

La legge islamica (Sharia) è anche presentata come un quadro etico e legale completo che affronta aree come la finanza, la carità, il diritto di famiglia, il diritto penale e il governo. I sostenitori sostengono che ciò conferisca all'Islam le caratteristiche di un sistema morale e civile completo, non solo di una pura tradizione spirituale.
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

        title: 'Cosa succede dopo la Stazione Finale?',

        subtitle: 'Destino, giustizia e aldilà',

        intro: `
Senza l'esistenza di una giustizia suprema dopo la morte, la vita può apparire profondamente arbitraria e moralmente irrisolta. I tiranni possono morire senza rendere conto, mentre le vittime possono lasciare il mondo senza ottenere giustizia. Ciò solleva una delle domande filosofiche più antiche dell'umanità: la morte è la fine, o c'è un giudizio finale oltre la vita terrena?
  `,

        religions: {
          eastern: {
            title: 'Religioni orientali',

            examples: ['Induismo', 'Buddismo'],

            answerNature: `
Molte tradizioni orientali accettano il concetto di reincarnazione, dove l'anima o il flusso di coscienza attraversa cicli ripetuti di rinascita. Lo stato futuro di una persona è determinato dal karma: le conseguenze morali delle azioni passate.
      `,

            objectiveCritique: `
I critici sostengono che la reincarnazione ponga questioni filosofiche riguardanti la giustizia e la responsabilità. Se una persona subisce le conseguenze in una nuova vita a causa di azioni compiute in un'esistenza precedente di cui non può ricordare consapevolmente, allora lo scopo educativo e morale della punizione diventa difficile da comprendere.

Da questa prospettiva, la responsabilità senza memoria consapevole può apparire slegata da una significativa responsabilità morale.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismo e ateismo',

            answerNature: `
Le visioni del mondo materialistiche e ateistiche considerano generalmente la morte come la fine dell'esistenza consapevole. Gli esseri umani sono intesi come organismi biologici la cui coscienza cessa completamente dopo la morte fisica.
      `,

            objectiveCritique: `
I critici sostengono che il materialismo rigoroso lotti per fornire una base oggettiva per la moralità, la giustizia e il senso fondamentale. Se sia l'oppressore che la vittima svaniscono infine nel nulla senza rendere conto, allora concetti come sacrificio, dovere morale e giustizia possono apparire in ultima analisi soggettivi o costruzioni sociali, piuttosto che universalmente vincolanti.

Tuttavia, i sostenitori dell'etica laica sostengono che la moralità possa ancora emergere attraverso la ragione, l'empatia e la responsabilità sociale senza credere nell'aldilà.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Cristianesimo',

            answerNature: `
Il Cristianesimo insegna che la salvezza e la vita eterna si ottengono attraverso la fede in Gesù Cristo e l'accettazione della sua espiazione sacrificale per i peccati dell'umanità. Il paradiso e la salvezza eterna sono quindi strettamente legati alla fede in Cristo e alla grazia divina.
      `,

            objectiveCritique: `
I critici si chiedono come la salvezza basata principalmente sulla fede si rapporti ai principi di giustizia universale. Filosoficamente, alcuni sostengono che questo quadro possa implicare che una persona moralmente retta che lotta onestamente con l'accettazione di determinate dottrine teologiche possa vedersi negata la salvezza, mentre un'altra persona che ha commesso gravi misfatti ma ha accettato la fede poco prima della morte, possa comunque ottenere la ricompensa eterna.

I teologi cristiani rispondono spesso che la salvezza implica sia una fede sincera che un autentico pentimento, non solo una fede verbale.
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
L'Islam presenta l'aldilà come un sistema di piena responsabilità morale e giustizia divina.

Il Corano afferma:

"Nessun peccatore porterà il peso di un altro." (Corano 6:164)

La salvezza nell'Islam è costantemente legata sia alla fede che all'agire corretto:

"Coloro che credono e compiono il bene..." (ripetuto in tutto il Corano, incluso il 2:25)

L'Islam insegna che la vita terrena è una prova temporanea, non il luogo finale di ricompensa o punizione:

"Colui che ha creato la morte e la vita per mettervi alla prova, [per vedere] chi di voi sia il migliore nelle opere." (Corano 67:2)
      `,

            objectiveCritique: `
Nella teologia islamica, il Giorno del Giudizio rappresenta il tribunale supremo di giustizia in cui ogni azione, per quanto piccola, verrà resa conto.

Il Corano afferma:

"Chi fa il peso di un atomo di bene lo vedrà. E chi fa il peso di un atomo di male lo vedrà." (Corano 99:7–8)

Questo quadro cerca di preservare sia la responsabilità individuale che la giustizia assoluta, offrendo al contempo la certezza morale che nessun atto di oppressione o di bontà svanisca infine senza conseguenze.
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
      navbar: 'Confronto tra religioni',
      hero: {
        subtitle:
          "Un viaggio filosofico calmo ma profondo che esplora le più grandi domande dell'umanità: il Creatore, lo scopo dell'esistenza, la moralità e cosa ci attende dopo la morte.",

        subtitleHighlight:
          "il Creatore, lo scopo dell'esistenza, la moralità e cosa ci attende dopo la morte.",

        scrollIndicator: 'Scorri verso il basso per iniziare il viaggio',
      },

      storySection: {
        badge: 'Analogia del treno',

        titleLine1: 'Prima di porre domande',
        titleLine2: 'Sulle religioni...',

        intro:
          'Ogni essere umano giunge alla fine a un momento di silenzio in cui le distrazioni svaniscono – e le domande più profonde emergono finalmente in superficie.',

        ending: 'Questo treno è il pianeta Terra,',
        ending2: 'e il viaggio è la vostra vita.',
      },

      coreQuestions: {
        sectionLabel: 'Sezione principale',
        title: 'Domande fondamentali',

        answerNatureTitle: 'Natura della risposta',

        philosophicalDiscussionTitle: 'Discussione filosofica',

        referencesTitle: 'Riferimenti',
      },

      futureResearch: {
        sectionLabel: 'Ricerca futura',

        title: 'Altre domande',

        loaderBadge: 'Altre domande in arrivo',

        headingLine1: 'Il viaggio',
        headingLine2: 'continua...',

        description:
          'Ulteriori ricerche filosofiche e teologiche sono attualmente allo studio e in fase di preparazione con lo stesso approccio comparativo strutturato.',

        topics: [
          'Moralità',
          'Scienza',
          'Miracoli',
          'Coscienza',
          'Libero arbitrio',
          'Sofferenza',
          'Conservazione storica',
          'Profezie',
          'Natura umana',
          'Senso',
          'Civiltà',
          'Etica',
        ],

        footer: 'Nuove sezioni saranno aggiunte presto',
      },

      imageAlt: {
        hero: 'Confronto tra religioni',
      },
    },
  },
};
