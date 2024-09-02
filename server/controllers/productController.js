import { userModel } from "../models/users.js";
import { productModel } from "../models/products.js";

// add new product
// check the user role is "seller"
// if yes, allow the user to add new product; else, do not allow the user to add new product
export function addProduct(req, res) {
  const {
    userName,
    productDesc,
    productCategory,
    brand,
    sellerId,
    inStock,
    stockQty,
    thumbImage,
    images,
    price,
    specs,
    offerPercent,
  } = req.body;
  console.log(req.body);
  console.log(req.file);
  userModel.find({ userName: userName }).then((userArray) => {
    const productObject = new productModel({
      productDesc,
      productCategory,
      brand,
      sellerId,
      inStock,
      stockQty,
      thumbImage,
      images,
      price,
      specs,
      offerPercent,
    });
    console.log(userArray);
    userArray[0].role == "seller"
      ? productObject.save().then((savedObj) => {
          res.status(200).json({
            message: "Product added successfully",
            newProduct: savedObj,
          });
        })
      : res.status(401).json({ message: "Unauthrorized access" });
  });
}

// get product details by its id (only for seller)
// check the user role is "seller"
// is yes, fetch particular product details and send back to the user in response
export function getProductDetails(req, res) {
  const { productId } = req.body;
  userModel.find({ userName: userName }).then((userArray) => {
    userArray[0].role == "seller"
      ? productModel.findById(productId).then((productObj) => {
          if (productObj) {
            res.status(200).json({
              message: "Product info fetched successfully.",
              product: productObj,
            });
          } else {
            res.status(404).json({
              message: "Product not found",
            });
          }
        })
      : res.status(401).json({ message: "Unauthrorized access" });
  });
}

// modify existing product
// check the user role is "seller"
// if yes, allow the user to modify product details; else, do not allow the user to modify product details
export function modifyProduct(req, res) {
  const {
    productId,
    productDesc,
    productCategory,
    brand,
    sellerId,
    inStock,
    stockQty,
    thumbImage,
    images,
    price,
    specs,
    offerPercent,
  } = req.body;
  userModel.find({ userName: userName }).then((userArray) => {
    userArray[0].role == "seller"
      ? productModel.findByIdAndUpdate(
          productId,
          {
            productDesc,
            productCategory,
            brand,
            sellerId,
            inStock,
            stockQty,
            thumbImage,
            images,
            price,
            specs,
            offerPercent,
          },
          (err, updatedObj) => {
            if (err) {
              res
                .status(404)
                .json({ message: "cannot udpate the product details" });
            } else {
              res.status(200).json({
                message: "product details updated successfully",
                updatedObj: updatedObj,
              });
            }
          }
        )
      : res.status(401).json({ message: "Unauthrorized access" });
  });
}

// get all products
// check the user role is "user"
// is yes, fetch all product details and send back to the user in response
export function getAllProducts(req, res) {
  const { userName } = req.body;
  userModel.find({ userName: userName }).then((userArray) => {
    console.log(userArray);
    userArray[0].role == "user"
      ? productModel.find().then((products) => {
          res.status(200).json({
            message: "All products fetched successfully",
            products: products,
          });
        })
      : res.status(401).json({ message: "Unauthrorized access" });
  });
}

// filter products
// check the user role is "consumer"
// is yes, filter products and send back to the user in response
export function filterProducts(req, res) {}
