import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { shouldShowAthanScreen } from '../app';
import { requestPermissions } from '../app/Notifications/prayer';
import { PrayerTimings } from '../app/types/prayer_times';
import { NextPrayerType } from '../components/NextPrayer';
import usePrayer from '../hooks/usePrayer';
import { scheduleAllPrayersForDay } from '../service/notificationService';
import { useSettings } from './SettingsProvider';

type NextPrayerContextType = {
  showAthan: boolean;
  nextPrayer: string | null;
  prayerData: any;
  nextPrayerTimes: NextPrayerType;
  mainPrayers: string[];
};

export const nextPrayerContext = createContext<NextPrayerContextType | null>(
  null,
);
function safeTimings(times: PrayerTimings): PrayerTimings {
  return Object.fromEntries(
    Object.entries(times).map(([key, value]) => [key, value.split(' ')[0]]),
  ) as PrayerTimings;
}
function fromISOtoDate(isoDate: string) {
  const [day, month, year] = isoDate.split('-');
  const currentDate = new Date();
  currentDate.setDate(Number(day));
  currentDate.setFullYear(Number(year));
  currentDate.setMonth(Number(month) - 1);
  return currentDate;
}
function convertToUnixTime(time: string, date: Date) {
  const newDate = new Date(date);

  const [hours, minutes] = time.split(':');

  newDate.setHours(Number(hours));
  newDate.setMinutes(Number(minutes));
  newDate.setSeconds(0);

  return newDate;
}
export function NextPrayerProvider({ children }: { children: ReactNode }) {
  const { preNotification, selectedReciter } = useSettings();
  const [athanMeta, setAthanMeta] = useState(null);
  // const [] = useState([]);
  // const { schedulePrayers } = usePrayerNotifications();
  // const [preAdhan, setPreAdhan] = useState(AsyncStorage.getItem('@pre_adhan_notification'));
  const { dataPrecise: prayerData, onLastPrayerCome } = usePrayer();
  const [now, setNow] = useState<Date>(new Date());
  const [showAthanScreen, setShowAthanScreen] = useState(false);
  const [nextPrayerTimes, setNextPrayerTimes] = useState<NextPrayerType>({
    leftHours: '00',
    leftSeconds: '00',
    leftMinutes: '00',
    name: '',
  });

  const getNextPrayer = (timings: PrayerTimings): string => {
    const safe = safeTimings(timings);

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    for (const prayer of prayers) {
      const [hours, minutes] = safe[prayer as keyof PrayerTimings]
        ?.split(':')
        .map(Number) ?? [0, 0];
      const prayerMinutes = hours * 60 + minutes;
      if (prayerMinutes > currentMinutes) {
        return prayer;
      }
    }
    return 'Fajr';
  };
  const [showAthan, setShowAthan] = useState<boolean>(false);

  const mainPrayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  const nextPrayer: string | null =
    prayerData && prayerData?.ok
      ? getNextPrayer(prayerData?.data?.timings)
      : null;

  const safeTimingsCopy =
    prayerData && prayerData.ok && safeTimings(prayerData.data.timings);
  const fetchedDate = prayerData?.ok && prayerData.data.date.gregorian.date;
  useEffect(() => {
    async function se() {
      await requestPermissions();
      // await schedulePrayerAlarm(
      //   nextPrayer + '',
      //   new Date(
      //     convertToUnixTime(
      //       safe[nextPrayer as keyof PrayerTimings],
      //       fromISOtoDate(prayerData.data.date.gregorian.date),
      //     ),
      //   ),
      // );
    }
    se();
  }, [prayerData]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  }, []);
  useEffect(() => {
    async function se() {
      if (safeTimingsCopy && fetchedDate) {
        const date = fromISOtoDate(fetchedDate);
        const soundFile = await AsyncStorage.getItem(selectedReciter.id);

        scheduleAllPrayersForDay(safeTimingsCopy, date, soundFile || 'default');
      }
    }
    se();
  }, [fetchedDate, safeTimingsCopy, preNotification, selectedReciter?.id]);
  const currentMin = now.getMinutes();
  useEffect(() => {
    async function se() {
      const result: null | object = await shouldShowAthanScreen();

      if (result) {
        router.push('/(tabs)/athan');
      }
    }
    se();
  }, [currentMin]);

  useEffect(() => {
    if (prayerData && prayerData.ok) {
      const safe = safeTimings(prayerData.data.timings);
      const lastUnix = convertToUnixTime(
        safe.Isha,
        fromISOtoDate(prayerData.data.date.gregorian.date),
      ).getTime();
      const nowUnix = now.getTime();
      if (nowUnix >= lastUnix) {
        onLastPrayerCome();
      }
    }
  }, [prayerData, now, onLastPrayerCome]);

  useEffect(() => {
    if (prayerData?.ok && prayerData && nextPrayer) {
      const safe = safeTimings(prayerData.data.timings);
      const nextTime = convertToUnixTime(
        safe[nextPrayer as keyof PrayerTimings],
        fromISOtoDate(prayerData.data.date.gregorian.date),
      );
      const leftTime: number = nextTime.getTime() - now.getTime();
      const totalSeconds = Math.floor(leftTime / 1000);

      const leftHours = '' + Math.floor(totalSeconds / 3600);
      const leftMinutes = '' + Math.floor((totalSeconds % 3600) / 60);
      const leftSeconds = '' + (totalSeconds % 60);
      const addPrefix = (time: string): string =>
        Number(time) < 10 ? '0' + time : time;
      setNextPrayerTimes({
        leftHours: addPrefix(leftHours),
        leftMinutes: addPrefix(leftMinutes),
        leftSeconds: addPrefix(leftSeconds),
        name: nextPrayer,
      });
    }
  }, [nextPrayer, prayerData, now]);
  useEffect(() => {}, []);
  const values = {
    showAthan: showAthanScreen,
    nextPrayer,
    prayerData,
    nextPrayerTimes,
    mainPrayers,
    showAthanScreen,
    athanMeta,
  };
  return (
    <nextPrayerContext.Provider value={values}>
      {children}
    </nextPrayerContext.Provider>
  );
}
