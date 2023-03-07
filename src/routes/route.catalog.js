
const express = require('express');
const CatalogController = require('../controllers/controller.catalog');
const router = express.Router();

router.get('/:catalog_name', CatalogController.getProducts);

router.post('/add',CatalogController.addProducts);

module.exports = router;