module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'arrow-body-style': ['off'],
    camelcase: 'off',
    'no-underscore-dangle': 'off',
  },
};