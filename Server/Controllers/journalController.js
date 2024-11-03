// Controllers/journalController.js
const JournalEntry = require('../Models/JournalEntry');

// Add a new journal entry
exports.addJournalEntry = async (req, res) => {
  const { mood, reflection } = req.body;
  try {
    const newEntry = new JournalEntry({ mood, reflection });
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save journal entry' });
  }
};

// Get all journal entries
exports.getJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find().sort({ date: -1 });
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve journal entries' });
  }
};
