import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';
import useStaticText from '../../hooks/useStaticText';

function Header() {
  const { translatedText } = useStaticText();

  const { theme } = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.subtitle, { color: Colors[theme].tertiary }]}>
        {translatedText?.explore?.header?.subtitle}
      </Text>
      <Text style={[styles.title, { color: Colors[theme].primary }]}>
        {translatedText?.explore?.header?.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 6,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: -0.5,
  },
});

export default Header;
