import { Text, View } from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';

export default function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { selectedLanguage } = useLanguage();
  return (
    <View
      style={{ direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr' }}
      className="px-5 pt-8 pb-4"
    >
      <Text
        className="text-2xl font-light tracking-wide"
        style={{ color: c.primary }}
      >
        {subtitle}
      </Text>
      <Text
        className="text-[11px] font-bold tracking-[2.5px] uppercase mb-1"
        style={{ color: c.tertiary }}
      >
        {title}
      </Text>
    </View>
  );
}
