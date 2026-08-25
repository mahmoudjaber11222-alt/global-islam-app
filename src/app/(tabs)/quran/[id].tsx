import useStaticText from '@/src/hooks/useStaticText';
import VerseDetailsScreen from '@/src/screens/VerseDetailsScreen';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import quran from '../../../../assets/Static Data/Quran Text.json';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';
import { SurahId } from './types';

interface Verse {
  content: string;
  translation_eng: string;
}

function VerseCard({
  onPress = (): void => {},
  arVerse = '',
  enVerse = '',
  index = 1,
  isLast = false,
}) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  return (
    <Pressable
      onPress={onPress}
      className={`w-full px-5 py-6 active:opacity-80 ${
        !isLast ? 'border-b' : ''
      }`}
      style={{
        backgroundColor: c.surface,
        borderColor: c.border,
      }}
    >
      {/* Verse Number Badge */}
      <View className="flex-row justify-end mb-3">
        {/* <View
          className="border rounded-lg px-3 py-1.5"
          style={{ backgroundColor: c.surface2, borderColor: c.border2 }}
        >
          <Text
            className="text-[11px] font-bold tracking-[1.5px]"
            style={{ color: c.accent }}
          >
            {index + 1}
          </Text>
        </View> */}
      </View>

      {/* Arabic Verse */}
      <Text
        className="text-right text-[22px] leading-[42px]"
        style={{
          fontFamily: 'quran_font',
          writingDirection: 'rtl',
          color: c.primary,
        }}
      >
        {arVerse}
        <Text style={{ color: c.accent }}> ({index + 1})</Text>
      </Text>

      {/* Divider */}
      <View className="h-px my-4" style={{ backgroundColor: c.border }} />

      {/* English Translation */}
      <Text
        className="text-[14px] leading-7 tracking-wide"
        style={{ color: c.secondary }}
      >
        {enVerse}
      </Text>
    </Pressable>
  );
}

function SurahHeader({
  surahName,
  surahNameAr,
  versesCount,
  revelation,
}: {
  surahName: string;
  surahNameAr: string;
  versesCount: number;
  revelation: string;
}) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const isMeccan = revelation === 'Meccan';
  const { translatedText } = useStaticText();
  return (
    <View
      className="border-b"
      style={{ backgroundColor: c.surface, borderColor: c.border }}
    >
      {/* Top bar with back button */}
      <View className="flex-row items-center justify-between px-5 py-4">
        <View className="flex-row items-center gap-3">
          <Pressable
            onPress={() => router.back()}
            className="w-9 h-9 rounded-lg items-center justify-center active:opacity-70"
            style={{
              backgroundColor: c.surface2,
              borderWidth: 1,
              borderColor: c.border2,
            }}
          >
            <Ionicons name="arrow-back" size={18} color={c.primary} />
          </Pressable>
          <View className="flex-row items-center gap-2">
            <Ionicons name="book-outline" size={16} color={c.accent} />
            <Text
              className="text-[11px] font-bold tracking-[2px] uppercase"
              style={{ color: c.accent }}
            >
              {translatedText?.other?.chapter}
            </Text>
          </View>
        </View>
        <View
          className="px-2.5 py-1 rounded-md"
          style={{
            backgroundColor: isMeccan ? c.surface3 : c.surface5,
          }}
        >
          <Text
            className="text-[10px] font-bold tracking-[1px] uppercase"
            style={{
              color: isMeccan ? c.accent : c.success,
            }}
          >
            {revelation === 'Meccan'
              ? translatedText?.quranApp?.meccan
              : translatedText?.quranApp?.medinan}
          </Text>
        </View>
      </View>

      {/* Surah Names */}
      <View className="px-5 pb-5 items-center">
        <Text
          className="text-[28px] font-light tracking-[2px] mb-2"
          style={{ writingDirection: 'rtl', color: c.primary }}
        >
          {surahNameAr}
        </Text>
        <Text
          className="text-[13px] font-normal tracking-wide uppercase"
          style={{ color: c.tertiary }}
        >
          {surahName}
        </Text>
        <Text
          className="text-[11px] font-normal tracking-wide mt-1"
          style={{ color: c.quinary }}
        >
          {versesCount} {translatedText?.other?.verse}
        </Text>
      </View>

      {/* Bismillah */}
      {/* <View className="px-5 pb-5 items-center">
        <View
          className="border rounded-xl px-8 py-4 w-full items-center"
          style={{ backgroundColor: c.surface2, borderColor: c.border }}
        >
          <Text
            className="text-[20px] font-light tracking-[1px]"
            style={{ writingDirection: 'rtl', color: c.accent }}
          >
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </Text>
        </View>
      </View> */}
    </View>
  );
}

export type clickedVerseType = {
  verse: number;
  surah: number;
};

export default function QuranSurahReader() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { id } = useLocalSearchParams();
  const [clickedVerse, setClickedVerse] = useState<clickedVerseType | null>(
    null,
  );
  const selectedSurah = quran.chapters[id as SurahId];
  const versesContent = Object.values(selectedSurah.verses) as Verse[];
  const { surah_name_ar, surah_name } = selectedSurah;
  const revelation = 'Meccan';

  function handleVerseClick(verseId: number, surahId: number) {
    setClickedVerse({ surah: surahId, verse: verseId });
  }
  function handleVerseBackPress() {
    setClickedVerse(null);
  }
  if (clickedVerse) {
    return (
      <VerseDetailsScreen
        onBackPress={handleVerseBackPress}
        clickedVerse={clickedVerse}
      />
    );
  }
  return (
    <>
      <SurahHeader
        surahName={surah_name}
        surahNameAr={surah_name_ar}
        versesCount={versesContent.length}
        revelation={revelation}
      />
      <FlatList
        data={versesContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <VerseCard
            onPress={() => handleVerseClick(index, Number(id))}
            arVerse={item.content}
            enVerse={item.translation_eng}
            index={index}
            isLast={index === versesContent.length - 1}
          />
        )}
      />
    </>
  );
}
