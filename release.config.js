module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@dior/conventional-changelog-gitmoji',
        releaseRules: [{ type: ':memo:', release: 'patch' }],
      },
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
