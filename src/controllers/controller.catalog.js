const CatalogService = require("../services/service.catalog");
const tryCatch = require("../utils/tryCatch");

const fs = require("fs");

class ProductController {
  // Get All Products
  static async getProducts(req, res, next) {
    let catalog_name = req.params.catalog_name;

    tryCatch(
      await CatalogService.getProducts(catalog_name)
        .then((products) => {
          res.send(products);
        })
        .catch((err) => {
          return next(err);
        })
    );
  }

  // Insert Into Products
  static async addProducts(req, res, next) {
    // let datas = {};
    await fs.readFile("laptops1.json", "utf8", async (err, data) => {
      if (err) {
        console.log("Error happen : ", err);
        return;
      }
      const datas = JSON.parse(data);
      tryCatch(
        await CatalogService.addProducts(datas)
          .then((respond) => {
            res.send(respond);
          })
          .catch((err) => {
            return next(err);
          })
      );
    });
  }
}

module.exports = ProductController;
