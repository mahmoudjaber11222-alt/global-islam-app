import * as Location from 'expo-location';

type LocationResult =
  | { ok: true; location: Location.LocationObject }
  | {
      ok: false;
      error: string;
    };

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
  return { ok: true, location };
}
