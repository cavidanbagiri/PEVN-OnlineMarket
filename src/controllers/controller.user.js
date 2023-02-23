const { hashPassword } = require("../helpers/hash_password");
const UserService = require("../services/service.user");

const AppError = require("../exceptions/AppError");
const tryCatch = require("../utils/tryCatch");

class UserController {
  // User Registration
  static async registerUser(req, res, next) {
    const user_data = req.body;
    user_data.password = await hashPassword(user_data.password);
    tryCatch(
      await UserService.registerUser(user_data)
        .then((data) => {
          res.send(data.dataValues);
        })
        .catch((err) => {
          return next(err);
        })
    );
  }
}

module.exports = UserController;
