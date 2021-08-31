const http = require('http');
const { getPostData } = require('./utils');
const ActiveStream = require('./db/models/activeStream').ActiveStream;

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

    const body = getPostData(req);
    const { deviceId } = JSON.parse(JSON.stringify(body));

    const activeStream = new ActiveStream({
      userId: userId,
      deviceId: deviceId,
    });
    activeStream
      .save(activeStream)
      .then((activeStream) =>
        res
          .writeHead(201, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(activeStream))
      );
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

module.exports = app;
