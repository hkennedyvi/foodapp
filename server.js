const express = require('express');

const PORT = process.env.PORT || 3002;
const app = express();
const path = require("path");

const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

const menuRoutes = require('./api/routes/menus');

app.use('/menus', menuRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });