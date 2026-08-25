export default {
  splash: {
    version: 'versión',
    practice: 'práctica',
    share: 'compartir',
    logo: 'islam global',
  },
  homeApp: {
    north: 'norte',
    east: 'este',
    west: 'oeste',
    south: 'sur',
    active: 'qibla activa',
    disabled: 'Abrir brújula Qibla',
    welcome: 'Bienvenido de nuevo',
    greet: 'Assalamu Alaikum',
    hour: 'hora',
    minute: 'minuto',
    second: 'segundo',
    toLeft: 'a tu izquierda',
    toRight: 'a tu derecha',
    fromNorth: 'desde el norte',
  },
  quranApp: {
    medinan: 'Medinesa',
    meccan: 'Meca',
    arabicName: 'nombre en árabe',
    englishName: 'nombre en inglés',
    details:
      'Seleccione un versículo para ver su traducción y tafsir (explicación)',
    selectRes: 'Seleccionar recurso',
    retry: 'reintentar',
    loadErr1:
      'No se puede cargar la explicación. Por favor, inténtelo de nuevo.',
    loadErr2: 'Error al obtener',
    author: 'autor',
    explain: 'Explicación',
  },
  qiblaApp: {
    compass: 'Brújula Qibla',
    accuracy: 'precisión',
    offline: 'GPS fuera de línea',
    tracking: 'Seguimiento GPS',
    aligned:
      'Estás orientado hacia la Qibla. Mantén firme para una dirección de oración precisa.',
    notAligned:
      'Sostén tu dispositivo en posición horizontal y gira hasta que la flecha apunte a la Qibla.',
    heading: 'Orientación del dispositivo',
    turn: 'girar',
    alignedQibla: 'Alineado con la Qibla',
  },
  aiApp: {
    answer: 'respuesta',
  },
  prayerApp: {
    locationRequired:
      'Se requieren servicios de ubicación para horarios de oración precisos.',
    schedule: 'Horario de oraciones',
    refresh: 'actualizar',
    sunrise: 'Amanecer',
    upcoming: 'Próxima oración',
  },
  settingsApp: {
    reciterTitle: 'Recitador del Adhan',
    reciterSub: 'Elige tu voz preferida',
    notSelected: 'no seleccionado',
    preview: 'vista previa',
    cancel: 'cancelar',
    muezzin: 'Muezzin',
    preNot: 'Notificación pre-Adhan',
    preNotDet: 'Notificar 15 minutos antes de la hora de oración',
    theme: 'Modo oscuro',
    dark: 'Tema oscuro actualmente',
    light: 'Tema claro actualmente',
    about: 'Acerca de',
    selectReciter: 'Seleccionar recitador',
  },
  athan: {
    mainTitle: 'ADHAN · LLAMADA A LA ORACIÓN',
    stop: 'Detener Adhan',
    error: 'No se puede cargar el audio del Adhan',
    prayerTime: 'Hora de oración',
    play: 'reproducir',
    pause: 'pausa',
    dismiss: 'descartar',
  },
  athkarApp: {
    completed: 'Completado',
    remaining: 'restante',
    reset: 'restablecer',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Comienza tu día con bendiciones',
    descE: 'Termina tu día con protección',
    remmember: 'Recuerdo diario',
    cat: 'categorías de súplicas',
    category: 'Categoría',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Buscar hadiz...',
      button: 'Buscar',
      books: {
        label: 'Libro',
        options: {
          bukhari: 'Bujari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmidhi',
          abudawood: 'Abu Dawood',
          nasai: 'Nasai',
          ibnmajah: 'Ibn Majah',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'El idioma actual aún no es compatible',
      msg: 'Este idioma aún no es compatible con la base de datos de hadices.',
      description:
        'El inglés se ha seleccionado automáticamente como idioma alternativo para que puedas seguir buscando y explorando hadices sin problemas. También puedes probar el Modo Avanzado para una compatibilidad multilingüe más amplia y mejores resultados.',
    },

    initialPlaceholder:
      'Busca un hadiz para ver detalles como la clasificación, los narradores y la referencia',

    loading: {
      label: 'Cargando hadices...',
    },

    hadithCard: {
      showMore: 'Mostrar más',
      showLess: 'Mostrar menos',

      header: {
        hadithPrefix: 'Hadiz #',
        referencesTitle: 'Referencias',
        referenceLabel: 'Referencia',
        inBookReference: 'Referencia en el libro',
        arabicReference: 'Referencia árabe',
      },
    },

    emptyState: 'No se encontraron hadices',

    pagination: {
      prev: 'Anterior',
      next: 'Siguiente',
    },
  },

  switch: {
    title: {
      advanced: 'Modo avanzado',
      normal: 'Modo normal',
    },

    description: {
      advanced: 'Búsqueda semántica con una comprensión más profunda',
      normal: 'Búsqueda rápida basada en filtros',
    },
  },

  navbar: {
    routes: {
      home: 'Inicio',
      prayers: 'Oraciones',
      quran: 'Corán',
      athkar: 'Adhkar',
      articles: 'Artículos',

      articlesNested: {
        islamicHistory: 'Historia islámica',
        prayerInIslam: 'La oración en el Islam',
        womenInIslam: 'Las mujeres en el Islam',
        purification: 'Purificación y ablución',
      },

      learn: 'Aprender',

      learnNested: {
        quranTajweed: 'Aprender Corán y Tajwid',
        arabic: 'Aprender árabe',
      },

      dashboard: 'Panel',
      aiAssistant: 'Asistente IA',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Explora el Islam con',
      clarity: 'Claridad',
      peace: '& Paz',
    },

    description:
      'Aprende, haz preguntas y descubre una comprensión auténtica a través de IA y conocimiento guiado diseñado para la claridad y la reflexión.',

    actions: {
      introductionToIslam: 'Aprender sobre el Islam',
      islamQA: 'Preguntas y Respuestas sobre el Islam (Asistente IA)',
      continueWebsite: 'Continuar al sitio web',
    },
  },

  learning: {
    quran: {
      title: 'Aprender el Corán y el Tajwid',
      subtitle:
        'Mejora tu recitación del Corán y comprende las reglas del Tajwid paso a paso.',
    },
    arabic: {
      title: 'Aprender árabe',
      subtitle:
        'Desarrolla tus habilidades en árabe a través de lecciones claras y estructuradas.',
    },
    default: {
      title: 'Sección de aprendizaje',
      subtitle:
        'Explora contenido educativo diseñado para fortalecer tu conocimiento y comprensión.',
    },
  },
  explore: {
    searchBar: {
      title: 'Buscar en las colecciones de Hadices',

      subtitle:
        'Busca de manera natural utilizando temas, significados o declaraciones completas.',

      placeholder: 'Ejemplo: Hadiz sobre la bondad hacia los padres',

      button: 'Buscar',
    },

    header: {
      title: 'Biblioteca de búsqueda de Hadices',
      subtitle:
        'Explora instantáneamente Hadices auténticos con una experiencia de lectura moderna.',
    },

    content: {
      heroTitle:
        'Descubre colecciones auténticas de Hadices con una potente búsqueda',

      loading: {
        label: 'Buscando en las colecciones de Hadices...',
      },

      error: {
        title: 'No se pudo cargar el Hadiz',
        message:
          'No pudimos recuperar las narraciones en este momento. Por favor, verifica tu conexión e inténtalo de nuevo.',
      },

      empty: {
        title: 'No se encontraron Hadices coincidentes',
      },

      card: {
        reference: 'Referencia del Hadiz',
        readMore: 'Leer el hadiz completo',
      },
    },
  },

  home: {
    news: {
      title: 'Actualizaciones de la comunidad musulmana',
      subtitle:
        'Mantente informado con importantes actualizaciones del mundo musulmán',
    },

    prayer: {
      title: 'Cuenta regresiva para la oración',
      subtitle: 'Prepárate para la próxima oración',
      button: 'Ver horarios de oración',
      nextPrayerLabel: 'Próxima oración a las:',
    },

    athkar: {
      title: 'Adhkar de la mañana y la tarde',
      subtitle: 'Recuerdos diarios para mantener tu corazón conectado',
      button: 'Ver más adhkar',
    },

    qibla: {
      title: 'Dirección de la Qibla',
      subtitle: 'Encuentra la dirección de la Kaaba dondequiera que estés',
      locationLoading: 'Obteniendo tu ubicación...',
      enableLocation: 'Activar ubicación',
      refreshLocation: 'Actualizar dirección de la Qibla',

      warning:
        'Si tu dispositivo no admite sensores de orientación, la precisión de la brújula puede verse afectada.',

      errorTitle: 'Permiso denegado',
    },
  },

  prayers: {
    nextLabel: 'Próxima oración a las',

    header: {
      title: 'Horarios de oración',
      subtitle: 'Un momento diario de conexión con tu Creador',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Obteniendo tu ubicación...',
      warning:
        'Si tu sistema operativo no admite orientación, esto afectará los cálculos de dirección de la brújula.',
      errorTitle: 'Permiso denegado',
      enableLocation: 'Activar ubicación',
      refreshLocation: 'Actualizar dirección de la Qibla',
    },

    list: {
      warning:
        'Los horarios pueden variar ligeramente según el método de cálculo.',
    },
  },

  quran: {
    header: {
      title: 'Corán',
      subtitle: 'Tu compañero diario para la recitación y la reflexión',
    },

    search: {
      noResultTitle: 'Los datos están vacíos',
      noResultMessage: 'No hay datos para mostrar',
    },
  },

  athkar: {
    title: 'Recuerdos diarios',
    subtitle: 'Mantente constante con tus recuerdos y reflexiones diarias',
  },

  ai: {
    header: {
      title: 'Asistente Global de IA Islámica',
      subtitle:
        'Recibe respuestas islámicas claras basadas en el Corán, la Sunnah y la erudición confiable',
    },

    loading: {
      label: 'Cargando...',
    },

    error: {
      title: 'Límite de solicitudes alcanzado',
      message:
        'No se puede acceder al servicio de conocimiento en este momento. Por favor, inténtalo nuevamente en breve.',
    },

    input: {
      placeholder: 'Haz una pregunta sobre el Islam...',
    },

    suggestions: [
      '¿Puedo rezar si pierdo el wudu?',
      '¿Está el interés (riba) completamente prohibido?',
      'Norma sobre trabajar en un entorno no halal',
      '¿Puedo rezar mientras viajo?',
      '¿Está permitido usar perfume durante la oración?',
      '¿Qué invalida la oración?',
      'Norma sobre retrasar las oraciones debido al trabajo',
    ],

    footer: {
      disclaimer:
        'Este asistente de IA está diseñado para proporcionar respuestas basadas en fuentes de conocimiento confiables y seleccionadas, incluidas referencias islámicas y material educativo verificado.',

      note: 'Las respuestas son solo para fines informativos y no deben reemplazar el consejo de un erudito cuando sea necesario.',
    },
  },

  footer: {
    disclaimer:
      'Todo el contenido mostrado proviene de sus referencias originales confiables. Agradecemos cualquier comentario o informe de errores para que puedan ser revisados y corregidos.',

    tagline: 'Creado con dedicación para ofrecer contenido islámico auténtico',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadiz',
      backButton: 'Volver',
    },

    sections: {
      hadithText: 'Texto del Hadiz',
      arabicText: 'Texto en árabe',
      explanation: 'Explicación',
      authentication: 'Autenticación',
      lessons: 'Beneficios y enseñanzas',
    },
  },
  other: {
    note: 'Nota',
    theLanguage: 'el idioma',
    part: 'Parte',
    translation: 'Traducción',
    verse: 'Versículo',
    chapter: 'Capítulo',
    page: 'Página',
    breakingNews: 'Últimas noticias',
  },
  dailyRemined: {
    title: 'Luz del día',
    subtitle:
      'Haz una pausa y reflexiona sobre un versículo y un hadiz elegidos para tu día.',
  },
  baseFooter: {
    contact: {
      title: 'Contáctanos',
      name: 'Tu nombre',
      email: 'Tu correo electrónico',
      msg: 'Tu mensaje',
      sendMsg: 'Enviar mensaje',
    },
    followUs: 'Síguenos',
    QA: 'Acceso rápido',
    logoB:
      'Corán, Hadiz, horarios de oración, asistente de IA y herramientas islámicas diarias — todo en una sola plataforma moderna.',
    whatsapp: 'Chatear en WhatsApp',
    rsr: 'Todos los derechos reservados',
  },
  compareRelg: {
    note: "Esta página presenta una visión comparativa de las principales religiones del mundo. Desde una perspectiva islámica, el Corán afirma que se enviaron revelaciones divinas previas a las naciones antiguas, pero que con el tiempo sufrieron alteraciones humanas (tahrif). El Corán declara: 'Ciertamente, Nosotros hemos revelado el Recuerdo y somos Nosotros sus custodios' (15:9). Esta página examina estas diferencias a la luz de las evidencias históricas y textuales.",
    mainTitle: 'Un viaje racional a través de las religiones',
    headerTitle: 'Preguntas que definen la existencia humana',
    story: `
Imagina abrir los ojos de repente, solo para encontrarte sentado dentro de un lujoso tren que corre a una velocidad tremenda a través de una noche interminable. A tu alrededor hay todas las formas de comodidad imaginables: comidas lujosas servidas en mesas elegantes, pantallas brillantes que proyectan películas y suaves almohadas de seda descansando sobre asientos de felpa.

Te vuelves hacia los pasajeros a tu lado y les preguntas con ansiedad:
"¿Dónde estamos? ¿Quién nos subió a este tren? ¿Y hacia dónde nos dirigimos?"

Pero la verdadera sorpresa proviene de sus reacciones.

Uno de ellos responde fríamente:
"¿Qué importa? Prueba esta comida, es increíble."

Otro dice en tono de burla:
"¿Por qué te molestas con esas preguntas? Simplemente relájate y disfruta de la película."

Todos a tu alrededor están absortos en los placeres y las distracciones del viaje, sin embargo, un profundo escalofrío te recorre, porque sabes con certeza que este tren se dirige hacia un destino final, una estación donde cada pasajero eventualmente tendrá que bajar.

Y en ese momento, surge la verdadera pregunta:

¿Te perderás en el lujo y el entretenimiento del viaje, o continuarás buscando respuestas a las tres preguntas más profundas de todas:

¿Quién es el Creador?
¿Por qué estamos aquí?
¿Y qué nos espera al final?

Ese tren es el Planeta Tierra, y el viaje es tu vida.

Y debido a que los seres humanos no poseen estas respuestas por sí mismos, las religiones surgieron como "manuales de instrucciones", afirmando cada una provenir del Diseñador del tren mismo.

Así que pongamos estos manuales bajo la lente de un examen tranquilo y racional.
  `,
    core: {
      q1: {
        id: 'q1',

        title: '¿Quién es el Creador?',

        intro: `
Desde una perspectiva filosófica y lógica, la "Primera Causa" del universo —el Creador— debe ser completamente trascendente, más allá de la materia, el tiempo y el espacio. Si el Creador estuviera sujeto al hambre, la fatiga, la limitación física o el confinamiento espacial, entonces, por lógica, tal ser dejaría de ser un Creador absoluto y, en su lugar, se convertiría en una entidad creada y dependiente. Un ser dependiente no puede, en última instancia, servir como la fuente necesaria de toda la existencia.
  `,

        religions: {
          eastern: {
            title: 'Religiones Orientales',
            examples: ['Hinduismo', 'Budismo'],

            answerNature: `
En su forma más antigua, el Theravāda, el budismo es generalmente no teísta; no se centra en la existencia de una deidad creadora y, en cambio, considera que la existencia surge a través de procesos naturales eternos, causalidad y leyes interconectadas.

El hinduismo, por otro lado, a menudo habla de una realidad metafísica fundamental llamada "Brahman". Sin embargo, en la adoración práctica, esta realidad suprema se expresa a través de innumerables manifestaciones y deidades, incluidas formas con apariencia humana y animal, como Vishnu, Shiva y Kali.
      `,

            objectiveCritique: `
Desde un punto de vista filosófico, el budismo se enfrenta al desafío de explicar cómo un universo altamente ordenado, regido por leyes consistentes y precisión física, podría emerger sin una causa inteligente originadora.

En las tradiciones hindúes que adoptan la encarnación divina y las representaciones físicas, lo divino se asocia con la limitación, el conflicto, el hambre, la muerte y la forma material. Una deidad que puede ser representada físicamente, encarnada o sujeta a procesos naturales parece, desde una perspectiva racional, participar dentro de la creación en lugar de trascenderla por completo.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaísmo',

            answerNature: `
El judaísmo afirma la creencia en un Creador que está por encima de los ídolos y la representación física. Dios (YHVH) es entendido como el Creador de los cielos y la tierra, y es fundamentalmente distinto de la creación.
      `,

            objectiveCritique: `
La preocupación filosófica que se plantea aquí no trata principalmente sobre la trascendencia en sí, sino sobre la limitación percibida de la universalidad divina dentro de algunos pasajes de la Biblia hebrea. Ciertos textos retratan a Dios en una relación de pacto fuertemente centrada en los Hijos de Israel de una manera que los críticos interpretan como étnicamente exclusiva.

Además, algunos pasajes describen a Dios utilizando un lenguaje muy similar al humano, como "arrepentirse" de la creación de la humanidad (Génesis 6:6) o "descansar" en el séptimo día después de la creación (Éxodo 31:17). Los críticos argumentan que tales descripciones plantean preguntas sobre si estos atributos deben entenderse de manera literal o metafórica.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Cristianismo',

            answerNature: `
El cristianismo enseña la creencia en un solo Dios a través de la doctrina de la Trinidad: el Padre, el Hijo y el Espíritu Santo. Según la doctrina de la encarnación, la segunda persona de la Trinidad —el Hijo— entró en la historia humana en la persona de Jesucristo, quien fue crucificado y murió por la salvación de la humanidad.
      `,

            objectiveCritique: `
Filosóficamente, los críticos argumentan que la doctrina de la encarnación plantea una tensión entre los atributos divinos y humanos. Tradicionalmente, Dios es descrito como eterno, ilimitado y más allá de la muerte, mientras que los seres humanos son finitos, vulnerables y mortales.

El desafío surge cuando tanto la divinidad completa como la humanidad completa se unen en una sola persona. Los críticos cuestionan cómo un ser eterno y autosuficiente podría experimentar simultáneamente el hambre, el sueño, el sufrimiento y la muerte. El problema a menudo se enmarca como una tensión entre la trascendencia y la encarnación en lugar de simplemente como un misterio teológico.
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
El Islam presenta un concepto de Dios estrictamente trascendente e indivisible. El Corán resume este concepto en la Sura Al-Ikhlas:

"Di: Él es Alá, el Único. Alá, el Refugio Eterno. No engendra ni ha sido engendrado, y no hay nadie comparable a Él." (Corán 112:1–4)

El Creador en el Islam está completamente más allá de la forma material y es diferente a la creación:

"No hay nada como Él." (Corán 42:11)

Dios no está confinado por el tiempo, el espacio o la limitación física. El Corán también declara:

"Ni la somnolencia ni el sueño lo alcanzan." (Corán 2:255)

Dentro de la teología islámica, Dios se entiende como subsistente por sí mismo, eterno, independiente y absolutamente distinto de la creación.
      `,

            objectiveCritique: `
Desde una perspectiva filosófica islámica, esta comprensión busca preservar la trascendencia absoluta evitando el antropomorfismo y la encarnación. El concepto tiene como objetivo alinear al Creador con la noción de una Primera Causa independiente y necesaria que no está sujeta a las limitaciones de la existencia creada.
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

        title: '¿Cuál es el Método y el Propósito de la Vida?',

        intro: `
Si existe un Creador sabio, entonces sería irracional suponer que la humanidad fue dejada sin orientación que explique el propósito de la existencia, la responsabilidad moral y los principios por los cuales se debe vivir la vida. Así como un sistema complejo requiere instrucciones de su diseñador, las religiones afirman proporcionar a la humanidad un marco para comprender por qué estamos aquí y cómo deberíamos vivir.
  `,

        religions: {
          eastern: {
            title: 'Religiones Orientales',

            examples: ['Hinduismo', 'Budismo'],

            answerNature: `
Las tradiciones orientales, como el budismo y el hinduismo, se basan generalmente en enseñanzas filosóficas, prácticas de meditación y reflexiones desarrolladas por maestros espirituales y sabios.

En el budismo, el objetivo final es la liberación del sufrimiento y escapar del ciclo de renacimiento al alcanzar el Nirvana, un estado de trascendencia y liberación interior.

En muchas tradiciones hindúes, el objetivo es la liberación espiritual (Moksha), lograda a través de la devoción, el conocimiento, la meditación o la acción disciplinada.
      `,

            objectiveCritique: `
Los críticos argumentan que estos sistemas son principalmente filosóficos y experienciales en lugar de estar fundamentados en una revelación verificable de un Creador trascendente.

Algunos también argumentan que un fuerte énfasis en el desapego de la vida mundana, el monaquismo y la renuncia puede entrar en conflicto con aspectos de la naturaleza humana que fomentan el desarrollo social, el progreso científico, la vida familiar y la construcción de civilizaciones.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaísmo',

            answerNature: `
En el judaísmo, el método de vida está enraizado en la ley del pacto revelada a Moisés y preservada dentro de la Biblia hebrea (Tanaj). El marco religioso se centra en la obediencia a los mandamientos divinos y en el mantenimiento de la relación de pacto entre Dios y los Hijos de Israel.
      `,

            objectiveCritique: `
Los críticos argumentan que el judaísmo se desarrolló históricamente principalmente como una tradición centrada en un pacto vinculada a un pueblo en particular en lugar de una religión universalmente misionera dirigida a toda la humanidad.

Desde la perspectiva de la crítica textual, algunos eruditos —incluido Richard Elliott Friedman y otros— argumentan que la Torá se sometió a procesos de compilación y redacción durante siglos, particularmente alrededor y después del exilio babilónico. Esto ha llevado a algunos críticos a cuestionar si el texto puede considerarse como una revelación perfectamente preservada y transmitida directamente en su forma original.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Cristianismo',

            answerNature: `
El cristianismo enseña que el problema central de la humanidad es el pecado y la separación de Dios, y que la salvación se obtiene a través de la fe en la muerte sacrificial y la resurrección de Jesucristo. Por lo tanto, el propósito de la vida se entiende a través de la reconciliación con Dios y la transformación espiritual.
      `,

            objectiveCritique: `
Históricamente, los eruditos señalan que no sobreviven manuscritos originales de los Evangelios en el idioma arameo que hablaba Jesús. Los textos más antiguos que se conservan son manuscritos griegos escritos décadas después de la vida de Jesús. Los críticos textuales, como Bart Ehrman, han documentado la existencia de numerosas variaciones manuscritas entre las primeras copias del Nuevo Testamento.

Los críticos también argumentan que el cristianismo históricamente puso un mayor énfasis en la salvación espiritual y personal que en el desarrollo de un marco legal o político integral que riga la economía, el derecho penal o la administración estatal. Algunos historiadores sugieren que esto contribuyó a la eventual separación entre la religión y la autoridad estatal en muchas sociedades occidentales.
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
El Islam presenta una comprensión integral del propósito humano que integra tanto la devoción espiritual como la responsabilidad mundana.

El Corán declara:

"Y no he creado a los genios y a los hombres sino para que Me adoren." (Corán 51:56)

En el pensamiento islámico, la adoración no se limita únicamente a los rituales, sino que incluye la acción recta, la justicia, la conducta ética, la búsqueda del conocimiento y la contribución positiva a la sociedad.

Las enseñanzas islámicas tienen como objetivo equilibrar el crecimiento espiritual con la participación práctica en la vida familiar, la economía, la gobernanza, la caridad y la responsabilidad social.
      `,

            objectiveCritique: `
Desde la perspectiva islámica, el Corán representa una revelación preservada de manera única. Los musulmanes sostienen que su texto se ha mantenido sin cambios y se ha transmitido continuamente tanto en manuscritos escritos como en memorización oral desde las primeras generaciones del Islam.

Los ejemplos a menudo citados incluyen manuscritos antiguos como el manuscrito del Corán de Birmingham y la tradición de memorización oral generalizada mantenida por millones de musulmanes en todo el mundo.

La ley islámica (Sharia) también se presenta como un marco ético y legal integral que aborda áreas como las finanzas, la caridad, el derecho de familia, la justicia penal y la gobernanza. Los partidarios argumentan que esto le da al Islam las características de un sistema moral y civilizatorio completo en lugar de una tradición puramente espiritual.
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

        title: '¿Qué sucede después de la Estación Final?',

        subtitle: 'Destino, Justicia y el Más Allá',

        intro: `
Sin la existencia de una justicia suprema después de la muerte, la vida puede parecer profundamente arbitraria y moralmente irresuelta. Los tiranos pueden morir sin rendir cuentas, mientras que las víctimas pueden dejar el mundo sin recibir justicia. Esto plantea una de las preguntas filosóficas más antiguas de la humanidad: ¿Es la muerte el final o hay un juicio final más allá de la vida terrenal?
  `,

        religions: {
          eastern: {
            title: 'Religiones Orientales',

            examples: ['Hinduismo', 'Budismo'],

            answerNature: `
Muchas tradiciones orientales adoptan el concepto de reencarnación, donde el alma o el flujo de conciencia pasa por repetidos ciclos de renacimiento. La condición futura de una persona está determinada por el karma: las consecuencias morales de acciones pasadas.
      `,

            objectiveCritique: `
Los críticos argumentan que la reencarnación plantea cuestiones filosóficas con respecto a la justicia y la responsabilidad. Si una persona sufre consecuencias en una nueva vida por acciones cometidas en una existencia anterior que no puede recordar conscientemente, entonces el propósito educativo y moral del castigo se vuelve difícil de entender.

Desde esta perspectiva, la responsabilidad sin memoria consciente puede parecer desconectada de una responsabilidad moral significativa.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismo y Ateísmo',

            answerNature: `
Las visiones del mundo materialistas y ateas generalmente consideran la muerte como el fin de la existencia consciente. Los seres humanos son entendidos como organismos biológicos cuya conciencia cesa por completo después de la muerte física.
      `,

            objectiveCritique: `
Los críticos argumentan que el materialismo estricto lucha por proporcionar una base objetiva para la moralidad, la justicia y el significado fundamental. Si tanto el opresor como la víctima desaparecen finalmente en la inexistencia sin tener que rendir cuentas, entonces conceptos como el sacrificio, el deber moral y la justicia pueden parecer, en última instancia, subjetivos o construcciones sociales en lugar de ser universalmente vinculantes.

Sin embargo, los defensores de la ética secular argumentan que la moralidad todavía puede surgir a través de la razón, la empatía y la responsabilidad social sin creer en el más allá.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Cristianismo',

            answerNature: `
El cristianismo enseña que la salvación y la vida eterna se alcanzan a través de la fe en Jesucristo y la aceptación de su expiación sacrificial por los pecados de la humanidad. El cielo y la salvación eterna están, por lo tanto, estrechamente conectados a la fe en Cristo y la gracia divina.
      `,

            objectiveCritique: `
Los críticos cuestionan cómo la salvación basada principalmente en la creencia se relaciona con los principios de justicia universal. Filosóficamente, algunos argumentan que este marco puede implicar que a una persona moralmente recta que lucha sinceramente con aceptar ciertas doctrinas teológicas se le podría negar la salvación, mientras que otra persona que cometió graves delitos pero aceptó la fe poco antes de morir todavía podría alcanzar una recompensa eterna.

Los teólogos cristianos a menudo responden que la salvación implica tanto una fe sincera como un arrepentimiento genuino, en lugar de simplemente una creencia verbal.
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
El Islam presenta el más allá como un sistema de completa responsabilidad moral y justicia divina.

El Corán declara:

"Ningún alma cargará con el peso de otra." (Corán 6:164)

La salvación en el Islam está consistentemente conectada tanto con la fe como con la acción recta:

"Aquellos que creen y hacen buenas obras..." (se repite a lo largo del Corán, incluido en 2:25)

El Islam enseña que la vida terrenal es una prueba temporal en lugar del lugar final de recompensa o castigo:

"Aquel que creó la muerte y la vida para poneros a prueba y ver quién de vosotros es mejor en obras." (Corán 67:2)
      `,

            objectiveCritique: `
En la teología islámica, el Día del Juicio representa el tribunal de justicia supremo en el cual se rinde cuenta de cada acción, sin importar cuán pequeña sea.

El Corán declara:

"Así pues, quien haya hecho el peso de un átomo de bien, lo verá. Y quien haya hecho el peso de un átomo de mal, lo verá." (Corán 99:7–8)

Este marco busca preservar tanto la responsabilidad individual como la justicia absoluta, al tiempo que ofrece la certeza moral de que ningún acto de opresión o bondad desaparece finalmente sin consecuencias.
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
      navbar: 'Comparación de Religiones',
      hero: {
        subtitle:
          'Un viaje tranquilo pero profundamente filosófico que explora las preguntas más grandes de la humanidad: el Creador, el propósito de la existencia, la moralidad y lo que aguarda más allá de la muerte.',

        subtitleHighlight:
          'el Creador, el propósito de la existencia, la moralidad y lo que aguarda más allá de la muerte.',

        scrollIndicator: 'Desplázate para comenzar el viaje',
      },

      storySection: {
        badge: 'La analogía del tren',

        titleLine1: 'Antes de preguntar',
        titleLine2: 'Sobre las religiones...',

        intro:
          'Todo ser humano llega eventualmente a un momento de silencio donde las distracciones se desvanecen, y las preguntas más profundas finalmente emergen.',

        ending: 'Ese tren es el Planeta Tierra,',
        ending2: 'y el viaje es tu vida.',
      },

      coreQuestions: {
        sectionLabel: 'Sección principal',
        title: 'Preguntas fundamentales',

        answerNatureTitle: 'Naturaleza de la respuesta',

        philosophicalDiscussionTitle: 'Discusión filosófica',

        referencesTitle: 'Referencias',
      },

      futureResearch: {
        sectionLabel: 'Investigación futura',

        title: 'Otras preguntas',

        loaderBadge: 'Más preguntas están en camino',

        headingLine1: 'El viaje',
        headingLine2: 'Continúa...',

        description:
          'Actualmente se están investigando y preparando investigaciones filosóficas y teológicas adicionales con el mismo enfoque comparativo estructurado.',

        topics: [
          'Moralidad',
          'Ciencia',
          'Milagros',
          'Conciencia',
          'Libre albedrío',
          'Sufrimiento',
          'Preservación histórica',
          'Profecías',
          'Naturaleza humana',
          'Significado',
          'Civilizaciones',
          'Ética',
        ],

        footer: 'Pronto se añadirán nuevas secciones',
      },

      imageAlt: {
        hero: 'Comparación de religiones',
      },
    },
  },
};
