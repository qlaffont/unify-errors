import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import { CustomError } from "./CustomError";

export class NotImplemented extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, NotImplemented.prototype);
    this.name = "NotImplemented";
  }
}
