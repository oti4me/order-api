import { expect, should } from 'chai';
import supertest from 'supertest';

import app from '../../src/server';

const request = supertest(app);

describe('GET: /api/v1/orders', () => {
  it('should return a 200 success status and a array of orders', async () => {
    try {
      const { body } = await request
        .get('/api/v1/orders')
        .expect(200);

      expect(body.data[0]).to.haveOwnProperty('bookingDate');
      expect(body.data[0]).to.haveOwnProperty('title');
    } catch (error) {
      console.log(error)
      throw error
    }

  });
});
