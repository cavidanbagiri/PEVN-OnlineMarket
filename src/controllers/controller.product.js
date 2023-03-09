const ProductService = require("../services/service.product");
const tryCatch = require("../utils/tryCatch");



class ProductController {

    // Get Product With Id
    static async getProductWithId(req, res, next) {
        const id = req.params.id;
        tryCatch(await ProductService.getProductWithId(id).then((respond)=>{
            res.send(respond);
        }).catch((err)=>{
            console.log('find product with id Error ');
            return next(err);
        }))
    }

    // Add Product To Basket
    static async addBasket(req, res, next) {
        const id = req.params.id;
        tryCatch(await ProductService.addBasket(id).then((respond)=>{
            // console.log('Respond is : ',respond);
            res.send(respond);
        }).catch((err)=>{
            console.log('Error Is : ',err);
        }))
    }

     // Add Product To Favorites
     static async addFavorites(req, res, next) {
        const id = req.params.id;
        tryCatch(await ProductService.addFavorites(id).then((respond)=>{
            // console.log('Respond is : ',respond);
            res.send(respond);
        }).catch((err)=>{
            console.log('Error Is : ',err);
        }))
    }


}

module.exports = ProductController;