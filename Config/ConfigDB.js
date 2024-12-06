const mongoose = require("mongoose");
require("dotenv").config();
const connectMongoDB = () => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI
    );
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.log(error.message);
    console.log("Database Connection Failed");
  }
};

module.exports = connectMongoDB;
