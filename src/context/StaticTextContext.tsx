import { createContext, useEffect, useState } from 'react';
import useLanguage from '../hooks/useLanguage';
import { getTranslationFile } from '../utils/filter';
const staticTextContext = createContext(null);
const defaultText = {
  hero: {
    // translations/heroTexts.js

    title: {
      explore: 'Explore Islam with',
      clarity: 'Clarity',
      peace: '& Peace',
    },

    description:
      'Learn, ask questions, and discover authentic understanding through AI and guided knowledge designed for clarity and reflection.',

    actions: {
      introductionToIslam: 'Learn About Islam',
      islamQA: 'Islam Q&A (AI Assistant)',
      continueWebsite: 'Continue to Website',
    },
  },
  explore: {
    searchBar: {
      title: 'Search Hadith Collections',

      subtitle:
        'Search naturally using topics, meanings, or complete statements.',

      placeholder: 'Example: Hadith about kindness to parents',

      button: 'Search',
    },

    header: {
      title: 'Hadith Search Library',
      subtitle:
        'Instantly explore authentic Hadith with a modern reading experience.',
    },
    content: {
      heroTitle: 'Discover authentic Hadith collections with powerful search',

      loading: {
        label: 'Searching Hadith collections...',
      },

      error: {
        title: 'Unable to load Hadith',
        message:
          "We couldn't retrieve the narrations right now. Please check your connection and try again.",
      },

      empty: {
        title: 'No matching Hadith found',
      },

      card: {
        reference: 'Hadith Reference',
        readMore: 'Read full hadith',
      },
    },
  },
  home: {
    news: {
      title: 'Muslim Community Updates',
      subtitle: 'Stay informed with important updates from the Muslim world',
    },

    prayer: {
      title: 'Prayer Countdown',
      subtitle: 'Prepare yourself for the next prayer',
      button: 'View Prayer Times',
      nextPrayerLabel: 'Next prayer at:',
    },

    athkar: {
      title: 'Morning & Evening Athkar',
      subtitle: 'Daily remembrance to keep your heart connected',
      button: 'See more athkar',
    },

    qibla: {
      title: 'Qibla Direction',
      subtitle: 'Find the direction of the Kaaba wherever you are',
      locationLoading: 'Getting your location...',
      enableLocation: 'Enable Location',
      refreshLocation: 'Refresh Qibla Direction',

      warning:
        "If your device doesn't support orientation sensors, compass accuracy may be affected.",

      errorTitle: 'Permission Denied',
    },
  },
  prayers: {
    nextLabel: 'Next pray At',
    header: {
      title: 'Prayer Times',
      subtitle: 'A daily moment of connection with your Creator',
    },
    times: {
      Fajr: 'Fajr',
      Dhuhr: 'Dhuhr',
      Asr: 'Asr',
      Maghrib: 'Maghrib',
      Isha: 'Isha',
    },
    qibla: {
      loading: 'Getting your location...',
      warning:
        "If your OS doesn't support orientation, this will affect compass direction calculations.",
      errorTitle: 'Permission Denied',
      enableLocation: 'Enable Location',
      refreshLocation: 'Refresh Qibla Direction',
    },

    list: {
      warning: 'Times may vary slightly depending on calculation method.',
    },
  },
  quran: {
    header: {
      title: 'Quran',
      subtitle: 'Your daily companion for recitation and reflection',
    },

    search: {
      noResultTitle: 'Data is empty',
      noResultMessage: 'No data to display',
    },
  },
  athkar: {
    title: 'Daily Mentions',
    subtitle: 'Stay consistent with your daily remembrance and reflections',
  },
  ai: {
    header: {
      title: 'Global Islam AI Assistant',
      subtitle:
        'Receive clear Islamic answers grounded in Qur’an, Sunnah, and trusted scholarship',
    },

    loading: {
      label: 'Loading...',
    },

    error: {
      title: 'Request limit reached',
      message:
        'Unable to reach the knowledge service right now. Please try again shortly.',
    },

    input: {
      placeholder: 'Ask a question about Islam...',
    },

    suggestions: [
      'Can I pray if I miss wudu?',
      'Is interest (riba) completely forbidden?',
      'Ruling on working in a non-halal environment',
      'Can I pray while traveling?',
      'Is wearing perfume during prayer allowed?',
      'What invalidates prayer?',
      'Ruling on delaying prayers due to work',
    ],
    footer: {
      disclaimer:
        'This AI assistant is designed to provide responses based on curated and reliable knowledge sources, including Islamic references and verified educational material.',

      note: 'Responses are for informational purposes and should not replace scholarly advice where required.',
    },
  },
  footer: {
    disclaimer:
      'All displayed content is sourced from its original trusted references. We welcome any feedback or reports of errors so they can be reviewed and corrected.',

    tagline: 'Built with care to serve authentic Islamic content',
  },
  hadith: {
    header: {
      hadithLabel: 'Hadith',
      backButton: 'Go back',
    },

    sections: {
      hadithText: 'Hadith Text',
      arabicText: 'Arabic Text',
      explanation: 'Explanation',
      authentication: 'Authentication',
      lessons: 'Benefits & Lessons',
    },
  },
};
export function StaticTextContext({ children }) {
  const { selectedLanguage } = useLanguage();
  const [translatedText, setTranslatedText] = useState(defaultText);

  useEffect(() => {
    async function seGetTranslation() {
      const res = await getTranslationFile(selectedLanguage, 'static_text');

      setTranslatedText(res?.default);
    }
    seGetTranslation();
  }, [selectedLanguage]);
  return (
    <staticTextContext.Provider value={{ translatedText }}>
      {children}
    </staticTextContext.Provider>
  );
}
export default { staticTextContext, StaticTextContext };
