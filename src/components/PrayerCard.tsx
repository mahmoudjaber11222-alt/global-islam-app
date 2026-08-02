import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

export default function PrayerCard({ name, time, isNext, onPress }) {
  const PRAYER_CONFIG: Record<string, { icon: string; label: string }> = {
    Fajr: {
      icon: 'moon-outline',
      label: 'Fajr',
    },
    Sunrise: {
      icon: 'sunny-outline',
      label: 'Sunrise',
    },
    Dhuhr: {
      icon: 'sunny',
      label: 'Dhuhr',
    },
    Asr: {
      icon: 'partly-sunny-outline',
      label: 'Asr',
    },
    Maghrib: {
      icon: 'cloudy-night-outline',
      label: 'Maghrib',
    },
    Isha: {
      icon: 'moon',
      label: 'Isha',
    },
  };

  const config = PRAYER_CONFIG[name] || {
    icon: 'time-outline',
    label: name,
  };
  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, isNext && styles.cardActive]}
    >
      <View style={styles.leftSection}>
        {/* Icon Container */}
        <View
          style={[styles.iconContainer, isNext && styles.iconContainerActive]}
        >
          <Ionicons
            name={config.icon as any}
            size={20}
            color={isNext ? '#c9a96e' : '#737373'}
          />
        </View>

        {/* Name & Status */}
        <View style={styles.textSection}>
          <Text style={[styles.prayerName, isNext && styles.prayerNameActive]}>
            {/* {config.label} */}
          </Text>
          {isNext && <Text style={styles.nextLabel}></Text>}
        </View>
      </View>

      {/* Time Section */}
      <View style={styles.rightSection}>
        <Text style={[styles.timeText, isNext && styles.timeTextActive]}>
          {time}
        </Text>
        {isNext && (
          <View style={styles.pulseRow}>
            <View style={styles.pulseDot} />
            <Text style={styles.pulseText}>Next</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = {
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: '#141414',
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#262626',
  },
  cardActive: {
    borderColor: '#c9a96e',
    backgroundColor: '#1a1810',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  iconContainerActive: {
    backgroundColor: '#1a1810',
    borderColor: '#c9a96e',
  },
  textSection: {
    justifyContent: 'center',
  },
  prayerName: {
    color: '#d4d4d4',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  prayerNameActive: {
    color: '#fafafa',
    fontWeight: '600',
  },
  nextLabel: {
    color: '#c9a96e',
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    marginTop: 4,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  timeText: {
    color: '#a3a3a3',
    fontSize: 18,
    fontWeight: '300',
    fontVariant: ['tabular-nums'],
    letterSpacing: 0.5,
  },
  timeTextActive: {
    color: '#fafafa',
    fontWeight: '400',
  },
  pulseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  pulseDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#c9a96e',
  },
  pulseText: {
    color: '#c9a96e',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
  },
};
