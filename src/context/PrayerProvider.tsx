import { createContext, useState } from 'react';
import useSWR from 'swr';
import { AlAdhanResponse, PrayerTimesError } from '../app/types/prayer_times'; // adjust path
import { formatDate_toISOString } from '../app/utils/formatter';
import useLocation from '../hooks/useLocation';
import { getPrayer } from '../service/prayers.service';

// Define the context type properly
type PrayerContextType = {
  onLastPrayerCome: () => void;
  dataPrecise: AlAdhanResponse | PrayerTimesError | undefined;
};

export const prayerContext = createContext<PrayerContextType | null>(null);

export function PrayerProvider({ children }: { children: React.ReactNode }) {
  const { result: locationResult } = useLocation();
  // const { is } = useQibla();

  const [preciseKeyDate, setPreciseDateKey] = useState<Date>(new Date());

  const shouldFetchPrecise = locationResult && locationResult.ok;

  const preciseKey = shouldFetchPrecise
    ? [
        'prayer',
        locationResult.location.coords.latitude,
        locationResult.location.coords.longitude,
        formatDate_toISOString(preciseKeyDate),
      ]
    : null;

  // ✅ Add generics: data type, error type
  const { data: dataPrecise } = useSWR<
    AlAdhanResponse | PrayerTimesError, // Data typ
    Error // Error type (SWR error, not API error)
  >(preciseKey, ([_, lat, long, date]) =>
    getPrayer({ latitude: Number(lat), longitude: Number(long) }, null, date),
  );

  function onLastPrayerCome() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setPreciseDateKey(tomorrow);
  }

  const values: PrayerContextType = { onLastPrayerCome, dataPrecise };

  return (
    <prayerContext.Provider value={values}>{children}</prayerContext.Provider>
  );
}
