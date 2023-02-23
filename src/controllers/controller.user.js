
const { hashPassword } = require("../helpers/hash_password");
const UserService = require("../services/service.user");


class UserController {
  // User Registration
  static async registerUser(req, res, next) {
    try {
      //   const user_data = req.body();
      const user_data = {
        email: "cavidanbagiri@gmail.com",
        password: "cavidan123",
      };
      user_data.password = await hashPassword(user_data.password);
      await UserService.registerUser(user_data)
        .then((data) => {
          res.send(data.dataValues);
        })
        .catch((err) => {
          console.log("User Register Error : ", err);
        });
    } catch (err) {
      console.log("User Registration Error : ", err);
    }
  }
}

module.exports = UserController;
