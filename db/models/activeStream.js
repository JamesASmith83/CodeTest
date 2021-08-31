const mongoose = require('mongoose');

const activeStreamSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: false,
  },
  deviceId: {
    type: String,
    required: false,
  },
});

const ActiveStream = mongoose.model('ActiveStream', activeStreamSchema);

module.exports = { ActiveStream };
