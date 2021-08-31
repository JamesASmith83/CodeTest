const request = require('supertest');
const app = require('../app');
const db = require('./db');

const agent = request.agent(app);

beforeAll(async () => await db.connect());
beforeEach(async () => await db.clear());
afterAll(async () => await db.close());

describe('POST api/users/706/activeStreams', () => {
  test('A new active stream should be added', (done) => {
    agent
      .post('/api/users/706/activeStreams')
      .send({ userId: '706', deviceId: '1234' })
      .expect(201)
      .then((res) => {
        expect(res.body._id).toBeTruthy();
        done();
      });
  });
});
