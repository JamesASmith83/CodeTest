const request = require('supertest');
const app = require('../app');
const db = require('./db');

const agent = request.agent(app);

beforeAll(async () => await db.connect());

afterAll(async () => await db.close());

describe('POST api/users/999/activeStreams', () => {
  test('A new active stream should be added', (done) => {
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

describe('POST api/users/706/activeStreams', () => {
  test('A first active stream should be added', (done) => {
    agent
      .post('/api/users/706/activeStreams')
      .send({ deviceId: '1234' })
      .expect(201)
      .then((res) => {
        expect(res.body._id).toBeTruthy();
        done();
      });
  });
});
describe('POST api/users/706/activeStreams', () => {
  test('A second active stream should be added', (done) => {
    agent
      .post('/api/users/706/activeStreams')
      .send({ deviceId: '1234' })
      .expect(201)
      .then((res) => {
        expect(res.body._id).toBeTruthy();
        done();
      });
  });
});
describe('POST api/users/706/activeStreams', () => {
  test('A third active stream should be added', (done) => {
    agent
      .post('/api/users/706/activeStreams')
      .send({ deviceId: '1234' })
      .expect(201)
      .then((res) => {
        expect(res.body._id).toBeTruthy();
        done();
      });
  });
});
describe('POST api/users/706/activeStreams', () => {
  test('A fourth active stream should NOT be added', (done) => {
    agent
      .post('/api/users/706/activeStreams')
      .send({ deviceId: '1234' })
      .expect(404)
      .then((res) => {
        done();
      });
  });
});
