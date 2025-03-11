const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); // Print the value of MONGO_URI

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the .env file!");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
