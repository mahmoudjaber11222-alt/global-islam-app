import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import useStaticText from '../hooks/useStaticText';

interface AthanParams {
  prayerName: string;
  prayerTime: string;
  audioSource: string;
}

export default function AthanScreen() {
  const router = useRouter();
  const { translatedText: tr } = useStaticText();

  const params = useLocalSearchParams();
  const { prayerName, prayerTime, audioSource } = params;

  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // ─── Auto-play athan sound on mount ────────────────────────────────────────
  useEffect(() => {
    let mounted = true;

    async function playAthan() {
      try {
        await Audio.setAudioModeAsync({
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: true,
        });

        const { sound: athanSound } = await Audio.Sound.createAsync(
          audioSource === 'default'
            ? require('../assets/sounds/athan.mp3') // default athan
            : { uri: audioSource }, // custom athan
          { shouldPlay: true, isLooping: false },
        );

        if (mounted) {
          setSound(athanSound);
          setIsPlaying(true);

          athanSound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
              setIsPlaying(false);
            }
          });
        }
      } catch (error) {
        console.error('Failed to play athan:', error);
      }
    }

    playAthan();

    // Auto-dismiss after 80 seconds
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 80000);

    return () => {
      mounted = false;
      clearTimeout(autoDismissTimer);
      sound?.unloadAsync();
    };
  }, [audioSource]);

  // ─── Dismiss handler ───────────────────────────────────────────────────────
  const handleDismiss = async () => {
    if (sound) {
      await sound.stopAsync();
      await sound.unloadAsync();
    }
    router.back(); // or router.replace('/(tabs)') to go home
  };

  const togglePlayPause = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <View className="flex-1 bg-[#0a0a0a] items-center justify-center px-8">
      {/* Prayer Name */}
      <Ionicons name="moon-outline" size={64} color="#c9a96e" />
      <Text className="text-[#c9a96e] text-xs font-bold tracking-[3px] uppercase mt-6">
        {tr?.athan?.prayerTime}
      </Text>
      <Text className="text-[#fafafa] text-5xl font-light tracking-[4px] uppercase mt-3">
        {tr?.prayers?.times[prayerName]}
      </Text>
      <Text className="text-[#a3a3a3] text-lg mt-2">{prayerTime}</Text>

      {/* Audio Controls */}
      <Pressable
        onPress={togglePlayPause}
        className="mt-10 w-20 h-20 rounded-full bg-[#1a1a1a] border border-[#333] items-center justify-center"
      >
        <Ionicons
          name={isPlaying ? tr?.athan?.pause : tr?.athan?.play}
          size={32}
          color="#c9a96e"
        />
      </Pressable>

      {/* Dismiss Button */}
      <Pressable
        onPress={handleDismiss}
        className="mt-12 px-8 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg"
      >
        <Text className="text-[#c9a96e] text-sm font-semibold tracking-wide">
          {tr?.athan?.dismiss}
        </Text>
      </Pressable>
    </View>
  );
}
