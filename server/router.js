import express from "express";
import { signUp, login } from "./controllers/auth.js";
import { getAllProducts, addProduct } from "./controllers/productController.js";

export const router = express.Router();

router.post("/signUp", signUp);
router.post("/login", login);
router.post("/getAllProducts", getAllProducts);
router.post("/addProduct", addProduct);
