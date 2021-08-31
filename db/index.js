const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/CodeTestDB';

function connect() {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV != 'test') {
      mongoose.connect(DB_URI).then((res, err) => {
        if (err) return reject(err);
        resolve();
      });
    }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
