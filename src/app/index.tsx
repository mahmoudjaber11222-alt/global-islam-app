import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, StatusBar, Text, View } from 'react-native';
import { Colors, ThemeMode } from '../constants/theme';
import useLanguage from '../hooks/useLanguage';
import useStaticText from '../hooks/useStaticText';
import {
  getSelectedReciter,
  setSelectedReciter,
} from './(tabs)/settings/AdhanReciterSelector';

// ─── Theme Setup ───────────────────────────────────────────────────

const THEME: ThemeMode = 'dark';
const C = Colors[THEME];

// ─── Types ─────────────────────────────────────────────────────────

interface PrayerNotification {
  id: string;
  date: string; // e.g. "2026-08-13" or ISO
  time: string; // "HH:mm"
  name: string;
  shown?: boolean;
}

export interface AthanPayload {
  id: string;
  name: string;
  time: string;
  date: string;
}

// ─── Helpers ───────────────────────────────────────────────────────

function parsePrayerDateTime(dateStr: string, timeStr: string): Date | null {
  const [h, m] = timeStr.split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;

  // Parse YYYY-MM-DD as LOCAL to avoid timezone midnight shifts
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (match) {
    const [, y, mo, d] = match;
    return new Date(Number(y), Number(mo) - 1, Number(d), h, m, 0, 0);
  }

  // Fallback for full ISO strings
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return null;
  d.setHours(h, m, 0, 0);
  return d;
}

/**
 * Returns the prayer that should currently show its Athan screen,
 * or `null` if none falls inside the 2-minute post-prayer window.
 * Automatically marks the returned item as `shown` so it triggers once.
 */
export async function shouldShowAthanScreen(): Promise<AthanPayload | null> {
  try {
    const raw = await AsyncStorage.getItem('prayerNotificationsDetails');

    if (!raw) return null;

    const notifications: PrayerNotification[] = JSON.parse(raw);
    if (!Array.isArray(notifications) || notifications.length === 0)
      return null;

    const now = Date.now();
    const ATHAN_WINDOW_MS = 2 * 60 * 1000; // 2 minutes

    const matchIndex = notifications?.findIndex((item) => {
      if (!item || item.shown || !item.date || !item.time) return false;

      const prayerDate = parsePrayerDateTime(item.date, item.time);
      if (!prayerDate) return false;

      const elapsed = now - prayerDate?.getTime();
      return elapsed >= 0 && elapsed < ATHAN_WINDOW_MS;
    });

    if (matchIndex === -1) return null;

    const match = notifications[matchIndex];

    // Mark as shown so it doesn't fire again on next app open
    const updated = [...notifications];
    updated[matchIndex] = { ...match, shown: true };
    await AsyncStorage.setItem(
      'prayerNotificationsDetails',
      JSON.stringify(updated),
    );

    return {
      id: match.id,
      name: match.name,
      time: match.time,
      date: match.date,
    };
  } catch (error) {
    console.error('[shouldShowAthanScreen] Error:', error);
    return null;
  }
}

// ─── Loading Dots Component ────────────────────────────────────────

function LoadingDots() {
  const animations = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    const createAnim = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(anim, {
            toValue: 1,
            duration: 400,
            delay,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.cubic),
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.cubic),
          }),
        ]),
      );

    animations.forEach((anim, i) => createAnim(anim, i * 120).start());
  }, []);

  return (
    <View className="flex-row items-center mt-6">
      {animations.map((anim, i) => (
        <Animated.View
          key={i}
          className="w-1.5 h-1.5 rounded-full mx-[3px]"
          style={{
            backgroundColor: C.accent,
            opacity: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [0.25, 1],
            }),
            transform: [
              {
                scale: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 1.4],
                }),
              },
            ],
          }}
        />
      ))}
    </View>
  );
}

// ─── Main Component ────────────────────────────────────────────────

