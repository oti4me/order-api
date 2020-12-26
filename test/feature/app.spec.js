import { expect } from 'chai'
import supertest from 'supertest'
import app from '../../src/server'

const request = supertest(app)

describe('GET: /api/v1', () => {
  it('should return a 200 success status and a welcome message', (done) => {
    request
      .get('/api/v1')
      .expect(200)
      .end((err, { body }) => {
        if (err) return done(err);
        expect(body.message).to.equal('Welcome to the API for this great app.');
        done();
      });
  });

  it('should return a 404 for non-existing routes', (done) => {
    request
      .get('/api/v1/notfound')
      .expect(404)
      .end((err, { body }) => {
        if (err) return done(err);
        expect(body.message).to.equal('Not Found');
        done();
      });
  });
});
