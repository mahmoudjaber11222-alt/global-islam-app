import { useState } from 'react';
import useSWR from 'swr';
import { formatDate_toISOString } from '../app/utils/formatter';
import { getPrayer } from '../service/prayers.service';
import { LocationResultType } from './useLocation';
export default function usePrayers(
  locationResult: LocationResultType | null | false,
  manualLocation: { city: string; country: string } | null,
) {
  const [preciseKeyDate, setPreciseDateKey] = useState(new Date());

  const shouldFetchUnPrecise =
    manualLocation && manualLocation.city && manualLocation.country;
  const shouldFetchPrecise = locationResult && locationResult.ok;
  const preciseKey = shouldFetchPrecise
    ? [
        'prayer',
        locationResult.location.coords.latitude,
        locationResult.location.coords.longitude,
        formatDate_toISOString(preciseKeyDate),
      ]
    : null;
  const unPreciseKey = shouldFetchUnPrecise
    ? [
        'prayer',
        manualLocation.city,
        manualLocation.country,
        formatDate_toISOString(new Date()),
      ]
    : null;
  const { data: dataPrecise } = useSWR(preciseKey, ([_, lat, long, date]) =>
    getPrayer({ latitude: Number(lat), longitude: Number(long) }, null, date),
  );
  const { data: dataUnPrecise } = useSWR(
    unPreciseKey,
    ([_, city, country, date]) =>
      getPrayer(null, { city: city, country: country }, date),
  );
  function onLastPrayerCome() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    setPreciseDateKey(tomorrow);
  }

  return { dataPrecise, dataUnPrecise, onLastPrayerCome };
}
