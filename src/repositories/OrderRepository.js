import { firebase } from '../config/firebase';

export class OrderRepository {
  /**
   * Creates an instance of OrderRepository.
   *
   * @memberOf OrderRepository
   */
  constructor() {
    this.db = firebase.firestore();
  }

  /**
   * Get all order in the collection
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async getAll() {
    try {
      const ordersRef = await this.db.collection('orders').get();
      const orders = ordersRef.docs.map(order => order.data());

      return [orders, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Add new order to the collection
   *
   * @param {object} reqBody HTTP request body
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async addOrder(reqBody) {
    try {
      await this.db
        .collection('orders')
        .doc(reqBody.uid)
        .set(reqBody);

      return [reqBody, null];
    } catch (error) {
      return [null, error];
    }
  }
}

export default new OrderRepository();
