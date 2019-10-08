module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'gitmoji',
        releaseRules: [{ type: ':memo:', release: 'patch' }],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
// config: '@dior/conventional-changelog-gitmoji',
