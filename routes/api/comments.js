const express = require("express");
const router = express.Router();
const isEmpty = require("../../validation/is-empty");

// Import schema
const Comment = require("../../models/Comment");
const Movie = require("../../models/Movie");

//Validation
const validateTextInput = require("../../validation/comments");

//@route /api/comments
//@desc get comments associated with movie
router.get("/:id", (req, res) => {
  const errors = {};
  Comment.find({ movie_id: req.params.id })
    .then(comments => {
      if (!isEmpty(comments)) {
        res.json(comments);
      } else {
        errors.comments = "Comments not found";
        res.status(404).json(errors);
      }
    })
    .catch(err => res.status(404).json(err));
});
//@route /api/comments
//@desc get all comments
router.get("/", (req, res) => {
  Comment.find()
    .then(comments => res.json(comments))
    .catch(err => res.status(404).json(err));
});

//@route /api/comments
//@desc post comment
router.post("/", (req, res) => {
  const { errors, isValid } = validateTextInput(req.body);

  console.log(req.body.id);

  if (!isValid) {
    res.status(400).json(errors);
  }

  Movie.findOne({ movie_id: req.body.id }).then(movie => {
    if (movie) {
      const newComment = new Comment({
        movie_id: req.body.id,
        text: req.body.text
      });
      newComment.save().then(comment => res.json(comment));
    } else {
      errors.movie = "No movie found in database with that ID";
      res.status(404).json(errors);
    }
  });
});

module.exports = router;
