const jsonWebToken = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    //check if user is logged in
    const token = req.header("x-auth-token");
    if (!token) return res.status(401).json({ msg: "Unauthorizated Action!" });

    //verified if there is a token
    const verified = jsonWebToken.verify(
      token,
      process.env.REACT_APP_jsonWebToken_Secret
    );
    if (!verified)
      return res
        .status(401)
        .json({ msg: "Unauthorizated Action! Token verification failed" });

    //console.log(verified);
    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
