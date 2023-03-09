
const express = require('express');
const ProductController = require('../controllers/controller.product');
const router = express.Router();


router.get('/:id',ProductController.getProductWithId);
router.post('/addbasket/:id', ProductController.addBasket);
router.post('/addfavorites/:id', ProductController.addFavorites);


module.exports = router;
