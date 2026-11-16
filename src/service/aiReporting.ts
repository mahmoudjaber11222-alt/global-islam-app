import configuration from '../config/aiReporting.json';
import { fetchJson } from './http';

export type ReportCategory = 'unsafe' | 'privacy' | 'other';
export type AiReport = {
  answer: string;
  language: string;
  category: ReportCategory;
  question?: string;
};
type Configuration = { endpointUrl: string; receiverVerified: boolean };
type Post = <T>(url: string, options: RequestInit, timeout: number) => Promise<T>;
export type ReportResult =
  | { status: 'received'; reportId: string }
  | { status: 'unavailable' | 'invalid' | 'failed' };

export function getReportingUrl(config: Configuration = configuration): string | null {
  if (!config.receiverVerified || !config.endpointUrl.trim()) return null;
  try {
    const url = new URL(config.endpointUrl);
    if (url.protocol !== 'https:' || url.username || url.password || url.port || url.search || url.hash ||
      !url.hostname.includes('.') || /(^|\.)(localhost|example\.(com|org|net))$|\.(test|invalid|local)$/i.test(url.hostname) ||
      /^\d+(\.\d+){3}$/.test(url.hostname) || url.pathname === '/') return null;
    return url.href;
  } catch { return null; }
}

/** Explicit user action only; no automatic upload, persistent queue, or logging. */
export async function submitAiReport(
  report: AiReport,
  config: Configuration = configuration,
  post: Post = fetchJson,
): Promise<ReportResult> {
  const url = getReportingUrl(config);
  if (!url) return { status: 'unavailable' };
  if (!report.answer.trim() || report.answer.length > 40_000 ||
    !/^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$/.test(report.language) ||
    !['unsafe', 'privacy', 'other'].includes(report.category) ||
    (report.question !== undefined && (!report.question.trim() || report.question.length > 2500))) {
    return { status: 'invalid' };
  }
  // Allowlist fields so unrelated screen state, IDs, ages and tokens cannot leak.
  const payload = {
    schemaVersion: 1,
    answer: report.answer,
    language: report.language,
    category: report.category,
    ...(report.question === undefined ? {} : { question: report.question }),
  };
  try {
    const receipt = await post<{ reportId?: unknown }>(url, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
      redirect: 'error', credentials: 'omit',
    }, 20_000);
    if (typeof receipt?.reportId !== 'string' || !/^[A-Za-z0-9_-]{8,100}$/.test(receipt.reportId)) return { status: 'failed' };
    return { status: 'received', reportId: receipt.reportId };
  } catch { return { status: 'failed' }; }
}
