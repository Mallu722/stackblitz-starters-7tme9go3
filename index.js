const express = require("express");
const { resolve } = require("path");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3010;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

// Serve static files
app.use(express.static("static"));

// Handle GET request for root
app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});