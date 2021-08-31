var supertest = require('supertest');
app = require('../../app');

exports.should_Get_200_On_Get = function (done) {
  supertest(app).get('/api/users/99/activeStreams').expect(200).end(done);
};
