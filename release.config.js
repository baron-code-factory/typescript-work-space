module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/github',
      {
        assets: [{ commits: [
            {
              commit: {
                long: '68eb2c4d778050b0701136ca129f837d7ed494d2',
                short: '68eb2c4'
              },
              tree: {
                long: '7ab515d12bd2cf431745511ac4ee13fed15ab578',
                short: '7ab515d'
              },
              author: {
                name: 'Me',
                email: 'me@email.com',
                date: 2018-07-22T20:52:44.000Z
              },
              committer: {
                name: 'Me',
                email: 'me@email.com',
                date: 2018-07-22T20:52:44.000Z
              },
              subject: 'feat: a new feature',
              body: 'Description of the new feature',
              hash: '68eb2c4d778050b0701136ca129f837d7ed494d2',
              message: 'feat: a new feature\n\nDescription of the new feature',
              committerDate: 2018-07-22T20:52:44.000Z
            }
           ] }],
      },
    ],
  ],
};
