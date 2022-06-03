import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class BadRequest extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Bad Request', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, BadRequest.prototype);
  }
}
