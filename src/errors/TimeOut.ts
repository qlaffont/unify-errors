import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class TimeOut extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Request Time-out', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, TimeOut.prototype);
    this.name = 'TimeOut';
  }
}
