"use strict";

var router = require("express").Router();

var _require = require("../controllers/auth"),
    register = _require.register,
    login = _require.login;

router.post("/register", register);
router.post("/login", login);
module.exports = router;