import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import { CustomError } from "./CustomError";

export class ServiceUnavailable extends CustomError {
  constructor(code: string, options: CustomErrorOptions = {}) {
    super(code, options);

    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    this.name = "ServiceUnavailable";
  }
}
