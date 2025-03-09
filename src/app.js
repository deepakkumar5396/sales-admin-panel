const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const routes = require('./server/routes'); 
const db = require('./server/models');

dotenv.config();
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sync database
db.sequelize.sync({ force: false }) 
  .then(() => {
    console.log('✅ Database connected successfully');
  })
  .catch((err) => {
    console.error('❌ Error:', err);
  });
app.use('/api', routes);
app.get('/', (req, res) => {
  res.send('Welcome to Sales Admin Panel API!');
});

module.exports = app;
