const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Models
const Movie = require("../../models/Movie");

// Validations
const validateMovieInput = require("../../validation/movie");

// @route  GET api/movies
// @desc   Gets movies from DB
router.get("/", (req, res) => {
  Movie.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json(err));
});

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
        Movie.findOne({ movie_id: response.data.imdbID }).then(movie => {
          if (movie) {
            errors.id = "Movie already exists in database";
            res.json(errors);
          } else {
            const newMovie = new Movie({
              movie: response.data,
              movie_id: response.data.imdbID
            });
            newMovie.save().then(movie => res.json(movie));
          }
        });
      } else {
        errors.movie = response.data.Error;
        res.status(404).json(errors);
      }
    })
    .catch(err => res.status(404).json(err));
});

module.exports = router;
