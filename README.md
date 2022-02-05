# @kreozot/eslint-config

За основу взят [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
а [точнее его адаптация под TypeScript](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Использование с TypeScript и React

Установка конфига со всеми необходимыми зависимостями (включая ESLint и TypeScript):

```
npm i --save-dev @kreozot/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Конфигурация ESLint в проекте:

```json
{
  "extends": [
    "@kreozot/eslint-config"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```


## Использование с TypeScript без React

Установка конфига со всеми необходимыми зависимостями (включая ESLint):

```
npm i --save-dev @kreozot/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import
```

Конфигурация ESLint в проекте:

```json
{
  "extends": [
    "@kreozot/eslint-config/ts"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```


## Использование с JavaScript

Установка конфига со всеми необходимыми зависимостями (включая ESLint):

```
npm i --save-dev @kreozot/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import
```

Конфигурация ESLint в проекте:

```json
{
  "extends": [
    "@kreozot/eslint-config/ts"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```


## Структура проекта

* **overrides** - Переопределения общих правил
* **overrides-ts** - Переопределения правил для TypeScript
* **overrides-react** - Переопределения правил для React
* **js.js** - Входная точка для правил JavaScript
* **ts.js** - Входная точка для правил TypeScript
* **ts-react.js** - Входная точка для правил TypeScript + React
