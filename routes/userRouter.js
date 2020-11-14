const router = require("express").Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jsonWebToken = require("jsonwebtoken");
const auth = require("../middleware/auth");

//post for registration
//use async because saving to mongodb is async operation
router.post("/register", async (req, res) => {
  try {
    let { userEmail, password, confirmPassword, userName } = req.body;

    //validation
    if (!userEmail || !password || !confirmPassword)
      return res.status(400).json({ msg: "All fields must be filled." });

    //check password length
    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters long." });

    //match password
    if (password !== confirmPassword)
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

//login
router.post("/login", async (req, res) => {
  try {
    const { userEmail, password } = req.body;

    if (!userEmail || !password)
      return res.status(400).json({ msg: "All fields must be filled." });

    const user = await User.findOne({ userEmail: userEmail });
    if (!user)
      return res
        .status(400)
        .json({ msg: "There is no user registered with this email address." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        msg:
          "This passowrd does not match what we have in our record. Please try again.",
      });

    const token = jsonWebToken.sign(
      { id: user._id },
      process.env.jsonWebToken_Secret
    );
    res.json({
      token,
      user: {
        id: user._id,
        userName: user.userName,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//delete existing user
router.delete("/delete", auth, async (req, res) => {
  console.log(req.user); //check login user

  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//check token is valid
//if user exist a token should be valid
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) return res.json(false);

    const verified = jsonWebToken.verify(
      token,
      process.env.jsonWebToken_Secret
    );
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//get user already login
router.get("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.userName,
    id: user._id,
  });
});

module.exports = router;
