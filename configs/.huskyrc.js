module.exports = {
    hooks: {
        // "pre-commit": "yarn optimization",
        "pre-commit": "echo ok",
        "prepare-commit-msg": "exec < /dev/tty && npx lintush || true",
    }
}
