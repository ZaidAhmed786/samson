const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Product title is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
    min: [0, "Price must be a positive number"],
  },
  img: {
    type: String,
    required: [true, "Product image URL is required"],
  },
  imgId: {
    type: String,
    required: [true, "Image ID is required"],
  },
  status: {
    type: String,
    enum: ["Available", "Out of Stock", "Discontinued"],
    default: "Available",
    required: [true, "Product status is required"],
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: [true, "Category ID is required"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
