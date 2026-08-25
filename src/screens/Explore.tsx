import { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import SettingsRow from '../app/(tabs)/settings/SettingsRow';
import Content from '../components/Hadith/Content';
import ContentNormal from '../components/Hadith/ContentNormal';
import FilterBar from '../components/Hadith/FilterBar';
import Header from '../components/Hadith/Header';
import SearchBar from '../components/Hadith/SearchBar';
import Toast from '../components/common/Toast';
import { Colors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useExplore from '../hooks/useExplore';
import useStaticText from '../hooks/useStaticText';
function Explore() {
  const { theme, isDark } = useAppTheme();
  // const { selectedLanguage } = useLanguage();
  const { data, handleres, errors, loaderes } = useExplore();
  const { translatedText } = useStaticText();

  // Replace URL params with local state
  const [advanceMode, setAdvanceMode] = useState(false);

  const toggleMode = useCallback(() => {
    setAdvanceMode((prev) => !prev);
  }, []);

  useCallback(() => {
    if (!data.searchValue) {
      handleres.handleHadithResult([]);
    }
  }, [data.searchValue, handleres]);
  return (
    <View
      style={[styles.container, { backgroundColor: Colors[theme].background }]}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header
          title={translatedText?.explore?.header?.title}
          subtitle={translatedText?.explore?.header?.subtitle}
          titleStyle={{ letterSpacing: -1.2 }}
          subtitleStyle={{ textTransform: 'capitalize' }}
        />

        {/* ═══════ MODE SWITCH ═══════ */}
        <SettingsRow
          icon={advanceMode ? 'sparkles' : 'options'}
          iconColor={
            advanceMode ? Colors[theme].accent : Colors[theme].tertiary
          }
          title={
            advanceMode
              ? translatedText?.switch?.title?.advanced
              : translatedText?.switch?.title?.normal
          }
          subtitle={
            advanceMode
              ? translatedText?.switch?.description?.advanced
              : translatedText?.switch?.description?.normal
          }
          isSwitch
          switchValue={advanceMode}
          onSwitchChange={toggleMode}
          c={Colors[theme]}
        />

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
