const db = require("../models/index");

const ProductModel = db.ProductModel;
const BasketModel = db.BasketModel;
const FavoritesModel = db.FavoriteModel;

class ProductService {
  static async getProductWithId(product_id) {
    // const temp_pro = await db.sequelize.query(
    //   "select *, p.id from products p " +
    //     'left JOIN user_comments c ON "productId"=$1 ' +
    //     'left JOIN users u ON "userId"=u.id ' +
    //     "where p.id = $1",
    //   { bind: [product_id] }
    // );  

    // temp_pro[0][0].comments = [];

    // for (let i of temp_pro[0]) {
    //   let each_comments = {};
    //   each_comments.user = i.username;
    //   each_comments.comment = i.comment_text;
    //   temp_pro[0][0].comments.push(each_comments);
    // }

    // return temp_pro[0][0];

    const temp_pro = await db.sequelize.query(
      "select *, p.id from products p " +
        'left JOIN user_comments c ON "productId"=$1 ' +
        'left JOIN raitings r ON "userCommentId"=c.id '+
        'left JOIN users u ON "userId"=u.id ' +
        "where p.id = $1",
      { bind: [product_id] }
    );  

    temp_pro[0][0].comments = [];

    for (let i of temp_pro[0]) {
      let each_comments = {};
      each_comments.user = i.username;
      each_comments.comment = i.comment_text;
      each_comments.raiting = i.raiting;
      temp_pro[0][0].comments.push(each_comments);
    }

    return temp_pro[0][0];

  }

  static async addBasket(product_id) {
    const adding_product = await BasketModel.create({
      userId: 14,
      productId: product_id,
    });

    return adding_product;
  }

  static async addFavorites(product_id) {
    const adding_product = await FavoritesModel.create({
      userId: 14,
      productId: product_id,
    });

    return adding_product;
  }
}

module.exports = ProductService;

// const temp_pro = await db.sequelize.query(
// 'select *, p.id from products p ' +
// 'left JOIN comments c ON \"productId\"=$1 ' +
// 'where p.id = $1',
// {
//     bind:[product_id]
// });

// const temp_pro = await db.sequelize.query(
//     'select *, p.id from products p ' +
//     'left JOIN comments c ON \"productId\"=$1 ' +
//     'left JOIN users u ON \"c.userId\"=u.id ' +
//     'where p.id = $1',
//     {
//         bind:[product_id]
//     });

// const temp_pro = await db.sequelize.query(
//     'select *, p.id from products p ' +
//     'left JOIN comments c ON \"productId\"=2' +
//     'left JOIN users u ON \"userId\"=u.id ' +
//     'where p.id = 2');
