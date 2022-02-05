# @kreozot/eslint-config

Based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
more specific on [TypeScript adaptation](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

## Usage with TypeScript + React

Installation with all required dependencies (including ESLint and TypeScript):

```
npm i --save-dev @kreozot/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

Project ESLint configuration example:

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


## Usage with TypeScript

Installation with all required dependencies (including ESLint):

```
npm i --save-dev @kreozot/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import
```

Project ESLint configuration example:

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


## Usage with JavaScript

Installation with all required dependencies (including ESLint):

```
npm i --save-dev @kreozot/eslint-config eslint eslint-config-airbnb-base eslint-plugin-import
```

Project ESLint configuration example:

```json
{
  "extends": [
    "@kreozot/eslint-config/js"
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Project structure

* **overrides** - Common rules overrides
* **overrides-ts** - Rules overrides for TypeScript
* **overrides-react** - Rules overrides for React
* **js.js** - Config entry point for JavaScript
* **ts.js** - Config entry point for TypeScript
* **ts-react.js** - Config entry point for TypeScript + React
