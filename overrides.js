module.exports = {
  // Иначе функции становятся менее читаемыми (если возвращают сложные конструкции)
  'arrow-body-style': 'off',
  // Чтобы не прибегать к костылям стиля только ради соблюдения этого ограничения
  'max-len': ['error', {
    code: 120,
    ignoreUrls: true,
    ignoreStrings: true,
    ignoreTemplateLiterals: true,
    ignoreRegExpLiterals: true,
    ignoreComments: false,
    ignorePattern: '^\\s*\/\/ eslint-',
  }],
  // Чтобы обеспечить консистентность наименований переменных при импорте
  'import/prefer-default-export': 'off',
  // В связи с усложнением кода
  'consistent-return': 'off',
  // Для обеспечения консистентности внешнего вида блоков (и удобства модификации кода внутри них)
  'brace-style': [
    'error',
    '1tbs',
    {
      'allowSingleLine': false
    }
  ],
  // Отключаем инкремент по ++, но разрешаем его в теле циклов
  'no-plusplus': [
    'error',
    {
      'allowForLoopAfterthoughts': true
    }
  ],
};
