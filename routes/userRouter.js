const router = require("express").Router();
const User = require("../models/userModel");

//test route, can be tested in Postman
// router.get("/test", (req, res) => {
//   res.send("hello, it is working");
// });

//post
//use async because saving to mongodb is async operation
router.post("/register", async (req, res) => {
  try {
    const { email, password, passwordConfirm, userName } = req.body;

    //validation
    if (!email || !password || !passwordConfirm)
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
    const existingUserEmail = await User.find({ email: email });

    if (existingUserEmail)
      return res.status(400).json({
        msg: "This email has already been registered!",
      });

    //userName is optional, if null, email will be the username
    if (!userName) userName = email;
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;
