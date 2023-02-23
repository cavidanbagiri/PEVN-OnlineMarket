const db = require("../models");
const UserModel = db.UserModel;

class UserService {
  // User Registration
  static async registerUser(user_data) {
    const new_user = await UserModel.create(user_data);
    return new_user;
  }
}

module.exports = UserService;
