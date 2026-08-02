import { Stack } from 'expo-router';

export default function QuranLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}
    />
  );
}
