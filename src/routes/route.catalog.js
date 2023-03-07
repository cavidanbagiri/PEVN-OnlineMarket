
const express = require('express');
const ProductController = require('../controllers/controller.catalog');
const router = express.Router();

router.get('/:catalog_name', ProductController.getProducts);

router.post('/add',ProductController.addProducts);

module.exports = router;