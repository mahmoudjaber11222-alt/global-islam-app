import { Text, View } from 'react-native';

export type NextPrayerType = {
  name: string;
  leftSeconds: string;
  leftMinutes: string;
  leftHours: string;
};
export default function NextPrayer({
  name,
  leftSeconds,
  leftMinutes,
  leftHours,
}: NextPrayerType) {
  return (
    <View>
      <Text>{`${leftHours}:${leftMinutes}:${leftSeconds}`}</Text>
    </View>
  );
}
