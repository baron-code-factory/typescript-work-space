module.exports = {
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'gitmoji',
        // releaseRules: [{ type: ':memo:', release: 'patch' }],
      },
    ],
    '@semantic-release/release-notes-generator',
    // '@semantic-release/changelog',
    '@semantic-release/github',
    // '@semantic-release/npm',
    // '@semantic-release/git',
  ],
};

// conventional-changelog-gitmoji
// tommy@tominoMacBook-Pro /V/w/ts> npm i -D conventional-changelog-gitmoji
