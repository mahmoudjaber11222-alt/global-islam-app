// OtherQuestions.jsx
import { Colors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import { Ionicons } from '@expo/vector-icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import Loader from '../common/Loader';
import QuestionCard from './QuestionsCard';

const { width: SCREEN_W } = Dimensions.get('window');
const IS_TABLET = SCREEN_W >= 768;

function OtherQuestions() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const { translatedText } = useStaticText();
  const { theme } = useAppTheme();
  const { selectedLanguage } = useLanguage();
  const c = Colors[theme];

  const rtl = selectedLanguage === 'ar';

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    const fetchCards = async () => {
      try {
        const res = await fetch(
          'https://global-islam5-islam-g-5.hf.space/compare/question',
        );
        const data = await res.json();
        if (!cancelled) setCards(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch questions:', err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCards();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredData = useMemo(() => {
    if (!term.trim()) return cards;
    const q = term.toLowerCase();
    return cards.filter(
      (item) =>
        item?.title?.toLowerCase().includes(q) ||
        item?.brief?.toLowerCase().includes(q),
    );
  }, [cards, term]);

  const handleChangeText = useCallback((text) => setTerm(text), []);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      {/* Search */}
      <View
        style={[
          styles.searchWrapper,
          {
            borderColor: `${c.primary}18`,
            backgroundColor: c.surface,
          },
        ]}
      >
        <Ionicons
          name="search"
          size={18}
          color={c.tertiary}
          style={{ marginRight: rtl ? 0 : 10, marginLeft: rtl ? 10 : 0 }}
        />
        <TextInput
          placeholder={`${translatedText?.contentNormal?.searchSection?.button}...`}
          placeholderTextColor={c.tertiary}
          style={[
            styles.searchInput,
            { color: c.primary, textAlign: rtl ? 'right' : 'left' },
          ]}
          onChangeText={handleChangeText}
          value={term}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {term.length > 0 && (
          <Ionicons
            name="close-circle"
            size={18}
            color={c.tertiary}
            onPress={() => setTerm('')}
          />
        )}
      </View>

      {/* Results count */}
      {term.length > 0 && (
        <Text style={[styles.resultsText, { color: `${c.primary}66` }]}>
          {filteredData.length}{' '}
          {filteredData.length === 1 ? 'result' : 'results'}
        </Text>
      )}

      {/* List */}
      <View style={styles.list}>
        {filteredData.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons
              name="search-outline"
              size={40}
              color={`${c.primary}33`}
            />
            <Text style={[styles.emptyText, { color: `${c.primary}66` }]}>
              {term.length > 0
                ? 'No questions found'
                : 'No questions available'}
            </Text>
          </View>
        ) : (
          filteredData.map((question) => (
            <QuestionCard
              key={question?.id ?? question?.title}
              question={question}
            />
          ))
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: IS_TABLET ? 0 : 4,
    alignItems: 'center',
    gap: 16,
  },
  searchWrapper: {
    width: '100%',
    maxWidth: IS_TABLET ? 600 : 480,
    height: 48,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    paddingVertical: 0,
  },
  resultsText: {
    fontSize: 13,
    fontWeight: '500',
    alignSelf: (rtl) => (rtl ? 'flex-end' : 'flex-start'),
  },
  list: {
    width: '100%',
    gap: 16,
    marginTop: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    gap: 12,
  },
  emptyText: {
    fontSize: 15,
    fontWeight: '500',
  },
});

export default OtherQuestions;
