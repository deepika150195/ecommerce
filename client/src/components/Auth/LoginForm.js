import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const userNameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      userName: userNameRef.current.value,
      password: passwordRef.current.value,
    };

    axios({
      url: "http://localhost:4747/login",
      method: "POST",
      data: userObject,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        localStorage.setItem("role", response.data.user.role);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("userName", response.data.user.userName);
        if (response.data.user.role === "user") navigate("/home/user");
        if (response.data.user.role === "seller") navigate("/home/seller");
        if (response.data.user.role === "admin") navigate("/home/admin");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="d-flex flex-column bg-primary p-3 rounded w-75">
      <div className="d-flex mb-3 form-floating">
        <input
          type="text"
          className="form-control"
          id="userName"
          placeholder="User Name"
          ref={userNameRef}
        />
        <label htmlFor="userName">User Name</label>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button
        className="btn btn-success fw-bold border-white"
        onClick={handleFormSubmit}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
