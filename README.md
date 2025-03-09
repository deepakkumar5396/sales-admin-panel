# Wholesaler-Retailer API

This project is a REST API that allows managing wholesalers and retailers, with features such as handling stock transactions and generating reports about monthly turnover and maximum turnover. 

### Table of Contents
1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Setting Up the Database](#setting-up-the-database)
4. [Running the Application](#running-the-application)
5. [API Documentation](#api-documentation)
6. [Testing](#testing)
7. [Contributing](#contributing)

---

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have **Node.js** installed. You can check your version by running:
  ```bash
  node -v
If not installed, download and install from Node.js.

npm (Node Package Manager): Comes bundled with Node.js, and you can verify the installation by running:

bash
Copy
Edit
npm -v
PostgreSQL: This application uses PostgreSQL for data storage. Ensure you have PostgreSQL installed and running locally or have access to a PostgreSQL database server.

Installation
Clone the Repository: Clone the project to your local machine by running:

bash
Copy
Edit
git clone <https://github.com/deepakkumar5396/sales-admin-panel.git>
cd <project-folder>
Install Dependencies: Install the necessary dependencies by running:
npm install
Configure Database: Set up the database connection in src/db/config/config.json. Replace the username, password, and database values as per your PostgreSQL setup.

Example:
{
  "development": {
    "username": "your-db-username",
    "password": "your-db-password",
    "database": "wholesaler_db",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
Setting Up the Database
Create Database: Make sure your PostgreSQL server is running and create the wholesaler_db (or the database you have configured in config.json).

Run Migrations: If you're using Sequelize for migrations, run the migrations to create the tables in your database:
npx sequelize-cli db:migrate
Seed Data (Optional): If you want to add sample data for wholesalers, retailers, and stock, run:

npx sequelize-cli db:seed:all
This will populate the database with sample data based on the defined seeders.

Running the Application
After setting up the database, you can start the application by running:

npm start
This will run the server on the default port, which is typically 3000. You can modify the port in your .env file or in the server.js file if needed.

API Documentation
The following are the API routes available:

Wholesalers
Create Wholesaler
POST /api/wholesalers/
Request body:
{
  "name": "Wholesaler Name",
  "mobile_number": "1234567890"
}
Get Wholesaler with Associated Retailers
GET /api/wholesalers/:wholesaler_id
Response:
{
  "id": 1,
  "name": "Wholesaler Name",
  "mobile_number": "1234567890",
  "retailers": [...]
}
Get Retailers Associated with a Single Wholesaler
GET /api/wholesalers/retailers/single_wholesaler
Response:
[
  {
    "id": 1,
    "name": "Retailer 1",
    "mobile_number": "9876543210"
  },
  ...
]
Get Monthly Turnover for Each Wholesaler
GET /api/wholesalers/monthly_turnover/
Response:
{
  "wholesaler_id": {
    "January 2021": 5000,
    "February 2021": 7000,
    ...
  }
}
Get Max Turnover from a Single Retailer
GET /api/wholesalers/max_turnover/
Response:
{
  "wholesaler_id": {
    "retailer_id": 123,
    "max_turnover": 15000
  }
}
