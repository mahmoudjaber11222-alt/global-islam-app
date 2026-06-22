import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="quran" options={{ title: 'Quran' }} />
      <Tabs.Screen name="athkar" options={{ title: 'Athkar' }} />
      <Tabs.Screen name="prayers" options={{ title: 'Prayers' }} />
    </Tabs>
  );
}
