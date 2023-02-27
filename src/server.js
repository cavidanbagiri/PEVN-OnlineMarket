const express = require("express");
const app = express();


// Import Dotenv
require("dotenv").config();

// Import Error Handler Middleware
const errorHandler = require("./middleware/errorHandler");

// Activate Model
require("./models");

// Import Routers
const { userRouter, productRouter } = require("./routes");

// Create Middlewares
app.use(express.json());

// Create Router
app.use("/user", userRouter);
app.use("/products", productRouter);

// Handle Errors
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listening  Port", process.env.PORT);
});
