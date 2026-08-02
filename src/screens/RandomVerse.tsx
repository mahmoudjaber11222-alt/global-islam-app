import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';

function formatDate(language = 'en') {
  try {
    return new Intl.DateTimeFormat(language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  } catch {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}

const RTL_LANGS = new Set(['ar', 'ur', 'fa', 'he', 'ps', 'ku']);

const RandomVerse: React.FC = () => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  const { selectedLanguage } = useLanguage();

  const { translatedText } = useStaticText();
  const [verse, setVerse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState(false);

  const isRTLLayout = RTL_LANGS.has(selectedLanguage || 'en');

  const fetchVerse = async () => {
    try {
      setLoading(true);
      setError('');
      setExpanded(false);

      const response = await fetch(
        'https://api.quran.com/api/v4/verses/random?fields=text_uthmani,chapter_id,hizb_number,juz_number,page_number,verse_key,audio',
      );
      if (!response.ok) throw new Error('Failed to fetch verse');
      const data = await response.json();
      const verseData = data.verse;

      const chapterResponse = await fetch(
        `https://api.quran.com/api/v4/chapters/${verseData.chapter_id}`,
      );
      const chapterData = await chapterResponse.json();

      let translation = '';
      if (selectedLanguage !== 'ar') {
        const [surahNumber, verseNumber] = verseData.verse_key
          .split(':')
          .map(Number);
        const resp = await fetch(
          'https://global-islam5-islam-g-5.hf.space/quran/',
          {
            method: 'POST',
            body: JSON.stringify({
              surah_number: surahNumber,
              ayah_number: verseNumber,
              language_code: selectedLanguage,
            }),
            headers: { 'content-type': 'application/json' },
          },
        );
        const translationData = await resp.json();
        translation = translationData?.data?.['translation-content'] || '';
      }

      setVerse({ ...verseData, chapter: chapterData.chapter, translation });
    } catch (err) {
      console.error(err);
      setError('Unable to load Verse of the Day');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerse();
  }, [selectedLanguage]);

  if (loading && !verse) {
    return (
      <View
        className="rounded-2xl p-6 mb-6"
        style={{
          backgroundColor: c.surface,
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        <View className="flex-row items-center gap-2 mb-4">
          <View
            className="w-8 h-8 rounded-lg items-center justify-center"
            style={{ backgroundColor: c.surface3 }}
          >
            <Ionicons name="book-outline" size={16} color={c.accent} />
          </View>
          <View
            className="h-4 w-32 rounded"
            style={{ backgroundColor: c.border }}
          />
        </View>
        <View
          className="h-24 rounded-xl mb-4"
          style={{ backgroundColor: c.surface2 }}
        />
        <View
          className="h-4 w-24 rounded"
          style={{ backgroundColor: c.border }}
        />
      </View>
    );
  }

  if (error || !verse) {
    return (
      <View
        className="rounded-2xl p-6 mb-6"
        style={{
          backgroundColor: c.surface6,
          borderWidth: 1,
          borderColor: c.border5,
        }}
      >
        <Text className="text-sm text-center" style={{ color: c.error }}>
          {error}
        </Text>
        <TouchableOpacity
          onPress={fetchVerse}
          className="mt-4 self-center px-4 py-2 rounded-xl"
          style={{ backgroundColor: c.surface2 }}
        >
          <Text className="text-xs font-medium" style={{ color: c.accent }}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const translation = verse.translation || '';
  const surahTitle = isRTLLayout
    ? verse.chapter?.name_arabic
    : verse.chapter?.name_simple;

  return (
    <View
      className="rounded-2xl p-6 mb-6 overflow-hidden"
      style={{
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
      }}
    >
      {/* Header */}
      <View className="flex-row items-start justify-between mb-5">
        <View className="flex-1">
          <View className="flex-row items-center gap-2 mb-2">
            <View
              className="w-8 h-8 rounded-lg items-center justify-center"
              style={{ backgroundColor: c.surface3 }}
            >
              <Ionicons name="book-outline" size={16} color={c.accent} />
            </View>
            <Text
              className="text-[11px] font-bold tracking-[2px] uppercase"
              style={{ color: c.accent }}
            >
              {translatedText?.other?.verse || 'Verse of the Day'}
            </Text>
          </View>
          <View className="flex-row items-center gap-1.5">
            <Ionicons name="calendar-outline" size={13} color={c.quaternary} />
            <Text
              className="text-[11px] font-medium"
              style={{ color: c.quaternary }}
            >
              {formatDate(selectedLanguage)}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={fetchVerse}
            disabled={loading}
            activeOpacity={0.7}
            className="w-9 h-9 rounded-xl items-center justify-center"
            style={{
              backgroundColor: c.surface2,
              borderWidth: 1,
              borderColor: c.border,
            }}
          >
            <Ionicons
              name="refresh"
              size={15}
              color={c.accent}
              style={{ transform: [{ rotate: loading ? '180deg' : '0deg' }] }}
            />
          </TouchableOpacity>

          <View
            className="flex-row items-center gap-1.5 rounded-xl px-2.5 py-1.5"
            style={{
              backgroundColor: c.surface2,
              borderWidth: 1,
              borderColor: c.border,
            }}
          >
            <Ionicons name="globe-outline" size={13} color={c.tertiary} />
            <Text
              className="text-[11px] font-semibold"
              style={{ color: c.tertiary }}
            >
              {selectedLanguage && selectedLanguage?.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>

      {/* Surah Title */}
      <Text
        className="text-[15px] font-semibold mb-4"
        style={{ color: c.primary, textAlign: isRTLLayout ? 'right' : 'left' }}
      >
        {surahTitle} | {verse.verse_key}
      </Text>

      {/* Arabic Verse */}
      <View
        className="rounded-2xl p-5 mb-5"
        style={{
          backgroundColor: c.surface2,
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        <Text
          className="text-[20px] font-light leading-9"
          style={{
            color: c.secondary,
            textAlign: 'right',
            writingDirection: 'rtl',
          }}
        >
          {verse.text_uthmani}
        </Text>
      </View>

      {/* Translation */}
      {selectedLanguage !== 'ar' && (
        <View className="mb-5">
          <Text
            className="text-[10px] font-bold uppercase tracking-widest mb-2"
            style={{ color: c.quaternary }}
          >
            {translatedText?.other?.translation || 'Translation'}
          </Text>

          <Pressable onPress={() => setExpanded(!expanded)}>
            <Text
              className="text-[13px] font-normal leading-5 tracking-wide"
              style={{ color: c.secondary }}
              numberOfLines={expanded ? undefined : 2}
            >
              {translation}
            </Text>
          </Pressable>

          {translation.length > 120 && (
            <Pressable
              onPress={() => setExpanded(!expanded)}
              className="mt-2 self-start"
            >
              <Text
                className="text-[11px] font-medium"
                style={{ color: c.accent }}
              >
                {expanded ? 'Show less' : 'Show more'}
              </Text>
            </Pressable>
          )}
        </View>
      )}

      {/* Metadata Cards */}
      <View className="flex-row gap-2 mb-4">
        {[
          {
            label: translatedText?.other?.chapter || 'Chapter',
            value: surahTitle,
          },
          {
            label: translatedText?.other?.part || 'Juz',
            value: String(verse.juz_number),
          },
          {
            label: translatedText?.other?.page || 'Page',
            value: String(verse.page_number),
          },
        ].map((meta) => (
          <View
            key={meta.label}
            className="flex-1 rounded-2xl p-3.5"
            style={{
              backgroundColor: c.surface2,
              borderWidth: 1,
              borderColor: c.border,
            }}
          >
            <Text
              className="text-[10px] font-medium mb-1"
              style={{ color: c.quaternary }}
            >
              {meta.label}
            </Text>
            <Text
              className="text-[13px] font-semibold"
              style={{ color: c.secondary }}
              numberOfLines={1}
            >
              {meta.value}
            </Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View
        className="flex-row items-center justify-between pt-3"
        style={{ borderTopWidth: 1, borderColor: c.border }}
      >
        <Text
          className="text-[11px] font-medium tracking-wide"
          style={{ color: c.quaternary }}
        >
          {verse.chapter?.name_simple} · {verse.verse_key}
        </Text>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={c.quaternary}
        />
      </View>
    </View>
  );
};

export default RandomVerse;
