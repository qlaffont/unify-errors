import { CustomErrorContext } from '../types/CustomErrorContext';
import { CustomError } from './CustomError';

/**
 * https://stackoverflow.com/questions/31626231/custom-error-class-in-typescript
 */
export class TooManyRequests extends CustomError {
  constructor(public context?: CustomErrorContext) {
    super('Too Many Requests', context);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, TooManyRequests.prototype);
    this.name = 'TooManyRequests';
  }
}
