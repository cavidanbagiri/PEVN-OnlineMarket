const db = require("../models");

const UserModel = db.UserModel;
const CommentModel = db.CommentModel;
const RaitingsModel = db.RaitingModel;

class UserService {
  // User Registration
  static async registerUser(user_data) {
    const new_user = await UserModel.create(user_data);
    console.log('User Can Register : ',new_user);
    return new_user;
  }

  // User Login
  static async loginUser(user_data) {
    const find_user = await UserModel.findOne({
      where:{email:user_data.email, password:user_data.password }
    });
    console.log('find user is : ', find_user);
    return find_user.dataValues;
  }

  static async addComments(comment_text) {
    // const addingComment = await CommentModel.create({
    //   comment_text:"Not Bad, U can use for simple working",
    //   userId: 16,
    //   productId: 2
    // });

    //return addingComment;
    // const addingRaitings = await RaitingsModel.create({
    //   raiting:4,
    //   userCommentId: 3
    // });
    // return addingRaitings;
  }

}

module.exports = UserService;
