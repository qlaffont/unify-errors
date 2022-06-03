import { describe, expect, it } from '@jest/globals';

import {
  BadRequest,
  CustomError,
  Forbidden,
  InternalServerError,
  NotFound,
  NotImplemented,
  TimeOut,
  Unauthorized,
} from '../src';

function wrapThrowTest(exception: CustomError, expectedErrorMessage: string) {
  const error = () => {
    throw exception;
  };
  expect(error).toThrow(exception);
  expect(exception.context).toStrictEqual({
    context: 'This is the context',
  });
  expect(exception.message).toBe(expectedErrorMessage);
}

describe('Errors', () => {
  it('Bad Request', () => {
    wrapThrowTest(
      new BadRequest({
        context: 'This is the context',
      }),
      'Bad Request',
    );
  });

  it('Unauthorized', () => {
    wrapThrowTest(
      new Unauthorized({
        context: 'This is the context',
      }),
      'Unauthorized',
    );
  });

  it('Forbidden', () => {
    wrapThrowTest(
      new Forbidden({
        context: 'This is the context',
      }),
      'Forbidden',
    );
  });

  it('Not Found', () => {
    wrapThrowTest(
      new NotFound({
        context: 'This is the context',
      }),
      'Not Found',
    );
  });

  it('Request Time-out', () => {
    wrapThrowTest(
      new TimeOut({
        context: 'This is the context',
      }),
      'Request Time-out',
    );
  });

  it('Internal Server Error', () => {
    wrapThrowTest(
      new InternalServerError({
        context: 'This is the context',
      }),
      'Internal Server Error',
    );
  });

  it('Not Implemented', () => {
    wrapThrowTest(
      new NotImplemented({
        context: 'This is the context',
      }),
      'Not Implemented',
    );
  });
});

describe('Integrity', () => {
  it('Should be an error type', () => {
    const error = new BadRequest();

    expect(error instanceof CustomError).toBeTruthy();
    expect(error instanceof Error).toBeTruthy();
  });
});
