const express = require('express');
const routes = express.Router();
const inventory_routes = require('./inventery_routes');

routes.use(inventory_routes);

module.exports = routes;