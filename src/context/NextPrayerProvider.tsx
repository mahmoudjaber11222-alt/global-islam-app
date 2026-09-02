import * as Notifications from 'expo-notifications';
import { createContext, ReactNode, useEffect, useRef, useState } from 'react';

import { shouldShowAthanScreen } from '../app';
import { requestPermissions } from '../app/Notifications/prayer';
import { PrayerTimings } from '../app/types/prayer_times';
import { NextPrayerType } from '../components/NextPrayer';
import usePrayer from '../hooks/usePrayer';
import useStaticText from '../hooks/useStaticText';

import {
  cancelAllPrayerNotifications,
  scheduleAllPrayersForDay,
} from '../service/notificationService';

import { router } from 'expo-router';
import { useSettings } from './SettingsProvider';

type NextPrayerContextType = {
  showAthan: boolean;
  nextPrayer: string | null;
  prayerData: any;
  nextPrayerTimes: NextPrayerType;
  mainPrayers: string[];
  currentHours: string;
  currentMin: string;
  handleAthanScreenShown: (value: boolean) => void;
};

export const nextPrayerContext = createContext<NextPrayerContextType | null>(
  null,
);

/**
 * Removes timezone information from prayer times.
 *
 * Example:
 * "04:32 (+03)" -> "04:32"
 */
function safeTimings(times: PrayerTimings): PrayerTimings {
  return Object.fromEntries(
    Object.entries(times).map(([key, value]) => [
      key,
      typeof value === 'string' ? value.split(' ')[0] : value,
    ]),
  ) as PrayerTimings;
}

/**
 * Converts API date format DD-MM-YYYY into a Date object.
 */
function fromISOtoDate(dateString: string): Date {
  const [day, month, year] = dateString.split('-').map(Number);

  if (!day || !month || !year) {
    throw new Error(`Invalid date format: ${dateString}`);
  }

  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1, day);

  return date;
}

/**
 * Creates a Date using a prayer time and a specific date.
 */
function convertToDate(time: string, date: Date): Date {
  const newDate = new Date(date);

  const [hours, minutes] = time.split(':').map(Number);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    throw new Error(`Invalid prayer time: ${time}`);
  }

  newDate.setHours(hours);
  newDate.setMinutes(minutes);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);

  return newDate;
}

