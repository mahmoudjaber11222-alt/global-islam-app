const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
let nativeCalls = 0;
const nativeLinking = {
  _validateURL(url) { assert.equal(typeof url, 'string'); assert(url.startsWith('https://')); },
  async openURL(url) {
    // React Native 0.81 calls this._validateURL inside Linking.openURL.
    assert.equal(this, nativeLinking, 'Default native opener must preserve its receiver');
    this._validateURL(url);
    nativeCalls++;
  },
};
const moduleUnderTest = { exports: {} };
const source = ts.transpileModule(fs.readFileSync('src/service/privacyPolicy.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
new Function('require', 'module', 'exports', source)((name) => {
  if (name === 'react-native') return { Linking: nativeLinking };
  if (name === '../config/privacy.json') return require('../src/config/privacy.json');
  throw new Error('Unexpected dependency: ' + name);
}, moduleUnderTest, moduleUnderTest.exports);
const { getPrivacyPolicyUrl, openPrivacyPolicy } = moduleUnderTest.exports;
// Reserved .test domain is used only in tests, never shipped as configuration.
const configured = { policyUrl: 'https://privacy.test/global-islam-privacy/', publishedAndVerified: true };
(async () => {
  assert.equal(await openPrivacyPolicy('en', undefined, configured), 'opened');
  assert.equal(nativeCalls, 1, 'Exercise default native opener rather than only injected callbacks');
  assert.equal(getPrivacyPolicyUrl('en', configured), configured.policyUrl);
  assert.equal(getPrivacyPolicyUrl('ar', configured), configured.policyUrl + 'ar.html');
  assert.equal(getPrivacyPolicyUrl('fr', configured), configured.policyUrl);
  assert.equal(getPrivacyPolicyUrl('ar', { ...configured, policyUrl: configured.policyUrl + 'index.html' }), configured.policyUrl + 'ar.html');
  for (const policyUrl of ['', 'not a URL', 'http://privacy.test/', 'javascript:alert(1)', 'https://example.com/', 'https://localhost/', 'https://user:pass@privacy.test/', 'https://privacy.test/?tracking=1', 'https://privacy.test/#part', 'https://privacy.test:8443/', 'https://privacy.test/policy']) {
    assert.equal(getPrivacyPolicyUrl('en', { ...configured, policyUrl }), null, policyUrl);
  }
  assert.equal(getPrivacyPolicyUrl('en', { ...configured, publishedAndVerified: false }), null);
  let calls = 0;
  assert.equal(await openPrivacyPolicy('en', async () => { calls++; }, { ...configured, policyUrl: '' }), 'unavailable');
  assert.equal(calls, 0, 'Unconfigured entry must never open a fabricated URL');
  assert.equal(await openPrivacyPolicy('ar', async url => { calls++; assert.equal(url, configured.policyUrl + 'ar.html'); }, configured), 'opened');
  assert.equal(calls, 1);
  assert.equal(await openPrivacyPolicy('en', async () => { throw new Error('No browser/network'); }, configured), 'failed');
  const settings = fs.readFileSync('src/app/(tabs)/settings/index.tsx', 'utf8');
  assert.match(settings, /<PrivacyPolicyRow\s*\/>/);
  console.log('Privacy URL validation, language routing, missing configuration, and browser failure handling passed.');
})().catch(error => { console.error(error); process.exitCode = 1; });
