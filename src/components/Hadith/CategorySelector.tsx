import { Colors } from '@/src/constants/theme';
import { useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
import CategoryItem from './CategoryItem';
const generateThemes = (colors, isDark) => ({
  emerald: {
    item: {
      backgroundColor: isDark ? `${colors.surface}80` : `${colors.surface}90`,
      borderColor: isDark ? `${colors.success}30` : `${colors.success}20`,
      color: colors.primary,
    },
    itemHover: {
      backgroundColor: isDark ? `${colors.success}15` : `${colors.success}10`,
      borderColor: isDark ? `${colors.success}50` : `${colors.success}40`,
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
    itemHover: {
      backgroundColor: colors.surface2,
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
    itemHover: {
      backgroundColor: isDark ? `${colors.accent}15` : `${colors.accent}10`,
      borderColor: isDark ? `${colors.accent}50` : `${colors.accent}40`,
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
    itemHover: {
      backgroundColor: isDark ? `${colors.error}15` : `${colors.error}10`,
      borderColor: isDark ? `${colors.error}50` : `${colors.error}40`,
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
    itemHover: {
      backgroundColor: isDark ? '#6366f115' : '#6366f110',
      borderColor: isDark ? '#6366f150' : '#6366f140',
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
    itemHover: {
      backgroundColor: isDark ? '#8b5cf615' : '#8b5cf610',
      borderColor: isDark ? '#8b5cf650' : '#8b5cf640',
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
    itemHover: {
      backgroundColor: isDark ? '#14b8a615' : '#14b8a610',
      borderColor: isDark ? '#14b8a650' : '#14b8a640',
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
    itemHover: {
      backgroundColor: isDark ? `${colors.accent}15` : `${colors.accent}10`,
      borderColor: isDark ? `${colors.accent}50` : `${colors.accent}40`,
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
    itemHover: {
      backgroundColor: colors.surface2,
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

export default function CategorySelector({ onChange, selected, data = [] }) {
  const { theme, isDark } = useAppTheme();
  const themes = useMemo(
    () => generateThemes(Colors[theme], isDark),
    [theme, isDark],
  );

  function handleSelect(key) {
    onChange?.(key);
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {data.map(({ label, key, icon }, i) => {
          const themeKey = Object.keys(themes)[i % Object.keys(themes).length];
          return (
            <CategoryItem
              key={key}
              handleSelect={handleSelect}
              isActive={selected === key}
              _key={key}
              label={label}
              themeType={themeKey}
              iconName={icon} // pass MaterialCommunityIcons name string
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  scrollContent: {
    gap: 10,
    paddingRight: 16,
  },
});
