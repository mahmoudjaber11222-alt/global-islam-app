import { useContext } from 'react';
import { nextPrayerContext } from '../context/NextPrayerProvider';
export default function useNextPrayer() {
  const values = useContext(nextPrayerContext);
  if (!values) {
    throw new Error('next prayer context cant be used here');
  }
  return values;
}
