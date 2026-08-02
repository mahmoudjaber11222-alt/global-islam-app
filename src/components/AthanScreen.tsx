// screens/AthanScreen.tsx (Updated to use cached reciter)
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  BackHandler,
  Dimensions,
  Easing,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  AdhanReciter,
  getSelectedReciter,
} from '../app/(tabs)/settings/AdhanReciterSelector';
import useStaticText from '../hooks/useStaticText';

const { width, height } = Dimensions.get('window');

const COLORS = {
  bgPrimary: '#050505',
  accent: '#d4a843',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255, 255, 255, 0.85)',
  textMuted: 'rgba(255, 255, 255, 0.55)',
  stopBg: '#b91c1c',
  stopBgHover: '#991b1b',
  stopShadow: 'rgba(185, 28, 28, 0.4)',
};

interface AthanScreenProps {
  prayerNameArabic: string;
  prayerNameEnglish: string;
  filePath: string;
  prayerTime: string;
  location: string;
  onCancel: () => void;
  reciterId: string;
  onComplete?: () => void;
}

export default function AthanScreen({
  filePath,
  prayerNameArabic,
  prayerNameEnglish,
  prayerTime,
  location,
  reciterId,
  onCancel,
  onComplete,
}: AthanScreenProps) {
  const insets = useSafeAreaInsets();
  const { translatedText } = useStaticText();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reciter, setReciter] = useState<AdhanReciter | null>(null);
  const [isPressed, setIsPressed] = useState(false);

  const pulseAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideUpAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;
  const glowAnim = useRef(new Animated.Value(0)).current;

  // Load cached reciter and audio
  useEffect(() => {
    const loadReciterAndAudio = async () => {
      const savedReciter = await getSelectedReciter();

      if (savedReciter) {
        setReciter(savedReciter);
        await loadAudio(savedReciter.id);
      } else {
        // Fallback to default Mecca adhan
        setReciter({
          id: 'adhan-mecca',
          name: 'Adhan Mecca',
          nameArabic: 'أذان مكة',
          description: 'From Masjid Al-Haram',
          country: 'Saudi Arabia',
          muezzin: 'Sheikh Ali Ahmed Mulla',
          isFajr: false,
          tags: ['saudi', 'makkah'],
          downloadUrl: 'https://praytimes.org/audio/adhan/adhan-mecca.mp3',
          duration: '0',
          city: '',
          mosque: '',
        });
        await loadAudio();
      }
    };

    loadReciterAndAudio();
  }, []);

  const loadAudio = async () => {
    setIsLoading(true);
    try {
      const filePath = await AsyncStorage.getItem(reciterId);
      console.log('file path is: ', filePath);
      // const audioSource = await getAudioSource(reciterId);

      if (!filePath) {
        throw new Error('No audio source found');
      }

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });
      const { sound: audioSound } = await Audio.Sound.createAsync(
        { uri: filePath },
        { shouldPlay: true, volume: 1.0 },
        (status) => {
          if (status.isLoaded) {
            setIsPlaying(status.isPlaying);
            if (status.didJustFinish) {
              setIsPlaying(false);
              onComplete?.();
            }
          }
        },
      );

      setSound(audioSound);
      setIsPlaying(true);
    } catch (err) {
      console.error('Error loading athan:', err);
      setError(translatedText?.athan?.error);
    } finally {
      setIsLoading(false);
    }
  };

  // Animations
  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideUpAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1800,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    pulse.start();
    return () => pulse.stop();
  }, [isPlaying]);

  useEffect(() => {
    const glow = Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 3000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );
    glow.start();
    return () => glow.stop();
  }, []);

  // Back handler
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        handleCancel();
        return true;
      },
    );
    return () => backHandler.remove();
  }, [sound]);

  const handleCancel = useCallback(async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    setIsPlaying(false);
    onCancel();
  }, [sound, onCancel]);

  const handleTogglePlay = useCallback(async () => {
    if (!sound || isLoading) return;
    if (isPlaying) {
      await sound.pauseAsync();
      setIsPlaying(false);
    } else {
      await sound.playAsync();
      setIsPlaying(true);
    }
  }, [sound, isPlaying, isLoading]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: COLORS.bgPrimary, paddingTop: insets.top },
      ]}
    >
      <StatusBar barStyle="light-content" />

      {/* Ambient Background */}
      <View style={styles.ambientContainer}>
        <Animated.View
          style={[
            styles.ambientGlow,
            {
              opacity: glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.3, 0.6],
              }),
            },
          ]}
        />
      </View>

      {/* Stars */}
      <View style={styles.starsContainer}>
        {[...Array(20)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.star,
              {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              },
            ]}
          />
        ))}
      </View>

      {/* Back Button */}
      <Animated.View
        style={[styles.topBar, { top: insets.top + 12, opacity: fadeAnim }]}
      >
        <TouchableOpacity
          onPress={handleCancel}
          activeOpacity={0.7}
          style={styles.backButton}
        >
          <View style={styles.backButtonInner}>
            <Ionicons
              name="chevron-back"
              size={24}
              color={COLORS.textSecondary}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>

      {/* Main Content */}
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideUpAnim }, { scale: scaleAnim }],
          },
        ]}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <View style={styles.headerLine} />
          <Text style={[styles.headerText, { color: COLORS.accent }]}>
            {translatedText?.athan?.mainTitle}
          </Text>
          <View style={styles.headerLine} />
        </View>

        <View style={{ height: height * 0.06 }} />

        {/* Arabic Name */}
        <Text style={[styles.arabicName, { color: COLORS.accent }]}>
          {prayerNameArabic}
        </Text>
        <Text style={styles.englishName}>{prayerNameEnglish}</Text>

        {/* Time & Location */}
        <View style={styles.timeLocationContainer}>
          <Ionicons name="time-outline" size={14} color={COLORS.textMuted} />
          <Text style={styles.timeLocationText}>{prayerTime}</Text>
          <Text style={styles.dotSeparator}>·</Text>
          <Ionicons
            name="location-outline"
            size={14}
            color={COLORS.textMuted}
          />
          <Text style={styles.timeLocationText}>{location}</Text>
        </View>

        <View style={{ height: height * 0.05 }} />

        {/* Sound Button */}
        <View style={styles.visualizerContainer}>
          <TouchableOpacity
            onPress={handleTogglePlay}
            activeOpacity={0.85}
            disabled={isLoading}
            style={styles.mainButtonTouchable}
          >
            <Animated.View
              style={[
                styles.mainButton,
                {
                  transform: [{ scale: pulseAnim }],
                  backgroundColor: isLoading
                    ? 'rgba(212,168,67,0.15)'
                    : isPlaying
                      ? 'rgba(212,168,67,0.2)'
                      : 'rgba(212,168,67,0.15)',
                  borderColor: isPlaying
                    ? 'rgba(212,168,67,0.5)'
                    : 'rgba(212,168,67,0.25)',
                },
              ]}
            >
              <View
                style={[
                  styles.innerGlow,
                  { backgroundColor: 'rgba(212,168,67,0.08)' },
                ]}
              />
              {isLoading ? (
                <ActivityIndicator size="large" color={COLORS.accent} />
              ) : (
                <Ionicons
                  name={isPlaying ? 'volume-high' : 'volume-mute'}
                  size={36}
                  color={COLORS.accent}
                />
              )}
            </Animated.View>
          </TouchableOpacity>
        </View>

        {/* Reciter Info */}
        {reciter && (
          <View style={styles.reciterInfo}>
            <Text style={styles.reciterLabel}>
              {translatedText?.settingsApp?.muezzin}
            </Text>
            <Text style={styles.reciterName}>{reciter.name}</Text>
            {reciter.muezzin && (
              <Text style={styles.muezzinName}>{reciter.muezzin}</Text>
            )}
          </View>
        )}

        <View style={{ height: height * 0.04 }} />

        {/* Error */}
        {error && (
          <View style={styles.errorContainer}>
            <Ionicons name="alert-circle" size={16} color="#ef4444" />
            <Text style={styles.errorText}>{error}</Text>
          </View>
        )}

        {/* Stop Button */}
        <TouchableOpacity
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          onPress={handleCancel}
          activeOpacity={0.8}
          style={styles.stopButtonContainer}
        >
          <Animated.View
            style={[
              styles.stopButton,
              {
                backgroundColor: isPressed ? COLORS.stopBgHover : COLORS.stopBg,
                transform: [{ scale: isPressed ? 0.96 : 1 }],
                shadowOpacity: isPressed ? 0.2 : 0.4,
              },
            ]}
          >
            <View style={styles.stopIconContainer}>
              <Ionicons name="stop" size={18} color="#fff" />
            </View>
            <Text style={styles.stopButtonText}>
              {translatedText?.athan?.stop}
            </Text>
          </Animated.View>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, position: 'relative' },
  ambientContainer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  ambientGlow: {
    position: 'absolute',
    top: -height * 0.3,
    left: -width * 0.2,
    right: -width * 0.2,
    height: height * 0.8,
    backgroundColor: COLORS.accent,
    borderRadius: width,
    opacity: 0.3,
    transform: [{ scaleX: 1.5 }],
  },
  starsContainer: { ...StyleSheet.absoluteFillObject, overflow: 'hidden' },
  star: { position: 'absolute', backgroundColor: '#fff', borderRadius: 100 },
  topBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 10,
    paddingHorizontal: 20,
  },
  backButton: { alignSelf: 'flex-start' },
  backButtonInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  headerContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  headerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(212,168,67,0.2)',
    maxWidth: 40,
  },
  headerText: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 3.5,
    textTransform: 'uppercase',
  },
  arabicName: {
    fontSize: 52,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(212,168,67,0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 20,
  },
  englishName: {
    fontSize: 24,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  timeLocationText: {
    fontSize: 14,
    color: COLORS.textMuted,
    fontWeight: '400',
    letterSpacing: 0.3,
  },
  dotSeparator: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.35)',
    marginHorizontal: 4,
  },
  visualizerContainer: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainButtonTouchable: { zIndex: 10 },
  mainButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    position: 'relative',
    overflow: 'hidden',
  },
  innerGlow: { ...StyleSheet.absoluteFillObject, borderRadius: 60 },
  reciterInfo: { alignItems: 'center', marginTop: 16 },
  reciterLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: 'rgba(212,168,67,0.6)',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  reciterName: { fontSize: 16, color: COLORS.textSecondary, fontWeight: '500' },
  muezzinName: { fontSize: 13, color: COLORS.textMuted, marginTop: 2 },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(239,68,68,0.1)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 6,
    marginBottom: 16,
  },
  errorText: { fontSize: 13, color: '#ef4444', fontWeight: '500' },
  stopButtonContainer: { width: '100%', maxWidth: 280, alignItems: 'center' },
  stopButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 28,
    gap: 10,
    width: '100%',
    shadowColor: COLORS.stopShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 8,
  },
  stopIconContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
