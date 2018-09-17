module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "warn",
            2
        ],
        "quotes": [
            "warn",
            "double"
        ],
        "semi": [
            "warn",
            "never"
        ], 
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }
};