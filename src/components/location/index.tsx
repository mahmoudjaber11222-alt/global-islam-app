import useLocation from '@/src/hooks/useLocation';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { showGlobalToast } from '../../app/utils/toast';

export default function LocationScreen() {
  const {
    error,
    result: locationResult,
    requestLocation,
    loading,
    cached,
  } = useLocation();

  useEffect(() => {
    async function se() {
      await cached();
    }
    se();
  }, []);
  useEffect(() => {
    async function se() {
      if (error === 'service_disabled') {
        showGlobalToast(
          'error',
          'Location service is turned off',
          'Please enable location.',
        );

        return;
      }

      if (error === 'not_granted') {
        showGlobalToast(
          'error',
          'Location permission not granted',
          'Please grant location permission.',
        );
        return;
      }

      if (locationResult && locationResult.ok) {
        showGlobalToast('success', 'Location service granted', '');
        await AsyncStorage.setItem('first_time', JSON.stringify(true));
        router.replace('/(tabs)/home');
      }
    }
    se();
  }, [error, locationResult]);

  return (
    <View className="items-center justify-center py-20">
      <View className="w-20 h-20 bg-emerald-50 rounded-full items-center justify-center mb-4">
        <Ionicons name="location-outline" size={32} color="#059669" />
      </View>
      <Text className="text-gray-900 font-bold text-lg mb-2">
        No Prayer Times
      </Text>
      <Text className="text-gray-500 text-center mb-6 max-w-[250px]">
        Enable location services or manually select your location to view prayer
        times.
      </Text>
      <Pressable
        onPress={cached}
        className="bg-emerald-600 rounded-2xl py-3.5 px-8 active:bg-emerald-700 shadow-lg shadow-emerald-200"
      >
        <Text className="text-white font-bold text-base">Get Location</Text>
      </Pressable>
    </View>
  );
}
