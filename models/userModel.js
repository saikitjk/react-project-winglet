const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//schema for mongodb
const userSchema = new Schema({
  userEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  userName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema); //set it to use user collection
