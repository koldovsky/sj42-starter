module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': ['eslint:recommended', 'google'],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'camelcase': 'error',
    'valid-jsdoc': 0,
    'eqeqeq': 'error',
    'require-jsdoc': 'off',  // Ignore 'Missing JSDoc comment' error
  },
};
