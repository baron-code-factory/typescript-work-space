import { promisify } from 'util';
// import dateFormat from 'dateformat';
import path from 'path';

const readFileAsync = promisify(require('fs').readFile);

const template = readFileAsync(path.join('./xxx', 'default-template.hbs'));
// const commitTemplate = readFileAsync(path.join('./xxx', 'commit-template.hbs'));

export const plugins = [
  [
    'semantic-release-gitmoji',
    {
      releaseRules: {
        major: [':boom:'],
        minor: [':sparkles:'],
        patch: [':bug:', ':ambulance:', ':lock:'],
      },
      releaseNotes: {
        template,
        // partials: { commitTemplate },
        // helpers: {
        //   datetime(format = 'UTC:yyyy-mm-dd') {
        //     return dateFormat(new Date(), format);
        //   },
        // },
        // issueResolution: {
        //   template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
        //   baseUrl: 'https://github.com',
        //   source: 'github.com',
        // },
      },
    },
  ],
  '@semantic-release/github',
];
