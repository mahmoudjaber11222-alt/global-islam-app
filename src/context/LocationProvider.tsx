import * as Location from 'expo-location';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { getCachedLocation, getLocation } from '../service/Location';

// ✅ Match the actual return type from your service
export type LocationResultType =
  | { ok: true; location: Location.LocationObject }
  | { ok: false; error: string };

type LocationContextType = {
  result: LocationResultType | null;
  error: string | null;
  loading: boolean;
  requestLocation: () => Promise<void>;
  cached: () => Promise<void>;
};

export const locationContext = createContext<LocationContextType | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true); // Start true so consumers know we're fetching
  const [result, setResult] = useState<LocationResultType | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function requestLocation() {
    try {
      setLoading(true);
      setError(null);
      const result = await getLocation();

      // ✅ Don't throw — just set the result (getLocation already returns proper type)
      setResult(result);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('Request location error:', err);
      setError(message);
      setResult({ ok: false, error: message });
    } finally {
      setLoading(false);
    }
  }

  async function cached(): Promise<void> {
    try {
      setLoading(true);
      setError(null);
      const result = await getCachedLocation();

      // ✅ Just set result, don't throw
      setResult(result);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      console.error('Cached location error:', err);
      setError(message);
      setResult({ ok: false, error: message });
    } finally {
      setLoading(false);
    }
  }

  // ✅ AUTO-FETCH ON MOUNT — this was missing!
  useEffect(() => {
    cached();
  }, []);

  const value: LocationContextType = {
    result,
    error,
    loading,
    requestLocation,
    cached,
  };

  return (
    <locationContext.Provider value={value}>
      {children}
    </locationContext.Provider>
  );
}
