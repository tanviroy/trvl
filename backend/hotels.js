// This is a Mongoose schema (model) for a hotel.

const mongoose = require("mongoose");
const hotel = new mongoose.Schema({
  name: String,  
  location: String,
  price: String,
  desc: String,
  imageurl: [{ type: String }],
  tags: [{ type: String }],
  amenities: [{ type: String }],
  iata: [{ type: String }],
  rating: [{ type: Number }],
  reviews: [{ body: String, user: String, verified: String }],
  bookers: [{ type: String }],
  available: [{ date: Date, rooms: Number }],
  bucketlisted: [{ type: String }],
  coords: [{ type: Number }]
});

module.exports = mongoose.model("hotels", hotel);
