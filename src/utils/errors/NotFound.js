import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export class NotFound extends Error {
  /**
   * Constructor for NotFound
   *
   * @param message
   */
  constructor(message) {
    super(message);
    const { NOT_FOUND } = StatusCodes;
    this.name = getReasonPhrase(NOT_FOUND);
    this.statusCode = NOT_FOUND;
  }
}
