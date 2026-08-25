import { Colors } from '@/src/constants/theme';
import React, { useEffect, useRef } from 'react';
import { Animated, Pressable, Text } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';

export default function CategoryItem({
  isAllActive = false,
  _key,
  isActive,
  handleSelect,
  label,
  iconName,
}) {
  const { theme } = useAppTheme();
  const th = Colors[theme];
  const active = isActive || isAllActive;

  const widthAnim = useRef(new Animated.Value(active ? 20 : 0)).current;

  useEffect(() => {
    Animated.spring(widthAnim, {
      toValue: active ? 20 : 0,
      friction: 8,
      tension: 40,
      useNativeDriver: false,
    }).start();
  }, [active]);

  return (
    <Pressable
      style={{
        width: 120,
        borderColor: th.accent,
        backgroundColor: th.background,
      }}
      className="flex flex-row items-center gap-4 rounded-md overflow-hidden h-10"
      onPress={() => handleSelect?.(_key)}
      accessibilityRole="radio"
      accessibilityState={{ selected: active }}
      accessibilityLabel={`${label} category`}
    >
      <Animated.View
        style={{
          height: '100%',
          width: widthAnim,
          backgroundColor: th.accent,
        }}
      />

      <Text style={{ color: th.primary }} className="w-full">
        {label}
      </Text>
    </Pressable>
  );
}
