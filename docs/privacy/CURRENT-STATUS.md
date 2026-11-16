# Verified status — 16 November 2026

Adults18+ only. Individual operator and personal report reviewer confirmed.
Developer Mahmoud_Jaber.craft; privacy craftedbymahmoud@gmail.com. Approved retention
decisions are final. Do not request credential rotation or policy confirmation again.

Production HF main/runtime a0a35d40928662d7a52f4be8ffb831eeabfdde26, CPU-basic.
Live health200; readiness503 intentionally blocked. Neon replacement DB_URL connects
with verified TLS; old credential rejected. Additive schema applied twice, legacy
accounts preserved. Owner-authorized bcrypt conversion changed one administrator's
format, preserving the existing password; actual administrator login succeeds.
No credential reset or user-record deletion. No reverting to plaintext authentication.

Live synthetic report passes receipt-after-commit, ciphertext verification,
unauthorized denial, authenticated queue/read/review/resolution and audit. Expiry
exactly90days after resolution. One clearly synthetic report retained under policy.
Adult issuer works; missing/forged grants, declared minors and obsolete policies
rejected. Short-lived hashed server grants are not proof of adulthood.

Cloudflare Mistral Small3.1 only; no Gemini/paid fallback. BOTH AI/storage requests
from the actual Space fail ConnectTimeout to api.cloudflare.com:443; no diagnosed
DNS or certificate-validation failure. Local APIs work. Exact token permission
group names were not supplied; owner manually reviewed scopes. Introspection403
is not invalid credentials and is not the release blocker. Inference and automatic
recovery are blocked by actual host connectivity. Do not circumvent host controls.

83 backend testsPASS. Real isolated PostgreSQL17/TLS stagingPASS: additive/idempotent
schema, legacy preservation, grants, encrypted review, retention/holds, bcrypt-format
conversion preserving passwords, actual pg_restore and pinned deletion replay.
Real synthetic KV4.8MB/two4MiB chunks verified and cleaned; expiry probe404.
Actual encrypted production archive33576bytes verified by decrypt/hash roundtrip,
schema listing and full data-block decompression without record output/plaintext
file. Separate private KV namespaces/keys; only opaque digest committed on existing
GitHub recovery branch. Private key recovery copy ACL-restricted and excluded fromGit.
Archive limit16MiB, conservative project cap768MiB, absolute30day expiry, immutable
digests and independent Git checkpoint before deletion. Missing/stale objects fail
closed. Provider account quota remains hard stop; no paid fallback/billing change.

First live maintenance prepare failed closed; no report deletion authorized. GitHub
main f223a081ba074bcd5aae2ed345dd769d926d94c9 has the reviewed hourly workflow/script.
Scoped maintenance secret configured with explicit approval; activation variablefalse
until actual Space job passes. No database/storage/recovery keys in Actions runner.
Daily backups/cleanup are not operational and are explicitly disclosed in EN/AR.
Provider-owned backup/log controls remain outside available Neon project access;
only hostname region hint known, not a verified project-region setting. Application
30day rule does not assert every provider copy follows it. Privacy requests remain
the individual operator's manual responsibility30days or sooner by law.

Frontend TypeScript/existing tests/37languages/91UIkeys/434locale paths/privacy-age-
report-contract testsPASS. Receiver config points to actual verified report endpoint.
Protected authorization required; deploymentVerifiedfalse while inference/recovery
blocked. Unrelated pre-existing UI refactor preserved. No Google Play rollout.
Policy publication review covers truthful current limitations; Android safeguards
remain blocked. Record URLs only after actual PagesHTTPS verification.

Remaining actions: restore authorized HF HTTPS egress to api.cloudflare.com:443,
rerun live EN/AR grounding/moderation and checkpointed maintenance, then enable and
verify existing scheduler. Complete licensed/authenticated ten-source HTTPS Tafsir
transport (current sources1/10 HTTPS fail; officialdump covers2/10 only). Obtain fresh
signed Android artifact/runtime/SDK/permission evidence: Windows Gradle immutable
workspace moves still fail, existing keys preserved, old AAB not fresh evidence.

Rollback: reviewed descendant code only retaining bcrypt/current authorization and
encryption. Never revert to exposed/plaintext legacy main. No database restore or
historical deletion as code rollback. Actual restore must remain isolated through
latest checkpoint replay and additive schema/hash-format validation. No further
admin reset or destructive migration approval is pending.
