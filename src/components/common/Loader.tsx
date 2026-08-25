import React, { useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

interface LoaderProps {
  size?: number;
  color?: string;
  thickness?: number;
  speed?: number;
}

export default function Loader({
  size = 40,
  color = '#3b82f6',
  thickness = 4,
  speed = 1000,
}: LoaderProps) {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: speed,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    animation.start();
    return () => animation.stop();
  }, [speed]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View className="items-center justify-center">
      <Animated.View
        className="rounded-full border-t-transparent"
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: thickness,
          borderColor: color,
          transform: [{ rotate: spin }],
        }}
      />
    </View>
  );
}
