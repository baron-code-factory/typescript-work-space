module.exports = {
    hooks: {
        "pre-commit": "yarn optimization",
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    }
}
