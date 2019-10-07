module.exports = {
  plugins: [
    // '@semantic-release/commit-analyzer',
    // '@semantic-release/release-notes-generator',
    // [
    //   '@semantic-release/commit-analyzer',
    //   {
    //     // preset: 'angular',
    //     releaseRules: [
    //       { type: ':memo:', scope: 'README', release: 'patch' },
    //       { type: ':memo:', release: 'patch' },
    //       { type: 'refactor', release: 'patch' },
    //       { type: 'style', release: 'patch' },
    //     ],
    //     parserOpts: {
    //       noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
    //     },
    //   },
    // ],

    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:', ':art:', ':newspaper:'],
        },
      },
    ],
    '@semantic-release/github',
  ],
};
