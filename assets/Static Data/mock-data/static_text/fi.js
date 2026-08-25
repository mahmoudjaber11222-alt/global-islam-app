export default {
  splash: {
    version: 'versio',
    practice: 'harjoitus',
    share: 'jaa',
    logo: 'maailmanlaajuinen islam',
  },
  homeApp: {
    north: 'pohjoinen',
    east: 'itä',
    west: 'länsi',
    south: 'etelä',
    active: 'qibla aktiivinen',
    disabled: 'Avaa Qibla-kompassi',
    welcome: 'Tervetuloa takaisin',
    greet: 'Assalamu Alaikum',
    hour: 'tunti',
    minute: 'minuutti',
    second: 'sekunti',
    toLeft: 'vasemmalla puolellasi',
    toRight: 'oikealla puolellasi',
    fromNorth: 'pohjoisesta',
  },
  quranApp: {
    medinan: 'Medinalainen',
    meccan: 'Mekkalainen',
    arabicName: 'nimi arabiaksi',
    englishName: 'nimi englanniksi',
    details: 'Valitse jae nähdäksesi sen käännöksen ja tafsir (selityksen)',
    selectRes: 'Valitse lähde',
    retry: 'yritä uudelleen',
    loadErr1: 'Selityksen lataaminen epäonnistui. Yritä uudelleen.',
    loadErr2: 'Nouto epäonnistui',
    author: 'tekijä',
    explain: 'Selitys',
  },
  qiblaApp: {
    compass: 'Qibla-kompassi',
    accuracy: 'tarkkuus',
    offline: 'GPS offline',
    tracking: 'GPS-seuranta',
    aligned:
      'Olet kääntynyt Qiblan suuntaan. Pidä vakaana tarkkaa rukoussuuntaa varten.',
    notAligned:
      'Pidä laitteesi tasaisena ja käännä, kunnes nuoli osoittaa Qiblaan.',
    heading: 'Laitteen suunta',
    turn: 'käänny',
    alignedQibla: 'Kohdistettu Qiblaan',
  },
  aiApp: {
    answer: 'vastaus',
  },
  prayerApp: {
    locationRequired:
      'Sijaintipalvelut vaaditaan tarkkoja rukousaikoja varten.',
    schedule: 'Rukousaikataulu',
    refresh: 'päivitä',
    sunrise: 'Auringonnousu',
    upcoming: 'Seuraava rukous',
  },
  settingsApp: {
    reciterTitle: 'Adhaanin resitaattori',
    reciterSub: 'Valitse haluamasi ääni',
    notSelected: 'ei valittu',
    preview: 'esikuuntelu',
    cancel: 'peruuta',
    muezzin: 'Muessin',
    preNot: 'Ennakkoilmoitus adhaanista',
    preNotDet: 'Ilmoita 15 minuuttia ennen rukousaikaa',
    theme: 'Tumma tila',
    dark: 'Tällä hetkellä tumma teema',
    light: 'Tällä hetkellä vaalea teema',
    about: 'Tietoja',
    selectReciter: 'Valitse resitaattori',
  },
  athan: {
    mainTitle: 'ADHAAN · KUTSU RUKOUKSEEN',
    stop: 'Pysäytä adhaan',
    error: 'Adhaan-äänen lataaminen epäonnistui',
    prayerTime: 'Rukousaika',
    play: 'toista',
    pause: 'tauko',
    dismiss: 'hylkää',
  },
  athkarApp: {
    completed: 'Valmis',
    remaining: 'jäljellä',
    reset: 'nollaa',
    athkar: 'Adhkaar',
    mention: 'dhikr',
    descM: 'Aloita päiväsi siunauksilla',
    descE: 'Päätä päiväsi suojeluksen kanssa',
    remmember: 'Päivittäinen muisto',
    cat: 'rukousten luokat',
    category: 'Luokka',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Etsi haditheja...',
      button: 'Hae',
      books: {
        label: 'Kirja',
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
      title: 'Nykyistä kieltä ei vielä tueta',
      msg: 'Tätä kieltä ei tällä hetkellä tueta hadith-tietokannassa.',
      description:
        'Englanti on valittu automaattisesti varakieleksi, jotta voit jatkaa hakua ja selaamista ongelmitta. Voit myös kokeilla edistynyttä tilaa laajempaan monikieliseen tukeen.',
    },

    initialPlaceholder:
      'Etsi hadith nähdäksesi tiedot kuten luokitus, kertojat ja viite',

    loading: {
      label: 'Ladataan haditheja...',
    },

    hadithCard: {
      showMore: 'Näytä lisää',
      showLess: 'Näytä vähemmän',
      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Viitteet',
        referenceLabel: 'Viite',
        inBookReference: 'Kirjaviite',
        arabicReference: 'Arabialainen viite',
      },
    },

    emptyState: 'Haditheja ei löytynyt',

    pagination: {
      prev: 'Edellinen',
      next: 'Seuraava',
    },
  },

  switch: {
    title: {
      advanced: 'Edistynyt tila',
      normal: 'Normaali tila',
    },
    description: {
      advanced: 'Semanttinen haku syvemmällä ymmärryksellä',
      normal: 'Nopea suodatinpohjainen haku',
    },
  },

  navbar: {
    routes: {
      home: 'Koti',
      prayers: 'Rukoukset',
      quran: 'Koraani',
      athkar: 'Adhkar',
      articles: 'Artikkelit',
      articlesNested: {
        islamicHistory: 'Islamin historia',
        prayerInIslam: 'Rukous islamissa',
        womenInIslam: 'Naiset islamissa',
        purification: 'Puhdistautuminen',
      },
      learn: 'Opi',
      learnNested: {
        quranTajweed: 'Opi Koraani ja tajwid',
        arabic: 'Opi arabiaa',
      },
      dashboard: 'Kojelauta',
      aiAssistant: 'AI-avustaja',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Tutustu islamiin',
      clarity: 'Selkeyden',
      peace: '& Rauhan kanssa',
    },

    description:
      'Opi, esitä kysymyksiä ja löydä aito ymmärrys tekoälyn ja ohjatun tiedon avulla, joka on suunniteltu selkeyttä ja pohdintaa varten.',

    actions: {
      introductionToIslam: 'Opi islamista',
      islamQA: 'Islam Q&A (tekoälyavustaja)',
      continueWebsite: 'Jatka sivustolle',
    },
  },
  learning: {
    quran: {
      title: 'Opiskele Koraania ja Tajwidia',
      subtitle:
        'Paranna Koraanin resitointiasi ja ymmärrä Tajwidin säännöt vaihe vaiheelta.',
    },
    arabic: {
      title: 'Opiskele arabiaa',
      subtitle:
        'Kehitä arabian kielen taitojasi selkeiden ja jäsenneltyjen oppituntien avulla.',
    },
    default: {
      title: 'Oppimisosio',
      subtitle:
        'Tutustu opetussisältöihin, jotka on suunniteltu vahvistamaan tietämystäsi ja ymmärrystäsi.',
    },
  },
  explore: {
    searchBar: {
      title: 'Etsi hadith-kokoelmista',

      subtitle:
        'Hae luonnollisesti aiheiden, merkitysten tai kokonaisten lauseiden avulla.',

      placeholder: 'Esimerkki: hadith vanhempien kunnioittamisesta',

      button: 'Hae',
    },

    header: {
      title: 'Hadith-hakukirjasto',
      subtitle:
        'Tutki aitoja haditheja välittömästi modernilla lukukokemuksella.',
    },

    content: {
      heroTitle: 'Löydä aidot hadith-kokoelmat tehokkaalla haulla',

      loading: {
        label: 'Haetaan hadith-kokoelmia...',
      },

      error: {
        title: 'Hadithia ei voitu ladata',
        message:
          'Emme voineet hakea kertomuksia juuri nyt. Tarkista yhteys ja yritä uudelleen.',
      },

      empty: {
        title: 'Vastaavia haditheja ei löytynyt',
      },

      card: {
        reference: 'Hadith-viite',
        readMore: 'Lue koko hadith',
      },
    },
  },

  home: {
    news: {
      title: 'Muslimiyhteisön uutiset',
      subtitle: 'Pysy ajan tasalla tärkeistä päivityksistä muslimimaailmasta',
    },

    prayer: {
      title: 'Rukouksen laskuri',
      subtitle: 'Valmistaudu seuraavaan rukoukseen',
      button: 'Näytä rukousajat',
      nextPrayerLabel: 'Seuraava rukous:',
    },

    athkar: {
      title: 'Aamu- ja ilta-adhkar',
      subtitle: 'Päivittäiset muistamiset sydämen yhteyden ylläpitämiseksi',
      button: 'Näytä lisää adhkareita',
    },

    qibla: {
      title: 'Qibla-suunta',
      subtitle: 'Löydä Kaaban suunta missä tahansa oletkin',
      locationLoading: 'Haetaan sijaintiasi...',
      enableLocation: 'Ota sijainti käyttöön',
      refreshLocation: 'Päivitä qibla-suunta',

      warning:
        'Jos laitteesi ei tue suuntasensoreita, kompassin tarkkuus voi heikentyä.',

      errorTitle: 'Lupa evätty',
    },
  },

  prayers: {
    nextLabel: 'Seuraava rukous:',

    header: {
      title: 'Rukousajat',
      subtitle: 'Päivittäinen hetki yhteydessä Luojaasi',
    },

    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Haetaan sijaintiasi...',
      warning:
        'Jos käyttöjärjestelmä ei tue suuntausta, se vaikuttaa kompassilaskelmiin.',
      errorTitle: 'Lupa evätty',
      enableLocation: 'Ota sijainti käyttöön',
      refreshLocation: 'Päivitä qibla-suunta',
    },

    list: {
      warning: 'Ajat voivat vaihdella hieman laskentamenetelmän mukaan.',
    },
  },

  quran: {
    header: {
      title: 'Koraani',
      subtitle: 'Päivittäinen kumppanisi lukemiseen ja pohdintaan',
    },

    search: {
      noResultTitle: 'Ei tietoja',
      noResultMessage: 'Ei näytettäviä tietoja',
    },
  },

  athkar: {
    title: 'Päivittäiset muistamiset',
    subtitle: 'Säilytä jatkuvuus päivittäisessä dhikrissä ja pohdinnassa',
  },

  ai: {
    header: {
      title: 'Globaali islamilainen tekoälyavustaja',
      subtitle:
        'Saat selkeitä islamilaisia vastauksia, jotka perustuvat Koraaniin, sunnaan ja luotettaviin oppineisiin',
    },

    loading: {
      label: 'Ladataan...',
    },

    error: {
      title: 'Pyyntöraja saavutettu',
      message:
        'Tietopalveluun ei voida nyt yhdistää. Yritä myöhemmin uudelleen.',
    },

    input: {
      placeholder: 'Kysy islamista...',
    },

    suggestions: [
      'Voinko rukoilla ilman wudua?',
      'Onko korko (riba) täysin kielletty?',
      'Säännöt työstä ei-halal-ympäristössä',
      'Voinko rukoilla matkustaessa?',
      'Onko hajuveden käyttö sallittua rukouksessa?',
      'Mikä mitätöi rukouksen?',
      'Rukouksen viivästyttäminen työn takia',
    ],

    footer: {
      disclaimer:
        'Tämä tekoälyavustaja on suunniteltu tarjoamaan vastauksia luotettaviin tietolähteisiin, mukaan lukien islamilaiset viitteet ja varmennettu koulutusmateriaali.',

      note: 'Vastaukset ovat vain tiedoksi eivätkä korvaa tarvittaessa oppineiden ohjausta.',
    },
  },

  footer: {
    disclaimer:
      'Kaikki näytetty sisältö perustuu alkuperäisiin luotettaviin lähteisiin. Palautetta ja virheilmoituksia otetaan mielellään vastaan.',

    tagline: 'Huolella rakennettu aidon islamilaisen sisällön palvelemiseksi',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Takaisin',
    },

    sections: {
      hadithText: 'Hadith-teksti',
      arabicText: 'Arabian kielinen teksti',
      explanation: 'Selitys',
      authentication: 'Aitous',
      lessons: 'Hyödyt ja opetukset',
    },
  },
  other: {
    note: 'Huomautus',
    theLanguage: 'kieli',
    part: 'Osa',
    translation: 'Käännös',
    verse: 'Jae',
    chapter: 'Luku',
    page: 'Sivu',
    breakingNews: 'Viimeisimmät uutiset',
  },
  dailyRemined: {
    title: 'Tämän Päivän Valo',
    subtitle:
      'Pysähdy hetkeksi ja pohdi päivääsi varten valittua jaetta ja hadithia.',
  },
  baseFooter: {
    contact: {
      title: 'Ota yhteyttä',
      name: 'Nimesi',
      email: 'Sähköpostisi',
      msg: 'Viestisi',
      sendMsg: 'Lähetä viesti',
    },
    followUs: 'Seuraa meitä',
    QA: 'Pikavalinta',
    logoB:
      'Koraani, Hadith, rukousajat, AI-avustaja ja päivittäiset islamilaiset työkalut—all yhdellä modernilla alustalla.',
    whatsapp: 'Chattaa WhatsAppissa',
    rsr: 'Kaikki oikeudet pidätetään',
  },
  compareRelg: {
    note: `Tämä sivu tarjoaa vertailevan katsauksen maailman valtauskontoihin. Islamilaisesta näkökulmasta Koraani vahvistaa, että aikaisempia jumalallisia ilmoituksia lähetettiin varhaisemmille kansoille, mutta ajan myötä ne kokivat ihmisten tekemiä muutoksia (tahrif). Koraanissa sanotaan: "Me olemme lähettäneet alas johdatuksen, ja Me totisesti varjelemme sen" (15:9). Tällä sivulla tarkastellaan näitä eroja historiallisten ja tekstuaalisten todisteiden valossa.`,
    mainTitle: 'Rationaalinen matka uskontojen läpi',
    headerTitle: 'Kysymykset, jotka määrittelevät ihmisen olemassaolon',
    story: `
Kuvittele avaavasi yhtäkkiä silmäsi ja huomaavasi istuvasi ylellisessä junassa, joka kiitää valtavaa vauhtia läpi päättymättömän yön. Ympärilläsi on kaikenlaisia kuviteltavissa olevia mukavuuksia: hienostuneille pöydille katettuja ylellisiä aterioita, loistavia näyttöjä, jotka esittävät elokuvia, ja pehmeitä silkkityynyjä lepäämässä muhkeilla istuimilla.

Käännyt vieressäsi istuvien matkustajien puoleen ja kysyt ahdistuneena:
"Missä me olemme? Kuka laittoi meidät tähän junaan? Ja minne olemme menossa?"

Mutta todellinen shokki tulee heidän reaktioistaan.

Yksi heistä vastaa kylmästi:
"Mitä väliä sillä on? Maista tätä ruokaa, se on uskomatonta."

Toinen sanoo pilkallisesti:
"Miksi vaivaat itseäsi tuollaisilla kysymyksillä? Rentoudu vain ja nauti elokuvasta."

Kaikki ympärilläsi ovat uppoutuneita matkan nautintoihin ja häiriötekijöihin, mutta silti sinun lävitsesi kulkee syvä kylmäävä tunne, sillä tiedät varmasti, että tämä juna on matkalla kohti pääteasemaa – asemaa, jossa jokaisen matkustajan on lopulta astuttava ulos.

Ja sillä hetkellä herää todellinen kysymys:

Eksytkö matkan ylellisyyteen ja viihteeseen, vai jatkatko vastausten etsimistä kolmeen kaikkein syvällisimpään kysymykseen:

Kuka on Luoja?
Miksi olemme täällä?
Ja mikä meitä odottaa lopussa?

Tuo juna on maapallo, ja matka on sinun elämäsi.

Ja koska ihmisillä itsellään ei ole näitä vastauksia, uskonnot syntyivät "ohjekirjoina", joista jokainen väittää olevansa peräisin junan Suunnittelijalta itseltään.

Laitetaan siis nämä ohjekirjat rauhallisen ja rationaalisen tarkastelun suurennuslasin alle.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kuka on Luoja?',

        intro: `
Filosofisesta ja loogisesta näkökulmasta katsottuna maailmankaikkeuden "Ensimmäisen syyn" – Luojan – on oltava täysin transsendentti, aineen, ajan ja tilan yläpuolella. Jos Luoja olisi alainen nälälle, väsymykselle, fyysisille rajoituksille tai tilalliselle rajallisuudelle, niin loogisesti ajateltuna tällainen olento lakkaisi olemasta absoluuttinen Luoja ja tulisi sen sijaan luoduksi ja riippuvaiseksi kokonaisuudeksi. Riippuvainen olento ei voi loppukädessä toimia koko olemassaolon välttämättömänä lähteenä.
  `,

        religions: {
          eastern: {
            title: 'Itämaiset uskonnot',
            examples: ['Hindulaisuus', 'Buddhalaisuus'],

            answerNature: `
Varhaisimmassa Theravāda-muodossaan buddhalaisuus on yleisesti ottaen ei-teistinen; se ei keskity luojajumalan olemassaoloon, vaan näkee olemassaolon syntyvän ikuisten luonnonprosessien, syy-seuraussuhteiden ja toisiinsa liittyvien lakien kautta.

Hindulaisuus puolestaan puhuu usein perimmäisestä metafyysisestä todellisuudesta, jota kutsutaan "Brahmaniksi". Käytännön palvonnassa tämä perimmäinen todellisuus ilmaistaan kuitenkin lukemattomien ilmentymien ja jumaluuksien kautta, mukaan lukien ihmis- ja eläinhahmoiset muodot, kuten Vishnu, Shiva ja Kali.
      `,

            objectiveCritique: `
Filosofisesta näkökulmasta buddhalaisuus kohtaa haasteen selittää, kuinka erittäin järjestäytynyt maailmankaikkeus, jota hallitsevat johdonmukaiset lait ja fyysinen tarkkuus, voisi syntyä ilman alkuperäistä älyllistä syytä.

Hinduperinteissä, jotka omaksuvat jumalallisen inkarnaation ja fyysiset esitykset, jumalallinen yhdistetään rajoituksiin, konflikteihin, nälkään, kuolemaan ja aineelliseen muotoon. Jumaluus, joka voidaan esittää fyysisesti, inkarnoituneena tai joka on alainen luonnonprosesseille, näyttää rationaalisesta näkökulmasta katsottuna osallistuvan luomakuntaan sen sijaan, että se olisi täysin sen yläpuolella.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Juutalaisuus',

            answerNature: `
Juutalaisuus vahvistaa uskon yhteen Luojaan, joka on epäjumalien ja fyysisten esitysten yläpuolella. Jumala (JHVH) ymmärretään taivaan ja maan Luojana, ja Hän on pohjimmiltaan erillinen luomakunnasta.
      `,

            objectiveCritique: `
Tässä esitetty filosofinen huoli ei koske ensisijaisesti itse transsendenssia, vaan jumalallisen universaalisuuden koettua rajoittuneisuutta tietyissä heprealaisen Raamatun kohdissa. Tietyt tekstit kuvaavat Jumalaa liittosuhteessa, joka keskittyy voimakkaasti Israelin lapsiin tavalla, jota kriitikot pitävät etnisesti poissulkevana.

Lisäksi jotkut kohdat kuvaavat Jumalaa hyvin inhimillisillä termeillä, kuten "katuvan" ihmiskunnan luomista (1. Mooseksen kirja 6:6) tai "lepäävän" seitsemäntenä päivänä luomisen jälkeen (2. Mooseksen kirja 31:17). Kriitikot väittävät, että tällaiset kuvaukset herättävät kysymyksiä siitä, pitäisikö nämä ominaisuudet ymmärtää kirjaimellisesti vai vertauskuvallisesti.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristinusko',

            answerNature: `
Kristinusko opettaa uskoa yhteen Jumalaan kolminaisuusopin kautta: Isä, Poika ja Pyhä Henki. Inkarnaatio-opin mukaan kolminaisuuden toinen persoona – Poika – astui ihmiskunnan historiaan Jeesuksen Kristuksen persoonassa, joka ristiinnaulittiin ja kuoli ihmiskunnan pelastuksen puolesta.
      `,

            objectiveCritique: `
Filosofisesti kriitikot väittävät, että inkarnaatio-oppi luo jännitteen jumalallisten ja inhimillisten ominaisuuksien välille. Perinteisesti Jumalaa kuvataan iankaikkiseksi, rajattomaksi ja kuoleman yläpuolella olevaksi, kun taas ihmiset ovat rajallisia, haavoittuvia ja kuolevaisia.

Haaste syntyy, kun sekä täysi jumaluus että täysi ihmisyys yhdistyvät yhdessä persoonassa. Kriitikot kyseenalaistavat, kuinka iankaikkinen ja itseriittoinen olento voisi samanaikaisesti kokea nälkää, unta, kärsimystä ja kuolemaa. Ongelma kehystetään usein jännitteeksi transsendenssin ja inkarnaation välillä pikemminkin kuin pelkkänä teologisena mysteerinä.
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
Islam esittää käsityksen Jumalasta tiukasti transsendenttina ja jakamattomana. Koraani tiivistää tämän käsityksen Al-Ikhlas-suurassa:

"Sano: Hän on Allah, Yksi. Allah, Ikuinen Turva. Hän ei ole siittänyt eikä syntynyt, eikä Hänellä ole ketään vertaistaan." (Koraani 112:1–4)

Luoja on islamissa täysin aineellisen muodon yläpuolella ja erilainen kuin luomakunta:

"Ei ole mitään Hänen kaltaistaan." (Koraani 42:11)

Aika, tila tai fyysiset rajoitukset eivät rajoita Jumalaa. Koraani toteaa myös:

"Ei torkkuminen eikä uni valtaa Häntä." (Koraani 2:255)

Islamilaisessa teologiassa Jumala ymmärretään itsessään olemassa olevana, iankaikkisena, itsenäisenä ja täysin erillisenä luomakunnasta.
      `,

            objectiveCritique: `
Islamilaisesta filosofisesta näkökulmasta tämä ymmärrys pyrkii säilyttämään absoluuttisen transsendenssin välttäen antropomorfismia ja inkarnaatiota. Konseptin tavoitteena on yhdistää Luoja ajatukseen itsenäisestä ja välttämättömästä Ensimmäisestä Syystä, joka ei ole alainen luodun olemassaolon rajoituksille.
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

        title: 'Mikä on elämän menetelmä ja tarkoitus?',

        intro: `
Jos on olemassa viisas Luoja, olisi irrationaalista olettaa, että ihmiskunta olisi jätetty ilman ohjausta, joka selittää olemassaolon tarkoituksen, moraalisen vastuun ja periaatteet, joiden mukaan elämää tulisi elää. Aivan kuten monimutkainen järjestelmä vaatii ohjeet suunnittelijaltaan, uskonnot väittävät tarjoavansa ihmiskunnalle viitekehyksen ymmärtää, miksi olemme täällä ja miten meidän tulisi elää.
  `,

        religions: {
          eastern: {
            title: 'Itämaiset uskonnot',

            examples: ['Hindulaisuus', 'Buddhalaisuus'],

            answerNature: `
Itämaiset perinteet, kuten buddhalaisuus ja hindulaisuus, luottavat yleensä henkisten opettajien ja viisaiden kehittämiin filosofisiin opetuksiin, meditaatiokäytäntöihin ja pohdintoihin.

Buddhalaisuudessa perimmäinen tavoite on vapautuminen kärsimyksestä ja pakeneminen jälleensyntymisen kierteestä saavuttamalla Nirvana – transsendenssin ja sisäisen vapautumisen tila.

Monissa hinduperinteissä tavoitteena on henkinen vapautuminen (Moksha), joka saavutetaan omistautumisen, tiedon, meditaation tai kurinalaisen toiminnan kautta.
      `,

            objectiveCritique: `
Kriitikot väittävät, että nämä järjestelmät ovat ensisijaisesti filosofisia ja kokemuksellisia sen sijaan, että ne perustuisivat transsendentin Luojan todennettavissa olevaan ilmoitukseen.

Jotkut väittävät myös, että voimakas painotus maallisesta elämästä irrottautumiseen, luostarielämään ja luopumiseen voi olla ristiriidassa niiden ihmisluonnon näkökohtien kanssa, jotka edistävät yhteiskunnallista kehitystä, tieteellistä edistystä, perhe-elämää ja sivilisaatioiden rakentamista.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Juutalaisuus',

            answerNature: `
Juutalaisuudessa elämän menetelmä juontuu Moosekselle ilmoitetusta liiton laista, joka on säilytetty heprealaisessa Raamatussa (Tanakh). Uskonnollinen viitekehys keskittyy kuuliaisuuteen jumalallisia käskyjä kohtaan ja liittosuhteen ylläpitämiseen Jumalan ja Israelin lasten välillä.
      `,

            objectiveCritique: `
Kriitikot väittävät, että juutalaisuus on historiallisesti kehittynyt ensisijaisesti liittokeskeisenä perinteenä, joka on sidottu tiettyyn kansaan, eikä niinkään universaalisti lähetystyötä tekevänä uskontona, joka on suunnattu koko ihmiskunnalle.

Tekstikritiikin näkökulmasta jotkut tutkijat – mukaan lukien Richard Elliott Friedman ja muut – väittävät, että Toora kävi läpi kokoamis- ja toimitusprosesseja vuosisatojen ajan, erityisesti Babylonin pakkosiirtolaisuuden aikoihin ja sen jälkeen. Tämä on saanut jotkut kriitikot kyseenalaistamaan, voidaanko tekstiä pitää täydellisesti säilyneenä ja suoraan välitettynä ilmoituksena sen alkuperäisessä muodossa.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristinusko',

            answerNature: `
Kristinusko opettaa, että ihmiskunnan keskeinen ongelma on synti ja ero Jumalasta, ja että pelastus tulee uskon kautta Jeesuksen Kristuksen uhrikuolemaan ja ylösnousemukseen. Elämän tarkoitus ymmärretään siten sovinnon kautta Jumalan kanssa ja henkisenä muutoksena.
      `,

            objectiveCritique: `
Historiallisesti tutkijat huomauttavat, että Jeesuksen puhumalla aramean kielellä ei ole säilynyt evankeliumien alkuperäiskäsikirjoituksia. Varhaisimmat säilyneet tekstit ovat kreikankielisiä käsikirjoituksia, jotka on kirjoitettu vuosikymmeniä Jeesuksen elämän jälkeen. Tekstikriitikot, kuten Bart Ehrman, ovat dokumentoineet lukuisten käsikirjoitusmuunnelmien olemassaolon Uuden testamentin varhaisten kopioiden välillä.

Kriitikot väittävät myös, että kristinusko on historiallisesti painottanut henkistä ja henkilökohtaista pelastusta enemmän kuin taloutta, rikosoikeutta tai valtionhallintoa säätelevän kattavan oikeudellisen tai poliittisen kehyksen kehittämistä. Jotkut historioitsijat ehdottavat tämän myötävaikuttaneen uskonnon ja valtion vallan lopulliseen erottamiseen monissa länsimaisissa yhteiskunnissa.
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
Islam esittää ihmisen tarkoituksesta kattavan käsityksen, joka yhdistää sekä henkisen omistautumisen että maallisen vastuun.

Koraani toteaa:

"Enkä Minä ole luonut djinnejä ja ihmisiä muuhun kuin palvomaan Minua." (Koraani 51:56)

Islamilaisessa ajattelussa palvonta ei rajoitu vain rituaaleihin, vaan se sisältää oikeamielisen toiminnan, oikeudenmukaisuuden, eettisen käytöksen, tiedon etsimisen ja positiivisen osallistumisen yhteiskuntaan.

Islamilaiset opetukset pyrkivät tasapainottamaan henkistä kasvua käytännön osallistumisella perhe-elämään, talouteen, hallintoon, hyväntekeväisyyteen ja sosiaaliseen vastuuseen.
      `,

            objectiveCritique: `
Islamilaisesta näkökulmasta Koraani edustaa ainutlaatuisesti säilynyttä ilmoitusta. Muslimit vahvistavat, että sen teksti on pysynyt muuttumattomana ja sitä on välitetty jatkuvasti sekä kirjallisissa käsikirjoituksissa että suullisena ulkoa opetteluna islamin varhaisimmista sukupolvista lähtien.

Usein mainittuja esimerkkejä ovat varhaiset käsikirjoitukset, kuten Birminghamin Koraani-käsikirjoitus, ja laajalle levinnyt suullisen ulkoa opettelun perinne, jota ylläpitävät miljoonat muslimit ympäri maailmaa.

Islamilainen laki (Sharia) esitetään myös kattavana eettisenä ja oikeudellisena kehyksenä, joka käsittelee muun muassa rahoitusta, hyväntekeväisyyttä, perheoikeutta, rikosoikeutta ja hallintoa. Kannattajat väittävät tämän antavan islamille ominaisuudet täydellisestä moraalisesta ja sivistyksellisestä järjestelmästä puhtaasti henkisen perinteen sijaan.
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

        title: 'Mitä tapahtuu Pääteaseman jälkeen?',

        subtitle: 'Kohtalo, oikeudenmukaisuus ja kuolemanjälkeinen elämä',

        intro: `
Ilman äärimmäisen oikeudenmukaisuuden olemassaoloa kuoleman jälkeen elämä voi tuntua syvästi mielivaltaiselta ja moraalisesti ratkaisemattomalta. Tyrannit voivat kuolla joutumatta vastuuseen, kun taas uhrit voivat lähteä maailmasta saamatta oikeutta. Tämä herättää yhden ihmiskunnan vanhimmista filosofisista kysymyksistä: onko kuolema loppu, vai onko maallisen elämän tuolla puolen lopullinen tuomio?
  `,

        religions: {
          eastern: {
            title: 'Itämaiset uskonnot',

            examples: ['Hindulaisuus', 'Buddhalaisuus'],

            answerNature: `
Monet itämaiset perinteet omaksuvat käsityksen jälleensyntymisestä, jossa sielu tai tietoisuuden virta käy läpi toistuvia syntymien kiertokulkuja. Henkilön tulevan tilan muokkaa karma – menneiden tekojen moraaliset seuraukset.
      `,

            objectiveCritique: `
Kriitikot väittävät, että jälleensyntyminen herättää filosofisia kysymyksiä oikeudenmukaisuudesta ja vastuusta. Jos henkilö kärsii uudessa elämässään seurauksia aiemmassa olemassaolossa tehdyistä teoista, joita hän ei pysty tietoisesti muistamaan, rangaistuksen kasvatuksellisen ja moraalisen tarkoituksen ymmärtäminen muuttuu vaikeaksi.

Tästä näkökulmasta vastuu ilman tietoista muistia voi tuntua irralliselta merkityksellisestä moraalisesta vastuusta.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialismi ja ateismi',

            answerNature: `
Materialistiset ja ateistiset maailmankuvat pitävät kuolemaa yleensä tietoisen olemassaolon loppuna. Ihmiset ymmärretään biologisina organismeina, joiden tietoisuus lakkaa kokonaan fyysisen kuoleman jälkeen.
      `,

            objectiveCritique: `
Kriitikot väittävät, että tiukka materialismi kamppailee tarjotakseen objektiivisen perustan moraalille, oikeudenmukaisuudelle ja perimmäiselle merkitykselle. Jos sekä sortaja että uhri lopulta katoavat olemattomuuteen joutumatta koskaan vastuuseen, käsitteet kuten uhraus, moraalinen velvollisuus ja oikeudenmukaisuus voivat lopulta vaikuttaa subjektiivisilta tai sosiaalisesti rakentuneilta universaalisti sitovien sijaan.

Maallisen etiikan kannattajat kuitenkin väittävät, että moraali voi silti syntyä järjen, empatian ja sosiaalisen vastuun kautta ilman uskoa kuolemanjälkeiseen elämään.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristinusko',

            answerNature: `
Kristinusko opettaa, että pelastus ja iankaikkinen elämä saavutetaan uskomalla Jeesukseen Kristukseen ja hyväksymällä Hänen sovitusuhrinsa ihmiskunnan syntien puolesta. Taivas ja iankaikkinen pelastus ovat siten tiiviisti yhteydessä uskoon ja jumalalliseen armoon.
      `,

            objectiveCritique: `
Kriitikot kyseenalaistavat, kuinka ensisijaisesti uskoon perustuva pelastus suhteutuu universaalin oikeudenmukaisuuden periaatteisiin. Filosofisesti jotkut väittävät, että tämä viitekehys voisi tarkoittaa, että moraalisesti oikeamieliseltä henkilöltä, joka kamppailee vilpittömästi tiettyjen teologisten oppien hyväksymisessä, saatettaisiin evätä pelastus, kun taas toinen henkilö, joka teki vakavia rikoksia, mutta omaksui uskon juuri ennen kuolemaansa, voisi silti saavuttaa iankaikkisen palkkion.

Kristityt teologit vastaavat usein, että pelastus edellyttää sekä vilpitöntä uskoa että aitoa katumusta pelkän sanallisen uskon sijaan.
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
Islam esittää kuolemanjälkeisen elämän täydellisen moraalisen vastuun ja jumalallisen oikeudenmukaisuuden järjestelmänä.

Koraani toteaa:

"Mikään sielu ei kanna toisen taakkaa." (Koraani 6:164)

Pelastus islamissa on johdonmukaisesti yhteydessä sekä uskoon että oikeamieliseen toimintaan:

"Ne, jotka uskovat ja tekevät hyviä tekoja..." (toistuu koko Koraanissa, mm. 2:25)

Islam opettaa, että maallinen elämä on väliaikainen koe eikä lopullinen palkkion tai rangaistuksen paikka:

"Hän, joka on luonut kuoleman ja elämän koetellakseen teitä, kuka teistä on teoissaan parhain." (Koraani 67:2)
      `,

            objectiveCritique: `
Islamilaisessa teologiassa Tuomiopäivä edustaa ylintä oikeutta, jossa jokainen teko, olipa se kuinka pieni tahansa, otetaan täysin huomioon.

Koraani toteaa:

"Joka on tehnyt atomin painon verran hyvää, on näkevä sen. Ja joka on tehnyt atomin painon verran pahaa, on näkevä sen." (Koraani 99:7–8)

Tämä viitekehys pyrkii säilyttämään sekä yksilön vastuun että absoluuttisen oikeudenmukaisuuden ja tarjoaa moraalisen varmuuden siitä, että yksikään sorron tai hyvyyden teko ei lopulta katoa ilman seurauksia.
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
      navbar: 'Uskontojen vertailu',
      hero: {
        subtitle:
          'Rauhallinen mutta syvästi filosofinen matka, joka tutkii ihmiskunnan suurimpia kysymyksiä: Luojaa, olemassaolon tarkoitusta, moraalia ja sitä, mikä odottaa kuoleman jälkeen.',

        subtitleHighlight:
          'Luojaa, olemassaolon tarkoitusta, moraalia ja sitä, mikä odottaa kuoleman jälkeen.',

        scrollIndicator: 'Vieritä alaspäin aloittaaksesi matkan',
      },

      storySection: {
        badge: 'Juna-analogia',

        titleLine1: 'Ennen kuin kysyt',
        titleLine2: 'uskonnoista...',

        intro:
          'Jokainen ihminen saapuu lopulta hiljaisuuden hetkeen, jossa häiriötekijät katoavat – ja syvimmät kysymykset nousevat vihdoin esiin.',

        ending: 'Tuo juna on maapallo,',
        ending2: 'ja matka on sinun elämäsi.',
      },

      coreQuestions: {
        sectionLabel: 'Pääosio',
        title: 'Ydinkysymykset',

        answerNatureTitle: 'Vastauksen luonne',

        philosophicalDiscussionTitle: 'Filosofinen keskustelu',

        referencesTitle: 'Lähteet',
      },

      futureResearch: {
        sectionLabel: 'Tuleva tutkimus',

        title: 'Muita kysymyksiä',

        loaderBadge: 'Lisää kysymyksiä tulossa',

        headingLine1: 'Matka',
        headingLine2: 'jatkuu...',

        description:
          'Lisää filosofisia ja teologisia tutkimuksia tutkitaan ja valmistellaan parhaillaan samalla strukturoidulla vertailevalla lähestymistavalla.',

        topics: [
          'Moraali',
          'Tiede',
          'Ihmeitä',
          'Tietoisuus',
          'Vapaa tahto',
          'Kärsimys',
          'Historiallinen säilyminen',
          'Profetiat',
          'Ihmisluonto',
          'Merkitys',
          'Sivilisaatiot',
          'Etiikka',
        ],

        footer: 'Uusia osioita lisätään pian',
      },

      imageAlt: {
        hero: 'Uskontojen vertailu',
      },
    },
  },
};
