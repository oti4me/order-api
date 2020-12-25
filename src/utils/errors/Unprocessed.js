import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export class Unprocessed extends Error {
  /**
   * Constructor for Unprocessed
   *
   * @param message
   */
  constructor(message) {
    super(message);
    const { UNPROCESSABLE_ENTITY } = StatusCodes;
    this.name = getReasonPhrase(UNPROCESSABLE_ENTITY);
    this.statusCode = UNPROCESSABLE_ENTITY;
  }
}
