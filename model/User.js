const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlegth: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    min: 5,
  },
  //   lastname: {
  //     type: String,
  //     maxlength: 15,
  //   },
  //   role: {
  //     type: Number,
  //     default: 0,
  //   },
  //   token: {
  //     type: String,
  //   },
  //   tokenExpiration: {
  //     type: Number,
  //   },
});

const User = mongoose.model("UserModal", userSchema);

module.exports = User;
