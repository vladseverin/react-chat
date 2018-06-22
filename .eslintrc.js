module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',

  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/jsx-filename-extension': 'off',
    'no-underscore-dangle': 'off',
    'react/jsx-indent': 'off',
  },
};
