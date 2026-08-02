import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Platform } from 'react-native';
const QiblaContext = createContext(null);

// ── Constants ──
const COMPASS_UPDATE_INTERVAL = 100;
const LOCATION_TIME_INTERVAL = 5000;
const LOCATION_DISTANCE_INTERVAL = 10;
const SMOOTHING_FACTOR = 0.15;
const LOCATION_RETRY_ATTEMPTS = 3;
const LOCATION_RETRY_DELAY_MS = 1000;
const LOCATION_ACCURACY_HIGH = 4;

// ── Logger ──
const log = (label, data) => {
  if (true) return;
  // try {
  //   console.log(
  //     `[QIBLA:${label}]`,
  //     typeof data === 'object' ? JSON.stringify(data) : data,
  //   );
  // } catch (e) {
  //   console.log(`[QIBLA:${label}]`, '<unserializable>');
  // }
};
const logError = (label, err) => {
  try {
    console.error(`[QIBLA:ERROR:${label}]`, err?.message || err);
    if (err?.stack) console.error(err.stack);
  } catch (e) {
    console.error(`[QIBLA:ERROR:${label}]`, err);
  }
};

// ── Stub for web / when modules fail ──
const createStubModule = (name) => ({
  _isStub: true,
  _name: name,
  requestForegroundPermissionsAsync: async () => ({
    status: 'granted',
    granted: true,
  }),
  getCurrentPositionAsync: async () => ({
    coords: {
      latitude: 21.4225,
      longitude: 39.8262,
      accuracy: null,
      altitude: null,
    },
  }),
  watchPositionAsync: async () => ({ remove: () => {} }),
  Accuracy: { High: 4 },
  isAvailableAsync: async () => false,
  setUpdateInterval: () => {},
  addListener: () => ({ remove: () => {} }),
  removeAllListeners: () => {},
});

// ── Module refs (loaded lazily) ──
let Location = null;
let DeviceMotion = null;
let Magnetometer = null;
let calculateQiblaDirection = null;
let modulesInitialized = false;

// ── Safe module loader ──
const initModules = async () => {
  if (modulesInitialized) return;
  modulesInitialized = true;

  log('INIT_MODULES', 'Platform: ' + Platform.OS);

  try {
    if (Platform.OS !== 'web') {
      const locModule = await import('expo-location');
      // import() returns { default: module, ...namedExports }
      Location = locModule.default || locModule;
      log('INIT_MODULES', 'expo-location loaded');
    } else {
      log('INIT_MODULES', 'Web: using stub location');
      Location = createStubModule('Location');
    }
  } catch (err) {
    logError('INIT_MODULES_location', err);
    Location = createStubModule('Location');
  }

  try {
    if (Platform.OS !== 'web') {
      const sensorsModule = require('expo-sensors');
      DeviceMotion = sensorsModule?.DeviceMotion;
      Magnetometer = sensorsModule?.Magnetometer;
      log('INIT_MODULES', 'expo-sensors loaded');
    } else {
      log('INIT_MODULES', 'Web: using stub sensors');
      DeviceMotion = createStubModule('DeviceMotion');
      Magnetometer = createStubModule('Magnetometer');
    }
  } catch (err) {
    logError('INIT_MODULES_sensors', err);
    DeviceMotion = createStubModule('DeviceMotion');
    Magnetometer = createStubModule('Magnetometer');
  }

  try {
    const qiblaModule = require('../utils/qibla');
    calculateQiblaDirection =
      qiblaModule.calculateQiblaDirection || qiblaModule.default || qiblaModule;
    log('INIT_MODULES', 'qibla utils loaded');
  } catch (err) {
    logError('INIT_MODULES_qibla', err);
    calculateQiblaDirection = (lat, lng) => {
      const KAABA_LAT = 21.4225;
      const KAABA_LNG = 39.8262;
      const dLng = ((KAABA_LNG - lng) * Math.PI) / 180;
      const lat1 = (lat * Math.PI) / 180;
      const lat2 = (KAABA_LAT * Math.PI) / 180;
      const y = Math.sin(dLng) * Math.cos(lat2);
      const x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
      let bearing = (Math.atan2(y, x) * 180) / Math.PI;
      return (bearing + 360) % 360;
    };
  }
};

