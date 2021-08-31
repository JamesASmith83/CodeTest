const http = require('http');
const {
  createActiveStream,
  getUsersActiveStreams,
} = require('./controllers/activeStreamsController');

const app = http.createServer((req, res) => {
  if (
    req.url.match(/\/api\/users\/([0-9]+)\/activeStreams/) &&
    req.method === 'GET'
  ) {
    const userId = req.url.split('/')[3];
    getUsersActiveStreams(req, res, userId);
  } else if (
    req.url.match(/\/api\/users\/([0-9]+)\/activeStreams/) &&
    req.method === 'POST'
  ) {
    const userId = req.url.split('/')[3];
    createActiveStream(req, res, userId);
  }
});

module.exports = app;
