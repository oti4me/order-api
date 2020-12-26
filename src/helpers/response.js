import { StatusCodes } from 'http-status-codes';

const { OK, CREATED } = StatusCodes;

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

/**
 * Returns a json response with status code 201 and a response body
 *
 * @param {any} res
 * @param {any} body
 */
export const created = (res, body) => {
  res.status(CREATED).json({
    ...body
  });
};
