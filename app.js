const express = require('express');
const app = express();

const menuRoutes = require('./api/routes/menus');

app.use('/menus', menuRoutes);

module.exports = app;