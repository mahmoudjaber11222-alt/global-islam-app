// import AthanScreen from '@/src/components/AthanScreen';
import AthanScreen from '@/src/components/AthanScreen';
import { useSettings } from '@/src/context/SettingsProvider';
import useNextPrayer from '@/src/hooks/useNextPrayer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Athkar() {
  const { athanMeta } = useNextPrayer();
  const { selectedReciter } = useSettings();
  const [path, setPath] = useState('');
  useEffect(() => {
    async function se() {
      const p = await AsyncStorage.getItem('abdul-basit');
      console.log('paaath:::::::' + p);
      setPath(p);
    }
    se();
  }, [path, selectedReciter?.id]);
  //   if (!path) {
  //     router.replace('/(tabs)/home');
  //   }
  return (
    <SafeAreaView
      className="flex-1"
      //   style={{ backgroundColor: c.background }}
      edges={['top']}
    >
      <AthanScreen
        location=""
        reciterId={'abdul-basit'}
        prayerNameEnglish=""
        filePath={path}
        prayerNameArabic={athanMeta?.prayerName}
        onCancel={() => {
          router.replace('/(tabs)/home');
        }}
        onComplete={() => {
          router.replace('/(tabs)/home');
        }}
        prayerTime={athanMeta?.time}
      />
    </SafeAreaView>
  );
}
