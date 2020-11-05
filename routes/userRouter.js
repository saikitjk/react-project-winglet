const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

//test route, can be tested in Postman
// router.get("/test", (req, res) => {
//   res.send("hello, it is working");
// });

//post
//use async because saving to mongodb is async operation
router.post("/register", async (req, res) => {
  try {
    let { userEmail, password, passwordConfirm, userName } = req.body;

    //validation
    if (!userEmail || !password || !passwordConfirm)
      return res
        .status(400)
        .json({ msg: "Required fields are not all entered." });

    //check password length
    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "Diu! Password must be at least 8 characters long!" });

    //match password
    if (password !== passwordConfirm)
      return res.status(400).json({
        msg: "Password confirmation failed. Please enter a match password!",
      });

    //find if email exist in DB, if not, existingUserEmail should be Null
    const existingUserEmail = await User.findOne({ userEmail: userEmail });

    if (existingUserEmail)
      return res.status(400).json({
        msg: "This email has already been registered!",
      });

    //userName is optional, if null, email will be the username
    if (!userName) userName = userEmail;

    //avoid storing passoword as plain text

    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);

    const newUser = new User({
      userEmail,
      password: hashedPw,
      userName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
