
const db = require('../models');
const ProductModel = db.ProductModel;

const CategoryModel = db.CategoryModel;

class ProductService{
    
    // Get All Products
    static async getProducts(){
        console.log('Get Prodiuct');
    }

    // Insert Into Products
    static async addProducts(datas){

        datas[2].categoryId = 2;
        const newProduct = await ProductModel.create(datas[2]);
        return newProduct;
    }

}

module.exports = ProductService;