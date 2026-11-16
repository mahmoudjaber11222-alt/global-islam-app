import AsyncStorage from '@react-native-async-storage/async-storage';
/** One timeout covers headers and body. UI receives a failure instead of waiting indefinitely. */
export async function fetchJson<T>(
  url: string,
  options: RequestInit = {},
  timeout = 25_000,
): Promise<T> {
  const controller = new AbortController();
  const abort = () => controller.abort();
  options.signal?.addEventListener('abort', abort);
  const timer = setTimeout(abort, timeout);
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`HTTP_${response.status}`);
    return (await response.json()) as T;
  } finally {
    clearTimeout(timer);
    options.signal?.removeEventListener('abort', abort);
  }
}
export async function cachedJson<T>(
  url: string,
): Promise<{ value: T; offline: boolean }> {
  const key = '@content_cache_v1:' + url;
  try {
    const value = await fetchJson<T>(url);
    const raw = JSON.stringify(value);
    // Keep individual records below Android SQLite's cursor-window limit.
    if (raw.length < 400_000)
      await AsyncStorage.setItem(key, raw).catch(() => undefined);
    return { value, offline: false };
  } catch (error) {
    const cached = await AsyncStorage.getItem(key).catch(() => null);
    if (cached) {
      try {
        return { value: JSON.parse(cached) as T, offline: true };
      } catch {
        /* retry network next time */
      }
    }
    throw error;
  }
}
