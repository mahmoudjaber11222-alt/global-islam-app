const Fiqh = [
  {
    key: "FARD",
    name_ar: "فرض",
    name_en: "Obligatory",
    layer: "FIQH",
    dimension: "RULING",
    value: "FARD",
    priority: 1
  },
  {
    key: "WAJIB",
    name_ar: "واجب",
    name_en: "Necessary",
    layer: "FIQH",
    dimension: "RULING",
    value: "WAJIB",
    priority: 2
  },
  {
    key: "SUNNAH_MUAKKADAH",
    name_ar: "سنة مؤكدة",
    name_en: "Emphasized Sunnah",
    layer: "FIQH",
    dimension: "RULING",
    value: "SUNNAH_MUAKKADAH",
    priority: 3
  },
  {
    key: "SUNNAH",
    name_ar: "سنة",
    name_en: "Sunnah",
    layer: "FIQH",
    dimension: "RULING",
    value: "SUNNAH",
    priority: 4
  },
  {
    key: "MUSTAHABB",
    name_ar: "مستحب",
    name_en: "Recommended",
    layer: "FIQH",
    dimension: "RULING",
    value: "MUSTAHABB",
    priority: 5
  },
  {
    key: "MUBAH",
    name_ar: "مباح",
    name_en: "Permissible",
    layer: "FIQH",
    dimension: "RULING",
    value: "MUBAH",
    priority: 6
  }
];
const Event = [
  {
    key: "EATING_START",
    name_ar: "عند بدء الأكل",
    name_en: "Start Eating",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "EATING_START",
    priority: 1
  },
  {
    key: "EATING_END",
    name_ar: "بعد الأكل",
    name_en: "After Eating",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "EATING_END",
    priority: 1
  },

  {
    key: "ENTER_HOME",
    name_ar: "دخول المنزل",
    name_en: "Entering Home",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "ENTER_HOME",
    priority: 2
  },
  {
    key: "EXIT_HOME",
    name_ar: "الخروج من المنزل",
    name_en: "Leaving Home",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "EXIT_HOME",
    priority: 2
  },

  {
    key: "ENTER_MOSQUE",
    name_ar: "دخول المسجد",
    name_en: "Entering Mosque",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "ENTER_MOSQUE",
    priority: 2
  },
  {
    key: "EXIT_MOSQUE",
    name_ar: "الخروج من المسجد",
    name_en: "Leaving Mosque",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "EXIT_MOSQUE",
    priority: 2
  },

  {
    key: "TRAVEL_START",
    name_ar: "بدء السفر",
    name_en: "Start Travel",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "TRAVEL_START",
    priority: 2
  },
  {
    key: "TRAVEL_RETURN",
    name_ar: "العودة من السفر",
    name_en: "Return from Travel",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "TRAVEL_RETURN",
    priority: 2
  },

  {
    key: "DISTRESS",
    name_ar: "عند الكرب",
    name_en: "Distress",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "DISTRESS",
    priority: 1
  },
  {
    key: "FEAR",
    name_ar: "عند الخوف",
    name_en: "Fear",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "FEAR",
    priority: 1
  },
  {
    key: "SICKNESS",
    name_ar: "عند المرض",
    name_en: "Sickness",
    layer: "CONTEXT",
    dimension: "EVENT",
    value: "SICKNESS",
    priority: 2
  }
];
const Prayer = [
  {
    key: "TAKBIR_IHRAM",
    name_ar: "تكبيرة الإحرام",
    name_en: "Opening Takbir",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "TAKBIR_IHRAM",
    priority: 1
  },
  {
    key: "QIYAM",
    name_ar: "القيام",
    name_en: "Standing",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "QIYAM",
    priority: 1
  },
  {
    key: "RUKU",
    name_ar: "الركوع",
    name_en: "Bowing",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "RUKU",
    priority: 1
  },
  {
    key: "SUJOOD",
    name_ar: "السجود",
    name_en: "Prostration",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "SUJOOD",
    priority: 1
  },
  {
    key: "TASHAHHUD",
    name_ar: "التشهد",
    name_en: "Tashahhud",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "TASHAHHUD",
    priority: 1
  },
  {
    key: "SALAM",
    name_ar: "السلام",
    name_en: "Salam",
    layer: "CONTEXT",
    dimension: "PRAYER",
    value: "SALAM",
    priority: 1
  }
];
const Gneral = [
  {
    key: "GENERAL_DHIKR",
    name_ar: "ذكر مطلق",
    name_en: "General Dhikr",
    layer: "STRUCT",
    dimension: "GENERAL",
    value: "GENERAL",
    priority: 2
  },
  {
    key: "PRAYER_DHIKR",
    name_ar: "أذكار الصلاة",
    name_en: "Prayer Dhikr",
    layer: "STRUCT",
    dimension: "GENERAL",
    value: "PRAYER",
    priority: 1
  },
  {
    key: "DAILY_DHIKR",
    name_ar: "أذكار يومية",
    name_en: "Daily Dhikr",
    layer: "STRUCT",
    dimension: "GENERAL",
    value: "DAILY",
    priority: 1
  },
  {
    key: "RITUAL_DHIKR",
    name_ar: "أذكار العبادات",
    name_en: "Ritual Dhikr",
    layer: "STRUCT",
    dimension: "GENERAL",
    value: "RITUAL",
    priority: 2
  }
];

