const express = require("express");
const mongoose = require("mongoose");

// DB config
const db = require("./config/keys").mongoURI;

const movies = require("./routes/api/movies");

mongoose
  .connect(db)
  .then(() => console.log("DB connected"))
  .catch(err => console.log(err));

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

// Routes
app.use("/api/movies", movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
