
const express = require('express');
const ProductController = require('../controllers/controller.product');
const router = express.Router();



router.get('/:id',ProductController.getProductWithId);



module.exports = router;