const thikrEvent = {
  type: "event",
  data: [
    { name_ar: "دعاء دخول المنزل", name_en: "Entering Home Supplication" },
    { name_ar: "دعاء الخروج من المنزل", name_en: "Leaving Home Supplication" },

    { name_ar: "دعاء دخول المسجد", name_en: "Entering Mosque Supplication" },
    {
      name_ar: "دعاء الخروج من المسجد",
      name_en: "Leaving Mosque Supplication"
    },

    { name_ar: "دعاء بدء الطعام", name_en: "Before Eating Supplication" },
    { name_ar: "دعاء بعد الطعام", name_en: "After Eating Supplication" },

    {
      name_ar: "دعاء ركوب الدابة/المركبة",
      name_en: "Mounting/Vehicle Supplication"
    },
    { name_ar: "دعاء السفر", name_en: "Travel Supplication" },
    {
      name_ar: "دعاء الرجوع من السفر",
      name_en: "Return from Travel Supplication"
    },

    { name_ar: "دعاء دخول الخلاء", name_en: "Entering Bathroom Supplication" },
    {
      name_ar: "دعاء الخروج من الخلاء",
      name_en: "Leaving Bathroom Supplication"
    },

    { name_ar: "دعاء لبس الثوب", name_en: "Wearing Clothes Supplication" },
    { name_ar: "دعاء نزع الثوب", name_en: "Removing Clothes Supplication" },

    { name_ar: "دعاء عند المرض", name_en: "Supplication During Illness" },
    { name_ar: "دعاء عيادة المريض", name_en: "Visiting the Sick Supplication" },

    { name_ar: "دعاء عند الكرب", name_en: "Distress Supplication" },
    { name_ar: "دعاء عند الخوف", name_en: "Fear Supplication" },

    { name_ar: "دعاء عند نزول المطر", name_en: "Rain Supplication" },
    { name_ar: "دعاء عند سماع الرعد", name_en: "Thunder Supplication" },

    {
      name_ar: "دعاء عند رؤية مبتلى",
      name_en: "Seeing Afflicted Person Supplication"
    }
  ]
};

const thikrPrayer = {
  type: "prayer",
  data: [
    { name_ar: "تكبيرة الإحرام", name_en: "Opening Takbir" },
    { name_ar: "دعاء الاستفتاح", name_en: "Opening Supplication" },
    {
      name_ar: "الاستعاذة قبل القراءة",
      name_en: "Seeking Refuge Before Recitation"
    },
    { name_ar: "البسملة", name_en: "Saying Bismillah" },
    { name_ar: "قراءة الفاتحة", name_en: "Recitation of Al-Fatiha" },

    { name_ar: "التسبيح في الركوع", name_en: "Tasbeeh in Bowing (Ruku)" },
    {
      name_ar: "قول سمع الله لمن حمده",
      name_en: "Saying Sami‘a Allahu liman hamidah"
    },
    { name_ar: "قول ربنا لك الحمد", name_en: "Saying Rabbana laka al-hamd" },

    {
      name_ar: "التسبيح في السجود",
      name_en: "Tasbeeh in Prostration (Sujood)"
    },
    { name_ar: "الدعاء في السجود", name_en: "Supplication in Prostration" },
    { name_ar: "الذكر بين السجدتين", name_en: "Dhikr Between Prostrations" },

    { name_ar: "التشهد الأول", name_en: "First Tashahhud" },
    { name_ar: "التشهد الأخير", name_en: "Final Tashahhud" },
    {
      name_ar: "الصلاة على النبي في التشهد",
      name_en: "Sending Blessings on the Prophet"
    },
    { name_ar: "الدعاء قبل السلام", name_en: "Supplication Before Salam" },

    { name_ar: "السلام للخروج من الصلاة", name_en: "Salam to End Prayer" },

    {
      name_ar: "الاستغفار بعد الصلاة",
      name_en: "Seeking Forgiveness After Prayer"
    },
    {
      name_ar: "دعاء بعد الصلاة (اللهم أنت السلام)",
      name_en: "Post-Prayer Supplication"
    },
    {
      name_ar: "التسبيح بعد الصلاة (33-33-34)",
      name_en: "Tasbeeh After Prayer (33-33-34)"
    },
    { name_ar: "آية الكرسي بعد الصلاة", name_en: "Ayat al-Kursi After Prayer" }
  ]
};

