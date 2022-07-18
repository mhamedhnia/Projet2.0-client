const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  root: true,
  extends: ['airbnb', 'airbnb/hooks', 'prettier', 'plugin:react/jsx-runtime'],
  plugins: ['prettier'],
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true,
  },
  globals: {
    Blob: true,
    FileReader: true,
    FormData: true,
    __PATH_PREFIX__: true,
    document: true,
    graphql: true,
    localStorage: true,
    navigator: true,
    window: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/ignore': ['node_modules', '\\.(json|css|jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm)$'],
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'detect',
    },
    'import/extensions': ['.js'],
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['draft', 'state'] }],
    'new-cap': 0,
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['warn', 'only-multiline'],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-unused-vars': 'warn',
    'arrow-body-style': 'warn',
    // Exception for StoryBook and Jest
    // Import
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
      },
    ],
    'react/prop-types': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
  },
};
