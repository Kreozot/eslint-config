module.exports = {
  // Отключение возможности игнорирования предупреждений TypeScript
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
  // Из-за того, что return без await внутри try может приводить к отключению обработки ошибок
  '@typescript-eslint/return-await': 'off',
};
