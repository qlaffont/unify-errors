/**
 * Context is used to pass informal data to the exception,
 * We used a string any record to keep the flexibility.
 */
export type CustomErrorContext = Record<string, unknown>;

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class CustomError extends Error {
  public name: string;

  constructor(public message: string, public context?: CustomErrorContext) {
    super(message);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
    this.name = 'Error';
  }
}

/**
 * Standard Errors definitions
 * Error names and code comes from standard RFC HTTP status codes
 * https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 */
export const BadRequest = (context?: CustomErrorContext) =>
  new CustomError('Bad Request', context);
export const Unauthorized = (context?: CustomErrorContext) =>
  new CustomError('Unauthorized', context);
export const Forbidden = (context?: CustomErrorContext) =>
  new CustomError('Forbidden', context);
export const NotFound = (context?: CustomErrorContext) =>
  new CustomError('Not Found', context);
export const RequestTimeOut = (context?: CustomErrorContext) =>
  new CustomError('Request Time-out', context);
export const InternalServerError = (context?: CustomErrorContext) =>
  new CustomError('Internal Server Error', context);
export const NotImplemented = (context?: CustomErrorContext) =>
  new CustomError('Not Implemented', context);
