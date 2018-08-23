const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

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

// static assets if in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
