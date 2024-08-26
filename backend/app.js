const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./src/routes/authRoutes');
const codeRoutes = require('./src/routes/codeRoutes');
const chatRoutes = require('./src/routes/chatRoutes');

// Load environment variables
dotenv.config();

// Create an Express application
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/code', codeRoutes);
app.use('/api/chat', chatRoutes);

// Connect to the database
const connectDB = require('./src/config/db');
connectDB();

module.exports = app;
