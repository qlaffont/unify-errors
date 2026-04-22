[![Test Coverage](https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/test_coverage)](https://codeclimate.com/github/qlaffont/unify-errors/test_coverage) [![Maintainability](https://api.codeclimate.com/v1/badges/6be8e53efc66aabc6a5e/maintainability)](https://codeclimate.com/github/qlaffont/unify-errors/maintainability) ![npm](https://img.shields.io/npm/v/unify-errors) ![npm](https://img.shields.io/npm/dm/unify-errors) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/unify-errors) ![NPM](https://img.shields.io/npm/l/unify-errors)

# unify-errors

Shared application error types for TypeScript services. The package keeps
transport details out of the core model and focuses on a portable payload:
`code`, `message`, `details`, and `localizedMessage`.

## Usage

```typescript
import { BadRequest } from 'unify-errors';

function errorExample() {
  throw new BadRequest('INVALID_AMOUNT', {
    message: 'Amount must be positive',
    details: ['Got: -5'],
    localizedMessage: 'Amount must be greater than zero',
  });
}
```

## Error model

All built-in error classes extend `CustomError`.

```typescript
new BadRequest(code, {
  message,
  details,
  localizedMessage,
});
```

### `CustomErrorOptions`

| Field | Type | Description |
| --- | --- | --- |
| `message` | `string` | Technical message intended for logs or debugging |
| `details` | `string[]` | Optional detail lines that adapters can expose or strip |
| `localizedMessage` | `string` | Optional user-facing message |

### `ErrorResponse`

`CustomError#toResponse(includeDetails?)` serializes the shared payload:

```typescript
{
  code?: string;
  message?: string;
  details: string[];
  localizedMessage?: string;
}
```

## Built-in errors

- `BadRequest`
- `Unauthorized`
- `Forbidden`
- `NotFound`
- `Conflict`
- `TimeOut`
- `TooManyRequests`
- `InternalServerError`
- `NotImplemented`
- `ServiceUnavailable`

## Custom errors

Create a new class by extending `CustomError` and keeping transport status
mapping in your adapter layer.

```typescript
import { CustomError, type CustomErrorOptions } from 'unify-errors';

export class PaymentDeclined extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, PaymentDeclined.prototype);
    this.name = 'PaymentDeclined';
  }
}
```

## Tests

```bash
bun test
```
