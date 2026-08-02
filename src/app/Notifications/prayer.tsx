import Constants from 'expo-constants';
import { Platform } from 'react-native';

// Check if we're in a development build (not Expo Go)
const isDevClient = Constants.executionEnvironment === 'bare';

// ─── 1. LAZY INITIALIZATION ────────────────────────────────
let initialized = false;

export async function initNotifications() {
  if (!isDevClient) {
    console.warn('Notifications only work in development builds');
    return;
  }
  if (!isDevClient) return;

  const Notifications = await import('expo-notifications');
  if (initialized) return;

  // Only run these in development build
  await Notifications.setNotificationCategoryAsync('prayer-alarm', [
    {
      identifier: 'snooze',
      buttonTitle: 'Snooze 5 min',
      options: { isDestructive: false },
    },
    {
      identifier: 'dismiss',
      buttonTitle: 'Dismiss',
      options: { isDestructive: true },
    },
  ]);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  initialized = true;
}

// ─── 2. PERMISSIONS ────────────────────────────────────────
export async function requestPermissions() {
  if (!isDevClient) {
    console.warn('Notifications require a development build');
    return false;
  }

  const Notifications = await import('expo-notifications');

  const { status } = await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowCriticalAlerts: true,
    },
  });
  return status === 'granted';
}

// ─── 3. ANDROID CHANNEL ────────────────────────────────────
export async function setupPrayerChannel() {
  if (!isDevClient || Platform.OS !== 'android') return;

  const Notifications = await import('expo-notifications');
  await Notifications.setNotificationChannelAsync('prayer-alarm', {
    name: 'Prayer Times',
    importance: Notifications.AndroidImportance.MAX,
    vibrationPattern: [0, 500, 200, 500, 200, 500],
    sound: 'adhan.wav',
    enableLights: true,
    lightColor: '#c9a96e',
    lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    bypassDnd: true,
    showBadge: false,
  });
}

// ─── 4. SCHEDULE PRAYER ALARM ──────────────────────────────
export async function schedulePrayerAlarm(
  prayerName: string,
  orgDate: Date,
  options?: {
    sound?: string;
    vibrate?: boolean;
  },
) {
  if (!isDevClient) {
    console.warn('Skipping alarm — not in development build');
    return;
  }

  const Notifications = await import('expo-notifications');
  const { sound = 'adhan.wav', vibrate = true } = options || {};

  console.log(`📿 Scheduling ${prayerName} at ${orgDate.toLocaleString()}`);

  await Notifications.scheduleNotificationAsync({
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
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: orgDate,
      channelId: Platform.OS === 'android' ? 'prayer-alarm' : undefined,
    } as any,
  });
}
