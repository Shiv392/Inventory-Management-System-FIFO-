const express = require('express');
const routes = express.Router();
const inventory_routes = require('./inventery_routes');
const sales_routes = require('./sales_routes');
const add_inventory_routes = require('./add_inventory_routes');

routes.use(inventory_routes);
routes.use(sales_routes);
routes.use(add_inventory_routes);

module.exports = routes;