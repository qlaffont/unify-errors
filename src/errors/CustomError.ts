import type { CustomErrorOptions } from "../types/CustomErrorOptions";
import type { ErrorResponse } from "../types/ErrorResponse";

export class CustomError extends Error {
  public readonly code?: string;
  public readonly details: string[];
  public readonly localizedMessage?: string;

  constructor(code?: string, options: CustomErrorOptions = {}) {
    super(options.message ?? "");

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = new.target.name;
    this.code = code;
    this.message = options.message ?? "";
    this.details = options.details ?? [];
    this.localizedMessage = options.localizedMessage;
  }

  public toResponse(includeDetails = true): ErrorResponse {
    return {
      code: this.code,
      message: this.message || undefined,
      details: includeDetails ? this.details : [],
      localizedMessage: this.localizedMessage,
    };
  }
}

export const isCustomError = (error: unknown): error is CustomError => error instanceof CustomError;
