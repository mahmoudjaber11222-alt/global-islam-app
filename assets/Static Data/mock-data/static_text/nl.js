export default {
  splash: {
    version: 'versie',
    practice: 'oefening',
    share: 'delen',
    logo: 'wereldwijd islam',
  },
  homeApp: {
    north: 'noord',
    east: 'oost',
    west: 'west',
    south: 'zuid',
    active: 'qibla actief',
    disabled: 'Open Qibla Kompas',
    welcome: 'Welkom terug',
    greet: 'Assalamu Alaikum',
    hour: 'uur',
    minute: 'minuut',
    second: 'seconde',
    toLeft: 'aan uw linkerkant',
    toRight: 'aan uw rechterkant',
    fromNorth: 'vanuit het noorden',
  },
  quranApp: {
    medinan: 'Medinaans',
    meccan: 'Mekkaans',
    arabicName: 'naam in het Arabisch',
    englishName: 'naam in het Engels',
    details:
      'Selecteer een vers om de vertaling en tafsir (uitleg) te bekijken',
    selectRes: 'Selecteer bron',
    retry: 'opnieuw proberen',
    loadErr1: 'Uitleg kan niet worden geladen. Probeer het opnieuw.',
    loadErr2: 'Ophalen mislukt',
    author: 'auteur',
    explain: 'Uitleg',
  },
  qiblaApp: {
    compass: 'Qibla Kompas',
    accuracy: 'nauwkeurigheid',
    offline: 'GPS offline',
    tracking: 'GPS-volgen',
    aligned:
      'U kijkt naar de Qibla. Houd het apparaat stabiel voor een nauwkeurige gebedsrichting.',
    notAligned:
      'Houd uw apparaat plat en draai totdat de pijl naar de Qibla wijst.',
    heading: 'Apparaatrichting',
    turn: 'draai',
    alignedQibla: 'Uitgelijnd met Qibla',
  },
  aiApp: {
    answer: 'antwoord',
  },
  prayerApp: {
    locationRequired:
      'Locatieservices zijn vereist voor nauwkeurige gebedstijden.',
    schedule: 'Gebedsschema',
    refresh: 'vernieuwen',
    sunrise: 'Zonsopgang',
    upcoming: 'Aankomend gebed',
  },
  settingsApp: {
    reciterTitle: 'Adhan Voordrager',
    reciterSub: 'Kies uw voorkeursstem',
    notSelected: 'niet geselecteerd',
    preview: 'voorbeeld',
    cancel: 'annuleren',
    muezzin: 'Muezzin',
    preNot: 'Pre-Adhan Melding',
    preNotDet: '15 minuten voor gebedstijd melden',
    theme: 'Donkere Modus',
    dark: 'Huidig donker thema',
    light: 'Huidig licht thema',
    about: 'Over',
    selectReciter: 'Voordrager selecteren',
  },
  athan: {
    mainTitle: 'ADHAN · GEBEDSOPROEP',
    stop: 'Adhan stoppen',
    error: 'Adhan-audio kan niet worden geladen',
    prayerTime: 'Gebedstijd',
    play: 'afspelen',
    pause: 'pauze',
    dismiss: 'sluiten',
  },
  athkarApp: {
    completed: 'Voltooid',
    remaining: 'resterend',
    reset: 'resetten',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Begin uw dag met zegeningen',
    descE: 'Eindig uw dag met bescherming',
    remmember: 'Dagelijks Herinnering',
    cat: 'categorieën van smeekbeden',
    category: 'Categorie',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hadith zoeken...',
      button: 'Zoeken',
      books: {
        label: 'Boek',
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
      title: 'Huidige taal wordt nog niet ondersteund',
      msg: 'Deze taal wordt momenteel nog niet ondersteund door de hadith-dataset.',
      description:
        'Engels is automatisch geselecteerd als fallback-taal zodat je nog steeds probleemloos hadiths kunt zoeken en bekijken. Je kunt ook de Geavanceerde modus proberen voor bredere meertalige ondersteuning en betere resultaten.',
    },

    initialPlaceholder:
      'Zoek een hadith om details zoals beoordeling, vertellers en referentie te bekijken',

    loading: {
      label: 'Hadiths laden...',
    },

    hadithCard: {
      showMore: 'Meer tonen',
      showLess: 'Minder tonen',

      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Referenties',
        referenceLabel: 'Referentie',
        inBookReference: 'Referentie in boek',
        arabicReference: 'Arabische referentie',
      },
    },

    emptyState: 'Geen hadiths gevonden',

    pagination: {
      prev: 'Vorige',
      next: 'Volgende',
    },
  },

  switch: {
    title: {
      advanced: 'Geavanceerde modus',
      normal: 'Normale modus',
    },

    description: {
      advanced: 'Semantisch zoeken met diepere context',
      normal: 'Snelle filter-gebaseerde zoekfunctie',
    },
  },

  navbar: {
    routes: {
      home: 'Home',
      prayers: 'Gebeden',
      quran: 'Koran',
      athkar: 'Dhikr',
      articles: 'Artikelen',

      articlesNested: {
        islamicHistory: 'Islamitische geschiedenis',
        prayerInIslam: 'Gebed in de Islam',
        womenInIslam: 'Vrouwen in de Islam',
        purification: 'Reiniging en wassing',
      },

      learn: 'Leren',

      learnNested: {
        quranTajweed: 'Koran & Tajwid leren',
        arabic: 'Arabisch leren',
      },

      dashboard: 'Dashboard',
      aiAssistant: 'AI-assistent',
    },
  },
  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Ontdek de islam met',
      clarity: 'Duidelijkheid',
      peace: '& Vrede',
    },

    description:
      'Leer, stel vragen en ontdek authentiek begrip via AI en begeleide kennis die is ontworpen voor helderheid en reflectie.',

    actions: {
      introductionToIslam: 'Leer over de islam',
      islamQA: 'Islam Q&A (AI-assistent)',
      continueWebsite: 'Ga verder naar de website',
    },
  },
  learning: {
    quran: {
      title: 'Leer de Koran en Tajweed',
      subtitle:
        'Verbeter je Koranrecitatie en begrijp de regels van Tajweed stap voor stap.',
    },
    arabic: {
      title: 'Arabisch leren',
      subtitle:
        'Ontwikkel je Arabische taalvaardigheden met duidelijke en gestructureerde lessen.',
    },
    default: {
      title: 'Leersectie',
      subtitle:
        'Ontdek educatieve inhoud die is ontworpen om je kennis en begrip te versterken.',
    },
  },
  explore: {
    searchBar: {
      title: 'Zoek in hadith-collecties',

      subtitle:
        'Zoek op een natuurlijke manier met onderwerpen, betekenissen of volledige zinnen.',

      placeholder: 'Voorbeeld: hadith over vriendelijkheid voor ouders',

      button: 'Zoeken',
    },

    header: {
      title: 'Hadith-zoekbibliotheek',
      subtitle:
        'Ontdek direct authentieke hadith met een moderne leeservaring.',
    },

    content: {
      heroTitle:
        'Ontdek authentieke hadith-collecties met krachtige zoekfunctie',

      loading: {
        label: 'Hadith-collecties worden doorzocht...',
      },

      error: {
        title: 'Hadith kan niet worden geladen',
        message:
          'We konden de overleveringen op dit moment niet ophalen. Controleer je verbinding en probeer opnieuw.',
      },

      empty: {
        title: 'Geen overeenkomende hadith gevonden',
      },

      card: {
        reference: 'Hadith-referentie',
        readMore: 'Lees volledige hadith',
      },
    },
  },

  home: {
    news: {
      title: 'Updates van de moslimgemeenschap',
      subtitle:
        'Blijf op de hoogte van belangrijke updates uit de islamitische wereld',
    },

    prayer: {
      title: 'Aftellen naar gebed',
      subtitle: 'Bereid je voor op het volgende gebed',
      button: 'Bekijk gebedstijden',
      nextPrayerLabel: 'Volgend gebed om:',
    },

    athkar: {
      title: 'Ochtend- en avond-adhkar',
      subtitle: 'Dagelijkse herinneringen om je hart verbonden te houden',
      button: 'Bekijk meer adhkar',
    },

    qibla: {
      title: 'Qibla-richting',
      subtitle: 'Vind de richting van de Kaaba waar je ook bent',
      locationLoading: 'Je locatie wordt opgehaald...',
      enableLocation: 'Locatie inschakelen',
      refreshLocation: 'Qibla-richting vernieuwen',

      warning:
        'Als je apparaat geen oriëntatiesensoren ondersteunt, kan de nauwkeurigheid van het kompas worden beïnvloed.',

      errorTitle: 'Toegang geweigerd',
    },
  },

  prayers: {
    nextLabel: 'Volgend gebed om',

    header: {
      title: 'Gebedstijden',
      subtitle: 'Een dagelijks moment van verbinding met je Schepper',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Je locatie wordt opgehaald...',
      warning:
        'Als je besturingssysteem geen oriëntatie ondersteunt, beïnvloedt dit de kompasberekeningen.',
      errorTitle: 'Toegang geweigerd',
      enableLocation: 'Locatie inschakelen',
      refreshLocation: 'Qibla-richting vernieuwen',
    },

    list: {
      warning: 'Tijden kunnen licht variëren afhankelijk van de rekenmethode.',
    },
  },

  quran: {
    header: {
      title: 'Koran',
      subtitle: 'Je dagelijkse metgezel voor recitatie en reflectie',
    },

    search: {
      noResultTitle: 'Geen gegevens',
      noResultMessage: 'Geen gegevens om weer te geven',
    },
  },

  athkar: {
    title: 'Dagelijkse herinneringen',
    subtitle: 'Blijf consistent in je dagelijkse dhikr en reflectie',
  },

  ai: {
    header: {
      title: 'Wereldwijde islamitische AI-assistent',
      subtitle:
        'Ontvang duidelijke islamitische antwoorden gebaseerd op de Koran, de Sunnah en betrouwbare geleerden',
    },

    loading: {
      label: 'Laden...',
    },

    error: {
      title: 'Limiet bereikt',
      message:
        'Kan de kennisdienst momenteel niet bereiken. Probeer het later opnieuw.',
    },

    input: {
      placeholder: 'Stel een vraag over de islam...',
    },

    suggestions: [
      'Mag ik bidden zonder wudu?',
      'Is rente (riba) volledig verboden?',
      'Regel over werken in een niet-halal omgeving',
      'Mag ik bidden tijdens het reizen?',
      'Is parfum tijdens het gebed toegestaan?',
      'Wat maakt het gebed ongeldig?',
      'Regel over het uitstellen van gebed door werk',
    ],

    footer: {
      disclaimer:
        'Deze AI-assistent is ontworpen om antwoorden te geven op basis van betrouwbare en geselecteerde kennisbronnen, inclusief islamitische referenties en geverifieerd educatief materiaal.',

      note: 'Antwoorden zijn alleen voor informatieve doeleinden en vervangen waar nodig geen geleerdenadvies.',
    },
  },

  footer: {
    disclaimer:
      'Alle weergegeven inhoud is afkomstig uit originele betrouwbare bronnen. Feedback en foutmeldingen zijn welkom en worden beoordeeld.',

    tagline: 'Met zorg gebouwd om authentieke islamitische inhoud te dienen',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Terug',
    },

    sections: {
      hadithText: 'Hadith-tekst',
      arabicText: 'Arabische tekst',
      explanation: 'Uitleg',
      authentication: 'Authenticiteit',
      lessons: 'Voordelen & lessen',
    },
  },
  other: {
    note: 'Opmerking',
    theLanguage: 'de taal',
    part: 'Deel',
    translation: 'Vertaling',
    verse: 'Vers',
    chapter: 'Hoofdstuk',
    page: 'Pagina',
    breakingNews: 'Laatste nieuws',
  },
  dailyRemined: {
    title: 'Licht voor Vandaag',
    subtitle:
      'Neem een moment om stil te staan bij een vers en hadith gekozen voor jouw dag.',
  },
  baseFooter: {
    contact: {
      title: 'Neem contact op',
      name: 'Uw naam',
      email: 'Uw e-mail',
      msg: 'Uw bericht',
      sendMsg: 'Bericht verzenden',
    },
    followUs: 'Volg ons',
    QA: 'Snelle toegang',
    logoB:
      'Koran, Hadith, gebedstijden, AI-assistent en dagelijkse islamitische tools—all op één modern platform.',
    whatsapp: 'Chat op WhatsApp',
    rsr: 'Alle rechten voorbehouden',
  },
  compareRelg: {
    note: `Deze pagina biedt een vergelijkend overzicht van de belangrijkste wereldreligies. Vanuit een islamitisch perspectief bevestigt de Koran dat eerdere goddelijke openbaringen naar eerdere naties werden gezonden, maar dat deze in de loop der tijd menselijke vervalsingen (tahrif) hebben ondergaan. De Koran stelt: "Voorwaar, Wij hebben de Vermaning neergezonden, und voorwaar, Wij zijn daarover de Waker" (15:9). Deze pagina onderzoekt deze verschillen in het licht van historisch en tekstueel bewijs.`,
    mainTitle: 'Een rationele reis langs religies',
    headerTitle: 'Vragen die het menselijk bestaan definiëren',
    story: `
Stel je voor dat je plotseling je ogen opent en je realiseert dat je in een luxueuze trein zit die met hoge snelheid door een eindeloze nacht raast. Om je heen is elk denkbaar comfort aanwezig: weelderige maaltijden geserveerd op elegante tafels, schermen die films tonen, en zijden kussens op zachte stoelen.

Je vraagt met een onrustig gevoel aan de passagier naast je:
"Waar zijn we? Wie heeft ons in deze trein gezet? En waar gaan we heen?"

Maar het meest verrassende is hun reactie.

De een antwoordt koud:
"Wat kan jou dat schelen? Probeer dit eten eens, het is fantastisch."

Een ander antwoordt spottend:
"Waarom zou je jezelf kwellen met zulke vragen? Leun achterover en geniet van de film."

Iedereen om je heen gaat op in het vermaak van de reis, maar jij wordt overvallen door een diepe angst, omdat je weet dat deze trein naar een eindstation raast – een plek waar elke passagier uiteindelijk moet uitstappen.

Op dat moment rijst de wezenlijke vraag:

Ga je op in de luxe en het vertier van de reis, of blijf je zoeken naar antwoorden op de drie diepste vragen:

Wie is de Schepper?
Waarom zijn we hier?
En wat wacht ons aan het einde?

Deze trein is de planeet Aarde, en de reis is je eigen leven.

Omdat mensen deze antwoorden niet uit zichzelf hebben, zijn religies ontstaan als "gebruiksaanwijzingen", waarbij elk claimt rechtstreeks van de ontwerper van de trein te komen.

Laten we deze handleidingen eens onder de loep nemen met een kalme en rationele blik.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Wie is de Schepper?',

        intro: `
Vanuit filosofisch en logisch perspectief moet de Schepper als "Eerste Oorzaak" van het universum volledig transcendent zijn, buiten de grenzen van materie, tijd en ruimte. Als de Schepper onderworpen zou zijn aan honger, vermoeidheid, fysieke beperkingen of ruimtelijke kaders, dan zou een dergelijk wezen logischerwijs zijn status als absolute Schepper verliezen en veranderen in een geschapen en afhankelijk wezen. Een afhankelijk wezen kan niet de noodzakelijke bron van het gehele bestaan zijn.
  `,

        religions: {
          eastern: {
            title: 'Oosterse religies',
            examples: ['Hindoeïsme', 'Boeddhisme'],

            answerNature: `
In haar vroegste vorm, Theravada, is het boeddhisme doorgaans niet-theïstisch; het concentreert zich niet op het bestaan van een scheppende god, maar ziet het bestaan als het resultaat van eeuwige natuurlijke processen, causaliteit en onderling verbonden wetmatigheden.

Het hindoeïsme spreekt daarentegen vaak over een fundamentele metafysische realiteit genaamd "Brahman". Echter, in de praktijk manifesteert deze opperste realiteit zich via talloze vormen en godheden, waaronder menselijke en dierlijke verschijningen zoals Vishnu, Shiva en Kali.
      `,

            objectiveCritique: `
Vanuit filosofisch standpunt staat het boeddhisme voor de uitdaging om uit te leggen hoe een hooggeordend universum, bestuurd door consistente wetten en fysieke precisie, kan ontstaan zonder een oorspronkelijke bewuste oorzaak.

In hindoeïstische tradities die goddelijke incarnaties en fysieke afbeeldingen accepteren, wordt het goddelijke geassocieerd met beperkingen, conflicten, honger, dood en materiële vorm. Een godheid die fysiek kan worden afgebeeld, geïncarneerd kan worden of onderhevig is aan natuurlijke processen, lijkt vanuit rationeel perspectief eerder een onderdeel van de schepping dan een wezen dat de schepping volledig overstijgt.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Jodendom',

            answerNature: `
Het jodendom bevestigt het geloof in een Schepper die verheven is boven afgoden en fysieke afbeeldingen. God (JHWH) wordt begrepen als de Schepper van hemel en aarde en is wezenlijk onderscheiden van Zijn schepping.
      `,

            objectiveCritique: `
Het filosofische probleem dat hier wordt opgeworpen, betreft niet zozeer de transcendentie zelf, maar de grenzen van de universaliteit van God, zoals die in sommige passages van de Hebreeuwse Bijbel naar voren komen. Bepaalde teksten beelden God uit in een verbondsrelatie, sterk gericht op de kinderen van Israël, wat door critici wordt geïnterpreteerd als etnisch exclusief.

Bovendien gebruiken sommige passages menselijke taal om God te beschrijven, zoals "spijt hebben" van de schepping van de mens (Genesis 6:6) of "rusten" op de zevende dag na de schepping (Exodus 31:17). Critici stellen dat dergelijke beschrijvingen de vraag oproepen of deze eigenschappen letterlijk of metaforisch moeten worden begrepen.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Christendom',

            answerNature: `
Het christendom leert het geloof in één God via de Triniteitsleer: Vader, Zoon en Heilige Geest. Volgens de incarnatieleer trad het tweede persoon van de Triniteit – de Zoon – de menselijke geschiedenis binnen in de persoon van Jezus Christus, die gekruisigd werd en stierf voor de redding van de mensheid.
      `,

            objectiveCritique: `
Filosofisch gezien beweren critici dat de incarnatieleer een spanning creëert tussen goddelijke en menselijke eigenschappen. Traditioneel wordt God beschreven als eeuwig, onbeperkt en voorbij de dood, terwijl mensen worden beschreven als eindig, kwetsbaar en sterfelijk.

De uitdaging ontstaat wanneer volledige goddelijkheid en volledige menselijkheid worden verenigd in één persoon. Critici vragen zich af hoe een eeuwig en zelfstandig wezen tegelijkertijd honger, slaap, lijden en dood kan ervaren. Dit probleem wordt vaak geformuleerd als een spanning tussen transcendentie en incarnatie, in plaats van slechts een theologisch mysterie.
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
De islam presenteert een concept van God dat volledig transcendent en ondeelbaar is. De Koran vat dit concept samen in Soera Al-Ikhlas:

"Zeg: 'Hij is Allah, de Ene. Allah, de Zelfvoorzienende. Hij verwekt niet en is niet verwekt. En niets is aan Hem gelijkwaardig.'" (Koran 112:1–4)

In de islam staat de Schepper volledig buiten materiële vorm en is Hij onderscheiden van de schepping:

"Niets is als Hem." (Koran 42:11)

God is niet gebonden aan tijd, ruimte of fysieke beperkingen. De Koran stelt ook:

"Sluimer noch slaap overmant Hem." (Koran 2:255)

In de islamitische theologie wordt God begrepen als een zelfstandig, eeuwig, onafhankelijk en absoluut van de schepping onderscheiden wezen.
      `,

            objectiveCritique: `
Vanuit islamitisch filosofisch perspectief streeft dit concept ernaar de absolute transcendentie te behouden door antropomorfisme en incarnatie te vermijden. Dit concept beoogt de Schepper in lijn te brengen met het idee van een onafhankelijke en noodzakelijke Eerste Oorzaak, die niet onderworpen is aan de grenzen van het geschapen bestaan.
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

        title: 'Wat is de levenswijze en het doel?',

        intro: `
Als er een wijze Schepper bestaat, is het irrationeel om aan te nemen dat de mensheid is achtergelaten zonder richtlijnen die het doel van het bestaan, morele verantwoordelijkheid en te volgen principes uitleggen. Net zoals complexe systemen instructies van hun ontwerper nodig hebben, beweren religies een kader te bieden dat de mens helpt te begrijpen waarom we hier zijn en hoe we zouden moeten leven.
  `,

        religions: {
          eastern: {
            title: 'Oosterse religies',

            examples: ['Hindoeïsme', 'Boeddhisme'],

            answerNature: `
Oosterse tradities zoals het boeddhisme en hindoeïsme vertrouwen doorgaans op filosofische leringen, meditatiepraktijken en reflecties die zijn ontwikkeld door spirituele leraren en wijzen.

In het boeddhisme is het ultieme doel bevrijding van lijden en ontsnapping uit de cyclus van wedergeboorte door het bereiken van Nirvana – een staat van transcendentie en innerlijke bevrijding.

In veel hindoeïstische tradities is het doel spirituele bevrijding (Moksha), bereikbaar door toewijding, kennis, meditatie of gedisciplineerd handelen.
      `,

            objectiveCritique: `
Critici beweren dat deze systemen primair filosofisch en ervaringsgericht zijn, in plaats van gebaseerd op verifieerbare openbaring van een transcendente Schepper.

Sommigen betogen ook dat de sterke nadruk op terugtrekking uit het wereldse leven, monnikendom en zelfverloochening kan botsen met aspecten van de menselijke natuur die sociale ontwikkeling, wetenschappelijke vooruitgang, gezinsleven en civilisatie stimuleren.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Jodendom',

            answerNature: `
In het jodendom is de levenswijze geworteld in de verbondswet die aan Mozes is geopenbaard en bewaard in de Hebreeuwse Bijbel (Tenach). Het religieuze kader richt zich op gehoorzaamheid aan goddelijke geboden en het onderhoud van de verbondsrelatie tussen God en de kinderen van Israël.
      `,

            objectiveCritique: `
Critici betogen dat het jodendom zich historisch gezien ontwikkelde als een traditie gericht op het verbond met een specifiek volk, in plaats van als een universele missiereligie voor de gehele mensheid.

Vanuit tekstanalyse betogen sommige geleerden – waaronder Richard Elliott Friedman – dat de Thora door de eeuwen heen compilatie- en redactieprocessen heeft ondergaan, met name rondom de Babylonische ballingschap en daarna. Dit leidt ertoe dat sommige critici twijfelen of de tekst kan worden beschouwd als een perfect bewaarde openbaring in haar oorspronkelijke vorm.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Christendom',

            answerNature: `
Het christendom leert dat het centrale probleem van de mensheid zonde en afscheiding van God is, en dat redding wordt bereikt door geloof in Jezus' offerdood en opstanding. Daarom wordt het doel van het leven begrepen door verzoening met God en spirituele transformatie.
      `,

            objectiveCritique: `
Historisch gezien merken geleerden op dat er geen originele manuscripten van de evangeliën in het Aramees (de taal van Jezus) bewaard zijn gebleven. De oudste bewaarde teksten zijn Griekse manuscripten, geschreven decennia na Jezus' leven. Tekstcritici zoals Bart Ehrman hebben talloze variaties gedocumenteerd in vroege kopieën van het Nieuwe Testament.

Critici betogen ook dat het christendom historisch gezien meer nadruk legde op spirituele en persoonlijke redding dan op het bouwen van een uitgebreid juridisch of politiek kader voor economie, strafrecht of staatsbestuur. Sommige historici denken dat dit bijdroeg aan de uiteindelijke scheiding van kerk en staat in veel westerse samenlevingen.
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
De islam biedt een uitgebreid begrip van het menselijk doel door spirituele toewijding en wereldse verantwoordelijkheid te integreren.

De Koran stelt:

"En Ik heb de djinn en de mens slechts geschapen om Mij te dienen." (Koran 51:56)

In het islamitische denken is aanbidding niet beperkt tot rituelen, maar omvat het juist handelen, rechtvaardigheid, ethisch gedrag, het zoeken naar kennis en een positieve bijdrage aan de samenleving.

De islamitische leer streeft naar balans tussen spirituele groei en praktische deelname aan gezinsleven, economie, bestuur, liefdadigheid en sociale verantwoordelijkheid.
      `,

            objectiveCritique: `
Vanuit islamitisch perspectief vertegenwoordigt de Koran een uniek bewaarde openbaring. Moslims beweren dat de tekst onveranderd is gebleven en continu is doorgegeven via schriftelijke manuscripten en mondelinge memorisatie sinds de vroege generaties van de islam.

Veelgeciteerde voorbeelden zijn oude teksten zoals het Koran-manuscript van Birmingham en de enorme traditie van mondelinge memorisatie die wereldwijd door miljoenen moslims wordt onderhouden.

De islamitische wet (Sharia) wordt ook gepresenteerd als een ethisch en juridisch kader dat gebieden zoals financiën, liefdadigheid, familierecht, strafrecht en bestuur beslaat. Voorstanders betogen dat dit de islam de kenmerken van een compleet moreel en beschavingssysteem geeft, in plaats van slechts een spirituele traditie.
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

        title: 'Wat gebeurt er na het Eindstation?',

        subtitle: 'Lot, rechtvaardigheid en het hiernamaals',

        intro: `
Zonder het bestaan van ultieme rechtvaardigheid na de dood kan het leven zeer willekeurig en moreel onopgelost aanvoelen. Tirannen kunnen sterven zonder verantwoording af te leggen, en slachtoffers kunnen de wereld verlaten zonder rechtvaardigheid te krijgen. Dit roept een van de oudste filosofische vragen van de mensheid op: is de dood het einde, of is er een laatste oordeel voorbij het aardse leven?
  `,

        religions: {
          eastern: {
            title: 'Oosterse religies',

            examples: ['Hindoeïsme', 'Boeddhisme'],

            answerNature: `
Veel oosterse tradities accepteren het concept van reïncarnatie, waarbij de ziel of de bewustzijnsstroom door herhaalde cycli van wedergeboorte gaat. De toekomstige staat van een individu wordt bepaald door karma: de morele gevolgen van daden uit het verleden.
      `,

            objectiveCritique: `
Critici betogen dat reïncarnatie filosofische vragen oproept over rechtvaardigheid en verantwoordelijkheid. Als iemand in een nieuw leven de gevolgen draagt van daden uit een vorig bestaan die hij zich niet bewust kan herinneren, wordt het opvoedkundige en morele doel van de straf moeilijk te begrijpen.

Vanuit dit perspectief lijkt verantwoordelijkheid zonder bewust geheugen losgekoppeld van betekenisvolle morele verantwoordelijkheid.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialisme en atheïsme',

            answerNature: `
Materialistische en atheïstische wereldbeelden beschouwen de dood doorgaans als het einde van het bewuste bestaan. Mensen worden begrepen als biologische organismen wiens bewustzijn volledig stopt na de fysieke dood.
      `,

            objectiveCritique: `
Critici betogen dat strikt materialisme moeite heeft met het bieden van een objectieve basis voor moraal, rechtvaardigheid en fundamentele betekenis. Als zowel de onderdrukker als het slachtoffer uiteindelijk in het niets verdwijnen zonder verantwoording af te leggen, dan kunnen begrippen als opoffering, morele plicht en rechtvaardigheid subjectief of sociaal geconstrueerd lijken, in plaats van universeel bindend.

Voorstanders van seculiere ethiek betogen echter dat moraal nog steeds kan ontstaan door rede, empathie en sociale verantwoordelijkheid, zonder geloof in een hiernamaals.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Christendom',

            answerNature: `
Het christendom leert dat redding en eeuwig leven worden bereikt door geloof in Jezus Christus en het aanvaarden van Zijn offer voor de zonden van de mensheid. Hemel en eeuwige redding zijn nauw verbonden met geloof in Christus en goddelijke genade.
      `,

            objectiveCritique: `
Critici vragen zich af hoe redding die primair gebaseerd is op geloof, zich verhoudt tot universele principes van rechtvaardigheid. Filosofisch betogen sommigen dat dit kader kan betekenen dat een moreel goed persoon die eerlijk worstelt met het accepteren van bepaalde theologische dogma's, redding kan worden ontzegd, terwijl een ander persoon die zware misdaden pleegde maar op het laatste moment geloofde, de eeuwige beloning kan ontvangen.

Christelijke theologen antwoorden vaak dat redding zowel oprecht geloof als authentieke bekering omvat, in plaats van alleen een mondelinge belijdenis.
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
De islam presenteert het hiernamaals als een systeem van absolute morele verantwoordelijkheid en goddelijke rechtvaardigheid.

De Koran stelt:

"En geen belaste ziel draagt de last van een ander." (Koran 6:164)

Redding in de islam is consequent verbonden met geloof en goede daden:

"En verkondig aan degenen die geloven en goede werken verrichten..." (herhaald in de hele Koran, waaronder 2:25)

De islam leert dat het aardse leven een tijdelijke beproeving is, geen plaats voor ultieme beloning of straf:

"Hij Die de dood en het leven heeft geschapen om jullie te beproeven wie van jullie het beste in daden is." (Koran 67:2)
      `,

            objectiveCritique: `
In de islamitische theologie vertegenwoordigt de Dag des Oordeels de ultieme rechtbank waar elke daad, hoe klein ook, wordt verantwoord.

De Koran stelt:

"Wie het gewicht van een atoom aan goed doet, zal het zien. En wie het gewicht van een atoom aan kwaad doet, zal het zien." (Koran 99:7–8)

Dit kader streeft ernaar zowel individuele verantwoordelijkheid als absolute rechtvaardigheid te behouden, terwijl het de morele zekerheid biedt dat geen enkele daad van onderdrukking of goedheid uiteindelijk zonder gevolgen blijft.
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
      navbar: 'Religievergelijking',
      hero: {
        subtitle:
          'Een kalme, diepe filosofische reis langs de grootste vragen van de mensheid: de Schepper, het doel van het bestaan, moraal en wat ons wacht na de dood.',

        subtitleHighlight:
          'de Schepper, het doel van het bestaan, moraal en wat ons wacht na de dood.',

        scrollIndicator: 'Scroll naar beneden om de reis te beginnen',
      },

      storySection: {
        badge: 'Treinanalogie',

        titleLine1: 'Voordat je de vragen stelt',
        titleLine2: 'Over religie...',

        intro:
          'Elk mens bereikt uiteindelijk een moment van stilte wanneer de afleiding verdwijnt – en de diepste vragen eindelijk naar de oppervlakte komen.',

        ending: 'Deze trein is de planeet Aarde,',
        ending2: 'en de reis is je eigen leven.',
      },

      coreQuestions: {
        sectionLabel: 'Kernsecties',
        title: 'Fundamentele vragen',

        answerNatureTitle: 'Aard van het antwoord',

        philosophicalDiscussionTitle: 'Filosofische discussie',

        referencesTitle: 'Referenties',
      },

      futureResearch: {
        sectionLabel: 'Toekomstig onderzoek',

        title: 'Overige vragen',

        loaderBadge: 'Meer vragen in voorbereiding',

        headingLine1: 'De reis',
        headingLine2: 'gaat door...',

        description:
          'Aanvullend filosofisch en theologisch onderzoek wordt bestudeerd en voorbereid met behulp van dezelfde gestructureerde vergelijkende benadering.',

        topics: [
          'Moraal',
          'Wetenschap',
          'Wonderen',
          'Bewustzijn',
          'Vrije wil',
          'Lijden',
          'Historische overlevering',
          'Profetieën',
          'Menselijke natuur',
          'Betekenis',
          'Beschaving',
          'Ethiek',
        ],

        footer: 'Nieuwe secties worden binnenkort toegevoegd',
      },

      imageAlt: {
        hero: 'Religievergelijking',
      },
    },
  },
};
