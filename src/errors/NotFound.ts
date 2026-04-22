import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import { CustomError } from "./CustomError";

export class NotFound extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, NotFound.prototype);
    this.name = "NotFound";
  }
}
