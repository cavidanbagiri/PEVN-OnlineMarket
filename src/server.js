const express = require("express");
const app = express();

// Import Dotenv
require("dotenv").config();

// Import Cors
const cors = require ('cors');

// Import Error Handler Middleware
const errorHandler = require("./middleware/errorHandler");

// Activate Model
require("./models");

// Import Routers
const { userRouter, catalogRouter, productRouter } = require("./routes");

// Create Middlewares
app.use(express.json());

// Use Cors
app.use(cors());

// Create Router
app.use("/user", userRouter);
app.use("/catalog", catalogRouter);
app.use('/product',productRouter);

// Handle Errors
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("Listening  Port", process.env.PORT);
});
