
const db = require('../models');
const ProductModel = db.ProductModel;

class ProductService{
    
    // Get All Products
    static async getProducts(){
        console.log('Get Prodiuct');
    }

    // Insert Into Products
    static async addProducts(datas){
        console.log('from service : ',datas[0]);
        const newProduct = await ProductModel.create(datas[0]);
        return newProduct;
    }

}

module.exports = ProductService;