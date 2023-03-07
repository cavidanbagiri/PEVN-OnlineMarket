
const userRouter = require('./route.user');
const catalogRouter = require('./route.catalog');
const productRouter = require('./route.product');

module.exports = {
    userRouter,
    catalogRouter: catalogRouter,
    productRouter,
}