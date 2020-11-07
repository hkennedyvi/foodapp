const express = require("express");
const router = express.Router();
const menuRoutes = require("./menus");

router.use("/menus", menuRoutes);

module.exports = router;