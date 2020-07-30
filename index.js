const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://Bilal:bilal@cluster0.q50xs.mongodb.net/<dbname>?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(5000, console.log("server started at 5000"));
