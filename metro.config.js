const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Firebase JS SDK's package.json "exports" map isn't fully compatible with
// Metro's package-exports resolution — it picks the wrong entry point and
// Auth/other components never get registered, causing errors like
// "Component auth has not been registered yet".
config.resolver.unstable_enablePackageExports = false;

module.exports = config;
