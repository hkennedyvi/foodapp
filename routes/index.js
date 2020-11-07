const express = require("express");
const router = express.Router();
const path = require("path");
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  };

router.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

module.exports = router;