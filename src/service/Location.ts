import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';

type LocationResult =
  | { ok: true; location: Location.LocationObject }
  | { ok: false; error: string };

const storageKey = 'location';

export async function getLocation(): Promise<LocationResult> {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    return { ok: false, error: 'not_granted' };
  }

  const enabled = await Location.hasServicesEnabledAsync();
  if (!enabled) {
    return { ok: false, error: 'service_disabled' };
  }

  const location = await Location.getCurrentPositionAsync({});

  // Store as string
  const toCache = JSON.stringify({ ok: true, location });
  await AsyncStorage.setItem(storageKey, toCache);

  return { ok: true, location };
}

export async function getCachedLocation(): Promise<LocationResult> {
  try {
    const cachedLocation = await AsyncStorage.getItem(storageKey);

    // No cache — fetch fresh
    if (!cachedLocation) {
      console.log('No cache found, fetching fresh location...');
      return await getLocation();
    }

    // Parse cache
    const parsed = JSON.parse(cachedLocation);

    // ✅ Validate cached data has correct shape
    if (!parsed || typeof parsed !== 'object') {
      console.log('Invalid cache format, fetching fresh...');
      await AsyncStorage.removeItem(storageKey);
      return await getLocation();
    }

    // ✅ Check if it's a success result with location data
    if (parsed.ok === true && parsed.location && parsed.location.coords) {
      console.log('From Cache -------');
      console.log(parsed);
      return parsed as LocationResult;
    }

    // Cache has error or invalid data — fetch fresh
    console.log('Cache has error/invalid data, fetching fresh...');
    await AsyncStorage.removeItem(storageKey);
    return await getLocation();
  } catch (e) {
    // JSON parse error or AsyncStorage error
    console.error('Cache read error:', e);
    await AsyncStorage.removeItem(storageKey);
    return await getLocation();
  }
}
