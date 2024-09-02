import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
  },
  userEmail: {
    type: String,
    unique: true,
  },
  userPhone: String,
  password: String,
  role: String,
  address: String,
  pincode: String,
});

export const userModel = mongoose.model("userModel", userSchema, "users");
