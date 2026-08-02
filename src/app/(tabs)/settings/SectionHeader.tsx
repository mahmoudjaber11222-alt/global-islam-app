import { getThemeColors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

interface SectionHeaderProps {
  title: string;
  icon?: string;
  rightElement?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  icon,
  rightElement,
}) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: c.surface,
        borderBottomWidth: 1,
        borderBottomColor: c.border,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {icon && (
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              backgroundColor: c.accentMuted,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
            }}
          >
            <Ionicons name={icon} size={16} color={c.accent} />
          </View>
        )}
        <Text style={{ color: c.primary, fontWeight: '600', fontSize: 16 }}>
          {title}
        </Text>
      </View>
      {rightElement}
    </View>
  );
};

export default SectionHeader;
