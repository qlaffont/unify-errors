import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import { CustomError } from "./CustomError";

export class BadRequest extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, BadRequest.prototype);
    this.name = "BadRequest";
  }
}
