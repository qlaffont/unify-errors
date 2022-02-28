/**
 * Context is used to pass informal data to the exception,
 * We used a string any record to keep the flexibility.
 */
export type CustomErrorContext = Record<'status' | string, any>;

/**
 * You can refer to this typescript wiki:
 * https://github.com/Microsoft/TypeScript-wiki/blob/main/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
 */
export abstract class AbstractCustomError extends Error {

    protected constructor(public message: string, public context?: CustomErrorContext) {
        super(message);
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, AbstractCustomError.prototype);
    }
}

export const HTTP_UNKNOWN_ERROR: number = 520;

export class CustomHttpError implements AbstractCustomError {
    public name: string;

    constructor(public message: string, public context?: CustomErrorContext) {
        this.name = 'HTTP Error';
    }

    /**
     * Get HTTP Error status code
     * status code will be retrieved from context.code
     */
    statusCode(): number {
        return this.context?.status || HTTP_UNKNOWN_ERROR;
    }
}

/**
 * Standard Errors definitions
 * Error names and code comes from standard RFC HTTP status codes
 * https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
 */
/*
export const BadRequest = (context?: string) => new CustomHttpError('Bad Request', { status: 400 });
export const Unauthorized = (context?: string) => new CustomHttpError('Unauthorized', { status: 401 });
export const Forbidden = (context?: string) => new CustomHttpError('Forbidden', { status: 403 });
export const NotFound = (context?: string) => new CustomHttpError('Not Found', { status: 404 });
export const RequestTimeOut = (context?: string) => new CustomHttpError('Request Time-out', { status: 408 });
export const InternalServerError = (context?: string) => new CustomHttpError('Internal Server Error', { status: 500 });
export const NotImplemented = (context?: string) => new CustomHttpError('Not Implemented', { status: 501 });
*/