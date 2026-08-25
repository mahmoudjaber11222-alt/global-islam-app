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
    <View style={[]}>
      {/* Top accent line */}
      <View style={[styles.topLine]} />

      <View>
        {/* Heading */}
        <View style={[{ flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
          <View style={{ flex: 1, marginHorizontal: 12 }}>
            <Text
              style={[
                styles.title,
                {
                  color: Colors[theme].primary,
                  fontWeight: '700',
                  letterSpacing: 0.3,
                },
              ]}
            >
              {translatedText?.explore?.searchBar?.title}
            </Text>
            <Text
              style={[
                styles.subtitle,
                {
                  color: Colors[theme].tertiary,
                  marginTop: 4,
                  lineHeight: 20,
                },
              ]}
            >
              {translatedText?.explore?.searchBar?.subtitle}
            </Text>
          </View>
        </View>

        {/* Search Row */}
        <View style={[styles.searchRow, { gap: 10, alignItems: 'center' }]}>
          <View className="flex flex-row items-center">
            <MaterialCommunityIcons
              className="mt-4"
              name="magnify"
              size={18}
              color={Colors[theme].tertiary}
              style={[
                styles.inputIcon,
                {
                  left: isRTL ? undefined : 14,
                  right: isRTL ? 14 : undefined,
                  opacity: 0.85,
                },
              ]}
            />
            <TextInput
              className="mt-4 "
              value={value}
              onChangeText={handleChange}
              placeholder={translatedText?.explore?.searchBar?.placeholder}
              editable={!disabled}
              placeholderTextColor={Colors[theme].quinary}
              textAlign={isRTL ? 'right' : 'left'}
              style={[
                styles.input,
                {
                  backgroundColor: Colors[theme].surface2,
                  borderColor: Colors[theme].border,
                  color: Colors[theme].primary,
                  fontSize: 12,
                  fontWeight: '400',
                  paddingLeft: isRTL ? 14 : 46,
                  paddingRight: isRTL ? 46 : 14,
                  height: 46,
                  borderRadius: 10,
                  borderWidth: 1,
                },
              ]}
            />
          </View>

          <View className="w-full mt-8">
            <Button onPress={handleHadithSearch} buttonTheme="accent" size="lg">
              <View
                style={[
                  styles.btnContent,
                  {
                    backgroundColor: Colors[theme].accent,
                    borderRadius: 10,
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    gap: 8,
                    alignItems: 'center',
                    height: 46,
                  },
                ]}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: 15,
                    letterSpacing: 0.2,
                  }}
                >
                  {translatedText?.explore?.searchBar?.button}
                </Text>
              </View>
            </Button>
          </View>
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
