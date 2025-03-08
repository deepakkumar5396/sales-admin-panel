const app = require('./app');  // Import the app instance

const PORT = process.env.PORT || 3000;  // Default port to 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
