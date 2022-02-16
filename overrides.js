module.exports = {
  // Arrow functions with immediate return can be wrapped with body for better code reading experience
  'arrow-body-style': 'off',
  // Less aggressive max-len rule
  'max-len': ['error', {
    code: 120,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true,
    ignoreComments: false,
    ignorePattern: '^\\s*\/\/ eslint-',
  }],
  // You can prefer standard export to provide consistency
  'import/prefer-default-export': 'off',
  // For consistency (and better code modification experience in functions)
  'brace-style': [
    'error',
    '1tbs',
    {
      'allowSingleLine': false
    }
  ],
};
