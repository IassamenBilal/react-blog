const User = require("../model/User");
const { json } = require("express");

const auth = (req, res, next) => {
  const token = req.cookies.w_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user)
      return json({
        isAuth: false,
        error: true,
      });
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = auth;
