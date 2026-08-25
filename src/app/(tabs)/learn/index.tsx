import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function LearnMain() {
  const { translatedText } = useStaticText();
  const { theme, isDark } = useAppTheme();
  const { selectedLanguage } = useLanguage();
  const c = Colors[theme];

  const cards = [
    {
      key: 'arabic',
      route: '/(tabs)/learn/arabic',
      icon: 'language-outline',
      title: translatedText?.navbar?.routes?.learnNested?.arabic,
      subtitle:
        translatedText?.learning?.['arabic']?.subtitle ||
        'Master Arabic pronunciation & speaking',
    },
    {
      key: 'quran',
      route: '/(tabs)/learn/quran',
      icon: 'book-outline',
      title: translatedText?.navbar?.routes?.learnNested?.quranTajweed,
      subtitle:
        translatedText?.learning?.['quran']?.subtitle ||
        'Learn Tajweed rules & Quranic recitation',
    },
  ];

  return (
    <View className="flex-1" style={{ backgroundColor: c.background }}>
      <View
        style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
        className="w-full self-center max-w-[640px] px-5 pt-8 pb-12"
      >
        {/* Header */}
        <View
          style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
          className="items-center mb-10"
        >
          <View
            className="w-10 h-1 rounded-full mb-4"
            style={{ backgroundColor: c.accent }}
          />
          <Text
            className="text-[32px] font-extrabold text-center"
            style={{
              color: c.primary,
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            {translatedText?.learning?.['default']?.title || 'Learn'}
          </Text>
          <Text
            className="text-[15px] text-center mt-2 max-w-[280px]"
            style={{
              color: c.tertiary,
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            }}
          >
            {translatedText?.learning?.['default']?.subtitle ||
              'Choose your learning path'}
          </Text>
        </View>

        {/* Cards */}
        <View className="gap-4">
          {cards.map((card) => (
            <Pressable
              key={card.key}
              onPress={() => router.navigate(card.route)}
              className="relative rounded-3xl  "
              style={({ pressed }) => ({
                direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                backgroundColor: pressed ? c.surface2 : c.surface,
                transform: pressed ? [{ scale: 0.97 }] : undefined,
                shadowColor: isDark ? '#000' : '#6e6e7a',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: pressed ? 0.04 : 0.06,
                shadowRadius: 20,
                elevation: 3,
              })}
              android_ripple={{ color: c.accentMuted, foreground: true }}
              accessible
              accessibilityRole="button"
              accessibilityLabel={`${card.title}. ${card.subtitle}`}
            >
              {/* Top accent bar */}
              <View
                className="h-[3px] w-full"
                style={{ backgroundColor: c.accent }}
              />

              {/* Card body */}
              <View
                style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
                className="p-6 flex-col min-h-[180px]"
              >
                {/* Decorative watermark */}
                <View
                  style={{
                    direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                  }}
                  className="absolute -right-5 -top-2"
                  pointerEvents="none"
                >
                  <Ionicons
                    name={card.icon}
                    size={140}
                    color={c.accent}
                    style={{
                      opacity: isDark ? 0.03 : 0.04,
                      transform: [{ rotate: '-12deg' }],
                    }}
                  />
                </View>

                {/* Icon */}
                <View
                  className="w-14 h-14 rounded-2xl items-center justify-center border mb-4"
                  style={{
                    direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                    backgroundColor: c.accentMuted,
                    borderColor: isDark ? `${c.accent}25` : `${c.accent}18`,
                  }}
                >
                  <Ionicons name={card.icon} size={28} color={c.accent} />
                </View>

                {/* Text */}
                <View className="mb-5">
                  <Text
                    style={{
                      direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                      color: c.primary,
                    }}
                    className="text-[19px] font-bold mb-1.5"
                    numberOfLines={1}
                  >
                    {card.title}
                  </Text>
                  <Text
                    className="text-sm leading-5"
                    style={{
                      color: c.tertiary,
                      direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
                    }}
                    numberOfLines={2}
                  >
                    {card.subtitle}
                  </Text>
                </View>

                {/* Action row - mt-auto pushes it to bottom */}
                <View
                  style={{
                    direction: 'ltr',
                  }}
                  className="flex-row items-center justify-end mt-auto"
                >
                  <View
                    className="w-9 h-9 rounded-xl items-center justify-center border"
                    style={{
                      direction: 'rtl',
                      backgroundColor: c.accentMuted,
                      borderColor: isDark ? `${c.accent}30` : `${c.accent}20`,
                    }}
                  >
                    <Ionicons
                      // style={{ direction: 'rtl' }}
                      name="arrow-forward"
                      size={16}
                      color={c.accent}
                    />
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
