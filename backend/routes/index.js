const express = require('express');
const routes = express.Router();
const inventory_routes = require('./inventery_routes');
const sales_routes = require('./sales_routes');

routes.use(inventory_routes);
routes.use(sales_routes);

module.exports = routes;