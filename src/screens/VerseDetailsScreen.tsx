import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { clickedVerseType } from '../app/(tabs)/quran/[id]';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';

type TafsirItem = {
  id: number;
  name: string;
  language: string;
  author: string;
  book_name: string;
};

type TafsirResponse = {
  tafseer_id: number;
  tafseer_name: string;
  ayah_url: string;
  ayah_number: number;
  text: string;
};

const TAFSIR_DATA: TafsirItem[] = [
  {
    id: 1,
    name: 'التفسير الميسر',
    language: 'ar',
    author: 'نخبة من العلماء',
    book_name: 'التفسير الميسر',
  },
  {
    id: 2,
    name: 'تفسير الجلالين',
    language: 'ar',
    author: 'جلال الدين المحلي و السيوطي',
    book_name: 'تفسير الجلالين',
  },
  {
    id: 3,
    name: 'تفسير السعدي',
    language: 'ar',
    author: 'عبد الرحمن بن ناصر السعدي',
    book_name: 'تيسير الكريم الرحمن',
  },
  {
    id: 4,
    name: 'تفسير ابن كثير',
    language: 'ar',
    author: 'إسماعيل بن كثير',
    book_name: 'تفسير القرآن العظيم',
  },
  {
    id: 5,
    name: 'تفسير الوسيط',
    language: 'ar',
    author: 'محمد سيد طنطاوي',
    book_name: 'التفسير الوسيط',
  },
  {
    id: 6,
    name: 'تفسير البغوي',
    language: 'ar',
    author: 'الحسين بن مسعود البغوي',
    book_name: 'معالم التنزيل',
  },
  {
    id: 7,
    name: 'تفسير القرطبي',
    language: 'ar',
    author: 'محمد بن أحمد القرطبي',
    book_name: 'الجامع لأحكام القرآن',
  },
  {
    id: 8,
    name: 'تفسير الطبري',
    language: 'ar',
    author: 'أبو جعفر الطبري',
    book_name: 'جامع البيان',
  },
  {
    id: 9,
    name: 'Arberry',
    language: 'en',
    author: 'A. J. Arberry',
    book_name: 'The Koran Interpreted',
  },
  {
    id: 10,
    name: 'Yusuf Ali',
    language: 'en',
    author: 'Abdullah Yusuf Ali',
    book_name: 'The Meaning of the Glorious Koran',
  },
  {
    id: 11,
    name: 'Keyzer',
    language: 'nl',
    author: 'Salomo Keyzer',
    book_name: 'De Koran',
  },
  {
    id: 12,
    name: 'Leemhuis',
    language: 'nl',
    author: 'Fred Leemhuis',
    book_name: 'De Koran: Een weergave',
  },
  {
    id: 13,
    name: 'Siregar',
    language: 'nl',
    author: 'Sofian S. Siregar',
    book_name: 'De Edele Koran',
  },
];

const LANGUAGE_LABELS: Record<string, string> = {
  ar: 'العربية',
  en: 'English',
  nl: 'Nederlands',
};

type VerseDetails = {
  onBackPress: () => void;
  clickedVerse: clickedVerseType;
};

