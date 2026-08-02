import { data } from '@/assets/mentions_categories';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import { getTranslationFile } from '../utils/filter';
import DailyHadith from './DailyHadith';
import NewsRSSNative from './NewsRSSNative';
import QiblaDirection from './QiblaDirection';
import RandomVerse from './RandomVerse';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  nextPrayer: {
    name: string;
    time: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  qiblaDirection: number;
  onNavigateQibla: () => void;
  onNavigateAthkar: (type: 'morning' | 'evening') => void;
  verse: {
    arabic: string;
    translation: string;
    surah: string;
    ayah: number;
  };
  hadith: {
    arabic: string;
    text: string;
    narrator: string;
    source: string;
    grade: string;
  };
  rssNews: { id: string; title: string; source: string }[];
  onRefresh?: () => void;
  refreshing?: boolean;
}

const NextPrayerCountdown: React.FC<{
  prayer: HomeScreenProps['nextPrayer'];
}> = ({ prayer }) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText: tr } = useStaticText();
  return (
    <View
      className="rounded-2xl overflow-hidden mb-6"
      style={{
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
      }}
    >
      <View className="p-7 items-center">
        <Text
          className="text-[11px] font-bold tracking-[3px] mb-3 uppercase"
          style={{ color: c.accent }}
        >
          {tr?.prayerApp?.upcoming}
        </Text>
        <Text
          className="text-[42px] font-light tracking-[4px] uppercase mb-2"
          style={{ color: c.primary }}
        >
          {tr?.prayers?.times[prayer.name]}
        </Text>
        <Text
          className="text-[13px] font-normal tracking-wide mb-5"
          style={{ color: c.tertiary }}
        >
          {prayer.time}
        </Text>

        <View className="flex-row items-center justify-center gap-2">
          {[
            { val: prayer.hours, label: tr?.homeApp?.hour },
            { val: prayer.minutes, label: tr?.homeApp?.minute },
            { val: prayer.seconds, label: tr?.homeApp?.second },
          ].map((item, i) => (
            <React.Fragment key={item.label}>
              <View
                className="items-center rounded-lg py-3 px-4 min-w-[64px]"
                style={{
                  backgroundColor: c.surface2,
                  borderWidth: 1,
                  borderColor: c.border2,
                }}
              >
                <Text
                  className="text-[28px] font-extralight tabular-nums"
                  style={{ color: c.primary }}
                >
                  {item.val}
                </Text>
                <Text
                  className="text-[9px] font-bold tracking-[1.5px] mt-1"
                  style={{ color: c.tertiary }}
                >
                  {item.label}
                </Text>
              </View>
              {i < 2 && (
                <Text
                  className="text-2xl font-light"
                  style={{ color: c.accent }}
                >
                  :
                </Text>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};

const ThikrSection: React.FC<{
  onNavigate: (type: 'morning' | 'evening') => void;
}> = ({ onNavigate }) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();

  const [catTr, setCatTr] = useState();

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

export default function HomeScreen({
  nextPrayer,
  qiblaDirection,
  onNavigateQibla,
  onNavigateAthkar,
  verse,
  hadith,
  rssNews,
  onRefresh,
  refreshing = false,
}: HomeScreenProps) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();
  return (
    <>
      <NewsRSSNative selectedLanguage={selectedLanguage} />

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        refreshControl={
          onRefresh ? (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              tintColor={c.accent}
              colors={[c.accent]}
            />
          ) : undefined
        }
      >
        <View className="px-5 pt-6 pb-10">
          {/* Greeting */}
          <View
            className="mb-6"
            style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
          >
            <Text
              className="text-[11px] font-bold tracking-[2.5px] uppercase mb-1"
              style={{ color: c.tertiary }}
            >
              {translatedText?.homeApp?.greet}
            </Text>
            <Text
              className="text-2xl font-light tracking-wide"
              style={{ color: c.primary }}
            >
              {translatedText?.homeApp?.welcome}
            </Text>
          </View>

          <NextPrayerCountdown prayer={nextPrayer} />
          <RandomVerse />
          <DailyHadith />
          <QiblaDirection
            onNavigate={() => {
              router.push('/(tabs)/qibla');
            }}
          />
          <ThikrSection onNavigate={onNavigateAthkar} />
        </View>
      </ScrollView>
    </>
  );
}
