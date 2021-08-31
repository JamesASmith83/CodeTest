var supertest = require('supertest');
app = require('../../app');

exports.should_Get_200_On_Get = function (done) {
  supertest(app).get('/api/users/99/activeStreams').expect(200).end(done);
};

exports.should_Get_201_On_Post = function (done) {
  supertest(app).post('/api/users/99/activeStreams').expect(201).end(done);
};

exports.should_Get_404_If_Route_Invalid = function (done) {
  supertest(app).post('/api/users/99/kljshdfkjsd').expect(404).end(done);
};
