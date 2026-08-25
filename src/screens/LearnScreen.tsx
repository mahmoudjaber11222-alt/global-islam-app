import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
// NOTE: Replace react-icons with a React Native vector icon library
// e.g., npm install react-native-vector-icons
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Header from '../components/Hadith/Header';
import LearnCard from '../components/Learn/LearnCard';
import { Colors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import LearnCustom from '../screens/LearnCustom';
import { getTranslationFile } from '../utils/filter';

const avalibleLearningResources = ['quran', 'arabic'];

function LearnScreen() {
  const { selectedLanguage } = useLanguage();
  const [term, setTerm] = useState('');
  const [playlist, setPlalist] = useState();
  const { theme, isDark } = useAppTheme();
  const [isInputFocused, setIsInputFocused] = useState(false);

  useEffect(() => {
    async function seGetPlaylist() {
      const res = await getTranslationFile(
        selectedLanguage,
        'learn_translations',
      );
      setPlalist(res?.default);
    }
    seGetPlaylist();
  }, [selectedLanguage]);

  const route = useRoute();
  const navigation = useNavigation();
  const { id: learnType } = route.params || {};

  const data = getData(learnType);

  const filteredData = Array.isArray(data)
    ? data?.filter(
        (item) =>
          item?.title?.toLowerCase()?.includes(term?.toLowerCase()) ||
          item?.content?.toLowerCase()?.includes(term?.toLowerCase()) ||
          !term,
      )
    : [];
  const { translatedText } = useStaticText();

  useEffect(() => {
    if (!avalibleLearningResources.includes(learnType)) {
      router.navigate('/(tabs)/home');
    }
  }, [learnType, navigation]);

  const titleTexts = getTitleTexts(learnType);

  function getTitleTexts(section) {
    switch (section) {
      case 'quran': {
        return {
          title: translatedText?.learning?.['quran']?.title,
          subtitle: translatedText?.learning?.['quran']?.subtitle,
        };
      }
      case 'arabic': {
        return {
          title: translatedText?.learning?.['arabic']?.title,
          subtitle: translatedText?.learning?.['arabic']?.subtitle,
        };
      }
      default: {
        return {
          title: translatedText?.learning?.['default']?.title,
          subtitle: translatedText?.learning?.['default']?.subtitle,
        };
      }
    }
  }

  function getData(section) {
    switch (section) {
      case 'quran': {
        return playlist?.playlistTajweed.data;
      }
      case 'arabic': {
        return playlist?.playlistArabic.data;
      }
      default: {
        return {};
      }
    }
  }

  return (
    <ScrollView style={{ backgroundColor: Colors[theme].background }}>
      <View style={{ minHeight: '100%' }}>
        {/* Main Content */}
        <View style={[styles.container, { flex: 1, paddingVertical: 40 }]}>
          <Header title={titleTexts?.title} subtitle={titleTexts?.subtitle} />

          <View style={{ marginTop: 40, gap: 40 }}>
            <TextInput
              placeholder={`${translatedText?.contentNormal?.searchSection?.button}...`}
              style={[
                styles.input,
                {
                  backgroundColor: Colors[theme].surface,
                  borderColor: isInputFocused
                    ? Colors[theme].accent
                    : Colors[theme].border,
                  color: Colors[theme].primary,
                },
              ]}
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              onChangeText={(text) => setTerm(text)}
              value={term}
              placeholderTextColor={
                Colors[theme].muted || Colors[theme].primary
              }
            />

            {/* Cards Grid */}
            <View style={styles.grid}>
              {filteredData?.length ? (
                filteredData.map((card, i) => (
                  <View key={i} style={styles.gridItem}>
                    <LearnCard
                      card={card}
                      selectedLanguage={selectedLanguage}
                    />
                  </View>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <View
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                  >
                    {/* soft glow */}
                    <View
                      style={{
                        position: 'absolute',
                        height: 96,
                        width: 96,
                        borderRadius: 48,
                        backgroundColor: isDark
                          ? `${Colors[theme].accent}30`
                          : `${Colors[theme].accent}20`,
                        opacity: 0.3,
                      }}
                    />

                    {/* icon container */}
                    <View
                      style={{
                        height: 80,
                        width: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 16,
                        borderWidth: 1,
                        backgroundColor: isDark
                          ? `${Colors[theme].accent}15`
                          : `${Colors[theme].accent}10`,
                        borderColor: isDark
                          ? `${Colors[theme].accent}40`
                          : `${Colors[theme].accent}30`,
                      }}
                    >
                      <Ionicons
                        name="warning-outline"
                        size={44}
                        color={Colors[theme].accent}
                      />
                    </View>
                  </View>

                  {/* subtle indicator */}
                  <View
                    style={{
                      marginTop: 24,
                      flexDirection: 'row',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    {[0, 150, 300].map((delay) => (
                      <View
                        key={delay}
                        style={{
                          height: 6,
                          width: 6,
                          borderRadius: 3,
                          backgroundColor: `${Colors[theme].accent}99`,
                        }}
                      />
                    ))}
                  </View>
                </View>
              )}
            </View>

            {/* Custom Section */}
            <LearnCustom term={term} type={learnType} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    maxWidth: 1280,
    width: '100%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    height: 56,
    paddingHorizontal: 20,
    borderRadius: 16,
    borderWidth: 1,
    fontSize: 16,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  gridItem: {
    width: '100%',
  },
  emptyState: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
});

export default LearnScreen;
