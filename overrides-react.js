module.exports = {
  // Потому что для props используется TypeScript
  "react/prop-types": "off",
  // Разрешение привязывать label и по id и по вложенности
  "jsx-a11y/label-has-associated-control": [
    "error",
    {
      assert: "either",
    },
  ],
  // Более чистое и лаконичное написание функциональных React-компонентов
  "react/function-component-definition": [
    "error",
    {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function",
    },
  ],
  // eslint --fix в некоторых случаях некорректно заменяет, и теряются пробелы
  "react/jsx-one-expression-per-line": "off",
  // Вместо defaultProps используются default values в деструкторах props
  "react/require-default-props": "off",
  // Отключение обязательного объявления React при использовании JSX
  "react/react-in-jsx-scope": "off",
  // Включение no-unused-imports для React
  "react/jsx-uses-react": "off",
};
