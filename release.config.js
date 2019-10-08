module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@dior/conventional-changelog-gitmoji',
      },
    ],
    '@semantic-release/release-notes-generator',
    // '@semantic-release/github',
  ],
};
