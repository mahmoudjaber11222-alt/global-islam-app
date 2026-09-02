// import AthanScreen from '@/src/components/AthanScreen';
import AthanScreen from '@/src/components/AthanScreen';
import { useSettings } from '@/src/context/SettingsProvider';
import useNextPrayer from '@/src/hooks/useNextPrayer';
import usePrayer from '@/src/hooks/usePrayer';
import useStaticText from '@/src/hooks/useStaticText';
import { getPreviousPrayer } from '@/src/utils/prayer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Index() {
  const {
    nextPrayer,
    mainPrayers,
    currentHours,
    currentMin,
    handleAthanScreenShown,
  } = useNextPrayer();
  const { dataPrecise } = usePrayer();
  const { translatedText } = useStaticText();
  const timeZone = dataPrecise?.ok && dataPrecise.data.meta.timezone;
  const [prevPrayer, setPrevPrayer] = useState('');
  // const {result} = useLocation();
  const { selectedReciter } = useSettings();
  const [path, setPath] = useState('');
  useEffect(() => {
    async function se() {
      const p = await AsyncStorage.getItem(selectedReciter?.id || '');
      console.log('Muzian File Path: ' + p);
      setPath(p);
    }
    se();
  }, [path, selectedReciter?.id]);

  useEffect(() => {
    if (nextPrayer) {
      setPrevPrayer(
        getPreviousPrayer(
          nextPrayer,
          translatedText.prayers.times,
          mainPrayers,
        ),
      );
    }
  }, [nextPrayer, mainPrayers]);
  //   if (!path) {
  //     router.replace('/(tabs)/home');
  //   }

  return (
    <AthanScreen
      location={timeZone || ''}
      reciterId={selectedReciter?.id || ''}
      prayerNameEnglish={prevPrayer || ''}
      filePath={path}
      prayerNameArabic={''}
      onCancel={() => {
        // handleAthanScreenShown(false);
        router.replace('/(tabs)/home');
      }}
      onComplete={() => {
        // handleAthanScreenShown(false);
        router.replace('/(tabs)/home');
      }}
      prayerTime={`${currentHours}:${currentMin}`}
    />
  );
}
