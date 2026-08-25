import { Colors } from '@/src/constants/theme';
import React, { useCallback, useMemo } from 'react';
import {
  Dimensions,
  PixelRatio,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import CategoryItem from './CategoryItem';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SCALE = Math.min(SCREEN_WIDTH / 375, 1.25);

function normalize(size) {
  const newSize = size * SCALE;
  return Platform.OS === 'ios'
    ? Math.round(PixelRatio.roundToNearestPixel(newSize))
    : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

const generateThemes = (colors, isDark) => ({
  emerald: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? `${colors.success}30` : `${colors.success}20`,
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? `${colors.success}70` : `${colors.success}50`,
    },
    active: {
      backgroundColor: colors.success,
      color: isDark ? colors.background : colors.surface,
      borderColor: colors.success,
    },
    dot: colors.success,
  },
  slate: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: colors.border,
      color: colors.primary,
    },
    pressed: {
      borderColor: colors.border2,
    },
    active: {
      backgroundColor: colors.surface2,
      color: colors.primary,
      borderColor: colors.border2,
    },
    dot: colors.quaternary,
  },
  ocean: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? `${colors.accent}30` : `${colors.accent}20`,
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? `${colors.accent}70` : `${colors.accent}50`,
    },
    active: {
      backgroundColor: colors.accent,
      color: isDark ? colors.background : colors.surface,
      borderColor: colors.accent,
    },
    dot: colors.accent,
  },
  sunset: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? `${colors.error}30` : `${colors.error}20`,
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? `${colors.error}70` : `${colors.error}50`,
    },
    active: {
      backgroundColor: colors.error,
      color: isDark ? colors.background : colors.surface,
      borderColor: colors.error,
    },
    dot: colors.error,
  },
  indigo: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? '#6366f130' : '#6366f120',
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? '#6366f190' : '#6366f170',
    },
    active: {
      backgroundColor: '#6366f1',
      color: '#ffffff',
      borderColor: '#6366f1',
    },
    dot: '#6366f1',
  },
  violet: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? '#8b5cf630' : '#8b5cf620',
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? '#8b5cf690' : '#8b5cf670',
    },
    active: {
      backgroundColor: '#8b5cf6',
      color: '#ffffff',
      borderColor: '#8b5cf6',
    },
    dot: '#8b5cf6',
  },
  teal: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? '#14b8a630' : '#14b8a620',
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? '#14b8a690' : '#14b8a670',
    },
    active: {
      backgroundColor: '#14b8a6',
      color: '#ffffff',
      borderColor: '#14b8a6',
    },
    dot: '#14b8a6',
  },
  amber: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? `${colors.accent}30` : `${colors.accent}20`,
      color: colors.primary,
    },
    pressed: {
      borderColor: isDark ? `${colors.accent}70` : `${colors.accent}50`,
    },
    active: {
      backgroundColor: colors.accent,
      color: isDark ? colors.background : colors.surface,
      borderColor: colors.accent,
    },
    dot: colors.accent,
  },
  midnight: {
    item: {
      backgroundColor: colors.surface,
      borderColor: colors.border,
      color: colors.primary,
    },
    pressed: {
      borderColor: colors.border2,
    },
    active: {
      backgroundColor: colors.surface2,
      color: colors.primary,
      borderColor: colors.border2,
    },
    dot: colors.quaternary,
  },
});

function CategorySelector({ onChange, selected, data = [] }) {
  const { theme, isDark } = useAppTheme();
  const themes = useMemo(
    () => generateThemes(Colors[theme], isDark),
    [theme, isDark],
  );
  const handleSelect = useCallback(
    (key) => {
      onChange?.(key);
    },
    [onChange],
  );

  const themeKeys = useMemo(() => Object.keys(themes), [themes]);

  const items = useMemo(() => {
    return data.map((item, index) => ({
      ...item,
      themeType: themeKeys[index % themeKeys.length],
    }));
  }, [data, themeKeys]);

  if (!items.length) return null;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark
            ? `${Colors[theme].surface}60`
            : `${Colors[theme].surface}90`,
          borderColor: isDark
            ? `${Colors[theme].border}30`
            : `${Colors[theme].border}40`,
        },
      ]}
      accessible={true}
      accessibilityRole="radiogroup"
      accessibilityLabel="Category filter"
    >
      <View style={styles.grid}>
        {items.map(({ label, key, icon, themeType }) => {
          const isSelected = selected === key;

          return (
            <View key={key} style={styles.gridItem}>
              <CategoryItem
                handleSelect={handleSelect}
                isActive={isSelected}
                _key={key}
                label={label}
                // themeType={themeType}
                iconName={icon}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: normalize(24), // larger vertical space
    paddingHorizontal: normalize(20), // wider padding
    borderRadius: normalize(24), // larger corners
    borderWidth: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  gridItem: {
    marginRight: normalize(10),
    marginBottom: normalize(18), // vertical breathing room between rows
  },
});

export default React.memo(CategorySelector);
