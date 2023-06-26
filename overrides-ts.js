module.exports = {
  // Ignoring TypeScript warnings is dangerous
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': false,
      'minimumDescriptionLength': 10
    }
  ],
  // Return async-function without await inside try-block prevents error catching
  '@typescript-eslint/return-await': 'off',
  // Stop demand 0 indentation in multiline types declaration
  "@typescript-eslint/indent": [
    "error",
    2,
    {
      "ignoredNodes": [
        "TSTypeParameterInstantiation",
        "TSIntersectionType",
        "TSUnionType"
      ]
    }
  ],
  // Comma dangle only on multiline except functions
  "@typescript-eslint/comma-dangle": [
    "error",
    {
      "arrays": "only-multiline",
      "objects": "only-multiline",
      "imports": "only-multiline",
      "exports": "only-multiline",
      "functions": "never"
    }
  ]
};
