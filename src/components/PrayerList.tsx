import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import {
  AlAdhanResponse,
  PrayerListProps,
  PrayerTimings,
} from '../app/types/prayer_times';
import { getThemeColors } from '../constants/theme';
import { useAppTheme } from '../context/ThemeProvider';
import useLanguage from '../hooks/useLanguage';
import useNextPrayer from '../hooks/useNextPrayer';
import useStaticText from '../hooks/useStaticText';
import { NextPrayerType } from './NextPrayer';

// ─── Prayer Icons Map ───
const PRAYER_ICONS: Record<string, keyof typeof Ionicons.glyphMap> = {
  Fajr: 'sunny-outline',
  Dhuhr: 'sunny',
  Asr: 'partly-sunny-outline',
  Maghrib: 'sunny-outline',
  Isha: 'moon-outline',
};

const DateHeader = ({
  data,
  nextPrayerTimes,
}: {
  data: AlAdhanResponse['data'];
  nextPrayerTimes: NextPrayerType;
}) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  const currentDate = new Date();
  function formatTime(timezone: string, toGetDates = {}) {
    return new Intl.DateTimeFormat(timezone, toGetDates).format(currentDate);
  }

  const [hDay, hMonth, hYear, hYearExtend] = formatTime('en-TN-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).split(' ');

  const [mDay, mMonth, mYear] = formatTime('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).split(' ');

  const weekday = formatTime('en-US', { weekday: 'long' });

  return (
    <View
      style={{
        backgroundColor: c.surface,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: c.border,
        padding: 24,
        marginBottom: 20,
        overflow: 'hidden',
      }}
    >
      {/* Subtle accent glow */}
      <View
        style={{
          position: 'absolute',
          top: -40,
          right: -40,
          width: 140,
          height: 140,
          borderRadius: 70,
          backgroundColor: c.accent,
          opacity: 0.04,
        }}
      />

      {/* Next Prayer Countdown */}
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: c.accent,
            fontSize: 10,
            fontWeight: '700',
            letterSpacing: 3,
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          {translatedText?.prayerApp?.upcoming}
        </Text>

        <Text
          style={{
            color: c.primary,
            fontSize: 40,
            fontWeight: '200',
            letterSpacing: 4,
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          {translatedText?.prayers?.times[nextPrayerTimes.name]}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          {[
            {
              val: nextPrayerTimes.leftHours,
              label: translatedText?.homeApp?.hour,
            },
            {
              val: nextPrayerTimes.leftMinutes,
              label: translatedText?.homeApp?.minute,
            },
            {
              val: nextPrayerTimes.leftSeconds,
              label: translatedText?.homeApp?.second,
            },
          ].map((item, i) => (
            <React.Fragment key={item.label}>
              <View
                style={{
                  backgroundColor: c.surface2,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: c.border2,
                  paddingVertical: 14,
                  paddingHorizontal: 16,
                  minWidth: 76,
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    color: c.primary,
                    fontSize: 32,
                    fontWeight: '200',
                    fontVariant: ['tabular-nums'],
                    lineHeight: 36,
                  }}
                >
                  {String(item.val).padStart(2, '0')}
                </Text>
                <Text
                  style={{
                    color: c.tertiary,
                    fontSize: 9,
                    fontWeight: '700',
                    letterSpacing: 2,
                    marginTop: 8,
                    opacity: 0.7,
                  }}
                >
                  {item.label}
                </Text>
              </View>
              {i < 2 && (
                <Text
                  style={{
                    color: c.accent,
                    fontSize: 28,
                    fontWeight: '200',
                    opacity: 0.6,
                  }}
                >
                  :
                </Text>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>

      {/* Divider */}
      <View
        style={{
          height: 1,
          backgroundColor: c.border,
          marginVertical: 24,
          opacity: 0.5,
        }}
      />

      {/* Dates Row */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Gregorian */}
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: c.tertiary,
              fontSize: 10,
              fontWeight: '700',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Gregorian
          </Text>
          <Text
            style={{
              color: c.primary,
              fontSize: 42,
              fontWeight: '200',
              lineHeight: 46,
            }}
          >
            {Number(mDay) < 10 ? `0${mDay}` : mDay}
          </Text>
          <Text
            style={{
              color: c.accent,
              fontSize: 14,
              fontWeight: '600',
              letterSpacing: 2,
              marginTop: 6,
            }}
          >
            {mMonth.toUpperCase()}
          </Text>
          <Text
            style={{
              color: c.secondary,
              fontSize: 13,
              marginTop: 6,
            }}
          >
            {weekday}, {mYear}
          </Text>
        </View>

        {/* Hijri */}
        <View
          style={{
            backgroundColor: c.surface2,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: c.border,
            paddingVertical: 20,
            paddingHorizontal: 24,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: c.tertiary,
              fontSize: 10,
              fontWeight: '700',
              letterSpacing: 2.5,
              textTransform: 'uppercase',
              marginBottom: 8,
            }}
          >
            Hijri
          </Text>
          <Text
            style={{
              color: c.primary,
              fontSize: 32,
              fontWeight: '300',
              lineHeight: 36,
            }}
          >
            {hDay}
          </Text>
          <Text
            style={{
              color: c.accent,
              fontSize: 13,
              fontWeight: '600',
              marginTop: 6,
            }}
          >
            {hMonth}
          </Text>
          <Text
            style={{
              color: c.tertiary,
              fontSize: 11,
              marginTop: 4,
              opacity: 0.7,
            }}
          >
            {hYear} {hYearExtend}
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View
        style={{
          height: 1,
          backgroundColor: c.border,
          marginVertical: 24,
          opacity: 0.5,
        }}
      />

      {/* Bottom Info */}
      <View
        style={{
          flexDirection: 'column',
          gap: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="location-outline" size={16} color={c.quaternary} />
          <Text
            style={{
              color: c.quaternary,
              fontSize: 13,
              opacity: 0.8,
            }}
            numberOfLines={1}
          >
            {data.meta.timezone}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: c.surface2,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: c.border2,
            paddingHorizontal: 12,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              color: c.accent,
              fontSize: 11,
              fontWeight: '600',
              letterSpacing: 0.5,
            }}
          >
            {data.meta.method.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

function safeTimings(times: PrayerTimings): PrayerTimings {
  return Object.fromEntries(
    Object.entries(times).map(([key, value]) => [key, value.split(' ')[0]]),
  ) as PrayerTimings;
}

// ─── Enhanced Prayer Row ───
const PrayerRow = ({
  name,
  time,
  isNext,
  onPress,
}: {
  name: string;
  time: string;
  isNext: boolean;
  onPress: () => void;
}) => {
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText: tr } = useStaticText();
  const { selectedLanguage } = useLanguage();
  return (
    <Pressable
      onPress={onPress}
      style={{
        direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: isNext ? c.surface2 : c.surface,
        borderRadius: 14,
        borderWidth: 1,
        borderColor: isNext ? c.border3 : c.border,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 8,
        overflow: 'hidden',
      }}
    >
      {/* Left accent bar for next prayer */}
      {isNext && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: 3,
            backgroundColor: c.accent,
            borderRadius: '0 3px 3px 0',
          }}
        />
      )}

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Ionicons
          name={PRAYER_ICONS[name] || 'time-outline'}
          size={20}
          color={isNext ? c.accent : c.quaternary}
        />
        <Text
          style={{
            color: c.primary,
            fontSize: 15,
            fontWeight: '500',
            letterSpacing: 0.5,
          }}
        >
          {name?.toLowerCase() !== 'Sunrise'
            ? tr?.prayers?.times[name]
            : tr?.homeApp?.sunrise}
        </Text>

        {isNext && (
          <View
            style={{
              backgroundColor: c.accentMuted,
              borderRadius: 6,
              paddingHorizontal: 8,
              paddingVertical: 3,
            }}
          >
            <Text
              style={{
                color: c.accent,
                fontSize: 9,
                fontWeight: '700',
                letterSpacing: 1.5,
                textTransform: 'uppercase',
              }}
            >
              {tr?.contentNormal?.pagination?.next}
            </Text>
          </View>
        )}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        {isNext && (
          <View
            style={{
              width: 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: c.accent,
            }}
          />
        )}
        <Text
          style={{
            color: isNext ? c.accent : c.secondary,
            fontSize: 18,
            fontWeight: '300',
            fontVariant: ['tabular-nums'],
          }}
        >
          {time}
        </Text>
      </View>
    </Pressable>
  );
};

export const PrayerList: React.FC<PrayerListProps> = ({
  loading,
  error,
  locationResult,
  requestLocation,
  handleCardPress,
}) => {
  const { selectedLanguage } = useLanguage();
  const { theme } = useAppTheme();
  const c = getThemeColors(theme);
  const { translatedText } = useStaticText();
  const { prayerData, nextPrayer, mainPrayers, nextPrayerTimes } =
    useNextPrayer();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: c.background }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 40,
      }}
    >
      {/* Error Banner */}
      {error && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: c.surface3,
            borderRadius: 14,
            borderWidth: 1,
            borderColor: c.border3,
            padding: 16,
            marginBottom: 20,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              gap: 12,
            }}
          >
            <Ionicons name="warning-outline" size={20} color={c.accent} />
            <Text
              style={{
                flex: 1,
                color: c.accent,
                fontSize: 13,
                fontWeight: '500',
                lineHeight: 18,
              }}
            >
              {translatedText?.prayerApp?.locationRequired}
            </Text>
          </View>
          <Pressable
            onPress={requestLocation}
            style={{
              backgroundColor: c.accentMuted,
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 10,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                color: c.accent,
                fontSize: 13,
                fontWeight: '700',
              }}
            >
              {translatedText?.quranApp?.retry}
            </Text>
          </Pressable>
        </View>
      )}

      {/* Loading State */}
      {loading && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 80,
          }}
        >
          <ActivityIndicator size="large" color={c.accent} />
          <Text
            style={{
              color: c.tertiary,
              marginTop: 16,
              fontSize: 14,
              fontWeight: '500',
              letterSpacing: 0.5,
            }}
          >
            {translatedText?.home?.ai?.loading?.label}
          </Text>
        </View>
      )}

      {/* Prayer Times Content */}
      {prayerData && !loading && (
        <>
          {/* Date Header with Countdown */}
          <DateHeader
            nextPrayerTimes={nextPrayerTimes}
            data={prayerData.data}
          />

          {/* Prayer Schedule Header */}
          <View
            style={{
              direction: selectedLanguage === 'ar' ? 'rtl' : 'ltr',

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 4,
            }}
          >
            <Text
              style={{
                color: c.primary,
                fontSize: 18,
                fontWeight: '600',
                letterSpacing: 0.5,
              }}
            >
              {translatedText?.prayerApp?.schedule}
            </Text>
            <View
              style={{
                backgroundColor: c.surface2,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: c.border2,
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  color: c.accent,
                  fontSize: 11,
                  fontWeight: '700',
                  letterSpacing: 0.5,
                }}
              >
                {prayerData.data.meta.school === 'Standard'
                  ? 'Standard'
                  : 'Hanafi'}
              </Text>
            </View>
          </View>

          {/* Prayer Rows */}
          {mainPrayers.map((prayer) => (
            <PrayerRow
              key={prayer}
              name={prayer}
              time={
                prayerData.ok
                  ? prayerData.data.timings[
                      prayer as keyof PrayerTimings
                    ]?.split(' ')[0]
                  : '00:00'
              }
              isNext={nextPrayer === prayer}
              onPress={() => handleCardPress(prayer)}
            />
          ))}

          {/* Location Footer */}
          <View
            style={{
              backgroundColor: c.surface,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: c.border,
              padding: 16,
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
            >
              <Ionicons
                name="navigate-circle-outline"
                size={18}
                color={c.quaternary}
              />
              <Text
                style={{
                  color: c.quaternary,
                  fontSize: 13,
                  opacity: 0.8,
                }}
              >
                {prayerData.data.meta.latitude.toFixed(4)},
                {prayerData.data.meta.longitude.toFixed(4)}
              </Text>
            </View>

            <Pressable
              onPress={requestLocation}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                backgroundColor: c.surface2,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: c.border2,
                paddingHorizontal: 14,
                paddingVertical: 8,
              }}
            >
              <Ionicons name="refresh" size={14} color={c.accent} />
              <Text
                style={{
                  color: c.accent,
                  fontSize: 13,
                  fontWeight: '600',
                }}
              >
                {translatedText?.prayerApp?.refresh}
              </Text>
            </Pressable>
          </View>
        </>
      )}
    </ScrollView>
  );
};
