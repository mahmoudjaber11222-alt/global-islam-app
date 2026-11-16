import AsyncStorage from '@react-native-async-storage/async-storage';

// New policy namespace: prior younger-audience approvals are neither reused nor deleted.
export const AGE_ELIGIBILITY_KEY = '@global_islam/privacy/adult_eligibility_v2';

/** Exact age is transient input: never persist it, log it, or transmit it. */
export function assessAge(input: string): 'eligible' | 'underage' | 'invalid' {
  const normalized = input.trim()
    .replace(/[٠-٩]/g, digit => String('٠١٢٣٤٥٦٧٨٩'.indexOf(digit)))
    .replace(/[۰-۹]/g, digit => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)));
  if (!/^\d{1,3}$/.test(normalized)) return 'invalid';
  const age = Number(normalized);
  if (age < 1 || age > 120) return 'invalid';
  return age >= 18 ? 'eligible' : 'underage';
}

export async function loadAgeEligibility(): Promise<'allowed' | 'blocked' | 'ask'> {
  const raw = await AsyncStorage.getItem(AGE_ELIGIBILITY_KEY);
  if (!raw) return 'ask';
  try {
    const value = JSON.parse(raw);
    if (value?.version !== 2 || value.minimumAge !== 18 || typeof value.eligible !== 'boolean') return 'ask';
    return value.eligible ? 'allowed' : 'blocked';
  } catch {
    return 'ask';
  }
}

/** Does not accept an age argument, preventing accidental age persistence. */
export async function saveAgeEligibility(eligible: boolean): Promise<void> {
  if (typeof eligible !== 'boolean') throw new Error('Invalid eligibility decision');
  await AsyncStorage.setItem(AGE_ELIGIBILITY_KEY, JSON.stringify({ version: 2, minimumAge: 18, eligible }));
}
