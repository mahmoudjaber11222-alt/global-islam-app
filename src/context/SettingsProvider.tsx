import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { Animated } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';
import { File, Paths } from 'expo-file-system';
import { AdhanReciter } from './AdhanReciterSelector';

const STORAGE_KEYS = {
  VIBRATION: '@athan_vibration',
  PRE_ADHAN_NOTIFICATION: '@pre_adhan_notification',
  ADHAN_VOLUME: '@adhan_volume',
  SELECTED_RECITER: '@selected_adhan_reciter',
};

export interface SettingsContextValue {
  /* ─── Reciter ─── */
  showReciterModal: boolean;
  isDownloading: boolean;
  setShowReciterModal: (show: boolean) => void;
  selectedReciter: AdhanReciter | null;
  handleReciterSelect: (reciter: AdhanReciter) => void;
  cachedReciterUri: string | null;

  /* ─── Notifications ─── */
  vibration: boolean;
  setVibration: (value: boolean) => void;
  preNotification: boolean;
  setPreNotification: (value: boolean) => void;

  /* ─── Audio ─── */
  volume: number;
  setVolume: (value: number) => void;
  isPlaying: boolean;
  playPreview: () => Promise<void>;
  stopPreview: () => Promise<void>;

  /* ─── Misc ─── */
  fadeAnim: Animated.Value;
  refreshSettings: () => Promise<void>;
  isLoading: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  /* ─── State ─── */
  const [showReciterModal, setShowReciterModal] = useState(false);
  const [selectedReciter, setSelectedReciter] = useState<AdhanReciter | null>(
    null,
  );
  const [cachedReciterUri, setCachedReciterUri] = useState<string | null>(null);

  const [vibration, setVibrationState] = useState(true);
  const [preNotification, setPreNotificationState] = useState(true);
  const [volume, setVolumeState] = useState(80);

  const [fadeAnim] = useState(new Animated.Value(0));
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isDownloading, setIsDownloading] = useState(false);
  const audioRef = useRef<Audio.Sound | null>(null);

  /* ─── Helpers ─── */
  const saveSetting = useCallback(async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(`Error saving ${key}:`, error);
    }
  }, []);

  const cacheReciter = useCallback(
    async (reciter: AdhanReciter): Promise<string | undefined> => {
      if (!reciter?.id) return;

      try {
        const cached = await AsyncStorage.getItem(reciter.id);
        if (cached) {
          setCachedReciterUri(cached);
          return cached;
        }

        const url =
          reciter.downloadUrl ||
          'https://media.assabile.com/assabile/adhan_3435370/cbcd8d249dcc.mp3';

        const file = new File(Paths.document, `${reciter.id}.mp3`);
        await AsyncStorage.setItem(reciter.id, file.uri);
        if (!file.exists) {
          setIsDownloading(true);

          await File.downloadFileAsync(url, file)
            .catch((err) => {
              console.log(err);
            })
            .finally(() => {
              setIsDownloading(false);
            });
        }

        setCachedReciterUri(file.uri);
        return file.uri;
      } catch (err) {
        console.error('Cache error:', err);

        return undefined;
      }
    },
    [],
  );

  /* ─── Load / Refresh ─── */
  const refreshSettings = useCallback(async () => {
    try {
      setIsLoading(true);

      const [reciterJson, vibrate, preNotif, vol] = await Promise.all([
        AsyncStorage.getItem(STORAGE_KEYS.SELECTED_RECITER),
        AsyncStorage.getItem(STORAGE_KEYS.VIBRATION),
        AsyncStorage.getItem(STORAGE_KEYS.PRE_ADHAN_NOTIFICATION),
        AsyncStorage.getItem(STORAGE_KEYS.ADHAN_VOLUME),
      ]);

      let reciter: AdhanReciter | null = null;
      if (reciterJson) {
        try {
          reciter = JSON.parse(reciterJson);
        } catch (e) {
          console.error('Parse reciter error:', e);
        }
      }

      setSelectedReciter(reciter);
      setVibrationState(vibrate !== 'false');
      setPreNotificationState(preNotif !== 'false');
      setVolumeState(vol ? parseInt(vol, 10) : 80);

      if (reciter) {
        await cacheReciter(reciter);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setIsLoading(false);
    }
  }, [cacheReciter]);

  useEffect(() => {
    refreshSettings();
    return () => {
      if (audioRef.current) {
        audioRef.current.unloadAsync();
      }
    };
  }, [refreshSettings]);

  /* ─── Actions ─── */
  const handleReciterSelect = useCallback(
    async (reciter: AdhanReciter) => {
      reciter;
      setSelectedReciter(reciter);
      setShowReciterModal(false);
      await saveSetting(STORAGE_KEYS.SELECTED_RECITER, JSON.stringify(reciter));
      await cacheReciter(reciter);
    },
    [saveSetting, cacheReciter],
  );

  const setVibration = useCallback(
    (value: boolean) => {
      setVibrationState(value);
      saveSetting(STORAGE_KEYS.VIBRATION, value.toString());
    },
    [saveSetting],
  );

  useEffect(() => {
    async function se() {
      if (selectedReciter?.id) {
        await stopPreview();
      }
    }
    se();
  }, [selectedReciter?.id]);
  const setPreNotification = useCallback(
    (value: boolean) => {
      setPreNotificationState(value);
      saveSetting(STORAGE_KEYS.PRE_ADHAN_NOTIFICATION, value.toString());
    },
    [saveSetting],
  );

  const setVolume = useCallback(
    (value: number) => {
      const clamped = Math.max(0, Math.min(100, value));
      setVolumeState(clamped);
      saveSetting(STORAGE_KEYS.ADHAN_VOLUME, clamped.toString());
    },
    [saveSetting],
  );

  /* ─── Audio Preview ─── */
  const playPreview = useCallback(async () => {
    if (isPlaying) return;

    try {
      const uri =
        cachedReciterUri ||
        (selectedReciter
          ? await AsyncStorage.getItem(selectedReciter.id)
          : null);

      if (!uri) throw new Error('No cached audio for preview');

      const { sound } = await Audio.Sound.createAsync({ uri }, {}, (status) => {
        if (status.isLoaded) {
          setIsPlaying(status.isPlaying);
        } else {
          setIsPlaying(false);
        }
      });

      audioRef.current = sound;
      await sound.playAsync();
    } catch (err) {
      console.error('Play preview error:', err);
      setIsPlaying(false);
    }
  }, [isPlaying, cachedReciterUri, selectedReciter]);

  const stopPreview = useCallback(async () => {
    if (audioRef.current && selectedReciter?.id) {
      await audioRef.current.stopAsync();
      await audioRef.current.unloadAsync();
      audioRef.current = null;
    }
    setIsPlaying(false);
  }, [selectedReciter?.id]);

  const value: SettingsContextValue = {
    showReciterModal,
    setShowReciterModal,
    selectedReciter,
    handleReciterSelect,
    cachedReciterUri,
    vibration,
    setVibration,
    preNotification,
    setPreNotification,
    volume,
    setVolume,
    isPlaying,
    playPreview,
    stopPreview,
    fadeAnim,
    refreshSettings,
    isLoading,
    isDownloading,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
