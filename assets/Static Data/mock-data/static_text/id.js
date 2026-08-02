export default {
  splash: {
    version: 'versi',
    practice: 'latihan',
    share: 'bagikan',
    logo: 'islam global',
  },
  homeApp: {
    north: 'utara',
    east: 'timur',
    west: 'barat',
    south: 'selatan',
    active: 'kiblat aktif',
    disabled: 'Buka Kompas Kiblat',
    welcome: 'Selamat Datang Kembali',
    greet: "Assalamu'alaikum",
    hour: 'jam',
    minute: 'menit',
    second: 'detik',
    toLeft: 'di sebelah kiri Anda',
    toRight: 'di sebelah kanan Anda',
    fromNorth: 'dari utara',
  },
  quranApp: {
    medinan: 'Madaniyah',
    meccan: 'Makkiyah',
    arabicName: 'nama dalam bahasa Arab',
    englishName: 'nama dalam bahasa Inggris',
    details: 'Pilih ayat untuk melihat terjemahan dan tafsirnya (penjelasan)',
    selectRes: 'Pilih Sumber',
    retry: 'coba lagi',
    loadErr1: 'Tidak dapat memuat penjelasan. Silakan coba lagi.',
    loadErr2: 'Gagal mengambil',
    author: 'penulis',
    explain: 'Penjelasan',
  },
  qiblaApp: {
    compass: 'Kompas Kiblat',
    accuracy: 'akurasi',
    offline: 'GPS offline',
    tracking: 'Pelacakan GPS',
    aligned:
      'Anda menghadap Kiblat. Tahan stabil untuk arah shalat yang akurat.',
    notAligned:
      'Pegang perangkat Anda rata dan putar hingga panah menunjuk ke Kiblat.',
    heading: 'Arah perangkat',
    turn: 'putar',
    alignedQibla: 'Sejajar dengan Kiblat',
  },
  aiApp: {
    answer: 'jawaban',
  },
  prayerApp: {
    locationRequired:
      'Layanan lokasi diperlukan untuk waktu shalat yang akurat.',
    schedule: 'Jadwal Shalat',
    refresh: 'segarkan',
    sunrise: 'Terbit',
    upcoming: 'Shalat Berikutnya',
  },
  settingsApp: {
    reciterTitle: 'Qari Adzan',
    reciterSub: 'Pilih suara yang Anda sukai',
    notSelected: 'belum dipilih',
    preview: 'dengarkan',
    cancel: 'batal',
    muezzin: 'Muazin',
    preNot: 'Notifikasi Sebelum Adzan',
    preNotDet: 'Beritahu 15 menit sebelum waktu shalat',
    theme: 'Mode Gelap',
    dark: 'Saat ini tema gelap',
    light: 'Saat ini tema terang',
    about: 'Tentang',
    selectReciter: 'Pilih Qari',
  },
  athan: {
    mainTitle: 'ADZAN · PANGGILAN SHALAT',
    stop: 'Hentikan Adzan',
    error: 'Tidak dapat memuat audio adzan',
    prayerTime: 'Waktu Shalat',
    play: 'mainkan',
    pause: 'jeda',
    dismiss: 'tutup',
  },
  athkarApp: {
    completed: 'Selesai',
    remaining: 'tersisa',
    reset: 'atur ulang',
    athkar: 'Dzikir',
    mention: 'dzikir',
    descM: 'Mulai harimu dengan berkah',
    descE: 'Akhiri harimu dengan perlindungan',
    remmember: 'Dzikir Harian',
    cat: 'kategori doa',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Cari hadits...',
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
      title: 'Bahasa saat ini belum didukung',
      msg: 'Bahasa ini belum didukung dalam basis data hadits.',
      description:
        'Bahasa Inggris dipilih otomatis sebagai cadangan agar Anda tetap dapat mencari dan menjelajah. Anda juga dapat mencoba Mode Lanjutan.',
    },

    initialPlaceholder:
      'Cari hadits untuk melihat detail seperti penilaian, perawi, dan referensi',

    loading: { label: 'Memuat hadits...' },

    hadithCard: {
      showMore: 'Tampilkan lebih banyak',
      showLess: 'Tampilkan lebih sedikit',
      header: {
        hadithPrefix: 'Hadits #',
        referencesTitle: 'Referensi',
        referenceLabel: 'Referensi',
        inBookReference: 'Referensi dalam buku',
        arabicReference: 'Referensi Arab',
      },
    },

    emptyState: 'Tidak ada hadits ditemukan',

    pagination: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya',
    },
  },

  switch: {
    title: { advanced: 'Mode Lanjutan', normal: 'Mode Normal' },
    description: {
      advanced: 'Pencarian semantik dengan pemahaman mendalam',
      normal: 'Pencarian cepat berbasis filter',
    },
  },

  navbar: {
    routes: {
      home: 'Beranda',
      prayers: 'Shalat',
      quran: "Al-Qur'an",
      athkar: 'Dzikir',
      articles: 'Artikel',
      articlesNested: {
        islamicHistory: 'Sejarah Islam',
        prayerInIslam: 'Shalat dalam Islam',
        womenInIslam: 'Wanita dalam Islam',
        purification: 'Bersuci',
      },
      learn: 'Belajar',
      learnNested: {
        quranTajweed: "Belajar Al-Qur'an & Tajwid",
        arabic: 'Belajar Bahasa Arab',
      },
      dashboard: 'Dasbor',
      aiAssistant: 'Asisten AI',
    },
  },

  hero: {
    title: {
      explore: 'Jelajahi Islam dengan',
      clarity: 'Kejelasan',
      peace: '& Kedamaian',
    },

    description:
      'Belajar, bertanya, dan temukan pemahaman yang autentik melalui AI dan pengetahuan terpandu yang dirancang untuk kejelasan dan refleksi.',

    actions: {
      introductionToIslam: 'Pelajari Tentang Islam',
      islamQA: 'Tanya Jawab Islam (Asisten AI)',
      continueWebsite: 'Lanjutkan ke Website',
    },
  },
  learning: {
    quran: {
      title: "Belajar Al-Qur'an & Tajwid",
      subtitle:
        "Tingkatkan bacaan Al-Qur'an Anda dan pahami aturan Tajwid langkah demi langkah.",
    },
    arabic: {
      title: 'Belajar Bahasa Arab',
      subtitle:
        'Kembangkan kemampuan bahasa Arab Anda melalui pelajaran yang jelas dan terstruktur.',
    },
    default: {
      title: 'Bagian Pembelajaran',
      subtitle:
        'Jelajahi konten edukatif yang dirancang untuk memperkuat pengetahuan dan pemahaman Anda.',
    },
  },
  explore: {
    searchBar: {
      title: 'Pencarian Koleksi Hadis',

      subtitle:
        'Cari secara alami menggunakan topik, makna, atau kalimat lengkap.',

      placeholder: 'Contoh: hadis tentang berbuat baik kepada orang tua',

      button: 'Cari',
    },

    header: {
      title: 'Perpustakaan Pencarian Hadis',
      subtitle:
        'Jelajahi hadis autentik secara instan dengan pengalaman membaca modern.',
    },

    content: {
      heroTitle: 'Temukan koleksi hadis autentik dengan pencarian yang kuat',

      loading: {
        label: 'Mencari koleksi hadis...',
      },

      error: {
        title: 'Tidak dapat memuat hadis',
        message:
          'Kami tidak dapat mengambil riwayat saat ini. Periksa koneksi Anda dan coba lagi.',
      },

      empty: {
        title: 'Tidak ada hadis yang cocok ditemukan',
      },

      card: {
        reference: 'Referensi Hadis',
        readMore: 'Baca hadis lengkap',
      },
    },
  },

  home: {
    news: {
      title: 'Informasi Komunitas Muslim',
      subtitle: 'Tetap terinformasi dengan pembaruan penting dari dunia Muslim',
    },

    prayer: {
      title: 'Hitung Mundur Sholat',
      subtitle: 'Persiapkan diri untuk sholat berikutnya',
      button: 'Lihat Waktu Sholat',
      nextPrayerLabel: 'Sholat berikutnya pada:',
    },

    athkar: {
      title: 'Dzikir Pagi & Petang',
      subtitle: 'Pengingat harian untuk menjaga hati tetap terhubung',
      button: 'Lihat lebih banyak dzikir',
    },

    qibla: {
      title: 'Arah Kiblat',
      subtitle: "Temukan arah Ka'bah di mana pun Anda berada",
      locationLoading: 'Mendapatkan lokasi...',
      enableLocation: 'Aktifkan Lokasi',
      refreshLocation: 'Perbarui Arah Kiblat',

      warning:
        'Jika perangkat Anda tidak mendukung sensor orientasi, akurasi kompas dapat terpengaruh.',

      errorTitle: 'Izin Ditolak',
    },
  },

  prayers: {
    nextLabel: 'Sholat berikutnya pada',
    header: {
      title: 'Waktu Sholat',
      subtitle: 'Momen harian untuk terhubung dengan Pencipta Anda',
    },
    times: {
      Fajr: 'Subuh',
      Dhuhr: 'Dzuhur',
      Asr: 'Ashar',
      Maghrib: 'Maghrib',
      Isha: 'Isya',
    },
    qibla: {
      loading: 'Mendapatkan lokasi...',
      warning:
        'Jika sistem operasi tidak mendukung orientasi, ini akan mempengaruhi perhitungan arah kompas.',
      errorTitle: 'Izin Ditolak',
      enableLocation: 'Aktifkan Lokasi',
      refreshLocation: 'Perbarui Arah Kiblat',
    },

    list: {
      warning: 'Waktu dapat sedikit berbeda tergantung metode perhitungan.',
    },
  },

  quran: {
    header: {
      title: "Al-Qur'an",
      subtitle: 'Pendamping harian Anda untuk membaca dan merenung',
    },

    search: {
      noResultTitle: 'Data kosong',
      noResultMessage: 'Tidak ada data untuk ditampilkan',
    },
  },

  athkar: {
    title: 'Dzikir Harian',
    subtitle: 'Tetap konsisten dalam dzikir dan refleksi harian Anda',
  },

  ai: {
    header: {
      title: 'Asisten AI Islam Global',
      subtitle:
        "Dapatkan jawaban Islam yang jelas berdasarkan Al-Qur'an, Sunnah, dan ilmu terpercaya",
    },

    loading: {
      label: 'Memuat...',
    },

    error: {
      title: 'Batas permintaan tercapai',
      message:
        'Layanan pengetahuan sedang tidak dapat diakses. Coba lagi sebentar lagi.',
    },

    input: {
      placeholder: 'Tanyakan pertanyaan tentang Islam...',
    },

    suggestions: [
      'Bolehkah sholat jika tidak wudu?',
      'Apakah bunga (riba) sepenuhnya haram?',
      'Hukum bekerja di lingkungan tidak halal',
      'Bolehkah sholat saat bepergian?',
      'Bolehkah memakai parfum saat sholat?',
      'Apa yang membatalkan sholat?',
      'Menunda sholat karena pekerjaan',
    ],

    footer: {
      disclaimer:
        'Asisten AI ini dirancang untuk memberikan jawaban berdasarkan sumber pengetahuan yang dikurasi dan terpercaya, termasuk referensi Islam dan materi edukasi yang telah diverifikasi.',

      note: 'Jawaban hanya untuk tujuan informasi dan tidak menggantikan nasihat ulama bila diperlukan.',
    },
  },

  footer: {
    disclaimer:
      'Semua konten yang ditampilkan bersumber dari referensi asli yang terpercaya. Kami menerima masukan atau laporan kesalahan untuk ditinjau dan diperbaiki.',

    tagline:
      'Dibangun dengan hati-hati untuk menyajikan konten Islam yang autentik',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Kembali',
    },

    sections: {
      hadithText: 'Teks Hadis',
      arabicText: 'Teks Arab',
      explanation: 'Penjelasan',
      authentication: 'Keaslian',
      lessons: 'Pelajaran & Hikmah',
    },
  },
  other: {
    part: 'Bagian',
    translation: 'Terjemahan',
    verse: 'Ayat',
    chapter: 'Bab',
    page: 'Halaman',
    breakingNews: 'Berita terkini',
  },
  dailyRemined: {
    title: 'Cahaya Hari Ini',
    subtitle:
      'Luangkan waktu sejenak untuk merenungkan ayat dan hadits pilihan untuk harimu.',
  },
  baseFooter: {
    contact: {
      title: 'Hubungi Kami',
      name: 'Nama Anda',
      email: 'Email Anda',
      msg: 'Pesan Anda',
      sendMsg: 'Kirim Pesan',
    },
    followUs: 'Ikuti Kami',
    QA: 'Akses Cepat',
    logoB:
      "Al-Qur'an, Hadits, waktu salat, asisten AI, dan alat Islami harian—all dalam satu platform modern.",
    whatsapp: 'Chat di WhatsApp',
    rsr: 'Hak cipta dilindungi',
  },
  compareRelg: {
    note: `Halaman ini menyajikan tinjauan perbandingan tentang agama-agama besar di dunia. Dari perspektif Islam, Al-Qur'an menegaskan bahwa wahyu ilahi sebelumnya telah diutus kepada umat-umat terdahulu, namun seiring berjalannya waktu mengalami pengubahan oleh manusia (tahrif). Al-Qur'an menyatakan: 'Sesungguhnya Kamilah yang menurunkan Al-Qur'an, dan pasti Kami pula yang memeliharanya' (15:9). Halaman ini mengkaji perbedaan-perbedaan tersebut berdasarkan bukti-bukti sejarah dan tekstual.`,
    mainTitle: 'Perjalanan Rasional Melintasi Agama',
    headerTitle: 'Pertanyaan yang Mendefinisikan Eksistensi Manusia',
    story: `
Bayangkan Anda tiba-tiba membuka mata dan mendapati diri Anda duduk di dalam kereta mewah yang melaju dengan kecepatan tinggi menembus malam yang tak berujung. Di sekitar Anda terdapat segala kenyamanan: hidangan mewah yang disajikan di meja elegan, layar berkilau yang menayangkan film, dan bantal sutra di kursi yang empuk.

Anda menoleh ke penumpang di samping Anda dan bertanya dengan cemas:
"Di mana kita? Siapa yang menempatkan kita di kereta ini? Dan ke mana kita akan pergi?"

Namun, kejutan yang sebenarnya datang dari reaksi mereka.

Salah satunya menjawab dengan dingin:
"Apa pedulimu? Nikmati saja makanan ini, sungguh luar biasa."

Yang lain mengejek dan berkata:
"Mengapa kamu pusing memikirkan pertanyaan seperti itu? Bersantailah dan nikmati filmnya."

Semua orang di sekitar Anda larut dalam kesenangan dan distraksi perjalanan, namun perasaan takut yang mendalam menyelimuti Anda karena Anda tahu pasti bahwa kereta ini melaju menuju tujuan akhir, stasiun di mana setiap penumpang pada akhirnya harus turun.

Dan pada saat itulah, pertanyaan yang sesungguhnya muncul:

Apakah Anda akan larut dalam kemewahan dan hiburan perjalanan, atau Anda akan terus mencari jawaban atas tiga pertanyaan terdalam:

Siapa Penciptanya?
Mengapa kita ada di sini?
Dan apa yang akan terjadi pada kita di akhir nanti?

Kereta ini adalah planet Bumi, dan perjalanan itu adalah hidup Anda.

Karena manusia tidak memiliki jawaban-jawaban ini dengan sendirinya, agama-agama muncul sebagai "buku panduan instruksi", di mana masing-masing mengklaim berasal dari perancang kereta itu sendiri.

Maka, mari kita letakkan buku-buku panduan ini di bawah lensa pemeriksaan yang tenang dan rasional.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Siapa Penciptanya?',

        intro: `
Dari perspektif filosofis dan logis, "Sebab Pertama" dari alam semesta — Sang Pencipta — haruslah sepenuhnya transenden, berada di luar materi, waktu, dan ruang. Jika Sang Pencipta tunduk pada rasa lapar, kelelahan, batasan fisik, atau keterikatan ruang, secara logis, entitas semacam itu berhenti menjadi Pencipta yang absolut, melainkan menjadi entitas yang diciptakan dan bergantung. Makhluk yang bergantung pada akhirnya tidak bisa berfungsi sebagai sumber yang niscaya bagi keseluruhan eksistensi.
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',
            examples: ['Hindu', 'Buddha'],

            answerNature: `
Dalam bentuknya yang paling awal, Theravada, Buddha pada umumnya bersifat non-teistik; ia tidak berfokus pada keberadaan tuhan pencipta, melainkan menganggap bahwa eksistensi muncul dari proses alami yang abadi, kausalitas, dan hukum-hukum yang saling terkait.

Hindu, di sisi lain, sering berbicara tentang realitas metafisik fundamental yang disebut "Brahman". Namun, dalam ibadah praktis, realitas tertinggi ini terwujud melalui tak terhitung manifestasi dan dewa, termasuk bentuk berpenampilan manusia dan hewan, seperti Wisnu, Siwa, dan Kali.
      `,

            objectiveCritique: `
Dari sudut pandang filosofis, Buddha menghadapi tantangan untuk menjelaskan bagaimana alam semesta yang sangat teratur, yang diatur oleh hukum yang konsisten dan presisi fisik, dapat muncul tanpa penyebab cerdas yang asli.

Dalam tradisi Hindu yang merangkul inkarnasi ilahi dan penggambaran fisik, hal ilahi dikaitkan dengan batasan, konflik, kelaparan, kematian, dan bentuk materi. Dewa yang dapat digambarkan secara fisik, diinkarnasikan, atau tunduk pada proses alami tampak, dari perspektif rasional, sebagai bagian dari ciptaan, bukan entitas yang sepenuhnya melampauinya.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Yudaisme',

            answerNature: `
Yudaisme menegaskan keyakinan pada Pencipta yang berada di luar berhala dan penggambaran fisik. Tuhan (YHWH) dipahami sebagai Pencipta langit dan bumi dan secara esensial berbeda dari ciptaan-Nya.
      `,

            objectiveCritique: `
Kekhawatiran filosofis yang diangkat di sini bukan terutama mengenai transendensi itu sendiri, melainkan batas universalitas ilahi yang dipersepsikan dalam beberapa bagian Alkitab Ibrani. Teks-teks tertentu menggambarkan Tuhan dalam hubungan perjanjian yang sangat berfokus pada Anak-anak Israel dengan cara yang ditafsirkan oleh kritikus sebagai eksklusif secara etnis.

Selain itu, beberapa bagian menggunakan bahasa yang sangat manusiawi untuk menggambarkan Tuhan, seperti "menyesal" karena menciptakan umat manusia (Kejadian 6:6) atau "beristirahat" pada hari ketujuh setelah penciptaan (Keluaran 31:17). Kritikus berpendapat bahwa deskripsi semacam itu menimbulkan pertanyaan tentang apakah atribut tersebut harus dipahami secara harfiah atau metaforis.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kristen',

            answerNature: `
Kristen mengajarkan keyakinan pada satu Tuhan melalui doktrin Tritunggal: Bapa, Anak, dan Roh Kudus. Menurut doktrin inkarnasi, pribadi kedua dari Tritunggal — Anak — masuk ke dalam sejarah manusia dalam pribadi Yesus Kristus, yang disalibkan dan mati demi keselamatan umat manusia.
      `,

            objectiveCritique: `
Secara filosofis, kritikus berpendapat bahwa doktrin inkarnasi menciptakan ketegangan antara atribut ilahi dan manusiawi. Secara tradisional, Tuhan digambarkan sebagai kekal, tak terbatas, dan berada di luar kematian, sementara manusia adalah terbatas, rentan, dan fana.

Tantangan muncul ketika keilahian penuh dan kemanusiaan penuh dipersatukan dalam satu pribadi. Kritikus bertanya bagaimana makhluk yang kekal dan mandiri bisa secara bersamaan mengalami rasa lapar, tidur, penderitaan, dan kematian. Masalah ini sering dirumuskan sebagai ketegangan antara transendensi dan inkarnasi, bukan sekadar misteri teologis sederhana.
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
Islam menyajikan konsep Tuhan yang sepenuhnya transenden dan tak terbagi. Al-Qur'an meringkas konsep ini dalam Surah Al-Ikhlas:

"Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. Dia tidak beranak dan tidak pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia." (QS. Al-Ikhlas: 1–4)

Pencipta dalam Islam sepenuhnya berada di luar bentuk materi dan berbeda dari ciptaan:

"Tidak ada sesuatu pun yang serupa dengan Dia." (QS. Asy-Syura: 11)

Tuhan tidak dibatasi oleh waktu, ruang, atau batasan fisik. Al-Qur'an juga menyatakan:

"Tidak mengantuk dan tidak tidur." (QS. Al-Baqarah: 255)

Dalam teologi Islam, Tuhan dipahami sebagai zat yang ada dengan sendirinya, kekal, mandiri, dan secara absolut berbeda dari ciptaan.
      `,

            objectiveCritique: `
Dari perspektif filosofis Islam, pemahaman ini berupaya melestarikan transendensi absolut dengan menghindari antropomorfisme dan inkarnasi. Konsep ini bertujuan untuk menyelaraskan Pencipta dengan gagasan tentang Sebab Pertama yang mandiri dan niscaya yang tidak tunduk pada batasan eksistensi ciptaan.
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

        title: 'Apa cara dan tujuan hidup?',

        intro: `
Jika Pencipta yang bijaksana ada, akan menjadi tidak rasional untuk berasumsi bahwa umat manusia dibiarkan tanpa pedoman yang menjelaskan tujuan eksistensi, tanggung jawab moral, dan prinsip-prinsip yang harus dijalani. Sama seperti sistem yang kompleks memerlukan instruksi dari perancangnya, agama-agama mengklaim menyediakan kerangka kerja bagi umat manusia untuk memahami mengapa kita ada di sini dan bagaimana kita harus hidup.
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',

            examples: ['Hindu', 'Buddha'],

            answerNature: `
Tradisi Timur, seperti Buddha dan Hindu, biasanya mengandalkan ajaran filosofis, praktik meditatif, dan perenungan yang dikembangkan oleh guru spiritual dan bijak.

Dalam Buddha, tujuan akhirnya adalah pembebasan dari penderitaan dan pelarian dari siklus kelahiran kembali dengan mencapai Nirvana, keadaan transendensi dan pembebasan batin.

Dalam banyak tradisi Hindu, tujuannya adalah pembebasan spiritual (Moksha), yang dicapai melalui pengabdian, pengetahuan, meditasi, atau tindakan yang disiplin.
      `,

            objectiveCritique: `
Kritikus berpendapat bahwa sistem ini terutama bersifat filosofis dan eksperiensial, bukan didasarkan pada wahyu yang dapat diverifikasi yang datang dari Pencipta yang transenden.

Beberapa orang juga berpendapat bahwa penekanan kuat pada pelepasan diri dari kehidupan duniawi, monastisisme, dan penyangkalan diri bisa bertentangan dengan aspek sifat manusia yang mendorong pembangunan sosial, kemajuan ilmiah, kehidupan keluarga, dan pembangunan peradaban.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Yudaisme',

            answerNature: `
Dalam Yudaisme, cara hidup berakar pada hukum perjanjian yang diwahyukan kepada Musa dan dilestarikan dalam Alkitab Ibrani (Tanakh). Kerangka kerja religius berfokus pada kepatuhan terhadap perintah-perintah ilahi dan pemeliharaan hubungan perjanjian antara Tuhan dan Anak-anak Israel.
      `,

            objectiveCritique: `
Kritikus berpendapat bahwa Yudaisme secara historis berkembang terutama sebagai tradisi yang berpusat pada perjanjian yang terikat dengan bangsa tertentu, bukan sebagai agama misionaris universal yang ditujukan untuk seluruh umat manusia.

Dari sudut pandang kritik teks, beberapa sarjana — termasuk Richard Elliott Friedman dan lainnya — berpendapat bahwa Taurat mengalami proses kompilasi dan redaksi selama berabad-abad, terutama di sekitar dan setelah pembuangan Babilonia. Hal ini menyebabkan beberapa kritikus mempertanyakan apakah teks tersebut dapat dianggap sebagai wahyu yang dilestarikan dengan sempurna yang ditransmisikan secara langsung dalam bentuk aslinya.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kristen',

            answerNature: `
Kristen mengajarkan bahwa masalah sentral umat manusia adalah dosa dan keterpisahan dari Tuhan, dan keselamatan dicapai melalui keyakinan pada kematian Yesus yang penuh pengorbanan dan kebangkitan-Nya. Tujuan hidup dengan demikian dipahami melalui pendamaian dengan Tuhan dan transformasi spiritual.
      `,

            objectiveCritique: `
Secara historis, para sarjana mencatat bahwa tidak ada naskah asli Injil yang terselamatkan dalam bahasa Aram yang digunakan Yesus. Teks tertua yang bertahan adalah naskah bahasa Yunani yang ditulis beberapa dekade setelah kehidupan Yesus. Kritikus teks, seperti Bart Ehrman, telah mendokumentasikan keberadaan variasi naskah yang tak terhitung jumlahnya di antara salinan awal Perjanjian Baru.

Kritikus juga berpendapat bahwa Kristen secara historis memberikan penekanan lebih besar pada keselamatan spiritual dan pribadi daripada pengembangan kerangka hukum atau politik yang komprehensif yang mengatur ekonomi, hukum pidana, atau administrasi negara. Beberapa sejarawan menyarankan ini berkontribusi pada pemisahan akhir antara agama dan otoritas negara di banyak masyarakat Barat.
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
Islam menyajikan pemahaman komprehensif tentang tujuan manusia yang mengintegrasikan pengabdian spiritual dan tanggung jawab duniawi.

Al-Qur'an menyatakan:

"Aku tidak menciptakan jin dan manusia melainkan agar mereka beribadah kepada-Ku." (QS. Adz-Dzariyat: 56)

Dalam pemikiran Islam, ibadah tidak terbatas pada ritual, tetapi mencakup tindakan yang benar, keadilan, perilaku etis, pencarian pengetahuan, dan kontribusi positif kepada masyarakat.

Ajaran Islam berupaya menyeimbangkan pertumbuhan spiritual dengan keterlibatan praktis dalam kehidupan keluarga, ekonomi, tata kelola, amal, dan tanggung jawab sosial.
      `,

            objectiveCritique: `
Dari perspektif Islam, Al-Qur'an mewakili wahyu yang dilestarikan secara unik. Muslim berpendapat bahwa teksnya tetap tidak berubah dan terus ditransmisikan baik dalam naskah tertulis maupun hafalan lisan dari generasi-generasi awal Islam.

Contoh yang sering dikutip termasuk naskah kuno seperti naskah Al-Qur'an Birmingham dan tradisi hafalan lisan yang tersebar luas yang dipelihara oleh jutaan Muslim di seluruh dunia.

Hukum Islam (Syariah) juga disajikan sebagai kerangka etika dan hukum komprehensif yang menangani bidang-bidang seperti keuangan, amal, hukum keluarga, hukum pidana, dan tata kelola. Pendukung berpendapat bahwa ini memberikan Islam karakteristik sistem moral dan peradaban yang lengkap, bukan sekadar tradisi spiritual murni.
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

        title: 'Apa yang terjadi setelah Stasiun Terakhir?',

        subtitle: 'Takdir, keadilan, dan alam baka',

        intro: `
Tanpa keberadaan keadilan tertinggi setelah kematian, hidup bisa terasa sangat sewenang-wenang dan tidak terselesaikan secara moral. Para tiran bisa mati tanpa pertanggungjawaban, sementara korban bisa meninggalkan dunia tanpa mendapatkan keadilan. Ini memunculkan salah satu pertanyaan filosofis tertua umat manusia: apakah kematian adalah akhir, atau ada pengadilan terakhir di luar kehidupan duniawi?
  `,

        religions: {
          eastern: {
            title: 'Agama Timur',

            examples: ['Hindu', 'Buddha'],

            answerNature: `
Banyak tradisi Timur menerima konsep reinkarnasi, di mana jiwa atau aliran kesadaran melewati siklus kelahiran kembali yang berulang. Keadaan masa depan seseorang ditentukan oleh karma: konsekuensi moral dari tindakan masa lalu.
      `,

            objectiveCritique: `
Kritikus berpendapat bahwa reinkarnasi menimbulkan pertanyaan filosofis mengenai keadilan dan tanggung jawab. Jika seseorang menderita konsekuensi dalam kehidupan baru karena tindakan yang dilakukan dalam eksistensi sebelumnya yang tidak dapat diingat secara sadar, maka tujuan pendidikan dan moral dari hukuman menjadi sulit untuk dipahami.

Dari perspektif ini, tanggung jawab tanpa ingatan sadar bisa tampak terputus dari tanggung jawab moral yang signifikan.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materialisme dan ateisme',

            answerNature: `
Pandangan dunia materialistik dan ateistik umumnya menganggap kematian sebagai akhir dari eksistensi sadar. Manusia dipahami sebagai organisme biologis yang kesadarannya berhenti sepenuhnya setelah kematian fisik.
      `,

            objectiveCritique: `
Kritikus berpendapat bahwa materialisme ketat berjuang untuk memberikan dasar objektif bagi moralitas, keadilan, dan makna fundamental. Jika baik penindas maupun korban akhirnya menghilang ke dalam kehampaan tanpa pertanggungjawaban, maka konsep seperti pengorbanan, kewajiban moral, dan keadilan pada akhirnya bisa tampak subjektif atau konstruksi sosial, bukan sesuatu yang mengikat secara universal.

Namun, pendukung etika sekuler berpendapat bahwa moralitas masih bisa muncul melalui akal, empati, dan tanggung jawab sosial tanpa kepercayaan pada alam baka.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kristen',

            answerNature: `
Kristen mengajarkan bahwa keselamatan dan kehidupan kekal dicapai melalui keyakinan pada Yesus Kristus dan menerima penebusan pengorbanan-Nya atas dosa-dosa umat manusia. Surga dan keselamatan kekal dengan demikian terkait erat dengan keyakinan pada Kristus dan kasih karunia ilahi.
      `,

            objectiveCritique: `
Kritikus bertanya bagaimana keselamatan yang didasarkan terutama pada keyakinan berhubungan dengan prinsip-prinsip keadilan universal. Secara filosofis, beberapa orang berpendapat bahwa kerangka kerja ini dapat menyiratkan bahwa orang yang benar secara moral yang berjuang secara jujur dengan penerimaan doktrin teologis tertentu dapat ditolak keselamatannya, sementara orang lain yang telah melakukan kejahatan berat tetapi menerima keyakinan sesaat sebelum kematian, masih dapat mencapai pahala kekal.

Teolog Kristen sering menjawab bahwa keselamatan melibatkan baik iman yang tulus maupun pertobatan yang otentik, bukan sekadar keyakinan verbal.
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
Islam menyajikan alam baka sebagai sistem tanggung jawab moral penuh dan keadilan ilahi.

Al-Qur'an menyatakan:

"Orang yang berdosa tidak akan memikul dosa orang lain." (QS. Al-An'am: 164)

Keselamatan dalam Islam secara konsisten dikaitkan dengan iman dan tindakan yang benar:

"Orang-orang yang beriman dan beramal saleh..." (diulang di seluruh Al-Qur'an, termasuk 2:25)

Islam mengajarkan bahwa kehidupan duniawi adalah ujian sementara, bukan tempat pahala atau hukuman terakhir:

"Yang menciptakan mati dan hidup, untuk menguji kamu, siapa di antara kamu yang lebih baik amalnya." (QS. Al-Mulk: 2)
      `,

            objectiveCritique: `
Dalam teologi Islam, Hari Penghakiman mewakili pengadilan keadilan tertinggi di mana setiap tindakan, tidak peduli seberapa kecil, akan dipertanggungjawabkan.

Al-Qur'an menyatakan:

"Barangsiapa yang mengerjakan kebaikan seberat dzarrah pun, niscaya dia akan melihat (balasan)nya. Dan barangsiapa yang mengerjakan kejahatan seberat dzarrah pun, niscaya dia akan melihat (balasan)nya." (QS. Az-Zalzalah: 7–8)

Kerangka kerja ini berupaya melestarikan baik tanggung jawab individu maupun keadilan absolut, sambil menawarkan kepastian moral bahwa tidak ada tindakan penindasan atau kebaikan yang pada akhirnya hilang tanpa konsekuensi.
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
          'Perjalanan filosofis yang tenang namun mendalam yang mengeksplorasi pertanyaan terbesar umat manusia: Pencipta, tujuan eksistensi, moralitas, dan apa yang menanti setelah kematian.',

        subtitleHighlight:
          'Pencipta, tujuan eksistensi, moralitas, dan apa yang menanti setelah kematian.',

        scrollIndicator: 'Gulir ke bawah untuk memulai perjalanan',
      },

      storySection: {
        badge: 'Analogi Kereta',

        titleLine1: 'Sebelum Anda mengajukan pertanyaan',
        titleLine2: 'Tentang agama...',

        intro:
          'Setiap manusia pada akhirnya sampai pada momen keheningan di mana distraksi memudar – dan pertanyaan terdalam akhirnya muncul ke permukaan.',

        ending: 'Kereta ini adalah planet Bumi,',
        ending2: 'dan perjalanan itu adalah hidup Anda.',
      },

      coreQuestions: {
        sectionLabel: 'Bagian Utama',
        title: 'Pertanyaan Fundamental',

        answerNatureTitle: 'Sifat Jawaban',

        philosophicalDiscussionTitle: 'Diskusi Filosofis',

        referencesTitle: 'Referensi',
      },

      futureResearch: {
        sectionLabel: 'Penelitian Masa Depan',

        title: 'Pertanyaan Lainnya',

        loaderBadge: 'Pertanyaan lainnya segera hadir',

        headingLine1: 'Perjalanan',
        headingLine2: 'berlanjut...',

        description:
          'Penelitian filosofis dan teologis tambahan sedang dipelajari dan dipersiapkan dengan pendekatan komparatif terstruktur yang sama.',

        topics: [
          'Moralitas',
          'Sains',
          'Mukjizat',
          'Kesadaran',
          'Kehendak Bebas',
          'Penderitaan',
          'Pelestarian Historis',
          'Nubuat',
          'Sifat Manusia',
          'Makna',
          'Peradaban',
          'Etika',
        ],

        footer: 'Bagian baru akan segera ditambahkan',
      },

      imageAlt: {
        hero: 'Perbandingan Agama',
      },
    },
  },
};
