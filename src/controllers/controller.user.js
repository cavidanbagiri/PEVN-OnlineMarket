const { hashPassword } = require("../helpers/hash_password");
const UserService = require("../services/service.user");

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
  //Login User
  static async loginUser(req, res, next) {
    const user_data = req.body;
    user_data.password = await hashPassword(user_data.password);
    tryCatch(
      await UserService.loginUser(user_data)
        .then((user) => {
          res.send(user);
        })
        .catch((err) => {
          return next(err);
        })
    );
  }
  // Add Comment
  static async addComment(req, res, next) {
    tryCatch(
      await UserService.addComments("somes")
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => {
          console.log("Adding Comments Error");
          return next(err);
        })
    );
  }
}

module.exports = UserController;
