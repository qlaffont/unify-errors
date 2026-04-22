import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import { CustomError } from "./CustomError";

export class Conflict extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, Conflict.prototype);
    this.name = "Conflict";
  }
}
