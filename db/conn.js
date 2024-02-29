const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Access environment variables
const db = process.env.REACT_APP_MONGOURI;

// Set the strict query option to true before connecting to the database
mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(
      db
    );

    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
