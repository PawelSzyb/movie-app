const express = require("express");
const router = express.Router();

// @route  GET api/movies
// @desc   Gets movies from DB
router.get("/", (req, res) => {
  res.json({ msg: "hello form router" });
});

module.exports = router;
