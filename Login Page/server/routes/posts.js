const router = require("express").Router();
// const User = require("../models/User");
const verify = require("./verifyToken");

// private route
router.get("/", verify, async (req, res) => {
  // res.json({
  //   posts: {
  //     title: "My first post",
  //     description: "random data you shouldnot access",
  //   },
  // });

  res.send(req.user);

  // Complete information of user
  // const user = await User.findOne({ _id: req.user });
  // res.send(user);
});

module.exports = router;
