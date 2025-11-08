const express = require('express');
const routes = express.Router();
const inventory_controller = require('../controllers/inventery_controller');

routes.get('/inventory', inventory_controller);

module.exports = routes;