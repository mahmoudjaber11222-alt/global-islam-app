import { Colors } from '@/src/constants/theme';
import { useEffect, useState } from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import { translateText } from '../../service/translation';
export default function LearnCard({
  placeholder,
  card,
  needTr = false,
  selectedLanguage = 'en',
}) {
  const [translatedData, setTranslatedData] = useState({
    title: '',
    content: '',
  });
  const { theme } = useAppTheme();

  useEffect(() => {
    async function seTr() {
      const title = await translateText(card.title, {
        from: 'en',
        to: selectedLanguage,
      });
      const content = await translateText(card.content, {
        from: 'en',
        to: selectedLanguage,
      });
      setTranslatedData({ title, content });
    }
    if (selectedLanguage !== 'en' && needTr) {
      seTr();
    } else {
      setTranslatedData({ title: card?.title, content: card?.content });
    }
  }, [selectedLanguage, card.content, card.title, needTr]);

  // URL construction logic preserved exactly
  const url = !card?.link
    ? `https://www.youtube.com/watch?v=${card.videoId}&cc_load_policy=1&cc_lang_pref=${selectedLanguage}`
    : card.link;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => Linking.openURL(url)}
      style={[
        styles.card,
        {
          backgroundColor: Colors[theme].surface,
          borderColor: Colors[theme].border,
        },
      ]}
    >
      {/* Image */}
      <View
        style={[
          styles.imageContainer,
          { backgroundColor: Colors[theme].surface2 },
        ]}
      >
        <Image
          source={{ uri: card?.thumbnail || card?.img_url || placeholder }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={[styles.title, { color: Colors[theme].primary }]}>
          {needTr ? translatedData?.title : card?.title}
        </Text>

        <Text style={[styles.description, { color: Colors[theme].tertiary }]}>
          {needTr ? translatedData?.content : card?.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
  },
  imageContainer: {
    height: 160,
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  content: {
    flexDirection: 'column',
    padding: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    marginTop: 4,
    flex: 1,
  },
});
