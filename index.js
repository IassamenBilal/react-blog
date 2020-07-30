const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user");
const config = require("./config/key");

mongoose.connect(
  config.mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(5000, console.log("server started at 5000"));
