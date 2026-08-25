import React, { useEffect } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { getThemeColors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';

export interface IconListItem {
  icon: React.ReactNode;
  name: string;
  onPress?: () => void;
}

interface IconListProps {
  iconList: IconListItem[];
}

export default function IconList({ iconList }: IconListProps) {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  const progress = useSharedValue(1);

  useEffect(() => {
    progress.value = withTiming(0, {
      duration: 1000,
      easing: Easing.out(Easing.cubic),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scaleX: progress.value,
      },
    ],
  }));

  if (!iconList || iconList.length === 0) return null;

  return (
    <View className="relative w-full mb-2">
      {/* Icon list */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          gap: 12,
        }}
      >
        {iconList.map((item, index) => (
          <Pressable
            key={`${item.name}-${index}`}
            onPress={item.onPress}
            className="items-center active:opacity-60"
            style={{
              minWidth: 64,
            }}
          >
            <View
              className="h-[52px] w-[52px] items-center justify-center rounded-2xl mb-2"
              style={{
                backgroundColor: c.surface2,
                borderColor: c.border2,
                borderWidth: 1,
              }}
            >
              {item.icon}
            </View>

            <Text
              className="text-[11px] font-medium text-center"
              style={{ color: c.tertiary }}
              numberOfLines={1}
            >
              {item.name}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Reveal layer */}
      <View
        pointerEvents="none"
        className="absolute inset-0 z-10 overflow-hidden"
      >
        <Animated.View
          style={[
            {
              width: '100%',
              height: '100%',
              backgroundColor: c.background,
              transformOrigin: 'right',
            },
            animatedStyle,
          ]}
        />
      </View>
    </View>
  );
}
