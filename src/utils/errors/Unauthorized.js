import { StatusCodes, getReasonPhrase } from 'http-status-codes';

export class unauthorized extends Error {
  /**
   * Constructor for unauthorized
   *
   * @param message
   */
  constructor(message) {
    super(message);
    const { UNAUTHORIZED } = StatusCodes;
    this.name = getReasonPhrase(UNAUTHORIZED);
    this.statusCode = UNAUTHORIZED;
  }
}
