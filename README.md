<a href="https://codeclimate.com/github/flexper/unify-errors/maintainability"><img src="https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/maintainability" /></a> <a href="https://codeclimate.com/github/flexper/unify-errors/test_coverage"><img src="https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/test_coverage" /></a>
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

**CustomError(message, context?)**

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
