export default {
  splash: {
    version: 'verzija',
    practice: 'vežba',
    share: 'podeli',
    logo: 'globalni islam',
  },
  homeApp: {
    north: 'sever',
    east: 'istok',
    west: 'zapad',
    south: 'jug',
    active: 'kibla aktivna',
    disabled: 'Otvori kompas kible',
    welcome: 'Dobrodošli nazad',
    greet: 'Selam alejkum',
    hour: 'sat',
    minute: 'minut',
    second: 'sekund',
    toLeft: 'sa vaše leve strane',
    toRight: 'sa vaše desne strane',
    fromNorth: 'sa severa',
  },
  quranApp: {
    medinan: 'Medinska',
    meccan: 'Mekanska',
    arabicName: 'naziv na arapskom',
    englishName: 'naziv na engleskom',
    details: 'Izaberite ajet da biste videli prevod i tefsir (objašnjenje)',
    selectRes: 'Izaberi izvor',
    retry: 'pokušaj ponovo',
    loadErr1: 'Nije moguće učitati objašnjenje. Pokušajte ponovo.',
    loadErr2: 'Dohvatanje nije uspelo',
    author: 'autor',
    explain: 'Objašnjenje',
  },
  qiblaApp: {
    compass: 'Kompas kible',
    accuracy: 'tačnost',
    offline: 'GPS offline',
    tracking: 'GPS praćenje',
    aligned: 'Gledate prema kibli. Držite stabilno za tačan smer molitve.',
    notAligned:
      'Držite uređaj ravno i rotirajte dok strelica ne pokaže prema kibli.',
    heading: 'Smer uređaja',
    turn: 'okreni',
    alignedQibla: 'Poravnato sa kiblom',
  },
  aiApp: {
    answer: 'odgovor',
  },
  prayerApp: {
    locationRequired: 'Za tačno vreme molitve potrebne su usluge lokacije.',
    schedule: 'Raspored molitvi',
    refresh: 'osveži',
    sunrise: 'Izlazak sunca',
    upcoming: 'Sledeća molitva',
  },
  settingsApp: {
    reciterTitle: 'Recitator ezana',
    reciterSub: 'Izaberite željeni glas',
    notSelected: 'nije izabrano',
    preview: 'pregled',
    cancel: 'otkaži',
    muezzin: 'Mujezin',
    preNot: 'Obaveštenje pre ezana',
    preNotDet: 'Obavesti 15 minuta pre vremena molitve',
    theme: 'Tamni režim',
    dark: 'Trenutno tamna tema',
    light: 'Trenutno svetla tema',
    about: 'O aplikaciji',
    selectReciter: 'Izaberi recitatora',
  },
  athan: {
    mainTitle: 'EZAN · POZIV NA MOLITVU',
    stop: 'Zaustavi ezan',
    error: 'Nije moguće učitati zvuk ezana',
    prayerTime: 'Vreme molitve',
    play: 'pusti',
    pause: 'pauza',
    dismiss: 'zatvori',
  },
  athkarApp: {
    completed: 'Završeno',
    remaining: 'preostalo',
    reset: 'poništi',
    athkar: 'Azkar',
    mention: 'zikr',
    descM: 'Započnite dan blagoslovima',
    descE: 'Završite dan pod zaštitom',
    remmember: 'Dnevno Sećanje',
    cat: 'kategorije molitvi',
    category: 'Kategorija',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Pretraži hadis...',
      button: 'Pretraži',
      books: {
        label: 'Knjiga',
        options: {
          bukhari: 'Buhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Ebu Davud',
          nasai: 'Nesai',
          ibnmajah: 'Ibn Madža',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Trenutni jezik još uvek nije podržan',
      msg: 'Ovaj jezik trenutno nije podržan u bazi hadisa.',
      description:
        'Engleski je automatski izabran kao rezervni jezik kako biste mogli nesmetano da pretražujete i pregledate hadise. Takođe možete isprobati Napredni režim za širu višejezičnu podršku i bolje rezultate.',
    },

    initialPlaceholder:
      'Pretražite hadis da biste videli detalje poput ocene, prenosilaca i referenci',

    loading: {
      label: 'Učitavanje hadisa...',
    },

    hadithCard: {
      showMore: 'Prikaži više',
      showLess: 'Prikaži manje',

      header: {
        hadithPrefix: 'Hadis #',
        referencesTitle: 'Reference',
        referenceLabel: 'Referenca',
        inBookReference: 'Referenca u knjizi',
        arabicReference: 'Arapska referenca',
      },
    },

    emptyState: 'Nisu pronađeni hadisi',

    pagination: {
      prev: 'Prethodno',
      next: 'Sledeće',
    },
  },

  switch: {
    title: {
      advanced: 'Napredni režim',
      normal: 'Normalni režim',
    },

    description: {
      advanced: 'Semantička pretraga sa dubljim razumevanjem',
      normal: 'Brza pretraga zasnovana na filterima',
    },
  },

  navbar: {
    routes: {
      home: 'Početna',
      prayers: 'Molitve',
      quran: 'Kuran',
      athkar: 'Zikr',
      articles: 'Članci',

      articlesNested: {
        islamicHistory: 'Islamska istorija',
        prayerInIslam: 'Molitva u islamu',
        womenInIslam: 'Žene u islamu',
        purification: 'Čišćenje i abdest',
      },

      learn: 'Uči',
      learnNested: {
        quranTajweed: 'Uči Kuran i tedžvid',
        arabic: 'Uči arapski jezik',
      },

      dashboard: 'Kontrolna tabla',
      aiAssistant: 'AI asistent',
    },
  },
  hero: {
    title: {
      explore: 'Istraži islam sa',
      clarity: 'jasnoćom',
      peace: '& mirom',
    },

    description:
      'Uči, postavljaj pitanja i otkrij autentično razumevanje kroz veštačku inteligenciju i vođeno znanje dizajnirano za jasnoću i razmišljanje.',

    actions: {
      introductionToIslam: 'Uči o islamu',
      islamQA: 'Islam Pitanja i Odgovori (AI asistent)',
      continueWebsite: 'Nastavi na sajt',
    },
  },
  learning: {
    quran: {
      title: "Научите Кур'ан и Теџвид",
      subtitle:
        "Побољшајте своје учење Кур'ана и разумите правила Теџвида корак по корак.",
    },
    arabic: {
      title: 'Научите арапски',
      subtitle:
        'Развијајте своје вештине арапског језика кроз јасне и структурисане лекције.',
    },
    default: {
      title: 'Секција за учење',
      subtitle:
        'Истражите образовни садржај осмишљен да ојача ваше знање и разумевање.',
    },
  },
  explore: {
    searchBar: {
      title: 'Pretraga zbirki hadisa',

      subtitle:
        'Pretražuj prirodno koristeći teme, značenja ili cele rečenice.',

      placeholder: 'Primer: hadis o dobroti prema roditeljima',

      button: 'Pretraži',
    },

    header: {
      title: 'Biblioteka pretrage hadisa',
      subtitle: 'Odmah istraži autentične hadise uz moderno iskustvo čitanja.',
    },

    content: {
      heroTitle: 'Otkrij autentične zbirke hadisa uz moćnu pretragu',

      loading: {
        label: 'Pretraga zbirki hadisa...',
      },

      error: {
        title: 'Nije moguće učitati hadise',
        message:
          'Trenutno nismo mogli da preuzmemo predaje. Proveri konekciju i pokušaj ponovo.',
      },

      empty: {
        title: 'Nisu pronađeni odgovarajući hadisi',
      },

      card: {
        reference: 'Referenca hadisa',
        readMore: 'Pročitaj ceo hadis',
      },
    },
  },

  home: {
    news: {
      title: 'Novosti muslimanske zajednice',
      subtitle: 'Budi informisan o važnim vestima iz muslimanskog sveta',
    },

    prayer: {
      title: 'Odbrojavanje do namaza',
      subtitle: 'Pripremi se za sledeći namaz',
      button: 'Prikaži vreme namaza',
      nextPrayerLabel: 'Sledeći namaz u:',
    },

    athkar: {
      title: 'Jutarnji i večernji zikr',
      subtitle: 'Dnevno podsećanje za povezivanje srca',
      button: 'Pogledaj više zikra',
    },

    qibla: {
      title: 'Pravac kible',
      subtitle: 'Pronađi pravac Kabe gde god da si',
      locationLoading: 'Dobijanje lokacije...',
      enableLocation: 'Omogući lokaciju',
      refreshLocation: 'Osveži pravac kible',

      warning:
        'Ako uređaj ne podržava senzore orijentacije, tačnost kompasa može biti smanjena.',

      errorTitle: 'Dozvola odbijena',
    },
  },

  prayers: {
    nextLabel: 'Sledeći namaz u',
    header: {
      title: 'Vremena namaza',
      subtitle: 'Dnevni trenutak povezanosti sa Stvoriteljem',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Iša',
    },
    qibla: {
      loading: 'Dobijanje lokacije...',
      warning:
        'Ako operativni sistem ne podržava orijentaciju, to utiče na proračun kompasa.',
      errorTitle: 'Dozvola odbijena',
      enableLocation: 'Omogući lokaciju',
      refreshLocation: 'Osveži pravac kible',
    },

    list: {
      warning: 'Vremena mogu blago varirati u zavisnosti od metode proračuna.',
    },
  },

  quran: {
    header: {
      title: 'Kuran',
      subtitle: 'Tvoj dnevni saputnik za čitanje i razmišljanje',
    },

    search: {
      noResultTitle: 'Nema podataka',
      noResultMessage: 'Nema podataka za prikaz',
    },
  },

  athkar: {
    title: 'Dnevni zikr',
    subtitle: 'Budi dosledan u svakodnevnom sećanju i razmišljanju',
  },

  ai: {
    header: {
      title: 'Globalni islamski AI asistent',
      subtitle:
        'Dobij jasne islamske odgovore zasnovane na Kuranu, Sunnetu i pouzdanom znanju',
    },

    loading: {
      label: 'Učitavanje...',
    },

    error: {
      title: 'Dosegnut limit zahteva',
      message: 'Usluga znanja trenutno nije dostupna. Pokušaj ponovo kasnije.',
    },

    input: {
      placeholder: 'Postavi pitanje o islamu...',
    },

    suggestions: [
      'Mogu li da klanjam bez abdesta?',
      'Da li je kamata (riba) potpuno zabranjena?',
      'Propis rada u ne-halal okruženju',
      'Mogu li da klanjam dok putujem?',
      'Da li je dozvoljeno koristiti parfem u namazu?',
      'Šta kvari namaz?',
      'Odugovlačenje namaza zbog posla',
    ],

    footer: {
      disclaimer:
        'Ovaj AI asistent daje odgovore zasnovane na proverenim izvorima znanja, uključujući islamske reference i obrazovni materijal.',

      note: 'Odgovori su informativni i ne zamenjuju savet učenjaka kada je potreban.',
    },
  },

  footer: {
    disclaimer:
      'Sav prikazani sadržaj potiče iz originalnih pouzdanih izvora. Pozdravljamo povratne informacije i prijave grešaka za proveru i ispravku.',

    tagline: 'Pažljivo izrađeno za autentičan islamski sadržaj',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Nazad',
    },

    sections: {
      hadithText: 'Tekst hadisa',
      arabicText: 'Arapski tekst',
      explanation: 'Objašnjenje',
      authentication: 'Autentičnost',
      lessons: 'Pouke i koristi',
    },
  },
  other: {
    part: 'Део',
    translation: 'Превод',
    verse: 'Стих',
    chapter: 'Поглавље',
    page: 'Страна',
    breakingNews: 'Најновије вести',
  },
  dailyRemined: {
    title: 'Svetlost Dana',
    subtitle:
      'Zastanite na trenutak i razmislite o ajetu i hadisu izabranim za vaš dan.',
  },
  baseFooter: {
    contact: {
      title: 'Kontaktirajte nas',
      name: 'Vaše ime',
      email: 'Vaš email',
      msg: 'Vaša poruka',
      sendMsg: 'Pošalji poruku',
    },
    followUs: 'Pratite nas',
    QA: 'Brzi pristup',
    logoB:
      'Kuran, Hadisi, vremena molitve, AI pomoćnik i svakodnevni islamski alati—all na jednoj modernoj platformi.',
    whatsapp: 'Ćaskanje na WhatsAppu',
    rsr: 'Sva prava zadržana',
  },
  compareRelg: {
    note: `Ова страница представља упоредни преглед главних светских религија. Из исламске перспективе, Куран потврђује да су пређашње божанске објаве слате ранијим народима, али су временом претрпеле људске измене (тахриф). Куран наводи: „Ми, заиста, објављујемо Опомену и заиста ћемо Ми над њом бдети!“ (15:9). Ова страница испитује те разлике у светлу историјских и текстуалних доказа.`,
    mainTitle: 'Racionalno putovanje kroz religije',
    headerTitle: 'Pitanja koja definišu ljudsko postojanje',
    story: `
Zamislite da iznenada otvorite oči i shvatite da se nalazite u luksuznom vozu koji velikom brzinom juri kroz beskrajnu noć. Oko vas je sva zamisliva udobnost: bogata jela servirana na elegantnim stolovima, ekrani sa filmovima i svileni jastuci na mekanim sedištima.

Sa osećajem nemira, pitate putnika pored sebe:
"Gde smo? Ko nas je stavio u ovaj voz? I kuda idemo?"

Najviše iznenađuje njihova reakcija.

Jedan odgovara hladno:
"Šta te briga? Samo uživaj u hrani, fantastična je."

Drugi odgovara sa podsmehom:
"Zašto se mučiti takvim pitanjima? Nasloni se i gledaj film."

Svi oko vas se gube u užicima putovanja, ali vas obuzima dubok strah, jer znate da ovaj voz juri ka krajnjoj stanici – mestu gde svaki putnik na kraju mora izaći.

U tom trenutku se pojavljuje najvažnije pitanje:

Da li ćete se prepustiti luksuzu i zabavi putovanja ili ćete nastaviti da tražite odgovore na tri najdublja pitanja:

Ko je Tvorac?
Zašto smo ovde?
I šta nas čeka na kraju?

Ovaj voz je planeta Zemlja, a putovanje je vaš život.

Pošto ljudi nemaju ove odgovore urođene, religije su nastale kao „uputstva za upotrebu“, pri čemu svaka tvrdi da dolazi direktno od projektanta voza.

Analizirajmo ova uputstva iz mirne i racionalne perspektive.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Ko je Tvorac?',

        intro: `
Sa filozofske i logičke tačke gledišta, Tvorac kao „Prvi uzrok“ univerzuma mora biti apsolutno transcendentan, izvan granica materije, vremena i prostora. Kada bi Tvorac bio podložan gladi, umoru, fizičkim ograničenjima ili prostornim okvirima, takvo biće bi logički izgubilo status apsolutnog Tvorca i postalo bi stvoreno i zavisno biće. Zavisno biće ne može biti neophodan izvor celokupnog postojanja.
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',
            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
U svojoj najstarijoj formi, Teravada, budizam je uglavnom neteistički; ne fokusira se na postojanje boga tvorca, već posmatra postojanje kao rezultat večnih prirodnih procesa, uzročnosti i međuzavisnih zakona.

Hinduizam, s druge strane, često govori o fundamentalnoj metafizičkoj realnosti zvanoj „Brahman“. Međutim, u praksi se ova najviša realnost manifestuje kroz bezbroj oblika i božanstava, uključujući ljudske i životinjske figure, kao što su Višnu, Šiva i Kali.
      `,

            objectiveCritique: `
Sa filozofske tačke gledišta, budizam se suočava sa izazovom da objasni kako visoko uređen univerzum, kojim upravljaju dosledni zakoni i fizička preciznost, može nastati bez prvobitnog svesnog uzroka.

U hinduističkim tradicijama koje prihvataju božanske inkarnacije i fizičke slike, božanstvo se povezuje sa ograničenjima, konfliktima, glađu, smrću i materijalnim oblikom. Božanstvo koje se može fizički prikazati, ovaplotiti ili koje je podložno prirodnim procesima, sa racionalne tačke gledišta deluje više kao deo tvorevine nego kao biće koje je potpuno prevazilazi.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaizam',

            answerNature: `
Judaizam potvrđuje veru u Tvorca koji je uzvišen iznad idola i fizičkih slika. Bog (JHWH) se shvata kao Tvorac neba i zemlje i u svojoj suštini je odvojen od svoje tvorevine.
      `,

            objectiveCritique: `
Filozofski problem koji se ovde javlja ne odnosi se toliko na samu transcendenciju, koliko na granice univerzalnosti Boga, kako se pojavljuju u nekim odlomcima Hebrejske Biblije. Određeni tekstovi prikazuju Boga u zavetnom odnosu koji je snažno orijentisan ka sinovima Izraela, što kritičari tumače kao etnički ekskluzivizam.

Pored toga, neki odlomci koriste ljudski jezik za opisivanje Boga, kao što je „kajanje“ zbog stvaranja čoveka (Postanje 6:6) ili „odmor“ sedmog dana nakon stvaranja (Izlazak 31:17). Kritičari tvrde da ovakvi opisi pokreću pitanje da li ove osobine treba shvatiti doslovno ili metaforički.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Hrišćanstvo',

            answerNature: `
Hrišćanstvo uči veri u jednog Boga kroz doktrinu Svete Trojice: Oca, Sina i Svetog Duha. Prema doktrini ovaploćenja, drugo lice Trojice – Sin – ušlo je u istoriju čovečanstva u ličnosti Isusa Hrista, koji je razapet i umro za spasenje čovečanstva.
      `,

            objectiveCritique: `
Filozofski, kritičari tvrde da doktrina ovaploćenja stvara napetost između božanskih i ljudskih atributa. Tradicionalno se Bog opisuje kao večan, neograničen i izvan smrti, dok se ljudi opisuju kao konačni, ranjivi i smrtni.

Problem nastaje kada su puna božanstvenost i puna ljudskost sjedinjene u jednoj ličnosti. Kritičari se pitaju kako večan i nezavisan entitet može istovremeno doživljavati glad, san, patnju i smrt. Ovaj problem se često formuliše kao napetost između transcendencije i ovaploćenja, a ne samo kao teološka tajna.
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
Islam predstavlja koncept Boga koji je potpuno transcendentan i nedeljiv. Kuran sumira ovaj koncept u suri Al-Ihlas:

„Reci: On je Alah, Jedini. Alah, Apsolutni. Nije rodio i nije rođen. I niko Mu ravan nije.“ (Kuran 112:1–4)

U islamu je Tvorac potpuno izvan materijalne forme i odvojen je od tvorevine:

„Ništa Mu nije slično.“ (Kuran 42:11)

Bog nije ograničen vremenom, prostorom ili fizičkim ograničenjima. Kuran takođe navodi:

„Ne obuzima Ga ni driimež ni san.“ (Kuran 2:255)

U islamskoj teologiji Bog se shvata kao nezavisno, večno, samodovoljno i od tvorevine potpuno odvojeno biće.
      `,

            objectiveCritique: `
Sa islamske filozofske tačke gledišta, ovaj koncept teži očuvanju apsolutne transcendencije izbegavanjem antropomorfizma i ovaploćenja. Cilj je uskladiti Tvorca sa idejom nezavisnog i neophodnog Prvog uzroka, koji nije podložan ograničenjima stvorenog bića.
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

        title: 'Kakav je način života i cilj?',

        intro: `
Ako postoji mudar Tvorac, neracionalno je pretpostaviti da je čovečanstvo ostavljeno bez smernica koje objašnjavaju svrhu postojanja, moralnu odgovornost i principe kojih se treba pridržavati. Baš kao što složeni sistemi zahtevaju uputstva od svog projektanta, religije tvrde da pružaju okvir koji pomaže čoveku da razume zašto smo ovde i kako treba da živimo.
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',

            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
Istočne tradicije kao što su budizam i hinduizam se uglavnom oslanjaju na filozofska učenja, meditativne prakse i razmišljanja koje su razvili duhovni učitelji i mudraci.

U budizmu je krajnji cilj oslobođenje od patnje i izlazak iz ciklusa ponovnog rađanja postizanjem Nirvane – stanja transcendencije i unutrašnjeg oslobođenja.

U mnogim hinduističkim tradicijama cilj je duhovno oslobođenje (Mokša), dostižno kroz posvećenost, znanje, meditaciju ili disciplinovano delovanje.
      `,

            objectiveCritique: `
Kritičari tvrde da su ovi sistemi primarno filozofski i zasnovani na iskustvu, pre nego na proverljivom otkrovenju od transcendentnog Tvorca.

Neki takođe argumentuju da jak naglasak na povlačenju iz svetovnog života, monaštvu i odricanju od sebe može biti u sukobu sa aspektima ljudske prirode koji podstiču društveni razvoj, naučni napredak, porodični život i civilizaciju.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaizam',

            answerNature: `
U judaizmu je način života ukorenjen u zakonu zaveta otkrivenom Mojsiju i sačuvanom u Hebrejskoj Bibliji (Tanah). Religiozni okvir se fokusira na poslušnost Božijim zapovestima i održavanje zavetnog odnosa između Boga i sinova Izraela.
      `,

            objectiveCritique: `
Kritičari tvrde da se judaizam istorijski razvijao kao tradicija orijentisana na zavet sa konkretnim narodom, a ne kao univerzalna misionarska religija za celo čovečanstvo.

Sa tačke gledišta tekstualne analize, neki naučnici – uključujući Ričarda Eliota Fridmana – tvrde da je Tora prolazila kroz procese kompilacije i uređivanja tokom vekova, posebno oko vavilonskog ropstva i nakon njega. To navodi neke kritičare da sumnjaju da li se tekst može smatrati savršeno očuvanim otkrovenjem u njegovom prvobitnom obliku.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Hrišćanstvo',

            answerNature: `
Hrišćanstvo uči da su glavni problem čovečanstva greh i odvojenost od Boga i da se spasenje postiže verom u žrtvenu smrt Isusa i Njegovo vaskrsenje. Cilj života se stoga shvata kroz pomirenje sa Bogom i duhovnu preobrazbu.
      `,

            objectiveCritique: `
Istoričari primećuju da se originalni rukopisi jevanđelja na aramejskom (Isusovom jeziku) nisu sačuvali. Najstariji sačuvani tekstovi su grčki rukopisi, napisani decenijama nakon Isusovog života. Tekstualni kritičari poput Barta Ermana dokumentovali su brojne varijacije u najstarijim kopijama Novog zaveta.

Kritičari takođe tvrde da je hrišćanstvo istorijski davalo veći naglasak na duhovno i lično spasenje nego na izgradnju sveobuhvatnog pravnog ili političkog okvira za ekonomiju, krivično pravo ili državnu upravu. Neki istoričari smatraju da je to doprinelo kasnijem odvajanju crkve od države u mnogim zapadnim društvima.
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
Islam nudi sveobuhvatno razumevanje ljudskog cilja kroz integraciju duhovne posvećenosti i svetovne odgovornosti.

Kuran navodi:

„Džine i ljude sam stvorio samo zato da Mi služe.“ (Kuran 51:56)

U islamskoj misli, obožavanje se ne ograničava na rituale, već uključuje pravedno delovanje, pravdu, etičko ponašanje, težnju ka znanju i pozitivan doprinos društvu.

Islamsko učenje teži ravnoteži između duhovnog rasta i praktičnog učešća u porodičnom životu, ekonomiji, upravljanju, dobročinstvu i društvenoj odgovornosti.
      `,

            objectiveCritique: `
Sa islamske tačke gledišta, Kuran predstavlja jedinstveno sačuvano otkrovenje. Muslimani tvrde da je tekst ostao nepromenjen i da se neprekidno prenosio kroz pisane rukopise i usmeno memorisanje još od prvih generacija islama.

Često citirani primeri su drevni tekstovi, kao što je Kuran iz Birmingema, i ogromna tradicija usmenog memorisanja koju održavaju milioni muslimana širom sveta.

Islamsko pravo (Šerijat) se takođe predstavlja kao etički i pravni okvir koji pokriva oblasti kao što su finansije, dobročinstvo, porodično pravo, krivično pravo i upravljanje. Pristalice tvrde da to islamu daje karakteristike kompletnog moralnog i civilizacijskog sistema, a ne samo duhovne tradicije.
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

        title: 'Šta se dešava nakon Krajnje stanice?',

        subtitle: 'Sudbina, pravda i zagrobni život',

        intro: `
Bez postojanja konačne pravde nakon smrti, život može delovati veoma proizvoljno i moralno nerešeno. Tirani mogu umreti a da ne odgovaraju, a žrtve mogu napustiti svet bez postignute pravde. To pokreće jedno od najstarijih filozofskih pitanja čovečanstva: da li je smrt kraj, ili postoji konačni sud izvan zemaljskog života?
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',

            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
Mnoge istočne tradicije prihvataju koncept reinkarnacije, u kojoj duša ili tok svesti prolazi kroz ponovljene cikluse ponovnog rađanja. Buduće stanje pojedinca određeno je karmom: moralnim posledicama prošlih dela.
      `,

            objectiveCritique: `
Kritičari tvrde da reinkarnacija pokreće filozofska pitanja o pravdi i odgovornosti. Ako neko u novom životu snosi posledice dela iz prethodnog postojanja kojih se ne može svesno sećati, obrazovni i moralni cilj kazne postaje teško razumljiv.

Iz ove perspektive, odgovornost bez svesnog sećanja deluje odvojeno od smislene moralne odgovornosti.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materijalizam i ateizam',

            answerNature: `
Materijalistički i ateistički pogledi na svet obično smatraju smrt krajem svesnog postojanja. Ljudska bića se shvataju kao biološki organizmi čija svest potpuno prestaje nakon fizičke smrti.
      `,

            objectiveCritique: `
Kritičari tvrde da strogi materijalizam ima teškoća da obezbedi objektivnu osnovu za moral, pravdu i fundamentalni smisao. Ako i tlačitelj i žrtva na kraju nestanu u ništavilu bez odgovaranja za svoje postupke, pojmovi kao što su žrtvovanje, moralna dužnost i pravda mogu delovati subjektivno ili društveno konstruisano, pre nego univerzalno obavezujuće.

Zagovornici sekularne etike, međutim, tvrde da moral i dalje može nastati kroz razum, empatiju i društvenu odgovornost bez vere u zagrobni život.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Hrišćanstvo',

            answerNature: `
Hrišćanstvo uči da se spasenje i večni život postižu verom u Isusa Hrista i prihvatanjem Njegove žrtve za grehe čovečanstva. Nebo i večno spasenje su usko povezani sa verom u Hrista i Božijom milošću.
      `,

            objectiveCritique: `
Kritičari se pitaju kako se spasenje zasnovano primarno na veri odnosi na univerzalne principe pravde. Filozofski, neki tvrde da ovaj okvir može značiti da moralno dobar čovek, koji se iskreno trudi da prihvati određene teološke dogme, može biti lišen spasenja, dok drugi čovek, koji je počinio teške zločine ali je poverovao u poslednjem trenutku, može dobiti večnu nagradu.

Hrišćanski teolozi često odgovaraju da spasenje uključuje i iskrenu veru i autentično pokajanje, a ne samo verbalno priznanje.
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
Islam predstavlja zagrobni život kao sistem apsolutne moralne odgovornosti i Božije pravde.

Kuran navodi:

„Nijedna duša neće nositi teret druge.“ (Kuran 6:164)

Spasenje u islamu je dosledno povezano sa verom i dobrim delima:

„I obraduj one koji veruju i čine dobra dela...“ (ponovljeno u celom Kuranu, uključujući 2:25)

Islam uči da je zemaljski život privremeni test, a ne mesto konačne nagrade ili kazne:

„On, koji je stvorio smrt i život, da vas iskuša, ko od vas bolje postupuje.“ (Kuran 67:2)
      `,

            objectiveCritique: `
U islamskoj teologiji Sudnji dan predstavlja konačni tribunal, gde će se računati svako delo, ma koliko malo bilo.

Kuran navodi:

„Ko uradi dobro koliko trun, videće ga. I ko uradi zlo koliko trun, videće ga.“ (Kuran 99:7–8)

Ovaj okvir teži očuvanju i individualne odgovornosti i apsolutne pravde, nudeći moralnu sigurnost da nijedan čin ugnjetavanja ili dobročinstva na kraju neće ostati bez posledica.
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
      navbar: 'Poređenje religija',
      hero: {
        subtitle:
          'Mirno i duboko filozofsko putovanje kroz najveća pitanja čovečanstva: Tvorac, svrha postojanja, moral i ono što nas čeka nakon smrti.',

        subtitleHighlight:
          'Tvorac, svrha postojanja, moral i ono što nas čeka nakon smrti.',

        scrollIndicator: 'Skrolujte nadole da započnete putovanje',
      },

      storySection: {
        badge: 'Analogija voza',

        titleLine1: 'Pre nego što postavite pitanja',
        titleLine2: 'O religiji...',

        intro:
          'Svaki čovek na kraju dođe do trenutka tišine kada ometajući faktori nestanu – i najdublja pitanja konačno isplivaju na površinu.',

        ending: 'Ovaj voz je planeta Zemlja,',
        ending2: 'a putovanje je vaš život.',
      },

      coreQuestions: {
        sectionLabel: 'Glavne sekcije',
        title: 'Fundamentalna pitanja',

        answerNatureTitle: 'Priroda odgovora',

        philosophicalDiscussionTitle: 'Filozofska diskusija',

        referencesTitle: 'Reference',
      },

      futureResearch: {
        sectionLabel: 'Buduća istraživanja',

        title: 'Druga pitanja',

        loaderBadge: 'Više pitanja u pripremi',

        headingLine1: 'Putovanje',
        headingLine2: 'se nastavlja...',

        description:
          'Dodatna filozofska i teološka istraživanja se proučavaju i pripremaju koristeći isti strukturirani uporedni pristup.',

        topics: [
          'Moral',
          'Nauka',
          'Čuda',
          'Svest',
          'Slobodna volja',
          'Patnja',
          'Istorijski prenos',
          'Proročanstva',
          'Ljudska priroda',
          'Smisao',
          'Civilizacija',
          'Etika',
        ],

        footer: 'Nove sekcije će uskoro biti dodate',
      },

      imageAlt: {
        hero: 'Poređenje religija',
      },
    },
  },
};
