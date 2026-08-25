import AsyncStorage from '@react-native-async-storage/async-storage';

export const CACHE_LANGUAGE_KEY = 'cached_language';
export async function cacheLanguage(selectedLanguage: string) {
  await AsyncStorage.setItem(CACHE_LANGUAGE_KEY, selectedLanguage);
}
export async function getCacheLanguage() {
  const value = await AsyncStorage.getItem(CACHE_LANGUAGE_KEY);

  return value;
}
