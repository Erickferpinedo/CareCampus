// server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const journalRoutes = require('./Routes/journalRoutes');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/journal', journalRoutes); // Prefix all journal routes with /api/journal

// Basic route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to the CampusCare API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
