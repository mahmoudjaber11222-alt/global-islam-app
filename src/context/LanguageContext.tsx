import { createContext, useEffect, useState } from 'react';
import { getCacheLanguage } from '../utils/cache';

const languageContext = createContext(null);
const languageList = [
  { name: 'English', englishName: 'English', code: 'en' },
  { name: 'العربية', englishName: 'Arabic', code: 'ar' },

  { name: 'Français', englishName: 'French', code: 'fr' },
  { name: 'Español', englishName: 'Spanish', code: 'es' },
  { name: 'Deutsch', englishName: 'German', code: 'de' },
  { name: 'Italiano', englishName: 'Italian', code: 'it' },

  { name: 'Português', englishName: 'Portuguese', code: 'pt' },
  { name: 'Русский', englishName: 'Russian', code: 'ru' },
  { name: '中文（简体）', englishName: 'Chinese (Simplified)', code: 'zh' },
  { name: '日本語', englishName: 'Japanese', code: 'ja' },

  { name: '한국어', englishName: 'Korean', code: 'ko' },
  { name: 'हिन्दी', englishName: 'Hindi', code: 'hi' },
  { name: 'Türkçe', englishName: 'Turkish', code: 'tr' },
  { name: 'Nederlands', englishName: 'Dutch', code: 'nl' },

  { name: 'Polski', englishName: 'Polish', code: 'pl' },
  { name: 'Svenska', englishName: 'Swedish', code: 'sv' },
  { name: 'Dansk', englishName: 'Danish', code: 'da' },
  { name: 'Suomi', englishName: 'Finnish', code: 'fi' },

  { name: 'Norsk', englishName: 'Norwegian', code: 'no' },
  { name: 'Ελληνικά', englishName: 'Greek', code: 'el' },
  { name: 'עברית', englishName: 'Hebrew', code: 'he' },
  { name: 'Bahasa Indonesia', englishName: 'Indonesian', code: 'id' },
  { name: 'Bahasa Melayu', englishName: 'Malay', code: 'ms' },
  { name: 'ไทย', englishName: 'Thai', code: 'th' },

  { name: 'Tiếng Việt', englishName: 'Vietnamese', code: 'vi' },
  { name: 'Українська', englishName: 'Ukrainian', code: 'uk' },
  { name: 'Čeština', englishName: 'Czech', code: 'cs' },
  { name: 'Română', englishName: 'Romanian', code: 'ro' },
  { name: 'Magyar', englishName: 'Hungarian', code: 'hu' },

  { name: 'Slovenčina', englishName: 'Slovak', code: 'sk' },
  { name: 'Български', englishName: 'Bulgarian', code: 'bg' },
  { name: 'Hrvatski', englishName: 'Croatian', code: 'hr' },
  { name: 'Српски', englishName: 'Serbian', code: 'sr' },

  { name: 'Slovenščina', englishName: 'Slovenian', code: 'sl' },
  { name: 'Eesti', englishName: 'Estonian', code: 'et' },
  { name: 'Latviešu', englishName: 'Latvian', code: 'lv' },
  { name: 'Lietuvių', englishName: 'Lithuanian', code: 'lt' },
];

export function LanguageContext({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  useEffect(() => {
    async function se() {
      try {
        const cached = await getCacheLanguage();
        setSelectedLanguage(cached || 'en');
      } catch (err) {
        console.error(err);
      }
    }
    se();
  }, []);
  function handleLanguage(code: string) {
    setSelectedLanguage(code);
  }
  function handleChangeLanguage(code: string) {
    setSelectedLanguage(code);
  }

  return (
    <languageContext.Provider
      value={{
        selectedLanguage,
        handleChangeLanguage,
        handleLanguage,
        languages: languageList,
      }}
    >
      {children}
    </languageContext.Provider>
  );
}
export default { languageContext, LanguageContext };
