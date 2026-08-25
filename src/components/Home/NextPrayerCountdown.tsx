import { getThemeColors } from '@/src/constants/theme';
import { useAppTheme } from '@/src/context/ThemeProvider';
import useStaticText from '@/src/hooks/useStaticText';
import React from 'react';
import { Text, View } from 'react-native';
type NextPrayerProps = {
  name: string;
  time: string;
  hours: string;
  minutes: string;
  seconds: string;
};
export const NextPrayerCountdown: React.FC<{
  prayer: NextPrayerProps;
}> = ({ prayer }) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText: tr } = useStaticText();
  return (
    <View
      className="rounded-2xl overflow-hidden mb-6"
      style={{
        backgroundColor: c.surface,
        borderWidth: 1,
        borderColor: c.border,
      }}
    >
      <View className="p-7 items-center">
        <Text
          className="text-[11px] font-bold tracking-[3px] mb-3 uppercase"
          style={{ color: c.accent }}
        >
          {tr?.prayerApp?.upcoming}
        </Text>
        <Text
          className="text-[42px] font-light tracking-[4px] uppercase mb-2"
          style={{ color: c.primary }}
        >
          {tr?.prayers?.times[prayer.name]}
        </Text>
        <Text
          className="text-[13px] font-normal tracking-wide mb-5"
          style={{ color: c.tertiary }}
        >
          {prayer.time}
        </Text>

        <View className="flex-row items-center justify-center gap-2">
          {[
            { val: prayer.hours, label: tr?.homeApp?.hour },
            { val: prayer.minutes, label: tr?.homeApp?.minute },
            { val: prayer.seconds, label: tr?.homeApp?.second },
          ].map((item, i) => (
            <React.Fragment key={item.label}>
              <View
                className="items-center rounded-lg py-3 px-4 min-w-[64px]"
                style={{
                  backgroundColor: c.surface2,
                  borderWidth: 1,
                  borderColor: c.border2,
                }}
              >
                <Text
                  className="text-[28px] font-extralight tabular-nums"
                  style={{ color: c.primary }}
                >
                  {item.val}
                </Text>
                <Text
                  className="text-[9px] font-bold tracking-[1.5px] mt-1"
                  style={{ color: c.tertiary }}
                >
                  {item.label}
                </Text>
              </View>
              {i < 2 && (
                <Text
                  className="text-2xl font-light"
                  style={{ color: c.accent }}
                >
                  :
                </Text>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>
    </View>
  );
};
