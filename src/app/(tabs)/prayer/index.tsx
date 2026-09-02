import countries from '@/assets/Static Data/countries.json';
import { PrayerList } from '@/src/components/PrayerList';
import Select from '@/src/components/common/Select';
import useLocation from '@/src/hooks/useLocation';
import useNextPrayer from '@/src/hooks/useNextPrayer';
import usePrayer from '@/src/hooks/usePrayer';
import { useState } from 'react';
// 1- USER OPENS APP , PRAYERS GET FROM ASYNCCACH

// NO CACHE | FETCHS CACHE USING SWR , STORE DATE IN ASYNC CACH
export default function Prayers() {
  const { showAthan, nextPrayerTimes } = useNextPrayer();
  const [country, setCountry] = useState<string>('');
  const [city, setCity] = useState('');
  const { onLastPrayerCome, dataPrecise: prayerData } = usePrayer();
  const {
    error,
    result: locationResult,
    requestLocation,
    loading,
  } = useLocation();

  // location logic .

  const showUiSelection = Boolean(locationResult);

  // handlers
  function handleCountryChange(item: string): void {
    setCountry(item);
  }

  function handleCityChange(item: string): void {
    setCity(item);
  }
  function handleCardPress(prayer: string) {
    console.log(prayer);
    // router.push(`/prayers/${prayer}`);
  }
  function handlePrayerTimeCome(prayer: { name: string; time: number }): void {
    console.log('prayer: ' + prayer.name);
    console.log('handled');
  }

  return (
    <PrayerList
      city={city}
      countries={countries}
      country={country}
      error={error}
      loading={loading}
      locationResult={locationResult}
      requestLocation={requestLocation}
      showUiSelection={showUiSelection}
      onPrayerTime={handlePrayerTimeCome}
      Select={Select}
      handleCityChange={handleCityChange}
      handleCountryChange={handleCountryChange}
      handleCardPress={handleCardPress}
    />
  );
}

/**
 * - USER OPENS APP
 * - CHECK IF LOCATION SERVICE DISABLED:
 * -- DISABLED: SHOW LOCATION DISABLED OR NOT GRANTED WARNING .
 * -- ENABLED: GET USER COORDINATES
 *
 */
