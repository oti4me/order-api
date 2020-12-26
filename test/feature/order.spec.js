import { expect } from 'chai'
import supertest from 'supertest'

import app from '../../src/server'

const request = supertest(app)

describe('GET: /api/v1/orders', () => {
  it('should return a 200 success status and a array of orders', (done) => {
    request
      .get('/api/v1/orders')
      .expect(200)
      .end((err, { body }) => {
        if (err) return done(err);
        expect(body.data[0]).to.haveOwnProperty('bookingDate')
        expect(body.data[0]).to.haveOwnProperty('customer')
        expect(body.data[0]).to.haveOwnProperty('title')
        done();
      });
  });
});
