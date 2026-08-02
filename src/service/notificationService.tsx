import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { AlAdhanResponse, PrayerTimings } from '../app/types/prayer_times';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Check if we're in a development build (not Expo Go)
const isDevClient = Constants.executionEnvironment === 'bare';

// ─── Configure how notifications behave ───────────────────────────────────────
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// ─── Prayer name mapping for display ─────────────────────────────────────────
const PRAYER_DISPLAY_NAMES: Record<string, string> = {
  Fajr: 'Fajr',
  Sunrise: 'Sunrise',
  Dhuhr: 'Dhuhr',
  Asr: 'Asr',
  Maghrib: 'Maghrib',
  Isha: 'Isha',
};

// ─── Initialize notification channels (Android) ────────────────────────────
export async function initializeNotifications(): Promise<void> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    throw new Error('Notification permissions not granted');
  }

  // Android: Create high-priority channel for prayer alarms
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('prayer-alarms', {
      name: 'Prayer Alarms',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 200, 500, 200, 500],
      lightColor: '#c9a96e',
      sound: 'default', // or custom athan sound file
      enableVibrate: true,
      enableLights: true,
    });

    // Request exact alarm permission (Android 12+)
    if (Platform.Version >= 31) {
      await Notifications.requestPermissionsAsync({
        android: {
          allowAlarm: true,
        },
      });
    }
  }
}

// ─── Schedule a single prayer notification ───────────────────────────────────
export async function schedulePrayerNotification(
  prayerName: string,
  prayerTime: string, // "HH:MM" format
  date: Date, // The date this prayer falls on
  options?: {
    sound?: string;
    vibrate?: boolean;
    preAdhanTime?: boolean;
  },
  audioSource?: string, // Optional: path to custom athan audio
): Promise<string | void> {
  // Build the exact trigger date
  const [hours, minutes] = prayerTime.split(':').map(Number);
  const triggerDate = new Date(date);
  triggerDate.setHours(
    hours,
    options?.preAdhanTime ? minutes - 15 : minutes,
    0,
    0,
  );

  // Don't schedule if time has already passed
  if (triggerDate.getTime() <= Date.now()) {
    console.log(`⏭️ Skipping ${prayerName} - time already passed`);
    return '';
  }
  console.log(prayerName + '=== sched');
  const Notifications = await import('expo-notifications');
  if (!isDevClient) {
    console.warn('Skipping alarm — not in development build');
    return;
  }
  // Schedule the notification with prayer data payload
  const { sound = 'adhan.wav', vibrate = true } = options || {};

  const notidicationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: `🕌 ${prayerName}`,
      body: 'Time for prayer',
      sound,

      vibrate: vibrate ? [0, 500, 200, 500] : undefined,
      priority: Notifications.AndroidNotificationPriority.MAX,
      categoryIdentifier: 'prayer-alarm',
      data: { prayer: prayerName, type: 'prayer-alarm' },
      ...(Platform.OS === 'ios' && {
        interruptionLevel: 'timeSensitive',
      }),
      autoDismiss: true,
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate,
      channelId: Platform.OS === 'android' ? 'prayer-alarm' : undefined,
    } as any,
  });

  console.log(
    `✅ Scheduled ${prayerName} at ${triggerDate.toLocaleTimeString()} (ID: ${notidicationId})`,
  );
  return notidicationId;
}

// ─── Schedule all prayers for a day ──────────────────────────────────────────
export async function scheduleAllPrayersForDay(
  timings: PrayerTimings,
  date: Date,
  audioSource?: string,
): Promise<string[]> {
  // Cancel existing prayer notifications first
  await cancelAllPrayerNotifications();
  await Notifications.deleteNotificationChannelAsync('prayer-alarm');
  const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;
  const scheduledIds: string[] = [];

  const storedNotificationsDetails = [];

  await AsyncStorage.removeItem('prayerNotificationsDetails');
  for (const prayer of prayers) {
    const time = timings[prayer as keyof PrayerTimings]?.split(' ')[0];
    console.log('SCHEDULED IDS:===>', scheduledIds);
    if (time) {
      const isPreAdhanNotificationChecked = await AsyncStorage.getItem(
        '@pre_adhan_notification',
      ).then(async (res) => (res ? JSON.parse(res) : ''));
      console.log('hello');
      type optionsType = {
        sound: string | undefined;
        vibrate: boolean;
        preAdhanTime?: boolean;
      };
      const options: optionsType = {
        sound: audioSource,
        vibrate: true,
      };
      if (Boolean(isPreAdhanNotificationChecked)) {
        console.log(
          'is prayer remineer checked: ',
          isPreAdhanNotificationChecked,
        );
        options[`preAdhanTime`] = true;
      }
      const id = await schedulePrayerNotification(prayer, time, date, options);
      const tempDate = new Date(date);
      const [h, m] = time.split(':');
      tempDate.setHours(Number(h), Number(m), 0, 0);
      tempDate.setTime(tempDate.getTime() - 1000 * 60 * 15);
      console.log(tempDate);
      storedNotificationsDetails.push({
        prayerName: prayer,
        time: options.preAdhanTime
          ? `${tempDate.getHours()}:${tempDate.getMinutes()}`
          : time,
        date: options.preAdhanTime ? tempDate : date,
      });
      if (id) scheduledIds.push(id);
    }
  }
  await AsyncStorage.setItem(
    'prayerNotificationsDetails',
    JSON.stringify(storedNotificationsDetails),
  );
  return scheduledIds;
}

// ─── Cancel all prayer notifications ─────────────────────────────────────────
export async function cancelAllPrayerNotifications(): Promise<void> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  for (const notification of scheduled) {
    const data = notification.content.data as
      Record<string, unknown> | undefined;
    if (data?.type === 'prayer-alarm') {
      // ← FIXED: match the actual type
      await Notifications.cancelScheduledNotificationAsync(
        notification.identifier,
      );
    }
  }
}

// ─── Cancel a specific notification ──────────────────────────────────────────
export async function cancelNotification(
  notificationId: string,
): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync(notificationId);
}
