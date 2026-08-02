import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useMemo, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';

// ... keep all your existing constants: categoriesMap, LANGUAGE_MAP, HADITH_IDS, normalizeHadith, formatDate, RTL_LANGS ...

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

const HADITH_IDS = [
  5907, 5913, 6208, 6274, 6275, 8402, 65099, 3410, 6258, 6276, 10112, 10113,
  10114, 10842, 10847, 10853, 10854, 64642, 65026, 65035, 65261, 65285, 65298,
  65300, 65303, 65312, 65331, 65787, 3377, 4217, 10558, 10574, 10575, 10836,
  10852, 10856, 58145, 5383, 6265, 65448, 66034,
];

function normalizeHadith(data: any) {
  return {
    id: data?.id,
    title: data?.title || '',
    text: data?.hadeeth || data?.hadeeth_text || '',
    narrator: data?.attribution || data?.rawy || 'Unknown',
    grade: data?.grade || data?.hukm || 'Unknown',
    explanation: data?.explanation || '',
    benefits: Array.isArray(data?.hints) ? data.hints : [],
    categories: Array.isArray(data?.categories) ? data.categories : [],
    reference:
      data?.reference || data?.source || data?.book || data?.takhrij || '',
  };
}

const DailyHadith: React.FC = () => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();

  const { translatedText } = useStaticText();

  const [hadith, setHadith] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expanded, setExpanded] = useState(false);

  const isRTL = RTL_LANGS.has(selectedLanguage || 'en');
  const textAlign: any = isRTL ? 'right' : 'left';

  const todaySeed = useMemo(() => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  }, []);

  const generateSeed = () => {
    let hash = 0;
    for (let i = 0; i < todaySeed.length; i++) {
      hash = todaySeed.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  };

  const fetchHadith = async () => {
    try {
      setLoading(true);
      setError('');
      setExpanded(false);

      const seed = generateSeed();
      const hadithId = HADITH_IDS[seed % HADITH_IDS.length];

      const response = await fetch(
        `https://hadeethenc.com/api/v1/hadeeths/one/?language=${selectedLanguage}&id=${hadithId}`,
      );
      if (!response.ok) throw new Error('Failed to fetch hadith');
      const data = await response.json();
      if (!data?.hadeeth) throw new Error('Invalid hadith response');

      setHadith(normalizeHadith(data));
    } catch (err) {
      console.error(err);
      setError('Unable to load Hadith of the Day');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHadith();
  }, [selectedLanguage]);

  // ─── LOADING STATE ───
  if (loading && !hadith) {
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
            <Ionicons name="document-text-outline" size={16} color={c.accent} />
          </View>
          <View
            className="h-4 w-36 rounded"
            style={{ backgroundColor: c.border }}
          />
        </View>
        <View
          className="h-28 rounded-xl mb-4"
          style={{ backgroundColor: c.surface2 }}
        />
        <View className="flex-row gap-2 mb-3">
          <View
            className="flex-1 h-20 rounded-xl"
            style={{ backgroundColor: c.surface2 }}
          />
          <View
            className="flex-1 h-20 rounded-xl"
            style={{ backgroundColor: c.surface2 }}
          />
        </View>
        <View
          className="h-4 w-24 rounded"
          style={{ backgroundColor: c.border }}
        />
      </View>
    );
  }

  // ─── ERROR STATE ───
  if (error || !hadith) {
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
          onPress={fetchHadith}
          activeOpacity={0.7}
          className="mt-4 self-center px-5 py-2.5 rounded-xl"
          style={{
            backgroundColor: c.surface2,
            borderWidth: 1,
            borderColor: c.border2,
          }}
        >
          <Text className="text-xs font-bold" style={{ color: c.accent }}>
            Retry
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      className="rounded-2xl p-6 mb-6 overflow-hidden"
      style={{
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
      }}
    >
      {/* ─── HEADER ─── */}
      <View className="flex-row items-start justify-between mb-4">
        <View className="flex-1">
          <View className="flex-row items-center gap-2 mb-2">
            <View
              className="w-8 h-8 rounded-lg items-center justify-center"
              style={{ backgroundColor: c.surface3 }}
            >
              <Ionicons
                name="document-text-outline"
                size={16}
                color={c.accent}
              />
            </View>
            <Text
              className="text-[11px] font-bold tracking-[2px] uppercase"
              style={{ color: c.accent }}
            >
              {translatedText?.hadith?.header?.hadithLabel ||
                'Hadith of the Day'}
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
            {selectedLanguage?.toUpperCase()}
          </Text>
        </View>
      </View>

      {/* ─── TITLE ─── */}
      {hadith.title ? (
        <Text
          className="text-[15px] font-semibold leading-6 mb-4"
          style={{ color: c.primary, textAlign }}
          numberOfLines={2}
        >
          {hadith.title}
        </Text>
      ) : null}

      {/* ─── HADITH TEXT ─── */}
      <View
        className="rounded-2xl p-4 mb-4"
        style={{
          backgroundColor: c.surface2,
          borderWidth: 1,
          borderColor: c.border,
        }}
      >
        <Text
          className="text-[14px] font-light leading-7"
          style={{
            textAlign,
            writingDirection: isRTL ? 'rtl' : 'ltr',
            color: c.secondary,
          }}
        >
          {hadith.text}
        </Text>
      </View>

      {/* ─── METADATA CARDS ─── */}
      <View className="flex-row gap-2 mb-4">
        {/* Narrator */}
        <View
          className="flex-1 rounded-2xl p-3.5"
          style={{
            backgroundColor: c.surface2,
            borderWidth: 1,
            borderColor: c.border,
          }}
        >
          <View className="flex-row items-center gap-1.5 mb-2">
            <Ionicons name="person-outline" size={12} color={c.quaternary} />
            <Text
              className="text-[10px] font-medium"
              style={{ color: c.quaternary }}
            ></Text>
          </View>
          <Text
            className="text-[12px] font-semibold leading-5"
            style={{ color: c.secondary }}
            numberOfLines={2}
          >
            {hadith.narrator}
          </Text>
        </View>

        {/* Grade */}
        <View
          className="flex-1 rounded-2xl p-3.5"
          style={{
            backgroundColor: c.surface3,
            borderWidth: 1,
            borderColor: c.border3,
          }}
        >
          <View className="flex-row items-center gap-1.5 mb-2">
            <Ionicons
              name="shield-checkmark-outline"
              size={12}
              color={c.accent}
            />
            <Text
              className="text-[10px] font-medium"
              style={{ color: c.accent }}
            >
              {translatedText?.hadith?.sections?.authentication || 'Grade'}
            </Text>
          </View>
          <View
            className="self-start rounded-full px-2.5 py-1"
            style={{ backgroundColor: c.accentMuted }}
          >
            <Text className="text-[11px] font-bold" style={{ color: c.accent }}>
              {hadith.grade}
            </Text>
          </View>
        </View>
      </View>

      {/* ─── EXPANDABLE SECTION ─── */}
      {expanded && (
        <View className="mb-4">
          {hadith.explanation ? (
            <View
              className="rounded-2xl p-4 mb-3"
              style={{
                backgroundColor: c.surface5,
                borderWidth: 1,
                borderColor: c.border4,
              }}
            >
              <View className="flex-row items-center gap-2 mb-2">
                <Ionicons name="reader-outline" size={14} color={c.success} />
                <Text
                  className="text-[11px] font-semibold"
                  style={{ color: c.success }}
                >
                  Explanation
                </Text>
              </View>
              <Text
                className="text-[12px] leading-6"
                style={{ color: c.successText }}
              >
                {hadith.explanation}
              </Text>
            </View>
          ) : null}

          {hadith.benefits?.length > 0 ? (
            <View
              className="rounded-2xl p-4 mb-3"
              style={{
                backgroundColor: c.surface3,
                borderWidth: 1,
                borderColor: c.border3,
              }}
            >
              <View className="flex-row items-center gap-2 mb-3">
                <Ionicons name="sparkles-outline" size={14} color={c.accent} />
                <Text
                  className="text-[11px] font-semibold"
                  style={{ color: c.accent }}
                >
                  Benefits
                </Text>
              </View>
              {hadith.benefits.map((benefit: string, index: number) => (
                <View key={index} className="flex-row gap-2 mb-2">
                  <Text
                    className="text-[12px] mt-0.5"
                    style={{ color: c.accent }}
                  >
                    •
                  </Text>
                  <Text
                    className="text-[12px] leading-5 flex-1"
                    style={{ color: c.secondary }}
                  >
                    {benefit}
                  </Text>
                </View>
              ))}
            </View>
          ) : null}

          {/* Reference Section */}
          <View
            className="rounded-2xl p-4"
            style={{
              backgroundColor: c.surface2,
              borderWidth: 1,
              borderColor: c.border,
            }}
          >
            <View className="flex-row items-center gap-2 mb-3">
              <Ionicons name="book-outline" size={13} color={c.quaternary} />
              <Text
                className="text-[11px] font-semibold"
                style={{ color: c.quaternary }}
              >
                {translatedText?.explore?.content?.card?.reference ||
                  'Reference'}
              </Text>
            </View>

            {/* Hadith ID */}
            <View
              className="flex-row items-start gap-2.5 rounded-xl p-3 mb-3"
              style={{ backgroundColor: c.surface4 }}
            >
              <View
                className="w-7 h-7 rounded-lg items-center justify-center"
                style={{
                  backgroundColor: c.surface2,
                  borderWidth: 1,
                  borderColor: c.border,
                }}
              >
                <Ionicons
                  name="git-commit-outline"
                  size={12}
                  color={c.tertiary}
                />
              </View>
              <View>
                <Text
                  className="text-[10px] uppercase tracking-wider mb-0.5"
                  style={{ color: c.quaternary }}
                >
                  Hadith ID
                </Text>
                <Text
                  className="text-[12px] font-bold"
                  style={{ color: c.secondary }}
                >
                  #{hadith.id}
                </Text>
              </View>
            </View>

            {/* Categories */}
            {hadith.categories?.length > 0 ? (
              <View
                className="rounded-xl p-3 mb-3"
                style={{ backgroundColor: c.surface4 }}
              >
                <Text
                  className="text-[10px] uppercase tracking-wider mb-2"
                  style={{ color: c.quaternary }}
                >
                  Categories
                </Text>
                <View className="flex-row flex-wrap gap-1.5">
                  {hadith.categories.map((category: any, index: number) => {
                    const catName =
                      category?.title || category?.name || category;
                    return (
                      <View
                        key={index}
                        className="rounded-full px-2.5 py-1"
                        style={{
                          backgroundColor: c.surface3,
                          borderWidth: 1,
                          borderColor: c.border3,
                        }}
                      >
                        <Text
                          className="text-[10px] font-semibold"
                          style={{ color: c.accent }}
                        >
                          {catName}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            ) : null}

            {/* Source */}
            {hadith.reference ? (
              <View
                className="rounded-xl p-3"
                style={{ backgroundColor: c.surface4 }}
              >
                <Text
                  className="text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: c.quaternary }}
                >
                  Source
                </Text>
                <Text
                  className="text-[12px] leading-5"
                  style={{ color: c.secondary }}
                >
                  {hadith.reference}
                </Text>
              </View>
            ) : null}
          </View>
        </View>
      )}

      {/* ─── SHOW MORE / LESS BUTTON ─── */}
      <TouchableOpacity
        onPress={() => setExpanded(!expanded)}
        activeOpacity={0.7}
        className="w-full rounded-2xl py-3 items-center"
        style={{
          backgroundColor: c.surface2,
          borderWidth: 1,
          borderColor: c.border2,
        }}
      >
        <Text
          className="text-[12px] font-semibold"
          style={{ color: c.secondary }}
        >
          {expanded
            ? translatedText?.contentNormal?.hadithCard?.showLess || 'Show Less'
            : translatedText?.contentNormal?.hadithCard?.showMore ||
              'Show More'}
        </Text>
      </TouchableOpacity>

      {/* ─── FOOTER ─── */}
      <View
        className="flex-row items-center justify-between mt-4 pt-3"
        style={{ borderTopWidth: 1, borderColor: c.border }}
      >
        <View>
          <Text
            className="text-[11px] font-medium tracking-wide"
            style={{ color: c.tertiary }}
          >
            {hadith.narrator}
          </Text>
          {hadith.reference ? (
            <Text
              className="text-[10px] font-normal tracking-wide mt-0.5"
              style={{ color: c.quinary }}
            >
              {hadith.reference}
            </Text>
          ) : null}
        </View>
        <Ionicons
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={16}
          color={c.tertiary}
        />
      </View>
    </View>
  );
};

export default DailyHadith;
