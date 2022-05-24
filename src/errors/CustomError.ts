import { CustomErrorContext } from '../types/CustomErrorContext';

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
