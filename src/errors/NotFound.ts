import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class NotFound extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Not Found');

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}
