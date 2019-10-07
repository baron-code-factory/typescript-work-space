// import { promisify } from 'util';
// import dateFormat from 'dateformat';
// import path from 'path';

// const readFileAsync = promisify(require('fs').readFile);

// const template = readFileAsync(path.join('./xxx', 'default-template.hbs'));
// const commitTemplate = readFileAsync(path.join('./xxx', 'commit-template.hbs'));

// const template = `{{#if compareUrl}}
// # [v{{nextRelease.version}}]({{compareUrl}}) ({{datetime "UTC:yyyy-mm-dd"}})
// {{else}}
// # v{{nextRelease.version}} ({{datetime "UTC:yyyy-mm-dd"}})
// {{/if}}

// {{#with commits}}
// {{#if sparkles}}
// ## ✨ New Features
// {{#each sparkles}}
// - {{> commitTemplate}}
// {{/each}}
// {{/if}}

// {{#if bug}}
// ## 🐛 Bug Fixes
// {{#each bug}}
// - {{> commitTemplate}}
// {{/each}}
// {{/if}}

// {{#if ambulance}}
// ## 🚑 Critical Hotfixes
// {{#each ambulance}}
// - {{> commitTemplate}}
// {{/each}}
// {{/if}}

// {{#if lock}}
// ## 🔒 Security Issues XXX
// {{#each lock}}
// - {{> commitTemplate}}
// {{/each}}
// {{/if}}

// {{#if boom}}
// ## 💥 Breaking Changes
// {{#each boom}}
// - {{> commitTemplate}}
// {{/each}}
// {{/if}}
// {{/with}}
// `;

module.exports = {
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        releaseRules: {
          major: [':boom:'],
          minor: [':sparkles:'],
          patch: [':bug:', ':ambulance:', ':lock:'],
        },
        releaseNotes: {
          template: 'bbbbbbbbbbbbbbbbbbbbb',
        },
      },
    ],
    '@semantic-release/github',
  ],
};
