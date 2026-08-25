// QuestionCard.jsx
import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import { translateText } from '@/src/service/translation';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import Religions from './Religions';

const { width: SCREEN_W } = Dimensions.get('window');
const IS_TABLET = SCREEN_W >= 768;

function QuestionCard({ question }) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLanguage } = useLanguage();
  const { theme } = useAppTheme();
  const c = Colors[theme];
  const [translatedQuestion, setTranslatedQuestion] = useState({
    title: '',
    brief: '',
  });

  const rtl = selectedLanguage === 'ar';

  useEffect(() => {
    let cancelled = false;

    async function doTranslate() {
      if (selectedLanguage === 'en') {
        setTranslatedQuestion({ title: '', brief: '' });
        return;
      }
      try {
        const [trTitle, trBrief] = await Promise.all([
          translateText(question?.title ?? '', {
            from: 'en',
            to: selectedLanguage,
          }),
          translateText(question?.brief ?? '', {
            from: 'en',
            to: selectedLanguage,
          }),
        ]);
        if (!cancelled) {
          setTranslatedQuestion({ title: trTitle, brief: trBrief });
        }
      } catch (err) {
        console.error('Card translation error:', err);
      }
    }

    doTranslate();
    return () => {
      cancelled = true;
    };
  }, [selectedLanguage, question?.brief, question?.title]);

  const displayTitle =
    selectedLanguage === 'en'
      ? question?.title
      : translatedQuestion?.title || question?.title;

  const displayBrief =
    selectedLanguage === 'en'
      ? question?.brief
      : translatedQuestion?.brief || question?.brief;

  const toggleOpen = useCallback(() => setIsOpen((p) => !p), []);

  return (
    <View
      style={[
        styles.card,
        {
          borderColor: `${c.primary}10`,
          backgroundColor: `${c.surface}08`,
        },
      ]}
    >
      {/* Header */}
      <Pressable
        onPress={toggleOpen}
        style={[styles.header, { flexDirection: rtl ? 'row-reverse' : 'row' }]}
      >
        <View style={styles.headerTextWrap}>
          <Text
            style={[
              styles.headerTitle,
              { color: c.primary, textAlign: rtl ? 'right' : 'left' },
            ]}
            numberOfLines={2}
          >
            {displayTitle}
          </Text>
        </View>

        <View style={styles.chevronWrap}>
          <Ionicons
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size={22}
            color={`${c.primary}80`}
          />
        </View>
      </Pressable>

      {/* Body */}
      {isOpen && (
        <View style={styles.body}>
          {/* Intro */}
          <View
            style={[
              styles.introBlock,
              {
                borderLeftWidth: rtl ? 0 : 3,
                borderRightWidth: rtl ? 3 : 0,
                borderLeftColor: `${c.accent ?? '#3a8fc4'}40`,
                borderRightColor: `${c.accent ?? '#3a8fc4'}40`,
                paddingLeft: rtl ? 0 : 16,
                paddingRight: rtl ? 16 : 0,
              },
            ]}
          >
            <Text
              style={[
                styles.introText,
                { color: `${c.primary}b0`, textAlign: rtl ? 'right' : 'left' },
              ]}
            >
              {displayBrief}
            </Text>
          </View>

          {/* Religions */}
          <Religions question_id={question?.id} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 24,
    borderWidth: StyleSheet.hairlineWidth,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: IS_TABLET ? 24 : 18,
    paddingVertical: IS_TABLET ? 20 : 16,
  },
  headerTextWrap: { flex: 1 },
  headerTitle: {
    fontSize: IS_TABLET ? 22 : 17,
    lineHeight: IS_TABLET ? 30 : 24,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  chevronWrap: {
    marginLeft: 12,
    marginRight: 12,
    minWidth: 22,
    alignItems: 'center',
  },
  body: {
    paddingHorizontal: IS_TABLET ? 24 : 18,
    paddingBottom: IS_TABLET ? 28 : 22,
  },
  introBlock: {
    marginBottom: 24,
  },
  introText: {
    fontSize: 14,
    lineHeight: 24,
  },
});

export default QuestionCard;
