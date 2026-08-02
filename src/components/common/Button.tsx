import { Pressable, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/theme';
import { useAppTheme } from '../../context/ThemeProvider';

function Button({
  children,
  onPress,
  buttonTheme = 'dark',
  size = 'md',
  fullWidth = false,
  disabled = false,
}) {
  const { theme, isDark } = useAppTheme();

  const getThemeStyles = () => {
    switch (buttonTheme) {
      case 'primary':
        return { bg: isDark ? '#4a7ab8' : '#3a6aa8', color: '#ffffff' };
      case 'accent':
        return {
          bg: Colors[theme].accent,
          color: isDark ? '#0c0c0e' : '#ffffff',
        };
      case 'success':
        return { bg: Colors[theme].success, color: '#ffffff' };
      case 'danger':
        return { bg: Colors[theme].error, color: '#ffffff' };
      case 'warning':
        return {
          bg: isDark ? '#c0a060' : '#b89030',
          color: isDark ? '#0c0c0e' : '#ffffff',
        };
      case 'white':
        return {
          bg: Colors[theme].surface,
          color: Colors[theme].primary,
          border: Colors[theme].border,
        };
      case 'dark':
        return { bg: Colors[theme].surface2, color: Colors[theme].primary };
      case 'muted':
        return { bg: Colors[theme].surface2, color: Colors[theme].secondary };
      case 'outline':
        return {
          bg: 'transparent',
          color: Colors[theme].primary,
          border: Colors[theme].border,
        };
      case 'ghost':
        return { bg: 'transparent', color: Colors[theme].secondary };
      case 'soft':
        return { bg: Colors[theme].surface3, color: Colors[theme].primary };
      case 'glass':
        return {
          bg: `${Colors[theme].surface}10`,
          color: Colors[theme].primary,
          border: `${Colors[theme].border}20`,
        };
      case 'link':
        return { bg: 'transparent', color: Colors[theme].accent };
      case 'custom':
        return { bg: 'transparent', color: Colors[theme].primary };
      default:
        return { bg: Colors[theme].surface2, color: Colors[theme].primary };
    }
  };

  const t = getThemeStyles();
  const SIZES = {
    sm: { px: 12, py: 6, fontSize: 12 },
    md: { px: 16, py: 8, fontSize: 14 },
    lg: { px: 20, py: 12, fontSize: 16 },
  };
  const s = SIZES[size];
  const isString = typeof children === 'string';

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: t.bg,
          borderColor: t.border || 'transparent',
          borderWidth: t.border ? 1 : 0,
          paddingHorizontal: s.px,
          paddingVertical: s.py,
          opacity: disabled ? 0.5 : 1,
          width: fullWidth ? '100%' : undefined,
          transform: [{ scale: pressed && !disabled ? 0.97 : 1 }],
        },
      ]}
    >
      {isString ? (
        <Text
          style={{ color: t.color, fontSize: s.fontSize, fontWeight: '600' }}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});

export default Button;
