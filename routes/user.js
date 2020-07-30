const router = require("express").Router();
const User = require("../model/User");

//Regsiter

router.post("/register", async (req, res) => {
  const { name, email, password } = await req.body;
  const newUser = new User({ name, email, password });
  try {
    const saveUser = await newUser.save();
    res.send(saveUser);
  } catch (error) {
    res.send("Error");
  }
});

module.exports = router;
