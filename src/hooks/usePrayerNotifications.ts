import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useRef } from 'react';
import { PrayerTimings } from '../app/types/prayer_times';
import {
  initializeNotifications,
  scheduleAllPrayersForDay,
} from '../service/notificationService';

interface NotificationData {
  type: 'PRAYER_TIME';
  prayerName: string;
  prayerTime: string;
  audioSource: string;
  scheduledAt: string;
}

function usePrayerNotifications() {
  const router = useRouter();
  const notificationListener = useRef<Notifications.Subscription>();
  const responseListener = useRef<Notifications.Subscription>();

  // ─── Initialize on mount ─────────────────────────────────────────────────
  useEffect(() => {
    initializeNotifications().catch(console.error);

    // Listen for notifications when app is in foreground
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        const data = notification.request.content.data as NotificationData;
        if (data?.type === 'PRAYER_TIME') {
          // App is open → navigate to Athan screen directly
          router.push({
            pathname: '/athan',
            params: {
              prayerName: data.prayerName,
              prayerTime: data.prayerTime,
              audioSource: data.audioSource,
            },
          });
        }
      });

    // Listen for notification taps (app was backgrounded or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const data = response.notification.request.content
          .data as NotificationData;
        if (data?.type === 'PRAYER_TIME') {
          // App opens from notification → navigate to Athan
          router.push({
            pathname: '/athan',
            params: {
              prayerName: data.prayerName,
              prayerTime: data.prayerTime,
              audioSource: data.audioSource,
            },
          });
        }
      });

    // Check if app was opened from a notification (cold start)
    checkInitialNotification();

    return () => {
      notificationListener.current?.remove();
      responseListener.current?.remove();
    };
  }, []);

  // ─── Check if app was opened from notification (cold start) ────────────────
  const checkInitialNotification = useCallback(async () => {
    const response = await Notifications.getLastNotificationResponseAsync();
    if (response) {
      const data = response.notification.request.content
        .data as NotificationData;
      if (data?.type === 'PRAYER_TIME') {
        router.push({
          pathname: '/athan',
          params: {
            prayerName: data.prayerName,
            prayerTime: data.prayerTime,
            audioSource: data.audioSource,
          },
        });
      }
    }
  }, [router]);

  // ─── Schedule prayers when data is available ───────────────────────────────
  const schedulePrayers = useCallback(
    async (timings: PrayerTimings, date: Date, audioSource?: string) => {
      try {
        const ids = await scheduleAllPrayersForDay(timings, date, audioSource);
        return ids;
      } catch (error) {
        console.error('Failed to schedule prayers:', error);
        return [];
      }
    },
    [],
  );

  // ─── Cancel all prayer notifications ───────────────────────────────────────
  // const cancelPrayers = useCallback(async () => {
  //   await cancelAllPrayerNotifications();
  // }, []);

  return { schedulePrayers };
}