const thikrGeneral = {
  type: "general",
  data: [
    { name_ar: "التسبيح", name_en: "Tasbeeh (Glorification of Allah)" },
    { name_ar: "التحميد", name_en: "Tahmeed (Praising Allah)" },
    { name_ar: "التهليل", name_en: "Tahleel (Declaring Oneness of Allah)" },
    { name_ar: "التكبير", name_en: "Takbeer (Magnifying Allah)" },

    {
      name_ar: "الحوقلة",
      name_en: "Hawqala (La hawla wa la quwwata illa بالله)"
    },
    { name_ar: "الاستغفار", name_en: "Seeking Forgiveness (Istighfar)" },
    {
      name_ar: "الصلاة على النبي",
      name_en: "Sending Blessings on the Prophet"
    },

    {
      name_ar: "ذكر لا إله إلا الله وحده لا شريك له",
      name_en: "Tahleel Extended Dhikr"
    },
    { name_ar: "ذكر سبحان الله وبحمده", name_en: "Subhan Allah wa bihamdih" },
    { name_ar: "ذكر سبحان الله العظيم", name_en: "Subhan Allah al-‘Azeem" },

    {
      name_ar: "ذكر سبحان الله والحمد لله ولا إله إلا الله والله أكبر",
      name_en: "Comprehensive Dhikr Set"
    },
    {
      name_ar: "ذكر لا حول ولا قوة إلا بالله",
      name_en: "La hawla wa la quwwata illa بالله"
    },

    { name_ar: "ذكر الباقيات الصالحات", name_en: "Al-Baqiyat As-Salihat" },
    {
      name_ar: "ذكر أحب الكلام إلى الله",
      name_en: "Most Beloved Words to Allah"
    },

    {
      name_ar: "ذكر مئة مرة (سبحان الله وبحمده)",
      name_en: "100x Subhan Allah wa bihamdih"
    },
    {
      name_ar: "ذكر مئة مرة (لا إله إلا الله وحده لا شريك له)",
      name_en: "100x Tahleel"
    },

    { name_ar: "الذكر المطلق", name_en: "Unrestricted Dhikr" },
    { name_ar: "الذكر بالقلب", name_en: "Dhikr of the Heart" },
    { name_ar: "الذكر باللسان", name_en: "Dhikr by Tongue" },
    { name_ar: "الذكر الكثير", name_en: "Abundant Dhikr" }
  ]
};
const thikrIbadat = {
  type: "ibada",
  data: [
    { name_ar: "التلبية في الحج والعمرة", name_en: "Talbiyah (Hajj & Umrah)" },
    { name_ar: "التكبير في أيام التشريق", name_en: "Takbeer in Tashreeq Days" },
    { name_ar: "الذكر عند الطواف", name_en: "Dhikr During Tawaf" },
    { name_ar: "الذكر عند السعي", name_en: "Dhikr During Sa‘i" },
    { name_ar: "الدعاء بعرفة", name_en: "Supplication on Arafah" },

    {
      name_ar: "الذكر عند رمي الجمرات",
      name_en: "Dhikr During Stoning Jamarat"
    },
    { name_ar: "التكبير عند الذبح", name_en: "Takbeer During Sacrifice" },
    {
      name_ar: "التسمية عند الذبح",
      name_en: "Saying Bismillah During Slaughter"
    },

    { name_ar: "دعاء الإفطار", name_en: "Breaking Fast Supplication" },
    { name_ar: "الذكر عند السحور", name_en: "Suhoor Dhikr" },

    { name_ar: "التكبير في العيد", name_en: "Eid Takbeer" },
    { name_ar: "الذكر في صلاة العيد", name_en: "Dhikr in Eid Prayer" },

    { name_ar: "الذكر في صلاة الجنازة", name_en: "Dhikr in Funeral Prayer" },
    { name_ar: "الدعاء للميت", name_en: "Supplication for the Deceased" },

    { name_ar: "الذكر في صلاة الاستسقاء", name_en: "Dhikr in Rain Prayer" },
    {
      name_ar: "الذكر في صلاة الكسوف والخسوف",
      name_en: "Dhikr in Eclipse Prayer"
    },

    {
      name_ar: "التكبير المطلق في عشر ذي الحجة",
      name_en: "General Takbeer in Dhul-Hijjah"
    },
    {
      name_ar: "التكبير المقيد بعد الصلوات",
      name_en: "Restricted Takbeer After Prayers"
    },

    { name_ar: "الذكر عند الإحرام", name_en: "Dhikr Upon Entering Ihram" },
    {
      name_ar: "الدعاء عند الحلق أو التقصير",
      name_en: "Supplication After Shaving/Cutting Hair"
    }
  ]
};
export default [
  { name_ar: "دعاء الاستيقاظ", name_en: "Supplication Upon Waking" },
  {
    name_ar: "ذكر عند التقلب أثناء النوم",
    name_en: "Dhikr When Turning During Sleep"
  },
  { name_ar: "دعاء النوم", name_en: "Supplication Before Sleep" },

  { name_ar: "أذكار الصباح", name_en: "Morning Adhkar" },
  { name_ar: "أذكار المساء", name_en: "Evening Adhkar" },

  { name_ar: "دعاء دخول الخلاء", name_en: "Entering Bathroom Supplication" },
  {
    name_ar: "دعاء الخروج من الخلاء",
    name_en: "Leaving Bathroom Supplication"
  },

  { name_ar: "دعاء الوضوء (قبل)", name_en: "Before Ablution Supplication" },
  { name_ar: "ذكر بعد الوضوء", name_en: "After Ablution Dhikr" },

  { name_ar: "دعاء لبس الثوب", name_en: "Wearing Clothes Supplication" },
  { name_ar: "دعاء نزع الثوب", name_en: "Removing Clothes Supplication" },
  { name_ar: "دعاء لبس ثوب جديد", name_en: "Wearing New Clothes Supplication" },

  { name_ar: "دعاء النظر في المرآة", name_en: "Mirror Supplication" },

  { name_ar: "دعاء دخول المنزل", name_en: "Entering Home Supplication" },
  { name_ar: "دعاء الخروج من المنزل", name_en: "Leaving Home Supplication" },

  { name_ar: "دعاء دخول المسجد", name_en: "Entering Mosque Supplication" },
  { name_ar: "دعاء الخروج من المسجد", name_en: "Leaving Mosque Supplication" },

  { name_ar: "دعاء بدء الطعام", name_en: "Before Eating Supplication" },
  {
    name_ar: "دعاء عند نسيان التسمية",
    name_en: "Supplication When Forgetting Bismillah"
  },
  { name_ar: "دعاء بعد الطعام", name_en: "After Eating Supplication" },

  { name_ar: "دعاء شرب الماء", name_en: "Drinking Water Supplication" },

  { name_ar: "دعاء ركوب المركبة", name_en: "Vehicle Supplication" },

  {
    name_ar: "الذكر عند العطاس (العاطس)",
    name_en: "Sneezing Dhikr (Sneezing Person)"
  },
  {
    name_ar: "الذكر عند العطاس (السامع)",
    name_en: "Sneezing Response (Listener)"
  },

  { name_ar: "السلام وإفشاؤه", name_en: "Greeting with Salam" },
  { name_ar: "رد السلام", name_en: "Returning Salam" },

  { name_ar: "الذكر عند الغضب", name_en: "Dhikr When Angry" },
  { name_ar: "الذكر عند الخوف", name_en: "Dhikr When Afraid" },

  { name_ar: "الذكر عند الكرب", name_en: "Distress Dhikr" },
  { name_ar: "الذكر عند الحزن", name_en: "Dhikr When Sad" },

  {
    name_ar: "الذكر عند رؤية ما يُعجب",
    name_en: "Dhikr When Seeing Something Pleasing"
  },
  {
    name_ar: "الذكر عند رؤية مبتلى",
    name_en: "Dhikr When Seeing an Afflicted Person"
  },

  { name_ar: "الذكر عند سماع الأذان", name_en: "Dhikr When Hearing Adhan" },
  { name_ar: "الدعاء بعد الأذان", name_en: "Supplication After Adhan" },

  { name_ar: "الذكر عند نزول المطر", name_en: "Rain Dhikr" },
  { name_ar: "الذكر عند سماع الرعد", name_en: "Thunder Dhikr" },

  { name_ar: "الاستغفار المطلق", name_en: "General Istighfar" },
  { name_ar: "الصلاة على النبي", name_en: "Sending Blessings on the Prophet" },
  { name_ar: "التسبيح والتحميد والتكبير", name_en: "Tasbeeh, Tahmeed, Takbeer" }
];
