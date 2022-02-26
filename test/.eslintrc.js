module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    '../ts-react.js',
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig-eslint.json`,
    ecmaVersion: 2020,
  },
};
