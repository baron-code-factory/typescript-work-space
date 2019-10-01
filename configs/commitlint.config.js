const scopeEnum = [
  // TODO: add desired scopes here (this is an example)
  'button',
  'checkbox',
  'config',
  'fonts',
  'grid',
  'palette',
  'web-icons',
  'webpack',
];

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', scopeEnum],
  },
};
