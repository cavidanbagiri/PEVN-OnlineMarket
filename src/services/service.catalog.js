
const db = require('../models');
const ProductModel = db.ProductModel;

const CategoryModel = db.CategoryModel;

class CatalogService{
    
    // Get All Products
    static async getProducts(catalog_name){

        // First Find Catalog Name From Categories Table
        const find_catalog = await CategoryModel.findOne({where:{name:catalog_name}});

        // Find All Product Where Catalogid is findCatalog id
        const products = await ProductModel.findAll({where:{'categoryId':find_catalog.dataValues.id}});
        // console.log(products);
        // Return Finding Products
        return products;
    }

    // Insert Into Products
    static async addProducts(datas){

        datas[2].categoryId = 2;
        const newProduct = await ProductModel.create(datas[2]);
        return newProduct;
    }

}

module.exports = CatalogService;