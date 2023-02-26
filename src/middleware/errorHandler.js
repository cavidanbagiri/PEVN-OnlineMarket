const AppError = require("../exceptions/AppError");

const errorHandler = async (err, req, res, next) => {
  console.log('Error : ',err);
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ err: err });
  }
  return res.status(400).json({ error: err });
};

module.exports = errorHandler;
