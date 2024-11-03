// Models/JournalEntry.js
const mongoose = require('mongoose');

const JournalEntrySchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  mood: { type: String, required: true },
  reflection: { type: String, required: true },
});

module.exports = mongoose.model('JournalEntry', JournalEntrySchema);
