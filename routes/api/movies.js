const express = require("express");
const router = express.Router();
const axios = require("axios");

// Load Models
const Movie = require("../../models/Movie");

// @route  POST api/movies
// @desc   POST movie from OMDb API
router.post("/", (req, res) => {
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
