const request = require('supertest');
const app = require('../app');
const db = require('./db');

const agent = request.agent(app);

beforeAll(async () => await db.connect());

afterAll(async () => await db.close());

describe('POST api/users/999/activeStreams', () => {
  test('SETUP: A new active stream should be added', (done) => {
    agent
      .post('/api/users/999/activeStreams')
      .send({ deviceId: '1234' })
      .expect(201)
      .then((res) => {
        expect(res.body._id).toBeTruthy();
        done();
      });
  });
});

describe('GET api/users/999/activeStreams', () => {
  test('An active stream is retrieved', (done) => {
    agent
      .get('/api/users/999/activeStreams')
      .send({ deviceId: '1234' })
      .expect(200)
      .then((res) => {
        done();
      });
  });
});
