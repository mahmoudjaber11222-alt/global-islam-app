import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Loader from '../../components/common/Loader';
import LearnCard from '../components/Learn/LearnCard';
import { Colors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLnaguage from '../hooks/useLanguage';
function Loader() {
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
const IMAGE_PLACEHOLDER =
  'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=1200&q=60';

function LearnCustom({ type, term }) {
  const [cards, setCards] = useState([]);
  const filteredCards = cards?.filter(
    (item) =>
      (item?.title?.toLowerCase()?.includes(term?.toLowerCase()) ||
        item?.content?.toLowerCase()?.includes(term?.toLowerCase()) ||
        !term) &&
      item?.type?.toLowerCase() === type?.toLowerCase(),
  );
  const [loading, setLoading] = useState(true);
  const { selectedLanguage } = useLnaguage();
  const { theme } = useAppTheme();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://global-islam5-islam-g-5.hf.space/learn',
        );
        const data = await res.json();
        setCards(data);
      } catch (err) {
        console.error('Failed to fetch learn cards:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  if (loading) return <Loader />;

  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
    >
      <View style={styles.grid}>
        {filteredCards.map((item, i) => (
          <View key={item.id ?? i} style={styles.gridItem}>
            <LearnCard
              needTr={true}
              placeholder={IMAGE_PLACEHOLDER}
              card={item}
              selectedLanguage={selectedLanguage}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    alignSelf: 'center',
    maxWidth: 1280,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 24,
    gap: 20,
  },
  gridItem: {
    width: '100%',
  },
});

export default LearnCustom;
