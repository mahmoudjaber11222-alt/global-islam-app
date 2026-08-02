import { Colors } from '@/src/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../../context/ThemeProvider';
function Toast({
  msg = '',
  iconName = null, // MaterialCommunityIcons name, e.g. "alert-circle-outline"
  title = '',
  description = '',
  toastTheme = 'white',
  allowClose = true,
}) {
  const { theme } = useAppTheme();
  //   const { Colors[theme] } = useTheme();
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const getThemeStyles = () => {
    switch (toastTheme) {
      case 'dark':
        return {
          container: {
            bg: Colors[theme].surface,
            border: Colors[theme].border,
          },
          title: { color: Colors[theme].primary },
          desc: { color: Colors[theme].tertiary },
          icon: Colors[theme].primary,
        };
      case 'success':
        return {
          container: {
            bg: Colors[theme].surface5,
            border: Colors[theme].border4,
          },
          title: { color: Colors[theme].success },
          desc: { color: Colors[theme].successText },
          icon: Colors[theme].success,
        };
      case 'error':
        return {
          container: {
            bg: Colors[theme].surface6,
            border: Colors[theme].border5,
          },
          title: { color: Colors[theme].error },
          desc: { color: Colors[theme].error },
          icon: Colors[theme].error,
        };
      case 'warning':
        return {
          container: {
            bg: Colors[theme].surface3,
            border: Colors[theme].border3,
          },
          title: { color: Colors[theme].accent },
          desc: { color: Colors[theme].secondary },
          icon: Colors[theme].accent,
        };
      default:
        return {
          container: {
            bg: Colors[theme].surface,
            border: Colors[theme].border,
          },
          title: { color: Colors[theme].primary },
          desc: { color: Colors[theme].tertiary },
          icon: Colors[theme].quaternary,
        };
    }
  };

  const t = getThemeStyles();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: t.container.bg,
          borderColor: t.container.border,
        },
      ]}
    >
      {iconName && (
        <MaterialCommunityIcons
          name={iconName}
          size={18}
          color={t.icon}
          style={styles.icon}
        />
      )}

      <View style={styles.textBox}>
        {title ? (
          <Text style={[styles.title, { color: t.title.color }]}>{title}</Text>
        ) : null}
        {description || msg ? (
          <Text style={[styles.desc, { color: t.desc.color }]}>
            {description || msg}
          </Text>
        ) : null}
      </View>

      {allowClose && (
        <Pressable onPress={() => setVisible(false)} style={styles.close}>
          <Text style={{ color: t.icon, fontSize: 16, fontWeight: '700' }}>
            ✕
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    padding: 16,
    paddingRight: 44,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  icon: { marginTop: 2 },
  textBox: { flex: 1, gap: 4 },
  title: { fontSize: 14, fontWeight: '700' },
  desc: { fontSize: 12, lineHeight: 18 },
  close: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },
});

export default Toast;
