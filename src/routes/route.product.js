
const express = require('express');
const ProductController = require('../controllers/controller.product');
const router = express.Router();

router.get('/', ProductController.getProducts);
router.post('/add',ProductController.addProducts);

module.exports = router;