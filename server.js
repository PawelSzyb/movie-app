const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

const movies = require("./routes/api/movies");
const comments = require("./routes/api/comments");

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("hello");
});

// Routes
app.use("/api/movies", movies);
app.use("/api/comments", comments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
