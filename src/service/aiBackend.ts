import configuration from '../config/aiBackend.json';

type Configuration = { authorizationRequired: boolean; deploymentVerified: boolean };
type Grant = { token: string; expiresAt: number };
let currentGrant: Grant | null = null;
let pendingGrant: Promise<void> | null = null;
export const ADULT_POLICY_VERSION = 'global-islam-18-plus-v3';

export class AiServiceError extends Error {
  constructor(public readonly code: 'AI_DAILY_LIMIT' | 'AI_RATE_LIMIT' | 'AI_AUTHORIZATION_REQUIRED' | 'AI_UNAVAILABLE') {
    super(code);
    this.name = 'AiServiceError';
  }
}

/** Store only a short-lived server-issued bearer in memory. Self-declaration is
 * not identity/age verification. Every protected request is authorized by server storage.
 */
export function setAiServerGrant(grant: Grant, now = Date.now()): void {
  currentGrant = null;
  if (!/^[A-Za-z0-9_-]{43,128}$/.test(grant.token) || !Number.isFinite(grant.expiresAt) ||
    grant.expiresAt <= now || grant.expiresAt > now + 15 * 60_000) {
    throw new AiServiceError('AI_AUTHORIZATION_REQUIRED');
  }
  currentGrant = { ...grant };
}

export function clearAiServerGrant(): void { currentGrant = null; }

/** Request a server grant only after the adult gate passed; transmit no age or DOB. */
export async function ensureAiRequestContext(config: Configuration = configuration): Promise<ReturnType<typeof getAiRequestContext>> {
  if (!config.authorizationRequired && !config.deploymentVerified) return getAiRequestContext(config);
  if (!config.authorizationRequired || !config.deploymentVerified) throw new AiServiceError('AI_UNAVAILABLE');
  try { return getAiRequestContext(config); } catch (error) {
    if (!(error instanceof AiServiceError) || error.code !== 'AI_AUTHORIZATION_REQUIRED') throw error;
  }
  if (!pendingGrant) {
    pendingGrant = (async () => {
      const { loadAgeEligibility } = await import('./ageEligibility');
      if (await loadAgeEligibility() !== 'allowed') throw new AiServiceError('AI_AUTHORIZATION_REQUIRED');
      const grant = await postAiJson<Grant & { assurance: string }>(
        'https://global-islam5-islam-g-5.hf.space/eligibility/adult', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ declaredAdult: true, policyVersion: ADULT_POLICY_VERSION }),
        }, 15_000);
      if (grant.assurance !== 'self_declared_adult') throw new AiServiceError('AI_UNAVAILABLE');
      setAiServerGrant(grant);
    })().finally(() => { pendingGrant = null; });
  }
  await pendingGrant;
  return getAiRequestContext(config);
}

/** Call BEFORE translation or any other sensitive off-device processing. */
export function getAiRequestContext(config: Configuration = configuration, now = Date.now()): {
  legacy: boolean; headers: Record<string, string>;
} {
  if (!config.authorizationRequired && !config.deploymentVerified) return { legacy: true, headers: {} };
  if (!config.authorizationRequired || !config.deploymentVerified) throw new AiServiceError('AI_UNAVAILABLE');
  if (!currentGrant || currentGrant.expiresAt <= now) {
    currentGrant = null;
    throw new AiServiceError('AI_AUTHORIZATION_REQUIRED');
  }
  return { legacy: false, headers: { Authorization: `Bearer ${currentGrant.token}` } };
}

/** Accept only known error codes; never display/log arbitrary provider responses. */
export async function postAiJson<T>(url: string, options: RequestInit, timeout = 60_000): Promise<T> {
  const parsed = new URL(url);
  if (parsed.origin !== 'https://global-islam5-islam-g-5.hf.space' ||
    !['/fatwa/', '/hadith/', '/eligibility/adult'].includes(parsed.pathname) || parsed.username || parsed.password || parsed.search || parsed.hash) {
    throw new AiServiceError('AI_UNAVAILABLE');
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal, credentials: 'omit', redirect: 'error' });
    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        clearAiServerGrant();
        throw new AiServiceError('AI_AUTHORIZATION_REQUIRED');
      }
      if (response.status === 429) {
        const value: unknown = await response.json().catch(() => null);
        if (value && typeof value === 'object' && 'detail' in value) {
          const detail = value.detail;
          if (detail && typeof detail === 'object' && 'code' in detail && detail.code === 'AI_DAILY_LIMIT') {
            throw new AiServiceError('AI_DAILY_LIMIT');
          }
        }
        throw new AiServiceError('AI_RATE_LIMIT');
      }
      throw new AiServiceError('AI_UNAVAILABLE');
    }
    return await response.json() as T;
  } catch (error) {
    if (error instanceof AiServiceError) throw error;
    throw new AiServiceError('AI_UNAVAILABLE');
  } finally { clearTimeout(timer); }
}
