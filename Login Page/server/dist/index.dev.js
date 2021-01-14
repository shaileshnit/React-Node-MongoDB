"use strict";

// To use syntax ==> import express from "express"
// just define ==>"type": "module" in package.json
var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();

var dotenv = require("dotenv"); // Import Routes


var authRoute = require("./routes/auth");

var postRoute = require("./routes/posts");

dotenv.config(); // Import conn module

require("./db/conn"); //Middleware


app.use(express.json());
app.use(bodyParser.json({
  limit: "30mb",
  extended: true
}));
app.use(bodyParser.urlencoded({
  limit: "30mb",
  extended: true
}));
app.use(cors()); // Route Middlewares

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.listen(process.env.PORT_NO, function () {
  return console.log("Server is running");
});