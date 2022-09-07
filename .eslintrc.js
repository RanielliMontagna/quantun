module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-quantun`
  extends: ['quantun'],
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
};
