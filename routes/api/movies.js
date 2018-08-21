const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Models
const Movie = require("../../models/Movie");

// Validations
const validateMovieInput = require("../../validation/movie");

// @route  POST api/movies
// @desc   POST movie from OMDb API
router.post("/", (req, res) => {
  // Validate input
  const { errors, isValid } = validateMovieInput(req.body);
  // Send errors if any
  if (!isValid) {
    res.status(400).json(errors);
  }

  const { title } = req.body;
  axios
    .get(`http://www.omdbapi.com/?t=${title}&apikey=4a5156ae`)
    .then(response => {
      if (response.data.Response === "True") {
        const newMovie = new Movie({
          movie: response.data
        });
        newMovie.save().then(movie => res.json(movie));
      } else res.status(404).json(response.data.Error);
    })
    .catch(err => res.status(404).json({ movienotfound: "Movie not found" }));
});

module.exports = router;
