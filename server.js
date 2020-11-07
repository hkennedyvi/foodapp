require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const cors = require('cors');
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

app.use(routes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose Connected');
});

app.listen(PORT, function () {
  console.log(`🌎 ==> Server started on ${PORT}!`);
});