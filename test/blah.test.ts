import {NotFound} from "../src";

describe('Errors', () => {
  it('Not Found', () => {
    throw NotFound();
  });
});
