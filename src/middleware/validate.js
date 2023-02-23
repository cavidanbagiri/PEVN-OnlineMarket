//const { schema } = require("../validators/validation.user");

const validateMiddleware = (schema) => (req, res, next) => {
  const data = req.body;

  const { error } = schema.validate(data);

  if (error) {
    res.json({ validationError: error.details[0].message });
  }

  return;
};

module.exports = validateMiddleware;
