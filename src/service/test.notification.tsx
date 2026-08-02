import * as Notifications from 'expo-notifications';

// ─── Schedule a test notification (fires in X seconds) ───────────────────────
export async function scheduleTestNotification(
  delaySeconds = 5,
): Promise<string> {
  const triggerDate = new Date(Date.now() + delaySeconds * 1000);

  const id = await Notifications.scheduleNotificationAsync({
    content: {
      title: '🧪 Test Notification',
      body: `This fired after ${delaySeconds} seconds`,
      sound: 'default',
      data: { type: 'test-notification' },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate,
    } as any,
  });

  console.log(
    `🧪 Test scheduled (ID: ${id}) — fires at ${triggerDate.toLocaleTimeString()}`,
  );
  return id;
}

// ─── List all scheduled notifications (for debugging) ────────────────────────
export async function listScheduledNotifications(): Promise<void> {
  const all = await Notifications.getAllScheduledNotificationsAsync();
  console.log(`\n📋 Total scheduled: ${all.length}`);

  all.forEach((n, i) => {
    const trigger = n.trigger as any;
    const date = trigger?.date
      ? new Date(trigger.date).toLocaleTimeString()
      : 'unknown';
    console.log(
      `  ${i + 1}. "${n.content.title}" — type: ${n.content.data?.type || 'none'} — fires: ${date}`,
    );
  });
}

// ─── Clear ALL scheduled notifications (nuclear option for testing) ──────────
export async function clearAllScheduledNotifications(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log('💥 All scheduled notifications cleared');
}
