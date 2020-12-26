import { StatusCodes } from 'http-status-codes';

const { OK } = StatusCodes;

/**
 * Returns a json response with status code 200 and a response body
 *
 * @param {any} res
 * @param {any} body
 *
 * @return Response
 */
export const ok = (res, body = {}) => {
  return res.status(OK).json(body);
};
