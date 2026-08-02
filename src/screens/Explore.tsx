import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import Content from '../components/Hadith/Content';
import ContentNormal from '../components/Hadith/ContentNormal';
import FilterBar from '../components/Hadith/FilterBar';
import Header from '../components/Hadith/Header';
import SearchBar from '../components/Hadith/SearchBar';
import Toast from '../components/common/Toast';
import { Colors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useExplore from '../hooks/useExplore';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
function Explore() {
  const { theme, isDark } = useAppTheme();
  const { selectedLanguage } = useLanguage();
  const { data, handleres, errors, loaderes } = useExplore(selectedLanguage);
  const { translatedText } = useStaticText();

  // Replace URL params with local state
  const [advanceMode, setAdvanceMode] = useState(false);

  const toggleMode = useCallback(() => {
    setAdvanceMode((prev) => !prev);
  }, []);

  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        {/* ═══════ MODE SWITCH ═══════ */}
        <View
          style={[
            styles.modeSwitch,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}60`
                : `${Colors[theme].surface}80`,
              borderColor: isDark
                ? `${Colors[theme].border}30`
                : `${Colors[theme].border}50`,
            },
          ]}
        >
          <View style={styles.modeInfo}>
            <View
              style={[
                styles.modeIconBox,
                {
                  backgroundColor: advanceMode
                    ? isDark
                      ? `${Colors[theme].accent}20`
                      : `${Colors[theme].accent}15`
                    : Colors[theme].surface2,
                },
              ]}
            >
              <MaterialCommunityIcons
                name={advanceMode ? 'sparkles' : 'filter-variant'}
                size={18}
                color={
                  advanceMode ? Colors[theme].accent : Colors[theme].tertiary
                }
              />
            </View>
            <View>
              <Text
                style={[styles.modeTitle, { color: Colors[theme].primary }]}
              >
                {advanceMode
                  ? translatedText?.switch?.title?.advanced
                  : translatedText?.switch?.title?.normal}
              </Text>
              <Text
                style={[styles.modeDesc, { color: Colors[theme].tertiary }]}
              >
                {advanceMode
                  ? translatedText?.switch?.description?.advanced
                  : translatedText?.switch?.description?.normal}
              </Text>
            </View>
          </View>

          <Switch
            value={advanceMode}
            onValueChange={toggleMode}
            trackColor={{
              false: Colors[theme].quaternary,
              true: Colors[theme].accent,
            }}
            thumbColor={Colors[theme].surface}
            ios_backgroundColor={Colors[theme].quaternary}
          />
        </View>

        {/* ═══════ ADVANCED MODE CONTENT ═══════ */}
        {advanceMode && (
          <>
            <FilterBar
              handleCategoryChange={handleres.handleCategoryChange}
              selectedItem={data.selectedCategory}
              data={data.categories}
            />

            {errors.error && (
              <Toast
                toastTheme="warning"
                title={errors.error}

                iconName="water"
              />
            )}

            <SearchBar
              disabled={Boolean(data.selectedCategory)}
              handleChange={handleres.handleChange}

              handleHadithSearch={handleres.handleHadithSearch}
              value={data?.searchValue}
            />

            <Content
              onClick={handleres?.handleHadithClick}
              firstSearch={data.firstSearch}
              hadithLoading={loaderes.hadithLoading}
              hadithResult={data.hadithResult}
              networkError={errors.networkError}
              selectedLanguage={data.selectedLanguage}
            />
          </>
        )}

        {/* ═══════ NORMAL MODE CONTENT ═══════ */}
        {!advanceMode && <ContentNormal />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
    gap: 16,
  },
  modeSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
  },
  modeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  modeIconBox: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modeTitle: {
    fontSize: 14,
    fontWeight: '700',
  },
  modeDesc: {
    fontSize: 12,
    marginTop: 2,
  },
});

export default Explore;
