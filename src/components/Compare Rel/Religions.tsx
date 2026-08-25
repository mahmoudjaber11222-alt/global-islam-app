// Religions.jsx
import Loader from '@/src/components/common/Loader';
import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { translateText } from '@/src/service/translation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width: SCREEN_W } = Dimensions.get('window');
const IS_TABLET = SCREEN_W >= 768;

function Religions({ question_id }) {
  const [religions, setReligions] = useState([]);
  const [trReligions, setTrReligions] = useState([]);
  const [loading, setLoading] = useState(false);
  const { selectedLanguage } = useLanguage();
  const { translatedText: data } = useStaticText();
  const { theme, isDark } = useAppTheme();
  const c = Colors[theme];

  const accentCyan = isDark ? '#5a9fd4' : '#3a8fc4';
  const accentAmber = isDark ? '#d4a853' : '#b8860b';
  const accentEmerald = isDark ? '#5a9a5a' : '#2e7d32';

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const fetchCards = async () => {
      try {
        const res = await fetch(
          `https://global-islam5-islam-g-5.hf.space/compare/question/${question_id}/answers`,
        );
        const json = await res.json();
        if (!cancelled) setReligions(Array.isArray(json) ? json : []);
      } catch (err) {
        console.error('Failed to fetch religions:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCards();
    return () => {
      cancelled = true;
    };
  }, [question_id]);

  useEffect(() => {
    let cancelled = false;

    async function doTranslate() {
      if (selectedLanguage === 'en' || religions.length === 0) return;

      try {
        const translated = await Promise.all(
          religions.map(async (item) => {
            const [trAnswer, trTitle, trDiscussion] = await Promise.all([
              translateText(item?.answer ?? '', {
                from: 'en',
                to: selectedLanguage,
              }),
              translateText(item?.title ?? '', {
                from: 'en',
                to: selectedLanguage,
              }),
              translateText(item?.discussion ?? '', {
                from: 'en',
                to: selectedLanguage,
              }),
            ]);
            return {
              ...item,
              answer: trAnswer,
              title: trTitle,
              discussion: trDiscussion,
            };
          }),
        );

        if (!cancelled) setTrReligions(translated);
      } catch (err) {
        console.error('Translation error:', err);
      }
    }

    doTranslate();
    return () => {
      cancelled = true;
    };
  }, [selectedLanguage, religions]);

  const sourceData = useMemo(
    () => (selectedLanguage === 'en' ? religions : trReligions),
    [selectedLanguage, religions, trReligions],
  );

  const rtl = selectedLanguage === 'ar';

  const handleOpenURL = useCallback((url) => {
    if (!url) return;
    Linking.openURL(url).catch(() => {});
  }, []);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      {sourceData?.map((religion, index) => (
        <View
          key={religion.id ?? `rel-${index}`}
          style={[
            styles.card,
            {
              borderColor: `${c.primary}12`,
              backgroundColor: c.surface,
            },
          ]}
        >
          <View style={styles.cardInner}>
            {/* Title */}
            <View style={styles.titleBlock}>
              <Text
                style={[
                  styles.title,
                  { color: c.primary, textAlign: rtl ? 'right' : 'left' },
                ]}
              >
                {religion.title}
              </Text>

              {Array.isArray(religion?.examples) &&
                religion.examples.length > 0 && (
                  <View
                    style={[
                      styles.examplesRow,
                      { justifyContent: rtl ? 'flex-end' : 'flex-start' },
                    ]}
                  >
                    {religion.examples.map((example) => (
                      <View
                        key={String(example)}
                        style={[
                          styles.badge,
                          {
                            backgroundColor: `${accentCyan}15`,
                            borderColor: `${accentCyan}25`,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.badgeText,
                            { color: `${accentCyan}bb` },
                          ]}
                        >
                          {example}
                        </Text>
                      </View>
                    ))}
                  </View>
                )}
            </View>

            {/* Answer */}
            <View style={styles.section}>
              <Text style={[styles.sectionTitle, { color: `${accentCyan}bb` }]}>
                {
                  data?.compareRelg?.staticText?.coreQuestions
                    ?.answerNatureTitle
                }
              </Text>
              <Text
                style={[
                  styles.bodyText,
                  {
                    color: `${c.primary}b0`,
                    textAlign: rtl ? 'right' : 'left',
                  },
                ]}
              >
                {religion.answer}
              </Text>
            </View>

            {/* Critique */}
            <View style={styles.section}>
              <Text
                style={[styles.sectionTitle, { color: `${accentAmber}bb` }]}
              >
                {
                  data?.compareRelg?.staticText?.coreQuestions
                    ?.philosophicalDiscussionTitle
                }
              </Text>
              <Text
                style={[
                  styles.bodyText,
                  {
                    color: `${c.primary}b0`,
                    textAlign: rtl ? 'right' : 'left',
                  },
                ]}
              >
                {religion.discussion}
              </Text>
            </View>

            {/* References */}
            {Array.isArray(religion.refs) && religion.refs.length > 0 && (
              <View>
                <Text
                  style={[styles.sectionTitle, { color: `${accentEmerald}bb` }]}
                >
                  {
                    data?.compareRelg?.staticText?.coreQuestions
                      ?.referencesTitle
                  }
                </Text>
                <View style={styles.refsList}>
                  {religion.refs.map((ref) => (
                    <Pressable
                      key={ref}
                      onPress={() => handleOpenURL(ref)}
                      style={styles.refPressable}
                    >
                      <Text
                        style={[styles.refText, { color: `${accentCyan}cc` }]}
                        numberOfLines={2}
                      >
                        {ref}
                      </Text>
                    </Pressable>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16 },
  card: {
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  cardInner: { padding: IS_TABLET ? 24 : 20 },
  titleBlock: { marginBottom: 20 },
  title: {
    fontSize: IS_TABLET ? 20 : 17,
    lineHeight: IS_TABLET ? 28 : 24,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 10,
  },
  examplesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  badgeText: { fontSize: 12, fontWeight: '500' },
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  bodyText: { fontSize: 14, lineHeight: 24 },
  refsList: { gap: 10 },
  refPressable: { paddingVertical: 2 },
  refText: { fontSize: 13, lineHeight: 20 },
});

export default Religions;
