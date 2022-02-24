/**
 * You can refer to this typescript wiki:
 * https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
export class CustomError extends Error {

    constructor(public message: string, public code: number, public context?: string) {
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    errorMessage() {
        return `${this.message} (${this.code}): ${this.context}`;
    }
}

/**
 * Standard Errors definitions
 * Error names and code comes from standard RFC HTTP status codes
 * https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 * @param context
 * @constructor
 */
export const BadRequest = (context?: string) => new CustomError('Bad Request', 400, context);
export const Unauthorized = (context?: string) => new CustomError('Unauthorized', 401, context);
export const Forbidden = (context?: string) => new CustomError('Forbidden', 403, context);
export const NotFound = (context?: string) => new CustomError('Not Found', 404, context);
export const RequestTimeOut = (context?: string) => new CustomError('Request Time-out', 408, context);
export const InternalServerError = (context?: string) => new CustomError('Internal Server Error', 500, context);
export const NotImplemented = (context?: string) => new CustomError('Not Implemented', 501, context);
