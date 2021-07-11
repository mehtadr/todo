//Main files
const express = require("express");
const dotenv = require("dotenv");

// Route Files
const todos = require("./routes/todo");

// Log Fils
const logger = require("./middleware/logger");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(logger);

app.use("/api/v1/todo", todos);

PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running on ${process.env.NODE_ENV} at ${PORT} Port`)
);
