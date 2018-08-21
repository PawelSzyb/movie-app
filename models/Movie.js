const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  movie: {
    type: Object,
    required: true
  }
});

module.exports = Movie = mongoose.model("movies", MovieSchema);
