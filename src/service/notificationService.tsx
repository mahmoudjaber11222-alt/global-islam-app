import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import { PrayerTimings } from '../app/types/prayer_times';

const isBare = Constants.executionEnvironment === 'bare';

const PRAYER_CHANNEL_ID = 'prayer-notifications';

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

  await createPrayerChannel();

  console.log(`🔔 Notifications initialized | Permission: ${finalStatus}`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Android Notification Channel
// ─────────────────────────────────────────────────────────────────────────────

export async function createPrayerChannel(): Promise<void> {
  if (Platform.OS !== 'android') return;

  await Notifications.setNotificationChannelAsync(PRAYER_CHANNEL_ID, {
    name: 'Prayer Notifications',

    // Normal/high notification importance
    importance: Notifications.AndroidImportance.HIGH,

    vibrationPattern: [0, 500, 200, 500],
    lightColor: '#c9a96e',

    sound: 'azan.mp3',

    enableVibrate: true,
    enableLights: true,

    showBadge: false,

    lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,

    // ❌ No bypassDnd
  });
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

  // Skip Expo Go
  if (!isBare) {
    console.warn(`⚠️ ${prayerName}: skipped (Expo Go)`);
    return;
  }

  const { sound = 'azan.mp3', vibrate = true } = options || {};

  const title = translatedText?.prayers?.times?.[prayerName] ?? prayerName;

  const body = options?.preAdhanTime
    ? translatedText?.prayerApp?.upcoming
    : (translatedText?.athan?.prayerTime ?? 'It is time for prayer');

  const identifier = `prayer-${prayerName}-${
    triggerDate.toISOString().split('T')[0]
  }-${triggerDate.getHours()}-${triggerDate.getMinutes()}${
    options?.preAdhanTime ? '-pre' : ''
  }`;

  const notificationId = await Notifications.scheduleNotificationAsync({
    identifier,

    content: {
      title,
      body,

      sound,

      vibrate: vibrate ? [0, 500, 200, 500] : undefined,

      // Normal notification priority
      priority: Notifications.AndroidNotificationPriority.HIGH,

      data: {
        prayer: prayerName,
        type: 'prayer-notification',
      },

      ...(Platform.OS === 'ios' && {
        interruptionLevel: 'timeSensitive',
      }),

      autoDismiss: true,
    },

    // Keep the SAME date/time trigger
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,

      date: triggerDate,

      channelId: Platform.OS === 'android' ? PRAYER_CHANNEL_ID : undefined,
    },
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

  const today = new Date();

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

  // Store notification details for current day
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

    if (data?.type === 'prayer-notification') {
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
