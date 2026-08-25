export default {
  splash: {
    version: 'versi',
    practice: 'latihan',
    share: 'kongsi',
    logo: 'islam global',
  },
  homeApp: {
    north: 'utara',
    east: 'timur',
    west: 'barat',
    south: 'selatan',
    active: 'kiblat aktif',
    disabled: 'Buka Kompas Kiblat',
    welcome: 'Selamat Kembali',
    greet: 'Assalamualaikum',
    hour: 'jam',
    minute: 'minit',
    second: 'saat',
    toLeft: 'di sebelah kiri anda',
    toRight: 'di sebelah kanan anda',
    fromNorth: 'dari utara',
  },
  quranApp: {
    medinan: 'Madaniyyah',
    meccan: 'Makkiyyah',
    arabicName: 'nama dalam bahasa Arab',
    englishName: 'nama dalam bahasa Inggeris',
    details:
      'Pilih satu ayat untuk melihat terjemahan dan tafsirnya (penjelasan)',
    selectRes: 'Pilih Sumber',
    retry: 'cuba semula',
    loadErr1: 'Tidak dapat memuatkan penjelasan. Sila cuba semula.',
    loadErr2: 'Gagal mendapatkan',
    author: 'pengarang',
    explain: 'Penjelasan',
  },
  qiblaApp: {
    compass: 'Kompas Kiblat',
    accuracy: 'ketepatan',
    offline: 'GPS luar talian',
    tracking: 'Penjejakan GPS',
    aligned:
      'Anda menghadap Kiblat. Pegang dengan stabil untuk arah solat yang tepat.',
    notAligned:
      'Pegang peranti anda rata dan putar sehingga anak panah menunjuk ke Kiblat.',
    heading: 'Arah peranti',
    turn: 'pusing',
    alignedQibla: 'Sejajar dengan Kiblat',
  },
  aiApp: {
    answer: 'jawapan',
  },
  prayerApp: {
    locationRequired:
      'Perkhidmatan lokasi diperlukan untuk waktu solat yang tepat.',
    schedule: 'Jadual Solat',
    refresh: 'segarkan',
    sunrise: 'Matahari Terbit',
    upcoming: 'Solat Seterusnya',
  },
  settingsApp: {
    reciterTitle: 'Qari Azan',
    reciterSub: 'Pilih suara kegemaran anda',
    notSelected: 'belum dipilih',
    preview: 'dengar',
    cancel: 'batal',
    muezzin: 'Bilal',
    preNot: 'Pemberitahuan Sebelum Azan',
    preNotDet: 'Beritahu 15 minit sebelum waktu solat',
    theme: 'Mod Gelap',
    dark: 'Tema gelap semasa',
    light: 'Tema cerah semasa',
    about: 'Tentang',
    selectReciter: 'Pilih Qari',
  },
  athan: {
    mainTitle: 'AZAN · PANGGILAN SOLAT',
    stop: 'Hentikan Azan',
    error: 'Tidak dapat memuatkan audio azan',
    prayerTime: 'Waktu Solat',
    play: 'main',
    pause: 'jeda',
    dismiss: 'tutup',
  },
  athkarApp: {
    completed: 'Selesai',
    remaining: 'baki',
    reset: 'tetap semula',
    athkar: 'Zikir',
    mention: 'zikir',
    descM: 'Mulakan hari anda dengan berkat',
    descE: 'Tamatkan hari anda dengan perlindungan',
    remmember: 'Zikir Harian',
    cat: 'kategori doa',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Cari hadith...',
      button: 'Cari',
      books: {
        label: 'Buku',
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
      title: 'Bahasa semasa belum disokong',
      msg: 'Bahasa ini belum disokong dalam pangkalan data hadith.',
      description:
        'Bahasa Inggeris dipilih secara automatik sebagai sandaran supaya anda boleh terus mencari dan melayari.',
    },

    initialPlaceholder:
      'Cari hadith untuk melihat butiran seperti penilaian, perawi dan rujukan',

    loading: { label: 'Memuatkan hadith...' },

    hadithCard: {
      showMore: 'Lihat lagi',
      showLess: 'Lihat kurang',
      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Rujukan',
        referenceLabel: 'Rujukan',
        inBookReference: 'Rujukan dalam buku',
        arabicReference: 'Rujukan Arab',
      },
    },

    emptyState: 'Tiada hadith ditemui',

    pagination: { prev: 'Sebelum', next: 'Seterusnya' },
  },

  switch: {
    title: { advanced: 'Mod Lanjutan', normal: 'Mod Normal' },
    description: {
      advanced: 'Carian semantik lebih mendalam',
      normal: 'Carian pantas berasaskan penapis',
    },
  },

  navbar: {
    routes: {
      home: 'Laman Utama',
      prayers: 'Solat',
      quran: 'Al-Quran',
      athkar: 'Zikir',
      articles: 'Artikel',
      articlesNested: {
        islamicHistory: 'Sejarah Islam',
        prayerInIslam: 'Solat dalam Islam',
        womenInIslam: 'Wanita dalam Islam',
        purification: 'Penyucian',
      },
      learn: 'Belajar',
      learnNested: {
        quranTajweed: 'Belajar Al-Quran & Tajwid',
        arabic: 'Belajar Bahasa Arab',
      },
      dashboard: 'Papan Pemuka',
      aiAssistant: 'Pembantu AI',
    },
  },

  hero: {
    title: {
      explore: 'Terokai Islam dengan',
      clarity: 'Kejelasan',
      peace: '& Kedamaian',
    },

    description:
      'Belajar, bertanya, dan temui kefahaman autentik melalui AI dan pengetahuan berpandu yang direka untuk kejelasan dan refleksi.',

    actions: {
      introductionToIslam: 'Pelajari Tentang Islam',
      islamQA: 'Soal Jawab Islam (Pembantu AI)',
      continueWebsite: 'Terus ke Laman Web',
    },
  },
  learning: {
    quran: {
      title: 'Belajar Al-Quran & Tajwid',
      subtitle:
        'Tingkatkan bacaan Al-Quran anda dan fahami peraturan Tajwid langkah demi langkah.',
    },
    arabic: {
      title: 'Belajar Bahasa Arab',
      subtitle:
        'Bina kemahiran bahasa Arab anda melalui pelajaran yang jelas dan tersusun.',
    },
    default: {
      title: 'Bahagian Pembelajaran',
      subtitle:
        'Terokai kandungan pendidikan yang direka untuk mengukuhkan pengetahuan dan pemahaman anda.',
    },
  },
  explore: {
    searchBar: {
      title: 'Carian Koleksi Hadis',

      subtitle:
        'Cari secara semula jadi menggunakan topik, makna, atau ayat lengkap.',

      placeholder: 'Contoh: hadis tentang berbuat baik kepada ibu bapa',

      button: 'Cari',
    },

    header: {
      title: 'Perpustakaan Carian Hadis',
      subtitle:
        'Terokai hadis sahih serta-merta dengan pengalaman membaca moden.',
    },

    content: {
      heroTitle: 'Temui koleksi hadis sahih dengan carian berkuasa',

      loading: {
        label: 'Mencari koleksi hadis...',
      },

      error: {
        title: 'Gagal memuatkan hadis',
        message:
          'Kami tidak dapat mendapatkan riwayat pada masa ini. Sila semak sambungan anda dan cuba lagi.',
      },

      empty: {
        title: 'Tiada hadis yang sepadan ditemui',
      },

      card: {
        reference: 'Rujukan Hadis',
        readMore: 'Baca hadis penuh',
      },
    },
  },

  home: {
    news: {
      title: 'Kemas Kini Komuniti Muslim',
      subtitle: 'Kekal dimaklumkan dengan kemas kini penting dari dunia Muslim',
    },

    prayer: {
      title: 'Kiraan Detik Solat',
      subtitle: 'Bersedia untuk solat seterusnya',
      button: 'Lihat Waktu Solat',
      nextPrayerLabel: 'Solat seterusnya pada:',
    },

    athkar: {
      title: 'Zikir Pagi & Petang',
      subtitle: 'Zikir harian untuk menghubungkan hati',
      button: 'Lihat lebih zikir',
    },

    qibla: {
      title: 'Arah Kiblat',
      subtitle: 'Cari arah Kaabah di mana sahaja anda berada',
      locationLoading: 'Mendapatkan lokasi...',
      enableLocation: 'Aktifkan Lokasi',
      refreshLocation: 'Kemas kini arah kiblat',

      warning:
        'Jika peranti anda tidak menyokong sensor orientasi, ketepatan kompas mungkin terjejas.',

      errorTitle: 'Kebenaran Ditolak',
    },
  },

  prayers: {
    nextLabel: 'Solat seterusnya pada',
    header: {
      title: 'Waktu Solat',
      subtitle: 'Detik harian hubungan dengan Pencipta',
    },
    times: {
      Fajr: 'Subuh',
      Dhuhr: 'Zohor',
      Asr: 'Asar',
      Maghrib: 'Maghrib',
      Isha: 'Isyak',
    },
    qibla: {
      loading: 'Mendapatkan lokasi...',
      warning:
        'Jika sistem operasi tidak menyokong orientasi, ini akan mempengaruhi pengiraan arah kompas.',
      errorTitle: 'Kebenaran Ditolak',
      enableLocation: 'Aktifkan Lokasi',
      refreshLocation: 'Kemas kini arah kiblat',
    },

    list: {
      warning:
        'Waktu mungkin sedikit berbeza bergantung kepada kaedah pengiraan.',
    },
  },

  quran: {
    header: {
      title: 'Al-Quran',
      subtitle: 'Teman harian anda untuk bacaan dan renungan',
    },

    search: {
      noResultTitle: 'Tiada data',
      noResultMessage: 'Tiada data untuk dipaparkan',
    },
  },

  athkar: {
    title: 'Zikir Harian',
    subtitle: 'Kekal konsisten dalam zikir dan renungan harian',
  },

  ai: {
    header: {
      title: 'Pembantu AI Islam Global',
      subtitle:
        'Dapatkan jawapan Islam yang jelas berasaskan Al-Quran, Sunnah dan ilmu yang dipercayai',
    },

    loading: {
      label: 'Memuatkan...',
    },

    error: {
      title: 'Had permintaan dicapai',
      message:
        'Perkhidmatan pengetahuan tidak dapat diakses sekarang. Sila cuba sebentar lagi.',
    },

    input: {
      placeholder: 'Tanya soalan tentang Islam...',
    },

    suggestions: [
      'Bolehkah saya solat jika tidak berwuduk?',
      'Adakah faedah (riba) sepenuhnya haram?',
      'Hukum bekerja di persekitaran tidak halal',
      'Bolehkah saya solat ketika bermusafir?',
      'Adakah dibenarkan memakai minyak wangi semasa solat?',
      'Apa yang membatalkan solat?',
      'Menangguhkan solat kerana kerja',
    ],

    footer: {
      disclaimer:
        'Pembantu AI ini direka untuk memberikan jawapan berdasarkan sumber pengetahuan yang dipilih dan dipercayai, termasuk rujukan Islam dan bahan pendidikan yang disahkan.',

      note: 'Jawapan adalah untuk tujuan maklumat dan tidak menggantikan nasihat ulama apabila diperlukan.',
    },
  },

  footer: {
    disclaimer:
      'Semua kandungan yang dipaparkan adalah daripada sumber asal yang dipercayai. Kami mengalu-alukan maklum balas atau laporan ralat untuk disemak dan diperbetulkan.',

    tagline:
      'Dibina dengan teliti untuk menyampaikan kandungan Islam yang autentik',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Kembali',
    },

    sections: {
      hadithText: 'Teks Hadis',
      arabicText: 'Teks Arab',
      explanation: 'Penerangan',
      authentication: 'Kesahihan',
      lessons: 'Pengajaran & Manfaat',
    },
  },
  other: {
    note: 'Nota',
    theLanguage: 'bahasa',
    part: 'Bahagian',
    translation: 'Terjemahan',
    verse: 'Ayat',
    chapter: 'Bab',
    page: 'Halaman',
    breakingNews: 'Berita terkini',
  },
  dailyRemined: {
    title: 'Cahaya Hari Ini',
    subtitle:
      'Berhenti seketika dan renungkan ayat serta hadis yang dipilih untuk hari anda.',
  },
  baseFooter: {
    contact: {
      title: 'Hubungi Kami',
      name: 'Nama Anda',
      email: 'E-mel Anda',
      msg: 'Mesej Anda',
      sendMsg: 'Hantar Mesej',
    },
    followUs: 'Ikuti Kami',
    QA: 'Akses Pantas',
    logoB:
      'Al-Quran, Hadis, waktu solat, pembantu AI dan alat Islam harian—all dalam satu platform moden.',
    whatsapp: 'Sembang di WhatsApp',
    rsr: 'Hak cipta terpelihara',
  },
  compareRelg: {
    note: `Halaman ini membentangkan tinjauan perbandingan tentang agama-agama utama di dunia. Dari perspektif Islam, Al-Quran mengesahkan bahawa wahyu ilahi yang terdahulu telah diutus kepada umat-umat terdahulu, namun lama-kelamaan mengalami perubahan oleh manusia (tahrif). Al-Quran menyatakan: 'Sesungguhnya Kamilah yang menurunkan Al-Quran, dan sesungguhnya Kamilah yang benar-benar memeliharanya' (15:9). Halaman ini meneliti perbezaan tersebut berdasarkan bukti sejarah dan tekstual.`,
    mainTitle: 'Perjalanan Rasional Merentasi Agama',
    headerTitle: 'Soalan-soalan yang Mentakrifkan Kewujudan Manusia',
    story: `
Bayangkan anda tiba-tiba membuka mata dan mendapati diri anda duduk di dalam sebuah kereta api mewah yang meluncur laju merentasi malam yang tidak berpenghujung. Di sekeliling anda terdapat segala keselesaan yang boleh dibayangkan: hidangan mewah di atas meja yang elegan, skrin bercahaya yang menayangkan filem, dan bantal sutera di atas tempat duduk yang empuk.

Anda bertanya dengan perasaan resah kepada penumpang di sebelah:
"Di manakah kita? Siapa yang menaikkan kita ke dalam kereta api ini? Dan ke manakah kita akan pergi?"

Tetapi yang mengejutkan adalah reaksi mereka.

Seorang menjawab dengan dingin:
"Apa peduli anda? Cuba nikmati makanan ini, ia sungguh luar biasa."

Seorang lagi menjawab dengan sindiran:
"Mengapa memeningkan kepala dengan soalan sebegitu? Duduk diam-diam dan nikmati filem sahaja."

Semua orang di sekeliling anda leka dengan keseronokan dan hiburan perjalanan, namun anda diselubungi ketakutan yang mendalam kerana anda tahu kereta api ini sedang meluncur ke arah destinasi terakhir – stesen di mana setiap penumpang akhirnya perlu turun.

Pada saat itulah, persoalan sebenar muncul.

Adakah anda akan hanyut dalam kemewahan dan hiburan perjalanan itu, atau anda akan terus mencari jawapan kepada tiga soalan paling mendalam:

Siapakah Pencipta?
Mengapa kita berada di sini?
Dan apakah yang menunggu kita di penghujungnya?

Kereta api ini ialah planet Bumi, dan perjalanan itu adalah kehidupan anda sendiri.

Oleh kerana manusia tidak mempunyai jawapan ini, agama muncul sebagai "manual arahan" yang masing-masing mendakwa datang terus daripada pereka kereta api itu sendiri.

Oleh itu, mari kita letakkan manual-manual ini di bawah lensa penilaian yang tenang dan rasional.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Siapakah Pencipta?',

        intro: `
Dari sudut falsafah dan logik, Pencipta sebagai "Sebab Pertama" bagi alam semesta mestilah bersifat transenden sepenuhnya, berada di luar jangkauan jirim, masa, dan ruang. Jika Pencipta tertakluk kepada kelaparan, keletihan, batasan fizikal, atau kekangan ruang, secara logiknya entiti tersebut kehilangan status sebagai Pencipta mutlak dan menjadi makhluk yang dicipta dan bergantung. Entiti yang bergantung tidak mungkin menjadi punca mutlak bagi keseluruhan kewujudan.
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',
            examples: ['Hindu', 'Buddha'],

            answerNature: `
Dalam bentuk asalnya, Theravada, agama Buddha secara umumnya bersifat ateistik; ia tidak menumpukan kepada kewujudan tuhan pencipta, sebaliknya melihat kewujudan sebagai hasil daripada proses semula jadi yang abadi, hukum sebab-akibat, dan undang-undang yang saling berkaitan.

Agama Hindu pula sering bercakap tentang realiti metafizikal asas yang dipanggil "Brahman". Namun dalam penyembahan praktikal, realiti agung ini dimanifestasikan melalui pelbagai bentuk dan dewa, termasuk rupa manusia dan haiwan seperti Vishnu, Shiva, dan Kali.
      `,

            objectiveCritique: `
Dari sudut pandangan falsafah, agama Buddha berdepan dengan cabaran untuk menjelaskan bagaimana alam semesta yang sangat teratur, dikawal oleh undang-undang konsisten dan ketepatan fizikal, boleh muncul tanpa punca asal yang bijaksana.

Dalam tradisi Hindu yang menerima penjelmaan ilahi dan gambaran fizikal, ketuhanan dikaitkan dengan batasan, konflik, kelaparan, kematian, dan bentuk material. Dewa yang boleh digambarkan secara fizikal, dijelmakan, atau tertakluk kepada proses semula jadi, dari perspektif rasional, kelihatan lebih seperti sebahagian daripada ciptaan berbanding entiti yang melampaui ciptaan itu sepenuhnya.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Yahudi',

            answerNature: `
Agama Yahudi menegaskan kepercayaan kepada Pencipta yang melampaui berhala dan gambaran fizikal. Tuhan (YHWH) difahami sebagai Pencipta langit dan bumi dan secara esensinya berbeza daripada ciptaan-Nya.
      `,

            objectiveCritique: `
Masalah falsafah yang dibangkitkan di sini bukan berkaitan dengan transendensi itu sendiri, tetapi mengenai had kesejagatan Tuhan yang kelihatan dalam beberapa petikan dalam Bible Ibrani. Teks-teks tertentu menggambarkan Tuhan dalam hubungan perjanjian, sangat tertumpu kepada anak-anak Israel, yang ditafsirkan oleh pengkritik sebagai bersifat eksklusif secara etnik.

Selain itu, beberapa petikan menggunakan bahasa manusia untuk menggambarkan Tuhan, seperti "menyesal" kerana mencipta manusia (Kejadian 6:6) atau "berehat" pada hari ketujuh selepas penciptaan (Keluaran 31:17). Pengkritik berhujah bahawa gambaran sedemikian menimbulkan persoalan sama ada sifat-sifat ini harus difahami secara literal atau metaforik.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristian',

            answerNature: `
Agama Kristian mengajar kepercayaan kepada satu Tuhan melalui doktrin Triniti: Bapa, Anak, dan Roh Kudus. Menurut doktrin penjelmaan (Incarnation), individu kedua Triniti – Anak – memasuki sejarah manusia dalam diri Yesus Kristus, yang disalibkan dan mati demi penyelamatan manusia.
      `,

            objectiveCritique: `
Secara falsafah, pengkritik berhujah bahawa doktrin penjelmaan mewujudkan ketegangan antara sifat ketuhanan dan sifat kemanusiaan. Secara tradisinya, Tuhan digambarkan sebagai kekal, tidak terbatas, dan melampaui kematian, manakala manusia digambarkan sebagai terbatas, rapuh, dan boleh mati.

Cabaran timbul apabila ketuhanan penuh dan kemanusiaan penuh digabungkan dalam satu individu. Pengkritik bertanya bagaimana entiti yang kekal dan berdikari boleh serentak mengalami kelaparan, tidur, kesakitan, dan kematian. Masalah ini sering dirumuskan sebagai ketegangan antara transendensi dan penjelmaan, bukannya sekadar misteri teologi.
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
Islam menyajikan konsep Tuhan yang sepenuhnya transenden dan tidak boleh dibahagikan. Al-Quran meringkaskan konsep ini dalam Surah Al-Ikhlas:

"Katakanlah (wahai Muhammad): Dialah Allah, Yang Maha Esa. Allah Yang menjadi tumpuan sekalian makhluk untuk memohon sebarang hajat. Ia tiada beranak, dan Ia pula tidak diperanakkan. Dan tidak ada sesiapapun yang setara dengan-Nya." (Al-Quran 112:1–4)

Dalam Islam, Pencipta sepenuhnya melampaui bentuk material dan berbeza daripada ciptaan:

"Tidak ada sesuatu pun yang sebanding dengan (zat, sifat, dan kekuasaan) Allah." (Al-Quran 42:11)

Tuhan tidak terikat oleh masa, ruang, atau kekangan fizikal. Al-Quran juga menyatakan:

"Tidak mengantuk Allah dan tidak tidur." (Al-Quran 2:255)

Dalam teologi Islam, Tuhan difahami sebagai entiti yang berdikari, kekal, bebas, dan sepenuhnya berbeza daripada ciptaan.
      `,

            objectiveCritique: `
Dari perspektif falsafah Islam, konsep ini berusaha mengekalkan transendensi mutlak dengan menghindari antropomorfisme dan penjelmaan. Konsep ini bertujuan menyelaraskan Pencipta dengan idea Sebab Pertama yang bebas dan perlu, yang tidak tertakluk kepada had kewujudan yang dicipta.
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

        title: 'Apakah cara hidup dan tujuan hidup?',

        intro: `
Jika Pencipta yang bijaksana wujud, adalah tidak rasional untuk mengandaikan bahawa manusia ditinggalkan tanpa panduan yang menjelaskan tujuan kewujudan, tanggungjawab moral, dan prinsip yang perlu diikuti. Sama seperti sistem yang kompleks memerlukan arahan daripada pereka ciptanya, agama mendakwa menyediakan kerangka kerja yang membantu manusia memahami mengapa kita di sini dan bagaimana kita harus hidup.
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',

            examples: ['Hindu', 'Buddha'],

            answerNature: `
Tradisi Timur seperti Buddha dan Hindu biasanya bergantung pada ajaran falsafah, amalan meditasi, dan renungan yang dikembangkan oleh guru rohani dan ahli bijak pandai.

Dalam agama Buddha, matlamat utama adalah pelepasan daripada penderitaan dan melarikan diri daripada kitaran kelahiran semula dengan mencapai Nirvana – keadaan transendensi dan pembebasan dalaman.

Dalam banyak tradisi Hindu, matlamatnya adalah pembebasan rohani (Moksha), yang dicapai melalui pengabdian, pengetahuan, meditasi, atau tindakan yang berdisiplin.
      `,

            objectiveCritique: `
Pengkritik berhujah bahawa sistem ini terutamanya bersifat falsafah dan pengalaman, bukannya berdasarkan wahyu yang boleh disahkan daripada Pencipta yang transenden.

Sesetengah pihak juga berhujah bahawa penekanan yang kuat terhadap pengasingan daripada kehidupan duniawi, kehidupan biara, dan penyangkalan diri mungkin bercanggah dengan aspek fitrah manusia yang menggalakkan pembangunan sosial, kemajuan saintifik, kehidupan berkeluarga, dan pembinaan tamadun.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Yahudi',

            answerNature: `
Dalam agama Yahudi, cara hidup berakar umbi dalam hukum perjanjian yang diwahyukan kepada Musa dan dipelihara dalam Bible Ibrani (Tanakh). Kerangka agama tertumpu kepada ketaatan kepada perintah Tuhan dan pemeliharaan hubungan perjanjian antara Tuhan dan anak-anak Israel.
      `,

            objectiveCritique: `
Pengkritik berhujah bahawa agama Yahudi secara sejarah berkembang terutamanya sebagai tradisi yang tertumpu kepada perjanjian yang dikaitkan dengan bangsa tertentu, bukannya agama mubaligh sejagat yang ditujukan untuk seluruh manusia.

Dari sudut kritikan teks, sesetengah sarjana – termasuk Richard Elliott Friedman dan lain-lain – berhujah bahawa Taurat mengalami proses kompilasi dan penyuntingan selama berabad-abad, terutamanya sekitar pembuangan Babylon dan selepasnya. Ini menyebabkan sesetengah pengkritik meragui sama ada teks tersebut boleh dianggap sebagai wahyu yang dipelihara dengan sempurna dalam bentuk asalnya.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristian',

            answerNature: `
Agama Kristian mengajar bahawa masalah utama manusia ialah dosa dan keterpisahan daripada Tuhan, dan penyelamatan dicapai melalui kepercayaan kepada kematian Yesus sebagai penebusan dan kebangkitan-Nya. Oleh itu, tujuan hidup difahami melalui perdamaian dengan Tuhan dan transformasi rohani.
      `,

            objectiveCritique: `
Secara sejarah, sarjana mencatatkan bahawa tiada manuskrip asal Injil dalam bahasa Aramaik yang dituturkan oleh Yesus yang masih wujud. Teks tertua yang masih ada ialah manuskrip Yunani yang ditulis beberapa dekad selepas kehidupan Yesus. Pakar kritikan teks seperti Bart Ehrman telah mendokumentasikan banyak varian manuskrip di antara salinan awal Perjanjian Baru.

Pengkritik juga berhujah bahawa agama Kristian secara sejarah memberi penekanan lebih besar kepada penyelamatan rohani dan peribadi berbanding pembinaan kerangka undang-undang atau politik yang komprehensif untuk mengatur ekonomi, undang-undang jenayah, atau pentadbiran negara. Sesetengah sejarawan percaya ini menyumbang kepada pemisahan akhir antara agama dan kuasa negara di banyak masyarakat Barat.
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
Islam menyajikan pemahaman yang komprehensif tentang tujuan manusia dengan mengintegrasikan pengabdian rohani dan tanggungjawab duniawi.

Al-Quran menyatakan:

"Dan (ingatlah) Aku tidak menciptakan jin dan manusia melainkan untuk mereka menyembah dan beribadat kepada-Ku." (Al-Quran 51:56)

Dalam pemikiran Islam, ibadah tidak terhad kepada ritual, tetapi merangkumi tindakan yang betul, keadilan, tingkah laku beretika, pencarian ilmu, dan sumbangan positif kepada masyarakat.

Ajaran Islam berusaha untuk mengimbangi pertumbuhan rohani dengan penyertaan praktikal dalam kehidupan berkeluarga, ekonomi, pemerintahan, kebajikan, dan tanggungjawab sosial.
      `,

            objectiveCritique: `
Dari perspektif Islam, Al-Quran mewakili wahyu yang dipelihara secara unik. Umat Islam mendakwa bahawa teksnya kekal tidak berubah dan terus disampaikan melalui manuskrip bertulis serta hafalan lisan sejak generasi awal Islam.

Contoh yang sering dipetik ialah teks kuno seperti manuskrip Al-Quran Birmingham dan tradisi hafalan lisan yang luas yang dipelihara oleh berjuta-juta umat Islam di seluruh dunia.

Undang-undang Islam (Syariah) juga dikemukakan sebagai kerangka etika dan undang-undang yang komprehensif yang menangani bidang seperti kewangan, kebajikan, undang-undang keluarga, undang-undang jenayah, dan pemerintahan. Penyokong berhujah bahawa ini memberikan Islam ciri-ciri sistem moral dan tamadun yang lengkap, bukannya sekadar tradisi rohani semata-mata.
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

        title: 'Apakah yang berlaku selepas Stesen Terakhir?',

        subtitle: 'Takdir, Keadilan, dan Alam Akhirat',

        intro: `
Tanpa kewujudan keadilan mutlak selepas kematian, kehidupan boleh terasa sangat sewenang-wenang dan tidak terselesaikan dari segi moral. Penindas boleh mati tanpa bertanggungjawab, dan mangsa boleh meninggalkan dunia tanpa mendapat keadilan. Ini membangkitkan salah satu soalan falsafah tertua manusia: adakah kematian adalah pengakhirannya, atau adakah terdapat penghakiman terakhir di luar kehidupan duniawi?
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',

            examples: ['Hindu', 'Buddha'],

            answerNature: `
Banyak tradisi Timur menerima konsep penjelmaan semula (reinkarnasi), di mana jiwa atau aliran kesedaran melalui kitaran kelahiran semula yang berulang. Keadaan individu pada masa depan ditentukan oleh karma: akibat moral daripada tindakan masa lalu.
      `,

            objectiveCritique: `
Pengkritik berhujah bahawa penjelmaan semula menimbulkan soalan falsafah tentang keadilan dan tanggungjawab. Jika seseorang menanggung akibat dalam kehidupan baru disebabkan tindakan yang dilakukan dalam kewujudan terdahulu yang tidak dapat diingati secara sedar, maka tujuan pendidikan dan moral hukuman menjadi sukar difahami.

Dari perspektif ini, tanggungjawab tanpa ingatan sedar mungkin kelihatan terputus daripada tanggungjawab moral yang bermakna.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialisme dan Ateisme',

            answerNature: `
Pandangan dunia materialistik dan ateistik biasanya menganggap kematian sebagai penghujung kewujudan sedar. Manusia difahami sebagai organisma biologi yang kesedarannya terhenti sepenuhnya selepas kematian fizikal.
      `,

            objectiveCritique: `
Pengkritik berhujah bahawa materialisme yang ketat sukar untuk memberikan asas objektif bagi moral, keadilan, dan makna asas. Jika penindas dan mangsa akhirnya lenyap ke dalam ketiadaan tanpa bertanggungjawab, maka konsep seperti pengorbanan, kewajipan moral, dan keadilan boleh kelihatan subjektif atau binaan sosial, bukannya sesuatu yang wajib secara sejagat.

Walau bagaimanapun, penyokong etika sekular berhujah bahawa moraliti masih boleh muncul melalui akal, empati, dan tanggungjawab sosial tanpa kepercayaan kepada alam akhirat.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristian',

            answerNature: `
Agama Kristian mengajar bahawa penyelamatan dan kehidupan kekal dicapai melalui kepercayaan kepada Yesus Kristus dan penerimaan pengorbanan-Nya bagi dosa manusia. Syurga dan penyelamatan kekal berkait rapat dengan kepercayaan kepada Kristus dan rahmat ilahi.
      `,

            objectiveCritique: `
Pengkritik bertanya bagaimana penyelamatan yang terutamanya berdasarkan kepercayaan berkait dengan prinsip keadilan sejagat. Secara falsafah, sesetengah berhujah bahawa kerangka kerja ini bermakna seseorang yang bermoral baik tetapi jujur bergelut dengan penerimaan doktrin teologi tertentu mungkin ditolak daripada penyelamatan, manakala individu lain yang melakukan jenayah berat tetapi menerima kepercayaan sebelum mati boleh menerima ganjaran kekal.

Ahli teologi Kristian sering menjawab bahawa penyelamatan merangkumi kepercayaan yang tulus dan pertaubatan yang sahih, bukannya sekadar pengakuan lisan semata-mata.
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
Islam menyajikan alam akhirat sebagai sistem tanggungjawab moral yang mutlak dan keadilan ilahi.

Al-Quran menyatakan:

"Dan (ingatlah) bahawa seseorang yang memikul dosa tidak akan memikul dosa perbuatan orang lain." (Al-Quran 6:164)

Penyelamatan dalam Islam secara konsisten dikaitkan dengan kepercayaan dan tindakan yang betul:

"Dan sampaikanlah berita gembira kepada orang-orang yang beriman dan beramal soleh..." (diulang di seluruh Al-Quran, termasuk 2:25)

Islam mengajar bahawa kehidupan duniawi ialah ujian sementara, bukannya tempat ganjaran atau hukuman muktamad:

"Dialah yang telah mentakdirkan adanya mati dan hidup (kamu) - untuk menguji dan menzahirkan keadaan kamu: siapakah di antara kamu yang lebih baik amalannya." (Al-Quran 67:2)
      `,

            objectiveCritique: `
Dalam teologi Islam, Hari Kiamat mewakili mahkamah keadilan tertinggi di mana setiap tindakan, tidak kira sekecil mana pun, akan dipertanggungjawabkan.

Al-Quran menyatakan:

"Maka sesiapa berbuat kebajikan seberat zarah, nescaya akan dilihatnya (dalam surat amalnya)! Dan sesiapa berbuat kejahatan seberat zarah, nescaya akan dilihatnya (dalam surat amalnya)!" (Al-Quran 99:7–8)

Kerangka ini berusaha mengekalkan tanggungjawab individu dan keadilan mutlak, sambil menawarkan keyakinan moral bahawa tiada penindasan atau perbuatan baik akan hilang tanpa sebarang akibat.
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
      navbar: 'Perbandingan Agama',
      hero: {
        subtitle:
          'Satu perjalanan falsafah yang tenang namun mendalam, meneroka persoalan terbesar manusia: Pencipta, tujuan kewujudan, moral, dan apa yang menanti selepas kematian.',

        subtitleHighlight:
          'Pencipta, tujuan kewujudan, moral, dan apa yang menanti selepas kematian.',

        scrollIndicator: 'Tatal ke bawah untuk memulakan perjalanan',
      },

      storySection: {
        badge: 'Analogi Kereta Api',

        titleLine1: 'Sebelum Mengemukakan Soalan',
        titleLine2: 'Tentang Agama...',

        intro:
          'Setiap manusia akhirnya mencapai saat kesunyian apabila kesibukan menghilang – dan soalan-soalan paling mendalam akhirnya muncul ke permukaan.',

        ending: 'Kereta api ini ialah planet Bumi,',
        ending2: 'dan perjalanan itu adalah kehidupan anda sendiri.',
      },

      coreQuestions: {
        sectionLabel: 'Bahagian Utama',
        title: 'Soalan-soalan Fundamental',

        answerNatureTitle: 'Sifat Jawapan',

        philosophicalDiscussionTitle: 'Perbincangan Falsafah',

        referencesTitle: 'Rujukan',
      },

      futureResearch: {
        sectionLabel: 'Kajian Masa Depan',

        title: 'Soalan Lain',

        loaderBadge: 'Lebih banyak soalan akan datang',

        headingLine1: 'Perjalanan',
        headingLine2: 'diteruskan...',

        description:
          'Kajian falsafah dan teologi tambahan sedang dikaji dan disediakan menggunakan pendekatan perbandingan berstruktur yang sama.',

        topics: [
          'Moral',
          'Sains',
          'Mukjizat',
          'Kesedaran',
          'Kehendak Bebas',
          'Penderitaan',
          'Pemeliharaan Sejarah',
          'Nubuat',
          'Fitrah Manusia',
          'Makna',
          'Tamadun',
          'Etika',
        ],

        footer: 'Bahagian baharu akan ditambah tidak lama lagi',
      },

      imageAlt: {
        hero: 'Perbandingan Agama',
      },
    },
  },
};
