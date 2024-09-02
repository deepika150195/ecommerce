import { userModel } from "../models/users.js";
import bcrypt from "bcrypt";

// Signup API
export function signUp(req, res) {
  const { userName, userEmail, userPhone, password, role, address, pincode } =
    req.body;

  userModel.find({ userName: userName }).then((userArray) => {
    userArray.length
      ? userArray[0].userEmail == userEmail
        ? res.status(403).json({
            status: "fail",
            message: "You already registered. Please login",
          })
        : res.status(403).json({
            status: "fail",
            message: "User name already taken please choose different one",
          })
      : bcrypt.hash(password, 12).then((hashedPW) => {
          const userObject = new userModel({
            userName,
            userEmail,
            userPhone,
            password: hashedPW,
            role,
            address,
            pincode,
          });

          userObject
            .save()
            .then((response) => {
              res.status(200).json({
                status: "success",
                message: "Your account created successfully",
              });
            })
            .catch((err) => console.log(err));
        });
  });
}

// Login API
export function login(req, res) {
  const { userName, password } = req.body;
  userModel.find({ userName: userName }).then((userArray) => {
    userArray.length
      ? bcrypt.compare(password, userArray[0].password).then((isMatched) => {
          isMatched
            ? res.status(200).json({
                status: "success",
                message: "You have logged in successfully.",
                user: userArray[0],
              })
            : res
                .status(401)
                .json({ status: "fail", message: "Invalid Credentials" });
        })
      : res.status(404).json({ status: "fail", message: "User not found" });
  });
}
