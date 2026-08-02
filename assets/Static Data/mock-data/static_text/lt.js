export default {
  splash: {
    version: 'versija',
    practice: 'praktika',
    share: 'bendrinti',
    logo: 'globalus islamas',
  },
  homeApp: {
    north: 'šiaurė',
    east: 'rytai',
    west: 'vakarai',
    south: 'pietūs',
    active: 'kibla aktyvi',
    disabled: 'Atidaryti Kiblos kompasą',
    welcome: 'Sveiki sugrįžę',
    greet: 'As-salamu alaykum',
    hour: 'valanda',
    minute: 'minutė',
    second: 'sekundė',
    toLeft: 'iš kairės',
    toRight: 'iš dešinės',
    fromNorth: 'iš šiaurės',
  },
  quranApp: {
    medinan: 'Medinos',
    meccan: 'Mekos',
    arabicName: 'pavadinimas arabų kalba',
    englishName: 'pavadinimas anglų kalba',
    details:
      'Pasirinkite eilutę, kad peržiūrėtumėte jos vertimą ir tafsirą (paaiškinimą)',
    selectRes: 'Pasirinkti šaltinį',
    retry: 'bandyti dar kartą',
    loadErr1: 'Nepavyko įkelti paaiškinimo. Bandykite dar kartą.',
    loadErr2: 'Gavimas nepavyko',
    author: 'autorius',
    explain: 'Paaiškinimas',
  },
  qiblaApp: {
    compass: 'Kiblos kompasas',
    accuracy: 'tikslumas',
    offline: 'GPS neprisijungęs',
    tracking: 'GPS stebėjimas',
    aligned:
      'Jūs žiūrite į Kiblos pusę. Laikykite stabiliai tiksliam maldos krypčiai.',
    notAligned:
      'Laikykite įrenginį horizontaliai ir sukite, kol rodyklė rodys į Kiblą.',
    heading: 'Įrenginio kryptis',
    turn: 'sukite',
    alignedQibla: 'Suderinta su Kibla',
  },
  aiApp: {
    answer: 'atsakymas',
  },
  prayerApp: {
    locationRequired:
      'Tikslioms maldos laikui reikalingos vietovės nustatymo paslaugos.',
    schedule: 'Maldų tvarkaraštis',
    refresh: 'atnaujinti',
    sunrise: 'Saulėtekis',
    upcoming: 'Kita malda',
  },
  settingsApp: {
    reciterTitle: 'Adano recituotojas',
    reciterSub: 'Pasirinkite pageidaujamą balsą',
    notSelected: 'nepasirinkta',
    preview: 'peržiūra',
    cancel: 'atšaukti',
    muezzin: 'Muezzinas',
    preNot: 'Pranešimas prieš adaną',
    preNotDet: 'Pranešti 15 minučių prieš maldos laiką',
    theme: 'Tamsusis režimas',
    dark: 'Šiuo metu tamsi tema',
    light: 'Šiuo metu šviesi tema',
    about: 'Apie',
    selectReciter: 'Pasirinkti recituotoją',
  },
  athan: {
    mainTitle: 'ADANAS · KVietimas Į MALDĄ',
    stop: 'Stabdyti adaną',
    error: 'Nepavyko įkelti adano garso',
    prayerTime: 'Maldos laikas',
    play: 'leisti',
    pause: 'pauzė',
    dismiss: 'uždaryti',
  },
  athkarApp: {
    completed: 'Atlikta',
    remaining: 'likęs',
    reset: 'atstatyti',
    athkar: 'Adhkar',
    mention: 'dhikr',
    descM: 'Pradėkite dieną palaiminimais',
    descE: 'Užbaikite dieną apsauga',
    remmember: 'Kasdienis Prisiminimas',
    cat: 'maldų kategorijos',
    category: 'Kategorija',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Ieškoti haditų...',
      button: 'Ieškoti',
      books: {
        label: 'Knyga',
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
      title: 'Dabartinė kalba dar nepalaikoma',
      msg: 'Ši kalba dar nepalaikoma haditų duomenų bazėje.',
      description:
        'Anglų kalba pasirinkta automatiškai kaip atsarginė, kad galėtumėte tęsti naršymą ir paiešką. Taip pat galite išbandyti išplėstinį režimą.',
    },

    initialPlaceholder:
      'Ieškokite hadito, kad pamatytumėte informaciją: vertinimą, perdavėjus ir nuorodas',

    loading: { label: 'Įkeliami haditai...' },

    hadithCard: {
      showMore: 'Rodyti daugiau',
      showLess: 'Rodyti mažiau',
      header: {
        hadithPrefix: 'Haditas #',
        referencesTitle: 'Nuorodos',
        referenceLabel: 'Nuoroda',
        inBookReference: 'Nuoroda knygoje',
        arabicReference: 'Arabiška nuoroda',
      },
    },

    emptyState: 'Haditų nerasta',

    pagination: {
      prev: 'Ankstesnis',
      next: 'Kitas',
    },
  },

  switch: {
    title: {
      advanced: 'Išplėstinis režimas',
      normal: 'Paprastas režimas',
    },
    description: {
      advanced: 'Semantinė paieška su gilesniu supratimu',
      normal: 'Greita filtrų paieška',
    },
  },

  navbar: {
    routes: {
      home: 'Pradžia',
      prayers: 'Maldos',
      quran: 'Koranas',
      athkar: 'Zikr',
      articles: 'Straipsniai',
      articlesNested: {
        islamicHistory: 'Islamo istorija',
        prayerInIslam: 'Malda islame',
        womenInIslam: 'Moterys islame',
        purification: 'Apsivalymas',
      },
      learn: 'Mokytis',
      learnNested: {
        quranTajweed: 'Koranas ir tajvidas',
        arabic: 'Arabų kalba',
      },
      dashboard: 'Valdymo skydas',
      aiAssistant: 'AI asistentas',
    },
  },

  hero: {
    title: {
      explore: 'Tyrinėkite islamą su',
      clarity: 'Aiškumu',
      peace: 'ir Ramybe',
    },

    description:
      'Mokykitės, užduokite klausimus ir atraskite autentišką supratimą per AI ir giduojamas žinias, sukurtas aiškumui ir apmąstymams.',

    actions: {
      introductionToIslam: 'Sužinok apie islamą',
      islamQA: 'Islamo klausimai ir atsakymai (AI asistentas)',
      continueWebsite: 'Tęsti į svetainę',
    },
  },
  learning: {
    quran: {
      title: 'Mokykitės Korano ir Tadžvido',
      subtitle:
        'Tobulinkite savo Korano skaitymą ir žingsnis po žingsnio supraskite Tadžvido taisykles.',
    },
    arabic: {
      title: 'Mokykitės arabų kalbos',
      subtitle:
        'Tobulinkite savo arabų kalbos įgūdžius aiškių ir struktūruotų pamokų pagalba.',
    },
    default: {
      title: 'Mokymosi skyrius',
      subtitle:
        'Tyrinėkite edukacinį turinį, skirtą stiprinti jūsų žinias ir supratimą.',
    },
  },
  explore: {
    searchBar: {
      title: 'Haditų rinkinių paieška',

      subtitle:
        'Ieškokite natūraliai pagal temas, reikšmes ar pilnus teiginius.',

      placeholder: 'Pavyzdys: haditas apie gerumą tėvams',

      button: 'Ieškoti',
    },

    header: {
      title: 'Haditų paieškos biblioteka',
      subtitle:
        'Iš karto tyrinėkite autentiškus haditus su modernia skaitymo patirtimi.',
    },

    content: {
      heroTitle: 'Atraskite autentiškus haditų rinkinius su galinga paieška',

      loading: {
        label: 'Ieškoma haditų rinkiniuose...',
      },

      error: {
        title: 'Nepavyko įkelti haditų',
        message:
          'Šiuo metu nepavyko gauti pasakojimų. Patikrinkite interneto ryšį ir bandykite dar kartą.',
      },

      empty: {
        title: 'Nerasta atitinkančių haditų',
      },

      card: {
        reference: 'Hadito nuoroda',
        readMore: 'Skaityti visą haditą',
      },
    },
  },

  home: {
    news: {
      title: 'Musulmonų bendruomenės naujienos',
      subtitle: 'Sekite svarbiausius atnaujinimus iš musulmonų pasaulio',
    },

    prayer: {
      title: 'Maldos atgalinis skaičiavimas',
      subtitle: 'Pasiruoškite kitai maldai',
      button: 'Peržiūrėti maldos laikus',
      nextPrayerLabel: 'Kita malda:',
    },

    athkar: {
      title: 'Ryto ir vakaro atskhar',
      subtitle: 'Kasdienis prisiminimas, kad širdis būtų arti',
      button: 'Žiūrėti daugiau atskhar',
    },

    qibla: {
      title: 'Kiblės kryptis',
      subtitle: 'Raskite Kaabos kryptį, kur bebūtumėte',
      locationLoading: 'Gaunama jūsų vieta...',
      enableLocation: 'Įjungti vietą',
      refreshLocation: 'Atnaujinti kiblės kryptį',
      warning:
        'Jei įrenginys nepalaiko orientacijos jutiklių, kompaso tikslumas gali būti sumažėjęs.',
      errorTitle: 'Leidimas atmestas',
    },
  },

  prayers: {
    nextLabel: 'Kita malda:',
    header: {
      title: 'Maldos laikai',
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
      loading: 'Gaunama jūsų vieta...',
      warning:
        'Jei OS nepalaiko orientacijos, tai gali paveikti kompaso skaičiavimą.',
      errorTitle: 'Leidimas atmestas',
      enableLocation: 'Įjungti vietą',
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
      subtitle: 'Jūsų kasdienis palydovas skaitymui ir apmąstymams',
    },

    search: {
      noResultTitle: 'Duomenų nėra',
      noResultMessage: 'Nėra ką rodyti',
    },
  },

  athkar: {
    title: 'Kasdieniai atskhar',
    subtitle: 'Išlaikykite nuoseklumą prisiminimuose ir apmąstymuose',
  },

  ai: {
    header: {
      title: 'Globalus islamo AI asistentas',
      subtitle:
        'Gaukite aiškius islamo atsakymus, pagrįstus Koranu, Sunna ir patikimomis žiniomis',
    },

    loading: {
      label: 'Kraunama...',
    },

    error: {
      title: 'Pasiektas užklausų limitas',
      message: 'Žinių paslauga šiuo metu nepasiekiama. Bandykite vėliau.',
    },

    input: {
      placeholder: 'Užduok klausimą apie islamą...',
    },

    suggestions: [
      'Ar galiu melstis, jei praleidau wudu?',
      'Ar palūkanos (riba) visiškai draudžiamos?',
      'Darbo ne halal aplinkoje taisyklės',
      'Ar galiu melstis keliaujant?',
      'Ar leidžiama naudoti kvepalus maldos metu?',
      'Kas panaikina maldą?',
      'Maldų atidėliojimo dėl darbo taisyklės',
    ],

    footer: {
      disclaimer:
        'Šis AI asistentas pateikia atsakymus remdamasis atrinktais ir patikimais šaltiniais, įskaitant islamo tekstus ir patikrintą mokomąją medžiagą.',

      note: 'Atsakymai yra informacinio pobūdžio ir nepakeičia mokslininkų konsultacijų, kai jų reikia.',
    },
  },

  footer: {
    disclaimer:
      'Visa pateikta informacija yra iš jos originalių patikimų šaltinių. Laukiame atsiliepimų ir klaidų pranešimų peržiūrai ir taisymui.',

    tagline:
      'Sukurta su rūpesčiu, kad būtų pateikiamas autentiškas islamo turinys',
  },

  hadith: {
    header: {
      hadithLabel: 'Haditas',
      backButton: 'Grįžti',
    },

    sections: {
      hadithText: 'Hadito tekstas',
      arabicText: 'Arabiškas tekstas',
      explanation: 'Paaiškinimas',
      authentication: 'Autentiškumas',
      lessons: 'Pamokos ir nauda',
    },
  },
  other: {
    part: 'Dalis',
    translation: 'Vertimas',
    verse: 'Eilutė',
    chapter: 'Skyrius',
    page: 'Puslapis',
    breakingNews: 'Naujausios žinios',
  },
  dailyRemined: {
    title: 'Šios Dienos Šviesa',
    subtitle:
      'Sustokite akimirkai ir apmąstykite eilutę bei hadisą, parinktus jūsų dienai.',
  },
  baseFooter: {
    contact: {
      title: 'Susisiekite su mumis',
      name: 'Jūsų vardas',
      email: 'Jūsų el. paštas',
      msg: 'Jūsų žinutė',
      sendMsg: 'Siųsti žinutę',
    },
    followUs: 'Sekite mus',
    QA: 'Greita prieiga',
    logoB:
      'Koranas, Hadisai, maldų laikai, AI asistentas ir kasdieniai islamo įrankiai—all vienoje modernioje platformoje.',
    whatsapp: 'Pokalbis per WhatsApp',
    rsr: 'Visos teisės saugomos',
  },
  compareRelg: {
    note: `Šiame puslapyje pateikiama lyginamoji pagrindinių pasaulio religijų apžvalga. Islamo požiūriu, Koranas patvirtina, kad ankstesni dieviškieji apreiškimai buvo nusiųsti ankstyvosioms tautoms, tačiau laikui bėgant patyrė žmonių padarytus pakeitimus (tahrif). Korane teigiama: „Iš tiesų Mes nuleidome Priminimą ir iš tiesų Mes būsime jo saugotojai“ (15:9). Šiame puslapyje šie skirtumai nagrinėjami istorinių ir tekstinių įrodymų šviesoje.`,
    mainTitle: 'Racionali kelionė per religijas',
    headerTitle: 'Klausimai, apibrėžiantys žmogaus egzistenciją',
    story: `
Įsivaizduokite, kad staiga atmerkiate akis ir suprantate sėdintys prabangiame traukinyje, dideliu greičiu lekiančiame per begalinę naktį. Aplink jus – visi įmanomi patogumai: prabangūs patiekalai, patiekiami ant elegantiškų stalų, švytintys ekranai, rodantys filmus, ir šilkinės pagalvės ant minkštų sėdynių.

Jūs nerimastingai kreipiatės į šalia sėdintį keleivį:
"Kur mes esame? Kas mus įsodino į šį traukinį? Ir kur mes važiuojame?"

Tačiau tikroji staigmena yra jų reakcija.

Vienas atšauna šaltai:
"Koks tau skirtumas? Tiesiog mėgaukis maistu, jis neįtikėtinas."

Kitas pašaipiai atsako:
"Kodėl kankiniesi tokiais klausimais? Atsipalaiduok ir žiūrėk filmą."

Visi aplink jus pasinėrę į kelionės malonumus ir pramogas, tačiau jus apima gili baimė, nes žinote, kad šis traukinys lekia į galutinį tikslą – stotį, kurioje kiekvienas keleivis galiausiai privalės išlipti.

Ir tą akimirką iškyla tikrasis klausimas:

Ar pasinersite į kelionės prabangą ir pramogas, ar toliau ieškosite atsakymų į tris giliausius klausimus:

Kas yra Kūrėjas?
Kodėl mes čia esame?
Ir kas mūsų laukia pabaigoje?

Šis traukinys yra Žemės planeta, o kelionė – tai jūsų gyvenimas.

Kadangi patys žmonės neturi šių atsakymų, atsirado religijos kaip „instrukcijų vadovai“, kurių kiekviena teigia kilusi iš paties traukinio projektuotojo.

Taigi, padėkime šiuos vadovus po ramaus ir racionalaus nagrinėjimo objektyvu.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kas yra Kūrėjas?',

        intro: `
Iš filosofinės ir loginės perspektyvos, visatos „Pirminė priežastis“ – Kūrėjas – turi būti visiškai transcendentiškas, esantis už materijos, laiko ir erdvės ribų. Jei Kūrėjas būtų pavaldus alkiui, nuovargiui, fiziniams apribojimams ar erdviniams suvaržymams, logiškai tokia būtybė nustotų būti absoliučiu Kūrėju ir taptų sukurta bei priklausoma esybe. Priklausoma būtybė negali būti būtinu visos egzistencijos šaltiniu.
  `,

        religions: {
          eastern: {
            title: 'Rytų religijos',
            examples: ['Hinduizmas', 'Budizmas'],

            answerNature: `
Savo ankstyviausioje formoje, Theravada, budizmas paprastai yra neteistinis; jis nesusitelkia į kūrėjo dievo buvimą, o mano, kad egzistencija kyla iš amžinų natūralių procesų, priežastingumo ir tarpusavyje susijusių dėsnių.

Hinduizmas, kita vertus, dažnai kalba apie fundamentalią metafizinę tikrovę, vadinamą „Brahmanu“. Tačiau praktiniame garbinime ši aukščiausioji tikrovė reiškiasi per begalę manifestacijų ir dievybių, įskaitant žmogiškos ir gyvūniškos išvaizdos pavidalus, tokius kaip Višnus, Šiva ir Kali.
      `,

            objectiveCritique: `
Iš filosofinio požiūrio taško, budizmas susiduria su iššūkiu paaiškinti, kaip aukštai tvarkinga visata, valdoma nuoseklių dėsnių ir fizinio tikslumo, gali atsirasti be originalios protingos priežasties.

Hinduizmo tradicijose, kurios priima dieviškąjį įsikūnijimą ir fizinius atvaizdus, dieviškumas siejamas su ribomis, konfliktais, alkiu, mirtimi ir materialia forma. Dievybė, kuri gali būti fiziškai pavaizduota, įsikūnijusi ar pavaldi natūraliems procesams, iš racionalios perspektyvos atrodo kaip kūrinijos dalis, o ne ją visiškai peržengianti būtybė.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaizmas',

            answerNature: `
Judaizmas tvirtina tikėjimą Kūrėju, esančiu aukščiau stabų ir fizinių atvaizdų. Dievas (JHWH) suprantamas kaip dangaus ir žemės Kūrėjas ir yra esmiškai atskiras nuo savo kūrinijos.
      `,

            objectiveCritique: `
Čia iškeliama filosofinė problema susijusi ne tiek su pačia transcendencija, kiek su Dievo universalumo ribomis, pastebimomis kai kuriose hebrajų Biblijos ištraukose. Tam tikri tekstai vaizduoja Dievą sandoros ryšyje, stipriai orientuotą į Izraelio vaikus, būdu, kurį kritikai interpretuoja kaip etniškai išskirtinį.

Be to, kai kuriose ištraukose Dievui apibūdinti naudojama labai žmogiška kalba, pavyzdžiui, „atgaila“ dėl žmonijos sukūrimo (Pradžios knyga 6,6) ar „poilsis“ septintąją dieną po kūrimo (Išėjimo knyga 31,17). Kritikai teigia, kad tokie aprašymai kelia klausimą, ar šie atributai turėtų būti suprantami tiesiogiai, ar metaforiškai.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Krikščionybė',

            answerNature: `
Krikščionybė moko tikėjimo vienu Dievu per Trejybės doktriną: Tėvu, Sūnumi ir Šventąja Dvasia. Pagal įsikūnijimo doktriną, antrasis Trejybės asmuo – Sūnus – įžengė į žmonijos istoriją Jėzaus Kristaus asmenyje, kuris buvo nukryžiuotas ir mirė už žmonijos išgelbėjimą.
      `,

            objectiveCritique: `
Filosofiškai kritikai teigia, kad įsikūnijimo doktrina sukuria įtampą tarp dieviškųjų ir žmogiškųjų atributų. Tradiciškai Dievas aprašomas kaip amžinas, neribotas ir esantis už mirties ribų, o žmonės – kaip riboti, pažeidžiami ir mirtingi.

Iššūkis kyla, kai pilna dieviškystė ir pilnas žmogiškumas sujungiami viename asmenyje. Kritikai klausia, kaip amžina ir savarankiška būtybė gali vienu metu patirti alkį, miegą, kančią ir mirtį. Ši problema dažnai formuluojama kaip transcendencijos ir įsikūnijimo įtampa, o ne tiesiog kaip teologinė paslaptis.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Islamas',

            answerNature: `
Islamas pateikia Dievo koncepciją, kuri yra visiškai transcendentiška ir nedaloma. Koranas apibendrina šią koncepciją Al-Ikhlas (Nuoširdumo) sūroje:

"Sakyk: Jis – Dievas, Vienatinis. Dievas, Amžinasis Prieglobstis. Jis negimdė ir nebuvo pagimdytas, ir nėra nieko, kas būtų Jam lygus." (Koranas 112:1–4)

Islame Kūrėjas yra visiškai už materialios formos ribų ir skiriasi nuo kūrinijos:

"Nėra nieko, kas būtų Jam panašu." (Koranas 42:11)

Dievo neriboja laikas, erdvė ar fiziniai suvaržymai. Korane taip pat teigiama:

"Jo neapima nei mieguistumas, nei miegas." (Koranas 2:255)

Islamo teologijoje Dievas suprantamas kaip savarankiška, amžina, nepriklausoma ir absoliučiai nuo kūrinijos besiskirianti esybė.
      `,

            objectiveCritique: `
Iš islamo filosofinės perspektyvos, ši samprata siekia išsaugoti absoliučią transcendenciją, išvengiant antropomorfizmo ir įsikūnijimo. Šia koncepcija siekiama suderinti Kūrėją su nepriklausomos ir būtinosios Pirminės priežasties idėja, kuri nėra pavaldi sukurto egzistavimo riboms.
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

        title: 'Koks yra gyvenimo būdas ir tikslas?',

        intro: `
Jei egzistuoja išmintingas Kūrėjas, būtų neracionalu manyti, kad žmonija palikta be gairių, aiškinančių egzistencijos tikslą, moralinę atsakomybę ir principus, kuriais reikia vadovautis. Kaip sudėtingoms sistemoms reikia instrukcijų iš jų kūrėjo, taip religijos teigia suteikiančios žmonijai karkasą, padedantį suprasti, kodėl mes čia esame ir kaip turėtume gyventi.
  `,

        religions: {
          eastern: {
            title: 'Rytų religijos',

            examples: ['Hinduizmas', 'Budizmas'],

            answerNature: `
Rytų tradicijos, tokios kaip budizmas ir hinduizmas, paprastai remiasi filosofiniais mokymais, meditacinėmis praktikomis ir apmąstymais, kuriuos išvystė dvasiniai mokytojai ir išminčiai.

Budizme galutinis tikslas yra išsilaisvinimas iš kančios ir pabėgimas iš atgimimų ciklo pasiekiant Nirvaną – transcendencijos ir vidinio išsilaisvinimo būseną.

Daugelyje hinduizmo tradicijų tikslas yra dvasinis išsilaisvinimas (Mokša), pasiekiamas per atsidavimą, žinias, meditaciją arba disciplinuotą veikimą.
      `,

            objectiveCritique: `
Kritikai teigia, kad šios sistemos yra pirmiausia filosofinės ir patyriminės, o ne pagrįstos patikrinamu apreiškimu, ateinančiu iš transcendentiško Kūrėjo.

Kai kurie taip pat argumentuoja, kad stiprus akcentas į atsitraukimą nuo pasaulietinio gyvenimo, vienuolystę ir savęs atsižadėjimą gali prieštarauti žmogiškosios prigimties aspektams, kurie skatina socialinę plėtrą, mokslinę pažangą, šeimyninį gyvenimą ir civilizacijų kūrimą.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaizmas',

            answerNature: `
Judaizme gyvenimo būdas įsišaknijęs sandoros įstatyme, apreikštame Mozei ir išsaugotame hebrajų Biblijoje (Tanachas). Religinis karkasas orientuotas į paklusnumą dieviškiems įsakymams ir sandoros ryšio tarp Dievo ir Izraelio vaikų išlaikymą.
      `,

            objectiveCritique: `
Kritikai teigia, kad judaizmas istoriškai vystėsi pirmiausia kaip tradicija, orientuota į sandorą, susietą su konkrečia tauta, o ne kaip universali misionieriška religija, skirta visai žmonijai.

Tekstinės kritikos požiūriu, kai kurie mokslininkai – tarp jų Richardas Elliottas Friedmanas ir kiti – argumentuoja, kad Tora patyrė kompiliacijos ir redagavimo procesus per šimtmečius, ypač aplink Babilono tremtį ir po jos. Tai paskatino kai kuriuos kritikus suabejoti, ar tekstas gali būti laikomas tobulai išsaugotu apreiškimu, perduotu tiesiogiai originalia forma.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Krikščionybė',

            answerNature: `
Krikščionybė moko, kad centrinė žmonijos problema yra nuodėmė ir atsiskyrimas nuo Dievo, o išgelbėjimas pasiekiamas per tikėjimą Jėzaus atperkamąja mirtimi ir prisikėlimu. Taigi gyvenimo tikslas suprantamas per susitaikymą su Dievu ir dvasinę transformaciją.
      `,

            objectiveCritique: `
Istoriškai mokslininkai pažymi, kad nėra išlikusių originalių Evangelijų rankraščių aramėjų kalba, kuria kalbėjo Jėzus. Seniausi išlikę tekstai yra graikiški rankraščiai, parašyti praėjus dešimtmečiams po Jėzaus gyvenimo. Tekstinės kritikos specialistai, tokie kaip Bartas Ehrmanas, dokumentavo daugybę rankraščių variantų tarp ankstyvųjų Naujojo Testamento kopijų.

Kritikai taip pat teigia, kad krikščionybė istoriškai teikė didesnę reikšmę dvasiniam ir asmeniniam išgelbėjimui nei visapusiško teisinio ar politinio karkaso, reglamentuojančio ekonomiką, baudžiamąją teisę ar valstybės valdymą, kūrimui. Kai kurie istorikai mano, kad tai prisidėjo prie galutinio religijos ir valstybės valdžios atskyrimo daugelyje Vakarų visuomenių.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Islamas',

            answerNature: `
Islamas pateikia visapusišką žmogaus tikslo supratimą, integruojantį dvasinį atsidavimą ir pasaulietinę atsakomybę.

Korane teigiama:

"Aš sukūriau džinus ir žmones tik tam, kad jie Garbintų Mane." (Koranas 51:56)

Islamo mintyje garbinimas neapsiriboja ritualais, bet apima teisingus veiksmus, teisingumą, etinį elgesį, žinių siekimą ir teigiamą indėlį į visuomenę.

Islamo mokymai siekia subalansuoti dvasinį augimą su praktiniu dalyvavimu šeimos gyvenime, ekonomikoje, valdyme, labdaroje ir socialinėje atsakomybėje.
      `,

            objectiveCritique: `
Iš islamo perspektyvos Koranas atstovauja unikaliai išsaugotam apreiškimui. Musulmonai teigia, kad jo tekstas liko nepakitęs ir buvo nuolat perduodamas tiek rašytiniais rankraščiais, tiek žodiniu įsiminimu nuo pirmųjų islamo kartų.

Dažnai cituojami pavyzdžiai yra senoviniai tekstai, tokie kaip Birmingamo Korano rankraštis, ir plati žodinio įsiminimo tradicija, kurią palaiko milijonai musulmonų visame pasaulyje.

Islamo teisė (Šariatas) taip pat pateikiama kaip visapusiškas etinis ir teisinis karkasas, sprendžiantis tokias sritis kaip finansai, labdara, šeimos teisė, baudžiamoji teisė ir valdymas. Šalininkai teigia, kad tai suteikia islamui pilnos moralinės ir civilizacinės sistemos, o ne tik grynai dvasinės tradicijos, bruožų.
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

        title: 'Kas vyksta po Galutinės stoties?',

        subtitle: 'Likimas, teisingumas ir pomirtinis gyvenimas',

        intro: `
Be aukščiausiojo teisingumo egzistavimo po mirties, gyvenimas gali pasirodyti giliai savavališkas ir morališkai neišspręstas. Tironai gali mirti neatsiskaitę, o aukos gali palikti pasaulį negavusios teisingumo. Tai iškelia vieną seniausių žmonijos filosofinių klausimų: ar mirtis yra pabaiga, ar egzistuoja galutinis teismas už žemiškojo gyvenimo ribų?
  `,

        religions: {
          eastern: {
            title: 'Rytų religijos',

            examples: ['Hinduizmas', 'Budizmas'],

            answerNature: `
Daugelis Rytų tradicijų priima reinkarnacijos koncepciją, kur siela arba sąmonės srautas pereina pasikartojančius atgimimo ciklus. Būsimąją asmens būklę lemia karma: moralinės praeities veiksmų pasekmės.
      `,

            objectiveCritique: `
Kritikai teigia, kad reinkarnacija kelia filosofinius klausimus dėl teisingumo ir atsakomybės. Jei asmuo patiria pasekmes naujame gyvenime dėl veiksmų, atliktų ankstesnėje egzistencijoje, kurios negali sąmoningai prisiminti, tada bausmės edukacinis ir moralinis tikslas tampa sunkiai suprantamas.

Iš šios perspektyvos atsakomybė be sąmoningo prisiminimo gali atrodyti atskirta nuo reikšmingos moralinės atsakomybės.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materializmas ir ateizmas',

            answerNature: `
Materialistinės ir ateistinės pasaulėžiūros mirtį paprastai laiko sąmoningos egzistencijos pabaiga. Žmonės suprantami kaip biologiniai organizmai, kurių sąmonė visiškai nutrūksta po fizinės mirties.
      `,

            objectiveCritique: `
Kritikai teigia, kad griežtas materializmas sunkiai geba suteikti objektyvų pagrindą moralumui, teisingumui ir fundamentaliai prasmei. Jei tiek priespaudos vykdytojas, tiek auka galiausiai išnyksta į niekur neatsiskaitę, tada tokios sąvokos kaip pasiaukojimas, moralinė pareiga ir teisingumas gali atrodyti subjektyvios arba socialinės konstrukcijos, o ne universaliai įpareigojančios.

Vis dėlto pasaulietinės etikos šalininkai argumentuoja, kad moralumas vis tiek gali atsirasti per protą, empatiją ir socialinę atsakomybę be tikėjimo pomirtiniu gyvenimu.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Krikščionybė',

            answerNature: `
Krikščionybė moko, kad išgelbėjimas ir amžinasis gyvenimas pasiekiami per tikėjimą Jėzumi Kristumi ir Jo atperkamosios aukos priėmimą už žmonijos nuodėmes. Dangus ir amžinasis išgelbėjimas yra glaudžiai susiję su tikėjimu Kristumi ir dieviškąja malone.
      `,

            objectiveCritique: `
Kritikai klausia, kaip išgelbėjimas, pagrįstas pirmiausia tikėjimu, siejasi su universalaus teisingumo principais. Filosofiškai kai kurie argumentuoja, kad šis karkasas gali reikšti, jog moraliai teisingas asmuo, sąžiningai kovojantis su tam tikrų teologinių doktrinų priėmimu, gali būti atstumtas nuo išgelbėjimo, o kitas asmuo, padaręs sunkių nusikaltimų, bet priėmęs tikėjimą prieš pat mirtį, gali gauti amžinąjį atlygį.

Krikščionybės teologai dažnai atsako, kad išgelbėjimas apima tiek nuoširdų tikėjimą, tiek autentišką atgailą, o ne tik žodinį tikėjimo išpažinimą.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Islamas',

            answerNature: `
Islamas pateikia pomirtinį gyvenimą kaip visiškos moralinės atsakomybės ir dieviškojo teisingumo sistemą.

Korane teigiama:

"Nė vienas nusidėjėlis neneš kito naštos." (Koranas 6:164)

Išgelbėjimas islame nuosekliai siejamas tiek su tikėjimu, tiek su teisingais veiksmais:

"Tie, kurie tiki ir atlieka gerus darbus..." (kartojama visame Korane, įskaitant 2:25)

Islamas moko, kad žemiškas gyvenimas yra laikinas išbandymas, o ne galutinė atlygio ar bausmės vieta:

"Tas, kuris sukūrė mirtį ir gyvenimą, kad išbandytų jus, kas iš jūsų yra geriausias savo darbais." (Koranas 67:2)
      `,

            objectiveCritique: `
Islamo teologijoje Teismo diena atstovauja aukščiausiajam teisingumo tribunolui, kuriame už kiekvieną veiksmą, kad ir koks mažas jis būtų, bus atsiskaityta.

Korane teigiama:

"Kas padaro gero bent dulkelę – pamatys tai. Ir kas padaro blogo bent dulkelę – pamatys tai." (Koranas 99:7–8)

Šis karkasas siekia išsaugoti tiek individualią atsakomybę, tiek absoliutų teisingumą, kartu siūlydamas moralinį užtikrinimą, kad joks priespaudos ar gėrio veiksmas galiausiai neliks be pasekmių.
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
      navbar: 'Religijų palyginimas',
      hero: {
        subtitle:
          'Ramios, bet gilios filosofinės kelionės, nagrinėjančios didžiausius žmonijos klausimus: Kūrėją, egzistencijos tikslą, moralę ir tai, kas laukia po mirties.',

        subtitleHighlight:
          'Kūrėją, egzistencijos tikslą, moralę ir tai, kas laukia po mirties.',

        scrollIndicator: 'Slinkite žemyn, kad pradėtumėte kelionę',
      },

      storySection: {
        badge: 'Traukinio analogija',

        titleLine1: 'Prieš užduodant klausimus',
        titleLine2: 'Apie religiją...',

        intro:
          'Kiekvienas žmogus galiausiai pasiekia tylos akimirką, kai išsisklaido blaškymai – ir giliausi klausimai pagaliau iškyla į paviršių.',

        ending: 'Šis traukinys yra Žemės planeta,',
        ending2: 'o kelionė – tai jūsų gyvenimas.',
      },

      coreQuestions: {
        sectionLabel: 'Pagrindinės dalys',
        title: 'Fundamentiniai klausimai',

        answerNatureTitle: 'Atsakymo prigimtis',

        philosophicalDiscussionTitle: 'Filosofinė diskusija',

        referencesTitle: 'Nuorodos',
      },

      futureResearch: {
        sectionLabel: 'Ateities tyrimai',

        title: 'Kiti klausimai',

        loaderBadge: 'Daugiau klausimų netrukus',

        headingLine1: 'Kelionė',
        headingLine2: 'tęsiasi...',

        description:
          'Papildomi filosofiniai ir teologiniai tyrimai šiuo metu studijuojami ir ruošiami naudojant tą patį struktūrizuotą lyginamąjį požiūrį.',

        topics: [
          'Moralė',
          'Mokslas',
          'Stebuklai',
          'Sąmonė',
          'Laisva valia',
          'Kančia',
          'Istorinis išsaugojimas',
          'Pranašystės',
          'Žmogaus prigimtis',
          'Prasmė',
          'Civilizacija',
          'Etika',
        ],

        footer: 'Naujos dalys bus pridėtos netrukus',
      },

      imageAlt: {
        hero: 'Religijų palyginimas',
      },
    },
  },
};
