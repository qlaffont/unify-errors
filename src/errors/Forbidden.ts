import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class Forbidden extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Forbidden', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, Forbidden.prototype);
    this.name = 'Forbidden';
  }
}
