export default {
  splash: {
    version: 'verzija',
    practice: 'vježba',
    share: 'podijeli',
    logo: 'globalni islam',
  },
  homeApp: {
    north: 'sjever',
    east: 'istok',
    west: 'zapad',
    south: 'jug',
    active: 'kibla aktivna',
    disabled: 'Otvori kompas kible',
    welcome: 'Dobrodošli natrag',
    greet: 'Selam alejkum',
    hour: 'sat',
    minute: 'minuta',
    second: 'sekunda',
    toLeft: 's vaše lijeve strane',
    toRight: 's vaše desne strane',
    fromNorth: 'sa sjevera',
  },
  quranApp: {
    medinan: 'Medinska',
    meccan: 'Mečka',
    arabicName: 'naziv na arapskom',
    englishName: 'naziv na engleskom',
    details: 'Odaberite ajet za prikaz prijevoda i tefsira (objašnjenja)',
    selectRes: 'Odaberi izvor',
    retry: 'pokušaj ponovno',
    loadErr1: 'Nije moguće učitati objašnjenje. Pokušajte ponovno.',
    loadErr2: 'Dohvaćanje nije uspjelo',
    author: 'autor',
    explain: 'Objašnjenje',
  },
  qiblaApp: {
    compass: 'Kompas kible',
    accuracy: 'točnost',
    offline: 'GPS offline',
    tracking: 'GPS praćenje',
    aligned: 'Gledate prema kibli. Držite stabilno za točan smjer molitve.',
    notAligned:
      'Držite uređaj ravno i rotirajte dok strelica ne pokaže prema kibli.',
    heading: 'Smjer uređaja',
    turn: 'okreni',
    alignedQibla: 'Poravnato s kiblom',
  },
  aiApp: {
    answer: 'odgovor',
  },
  prayerApp: {
    locationRequired: 'Za točne vremena molitve potrebne su usluge lokacije.',
    schedule: 'Raspored molitvi',
    refresh: 'osvježi',
    sunrise: 'Izlazak sunca',
    upcoming: 'Sljedeća molitva',
  },
  settingsApp: {
    reciterTitle: 'Recitator ezana',
    reciterSub: 'Odaberite željeni glas',
    notSelected: 'nije odabrano',
    preview: 'pregled',
    cancel: 'odustani',
    muezzin: 'Mujezin',
    preNot: 'Obavijest prije ezana',
    preNotDet: 'Obavijesti 15 minuta prije vremena molitve',
    theme: 'Tamni način',
    dark: 'Trenutačno tamna tema',
    light: 'Trenutačno svijetla tema',
    about: 'O aplikaciji',
    selectReciter: 'Odaberi recitatora',
  },
  athan: {
    mainTitle: 'EZAN · POZIV NA MOLITVU',
    stop: 'Zaustavi ezan',
    error: 'Nije moguće učitati zvuk ezana',
    prayerTime: 'Vrijeme molitve',
    play: 'reproduciraj',
    pause: 'pauza',
    dismiss: 'zatvori',
  },
  athkarApp: {
    completed: 'Dovršeno',
    remaining: 'preostalo',
    reset: 'poništi',
    athkar: 'Azkar',
    mention: 'zikr',
    descM: 'Započnite dan blagoslovima',
    descE: 'Završite dan pod zaštitom',
    remmember: 'Dnevno Sjećanje',
    cat: 'kategorije molitvi',
    category: 'Kategorija',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Pretraži hadis...',
      button: 'Traži',
      books: {
        label: 'Knjiga',
        options: {
          bukhari: 'Buhari',
          muslim: 'Muslim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Ebu Davud',
          nasai: 'Nesai',
          ibnmajah: 'Ibn Madže',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Trenutni jezik još nije podržan',
      msg: 'Ovaj jezik trenutno nije podržan u bazi hadisa.',
      description:
        'Engleski je automatski odabran kao rezervni jezik kako biste i dalje mogli neometano pretraživati i pregledavati hadise. Također možete isprobati Napredni način za širu višejezičnu podršku i bolje rezultate.',
    },

    initialPlaceholder:
      'Pretražite hadis kako biste vidjeli detalje poput ocjene, prenositelja i referenci',

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

    emptyState: 'Nema pronađenih hadisa',

    pagination: {
      prev: 'Prethodno',
      next: 'Sljedeće',
    },
  },

  switch: {
    title: {
      advanced: 'Napredni način',
      normal: 'Normalni način',
    },

    description: {
      advanced: 'Semantičko pretraživanje s dubljim razumijevanjem',
      normal: 'Brzo pretraživanje temeljeno na filtrima',
    },
  },

  navbar: {
    routes: {
      home: 'Početna',
      prayers: 'Molitve',
      quran: "Kur'an",
      athkar: 'Zikr',
      articles: 'Članci',

      articlesNested: {
        islamicHistory: 'Islamska povijest',
        prayerInIslam: 'Molitva u islamu',
        womenInIslam: 'Žene u islamu',
        purification: 'Pročišćenje i abdest',
      },

      learn: 'Uči',
      learnNested: {
        quranTajweed: "Uči Kur'an i tedžvid",
        arabic: 'Uči arapski',
      },

      dashboard: 'Nadzorna ploča',
      aiAssistant: 'AI asistent',
    },
  },
  hero: {
    title: {
      explore: 'Istraži islam s',
      clarity: 'Jasnoćom',
      peace: '& mirom',
    },

    description:
      'Uči, postavljaj pitanja i otkrij autentično razumijevanje kroz umjetnu inteligenciju i vođeno znanje dizajnirano za jasnoću i promišljanje.',

    actions: {
      introductionToIslam: 'Uči o islamu',
      islamQA: 'Islam Pitanja i Odgovori (AI asistent)',
      continueWebsite: 'Nastavi na web stranicu',
    },
  },
  learning: {
    quran: {
      title: "Naučite Kur'an i Tedžvid",
      subtitle:
        "Poboljšajte svoje učenje Kur'ana i razumijte pravila Tedžvida korak po korak.",
    },
    arabic: {
      title: 'Naučite arapski',
      subtitle:
        'Razvijajte svoje vještine arapskog jezika kroz jasne i strukturirane lekcije.',
    },
    default: {
      title: 'Sekcija za učenje',
      subtitle:
        'Istražite obrazovni sadržaj osmišljen za jačanje vašeg znanja i razumijevanja.',
    },
  },
  explore: {
    searchBar: {
      title: 'Pretraga zbirki hadisa',

      subtitle:
        'Pretražuj prirodno koristeći teme, značenja ili cijele rečenice.',

      placeholder: 'Primjer: hadis o dobroti prema roditeljima',

      button: 'Pretraži',
    },

    header: {
      title: 'Biblioteka pretrage hadisa',
      subtitle: 'Odmah istraži autentične hadise uz moderno iskustvo čitanja.',
    },

    content: {
      heroTitle: 'Otkrij autentične zbirke hadisa uz moćnu pretragu',

      loading: {
        label: 'Pretraživanje zbirki hadisa...',
      },

      error: {
        title: 'Nije moguće učitati hadise',
        message:
          'Trenutno nismo mogli dohvatiti predaje. Provjeri vezu i pokušaj ponovno.',
      },

      empty: {
        title: 'Nisu pronađeni odgovarajući hadisi',
      },

      card: {
        reference: 'Referenca hadisa',
        readMore: 'Pročitaj cijeli hadis',
      },
    },
  },

  home: {
    news: {
      title: 'Novosti muslimanske zajednice',
      subtitle: 'Budi informiran o važnim vijestima iz muslimanskog svijeta',
    },

    prayer: {
      title: 'Odbrojavanje do namaza',
      subtitle: 'Pripremi se za sljedeći namaz',
      button: 'Pogledaj vremena namaza',
      nextPrayerLabel: 'Sljedeći namaz u:',
    },

    athkar: {
      title: 'Jutarnji i večernji zikr',
      subtitle: 'Dnevno sjećanje za povezivanje srca',
      button: 'Pogledaj više zikra',
    },

    qibla: {
      title: 'Smjer Kible',
      subtitle: 'Pronađi smjer Kabe gdje god se nalaziš',
      locationLoading: 'Dohvaćanje lokacije...',
      enableLocation: 'Omogući lokaciju',
      refreshLocation: 'Osvježi smjer Kible',

      warning:
        'Ako tvoj uređaj ne podržava senzore orijentacije, točnost kompasa može biti pogođena.',

      errorTitle: 'Dozvola odbijena',
    },
  },

  prayers: {
    nextLabel: 'Sljedeći namaz u',
    header: {
      title: 'Vremena namaza',
      subtitle: 'Dnevni trenutak povezanosti s tvojim Stvoriteljem',
    },
    times: {
      Fajr: 'Fadžr',
      Dhuhr: 'Podne',
      Asr: 'Ikindija',
      Maghrib: 'Akšam',
      Isha: 'Jacija',
    },
    qibla: {
      loading: 'Dohvaćanje lokacije...',
      warning:
        'Ako operativni sustav ne podržava orijentaciju, to utječe na izračun smjera kompasa.',
      errorTitle: 'Dozvola odbijena',
      enableLocation: 'Omogući lokaciju',
      refreshLocation: 'Osvježi smjer Kible',
    },

    list: {
      warning: 'Vremena se mogu neznatno razlikovati ovisno o metodi izračuna.',
    },
  },

  quran: {
    header: {
      title: "Kur'an",
      subtitle: 'Tvoj dnevni pratilac za učenje i razmišljanje',
    },

    search: {
      noResultTitle: 'Nema podataka',
      noResultMessage: 'Nema podataka za prikaz',
    },
  },

  athkar: {
    title: 'Dnevni zikr',
    subtitle: 'Budi dosljedan u svakodnevnom sjećanju i razmišljanju',
  },

  ai: {
    header: {
      title: 'Globalni islamski AI asistent',
      subtitle:
        "Dobij jasne islamske odgovore temeljene na Kur'anu, Sunnetu i pouzdanoj učenosti",
    },

    loading: {
      label: 'Učitavanje...',
    },

    error: {
      title: 'Dosegnuto ograničenje zahtjeva',
      message:
        'Trenutno nije moguće pristupiti usluzi znanja. Pokušaj ponovno uskoro.',
    },

    input: {
      placeholder: 'Postavi pitanje o islamu...',
    },

    suggestions: [
      'Mogu li klanjati ako sam bez abdesta?',
      'Je li kamata (riba) potpuno zabranjena?',
      'Propis rada u ne-halal okruženju',
      'Mogu li klanjati dok putujem?',
      'Je li dozvoljeno koristiti parfem u namazu?',
      'Što kvari namaz?',
      'Odgoda namaza zbog posla',
    ],

    footer: {
      disclaimer:
        'AI asistent je dizajniran da pruža odgovore temeljene na odabranim i pouzdanim izvorima znanja, uključujući islamske reference i provjereni edukativni materijal.',

      note: 'Odgovori su informativne prirode i ne zamjenjuju savjet učenjaka gdje je to potrebno.',
    },
  },

  footer: {
    disclaimer:
      'Sav prikazani sadržaj potječe iz originalnih pouzdanih izvora. Pozdravljamo povratne informacije i prijave grešaka radi provjere i ispravke.',

    tagline: 'Izgrađeno s pažnjom za autentični islamski sadržaj',
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
    part: 'Dio',
    translation: 'Prijevod',
    verse: 'Stih',
    chapter: 'Poglavlje',
    page: 'Stranica',
    breakingNews: 'Najnovije vijesti',
  },
  dailyRemined: {
    title: 'Svjetlo Dana',
    subtitle:
      'Zastanite na trenutak i razmislite o ajetu i hadisu odabranima za vaš dan.',
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
      "Kur'an, Hadisi, vremena molitve, AI pomoćnik i svakodnevni islamski alati—all na jednoj modernoj platformi.",
    whatsapp: 'Chat na WhatsAppu',
    rsr: 'Sva prava pridržana',
  },
  compareRelg: {
    note: `Ova stranica donosi usporedni pregled glavnih svjetskih religija. Iz islamske perspektive, Kur'an potvrđuje da su prijašnje božanske objave slate ranijim narodima, ali su s vremenom pretrpjele ljudske preinake (tahrif). Kur'an navodi: "Mi, uistinu, Kur'an objavljujemo i zaista ćemo Mi nad njim bdjeti!" (15:9). Ova stranica ispituje te razlike u svjetlu povijesnih i tekstualnih dokaza.`,
    mainTitle: 'Racionalno putovanje kroz religije',
    headerTitle: 'Pitanja koja definiraju ljudsko postojanje',
    story: `
Zamislite da iznenada otvorite oči i nađete se kako sjedite u luksuznom vlaku koji ogromnom brzinom juri kroz beskrajnu noć. Oko vas je sva moguća udobnost: raskošni obroci posluženi na elegantnim stolovima, blistavi ekrani na kojima se prikazuju filmovi i svileni jastuci na mekanim sjedalima.

Okrenete se putnicima do sebe i zabrinuto upitate:
"Gdje smo? Tko nas je stavio u ovaj vlak? I kamo idemo?"

No, pravo iznenađenje dolazi iz njihovih reakcija.

Jedan od njih hladno odgovara:
"Što te briga? Probaj ovo jelo, nevjerojatno je."

Drugi podrugljivo kaže:
"Zašto se zamaraš takvim pitanjima? Samo se opusti i uživaj u filmu."

Svi oko vas su zaokupljeni užicima i distrakcijama putovanja, no duboka vas jeza prolazi jer sa sigurnošću znate da ovaj vlak juri prema konačnom odredištu, postaji na kojoj će svaki putnik na kraju morati sići.

I u tom trenutku, pojavljuje se pravo pitanje:

Hoćete li se izgubiti u luksuzu i zabavi putovanja ili ćete nastaviti tražiti odgovore na tri najdublja pitanja:

Tko je Stvoritelj?
Zašto smo ovdje?
I što nas čeka na kraju?

Ovaj vlak je planet Zemlja, a putovanje je vaš život.

Budući da ljudska bića nemaju te odgovore sama po sebi, religije su se pojavile kao "priručnici s uputama", pri čemu svaka tvrdi da dolazi od samog dizajnera vlaka.

Stoga, stavimo te priručnike pod leću mirnog i racionalnog ispitivanja.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Tko je Stvoritelj?',

        intro: `
Iz filozofske i logičke perspektive, "Prvi uzrok" svemira — Stvoritelj — mora biti potpuno transcendentan, izvan materije, vremena i prostora. Da je Stvoritelj podložan gladi, umoru, fizičkim ograničenjima ili prostornoj vezanosti, logički gledano, takvo biće prestalo biti apsolutni Stvoritelj i umjesto toga postalo stvoreni i ovisni entitet. Ovisno biće ne može, na kraju krajeva, služiti kao nužan izvor cjelokupnog postojanja.
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',
            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
U svom najranijem obliku, Theravadi, budizam je općenito neteistički; on se ne fokusira na postojanje stvoritelja, već smatra da postojanje nastaje iz vječnih prirodnih procesa, uzročnosti i međusobno povezanih zakona.

Hinduizam, s druge strane, često govori o temeljnoj metafizičkoj stvarnosti zvanoj "Brahman". Međutim, u praktičnom štovanju, ova se vrhunska stvarnost izražava kroz bezbroj manifestacija i božanstava, uključujući oblike ljudskog i životinjskog izgleda, poput Višnua, Šive i Kali.
      `,

            objectiveCritique: `
S filozofskog stajališta, budizam se suočava s izazovom objašnjenja kako bi visoko uređen svemir, kojim upravljaju dosljedni zakoni i fizička preciznost, mogao nastati bez izvornog inteligentnog uzroka.

U hinduističkim tradicijama koje prihvaćaju božansku inkarnaciju i fizičke prikaze, božansko se povezuje s ograničenjima, sukobom, gladi, smrću i materijalnim oblikom. Božanstvo koje se može fizički prikazati, utjeloviti ili koje je podložno prirodnim procesima čini se, iz racionalne perspektive, kao dio stvaranja, a ne netko tko ga u potpunosti nadilazi.
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
Judaizam potvrđuje vjeru u Stvoritelja koji je iznad idola i fizičkog prikaza. Bog (YHWH) shvaćen je kao Stvoritelj neba i zemlje i bitno se razlikuje od stvorenja.
      `,

            objectiveCritique: `
Filozofska zabrinutost ovdje se ne odnosi prvenstveno na transcendenciju kao takvu, već na percipiranu granicu božanske univerzalnosti u nekim odlomcima hebrejske Biblije. Određeni tekstovi prikazuju Boga u odnosu saveza koji je snažno usmjeren na Djecu Izraela na način koji kritičari tumače kao etnički isključiv.

Osim toga, neki odlomci opisuju Boga koristeći vrlo ljudski jezik, poput "pokajanja" zbog stvaranja čovječanstva (Postanak 6,6) ili "odmaranja" sedmog dana nakon stvaranja (Izlazak 31,17). Kritičari tvrde da takvi opisi postavljaju pitanja o tome treba li te atribute shvatiti doslovno ili metaforički.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kršćanstvo',

            answerNature: `
Kršćanstvo naučava vjeru u jednog Boga kroz doktrinu Trojstva: Oca, Sina i Duha Svetoga. Prema doktrini utjelovljenja (inkarnacije), druga osoba Trojstva — Sin — ušla je u ljudsku povijest u osobi Isusa Krista, koji je bio razapet i umro za spasenje čovječanstva.
      `,

            objectiveCritique: `
Filozofski gledano, kritičari tvrde da doktrina utjelovljenja stvara napetost između božanskih i ljudskih atributa. Tradicionalno, Bog je opisan kao vječan, neograničen i izvan smrti, dok su ljudska bića konačna, ranjiva i smrtna.

Izazov se pojavljuje kada se puna božanstvenost i puna ljudskost sjedine u jednoj osobi. Kritičari se pitaju kako vječno i samodostatno biće može istovremeno iskusiti glad, san, patnju i smrt. Problem se često formulira kao napetost između transcendencije i utjelovljenja, a ne kao jednostavna teološka misterija.
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
Islam predstavlja koncept Boga koji je strogo transcendentan i nedjeljiv. Kuran sažima ovaj koncept u suri Al-Ikhlas:

"Reci: On je Allah, Jedan. Allah, Utočište vječno. Nije rodio i nije rođen, i nitko Mu ravan nije." (Kuran 112:1–4)

Stvoritelj je u islamu potpuno izvan materijalnog oblika i razlikuje se od stvorenja:

"Ništa nije kao On." (Kuran 42:11)

Bog nije ograničen vremenom, prostorom ili fizičkim ograničenjima. Kuran također navodi:

"Ne obuzima Ga ni drijemež ni san." (Kuran 2:255)

U islamskoj teologiji, Bog se shvaća kao samopostojeći, vječan, neovisan i apsolutno različit od stvaranja.
      `,

            objectiveCritique: `
Iz islamske filozofske perspektive, ovo razumijevanje nastoji očuvati apsolutnu transcendenciju izbjegavanjem antropomorfizma i utjelovljenja. Koncept ima za cilj uskladiti Stvoritelja s pojmom neovisnog i nužnog Prvog uzroka koji nije podložan ograničenjima stvorenog postojanja.
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

        title: 'Koji je način i svrha života?',

        intro: `
Ako postoji mudar Stvoritelj, bilo bi neracionalno pretpostaviti da je čovječanstvo ostavljeno bez smjernica koje objašnjavaju svrhu postojanja, moralnu odgovornost i načela prema kojima treba živjeti. Baš kao što složeni sustav zahtijeva upute od svog dizajnera, religije tvrde da čovječanstvu pružaju okvir za razumijevanje zašto smo ovdje i kako trebamo živjeti.
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',

            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
Istočne tradicije, poput budizma i hinduizma, obično se oslanjaju na filozofska učenja, meditativne prakse i razmišljanja koje su razvili duhovni učitelji i mudraci.

U budizmu, krajnji cilj je oslobođenje od patnje i bijeg iz kruga ponovnog rođenja postizanjem Nirvane, stanja transcendencije i unutarnjeg oslobođenja.

U mnogim hinduističkim tradicijama, cilj je duhovno oslobođenje (Moksha), postignuto kroz predanost, znanje, meditaciju ili disciplinirano djelovanje.
      `,

            objectiveCritique: `
Kritičari tvrde da su ti sustavi prvenstveno filozofski i iskustveni, a ne utemeljeni na provjerljivoj objavi koja dolazi od transcendentnog Stvoritelja.

Neki također tvrde da jak naglasak na odvojenosti od svjetovnog života, monaštvu i odricanju može doći u sukob s aspektima ljudske prirode koji potiču društveni razvoj, znanstveni napredak, obiteljski život i izgradnju civilizacija.
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
U judaizmu je način života ukorijenjen u zakonu saveza objavljenom Mojsiju i očuvanom unutar hebrejske Biblije (Tanakh). Religijski okvir usredotočen je na poslušnost božanskim zapovijedima i održavanje odnosa saveza između Boga i Djece Izraela.
      `,

            objectiveCritique: `
Kritičari tvrde da se judaizam povijesno razvio prvenstveno kao tradicija usredotočena na savez vezan uz određeni narod, a ne kao univerzalno misionarska religija namijenjena cijelom čovječanstvu.

S gledišta kritike teksta, neki znanstvenici — uključujući Richarda Elliotta Friedmana i druge — tvrde da je Tora prolazila kroz procese kompilacije i redakcije tijekom stoljeća, posebno oko i nakon babilonskog izgnanstva. To je navelo neke kritičare da se zapitaju može li se tekst smatrati savršeno očuvanom objavom koja je izravno prenesena u svom izvornom obliku.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kršćanstvo',

            answerNature: `
Kršćanstvo naučava da je središnji problem čovječanstva grijeh i odvojenost od Boga, a da se spasenje postiže vjerom u Isusovu žrtvenu smrt i uskrsnuće. Svrha života se stoga razumije kroz pomirenje s Bogom i duhovnu transformaciju.
      `,

            objectiveCritique: `
Povijesno gledano, znanstvenici primjećuju da ne postoji sačuvan izvorni rukopis Evanđelja na aramejskom jeziku kojim je Isus govorio. Najstariji sačuvani tekstovi su grčki rukopisi napisani desetljećima nakon Isusova života. Kritičari teksta, poput Barta Ehrmana, dokumentirali su postojanje brojnih rukopisnih varijacija među najranijim kopijama Novog zavjeta.

Kritičari također tvrde da je kršćanstvo povijesno stavljalo veći naglasak na duhovno i osobno spasenje nego na razvoj cjelovitog pravnog ili političkog okvira koji bi regulirao gospodarstvo, kazneno pravo ili državnu upravu. Neki povjesničari sugeriraju da je to pridonijelo konačnom odvajanju religije od državne vlasti u mnogim zapadnim društvima.
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
Islam predstavlja sveobuhvatno razumijevanje ljudske svrhe koje integrira duhovnu predanost i svjetovnu odgovornost.

Kuran navodi:

"Džine i ljude sam stvorio samo zato da Me obožavaju." (Kuran 51:56)

U islamskoj misli, obožavanje nije ograničeno na rituale, već uključuje ispravno djelovanje, pravdu, etičko ponašanje, potragu za znanjem i pozitivan doprinos društvu.

Islamska učenja nastoje uravnotežiti duhovni rast s praktičnim sudjelovanjem u obiteljskom životu, gospodarstvu, upravljanju, milosrđu i društvenoj odgovornosti.
      `,

            objectiveCritique: `
Iz islamske perspektive, Kuran predstavlja jedinstveno očuvanu objavu. Muslimani tvrde da je njegov tekst ostao nepromijenjen i da se kontinuirano prenosio kako u pisanim rukopisima tako i usmenim pamćenjem od prvih generacija islama.

Često citirani primjeri uključuju drevne rukopise poput rukopisa Kurana iz Birminghama i široko rasprostranjenu tradiciju usmenog pamćenja koju održavaju milijuni muslimana diljem svijeta.

Islamsko pravo (Šerijat) također se predstavlja kao cjelovit etički i pravni okvir koji se bavi područjima kao što su financije, milosrđe, obiteljsko pravo, kazneno pravo i upravljanje. Zagovornici tvrde da to islamu daje karakteristike cjelovitog moralnog i civilizacijskog sustava, a ne samo čisto duhovne tradicije.
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

        title: 'Što se događa nakon Konačne postaje?',

        subtitle: 'Sudbina, pravda i zagrobni život',

        intro: `
Bez postojanja vrhovne pravde nakon smrti, život se može činiti duboko proizvoljnim i moralno neriješenim. Tirani mogu umrijeti bez polaganja računa, dok žrtve mogu napustiti svijet bez dobivanja pravde. To postavlja jedno od najstarijih filozofskih pitanja čovječanstva: je li smrt kraj ili postoji konačni sud izvan zemaljskog života?
  `,

        religions: {
          eastern: {
            title: 'Istočne religije',

            examples: ['Hinduizam', 'Budizam'],

            answerNature: `
Mnoge istočne tradicije prihvaćaju koncept reinkarnacije, gdje duša ili tijek svijesti prolazi kroz ponavljajuće cikluse ponovnog rođenja. Buduće stanje osobe određeno je karmom: moralnim posljedicama prošlih postupaka.
      `,

            objectiveCritique: `
Kritičari tvrde da reinkarnacija postavlja filozofska pitanja u vezi s pravdom i odgovornošću. Ako osoba trpi posljedice u novom životu zbog postupaka počinjenih u prethodnom postojanju kojih se ne može svjesno sjećati, tada edukativna i moralna svrha kazne postaje teška za razumjeti.

Iz ove perspektive, odgovornost bez svjesnog sjećanja može se činiti nepovezanom sa značajnom moralnom odgovornošću.
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
Materijalistički i ateistički pogledi na svijet općenito smatraju smrt krajem svjesnog postojanja. Ljudska bića shvaćena su kao biološki organizmi čija svijest prestaje u potpunosti nakon fizičke smrti.
      `,

            objectiveCritique: `
Kritičari tvrde da se strogi materijalizam bori pružiti objektivnu osnovu za moral, pravdu i temeljni smisao. Ako i tlačitelj i žrtva na kraju nestanu u ništavilu bez polaganja računa, tada se koncepti poput žrtve, moralne dužnosti i pravde mogu na kraju činiti subjektivnima ili društvenim konstrukcijama, umjesto da su univerzalno obvezujući.

Međutim, zagovornici sekularne etike tvrde da moral i dalje može nastati kroz razum, empatiju i društvenu odgovornost bez vjerovanja u zagrobni život.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kršćanstvo',

            answerNature: `
Kršćanstvo naučava da se spasenje i vječni život postižu vjerom u Isusa Krista i prihvaćanjem njegove žrtvene pomirbe za grijehe čovječanstva. Raj i vječno spasenje stoga su usko povezani s vjerom u Krista i božanskom milosti.
      `,

            objectiveCritique: `
Kritičari se pitaju kako se spasenje koje se temelji prvenstveno na vjerovanju odnosi na načela univerzalne pravde. Filozofski gledano, neki tvrde da ovaj okvir može implicirati da bi moralno ispravna osoba koja se iskreno bori s prihvaćanjem određenih teoloških doktrina mogla biti uskraćena za spasenje, dok bi druga osoba koja je počinila teške prijestupe, ali je prihvatila vjeru malo prije smrti, ipak mogla postići vječnu nagradu.

Kršćanski teolozi često odgovaraju da spasenje uključuje i iskrenu vjeru i autentično pokajanje, a ne samo verbalno vjerovanje.
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
Islam predstavlja zagrobni život kao sustav potpune moralne odgovornosti i božanske pravde.

Kuran navodi:

"Nijedan grješnik neće tuđi grijeh nositi." (Kuran 6:164)

Spasenje je u islamu dosljedno povezano i s vjerom i s ispravnim djelovanjem:

"One koji vjeruju i čine dobra djela..." (ponavlja se kroz cijeli Kuran, uključujući 2:25)

Islam nauči da je zemaljski život privremeni test, a ne konačno mjesto nagrade ili kazne:

"Onaj koji je stvorio smrt i život da bi vas iskušao, koji će od vas bolja djela činiti." (Kuran 67:2)
      `,

            objectiveCritique: `
U islamskoj teologiji, Sudnji dan predstavlja vrhovni sud pravde gdje se za svaki postupak, koliko god mali bio, polažu računi.

Kuran navodi:

"Onaj ko bude uradio koliko trun dobra – vidjet će ga, a onaj ko bude uradio koliko trun zla – vidjet će ga." (Kuran 99:7–8)

Ovaj okvir nastoji očuvati i individualnu odgovornost i apsolutnu pravdu, nudeći istovremeno moralnu sigurnost da nijedan čin tlačenja ili dobrote na kraju ne nestaje bez posljedica.
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
      navbar: 'Usporedba religija',
      hero: {
        subtitle:
          'Mirno, ali duboko filozofsko putovanje koje istražuje najveća pitanja čovječanstva: Stvoritelj, svrha postojanja, moral i što nas čeka nakon smrti.',

        subtitleHighlight:
          'Stvoritelj, svrha postojanja, moral i što nas čeka nakon smrti.',

        scrollIndicator: 'Scrollajte dolje za početak putovanja',
      },

      storySection: {
        badge: 'Analogija vlaka',

        titleLine1: 'Prije nego što postavite pitanja',
        titleLine2: 'O religijama...',

        intro:
          'Svako ljudsko biće na kraju dolazi do trenutka tišine u kojem distrakcije nestaju – i najdublja pitanja konačno izlaze na površinu.',

        ending: 'Ovaj vlak je planet Zemlja,',
        ending2: 'a putovanje je vaš život.',
      },

      coreQuestions: {
        sectionLabel: 'Glavna sekcija',
        title: 'Temeljna pitanja',

        answerNatureTitle: 'Priroda odgovora',

        philosophicalDiscussionTitle: 'Filozofska rasprava',

        referencesTitle: 'Reference',
      },

      futureResearch: {
        sectionLabel: 'Buduća istraživanja',

        title: 'Ostala pitanja',

        loaderBadge: 'Još pitanja uskoro',

        headingLine1: 'Putovanje',
        headingLine2: 'se nastavlja...',

        description:
          'Dodatna filozofska i teološka istraživanja trenutno se proučavaju i pripremaju s istim strukturiranim komparativnim pristupom.',

        topics: [
          'Moral',
          'Znanost',
          'Čuda',
          'Svijest',
          'Slobodna volja',
          'Patnja',
          'Povijesno očuvanje',
          'Proročanstva',
          'Ljudska priroda',
          'Smisao',
          'Civilizacije',
          'Etika',
        ],

        footer: 'Nove sekcije bit će uskoro dodane',
      },

      imageAlt: {
        hero: 'Usporedba religija',
      },
    },
  },
};
