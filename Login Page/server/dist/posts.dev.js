"use strict";

var router = require("express").Router();

router.get("/", function (req, res) {
  res.json({
    posts: {
      title: "My first post",
      description: "random data you shouldnot access"
    }
  });
});
module.exports = router;