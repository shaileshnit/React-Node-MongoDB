"use strict";

var mongoose = require("mongoose");

var dotenv = require("dotenv");

dotenv.config(); // DB connection

mongoose.connect(process.env.DB_CONNECTION, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}, function () {
  return console.log("Connected to DB");
});