module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'gitmoji',
        releaseRules: [
          { type: ':memo:', release: 'patch' },
          { type: ':lipstick:', release: 'patch' },
        ],
      },
    ],
    // '@semantic-release/release-notes-generator',

    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'gitmoji',
      },
    ],
    '@semantic-release/github',
  ],
};
// config: '@dior/conventional-changelog-gitmoji',
