import React, { useContext, useRef, useState } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ThemeButton from "../Theme/ThemeButton";
import ecomImage from "../../assets/ecom.svg";
import "./Auth.css";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

function Auth() {
  const [isNewUser, setIsNewUser] = useState(false);

  const handleFormChange = () => {
    setIsNewUser(!isNewUser);
  };
  return (
    <div className="bg-dark-subtle auth">
      <div className="d-flex flex-row-reverse p-3">
        <ThemeButton />
      </div>
      <h2 className="text-center mb-3">Welcome to ShopHub</h2>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <img src={ecomImage} alt="no image" className="w-25" />
        <div className="d-flex flex-column justify-content-center align-items-center w-50">
          {isNewUser ? (
            <SignUpForm isNewUser={isNewUser} setIsNewUser={setIsNewUser} />
          ) : (
            <LoginForm />
          )}
          {isNewUser ? (
            <p className="m-3">
              If you are an existing user{" "}
              <span
                id="loginForm__link"
                className="text-primary d-inline"
                onClick={handleFormChange}
              >
                Click here
              </span>
            </p>
          ) : (
            <p className="m-3">
              If you are a new user{" "}
              <span
                id="signUpForm__link"
                className="text-primary d-inline"
                onClick={handleFormChange}
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auth;
