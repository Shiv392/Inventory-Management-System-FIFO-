const express = require('express');
const sales_routes = express.Router();
const sales_controller = require('../controllers/sales_controller');

sales_routes.get('/sales', sales_controller)

module.exports = sales_routes;