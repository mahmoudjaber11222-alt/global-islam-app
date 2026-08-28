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

const PRAYER_CHANNEL_ID = 'prayer-alarm';

const PRAYERS = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Configure how notifications behave
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
// Initialize notification channels
// ─────────────────────────────────────────────────────────────────────────────

export async function initializeNotifications(): Promise<void> {
  console.log(
    '\n================ NOTIFICATION INITIALIZATION ================',
  );

  const { status: existingStatus } = await Notifications.getPermissionsAsync();

  console.log('📱 Existing notification permission:', existingStatus);

  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;

    console.log('📱 Requested notification permission:', finalStatus);
  }

  if (finalStatus !== 'granted') {
    console.error('❌ Notification permissions not granted');
    throw new Error('Notification permissions not granted');
  }

  console.log('✅ Notification permission granted');

  // Android notification channel
  if (Platform.OS === 'android') {
    console.log('🤖 Creating Android notification channel...');
    console.log('   Channel ID:', PRAYER_CHANNEL_ID);

    await Notifications.setNotificationChannelAsync(PRAYER_CHANNEL_ID, {
      name: 'Prayer Alarms',

      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 200, 500, 200, 500],
      lightColor: '#c9a96e',
      sound: 'azan.wav',
      enableVibrate: true,
      enableLights: true,
      showBadge: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
    });

    console.log('✅ Android notification channel created');

    // Android 12+
    if (Platform.Version >= 31) {
      console.log('🤖 Android 12+ detected');
      console.log('⏰ Requesting exact alarm permission...');

      await Notifications.requestPermissionsAsync({
        android: {
          allowAlarm: true,
        },
      });

      console.log('✅ Exact alarm permission request completed');
    }
  }

  console.log('============================================================\n');
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
  console.log('\n------------------------------------------------------------');
  console.log('🔔 SCHEDULING PRAYER NOTIFICATION');
  console.log('------------------------------------------------------------');

  console.log('🕌 Prayer:', prayerName);
  console.log('🕐 Original prayer time:', prayerTime);
  console.log('📅 Date:', date.toISOString());

  // ───────────────────────────────────────────────────────────────────────────
  // Build trigger date
  // ───────────────────────────────────────────────────────────────────────────

  const [hours, minutes] = prayerTime.split(':').map(Number);

  const triggerDate = new Date(date);

  triggerDate.setHours(
    hours,
    options?.preAdhanTime ? minutes - 15 : minutes,
    0,
    0,
  );

  console.log('⏰ Scheduled trigger:', triggerDate.toLocaleString());

  console.log(
    '⏪ Pre-Adhan enabled:',
    options?.preAdhanTime ? 'YES (15 minutes before)' : 'NO',
  );

  // Don't schedule if the time has already passed
  if (triggerDate.getTime() <= Date.now()) {
    console.log(`⏭️ SKIPPED: ${prayerName} time has already passed`);

    console.log(
      '------------------------------------------------------------\n',
    );

    return '';
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Development / production environment
  // ───────────────────────────────────────────────────────────────────────────

  console.log('⚙️ Execution environment:', Constants.executionEnvironment);
  console.log('⚙️ Is native/dev client:', isDevClient);

  if (!isDevClient) {
    console.warn('⚠️ Skipping notification because app is running in Expo Go.');

    console.log(
      '------------------------------------------------------------\n',
    );

    return;
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Notification options
  // ───────────────────────────────────────────────────────────────────────────

  const { sound = 'azan.wav', vibrate = true } = options || {};

  // ───────────────────────────────────────────────────────────────────────────
  // LOCALIZED TITLE + BODY
  // ───────────────────────────────────────────────────────────────────────────

  const title = `${translatedText?.prayers?.times?.[prayerName] ?? prayerName}`;

  const body = translatedText?.athan?.prayerTime ?? 'It is time for prayer';

  // ───────────────────────────────────────────────────────────────────────────
  // VERY CLEAR LOCALIZATION LOGS
  // ───────────────────────────────────────────────────────────────────────────

  console.log('\n🌍 NOTIFICATION LANGUAGE / TEXT');
  console.log('   ┌────────────────────────────────────────');
  console.log('   │ Prayer:', prayerName);
  console.log('   │');
  console.log('   │ TITLE:');
  console.log('   │', title);
  console.log('   │');
  console.log('   │ BODY:');
  console.log('   │', body);
  console.log('   │');
  console.log('   │ Translation source:');
  console.log(
    '   │ prayers.times:',
    translatedText?.prayers?.times?.[prayerName],
  );
  console.log('   │ athan.prayerTime:', translatedText?.athan?.prayerTime);
  console.log('   └────────────────────────────────────────\n');

  // ───────────────────────────────────────────────────────────────────────────
  // Schedule notification
  // ───────────────────────────────────────────────────────────────────────────

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      sound,

      vibrate: vibrate ? [0, 500, 200, 500] : undefined,

      priority: Notifications.AndroidNotificationPriority.MAX,

      categoryIdentifier: PRAYER_CHANNEL_ID,

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

  // ───────────────────────────────────────────────────────────────────────────
  // SUCCESS LOG
  // ───────────────────────────────────────────────────────────────────────────

  console.log('\n✅ NOTIFICATION SCHEDULED SUCCESSFULLY');
  console.log('   ┌────────────────────────────────────────');
  console.log('   │ ID:', notificationId);
  console.log('   │ Prayer:', prayerName);
  console.log('   │ Trigger:', triggerDate.toLocaleString());
  console.log('   │ Channel:', PRAYER_CHANNEL_ID);
  console.log('   │ Sound:', sound);
  console.log('   │ Vibrate:', vibrate);
  console.log('   │');
  console.log('   │ TITLE:', title);
  console.log('   │ BODY:', body);
  console.log('   └────────────────────────────────────────');
  console.log('------------------------------------------------------------\n');

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
  console.log('\n============================================================');
  console.log('📅 SCHEDULING ALL PRAYERS');
  console.log('============================================================');

  console.log('📅 Date:', date.toDateString());

  // Cancel existing prayer notifications first
  console.log('🧹 Cancelling existing prayer notifications...');

  await cancelAllPrayerNotifications();

  // Remove the old channel if necessary
  if (Platform.OS === 'android') {
    await Notifications.deleteNotificationChannelAsync(PRAYER_CHANNEL_ID);

    // Recreate the channel after deletion
    await Notifications.setNotificationChannelAsync(PRAYER_CHANNEL_ID, {
      name: 'Prayer Alarms',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 500, 200, 500, 200, 500],
      lightColor: '#c9a96e',
      sound: 'azan.wav',
      enableVibrate: true,
      enableLights: true,
      showBadge: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
      bypassDnd: true,
    });

    console.log('🔄 Prayer notification channel recreated');
  }

  const scheduledIds: string[] = [];

  const storedNotificationsDetails: any[] = [];

  await AsyncStorage.removeItem('prayerNotificationsDetails');

  // ───────────────────────────────────────────────────────────────────────────
  // Read pre-Adhan preference once
  // ───────────────────────────────────────────────────────────────────────────

  const preAdhanValueStr = preNotification;
  const preAdhanValue = preAdhanValueStr;
  console.log('PREADHAN VALUE', preAdhanValue);
  const isPreAdhanNotificationChecked = preAdhanValue;

  console.log(
    '⏪ Pre-Adhan notification:',
    isPreAdhanNotificationChecked ? 'ENABLED' : 'DISABLED',
  );

  // ───────────────────────────────────────────────────────────────────────────
  // Schedule each prayer
  // ───────────────────────────────────────────────────────────────────────────
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();

  console.log('\n========== CURRENT SCHEDULED NOTIFICATIONS ==========');

  for (const notification of scheduled) {
    console.log({
      id: notification.identifier,
      title: notification.content.title,
      body: notification.content.body,
      data: notification.content.data,
      trigger: notification.trigger,
    });
  }

  console.log('TOTAL:', scheduled.length);

  const scheduleAdhan: Object[] = [];
  console.log('====================================================\n');
  for (const prayer of PRAYERS) {
    await setNotifications(preNotification, prayer);
  }

  async function setNotifications(isPreadhanTrue: boolean, prayer: string) {
    const time = timings[prayer as keyof PrayerTimings]?.split(' ')[0];
    if (!time) {
      console.log(`⏭️ ${prayer}: no time found`);
      return;
    }
    const options = {
      sound: audioSource,
      vibrate: true,
      preAdhanTime: false,
    };
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
    }
    // Store notification details
    const tempDate = new Date(date);
    const [h, m] = time.split(':');
    tempDate.setHours(Number(h), Number(m), 0, 0);
    scheduleAdhan.push({
      prayerName: prayer,

      time: options.preAdhanTime
        ? `${tempDate.getHours()}:${String(tempDate.getMinutes()).padStart(
            2,
            '0',
          )}`
        : time,

      date: tempDate,
    });

    if (isPreadhanTrue) {
      const id = await schedulePrayerNotification(
        prayer,
        time,
        date,
        translatedText,
        { ...options, preAdhanTime: true },
        audioSource,
      );
      if (id) {
        scheduledIds.push(id);
      }
    }
  }
  await AsyncStorage.setItem(
    'prayerNotificationsDetails',
    JSON.stringify(scheduleAdhan),
  );

  // ───────────────────────────────────────────────────────────────────────────
  // Store notification details
  // ───────────────────────────────────────────────────────────────────────────

  console.log('\n============================================================');
  console.log('📊 PRAYER SCHEDULING COMPLETE');
  console.log('============================================================');
  console.log('✅ Notifications scheduled:', scheduledIds.length);
  console.log('🆔 IDs:', scheduledIds);
  console.log('============================================================\n');

  return scheduledIds;
}

// ─────────────────────────────────────────────────────────────────────────────
// Cancel all prayer notifications
// ─────────────────────────────────────────────────────────────────────────────

export async function cancelAllPrayerNotifications(): Promise<void> {
  console.log('\n🧹 CANCELING PRAYER NOTIFICATIONS...');

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

      console.log('🗑️ Cancelled:', notification.identifier);
    }
  }

  console.log(`✅ Cancelled ${cancelledCount} prayer notifications`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Cancel a specific notification
// ─────────────────────────────────────────────────────────────────────────────

export async function cancelNotification(
  notificationId: string,
): Promise<void> {
  console.log('🗑️ Cancelling notification:', notificationId);

  await Notifications.cancelScheduledNotificationAsync(notificationId);

  console.log('✅ Notification cancelled:', notificationId);
}
