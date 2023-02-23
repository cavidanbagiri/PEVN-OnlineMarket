const { Sequelize, Model, DataTypes } = require("sequelize");
const dbConfig = require("../config/db");

// Import Models
const UserModel = require('./model.users');

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
