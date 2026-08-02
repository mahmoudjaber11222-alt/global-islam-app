import { Colors } from '@/src/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import useLanguage from '../../hooks/useLanguage';
import useStaticText from '../../hooks/useStaticText';
import Button from '../common/Button';
function SearchBar({
  disabled = false,
  value,
  handleChange,
  handleHadithSearch,
}) {
  const { selectedLanguage } = useLanguage();
  const { translatedText } = useStaticText();
  const { theme, isDark } = useAppTheme();
  const isRTL = selectedLanguage === 'ar';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? `${Colors[theme].surface}70`
            : `${Colors[theme].surface}80`,
          borderColor: isDark
            ? `${Colors[theme].border}40`
            : `${Colors[theme].border}60`,
        },
      ]}
    >
      {/* Top accent line */}
      <View
        style={[
          styles.topLine,
          { backgroundColor: Colors[theme].accent + '60' },
        ]}
      />

      <View style={styles.inner}>
        {/* Heading */}
        <View
          style={[
            styles.headingRow,
            { flexDirection: isRTL ? 'row-reverse' : 'row' },
          ]}
        >
          <View
            style={[
              styles.iconBox,
              {
                backgroundColor: Colors[theme].success,
                shadowColor: Colors[theme].success,
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.3,
                shadowRadius: 25,
                elevation: 6,
              },
            ]}
          >
            <MaterialCommunityIcons
              name="sparkles"
              size={20}
              color={Colors[theme].surface}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={[styles.title, { color: Colors[theme].primary }]}>
              {translatedText?.explore?.searchBar?.title}
            </Text>
            <Text style={[styles.subtitle, { color: Colors[theme].tertiary }]}>
              {translatedText?.explore?.searchBar?.subtitle}
            </Text>
          </View>
        </View>

        {/* Search Row */}
        <View style={styles.searchRow}>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="magnify"
              size={20}
              color={Colors[theme].quaternary}
              style={[
                styles.inputIcon,
                { left: isRTL ? undefined : 16, right: isRTL ? 16 : undefined },
              ]}
            />
            <TextInput
              value={value}
              onChangeText={handleChange}
              placeholder={translatedText?.explore?.searchBar?.placeholder}
              editable={!disabled}
              placeholderTextColor={Colors[theme].quaternary}
              textAlign={isRTL ? 'right' : 'left'}
              style={[
                styles.input,
                {
                  backgroundColor: Colors[theme].surface,
                  borderColor: Colors[theme].border,
                  color: Colors[theme].primary,
                  paddingLeft: isRTL ? 16 : 48,
                  paddingRight: isRTL ? 48 : 16,
                },
              ]}
            />
          </View>

          <Button
            onPress={handleHadithSearch}
            buttonTheme="accent"
            size="lg"
            fullWidth
          >
            <View style={styles.btnContent}>
              <MaterialCommunityIcons
                name="magnify"
                size={16}
                color={isDark ? '#0c0c0e' : '#ffffff'}
              />
              <Text
                style={{
                  color: isDark ? '#0c0c0e' : '#ffffff',
                  fontWeight: '600',
                  fontSize: 15,
                }}
              >
                {translatedText?.explore?.searchBar?.button}
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    padding: 20,
    borderWidth: 1,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 30,
  },
  topLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 1,
  },
  inner: { position: 'relative', zIndex: 1 },
  headingRow: {
    alignItems: 'flex-start',
    gap: 14,
    marginBottom: 20,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 18, fontWeight: '700', letterSpacing: -0.5 },
  subtitle: { marginTop: 4, fontSize: 14, lineHeight: 22 },
  searchRow: { gap: 12 },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputIcon: {
    position: 'absolute',
    zIndex: 2,
  },
  input: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    fontSize: 15,
  },
  btnContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default SearchBar;
