module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@dior/conventional-changelog-gitmoji',
        // preset: 'gitmoji',
        // releaseRules: [
        //   { type: ':memo:', release: 'patch' },
        //   { type: ':lipstick:', release: 'patch' },
        // ],
      },
    ],
    // '@semantic-release/release-notes-generator',
    [
      '@semantic-release/release-notes-generator',
      {
        config: '@dior/conventional-changelog-gitmoji',
        // preset: 'gitmoji',
      },
    ],
    '@semantic-release/github',
  ],
};
// config: '@dior/conventional-changelog-gitmoji',
