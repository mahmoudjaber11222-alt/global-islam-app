import { useQibla } from '@/src/context/QiblaProvider';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  Pressable,
  Text,
  View,
} from 'react-native';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useStaticText from '../hooks/useStaticText';

interface QiblaDirectionProps {
  onNavigate: () => void;
}

const QiblaDirection: React.FC<QiblaDirectionProps> = ({ onNavigate }) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  const {
    bearing,
    rotation,
    liveUserCoords,
    loading,
    error,
    isCompassActive,
    enableCompassHandler,
  } = useQibla();

  const rotateAnim = useRef(new Animated.Value(0)).current;
  const hasInitiated = useRef(false);

  const safeRotation = isNaN(rotation) ? 0 : ((rotation % 360) + 360) % 360;

  useEffect(() => {
    const currentValue = rotateAnim.__getValue?.() || 0;
    let diff = safeRotation - (currentValue % 360);
    if (diff > 180) diff -= 360;
    if (diff < -180) diff += 360;
    const target = currentValue + diff;

    Animated.timing(rotateAnim, {
      toValue: target,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [safeRotation, rotateAnim]);

  const spin = rotateAnim.interpolate({
    inputRange: [-1000, 1000],
    outputRange: ['-1000deg', '1000deg'],
  });

  useEffect(() => {
    if (hasInitiated.current) return;
    hasInitiated.current = true;
    enableCompassHandler();
  }, [enableCompassHandler]);

  const hasLocation = liveUserCoords !== null;
  const hasError = error !== '';
  const isLoading = loading || (!hasLocation && !hasError);

  const rotationText = isCompassActive
    ? safeRotation <= 180
      ? `${safeRotation.toFixed(1)}° ${translatedText?.homeApp?.toRight}`
      : `${(360 - safeRotation).toFixed(1)}° ${translatedText?.homeApp?.toLeft}`
    : null;

  return (
    <View
      className="rounded-2xl p-6 mb-6"
      style={{
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
      }}
    >
      <View className="flex-row items-center justify-between mb-5">
        <View className="flex-1">
          <Text
            className="capitalize text-lg font-semibold tracking-wide"
            style={{ color: c.primary }}
          >
            {translatedText?.home?.qibla?.title}
          </Text>

          {hasLocation ? (
            <View>
              <Text
                className="text-[12px] font-normal tracking-wide mt-0.5 capitalize"
                style={{ color: c.tertiary }}
              >
                {bearing.toFixed(1)}° {translatedText?.homeApp?.fromNorth}
              </Text>
              {isCompassActive && rotationText && (
                <Text
                  className=" capitalize text-[11px] mt-0.5"
                  style={{ color: c.quaternary }}
                >
                  {rotationText}
                </Text>
              )}
            </View>
          ) : hasError ? (
            <Text className="text-[11px] mt-0.5" style={{ color: c.error }}>
              {error}
            </Text>
          ) : (
            <Text
              className="capitalize text-[12px] mt-0.5"
              style={{ color: c.quaternary }}
            >
              {translatedText?.home?.qibla?.locationLoading}
            </Text>
          )}
        </View>

        <View
          className="w-12 h-12 rounded-full items-center justify-center"
          style={{
            backgroundColor: c.surface2,
            borderWidth: 1,
            borderColor: c.border2,
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color={c.accent} />
          ) : (
            <Ionicons
              name={isCompassActive ? 'compass' : 'compass-outline'}
              size={22}
              color={isCompassActive ? c.accent : c.quaternary}
            />
          )}
        </View>
      </View>

      {/* Compass Preview */}
      <View className="items-center py-6">
        <View
          className="w-40 h-40 rounded-full items-center justify-center relative"
          style={{
            backgroundColor: c.surface2,
            borderWidth: 1,
            borderColor: c.border,
          }}
        >
          <Text
            className="absolute top-2 text-[10px] font-bold tracking-[1px] capitalize"
            style={{ color: c.tertiary }}
          >
            {translatedText?.homeApp?.north
              ? translatedText?.homeApp?.north[0]
              : 'N'}
          </Text>
          <Text
            className="absolute bottom-2 text-[10px] font-bold tracking-[1px] capitalize"
            style={{ color: c.tertiary }}
          >
            {translatedText?.homeApp?.south
              ? translatedText?.homeApp?.south[0]
              : 'S'}
          </Text>
          <Text
            className="capitalize absolute left-3 text-[10px] font-bold tracking-[1px]"
            style={{ color: c.tertiary }}
          >
            {translatedText?.homeApp?.west
              ? translatedText?.homeApp?.west[0]
              : 'W'}
          </Text>
          <Text
            className="capitalize absolute right-3 text-[10px] font-bold tracking-[1px]"
            style={{ color: c.tertiary }}
          >
            {translatedText?.homeApp?.east
              ? translatedText?.homeApp?.east[0]
              : 'E'}
          </Text>

          <Animated.View
            className="w-1 h-16 rounded-full absolute"
            style={{
              transform: [{ rotate: spin }],
              backgroundColor: c.accent,
            }}
          >
            <View
              className="w-3 h-3 rounded-full absolute -top-1.5 -left-1"
              style={{ backgroundColor: c.accent }}
            />
          </Animated.View>

          <View
            className="w-2 h-2 rounded-full absolute"
            style={{ backgroundColor: c.primary }}
          />
        </View>
      </View>

      <Pressable
        onPress={onNavigate}
        disabled={!hasLocation}
        className="flex-row items-center justify-center gap-2 rounded-xl py-3.5 mt-2 active:opacity-70 disabled:opacity-40"
        style={{
          backgroundColor: c.surface2,
          borderWidth: 1,
          borderColor: c.border2,
        }}
      >
        <Ionicons name="navigate-circle-outline" size={16} color={c.accent} />
        <Text
          className="text-[13px] font-semibold tracking-[0.5px]"
          style={{ color: c.accent }}
        >
          {isCompassActive
            ? translatedText?.homeApp?.active
            : translatedText?.homeApp?.disabled}
        </Text>
      </Pressable>
    </View>
  );
};

export default QiblaDirection;
