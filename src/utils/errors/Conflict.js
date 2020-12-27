import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export default class Conflict extends Error {
  /**
   * Constructor for Conflict
   *
   * @param message
   */
  constructor(message) {
    super(message);
    const { CONFLICT } = StatusCodes;
    this.name = getReasonPhrase(CONFLICT);
    this.statusCode = CONFLICT;
  }
}
