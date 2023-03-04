const { Sequelize, Model, DataTypes } = require("sequelize");
const dbConfig = require("../config/db");

// Import Models
const UserModel = require('./model.users');
const ProductModel = require('./model.product');
const CategoryModel = require('./model.category');
const CommentModel = require('./model.comment');
const BasketModel = require('./model.basket');
const FavoriteModel = require('./model.favorites');
const OrderModel = require('./model.order');

const sequelize = new Sequelize(
  dbConfig.Database,
  dbConfig.Username,
  dbConfig.Password,
  {
    host: dbConfig.Host,
    dialect: dbConfig.dialect,
  }
);

// Create Conecction
(createConnection = async () => {
  try {
    await sequelize
      .authenticate()
      .then((_) => {
        console.log("Connection Created");
      })
      .catch((err) => {
        console.log("Create Connection try-catch error : ", err);
      });
  } catch (err) {
    console.log("Create Connection Error : ", err);
  }
})();

const db = {};

// Add Sequelizes to db for exporting
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Adding Models
db.UserModel = UserModel(sequelize, DataTypes, Model);
db.ProductModel = ProductModel(sequelize, DataTypes, Model);
db.CategoryModel = CategoryModel(sequelize, DataTypes, Model);
db.CommentModel = CommentModel(sequelize, DataTypes, Model);
db.BasketModel = BasketModel(sequelize, DataTypes, Model);
db.FavoriteModel = FavoriteModel(sequelize, DataTypes, Model);
db.OrderModel = OrderModel(sequelize, DataTypes, Model);

// ******************************************* Create Relationsship **************************************** //

// Product Category Model One To One
db.CategoryModel.hasOne(db.ProductModel,{
  foreignKey:'categoryId',
});
db.ProductModel.belongsTo(db.CategoryModel);

// Comment Model One To Many
db.UserModel.hasMany(db.CommentModel,{
  foreignKey: 'userId'
});
db.CommentModel.belongsTo(db.UserModel);

db.ProductModel.hasMany(db.CommentModel,{
  foreignKey: 'productId'
});
db.CommentModel.belongsTo(db.ProductModel);


// Basket Model Many to Many
db.UserModel.belongsToMany(db.ProductModel, {through: db.BasketModel});
db.ProductModel.belongsToMany(db.UserModel, {through: db.BasketModel});


db.UserModel.belongsToMany(db.ProductModel, {through: db.FavoriteModel});
db.ProductModel.belongsToMany(db.UserModel, {through: db.FavoriteModel});


db.UserModel.belongsToMany(db.ProductModel, {through: db.OrderModel});
db.ProductModel.belongsToMany(db.UserModel, {through: db.OrderModel});

// // Sync sequelize;
db.sequelize
  .sync({ force: false })
  .then((_) => {
    console.log("Sync Database");
  })
  .catch((err) => {
    console.log("Sync Doesnt Work");
  });



// Export db
module.exports = db;
