import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  productId: String,
  orderQty: Number,
  unitPrice: Number,
  orderPrice: Number,
  sellerId: String,
  orderedOn: String,
  userId: String,
  orderStatus: String,
  rating: Number,
  review: String,
});

export const orderModel = mongoose.model("orderModel", orderSchema, "orders");
