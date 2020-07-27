module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, 
    sourceType: "module", 
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    "plugin:react/recommended", 
    "plugin:@typescript-eslint/recommended", 
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended" 
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    "react/prop-types": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    'import/no-named-default': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'no-param-reassign': 0,
  },
};