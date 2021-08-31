const { getPostData } = require('../utils');
const ActiveStream = require('../db/models/activeStream.js').ActiveStream;

// @desc Create Active Stream For User
// @route POST api/users/:userId/activeStreams
async function createActiveStream(req, res, userId) {
  const body = await getPostData(req);
  console.log('BODY:' + JSON.parse(body));
  const { deviceId } = JSON.parse(body);

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
}

module.exports = {
  createActiveStream,
};
