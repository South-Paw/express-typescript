module.exports = {
  extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/quotes': 'off',
    'import/prefer-default-export': 'off',
  },
};
