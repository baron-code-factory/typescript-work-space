module.exports = {
  hooks: {
    // 'pre-commit': 'npm run tryScript optimization',
    
    'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
  },
};
