import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { PrayerTimings } from '../app/types/prayer_times';

// Check if we're running outside Expo Go.
// This allows development builds and production APKs.
const isDevClient = Constants.executionEnvironment === 'bare';

// ─────────────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────────────
const today = new Date();
const PRAYER_CHANNEL_ID = 'prayer-alarm';

const PRAYERS = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Notification Handler
// ─────────────────────────────────────────────────────────────────────────────

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

// ─────────────────────────────────────────────────────────────────────────────
// Initialize notifications
// ─────────────────────────────────────────────────────────────────────────────

export async function initializeNotifications(): Promise<void> {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.error('❌ Notifications: permission denied');
    throw new Error('Notification permissions not granted');
  }

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(PRAYER_CHANNEL_ID, {
      name: 'Prayer Alarms',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 200, 500, 200, 500],
      lightColor: '#c9a96e',
      sound: 'azan.mp3',
      enableVibrate: true,
      enableLights: true,
      showBadge: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
    });

    if (Platform.Version >= 31) {
      await Notifications.requestPermissionsAsync({
        android: {
          allowAlarm: true,
        },
      });
    }
  }

  console.log(`🔔 Notifications initialized  |  Permission: ${finalStatus}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Schedule a single prayer notification
// ─────────────────────────────────────────────────────────────────────────────

export async function schedulePrayerNotification(
  prayerName: string,
  prayerTime: string,
  date: Date,
  translatedText: any,
  options?: {
    sound?: string;
    vibrate?: boolean;
    preAdhanTime?: boolean;
  },
  audioSource?: string,
): Promise<string | void> {
  const [hours, minutes] = prayerTime.split(':').map(Number);

  const triggerDate = new Date(date);

  triggerDate.setHours(
    hours,
    options?.preAdhanTime ? minutes - 15 : minutes,
    0,
    0,
  );

  // Don't schedule notifications that have already passed.
  if (triggerDate.getTime() <= Date.now()) {
    console.log(`   ⏭ ${prayerName}: skipped (time passed)`);
    return '';
  }

  // Expo Go cannot schedule native notifications reliably.
  if (!isDevClient) {
    console.warn(`⚠️ ${prayerName}: skipped (Expo Go)`);
    return;
  }

  const { sound = 'azan.mp3', vibrate = true } = options || {};

  const title = translatedText?.prayers?.times?.[prayerName] ?? prayerName;

  const body = options?.preAdhanTime
    ? translatedText?.prayerApp?.upcoming
    : (translatedText?.athan?.prayerTime ?? 'It is time for prayer');

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound,
      vibrate: vibrate ? [0, 500, 200, 500] : undefined,
      priority: Notifications.AndroidNotificationPriority.MAX,

      // REMOVED: categoryIdentifier: PRAYER_CHANNEL_ID,

      data: {
        prayer: prayerName,
        type: 'prayer-alarm',
      },

      ...(Platform.OS === 'ios' && {
        interruptionLevel: 'timeSensitive',
      }),

      autoDismiss: true,
    },

    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate,
      channelId: Platform.OS === 'android' ? PRAYER_CHANNEL_ID : undefined,
    } as any,
  });

  return notificationId;
}

// ─────────────────────────────────────────────────────────────────────────────
// Schedule all prayers for a day
// ─────────────────────────────────────────────────────────────────────────────

export async function scheduleAllPrayersForDay(
  timings: PrayerTimings,
  date: Date,
  translatedText: any,
  preNotification: boolean,
  audioSource?: string,
): Promise<string[]> {
  console.log('\n📅 Scheduling prayer notifications');
  console.log(`   Date: ${date.toDateString()}`);
  console.log(`   Pre-Adhan: ${preNotification ? 'enabled' : 'disabled'}`);

  const scheduledIds: string[] = [];
  const storedNotificationsDetails: any[] = [];

  // Remove previous stored details.
  // await AsyncStorage.removeItem('prayerNotificationsDetails');

  // ───────────────────────────────────────────────────────────────────────────
  // Android channel
  // ───────────────────────────────────────────────────────────────────────────

  if (Platform.OS === 'android') {
    await Notifications.deleteNotificationChannelAsync(PRAYER_CHANNEL_ID);

    await Notifications.setNotificationChannelAsync(PRAYER_CHANNEL_ID, {
      name: 'Prayer Alarms',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 200, 500, 200, 500],
      lightColor: '#c9a96e',
      sound: 'azan.mp3',
      enableVibrate: true,
      enableLights: true,
      showBadge: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
    });
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Schedule prayers
  // ───────────────────────────────────────────────────────────────────────────

  for (const prayer of PRAYERS) {
    const time = timings[prayer as keyof PrayerTimings]?.split(' ')[0];

    if (!time) {
      console.log(`   ⏭ ${prayer}: no time available`);
      continue;
    }

    const options = {
      sound: audioSource,
      vibrate: true,
      preAdhanTime: false,
    };

    // Main prayer notification
    const id = await schedulePrayerNotification(
      prayer,
      time,
      date,
      translatedText,
      options,
      audioSource,
    );

    if (id) {
      scheduledIds.push(id);

      console.log(`   ✓ ${prayer.padEnd(8)} → ${time}`);
    }

    // Store prayer details
    const tempDate = new Date(date);
    const [h, m] = time.split(':');

    tempDate.setHours(Number(h), Number(m), 0, 0);

    storedNotificationsDetails.push({
      prayerName: prayer,
      time,
      date: tempDate,
    });

    // Optional pre-Adhan notification
    if (preNotification) {
      const preAdhanId = await schedulePrayerNotification(
        prayer,
        time,
        date,
        translatedText,
        {
          ...options,
          preAdhanTime: true,
        },
        audioSource,
      );

      if (preAdhanId) {
        scheduledIds.push(preAdhanId);

        console.log(`   ✓ ${prayer.padEnd(8)} → ${time} (-15m)`);
      }
    }
  }

  // Store notification details
  if (today.getDate() === new Date(date).getDate()) {
    await AsyncStorage.setItem(
      'prayerNotificationsDetails',
      JSON.stringify(storedNotificationsDetails),
    );
  }
  console.log(`\n✅ Scheduled ${scheduledIds.length} prayer notifications\n`);

  return scheduledIds;
}

// ─────────────────────────────────────────────────────────────────────────────
// Cancel all prayer notifications
// ─────────────────────────────────────────────────────────────────────────────

export async function cancelAllPrayerNotifications(): Promise<void> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();

  let cancelledCount = 0;

  for (const notification of scheduled) {
    const data = notification.content.data as
      Record<string, unknown> | undefined;

    if (data?.type === 'prayer-alarm') {
      await Notifications.cancelScheduledNotificationAsync(
        notification.identifier,
      );

      cancelledCount++;
    }
  }

  console.log(`🧹 Cancelled ${cancelledCount} prayer notifications`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Cancel a specific notification
// ─────────────────────────────────────────────────────────────────────────────

export async function cancelNotification(
  notificationId: string,
): Promise<void> {
  await Notifications.cancelScheduledNotificationAsync(notificationId);

  console.log(`🗑 Notification cancelled: ${notificationId}`);
}
