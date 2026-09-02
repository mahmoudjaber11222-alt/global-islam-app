import useLanguage from '@/src/hooks/useLanguage';
import useStaticText from '@/src/hooks/useStaticText';
import Feather from '@expo/vector-icons/Feather';

import { Tabs } from 'expo-router';
import { useEffect } from 'react';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { getThemeColors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';
import { setupPrayerChannel } from '../Notifications/prayer';

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  const { selectedLanguage } = useLanguage();
  useEffect(() => {
    async function setup() {
      // await initNotifications();
      await setupPrayerChannel();
    }
    setup();
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: c.background }}
      edges={['top']}
    >
      <Tabs
        screenOptions={{
          tabBarActiveBackgroundColor: c.accentMuted,

          tabBarStyle: {
            borderRadius: 12,
            marginHorizontal: 4,
            position: 'relative',
            bottom: 0,
            direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
            paddingBottom: insets.bottom,
            height: 60 + insets.bottom,
            backgroundColor: c.background,
            borderTopWidth: 1,
            borderTopColor: c.border,
          },
          tabBarActiveTintColor: c.accent,
          tabBarInactiveTintColor: c.quaternary,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },
          headerShown: false,
        }}
      >
        {/* Home */}
        <Tabs.Screen
          name={'home'}
          options={{
            title: translatedText?.navbar?.routes?.home,
            tabBarIcon: ({ color, size }) => (
              <Feather name={'home'} size={size - 4} color={color} />
            ),
          }}
        />

        {/* Quran */}
        <Tabs.Screen
          name="quran"
          options={{
            title: translatedText?.navbar?.routes?.quran,
            tabBarIcon: ({ color, size }) => (
              <Feather name="book-open" size={size - 4} color={color} />
            ),
          }}
        />

        {/* Hidden: Athkar */}
        <Tabs.Screen
          name="athkar"
          options={{ href: null, headerShown: false }}
        />
        <Tabs.Screen
          name="athan"
          options={{
            title: translatedText?.navbar?.routes?.athkar,

            href: null,
            headerShown: false,
          }}
        />

        {/* Prayer */}
        <Tabs.Screen
          name="prayer"
          options={{
            title: translatedText?.navbar?.routes?.prayers,
            tabBarIcon: ({ color, size }) => (
              <Feather name="sun" size={size - 4} color={color} />
            ),
          }}
        />

        {/* AI */}
        <Tabs.Screen
          name="ai"
          options={{
            title: translatedText?.navbar?.routes?.aiAssistant,

            tabBarIcon: ({ color, size }) => (
              <Feather name="zap" size={size - 4} color={color} />
            ),
          }}
        />

        {/* Qibla */}
        <Tabs.Screen
          name="qibla"
          options={{
            href: null,
            title: translatedText?.qiblaApp?.compass,
            tabBarIcon: ({ color, size }) => (
              <Feather name="compass" size={size - 4} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="hadith"
          options={{
            // href: null,
            title: translatedText?.hadith?.header?.hadithLabel,
            tabBarIcon: ({ color, size }) => (
              <Feather name="compass" size={size - 4} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={'learn'}
          options={{
            href: null,
            title: translatedText?.navbar?.routes?.learn,
            tabBarIcon: ({ color, size }) => (
              <Feather name="book-open" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name={'compare'}
          options={{
            href: null,
            title: translatedText?.compareRelg?.staticText?.navbar,
            tabBarIcon: ({ color, size }) => (
              <Feather name="git-compare" size={size} color={color} />
            ),
          }}
        />
        {/* Settings */}
        <Tabs.Screen
          name="settings"
          options={{
            title: '',
            tabBarIcon: ({ color, size }) => (
              <Feather
                className="pt-3 "
                name="sliders"
                size={size - 4}
                color={'#b8860b'}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
