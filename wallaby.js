module.exports = () => {
  process.env.isWallaby = true;

  return {
    files: [{ pattern: 'src/**/*.ts' }, { pattern: '!src/**/*.test.ts' }],
    tests: ['src/**/*.test.ts'],
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'jest',
    debug: true,
  };
};
