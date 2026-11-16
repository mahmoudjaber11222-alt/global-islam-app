# Current verified status — 16 November 2026

Final audience: adults18+ only. Individual operator and AI report reviewer confirmed;
public developer Mahmoud_Jaber.craft, privacy craftedbymahmoud@gmail.com.
Approved retention: diagnostics30d; resolved reports90d after resolution; unresolved
review30d/max180d; rolling backups30d; privacy requests30d or sooner by law; limited
lawful exceptions; completed deletions reapplied after restoration. Do not reconfirm.

## Production evidence

Hugging Face remains c053c99085977c9efe831b9a714334c45e0f8977, RUNNING. Its DB code
reads DB_URL and injected Space Secrets override bundled dotenv. The replacement
Neon credential connects with verified client TLS; the old credential is rejected.
The live database-backed /learn route returns200. No production records changed.
Legacy production still uses Gemini/raw request logging; candidate privacy schema
is absent. Neon CLI's current identity lists no accessible project, so control-plane
backup/log/history settings remain unverified. Administrative password-format
migration is necessary and separately approval-gated; no reset was performed.

## Tested candidate

Backend preparation commit143d4ccab81862ceb1820062d886b5d4c475cd42 on
privacy/adult-preparation preserves real upstream history.71 testsPASS. Disposable
real PostgreSQL17/TLS stagingPASS: additive/idempotent schema and legacy preservation,
server grants/revocation, encrypted report receipt/review/resolution, approved cleanup,
independent deletion journal, restore replay, transaction rollback and password-
preserving administrator hash conversion. This is not production verification.
Cloudflare Free EN/AR synthetic moderation8/8 and grounded generation2/2PASS.
Mistral Small3.1 adapter has no Gemini/paid fallback. Full corpus/safety/runtime
validation remains required. No blanket third-party age-ID mandate established;
minimal self-declaration is not proof of adulthood. Server grants enforce access.

Frontend working tree: TypeScript, existing tests,37-language and privacy/age/report/
backend-contract testsPASS. Unrelated pre-existing UI work is preserved. Direct
Gradle release guard now supplements EAS guard. Fresh manifest build fails on
Windows immutable-cache workspace moves despite isolated cache/no-watch-fs. No new
signedAAB, device/runtime verification, production reporting or provider activation.

## Deployment/publication gates

Independent private persistent backup/journal storage and recovery keys remain
unconfigured. Existing Workers AI token cannot access KV. Two separate KV namespaces
with a namespace-scoped storage token are a possible Free solution pending access
and implementation/testing, not an operating backup system. HF scratch is ephemeral.
Production admin hash conversion requires explicit approval and a verified backup.
Original ten-source Tafsir still uses HTTP; available HTTPS corpus covers only2/10.
No inaccurate source substitution or falsely secure HTTP-upstream proxy was made.

Bilingual policies/guarded Pages preparation remain drafts, not published. GitHub
repo is public; push/admin permissions verified; Pages not configured. Policy facts
for current provider/log/storage practices remain incomplete. URL and all deployment/
reporting activation flags stay blank/false until real verification. No Play rollout.
