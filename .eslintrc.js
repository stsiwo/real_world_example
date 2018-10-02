module.exports = {
  "env": {
      "es6": true,
      "browser": true
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
      "no-console": [
        "error", 
        { 
          "allow": [
            "log",
            "warn",
            "error" 
          ] 
        }
      ], 
      "no-undef": "warn",
      "no-useless-escape": "warn",
      "no-unused-vars": "warn"
  }
};