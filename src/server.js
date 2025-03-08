// server.js
require('dotenv').config();
const app = require('./app');

const sequelize = require('./db/config/db.config'); 
const PORT = process.env.PORT || 5000;
console.log(sequelize)
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
