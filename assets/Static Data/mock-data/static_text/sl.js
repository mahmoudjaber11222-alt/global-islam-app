export default {
  splash: {
    version: 'različica',
    practice: 'vaja',
    share: 'deli',
    logo: 'globalni islam',
  },
  homeApp: {
    north: 'sever',
    east: 'vzhod',
    west: 'zahod',
    south: 'jug',
    active: 'kibla aktivna',
    disabled: 'Odpri kompas kible',
    welcome: 'Dobrodošli nazaj',
    greet: 'As-salamu alajkum',
    hour: 'ura',
    minute: 'minuta',
    second: 'sekunda',
    toLeft: 'na vaši levi',
    toRight: 'na vaši desni',
    fromNorth: 'od severa',
  },
  quranApp: {
    medinan: 'Medinska',
    meccan: 'Meška',
    arabicName: 'ime v arabščini',
    englishName: 'ime v angleščini',
    details: 'Izberite ajet, da si ogledate prevod in tafsir (razlago)',
    selectRes: 'Izberi vir',
    retry: 'poskusi znova',
    loadErr1: 'Razlage ni mogoče naložiti. Poskusite znova.',
    loadErr2: 'Pridobivanje ni uspelo',
    author: 'avtor',
    explain: 'Razlaga',
  },
  qiblaApp: {
    compass: 'Kompas kible',
    accuracy: 'natančnost',
    offline: 'GPS brez povezave',
    tracking: 'Sledenje GPS',
    aligned: 'Gledate proti kibli. Držite stabilno za natančno smer molitve.',
    notAligned:
      'Držite napravo vodoravno in zavrtite, dokler puščica ne kaže proti kibli.',
    heading: 'Smer naprave',
    turn: 'zavrti',
    alignedQibla: 'Poravnano s kiblo',
  },
  aiApp: {
    answer: 'odgovor',
  },
  prayerApp: {
    locationRequired: 'Za točne čase molitve so potrebne storitve lokacije.',
    schedule: 'Urnik molitev',
    refresh: 'osveži',
    sunrise: 'Sončni vzhod',
    upcoming: 'Naslednja molitev',
  },
  settingsApp: {
    reciterTitle: 'Recitator azana',
    reciterSub: 'Izberite želeni glas',
    notSelected: 'ni izbrano',
    preview: 'predogled',
    cancel: 'prekliči',
    muezzin: 'Muezzin',
    preNot: 'Obvestilo pred azanom',
    preNotDet: 'Obvesti 15 minut pred časom molitve',
    theme: 'Temni način',
    dark: 'Trenutno temna tema',
    light: 'Trenutno svetla tema',
    about: 'O aplikaciji',
    selectReciter: 'Izberi recitatorja',
  },
  athan: {
    mainTitle: 'AZAN · K LIC K MOLITVI',
    stop: 'Ustavi azan',
    error: 'Zvoka azana ni mogoče naložiti',
    prayerTime: 'Čas molitve',
    play: 'predvajaj',
    pause: 'premor',
    dismiss: 'zapri',
  },
  athkarApp: {
    completed: 'Končano',
    remaining: 'preostalo',
    reset: 'ponastavi',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Začnite dan z blagoslovi',
    descE: 'Končajte dan pod zaščito',
    remmember: 'Dnevni spomin',
    cat: 'kategorije prošenj',
    category: 'Kategorija',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Išči hadis...',
      button: 'Išči',
      books: {
        label: 'Knjiga',
        options: {
          bukhari: 'Buhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Abu Davud',
          nasai: 'Nasai',
          ibnmajah: 'Ibn Madža',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Trenutni jezik še ni podprt',
      msg: 'Ta jezik trenutno ni podprt v zbirki hadisov.',
      description:
        'Angleščina je bila samodejno izbrana kot nadomestni jezik, da lahko še naprej nemoteno iščete in brskate po hadisih. Prav tako lahko preizkusite Napredni način za širšo večjezično podporo in boljše rezultate.',
    },

    initialPlaceholder:
      'Poiščite hadis za prikaz podrobnosti, kot so ocena, prenašalci in reference',

    loading: {
      label: 'Nalaganje hadisov...',
    },

    hadithCard: {
      showMore: 'Pokaži več',
      showLess: 'Pokaži manj',

      header: {
        hadithPrefix: 'Hadis #',
        referencesTitle: 'Reference',
        referenceLabel: 'Referenca',
        inBookReference: 'Referenca v knjigi',
        arabicReference: 'Arabska referenca',
      },
    },

    emptyState: 'Ni najdenih hadisov',

    pagination: {
      prev: 'Nazaj',
      next: 'Naprej',
    },
  },

  switch: {
    title: {
      advanced: 'Napredni način',
      normal: 'Običajni način',
    },

    description: {
      advanced: 'Semantično iskanje z globljim razumevanjem',
      normal: 'Hitro iskanje na podlagi filtrov',
    },
  },

  navbar: {
    routes: {
      home: 'Domov',
      prayers: 'Molitev',
      quran: 'Koran',
      athkar: 'Zikr',
      articles: 'Članki',

      articlesNested: {
        islamicHistory: 'Islamska zgodovina',
        prayerInIslam: 'Molitev v islamu',
        womenInIslam: 'Ženske v islamu',
        purification: 'Čiščenje in umivanje',
      },

      learn: 'Uči se',
      learnNested: {
        quranTajweed: 'Uči se Koran in tajvid',
        arabic: 'Uči se arabščino',
      },

      dashboard: 'Nadzorna plošča',
      aiAssistant: 'UI pomočnik',
    },
  },
  hero: {
    title: {
      explore: 'Razišči islam z',
      clarity: 'jasnostjo',
      peace: '& mirom',
    },

    description:
      'Uči se, postavljaj vprašanja in odkrij pristno razumevanje prek umetne inteligence in vodenega znanja, zasnovanega za jasnost in razmislek.',

    actions: {
      introductionToIslam: 'Spoznaj islam',
      islamQA: 'Islamska vprašanja in odgovori (AI pomočnik)',
      continueWebsite: 'Nadaljuj na spletno stran',
    },
  },
  learning: {
    quran: {
      title: 'Naučite se Koran in Tadžvid',
      subtitle:
        'Izboljšajte svoje recitiranje Korana in razumite pravila Tadžvida korak za korakom.',
    },
    arabic: {
      title: 'Naučite se arabščine',
      subtitle:
        'Razvijajte svoje znanje arabskega jezika s pomočjo jasnih in strukturiranih lekcij.',
    },
    default: {
      title: 'Učni razdelek',
      subtitle:
        'Raziščite izobraževalne vsebine, zasnovane za krepitev vašega znanja in razumevanja.',
    },
  },
  explore: {
    searchBar: {
      title: 'Iskanje zbirk hadisov',

      subtitle: 'Išči naravno z uporabo tem, pomenov ali celih stavkov.',

      placeholder: 'Primer: hadis o dobroti do staršev',

      button: 'Išči',
    },

    header: {
      title: 'Knjižnica iskanja hadisov',
      subtitle: 'Takoj razišči verodostojne hadise z moderno bralno izkušnjo.',
    },

    content: {
      heroTitle: 'Odkrij verodostojne zbirke hadisov z zmogljivim iskanjem',

      loading: {
        label: 'Iskanje zbirk hadisov...',
      },

      error: {
        title: 'Hadisov ni bilo mogoče naložiti',
        message:
          'Trenutno nismo mogli pridobiti pripovedi. Preveri povezavo in poskusi znova.',
      },

      empty: {
        title: 'Ni najdenih ustreznih hadisov',
      },

      card: {
        reference: 'Referenca hadisa',
        readMore: 'Preberi celoten hadis',
      },
    },
  },

  home: {
    news: {
      title: 'Novosti muslimanske skupnosti',
      subtitle: 'Ostani obveščen o pomembnih novicah iz muslimanskega sveta',
    },

    prayer: {
      title: 'Odštevanje do molitve',
      subtitle: 'Pripravi se na naslednjo molitev',
      button: 'Prikaži čase molitev',
      nextPrayerLabel: 'Naslednja molitev ob:',
    },

    athkar: {
      title: 'Jutranji in večerni zikr',
      subtitle: 'Dnevni spomin za povezavo srca',
      button: 'Poglej več zikra',
    },

    qibla: {
      title: 'Smer kible',
      subtitle: 'Najdi smer Kaabe kjerkoli si',
      locationLoading: 'Pridobivanje lokacije...',
      enableLocation: 'Omogoči lokacijo',
      refreshLocation: 'Osveži smer kible',

      warning:
        'Če naprava ne podpira senzorjev orientacije, se lahko natančnost kompasa zmanjša.',

      errorTitle: 'Dovoljenje zavrnjeno',
    },
  },

  prayers: {
    nextLabel: 'Naslednja molitev ob',
    header: {
      title: 'Časi molitev',
      subtitle: 'Dnevni trenutek povezave s tvojim Stvarnikom',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Duhar',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Pridobivanje lokacije...',
      warning:
        'Če operacijski sistem ne podpira orientacije, to vpliva na izračun kompasa.',
      errorTitle: 'Dovoljenje zavrnjeno',
      enableLocation: 'Omogoči lokacijo',
      refreshLocation: 'Osveži smer kible',
    },

    list: {
      warning: 'Časi se lahko rahlo razlikujejo glede na metodo izračuna.',
    },
  },

  quran: {
    header: {
      title: 'Koran',
      subtitle: 'Tvoj dnevni spremljevalec za branje in razmislek',
    },

    search: {
      noResultTitle: 'Ni podatkov',
      noResultMessage: 'Ni podatkov za prikaz',
    },
  },

  athkar: {
    title: 'Dnevni zikr',
    subtitle: 'Ostani dosleden v vsakodnevnem spominu in razmisleku',
  },

  ai: {
    header: {
      title: 'Globalni islamski AI pomočnik',
      subtitle:
        'Prejmi jasne islamske odgovore na podlagi Korana, Sunne in zaupanja vrednega znanja',
    },

    loading: {
      label: 'Nalaganje...',
    },

    error: {
      title: 'Dosežena omejitev zahtev',
      message: 'Storitev znanja trenutno ni na voljo. Poskusi znova kasneje.',
    },

    input: {
      placeholder: 'Postavi vprašanje o islamu...',
    },

    suggestions: [
      'Ali lahko molim brez wudu?',
      'Ali je obresti (riba) popolnoma prepovedana?',
      'Pravila dela v ne-halal okolju',
      'Ali lahko molim med potovanjem?',
      'Ali je dovoljeno uporabljati parfum med molitvijo?',
      'Kaj razveljavi molitev?',
      'Odlašanje molitve zaradi dela',
    ],

    footer: {
      disclaimer:
        'Ta AI pomočnik nudi odgovore na podlagi preverjenih virov znanja, vključno z islamskimi referencami in izobraževalnimi materiali.',

      note: 'Odgovori so informativni in ne nadomeščajo nasveta učenjakov, kjer je to potrebno.',
    },
  },

  footer: {
    disclaimer:
      'Vsa prikazana vsebina izvira iz zanesljivih originalnih virov. Veseli bomo povratnih informacij in prijav napak za pregled in popravek.',

    tagline: 'Ustvarjeno skrbno za avtentično islamsko vsebino',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Nazaj',
    },

    sections: {
      hadithText: 'Besedilo hadisa',
      arabicText: 'Arabsko besedilo',
      explanation: 'Pojasnilo',
      authentication: 'Avtentičnost',
      lessons: 'Lekcije in koristi',
    },
  },
  other: {
    note: 'Opomba',
    theLanguage: 'jezik',
    part: 'Del',
    translation: 'Prevod',
    verse: 'Verz',
    chapter: 'Poglavje',
    page: 'Stran',
    breakingNews: 'Najnovejše novice',
  },
  dailyRemined: {
    title: 'Svetloba Dana',
    subtitle:
      'Za trenutek se ustavite in razmislite o verzu in hadisu, izbranih za vaš dan.',
  },
  baseFooter: {
    contact: {
      title: 'Kontaktirajte nas',
      name: 'Vaše ime',
      email: 'Vaš e-poštni naslov',
      msg: 'Vaše sporočilo',
      sendMsg: 'Pošlji sporočilo',
    },
    followUs: 'Spremljajte nas',
    QA: 'Hitri dostop',
    logoB:
      'Koran, Hadisi, časi molitev, AI pomočnik in vsakodnevna islamska orodja—all na eni sodobni platformi.',
    whatsapp: 'Klepet na WhatsAppu',
    rsr: 'Vse pravice pridržane',
  },
  compareRelg: {
    note: `Ta stran predstavlja primerjalni pregled glavnih svetovnih religij. Z islamskega vidika Koran potrjuje, da so bila prejšnja božanska razodetja poslana zgodnejšim ljudstvom, vendar so se z leti zaradi človeških posegov spremenila (tahrif). Koran navaja: "Resnično, Mi smo poslali Opomin in resnično, Mi ga bomo varovali" (15:9). Ta stran preučuje te razlike v luči zgodovinskih in tekstovnih dokazov.`,
    mainTitle: 'Racionalno popotovanje po religijah',
    headerTitle: 'Vprašanja, ki opredeljujejo človeški obstoj',
    story: `
Predstavljajte si, da nenadoma odprete oči in ugotovite, da ste v luksuznem vlaku, ki z veliko hitrostjo drvi skozi neskončno noč. Okoli vas je vse mogoče udobje: bogate jedi, postrežene na elegantnih pladnjih, zasloni s filmi in svilene blazine na mehkih sedežih.

Z občutkom nemira vprašate sopotnika ob sebi:
"Kje smo? Kdo nas je dal v ta vlak? In kam smo namenjeni?"

Najbolj presenetljiva pa je njihova reakcija.

Eden odgovori hladno:
"Kaj te briga? Samo uživaj v hrani, fantastična je."

Drugi odgovori z zasmehovanjem:
"Zakaj bi se obremenjeval s takimi vprašanji? Nasloni se nazaj in glej film."

Vsi okoli vas se izgubljajo v užitkih potovanja, vas pa zajame globok strah, saj veste, da ta vlak drvi proti končni postaji – kraju, kjer mora vsak potnik na koncu izstopiti.

V tistem trenutku se pojavi bistveno vprašanje:

Se boste prepustili razkošju in zabavi potovanja ali boste še naprej iskali odgovore na tri najgloblja vprašanja:

Kdo je Stvarnik?
Zakaj smo tukaj?
In kaj nas čaka na koncu?

Ta vlak je planet Zemlja, potovanje pa je vaše življenje.

Ker ljudje teh odgovorov nimamo prirojenih, so religije nastale kot »navodila za uporabo«, pri čemer vsaka trdi, da prihaja neposredno od načrtovalca vlaka.

Poglejmo ta navodila s mirnim in racionalnim pogledom.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kdo je Stvarnik?',

        intro: `
S filozofskega in logičnega vidika mora biti Stvarnik kot »Prvi vzrok« vesolja popolnoma transcendenten, zunaj meja snovi, časa in prostora. Če bi bil Stvarnik podvržen lakoti, utrujenosti, fizičnim omejitvam ali prostorskim okvirjem, bi takšno bitje logično izgubilo status absolutnega Stvarnika in postalo ustvarjeno ter odvisno bitje. Odvisno bitje ne more biti nujen vir celotnega obstoja.
  `,

        religions: {
          eastern: {
            title: 'Vzhodne religije',
            examples: ['Hinduizem', 'Budizem'],

            answerNature: `
V svoji najstarejši obliki, Theravada, je budizem na splošno neteističen; ne osredotoča se na obstoj boga stvarnika, temveč dojema bivanje kot rezultat večnih naravnih procesov, vzročnosti in soodvisnih zakonov.

Hinduizem na drugi strani pogosto govori o temeljni metafizični resničnosti, imenovani »Brahman«. Vendar se v praksi ta najvišja resničnost manifestira skozi nešteto oblik in božanstev, vključno s človeškimi in živalskimi figurami, kot so Višnu, Šiva in Kali.
      `,

            objectiveCritique: `
S filozofskega vidika se budizem sooča z izzivom pojasniti, kako lahko visoko urejeno vesolje, ki ga vodijo dosledni zakoni in fizična natančnost, nastane brez prvotnega zavestnega vzroka.

V hindujskih tradicijah, ki sprejemajo božanske inkarnacije in fizične podobe, je božanskost povezana z omejitvami, konflikti, lakoto, smrtjo in materialno obliko. Božanstvo, ki ga je mogoče fizično upodobiti, utelešiti ali ki je podvrženo naravnim procesom, se z racionalnega vidika zdi prej del stvarstva kot bitje, ki ga popolnoma presega.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaizem',

            answerNature: `
Judaizem potrjuje vero v Stvarnika, ki je vzvišen nad idoli in fizičnimi podobami. Bog (JHWH) je razumljen kot Stvarnik nebes in zemlje ter je v svojem bistvu ločen od svojega stvarstva.
      `,

            objectiveCritique: `
Filozofski problem, ki se tukaj pojavlja, se ne nanaša toliko na transcendenco samo, ampak na meje univerzalnosti Boga, kot se pojavljajo v nekaterih odlomkih Hebrejske Biblije. Nekatera besedila prikazujejo Boga v zavezniškem odnosu, ki je močno usmerjen k sinovom Izraela, kar kritiki interpretirajo kot etnični ekskluzivizem.

Poleg tega nekateri odlomki uporabljajo človeški jezik za opisovanje Boga, kot na primer »obžalovanje« zaradi ustvarjanja človeka (Geneza 6,6) ali »počitek« sedmi dan po stvarjenju (Eksodus 31,17). Kritiki trdijo, da takšni opisi sprožajo vprašanje, ali je treba te lastnosti razumeti dobesedno ali metaforično.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Krščanstvo',

            answerNature: `
Krščanstvo uči vero v enega Boga skozi doktrino Svete Trojice: Očeta, Sina in Svetega Duha. Po doktrini učlovečenja je druga oseba Trojice – Sin – vstopila v zgodovino človeštva v osebi Jezusa Kristusa, ki je bil križan in je umrl za odrešitev človeštva.
      `,

            objectiveCritique: `
Filozofsko kritiki trdijo, da doktrina učlovečenja ustvarja napetost med božanskimi in človeškimi lastnostmi. Tradicionalno je Bog opisan kot večen, neomejen in zunaj smrti, medtem ko so ljudje opisani kot končni, ranljivi in umrljivi.

Problem nastane, ko sta polna božanskost in polna človeškost združeni v eni osebi. Kritiki se sprašujejo, kako lahko večno in neodvisno bitje hkrati izkuša lakoto, spanje, trpljenje in smrt. Ta problem je pogosto formuliran kot napetost med transcendenco in učlovečenjem, ne le kot teološka skrivnost.
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
Islam predstavlja koncept Boga, ki je popolnoma transcendenten in nedeljiv. Koran ta koncept povzema v suri Al-Ihlas:

»Reci: On je Allah, Eni. Allah, Absolutni. Ni rodil in ni rojen. In nič Mu ni enako.« (Koran 112:1–4)

V islamu je Stvarnik popolnoma zunaj materialne oblike in je ločen od stvarstva:

»Nič Mu ni podobno.« (Koran 42:11)

Bog ni omejen s časom, prostorom ali fizičnimi omejitvami. Koran tudi navaja:

»Ne zgrabi Ga ne dremanje in ne spanje.« (Koran 2:255)

V islamski teologiji je Bog razumljen kot neodvisno, večno, samozadostno in od stvarstva popolnoma ločeno bitje.
      `,

            objectiveCritique: `
Z islamskega filozofskega vidika ta koncept stremi k ohranitvi absolutne transcendence, s tem ko se izogiba antropomorfizmu in učlovečenju. Njegov cilj je uskladiti Stvarnika z idejo neodvisnega in nujnega Prvega vzroka, ki ni podvržen omejitvam ustvarjenega bitja.
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

        title: 'Kakšen je način življenja in cilj?',

        intro: `
Če obstaja modri Stvarnik, je neracionalno domnevati, da je bilo človeštvo prepuščeno samemu sebi brez smernic, ki bi pojasnile namen obstoja, moralno odgovornost in načela, ki jim je treba slediti. Tako kot zapleteni sistemi zahtevajo navodila od svojega načrtovalca, religije trdijo, da zagotavljajo okvir, ki človeku pomaga razumeti, zakaj smo tukaj in kako bi morali živeti.
  `,

        religions: {
          eastern: {
            title: 'Vzhodne religije',

            examples: ['Hinduizem', 'Budizem'],

            answerNature: `
Vzhodne tradicije, kot sta budizem in hinduizem, se na splošno zanašajo na filozofska učenja, meditativne prakse in razmišljanja, ki so jih razvili duhovni učitelji in modreci.

V budizmu je končni cilj osvoboditev od trpljenja in izstop iz cikla ponovnih rojstev z doseganjem Nirvane – stanja transcendence in notranje osvoboditve.

V mnogih hindujskih tradicijah je cilj duhovna osvoboditev (Mokša), dosegljiva z vdanostjo, znanjem, meditacijo ali discipliniranim delovanjem.
      `,

            objectiveCritique: `
Kritiki trdijo, da so ti sistemi primarno filozofski in utemeljeni na izkušnjah, ne pa na preverljivem razodetju transcendentnega Stvarnika.

Nekateri tudi trdijo, da lahko močan poudarek na umiku iz posvetnega življenja, meništvu in odpovedovanju pride v konflikt z vidiki človeške narave, ki spodbujajo družbeni razvoj, znanstveni napredek, družinsko življenje in civilizacijo.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaizem',

            answerNature: `
V judaizmu je način življenja zakoreninjen v zaveznem zakonu, ki je bil razodet Mojzesu in ohranjen v Hebrejski Bibliji (Tanah). Religiozni okvir se osredotoča na poslušnost božjim zapovedim in ohranjanje zaveznega odnosa med Bogom in sinovi Izraela.
      `,

            objectiveCritique: `
Kritiki trdijo, da se je judaizem zgodovinsko razvil kot tradicija, usmerjena v zavezo z določenim narodom, ne pa kot univerzalna misijonarska religija za celotno človeštvo.

Z vidika tekstualne analize nekateri učenjaki – vključno z Richardom Elliottom Friedmanom – trdijo, da je Tora skozi stoletja prestala procese kompilacije in urejanja, zlasti v času babilonskega ujetništva in po njem. To nekatere kritike vodi do dvoma, ali lahko besedilo štejemo za popolnoma ohranjeno razodetje v njegovi prvotni obliki.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Krščanstvo',

            answerNature: `
Krščanstvo uči, da sta glavni problem človeštva greh in ločenost od Boga ter da se odrešitev doseže z vero v Jezusovo žrtveno smrt in njegovo vstajenje. Cilj življenja se zato razume skozi spravo z Bogom in duhovno preobrazbo.
      `,

            objectiveCritique: `
Zgodovinarji ugotavljajo, da se izvirni rokopisi evangelijev v aramejščini (Jezusov jezik) niso ohranili. Najstarejša ohranjena besedila so grški rokopisi, napisani desetletja po Jezusovem življenju. Tekstualni kritiki, kot je Bart Ehrman, so dokumentirali številne variacije v najstarejših kopijah Nove zaveze.

Kritiki tudi trdijo, da je krščanstvo zgodovinsko dajalo večji poudarek duhovni in osebni odrešitvi kot izgradnji celovitega pravnega ali političnega okvira za gospodarstvo, kazensko pravo ali državno upravo. Nekateri zgodovinarji menijo, da je to prispevalo k poznejši ločitvi cerkve od države v mnogih zahodnih družbah.
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
Islam ponuja celovito razumevanje človeškega namena skozi integracijo duhovne vdanosti in posvetne odgovornosti.

Koran navaja:

»Džine in ljudi sem ustvaril le zato, da Mi služijo.« (Koran 51:56)

V islamski misli čaščenje ni omejeno na obrede, ampak vključuje pravilno ravnanje, pravičnost, etično vedenje, iskanje znanja in pozitiven prispevek k družbi.

Islamsko učenje zasleduje ravnovesje med duhovno rastjo in praktičnim sodelovanjem v družinskem življenju, gospodarstvu, upravljanju, dobrodelnosti in družbeni odgovornosti.
      `,

            objectiveCritique: `
Z islamskega vidika predstavlja Koran edinstveno ohranjeno razodetje. Muslimani trdijo, da je besedilo ostalo nespremenjeno in se je neprekinjeno prenašalo prek pisanih rokopisov in ustnega pomnjenja že od prvih generacij islama.

Pogosto citirani primeri so starodavna besedila, kot je rokopis Korana iz Birminghama, in ogromna tradicija ustnega pomnjenja, ki jo ohranjajo milijoni muslimanov po vsem svetu.

Islamsko pravo (Šeriat) je prav tako predstavljeno kot etični in pravni okvir, ki zajema področja, kot so finance, dobrodelnost, družinsko pravo, kazensko pravo in upravljanje. Zagovorniki trdijo, da to islamu daje značilnosti popolnega moralnega in civilizacijskega sistema, ne le duhovne tradicije.
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

        title: 'Kaj se zgodi po končni postaji?',

        subtitle: 'Usoda, pravičnost in onostranstvo',

        intro: `
Brez obstoja končne pravičnosti po smrti se lahko življenje zdi zelo arbitrarno in moralno nerešeno. Tirani lahko umrejo, ne da bi odgovarjali, žrtve pa lahko zapustijo svet, ne da bi našle pravičnost. To sproža eno najstarejših filozofskih vprašanj človeštva: je smrt konec ali obstaja končna sodba zunaj zemeljskega življenja?
  `,

        religions: {
          eastern: {
            title: 'Vzhodne religije',

            examples: ['Hinduizem', 'Budizem'],

            answerNature: `
Mnoge vzhodne tradicije sprejemajo koncept reinkarnacije, v kateri duša ali tok zavesti prehaja skozi ponavljajoče se cikle ponovnega rojstva. Prihodnje stanje posameznika je določeno s karmo: moralnimi posledicami preteklih dejanj.
      `,

            objectiveCritique: `
Kritiki trdijo, da reinkarnacija sproža filozofska vprašanja o pravičnosti in odgovornosti. Če nekdo v novem življenju nosi posledice dejanj iz prejšnjega obstoja, ki se jih ne more zavestno spomniti, vzgojni in moralni cilj kazni postane težko razumljiv.

S tega vidika se zdi odgovornost brez zavestnega spomina odrezana od pomembne moralne odgovornosti.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materializem in ateizem',

            answerNature: `
Materialistični in ateistični svetovni nazori običajno obravnavajo smrt kot konec zavestnega bitja. Človeška bitja so razumljena kot biološki organizmi, katerih zavest popolnoma preneha po fizični smrti.
      `,

            objectiveCritique: `
Kritiki trdijo, da ima strogi materializem težave pri zagotavljanju objektivne osnove za moralo, pravičnost in temeljni smisel. Če tako zatiralec kot žrtev na koncu izgineta v niču, ne da bi odgovarjala, se lahko pojmi, kot so žrtvovanje, moralna dolžnost in pravičnost, zdijo subjektivni ali družbeno skonstruirani, namesto univerzalno zavezujoči.

Zagovorniki sekularne etike pa trdijo, da morala lahko še vedno nastane prek razuma, empatije in družbene odgovornosti brez vere v posmrtno življenje.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Krščanstvo',

            answerNature: `
Krščanstvo uči, da se odrešitev in večno življenje dosežeta z vero v Jezusa Kristusa in sprejemanjem njegove žrtve za grehe človeštva. Nebesa in večna odrešitev so tesno povezani z vero v Kristusa in božjo milostjo.
      `,

            objectiveCritique: `
Kritiki se sprašujejo, kako se odrešitev, ki temelji predvsem na veri, nanaša na univerzalna načela pravičnosti. Filozofsko nekateri trdijo, da lahko tak okvir pomeni, da je moralno dober človek, ki se iskreno trudi sprejeti določene teološke dogme, odrešitve prikrajšan, medtem ko lahko drug človek, ki je zagrešil težka kazniva dejanja, a je veroval v zadnjem trenutku, prejme večno nagrado.

Krščanski teologi pogosto odgovarjajo, da odrešitev vključuje tako iskreno vero kot pristno kesanje, ne le ustno priznanje.
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
Islam predstavlja posmrtno življenje kot sistem absolutne moralne odgovornosti in božje pravičnosti.

Koran navaja:

»Nobena duša ne nosi bremena druge.« (Koran 6:164)

Odrešitev v islamu je dosledno povezana z vero in dobrimi deli:

»In razveseli tiste, ki verujejo in delajo dobra dela...« (ponovljeno v celotnem Koranu, vključno z 2:25)

Islam uči, da je zemeljsko življenje začasen preizkus, ne prostor končne nagrade ali kazni:

»On, ki je ustvaril smrt in življenje, da vas preizkusi, kdo od vas je boljši v delovanju.« (Koran 67:2)
      `,

            objectiveCritique: `
V islamski teologiji Sodni dan predstavlja končni tribunal, kjer se bo štelo vsako dejanje, ne glede na to, kako majhno je.

Koran navaja:

»Kdor stori dobro, težko kolikor atom, bo to videl. In kdor stori zlo, težko kolikor atom, bo to videl.« (Koran 99:7–8)

Ta okvir si prizadeva ohraniti tako individualno odgovornost kot absolutno pravičnost, pri čemer ponuja moralno gotovost, da nobeno dejanje zatiranja ali dobrote na koncu ne ostane brez posledic.
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
      navbar: 'Primerjava religij',
      hero: {
        subtitle:
          'Mirno in globoko filozofsko popotovanje po največjih vprašanjih človeštva: Stvarnik, namen obstoja, morala in kaj nas čaka po smrti.',

        subtitleHighlight:
          'Stvarnik, namen obstoja, morala in kaj nas čaka po smrti.',

        scrollIndicator: 'Pomaknite se navzdol, da začnete potovanje',
      },

      storySection: {
        badge: 'Analogija vlaka',

        titleLine1: 'Preden zastavite vprašanja',
        titleLine2: 'O religiji...',

        intro:
          'Vsak človek sčasoma doseže trenutek tišine, ko moteči dejavniki izginejo – in najgloblja vprašanja končno pridejo na površje.',

        ending: 'Ta vlak je planet Zemlja,',
        ending2: 'potovanje pa je vaše življenje.',
      },

      coreQuestions: {
        sectionLabel: 'Glavni razdelki',
        title: 'Temeljna vprašanja',

        answerNatureTitle: 'Narava odgovora',

        philosophicalDiscussionTitle: 'Filozofska razprava',

        referencesTitle: 'Reference',
      },

      futureResearch: {
        sectionLabel: 'Nadaljnje raziskovanje',

        title: 'Druga vprašanja',

        loaderBadge: 'Več vprašanj v pripravi',

        headingLine1: 'Potovanje',
        headingLine2: 'se nadaljuje...',

        description:
          'Dodatne filozofske in teološke raziskave se preučujejo in pripravljajo z uporabo enakega strukturiranega primerjalnega pristopa.',

        topics: [
          'Morala',
          'Znanost',
          'Čudeži',
          'Zavest',
          'Svobodna volja',
          'Trpljenje',
          'Zgodovinski prenos',
          'Prerokbe',
          'Človeška narava',
          'Smisel',
          'Civilizacija',
          'Etika',
        ],

        footer: 'Novi razdelki bodo dodani kmalu',
      },

      imageAlt: {
        hero: 'Primerjava religij',
      },
    },
  },
};
