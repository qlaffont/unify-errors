import {
  BadRequest,
  CustomError,
  Forbidden,
  InternalServerError,
  NotFound,
  NotImplemented,
  RequestTimeOut,
  Unauthorized
} from "../src";

function wrapThrowTest(exception: CustomError, expectedErrorMessage: string) {
  const error = () => {
    throw exception;
  }
  expect(error).toThrow(exception);
  expect(exception.errorMessage()).toBe(
      expectedErrorMessage
  );
}

describe('Errors', () => {

  it('Bad Request', () => {
    wrapThrowTest(BadRequest('This is the context'), 'Bad Request (400): This is the context')
  });

  it('Unauthorized', () => {
    wrapThrowTest(Unauthorized('This is the context'), 'Unauthorized (401): This is the context')
  });

  it('Forbidden', () => {
    wrapThrowTest(Forbidden('This is the context'), 'Forbidden (403): This is the context')
  });

  it('Not Found', () => {
    wrapThrowTest(NotFound('This is the context'), 'Not Found (404): This is the context')
  });

  it('Request Time-out', () => {
    wrapThrowTest(RequestTimeOut('This is the context'), 'Request Time-out (408): This is the context')
  });

  it('Internal Server Error', () => {
    wrapThrowTest(InternalServerError('This is the context'), 'Internal Server Error (500): This is the context')
  });

  it('Not Implemented', () => {
    wrapThrowTest(NotImplemented('This is the context'), 'Not Implemented (501): This is the context')
  });
});
