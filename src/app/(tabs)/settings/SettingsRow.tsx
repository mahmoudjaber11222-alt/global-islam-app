import useLanguage from '@/src/hooks/useLanguage';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';

interface SettingsRowProps {
  icon: string;
  iconColor?: string;
  title: string;
  subtitle?: string;
  value?: string;
  onPress?: () => void;
  showArrow?: boolean;
  isSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  c: any; // theme colors passed from parent
}

export const SettingsRow: React.FC<SettingsRowProps> = ({
  icon,
  iconColor = '#d4a853',
  title,
  subtitle,
  value,
  onPress,
  showArrow = true,
  isSwitch = false,
  switchValue,
  onSwitchChange,
  c,
}) => {
  const { selectedLanguage } = useLanguage();
  const content = (
    <View
      style={{
        direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: c.surface,
        borderBottomWidth: 1,
        borderBottomColor: c.border,
      }}
    >
      {/* Icon */}
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          backgroundColor: `${iconColor}18`,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 14,
        }}
      >
        <Ionicons name={icon} size={18} color={iconColor} />
      </View>

      {/* Text Content */}
      <View className="mx-4" style={{ flex: 1 }}>
        <Text
          className="capitalize"
          style={{
            color: c.primary,
            fontWeight: '500',
            fontSize: 16,
            padding: 4,
          }}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            style={{
              padding: 4,

              color: c.tertiary,
              fontSize: 13,
              marginTop: 2,
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>

      {/* Right Side */}
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 12 }}
      >
        {value && !isSwitch && (
          <Text
            style={{
              color: c.accent,
              fontSize: 13,
              marginRight: 8,
              opacity: 0.8,
            }}
          >
            {value}
          </Text>
        )}
        {isSwitch ? (
          <Switch
            value={switchValue}
            onValueChange={onSwitchChange}
            trackColor={{ false: c.surface2, true: c.accentMuted }}
            thumbColor={switchValue ? c.accent : c.quaternary}
            ios_backgroundColor={c.surface2}
          />
        ) : showArrow ? (
          <Ionicons name="chevron-forward" size={18} color={c.quinary} />
        ) : null}
      </View>
    </View>
  );

  if (onPress && !isSwitch) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
};

export default SettingsRow;
