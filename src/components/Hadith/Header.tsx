import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Colors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';
import useStaticText from '../../hooks/useStaticText';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = SCREEN_WIDTH / 375;

function normalize(size) {
  const newSize = size * SCALE;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

function Header({
  animated = true,
  align = 'center',
  showDivider = false,
  dividerWidth = 40,
  title,
  subtitle,
  style,
  titleStyle,
  subtitleStyle,
}) {
  const { translatedText } = useStaticText();
  const { theme } = useAppTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (!animated) {
      fadeAnim.setValue(1);
      slideAnim.setValue(0);
      return;
    }

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  }, [animated]); // eslint-disable-line react-hooks/exhaustive-deps

  const alignMap = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  };

  const textAlignMap = {
    left: 'left',
    center: 'center',
    right: 'right',
  };

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          alignItems: alignMap[align],
        },
        style,
      ]}
      accessible={true}
      accessibilityLabel={`${title || ''}. ${subtitle || ''}`}
    >
      <Text
        style={[
          styles.title,
          {
            color: Colors[theme].primary,
            fontSize: normalize(28),
            lineHeight: normalize(34),
            textAlign: textAlignMap[align],
          },
          titleStyle,
        ]}
        numberOfLines={2}
      >
        {title}
      </Text>

      <View style={styles.subtitleRow}>
        {showDivider && (
          <View
            style={[
              styles.divider,
              {
                backgroundColor: Colors[theme].primary,
                width: dividerWidth,
                opacity: 0.3,
              },
            ]}
          />
        )}

        <Text
          style={[
            styles.subtitle,
            {
              color: Colors[theme].tertiary,
              fontSize: normalize(12),
              lineHeight: normalize(18),
              textAlign: textAlignMap[align],
            },
            subtitleStyle,
          ]}
        >
          {subtitle}
        </Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(16),
    marginBottom: normalize(8),
  },
  title: {
    fontWeight: Platform.select({ ios: '800', android: 'bold' }),
    letterSpacing: -0.8,
    marginBottom: normalize(8),
  },
  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    opacity: 0.85,
    marginLeft: 0, // Safe fallback instead of gap
  },
  divider: {
    height: 2,
    borderRadius: 1,
    marginRight: normalize(8), // Replaces gap
  },
});

export default React.memo(Header);
