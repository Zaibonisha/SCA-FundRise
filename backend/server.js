// server.js

require("dotenv").config(); // Load environment variables at the very top

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const routes = require("./src/routes/index"); // Import the combined router

// Verify environment variables
console.log('DB_CONNECTION:', process.env.DB_CONNECTION);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

// Set up server
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Construct MongoDB URI
const mongoURI = `mongodb://${process.env.DB_HOST}/${process.env.DB_DATABASE}`;

console.log('MongoDB URI:', mongoURI);

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Terminate the process if unable to connect to MongoDB
  });

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads")); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// Example POST route for handling form submission with file upload
app.post("/api/campaigns/create", upload.single("coverImage"), async (req, res) => {
  try {
    const { title, description, goal, category, location } = req.body;
    const { currency, targetAmount, startDate, endDate } = goal;
    const coverImage = req.file; // Uploaded file object

    // Process the received data and perform database operations
    // For example, save campaign details to MongoDB

    res.status(200).json({ message: "Campaign created successfully" });
  } catch (error) {
    console.error("Error creating campaign:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Routes
app.use("/api", routes); // Use the combined router

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("Server shutting down gracefully...");
  mongoose.connection.close(() => {
    console.log("MongoDB connection closed.");
    process.exit(0);
  });
});
