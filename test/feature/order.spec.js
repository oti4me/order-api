import { expect } from 'chai';
import supertest from 'supertest';
import { describe } from 'mocha';
import app from '../../src/server';
import { order, token } from '../mockData/order';

const request = supertest(app);

describe('Orders Controller: /api/v1/orders', () => {
  describe('Orders POST: /api/v1/orders', () => {
    it('should return a 201 success status and a object of the created order', async () => {
      const { body } = await request
        .post('/api/v1/orders')
        .set({ authorization: token })
        .send(order)
        .expect(201);

      expect(body.uid).to.equal(order.uid);
      expect(body.bookingDate).to.equal(order.bookingDate);
      expect(body.title).to.equal(order.title);
    });
    it('should return a 422 error for missing required field', async () => {
      const { body } = await request
        .post('/api/v1/orders')
        .set({ authorization: token })
        .send({ ...order, title: '' })
        .expect(422);

      expect(body.message).to.equal('Request validation failed');
      expect(body.body[0].msg).to.equal('Title is required');
    });
    it('should return a 401 error for missing auth token', async () => {
      const { body } = await request
        .post('/api/v1/orders')
        .send({ ...order, title: '' })
        .expect(401);

      expect(body.message).to.equal('Not authorised to view this resource');
    });
  });
  describe('Orders GET: /api/v1/orders', () => {
    it('should return a 200 success status and a array of orders', async () => {
      const { body } = await request
        .get('/api/v1/orders')
        .set({ authorization: token })
        .expect(200);

      expect(body.data[0]).to.haveOwnProperty('bookingDate');
      expect(body.data[0]).to.haveOwnProperty('title');
    });
  });
  describe('Orders GET: /api/v1/orders/:id', () => {
    it('should return a 200 success status and an object of the provided ID', async () => {
      const { body } = await request
        .get(`/api/v1/orders/${order.uid}`)
        .set({ authorization: token })
        .expect(200);

      expect(body.uid).to.equal(order.uid);
      expect(body.bookingDate).to.equal(order.bookingDate);
      expect(body.title).to.equal(order.title);
    });
    it('should return a 404 if the provided ID does not match an order ID in the collection', async () => {
      const { body } = await request
        .get('/api/v1/orders/thisisaninvalidorderid')
        .set({ authorization: token })
        .expect(404);

      expect(body.message).to.equal('Order with id \'thisisaninvalidorderid\' not found');
    });
  });
  describe('Orders PUT: /api/v1/orders/:id', () => {
    const updateValue = {
      title: 'another title',
      bookingDate: '1554284950002,'
    };
    it('should return a 200 success status and an object of the provided ID', async () => {
      const { body } = await request
        .put(`/api/v1/orders/${order.uid}`)
        .set({ authorization: token })
        .send(updateValue)
        .expect(200);

      expect(body.title).to.equal(updateValue.title);
      expect(body.bookingDate).to.equal(updateValue.bookingDate);
    });
    it('should return a 404 if the provided ID does not match an order ID in the collection', async () => {
      const { body } = await request
        .put('/api/v1/orders/thisisaninvalidorderid')
        .set({ authorization: token })
        .send(updateValue)
        .expect(404);

      expect(body.message).to.equal('Order with id \'thisisaninvalidorderid\' not found');
    });
    it('should return a 422 error for missing required field', async () => {
      const { body } = await request
        .put(`/api/v1/orders/${order.uid}`)
        .set({ authorization: token })
        .send({ ...order, title: '' })
        .expect(422);

      expect(body.message).to.equal('Request validation failed');
      expect(body.body[0].msg).to.equal('Title must be between 3 and 32 chars');
    });
  });
  describe('Orders DELETE: /api/v1/orders/:id', () => {
    it('should return a 200 success status on delete of the order with the provided ID', async () => {
      const { body } = await request
        .delete(`/api/v1/orders/${order.uid}`)
        .set({ authorization: token })
        .expect(200);

      expect(body.orderId).to.equal(order.uid);
    });
    it('should return a 404 if the provided ID does not match an order ID in the collection', async () => {
      const { body } = await request
        .delete(`/api/v1/orders/${order.uid}`)
        .set({ authorization: token })
        .expect(404);

      expect(body.message).to.equal(`Order with id '${order.uid}' not found`);
    });
  });
});
