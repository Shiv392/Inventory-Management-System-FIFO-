const express = require('express');
const routes = express.Router();
const inventory_add_controller = require('../controllers/inventory_add_controller');

routes.post('/inventory/add-product', inventory_add_controller);

module.exports = routes;