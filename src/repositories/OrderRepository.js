import { firebase } from '../config/firebase';
import { ok } from '../helpers/response';

export class OrderRepository {
  /**
   * Creates an instance of OrderRepository.
   *
   * @memberOf OrderRepository
   */
  constructor() {
    this.db = firebase.firestore()
  }

  /**
   * Get all order in the collection
   *
   * @param {object} request HTTP request object
   * @param {object} response HTTP response object
   * @param next
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async getAll(request, response, next) {
    try {
      const ordersRef = await this.db.collection('orders').get();
      const orders = ordersRef.docs.map(order => order.data())

      return [orders, null];
    } catch (error) {
      return [null, error];
    }
  }
}

export default new OrderRepository()
