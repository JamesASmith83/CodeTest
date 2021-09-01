const { getPostData } = require('../utils');
const { streamCount } = require('../db/helper');
const ActiveStream = require('../db/models/activeStream.js').ActiveStream;

// @desc Create Active Stream For User
// @route POST api/users/:userId/activeStreams
async function createActiveStream(req, res, userId) {
  try {
    const count = await streamCount(userId);
    if (count >= 3) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(
        JSON.stringify({ message: 'Active Stream Limit Reached' })
      );
    }
    const body = await getPostData(req);
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
  } catch {
    (err) => {
      console.log('Error creating streams: ' + err);
    };
  }
}

// @desc Get All Active Streams Per User
// @route GET api/users/:userId/activeStreams
async function getUsersActiveStreams(req, res, userId) {
  try {
    ActiveStream.find({ userId: userId }).then((activeStreams) =>
      res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(activeStreams))
    );
  } catch {
    (err) => {
      console.log('Error getting active streams ' + err);
    };
  }
}

module.exports = {
  createActiveStream,
  getUsersActiveStreams,
};
