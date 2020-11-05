const mongoose = require("mongoose");

//schema for mongodb
const userSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  password: { type: String, required: true, minlength: 8 },
  userName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema); //set it to use user collection
