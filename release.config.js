module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'gitmoji',
        releaseRules: [{ type: ':docs:', release: 'patch' }],
      },
    ],
    '@semantic-release/release-notes-generator',
    // '@semantic-release/changelog',
    '@semantic-release/github',
    // '@semantic-release/npm',
    // '@semantic-release/git',
  ],
};
