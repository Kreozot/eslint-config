module.exports = {
  // Disable propTypes in favor of TypeScript types
  "react/prop-types": "off",
  // Allow binding label tags by both id and parenting
  "jsx-a11y/label-has-associated-control": [
    "error",
    {
      assert: "either",
    },
  ],
  // For consistency and simplicity
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  // eslint --fix can break some code otherwise (removing spaces in text with tags)
  "react/jsx-one-expression-per-line": "off",
  // Disable defaultProps in favor of default values in props
  "react/require-default-props": "off",
  // There is no need to import react package in React 17
  "react/react-in-jsx-scope": "off",
  // Enable no-unused-imports warning for react package
  "react/jsx-uses-react": "off",
  // Allow to use string inside fragment (for TS type consistency)
  "react/jsx-no-useless-fragment": [
    "error",
    {
      "allowExpressions": true
    }
  ]
};
