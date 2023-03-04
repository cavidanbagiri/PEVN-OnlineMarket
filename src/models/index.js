const { Sequelize, Model, DataTypes } = require("sequelize");
const dbConfig = require("../config/db");

// Import Models
const UserModel = require('./model.users');
const ProductModel = require('./model.product');
const CategoryModel = require('./model.category');

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

// Create Relationsship

db.CategoryModel.hasOne(db.ProductModel,{
  foreignKey:'categoryId',
});
db.ProductModel.belongsTo(db.CategoryModel);


// (somes = async () =>{
  
// await db.ProductModel.drop();
// await db.LaptopModel.drop();
// await db.CategoryModel.drop();
// })();

// await db.ProductModel.drop();
// db.ComputerModel.hasOne(db.ComputerModel,{
//   foreignKey:'computerId',
//   as: db.ProductModel
// });
// db.ProductModel.belongsTo(db.ComputerModel,{
//   foreignKey:'computerId',
//   as: db.ProductModel
// });

// Sync sequelize;
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
