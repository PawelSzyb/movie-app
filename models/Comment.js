const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  movie_id: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});

module.exports = Comment = mongoose.model("comments", CommentSchema);
