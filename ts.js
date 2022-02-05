const overrides = require('./overrides');
const overridesTs = require('./overrides-ts');

module.exports = {
  extends: [
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-typescript/base',
  ].map(require.resolve),
  rules: {
    ...overrides,
    ...overridesTs,
  },
};
