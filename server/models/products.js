import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productDesc: String,
  productCategory: String,
  brand: String,
  sellerId: String,
  inStock: Boolean,
  stockQty: Number,
  thumbImage: String,
  images: Array,
  price: Number,
  specs: Object,
  offerPercent: Number,
});

export const productModel = mongoose.model(
  "productModel",
  productSchema,
  "products"
);
