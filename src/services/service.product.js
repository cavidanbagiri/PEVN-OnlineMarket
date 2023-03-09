const db = require("../models/index");

const ProductModel = db.ProductModel;
const BasketModel = db.BasketModel;
const FavoritesModel = db.FavoriteModel;

class ProductService {
  static async getProductWithId(product_id) {
    const temp_pro = await db.sequelize.query(
      "select *, p.id from products p " +
        'left JOIN comments c ON "productId"=$1 ' +
        'left JOIN users u ON "userId"=u.id ' +
        "where p.id = $1",
      {
        bind: [product_id],
      }
    );

    console.log("temp pro : ", temp_pro[0][0]);
    return temp_pro[0][0];

    // const product = await ProductModel.findByPk(product_id);
    // return product.dataValues;
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
