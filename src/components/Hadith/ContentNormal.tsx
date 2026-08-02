import { Colors } from '@/src/constants/theme';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import useLanguage from '../../hooks/useLanguage';
import useStaticText from '../../hooks/useStaticText';
import Loader from '../common/Loader';
import Toast from '../common/Toast';
const BASE =
  'https://raw.githubusercontent.com/fawazahmed0/hadith-api/master/editions';
const PAGE_SIZE = 10;

const LANGUAGE_MAP = {
  ar: 'ara',
  en: 'eng',
  fr: 'fra',
  tr: 'tur',
  ur: 'urd',
  ru: 'rus',
  id: 'ind',
  bn: 'ben',
  ta: 'tam',
};

const normalize = (t = '') =>
  t
    .replace(/[\u064B-\u065F]/g, '')
    .replace(/أ|إ|آ/g, 'ا')
    .toLowerCase();

const ContentNormal = memo(() => {
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();
  const { theme, isDark } = useAppTheme();

  const [book, setBook] = useState('bukhari');
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('');
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState({});
  const [isFallbackLanguage, setIsFallbackLanguage] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const scrollRef = useRef(null);
  const isRTL = selectedLanguage === 'ar';

  const scrollToTop = useCallback(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const toggleExpand = useCallback((id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const BOOKS = useMemo(() => {
    const opts = translatedText?.contentNormal?.searchSection?.books?.options;
    return opts
      ? Object.entries(opts).map(([value, label]) => ({ value, label }))
      : [];
  }, [translatedText]);

  const fetchHadiths = useCallback(async () => {
    setLoading(true);
    setPage(1);
    try {
      const langPrefix = LANGUAGE_MAP[selectedLanguage];
      const isSupported = langPrefix !== undefined;
      setIsFallbackLanguage(!isSupported);
      const finalLang = isSupported ? langPrefix : 'eng';
      const url = `${BASE}/${finalLang}-${book}.json`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch hadiths');
      const data = await res.json();
      setHadiths(data.hadiths || []);
    } catch (e) {
      setHadiths([]);
    } finally {
      setLoading(false);
    }
  }, [book, selectedLanguage]);

  useEffect(() => {
    if (query) fetchHadiths();
  }, [book, selectedLanguage, query, fetchHadiths]);

  const handleSearch = useCallback(() => {
    const trimmed = inputValue.trim();
    setExpanded({});
    setPage(1);
    if (!trimmed) {
      setQuery('');
      return;
    }
    setQuery(trimmed);
    setTimeout(scrollToTop, 50);
  }, [inputValue, scrollToTop]);

  const filtered = useMemo(() => {
    if (!query.trim()) return [];
    const q = normalize(query);
    return hadiths.filter((h) => normalize(h.text || '').includes(q));
  }, [query, hadiths]);

  const paginated = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  const getGradeStyle = useCallback(
    (grade = '') => {
      const g = grade.toLowerCase();
      if (g.includes('sahih'))
        return {
          backgroundColor: isDark
            ? `${Colors[theme].success}20`
            : `${Colors[theme].success}15`,
          color: Colors[theme].successText,
          borderColor: isDark
            ? `${Colors[theme].success}30`
            : `${Colors[theme].success}25`,
        };
      if (g.includes('hasan'))
        return {
          backgroundColor: isDark
            ? `${Colors[theme].accent}20`
            : `${Colors[theme].accent}15`,
          color: Colors[theme].accent,
          borderColor: isDark
            ? `${Colors[theme].accent}30`
            : `${Colors[theme].accent}25`,
        };
      if (g.includes('daif') || g.includes('weak'))
        return {
          backgroundColor: isDark
            ? `${Colors[theme].error}20`
            : `${Colors[theme].error}15`,
          color: Colors[theme].error,
          borderColor: isDark
            ? `${Colors[theme].error}30`
            : `${Colors[theme].error}25`,
        };
      return {
        backgroundColor: isDark
          ? `${Colors[theme].accent}20`
          : `${Colors[theme].accent}15`,
        color: Colors[theme].accent,
        borderColor: isDark
          ? `${Colors[theme].accent}30`
          : `${Colors[theme].accent}25`,
      };
    },
    [Colors[theme], isDark],
  );

  return (
    <ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* ═══════ SEARCH ROW ═══════ */}
      <View style={styles.searchRow}>
        <TextInput
          value={inputValue}
          onChangeText={setInputValue}
          placeholder={
            translatedText?.contentNormal?.searchSection?.placeholder
          }
          placeholderTextColor={Colors[theme].quaternary}
          textAlign={isRTL ? 'right' : 'left'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={[
            styles.input,
            {
              backgroundColor: Colors[theme].surface,
              borderColor: isFocused
                ? Colors[theme].accent
                : Colors[theme].border,
              color: Colors[theme].primary,
            },
          ]}
        />

        <Pressable
          onPress={handleSearch}
          style={({ pressed }) => [
            styles.searchBtn,
            {
              backgroundColor: Colors[theme].success,
              opacity: pressed ? 0.9 : 1,
              transform: [{ scale: pressed ? 0.97 : 1 }],
            },
          ]}
        >
          <Text
            style={{
              color: isDark ? Colors[theme].background : Colors[theme].surface,
              fontWeight: '700',
              fontSize: 15,
            }}
          >
            {translatedText?.contentNormal?.searchSection?.button}
          </Text>
        </Pressable>
      </View>

      {/* Book Selector */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.bookSelectorContent}
      >
        {BOOKS.map((b) => {
          const isSelected = book === b.value;
          return (
            <Pressable
              key={b.value}
              onPress={() => setBook(b.value)}
              style={[
                styles.bookChip,
                {
                  backgroundColor: isSelected
                    ? Colors[theme].success
                    : Colors[theme].surface,
                  borderColor: isSelected
                    ? Colors[theme].success
                    : Colors[theme].border,
                },
              ]}
            >
              <Text
                style={{
                  color: isSelected
                    ? isDark
                      ? Colors[theme].background
                      : Colors[theme].surface
                    : Colors[theme].primary,
                  fontWeight: '600',
                  fontSize: 13,
                }}
              >
                {b.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* ═══════ FALLBACK TOAST ═══════ */}
      {isFallbackLanguage && (
        <Toast
          iconName="alert-circle-outline"
          theme="warning"
          title={translatedText?.contentNormal?.fallbackLanguageToast?.title}
          msg={translatedText?.contentNormal?.fallbackLanguageToast?.msg}
          description={
            translatedText?.contentNormal?.fallbackLanguageToast?.description
          }
        />
      )}

      {/* ═══════ INITIAL STATE ═══════ */}
      {!query && (
        <View style={styles.centerBox}>
          <Text style={{ color: Colors[theme].tertiary, fontSize: 15 }}>
            {translatedText?.contentNormal?.initialPlaceholder}
          </Text>
        </View>
      )}

      {/* ═══════ LOADING ═══════ */}
      {loading && (
        <Loader label={translatedText?.contentNormal?.loading?.label} />
      )}

      {/* ═══════ RESULTS ═══════ */}
      <View style={{ gap: 12 }}>
        {paginated.map((h, i) => {
          const isOpen = expanded[h.hadithnumber];
          return (
            <View
              key={h.hadithnumber || i}
              style={[
                styles.card,
                {
                  backgroundColor: isDark
                    ? `${Colors[theme].surface}40`
                    : `${Colors[theme].surface}60`,
                  borderColor: isDark
                    ? `${Colors[theme].border}30`
                    : `${Colors[theme].border}50`,
                },
              ]}
            >
              <View
                style={[
                  styles.cardInner,
                  { alignItems: isRTL ? 'flex-end' : 'flex-start' },
                ]}
              >
                {/* Header */}
                <View
                  style={[
                    styles.cardHeader,
                    { flexDirection: isRTL ? 'row-reverse' : 'row' },
                  ]}
                >
                  <View
                    style={[
                      styles.badge,
                      {
                        backgroundColor: isDark
                          ? `${Colors[theme].success}20`
                          : `${Colors[theme].success}15`,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.badgeText,
                        { color: Colors[theme].successText },
                      ]}
                    >
                      {h.bookName}
                    </Text>
                  </View>
                  <Text style={{ color: Colors[theme].tertiary, fontSize: 12 }}>
                    {
                      translatedText?.contentNormal?.hadithCard?.header
                        ?.hadithPrefix
                    }
                    {h.hadithnumber}
                  </Text>
                </View>

                {/* Text */}
                <Text
                  style={[
                    styles.hadithText,
                    {
                      color: Colors[theme].secondary,
                      textAlign: isRTL ? 'right' : 'left',
                      writingDirection: isRTL ? 'rtl' : 'ltr',
                    },
                  ]}
                >
                  {isOpen
                    ? h.text
                    : h.text?.slice(0, 250) +
                      (h.text?.length > 250 ? '...' : '')}
                </Text>

                {/* Expand Button */}
                <Pressable onPress={() => toggleExpand(h.hadithnumber)}>
                  <Text
                    style={{
                      color: Colors[theme].successText,
                      fontSize: 12,
                      fontWeight: '700',
                      marginTop: 4,
                    }}
                  >
                    {isOpen
                      ? translatedText?.contentNormal?.hadithCard?.showLess
                      : translatedText?.contentNormal?.hadithCard?.showMore}
                  </Text>
                </Pressable>

                {/* Grades */}
                {h.grades?.length > 0 && (
                  <View
                    style={[
                      styles.gradesRow,
                      { flexDirection: isRTL ? 'row-reverse' : 'row' },
                    ]}
                  >
                    {h.grades.map((g, idx) => {
                      const style = getGradeStyle(g.grade);
                      return (
                        <View
                          key={idx}
                          style={[
                            styles.gradeBadge,
                            {
                              backgroundColor: style.backgroundColor,
                              borderColor: style.borderColor,
                              borderWidth: 1,
                            },
                          ]}
                        >
                          <Text
                            style={{
                              fontSize: 11,
                              fontWeight: '700',
                              color: style.color,
                            }}
                          >
                            {g.name}: {g.grade}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                )}

                {/* References */}
                <View
                  style={[
                    styles.refSection,
                    { borderTopColor: Colors[theme].border },
                  ]}
                >
                  <View
                    style={[
                      styles.refTitleRow,
                      { flexDirection: isRTL ? 'row-reverse' : 'row' },
                    ]}
                  >
                    <View
                      style={[
                        styles.dot,
                        { backgroundColor: Colors[theme].success },
                      ]}
                    />
                    <Text
                      style={{
                        color: Colors[theme].tertiary,
                        fontSize: 11,
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: 0.5,
                      }}
                    >
                      {
                        translatedText?.contentNormal?.hadithCard?.header
                          ?.referencesTitle
                      }
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.refBox,
                      {
                        backgroundColor: Colors[theme].surface2,
                        borderColor: Colors[theme].border,
                      },
                    ]}
                  >
                    <Text
                      style={{
                        color: Colors[theme].tertiary,
                        fontSize: 11,
                        marginBottom: 4,
                      }}
                    >
                      {
                        translatedText?.contentNormal?.hadithCard?.header
                          ?.referenceLabel
                      }
                    </Text>
                    <Text
                      style={{
                        color: Colors[theme].primary,
                        fontSize: 14,
                        fontWeight: '700',
                      }}
                    >
                      {h.bookName} {h.hadithnumber}
                    </Text>
                  </View>

                  {h.reference && (
                    <View
                      style={[
                        styles.refBox,
                        {
                          backgroundColor: Colors[theme].surface2,
                          borderColor: Colors[theme].border,
                        },
                      ]}
                    >
                      <Text
                        style={{
                          color: Colors[theme].tertiary,
                          fontSize: 11,
                          marginBottom: 4,
                        }}
                      >
                        {
                          translatedText?.contentNormal?.hadithCard?.header
                            ?.inBookReference
                        }
                      </Text>
                      <Text
                        style={{
                          color: Colors[theme].secondary,
                          fontSize: 14,
                          fontWeight: '600',
                        }}
                      >
                        Book {h.reference.book} • Hadith {h.reference.hadith}
                      </Text>
                    </View>
                  )}

                  {h.arabicnumber && (
                    <Text
                      style={{ color: Colors[theme].quaternary, fontSize: 12 }}
                    >
                      {
                        translatedText?.contentNormal?.hadithCard?.header
                          ?.arabicReference
                      }
                      : #{h.arabicnumber}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        })}

        {/* Empty */}
        {query && !loading && filtered.length === 0 && (
          <View style={styles.centerBox}>
            <Text style={{ color: Colors[theme].tertiary, fontSize: 15 }}>
              {translatedText?.contentNormal?.emptyState}
            </Text>
          </View>
        )}
      </View>

      {/* ═══════ PAGINATION ═══════ */}
      {query && totalPages > 1 && (
        <View
          style={[
            styles.paginationRow,
            { flexDirection: isRTL ? 'row-reverse' : 'row' },
          ]}
        >
          <Pressable
            disabled={page === 1}
            onPress={() => {
              setPage((p) => p - 1);
              setTimeout(scrollToTop, 50);
            }}
            style={[
              styles.pageBtn,
              {
                backgroundColor: Colors[theme].surface,
                borderColor: Colors[theme].border,
                opacity: page === 1 ? 0.4 : 1,
              },
            ]}
          >
            <Text style={{ color: Colors[theme].primary, fontWeight: '600' }}>
              {translatedText?.contentNormal?.pagination?.prev}
            </Text>
          </Pressable>

          <Text style={{ color: Colors[theme].secondary, fontSize: 14 }}>
            {page} / {totalPages}
          </Text>

          <Pressable
            disabled={page === totalPages}
            onPress={() => {
              setPage((p) => p + 1);
              setTimeout(scrollToTop, 50);
            }}
            style={[
              styles.pageBtn,
              {
                backgroundColor: Colors[theme].surface,
                borderColor: Colors[theme].border,
                opacity: page === totalPages ? 0.4 : 1,
              },
            ]}
          >
            <Text style={{ color: Colors[theme].primary, fontWeight: '600' }}>
              {translatedText?.contentNormal?.pagination?.next}
            </Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
});
ContentNormal.displayName = 'ContentNormal';

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    gap: 16,
  },
  searchRow: {
    gap: 10,
  },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  searchBtn: {
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookSelectorContent: {
    gap: 8,
    paddingVertical: 4,
  },
  bookChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  centerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  cardInner: {
    padding: 18,
    gap: 14,
  },
  cardHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  hadithText: {
    fontSize: 15,
    lineHeight: 26,
  },
  gradesRow: {
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
  },
  gradeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
  },
  refSection: {
    borderTopWidth: 1,
    paddingTop: 16,
    gap: 12,
  },
  refTitleRow: {
    alignItems: 'center',
    gap: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  refBox: {
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
  },
  paginationRow: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingTop: 16,
  },
  pageBtn: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
});

export default ContentNormal;
