require("dotenv").config(); // Load environment variables at the top

const express = require("express");
const connectDB = require("../backend/config/db");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(express.json({ limit: "10mb" })); // ✅ Increased JSON size limit
app.use(express.urlencoded({ limit: "10mb", extended: true })); // ✅ Increased URL-encoded size limit

app.use("/api", require("./routes/itemRoutes"));

console.log("MONGO_URI:", process.env.MONGO_URI); // Log the MONGO_URI for debugging
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
