const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
process.on('uncaughtException', error => {
  console.error('Privacy checks failed: ' + error.message);
  process.exitCode = 1;
});
const root = path.resolve(__dirname, '../privacy-site');
const publicFiles = ['.gitignore', '.nojekyll', 'ar.html', 'index.html', 'robots.txt', 'styles.css'];
assert.deepEqual(fs.readdirSync(root).sort(), publicFiles.sort(), 'Unexpected public file: review before publishing');
const pages = ['index.html', 'ar.html'];
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  assert.match(html, /^<!doctype html>/i);
  assert.match(html, /<meta charset="utf-8">/);
  assert.match(html, /name="viewport"/);
  assert(html.includes('Mahmoud_Jaber.craft'), 'Missing confirmed developer');
  assert(html.includes('mailto:craftedbymahmoud@gmail.com'), 'Missing confirmed public contact');
  assert(html.includes(file === 'ar.html' ? '١٨ عاماً فأكثر' : 'aged 18 and older'), 'Missing current intended minimum age');
  assert.match(html, file === 'ar.html' ? /<html lang="ar" dir="rtl">/ : /<html lang="en" dir="ltr">/);
  assert.equal((html.match(/<h1>/g) || []).length, 1);
  assert.equal((html.match(/<section id=/g) || []).length, 14);
  assert.doesNotMatch(html, /<script\b|<iframe\b|<form\b|<img\b|@import|url\(https?:/i, 'Policy must not rely on JS, forms, or remote assets');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, 'Duplicate IDs');
  for (const [, href] of html.matchAll(/\bhref="([^"]+)"/g)) {
    if (href.startsWith('mailto:')) {
      assert.equal(href, 'mailto:craftedbymahmoud@gmail.com', 'Unconfirmed privacy contact');
      continue;
    }
    if (href.includes('://')) {
      assert(['https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement', 'https://www.cloudflare.com/privacypolicy/', 'https://developers.cloudflare.com/workers-ai/platform/data-usage/'].includes(href), 'Unreviewed external link');
      continue;
    }
    const [target, fragment] = href.split('#');
    const targetPath = path.resolve(root, target || file);
    assert(targetPath.startsWith(root + path.sep), 'Link escapes public folder');
    assert(fs.statSync(targetPath).isFile(), 'Missing link target ' + href);
    if (fragment) assert.match(fs.readFileSync(targetPath, 'utf8'), new RegExp(`\\bid="${fragment}"`), 'Missing anchor ' + href);
  }
}
const englishIds = [...fs.readFileSync(path.join(root, 'index.html'), 'utf8').matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
const arabicIds = [...fs.readFileSync(path.join(root, 'ar.html'), 'utf8').matchAll(/<section id="([^"]+)"/g)].map(m => m[1]);
assert.deepEqual(arabicIds, englishIds, 'Bilingual section parity');
for (const file of publicFiles) {
  assert(fs.lstatSync(path.join(root, file)).isFile(), 'Public assets must be regular files, not links or directories');
  const content = fs.readFileSync(path.join(root, file), 'utf8');
  assert.doesNotMatch(content, /hf\.space|SIGN_PASSWORD|60310646|BEGIN .*PRIVATE KEY|gh[pousr]_[A-Za-z0-9]{20}|AIza[\w-]{30}|sk-[\w-]{20}|[A-Z]:[\\/]/, 'Private configuration or credentials in public files');
}
const release = process.argv.includes('--release');
function requireReview(group) {
  const review = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../docs/privacy/release-review.json'), 'utf8'));
  assert.equal(review.intendedMinimumAge, 18, 'Reassess declarations when intended age changes');
  const required = group === 'policy'
    ? ['providerDataHandlingEvidence', 'retentionDeletionAndTraining', 'adultAudienceAndAgeHandling', 'accuratePolicyAndDataSafety']
    : ['aiModerationAndInAppReporting', 'ageHandlingAndContentReview', 'backendEligibilityAndConsent', 'transportSecurity', 'releaseSdkAndPermissionAudit', 'publicWebsiteAndAndroidVerification'];
  for (const key of required) {
    const item = review[group]?.[key];
    assert(item?.complete === true && typeof item.evidence === 'string' && item.evidence.trim(), `Unresolved ${group} review: ${key}`);
  }
}
if (release) {
  for (const file of pages) {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    assert(!/class="(?:pending|draft)"|pending confirmation|بانتظار التأكيد|review draft|مسودة|unverified|غير متحقَّق|غير متحقّق/i.test(html), 'Unresolved policy facts: publication is blocked');
    assert.doesNotMatch(html, /Effective date pending|يُحدَّد تاريخ السريان/, 'Set a confirmed effective date');
    assert.match(html, /href="mailto:[^"\s]+@[^"\s]+"/, 'Add the confirmed privacy contact');
  }
  requireReview('policy');
}
if (process.argv.includes('--app-release')) {
  requireReview('policy');
  requireReview('app');
  const backend = require('../src/config/aiBackend.json');
  assert(backend.authorizationRequired === true && backend.deploymentVerified === true, 'Verify the protected backend and server-grant flow before app release');
  const reporting = require('../src/config/aiReporting.json');
  assert(reporting.receiverVerified === true && reporting.endpointUrl, 'Verify a working in-app AI report receiver before app release');
  const reportingUrl = new URL(reporting.endpointUrl);
  assert(reportingUrl.protocol === 'https:' && !reportingUrl.username && !reportingUrl.password && !reportingUrl.search && !reportingUrl.hash && !reportingUrl.port && reportingUrl.pathname !== '/', 'Report receiver must be a reviewed HTTPS endpoint without credentials or redirects');
  const config = require('../src/config/privacy.json');
  assert.equal(config.publishedAndVerified, true, 'Verify the public policy before app release');
  const url = new URL(config.policyUrl);
  assert.equal(url.protocol, 'https:');
  assert(!/example\.|localhost|\.test$/.test(url.hostname));
  assert(!url.username && !url.password && !url.search && !url.hash && !url.port);
  assert(url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'));
}
console.log(`Privacy static checks passed (${release ? 'publication' : 'draft'} mode). Only the six allowlisted website files may be uploaded.`);
