const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./server/models');

// Import Routes
const retailerRoutes = require('./server/routes/retailer.routes');
const wholesalerRoutes = require('./server/routes/wholesaler.routes');
const stockRoutes = require('./server/routes/stock.routes');

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
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Error:', err);
  });

// Routes
app.use('/api/retailers', retailerRoutes);
app.use('/api/wholesalers', wholesalerRoutes);
app.use('/api/stock', stockRoutes);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to Sales Admin Panel API!');
});

// Export app for use in server.js
module.exports = app;