export default function Splash() {
  const [loading, setLoading] = useState(true);
  const { translatedText } = useStaticText();
  const { handleLanguage } = useLanguage();
  // Animation values
  const glowAnim = useRef(new Animated.Value(0.25)).current;
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const titleY = useRef(new Animated.Value(24)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const subtitleY = useRef(new Animated.Value(20)).current;
  const subtitleOpacity = useRef(new Animated.Value(0)).current;
  const bottomOpacity = useRef(new Animated.Value(0)).current;
  const lineWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Entrance sequence
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.6)),
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(titleY, {
        toValue: 0,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(titleOpacity, {
        toValue: 1,
        duration: 800,
        delay: 300,
        useNativeDriver: true,
      }),
      Animated.timing(subtitleY, {
        toValue: 0,
        duration: 800,
        delay: 500,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(subtitleOpacity, {
        toValue: 1,
        duration: 800,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(bottomOpacity, {
        toValue: 1,
        duration: 700,
        delay: 900,
        useNativeDriver: true,
      }),
      Animated.timing(lineWidth, {
        toValue: 1,
        duration: 900,
        delay: 1100,
        useNativeDriver: false,
      }),
    ]).start();

    // Ambient glow pulse
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 0.55,
          duration: 2500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(glowAnim, {
          toValue: 0.25,
          duration: 2500,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
      ]),
    ).start();

    checkApp();
  }, []);

  async function checkApp() {
    try {
      setLoading(true);
      const isReciterSelected = await getSelectedReciter();
      if (!isReciterSelected) {
        await setSelectedReciter({
          id: 'abdul-basit',
          name: 'Abdul Basit',
          nameArabic: 'عبد الباسط',
          description: 'Legendary Egyptian Qari, one of the most famous voices',
          country: 'Egypt',
          city: 'Cairo',
          mosque: 'Masjid Imam Al-Hussain',
          isFajr: false,
          duration: '~4:52',
          tags: ['classic', 'egypt', 'famous'],
          downloadUrl:
            'https://raw.githubusercontent.com/Kiwifu/adhan-mp3/main/Abdulbasit_Abdusamad_1_-_Egypt_%28%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%D8%B7_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%B5%D9%85%D8%AF_-_%D9%85%D8%B5%D8%B1%29.mp3',
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const firstLaunch = await AsyncStorage.getItem('first_time');

      if (!firstLaunch) {
        // First time: set the flag and go home (or change to '/location' if you have it)
        await AsyncStorage.setItem('first_time', 'true');
        router.replace('/(tabs)/home');
      } else {
        router.replace('/(tabs)/home');
      }
    } catch (err) {
      console.error('Splash checkApp error:', err);
      router.replace('/(tabs)/home');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View
      className="flex-1 items-center justify-center px-6 relative"
      style={{ backgroundColor: C.background }}
    >
      <StatusBar barStyle="light-content" backgroundColor={C.background} />

      {/* ── Background Layers ── */}

      {/* Large ambient gold glow */}
      <Animated.View
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          backgroundColor: C.accentMuted,
          opacity: glowAnim,
          top: '18%',
        }}
      />

      {/* Subtle inner glow */}
      <View
        className="absolute w-[320px] h-[320px] rounded-full opacity-20"
        style={{ backgroundColor: C.surface3, top: '22%' }}
      />

      {/* ── Center Content ── */}

      <View className="items-center justify-center z-10">
        {/* Logo with nested rings */}
        <Animated.View
          className="w-[152px] h-[152px] rounded-full items-center justify-center mb-10 border"
          style={{
            transform: [{ scale: logoScale }],
            opacity: logoOpacity,
            backgroundColor: C.surface,
            borderColor: C.border3,
            shadowColor: C.accent,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.2,
            shadowRadius: 24,
            elevation: 12,
          }}
        >
          <View
            className="w-[120px] h-[120px] rounded-full items-center justify-center border"
            style={{ backgroundColor: C.surface2, borderColor: C.border }}
          >
            <Image
              source={require('../../assets/images/logo.png')}
              resizeMode="contain"
              className="w-24 h-24"
            />
          </View>
        </Animated.View>

        {/* Title */}
        <Animated.View
          style={{
            transform: [{ translateY: titleY }],
            opacity: titleOpacity,
          }}
        >
          <Text
            className="text-[42px] font-black tracking-tight text-center capitalize"
            style={{ color: C.primary }}
          >
            {translatedText?.splash?.logo}
          </Text>
        </Animated.View>

        {/* Subtitle with diamond separators */}
        <Animated.View
          className="flex-row items-center mt-3"
          style={{
            transform: [{ translateY: subtitleY }],
            opacity: subtitleOpacity,
          }}
        >
          <Text
            className="text-[13px] font-bold tracking-[3px] capitalize"
            style={{ color: C.accent }}
          >
            {translatedText?.navbar?.routes?.learn}
          </Text>
          <View
            className="w-[5px] h-[5px] rotate-45 mx-3"
            style={{ backgroundColor: C.quaternary, opacity: 0.5 }}
          />
          <Text
            className="text-[13px] font-bold tracking-[3px] capitalize"
            style={{ color: C.accent }}
          >
            {translatedText?.splash?.practice}
          </Text>
          <View
            className="w-[5px] h-[5px] rotate-45 mx-3 capitalize"
            style={{ backgroundColor: C.quaternary, opacity: 0.5 }}
          />
          <Text
            className="text-[13px] font-bold tracking-[3px] capitalize"
            style={{ color: C.accent }}
          >
            {translatedText?.splash?.share}
          </Text>
        </Animated.View>
      </View>

      {/* ── Bottom Section ── */}

      <Animated.View
        className="absolute bottom-16 items-center w-full px-6"
        style={{ opacity: bottomOpacity }}
      >
        {/* Animated gold divider line */}
        <Animated.View
          className="h-[1.5px] mb-6 rounded-full"
          style={{
            width: lineWidth.interpolate({
              inputRange: [0, 1],
              outputRange: ['0%', '35%'],
            }),
            backgroundColor: C.accent,
            opacity: 0.6,
          }}
        />

        {/* Animated loading dots */}
        {loading && <LoadingDots />}

        {/* Version */}
        <Text
          className="text-[10px] mt-5 tracking-[0.2em] font-medium uppercase"
          style={{ color: C.quinary }}
        >
          {translatedText?.splash?.version} 1.0.0
        </Text>
      </Animated.View>
    </View>
  );
}
