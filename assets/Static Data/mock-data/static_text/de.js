export default {
  splash: {
    version: 'Version',
    practice: 'Übung',
    share: 'teilen',
    logo: 'Globaler Islam',
  },
  homeApp: {
    north: 'Norden',
    east: 'Osten',
    west: 'Westen',
    south: 'Süden',
    active: 'Qibla aktiv',
    disabled: 'Qibla-Kompass öffnen',
    welcome: 'Willkommen zurück',
    greet: 'Assalamu Alaikum',
    hour: 'Stunde',
    minute: 'Minute',
    second: 'Sekunde',
    toLeft: 'zu Ihrer Linken',
    toRight: 'zu Ihrer Rechten',
    fromNorth: 'vom Norden',
  },
  quranApp: {
    medinan: 'Medinensisch',
    meccan: 'Mekkanisch',
    arabicName: 'Name auf Arabisch',
    englishName: 'Name auf Englisch',
    details:
      'Wählen Sie einen Vers aus, um seine Übersetzung und seinen Tafsir (Erklärung) anzuzeigen',
    selectRes: 'Ressource auswählen',
    retry: 'wiederholen',
    loadErr1:
      'Erklärung kann nicht geladen werden. Bitte versuchen Sie es erneut.',
    loadErr2: 'Abruf fehlgeschlagen',
    author: 'Autor',
    explain: 'Erklärung',
  },
  qiblaApp: {
    compass: 'Qibla-Kompass',
    accuracy: 'Genauigkeit',
    offline: 'GPS offline',
    tracking: 'GPS-Tracking',
    aligned:
      'Sie blicken in Richtung Qibla. Halten Sie das Gerät ruhig für eine genaue Gebetsrichtung.',
    notAligned:
      'Halten Sie Ihr Gerät flach und drehen Sie es, bis der Pfeil auf die Qibla zeigt.',
    heading: 'Geräteausrichtung',
    turn: 'drehen',
    alignedQibla: 'Mit Qibla ausgerichtet',
  },
  aiApp: {
    answer: 'Antwort',
  },
  prayerApp: {
    locationRequired:
      'Standortdienste sind für genaue Gebetszeiten erforderlich.',
    schedule: 'Gebetszeiten',
    refresh: 'aktualisieren',
    sunrise: 'Sonnenaufgang',
    upcoming: 'Nächstes Gebet',
  },
  settingsApp: {
    reciterTitle: 'Adhan-Rezitator',
    reciterSub: 'Wählen Sie Ihre bevorzugte Stimme',
    notSelected: 'nicht ausgewählt',
    preview: 'Vorschau',
    cancel: 'abbrechen',
    muezzin: 'Muezzin',
    preNot: 'Vor-Adhan-Benachrichtigung',
    preNotDet: '15 Minuten vor der Gebetszeit benachrichtigen',
    theme: 'Dunkelmodus',
    dark: 'Aktuell dunkles Design',
    light: 'Aktuell helles Design',
    about: 'Über',
    selectReciter: 'Rezitator auswählen',
  },
  athan: {
    mainTitle: 'ADHAN · GEBETSRUF',
    stop: 'Adhan stoppen',
    error: 'Adhan-Audio kann nicht geladen werden',
    prayerTime: 'Gebetszeit',
    play: 'abspielen',
    pause: 'pause',
    dismiss: 'verwerfen',
  },
  athkarApp: {
    completed: 'Abgeschlossen',
    remaining: 'verbleibend',
    reset: 'zurücksetzen',
    athkar: 'Athkar',
    mention: 'Dhikr',
    descM: 'Beginnen Sie Ihren Tag mit Segen',
    descE: 'Beenden Sie Ihren Tag mit Schutz',
    remmember: 'Tägliche Erinnerung',
    cat: 'Kategorien von Bitten',
    category: 'Kategorie',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hadith suchen...',
      button: 'Suchen',
      books: {
        label: 'Buch',
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
      title: 'Die aktuelle Sprache wird noch nicht unterstützt',
      msg: 'Diese Sprache wird derzeit von der Hadith-Datenbank noch nicht unterstützt.',
      description:
        'Englisch wurde automatisch als Ersatzsprache ausgewählt, damit du weiterhin problemlos Hadithe suchen und durchsuchen kannst. Du kannst auch den Erweiterten Modus ausprobieren, um eine breitere mehrsprachige Unterstützung und bessere Ergebnisse zu erhalten.',
    },

    initialPlaceholder:
      'Suche nach einem Hadith, um Details wie Einstufung, Überlieferer und Referenz anzuzeigen',

    loading: {
      label: 'Hadithe werden geladen...',
    },

    hadithCard: {
      showMore: 'Mehr anzeigen',
      showLess: 'Weniger anzeigen',

      header: {
        hadithPrefix: 'Hadith Nr.',
        referencesTitle: 'Referenzen',
        referenceLabel: 'Referenz',
        inBookReference: 'Referenz im Buch',
        arabicReference: 'Arabische Referenz',
      },
    },

    emptyState: 'Keine Hadithe gefunden',

    pagination: {
      prev: 'Zurück',
      next: 'Weiter',
    },
  },

  switch: {
    title: {
      advanced: 'Erweiterter Modus',
      normal: 'Normaler Modus',
    },

    description: {
      advanced: 'Semantische Suche mit tieferem Verständnis',
      normal: 'Schnelle filterbasierte Suche',
    },
  },

  navbar: {
    routes: {
      home: 'Startseite',
      prayers: 'Gebete',
      quran: 'Koran',
      athkar: 'Adhkar',
      articles: 'Artikel',

      articlesNested: {
        islamicHistory: 'Islamische Geschichte',
        prayerInIslam: 'Das Gebet im Islam',
        womenInIslam: 'Frauen im Islam',
        purification: 'Reinigung und Gebetswaschung',
      },

      learn: 'Lernen',

      learnNested: {
        quranTajweed: 'Koran und Tajwid lernen',
        arabic: 'Arabisch lernen',
      },

      dashboard: 'Dashboard',
      aiAssistant: 'KI-Assistent',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Entdecke den Islam mit',
      clarity: 'Klarheit',
      peace: '& Frieden',
    },

    description:
      'Lerne, stelle Fragen und entdecke authentisches Verständnis durch KI und geleitetes Wissen, das für Klarheit und Reflexion entwickelt wurde.',

    actions: {
      introductionToIslam: 'Mehr über den Islam erfahren',
      islamQA: 'Islamische Fragen & Antworten (KI-Assistent)',
      continueWebsite: 'Zur Website weitergehen',
    },
  },
  learning: {
    quran: {
      title: 'Koran und Tajwid lernen',
      subtitle:
        'Verbessere deine Koranrezitation und verstehe die Regeln des Tajwid Schritt für Schritt.',
    },
    arabic: {
      title: 'Arabisch lernen',
      subtitle:
        'Baue deine Arabischkenntnisse mit klaren und strukturierten Lektionen auf.',
    },
    default: {
      title: 'Lernbereich',
      subtitle:
        'Entdecke Bildungsinhalte, die dein Wissen und Verständnis stärken.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadith-Sammlungen durchsuchen',

      subtitle:
        'Suche auf natürliche Weise mit Themen, Bedeutungen oder vollständigen Aussagen.',

      placeholder: 'Beispiel: Hadith über Freundlichkeit gegenüber den Eltern',

      button: 'Suchen',
    },

    header: {
      title: 'Hadith-Suchbibliothek',
      subtitle:
        'Entdecke authentische Hadithe sofort mit einem modernen Leseerlebnis.',
    },

    content: {
      heroTitle:
        'Entdecke authentische Hadith-Sammlungen mit leistungsstarker Suche',

      loading: {
        label: 'Hadith-Sammlungen werden durchsucht...',
      },

      error: {
        title: 'Hadith konnte nicht geladen werden',
        message:
          'Die Überlieferungen konnten derzeit nicht abgerufen werden. Bitte überprüfe deine Verbindung und versuche es erneut.',
      },

      empty: {
        title: 'Keine passenden Hadithe gefunden',
      },

      card: {
        reference: 'Hadith-Referenz',
        readMore: 'Vollständigen Hadith lesen',
      },
    },
  },

  home: {
    news: {
      title: 'Neuigkeiten aus der muslimischen Gemeinschaft',
      subtitle:
        'Bleibe über wichtige Entwicklungen aus der muslimischen Welt informiert',
    },

    prayer: {
      title: 'Gebets-Countdown',
      subtitle: 'Bereite dich auf das nächste Gebet vor',
      button: 'Gebetszeiten anzeigen',
      nextPrayerLabel: 'Nächstes Gebet um:',
    },

    athkar: {
      title: 'Morgen- & Abend-Athkar',
      subtitle: 'Tägliche Gedenkgebete, um dein Herz verbunden zu halten',
      button: 'Mehr Athkar anzeigen',
    },

    qibla: {
      title: 'Qibla-Richtung',
      subtitle: 'Finde die Richtung der Kaaba, wo immer du bist',
      locationLoading: 'Dein Standort wird ermittelt...',
      enableLocation: 'Standort aktivieren',
      refreshLocation: 'Qibla-Richtung aktualisieren',

      warning:
        'Wenn dein Gerät keine Orientierungssensoren unterstützt, kann die Genauigkeit des Kompasses beeinträchtigt sein.',

      errorTitle: 'Zugriff verweigert',
    },
  },

  prayers: {
    nextLabel: 'Nächstes Gebet um',

    header: {
      title: 'Gebetszeiten',
      subtitle: 'Ein täglicher Moment der Verbindung mit deinem Schöpfer',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Dein Standort wird ermittelt...',
      warning:
        'Wenn dein Betriebssystem keine Orientierung unterstützt, beeinflusst dies die Berechnung der Kompassrichtung.',
      errorTitle: 'Zugriff verweigert',
      enableLocation: 'Standort aktivieren',
      refreshLocation: 'Qibla-Richtung aktualisieren',
    },

    list: {
      warning: 'Die Zeiten können je nach Berechnungsmethode leicht variieren.',
    },
  },

  quran: {
    header: {
      title: 'Quran',
      subtitle: 'Dein täglicher Begleiter für Rezitation und Reflexion',
    },

    search: {
      noResultTitle: 'Keine Daten vorhanden',
      noResultMessage: 'Keine Daten zum Anzeigen',
    },
  },

  athkar: {
    title: 'Tägliche Gedenkgebete',
    subtitle: 'Bleibe beständig in deinem täglichen Gedenken und Nachdenken',
  },

  ai: {
    header: {
      title: 'Globaler Islamischer KI-Assistent',
      subtitle:
        'Erhalte klare islamische Antworten auf Grundlage von Quran, Sunnah und vertrauenswürdiger Gelehrsamkeit',
    },

    loading: {
      label: 'Wird geladen...',
    },

    error: {
      title: 'Anfragelimit erreicht',
      message:
        'Der Wissensdienst ist derzeit nicht erreichbar. Bitte versuche es in Kürze erneut.',
    },

    input: {
      placeholder: 'Stelle eine Frage über den Islam...',
    },

    suggestions: [
      'Kann ich beten, wenn ich mein Wudu verloren habe?',
      'Ist Zins (Riba) vollständig verboten?',
      'Regelung zur Arbeit in einer nicht-halalen Umgebung',
      'Kann ich während einer Reise beten?',
      'Ist das Tragen von Parfüm während des Gebets erlaubt?',
      'Was macht das Gebet ungültig?',
      'Regelung zum Verschieben von Gebeten wegen der Arbeit',
    ],

    footer: {
      disclaimer:
        'Dieser KI-Assistent wurde entwickelt, um Antworten auf Grundlage sorgfältig ausgewählter und zuverlässiger Wissensquellen bereitzustellen, einschließlich islamischer Referenzen und verifizierter Bildungsmaterialien.',

      note: 'Die Antworten dienen nur zu Informationszwecken und sollten bei Bedarf keine religiöse Beratung durch Gelehrte ersetzen.',
    },
  },

  footer: {
    disclaimer:
      'Alle angezeigten Inhalte stammen aus ihren ursprünglichen vertrauenswürdigen Quellen. Wir begrüßen jedes Feedback oder Hinweise auf Fehler, damit diese überprüft und korrigiert werden können.',

    tagline:
      'Mit Sorgfalt entwickelt, um authentische islamische Inhalte bereitzustellen',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Zurück',
    },

    sections: {
      hadithText: 'Hadith-Text',
      arabicText: 'Arabischer Text',
      explanation: 'Erklärung',
      authentication: 'Authentifizierung',
      lessons: 'Nutzen & Lehren',
    },
  },
  other: {
    note: 'Hinweis',
    theLanguage: 'die Sprache',
    part: 'Teil',
    translation: 'Übersetzung',
    verse: 'Vers',
    chapter: 'Kapitel',
    page: 'Seite',
    breakingNews: 'Eilmeldungen',
  },
  dailyRemined: {
    title: 'Licht für Heute',
    subtitle:
      'Halte inne und denke über einen Vers und einen Hadith nach, die für deinen Tag ausgewählt wurden.',
  },
  baseFooter: {
    contact: {
      title: 'Kontaktieren Sie uns',
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      msg: 'Ihre Nachricht',
      sendMsg: 'Nachricht senden',
    },
    followUs: 'Folge uns',
    QA: 'Schnellzugriff',
    logoB:
      'Quran, Hadith, Gebetszeiten, KI-Assistent und tägliche islamische Tools – alles auf einer modernen Plattform.',
    whatsapp: 'Auf WhatsApp chatten',
    rsr: 'Alle Rechte vorbehalten',
  },
  compareRelg: {
    note: 'Diese Seite bietet einen vergleichenden Überblick über die wichtigsten Weltreligionen. Aus islamischer Sicht bestätigt der Koran, dass früheren Völkern göttliche Offenbarungen gesandt wurden, diese jedoch im Laufe der Zeit durch menschliche Hand verändert wurden (Tahrif). Im Koran heißt es: „Gewiß, Wir haben die Ermahnung herabgesandt, und Wir werden ihr Hüter sein“ (15:9). Diese Seite untersucht diese Unterschiede im Lichte historischer und textlicher Belege.',
    mainTitle: 'Eine rationale Reise durch Religionen',
    headerTitle: 'Fragen, die die menschliche Existenz definieren',
    story: `
Stell dir vor, du öffnest plötzlich die Augen und findest dich in einem luxuriösen Zug wieder, der mit enormer Geschwindigkeit durch eine endlose Nacht rast. Um dich herum befindet sich jeder erdenkliche Komfort: opulente Mahlzeiten auf eleganten Tischen, leuchtende Bildschirme mit Filmen und weiche Seidenkissen auf bequemen Sitzen.

Du drehst dich zu den Mitreisenden und fragst besorgt:
„Wo sind wir? Wer hat uns in diesen Zug gesetzt? Und wohin fahren wir?“

Doch der wahre Schock kommt durch ihre Reaktionen.

Einer von ihnen antwortet kühl:
„Warum ist das wichtig? Probier dieses Essen — es ist unglaublich.“

Ein anderer sagt spöttisch:
„Warum sich mit solchen Fragen beschäftigen? Entspann dich einfach und schau den Film.“

Alle um dich herum sind von den Vergnügungen und Ablenkungen der Reise gefangen, doch eine tiefe Kälte geht durch dich — weil du mit Gewissheit weißt, dass dieser Zug sich auf ein endgültiges Ziel zubewegt, eine Station, an der jeder Passagier irgendwann aussteigen wird.

Und in diesem Moment entsteht die eigentliche Frage:

Wirst du dich in Luxus und Unterhaltung verlieren oder weiter nach Antworten auf die drei tiefsten Fragen suchen:

Wer ist der Schöpfer?
Warum sind wir hier?
Und was erwartet uns am Ende?

Dieser Zug ist der Planet Erde, und die Reise ist dein Leben.

Und weil Menschen diese Antworten nicht selbst besitzen, entstanden Religionen als „Anleitungen“, von denen jede behauptet, vom Designer des Zuges selbst zu stammen.

Lass uns diese „Handbücher“ unter die Lupe einer ruhigen und rationalen Untersuchung legen.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Wer ist der Schöpfer?',

        intro: `
Aus philosophischer und logischer Perspektive muss die „erste Ursache“ des Universums — der Schöpfer — vollkommen transzendent sein, jenseits von Materie, Zeit und Raum. Wäre der Schöpfer Hunger, Müdigkeit, körperlichen Einschränkungen oder räumlicher Begrenzung unterworfen, dann wäre ein solches Wesen logisch gesehen kein absoluter Schöpfer, sondern eine abhängige geschaffene Entität. Ein abhängiges Wesen kann nicht die notwendige Quelle aller Existenz sein.
  `,

        religions: {
          eastern: {
            title: 'Östliche Religionen',
            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
In seiner frühesten Theravāda-Form ist der Buddhismus allgemein nicht-theistisch; er konzentriert sich nicht auf die Existenz eines Schöpfergottes, sondern sieht Existenz als Ergebnis ewiger natürlicher Prozesse, Kausalität und miteinander verbundener Gesetze.

Der Hinduismus hingegen spricht oft von einer ultimativen metaphysischen Realität namens „Brahman“. In der Praxis manifestiert sich diese höchste Realität jedoch in unzähligen Formen und Gottheiten, einschließlich menschlicher und tierähnlicher Gestalten wie Vishnu, Shiva und Kali.
      `,

            objectiveCritique: `
Aus philosophischer Sicht steht der Buddhismus vor der Herausforderung zu erklären, wie ein hochgeordnetes Universum mit konsistenten Naturgesetzen ohne eine ursprüngliche intelligente Ursache entstehen kann.

In hinduistischen Traditionen, die göttliche Inkarnation und physische Darstellungen akzeptieren, wird das Göttliche mit Begrenzung, Konflikt, Hunger, Tod und materieller Form verbunden. Eine Gottheit, die physisch dargestellt, verkörpert oder natürlichen Prozessen unterworfen werden kann, erscheint aus rationaler Sicht eher als Teil der Schöpfung als als vollständig transzendent.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judentum',

            answerNature: `
Das Judentum bekennt sich zu einem einzigen Schöpfer, der über Götzen und physische Darstellung hinausgeht. Gott (JHWH) wird als Schöpfer von Himmel und Erde verstanden und ist grundlegend von der Schöpfung verschieden.
      `,

            objectiveCritique: `
Die philosophische Frage betrifft hier weniger die Transzendenz selbst, sondern die wahrgenommene Begrenzung göttlicher Universalität in bestimmten biblischen Passagen. Einige Texte stellen Gott in einen Bund, der stark auf Israel fokussiert ist, was Kritiker als ethnisch exklusiv interpretieren.

Darüber hinaus beschreiben einige Passagen Gott mit menschlicher Sprache, etwa dass er „bereute“, den Menschen geschaffen zu haben (Genesis 6:6), oder dass er am siebten Tag „ruhte“ (Exodus 31:17). Kritiker sehen darin die Frage, ob diese Aussagen wörtlich oder metaphorisch zu verstehen sind.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Christentum',

            answerNature: `
Das Christentum lehrt den Glauben an einen Gott durch die Lehre der Dreifaltigkeit: Vater, Sohn und Heiliger Geist. Nach der Inkarnationslehre trat die zweite Person der Dreifaltigkeit — der Sohn — als Jesus Christus in die Menschheitsgeschichte ein, der gekreuzigt wurde und für das Heil der Menschheit starb.
      `,

            objectiveCritique: `
Philosophisch argumentieren Kritiker, dass die Inkarnationslehre eine Spannung zwischen göttlichen und menschlichen Eigenschaften erzeugt. Gott wird traditionell als ewig, unbegrenzt und unsterblich beschrieben, während Menschen endlich und sterblich sind.

Das Problem entsteht, wenn volle Göttlichkeit und volle Menschlichkeit in einer Person vereint werden. Kritiker fragen, wie ein ewiges Wesen gleichzeitig Hunger, Schlaf, Leiden und Tod erfahren kann.
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
Der Islam präsentiert ein streng transzendentes und unteilbares Gottesbild. Der Koran fasst dies in Sure Al-Ikhlas zusammen:

„Sag: Er ist Allah, der Eine. Allah, der Absolute. Er zeugt nicht und ist nicht gezeugt, und niemand ist ihm gleich.“ (Koran 112:1–4)

Der Schöpfer im Islam ist vollständig jenseits von Materie und der Schöpfung nicht ähnlich:

„Nichts ist ihm gleich.“ (Koran 42:11)

Gott ist nicht an Zeit, Raum oder physische Begrenzungen gebunden. Der Koran sagt außerdem:

„Weder Müdigkeit noch Schlaf ergreifen ihn.“ (Koran 2:255)

In der islamischen Theologie wird Gott als selbstexistent, ewig und absolut verschieden von der Schöpfung verstanden.
      `,

            objectiveCritique: `
Aus islamisch-philosophischer Sicht zielt dieses Konzept darauf ab, absolute Transzendenz zu bewahren und Anthropomorphismus sowie Inkarnation zu vermeiden. Es entspricht der Idee einer notwendigen ersten Ursache.
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

        title: 'Was ist Methode und Zweck des Lebens?',

        intro: `
Wenn ein weiser Schöpfer existiert, wäre es unvernünftig anzunehmen, dass die Menschheit ohne Führung über den Sinn der Existenz, moralische Verantwortung und Lebensprinzipien gelassen wurde. So wie ein komplexes System Anweisungen seines Schöpfers benötigt, behaupten Religionen, einen Rahmen zu liefern, warum wir hier sind und wie wir leben sollen.
  `,

        religions: {
          eastern: {
            title: 'Östliche Religionen',
            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
Östliche Traditionen wie Buddhismus und Hinduismus basieren allgemein auf philosophischen Lehren, Meditation und spirituellen Einsichten von Lehrern und Weisen.

Im Buddhismus ist das Ziel die Befreiung vom Leiden und dem Kreislauf der Wiedergeburt durch das Erreichen des Nirvana.

In vielen hinduistischen Traditionen ist das Ziel die spirituelle Befreiung (Moksha) durch Hingabe, Wissen oder Meditation.
      `,

            objectiveCritique: `
Kritiker argumentieren, dass diese Systeme eher philosophisch und erfahrungsbasiert sind als auf einer überprüfbaren Offenbarung eines transzendenten Schöpfers beruhen.

Außerdem wird kritisiert, dass der starke Fokus auf Entsagung im Widerspruch zu menschlichen Bedürfnissen nach Gesellschaft, Entwicklung und Zivilisation stehen kann.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judentum',

            answerNature: `
Im Judentum basiert der Lebensweg auf dem Bundessetz, das Mose gegeben wurde und in der Hebräischen Bibel erhalten ist. Der Fokus liegt auf der Einhaltung der Gebote Gottes und dem Bund zwischen Gott und Israel.
      `,

            objectiveCritique: `
Kritiker sagen, dass sich das Judentum historisch eher als bundesorientierte Tradition eines bestimmten Volkes entwickelt hat als als universelle Missionsreligion.

Auch die redaktionelle Entstehung der Tora wird wissenschaftlich diskutiert.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Christentum',

            answerNature: `
Das Christentum lehrt, dass das Problem der Menschheit Sünde und Trennung von Gott ist und dass Erlösung durch den Glauben an Jesus Christus und seine Auferstehung kommt. Der Sinn des Lebens ist daher Versöhnung mit Gott und geistliche Transformation.
      `,

            objectiveCritique: `
Historiker weisen darauf hin, dass keine originalen Evangelien-Manuskripte im aramäischen Sprachraum erhalten sind. Die ältesten Texte sind griechisch und stammen Jahrzehnte nach Jesu Leben. Textkritik zeigt zahlreiche Varianten in Manuskripten.

Kritiker sagen außerdem, dass das Christentum stärker auf spirituelle Erlösung als auf ein umfassendes rechtliches System fokussiert ist.
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
Der Islam bietet ein ganzheitliches Verständnis des menschlichen Zwecks, das spirituelle Anbetung und weltliche Verantwortung verbindet.

Der Koran sagt:

„Ich habe die Dschinn und die Menschen nur erschaffen, damit sie Mir dienen.“ (Koran 51:56)

Anbetung umfasst auch Handlungen, Gerechtigkeit und Ethik.

Der Islam balanciert spirituelles und praktisches Leben.
      `,

            objectiveCritique: `
Aus islamischer Sicht ist der Koran eine bewahrte Offenbarung, die mündlich und schriftlich überliefert wurde.

Die Scharia wird als umfassendes moralisches und rechtliches System dargestellt.
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

        title: 'Was passiert nach der letzten Station?',

        subtitle: 'Schicksal, Gerechtigkeit und das Leben nach dem Tod',

        intro: `
Ohne eine endgültige Gerechtigkeit nach dem Tod kann das Leben willkürlich und unvollständig erscheinen. Tyrannen sterben möglicherweise ohne Verantwortung, Opfer ohne Gerechtigkeit. Dies wirft die Frage auf: Ist der Tod das Ende oder gibt es ein endgültiges Urteil?
  `,

        religions: {
          eastern: {
            title: 'Östliche Religionen',

            examples: ['Hinduismus', 'Buddhismus'],

            answerNature: `
Viele östliche Traditionen lehren Reinkarnation und Karma.
      `,

            objectiveCritique: `
Kritiker hinterfragen die Gerechtigkeit von Leiden ohne Erinnerung an frühere Handlungen.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismus und Atheismus',

            answerNature: `
Der Tod ist das Ende des Bewusstseins.
      `,

            objectiveCritique: `
Kritiker argumentieren, dass ohne jenseitige Gerechtigkeit Moral relativ wird.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Christentum',

            answerNature: `
Erlösung und ewiges Leben erfolgen durch Glauben an Christus.
      `,

            objectiveCritique: `
Kritiker hinterfragen die Gerechtigkeit einer auf Glauben basierenden Erlösung.
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
Der Islam lehrt vollständige moralische Verantwortung und den Jüngsten Tag.

„Jedes Atom an Gutem und Bösem wird gesehen.“
      `,

            objectiveCritique: `
Der Fokus liegt auf absoluter Gerechtigkeit und Verantwortung.
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
      navbar: 'Religionsvergleich',
      hero: {
        subtitle:
          'Eine ruhige, aber tief philosophische Reise durch die größten Fragen der Menschheit.',

        subtitleHighlight:
          'Schöpfer, Sinn der Existenz, Moral und das Leben nach dem Tod.',

        scrollIndicator: 'Scrollen, um die Reise zu beginnen',
      },

      storySection: {
        badge: 'Zug-Analogie',

        titleLine1: 'Bevor wir fragen',
        titleLine2: 'über Religionen...',

        intro:
          'Jeder Mensch erreicht einen Moment der Stille, in dem Ablenkungen verschwinden.',

        ending: 'Dieser Zug ist der Planet Erde,',
        ending2: 'und die Reise ist dein Leben.',
      },

      coreQuestions: {
        sectionLabel: 'Hauptbereich',
        title: 'Kernfragen',

        answerNatureTitle: 'Art der Antwort',

        philosophicalDiscussionTitle: 'Philosophische Diskussion',

        referencesTitle: 'Referenzen',
      },

      futureResearch: {
        sectionLabel: 'Zukünftige Forschung',

        title: 'Weitere Fragen',

        loaderBadge: 'Weitere Fragen kommen',

        headingLine1: 'Die Reise',
        headingLine2: 'geht weiter...',

        description: 'Weitere Untersuchungen werden vorbereitet.',

        topics: [
          'Moral',
          'Wissenschaft',
          'Wunder',
          'Bewusstsein',
          'Freier Wille',
          'Leiden',
          'Geschichte',
          'Prophezeiungen',
          'Menschliche Natur',
          'Sinn',
          'Zivilisationen',
          'Ethik',
        ],

        footer: 'Neue Abschnitte folgen bald',
      },

      imageAlt: {
        hero: 'Religionsvergleich',
      },
    },
  },
};
