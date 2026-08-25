import AIScreen from '@/src/screens/AIScreen';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';

export default function Qibla() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  return <AIScreen />;
}
