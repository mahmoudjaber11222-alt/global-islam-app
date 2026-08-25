export default {
  splash: {
    version: 'version',
    practice: 'entraînement',
    share: 'partager',
    logo: 'islam mondial',
  },
  homeApp: {
    north: 'nord',
    east: 'est',
    west: 'ouest',
    south: 'sud',
    active: 'qibla active',
    disabled: 'Ouvrir la boussole Qibla',
    welcome: 'Bon retour',
    greet: 'Assalamu Alaikum',
    hour: 'heure',
    minute: 'minute',
    second: 'seconde',
    toLeft: 'à votre gauche',
    toRight: 'à votre droite',
    fromNorth: 'du nord',
  },
  quranApp: {
    medinan: 'Médinoise',
    meccan: 'Mecquoise',
    arabicName: 'nom en arabe',
    englishName: 'nom en anglais',
    details:
      'Sélectionnez un verset pour voir sa traduction et son tafsir (explication)',
    selectRes: 'Sélectionner une ressource',
    retry: 'réessayer',
    loadErr1: "Impossible de charger l'explication. Veuillez réessayer.",
    loadErr2: 'Échec de la récupération',
    author: 'auteur',
    explain: 'Explication',
  },
  qiblaApp: {
    compass: 'Boussole Qibla',
    accuracy: 'précision',
    offline: 'GPS hors ligne',
    tracking: 'Suivi GPS',
    aligned:
      'Vous faites face à la Qibla. Maintenez stable pour une direction de prière précise.',
    notAligned:
      "Tenez votre appareil à plat et tournez jusqu'à ce que la flèche pointe vers la Qibla.",
    heading: "Orientation de l'appareil",
    turn: 'tourner',
    alignedQibla: 'Aligné avec la Qibla',
  },
  aiApp: {
    answer: 'réponse',
  },
  prayerApp: {
    locationRequired:
      'Les services de localisation sont nécessaires pour des horaires de prière précis.',
    schedule: 'Horaire des prières',
    refresh: 'actualiser',
    sunrise: 'Lever du soleil',
    upcoming: 'Prochaine prière',
  },
  settingsApp: {
    reciterTitle: "Récitateur de l'Adhan",
    reciterSub: 'Choisissez votre voix préférée',
    notSelected: 'non sélectionné',
    preview: 'aperçu',
    cancel: 'annuler',
    muezzin: 'Muezzin',
    preNot: 'Notification pré-Adhan',
    preNotDet: "Notifier 15 minutes avant l'heure de la prière",
    theme: 'Mode sombre',
    dark: 'Thème sombre actuellement',
    light: 'Thème clair actuellement',
    about: 'À propos',
    selectReciter: 'Sélectionner le récitateur',
  },
  athan: {
    mainTitle: 'ADHAN · APPEL À LA PRIÈRE',
    stop: "Arrêter l'Adhan",
    error: "Impossible de charger l'audio de l'Adhan",
    prayerTime: 'Heure de prière',
    play: 'lecture',
    pause: 'pause',
    dismiss: 'ignorer',
  },
  athkarApp: {
    completed: 'Terminé',
    remaining: 'restant',
    reset: 'réinitialiser',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Commencez votre journée avec des bénédictions',
    descE: 'Terminez votre journée avec protection',
    remmember: 'Souvenir quotidien',
    cat: 'catégories de supplications',
    category: 'Catégorie',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Rechercher un hadith...',
      button: 'Rechercher',
      books: {
        label: 'Livre',
        options: {
          bukhari: 'Boukhari',
          muslim: 'Mouslim',
          tirmidhi: 'Tirmidhi',
          abudawood: 'Abou Dawood',
          nasai: 'Nasaï',
          ibnmajah: 'Ibn Majah',
        },
      },
    },

    fallbackLanguageToast: {
      title: "La langue actuelle n'est pas encore prise en charge",
      msg: "Cette langue n'est actuellement pas encore prise en charge par la base de données des hadiths.",
      description:
        "L'anglais a été sélectionné automatiquement comme langue de secours afin que vous puissiez toujours rechercher et consulter les hadiths facilement. Vous pouvez également essayer le Mode Avancé pour une prise en charge multilingue plus large et de meilleurs résultats.",
    },

    initialPlaceholder:
      'Recherchez un hadith pour afficher des détails tels que l’authenticité, les narrateurs et la référence',

    loading: {
      label: 'Chargement des hadiths...',
    },

    hadithCard: {
      showMore: 'Afficher plus',
      showLess: 'Afficher moins',

      header: {
        hadithPrefix: 'Hadith n°',
        referencesTitle: 'Références',
        referenceLabel: 'Référence',
        inBookReference: 'Référence dans le livre',
        arabicReference: 'Référence arabe',
      },
    },

    emptyState: 'Aucun hadith trouvé',

    pagination: {
      prev: 'Précédent',
      next: 'Suivant',
    },
  },

  switch: {
    title: {
      advanced: 'Mode avancé',
      normal: 'Mode normal',
    },

    description: {
      advanced: 'Recherche sémantique avec une compréhension plus approfondie',
      normal: 'Recherche rapide basée sur des filtres',
    },
  },

  navbar: {
    routes: {
      home: 'Accueil',
      prayers: 'Prières',
      quran: 'Coran',
      athkar: 'Adhkars',
      articles: 'Articles',

      articlesNested: {
        islamicHistory: 'Histoire islamique',
        prayerInIslam: 'La prière en Islam',
        womenInIslam: 'Les femmes en Islam',
        purification: 'Purification et ablutions',
      },

      learn: 'Apprendre',

      learnNested: {
        quranTajweed: 'Apprendre le Coran et le Tajwid',
        arabic: 'Apprendre l’arabe',
      },

      dashboard: 'Tableau de bord',
      aiAssistant: 'Assistant IA',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Explorez l’Islam avec',
      clarity: 'Clarté',
      peace: '& Sérénité',
    },

    description:
      'Apprenez, posez des questions et découvrez une compréhension authentique grâce à l’IA et à un savoir guidé conçu pour la clarté et la réflexion.',

    actions: {
      introductionToIslam: 'Découvrir l’Islam',
      islamQA: 'Questions & Réponses sur l’Islam (Assistant IA)',
      continueWebsite: 'Continuer vers le site',
    },
  },
  learning: {
    quran: {
      title: 'Apprendre le Coran et le Tajwid',
      subtitle:
        'Améliorez votre récitation du Coran et comprenez les règles du Tajwid étape par étape.',
    },
    arabic: {
      title: 'Apprendre l’arabe',
      subtitle:
        'Développez vos compétences en langue arabe grâce à des leçons claires et structurées.',
    },
    default: {
      title: "Section d'apprentissage",
      subtitle:
        'Explorez un contenu éducatif conçu pour renforcer vos connaissances et votre compréhension.',
    },
  },
  explore: {
    searchBar: {
      title: 'Rechercher dans les collections de Hadiths',

      subtitle:
        'Recherchez naturellement à l’aide de sujets, de significations ou de phrases complètes.',

      placeholder: 'Exemple : Hadith sur la bonté envers les parents',

      button: 'Rechercher',
    },

    header: {
      title: 'Bibliothèque de recherche de Hadiths',
      subtitle:
        'Explorez instantanément des Hadiths authentiques avec une expérience de lecture moderne.',
    },

    content: {
      heroTitle:
        'Découvrez des collections authentiques de Hadiths grâce à une recherche puissante',

      loading: {
        label: 'Recherche dans les collections de Hadiths...',
      },

      error: {
        title: 'Impossible de charger le Hadith',
        message:
          'Nous n’avons pas pu récupérer les narrations pour le moment. Veuillez vérifier votre connexion et réessayer.',
      },

      empty: {
        title: 'Aucun Hadith correspondant trouvé',
      },

      card: {
        reference: 'Référence du Hadith',
        readMore: 'Lire le Hadith complet',
      },
    },
  },

  home: {
    news: {
      title: 'Actualités de la communauté musulmane',
      subtitle: 'Restez informé des mises à jour importantes du monde musulman',
    },

    prayer: {
      title: 'Compte à rebours de la prière',
      subtitle: 'Préparez-vous pour la prochaine prière',
      button: 'Voir les horaires de prière',
      nextPrayerLabel: 'Prochaine prière à :',
    },

    athkar: {
      title: 'Adhkars du matin et du soir',
      subtitle: 'Des invocations quotidiennes pour garder votre cœur connecté',
      button: 'Voir plus d’adhkars',
    },

    qibla: {
      title: 'Direction de la Qibla',
      subtitle: 'Trouvez la direction de la Kaaba où que vous soyez',
      locationLoading: 'Obtention de votre position...',
      enableLocation: 'Activer la localisation',
      refreshLocation: 'Actualiser la direction de la Qibla',

      warning:
        'Si votre appareil ne prend pas en charge les capteurs d’orientation, la précision de la boussole peut être affectée.',

      errorTitle: 'Permission refusée',
    },
  },

  prayers: {
    nextLabel: 'Prochaine prière à',

    header: {
      title: 'Horaires de prière',
      subtitle: 'Un moment quotidien de connexion avec votre Créateur',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Obtention de votre position...',
      warning:
        'Si votre système d’exploitation ne prend pas en charge l’orientation, cela affectera les calculs de direction de la boussole.',
      errorTitle: 'Permission refusée',
      enableLocation: 'Activer la localisation',
      refreshLocation: 'Actualiser la direction de la Qibla',
    },

    list: {
      warning:
        'Les horaires peuvent varier légèrement selon la méthode de calcul.',
    },
  },

  quran: {
    header: {
      title: 'Coran',
      subtitle: 'Votre compagnon quotidien pour la récitation et la réflexion',
    },

    search: {
      noResultTitle: 'Les données sont vides',
      noResultMessage: 'Aucune donnée à afficher',
    },
  },

  athkar: {
    title: 'Invocations quotidiennes',
    subtitle: 'Restez constant dans vos invocations et réflexions quotidiennes',
  },

  ai: {
    header: {
      title: 'Assistant IA Islamique Global',
      subtitle:
        'Recevez des réponses islamiques claires fondées sur le Coran, la Sunna et des savants de confiance',
    },

    loading: {
      label: 'Chargement...',
    },

    error: {
      title: 'Limite de requêtes atteinte',
      message:
        'Impossible d’accéder au service de connaissance pour le moment. Veuillez réessayer dans quelques instants.',
    },

    input: {
      placeholder: 'Posez une question sur l’Islam...',
    },

    suggestions: [
      'Puis-je prier si j’ai perdu mes ablutions ?',
      'Les intérêts (riba) sont-ils totalement interdits ?',
      'Règle concernant le travail dans un environnement non halal',
      'Puis-je prier pendant un voyage ?',
      'Est-il permis de porter du parfum pendant la prière ?',
      'Qu’est-ce qui invalide la prière ?',
      'Règle concernant le retard des prières à cause du travail',
    ],

    footer: {
      disclaimer:
        'Cet assistant IA est conçu pour fournir des réponses basées sur des sources de connaissance fiables et soigneusement sélectionnées, y compris des références islamiques et du matériel éducatif vérifié.',

      note: 'Les réponses sont fournies à titre informatif et ne doivent pas remplacer l’avis d’un savant lorsque cela est nécessaire.',
    },
  },

  footer: {
    disclaimer:
      'Tout le contenu affiché provient de ses sources originales fiables. Nous accueillons volontiers tout retour ou signalement d’erreurs afin qu’ils puissent être examinés et corrigés.',

    tagline: 'Conçu avec soin pour servir un contenu islamique authentique',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Retour',
    },

    sections: {
      hadithText: 'Texte du Hadith',
      arabicText: 'Texte arabe',
      explanation: 'Explication',
      authentication: 'Authentification',
      lessons: 'Bénéfices & Enseignements',
    },
  },
  other: {
    note: 'Note',
    theLanguage: 'la langue',
    part: 'Partie',
    translation: 'Traduction',
    verse: 'Verset',
    chapter: 'Chapitre',
    page: 'Page',
    breakingNews: 'Dernières nouvelles',
  },
  dailyRemined: {
    title: 'Lumière du jour',
    subtitle:
      'Faites une pause et réfléchissez à un verset et un hadith choisis pour votre journée.',
  },
  baseFooter: {
    contact: {
      title: 'Contactez-nous',
      name: 'Votre nom',
      email: 'Votre email',
      msg: 'Votre message',
      sendMsg: 'Envoyer le message',
    },
    followUs: 'Suivez-nous',
    QA: 'Accès rapide',
    logoB:
      'Coran, Hadith, heures de prière, assistant IA et outils islamiques quotidiens — tout dans une seule plateforme moderne.',
    whatsapp: 'Discuter sur WhatsApp',
    rsr: 'Tous droits réservés',
  },
  compareRelg: {
    note: "Cette page présente un aperçu comparatif des principales religions du monde. D’un point de vue islamique, le Coran affirme que des révélations divines antérieures ont été envoyées aux nations passées, mais qu'elles ont subi au fil du temps des altérations humaines (tahrif). Le Coran déclare : « En vérité c'est Nous qui avons fait descendre le Coran, et c'est Nous qui en sommes gardien » (15:9). Cette page examine ces différences à la lumière des preuves historiques et textuelles.",
    mainTitle: 'Un voyage rationnel à travers les religions',
    headerTitle: "Les questions qui définissent l'existence humaine",
    story: `
Imaginez ouvrir les yeux soudainement, pour vous retrouver assis dans un train luxueux filant à une vitesse prodigieuse à travers une nuit sans fin. Autour de vous, tout le confort imaginable : des repas somptueux servis sur des tables élégantes, des écrans brillants projetant des films, et des oreillers en soie sur des sièges moelleux.

Vous vous tournez vers les passagers à vos côtés et leur demandez avec inquiétude :
"Où sommes-nous ? Qui nous a mis dans ce train ? Et vers quoi nous dirigeons-nous ?"

Mais la véritable surprise vient de leurs réactions.

L'un d'eux répond froidement :
"Qu'est-ce que ça peut faire ? Goûte ce plat, il est incroyable."

Un autre dit sur un ton moqueur :
"Pourquoi te soucier de ces questions ? Détends-toi et profite du film."

Tous autour de vous sont absorbés par les plaisirs et les distractions du voyage, pourtant, un profond frisson vous parcourt, car vous savez avec certitude que ce train se dirige vers une destination finale, une gare où chaque passager devra finir par descendre.

Et à ce moment-là, la vraie question surgit :

Allez-vous vous perdre dans le luxe et le divertissement du voyage, ou allez-vous continuer à chercher des réponses aux trois questions les plus profondes :

Qui est le Créateur ?
Pourquoi sommes-nous ici ?
Et qu'est-ce qui nous attend à la fin ?

Ce train est la planète Terre, et le voyage est votre vie.

Et parce que les êtres humains ne possèdent pas ces réponses par eux-mêmes, des religions ont vu le jour comme des "manuels d'instructions", prétendant chacune provenir du Concepteur du train lui-même.

Alors, mettons ces manuels sous la loupe d'un examen calme et rationnel.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Qui est le Créateur ?',

        intro: `
D'un point de vue philosophique et logique, la "Première Cause" de l'univers — le Créateur — doit être totalement transcendante, au-delà de la matière, du temps et de l'espace. Si le Créateur était sujet à la faim, à la fatigue, aux limites physiques ou au confinement spatial, alors logiquement, un tel être cesserait d'être un Créateur absolu et deviendrait plutôt une entité créée et dépendante. Un être dépendant ne peut, en fin de compte, servir de source nécessaire à toute l'existence.
  `,

        religions: {
          eastern: {
            title: 'Religions orientales',
            examples: ['Hindouisme', 'Bouddhisme'],

            answerNature: `
Sous sa forme la plus ancienne, le Theravāda, le bouddhisme est généralement non théiste ; il ne se concentre pas sur l'existence d'une divinité créatrice, mais considère que l'existence naît de processus naturels éternels, de la causalité et de lois interconnectées.

L'hindouisme, en revanche, parle souvent d'une réalité métaphysique fondamentale appelée "Brahman". Cependant, dans le culte pratique, cette réalité suprême s'exprime à travers d'innombrables manifestations et divinités, y compris des formes à apparence humaine ou animale, telles que Vishnu, Shiva et Kali.
      `,

            objectiveCritique: `
D'un point de vue philosophique, le bouddhisme fait face au défi d'expliquer comment un univers hautement ordonné, régi par des lois cohérentes et une précision physique, pourrait émerger sans une cause intelligente originelle.

Dans les traditions hindoues qui adoptent l'incarnation divine et les représentations physiques, le divin est associé à la limitation, au conflit, à la faim, à la mort et à la forme matérielle. Une divinité qui peut être représentée physiquement, incarnée ou soumise à des processus naturels semble, d'une perspective rationnelle, participer à la création plutôt que de la transcender complètement.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaïsme',

            answerNature: `
Le judaïsme affirme la croyance en un Créateur qui est au-dessus des idoles et de la représentation physique. Dieu (YHVH) est compris comme le Créateur des cieux et de la terre, et est fondamentalement distinct de la création.
      `,

            objectiveCritique: `
La préoccupation philosophique soulevée ici ne concerne pas principalement la transcendance en soi, mais la limitation perçue de l'universalité divine dans certains passages de la Bible hébraïque. Certains textes dépeignent Dieu dans une relation d'alliance fortement centrée sur les Enfants d'Israël d'une manière que les critiques interprètent comme étant ethniquement exclusive.

De plus, certains passages décrivent Dieu en utilisant un langage très proche de l'humain, comme le fait de "se repentir" d'avoir créé l'humanité (Genèse 6:6) ou de "se reposer" le septième jour après la création (Exode 31:17). Les critiques soutiennent que de telles descriptions soulèvent des questions sur la manière dont ces attributs doivent être compris, littéralement ou métaphoriquement.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Christianisme',

            answerNature: `
Le christianisme enseigne la croyance en un seul Dieu à travers la doctrine de la Trinité : le Père, le Fils et le Saint-Esprit. Selon la doctrine de l'incarnation, la seconde personne de la Trinité — le Fils — est entrée dans l'histoire humaine en la personne de Jésus-Christ, qui fut crucifié et est mort pour le salut de l'humanité.
      `,

            objectiveCritique: `
Philosophiquement, les critiques soutiennent que la doctrine de l'incarnation crée une tension entre les attributs divins et humains. Traditionnellement, Dieu est décrit comme étant éternel, illimité et au-delà de la mort, tandis que les êtres humains sont finis, vulnérables et mortels.

Le défi surgit lorsque la divinité complète et l'humanité complète sont unies en une seule personne. Les critiques se demandent comment un être éternel et autosuffisant pourrait simultanément faire l'expérience de la faim, du sommeil, de la souffrance et de la mort. Le problème est souvent formulé comme une tension entre la transcendance et l'incarnation plutôt que comme un simple mystère théologique.
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
L'Islam présente un concept de Dieu strictement transcendant et indivisible. Le Coran résume ce concept dans la sourate Al-Ikhlas :

"Dis : Il est Allah, l'Unique. Allah, le Refuge éternel. Il n'a jamais engendré, n'a pas été engendré non plus, et nul n'est égal à Lui." (Coran 112:1–4)

Le Créateur, dans l'Islam, est totalement au-delà de la forme matérielle et est différent de la création :

"Rien n'est comparable à Lui." (Coran 42:11)

Dieu n'est pas limité par le temps, l'espace ou la limitation physique. Le Coran déclare également :

"Ni somnolence ni sommeil ne Le saisissent." (Coran 2:255)

Dans la théologie islamique, Dieu est compris comme étant subsistant par Lui-même, éternel, indépendant et absolument distinct de la création.
      `,

            objectiveCritique: `
D'un point de vue philosophique islamique, cette compréhension cherche à préserver la transcendance absolue en évitant l'anthropomorphisme et l'incarnation. Le concept vise à aligner le Créateur avec la notion d'une Première Cause indépendante et nécessaire qui n'est pas sujette aux limites de l'existence créée.
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

        title: 'Quelle est la méthode et le but de la vie ?',

        intro: `
S'il existe un Créateur sage, alors il serait irrationnel de supposer que l'humanité a été laissée sans orientation expliquant le but de l'existence, la responsabilité morale et les principes selon lesquels la vie doit être vécue. Tout comme un système complexe nécessite des instructions de la part de son concepteur, les religions prétendent fournir à l'humanité un cadre pour comprendre pourquoi nous sommes ici et comment nous devrions vivre.
  `,

        religions: {
          eastern: {
            title: 'Religions orientales',

            examples: ['Hindouisme', 'Bouddhisme'],

            answerNature: `
Les traditions orientales, comme le bouddhisme et l'hindouisme, s'appuient généralement sur des enseignements philosophiques, des pratiques de méditation et des réflexions développées par des maîtres spirituels et des sages.

Dans le bouddhisme, le but ultime est la libération de la souffrance et l'échappatoire au cycle de la renaissance en atteignant le Nirvana, un état de transcendance et de libération intérieure.

Dans de nombreuses traditions hindoues, le but est la libération spirituelle (Moksha), atteinte par la dévotion, la connaissance, la méditation ou l'action disciplinée.
      `,

            objectiveCritique: `
Les critiques soutiennent que ces systèmes sont principalement philosophiques et expérientiels plutôt que fondés sur une révélation vérifiable provenant d'un Créateur transcendant.

Certains soutiennent également qu'un fort accent mis sur le détachement de la vie mondaine, le monachisme et le renoncement peut entrer en conflit avec des aspects de la nature humaine qui favorisent le développement social, le progrès scientifique, la vie de famille et la construction de civilisations.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaïsme',

            answerNature: `
Dans le judaïsme, la méthode de vie est enracinée dans la loi de l'alliance révélée à Moïse et préservée au sein de la Bible hébraïque (Tanakh). Le cadre religieux se concentre sur l'obéissance aux commandements divins et sur le maintien de la relation d'alliance entre Dieu et les Enfants d'Israël.
      `,

            objectiveCritique: `
Les critiques soutiennent que le judaïsme s'est historiquement développé principalement comme une tradition centrée sur une alliance liée à un peuple particulier plutôt que comme une religion universellement missionnaire destinée à toute l'humanité.

Du point de vue de la critique textuelle, certains érudits — dont Richard Elliott Friedman et d'autres — soutiennent que la Torah a subi des processus de compilation et de rédaction au fil des siècles, particulièrement autour et après l'exil babylonien. Cela a amené certains critiques à se demander si le texte peut être considéré comme une révélation parfaitement préservée et transmise directement sous sa forme originale.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Christianisme',

            answerNature: `
Le christianisme enseigne que le problème central de l'humanité est le péché et la séparation d'avec Dieu, et que le salut est obtenu par la foi en la mort sacrificielle et la résurrection de Jésus-Christ. Le but de la vie est donc compris à travers la réconciliation avec Dieu et la transformation spirituelle.
      `,

            objectiveCritique: `
Historiquement, les érudits notent qu'aucun manuscrit original des Évangiles ne survit dans la langue araméenne que parlait Jésus. Les textes les plus anciens conservés sont des manuscrits grecs écrits des décennies après la vie de Jésus. Les critiques textuels, comme Bart Ehrman, ont documenté l'existence de nombreuses variations manuscrites entre les premières copies du Nouveau Testament.

Les critiques soutiennent également que le christianisme a historiquement mis davantage l'accent sur le salut spirituel et personnel que sur le développement d'un cadre juridique ou politique complet régissant l'économie, le droit pénal ou l'administration étatique. Certains historiens suggèrent que cela a contribué à la séparation éventuelle entre la religion et l'autorité étatique dans de nombreuses sociétés occidentales.
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
L'Islam présente une compréhension complète du but humain qui intègre à la fois la dévotion spirituelle et la responsabilité mondaine.

Le Coran déclare :

"Je n'ai créé les djinns et les hommes que pour qu'ils M'adorent." (Coran 51:56)

Dans la pensée islamique, l'adoration ne se limite pas aux rituels, mais inclut l'action juste, la justice, la conduite éthique, la recherche du savoir et la contribution positive à la société.

Les enseignements islamiques visent à équilibrer la croissance spirituelle avec une participation pratique à la vie de famille, l'économie, la gouvernance, la charité et la responsabilité sociale.
      `,

            objectiveCritique: `
D'un point de vue islamique, le Coran représente une révélation préservée de manière unique. Les musulmans soutiennent que son texte est resté inchangé et a été transmis continuellement tant dans des manuscrits écrits que par la mémorisation orale depuis les premières générations de l'Islam.

Les exemples souvent cités incluent des manuscrits anciens comme le manuscrit du Coran de Birmingham et la tradition de mémorisation orale généralisée maintenue par des millions de musulmans dans le monde entier.

La loi islamique (Charia) est également présentée comme un cadre éthique et juridique complet abordant des domaines tels que la finance, la charité, le droit de la famille, la justice pénale et la gouvernance. Les partisans soutiennent que cela donne à l'Islam les caractéristiques d'un système moral et civilisationnel complet plutôt que d'une tradition purement spirituelle.
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

        title: 'Que se passe-t-il après la Gare Finale ?',

        subtitle: 'Destin, justice et au-delà',

        intro: `
Sans l'existence d'une justice suprême après la mort, la vie peut sembler profondément arbitraire et moralement irrésolue. Les tyrans peuvent mourir sans rendre de comptes, tandis que les victimes peuvent quitter le monde sans recevoir justice. Cela soulève l'une des plus anciennes questions philosophiques de l'humanité : la mort est-elle la fin, ou y a-t-il un jugement final au-delà de la vie terrestre ?
  `,

        religions: {
          eastern: {
            title: 'Religions orientales',

            examples: ['Hindouisme', 'Bouddhisme'],

            answerNature: `
De nombreuses traditions orientales adoptent le concept de réincarnation, où l'âme ou le flux de conscience passe par des cycles répétés de renaissance. La condition future d'une personne est déterminée par le karma : les conséquences morales des actions passées.
      `,

            objectiveCritique: `
Les critiques soutiennent que la réincarnation soulève des questions philosophiques concernant la justice et la responsabilité. Si une personne subit les conséquences dans une nouvelle vie d'actions commises dans une existence antérieure qu'elle ne peut pas se rappeler consciemment, alors le but éducatif et moral de la punition devient difficile à comprendre.

Dans cette perspective, une responsabilité sans mémoire consciente peut sembler déconnectée d'une responsabilité morale significative.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Matérialisme et athéisme',

            answerNature: `
Les visions du monde matérialistes et athées considèrent généralement la mort comme la fin de l'existence consciente. Les êtres humains sont compris comme des organismes biologiques dont la conscience cesse complètement après la mort physique.
      `,

            objectiveCritique: `
Les critiques soutiennent que le matérialisme strict peine à fournir une base objective pour la moralité, la justice et le sens fondamental. Si tant l'oppresseur que la victime disparaissent finalement dans le néant sans avoir à rendre de comptes, alors des concepts tels que le sacrifice, le devoir moral et la justice peuvent sembler, en fin de compte, être subjectifs ou des constructions sociales plutôt que d'être universellement contraignants.

Cependant, les défenseurs de l'éthique séculière soutiennent que la moralité peut toujours émerger à travers la raison, l'empathie et la responsabilité sociale sans croire en un au-delà.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Christianisme',

            answerNature: `
Le christianisme enseigne que le salut et la vie éternelle sont atteints par la foi en Jésus-Christ et l'acceptation de son expiation sacrificielle pour les péchés de l'humanité. Le ciel et le salut éternel sont donc étroitement liés à la foi en Christ et à la grâce divine.
      `,

            objectiveCritique: `
Les critiques se demandent comment le salut basé principalement sur la croyance se rapporte aux principes de justice universelle. Philosophiquement, certains soutiennent que ce cadre peut impliquer qu'une personne moralement droite luttant sincèrement avec l'acceptation de certaines doctrines théologiques pourrait se voir refuser le salut, tandis qu'une autre personne ayant commis de graves délits mais ayant accepté la foi peu avant de mourir pourrait tout de même atteindre une récompense éternelle.

Les théologiens chrétiens répondent souvent que le salut implique à la fois une foi sincère et un repentir authentique, plutôt qu'une simple croyance verbale.
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
L'Islam présente l'au-delà comme un système de responsabilité morale complète et de justice divine.

Le Coran déclare :

"Aucune âme ne portera le fardeau d'autrui." (Coran 6:164)

Le salut, dans l'Islam, est constamment lié à la fois à la foi et à l'action juste :

"Ceux qui croient et accomplissent de bonnes œuvres..." (répété tout au long du Coran, y compris dans le 2:25)

L'Islam enseigne que la vie terrestre est une épreuve temporaire plutôt que le lieu final de récompense ou de punition :

"Celui qui a créé la mort et la vie afin d'éprouver lequel de vous est le meilleur en œuvre." (Coran 67:2)
      `,

            objectiveCritique: `
Dans la théologie islamique, le Jour du Jugement représente le tribunal de justice suprême où chaque action, si petite soit-elle, est rendue compte.

Le Coran déclare :

"Quiconque fait un atome de bien le verra. Et quiconque fait un atome de mal le verra." (Coran 99:7–8)

Ce cadre cherche à préserver à la fois la responsabilité individuelle et la justice absolue, tout en offrant la certitude morale qu'aucun acte d'oppression ou de bonté ne disparaît finalement sans conséquences.
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
      navbar: 'Comparaison des religions',
      hero: {
        subtitle:
          "Un voyage calme mais profondément philosophique explorant les plus grandes questions de l'humanité : le Créateur, le but de l'existence, la moralité et ce qui nous attend après la mort.",

        subtitleHighlight:
          "le Créateur, le but de l'existence, la moralité et ce qui nous attend après la mort.",

        scrollIndicator: 'Faites défiler pour commencer le voyage',
      },

      storySection: {
        badge: "L'analogie du train",

        titleLine1: 'Avant de poser des questions',
        titleLine2: 'Sur les religions...',

        intro:
          "Chaque être humain arrive éventuellement à un moment de silence où les distractions s'estompent – et où les questions les plus profondes finissent par émerger.",

        ending: 'Ce train est la planète Terre,',
        ending2: 'et le voyage est votre vie.',
      },

      coreQuestions: {
        sectionLabel: 'Section principale',
        title: 'Questions fondamentales',

        answerNatureTitle: 'Nature de la réponse',

        philosophicalDiscussionTitle: 'Discussion philosophique',

        referencesTitle: 'Références',
      },

      futureResearch: {
        sectionLabel: 'Recherche future',

        title: 'Autres questions',

        loaderBadge: 'Plus de questions arrivent',

        headingLine1: 'Le voyage',
        headingLine2: 'Continue...',

        description:
          'Des recherches philosophiques et théologiques supplémentaires sont actuellement étudiées et préparées avec la même approche comparative structurée.',

        topics: [
          'Moralité',
          'Science',
          'Miracles',
          'Conscience',
          'Libre arbitre',
          'Souffrance',
          'Préservation historique',
          'Prophéties',
          'Nature humaine',
          'Sens',
          'Civilisations',
          'Éthique',
        ],

        footer: 'De nouvelles sections seront bientôt ajoutées',
      },

      imageAlt: {
        hero: 'Comparaison des religions',
      },
    },
  },
};
