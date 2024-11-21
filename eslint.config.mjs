import global from"global";
export default{extends:[global.eslintConfig]};

import {spellcheck} from "eslint-plugin-spellcheck";

/** @type {import('eslint').Linter.Config[]} */

// export default [
    {files:["**/*.js"],
        langageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser,
        },
        plugins: {
            spellcheck,
        },
        rules: {
            "no-unused-vars":"warn",
            "no-console":"warn",
            "semi":["error", "always"],
            "quotes":["error", "double"],
            "no-undef": "error",
            "spellcheck/spell-checker": 
            ["warn",
                {comments:false,
                    strings:false,
                    identifiers: true,
                    minLength: 3
                }
            ]
        }
    }
]