import AIScreen from '@/src/screens/AIScreen';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';

export default function Qibla() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: c.background }}
      edges={['top']}
    >
      <View style={{ height: '100%', width: '100%' }}>
        <AIScreen />
      </View>
    </SafeAreaView>
  );
}
