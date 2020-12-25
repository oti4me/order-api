module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-console": "4",
    "no-undef": 0,
    "comma-dangle": 0,
    "one-var": 0
  }
};
