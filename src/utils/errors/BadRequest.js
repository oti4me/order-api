import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export default class BadRequest extends Error {
  /**
   * Constructor for BadRequest
   *
   * @param message
   */
  constructor(message) {
    super(message);
    const { BAD_REQUEST } = StatusCodes;
    this.name = getReasonPhrase(BAD_REQUEST);
    this.statusCode = BAD_REQUEST;
  }
}
