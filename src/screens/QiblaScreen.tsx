import { useQibla } from '@/src/context/QiblaProvider';
import { Ionicons } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Pressable,
  SafeAreaView,
  Text,
  Vibration,
  View,
} from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useStaticText from '../hooks/useStaticText';

export default function QiblaScreen() {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  const {
    bearing,
    rotation,
    compassHeading,
    liveUserCoords,
    error,
    loading,
    isCompassActive,
    isTrackingLocation,
    headingAccuracy,
    startLocationTracking,
    stopLocationTracking,
    enableCompassHandler,
    stopCompass,
    clearError,
  } = useQibla();

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const hasInitiated = useRef(false);
  const isAlignedRef = useRef(false);

  // ── Smooth rotation with shortest-path logic ──
  useEffect(() => {
    const currentValue = rotateAnim.__getValue?.() || 0;
    let diff = rotation - (currentValue % 360);
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    const target = currentValue + diff;

    Animated.spring(rotateAnim, {
      toValue: target,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();
  }, [rotation, rotateAnim]);

  // ── Pulse animation when aligned ──
  useEffect(() => {
    const isAligned = rotation < 5 || rotation > 355;
    if (isAligned && !isAlignedRef.current) {
      isAlignedRef.current = true;
      Vibration.vibrate(200);
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.15,
            duration: 600,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 600,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ]),
      ).start();
    } else if (!isAligned) {
      isAlignedRef.current = false;
      pulseAnim.setValue(1);
    }
  }, [rotation, pulseAnim]);

  // ── Start on mount ──
  useEffect(() => {
    if (hasInitiated.current) return;
    hasInitiated.current = true;
    enableCompassHandler();
    startLocationTracking();

    return () => {
      stopLocationTracking();
      stopCompass();
    };
  }, [
    enableCompassHandler,
    startLocationTracking,
    stopLocationTracking,
    stopCompass,
  ]);
  const { translatedText } = useStaticText();
  const spin = rotateAnim.interpolate({
    inputRange: [-10000, 10000],
    outputRange: ['-10000deg', '10000deg'],
  });

  const directionText =
    rotation <= 180
      ? `${rotation.toFixed(1)}° ${translatedText?.homeApp?.toRight}`
      : `${(360 - rotation).toFixed(1)}° ${translatedText?.homeApp?.toLeft}`;

  const isAligned = rotation < 5 || rotation > 355;

  const handleRetry = useCallback(() => {
    clearError();
    enableCompassHandler();
  }, [clearError, enableCompassHandler]);

  // ── Loading state ──
  if (loading && !liveUserCoords) {
    return (
      <SafeAreaView
        className="flex-1 items-center justify-center"
        style={{ backgroundColor: c.background }}
      >
        <ActivityIndicator size="large" color={c.accent} />
        <Text className="text-sm mt-4" style={{ color: c.tertiary }}>
          {translatedText?.home?.qibla?.locationLoading}
        </Text>
      </SafeAreaView>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <SafeAreaView
        className="flex-1 items-center justify-center px-6"
        style={{ backgroundColor: c.background }}
      >
        <Ionicons name="warning-outline" size={48} color={c.error} />
        <Text className="text-sm text-center mt-4" style={{ color: c.error }}>
          {error}
        </Text>
        <Pressable
          onPress={handleRetry}
          className="mt-6 rounded-xl px-6 py-3 active:opacity-70"
          style={{
            backgroundColor: c.surface2,
            borderWidth: 1,
            borderColor: c.border2,
          }}
        >
          <Text className="text-sm font-semibold" style={{ color: c.accent }}>
            {translatedText?.quranApp?.retry}
          </Text>
        </Pressable>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: c.background }}>
      {/* ── Header ── */}
      <View className="px-6 pt-4 pb-2 flex-row items-center justify-between">
        <View>
          <Text className="text-xl font-bold" style={{ color: c.primary }}>
            {translatedText?.qiblaApp?.compass}
          </Text>
          <Text className="text-xs mt-1" style={{ color: c.quaternary }}>
            {liveUserCoords
              ? `${liveUserCoords.latitude.toFixed(4)}, ${liveUserCoords.longitude.toFixed(4)}`
              : translatedText?.ai?.loading?.label}
          </Text>
        </View>
        <View className="items-end">
          <View
            className="px-3 py-1.5 rounded-lg"
            style={{
              backgroundColor: c.surface3,
              borderWidth: 1,
              borderColor: c.border3,
            }}
          >
            <Text className="text-[11px] font-bold" style={{ color: c.accent }}>
              {bearing.toFixed(1)}°
            </Text>
          </View>
          {headingAccuracy && (
            <Text className="text-[9px] mt-1" style={{ color: c.quaternary }}>
              ±{headingAccuracy.toFixed(0)}°{translatedText?.qiblaApp?.accuracy}
            </Text>
          )}
        </View>
      </View>

      {/* ── Compass ── */}
      <View className="flex-1 items-center justify-center">
        <Animated.View
          style={[
            {
              transform: [{ scale: pulseAnim }],
              width: 288,
              height: 288,
              borderRadius: 144,
              backgroundColor: c.surface,
              borderWidth: 2,
              borderColor: c.border,
              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          {/* Cardinal marks */}
          <Text
            className="absolute text-sm font-bold uppercase"
            style={{ top: 16, color: c.accent }}
          >
            {translatedText?.homeApp?.north[0]}
          </Text>
          <Text
            className="uppercase absolute text-sm font-bold"
            style={{ bottom: 16, color: c.tertiary }}
          >
            {translatedText?.homeApp?.south[0]}
          </Text>
          <Text
            className="uppercase absolute text-sm font-bold"
            style={{ left: 20, color: c.tertiary }}
          >
            {translatedText?.homeApp?.west[0]}
          </Text>
          <Text
            className="uppercase absolute text-sm font-bold"
            style={{ right: 20, color: c.tertiary }}
          >
            {translatedText?.homeApp?.east[0]}
          </Text>

          {/* Degree ring ticks */}
          {[...Array(72)].map((_, i) => {
            const isMajor = i % 6 === 0;
            const isMedium = i % 3 === 0;
            return (
              <View
                key={i}
                style={{
                  position: 'absolute',
                  width: isMajor ? 2 : 1,
                  height: isMajor ? 14 : isMedium ? 8 : 4,
                  backgroundColor: isMajor ? c.quaternary : c.border2,
                  transform: [{ rotate: `${i * 5}deg` }],
                  top: '50%',
                  marginTop: -134,
                }}
              />
            );
          })}

          {/* Qibla label on ring */}
          {/* <View
            style={{
              position: 'absolute',
              transform: [{ rotate: `${bearing}deg` }],
              top: '50%',
              marginTop: -148,
            }}
          >
            <View style={{ transform: [{ rotate: `-${bearing}deg` }] }}>
              <Text
                className="text-[9px] font-bold"
                style={{ color: c.accent }}
              >
                QIBLA
              </Text>
            </View>
          </View> */}

          {/* Rotating Arrow */}
          <Animated.View
            style={{
              position: 'absolute',
              alignItems: 'center',
              transform: [{ rotate: spin }],
            }}
          >
            <View
              style={{
                width: 6,
                height: 112,
                backgroundColor: c.accent,
                borderRadius: 3,
              }}
            />
            <View
              style={{
                position: 'absolute',
                top: -4,
                width: 0,
                height: 0,
                backgroundColor: 'transparent',
                borderStyle: 'solid',
                borderLeftWidth: 12,
                borderRightWidth: 12,
                borderBottomWidth: 24,
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: c.accent,
              }}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                width: 12,
                height: 12,
                borderRadius: 6,
                backgroundColor: c.accent,
              }}
            />
          </Animated.View>

          {/* Center hub */}
          <View
            style={{
              position: 'absolute',
              width: 20,
              height: 20,
              borderRadius: 10,
              backgroundColor: c.background,
              borderWidth: 2,
              borderColor: c.accent,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 6,
                height: 6,
                borderRadius: 3,
                backgroundColor: c.accent,
              }}
            />
          </View>

          {/* Alignment ring */}
          {isAligned && (
            <View
              style={{
                position: 'absolute',
                width: 256,
                height: 256,
                borderRadius: 128,
                borderWidth: 2,
                borderColor: c.accent,
                opacity: 0.3,
              }}
            />
          )}
        </Animated.View>

        {/* ── Heading info ── */}
        <View className="mt-8 items-center">
          {isAligned ? (
            <View
              className="flex-row items-center gap-2 px-4 py-2 rounded-full"
              style={{
                backgroundColor: c.surface3,
                borderWidth: 1,
                borderColor: c.accent,
              }}
            >
              <Ionicons name="checkmark-circle" size={16} color={c.accent} />
              <Text className="text-sm font-bold" style={{ color: c.accent }}>
                {translatedText?.qiblaApp?.alignedQibla}
              </Text>
            </View>
          ) : (
            <View className="items-center">
              <Text
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: c.quaternary }}
              >
                {translatedText?.qiblaApp?.turn} {directionText}
              </Text>
              <Text
                className="text-3xl font-light"
                style={{ color: c.secondary }}
              >
                {compassHeading.toFixed(1)}°
              </Text>
              <Text className="text-xs mt-1" style={{ color: c.quaternary }}>
                {translatedText?.qiblaApp?.heading}
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* ── Status bar ── */}
      <View className="px-6 pb-4">
        <View className="flex-row items-center justify-between mb-4">
          {/* <View className="flex-row items-center gap-2">
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: isCompassActive ? c.success : c.error,
              }}
            />
            <Text className="text-xs" style={{ color: c.tertiary }}>
              {isCompassActive
                ? translatedText?.homeApp?.active
                : translatedText?.homeApp?.disabled}
            </Text>
          </View> */}
          <View className="flex-row items-center gap-2">
            <View
              style={{
                width: 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: isTrackingLocation ? c.success : c.error,
              }}
            />
            <Text className="text-xs" style={{ color: c.tertiary }}>
              {isTrackingLocation
                ? translatedText?.qiblaApp?.tracking
                : translatedText?.qibla?.offline}
            </Text>
          </View>
        </View>

        {/* Hint card */}
        <View
          className="rounded-xl p-4 flex-row items-center gap-3"
          style={{
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
          }}
        >
          <Ionicons
            name={
              isAligned ? 'checkmark-circle-outline' : 'navigate-circle-outline'
            }
            size={20}
            color={isAligned ? c.accent : c.quaternary}
          />
          <Text
            className="text-xs leading-5 flex-1"
            style={{ color: c.tertiary }}
          >
            {isAligned
              ? translatedText?.qiblaApp?.aligned
              : translatedText?.qiblaApp?.notAligned}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
