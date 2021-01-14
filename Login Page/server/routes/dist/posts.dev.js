"use strict";

var router = require("express").Router(); // const User = require("../models/User");


var verify = require("./verifyToken"); // private route


router.get("/", verify, function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // res.json({
          //   posts: {
          //     title: "My first post",
          //     description: "random data you shouldnot access",
          //   },
          // });
          res.send(req.user); // Complete information of user
          // const user = await User.findOne({ _id: req.user });
          // res.send(user);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;