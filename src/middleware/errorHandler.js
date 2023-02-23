const AppError = require("../exceptions/AppError");

const errorHandler = async (err, req, res, next) => {
    console.log('Global Error Handler');
  if (err instanceof AppError) {
    console.log("Yes instance of AppError");
    return res.status(err.statusCode).json({ err: err.message });
  }
  return res.status(err.statusCode).json({ error: " Error Happen" });
};

module.exports = errorHandler;
