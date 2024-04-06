const mongoose = require("mongoose");
const { Schema } = mongoose;

const BlogSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  brand: String,
  images: [String],
  thumbnail: String,
  discountPercentage: Number,
  rating: Number,
});

exports.Products = mongoose.model("Product", BlogSchema);
