import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import { fetchHadith } from '../service/hadith';
function Loader() {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
function Hadith() {
  const { theme, isDark } = useAppTheme();
  const { selectedLanguage } = useLanguage();
  const route = useRoute();
  const { id } = route.params;
  const [hadith, setHadith] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const { translatedText } = useStaticText();
  const scrollRef = useRef(null);

  const dir = useMemo(
    () => (selectedLanguage === 'ar' ? 'rtl' : 'ltr'),
    [selectedLanguage],
  );
  const isRTL = dir === 'rtl';

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, []);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchHadith(id, selectedLanguage);
      setHadith(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [id, selectedLanguage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading || !hadith) return <Loader />;

  const cardBg = isDark
    ? `${Colors[theme].surface}cc`
    : `${Colors[theme].surface}cc`;
  const badgeBg = isDark
    ? `${Colors[theme].success}20`
    : `${Colors[theme].success}15`;
  const gradeBg = isDark
    ? `${Colors[theme].success}15`
    : `${Colors[theme].success}10`;

  return (
    <ScrollView
      ref={scrollRef}
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
      contentContainerStyle={styles.contentContainer}
    >
      {/* ═══════ HEADER ═══════ */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          {/* Badge */}
          <View
            style={[
              styles.badge,
              {
                backgroundColor: badgeBg,
                borderColor: isDark
                  ? `${Colors[theme].success}30`
                  : `${Colors[theme].success}20`,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="book-open-page-variant"
              size={16}
              color={Colors[theme].successText}
            />
            <Text
              style={[styles.badgeText, { color: Colors[theme].successText }]}
            >
              {translatedText?.hadith?.header.hadithLabel} #{hadith.id}
            </Text>
          </View>

          {/* Back Button */}
          <Pressable
            onPress={() => navigation.goBack()}
            style={({ pressed }) => [
              styles.backButton,
              {
                backgroundColor: Colors[theme].surface,
                borderColor: Colors[theme].border,
                opacity: pressed ? 0.8 : 1,
                transform: [{ scale: pressed ? 0.98 : 1 }],
              },
            ]}
          >
            <MaterialCommunityIcons
              name={isRTL ? 'chevron-right' : 'chevron-left'}
              size={20}
              color={Colors[theme].secondary}
            />
            <Text
              style={[
                styles.backButtonText,
                { color: Colors[theme].secondary },
              ]}
            >
              {translatedText?.hadith?.header.backButton}
            </Text>
          </Pressable>
        </View>

        {/* Title */}
        <Text style={[styles.title, { color: Colors[theme].primary }]}>
          {hadith.title}
        </Text>

        {/* Tags */}
        <View style={styles.tagsRow}>
          <View
            style={[
              styles.badge,
              {
                backgroundColor: badgeBg,
                borderColor: isDark
                  ? `${Colors[theme].success}30`
                  : `${Colors[theme].success}20`,
              },
            ]}
          >
            <Text
              style={[styles.badgeText, { color: Colors[theme].successText }]}
            >
              {hadith.grade}
            </Text>
          </View>
          <View
            style={[
              styles.tag,
              {
                backgroundColor: Colors[theme].surface2,
                borderColor: Colors[theme].border,
              },
            ]}
          >
            <Text style={[styles.tagText, { color: Colors[theme].tertiary }]}>
              {hadith.attribution}
            </Text>
          </View>
        </View>
      </View>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <View style={styles.mainContent}>
        {/* ── Hadith Text ── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: cardBg,
              borderColor: isDark
                ? `${Colors[theme].border}40`
                : `${Colors[theme].border}60`,
            },
          ]}
        >
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="format-quote-open"
              size={20}
              color={Colors[theme].successText}
            />
            <Text
              style={[styles.sectionTitle, { color: Colors[theme].primary }]}
            >
              {translatedText?.hadith?.sections.hadithText}
            </Text>
          </View>
          <Text style={[styles.bodyText, { color: Colors[theme].secondary }]}>
            {hadith.hadeeth}
          </Text>
        </View>

        {/* ── Arabic Hadith ── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: cardBg,
              borderColor: isDark
                ? `${Colors[theme].border}40`
                : `${Colors[theme].border}60`,
            },
          ]}
        >
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="translate"
              size={20}
              color={Colors[theme].accent}
            />
            <Text
              style={[styles.sectionTitle, { color: Colors[theme].primary }]}
            >
              {translatedText?.hadith?.sections.arabicText}
            </Text>
          </View>
          <Text
            style={[
              styles.arabicText,
              { color: Colors[theme].primary, writingDirection: 'rtl' },
            ]}
          >
            {hadith.hadeeth_ar}
          </Text>
        </View>

        {/* ── Explanation ── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: cardBg,
              borderColor: isDark
                ? `${Colors[theme].border}40`
                : `${Colors[theme].border}60`,
            },
          ]}
        >
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              size={20}
              color={Colors[theme].accent}
            />
            <Text
              style={[styles.sectionTitle, { color: Colors[theme].primary }]}
            >
              {translatedText?.hadith?.sections.explanation}
            </Text>
          </View>
          <Text style={[styles.bodyText, { color: Colors[theme].secondary }]}>
            {hadith.explanation}
          </Text>
          <View
            style={[styles.divider, { borderTopColor: Colors[theme].border }]}
          />
          <Text
            style={[
              styles.arabicText,
              { color: Colors[theme].primary, writingDirection: 'rtl' },
            ]}
          >
            {hadith.explanation_ar}
          </Text>
        </View>

        {/* ── Grade ── */}
        <View
          style={[
            styles.card,
            {
              backgroundColor: cardBg,
              borderColor: isDark
                ? `${Colors[theme].border}40`
                : `${Colors[theme].border}60`,
            },
          ]}
        >
          <View style={styles.sectionHeader}>
            <MaterialCommunityIcons
              name="shield-check-outline"
              size={20}
              color={Colors[theme].successText}
            />
            <Text
              style={[styles.sectionTitle, { color: Colors[theme].primary }]}
            >
              {translatedText?.hadith?.sections.authentication}
            </Text>
          </View>
          <View
            style={[
              styles.gradeBox,
              {
                backgroundColor: gradeBg,
                borderColor: isDark
                  ? `${Colors[theme].success}25`
                  : `${Colors[theme].success}20`,
              },
            ]}
          >
            <Text
              style={[styles.gradeText, { color: Colors[theme].successText }]}
            >
              {hadith.grade}
            </Text>
          </View>
          <View
            style={[
              styles.gradeBox,
              {
                backgroundColor: gradeBg,
                borderColor: isDark
                  ? `${Colors[theme].success}25`
                  : `${Colors[theme].success}20`,
              },
            ]}
          >
            <Text
              style={[
                styles.gradeText,
                {
                  color: Colors[theme].successText,
                  textAlign: 'right',
                  writingDirection: 'rtl',
                },
              ]}
            >
              {hadith.grade_ar}
            </Text>
          </View>
        </View>

        {/* ── Lessons ── */}
        {hadith.hints?.length > 0 && (
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardBg,
                borderColor: isDark
                  ? `${Colors[theme].border}40`
                  : `${Colors[theme].border}60`,
              },
            ]}
          >
            <Text
              style={[
                styles.sectionTitle,
                { color: Colors[theme].primary, marginBottom: 12 },
              ]}
            >
              {translatedText?.hadith?.sections.lessons}
            </Text>
            {hadith.hints.map((hint, i) => (
              <View key={i} style={styles.hintRow}>
                <Text style={{ color: Colors[theme].accent, marginRight: 8 }}>
                  •
                </Text>
                <Text
                  style={[styles.hintText, { color: Colors[theme].secondary }]}
                >
                  {hint}
                </Text>
              </View>
            ))}
          </View>
        )}

        {/* ── Narrator ── */}
        {hadith.narrator && (
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardBg,
                borderColor: isDark
                  ? `${Colors[theme].border}40`
                  : `${Colors[theme].border}60`,
              },
            ]}
          >
            <Text
              style={[
                styles.sectionTitle,
                { color: Colors[theme].primary, marginBottom: 12 },
              ]}
            >
              {translatedText?.hadith?.sections.narrator || 'Narrator'}
            </Text>
            <Text style={[styles.bodyText, { color: Colors[theme].secondary }]}>
              {hadith.narrator}
            </Text>
          </View>
        )}

        {/* ── Reference ── */}
        {hadith.reference && (
          <View
            style={[
              styles.card,
              {
                backgroundColor: cardBg,
                borderColor: isDark
                  ? `${Colors[theme].border}40`
                  : `${Colors[theme].border}60`,
              },
            ]}
          >
            <Text
              style={[
                styles.sectionTitle,
                { color: Colors[theme].primary, marginBottom: 12 },
              ]}
            >
              {translatedText?.hadith?.sections.reference || 'Reference'}
            </Text>
            <View
              style={[
                styles.referenceBox,
                {
                  backgroundColor: Colors[theme].surface2,
                  borderColor: Colors[theme].border,
                },
              ]}
            >
              <Text style={{ color: Colors[theme].secondary }}>
                {hadith.reference}
              </Text>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 16, paddingBottom: 40 },

  header: { marginBottom: 24 },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  badgeText: { fontSize: 13, fontWeight: '600' },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
  },
  backButtonText: { fontSize: 14, fontWeight: '500' },
  title: { fontSize: 22, fontWeight: '700', lineHeight: 32, marginTop: 4 },
  tagsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginTop: 16 },
  tag: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: 1,
  },
  tagText: { fontSize: 13 },

  mainContent: { gap: 16 },
  card: { borderRadius: 24, padding: 20, borderWidth: 1 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  bodyText: { fontSize: 16, lineHeight: 28 },
  arabicText: {
    fontSize: 20,
    lineHeight: 48,
    fontFamily: 'Arial',
    textAlign: 'right',
  },
  divider: { borderTopWidth: 1, marginVertical: 20, paddingTop: 16 },

  gradeBox: { borderRadius: 16, padding: 14, marginBottom: 10, borderWidth: 1 },
  gradeText: { fontSize: 15, fontWeight: '700' },

  hintRow: { flexDirection: 'row', marginBottom: 8 },
  hintText: { fontSize: 14, lineHeight: 24, flex: 1 },

  referenceBox: { borderRadius: 14, padding: 14, borderWidth: 1 },
});

export default Hadith;
