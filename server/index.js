const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/user");
const config = require("./config/key");
const cookieParser = require("cookie-parser");
mongoose.connect(
  config.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("DB connected");
  }
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server started at " + PORT));
