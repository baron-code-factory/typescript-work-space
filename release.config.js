module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@dior/conventional-changelog-gitmoji',
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        config: '@dior/conventional-changelog-gitmoji',
      },
    ],

    '@semantic-release/github',
  ],
};
