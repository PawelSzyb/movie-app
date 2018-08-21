const express = require("express");
const router = express.Router();

// Import schema
const Comment = require("../../models/Comment");
const Movie = require("../../models/Movie");

//@route /api/comments
//@desc post comment
router.post("/", (req, res) => {
  Movie.findOne({ movie_id: req.body.id }).then(movie => {
    console.log(movie);
    if (movie) {
      const newComment = new Comment({
        movie_id: req.body.id,
        text: req.body.text
      });
      newComment.save().then(comment => res.json(comment));
    } else res.status(404).json({ commentnotfound: "No movie found" });
  });
});

module.exports = router;
