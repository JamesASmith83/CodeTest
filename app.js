const http = require('http');

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
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Stream Added' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log('Listening on port: ' + PORT);
});

module.exports = app;