// ── Vector math ──
const angleToVector = (angleDeg) => {
  try {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: Math.cos(rad), y: Math.sin(rad) };
  } catch (err) {
    logError('angleToVector', err);
    return { x: 1, y: 0 };
  }
};

const vectorToAngle = (vec) => {
  try {
    if (!vec || typeof vec.x !== 'number' || typeof vec.y !== 'number')
      return 0;
    const rad = Math.atan2(vec.y, vec.x);
    let deg = (rad * 180) / Math.PI;
    if (deg < 0) deg += 360;
    return deg;
  } catch (err) {
    logError('vectorToAngle', err);
    return 0;
  }
};

const smoothHeading = (prevVector, newHeading, alpha) => {
  try {
    const newVec = angleToVector(newHeading);
    const smoothed = {
      x: prevVector.x * (1 - alpha) + newVec.x * alpha,
      y: prevVector.y * (1 - alpha) + newVec.y * alpha,
    };
    return { vector: smoothed, angle: vectorToAngle(smoothed) };
  } catch (err) {
    logError('smoothHeading', err);
    return { vector: prevVector || { x: 1, y: 0 }, angle: newHeading || 0 };
  }
};

// ── FIXED: Magnetometer heading calculation ──
// Android magnetometer: Y points North (top of phone), X points East (right side)
// atan2(x, y) gives 0°=North, 90°=East, 180°=South, 270°=West (clockwise)
const calculateMagnetometerHeading = (data) => {
  try {
    if (!data || typeof data.x !== 'number' || typeof data.y !== 'number')
      return null;
    // Swapped from atan2(y, x) to atan2(x, y) for correct compass orientation
    let heading = Math.atan2(data.x, data.y) * (180 / Math.PI);
    if (heading < 0) heading += 360;
    return heading;
  } catch (err) {
    logError('calculateMagnetometerHeading', err);
    return null;
  }
};

