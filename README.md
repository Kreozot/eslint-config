# @kreozot/eslint-config

[![npm version](https://badge.fury.io/js/@kreozot%2Feslint-config.svg)](https://badge.fury.io/js/@kreozot%2Feslint-config)

Structured shareable ESLint-config with custom rules overrides for JS, TS and TS+React projects.

Based on [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript),
more specific on [TypeScript adaptation](https://www.npmjs.com/package/eslint-config-airbnb-typescript).

Has autotests with precommit and prepublish hooks to ensure that all the rules are defined correctly.

## Usage with TypeScript + React

Installation with all required dependencies (including ESLint and TypeScript):

```
npm i --save-dev @kreozot/eslint-config @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint typescript eslint-config-airbnb eslint-config-airbnb-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

> Why not to add all these dependencies to package.json? Because of [ESLint restrictions](https://eslint.org/docs/developer-guide/shareable-configs#publishing-a-shareable-config).

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
