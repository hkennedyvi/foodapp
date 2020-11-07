const DB = require("../models");

module.exports = {
    findAll: (req, res) => {
        DB.Menu
        .find(req.query)
        .sort({ date: -1 })
        .then(DBModel => res.json(DBModel))
        .catch(err => res.status(422).json(err));
    }
};