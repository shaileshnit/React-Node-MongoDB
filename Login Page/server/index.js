// To use syntax ==> import express from "express"
// just define ==>"type": "module" in package.json

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const dotenv = require("dotenv");
// Import Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// Import conn module
require("./db/conn");

//Middleware
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT_NO, () => console.log("Server is running"));
