[![Test Coverage](https://api.codeclimate.com/v1/badges/e79adf68b976c68f41a6/test_coverage)](https://codeclimate.com/github/flexper/standard-errors/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/e79adf68b976c68f41a6/maintainability)](https://codeclimate.com/github/flexper/standard-errors/maintainability)
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

## Tests

To execute jest tests (all errors, type integrity test)

```
pnpm test
```

## Maintain

This package use [TSdx](https://github.com/jaredpalmer/tsdx). Please check documentation to update this package.