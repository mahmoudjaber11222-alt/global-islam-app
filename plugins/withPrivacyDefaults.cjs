const { withAndroidManifest, withAppBuildGradle, AndroidConfig } = require('expo/config-plugins');
const disabledDefaults = ['firebase_messaging_auto_init_enabled', 'firebase_analytics_collection_enabled'];

function applyPrivacyDefaults(manifest) {
  const app = AndroidConfig.Manifest.getMainApplicationOrThrow(manifest);
  app['meta-data'] ||= [];
  for (const name of disabledDefaults) {
    const existing = app['meta-data'].find(entry => entry.$?.['android:name'] === name);
    if (existing) existing.$['android:value'] = 'false';
    else app['meta-data'].push({ $: { 'android:name': name, 'android:value': 'false' } });
  }
  return manifest;
}
module.exports = function withPrivacyDefaults(config) {
  config = withAndroidManifest(config, result => {
    result.modResults = applyPrivacyDefaults(result.modResults);
    return result;
  });
  return withAppBuildGradle(config, result => {
    if (result.modResults.language !== 'groovy') throw new Error('Review privacy release guard for this Gradle language');
    result.modResults.contents = applyReleaseGuard(result.modResults.contents);
    return result;
  });
};
module.exports.applyPrivacyDefaults = applyPrivacyDefaults;
function applyReleaseGuard(contents) {
  const marker = '// Global Islam privacy release guard';
  if (contents.includes(marker)) return contents;
  return contents + '\n' + marker + "\napply from: new File(rootDir.parentFile, 'scripts/privacy-release.gradle')\n";
}
module.exports.applyReleaseGuard = applyReleaseGuard;
