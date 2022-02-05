const overrides = require('./overrides');
const overridesTs = require('./overrides-ts');
const overridesReact = require('./overrides-react');

module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-airbnb/hooks',
    'eslint-config-airbnb-typescript',
  ].map(require.resolve),
  rules: {
    ...overrides,
    ...overridesTs,
    ...overridesReact,
  },
};
