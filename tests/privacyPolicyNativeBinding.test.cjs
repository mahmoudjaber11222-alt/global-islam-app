const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');

const fixture = { policyUrl: 'https://privacy.test/global-islam/', publishedAndVerified: true };
let opened = [], rejectNext = false;
const Linking = {
  _validateURL(url) { assert.equal(typeof url, 'string'); assert(url.startsWith('https://')); },
  async openURL(url) {
    assert.equal(this, Linking, 'React Native Linking.openURL requires its receiver');
    this._validateURL(url);
    if (rejectNext) throw new Error('Synthetic native browser failure');
    opened.push(url);
  },
};
const underTest = { exports: {} };
const compiled = ts.transpileModule(fs.readFileSync('src/service/privacyPolicy.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText;
new Function('require', 'module', 'exports', compiled)(name => {
  if (name === 'react-native') return { Linking };
  if (name === '../config/privacy.json') return fixture;
  throw new Error('Unexpected dependency: ' + name);
}, underTest, underTest.exports);

(async () => {
  const { openPrivacyPolicy } = underTest.exports;
  assert.equal(await openPrivacyPolicy('en'), 'opened');
  assert.equal(await openPrivacyPolicy('ar'), 'opened');
  assert.deepEqual(opened, [fixture.policyUrl, fixture.policyUrl + 'ar.html']);
  rejectNext = true;
  assert.equal(await openPrivacyPolicy('en'), 'failed');
  assert.equal(await openPrivacyPolicy('en', undefined, { ...fixture, publishedAndVerified: false }), 'unavailable');
  assert.equal(opened.length, 2);
  console.log('Default native opener preserves Linking receiver; EN/AR routing and fail-closed/error behavior pass.');
})().catch(error => { console.error(error); process.exitCode = 1; });
