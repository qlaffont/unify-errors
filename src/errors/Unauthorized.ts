import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class Unauthorized extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Unauthorized', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, Unauthorized.prototype);
    this.name = 'Unauthorized';
  }
}
