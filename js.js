const overrides = require('./overrides');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
  ].map(require.resolve),
  rules: {
    ...overrides,
  },
}