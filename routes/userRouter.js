const router = require("express").Router();

//test route, can be tested in Postman
router.get("/test", (req, res) => {
  res.send("hello, it is working");
});

module.exports = router;
