import useNextPrayer from '@/src/hooks/useNextPrayer';
import HomeScreen from '@/src/screens/HomeScreen';
import { router } from 'expo-router';
import { View } from 'react-native';
import { getThemeColors } from '../../../constants/theme';
import { useAppTheme } from '../../../context/ThemeProvider';

export default function Home() {
  const { nextPrayerTimes, nextPrayer } = useNextPrayer();
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  return (
    <View style={{ flex: 1, backgroundColor: c.background }}>
      <HomeScreen
        hadith={{ arabic: '', grade: '', narrator: '', source: '', text: '' }}
        nextPrayer={{
          hours: nextPrayerTimes.leftHours,
          minutes: nextPrayerTimes.leftMinutes,
          name: nextPrayer + '',
          seconds: nextPrayerTimes.leftSeconds,
          time: '',
        }}
        onNavigateAthkar={() => {
          router.navigate('/(tabs)/athkar');
        }}
        onNavigateQibla={() => {}}
        qiblaDirection={4}
        rssNews={[]}
        verse={{ arabic: '', ayah: 4, surah: '', translation: '' }}
        onRefresh={() => {}}
        refreshing={false}
      />
    </View>
  );
}
