/**
 * Returns a not found 404 json response
 *
 * @param {Request} req
 * @param {Response} res
 * @param next
 */
export const notFoundError = (req, res, next) => {
  res.status(404);
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
};

/**
 * Application error response handle
 *
 * @param {Error} err
 * @param {Request} req
 * @param {Response} res
 * @param next
 */
export const errorHandler = (err, req, res, next) => {
  let statusCode;

  if (err.statusCode) {
    statusCode = err.statusCode;
  } else if (res.statusCode && res.statusCode === 200) {
    statusCode = 500;
  } else {
    statusCode = res.statusCode || 500;
  }
  res.status(statusCode);
  res.json({
    message: err.message,
    body: statusCode === 422 ? err.fields : '',
    stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
  });
};
