module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'atom',
        releaseRules: [{ type: ':memo:', release: 'patch' }],
      },
    ],
    // '@semantic-release/release-notes-generator',
    [
      'semantic-release/release-notes-generator',
      {
        preset: 'atom',
      },
    ],
    '@semantic-release/github',
  ],
};
// config: '@dior/conventional-changelog-gitmoji',
