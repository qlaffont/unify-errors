import {
  BadRequest,
  CustomError,
  Forbidden,
  InternalServerError,
  NotFound,
  NotImplemented,
  RequestTimeOut,
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
      BadRequest({
        context: 'This is the context',
      }),
      'Bad Request',
    );
  });

  it('Unauthorized', () => {
    wrapThrowTest(
      Unauthorized({
        context: 'This is the context',
      }),
      'Unauthorized',
    );
  });

  it('Forbidden', () => {
    wrapThrowTest(
      Forbidden({
        context: 'This is the context',
      }),
      'Forbidden',
    );
  });

  it('Not Found', () => {
    wrapThrowTest(
      NotFound({
        context: 'This is the context',
      }),
      'Not Found',
    );
  });

  it('Request Time-out', () => {
    wrapThrowTest(
      RequestTimeOut({
        context: 'This is the context',
      }),
      'Request Time-out',
    );
  });

  it('Internal Server Error', () => {
    wrapThrowTest(
      InternalServerError({
        context: 'This is the context',
      }),
      'Internal Server Error',
    );
  });

  it('Not Implemented', () => {
    wrapThrowTest(
      NotImplemented({
        context: 'This is the context',
      }),
      'Not Implemented',
    );
  });
});

describe('Integrity', () => {
  it('Should be an error type', () => {
    const error = BadRequest();

    expect(error instanceof CustomError).toBeTruthy();
    expect(error instanceof Error).toBeTruthy();
  });
});
