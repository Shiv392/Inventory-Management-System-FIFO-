const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const db_init = require('../db_init');
const routes = require('../routes/index');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

db_init();

app.use(routes);

module.exports = app;