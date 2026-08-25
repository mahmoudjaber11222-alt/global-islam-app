import { Link } from 'expo-router';
import React, { useRef } from 'react';
import { Animated, ImageBackground, Pressable, Text, View } from 'react-native';
import { Colors, ThemeMode } from '../../constants/theme';

type HomeItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  to?: string;
  imageUrl?: string;
  featured?: boolean;
  theme?: ThemeMode;
  onPress?: () => void;
};

const HomeItem = ({
  icon,
  title,
  description,
  to,
  imageUrl,
  featured = false,
  theme = 'dark',
  onPress,
}: HomeItemProps) => {
  const colors = Colors[theme];
  const isLight = theme === 'light';
  const hasImage = featured && !!imageUrl;

  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.97,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: -2,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const Content = (
    <>
      {/* Image overlay for readability */}
      {hasImage && <View className="absolute inset-0 bg-black/50" />}

      {/* Top accent line */}
      {featured && (
        <View
          className="absolute left-0 right-0 top-0 h-[2px] z-10"
          style={{ backgroundColor: colors.accent }}
        />
      )}

      <View className="relative z-10 flex-row items-center gap-4">
        <View
          className="h-11 w-11 items-center justify-center rounded-xl"
          style={{
            backgroundColor: hasImage
              ? 'rgba(255,255,255,0.15)'
              : isLight
                ? 'rgba(21,128,61,0.12)'
                : featured
                  ? colors.accentMuted
                  : colors.surface2,
          }}
        >
          {icon}
        </View>

        <View className="flex-1 pr-2">
          <Text
            className="text-[15px] font-semibold mb-0.5"
            style={{
              color: hasImage
                ? '#FFFFFF'
                : isLight
                  ? '#15803D'
                  : colors.primary,
            }}
            numberOfLines={1}
          >
            {title}
          </Text>
          <Text
            className="text-[13px] leading-[18px]"
            style={{
              color: hasImage
                ? 'rgba(255,255,255,0.75)'
                : isLight
                  ? 'rgba(21,128,61,0.65)'
                  : colors.tertiary,
            }}
            numberOfLines={2}
          >
            {description}
          </Text>
        </View>

        <View
          className="h-8 w-8 items-center justify-center rounded-full"
          style={{
            backgroundColor: hasImage
              ? 'rgba(255,255,255,0.12)'
              : isLight
                ? 'rgba(21,128,61,0.08)'
                : colors.surface2,
            borderColor: hasImage
              ? 'rgba(255,255,255,0.2)'
              : isLight
                ? 'rgba(21,128,61,0.2)'
                : undefined,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              color: hasImage
                ? '#FFFFFF'
                : isLight
                  ? '#15803D'
                  : colors.quaternary,
            }}
          >
            →
          </Text>
        </View>
      </View>
    </>
  );

  const CardBody = hasImage ? (
    <ImageBackground
      source={{ uri: imageUrl }}
      resizeMode="cover"
      className="w-full rounded-2xl overflow-hidden"
    >
      <View className="px-5 py-[22px] min-h-[140px] justify-center">
        {Content}
      </View>
    </ImageBackground>
  ) : (
    <View className="px-5 py-[18px] w-full rounded-2xl overflow-hidden">
      {Content}
    </View>
  );

  const Card = (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className="w-full mb-3 active:opacity-90"
    >
      <Animated.View
        style={{
          transform: [{ scale }, { translateY }],
          backgroundColor: hasImage
            ? 'transparent'
            : isLight
              ? 'rgba(21,128,61,0.04)'
              : colors.surface,
          borderColor: hasImage
            ? 'transparent'
            : isLight
              ? 'rgba(21,128,61,0.2)'
              : colors.border,
          borderWidth: hasImage ? 0 : 1,
        }}
        className="w-full rounded-2xl overflow-hidden"
      >
        {CardBody}
      </Animated.View>
    </Pressable>
  );

  if (to) {
    return (
      <Link href={to as any} asChild>
        {Card}
      </Link>
    );
  }

  return Card;
};

export default HomeItem;
