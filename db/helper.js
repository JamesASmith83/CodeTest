const ActiveStream = require('../db/models/activeStream.js').ActiveStream;

function streamCount(userId) {
  return ActiveStream.count({ userId: userId })
    .exec()
    .then((activeStreamCount) => {
      return activeStreamCount;
    })
    .catch((err) => {
      return 'error';
    });
}

module.exports = { streamCount };
