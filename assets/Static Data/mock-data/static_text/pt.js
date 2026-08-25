export default {
  splash: {
    version: 'versão',
    practice: 'prática',
    share: 'compartilhar',
    logo: 'islam global',
  },
  homeApp: {
    north: 'norte',
    east: 'leste',
    west: 'oeste',
    south: 'sul',
    active: 'qibla ativa',
    disabled: 'Abrir bússola Qibla',
    welcome: 'Bem-vindo de volta',
    greet: 'Assalamu Alaikum',
    hour: 'hora',
    minute: 'minuto',
    second: 'segundo',
    toLeft: 'à sua esquerda',
    toRight: 'à sua direita',
    fromNorth: 'do norte',
  },
  quranApp: {
    medinan: 'Medinense',
    meccan: 'Meca',
    arabicName: 'nome em árabe',
    englishName: 'nome em inglês',
    details:
      'Selecione um versículo para ver sua tradução e tafsir (explicação)',
    selectRes: 'Selecionar recurso',
    retry: 'tentar novamente',
    loadErr1: 'Não foi possível carregar a explicação. Tente novamente.',
    loadErr2: 'Falha ao buscar',
    author: 'autor',
    explain: 'Explicação',
  },
  qiblaApp: {
    compass: 'Bússola Qibla',
    accuracy: 'precisão',
    offline: 'GPS offline',
    tracking: 'Rastreamento GPS',
    aligned:
      'Você está de frente para a Qibla. Mantenha firme para uma direção de oração precisa.',
    notAligned:
      'Segure seu dispositivo na horizontal e gire até a seta apontar para a Qibla.',
    heading: 'Direção do dispositivo',
    turn: 'girar',
    alignedQibla: 'Alinhado com a Qibla',
  },
  aiApp: {
    answer: 'resposta',
  },
  prayerApp: {
    locationRequired:
      'Os serviços de localização são necessários para horários de oração precisos.',
    schedule: 'Horário de orações',
    refresh: 'atualizar',
    sunrise: 'Nascer do sol',
    upcoming: 'Próxima oração',
  },
  settingsApp: {
    reciterTitle: 'Recitador do Adhan',
    reciterSub: 'Escolha sua voz preferida',
    notSelected: 'não selecionado',
    preview: 'visualizar',
    cancel: 'cancelar',
    muezzin: 'Muezzin',
    preNot: 'Notificação pré-Adhan',
    preNotDet: 'Notificar 15 minutos antes do horário de oração',
    theme: 'Modo escuro',
    dark: 'Tema escuro atualmente',
    light: 'Tema claro atualmente',
    about: 'Sobre',
    selectReciter: 'Selecionar recitador',
  },
  athan: {
    mainTitle: 'ADHAN · CHAMADA À ORAÇÃO',
    stop: 'Parar Adhan',
    error: 'Não foi possível carregar o áudio do Adhan',
    prayerTime: 'Horário de oração',
    play: 'reproduzir',
    pause: 'pausar',
    dismiss: 'dispensar',
  },
  athkarApp: {
    completed: 'Concluído',
    remaining: 'restante',
    reset: 'redefinir',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Comece seu dia com bênçãos',
    descE: 'Termine seu dia com proteção',
    remmember: 'Rememoração diária',
    cat: 'categorias de súplicas',
    category: 'Categoria',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Pesquisar hadith...',
      button: 'Pesquisar',
      books: {
        label: 'Livro',
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
      title: 'O idioma atual ainda não é suportado',
      msg: 'Este idioma ainda não é suportado pela base de dados de hadiths.',
      description:
        'O inglês foi selecionado automaticamente como idioma de reserva para que você ainda possa pesquisar e navegar pelos hadiths sem problemas. Você também pode experimentar o Modo Avançado para um suporte multilíngue mais amplo e melhores resultados.',
    },

    initialPlaceholder:
      'Pesquise um hadith para ver detalhes como classificação, narradores e referência',

    loading: {
      label: 'Carregando hadiths...',
    },

    hadithCard: {
      showMore: 'Mostrar mais',
      showLess: 'Mostrar menos',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referências',
        referenceLabel: 'Referência',
        inBookReference: 'Referência no livro',
        arabicReference: 'Referência árabe',
      },
    },

    emptyState: 'Nenhum hadith encontrado',

    pagination: {
      prev: 'Anterior',
      next: 'Próximo',
    },
  },

  switch: {
    title: {
      advanced: 'Modo avançado',
      normal: 'Modo normal',
    },

    description: {
      advanced: 'Pesquisa semântica com compreensão mais profunda',
      normal: 'Pesquisa rápida baseada em filtros',
    },
  },

  navbar: {
    routes: {
      home: 'Início',
      prayers: 'Orações',
      quran: 'Alcorão',
      athkar: 'Athkar',
      articles: 'Artigos',

      articlesNested: {
        islamicHistory: 'História islâmica',
        prayerInIslam: 'A oração no Islã',
        womenInIslam: 'As mulheres no Islã',
        purification: 'Purificação e ablução',
      },

      learn: 'Aprender',

      learnNested: {
        quranTajweed: 'Aprender Alcorão e Tajwid',
        arabic: 'Aprender árabe',
      },

      dashboard: 'Painel',
      aiAssistant: 'Assistente de IA',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Explore o Islã com',
      clarity: 'Clareza',
      peace: '& Paz',
    },

    description:
      'Aprenda, faça perguntas e descubra uma compreensão autêntica através de IA e conhecimento guiado projetado para clareza e reflexão.',

    actions: {
      introductionToIslam: 'Aprender sobre o Islã',
      islamQA: 'Perguntas e Respostas Islâmicas (Assistente de IA)',
      continueWebsite: 'Continuar para o site',
    },
  },

  learning: {
    quran: {
      title: 'Aprender o Alcorão e Tajwid',
      subtitle:
        'Melhore sua recitação do Alcorão e entenda as regras do Tajwid passo a passo.',
    },
    arabic: {
      title: 'Aprender árabe',
      subtitle:
        'Desenvolva suas habilidades em árabe através de aulas claras e estruturadas.',
    },
    default: {
      title: 'Seção de aprendizado',
      subtitle:
        'Explore conteúdos educacionais projetados para fortalecer seu conhecimento e compreensão.',
    },
  },
  explore: {
    searchBar: {
      title: 'Pesquisar nas coleções de Hadith',

      subtitle:
        'Pesquise de forma natural usando temas, significados ou frases completas.',

      placeholder: 'Exemplo: Hadith sobre bondade com os pais',

      button: 'Pesquisar',
    },

    header: {
      title: 'Biblioteca de Pesquisa de Hadith',
      subtitle:
        'Explore instantaneamente Hadith autênticos com uma experiência de leitura moderna.',
    },

    content: {
      heroTitle:
        'Descubra coleções autênticas de Hadith com uma busca poderosa',

      loading: {
        label: 'Pesquisando nas coleções de Hadith...',
      },

      error: {
        title: 'Não foi possível carregar o Hadith',
        message:
          'Não conseguimos recuperar as narrações no momento. Verifique sua conexão e tente novamente.',
      },

      empty: {
        title: 'Nenhum Hadith correspondente encontrado',
      },

      card: {
        reference: 'Referência do Hadith',
        readMore: 'Ler o hadith completo',
      },
    },
  },

  home: {
    news: {
      title: 'Atualizações da comunidade muçulmana',
      subtitle:
        'Mantenha-se informado com atualizações importantes do mundo muçulmano',
    },

    prayer: {
      title: 'Contagem regressiva para a oração',
      subtitle: 'Prepare-se para a próxima oração',
      button: 'Ver horários de oração',
      nextPrayerLabel: 'Próxima oração às:',
    },

    athkar: {
      title: 'Athkar da manhã e da noite',
      subtitle: 'Recordações diárias para manter seu coração conectado',
      button: 'Ver mais athkar',
    },

    qibla: {
      title: 'Direção da Qibla',
      subtitle: 'Encontre a direção da Kaaba onde quer que esteja',
      locationLoading: 'Obtendo sua localização...',
      enableLocation: 'Ativar localização',
      refreshLocation: 'Atualizar direção da Qibla',

      warning:
        'Se seu dispositivo não suportar sensores de orientação, a precisão da bússola pode ser afetada.',

      errorTitle: 'Permissão negada',
    },
  },

  prayers: {
    nextLabel: 'Próxima oração às',

    header: {
      title: 'Horários de oração',
      subtitle: 'Um momento diário de conexão com o seu Criador',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Obtendo sua localização...',
      warning:
        'Se o seu sistema operacional não suportar orientação, isso afetará os cálculos da bússola.',
      errorTitle: 'Permissão negada',
      enableLocation: 'Ativar localização',
      refreshLocation: 'Atualizar direção da Qibla',
    },

    list: {
      warning:
        'Os horários podem variar ligeiramente dependendo do método de cálculo.',
    },
  },

  quran: {
    header: {
      title: 'Alcorão',
      subtitle: 'Seu companheiro diário para recitação e reflexão',
    },

    search: {
      noResultTitle: 'Dados vazios',
      noResultMessage: 'Nenhum dado para exibir',
    },
  },

  athkar: {
    title: 'Lembranças diárias',
    subtitle: 'Mantenha consistência em suas lembranças e reflexões diárias',
  },

  ai: {
    header: {
      title: 'Assistente de IA Islâmica Global',
      subtitle:
        'Receba respostas islâmicas claras baseadas no Alcorão, Sunnah e estudiosos confiáveis',
    },

    loading: {
      label: 'Carregando...',
    },

    error: {
      title: 'Limite de solicitações atingido',
      message:
        'Não foi possível acessar o serviço de conhecimento no momento. Tente novamente em breve.',
    },

    input: {
      placeholder: 'Faça uma pergunta sobre o Islã...',
    },

    suggestions: [
      'Posso rezar se perder o wudu?',
      'O juro (riba) é completamente proibido?',
      'Regra sobre trabalhar em um ambiente não halal',
      'Posso rezar durante uma viagem?',
      'É permitido usar perfume durante a oração?',
      'O que invalida a oração?',
      'Regra sobre atrasar as orações por causa do trabalho',
    ],

    footer: {
      disclaimer:
        'Este assistente de IA foi projetado para fornecer respostas baseadas em fontes de conhecimento confiáveis e selecionadas, incluindo referências islâmicas e materiais educacionais verificados.',

      note: 'As respostas são apenas para fins informativos e não substituem a orientação de estudiosos quando necessário.',
    },
  },

  footer: {
    disclaimer:
      'Todo o conteúdo exibido provém de suas fontes originais confiáveis. Agradecemos qualquer feedback ou relato de erros para que possam ser revisados e corrigidos.',

    tagline: 'Construído com cuidado para servir conteúdo islâmico autêntico',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Voltar',
    },

    sections: {
      hadithText: 'Texto do Hadith',
      arabicText: 'Texto em árabe',
      explanation: 'Explicação',
      authentication: 'Autenticação',
      lessons: 'Benefícios e lições',
    },
  },
  other: {
    note: 'Nota',
    theLanguage: 'o idioma',
    part: 'Parte',
    translation: 'Tradução',
    verse: 'Versículo',
    chapter: 'Capítulo',
    page: 'Página',
    breakingNews: 'Últimas notícias',
  },
  dailyRemined: {
    title: 'Luz para Hoje',
    subtitle:
      'Faça uma pausa e reflita sobre um versículo e um Hadith escolhidos para o seu dia.',
  },
  baseFooter: {
    contact: {
      title: 'Contate-nos',
      name: 'Seu nome',
      email: 'Seu e-mail',
      msg: 'Sua mensagem',
      sendMsg: 'Enviar mensagem',
    },
    followUs: 'Siga-nos',
    QA: 'Acesso rápido',
    logoB:
      'Alcorão, Hadith, horários de oração, assistente de IA e ferramentas islâmicas diárias — tudo em uma plataforma moderna.',
    whatsapp: 'Conversar no WhatsApp',
    rsr: 'Todos os direitos reservados',
  },
  compareRelg: {
    note: 'Esta página apresenta uma visão comparativa das principais religiões do mundo. Sob a perspectiva islâmica, o Alcorão afirma que revelações divinas anteriores foram enviadas a nações passadas, mas que, ao longo do tempo, sofreram alterações humanas (tahrif). O Alcorão declara: "Certamente Nós enviamos a Mensagem e, certamente, Nós a preservaremos" (15:9). Esta página examina essas diferenças à luz de evidências históricas e textuais.',
    mainTitle: 'Uma jornada racional pelas religiões',
    headerTitle: 'Perguntas que definem a existência humana',
    story: `
Imagine que você abre os olhos de repente e percebe que está em um trem luxuoso que viaja a alta velocidade através de uma noite sem fim. Ao seu redor, há todo conforto imaginável: refeições suntuosas servidas em mesas elegantes, telas exibindo filmes e almofadas de seda em poltronas macias.

Com uma sensação de inquietação, você pergunta ao passageiro ao lado:
"Onde estamos? Quem nos colocou neste trem? E para onde vamos?"

Mas o mais surpreendente é a reação deles.

Um responde friamente:
"O que você tem a ver com isso? Apenas aproveite a comida, é fantástica."

Outro responde com escárnio:
"Por que se atormentar com tais perguntas? Recoste-se e aproveite o filme."

Todos ao seu redor se entregam aos prazeres da viagem, mas você é tomado por um medo profundo, pois sabe que este trem corre para uma estação final – um lugar onde cada passageiro deve, eventualmente, desembarcar.

Nesse momento, surge a pergunta essencial:

Você se entregará ao luxo e ao entretenimento da viagem, ou continuará buscando respostas para as três perguntas mais profundas:

Quem é o Criador?
Por que estamos aqui?
E o que nos espera no fim?

Este trem é o planeta Terra, e a viagem é a sua própria vida.

Como os seres humanos não possuem essas respostas por si mesmos, as religiões surgiram como "manuais de instruções", sendo que cada uma afirma vir diretamente do projetista do trem.

Vamos analisar esses manuais com um olhar calmo e racional.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Quem é o Criador?',

        intro: `
De uma perspectiva filosófica e lógica, o Criador, como a "Primeira Causa" do universo, deve ser completamente transcendente, além das fronteiras da matéria, do tempo e do espaço. Se o Criador estivesse sujeito à fome, ao cansaço, a limitações físicas ou a quadros espaciais, tal ser logicamente perderia seu status de Criador absoluto e se tornaria um ser criado e dependente. Um ser dependente não pode ser a fonte necessária de toda a existência.
  `,

        religions: {
          eastern: {
            title: 'Religiões Orientais',
            examples: ['Hinduísmo', 'Budismo'],

            answerNature: `
Em sua forma mais antiga, o Theravada, o budismo é geralmente não teísta; ele não se concentra na existência de um deus criador, mas vê a existência como resultado de processos naturais eternos, causalidade e leis interdependentes.

O hinduísmo, por outro lado, fala frequentemente de uma realidade metafísica fundamental chamada "Brahman". No entanto, na prática, essa realidade suprema se manifesta através de inúmeras formas e divindades, incluindo figuras humanas e animais como Vishnu, Shiva e Kali.
      `,

            objectiveCritique: `
De um ponto de vista filosófico, o budismo enfrenta o desafio de explicar como um universo altamente ordenado, governado por leis consistentes e precisão física, pode surgir sem uma causa consciente original.

Nas tradições hinduístas que aceitam encarnações divinas e representações físicas, a divindade é associada a limitações, conflitos, fome, morte e forma material. Uma divindade que pode ser representada fisicamente, encarnada ou que está sujeita a processos naturais parece, de uma perspectiva racional, mais uma parte da criação do que um ser que a transcende completamente.
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
O judaísmo confirma a crença em um Criador que está exaltado acima de ídolos e imagens físicas. Deus (YHWH) é entendido como o Criador dos céus e da terra e é essencialmente distinto de Sua criação.
      `,

            objectiveCritique: `
O problema filosófico aqui levantado não diz respeito tanto à transcendência em si, mas aos limites da universalidade de Deus, conforme aparece em certas passagens da Bíblia Hebraica. Certos textos retratam Deus em uma relação de aliança, fortemente voltada para os filhos de Israel, o que é interpretado por críticos como um exclusivismo étnico.

Além disso, algumas passagens usam linguagem humana para descrever Deus, como "arrepender-se" de ter criado o homem (Gênesis 6:6) ou "descansar" no sétimo dia após a criação (Êxodo 31:17). Críticos argumentam que tais descrições levantam a questão de se essas características devem ser entendidas literal ou metaforicamente.
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
O cristianismo ensina a crença em um único Deus através da doutrina da Trindade: Pai, Filho e Espírito Santo. De acordo com a doutrina da encarnação, a segunda pessoa da Trindade – o Filho – entrou na história da humanidade na pessoa de Jesus Cristo, que foi crucificado e morreu para a salvação da humanidade.
      `,

            objectiveCritique: `
Filosoficamente, críticos afirmam que a doutrina da encarnação cria uma tensão entre atributos divinos e humanos. Tradicionalmente, Deus é descrito como eterno, ilimitado e além da morte, enquanto os seres humanos são descritos como finitos, vulneráveis e mortais.

O desafio surge quando a divindade plena e a humanidade plena são unidas em uma única pessoa. Críticos perguntam como um ser eterno e independente pode simultaneamente experimentar fome, sono, sofrimento e morte. Esse problema é frequentemente formulado como uma tensão entre transcendência e encarnação, em vez de apenas um mistério teológico.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Islã',

            answerNature: `
O Islã apresenta um conceito de Deus que é completamente transcendente e indivisível. O Alcorão resume esse conceito na Surata Al-Ikhlas:

"Dize: Ele é Allah, o Único. Allah, o Absoluto. Não gerou nem foi gerado. E não há nada que se compare a Ele." (Alcorão 112:1–4)

No Islã, o Criador está completamente fora da forma material e é distinto da criação:

"Não há nada semelhante a Ele." (Alcorão 42:11)

Deus não está limitado pelo tempo, espaço ou limitações físicas. O Alcorão também afirma:

"Nem a sonolência nem o sono o alcançam." (Alcorão 2:255)

Na teologia islâmica, Deus é entendido como um ser independente, eterno, autossuficiente e absolutamente distinto da criação.
      `,

            objectiveCritique: `
De uma perspectiva filosófica islâmica, esse conceito busca preservar a transcendência absoluta evitando o antropomorfismo e a encarnação. Ele visa alinhar o Criador à ideia de uma Primeira Causa independente e necessária, que não está sujeita às limitações da existência criada.
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

        title: 'Qual é o modo de vida e o propósito?',

        intro: `
Se existe um Criador sábio, é irracional assumir que a humanidade foi deixada sem diretrizes que expliquem o propósito da existência, a responsabilidade moral e os princípios a serem seguidos. Assim como sistemas complexos exigem instruções de seu projetista, as religiões afirmam fornecer uma estrutura que ajuda o ser humano a entender por que estamos aqui e como devemos viver.
  `,

        religions: {
          eastern: {
            title: 'Religiões Orientais',

            examples: ['Hinduísmo', 'Budismo'],

            answerNature: `
Tradições orientais como o budismo e o hinduísmo geralmente dependem de ensinamentos filosóficos, práticas de meditação e reflexões desenvolvidas por professores espirituais e sábios.

No budismo, o objetivo final é a libertação do sofrimento e a fuga do ciclo de renascimentos através da obtenção do Nirvana – um estado de transcendência e libertação interior.

Em muitas tradições hinduístas, o objetivo é a libertação espiritual (Moksha), alcançável através de devoção, conhecimento, meditação ou ação disciplinada.
      `,

            objectiveCritique: `
Críticos afirmam que esses sistemas são principalmente filosóficos e baseados na experiência, em vez de baseados em uma revelação verificável de um Criador transcendente.

Alguns também argumentam que a forte ênfase no retiro da vida mundana, no monaquismo e na auto-abnegação pode colidir com aspectos da natureza humana que estimulam o desenvolvimento social, o progresso científico, a vida familiar e a civilização.
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
No judaísmo, o modo de vida está enraizado na lei da aliança revelada a Moisés e preservada na Bíblia Hebraica (Tanakh). A estrutura religiosa concentra-se na obediência aos mandamentos divinos e na manutenção do relacionamento de aliança entre Deus e os filhos de Israel.
      `,

            objectiveCritique: `
Críticos argumentam que o judaísmo historicamente se desenvolveu como uma tradição voltada para a aliança com uma nação específica, em vez de uma religião missionária universal para toda a humanidade.

De uma perspectiva de análise textual, alguns estudiosos – incluindo Richard Elliott Friedman – argumentam que a Torá passou por processos de compilação e edição ao longo dos séculos, especialmente em torno do cativeiro babilônico e depois. Isso leva alguns críticos a duvidar se o texto pode ser considerado uma revelação perfeitamente preservada em sua forma original.
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
O cristianismo ensina que o problema central da humanidade é o pecado e a separação de Deus, e que a salvação é alcançada através da fé na morte sacrifical de Jesus e Sua ressurreição. Portanto, o propósito da vida é entendido através da reconciliação com Deus e da transformação espiritual.
      `,

            objectiveCritique: `
Historicamente, estudiosos notam que manuscritos originais dos evangelhos em aramaico (a língua de Jesus) não foram preservados. Os textos mais antigos preservados são manuscritos gregos, escritos décadas após a vida de Jesus. Críticos textuais como Bart Ehrman documentaram inúmeras variações nas primeiras cópias do Novo Testamento.

Críticos também argumentam que o cristianismo historicamente colocou mais ênfase na salvação espiritual e pessoal do que na construção de uma estrutura jurídica ou política abrangente para a economia, o direito penal ou a governança estatal. Alguns historiadores acreditam que isso contribuiu para a eventual separação entre igreja e estado em muitas sociedades ocidentais.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Islã',

            answerNature: `
O Islã oferece uma compreensão abrangente do propósito humano ao integrar a devoção espiritual e a responsabilidade mundana.

O Alcorão afirma:

"Não criei os gênios e os homens senão para Me servirem." (Alcorão 51:56)

No pensamento islâmico, a adoração não se limita a rituais, mas inclui agir corretamente, justiça, comportamento ético, busca pelo conhecimento e uma contribuição positiva para a sociedade.

Os ensinamentos islâmicos buscam o equilíbrio entre o crescimento espiritual e a participação prática na vida familiar, economia, governança, caridade e responsabilidade social.
      `,

            objectiveCritique: `
De uma perspectiva islâmica, o Alcorão representa uma revelação preservada de forma única. Muçulmanos afirmam que o texto permaneceu inalterado e tem sido continuamente transmitido através de manuscritos escritos e memorização oral desde as primeiras gerações do Islã.

Exemplos frequentemente citados são textos antigos, como o manuscrito do Alcorão de Birmingham, e a enorme tradição de memorização oral mantida por milhões de muçulmanos em todo o mundo.

A lei islâmica (Sharia) também é apresentada como uma estrutura ética e jurídica que cobre áreas como finanças, caridade, direito familiar, direito penal e governança. Defensores argumentam que isso confere ao Islã as características de um sistema moral e civilizatório completo, em vez de apenas uma tradição espiritual.
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

        title: 'O que acontece após a Estação Final?',

        subtitle: 'Destino, justiça e o além',

        intro: `
Sem a existência de justiça final após a morte, a vida pode parecer muito arbitrária e moralmente não resolvida. Tiranos podem morrer sem prestar contas, e vítimas podem deixar o mundo sem encontrar justiça. Isso evoca uma das perguntas filosóficas mais antigas da humanidade: a morte é o fim, ou existe um julgamento final além da vida terrena?
  `,

        religions: {
          eastern: {
            title: 'Religiões Orientais',

            examples: ['Hinduísmo', 'Budismo'],

            answerNature: `
Muitas tradições orientais aceitam o conceito de reencarnação, no qual a alma ou o fluxo de consciência passa por ciclos repetidos de renascimento. O estado futuro de um indivíduo é determinado pelo karma: as consequências morais de ações passadas.
      `,

            objectiveCritique: `
Críticos argumentam que a reencarnação levanta questões filosóficas sobre justiça e responsabilidade. Se alguém em uma nova vida arca com as consequências de ações de uma existência anterior das quais não pode lembrar conscientemente, o objetivo educacional e moral da punição torna-se difícil de entender.

Dessa perspectiva, a responsabilidade sem memória consciente parece desconectada de uma responsabilidade moral significativa.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismo e ateísmo',

            answerNature: `
Visões de mundo materialistas e ateístas geralmente consideram a morte como o fim da existência consciente. Os seres humanos são entendidos como organismos biológicos cuja consciência cessa completamente após a morte física.
      `,

            objectiveCritique: `
Críticos argumentam que o materialismo estrito tem dificuldade em fornecer uma base objetiva para moralidade, justiça e significado fundamental. Se tanto o opressor quanto a vítima desaparecem finalmente no nada sem prestar contas, conceitos como sacrifício, dever moral e justiça podem parecer subjetivos ou socialmente construídos, em vez de universalmente vinculantes.

Defensores da ética secular argumentam, contudo, que a moralidade ainda pode surgir através da razão, empatia e responsabilidade social, sem a crença em uma vida após a morte.
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
O cristianismo ensina que a salvação e a vida eterna são alcançadas através da fé em Jesus Cristo e da aceitação de Seu sacrifício pelos pecados da humanidade. O céu e a salvação eterna estão intimamente ligados à fé em Cristo e à graça divina.
      `,

            objectiveCritique: `
Críticos perguntam como a salvação baseada principalmente na fé se relaciona com princípios universais de justiça. Filosoficamente, alguns argumentam que essa estrutura pode significar que uma pessoa moralmente boa que luta honestamente para aceitar certos dogmas teológicos pode ser privada da salvação, enquanto outra pessoa que cometeu crimes graves, mas acreditou no último momento, pode receber a recompensa eterna.

Teólogos cristãos frequentemente respondem que a salvação envolve tanto uma fé sincera quanto um arrependimento autêntico, em vez de apenas uma confissão oral.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Islã',

            answerNature: `
O Islã apresenta a vida após a morte como um sistema de responsabilidade moral absoluta e justiça divina.

O Alcorão afirma:

"Nenhuma alma arcará com o fardo de outra." (Alcorão 6:164)

A salvação no Islã está consistentemente ligada à fé e às boas ações:

"E anuncia a boa nova àqueles que crêem e praticam o bem..." (repetido em todo o Alcorão, incluindo 2:25)

O Islã ensina que a vida terrena é um teste temporário, não um lugar para recompensa ou punição final:

"Aquele que criou a morte e a vida para vos provar quem de vós melhor se comporta." (Alcorão 67:2)
      `,

            objectiveCritique: `
Na teologia islâmica, o Dia do Juízo representa o tribunal final onde cada ação, por menor que seja, será contabilizada.

O Alcorão afirma:

"Quem fizer o bem do peso de um átomo, vê-lo-á. E quem fizer o mal do peso de um átomo, vê-lo-á." (Alcorão 99:7–8)

Essa estrutura busca preservar tanto a responsabilidade individual quanto a justiça absoluta, oferecendo a certeza moral de que nenhum ato de opressão ou bondade permanecerá sem consequências.
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
      navbar: 'Comparação de Religiões',
      hero: {
        subtitle:
          'Uma jornada filosófica calma e profunda pelas maiores perguntas da humanidade: o Criador, o propósito da existência, a moralidade e o que nos espera após a morte.',

        subtitleHighlight:
          'o Criador, o propósito da existência, a moralidade e o que nos espera após a morte.',

        scrollIndicator: 'Role para baixo para começar a jornada',
      },

      storySection: {
        badge: 'Analogia do trem',

        titleLine1: 'Antes de fazer as perguntas',
        titleLine2: 'Sobre religião...',

        intro:
          'Todo ser humano atinge eventualmente um momento de silêncio quando as distrações desaparecem – e as perguntas mais profundas finalmente vêm à tona.',

        ending: 'Este trem é o planeta Terra,',
        ending2: 'e a viagem é a sua própria vida.',
      },

      coreQuestions: {
        sectionLabel: 'Seções principais',
        title: 'Perguntas fundamentais',

        answerNatureTitle: 'Natureza da resposta',

        philosophicalDiscussionTitle: 'Discussão filosófica',

        referencesTitle: 'Referências',
      },

      futureResearch: {
        sectionLabel: 'Pesquisa futura',

        title: 'Outras perguntas',

        loaderBadge: 'Mais perguntas em preparação',

        headingLine1: 'A jornada',
        headingLine2: 'continua...',

        description:
          'Pesquisas filosóficas e teológicas adicionais estão sendo estudadas e preparadas usando a mesma abordagem comparativa estruturada.',

        topics: [
          'Moralidade',
          'Ciência',
          'Milagres',
          'Consciência',
          'Livre arbítrio',
          'Sofrimento',
          'Transmissão histórica',
          'Profecias',
          'Natureza humana',
          'Sentido',
          'Civilização',
          'Ética',
        ],

        footer: 'Novas seções serão adicionadas em breve',
      },

      imageAlt: {
        hero: 'Comparação de religiões',
      },
    },
  },
};
