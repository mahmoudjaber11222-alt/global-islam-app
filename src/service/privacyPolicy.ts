import { Linking } from 'react-native';
import configuration from '../config/privacy.json';

type Configuration = { policyUrl: string; publishedAndVerified: boolean };
export type PrivacyPolicyResult = 'opened' | 'unavailable' | 'failed';

/** Enable only after the final policy is public and both language pages work. */
export function getPrivacyPolicyUrl(
  language: string,
  config: Configuration = configuration,
): string | null {
  if (!config.publishedAndVerified || !config.policyUrl.trim()) return null;
  try {
    const url = new URL(config.policyUrl);
    if (
      url.protocol !== 'https:' ||
      !url.hostname.includes('.') ||
      /(^|\.)(localhost|example\.(com|org|net))$/i.test(url.hostname) ||
      url.username || url.password || url.search || url.hash || url.port ||
      (!url.pathname.endsWith('/') && !url.pathname.endsWith('/index.html'))
    ) return null;
    return language === 'ar' ? new URL('ar.html', url).href : url.href;
  } catch {
    return null;
  }
}

export async function openPrivacyPolicy(
  language: string,
  open: (url: string) => Promise<unknown> = Linking.openURL,
  config: Configuration = configuration,
): Promise<PrivacyPolicyResult> {
  const url = getPrivacyPolicyUrl(language, config);
  if (!url) return 'unavailable';
  try {
    // Direct open avoids Android package-visibility false negatives from canOpenURL.
    await open(url);
    return 'opened';
  } catch {
    return 'failed';
  }
}
