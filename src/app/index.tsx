import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Image, StatusBar, Text, View } from 'react-native';
import { Colors, ThemeMode } from '../constants/theme';
import useStaticText from '../hooks/useStaticText';

// ─── Theme Setup ───────────────────────────────────────────────────

const THEME: ThemeMode = 'dark';
const C = Colors[THEME];

// ─── Loading Dots Component ────────────────────────────────────────
export async function shouldShowAthanScreen(): Promise<object | null> {
  const allNotificationsDetails = await AsyncStorage.getItem(
    'prayerNotificationsDetails',
  );
  // ).then(async (res) => );
  const prased = await JSON.parse(allNotificationsDetails);
  const foundItem = prased.find((item: object) => {
    const [h, m] = item.time.split(':');

    const currentDate = Date.now();
    const toDate = new Date(item.date);
    toDate.setHours(Number(h), Number(m), 0, 0);
    const notTo = toDate.getTime();
    if (currentDate > notTo) {
      const howLongMin = (currentDate - notTo) / (1000 * 60);
      if (howLongMin < 2) {
        console.warn('show athan screen');
        console.log(item);
        return item;
      }
    }
  });
  return foundItem;
}
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

  useEffect(() => {
    async function se() {}
    se();
  }, []);
  async function checkApp() {
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2800));

      const firstLaunch = await AsyncStorage.getItem('first_time');

      if (Boolean(firstLaunch)) {
        router.replace('/location');
      } else {
        router.replace('/(tabs)/home');
      }
    } catch (err) {
      console.log(err);
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
            className="text-[42px] font-black tracking-tight text-center"
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
            className="text-[13px] font-bold tracking-[3px]"
            style={{ color: C.accent }}
          >
            {translatedText?.navbar?.routes?.learn}
          </Text>
          <View
            className="w-[5px] h-[5px] rotate-45 mx-3"
            style={{ backgroundColor: C.quaternary, opacity: 0.5 }}
          />
          <Text
            className="text-[13px] font-bold tracking-[3px]"
            style={{ color: C.accent }}
          >
            {translatedText?.splash?.practice}
          </Text>
          <View
            className="w-[5px] h-[5px] rotate-45 mx-3"
            style={{ backgroundColor: C.quaternary, opacity: 0.5 }}
          />
          <Text
            className="text-[13px] font-bold tracking-[3px]"
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

        {/* Bismillah */}
        {/* <Text
          className="text-[11px] tracking-[5px] text-center font-semibold"
          style={{ color: C.accent }}
        >
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </Text> */}

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
