// app.js

const express = require('express');
const morgan = require('morgan');  // HTTP request logger middleware
const cors = require('cors');  // Cross-origin resource sharing (CORS) middleware
const router = require('./server/routes');

const app = express();

// Middleware
app.use(morgan('dev'));  // Logging middleware
app.use(cors());  // Enabling cross-origin requests
app.use(express.json());  // Middleware to parse incoming JSON requests

// Use the routes
app.use('/api', router);  // Prefix all API routes with '/api'

// Default route (Optional)
app.get('/', (req, res) => {
  res.send('Welcome to the Sales Admin Panel!');
});

module.exports = app;
