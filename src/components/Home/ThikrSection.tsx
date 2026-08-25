import { data } from '@/assets/mentions_categories';
import { getThemeColors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { getTranslationFile } from '@/src/utils/filter';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';

export const ThikrSection: React.FC<{
  onNavigate: (type: 'morning' | 'evening') => void;
}> = ({ onNavigate }) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();
  const [catTr, setCatTr] = useState();

  const thikrs = [
    {
      type: 'morning' as const,
      title: data['أذكار الصباح'][selectedLanguage],

      icon: 'sunny-outline' as const,
      description: translatedText?.athkarApp?.descM,
    },
    {
      type: 'evening' as const,
      title: data['أذكار المساء'][selectedLanguage],
      icon: 'moon-outline' as const,
      description: translatedText?.athkarApp?.descE,
    },
  ];
  useEffect(() => {
    async function se() {
      const result = await getTranslationFile(
        selectedLanguage,
        'categories_translations',
      );
      setCatTr(result.categories);
    }
    se();
  }, [selectedLanguage]);

  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-4 px-1">
        <Text
          className="text-xl font-semibold tracking-wide"
          style={{ color: c.primary }}
        >
          {translatedText?.athkar?.title}
        </Text>
        <Pressable
          onPress={() => onNavigate('morning')}
          className="flex-row items-center gap-1"
        >
          <Text
            className="capitalize text-[12px] font-semibold tracking-wide"
            style={{ color: c.accent }}
          >
            {translatedText?.home?.athkar?.button}
          </Text>
          <Ionicons name="chevron-forward" size={14} color={c.accent} />
        </Pressable>
      </View>

      <View className="flex-row gap-3">
        {thikrs.map((thikr) => (
          <Pressable
            key={thikr.type}
            onPress={() =>
              thikr.type === 'evening'
                ? router.navigate('/(tabs)/athkar/أذكار المساء')
                : router.navigate('/(tabs)/athkar/أذكار الصباح')
            }
            className="flex-1 rounded-2xl p-5 active:opacity-80"
            style={{
              backgroundColor: c.surface,
              borderWidth: 1,
              borderColor: c.border,
            }}
          >
            <View className="flex-row items-center justify-between mb-4">
              <View
                className="w-10 h-10 rounded-xl items-center justify-center"
                style={{
                  backgroundColor:
                    thikr.type === 'morning' ? c.surface3 : c.surface2,
                }}
              >
                <Ionicons
                  name={thikr.icon}
                  size={20}
                  color={thikr.type === 'morning' ? c.accent : c.secondary}
                />
              </View>
              <Ionicons name="arrow-forward" size={14} color={c.quinary} />
            </View>

            <Text
              className="text-[15px] font-semibold tracking-wide mb-1"
              style={{ color: c.primary }}
            >
              {thikr.title}
            </Text>
            <Text
              className="text-[13px] font-light tracking-wide mb-2"
              style={{ color: c.accent }}
            >
              {thikr.arabic}
            </Text>
            <Text
              className="text-[11px] font-normal tracking-wide leading-4"
              style={{ color: c.tertiary }}
            >
              {thikr.description}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};
