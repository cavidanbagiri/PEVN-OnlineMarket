const db = require("../models");
const UserModel = db.UserModel;
const CommentModel = db.CommentModel;

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

  static async addComments(comment_text) {
    const addingComment = await CommentModel.create({
      comment_text:"This product is very good. Recomended",
      userId: 15,
      productId: 2
    });

    return addingComment;
  }

}

module.exports = UserService;
