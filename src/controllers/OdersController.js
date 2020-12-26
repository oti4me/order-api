import orderRepo  from '../repositories/OrderRepository';
import { ok } from '../helpers/response';

export class OrdersController {
  /**
   * Creates an instance of OrdersController.
   *
   * @memberOf OrdersController
   */
  constructor() {}

  /**
   * Get all order in the collection
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async all(request, response, next) {
    const [orders, error] = await orderRepo.getAll();
    if(error) return next(error)

    ok(response, { data: orders});
  }
}
