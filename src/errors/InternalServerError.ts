import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class InternalServerError extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Internal Server Error', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}
