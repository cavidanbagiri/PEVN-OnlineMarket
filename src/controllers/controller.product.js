const ProductService = require("../services/service.product");
const tryCatch = require("../utils/tryCatch");



class ProductController {

    static async getProductWithId(req, res, next) {

        const id = req.params.id;
        tryCatch(await ProductService.getProductWithId(id).then((respond)=>{
            res.send(respond);
        }).catch((err)=>{
            console.log('find product with id Error ');
            return next(err);
        }))

    }

}

module.exports = ProductController;