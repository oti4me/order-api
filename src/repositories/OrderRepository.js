import {firebase} from '../config/firebase';
import {NotFound} from '../utils/errors/NotFound'

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
      const ordersRef = await this.db
        .collection('orders')
        .get();
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
      const orderRef = await this.getOrderDoc(reqBody.uid);
      await orderRef.set(reqBody);

      return [reqBody, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Gets an order by from the collection
   *
   * @param {string} orderId
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async getOne(orderId) {
    try {
      const orderRef = await this.getOrderDoc(orderId);
      const order = await orderRef.get()

      if(!order.data()) {
        return [null, new NotFound(`Order with id '${orderId}' not found`)];
      }

      return [order.data(), null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Update order with the provided ID on the collection
   *
   * @param {Object} Request
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async updateOrder({ params, body }) {
    try {
      const orderRef = await this.getOrderDoc(params.id);
      const order = await orderRef.get();

      if(!order.data()) {
        return [null, new NotFound(`Order with id '${params.id}' not found`)];
      }

      await orderRef.update(body);

      return [{ ...order.data(), ...body }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Deletes an order with the provided ID from the collection
   *
   * @param {string} orderID
   *
   * @returns {object} error object on failure or returns order object on success
   */
  async deleteOrder(orderID) {
    try {
      const orderRef = await this.getOrderDoc(orderID);
      const order = await orderRef.get();

      if(!order.data()) {
        return [null, new NotFound(`Order with id '${orderID}' not found`)];
      }

      await orderRef.delete();

      return [{ orderId: orderID }, null];
    } catch (error) {
      return [null, error];
    }
  }

  /**
   * Gets order collection by doc ID
   *
   * @param orderID
   * @return {Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData>>}
   */
   async getOrderDoc(orderID) {
    return this.db
      .collection('orders')
      .doc(orderID);
  }
}

export default new OrderRepository();
