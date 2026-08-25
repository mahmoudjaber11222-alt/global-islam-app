import OtherQuestions from '@/src/components/Compare Rel/OtherQuestions';
import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width: SCREEN_W } = Dimensions.get('window');
const IS_TABLET = SCREEN_W >= 768;

export default function CompareRel({ heroImage }) {
  const [openedQuestion, setOpenedQuestion] = useState('q1');
  const { translatedText: data } = useStaticText();
  const coreQuestions = Object.values(data?.compareRelg?.core || {});
  const { selectedLanguage } = useLanguage();
  const { theme, isDark } = useAppTheme();
  const c = Colors[theme];

  // Entrance animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;
  const scaleXAnim = useRef(new Animated.Value(0)).current;
  const scrollDotY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(scaleXAnim, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(scrollDotY, {
          toValue: 10,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scrollDotY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const accentCyan = isDark ? '#5a9fd4' : '#3a8fc4';
  const accentPurple = isDark ? '#8b7fd4' : '#7a6ec4';
  const accentAmber = isDark ? '#d4a853' : '#b8860b';
  const accentEmerald = isDark ? '#5a9a5a' : '#2e7d32';
  const glowCyan = isDark ? 'rgba(90,159,212,0.10)' : 'rgba(58,143,196,0.08)';
  const glowPurple = isDark
    ? 'rgba(139,127,212,0.10)'
    : 'rgba(122,110,196,0.08)';
  const glowBlue = isDark ? 'rgba(90,159,212,0.10)' : 'rgba(58,143,196,0.08)';

  const rtl = selectedLanguage === 'ar';

  const contentMaxWidth = IS_TABLET ? 720 : SCREEN_W - 32;
  const heroMaxWidth = IS_TABLET ? 1100 : SCREEN_W - 32;

  return (
    <ScrollView style={{ backgroundColor: c.background }}>
      {/* Background glows */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <View
          style={[
            styles.glow,
            {
              top: -40,
              left: -40,
              width: 280,
              height: 280,
              backgroundColor: glowBlue,
            },
          ]}
        />
        <View
          style={[
            styles.glow,
            {
              top: '35%',
              right: -60,
              width: 240,
              height: 240,
              backgroundColor: glowCyan,
            },
          ]}
        />
        <View
          style={[
            styles.glow,
            {
              bottom: -40,
              left: '20%',
              width: 320,
              height: 320,
              backgroundColor: glowPurple,
            },
          ]}
        />
      </View>

      {/* HERO */}
      <View style={[styles.hero, { borderBottomColor: `${c.primary}12` }]}>
        <View
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: `${c.background}e6` },
          ]}
        />
        <View
          style={[
            styles.glow,
            {
              top: -100,
              left: '15%',
              width: 400,
              height: 400,
              backgroundColor: glowCyan,
            },
          ]}
        />

        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            alignSelf: 'center',
            width: '60%',
            height: 1,
            backgroundColor: accentCyan,
            opacity: 0.5,
            transform: [{ scaleX: scaleXAnim }],
          }}
        />

        <View style={[styles.heroContent, { maxWidth: heroMaxWidth }]}>
          <Animated.View
            style={[
              styles.badge,
              {
                backgroundColor: `${c.surface}10`,
                borderColor: `${c.primary}12`,
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <Ionicons name="sparkles" size={18} color={accentCyan} />
            <Text style={[styles.badgeText, { color: `${c.primary}cc` }]}>
              {data?.compareRelg?.headerTitle}
            </Text>
          </Animated.View>

          <Animated.Text
            style={[
              styles.heroTitle,
              {
                color: c.primary,
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
                textAlign: rtl ? 'right' : 'center',
              },
            ]}
          >
            {data?.compareRelg?.mainTitle}
          </Animated.Text>

          <Animated.View
            style={[
              styles.subtitleContainer,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            <Text
              style={[
                styles.heroSubtitle,
                {
                  color: `${c.primary}a0`,
                  textAlign: rtl ? 'right' : 'center',
                },
              ]}
            >
              {data?.compareRelg?.staticText?.hero?.subtitle?.split('—')[0]}
            </Text>
            <Text
              style={[
                styles.heroSubtitleHighlight,
                { color: c.primary, textAlign: rtl ? 'right' : 'center' },
              ]}
            >
              {' — '}
              {data?.compareRelg?.staticText?.hero?.subtitleHighlight}
            </Text>
          </Animated.View>

          <Animated.View
            style={{ alignItems: 'center', marginTop: 48, opacity: fadeAnim }}
          >
            <View
              style={{
                width: 160,
                height: 1,
                backgroundColor: accentCyan,
                opacity: 0.5,
              }}
            />
            <Text style={[styles.scrollIndicator, { color: `${c.primary}55` }]}>
              {data?.compareRelg?.staticText?.hero?.scrollIndicator}
            </Text>
            <View
              style={[
                styles.scrollDotContainer,
                { borderColor: `${c.primary}25` },
              ]}
            >
              <Animated.View
                style={[
                  styles.scrollDot,
                  {
                    backgroundColor: accentCyan,
                    transform: [{ translateY: scrollDotY }],
                  },
                ]}
              />
            </View>
          </Animated.View>
        </View>
      </View>

      {/* STORY SECTION */}
      <View
        style={[styles.storySection, { borderBottomColor: `${c.primary}12` }]}
      >
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <View
            style={[
              styles.glow,
              {
                top: -20,
                left: -20,
                width: 200,
                height: 200,
                backgroundColor: glowBlue,
              },
            ]}
          />
          <View
            style={[
              styles.glow,
              {
                bottom: -20,
                right: -20,
                width: 200,
                height: 200,
                backgroundColor: glowPurple,
              },
            ]}
          />
        </View>

        <View style={[styles.storyContent, { maxWidth: heroMaxWidth }]}>
          <View style={{ alignItems: 'center', marginBottom: 48 }}>
            <View
              style={[
                styles.storyBadge,
                {
                  backgroundColor: `${accentCyan}15`,
                  borderColor: `${accentCyan}25`,
                },
              ]}
            >
              <Text
                style={{
                  color: `${accentCyan}bb`,
                  fontSize: 11,
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  fontWeight: '600',
                }}
              >
                {data?.compareRelg?.staticText?.storySection?.badge}
              </Text>
            </View>

            <Text
              style={[
                styles.storyTitle,
                { color: c.primary, textAlign: 'center' },
              ]}
            >
              {data?.compareRelg?.staticText?.storySection?.titleLine1}
              {'\n'}
              {data?.compareRelg?.staticText?.storySection?.titleLine2}
            </Text>

            <Text
              style={[
                styles.storyIntro,
                { color: `${c.primary}90`, textAlign: 'center' },
              ]}
            >
              {data?.compareRelg?.staticText?.storySection?.intro}
            </Text>
          </View>

          <Image
            source={require('../../assets/images/train.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />

          <View
            style={[
              styles.storyCard,
              {
                borderColor: `${c.primary}12`,
                backgroundColor: `${c.surface}08`,
              },
            ]}
          >
            <View
              style={[
                StyleSheet.absoluteFill,
                { backgroundColor: glowBlue, opacity: 0.4 },
              ]}
            />
            <View
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 4,
                backgroundColor: accentCyan,
                borderTopLeftRadius: 24,
                borderBottomLeftRadius: 24,
              }}
            />

            <View style={styles.storyCardInner}>
              <Text style={[styles.quoteMark, { color: `${c.primary}06` }]}>
                "
              </Text>
              <View style={{ position: 'relative', zIndex: 10 }}>
                <Text
                  style={[
                    styles.storyText,
                    {
                      color: `${c.primary}cc`,
                      textAlign: rtl ? 'right' : 'left',
                    },
                  ]}
                >
                  {data.compareRelg?.story}
                </Text>

                <View
                  style={[
                    styles.endingDivider,
                    { borderTopColor: `${c.primary}12` },
                  ]}
                >
                  <Text
                    style={[
                      styles.endingText,
                      { color: c.primary, textAlign: 'center' },
                    ]}
                  >
                    {'\u201C '}
                    {data?.compareRelg?.staticText?.storySection?.ending}
                    {'\n'}
                    {data?.compareRelg?.staticText?.storySection?.ending2}
                  </Text>
                  <View style={styles.endingLineContainer}>
                    <View
                      style={[
                        styles.endingLine,
                        { backgroundColor: accentCyan },
                      ]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <View style={[styles.contentContainer, { maxWidth: contentMaxWidth }]}>
        {/* Note Card */}
        <View
          style={[
            styles.noteCard,
            {
              borderColor: `${accentCyan}18`,
              backgroundColor: c.surface4,
            },
          ]}
        >
          {/* Accent bar */}
          <View
            style={[
              styles.noteAccent,
              {
                backgroundColor: accentCyan,
                left: rtl ? undefined : 0,
                right: rtl ? 0 : undefined,
              },
            ]}
          />

          <View style={styles.noteContent}>
            <Text
              style={[
                styles.noteLabel,
                { color: `${accentCyan}cc`, textAlign: rtl ? 'right' : 'left' },
              ]}
            >
              {data?.other?.note ?? 'Note'}
            </Text>
            <Text
              style={[
                styles.noteText,
                { color: c.secondary, textAlign: rtl ? 'right' : 'left' },
              ]}
            >
              {data?.compareRelg?.note}
            </Text>
          </View>
        </View>

        {/* CORE QUESTIONS */}
        <View style={{ marginBottom: 64 }}>
          <View
            style={[
              styles.sectionHeader,
              { flexDirection: rtl ? 'row-reverse' : 'row' },
            ]}
          >
            <View
              style={[
                styles.sectionIcon,
                {
                  backgroundColor: `${accentCyan}15`,
                  borderColor: `${accentCyan}25`,
                },
              ]}
            >
              <Ionicons
                name="book-outline"
                size={24}
                color={`${accentCyan}bb`}
              />
            </View>
            <View style={{ alignItems: rtl ? 'flex-end' : 'flex-start' }}>
              <Text style={[styles.sectionLabel, { color: `${c.primary}55` }]}>
                {data?.compareRelg?.staticText?.coreQuestions?.sectionLabel}
              </Text>
              <Text style={[styles.sectionTitle, { color: c.primary }]}>
                {data?.compareRelg?.staticText?.coreQuestions?.title}
              </Text>
            </View>
          </View>

          <View style={{ gap: 20 }}>
            {coreQuestions.map((question) => {
              const isOpen = openedQuestion === question.id;
              return (
                <View
                  key={question.id}
                  style={[
                    styles.questionCard,
                    {
                      borderColor: `${c.primary}12`,
                      backgroundColor: `${c.surface}08`,
                    },
                  ]}
                >
                  <Pressable
                    onPress={() =>
                      setOpenedQuestion(isOpen ? null : question.id)
                    }
                    style={[
                      styles.questionHeader,
                      { flexDirection: rtl ? 'row-reverse' : 'row' },
                    ]}
                  >
                    <Text
                      style={[
                        styles.questionTitle,
                        { color: c.primary, textAlign: rtl ? 'right' : 'left' },
                      ]}
                    >
                      {question.title}
                    </Text>
                    <Ionicons
                      name={isOpen ? 'chevron-up' : 'chevron-down'}
                      size={24}
                      color={`${c.primary}80`}
                      style={{ marginHorizontal: 12 }}
                    />
                  </Pressable>

                  {isOpen && (
                    <View style={styles.questionBody}>
                      <View
                        style={[
                          styles.introBlock,
                          {
                            borderLeftWidth: rtl ? 0 : 3,
                            borderRightWidth: rtl ? 3 : 0,
                            borderLeftColor: `${accentCyan}40`,
                            borderRightColor: `${accentCyan}40`,
                            paddingLeft: rtl ? 0 : 16,
                            paddingRight: rtl ? 16 : 0,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.introText,
                            {
                              color: `${c.primary}b0`,
                              textAlign: rtl ? 'right' : 'left',
                            },
                          ]}
                        >
                          {question.intro}
                        </Text>
                      </View>

                      <View style={styles.religionsGrid}>
                        {Object.entries(question.religions).map(
                          ([key, religion]) => (
                            <View
                              key={key}
                              style={[
                                styles.religionCard,
                                {
                                  borderColor: `${c.primary}12`,
                                  backgroundColor: `${c.surface}0a`,
                                },
                              ]}
                            >
                              <View style={{ marginBottom: 20 }}>
                                <Text
                                  style={[
                                    styles.religionTitle,
                                    {
                                      color: c.primary,
                                      textAlign: rtl ? 'right' : 'left',
                                    },
                                  ]}
                                >
                                  {religion.title}
                                </Text>
                                {religion.examples && (
                                  <View
                                    style={[
                                      styles.examplesContainer,
                                      {
                                        justifyContent: rtl
                                          ? 'flex-end'
                                          : 'flex-start',
                                      },
                                    ]}
                                  >
                                    {religion.examples.map((ex) => (
                                      <View
                                        key={ex}
                                        style={[
                                          styles.exampleBadge,
                                          {
                                            backgroundColor: `${accentCyan}15`,
                                            borderColor: `${accentCyan}25`,
                                          },
                                        ]}
                                      >
                                        <Text
                                          style={{
                                            color: `${accentCyan}bb`,
                                            fontSize: 12,
                                          }}
                                        >
                                          {ex}
                                        </Text>
                                      </View>
                                    ))}
                                  </View>
                                )}
                              </View>

                              <View style={{ marginBottom: 24 }}>
                                <Text
                                  style={[
                                    styles.answerTitle,
                                    { color: `${accentCyan}bb` },
                                  ]}
                                >
                                  {
                                    data?.compareRelg?.staticText?.coreQuestions
                                      ?.answerNatureTitle
                                  }
                                </Text>
                                <Text
                                  style={[
                                    styles.answerText,
                                    {
                                      color: `${c.primary}b0`,
                                      textAlign: rtl ? 'right' : 'left',
                                    },
                                  ]}
                                >
                                  {religion.answerNature}
                                </Text>
                              </View>

                              <View style={{ marginBottom: 24 }}>
                                <Text
                                  style={[
                                    styles.answerTitle,
                                    { color: `${accentAmber}bb` },
                                  ]}
                                >
                                  {
                                    data?.compareRelg?.staticText?.coreQuestions
                                      ?.philosophicalDiscussionTitle
                                  }
                                </Text>
                                <Text
                                  style={[
                                    styles.answerText,
                                    {
                                      color: `${c.primary}b0`,
                                      textAlign: rtl ? 'right' : 'left',
                                    },
                                  ]}
                                >
                                  {religion.objectiveCritique}
                                </Text>
                              </View>

                              <View>
                                <Text
                                  style={[
                                    styles.answerTitle,
                                    { color: `${accentEmerald}bb` },
                                  ]}
                                >
                                  {
                                    data?.compareRelg?.staticText?.coreQuestions
                                      ?.referencesTitle
                                  }
                                </Text>
                                {religion.refs?.map((ref) => (
                                  <Pressable
                                    key={ref}
                                    onPress={() => Linking.openURL(ref)}
                                    style={{ marginBottom: 10 }}
                                  >
                                    <Text
                                      style={[
                                        styles.refLink,
                                        { color: `${accentCyan}cc` },
                                      ]}
                                      numberOfLines={2}
                                    >
                                      {ref}
                                    </Text>
                                  </Pressable>
                                ))}
                              </View>
                            </View>
                          ),
                        )}
                      </View>
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        </View>

        {/* OTHER QUESTIONS */}
        <View style={{ marginTop: 64 }}>
          <View
            style={[
              styles.sectionHeader,
              { flexDirection: rtl ? 'row-reverse' : 'row' },
            ]}
          >
            <View
              style={[
                styles.sectionIcon,
                {
                  backgroundColor: `${accentPurple}15`,
                  borderColor: `${accentPurple}25`,
                },
              ]}
            >
              <Ionicons
                name="globe-outline"
                size={24}
                color={`${accentPurple}bb`}
              />
            </View>
            <View style={{ alignItems: rtl ? 'flex-end' : 'flex-start' }}>
              <Text style={[styles.sectionLabel, { color: `${c.primary}55` }]}>
                {data?.compareRelg?.staticText?.futureResearch?.sectionLabel}
              </Text>
              <Text style={[styles.sectionTitle, { color: c.primary }]}>
                {data?.compareRelg?.staticText?.futureResearch?.title}
              </Text>
            </View>
          </View>

          <OtherQuestions />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    marginVertical: 24,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    position: 'relative',
  },
  noteAccent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 4,
  },
  noteContent: {
    paddingHorizontal: 24,
    paddingVertical: 22,
    paddingLeft: 28, // extra breathing room away from accent bar
  },
  noteLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  noteText: {
    fontSize: 15,
    lineHeight: 26,
    fontWeight: '400',
  },

  glow: { position: 'absolute', borderRadius: 300, opacity: 0.5 },
  hero: {
    minHeight: SCREEN_W * 1.1,
    maxHeight: 700,
    borderBottomWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  heroContent: { alignItems: 'center', width: '100%' },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 32,
  },
  badgeText: {
    fontSize: 12,
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: IS_TABLET ? 48 : 32,
    lineHeight: IS_TABLET ? 52 : 38,
    fontWeight: '700',
    letterSpacing: -1,
  },
  subtitleContainer: {
    marginTop: 24,
    maxWidth: 600,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  heroSubtitle: { fontSize: 16, lineHeight: 28, fontWeight: '400' },
  heroSubtitleHighlight: { fontSize: 16, lineHeight: 28, fontWeight: '500' },
  scrollIndicator: {
    marginTop: 16,
    letterSpacing: 4,
    textTransform: 'uppercase',
    fontSize: 10,
    fontWeight: '600',
  },
  scrollDotContainer: {
    marginTop: 12,
    width: 20,
    height: 32,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    paddingTop: 6,
  },
  scrollDot: { width: 4, height: 4, borderRadius: 2 },
  storySection: {
    overflow: 'hidden',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: 64,
  },
  storyContent: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    width: '100%',
  },
  storyBadge: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  storyTitle: {
    fontSize: IS_TABLET ? 36 : 26,
    lineHeight: IS_TABLET ? 42 : 32,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  storyIntro: {
    marginTop: 20,
    maxWidth: 600,
    alignSelf: 'center',
    fontSize: 16,
    lineHeight: 28,
    paddingHorizontal: 8,
  },
  heroImage: {
    width: '100%',
    height: IS_TABLET ? 280 : 200,
    borderRadius: 16,
    marginVertical: 20,
  },
  storyCard: {
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
    position: 'relative',
  },
  storyCardInner: { paddingHorizontal: 24, paddingVertical: 40 },
  quoteMark: {
    position: 'absolute',
    top: 16,
    left: 16,
    fontSize: 100,
    lineHeight: 100,
    fontWeight: 'bold',
  },
  storyText: {
    fontSize: 16,
    lineHeight: 30,
    fontWeight: '400',
    letterSpacing: 0.2,
  },
  endingDivider: {
    marginTop: 40,
    paddingTop: 32,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  endingText: {
    fontSize: IS_TABLET ? 24 : 20,
    lineHeight: IS_TABLET ? 36 : 30,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  endingLineContainer: { alignItems: 'center', marginTop: 24 },
  endingLine: { width: 120, height: 2, opacity: 0.5, borderRadius: 1 },
  contentContainer: {
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 64,
    width: '100%',
  },

  noteCardInner: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  noteIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 32,
  },
  sectionIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  sectionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 6,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: IS_TABLET ? 36 : 26,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  questionCard: {
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
    overflow: 'hidden',
  },
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  questionTitle: {
    fontSize: IS_TABLET ? 24 : 18,
    lineHeight: IS_TABLET ? 32 : 26,
    fontWeight: '600',
    letterSpacing: -0.3,
    flex: 1,
  },
  questionBody: { paddingHorizontal: 20, paddingBottom: 28 },
  introBlock: { marginBottom: 28 },
  introText: { fontSize: 15, lineHeight: 26 },
  religionsGrid: { gap: 16 },
  religionCard: {
    width: '100%',
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 20,
    overflow: 'hidden',
  },
  religionTitle: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 10,
  },
  examplesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  exampleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
  },
  answerTitle: { fontSize: 15, fontWeight: '600', marginBottom: 10 },
  answerText: { fontSize: 14, lineHeight: 24 },
  refLink: { fontSize: 13, lineHeight: 20 },
});
