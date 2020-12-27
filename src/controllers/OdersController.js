import orderRepo from '../repositories/OrderRepository';
import { ok, created } from '../helpers/response';

export default class OrdersController {
  /**
   * Gets all orders in the collection
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async all(request, response, next) {
    const [orders, error] = await orderRepo.getAll();
    if (error) return next(error);

    return ok(response, { data: orders });
  }

  /**
   * Adds an order to the collection
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async add(request, response, next) {
    const [order, error] = await orderRepo.addOrder(request.body);
    if (error) return next(error);

    return created(response, { ...order });
  }

  /**
   * Gets an order by id
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async one(request, response, next) {
    const [order, error] = await orderRepo.getOne(request.params.id);
    if (error) return next(error);

    return ok(response, { ...order });
  }

  /**
   * Updates order with the provided ID
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async update(request, response, next) {
    const [order, error] = await orderRepo.updateOrder(request);
    if (error) return next(error);

    return ok(response, { ...order });
  }

  /**
   * Deletes order with the provided ID
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async delete({ params }, response, next) {
    const [order, error] = await orderRepo.deleteOrder(params.id);
    if (error) return next(error);

    return ok(response, { ...order });
  }
}
