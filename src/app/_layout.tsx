import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// import { KeyboardProvider } from 'react-native-keyboard-controller';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import '../../global.css';
import { LanguageContext } from '../context/LanguageContext';
import { LocationProvider } from '../context/LocationProvider';
import { NextPrayerProvider } from '../context/NextPrayerProvider';
import { PrayerProvider } from '../context/PrayerProvider';
import { PreciseLocation } from '../context/PreciseLocation';
import { QiblaProvider } from '../context/QiblaProvider';
import { SettingsProvider } from '../context/SettingsProvider';
import { StaticTextContext } from '../context/StaticTextContext';
import { ThemeProvider } from '../context/ThemeProvider';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    quran_font: require('@/assets/Static Data/Fonts/quranic/quran.ttf'),
  });
  //   useEffect(() => {
  //     NavigationBar.setVisibilityAsync('hidden');
  //     NavigationBar.setBehaviorAsync('overlay-swipe');
  //   }, []);
  // useEffect(() => {
  //   scheduleTestNotification();
  // }, []);

  return (
    <>
      <StatusBar hidden />
      <PaperProvider>
        <LanguageContext>
          <StaticTextContext>
            <QiblaProvider>
              <SettingsProvider>
                <LocationProvider>
                  <PreciseLocation>
                    <PrayerProvider>
                      <NextPrayerProvider>
                        <ThemeProvider>
                          <Stack screenOptions={{ headerShown: false }}>
                            <Stack.Screen name="splash" />
                            <Stack.Screen name="location" />
                            <Stack.Screen name="(tabs)" />
                            <Stack.Screen
                              name="athan"
                              options={{
                                presentation: 'fullScreenModal',
                                animation: 'slide_from_bottom',
                                headerShown: false,
                              }}
                            />
                          </Stack>
                          <Toast />
                        </ThemeProvider>
                      </NextPrayerProvider>
                    </PrayerProvider>
                  </PreciseLocation>
                </LocationProvider>
              </SettingsProvider>
            </QiblaProvider>
          </StaticTextContext>
        </LanguageContext>
      </PaperProvider>
    </>
  );
}
