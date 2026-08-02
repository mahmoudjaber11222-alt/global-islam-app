import Logo from '@/assets/images/logo.png';
import { router } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useLocation from '../hooks/useLocation';
import { Colors, ThemeMode } from '../constants/theme';

// ─── Types ─────────────────────────────────────────────────────────

interface DailyVerse {
  arabic: string;
  translation: string;
  reference: string;
}

interface SplashData {
  appName: string;
  tagline: string;
  greeting: string;
  currentDate: string;
  hijriDate: string;
  dailyVerse: DailyVerse;
}

// ─── Mock Data ─────────────────────────────────────────────────────

const MOCK_DATA: SplashData = {
  appName: 'MyIslamic',
  tagline: 'Your Daily Companion in Faith',
  greeting: 'Assalamu Alaikum',
  currentDate: new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
  hijriDate: '4 Muharram 1448 AH',
  dailyVerse: {
    arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
    translation: 'In the name of Allah, the Most Gracious, the Most Merciful',
    reference: 'Quran 1:1',
  },
};

// ─── Constants ─────────────────────────────────────────────────────

const THEME: ThemeMode = 'dark'; // Toggle to 'light' to test
const C = Colors[THEME];

const ANIMATION_DURATION = 1200;
const STAGGER_DELAY = 200;
const LOADING_DURATION = 6000;

// ─── Component ─────────────────────────────────────────────────────

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const { result } = useLocation();

  // Animation values
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(30)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const glowAnim = useRef(new Animated.Value(0.5)).current;
  const verseSlideAnim = useRef(new Animated.Value(40)).current;
  const bottomFadeAnim = useRef(new Animated.Value(0)).current;
  const buttonScaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Entrance animation sequence
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: ANIMATION_DURATION,
        useNativeDriver: true,
        easing: Easing.out(Easing.cubic),
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: ANIMATION_DURATION * 1.2,
        useNativeDriver: true,
        easing: Easing.out(Easing.back(1.5)),
      }),
    ]).start();

    // Staggered verse card entrance
    Animated.timing(verseSlideAnim, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      delay: STAGGER_DELAY * 2,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic),
    }).start();

    // Bottom section fade in
    Animated.timing(bottomFadeAnim, {
      toValue: 1,
      duration: 800,
      delay: STAGGER_DELAY * 3,
      useNativeDriver: true,
    }).start();

    // Pulsing glow for logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
        Animated.timing(glowAnim, {
          toValue: 0.5,
          duration: 2000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),
      ]),
    ).start();

    // Simulate app initialization
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Small delay before showing button to allow fade transition
      setTimeout(() => setIsReady(true), 100);
    }, LOADING_DURATION);

    return () => clearTimeout(timer);
  }, []);

  const handlePressIn = () => {
    Animated.spring(buttonScaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 8,
    }).start();
  };

  const handleEnterApp = () => {
    if (result) {
      router.push('/(tabs)/home');
    } else {
      router.replace('/location');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={C.background} />

      {/* Subtle background layers for depth */}
      <View style={styles.backgroundLayer} />
      <View style={styles.accentGlow} />

      {/* Top Section - Greeting & Date */}
      <Animated.View
        style={[
          styles.topSection,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideUpAnim }],
          },
        ]}
      >
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>{MOCK_DATA.greeting}</Text>
          <View style={styles.divider} />
        </View>

        <Text style={styles.datePrimary}>{MOCK_DATA.currentDate}</Text>
        <View style={styles.hijriBadge}>
          <View style={styles.hijriDot} />
          <Text style={styles.hijriDate}>{MOCK_DATA.hijriDate}</Text>
        </View>
      </Animated.View>

      {/* Center Section - Logo, Brand & Verse */}
      <View style={styles.centerSection}>
        {/* Logo with animated glow ring */}
        <Animated.View
          style={[
            styles.logoOuterRing,
            { opacity: glowAnim, transform: [{ scale: scaleAnim }] },
          ]}
        >
          <View style={styles.logoInnerRing}>
            <Image
              source={{ uri: Logo.uri }}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
        </Animated.View>

        {/* Brand Typography */}
        <Animated.View
          style={[
            styles.brandContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideUpAnim }],
            },
          ]}
        >
          <Text style={styles.appName}>{MOCK_DATA.appName}</Text>
          <Text style={styles.tagline}>{MOCK_DATA.tagline}</Text>
        </Animated.View>

        {/* Daily Verse Card */}
        <Animated.View
          style={[
            styles.verseCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: verseSlideAnim }],
            },
          ]}
        >
          {/* Decorative top accent line */}
          <View style={styles.verseAccentLine} />

          <Text style={styles.verseArabic}>{MOCK_DATA.dailyVerse.arabic}</Text>

          <View style={styles.verseDivider}>
            <View style={styles.verseDividerLine} />
            <View style={styles.verseDividerDiamond} />
            <View style={styles.verseDividerLine} />
          </View>

          <Text style={styles.verseTranslation}>
            {MOCK_DATA.dailyVerse.translation}
          </Text>

          <View style={styles.referenceBadge}>
            <Text style={styles.verseReference}>
              {MOCK_DATA.dailyVerse.reference}
            </Text>
          </View>
        </Animated.View>
      </View>

      {/* Bottom Section - Loading / CTA */}
      <Animated.View
        style={[styles.bottomSection, { opacity: bottomFadeAnim }]}
      >
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={C.accent} />
            <View style={styles.loadingTextContainer}>
              <Text style={styles.loadingText}>Preparing your experience</Text>
              <AnimatedEllipsis />
            </View>
            {/* Progress bar */}
            <View style={styles.progressBarContainer}>
              <AnimatedProgressBar duration={LOADING_DURATION} />
            </View>
          </View>
        ) : (
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                opacity: isReady ? 1 : 0,
                transform: [{ scale: buttonScaleAnim }],
              },
            ]}
          >
            <Pressable
              onPress={handleEnterApp}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              style={({ pressed }) => [
                styles.enterButton,
                pressed && styles.enterButtonPressed,
              ]}
            >
              <Text style={styles.enterButtonText}>Enter App</Text>
              <View style={styles.enterButtonIcon}>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
            </Pressable>
          </Animated.View>
        )}

        <Text style={styles.versionText}>Version 1.0.0</Text>
      </Animated.View>
    </View>
  );
}