export default function VerseDetailsScreen({
  onBackPress,
  clickedVerse,
}: VerseDetails) {
  const { theme, isDark } = useAppTheme();
  const colors = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();

  const [selectedTafsir, setSelectedTafsir] = useState<TafsirItem>(
    TAFSIR_DATA[0],
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tafsirData, setTafsirData] = useState<TafsirResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /* ─── Translation States ─── */
  const [translation, setTranslation] = useState<string>('');
  const [transLoading, setTransLoading] = useState(false);
  const [transError, setTransError] = useState<string | null>(null);

  const isRTL = selectedTafsir.language === 'ar';
  const isTransRTL = ['ar', 'he', 'ur', 'fa'].includes(selectedLanguage);

  /* ─── Fetch Tafsir ─── */
  const fetchTafsir = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const upVerse = clickedVerse.verse + 1;

      const response = await fetch(
        `http://api.quran-tafseer.com/tafseer/${selectedTafsir.id}/${clickedVerse.surah}/${upVerse}`,
      );

      if (!response.ok) throw new Error(translatedText?.quranApp?.loadErr2);
      const data: TafsirResponse = await response.json();
      setTafsirData(data);
    } catch (err) {
      setError(translatedText?.quranApp?.loadErr1);
    } finally {
      setLoading(false);
    }
  }, [
    selectedTafsir.id,
    clickedVerse.surah,
    clickedVerse.verse,
    translatedText?.quranApp?.loadErr1,
    translatedText?.quranApp?.loadErr2,
  ]);

  /* ─── Fetch Translation ─── */
  const fetchTranslation = useCallback(async () => {
    setTransLoading(true);
    setTransError(null);
    try {
      const resp = await fetch(
        'https://global-islam5-islam-g-5.hf.space/quran/',
        {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            surah_number: clickedVerse.surah,
            ayah_number: clickedVerse.verse + 1,
            language_code: selectedLanguage,
          }),
        },
      );

      if (!resp.ok) throw new Error('Translation failed');
      const result = await resp.json();
      setTranslation(result.data?.['translation-content'] || '');
    } catch (err) {
      setTransError(translatedText?.quranApp?.loadErr1);
    } finally {
      setTransLoading(false);
    }
  }, [
    clickedVerse.surah,
    clickedVerse.verse,
    selectedLanguage,
    translatedText?.quranApp?.loadErr1,
  ]);

  useEffect(() => {
    fetchTafsir();
    fetchTranslation();
  }, [fetchTafsir, fetchTranslation]);

  const handleSelect = useCallback((item: TafsirItem) => {
    setSelectedTafsir(item);
    setDropdownOpen(false);
  }, []);

  const renderDropdownItem = useCallback(
    ({ item }: { item: TafsirItem }) => {
      const isSelected = item.id === selectedTafsir.id;
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleSelect(item)}
          className="flex-row items-center px-4 py-3.5 mx-4 mb-2 rounded-xl"
          style={{
            backgroundColor: isSelected ? colors.accentMuted : colors.surface,
            borderWidth: 1,
            borderColor: isSelected
              ? isDark
                ? 'rgba(212,168,83,0.35)'
                : 'rgba(184,134,11,0.25)'
              : colors.border,
          }}
        >
          <View className="flex-1">
            <Text
              className="text-[15px] font-semibold mb-0.5"
              style={{ color: isSelected ? colors.accent : colors.primary }}
            >
              {item.name}
            </Text>
            <Text
              className="text-[12px]"
              style={{ color: colors.tertiary }}
              numberOfLines={1}
            >
              {item.author}
            </Text>
          </View>
          <View
            className="px-2 py-0.5 rounded-md ml-3"
            style={{ backgroundColor: colors.surface2 }}
          >
            <Text
              className="text-[11px] font-medium"
              style={{ color: colors.quaternary }}
            >
              {LANGUAGE_LABELS[item.language]}
            </Text>
          </View>
          {isSelected && (
            <Ionicons
              name="checkmark-circle"
              size={20}
              color={colors.accent}
              style={{ marginLeft: 10 }}
            />
          )}
        </TouchableOpacity>
      );
    },
    [selectedTafsir, colors, isDark, handleSelect],
  );

  return (
    <View
      className="w-full h-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header */}
      <View
        className="flex-row items-center px-5 pt-14 pb-4"
        style={{
          backgroundColor: colors.surface,
          borderBottomWidth: 1,
          borderBottomColor: colors.border,
        }}
      >
        <Pressable
          onPress={onBackPress}
          className="w-10 h-10 rounded-xl items-center justify-center active:opacity-60"
          style={{
            backgroundColor: colors.surface2,
            borderWidth: 1,
            borderColor: colors.border,
          }}
        >
          <Ionicons name="arrow-back" size={20} color={colors.primary} />
        </Pressable>

        <View className="flex-1 items-center mr-10">
          <Text className="text-lg font-bold" style={{ color: colors.primary }}>
            {clickedVerse.surah}:{clickedVerse.verse + 1}
          </Text>
          <Text
            className="text-[11px] font-medium mt-0.5"
            style={{ color: colors.tertiary }}
          >
            {selectedTafsir.name}
          </Text>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* Resource Selector */}
        <View className="px-5 pt-5 pb-2">
          <Text
            className="text-xs font-semibold uppercase tracking-[0.12em] mb-3 ml-1"
            style={{ color: colors.tertiary }}
          >
            {translatedText?.quranApp?.selectRes}
          </Text>

          <Pressable
            onPress={() => setDropdownOpen(true)}
            className="flex-row items-center rounded-2xl px-5 py-4 active:opacity-80"
            style={{
              backgroundColor: colors.surface,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <View className="flex-1">
              <Text
                className="text-[16px] font-semibold mb-0.5"
                style={{ color: colors.primary }}
              >
                {selectedTafsir.name}
              </Text>
              <Text
                className="text-[13px]"
                style={{ color: colors.secondary }}
                numberOfLines={1}
              >
                {selectedTafsir.book_name}
              </Text>
            </View>
            <View
              className="px-2.5 py-1 rounded-lg mr-3"
              style={{ backgroundColor: colors.surface2 }}
            >
              <Text
                className="text-[11px] font-semibold"
                style={{ color: colors.quaternary }}
              >
                {LANGUAGE_LABELS[selectedTafsir.language]}
              </Text>
            </View>
            <Ionicons name="chevron-down" size={18} color={colors.quaternary} />
          </Pressable>
        </View>

        {/* ─── Translation Box ─── */}
        <View className="px-5 pt-2 pb-1">
          {transLoading ? (
            <View
              className="rounded-2xl p-5 items-center justify-center"
              style={{
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <ActivityIndicator size="small" color={colors.accent} />
              <Text
                className="text-[11px] font-medium mt-2"
                style={{ color: colors.tertiary }}
              >
                {translatedText?.ai?.loading?.label || 'Loading...'}
              </Text>
            </View>
          ) : transError ? (
            <View
              className="rounded-2xl p-4 flex-row items-center gap-2"
              style={{
                backgroundColor: colors.errorMuted,
                borderWidth: 1,
                borderColor: colors.border5,
              }}
            >
              <Ionicons
                name="alert-circle-outline"
                size={16}
                color={colors.error}
              />
              <Text
                className="text-[12px] font-medium flex-1"
                style={{ color: colors.error }}
              >
                {transError}
              </Text>
            </View>
          ) : translation ? (
            <View
              className="rounded-2xl p-5"
              style={{
                backgroundColor: colors.surface,
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <View className="flex-row items-center mb-3">
                <View
                  className="w-7 h-7 rounded-lg items-center justify-center mr-2.5"
                  style={{ backgroundColor: colors.accentMuted }}
                >
                  <Ionicons
                    name="language-outline"
                    size={14}
                    color={colors.accent}
                  />
                </View>
                <Text
                  className="text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: colors.accent }}
                >
                  {LANGUAGE_LABELS[selectedLanguage] || 'Translation'}
                </Text>
              </View>

              <Text
                className="text-[15px] leading-7"
                style={{
                  color: colors.primary,
                  textAlign: isTransRTL ? 'right' : 'left',
                  writingDirection: isTransRTL ? 'rtl' : 'ltr',
                }}
              >
                {translation}
              </Text>
            </View>
          ) : null}
        </View>

        {/* Content Area */}
        <View className="px-5 pt-4">
          {loading ? (
            <View className="items-center justify-center py-20">
              <ActivityIndicator size="large" color={colors.accent} />
              <Text
                className="text-sm font-medium mt-4"
                style={{ color: colors.tertiary }}
              >
                {translatedText?.ai?.loading?.label}
              </Text>
            </View>
          ) : error ? (
            <View
              className="rounded-2xl p-6 items-center"
              style={{
                backgroundColor: colors.errorMuted,
                borderWidth: 1,
                borderColor: isDark
                  ? 'rgba(212,92,92,0.25)'
                  : 'rgba(184,48,48,0.15)',
              }}
            >
              <Ionicons
                name="alert-circle-outline"
                size={32}
                color={colors.error}
              />
              <Text
                className="text-sm font-medium mt-3 text-center leading-5"
                style={{ color: colors.error }}
              >
                {error}
              </Text>
              <Pressable
                onPress={fetchTafsir}
                className="mt-4 px-6 py-2.5 rounded-xl active:opacity-70"
                style={{
                  backgroundColor: colors.error,
                }}
              >
                <Text className="text-sm font-semibold text-white">
                  {translatedText?.quranApp?.retry}
                </Text>
              </Pressable>
            </View>
          ) : tafsirData ? (
            <>
              {/* Verse Reference Banner */}
              <View
                className="rounded-2xl p-5 mb-5 items-center"
                style={{
                  backgroundColor: colors.accentMuted,
                  borderWidth: 1,
                  borderColor: isDark
                    ? 'rgba(212,168,83,0.2)'
                    : 'rgba(184,134,11,0.15)',
                }}
              >
                <View className="flex-row items-center mb-2">
                  <Ionicons
                    name="book-outline"
                    size={14}
                    color={colors.accent}
                  />
                  <Text
                    className="text-xs font-semibold ml-2 uppercase tracking-wider"
                    style={{ color: colors.accent }}
                  >
                    {tafsirData.tafseer_name}
                  </Text>
                </View>
                <Text
                  className="text-sm font-medium"
                  style={{ color: colors.secondary }}
                >
                  {translatedText?.other?.chapter} {clickedVerse.surah},
                  {translatedText?.other?.verse} {clickedVerse.verse + 1}
                </Text>
              </View>

              {/* Explanation Text */}
              <View
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: colors.surface,
                  borderWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <View className="flex-row items-center mb-4">
                  <View
                    className="w-1 h-5 rounded-full mr-3"
                    style={{ backgroundColor: colors.accent }}
                  />
                  <Text
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ color: colors.accent }}
                  >
                    {translatedText?.quranApp?.explain}
                  </Text>
                </View>

                <Text
                  className="text-[16px] leading-[28px]"
                  style={{
                    color: colors.primary,
                    textAlign: isRTL ? 'right' : 'left',
                    writingDirection: isRTL ? 'rtl' : 'ltr',
                  }}
                >
                  {tafsirData.text}
                </Text>
              </View>

              {/* Author Footer */}
              <View
                className="mt-4 rounded-2xl p-5 flex-row items-center"
                style={{
                  backgroundColor: colors.surface4,
                  borderWidth: 1,
                  borderColor: colors.border,
                }}
              >
                <View
                  className="w-10 h-10 rounded-full items-center justify-center mr-4"
                  style={{ backgroundColor: colors.surface2 }}
                >
                  <Ionicons
                    name="person-outline"
                    size={18}
                    color={colors.accent}
                  />
                </View>
                <View className="flex-1">
                  <Text
                    className=" text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: colors.tertiary }}
                  >
                    {translatedText?.quranApp?.author}
                  </Text>
                  <Text
                    className="text-[14px] font-medium"
                    style={{ color: colors.secondary }}
                  >
                    {selectedTafsir.author}
                  </Text>
                </View>
              </View>
            </>
          ) : null}
        </View>
      </ScrollView>

      {/* Dropdown Modal */}
      <Modal
        visible={dropdownOpen}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setDropdownOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setDropdownOpen(false)}>
          <View
            className="flex-1 justify-end"
            style={{ backgroundColor: 'rgba(0,0,0,0.55)' }}
          >
            <TouchableWithoutFeedback>
              <View
                className="rounded-t-[24px] pt-2 pb-8 max-h-[80%]"
                style={{
                  backgroundColor: colors.background,
                  borderTopWidth: 1,
                  borderTopColor: colors.border,
                }}
              >
                <View className="items-center pt-2 pb-4">
                  <View
                    className="w-10 h-1 rounded-full"
                    style={{ backgroundColor: colors.quinary }}
                  />
                </View>

                <Text
                  className="text-xl font-bold px-5 mb-4"
                  style={{ color: colors.primary }}
                >
                  {translatedText?.quranApp?.selectRes}
                </Text>

                <FlatList
                  data={TAFSIR_DATA}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={renderDropdownItem}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: 20 }}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