export function NextPrayerProvider({ children }: { children: ReactNode }) {
  const { preNotification } = useSettings();

  const { translatedText } = useStaticText();

  const { dataPrecise: prayerData, onLastPrayerCome } = usePrayer();

  const fullData = prayerData?.ok ? (prayerData.fullData ?? []) : [];

  const [now, setNow] = useState<Date>(new Date());

  const [isAdhanScreenShown, setIsAdhanScreenShown] = useState(false);

  const [nextPrayerTimes, setNextPrayerTimes] = useState<NextPrayerType>({
    leftHours: '00',
    leftSeconds: '00',
    leftMinutes: '00',
    name: '',
  });

  /**
   * Prevents multiple notification scheduling operations
   * from running at the same time.
   */
  const isSchedulingRef = useRef(false);

  /**
   * Stores the configuration that was already scheduled.
   *
   * This prevents the provider from scheduling the same
   * month's notifications repeatedly.
   */
  const lastScheduledConfigRef = useRef<string | null>(null);

  /**
   * Used to prevent an async scheduling operation from
   * continuing after the effect has been cleaned up.
   */
  const scheduleRunIdRef = useRef(0);

  const mainPrayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

  /**
   * Get the next prayer based on the current time.
   */
  const getNextPrayer = (timings: PrayerTimings): string => {
    const safe = safeTimings(timings);

    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    for (const prayer of mainPrayers) {
      const value = safe[prayer as keyof PrayerTimings];

      if (!value) continue;

      const [hours, minutes] = value.split(':').map(Number);

      const prayerMinutes = hours * 60 + minutes;

      if (prayerMinutes > currentMinutes) {
        return prayer;
      }
    }

    /**
     * All prayers have passed.
     *
     * The next prayer is tomorrow's Fajr.
     */
    return 'Fajr';
  };

  const nextPrayer: string | null = prayerData?.ok
    ? getNextPrayer(prayerData.data.timings)
    : null;
  useEffect(() => {
    console.log('Athan_screen_shown: ', isAdhanScreenShown);
  }, [isAdhanScreenShown]);
  /**
   * Keep current time updated every second.
   */
  useEffect(() => {
    const timerId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  /**
   * Request notification permissions once.
   */
  useEffect(() => {
    let mounted = true;

    async function setupNotifications() {
      try {
        await requestPermissions();

        if (!mounted) return;

        console.log('Notification permissions initialized');
      } catch (error) {
        console.error('Failed to request notification permissions:', error);
      }
    }

    setupNotifications();

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * Debug helper.
   */
  async function logNotification() {
    try {
      const scheduled = await Notifications.getAllScheduledNotificationsAsync();

      console.log('All scheduled notifications:', scheduled.length);
    } catch (error) {
      console.error('Failed to get scheduled notifications:', error);
    }
  }

  /**
   * Schedule notifications for ONE day.
   */
  async function scheduleDayNotifications(
    timings: PrayerTimings,
    date: string,
    preAdhan: boolean,
  ) {
    try {
      const safe = safeTimings(timings);
      const fetchedDate = fromISOtoDate(date);

      await scheduleAllPrayersForDay(
        safe,
        fetchedDate,
        translatedText,
        preAdhan,
        'azan.mp3',
      );
    } catch (error) {
      console.error(`Failed to schedule notifications for ${date}:`, error);

      throw error;
    }
  }

  /**
   * Schedule the complete prayer dataset.
   *
   * IMPORTANT:
   * This will only run when the actual dataset/configuration
   * changes, and it prevents concurrent scheduling operations.
   */
  useEffect(() => {
    if (!fullData.length) {
      return;
    }

    const configKey = JSON.stringify({
      length: fullData.length,
      firstDate: fullData[0]?.date?.gregorian?.date,
      lastDate: fullData[fullData.length - 1]?.date?.gregorian?.date,
      preNotification,
    });

    /**
     * Don't schedule the exact same configuration again.
     */
    if (lastScheduledConfigRef.current === configKey) {
      return;
    }

    /**
     * Don't allow two scheduling operations
     * to run simultaneously.
     */
    if (isSchedulingRef.current) {
      console.log('Notification scheduling already running...');
      return;
    }

    const runId = ++scheduleRunIdRef.current;

    async function schedule() {
      const isScheduledNotifications = (
        await Notifications.getAllScheduledNotificationsAsync()
      ).length;
      if (isScheduledNotifications) {
        console.log(
          'notifications are alredy scheduled | ' +
            isScheduledNotifications +
            ' notification',
        );
        return;
      }
      isSchedulingRef.current = true;

      try {
        console.log('Starting prayer notification scheduling...');

        console.log('Days:', fullData.length);

        console.log('Pre-notification:', preNotification);

        /**
         * Remove previously scheduled prayer
         * notifications first.
         */
        await cancelAllPrayerNotifications();

        /**
         * Check if this effect has become obsolete.
         */
        // if (runId !== scheduleRunIdRef.current) {
        //   return;
        // }

        /**
         * Schedule each day sequentially.
         */
        let counter = 0;
        for (const item of fullData) {
          counter++;
          console.log(counter);
          console.log(
            'ALL SCHEDULED NOTIFICATIONS ARE: ',
            (await Notifications.getAllScheduledNotificationsAsync()).length,
          );
          // if (runId !== scheduleRunIdRef.current) {
          //   return;
          // }

          if (!item?.timings || !item?.date?.gregorian?.date) {
            console.warn('Skipping invalid prayer data:', item);

            continue;
          }

          await scheduleDayNotifications(
            item.timings,
            item.date.gregorian.date,
            preNotification,
          );
        }

        /**
         * Mark this configuration as scheduled
         * only after everything completed successfully.
         */
        lastScheduledConfigRef.current = configKey;

        console.log('Prayer notifications scheduled successfully.');

        await logNotification();
      } catch (error) {
        console.error('Failed to schedule prayer notifications:', error);
      } finally {
        isSchedulingRef.current = false;
      }
    }

    schedule();

    return () => {
      /**
       * Invalidate the current scheduling run.
       */
      scheduleRunIdRef.current++;
    };
  }, [fullData, preNotification, translatedText]);

  /**
   * Check whether the Athan screen should be shown.
   */
  useEffect(() => {
    const intervalId = setInterval(async () => {
      try {
        const result = await shouldShowAthanScreen();
        console.log(result);
        if (result && !isAdhanScreenShown) {
          router.push('/(tabs)/athan');
          setIsAdhanScreenShown(true);
        }
      } catch (error) {
        console.error('Failed to check Athan screen:', error);
      }
    }, 1000 * 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  /**
   * Detect when Isha has passed.
   */
  useEffect(() => {
    if (!prayerData?.ok) {
      return;
    }

    try {
      const safe = safeTimings(prayerData.data.timings);

      if (!safe.Isha) {
        return;
      }

      const prayerDate = fromISOtoDate(prayerData.data.date.gregorian.date);

      const lastPrayer = convertToDate(safe.Isha, prayerDate).getTime();

      const nowUnix = now.getTime();

      if (nowUnix >= lastPrayer) {
        onLastPrayerCome();

        console.log('Last prayer has come.');
      }
    } catch (error) {
      console.error('Failed to check last prayer:', error);
    }
  }, [prayerData, now, onLastPrayerCome]);

  /**
   * Calculate countdown to next prayer.
   */
  useEffect(() => {
    if (!prayerData?.ok || !nextPrayer) {
      return;
    }

    try {
      const safe = safeTimings(prayerData.data.timings);

      const prayerTime = safe[nextPrayer as keyof PrayerTimings];

      if (!prayerTime) {
        return;
      }

      const prayerDate = fromISOtoDate(prayerData.data.date.gregorian.date);

      let nextTime = convertToDate(prayerTime, prayerDate);

      /**
       * If all today's prayers have passed,
       * Fajr belongs to TOMORROW.
       */
      if (nextPrayer === 'Fajr' && nextTime.getTime() <= now.getTime()) {
        nextTime = new Date(nextTime);
        nextTime.setDate(nextTime.getDate() + 1);
      }

      const leftTime = nextTime.getTime() - now.getTime();

      const totalSeconds = Math.max(0, Math.floor(leftTime / 1000));

      const leftHours = Math.floor(totalSeconds / 3600);

      const leftMinutes = Math.floor((totalSeconds % 3600) / 60);

      const leftSeconds = totalSeconds % 60;

      const addPrefix = (value: number): string => {
        return value < 10 ? `0${value}` : `${value}`;
      };

      setNextPrayerTimes({
        leftHours: addPrefix(leftHours),
        leftMinutes: addPrefix(leftMinutes),
        leftSeconds: addPrefix(leftSeconds),
        name: nextPrayer,
      });
    } catch (error) {
      console.error('Failed to calculate next prayer:', error);
    }
  }, [nextPrayer, prayerData, now]);

  const currentMin = now.getMinutes();
  const currentHours = now.getHours();

  const values: NextPrayerContextType = {
    showAthan: isAdhanScreenShown,
    nextPrayer,
    prayerData,
    nextPrayerTimes,
    mainPrayers,
    currentHours: `${currentHours}`,
    currentMin: `${currentMin}`,

    handleAthanScreenShown: (value: boolean): void => {
      setIsAdhanScreenShown(value);
    },
  };

  return (
    <nextPrayerContext.Provider value={values}>
      {children}
    </nextPrayerContext.Provider>
  );
}
