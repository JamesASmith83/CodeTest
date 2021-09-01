const mongoose = require('mongoose');
const config = require('../config');

const DB_URI = config.connectionString;

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