// ─── Animated Sub-Components ───────────────────────────────────────

function AnimatedEllipsis() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <Text style={styles.ellipsis}>{dots}</Text>;
}

function AnimatedProgressBar({ duration }: { duration: number }) {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false,
      easing: Easing.inOut(Easing.cubic),
    }).start();
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressTrack}>
      <Animated.View style={[styles.progressFill, { width }]} />
    </View>
  );
}

// ─── Styles ────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  // Background depth layers
  backgroundLayer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: C.surface4,
    opacity: 0.4,
  },
  accentGlow: {
    position: 'absolute',
    top: '15%',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: C.accentMuted,
    opacity: 0.3,
    transform: [{ scale: 1.5 }],
  },
  // Top Section
  topSection: {
    position: 'absolute',
    top: 64,
    alignItems: 'center',
    width: '100%',
  },
  greetingContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '600',
    color: C.primary,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: C.accent,
    marginTop: 12,
    borderRadius: 1,
  },
  datePrimary: {
    fontSize: 14,
    color: C.secondary,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  hijriBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: C.surface3,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: C.border3,
  },
  hijriDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: C.accent,
    marginRight: 8,
  },
  hijriDate: {
    fontSize: 12,
    color: C.accent,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  // Center Section
  centerSection: {
    alignItems: 'center',
    width: '100%',
    marginTop: -20,
  },
  // Logo
  logoOuterRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: C.accentMuted,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 28,
    borderWidth: 1,
    borderColor: C.border3,
  },
  logoInnerRing: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: C.surface,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: C.border2,
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  logoImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  // Brand
  brandContainer: {
    alignItems: 'center',
  },
  appName: {
    fontSize: 36,
    fontWeight: '800',
    color: C.primary,
    letterSpacing: -0.5,
  },
  tagline: {
    fontSize: 15,
    color: C.tertiary,
    marginTop: 8,
    fontWeight: '400',
    letterSpacing: 0.4,
  },
  // Verse Card
  verseCard: {
    marginTop: 32,
    backgroundColor: C.surface,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 360,
    borderWidth: 1,
    borderColor: C.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 10,
    alignItems: 'center',
  },
  verseAccentLine: {
    width: 48,
    height: 3,
    backgroundColor: C.accent,
    borderRadius: 2,
    marginBottom: 20,
    opacity: 0.8,
  },
  verseArabic: {
    fontSize: 24,
    color: C.primary,
    textAlign: 'center',
    lineHeight: 40,
    fontWeight: '500',
    // Use a proper Arabic font if available in your project
    fontFamily: 'System',
  },
  verseDivider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
    width: '60%',
  },
  verseDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: C.border,
  },
  verseDividerDiamond: {
    width: 6,
    height: 6,
    backgroundColor: C.accent,
    transform: [{ rotate: '45deg' }],
    marginHorizontal: 12,
    opacity: 0.6,
  },
  verseTranslation: {
    fontSize: 14,
    color: C.secondary,
    textAlign: 'center',
    lineHeight: 22,
    fontStyle: 'italic',
    fontWeight: '400',
  },
  referenceBadge: {
    marginTop: 16,
    backgroundColor: C.surface3,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.border3,
  },
  verseReference: {
    fontSize: 12,
    color: C.accent,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  // Bottom Section
  bottomSection: {
    position: 'absolute',
    bottom: 40,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 24,
  },
  loadingContainer: {
    alignItems: 'center',
    width: '100%',
  },
  loadingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 14,
    color: C.tertiary,
    fontWeight: '500',
  },
  ellipsis: {
    fontSize: 14,
    color: C.tertiary,
    fontWeight: '500',
    width: 20,
  },
  progressBarContainer: {
    width: '70%',
    maxWidth: 240,
  },
  progressTrack: {
    height: 3,
    backgroundColor: C.surface2,
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: C.accent,
    borderRadius: 2,
    opacity: 0.9,
  },
  // Button
  buttonContainer: {
    width: '100%',
    maxWidth: 360,
  },
  enterButton: {
    backgroundColor: C.accent,
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: C.accent,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  enterButtonPressed: {
    backgroundColor: '#c49a45', // Slightly darker gold
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  enterButtonText: {
    color: C.background,
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  enterButtonIcon: {
    marginLeft: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(12,12,14,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    color: C.background,
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 1,
  },
  versionText: {
    fontSize: 11,
    color: C.quinary,
    marginTop: 20,
    letterSpacing: 0.5,
    fontWeight: '500',
  },
});
