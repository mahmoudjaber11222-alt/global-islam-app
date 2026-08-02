import * as Device from 'expo-device';
import * as Location from 'expo-location';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Platform } from 'react-native';
import { calculateQiblaDirection } from '../utils/qibla';

const PreciseContext = createContext(null);

export function PreciseLocation({ children }) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Only calculate when location is valid
  const qiblaDirection = useMemo(() => {
    if (!location?.coords) return null;
    return calculateQiblaDirection(
      location.coords.latitude,
      location.coords.longitude,
    );
  }, [location]);

  useEffect(() => {
    let locationSubscription = null;

    async function startWatching() {
      if (Platform.OS === 'android' && !Device?.isDevice) {
        setErrorMsg('This requires a physical device');
        setIsLoading(false);
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Location permission denied');
        setIsLoading(false);
        return;
      }

      // Use watchPositionAsync instead of polling
      locationSubscription = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          distanceInterval: 10, // Update every 10 meters
          timeInterval: 5000, // Or every 5 seconds minimum
        },
        (newLocation) => {
          setLocation(newLocation);
          setIsLoading(false);
        },
      );
    }

    startWatching();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  return (
    <PreciseContext.Provider
      value={{ location, errorMsg, qiblaDirection, isLoading }}
    >
      {children}
    </PreciseContext.Provider>
  );
}

export function usePreciseLocation() {
  const context = useContext(PreciseContext);
  if (!context) {
    throw new Error(
      'usePreciseLocation must be used within PreciseLocationProvider',
    );
  }
  return context;
}
