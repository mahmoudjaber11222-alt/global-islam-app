import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import CategorySelector from '../../components/Hadith/CategorySelector';
import { Colors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = Math.min(SCREEN_WIDTH / 375, 1.25);

function normalize(size) {
  const newSize = size * SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

function FilterBar({ handleCategoryChange, selectedItem, data = [] }) {
  const { theme, isDark } = useAppTheme();
  const [scrollState, setScrollState] = useState({
    atStart: true,
    atEnd: false,
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-10)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleChange = useCallback(
    (key) => {
      handleCategoryChange?.(key);
    },
    [handleCategoryChange],
  );

  const handleScrollStateChange = useCallback((atStart, atEnd) => {
    setScrollState({ atStart, atEnd });
  }, []);

  const surfaceColor = isDark
    ? `${Colors[theme].surface}40`
    : `${Colors[theme].surface}80`;
  const borderColor = isDark
    ? `${Colors[theme].border}30`
    : `${Colors[theme].border}50`;

  const shadowStyle = isDark
    ? {}
    : Platform.select({
        ios: {
          shadowColor: Colors[theme].primary,
          shadowOffset: { width: 0, height: normalize(2) },
          shadowOpacity: 0.06,
          shadowRadius: normalize(8),
        },
        android: {
          elevation: 2,
        },
      });

  if (!data.length) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          backgroundColor: surfaceColor,
          borderColor: borderColor,
        },
        shadowStyle,
      ]}
      accessible={true}
      accessibilityRole="menu"
      accessibilityLabel="Category filter bar"
    >
      <CategorySelector
        data={data}
        selected={selectedItem}
        onChange={handleChange}
        onScrollStateChange={handleScrollStateChange}
      />

      {/* Left fade — indicates more content on the left */}
      {!scrollState.atStart && (
        <View
          style={[
            styles.fade,
            styles.fadeLeft,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}00`
                : `${Colors[theme].surface}00`,
            },
          ]}
          pointerEvents="none"
        >
          <View
            style={[
              styles.fadeGradient,
              {
                backgroundColor: isDark
                  ? Colors[theme].surface
                  : Colors[theme].surface,
              },
            ]}
          />
        </View>
      )}

      {/* Right fade — indicates more content on the right */}
      {!scrollState.atEnd && (
        <View
          style={[
            styles.fade,
            styles.fadeRight,
            {
              backgroundColor: isDark
                ? `${Colors[theme].surface}00`
                : `${Colors[theme].surface}00`,
            },
          ]}
          pointerEvents="none"
        >
          <View
            style={[
              styles.fadeGradient,
              {
                backgroundColor: isDark
                  ? Colors[theme].surface
                  : Colors[theme].surface,
              },
            ]}
          />
        </View>
      )}
    </Animated.View>
  );
}

const FADE_WIDTH = normalize(20);

const styles = StyleSheet.create({
  container: {
    borderRadius: normalize(16),
    padding: normalize(8),
    borderWidth: 1,
    overflow: 'hidden',
    position: 'relative',
  },
  fade: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: FADE_WIDTH,
    zIndex: 2,
  },
  fadeLeft: {
    left: 0,
  },
  fadeRight: {
    right: 0,
  },
  fadeGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
  },
});

export default React.memo(FilterBar);
