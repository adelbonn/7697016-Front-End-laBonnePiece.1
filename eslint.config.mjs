import globals from 'globals';
import spellcheck from 'eslint-plugin-spellcheck';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        plugins: {
            spellcheck
        },
        rules: {
            "no-unused-vars": "warn",
            "no-console": "warn",
            "semi": ["error", "always"],
            "quotes": ["error", "double"],
            "no-undef": "error",
            "spellcheck/spell-checker": [
                "warn",
                {
                    comments: false,
                    strings: false,
                    identifiers: true,
                    minLength: 3
                }
            ]
        }
    }
]