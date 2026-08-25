export default {
  splash: {
    version: 'sürüm',
    practice: 'pratik',
    share: 'paylaş',
    logo: 'küresel islam',
  },
  homeApp: {
    north: 'kuzey',
    east: 'doğu',
    west: 'batı',
    south: 'güney',
    active: 'kıble aktif',
    disabled: 'Kıble Pusulası Aç',
    welcome: 'Tekrar hoş geldiniz',
    greet: 'Esselamu Aleykum',
    hour: 'saat',
    minute: 'dakika',
    second: 'saniye',
    toLeft: 'solunuzda',
    toRight: 'sağınızda',
    fromNorth: 'kuzeyden',
  },
  quranApp: {
    medinan: 'Medeni',
    meccan: 'Mekki',
    arabicName: 'Arapça isim',
    englishName: 'İngilizce isim',
    details: 'Çeviri ve tefsirini (açıklamasını) görmek için bir ayet seçin',
    selectRes: 'Kaynak Seç',
    retry: 'tekrar dene',
    loadErr1: 'Açıklama yüklenemedi. Lütfen tekrar deneyin.',
    loadErr2: 'Getirilemedi',
    author: 'yazar',
    explain: 'Açıklama',
  },
  qiblaApp: {
    compass: 'Kıble Pusulası',
    accuracy: 'doğruluk',
    offline: 'GPS çevrimdışı',
    tracking: 'GPS takibi',
    aligned: 'Kıbleye dönük durumdasınız. Doğru namaz yönü için sabit tutun.',
    notAligned: 'Cihazınızı düz tutun ve ok Kıbleyi gösterene kadar döndürün.',
    heading: 'Cihaz yönü',
    turn: 'döndür',
    alignedQibla: 'Kıble ile hizalı',
  },
  aiApp: {
    answer: 'cevap',
  },
  prayerApp: {
    locationRequired: 'Doğru namaz vakitleri için konum hizmetleri gereklidir.',
    schedule: 'Namaz Vakitleri',
    refresh: 'yenile',
    sunrise: 'Gün doğumu',
    upcoming: 'Yaklaşan Namaz',
  },
  settingsApp: {
    reciterTitle: 'Ezan Okuyucusu',
    reciterSub: 'Tercih ettiğiniz sesi seçin',
    notSelected: 'seçilmedi',
    preview: 'önizleme',
    cancel: 'iptal',
    muezzin: 'Müezzin',
    preNot: 'Ezan Öncesi Bildirim',
    preNotDet: 'Namaz vaktinden 15 dakika önce bildir',
    theme: 'Karanlık Mod',
    dark: 'Şu anda koyu tema',
    light: 'Şu anda açık tema',
    about: 'Hakkında',
    selectReciter: 'Okuyucu Seç',
  },
  athan: {
    mainTitle: 'EZAN · NAMAZ ÇAĞRISI',
    stop: 'Ezani Durdur',
    error: 'Ezan sesi yüklenemedi',
    prayerTime: 'Namaz Vakti',
    play: 'oynat',
    pause: 'duraklat',
    dismiss: 'kapat',
  },
  athkarApp: {
    completed: 'Tamamlandı',
    remaining: 'kalan',
    reset: 'sıfırla',
    athkar: 'Ezkâr',
    mention: 'zikir',
    descM: 'Gününüze bereketle başlayın',
    descE: 'Gününüzü koruma ile sonlandırın',
    remmember: 'Günlük Zikir',
    cat: 'dua kategorileri',
    category: 'Kategori',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Hadis ara...',
      button: 'Ara',
      books: {
        label: 'Kitap',
        options: {
          bukhari: 'Buhari',
          muslim: 'Müslim',
          tirmidhi: 'Tirmizi',
          abudawood: 'Ebu Davud',
          nasai: 'Nesai',
          ibnmajah: 'İbn Mace',
        },
      },
    },

    fallbackLanguageToast: {
      title: 'Mevcut dil henüz desteklenmiyor',
      msg: 'Bu dil şu anda hadis veri seti tarafından desteklenmiyor.',
      description:
        'Hadisleri sorunsuz bir şekilde arayıp görüntüleyebilmeniz için İngilizce otomatik olarak yedek dil olarak seçildi. Daha geniş çoklu dil desteği ve daha iyi sonuçlar için Gelişmiş Modu da deneyebilirsiniz.',
    },

    initialPlaceholder:
      'Hadis derecelendirme, raviler ve referans gibi detayları görmek için arama yapın',

    loading: {
      label: 'Hadisler yükleniyor...',
    },

    hadithCard: {
      showMore: 'Daha fazla göster',
      showLess: 'Daha az göster',

      header: {
        hadithPrefix: 'Hadis #',
        referencesTitle: 'Referanslar',
        referenceLabel: 'Referans',
        inBookReference: 'Kitap içi referans',
        arabicReference: 'Arapça referans',
      },
    },

    emptyState: 'Hadis bulunamadı',

    pagination: {
      prev: 'Önceki',
      next: 'Sonraki',
    },
  },

  switch: {
    title: {
      advanced: 'Gelişmiş Mod',
      normal: 'Normal Mod',
    },

    description: {
      advanced: 'Daha derin anlayışa sahip semantik arama',
      normal: 'Hızlı filtre tabanlı arama',
    },
  },

  navbar: {
    routes: {
      home: 'Ana Sayfa',
      prayers: 'Namazlar',
      quran: "Kur'an",
      athkar: 'Zikirler',
      articles: 'Makaleler',

      articlesNested: {
        islamicHistory: 'İslam Tarihi',
        prayerInIslam: "İslam'da Namaz",
        womenInIslam: "İslam'da Kadınlar",
        purification: 'Temizlik ve Abdest',
      },

      learn: 'Öğren',

      learnNested: {
        quranTajweed: "Kur'an ve Tecvid Öğren",
        arabic: 'Arapça Öğren',
      },

      dashboard: 'Panel',
      aiAssistant: 'Yapay Zeka Asistanı',
    },
  },

  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'İslam’ı birlikte keşfet',
      clarity: 'Açıklık',
      peace: '& Huzur',
    },

    description:
      'Netlik ve tefekkür için tasarlanmış yapay zeka ve rehberli bilgi ile öğrenin, soru sorun ve gerçek anlayışı keşfedin.',

    actions: {
      introductionToIslam: 'İslam’ı Öğren',
      islamQA: 'İslam Soru-Cevap (Yapay Zeka Asistanı)',
      continueWebsite: 'Siteye Devam Et',
    },
  },
  learning: {
    quran: {
      title: 'Kur’an ve Tecvid Öğren',
      subtitle:
        'Kur’an tilavetinizi geliştirin ve Tecvid kurallarını adım adım anlayın.',
    },
    arabic: {
      title: 'Arapça Öğren',
      subtitle:
        'Açık ve yapılandırılmış derslerle Arapça dil becerilerinizi geliştirin.',
    },
    default: {
      title: 'Öğrenme Bölümü',
      subtitle:
        'Bilginizi ve anlayışınızı güçlendirmek için tasarlanmış eğitim içeriklerini keşfedin.',
    },
  },
  explore: {
    searchBar: {
      title: 'Hadis Koleksiyonlarını Ara',

      subtitle:
        'Konular, anlamlar veya tam cümleler kullanarak doğal şekilde arama yapın.',

      placeholder: 'Örnek: Anne babaya iyilik hakkında hadis',

      button: 'Ara',
    },

    header: {
      title: 'Hadis Arama Kütüphanesi',
      subtitle: 'Modern bir okuma deneyimiyle sahih hadisleri anında keşfedin.',
    },

    content: {
      heroTitle: 'Güçlü arama ile sahih hadis koleksiyonlarını keşfedin',

      loading: {
        label: 'Hadis koleksiyonları aranıyor...',
      },

      error: {
        title: 'Hadis yüklenemedi',
        message:
          'Şu anda rivayetler alınamadı. Lütfen bağlantınızı kontrol edip tekrar deneyin.',
      },

      empty: {
        title: 'Eşleşen hadis bulunamadı',
      },

      card: {
        reference: 'Hadis Kaynağı',
        readMore: 'Hadisin tamamını oku',
      },
    },
  },

  home: {
    news: {
      title: 'Müslüman Topluluk Güncellemeleri',
      subtitle: 'İslam dünyasından önemli gelişmeleri takip edin',
    },

    prayer: {
      title: 'Namaz Geri Sayımı',
      subtitle: 'Bir sonraki namaza hazırlanın',
      button: 'Namaz vakitlerini gör',
      nextPrayerLabel: 'Sonraki namaz:',
    },

    athkar: {
      title: 'Sabah ve Akşam Zikirleri',
      subtitle: 'Kalbinizi bağlı tutan günlük anmalar',
      button: 'Daha fazla zikir gör',
    },

    qibla: {
      title: 'Kıble Yönü',
      subtitle: 'Nerede olursanız olun Kâbe yönünü bulun',
      locationLoading: 'Konumunuz alınıyor...',
      enableLocation: 'Konumu etkinleştir',
      refreshLocation: 'Kıble yönünü yenile',

      warning:
        'Cihazınız yön sensörlerini desteklemiyorsa pusula doğruluğu etkilenebilir.',

      errorTitle: 'İzin reddedildi',
    },
  },

  prayers: {
    nextLabel: 'Sonraki namaz:',

    header: {
      title: 'Namaz Vakitleri',
      subtitle: 'Yaratıcın ile günlük bağlantı anı',
    },

    times: {
      Fajr: 'Sabah',
      Dhuhr: 'Öğle',
      Asr: 'İkindi',
      Maghrib: 'Akşam',
      Isha: 'Yatsı',
    },

    qibla: {
      loading: 'Konumunuz alınıyor...',
      warning:
        'İşletim sisteminiz yön desteği sağlamıyorsa pusula hesaplaması etkilenebilir.',
      errorTitle: 'İzin reddedildi',
      enableLocation: 'Konumu etkinleştir',
      refreshLocation: 'Kıble yönünü yenile',
    },

    list: {
      warning:
        'Vakitler hesaplama yöntemine göre küçük farklılıklar gösterebilir.',
    },
  },

  quran: {
    header: {
      title: 'Kur’an',
      subtitle: 'Tilavet ve tefekkür için günlük yol arkadaşınız',
    },

    search: {
      noResultTitle: 'Veri yok',
      noResultMessage: 'Gösterilecek veri bulunamadı',
    },
  },

  athkar: {
    title: 'Günlük Zikirler',
    subtitle: 'Günlük anma ve tefekkürde istikrarınızı koruyun',
  },

  ai: {
    header: {
      title: 'Küresel İslami Yapay Zeka Asistanı',
      subtitle:
        'Kur’an, Sünnet ve güvenilir âlimlere dayalı açık İslami cevaplar alın',
    },

    loading: {
      label: 'Yükleniyor...',
    },

    error: {
      title: 'İstek limiti aşıldı',
      message:
        'Şu anda bilgi hizmetine ulaşılamıyor. Lütfen biraz sonra tekrar deneyin.',
    },

    input: {
      placeholder: 'İslam hakkında bir soru sorun...',
    },

    suggestions: [
      'Abdestim yoksa namaz kılabilir miyim?',
      'Faiz (riba) tamamen haram mıdır?',
      'Helal olmayan ortamda çalışmanın hükmü',
      'Yolculukta namaz kılabilir miyim?',
      'Namazda parfüm kullanmak caiz mi?',
      'Namazı bozan şeyler nelerdir?',
      'İş nedeniyle namazı geciktirmenin hükmü',
    ],

    footer: {
      disclaimer:
        'Bu yapay zeka asistanı, İslami referanslar ve doğrulanmış eğitim materyalleri dahil olmak üzere güvenilir bilgi kaynaklarına dayalı cevaplar sunmak üzere tasarlanmıştır.',

      note: 'Cevaplar yalnızca bilgilendirme amaçlıdır ve gerektiğinde âlimlerin görüşünün yerini almaz.',
    },
  },

  footer: {
    disclaimer:
      'Tüm içerikler orijinal ve güvenilir kaynaklardan alınmıştır. Hata bildirimleri ve geri bildirimler memnuniyetle karşılanır.',

    tagline: 'Otantik İslami içerik için özenle hazırlanmıştır',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadis',
      backButton: 'Geri dön',
    },

    sections: {
      hadithText: 'Hadis Metni',
      arabicText: 'Arapça Metin',
      explanation: 'Açıklama',
      authentication: 'Sahihlik',
      lessons: 'Faydalar ve Dersler',
    },
  },
  other: {
    note: 'Not',
    theLanguage: 'dil',
    part: 'Bölüm',
    translation: 'Çeviri',
    verse: 'Ayet',
    chapter: 'Sure',
    page: 'Sayfa',
    breakingNews: 'Son dakika',
  },
  dailyRemined: {
    title: 'Bugünün Işığı',
    subtitle: 'Gününüz için seçilen bir ayet ve hadisi durup düşünün.',
  },
  baseFooter: {
    contact: {
      title: 'Bize Ulaşın',
      name: 'Adınız',
      email: 'E-posta Adresiniz',
      msg: 'Mesajınız',
      sendMsg: 'Mesaj Gönder',
    },
    followUs: 'Bizi Takip Edin',
    QA: 'Hızlı Erişim',
    logoB:
      'Kur’an, Hadis, namaz vakitleri, yapay zeka asistanı ve günlük İslami araçlar—all tek bir modern platformda.',
    whatsapp: "WhatsApp'ta Sohbet Et",
    rsr: 'Tüm hakları saklıdır',
  },
  compareRelg: {
    note: `Bu sayfa, başlıca dünya dinlerinin karşılaştırmalı bir özetini sunmaktadır. İslami bir bakış açısıyla Kur'an, önceki ilahi vahiylerin geçmiş toplumlara gönderildiğini, ancak zamanla insan eliyle tahrifata (tahrif) uğradığını doğrulamaktadır. Kur'an'da şöyle buyrulmaktadır: \\"Şüphesiz o Zikr'i (Kur'an'ı) biz indirdik biz! Ve onun koruyucusu da elbette biziz.\\" (15:9). Bu sayfa, söz konusu farklılıkları tarihi ve metinsel kanıtlar ışığında incelemektedir.`,
    mainTitle: 'Dinler Arasında Rasyonel Bir Yolculuk',
    headerTitle: 'İnsan Varlığını Tanımlayan Sorular',
    story: `
Aniden gözlerinizi açtığınızı ve yüksek hızla sonsuz bir karanlıkta ilerleyen lüks bir trende olduğunuzu fark ettiğinizi hayal edin. Çevreniz her türlü konforla çevrili: zarif masalarda servis edilen zengin yemekler, film ekranları ve yumuşak koltuklarda ipek yastıklar.

Huzursuz bir hisle yanınızdaki yolcuya sorarsınız:
"Neredeyiz? Bizi bu trene kim koydu? Ve nereye gidiyoruz?"

En şaşırtıcı olan ise onların tepkisidir.

Biri soğuk bir şekilde cevap verir:
"Sana ne? Sadece yemeğin tadını çıkar, harika."

Diğeri alaycı bir tavırla cevap verir:
"Neden böyle sorularla kendini yoruyorsun? Arkana yaslan ve filmi izle."

Çevrenizdeki herkes yolculuğun zevklerine dalıp gitmiş durumda, ancak sizi derin bir korku kaplıyor çünkü biliyorsunuz ki bu tren son durağa, yani her yolcunun sonunda inmek zorunda olduğu yere doğru hızla ilerliyor.

İşte o an, en önemli soru ortaya çıkıyor:

Yolculuğun lüksüne ve eğlencesine mi kapılacaksınız, yoksa en derin üç soruya cevap aramaya devam mı edeceksiniz:

Yaratıcı kimdir?
Neden buradayız?
Ve sonunda bizi ne bekliyor?

Bu tren Dünya gezegenidir ve yolculuk sizin hayatınızdır.

İnsanlar bu cevaplara doğuştan sahip olmadıkları için, dinler "kullanım kılavuzları" olarak ortaya çıkmıştır ve her biri doğrudan trenin tasarımcısından geldiğini iddia eder.

Gelin bu kılavuzları sakin ve rasyonel bir bakış açısıyla analiz edelim.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Yaratıcı kimdir?',

        intro: `
Felsefi ve mantıksal bir açıdan, evrenin "İlk Nedeni" olarak Yaratıcı; madde, zaman ve mekan sınırlarının ötesinde, mutlak bir aşkınlığa sahip olmalıdır. Eğer Yaratıcı açlığa, yorgunluğa, fiziksel sınırlara veya mekansal çerçevelere tabi olsaydı, böyle bir varlık mantıksal olarak mutlak Yaratıcı statüsünü kaybeder ve yaratılmış, bağımlı bir varlığa dönüşürdü. Bağımlı bir varlık, tüm varoluşun zorunlu kaynağı olamaz.
  `,

        religions: {
          eastern: {
            title: 'Doğu Dinleri',
            examples: ['Hinduizm', 'Budizm'],

            answerNature: `
Budizm, en eski formu olan Theravada'da genel olarak teistik değildir; bir yaratıcı tanrının varlığına odaklanmak yerine, varoluşu sonsuz doğal süreçlerin, nedenselliğin ve karşılıklı bağımlılık yasalarının bir sonucu olarak görür.

Hinduizm ise genellikle "Brahman" adı verilen temel bir metafizik gerçeklikten bahseder. Ancak pratikte bu en yüce gerçeklik; Vişnu, Şiva ve Kali gibi insan ve hayvan figürleri dahil olmak üzere sayısız form ve ilah aracılığıyla tezahür eder.
      `,

            objectiveCritique: `
Felsefi açıdan Budizm, tutarlı yasalar ve fiziksel hassasiyetle yönetilen, yüksek derecede düzenli bir evrenin bilinçli bir ilk neden olmaksızın nasıl ortaya çıkabileceğini açıklama zorluğuyla karşı karşıyadır.

İlahi enkarnasyonları ve fiziksel tasvirleri kabul eden Hindu geleneklerinde tanrısallık; sınırlamalar, çatışmalar, açlık, ölüm ve maddi formla ilişkilendirilir. Fiziksel olarak tasvir edilebilen, bedenlenebilen veya doğal süreçlere tabi olan bir tanrılık, rasyonel açıdan yaratılışı bütünüyle aşan bir varlıktan ziyade yaratılışın bir parçası gibi görünmektedir.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Yahudilik',

            answerNature: `
Yahudilik, putlardan ve fiziksel tasvirlerden yüce olan bir Yaratıcıya olan inancı onaylar. Tanrı (YHWH), göklerin ve yerin Yaratıcısı olarak anlaşılır ve özünde yarattıklarından ayrıdır.
      `,

            objectiveCritique: `
Burada ortaya çıkan felsefi sorun, aşkınlığın kendisinden ziyade, İbrani İncili'nin bazı bölümlerinde görüldüğü şekliyle Tanrı'nın evrenselliğinin sınırları ile ilgilidir. Bazı metinler Tanrı'yı, İsrailoğullarına yönelik güçlü bir ahit ilişkisi içinde tasvir eder ki bu da eleştirmenler tarafından etnik bir dışlayıcılık olarak yorumlanır.

Bunun yanı sıra, bazı pasajlar Tanrı'yı tanımlamak için insan dilini kullanır; örneğin insanı yarattığı için "pişmanlık" (Yaratılış 6:6) veya yaratılıştan sonra yedinci günde "dinlenme" (Çıkış 31:17). Eleştirmenler, bu tür betimlemelerin, söz konusu niteliklerin gerçek anlamda mı yoksa mecazi olarak mı anlaşılması gerektiği sorusunu gündeme getirdiğini savunurlar.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Hristiyanlık',

            answerNature: `
Hristiyanlık, Kutsal Üçleme (Baba, Oğul ve Kutsal Ruh) doktrini aracılığıyla tek bir Tanrı'ya inancı öğretir. Enkarnasyon (bedenleşme) doktrinine göre, Üçleme'nin ikinci kişisi olan Oğul, insanlık tarihine, insanlığın kurtuluşu için çarmıha gerilen ve ölen İsa Mesih şahsında girmiştir.
      `,

            objectiveCritique: `
Felsefi açıdan eleştirmenler, enkarnasyon doktrininin ilahi ve insani nitelikler arasında bir gerilim yarattığını savunurlar. Geleneksel olarak Tanrı sonsuz, sınırsız ve ölümün ötesinde olarak tanımlanırken; insanlar sonlu, kırılgan ve ölümlü olarak tanımlanır.

Sorun, tam ilahilik ve tam insanlığın tek bir kişide birleşmesiyle ortaya çıkar. Eleştirmenler, sonsuz ve bağımsız bir varlığın nasıl aynı anda açlık, uyku, acı ve ölümü deneyimleyebileceğini sorgularlar. Bu sorun genellikle sadece teolojik bir gizem olarak değil, aşkınlık ve enkarnasyon arasındaki bir gerilim olarak formüle edilir.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'İslam',

            answerNature: `
İslam, tamamen aşkın ve bölünemez bir Tanrı kavramı sunar. Kur'an bu kavramı İhlas Suresi'nde özetler:

"De ki: O, Allah'tır, tektir. Allah Samed'dir (her şey O'na muhtaçtır). Doğurmamış ve doğmamıştır. Hiçbir şey O'nun dengi değildir." (Kur'an 112:1-4)

İslam'da Yaratıcı tamamen maddi formun dışındadır ve yaratılıştan ayrıdır:

"O'nun benzeri hiçbir şey yoktur." (Kur'an 42:11)

Tanrı zaman, mekan veya fiziksel sınırlara tabi değildir. Kur'an ayrıca şunu belirtir:

"O'nu ne bir uyuklama ne de bir uyku tutar." (Kur'an 2:255)

İslami teolojide Tanrı, bağımsız, sonsuz, kendi kendine yeten ve yaratılıştan tamamen ayrı bir varlık olarak anlaşılır.
      `,

            objectiveCritique: `
İslami felsefi bakış açısından bu kavram, antropomorfizmden (insanlaştırma) ve enkarnasyondan kaçınarak mutlak aşkınlığı korumayı amaçlar. Hedef, Yaratıcı'yı, yaratılmış bir varlığın sınırlarına tabi olmayan, bağımsız ve zorunlu İlk Neden fikriyle uyumlu hale getirmektir.
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

        title: 'Yaşamın yolu ve amacı nedir?',

        intro: `
Eğer bilge bir Yaratıcı varsa, insanlığın varoluş amacını, ahlaki sorumluluğu ve uyulması gereken ilkeleri açıklayan rehberlikten yoksun bırakıldığını varsaymak mantıksızdır. Karmaşık sistemlerin tasarımcılarından talimatlar gerektirmesi gibi, dinler de insanın neden burada olduğumuzu ve nasıl yaşamamız gerektiğini anlamasına yardımcı olan bir çerçeve sunduklarını iddia ederler.
  `,

        religions: {
          eastern: {
            title: 'Doğu Dinleri',

            examples: ['Hinduizm', 'Budizm'],

            answerNature: `
Budizm ve Hinduizm gibi Doğu gelenekleri, genel olarak felsefi öğretilere, meditatif uygulamalara ve ruhani öğretmenler ile bilgeler tarafından geliştirilen tefekkürlere dayanır.

Budizm'de nihai amaç, acıdan kurtuluş ve Nirvana'ya -aşkınlık ve içsel özgürlük durumu- ulaşarak yeniden doğum döngüsünden çıkmaktır.

Pek çok Hindu geleneğinde amaç, bağlılık, bilgi, meditasyon veya disiplinli eylem yoluyla ulaşılan ruhsal kurtuluştur (Mokşa).
      `,

            objectiveCritique: `
Eleştirmenler, bu sistemlerin aşkın bir Yaratıcı'dan gelen doğrulanabilir bir vahiyden ziyade, birincil olarak felsefi ve deneyimsel olduğunu savunurlar.

Bazıları ayrıca, dünya hayatından el etek çekmeye, keşişliğe ve benlikten vazgeçmeye yapılan güçlü vurgunun; sosyal gelişimi, bilimsel ilerlemeyi, aile hayatını ve medeniyeti teşvik eden insan doğasının yönleriyle çatışabileceğini ileri sürer.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Yahudilik',

            answerNature: `
Yahudilikte yaşam yolu, Musa'ya vahyedilen ve İbrani İncili'nde (Tanah) korunan ahit yasasına dayanır. Dini çerçeve, Tanrı'nın emirlerine itaate ve Tanrı ile İsrailoğulları arasındaki ahit ilişkisini sürdürmeye odaklanır.
      `,

            objectiveCritique: `
Eleştirmenler, Yahudiliğin tarihsel olarak tüm insanlık için evrensel bir misyonerlik dini olarak değil, belirli bir halkla yapılan ahite odaklanmış bir gelenek olarak geliştiğini savunurlar.

Metinsel analiz açısından, Richard Elliott Friedman da dahil olmak üzere bazı araştırmacılar, Tevrat'ın özellikle Babil sürgünü ve sonrası dönemlerde derleme ve düzenleme süreçlerinden geçtiğini savunurlar. Bu durum, bazı eleştirmenlerin metnin orijinal biçimiyle kusursuz bir şekilde korunmuş bir vahiy olarak kabul edilip edilemeyeceğini sorgulamasına yol açar.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Hristiyanlık',

            answerNature: `
Hristiyanlık, insanlığın temel sorununun günah ve Tanrı'dan uzaklaşma olduğunu ve kurtuluşun İsa'nın kurban oluşuna ve dirilişine olan inançla elde edildiğini öğretir. Bu nedenle yaşamın amacı, Tanrı ile barışma ve ruhsal dönüşüm yoluyla anlaşılır.
      `,

            objectiveCritique: `
Tarihçiler, İncillerin Aramice (İsa'nın dili) olan orijinal el yazmalarının korunmadığını belirtirler. En eski korunmuş metinler, İsa'nın yaşamından on yıllar sonra yazılmış Yunanca el yazmalarıdır. Bart Ehrman gibi metin eleştirmenleri, Yeni Ahit'in en eski kopyalarındaki sayısız varyasyonu belgelemişlerdir.

Eleştirmenler ayrıca, Hristiyanlığın tarihsel olarak ekonomi, ceza hukuku veya devlet yönetimi için kapsamlı bir yasal veya siyasi çerçeve oluşturmaktan ziyade ruhsal ve kişisel kurtuluşa daha fazla vurgu yaptığını savunurlar. Bazı tarihçiler bunun, birçok Batı toplumunda kilise ve devletin daha sonra ayrılmasına katkıda bulunduğunu düşünür.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'İslam',

            answerNature: `
İslam, ruhsal bağlılık ve dünyevi sorumluluğun bütünleşmesi yoluyla insan amacına dair kapsamlı bir anlayış sunar.

Kur'an şöyle der:

"Ben cinleri ve insanları, ancak bana kulluk etsinler diye yarattım." (Kur'an 51:56)

İslami düşüncede ibadet sadece ritüellerle sınırlı değildir; doğru eylem, adalet, etik davranış, bilgi arayışı ve topluma olumlu katkıyı da içerir.

İslami öğreti; ruhsal büyüme ile aile hayatı, ekonomi, yönetim, hayırseverlik ve sosyal sorumluluğa pratik katılım arasında bir denge kurmayı amaçlar.
      `,

            objectiveCritique: `
İslami bakış açısından Kur'an, benzersiz bir şekilde korunmuş bir vahyi temsil eder. Müslümanlar, metnin değişmeden kaldığını ve İslam'ın ilk nesillerinden bu yana yazılı el yazmaları ve sözlü ezber yoluyla sürekli olarak aktarıldığını savunurlar.

Sıklıkla alıntılanan örnekler; Birmingham Kur'an'ı gibi kadim metinler ve dünya çapında milyonlarca Müslüman tarafından sürdürülen devasa sözlü ezber geleneğidir.

İslam hukuku (Şeriat) da; finans, hayırseverlik, aile hukuku, ceza hukuku ve yönetim gibi alanları kapsayan etik ve yasal bir çerçeve olarak sunulur. Destekçiler, bunun İslam'a sadece ruhsal bir gelenek değil, eksiksiz bir ahlaki ve medeniyet sistemi karakteri kazandırdığını iddia ederler.
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

        title: 'Son duraktan sonra ne olur?',

        subtitle: 'Kader, adalet ve ahiret',

        intro: `
Ölümden sonra nihai bir adaletin varlığı olmaksızın, yaşam çok keyfi ve ahlaki açıdan çözümsüz görünebilir. Zorbalar hesap vermeden ölebilir ve kurbanlar adalet sağlanmadan dünyadan ayrılabilir. Bu, insanlığın en eski felsefi sorularından birini gündeme getirir: Ölüm bir son mudur, yoksa dünya hayatının ötesinde nihai bir hesaplaşma mı vardır?
  `,

        religions: {
          eastern: {
            title: 'Doğu Dinleri',

            examples: ['Hinduizm', 'Budizm'],

            answerNature: `
Pek çok Doğu geleneği, ruhun veya bilinç akışının tekrarlanan yeniden doğum döngülerinden geçtiği reenkarnasyon kavramını kabul eder. Bireyin gelecekteki durumu karma tarafından belirlenir: geçmiş eylemlerin ahlaki sonuçları.
      `,

            objectiveCritique: `
Eleştirmenler, reenkarnasyonun adalet ve sorumlulukla ilgili felsefi soruları gündeme getirdiğini savunurlar. Eğer bir kişi yeni hayatında, bilinçli olarak hatırlayamadığı önceki bir varoluştaki eylemlerin sonuçlarını yaşıyorsa, cezanın eğitici ve ahlaki amacı anlaşılması zor bir hale gelir.

Bu perspektiften, bilinçli bir hafıza olmaksızın sorumluluk, anlamlı bir ahlaki sorumluluktan kopuk görünmektedir.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Materyalizm ve ateizm',

            answerNature: `
Materyalist ve ateist dünya görüşleri genellikle ölümü bilinçli varoluşun sonu olarak kabul eder. İnsanlar, bilinçleri fiziksel ölümden sonra tamamen sona eren biyolojik organizmalar olarak anlaşılır.
      `,

            objectiveCritique: `
Eleştirmenler, katı materyalizmin ahlak, adalet ve temel anlam için nesnel bir temel sağlamakta zorlandığını savunurlar. Eğer hem zalim hem de kurban sonunda eylemlerinin hesabını vermeden yokluğa karışırlarsa; fedakarlık, ahlaki görev ve adalet gibi kavramlar evrensel olarak bağlayıcı olmaktan ziyade öznel veya toplumsal olarak inşa edilmiş gibi görünebilir.

Seküler etiğin savunucuları ise, ahiret inancı olmaksızın ahlakın akıl, empati ve sosyal sorumluluk yoluyla hala ortaya çıkabileceğini savunurlar.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Hristiyanlık',

            answerNature: `
Hristiyanlık, kurtuluşun ve sonsuz yaşamın İsa Mesih'e iman ve O'nun insanlığın günahları için kurban oluşunu kabul etmekle elde edildiğini öğretir. Cennet ve sonsuz kurtuluş, Mesih'e iman ve Tanrı'nın lütfuyla yakından bağlantılıdır.
      `,

            objectiveCritique: `
Eleştirmenler, öncelikle inanca dayalı bir kurtuluşun evrensel adalet ilkeleriyle nasıl ilişkilendiğini sorgularlar. Felsefi açıdan bazıları, bu çerçevenin, belirli teolojik dogmaları kabul etmeye içtenlikle çabalayan ahlaki açıdan iyi bir insanın kurtuluştan mahrum kalabileceği; diğer yandan ağır suçlar işlemiş ancak son anda iman etmiş bir başkasının sonsuz bir ödül kazanabileceği anlamına gelebileceğini savunurlar.

Hristiyan ilahiyatçılar genellikle kurtuluşun sadece sözlü bir itirafı değil, hem içten bir imanı hem de gerçek bir tövbeyi içerdiğini yanıtını verirler.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'İslam',

            answerNature: `
İslam, ahireti mutlak ahlaki sorumluluk ve Tanrı'nın adaleti sistemi olarak sunar.

Kur'an şöyle der:

"Hiçbir günahkâr, başkasının günah yükünü yüklenmez." (Kur'an 6:164)

İslam'da kurtuluş; iman ve iyi amellerle tutarlı bir şekilde bağlantılıdır:

"İman edip iyi işler yapanlara müjdele..." (Kur'an genelinde tekrarlanır, 2:25 dahil)

İslam, dünya hayatının nihai bir ödül veya ceza yeri değil, geçici bir sınav olduğunu öğretir:

"O, hanginizin daha güzel iş yapacağınızı denemek için ölümü ve hayatı yarattı." (Kur'an 67:2)
      `,

            objectiveCritique: `
İslami teolojide Kıyamet Günü, ne kadar küçük olursa olsun her eylemin hesabının verileceği nihai mahkemeyi temsil eder.

Kur'an şöyle der:

"Kim zerre kadar iyilik yapmışsa onu görür. Kim de zerre kadar kötülük yapmışsa onu görür." (Kur'an 99:7-8)

Bu çerçeve, hem bireysel sorumluluğu hem de mutlak adaleti korumayı hedefler ve hiçbir zulüm veya iyilik eyleminin sonunda karşılıksız kalmayacağına dair ahlaki bir güvence sunar.
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
      navbar: 'Dinlerin Karşılaştırılması',
      hero: {
        subtitle:
          'İnsanlığın en büyük soruları üzerinde sakin ve derin bir felsefi yolculuk: Yaratıcı, varoluşun amacı, ahlak ve ölümden sonra bizi bekleyenler.',

        subtitleHighlight:
          'Yaratıcı, varoluşun amacı, ahlak ve ölümden sonra bizi bekleyenler.',

        scrollIndicator: 'Yolculuğa başlamak için aşağı kaydırın',
      },

      storySection: {
        badge: 'Tren Analojisi',

        titleLine1: 'Soruları sormadan önce',
        titleLine2: 'Din hakkında...',

        intro:
          'Her insan, dikkat dağıtıcı unsurlar ortadan kalktığında sessizliğin bir anına ulaşır – ve en derin sorular nihayet yüzeye çıkar.',

        ending: 'Bu tren Dünya gezegenidir,',
        ending2: 've yolculuk sizin hayatınızdır.',
      },

      coreQuestions: {
        sectionLabel: 'Ana bölümler',
        title: 'Temel sorular',

        answerNatureTitle: 'Cevabın doğası',

        philosophicalDiscussionTitle: 'Felsefi tartışma',

        referencesTitle: 'Referanslar',
      },

      futureResearch: {
        sectionLabel: 'Gelecek araştırmalar',

        title: 'Diğer sorular',

        loaderBadge: 'Daha fazla soru hazırlanıyor',

        headingLine1: 'Yolculuk',
        headingLine2: 'devam ediyor...',

        description:
          'Aynı yapılandırılmış karşılaştırmalı yaklaşım kullanılarak ek felsefi ve teolojik çalışmalar hazırlanmaktadır.',

        topics: [
          'Ahlak',
          'Bilim',
          'Mucizeler',
          'Bilinç',
          'Özgür irade',
          'Acı',
          'Tarihsel aktarım',
          'Kehanetler',
          'İnsan doğası',
          'Anlam',
          'Medeniyet',
          'Etik',
        ],

        footer: 'Yeni bölümler yakında eklenecek',
      },

      imageAlt: {
        hero: 'Dinlerin karşılaştırılması',
      },
    },
  },
};
