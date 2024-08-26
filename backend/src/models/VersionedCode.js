const mongoose = require('mongoose');

const versionedCodeSchema = new mongoose.Schema({
  fileName: { type: String, required: true },
  content: { type: String, default: '' },
  version: { type: Number, default: 1 },
  roomId: { type: String, required: true, unique: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('VersionedCode', versionedCodeSchema);
