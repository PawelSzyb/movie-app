const express = require("express");
const router = express.Router();

// Import comment schema
const Comment = require("../../models/Comment");

//@route /api/comments
//@desc post comment
router.post("/", (req, res) => {
  const newComment = new Comment({
    movie_id: req.body.id,
    text: req.body.text
  });
  newComment.save().then(comment => res.json(comment));
});

module.exports = router;
