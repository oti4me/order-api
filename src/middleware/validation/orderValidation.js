const { check, validationResult } = require('express-validator');
import { uid as uuid } from 'uid';
import { Validation } from '../../utils/errors/Validation';

export const orderValidation = {
  /**
   * Checks for validation result, returns next if successful
   *
   * @param {Request} req
   * @param {Response} res
   * @param next
   *
   * @returns next
   */
  createValidationResult: (req, res, next) => {
    const { title, bookingDate, address, customer, uid } = req.body;
    const result = validationResult(req);

    if (!result.isEmpty()) return next(new Validation(result.array()));

    req.body = { title, bookingDate, address, customer, uid: uid || uuid(21) }

    return next();
  },

  createValidator: [
    check('title')
      .notEmpty()
      .withMessage('Title is required')
      .isLength({ min: 3, max: 32 })
      .withMessage('Title must be between 3 and 32 chars'),
    check('bookingDate')
      .notEmpty()
      .withMessage('Booking Date is required'),
    check('address')
      .notEmpty()
      .withMessage('Address is required'),
  ],
};
