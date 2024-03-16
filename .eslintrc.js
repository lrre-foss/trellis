module.exports = {
    "root": true,
    "env": {
        "commonjs": true,
        "es6": true,
        "node": true
    },

    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],

    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "double"],
        "comma-dangle": ["error", "never"]
    }
}