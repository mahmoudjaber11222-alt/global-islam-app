export default {
  splash: {
    version: 'wersja',
    practice: 'praktyka',
    share: 'udostępnij',
    logo: 'globalny islam',
  },
  homeApp: {
    north: 'północ',
    east: 'wschód',
    west: 'zachód',
    south: 'południe',
    active: 'kibla aktywna',
    disabled: 'Otwórz kompas kibla',
    welcome: 'Witaj ponownie',
    greet: 'Assalamu Alaikum',
    hour: 'godzina',
    minute: 'minuta',
    second: 'sekunda',
    toLeft: 'po Twojej lewej',
    toRight: 'po Twojej prawej',
    fromNorth: 'od północy',
  },
  quranApp: {
    medinan: 'Medynańska',
    meccan: 'Mekkańska',
    arabicName: 'nazwa po arabsku',
    englishName: 'nazwa po angielsku',
    details:
      'Wybierz werset, aby zobaczyć jego tłumaczenie i tafsir (wyjaśnienie)',
    selectRes: 'Wybierz źródło',
    retry: 'spróbuj ponownie',
    loadErr1: 'Nie można załadować wyjaśnienia. Spróbuj ponownie.',
    loadErr2: 'Nie udało się pobrać',
    author: 'autor',
    explain: 'Wyjaśnienie',
  },
  qiblaApp: {
    compass: 'Kompas kibla',
    accuracy: 'dokładność',
    offline: 'GPS offline',
    tracking: 'Śledzenie GPS',
    aligned:
      'Jesteś zwrócony w stronę kibli. Trzymaj stabilnie dla dokładnego kierunku modlitwy.',
    notAligned:
      'Trzymaj urządzenie płasko i obracaj, aż strzałka wskaże kiblę.',
    heading: 'Kierunek urządzenia',
    turn: 'obróć',
    alignedQibla: 'Wyrównane z kiblą',
  },
  aiApp: {
    answer: 'odpowiedź',
  },
  prayerApp: {
    locationRequired:
      'Usługi lokalizacyjne są wymagane dla dokładnych czasów modlitw.',
    schedule: 'Harmonogram modlitw',
    refresh: 'odśwież',
    sunrise: 'Wschód słońca',
    upcoming: 'Nadchodząca modlitwa',
  },
  settingsApp: {
    reciterTitle: 'Recytant Adhanu',
    reciterSub: 'Wybierz preferowany głos',
    notSelected: 'nie wybrano',
    preview: 'podgląd',
    cancel: 'anuluj',
    muezzin: 'Muezzin',
    preNot: 'Powiadomienie przed Adhanem',
    preNotDet: 'Powiadom 15 minut przed czasem modlitwy',
    theme: 'Tryb ciemny',
    dark: 'Obecnie ciemny motyw',
    light: 'Obecnie jasny motyw',
    about: 'O aplikacji',
    selectReciter: 'Wybierz recytanta',
  },
  athan: {
    mainTitle: 'ADHAN · WEZWANIE DO MODLITWY',
    stop: 'Zatrzymaj Adhan',
    error: 'Nie można załadować audio Adhanu',
    prayerTime: 'Czas modlitwy',
    play: 'odtwórz',
    pause: 'pauza',
    dismiss: 'zamknij',
  },
  athkarApp: {
    completed: 'Ukończone',
    remaining: 'pozostało',
    reset: 'resetuj',
    athkar: 'Adzkar',
    mention: 'dikr',
    descM: 'Rozpocznij dzień od błogosławieństw',
    descE: 'Zakończ dzień pod ochroną',
    remmember: 'Codzienne Wspomnienie',
    cat: 'kategorie próśb',
    category: 'Kategoria',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Szukaj hadisów...',
      button: 'Szukaj',
      books: {
        label: 'Księga',
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
      title: 'Aktualny język nie jest jeszcze obsługiwany',
      msg: 'Ten język nie jest obecnie obsługiwany przez bazę hadisów.',
      description:
        'Automatycznie wybrano język angielski jako zastępczy, abyś mógł nadal bezproblemowo przeglądać i wyszukiwać hadisy. Możesz także wypróbować Tryb Zaawansowany dla szerszego wsparcia wielojęzycznego i lepszych wyników.',
    },

    initialPlaceholder:
      'Wyszukaj hadis, aby zobaczyć szczegóły takie jak ocena, narratorzy i odniesienia',

    loading: {
      label: 'Ładowanie hadisów...',
    },

    hadithCard: {
      showMore: 'Pokaż więcej',
      showLess: 'Pokaż mniej',

      header: {
        hadithPrefix: 'Hadis #',
        referencesTitle: 'Odniesienia',
        referenceLabel: 'Odniesienie',
        inBookReference: 'Odniesienie w księdze',
        arabicReference: 'Odniesienie arabskie',
      },
    },

    emptyState: 'Nie znaleziono hadisów',

    pagination: {
      prev: 'Poprzednia',
      next: 'Następna',
    },
  },

  switch: {
    title: {
      advanced: 'Tryb zaawansowany',
      normal: 'Tryb normalny',
    },

    description: {
      advanced: 'Wyszukiwanie semantyczne z głębszym zrozumieniem',
      normal: 'Szybkie wyszukiwanie oparte na filtrach',
    },
  },

  navbar: {
    routes: {
      home: 'Strona główna',
      prayers: 'Modlitwy',
      quran: 'Koran',
      athkar: 'Adhkar',
      articles: 'Artykuły',

      articlesNested: {
        islamicHistory: 'Historia islamu',
        prayerInIslam: 'Modlitwa w islamie',
        womenInIslam: 'Kobiety w islamie',
        purification: 'Oczyszczenie i ablucja',
      },

      learn: 'Nauka',
      learnNested: {
        quranTajweed: 'Nauka Koranu i Tajwidu',
        arabic: 'Nauka języka arabskiego',
      },

      dashboard: 'Panel',
      aiAssistant: 'Asystent AI',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Odkrywaj islam z',
      clarity: 'Przejrzystością',
      peace: '& Pokojem',
    },

    description:
      'Ucz się, zadawaj pytania i odkrywaj autentyczne zrozumienie dzięki AI i wiedzy prowadzonej, zaprojektowanej dla jasności i refleksji.',

    actions: {
      introductionToIslam: 'Poznaj islam',
      islamQA: 'Pytania i odpowiedzi o islamie (Asystent AI)',
      continueWebsite: 'Przejdź do strony',
    },
  },
  learning: {
    quran: {
      title: 'Nauka Koranu i Tadżwidu',
      subtitle:
        'Popraw swoją recytację Koranu i poznawaj zasady Tadżwidu krok po kroku.',
    },
    arabic: {
      title: 'Nauka arabskiego',
      subtitle:
        'Rozwijaj swoje umiejętności języka arabskiego dzięki jasnym i uporządkowanym lekcjom.',
    },
    default: {
      title: 'Sekcja nauki',
      subtitle:
        'Odkrywaj materiały edukacyjne stworzone, aby wzmacniać twoją wiedzę i zrozumienie.',
    },
  },
  explore: {
    searchBar: {
      title: 'Szukaj w zbiorach hadisów',

      subtitle:
        'Szukaj naturalnie, używając tematów, znaczeń lub pełnych zdań.',

      placeholder: 'Przykład: hadis o dobroci wobec rodziców',

      button: 'Szukaj',
    },

    header: {
      title: 'Biblioteka wyszukiwania hadisów',
      subtitle:
        'Odkrywaj autentyczne hadisy natychmiast w nowoczesnym doświadczeniu czytania.',
    },

    content: {
      heroTitle:
        'Odkrywaj autentyczne zbiory hadisów dzięki zaawansowanemu wyszukiwaniu',

      loading: {
        label: 'Wyszukiwanie zbiorów hadisów...',
      },

      error: {
        title: 'Nie można wczytać hadisu',
        message:
          'Nie udało się pobrać przekazów. Sprawdź połączenie i spróbuj ponownie.',
      },

      empty: {
        title: 'Nie znaleziono pasujących hadisów',
      },

      card: {
        reference: 'Odniesienie do hadisu',
        readMore: 'Przeczytaj cały hadis',
      },
    },
  },

  home: {
    news: {
      title: 'Aktualności społeczności muzułmańskiej',
      subtitle: 'Bądź na bieżąco z ważnymi informacjami ze świata islamu',
    },

    prayer: {
      title: 'Odliczanie do modlitwy',
      subtitle: 'Przygotuj się do następnej modlitwy',
      button: 'Zobacz godziny modlitw',
      nextPrayerLabel: 'Następna modlitwa o:',
    },

    athkar: {
      title: 'Poranne i wieczorne adhkary',
      subtitle: 'Codzienne wspomnienia, które utrzymują serce w łączności',
      button: 'Zobacz więcej adhkar',
    },

    qibla: {
      title: 'Kierunek kibla',
      subtitle: 'Znajdź kierunek Kaaby gdziekolwiek jesteś',
      locationLoading: 'Pobieranie lokalizacji...',
      enableLocation: 'Włącz lokalizację',
      refreshLocation: 'Odśwież kierunek kibla',

      warning:
        'Jeśli urządzenie nie obsługuje czujników orientacji, dokładność kompasu może być ograniczona.',

      errorTitle: 'Odmowa dostępu',
    },
  },

  prayers: {
    nextLabel: 'Następna modlitwa o',

    header: {
      title: 'Godziny modlitw',
      subtitle: 'Codzienny moment połączenia ze Stwórcą',
    },

    times: {
      Fajr: 'Fadżr',
      Dhuhr: 'Zuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },

    qibla: {
      loading: 'Pobieranie lokalizacji...',
      warning:
        'Jeśli system operacyjny nie obsługuje orientacji, wpłynie to na obliczenia kompasu.',
      errorTitle: 'Odmowa dostępu',
      enableLocation: 'Włącz lokalizację',
      refreshLocation: 'Odśwież kierunek kibla',
    },

    list: {
      warning:
        'Godziny mogą się nieznacznie różnić w zależności od metody obliczeń.',
    },
  },

  quran: {
    header: {
      title: 'Koran',
      subtitle: 'Twój codzienny towarzysz recytacji i refleksji',
    },

    search: {
      noResultTitle: 'Brak danych',
      noResultMessage: 'Brak danych do wyświetlenia',
    },
  },

  athkar: {
    title: 'Codzienne wspomnienia',
    subtitle: 'Zachowaj regularność w codziennym zikrze i refleksji',
  },

  ai: {
    header: {
      title: 'Globalny Asystent AI Islamu',
      subtitle:
        'Otrzymuj jasne odpowiedzi islamskie oparte na Koranie, Sunnie i wiarygodnych uczonych',
    },

    loading: {
      label: 'Ładowanie...',
    },

    error: {
      title: 'Limit zapytań osiągnięty',
      message:
        'Nie można teraz uzyskać dostępu do usługi wiedzy. Spróbuj ponownie później.',
    },

    input: {
      placeholder: 'Zadaj pytanie o islam...',
    },

    suggestions: [
      'Czy mogę się modlić bez wudu?',
      'Czy odsetki (riba) są całkowicie zakazane?',
      'Zasady pracy w niehalalowym środowisku',
      'Czy mogę się modlić w podróży?',
      'Czy używanie perfum podczas modlitwy jest dozwolone?',
      'Co unieważnia modlitwę?',
      'Zasady opóźniania modlitwy z powodu pracy',
    ],

    footer: {
      disclaimer:
        'Ten asystent AI został zaprojektowany, aby dostarczać odpowiedzi oparte na wiarygodnych źródłach wiedzy, w tym islamskich odniesieniach i zweryfikowanych materiałach edukacyjnych.',

      note: 'Odpowiedzi mają charakter informacyjny i nie zastępują w razie potrzeby opinii uczonych.',
    },
  },

  footer: {
    disclaimer:
      'Wszystkie wyświetlane treści pochodzą z oryginalnych, wiarygodnych źródeł. Wszelkie uwagi i zgłoszenia błędów są mile widziane.',

    tagline: 'Stworzone z troską o autentyczne treści islamskie',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Wróć',
    },

    sections: {
      hadithText: 'Tekst hadisu',
      arabicText: 'Tekst arabski',
      explanation: 'Wyjaśnienie',
      authentication: 'Autentyczność',
      lessons: 'Korzyści i nauki',
    },
  },
  other: {
    note: 'Uwaga',
    theLanguage: 'język',
    part: 'Część',
    translation: 'Tłumaczenie',
    verse: 'Werset',
    chapter: 'Rozdział',
    page: 'Strona',
    breakingNews: 'Najnowsze wiadomości',
  },
  dailyRemined: {
    title: 'Światło na Dziś',
    subtitle:
      'Zatrzymaj się i zastanów nad wersetem oraz hadisem wybranymi na Twój dzień.',
  },
  baseFooter: {
    contact: {
      title: 'Skontaktuj się z nami',
      name: 'Twoje imię',
      email: 'Twój e-mail',
      msg: 'Twoja wiadomość',
      sendMsg: 'Wyślij wiadomość',
    },
    followUs: 'Obserwuj nas',
    QA: 'Szybki dostęp',
    logoB:
      'Koran, Hadisy, czasy modlitw, asystent AI i codzienne islamskie narzędzia—all na jednej nowoczesnej platformie.',
    whatsapp: 'Czat na WhatsApp',
    rsr: 'Wszelkie prawa zastrzeżone',
  },
  compareRelg: {
    note: `Ta strona przedstawia porównawczy przegląd głównych religii świata. Z perspektywy islamskiej Koran potwierdza, że wcześniejsze Boskie objawienia zostały zesłane dawnym narodom, lecz z biegiem czasu uległy one ludzkim zniekształceniom (tahrif). Koran stwierdza: „Zaprawdę, My wysłaliśmy Upomnienie i zaprawdę, My nad nim czuwamy!” (15:9). Na tej stronie analizujemy owe różnice w świetle dowodów historycznych oraz tekstualnych.`,
    mainTitle: 'Racjonalna podróż przez religie',
    headerTitle: 'Pytania definiujące ludzką egzystencję',
    story: `
Wyobraź sobie, że nagle otwierasz oczy i uświadamiasz sobie, że siedzisz w luksusowym pociągu, który z ogromną prędkością pędzi przez niekończącą się noc. Wokół ciebie znajduje się wszelki wyobrażalny komfort: wystawne posiłki serwowane na eleganckich stołach, ekrany wyświetlające filmy i jedwabne poduszki na miękkich siedzeniach.

Z niepokojem pytasz pasażera obok:
"Gdzie jesteśmy? Kto nas wsadził do tego pociągu? I dokąd zmierzamy?"

Ale najbardziej zaskakująca jest ich reakcja.

Jeden odpowiada chłodno:
"Co cię to obchodzi? Po prostu ciesz się jedzeniem, jest niesamowite."

Inny odpowiada drwiąco:
"Dlaczego męczysz się takimi pytaniami? Usiądź wygodnie i oglądaj film."

Wszyscy wokół ciebie zatracają się w przyjemnościach podróży, ale ciebie ogarnia głęboki lęk, ponieważ wiesz, że ten pociąg pędzi do stacji końcowej – miejsca, w którym każdy pasażer w końcu musi wysiąść.

W tym momencie pojawia się zasadnicze pytanie:

Czy oddasz się luksusowi i rozrywce podróży, czy będziesz szukać odpowiedzi na trzy najgłębsze pytania:

Kim jest Stwórca?
Dlaczego tu jesteśmy?
I co czeka nas na końcu?

Ten pociąg to planeta Ziemia, a podróż to twoje życie.

Ponieważ ludzie nie posiadają tych odpowiedzi z natury, religie pojawiły się jako "instrukcje obsługi", z których każda twierdzi, że pochodzi bezpośrednio od projektanta pociągu.

Poddajmy więc te instrukcje spokojnej i racjonalnej ocenie.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Kim jest Stwórca?',

        intro: `
Z filozoficznego i logicznego punktu widzenia Stwórca jako "Pierwsza Przyczyna" wszechświata musi być całkowicie transcendentny, znajdujący się poza granicami materii, czasu i przestrzeni. Gdyby Stwórca podlegał głodowi, zmęczeniu, ograniczeniom fizycznym lub ramom przestrzennym, taka istota logicznie straciłaby status absolutnego Stwórcy i stałaby się istotą stworzoną i zależną. Istota zależna nie może być źródłem całego istnienia.
  `,

        religions: {
          eastern: {
            title: 'Religie Wschodu',
            examples: ['Hinduizm', 'Buddyzm'],

            answerNature: `
W swojej najwcześniejszej formie, Theravada, buddyzm jest zazwyczaj nieteistyczny; nie koncentruje się na istnieniu boga stwórcy, lecz postrzega istnienie jako wynik wiecznych procesów naturalnych, przyczynowości i współzależnych praw.

Hinduizm natomiast często mówi o fundamentalnej rzeczywistości metafizycznej zwanej "Brahmanem". Jednak w praktyce kultu ta najwyższa rzeczywistość przejawia się poprzez niezliczone formy i bóstwa, w tym postacie ludzkie i zwierzęce, takie jak Wisznu, Śiwa i Kali.
      `,

            objectiveCritique: `
Z filozoficznego punktu widzenia buddyzm stoi przed wyzwaniem wyjaśnienia, w jaki sposób wysoce uporządkowany wszechświat, rządzony przez spójne prawa i fizyczną precyzję, może powstać bez pierwotnej świadomej przyczyny.

W tradycjach hinduistycznych, które akceptują inkarnacje boskie i fizyczne wizerunki, boskość jest kojarzona z ograniczeniami, konfliktami, głodem, śmiercią i formą materialną. Bóstwo, które może być fizycznie przedstawione, wcielone lub podlega procesom naturalnym, z racjonalnej perspektywy wydaje się raczej częścią stworzenia niż istotą, która całkowicie je przewyższa.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Judaizm',

            answerNature: `
Judaizm potwierdza wiarę w Stwórcę, który jest wywyższony ponad bożki i fizyczne wizerunki. Bóg (JHWH) jest rozumiany jako Stwórca nieba i ziemi i jest zasadniczo odmienny od Swojego stworzenia.
      `,

            objectiveCritique: `
Problem filozoficzny, który się tu pojawia, nie dotyczy samej transcendencji, ale granic uniwersalności Boga, co widać w niektórych fragmentach Biblii Hebrajskiej. Pewne teksty przedstawiają Boga w relacji przymierza, silnie nastawionego na dzieci Izraela, co przez krytyków jest interpretowane jako wykluczenie etniczne.

Ponadto niektóre fragmenty używają ludzkiego języka do opisu Boga, jak "żałowanie" stworzenia człowieka (Rdz 6,6) czy "odpoczynek" siódmego dnia po stworzeniu (Wj 31,17). Krytycy twierdzą, że takie opisy budzą pytanie, czy te cechy należy rozumieć dosłownie, czy metaforycznie.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Chrześcijaństwo',

            answerNature: `
Chrześcijaństwo naucza wiary w jednego Boga poprzez doktrynę Trójcy Świętej: Ojca, Syna i Ducha Świętego. Zgodnie z doktryną wcielenia, druga osoba Trójcy – Syn – weszła w historię ludzkości w osobie Jezusa Chrystusa, który został ukrzyżowany i zmarł dla zbawienia ludzkości.
      `,

            objectiveCritique: `
Filozoficznie krytycy twierdzą, że doktryna wcielenia tworzy napięcie między cechami boskimi a ludzkimi. Tradycyjnie Bóg opisywany jest jako wieczny, nieograniczony i ponad śmiercią, podczas gdy ludzie jako skończeni, słabi i śmiertelni.

Wyzwanie pojawia się, gdy pełna boskość i pełne człowieczeństwo są połączone w jednej osobie. Krytycy pytają, jak wieczna i niezależna istota może jednocześnie doświadczać głodu, snu, cierpienia i śmierci. Problem ten często formułowany jest jako napięcie między transcendencją a wcieleniem, a nie tylko jako tajemnica teologiczna.
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
Islam prezentuje koncepcję Boga, który jest całkowicie transcendentny i niepodzielny. Koran podsumowuje tę koncepcję w Surze Al-Ikhlas:

"Powiedz: On jest Bogiem, Jedynym. Bogiem Wiekuistym. Nie zrodził i nie został zrodzony. I nikt nie jest Mu równy." (Koran 112:1–4)

W islamie Stwórca jest całkowicie poza formą materialną i jest odmienny od stworzenia:

"Nie ma nic podobnego do Niego." (Koran 42:11)

Bóg nie jest związany czasem, przestrzenią ani ograniczeniami fizycznymi. Koran stwierdza również:

"Nie chwyta Go ani drzemka, ani sen." (Koran 2:255)

W teologii islamskiej Bóg rozumiany jest jako istota niezależna, wieczna, samodzielna i absolutnie odrębna od stworzenia.
      `,

            objectiveCritique: `
Z islamskiej perspektywy filozoficznej koncepcja ta dąży do zachowania absolutnej transcendencji poprzez unikanie antropomorfizmu i wcielenia. Dąży ona do zharmonizowania Stwórcy z ideą niezależnej i koniecznej Pierwszej Przyczyny, która nie podlega ograniczeniom stworzonego istnienia.
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

        title: 'Jaki jest sposób życia i cel?',

        intro: `
Jeśli istnieje mądry Stwórca, nielogiczne byłoby sądzić, że ludzkość została pozostawiona bez wytycznych wyjaśniających cel istnienia, odpowiedzialność moralną i zasady, którymi należy się kierować. Tak jak złożone systemy wymagają instrukcji od projektanta, religie twierdzą, że zapewniają ramy pomagające człowiekowi zrozumieć, dlaczego tu jesteśmy i jak powinniśmy żyć.
  `,

        religions: {
          eastern: {
            title: 'Religie Wschodu',

            examples: ['Hinduizm', 'Buddyzm'],

            answerNature: `
Tradycje Wschodu, takie jak buddyzm i hinduizm, zazwyczaj opierają się na naukach filozoficznych, praktykach medytacyjnych i refleksjach wypracowanych przez nauczycieli duchowych i mędrców.

W buddyzmie ostatecznym celem jest wyzwolenie z cierpienia i ucieczka z cyklu odrodzeń poprzez osiągnięcie Nirwany – stanu transcendencji i wewnętrznego wyzwolenia.

W wielu tradycjach hinduistycznych celem jest wyzwolenie duchowe (Moksza), osiągane poprzez oddanie, wiedzę, medytację lub zdyscyplinowane działanie.
      `,

            objectiveCritique: `
Krytycy twierdzą, że systemy te są głównie filozoficzne i oparte na doświadczeniu, a nie na weryfikowalnym objawieniu pochodzącym od transcendentnego Stwórcy.

Niektórzy argumentują również, że silny nacisk na wycofanie się z życia doczesnego, życie klasztorne i wyrzeczenie się siebie może kłócić się z aspektami ludzkiej natury, które stymulują rozwój społeczny, postęp naukowy, życie rodzinne i budowanie cywilizacji.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Judaizm',

            answerNature: `
W judaizmie sposób życia jest zakorzeniony w prawie przymierza objawionym Mojżeszowi i zachowanym w Biblii Hebrajskiej (Tanach). Ramy religijne koncentrują się na posłuszeństwie przykazaniom Bożym i utrzymaniu relacji przymierza między Bogiem a dziećmi Izraela.
      `,

            objectiveCritique: `
Krytycy argumentują, że judaizm historycznie rozwinął się jako tradycja ukierunkowana na przymierze z konkretnym narodem, a nie jako uniwersalna religia misyjna dla całej ludzkości.

Z perspektywy krytyki tekstu niektórzy uczeni – w tym Richard Elliott Friedman – twierdzą, że Tora podlegała procesom kompilacji i redakcji przez wieki, zwłaszcza w okresie niewoli babilońskiej i po niej. Prowadzi to niektórych krytyków do powątpiewania, czy tekst można uznać za doskonale zachowane objawienie w pierwotnej formie.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Chrześcijaństwo',

            answerNature: `
Chrześcijaństwo naucza, że centralnym problemem ludzkości jest grzech i oddzielenie od Boga, a zbawienie osiąga się przez wiarę w śmierć Jezusa i Jego zmartwychwstanie. Dlatego cel życia jest rozumiany poprzez pojednanie z Bogiem i przemianę duchową.
      `,

            objectiveCritique: `
Historycznie uczeni zauważają, że nie zachowały się oryginalne rękopisy ewangelii w języku aramejskim (języku Jezusa). Najstarsze zachowane teksty to rękopisy greckie, spisane dekady po życiu Jezusa. Krytycy tekstu, jak Bart Ehrman, udokumentowali niezliczone warianty wczesnych kopii Nowego Testamentu.

Krytycy argumentują również, że chrześcijaństwo historycznie kładło większy nacisk na zbawienie duchowe i osobiste niż na tworzenie kompleksowych ram prawnych lub politycznych dla gospodarki, prawa karnego czy zarządzania państwem. Niektórzy historycy uważają, że przyczyniło się to do ostatecznego rozdziału kościoła od państwa w wielu społeczeństwach zachodnich.
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
Islam oferuje kompleksowe zrozumienie celu człowieka poprzez integrację oddania duchowego i odpowiedzialności doczesnej.

Koran stwierdza:

"Stworzyłem dżinny i ludzi tylko po to, aby Mi służyli." (Koran 51:56)

W myśli islamskiej uwielbienie nie ogranicza się do rytuałów, ale obejmuje prawe działanie, sprawiedliwość, zachowanie etyczne, poszukiwanie wiedzy i pozytywny wkład w społeczeństwo.

Nauki islamskie dążą do równowagi między rozwojem duchowym a praktycznym udziałem w życiu rodzinnym, gospodarce, zarządzaniu, dobroczynności i odpowiedzialności społecznej.
      `,

            objectiveCritique: `
Z perspektywy islamskiej Koran stanowi unikalnie zachowane objawienie. Muzułmanie twierdzą, że tekst pozostał niezmieniony i jest nieprzerwanie przekazywany poprzez rękopisy pisemne oraz pamięciowe uczenie się od wczesnych pokoleń islamu.

Często cytowanymi przykładami są starożytne teksty, takie jak rękopis Koranu z Birmingham oraz ogromna tradycja pamięciowego uczenia się, podtrzymywana przez miliony muzułmanów na całym świecie.

Prawo islamskie (Szariat) jest również przedstawiane jako kompleksowe ramy etyczne i prawne, obejmujące takie dziedziny jak finanse, dobroczynność, prawo rodzinne, prawo karne i zarządzanie. Zwolennicy argumentują, że nadaje to islamowi cechy kompletnego systemu moralnego i cywilizacyjnego, a nie tylko tradycji duchowej.
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

        title: 'Co dzieje się po Stacji Końcowej?',

        subtitle: 'Los, sprawiedliwość i życie wieczne',

        intro: `
Bez istnienia ostatecznej sprawiedliwości po śmierci życie może wydawać się bardzo arbitralne i moralnie nie rozwiązane. Tyrani mogą umierać bez poniesienia odpowiedzialności, a ofiary mogą opuszczać świat nie zaznawszy sprawiedliwości. To wywołuje jedno z najstarszych pytań filozoficznych ludzkości: czy śmierć jest końcem, czy istnieje ostateczny sąd poza życiem doczesnym?
  `,

        religions: {
          eastern: {
            title: 'Religie Wschodu',

            examples: ['Hinduizm', 'Buddyzm'],

            answerNature: `
Wiele tradycji Wschodu akceptuje koncepcję reinkarnacji, w której dusza lub strumień świadomości przechodzi przez powtarzające się cykle odrodzeń. Przyszły stan jednostki jest określony przez karmę: moralne konsekwencje przeszłych czynów.
      `,

            objectiveCritique: `
Krytycy argumentują, że reinkarnacja budzi pytania filozoficzne o sprawiedliwość i odpowiedzialność. Jeśli ktoś w nowym życiu ponosi konsekwencje czynów z poprzedniego wcielenia, których nie może świadomie pamiętać, cel wychowawczy i moralny kary staje się trudny do zrozumienia.

Z tej perspektywy odpowiedzialność bez świadomej pamięci wydaje się odłączona od znaczącej odpowiedzialności moralnej.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materializm i ateizm',

            answerNature: `
Światopoglądy materialistyczne i ateistyczne zazwyczaj uznają śmierć za koniec świadomego istnienia. Ludzie rozumiani są jako organizmy biologiczne, których świadomość kończy się całkowicie po śmierci fizycznej.
      `,

            objectiveCritique: `
Krytycy twierdzą, że ścisły materializm ma trudności z zapewnieniem obiektywnych podstaw dla moralności, sprawiedliwości i fundamentalnego sensu. Jeśli zarówno ciemiężyciel, jak i ofiara ostatecznie znikają w nicości bez rozliczenia, pojęcia takie jak poświęcenie, obowiązek moralny i sprawiedliwość mogą wydawać się subiektywne lub społecznie skonstruowane, a nie uniwersalnie wiążące.

Zwolennicy etyki świeckiej argumentują jednak, że moralność nadal może wywodzić się z rozumu, empatii i odpowiedzialności społecznej, bez wiary w życie pozagrobowe.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Chrześcijaństwo',

            answerNature: `
Chrześcijaństwo naucza, że zbawienie i życie wieczne osiąga się przez wiarę w Jezusa Chrystusa i przyjęcie Jego ofiary za grzechy ludzkości. Niebo i wieczne zbawienie są ściśle związane z wiarą w Chrystusa i łaską Bożą.
      `,

            objectiveCritique: `
Krytycy pytają, jak zbawienie oparte głównie na wierze odnosi się do uniwersalnych zasad sprawiedliwości. Filozoficznie niektórzy argumentują, że te ramy mogą oznaczać, że moralnie dobry człowiek, który szczerze zmaga się z akceptacją pewnych dogmatów teologicznych, może być pozbawiony zbawienia, podczas gdy inna osoba, która popełniła ciężkie zbrodnie, ale uwierzyła w ostatniej chwili, może otrzymać nagrodę wieczną.

Teolodzy chrześcijańscy często odpowiadają, że zbawienie obejmuje zarówno szczerą wiarę, jak i autentyczny żal, a nie tylko ustne wyznanie.
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
Islam prezentuje życie wieczne jako system absolutnej odpowiedzialności moralnej i sprawiedliwości Bożej.

Koran stwierdza:

"I żadna dusza nie poniesie ciężaru innej." (Koran 6:164)

Zbawienie w islamie jest konsekwentnie powiązane z wiarą i dobrymi uczynkami:

"Głoś radosną nowinę tym, którzy wierzą i czynią dobre uczynki..." (powtarzane w całym Koranie, m.in. 2:25)

Islam naucza, że życie doczesne jest tymczasową próbą, a nie miejscem ostatecznej nagrody lub kary:

"Ten, który stworzył śmierć i życie, aby was doświadczyć, kto z was jest najlepszy w działaniu." (Koran 67:2)
      `,

            objectiveCritique: `
W teologii islamskiej Dzień Sądu reprezentuje ostateczny trybunał, w którym każdy czyn, choćby najmniejszy, zostanie rozliczony.

Koran stwierdza:

"Ten, kto uczynił dobro na wagę atomu, ujrzy je. I ten, kto uczynił zło na wagę atomu, ujrzy je." (Koran 99:7–8)

Te ramy dążą do zachowania zarówno indywidualnej odpowiedzialności, jak i absolutnej sprawiedliwości, oferując moralną pewność, że żaden akt ucisku lub dobroci nie pozostanie ostatecznie bez konsekwencji.
      `,

            refs: [
              'https://quran.com/6/164',
              'https://quran.com/2/25',
              'https://quran.com/67/2',
              'https://quran.com/99/7-8',
              'https://sunnah.com/bukhari:2577',
              'https://www.muslimaid.org/media-centre/blog/what-will-happen-after-death-according-to-islam/',
            ],
          },
        },
      },
    },
    other: {},
    staticText: {
      navbar: 'Porównanie religii',
      hero: {
        subtitle:
          'Spokojna, głęboka podróż filozoficzna przez największe pytania ludzkości: Stwórcę, cel istnienia, moralność i to, co czeka nas po śmierci.',

        subtitleHighlight:
          'Stwórcę, cel istnienia, moralność i to, co czeka nas po śmierci.',

        scrollIndicator: 'Przewiń w dół, aby rozpocząć podróż',
      },

      storySection: {
        badge: 'Analogia pociągu',

        titleLine1: 'Zanim zadasz pytania',
        titleLine2: 'O religii...',

        intro:
          'Każdy człowiek w końcu osiąga chwilę ciszy, gdy rozproszenia znikają – a najgłębsze pytania wreszcie wypływają na powierzchnię.',

        ending: 'Ten pociąg to planeta Ziemia,',
        ending2: 'a podróż to twoje życie.',
      },

      coreQuestions: {
        sectionLabel: 'Główne sekcje',
        title: 'Pytania fundamentalne',

        answerNatureTitle: 'Natura odpowiedzi',

        philosophicalDiscussionTitle: 'Dyskusja filozoficzna',

        referencesTitle: 'Bibliografia',
      },

      futureResearch: {
        sectionLabel: 'Przyszłe badania',

        title: 'Inne pytania',

        loaderBadge: 'Więcej pytań w przygotowaniu',

        headingLine1: 'Podróż',
        headingLine2: 'trwa...',

        description:
          'Dodatkowe badania filozoficzne i teologiczne są studiowane i przygotowywane przy użyciu tej samej ustrukturyzowanej metody porównawczej.',

        topics: [
          'Moralność',
          'Nauka',
          'Cuda',
          'Świadomość',
          'Wolna wola',
          'Cierpienie',
          'Przekaz historyczny',
          'Proroctwa',
          'Natura ludzka',
          'Sens',
          'Cywilizacja',
          'Etyka',
        ],

        footer: 'Nowe sekcje zostaną wkrótce dodane',
      },

      imageAlt: {
        hero: 'Porównanie religii',
      },
    },
  },
};
