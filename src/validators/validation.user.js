const Joi = require("joi");

const user_schema = Joi.object({
  username: Joi.string().min(3).max(50),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirm: Joi.ref('password'),
});


module.exports = user_schema;