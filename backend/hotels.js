// This is a Mongoose schema (model) for a hotel.

const mongoose = require("mongoose");
const hotel = new mongoose.Schema({
  name: String,  
  location: String,
  price: String,
  imageurl: [{ type: String }],
  amenities: [{ type: String }],
  rating: [{ type: Number }],
  reviews: [{ body: String, user: String, verified: String }],
  booked: [{ type: String }],
  bucketlisted: [{ type: String }],
});

module.exports = mongoose.model("hotels", hotel);
