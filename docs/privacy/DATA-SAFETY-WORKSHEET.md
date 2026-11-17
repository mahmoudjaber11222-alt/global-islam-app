# Data Safety worksheet — 17 November 2026

**BLOCKED for final submission:** validate the actual release artifact/runtime.
Collection overall **Yes**. No consumer account creation; admin accounts are separate.

| Data | Collection/sharing and purpose | Evidence, encryption and deletion |
|---|---|---|
| Precise location | Off-device AlAdhan coordinates, including manual coordinates; prayer calendars. Optional permission/manual alternative. Assess service-provider sharing exemption from actual terms. | HTTPS; src/service/prayers.service.ts and LocationProvider. Saved local location/cache persists until removed; clearing device data does not erase provider requests. |
| AI/Hadith questions and recognized text | Other user-generated content/app interactions collected by backend; questions, bounded exact source excerpts and generated explanations pass through the authenticated Render relay to Cloudflare for inference/safety. Selected language/categories. Optional feature. Older translation paths alsoGoogle. | src/screens/AIScreen.tsx,service/hadith.ts; backend privacy/runtime.py,cloudflare.py,bridge_transport.py. Certificate-verified HTTPS on both relay hops; no persistent conversation table. Live English and Arabic generation200 verified; this is not a complete safety or native-runtime certification. Do not infer a religious-belief profile merely from Islamic features; user submissions may contain sensitive information. |
| Offensive-content reports | Selected answer/category/language; question optional. Collected/stored for safety review by individual operator. Assess hosting/storage sharing exceptions. | AES-GCM beforeNeonDB, live receipt/adminreview/resolve/auditPASS. Resolved90d, unresolved review30/max180, limited lawfulholds. Access expiry enforced; physical cleanup/daily automation currently blocked, explicitly disclosed. Backend privacy/store.py,routes.py,recovery.py. |
| Adult authorization | Declaration/policy, hashed opaque grant and issue/expiry times stored. Required for protected AI. No exact age/DOB/ID transmitted. |5min expiry, currentpolicy/method/revocation checked. Live missing/forged/minor/obsolete policy denialPASS. src/service/ageEligibility.ts,aiBackend.ts; backend privacy/runtime.py,routes.py. Self-declaration not verifiedidentity. |
| Audio | Device recognizer may process remotely; do not answerNo solely because backend receives text. Optional voiceinput. | src/components/AI/SpeechToText.tsx. Final device/provider flow and deletion evidence required. No backend recording upload implemented. |
| Network metadata/diagnostics | Services receive IP/request information. First-party diagnostic files time/status, no prompt/IP bodies. In-memory abuse keys ephemeral. Purpose functionality/security/diagnostics. | backend main.py,privacy/operational_logging.py,runtime.py. Approved30day diagnostics; automatic cleanup not yet operational. Provider schedules separate; no blanket ephemeral claim. |
| Privacy correspondence | Email address/message when user contacts operator; optional support/privacy request. | Manual handling30days or sooner bylaw. No automatedemail-deletion guarantee. |
| Identifiers/analytics/crashes | No source adSDK, configuredAnalytics/crash service or push-token registration found. Older binary includes nativeFirebase/MLKit; package presence alone is not transmission. | FCM/Analytics defaults disabled; ACTIVITY_RECOGNITION/AD_ID source exclusions tested. Final mergedmanifest/runtime stillrequired. app.json,plugins/withPrivacyDefaults.cjs,privacyPermissions tests. |
| Preferences/progress/audio files | Local implementations; ordinaryOS backup may retain/restore appdata. Not off-device collection merely because feature exists. | AsyncStorage has no added app encryption. Clearstorage; manageOS backups separately. See DATA-INVENTORY.md. |

Determine collected/shared separately using actual service-provider/ephemeral
definitions; no blanket sharingNo. Optional data stays optional even if selected
feature needs it. Do not answer all-data-encrypted-in-transitYes: originalTafsirHTTP
remains and metadata scope must be evaluated. No ads integration identified in
source; final binary evidence outstanding. Backend administrator accounts do not
trigger consumer account-creation deletion rule. Personaldata requests still apply.

Render processes AI text in transit and already-encrypted backup/journal objects;
it has neither Neon credentials nor report/recovery decryption keys. Its application
does not log request/response bodies. Hosting/network metadata follows provider
practices; this is not a blanket claim of no provider collection or sharing.

Application-managed encrypted production snapshot verified; absolute30day object
expiry tested. Daily automation not active; provider-owned histories/logs/backups
not asserted30days. Restore replay tested isolatedPG, not by restoring production.
17November: a fresh backup passed the actual HF→Render→KV encrypted roundtrip,
an independent opaque Git checkpoint was recorded, and an approved manual commit
deleted zero reports and five expired authorizations. Readiness returned200.
The hourly scheduler remains disabled; no claim of operational daily automation.
Replacement DB credential and password-preserving administrator conversion verified;
no reset or legacy user deletion. Ordinary AI conversations not persistently indexed
by identity; report receipts support proportionate identification of requests.

Definitions: https://support.google.com/googleplay/android-developer/answer/10787469?hl=en