// ── PROVIDER ──
export function QiblaProvider({ children }) {
  // log('PROVIDER', 'Rendering');

  // ── ALL HOOKS MUST BE DECLARED HERE, UNCONDITIONALLY ──
  // Module readiness state
  const [ready, setReady] = useState(false);
  const [initError, setInitError] = useState('');

  // Core state
  const [error, setError] = useState('');
  const [liveUserCoords, setLiveUserCoords] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [compassHeading, setCompassHeading] = useState(0);
  const [hasPermission, setHasPermission] = useState(false);
  const [isTrackingLocation, setIsTrackingLocation] = useState(false);
  const [isCompassActive, setIsCompassActive] = useState(false);
  const [headingAccuracy, setHeadingAccuracy] = useState(null);

  // Refs
  const locationSubscription = useRef(null);
  const magnetometerSubscription = useRef(null);
  const deviceMotionSubscription = useRef(null);
  const headingVectorRef = useRef({ x: 1, y: 0 });
  const isMountedRef = useRef(true);

  // ── Safe setters ──
  const safeSetError = useCallback((msg) => {
    if (isMountedRef.current) setError(msg);
  }, []);
  const safeSetLoading = useCallback((val) => {
    if (isMountedRef.current) setLoading(val);
  }, []);
  const safeSetLiveUserCoords = useCallback((coords) => {
    if (isMountedRef.current) setLiveUserCoords(coords);
  }, []);
  const safeSetCompassHeading = useCallback((heading) => {
    if (isMountedRef.current) setCompassHeading(heading);
  }, []);
  const safeSetIsCompassActive = useCallback((val) => {
    if (isMountedRef.current) setIsCompassActive(val);
  }, []);
  const safeSetIsTrackingLocation = useCallback((val) => {
    if (isMountedRef.current) setIsTrackingLocation(val);
  }, []);
  const safeSetHeadingAccuracy = useCallback((val) => {
    if (isMountedRef.current) setHeadingAccuracy(val);
  }, []);
  const safeSetHasPermission = useCallback((val) => {
    if (isMountedRef.current) setHasPermission(val);
  }, []);

  // ── Initialize modules (FIXED: properly awaited) ──
  useEffect(() => {
    log('PROVIDER_MOUNT', 'useEffect running');
    let cancelled = false;
    (async () => {
      try {
        await initModules();
        if (!cancelled) {
          setReady(true);
          log('PROVIDER_MOUNT', 'Ready');
        }
      } catch (err) {
        logError('PROVIDER_MOUNT', err);
        if (!cancelled) setInitError(err.message);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // ── Cleanup ──
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      try {
        if (magnetometerSubscription.current)
          magnetometerSubscription.current.remove();
        if (deviceMotionSubscription.current)
          deviceMotionSubscription.current.remove();
        if (locationSubscription.current) locationSubscription.current.remove();
        if (Magnetometer && !Magnetometer._isStub)
          Magnetometer.removeAllListeners?.();
        if (DeviceMotion && !DeviceMotion._isStub)
          DeviceMotion.removeAllListeners?.();
      } catch (err) {
        logError('UNMOUNT', err);
      }
    };
  }, []);

  // ── Derived values ──
  const bearing = useMemo(() => {
    try {
      if (!liveUserCoords || !calculateQiblaDirection) return 0;
      return calculateQiblaDirection(
        liveUserCoords.latitude,
        liveUserCoords.longitude,
      );
    } catch (err) {
      logError('bearing', err);
      return 0;
    }
  }, [liveUserCoords]);

  const rotation = useMemo(() => {
    try {
      return (((bearing - compassHeading) % 360) + 360) % 360;
    } catch (err) {
      logError('rotation', err);
      return 0;
    }
  }, [bearing, compassHeading]);

  const clearError = useCallback(() => {
    if (isMountedRef.current) setError('');
  }, []);

  // ── Permissions ──
  const requestPermissions = useCallback(async () => {
    log('PERMISSIONS', 'Starting...');
    try {
      safeSetError('');

      if (!Location) {
        throw new Error('Location module not available');
      }

      const locResponse = await Location.requestForegroundPermissionsAsync();
      log('PERMISSIONS', 'Response: ' + JSON.stringify(locResponse));

      const locStatus = locResponse?.status;
      log('PERMISSIONS', 'status = ' + locStatus);

      if (locStatus !== 'granted') {
        safeSetError('Location permission denied: ' + locStatus);
        safeSetHasPermission(false);
        return false;
      }

      if (Platform.OS === 'ios' && DeviceMotion && !DeviceMotion._isStub) {
        log('PERMISSIONS', 'iOS: checking DeviceMotion...');
        if (typeof DeviceMotion.isAvailableAsync === 'function') {
          const isAvailable = await DeviceMotion.isAvailableAsync();
          log('PERMISSIONS', 'DeviceMotion available: ' + isAvailable);
          if (!isAvailable) {
            safeSetError('Motion sensors not available');
            safeSetHasPermission(false);
            return false;
          }
        }
      }

      safeSetHasPermission(true);
      return true;
    } catch (err) {
      logError('PERMISSIONS', err);
      safeSetError('Permission error: ' + err.message);
      return false;
    }
  }, [safeSetError, safeSetHasPermission]);

  // ── Compass ──
  const startCompass = useCallback(async () => {
    log('COMPASS', 'Starting...');
    try {
      if (magnetometerSubscription.current) {
        magnetometerSubscription.current.remove();
        magnetometerSubscription.current = null;
      }
      if (deviceMotionSubscription.current) {
        deviceMotionSubscription.current.remove();
        deviceMotionSubscription.current = null;
      }

      if (
        Magnetometer &&
        !Magnetometer._isStub &&
        typeof Magnetometer.isAvailableAsync === 'function'
      ) {
        const available = await Magnetometer.isAvailableAsync();
        log('COMPASS', 'Magnetometer available: ' + available);

        if (available) {
          Magnetometer.setUpdateInterval?.(COMPASS_UPDATE_INTERVAL);
          magnetometerSubscription.current = Magnetometer.addListener(
            (data) => {
              try {
                if (!isMountedRef.current) return;
                const rawHeading = calculateMagnetometerHeading(data);
                if (rawHeading === null) return;
                const { vector, angle } = smoothHeading(
                  headingVectorRef.current,
                  rawHeading,
                  SMOOTHING_FACTOR,
                );
                headingVectorRef.current = vector;
                safeSetCompassHeading(angle);
                safeSetHeadingAccuracy(5);
              } catch (e) {
                logError('MAG_LISTENER', e);
              }
            },
          );
          safeSetIsCompassActive(true);
          log('COMPASS', 'Magnetometer started');
          return;
        }
      }

      if (
        DeviceMotion &&
        !DeviceMotion._isStub &&
        typeof DeviceMotion.isAvailableAsync === 'function'
      ) {
        const available = await DeviceMotion.isAvailableAsync();
        log('COMPASS', 'DeviceMotion available: ' + available);

        if (available) {
          DeviceMotion.setUpdateInterval?.(COMPASS_UPDATE_INTERVAL);
          deviceMotionSubscription.current = DeviceMotion.addListener(
            (data) => {
              try {
                if (!isMountedRef.current) return;
                let heading = null;
                if (data?.rotation?.alpha != null) {
                  const alpha = (data.rotation.alpha * 180) / Math.PI;
                  heading = (((360 - alpha) % 360) + 360) % 360;
                }
                if (heading === null) return;
                const { vector, angle } = smoothHeading(
                  headingVectorRef.current,
                  heading,
                  SMOOTHING_FACTOR,
                );
                headingVectorRef.current = vector;
                safeSetCompassHeading(angle);
                safeSetHeadingAccuracy(15);
              } catch (e) {
                logError('DM_LISTENER', e);
              }
            },
          );
          safeSetIsCompassActive(true);
          log('COMPASS', 'DeviceMotion started');
          return;
        }
      }

      safeSetError('No compass sensors available');
      safeSetIsCompassActive(false);
    } catch (err) {
      logError('COMPASS', err);
      safeSetError('Compass error: ' + err.message);
      safeSetIsCompassActive(false);
    }
  }, [
    safeSetError,
    safeSetIsCompassActive,
    safeSetCompassHeading,
    safeSetHeadingAccuracy,
  ]);

  const stopCompass = useCallback(() => {
    try {
      if (magnetometerSubscription.current) {
        magnetometerSubscription.current.remove();
        magnetometerSubscription.current = null;
      }
      if (deviceMotionSubscription.current) {
        deviceMotionSubscription.current.remove();
        deviceMotionSubscription.current = null;
      }
      safeSetIsCompassActive(false);
      safeSetHeadingAccuracy(null);
    } catch (err) {
      logError('STOP_COMPASS', err);
    }
  }, [safeSetIsCompassActive, safeSetHeadingAccuracy]);

  // ── Location ──
  const getLocation = useCallback(async () => {
    log('GET_LOC', 'Starting...');
    safeSetLoading(true);
    safeSetError('');

    try {
      if (!Location) throw new Error('Location not available');

      const accuracyValue = Location.Accuracy?.High || LOCATION_ACCURACY_HIGH;
      log('GET_LOC', 'Accuracy: ' + accuracyValue);

      const location = await Location.getCurrentPositionAsync({
        accuracy: accuracyValue,
      });
      log('GET_LOC', 'Got: ' + JSON.stringify(location?.coords));

      if (!isMountedRef.current) return;
      if (!location?.coords) throw new Error('No coords');

      safeSetLiveUserCoords({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
        altitude: location.coords.altitude,
      });
    } catch (err) {
      logError('GET_LOC', err);
      if (isMountedRef.current) safeSetError(err?.message || 'Location error');
    } finally {
      safeSetLoading(false);
    }
  }, [safeSetLoading, safeSetError, safeSetLiveUserCoords]);

  const startLocationTracking = useCallback(async () => {
    log('TRACK', 'Starting...');
    safeSetError('');

    try {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
        locationSubscription.current = null;
      }

      if (!Location) throw new Error('Location not available');

      const accuracyValue = Location.Accuracy?.High || LOCATION_ACCURACY_HIGH;

      locationSubscription.current = await Location.watchPositionAsync(
        {
          accuracy: accuracyValue,
          timeInterval: LOCATION_TIME_INTERVAL,
          distanceInterval: LOCATION_DISTANCE_INTERVAL,
        },
        (location) => {
          try {
            if (!isMountedRef.current) return;
            if (!location?.coords) return;
            safeSetLiveUserCoords({
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              accuracy: location.coords.accuracy,
              altitude: location.coords.altitude,
            });
          } catch (e) {
            logError('TRACK_LISTENER', e);
          }
        },
      );

      safeSetIsTrackingLocation(true);
      log('TRACK', 'Started');
    } catch (err) {
      logError('TRACK', err);
      safeSetError(err?.message || 'Tracking error');
      safeSetIsTrackingLocation(false);
    }
  }, [safeSetError, safeSetIsTrackingLocation, safeSetLiveUserCoords]);

  const stopLocationTracking = useCallback(() => {
    try {
      if (locationSubscription.current) {
        locationSubscription.current.remove();
        locationSubscription.current = null;
      }
      safeSetIsTrackingLocation(false);
    } catch (err) {
      logError('STOP_TRACK', err);
    }
  }, [safeSetIsTrackingLocation]);

  // ── Main entry ──
  const enableCompassHandler = useCallback(async () => {
    log('ENABLE', 'Called');
    if (loading) return;

    safeSetLoading(true);
    clearError();

    const permitted = await requestPermissions();
    log('ENABLE', 'Permitted: ' + permitted);
    if (!permitted) {
      safeSetLoading(false);
      return;
    }

    await Promise.all([
      startCompass().catch((e) => logError('ENABLE_compass', e)),
      getLocation().catch((e) => logError('ENABLE_loc', e)),
    ]);

    await startLocationTracking().catch((e) => logError('ENABLE_track', e));

    safeSetLoading(false);
    log('ENABLE', 'Done');
  }, [
    loading,
    clearError,
    requestPermissions,
    startCompass,
    getLocation,
    startLocationTracking,
    safeSetLoading,
  ]);

  // ── Build context value ──
  const value = useMemo(() => {
    // If not ready yet, return stub value
    if (!ready) {
      return {
        bearing: 0,
        rotation: 0,
        compassHeading: 0,
        liveUserCoords: null,
        error: initError || '',
        loading: true,
        hasPermission: false,
        isTrackingLocation: false,
        isCompassActive: false,
        headingAccuracy: null,
        requestPermissions: async () => false,
        getLocation: async () => {},
        startLocationTracking: async () => {},
        stopLocationTracking: () => {},
        startCompass: async () => {},
        stopCompass: () => {},
        enableCompassHandler: async () => {},
        clearError: () => {},
      };
    }

    // Normal value
    return {
      bearing,
      rotation,
      compassHeading,
      liveUserCoords,
      error,
      loading,
      hasPermission,
      isTrackingLocation,
      isCompassActive,
      headingAccuracy,
      requestPermissions,
      getLocation,
      startLocationTracking,
      stopLocationTracking,
      startCompass,
      stopCompass,
      enableCompassHandler,
      clearError,
    };
  }, [
    ready,
    initError,
    bearing,
    rotation,
    compassHeading,
    liveUserCoords,
    error,
    loading,
    hasPermission,
    isTrackingLocation,
    isCompassActive,
    headingAccuracy,
    requestPermissions,
    getLocation,
    startLocationTracking,
    stopLocationTracking,
    startCompass,
    stopCompass,
    enableCompassHandler,
    clearError,
  ]);
  useEffect(() => {
    log('PROVIDER', 'Rendering with value, ready=' + ready);
  }, [ready]);
  return (
    <QiblaContext.Provider value={value}>{children}</QiblaContext.Provider>
  );
}

export const useQibla = () => {
  const context = React.useContext(QiblaContext);
  if (!context) throw new Error('useQibla must be used within QiblaProvider');
  return context;
};

export default {
  QiblaContext,
  QiblaProvider,
};
