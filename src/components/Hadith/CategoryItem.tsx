import { Colors } from '@/src/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
const generateThemes = (isDark, theme) => ({
  emerald: {
    item: {
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? `${theme.success}30` : `${theme.success}20`,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: isDark ? `${theme.success}15` : `${theme.success}10`,
      borderColor: isDark ? `${theme.success}50` : `${theme.success}40`,
    },
    active: {
      backgroundColor: theme.success,
      color: isDark ? theme.background : theme.surface,
      borderColor: theme.success,
    },
    dot: theme.success,
  },
  slate: {
    item: {
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: theme.border,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: theme.surface2,
      borderColor: theme.border2,
    },
    active: {
      backgroundColor: theme.surface2,
      color: theme.primary,
      borderColor: theme.border2,
    },
    dot: theme.quaternary,
  },
  ocean: {
    item: {
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? `${theme.accent}30` : `${theme.accent}20`,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: isDark ? `${theme.accent}15` : `${theme.accent}10`,
      borderColor: isDark ? `${theme.accent}50` : `${theme.accent}40`,
    },
    active: {
      backgroundColor: theme.accent,
      color: isDark ? theme.background : theme.surface,
      borderColor: theme.accent,
    },
    dot: theme.accent,
  },
  sunset: {
    item: {
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? `${theme.error}30` : `${theme.error}20`,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: isDark ? `${theme.error}15` : `${theme.error}10`,
      borderColor: isDark ? `${theme.error}50` : `${theme.error}40`,
    },
    active: {
      backgroundColor: theme.error,
      color: isDark ? theme.background : theme.surface,
      borderColor: theme.error,
    },
    dot: theme.error,
  },
  indigo: {
    item: {
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? '#6366f130' : '#6366f120',
      color: theme.primary,
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
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? '#8b5cf630' : '#8b5cf620',
      color: theme.primary,
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
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? '#14b8a630' : '#14b8a620',
      color: theme.primary,
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
      backgroundColor: isDark ? `${theme.surface}80` : `${theme.surface}90`,
      borderColor: isDark ? `${theme.accent}30` : `${theme.accent}20`,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: isDark ? `${theme.accent}15` : `${theme.accent}10`,
      borderColor: isDark ? `${theme.accent}50` : `${theme.accent}40`,
    },
    active: {
      backgroundColor: theme.accent,
      color: isDark ? theme.background : theme.surface,
      borderColor: theme.accent,
    },
    dot: theme.accent,
  },
  midnight: {
    item: {
      backgroundColor: theme.surface,
      borderColor: theme.border,
      color: theme.primary,
    },
    itemHover: {
      backgroundColor: theme.surface2,
      borderColor: theme.border2,
    },
    active: {
      backgroundColor: theme.surface2,
      color: theme.primary,
      borderColor: theme.border2,
    },
    dot: theme.quaternary,
  },
});

export default function CategoryItem({
  isAllActive = false,
  _key,
  isActive,
  handleSelect,
  themeType,
  label,
  iconName, // MaterialCommunityIcons name string, e.g. "book-open"
}) {
  const { theme, isDark } = useAppTheme();
  const themes = useMemo(
    () => generateThemes(isDark, Colors[theme]),
    [theme, isDark],
  );
  const th = themes[themeType] || themes.emerald;
  const active = isActive || isAllActive;

  return (
    <Pressable
      onPress={() => handleSelect(_key)}
      style={({ pressed }) => [
        styles.chip,
        {
          backgroundColor: active
            ? th.active.backgroundColor
            : pressed
              ? th.itemHover.backgroundColor
              : th.item.backgroundColor,
          borderColor: active
            ? th.active.borderColor
            : pressed
              ? th.itemHover.borderColor
              : th.item.borderColor,
        },
      ]}
    >
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={16}
          color={active ? th.active.color : th.dot}
          style={styles.icon}
        />
      )}

      <Text
        style={[
          styles.label,
          { color: active ? th.active.color : th.item.color },
        ]}
      >
        {label}
      </Text>

      {/* Radio dot */}
      <View
        style={[
          styles.radioOuter,
          {
            borderColor: active
              ? isDark
                ? Colors[theme].primary
                : Colors[theme].surface
              : Colors[theme].border,
          },
        ]}
      >
        {active && (
          <View
            style={[
              styles.radioInner,
              {
                backgroundColor: isDark
                  ? Colors[theme].primary
                  : Colors[theme].surface,
              },
            ]}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
  },
  icon: {
    marginRight: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  radioOuter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 6,
  },
  radioInner: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
});
