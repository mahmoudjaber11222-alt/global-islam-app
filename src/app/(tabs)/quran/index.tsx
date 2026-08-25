import Header from '@/src/components/Hadith/Header';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { FlatList, Pressable, Text, View } from 'react-native';
import surahs from '../../../../assets/Static Data/Surahs Names';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';

interface Surah {
  id: string;
  number: number;
  name: string;
  arabicName: string;
  verses: number;
  revelation: 'Meccan' | 'Medinan';
  startsPage: number;
}

function SurahCard({ surah, onPress }: { surah: Surah; onPress: () => void }) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const isMeccan = surah.revelation === 'Meccan';
  const { translatedText } = useStaticText();
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center px-5 py-4 border-b active:opacity-80"
      style={{
        backgroundColor: c.surface,
        borderColor: c.border,
      }}
    >
      {/* Left: Surah Number Badge */}
      <View
        className="w-11 h-11 rounded-xl border items-center justify-center mr-4"
        style={{ backgroundColor: c.surface2, borderColor: c.border2 }}
      >
        <Text
          className="text-[13px] font-bold tracking-wide"
          style={{ color: c.accent }}
        >
          {surah.number}
        </Text>
      </View>

      {/* Middle: Names & Info */}
      <View className="flex-1">
        <View className="flex-row items-center gap-2 mb-1">
          <Text
            className="text-[15px] font-semibold tracking-wide"
            style={{ color: c.primary }}
          >
            {surah.name}
          </Text>
          <View
            className="px-2 py-0.5 rounded"
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
              {isMeccan
                ? translatedText?.quranApp?.meccan
                : translatedText?.quranApp?.medinan}
            </Text>
          </View>
        </View>
        <Text
          className="text-[12px] font-normal tracking-wide"
          style={{ color: c.tertiary }}
        >
          {surah.verses} {translatedText?.other?.verse} ·{' '}
          {translatedText?.other?.page} {surah.startsPage}
        </Text>
      </View>

      {/* Right: Arabic Name */}
      <View className="items-end">
        <Text
          className="text-[18px] font-light tracking-[1px]"
          style={{ color: c.primary }}
        >
          {surah.arabicName}
        </Text>
      </View>

      {/* Chevron */}
      <Ionicons
        name="chevron-forward"
        size={16}
        color={c.quinary}
        className="ml-3"
      />
    </Pressable>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  return <Header title={subtitle} subtitle={title} />;
}

function StatsBar({
  totalSurahs,
  meccanCount,
  medinanCount,
}: {
  totalSurahs: number;
  meccanCount: number;
  medinanCount: number;
}) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  return (
    <View className="flex-row gap-3 px-5 mb-6">
      <View
        className="flex-1 rounded-xl border p-4 items-center"
        style={{ backgroundColor: c.surface, borderColor: c.border }}
      >
        <Text
          className="text-[24px] font-extralight tabular-nums"
          style={{ color: c.accent }}
        >
          {totalSurahs}
        </Text>
        <Text
          className="text-[10px] font-bold tracking-[1.5px] mt-1 uppercase"
          style={{ color: c.tertiary }}
        >
          {translatedText?.other?.chapter}
        </Text>
      </View>
      <View
        className="flex-1 rounded-xl border p-4 items-center"
        style={{ backgroundColor: c.surface, borderColor: c.border }}
      >
        <Text
          className="text-[24px] font-extralight tabular-nums"
          style={{ color: c.accent }}
        >
          {meccanCount}
        </Text>
        <Text
          className="text-[10px] font-bold tracking-[1.5px] mt-1 uppercase"
          style={{ color: c.tertiary }}
        >
          {translatedText?.quranApp?.meccan}
        </Text>
      </View>
      <View
        className="flex-1 rounded-xl border p-4 items-center"
        style={{ backgroundColor: c.surface, borderColor: c.border }}
      >
        <Text
          className="text-[24px] font-extralight tabular-nums"
          style={{ color: c.success }}
        >
          {medinanCount}
        </Text>
        <Text
          className="text-[10px] font-bold tracking-[1.5px] mt-1 uppercase"
          style={{ color: c.tertiary }}
        >
          {translatedText?.quranApp?.medinan}
        </Text>
      </View>
    </View>
  );
}

function handleSurahClick(item: Surah): void {
  router.push(`/quran/${item.number}`);
}

export default function QuranSurah() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  const meccanCount = surahs.filter(
    (s: Surah) => s.revelation === 'Meccan',
  ).length;
  const medinanCount = surahs.filter(
    (s: Surah) => s.revelation === 'Medinan',
  ).length;

  return (
    <View className="flex-1" style={{ backgroundColor: c.background }}>
      {/* Header */}
      <SectionHeader
        subtitle={translatedText?.quran?.header?.title}
        title={translatedText?.quran?.header?.subtitle}
      />

      {/* Stats */}
      <StatsBar
        totalSurahs={surahs.length}
        meccanCount={meccanCount}
        medinanCount={medinanCount}
      />

      {/* Surah List */}
      <FlatList
        data={surahs}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SurahCard surah={item} onPress={() => handleSurahClick(item)} />
        )}
      />
    </View>
  );
}
