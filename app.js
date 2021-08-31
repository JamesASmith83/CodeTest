const http = require('http');
const { createActiveStream } = require('./controllers/activeStreamsController');

const app = http.createServer((req, res) => {
  if (
    req.url.match(/\/api\/users\/([0-9]+)\/activeStreams/) &&
    req.method === 'GET'
  ) {
    const userId = req.url.split('/')[3];
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Feeds found' }));
  } else if (
    req.url.match(/\/api\/users\/([0-9]+)\/activeStreams/) &&
    req.method === 'POST'
  ) {
    const userId = req.url.split('/')[3];
    createActiveStream(req, res, userId);
  }
});

module.exports = app;
