const db = require("../models");
const UserModel = db.UserModel;

class UserService {
  // User Registration
  static async registerUser(user_data) {
    const new_user = await UserModel.create(user_data);
    return new_user;
  }

  // User Login
  static async loginUser(user_data) {
    const find_user = await UserModel.findOne({
      where:{email:user_data.email, password:user_data.password }
    });
    return find_user.dataValues;
  }
}

module.exports = UserService;
