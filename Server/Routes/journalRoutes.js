// Routes/journalRoutes.js
const express = require('express');
const router = express.Router();
const { addJournalEntry, getJournalEntries } = require('../Controllers/journalController');

// Route to add a new journal entry
router.post('/add', addJournalEntry);

// Route to get all journal entries
router.get('/entries', getJournalEntries);

module.exports = router;
