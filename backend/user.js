// This is a Mongoose schema (model) for a user.

const mongoose = require("mongoose");
const user = new mongoose.Schema({
  name: String,  
  googleId: String,
  email: String,
  password: String,
  address: { type: String, default: "home" },
  mobile: Number,
  booked: [{ type: String }],
  bucketlist: [{ type: String }],
  visited: [{ type: String }],
});

module.exports = mongoose.model("TRVL_User", user);
