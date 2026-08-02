import { useContext } from 'react';
import { prayerContext } from '../context/PrayerProvider';

export default function usePrayer() {
  const values = useContext(prayerContext);
  if (!values) {
    throw new Error('prayer context cant be used here');
  }
  return values;
}
