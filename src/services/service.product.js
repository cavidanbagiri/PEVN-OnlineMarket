
const db = require('../models/index');

const ProductModel = db.ProductModel;

class ProductService {

    static async getProductWithId(product_id){

        const product = await ProductModel.findByPk(product_id);

        return product.dataValues;

    }

}


module.exports = ProductService;