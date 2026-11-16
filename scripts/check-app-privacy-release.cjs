const { spawnSync } = require('node:child_process');
function requiresPrivacyReview(profile) { return profile === 'production'; }
module.exports = { requiresPrivacyReview };
if (require.main === module) {
  if (!requiresPrivacyReview(process.env.EAS_BUILD_PROFILE)) {
    console.log('Privacy production gate: non-production EAS profile; no release attestation.');
  } else {
    const check = spawnSync(process.execPath, ['scripts/verify-privacy.cjs', '--release', '--app-release'], { stdio: 'inherit' });
    if (check.error) console.error('Unable to run privacy production gate: ' + check.error.code);
    process.exitCode = check.status === 0 ? 0 : 1;
  }
}
