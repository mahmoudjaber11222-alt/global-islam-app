// types/prayer-times.ts

import { LocationResultType } from '@/src/hooks/useLocation';

export interface PrayerTimesError {
  ok: false;
  msg: string;
}
export interface PrayerTimings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Imsak?: string;
  Midnight?: string;
  Firstthird?: string;
  Lastthird?: string;
  Sunset?: string;
}

export interface HijriDate {
  date: string;
  format: string;
  day: string;
  weekday: { en: string; ar: string };
  month: { number: number; en: string; ar: string; days: number };
  year: string;
  designation: { abbreviated: string; expanded: string };
  holidays: string[];
}

export interface GregorianDate {
  date: string;
  format: string;
  day: string;
  weekday: { en: string };
  month: { number: number; en: string };
  year: string;
  designation: { abbreviated: string; expanded: string };
  lunarSighting: boolean;
}

export interface MetaInfo {
  latitude: number;
  longitude: number;
  timezone: string;
  method: {
    id: number;
    name: string;
    params?: { Fajr?: number; Isha?: number };
    location?: { latitude: number; longitude: number };
  };
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Record<string, number>;
}
export interface PrayerListProps {
  loading: boolean;
  error: string | null;
  locationResult: LocationResultType | null | false;
  country: string;
  city: string;
  onPrayerTime: (prayer: { name: string; time: number }) => void;
  countries: { label: string; value: string }[];
  showUiSelection: boolean;
  requestLocation: () => void;
  handleCountryChange: (value: string) => void;
  handleCityChange: (value: string) => void;
  handleCardPress: (value: string) => void;
  Select: React.ComponentType<any>;
}
export interface AlAdhanResponse {
  ok: true;
  code: number;
  status: string;
  fullData: PrayerData[];
  data: {
    timings: PrayerTimings;
    date: {
      readable: string;
      timestamp: string;
      hijri: HijriDate;
      gregorian: GregorianDate;
    };
    meta: MetaInfo;
  };
}
interface PrayerData {
  timings: PrayerTimings;
  date: {
    readable: string;
    timestamp: string;
    hijri: HijriDate;
    gregorian: GregorianDate;
  };
  meta: MetaInfo;
}
export interface AlAdhanResponseList {
  ok: true;
  code: number;
  status: string;
  data: PrayerData[];
}
