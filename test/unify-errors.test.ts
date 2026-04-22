import { describe, expect, it } from "bun:test";

import {
  BadRequest,
  Conflict,
  CustomError,
  Forbidden,
  InternalServerError,
  NotFound,
  NotImplemented,
  ServiceUnavailable,
  TimeOut,
  TooManyRequests,
  Unauthorized,
} from "../src";

function wrapThrowTest(exception: CustomError) {
  const error = () => {
    throw exception;
  };

  expect(error).toThrow(exception);
  expect(exception.code).toBe("ERROR_CODE");
  expect(exception.message).toBe("Technical message");
  expect(exception.details).toStrictEqual(["detail-1"]);
  expect(exception.localizedMessage).toBe("Localized message");
  expect(exception.toResponse()).toStrictEqual({
    code: "ERROR_CODE",
    message: "Technical message",
    details: ["detail-1"],
    localizedMessage: "Localized message",
  });
  expect(exception.toResponse(false)).toStrictEqual({
    code: "ERROR_CODE",
    message: "Technical message",
    details: [],
    localizedMessage: "Localized message",
  });
}

describe("Errors", () => {
  it("Bad Request", () => {
    wrapThrowTest(
      new BadRequest("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Unauthorized", () => {
    wrapThrowTest(
      new Unauthorized("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Forbidden", () => {
    wrapThrowTest(
      new Forbidden("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Not Found", () => {
    wrapThrowTest(
      new NotFound("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Request Time-out", () => {
    wrapThrowTest(
      new TimeOut("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Internal Server Error", () => {
    wrapThrowTest(
      new InternalServerError("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("TooManyRequests", () => {
    wrapThrowTest(
      new TooManyRequests("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Not Implemented", () => {
    wrapThrowTest(
      new NotImplemented("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Conflict", () => {
    wrapThrowTest(
      new Conflict("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });

  it("Service Unavailable", () => {
    wrapThrowTest(
      new ServiceUnavailable("ERROR_CODE", {
        message: "Technical message",
        details: ["detail-1"],
        localizedMessage: "Localized message",
      }),
    );
  });
});

describe("Integrity", () => {
  it("Should be an error type", () => {
    const error = new BadRequest("BAD_REQUEST");

    expect(error instanceof CustomError).toBeTruthy();
    expect(error instanceof Error).toBeTruthy();
    expect(error instanceof BadRequest).toBeTruthy();
  });
});
