const mongoose = require('mongoose');

const activeStreamSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: false,
  },
  deviceId: {
    type: String,
    required: true,
  },
});

const ActiveStream = mongoose.model('ActiveStream', activeStreamSchema);

module.exports = { ActiveStream };
