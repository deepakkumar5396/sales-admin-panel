const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./server/routes');  // Import the routes folder
const db = require('./server/models');

// Initialize dotenv
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync({ force: false })  // `force: false` to avoid dropping tables
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Error:', err);
  });

// Use Routes
app.use('/api', routes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Sales Admin Panel API!');
});

// Export app for use in server.js
module.exports = app;
