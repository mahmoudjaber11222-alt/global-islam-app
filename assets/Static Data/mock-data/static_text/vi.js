export default {
  splash: {
    version: 'phiên bản',
    practice: 'luyện tập',
    share: 'chia sẻ',
    logo: 'islam toàn cầu',
  },
  homeApp: {
    north: 'bắc',
    east: 'đông',
    west: 'tây',
    south: 'nam',
    active: 'kibla đang hoạt động',
    disabled: 'Mở la bàn Kibla',
    welcome: 'Chào mừng trở lại',
    greet: 'Assalamu Alaikum',
    hour: 'giờ',
    minute: 'phút',
    second: 'giây',
    toLeft: 'bên trái của bạn',
    toRight: 'bên phải của bạn',
    fromNorth: 'từ hướng bắc',
  },
  quranApp: {
    medinan: 'Medina',
    meccan: 'Mecca',
    arabicName: 'tên bằng tiếng Ả Rập',
    englishName: 'tên bằng tiếng Anh',
    details: 'Chọn một câu để xem bản dịch và tafsir (giải thích)',
    selectRes: 'Chọn nguồn',
    retry: 'thử lại',
    loadErr1: 'Không thể tải giải thích. Vui lòng thử lại.',
    loadErr2: 'Tải thất bại',
    author: 'tác giả',
    explain: 'Giải thích',
  },
  qiblaApp: {
    compass: 'La bàn Kibla',
    accuracy: 'độ chính xác',
    offline: 'GPS ngoại tuyến',
    tracking: 'Theo dõi GPS',
    aligned:
      'Bạn đang đối mặt với Kibla. Giữ vững để có hướng cầu nguyện chính xác.',
    notAligned:
      'Giữ thiết bị nằm phẳng và xoay cho đến khi mũi tên chỉ về Kibla.',
    heading: 'Hướng thiết bị',
    turn: 'xoay',
    alignedQibla: 'Đã căn chỉnh với Kibla',
  },
  aiApp: {
    answer: 'câu trả lời',
  },
  prayerApp: {
    locationRequired: 'Cần dịch vụ định vị để có giờ cầu nguyện chính xác.',
    schedule: 'Lịch cầu nguyện',
    refresh: 'làm mới',
    sunrise: 'Bình minh',
    upcoming: 'Lần cầu nguyện tiếp theo',
  },
  settingsApp: {
    reciterTitle: 'Người đọc Adhan',
    reciterSub: 'Chọn giọng đọc bạn thích',
    notSelected: 'chưa chọn',
    preview: 'nghe thử',
    cancel: 'hủy',
    muezzin: 'Muezzin',
    preNot: 'Thông báo trước Adhan',
    preNotDet: 'Thông báo 15 phút trước giờ cầu nguyện',
    theme: 'Chế độ tối',
    dark: 'Hiện đang dùng chủ đề tối',
    light: 'Hiện đang dùng chủ đề sáng',
    about: 'Giới thiệu',
    selectReciter: 'Chọn người đọc',
  },
  athan: {
    mainTitle: 'ADHAN · LỜI KÊU GỌI CẦU NGUYỆN',
    stop: 'Dừng Adhan',
    error: 'Không thể tải âm thanh Adhan',
    prayerTime: 'Giờ cầu nguyện',
    play: 'phát',
    pause: 'tạm dừng',
    dismiss: 'bỏ qua',
  },
  athkarApp: {
    completed: 'Hoàn thành',
    remaining: 'còn lại',
    reset: 'đặt lại',
    athkar: 'Athkar',
    mention: 'dhikr',
    descM: 'Bắt đầu ngày mới với phước lành',
    descE: 'Kết thúc ngày với sự bảo vệ',
    remmember: 'Nhớ nhắc hàng ngày',
    cat: 'danh mục lời cầu nguyện',
    category: 'Danh mục',
  },
  contentNormal: {
    searchSection: {
      placeholder: 'Tìm hadith...',
      button: 'Tìm kiếm',
      books: {
        label: 'Sách',
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
      title: 'Ngôn ngữ hiện tại chưa được hỗ trợ',
      msg: 'Ngôn ngữ này hiện chưa được hỗ trợ trong cơ sở dữ liệu hadith.',
      description:
        'Tiếng Anh đã được chọn tự động để bạn vẫn có thể tìm kiếm và sử dụng. Bạn cũng có thể thử Chế độ nâng cao.',
    },

    initialPlaceholder:
      'Tìm hadith để xem chi tiết như đánh giá, người thuật lại và tham chiếu',

    loading: { label: 'Đang tải hadith...' },

    hadithCard: {
      showMore: 'Xem thêm',
      showLess: 'Thu gọn',
      header: {
        hadithPrefix: 'Hadith #',
        referencesTitle: 'Tham chiếu',
        referenceLabel: 'Tham chiếu',
        inBookReference: 'Tham chiếu trong sách',
        arabicReference: 'Tham chiếu tiếng Ả Rập',
      },
    },

    emptyState: 'Không tìm thấy hadith',

    pagination: {
      prev: 'Trước',
      next: 'Tiếp',
    },
  },

  switch: {
    title: {
      advanced: 'Chế độ nâng cao',
      normal: 'Chế độ thường',
    },
    description: {
      advanced: 'Tìm kiếm ngữ nghĩa hiểu sâu hơn',
      normal: 'Tìm kiếm nhanh theo bộ lọc',
    },
  },

  navbar: {
    routes: {
      home: 'Trang chủ',
      prayers: 'Cầu nguyện',
      quran: "Kinh Qur'an",
      athkar: 'Tụng niệm',
      articles: 'Bài viết',
      articlesNested: {
        islamicHistory: 'Lịch sử Hồi giáo',
        prayerInIslam: 'Cầu nguyện trong Hồi giáo',
        womenInIslam: 'Phụ nữ trong Hồi giáo',
        purification: 'Thanh tẩy',
      },
      learn: 'Học',
      learnNested: {
        quranTajweed: "Học Qur'an & Tajweed",
        arabic: 'Học tiếng Ả Rập',
      },
      dashboard: 'Bảng điều khiển',
      aiAssistant: 'Trợ lý AI',
    },
  },

  hero: {
    title: {
      explore: 'Khám phá Hồi giáo với',
      clarity: 'Sự rõ ràng',
      peace: '& Bình an',
    },

    description:
      'Học hỏi, đặt câu hỏi và khám phá sự hiểu biết chân thực thông qua AI và kiến thức có hướng dẫn được thiết kế cho sự rõ ràng và suy ngẫm.',

    actions: {
      introductionToIslam: 'Tìm hiểu về Hồi giáo',
      islamQA: 'Hỏi đáp Hồi giáo (Trợ lý AI)',
      continueWebsite: 'Tiếp tục vào trang web',
    },
  },
  learning: {
    quran: {
      title: "Học Kinh Qur'an & Tajweed",
      subtitle:
        "Cải thiện việc đọc Kinh Qur'an của bạn và hiểu các quy tắc Tajweed từng bước một.",
    },
    arabic: {
      title: 'Học tiếng Ả Rập',
      subtitle:
        'Phát triển kỹ năng tiếng Ả Rập của bạn thông qua các bài học rõ ràng và có cấu trúc.',
    },
    default: {
      title: 'Phần học tập',
      subtitle:
        'Khám phá nội dung giáo dục được thiết kế để củng cố kiến thức và sự hiểu biết của bạn.',
    },
  },
  explore: {
    searchBar: {
      title: 'Tìm kiếm bộ sưu tập Hadith',
      subtitle: 'Tìm kiếm tự nhiên theo chủ đề, ý nghĩa hoặc câu đầy đủ.',
      placeholder: 'Ví dụ: hadith về lòng hiếu thảo với cha mẹ',
      button: 'Tìm kiếm',
    },

    header: {
      title: 'Thư viện tìm kiếm Hadith',
      subtitle:
        'Khám phá ngay các hadith xác thực với trải nghiệm đọc hiện đại.',
    },

    content: {
      heroTitle: 'Khám phá các bộ sưu tập Hadith xác thực với tìm kiếm mạnh mẽ',

      loading: {
        label: 'Đang tìm kiếm bộ sưu tập Hadith...',
      },

      error: {
        title: 'Không thể tải Hadith',
        message:
          'Hiện không thể lấy các lời truyền. Vui lòng kiểm tra kết nối và thử lại.',
      },

      empty: {
        title: 'Không tìm thấy Hadith phù hợp',
      },

      card: {
        reference: 'Tham chiếu Hadith',
        readMore: 'Đọc toàn bộ hadith',
      },
    },
  },

  home: {
    news: {
      title: 'Cập nhật cộng đồng Hồi giáo',
      subtitle: 'Cập nhật những tin tức quan trọng từ thế giới Hồi giáo',
    },

    prayer: {
      title: 'Đếm ngược thời gian cầu nguyện',
      subtitle: 'Chuẩn bị cho buổi cầu nguyện tiếp theo',
      button: 'Xem thời gian cầu nguyện',
      nextPrayerLabel: 'Cầu nguyện tiếp theo lúc:',
    },

    athkar: {
      title: 'Azkar sáng và tối',
      subtitle: 'Nhắc nhở hằng ngày để kết nối trái tim',
      button: 'Xem thêm azkar',
    },

    qibla: {
      title: 'Hướng Qibla',
      subtitle: 'Tìm hướng Kaaba ở bất cứ đâu bạn ở',
      locationLoading: 'Đang lấy vị trí...',
      enableLocation: 'Bật vị trí',
      refreshLocation: 'Làm mới hướng Qibla',
      warning:
        'Nếu thiết bị không hỗ trợ cảm biến định hướng, độ chính xác la bàn có thể bị ảnh hưởng.',
      errorTitle: 'Quyền bị từ chối',
    },
  },

  prayers: {
    nextLabel: 'Cầu nguyện tiếp theo lúc',
    header: {
      title: 'Thời gian cầu nguyện',
      subtitle: 'Khoảnh khắc kết nối hằng ngày với Đấng Tạo Hóa',
    },
    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },
    qibla: {
      loading: 'Đang lấy vị trí...',
      warning:
        'Nếu hệ điều hành không hỗ trợ định hướng, điều này ảnh hưởng đến tính toán la bàn.',
      errorTitle: 'Quyền bị từ chối',
      enableLocation: 'Bật vị trí',
      refreshLocation: 'Làm mới hướng Qibla',
    },
    list: {
      warning: 'Thời gian có thể thay đổi nhẹ tùy phương pháp tính toán.',
    },
  },

  quran: {
    header: {
      title: "Kinh Qur'an",
      subtitle: 'Người bạn đồng hành hằng ngày cho việc đọc và suy ngẫm',
    },

    search: {
      noResultTitle: 'Không có dữ liệu',
      noResultMessage: 'Không có dữ liệu để hiển thị',
    },
  },

  athkar: {
    title: 'Azkar hằng ngày',
    subtitle: 'Duy trì đều đặn việc tưởng nhớ và suy ngẫm mỗi ngày',
  },

  ai: {
    header: {
      title: 'Trợ lý AI Hồi giáo toàn cầu',
      subtitle:
        "Nhận câu trả lời Hồi giáo rõ ràng dựa trên Qur'an, Sunnah và kiến thức đáng tin cậy",
    },

    loading: {
      label: 'Đang tải...',
    },

    error: {
      title: 'Đã đạt giới hạn yêu cầu',
      message: 'Dịch vụ tri thức hiện không khả dụng. Vui lòng thử lại sau.',
    },

    input: {
      placeholder: 'Đặt câu hỏi về Hồi giáo...',
    },

    suggestions: [
      'Tôi có thể cầu nguyện nếu không có wudu không?',
      'Lãi suất (riba) có hoàn toàn bị cấm không?',
      'Quy định làm việc trong môi trường không halal',
      'Tôi có thể cầu nguyện khi đang đi du lịch không?',
      'Có được dùng nước hoa khi cầu nguyện không?',
      'Điều gì làm vô hiệu hóa lời cầu nguyện?',
      'Trì hoãn cầu nguyện vì công việc',
    ],

    footer: {
      disclaimer:
        'Trợ lý AI này cung cấp câu trả lời dựa trên nguồn kiến thức đáng tin cậy, bao gồm tài liệu Hồi giáo và tài liệu giáo dục đã được xác minh.',
      note: 'Câu trả lời chỉ mang tính thông tin và không thay thế lời khuyên của học giả khi cần thiết.',
    },
  },

  footer: {
    disclaimer:
      'Tất cả nội dung được hiển thị đều đến từ các nguồn gốc đáng tin cậy. Chúng tôi hoan nghênh phản hồi hoặc báo lỗi để xem xét và chỉnh sửa.',
    tagline: 'Được xây dựng cẩn thận để phục vụ nội dung Hồi giáo xác thực',
  },

  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Quay lại',
    },

    sections: {
      hadithText: 'Văn bản hadith',
      arabicText: 'Văn bản tiếng Ả Rập',
      explanation: 'Giải thích',
      authentication: 'Tính xác thực',
      lessons: 'Bài học & lợi ích',
    },
  },
  other: {
    note: 'Ghi chú',
    theLanguage: 'ngôn ngữ',
    part: 'Phần',
    translation: 'Bản dịch',
    verse: 'Câu',
    chapter: 'Chương',
    page: 'Trang',
    breakingNews: 'Tin nóng',
  },
  dailyRemined: {
    title: 'Ánh Sáng Hôm Nay',
    subtitle:
      'Hãy dừng lại và suy ngẫm về một câu kinh và Hadith được chọn cho ngày của bạn.',
  },
  baseFooter: {
    contact: {
      title: 'Liên hệ với chúng tôi',
      name: 'Tên của bạn',
      email: 'Email của bạn',
      msg: 'Tin nhắn của bạn',
      sendMsg: 'Gửi tin nhắn',
    },
    followUs: 'Theo dõi chúng tôi',
    QA: 'Truy cập nhanh',
    logoB:
      "Kinh Qur'an, Hadith, giờ cầu nguyện, trợ lý AI và các công cụ Hồi giáo hàng ngày—all trong một nền tảng hiện đại.",
    whatsapp: 'Trò chuyện trên WhatsApp',
    rsr: 'Đã đăng ký bản quyền',
  },
  compareRelg: {
    note: `Trang này trình bày một cái nhìn tổng quan so sánh về các tôn giáo lớn trên thế giới. Từ góc nhìn Hồi giáo, Thiên Kinh Qur'an khẳng định rằng các mặc khải thiêng liêng trước đây đã được gửi đến các dân tộc thời xưa, nhưng theo thời gian đã bị con người làm thay đổi (tahrif). Kinh Qur'an có chép: 'Chính Ta đã ban xuống Kinh Qur'an, và chính Ta sẽ là Đấng bảo vệ nó' (15:9). Trang này xem xét những điểm khác biệt đó dưới ánh sáng của các bằng chứng lịch sử và văn bản.`,
    mainTitle: 'Hành trình hợp lý qua các tôn giáo',
    headerTitle: 'Những câu hỏi định nghĩa sự tồn tại của con người',
    story: `
Hãy tưởng tượng bạn đột nhiên mở mắt và nhận ra mình đang ở trên một chuyến tàu sang trọng lao vút qua bóng tối vô tận với tốc độ cao. Xung quanh bạn đầy đủ mọi tiện nghi: những món ăn hảo hạng được phục vụ trên bàn ăn thanh lịch, màn hình giải trí và những chiếc gối lụa trên ghế ngồi êm ái.

Với cảm giác bất an, bạn hỏi người hành khách bên cạnh:
"Chúng ta đang ở đâu? Ai đã đưa chúng ta lên chuyến tàu này? Và chúng ta đang đi đâu?"

Điều ngạc nhiên nhất chính là phản ứng của họ.

Một người đáp một cách lạnh lùng:
"Việc của bạn là gì? Chỉ cần thưởng thức món ăn đi, nó rất tuyệt."

Người khác trả lời đầy mỉa mai:
"Tại sao phải tự làm khổ mình bằng những câu hỏi đó? Hãy tựa lưng vào ghế và xem phim đi."

Mọi người xung quanh bạn đang đắm chìm trong những thú vui của chuyến hành trình, nhưng bạn bị bao trùm bởi nỗi sợ hãi sâu sắc vì bạn biết rằng chuyến tàu này đang hướng tới ga cuối — nơi mà mọi hành khách cuối cùng đều phải xuống.

Trong khoảnh khắc đó, một câu hỏi quyết định nảy sinh:

Bạn sẽ phó mặc bản thân cho sự xa hoa và giải trí của chuyến hành trình, hay bạn sẽ tiếp tục tìm kiếm câu trả lời cho ba câu hỏi sâu sắc nhất:

Ai là Đấng Tạo Hóa?
Tại sao chúng ta ở đây?
Và điều gì đang chờ đợi chúng ta ở điểm cuối?

Chuyến tàu này chính là hành tinh Trái Đất, và hành trình này chính là cuộc đời của bạn.

Vì con người không có sẵn những câu trả lời này từ khi sinh ra, các tôn giáo đã ra đời như những "bản hướng dẫn sử dụng", trong đó mỗi tôn giáo đều khẳng định rằng mình đến trực tiếp từ người thiết kế con tàu.

Hãy cùng phân tích những bản hướng dẫn này dưới một góc nhìn bình tĩnh và hợp lý.
  `,
    core: {
      q1: {
        id: 'q1',

        title: 'Ai là Đấng Tạo Hóa?',

        intro: `
Dưới góc độ triết học và logic, Đấng Tạo Hóa với tư cách là "Nguyên nhân đầu tiên" của vũ trụ phải hoàn toàn siêu việt, vượt ra ngoài vật chất, thời gian và không gian. Nếu Đấng Tạo Hóa bị ràng buộc bởi đói khát, mệt mỏi, giới hạn vật lý hay khung không gian, thì thực thể đó về mặt logic sẽ mất đi tư cách là Đấng Tạo Hóa tuyệt đối và trở thành một thực thể được tạo ra và phụ thuộc. Một thực thể phụ thuộc không thể là nguồn gốc tất yếu của toàn bộ sự tồn tại.
  `,

        religions: {
          eastern: {
            title: 'Tôn giáo phương Đông',
            examples: ['Ấn Độ giáo', 'Phật giáo'],

            answerNature: `
Trong hình thức nguyên thủy nhất của mình, Phật giáo (Theravada) nhìn chung là phi thần giáo; không tập trung vào sự tồn tại của một vị Thần Sáng Thế, mà xem sự tồn tại là kết quả của các quá trình tự nhiên vĩnh cửu, luật nhân quả và các quy luật về sự phụ thuộc lẫn nhau.

Ngược lại, Ấn Độ giáo thường nói về một thực tại siêu hình cơ bản được gọi là "Brahman". Tuy nhiên, trên thực tế, thực tại tối cao này biểu hiện qua vô số hình thái và vị thần, bao gồm cả các hình tượng người và động vật như Vishnu, Shiva và Kali.
      `,

            objectiveCritique: `
Dưới góc độ triết học, Phật giáo đối mặt với thách thức trong việc giải thích làm thế nào một vũ trụ có trình tự cao, vận hành bởi các quy luật nhất quán và độ chính xác vật lý lại có thể xuất hiện mà không cần một nguyên nhân đầu tiên có ý thức.

Trong các truyền thống Ấn Độ giáo thừa nhận các hóa thân thần thánh và hình tượng vật lý, thần tính gắn liền với các giới hạn, xung đột, đói khát, cái chết và hình thái vật chất. Một vị thần có thể được mô tả vật lý, nhập thế hoặc chịu sự chi phối của các quá trình tự nhiên, dưới góc nhìn hợp lý, có vẻ giống như một phần của sự tạo hóa hơn là một thực thể hoàn toàn vượt lên trên sự tạo hóa.
      `,

            refs: [
              'https://plato.stanford.edu/archives/sum2025/entries/buddha/',
              'https://plato.stanford.edu/archives/fall2024/entries/ethics-indian-buddhism/',
              'https://academic.oup.com/reference/62357/reference-article-abstract/554508422',
            ],
          },

          judaism: {
            title: 'Do Thái giáo',

            answerNature: `
Do Thái giáo khẳng định niềm tin vào một Đấng Tạo Hóa vượt lên trên các thần tượng và hình tượng vật lý. Thiên Chúa (YHWH) được hiểu là Đấng sáng tạo trời đất và về bản chất là tách biệt khỏi tạo vật của Ngài.
      `,

            objectiveCritique: `
Vấn đề triết học nảy sinh ở đây không phải là chính sự siêu việt, mà là về giới hạn của tính phổ quát của Thiên Chúa như xuất hiện trong một số đoạn của Kinh Thánh Do Thái. Một số văn bản mô tả Thiên Chúa trong mối quan hệ giao ước rất tập trung vào con cái Israel, điều mà các nhà phê bình giải thích là sự độc quyền sắc tộc.

Ngoài ra, một số đoạn sử dụng ngôn ngữ con người để mô tả Thiên Chúa, chẳng hạn như sự "hối tiếc" vì đã tạo ra con người (Sáng thế ký 6:6) hay sự "nghỉ ngơi" vào ngày thứ bảy sau khi sáng tạo (Xuất hành 31:17). Các nhà phê bình lập luận rằng những mô tả như vậy đặt ra câu hỏi liệu những thuộc tính này nên được hiểu theo nghĩa đen hay ẩn dụ.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Judaism',
              'https://www.britannica.com/topic/Judaism',
              'https://www.sefaria.org/Genesis.6.6',
              'https://www.sefaria.org/Exodus.31.17',
            ],
          },

          christianity: {
            title: 'Kitô giáo',

            answerNature: `
Kitô giáo dạy niềm tin vào một Thiên Chúa thông qua học thuyết Chúa Ba Ngôi: Chúa Cha, Chúa Con và Chúa Thánh Thần. Theo học thuyết về sự Nhập thể, ngôi hai của Ba Ngôi — Chúa Con — đã đi vào lịch sử nhân loại trong thân vị Chúa Giêsu Kitô, Đấng đã bị đóng đinh và chết vì sự cứu rỗi nhân loại.
      `,

            objectiveCritique: `
Về mặt triết học, các nhà phê bình lập luận rằng học thuyết Nhập thể tạo ra sự căng thẳng giữa các thuộc tính thần thánh và con người. Theo truyền thống, Thiên Chúa được mô tả là vĩnh hằng, vô hạn và vượt trên cái chết, trong khi con người được mô tả là hữu hạn, dễ bị tổn thương và phải chết.

Vấn đề nảy sinh khi tính thần thánh trọn vẹn và tính nhân loại trọn vẹn kết hợp trong một thân vị. Các nhà phê bình đặt câu hỏi làm thế nào một thực thể vĩnh hằng và độc lập có thể đồng thời trải nghiệm đói, ngủ, đau khổ và cái chết. Vấn đề này thường được xây dựng như một sự căng thẳng giữa tính siêu việt và sự Nhập thể, thay vì chỉ là một mầu nhiệm thần học.
      `,

            refs: [
              'https://en.wikipedia.org/wiki/Trinity',
              'https://www.britannica.com/topic/Trinity-Christianity',
              'https://www.britannica.com/topic/Incarnation-Christianity',
            ],
          },

          islam: {
            title: 'Hồi giáo',

            answerNature: `
Hồi giáo trình bày khái niệm về một Thiên Chúa hoàn toàn siêu việt và không thể phân chia. Kinh Quran tóm tắt khái niệm này trong Surah Al-Ikhlas:

"Hãy nói: Ngài là Allah, Đấng Duy Nhất. Allah, Đấng Tự Hữu. Ngài không sinh ra và cũng không bị sinh ra. Và không có gì tương xứng với Ngài." (Quran 112:1–4)

Trong Hồi giáo, Đấng Tạo Hóa hoàn toàn nằm ngoài hình thái vật chất và tách biệt khỏi sự tạo hóa:

"Không có gì tương xứng với Ngài." (Quran 42:11)

Thiên Chúa không bị giới hạn bởi thời gian, không gian hay các giới hạn vật lý. Kinh Quran cũng lưu ý:

"Sự buồn ngủ hay giấc ngủ không thể chạm đến Ngài." (Quran 2:255)

Trong thần học Hồi giáo, Thiên Chúa được hiểu là một thực thể độc lập, vĩnh hằng, tự thân đầy đủ và hoàn toàn tách biệt khỏi tạo vật.
      `,

            objectiveCritique: `
Từ góc độ triết học Hồi giáo, khái niệm này tìm cách duy trì sự siêu việt tuyệt đối bằng cách tránh chủ nghĩa nhân hình và sự Nhập thể. Mục tiêu là hòa hợp Đấng Tạo Hóa với ý tưởng về một Nguyên nhân đầu tiên độc lập và tất yếu, không bị phụ thuộc vào các giới hạn của một thực thể được tạo ra.
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

        title: 'Con đường và mục đích sống là gì?',

        intro: `
Nếu có một Đấng Tạo Hóa khôn ngoan, thật phi lý khi cho rằng nhân loại bị bỏ mặc mà không có những hướng dẫn giải thích mục đích của sự tồn tại, trách nhiệm đạo đức và các nguyên tắc cần tuân thủ. Giống như các hệ thống phức tạp cần hướng dẫn từ người thiết kế, các tôn giáo khẳng định rằng họ cung cấp khuôn khổ giúp con người hiểu tại sao chúng ta ở đây và nên sống như thế nào.
  `,

        religions: {
          eastern: {
            title: 'Tôn giáo phương Đông',

            examples: ['Ấn Độ giáo', 'Phật giáo'],

            answerNature: `
Các truyền thống phương Đông như Phật giáo và Ấn Độ giáo nhìn chung dựa trên các giáo lý triết học, các thực hành thiền định và sự chiêm nghiệm được phát triển bởi các bậc thầy tâm linh và hiền triết.

Trong Phật giáo, mục đích tối hậu là giải thoát khỏi đau khổ và thoát khỏi vòng luân hồi bằng cách đạt đến Niết bàn — trạng thái của sự siêu việt và giải thoát nội tại.

Trong nhiều truyền thống Ấn Độ giáo, mục đích là giải thoát tâm linh (Moksha), có thể đạt được thông qua sự tận hiến, kiến thức, thiền định hoặc hành động có kỷ luật.
      `,

            objectiveCritique: `
Các nhà phê bình lập luận rằng các hệ thống này chủ yếu mang tính triết học và thực nghiệm, thay vì dựa trên một mặc khải có thể kiểm chứng từ một Đấng Tạo Hóa siêu việt.

Một số người cũng lập luận rằng việc nhấn mạnh mạnh mẽ vào việc từ bỏ cuộc sống thế gian, tu hành và buông bỏ bản ngã có thể xung đột với các khía cạnh của bản chất con người thúc đẩy sự phát triển xã hội, tiến bộ khoa học, cuộc sống gia đình và văn minh.
      `,

            refs: [
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/nirvana-religion',
              'https://www.britannica.com/topic/moksha-Indian-religion',
            ],
          },

          judaism: {
            title: 'Do Thái giáo',

            answerNature: `
Trong Do Thái giáo, lối sống bắt nguồn từ luật giao ước được mặc khải cho Môi-se và được lưu giữ trong Kinh Thánh Do Thái (Tanakh). Hệ thống tôn giáo tập trung vào việc tuân giữ các điều răn của Thiên Chúa và duy trì mối quan hệ giao ước giữa Thiên Chúa và con cái Israel.
      `,

            objectiveCritique: `
Các nhà phê bình lập luận rằng Do Thái giáo phát triển trong lịch sử như một truyền thống tập trung vào giao ước với một dân tộc cụ thể, thay vì là một tôn giáo truyền giáo phổ quát cho toàn nhân loại.

Dưới góc độ phân tích văn bản, một số học giả — bao gồm Richard Elliott Friedman — lập luận rằng Torah đã trải qua các quá trình biên soạn và chỉnh sửa trong nhiều thế kỷ, đặc biệt là trong và sau thời kỳ lưu đày ở Babylon. Điều này khiến một số nhà phê bình nghi ngờ liệu văn bản đó có thể được coi là một mặc khải được bảo tồn hoàn hảo trong hình thức nguyên thủy của nó hay không.
      `,

            refs: [
              'https://www.britannica.com/topic/Judaism',
              'https://en.wikipedia.org/wiki/Tanakh',
              'https://en.wikipedia.org/wiki/Documentary_hypothesis',
              'https://en.wikipedia.org/wiki/Richard_Elliott_Friedman',
            ],
          },

          christianity: {
            title: 'Kitô giáo',

            answerNature: `
Kitô giáo dạy rằng vấn đề cốt lõi của nhân loại là tội lỗi và sự xa cách Thiên Chúa, và sự cứu rỗi đạt được thông qua niềm tin vào sự hy sinh và phục sinh của Chúa Giêsu. Do đó, mục đích của cuộc sống được hiểu thông qua sự hòa giải với Thiên Chúa và sự biến đổi tâm linh.
      `,

            objectiveCritique: `
Các nhà sử học lưu ý rằng các bản thảo gốc của các Tin Mừng bằng tiếng Aramaic (ngôn ngữ của Chúa Giêsu) đã không còn được bảo tồn. Các văn bản cổ nhất còn sót lại là các bản thảo tiếng Hy Lạp được viết nhiều thập kỷ sau cuộc đời của Chúa Giêsu. Các nhà phê bình văn bản như Bart Ehrman đã ghi lại vô số biến thể trong các bản sao cổ nhất của Tân Ước.

Các nhà phê bình cũng lập luận rằng Kitô giáo trong lịch sử nhấn mạnh nhiều hơn vào sự cứu rỗi tâm linh và cá nhân, thay vì xây dựng các khuôn khổ pháp lý hoặc chính trị toàn diện cho kinh tế, luật hình sự hoặc quản lý nhà nước. Một số nhà sử học cho rằng điều này góp phần vào việc tách biệt giáo hội khỏi nhà nước sau này ở nhiều xã hội phương Tây.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Historical_reliability_of_the_Gospels',
              'https://en.wikipedia.org/wiki/Textual_criticism',
              'https://en.wikipedia.org/wiki/Bart_D._Ehrman',
            ],
          },

          islam: {
            title: 'Hồi giáo',

            answerNature: `
Hồi giáo đưa ra sự hiểu biết toàn diện về mục đích của con người thông qua sự tích hợp giữa sự tận hiến tâm linh và trách nhiệm thế gian.

Kinh Quran nêu rõ:

"Ta không tạo ra loài người và loài tinh linh để làm gì khác ngoài việc thờ phụng Ta." (Quran 51:56)

Trong tư tưởng Hồi giáo, việc thờ phụng không giới hạn trong các nghi lễ, mà bao gồm hành động đúng đắn, công lý, hành vi đạo đức, tìm kiếm kiến thức và đóng góp tích cực cho xã hội.

Giáo lý Hồi giáo hướng tới sự cân bằng giữa sự phát triển tâm linh và sự tham gia thực tiễn vào cuộc sống gia đình, kinh tế, quản lý, từ thiện và trách nhiệm xã hội.
      `,

            objectiveCritique: `
Từ góc độ Hồi giáo, Kinh Quran đại diện cho một mặc khải được bảo tồn một cách độc đáo. Người Hồi giáo lập luận rằng văn bản vẫn không thay đổi và được truyền đạt liên tục qua các bản thảo viết và học thuộc lòng bằng miệng từ các thế hệ đầu tiên của Hồi giáo.

Các ví dụ thường được trích dẫn là các văn bản cổ đại như bản thảo Kinh Quran Birmingham, và truyền thống học thuộc lòng bằng miệng to lớn được duy trì bởi hàng triệu người Hồi giáo trên khắp thế giới.

Luật Hồi giáo (Sharia) cũng được trình bày như một khung đạo đức và pháp lý bao gồm các lĩnh vực như tài chính, từ thiện, luật gia đình, luật hình sự và quản lý. Những người ủng hộ lập luận rằng điều này mang lại cho Hồi giáo đặc điểm của một hệ thống đạo đức và văn minh trọn vẹn, thay vì chỉ là một truyền thống tâm linh.
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

        title: 'Điều gì xảy ra sau ga cuối?',

        subtitle: 'Định mệnh, công lý và kiếp sau',

        intro: `
Nếu không có sự tồn tại của công lý tối hậu sau cái chết, cuộc sống có thể có vẻ rất tùy tiện và không có lời giải về mặt đạo đức. Những kẻ áp bức có thể chết mà không phải chịu trách nhiệm, và những nạn nhân có thể rời bỏ thế giới mà không tìm thấy công lý. Điều này gợi lên một trong những câu hỏi triết học lâu đời nhất của nhân loại: Cái chết là dấu chấm hết, hay có một sự phán xét cuối cùng ngoài cuộc đời thế gian?
  `,

        religions: {
          eastern: {
            title: 'Tôn giáo phương Đông',

            examples: ['Ấn Độ giáo', 'Phật giáo'],

            answerNature: `
Nhiều truyền thống phương Đông chấp nhận khái niệm luân hồi, nơi linh hồn hoặc dòng ý thức đi qua các vòng tái sinh lặp đi lặp lại. Trạng thái tương lai của mỗi cá nhân được quyết định bởi nghiệp (karma): kết quả đạo đức của các hành động trong quá khứ.
      `,

            objectiveCritique: `
Các nhà phê bình lập luận rằng luân hồi đặt ra các câu hỏi triết học về công lý và trách nhiệm. Nếu ai đó trong cuộc đời mới phải chịu hậu quả của những hành động từ kiếp trước mà họ không thể nhớ lại một cách có ý thức, thì mục đích giáo dục và đạo đức của hình phạt trở nên khó hiểu.

Từ góc độ này, trách nhiệm mà không có ký ức ý thức dường như bị tách rời khỏi trách nhiệm đạo đức có ý nghĩa.
      `,

            refs: [
              'https://www.britannica.com/topic/reincarnation',
              'https://plato.stanford.edu/entries/buddha/',
              'https://www.britannica.com/topic/karma-Indian-religion',
            ],
          },

          atheism_materialism: {
            title: 'Chủ nghĩa duy vật và vô thần',

            answerNature: `
Các thế giới quan duy vật và vô thần thường coi cái chết là dấu chấm hết của sự tồn tại có ý thức. Con người được hiểu là các sinh vật sinh học, mà ý thức của họ chấm dứt hoàn toàn sau khi chết về mặt vật lý.
      `,

            objectiveCritique: `
Các nhà phê bình lập luận rằng chủ nghĩa duy vật cứng nhắc gặp khó khăn trong việc cung cấp một cơ sở khách quan cho đạo đức, công lý và mục đích nền tảng. Nếu cả kẻ áp bức và nạn nhân đều biến mất vào hư vô mà không phải chịu trách nhiệm, các khái niệm như sự hy sinh, nghĩa vụ đạo đức và công lý có vẻ mang tính chủ quan hoặc do xã hội xây dựng, thay vì là những giá trị có tính ràng buộc phổ quát.

Tuy nhiên, những người ủng hộ đạo đức thế tục lập luận rằng đạo đức vẫn có thể nảy sinh thông qua lý trí, sự đồng cảm và trách nhiệm xã hội mà không cần niềm tin vào kiếp sau.
      `,

            refs: [
              'https://plato.stanford.edu/entries/naturalism/',
              'https://plato.stanford.edu/entries/atheism-agnosticism/',
              'https://www.britannica.com/topic/materialism-philosophy',
            ],
          },

          christianity: {
            title: 'Kitô giáo',

            answerNature: `
Kitô giáo dạy rằng sự cứu rỗi và cuộc sống vĩnh cửu đạt được thông qua niềm tin vào Chúa Giêsu Kitô và sự chấp nhận hy sinh của Ngài vì tội lỗi nhân loại. Thiên đàng và sự cứu rỗi vĩnh cửu gắn liền chặt chẽ với niềm tin vào Chúa Kitô và lòng thương xót của Thiên Chúa.
      `,

            objectiveCritique: `
Các nhà phê bình đặt câu hỏi làm thế nào sự cứu rỗi chủ yếu dựa trên niềm tin lại liên quan đến các nguyên tắc công lý phổ quát. Về mặt triết học, một số người lập luận rằng khuôn khổ này có thể có nghĩa là một người có đạo đức tốt, người chân thành cố gắng chấp nhận một số giáo lý thần học nhất định có thể bị loại trừ khỏi sự cứu rỗi, trong khi một người khác phạm tội ác nghiêm trọng nhưng lại có niềm tin vào giây phút cuối cùng có thể nhận được phần thưởng vĩnh cửu.

Các nhà thần học Kitô giáo thường trả lời rằng sự cứu rỗi bao gồm cả niềm tin chân thành và sự ăn năn thực sự, chứ không chỉ là lời tuyên xưng bằng lời nói.
      `,

            refs: [
              'https://www.britannica.com/topic/Christianity',
              'https://en.wikipedia.org/wiki/Salvation_in_Christianity',
              'https://www.bbc.co.uk/bitesize/guides/zyhmk2p/revision/1',
            ],
          },

          islam: {
            title: 'Hồi giáo',

            answerNature: `
Hồi giáo trình bày kiếp sau như một hệ thống trách nhiệm đạo đức và công lý tuyệt đối của Thiên Chúa.

Kinh Quran nêu rõ:

"Không một linh hồn nào phải gánh vác tội lỗi của người khác." (Quran 6:164)

Sự cứu rỗi trong Hồi giáo gắn liền một cách nhất quán với niềm tin và hành động tốt:

"Hãy báo tin vui cho những ai có đức tin và làm việc thiện..." (xuất hiện lặp đi lặp lại trong Quran, bao gồm 2:25)

Hồi giáo dạy rằng cuộc sống thế gian là một thử thách tạm thời, không phải là nơi để nhận phần thưởng hay hình phạt cuối cùng:

"Ngài là Đấng tạo ra cái chết và sự sống để thử thách các ngươi xem ai trong các ngươi có hành động tốt hơn." (Quran 67:2)
      `,

            objectiveCritique: `
Trong thần học Hồi giáo, Ngày Phán xét đại diện cho tòa án tối cao nơi mọi hành động, dù nhỏ đến đâu, cũng sẽ được tính đến.

Kinh Quran nêu rõ:

"Ai làm một điều thiện dù nhỏ bằng hạt bụi cũng sẽ thấy nó. Và ai làm một điều ác dù nhỏ bằng hạt bụi cũng sẽ thấy nó." (Quran 99:7–8)

Khuôn khổ này hướng tới việc duy trì cả trách nhiệm cá nhân và công lý tuyệt đối, đồng thời mang lại sự đảm bảo về mặt đạo đức rằng không có hành động áp bức hay tử tế nào sẽ trở nên vô ích ở điểm cuối.
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
      navbar: 'So sánh các tôn giáo',
      hero: {
        subtitle:
          'Một cuộc hành trình triết học bình tĩnh và sâu sắc qua những câu hỏi lớn nhất của nhân loại: Đấng Tạo Hóa, mục đích tồn tại, đạo đức và điều gì chờ đợi chúng ta sau cái chết.',

        subtitleHighlight:
          'Đấng Tạo Hóa, mục đích tồn tại, đạo đức và điều gì chờ đợi chúng ta sau cái chết.',

        scrollIndicator: 'Cuộn xuống để bắt đầu hành trình',
      },

      storySection: {
        badge: 'Phép ẩn dụ chuyến tàu',

        titleLine1: 'Trước khi bạn đặt câu hỏi',
        titleLine2: 'Về tôn giáo...',

        intro:
          'Mỗi con người cuối cùng đều đạt đến một khoảnh khắc im lặng khi những yếu tố gây nhiễu biến mất — và những câu hỏi sâu sắc nhất cuối cùng cũng lộ diện.',

        ending: 'Chuyến tàu này chính là hành tinh Trái Đất,',
        ending2: 'và hành trình này chính là cuộc đời của bạn.',
      },

      coreQuestions: {
        sectionLabel: 'Các phần chính',
        title: 'Các câu hỏi nền tảng',

        answerNatureTitle: 'Bản chất của câu trả lời',

        philosophicalDiscussionTitle: 'Thảo luận triết học',

        referencesTitle: 'Tài liệu tham khảo',
      },

      futureResearch: {
        sectionLabel: 'Nghiên cứu thêm',

        title: 'Các câu hỏi khác',

        loaderBadge: 'Các câu hỏi bổ sung đang được chuẩn bị',

        headingLine1: 'Hành trình',
        headingLine2: 'vẫn tiếp tục...',

        description:
          'Các nghiên cứu triết học và thần học bổ sung đang được chuẩn bị bằng cách sử dụng cùng một phương pháp so sánh có cấu trúc.',

        topics: [
          'Đạo đức',
          'Khoa học',
          'Phép lạ',
          'Ý thức',
          'Ý chí tự do',
          'Đau khổ',
          'Sự truyền thừa lịch sử',
          'Tiên tri',
          'Bản chất con người',
          'Ý nghĩa',
          'Văn minh',
          'Đạo đức học',
        ],

        footer: 'Các phần mới sẽ sớm được thêm vào',
      },

      imageAlt: {
        hero: 'So sánh các tôn giáo',
      },
    },
  },
};
