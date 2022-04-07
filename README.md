[![Test Coverage](https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/test_coverage)](https://codeclimate.com/github/flexper/unify-errors/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/maintainability)](https://codeclimate.com/github/flexper/unify-errorss/maintainability) ![npm](https://img.shields.io/npm/v/unify-errors) ![npm](https://img.shields.io/npm/dm/unify-errors) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/unify-errors) ![NPM](https://img.shields.io/npm/l/unify-errors)

# Unify errors

A simple library to normalize typescript standard errors. Feel free to create pull request to define new errors !

## Usage

```typescript
import { BadRequest } from 'unify-errors';

function errorExample() {
    throw BadRequest({
        context: "Example context"
    });
}
```

## API

### BadRequest(context?)

Return: CustomError with Bad Request message.

### Unauthorized(context?)

Return: CustomError with Unauthorized message.

### Forbidden(context?)

Return: CustomError with Forbidden message.

### NotFound(context?)

Return: CustomError with Not Found message.

### RequestTimeOut(context?)

Return: CustomError with Request TimeOut message.

### InternalServerError(context?)

Return: CustomError with Internal Server Error message.

### NotImplemented(context?)

Return: CustomError with Not Implemented message.

### CustomError(message, context?)

The CustomError class extends the basic typescript Error class. It is used to create all custom errors.

***Params***

| Field Name | Type | Default | Description |
| --- | --- | --- | --- |
| message | string | mandatory  | Mandatory error message property  |
| context  | CustomErrorContext  | {} | Optional record of string |

***How to use***

To create a new error type, export a new const function returning your desired custom error.

````typescript
export const BadRequest = (context?: CustomErrorContext) =>
  new CustomError('Bad Request', context);
````

## Tests

To execute jest tests (all errors, type integrity test)

```
pnpm test
```

## Maintain

This package use [TSdx](https://github.com/jaredpalmer/tsdx). Please check documentation to update this package.
