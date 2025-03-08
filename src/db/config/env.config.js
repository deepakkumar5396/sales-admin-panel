require('dotenv').config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB: {
    NAME: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    HOST: process.env.DB_HOST,
    DIALECT: process.env.DB_DIALECT || 'postgres',
  }
};
