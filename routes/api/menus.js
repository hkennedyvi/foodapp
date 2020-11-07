const express = require("express");
const menusController = require("../../controllers/menusController");

const router = express.Router();

router.route("/").get(menusController.findAll);

module.exports = router;