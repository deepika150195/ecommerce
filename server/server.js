// required collections
// 1. users (includes role such as consumer, seller, admin)
/* 
{
userName: String, 
userEmail: String, 
userPhone:String, 
password:String, 
role:String,
userId:String, 
address:String
pincode: String
}
*/

// ------
// 2. products (contains all products data)
/* 
{
productId: String,
productDesc: String,
productCategory: String,
brand: String,
sellerId: String,
inStock: Boolean,
stockQty: Number,
thumbImage: String,
images: Array,
price: Number,
specs: Object
offerPercent: Number
}
*/
// -------

// 3. orders (contains all order information)
/*
{
orderId: String,
productId: String,
orderQty: Number,
unitPrice: Number,
orderPrice: Number,
sellerId: String,
orderedOn: String,
userId: String,
orderStatus: String,
rating: Number,
review: String
}
*/

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import { router } from "./router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("images"));
app.listen(process.env.PORT || 4848);

mongoose
  .connect(process.env.DB_URI, { dbName: "ecommerce" })
  .then((response) => {
    console.log("MongoDB server connected");
  })
  .catch((err) => console.log(err));

app.use("/", router);
