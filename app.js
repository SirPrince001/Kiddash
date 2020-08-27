const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const cors = require("cors");
const routes = require('./src/routes')
require('dotenv').config()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));
app.use(routes)
app.use(cors());
require('./src/data/db').connect()



module.exports = app;