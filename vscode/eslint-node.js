// style guide of standart
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  rules: {
    "comma-dangle": [
      "error",
      {
        "arrays": "never",
        "objects": "never",
        "imports": "always",
        "exports": "always",
        "functions": "never"
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "minProperties": 2
        },
        "ObjectPattern": {
          "multiline": false
        },
        "ImportDeclaration": "always",
        "ExportDeclaration": {
          "multiline": true,
          "minProperties": 3
        }
      }
    ]
  },
};
