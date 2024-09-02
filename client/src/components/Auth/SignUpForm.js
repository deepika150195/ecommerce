import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUpForm({ isNewUser, setIsNewUser }) {
  const userNameRef = useRef();
  const userEmailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const pincodeRef = useRef();

  const navigate = useNavigate();

  const [seletedRole, setSelectedRole] = useState("");

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userObject = {
      userName: userNameRef.current.value,
      userEmail: userEmailRef.current.value,
      userPhone: phoneRef.current.value,
      password: passwordRef.current.value,
      role: seletedRole,
      address: addressRef.current.value,
      pincode: pincodeRef.current.value,
    };

    axios({
      url: "http://localhost:4747/signUp",
      method: "POST",
      data: userObject,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status == 200) {
          setIsNewUser(!isNewUser);
        } else {
          alert("Your account is not created. Please try again");
        }
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
          autoComplete="off"
          ref={userNameRef}
        />
        <label htmlFor="userName">User Name</label>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="email"
          className="form-control"
          id="userEmail"
          placeholder="User Email"
          autoComplete="off"
          ref={userEmailRef}
        />
        <label htmlFor="userEmail">User Email</label>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="text"
          className="form-control"
          id="phone"
          placeholder="Phone"
          autoComplete="off"
          ref={phoneRef}
        />
        <label htmlFor="phone">Phone</label>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          autoComplete="off"
          ref={passwordRef}
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className="d-flex mb-3 justify-content-between align-items-center bg-light p-2 rounded-3">
        <h6 className="m-0 text-secondary-emphasis">Who you are</h6>
        <div className="form-check form-switch">
          <input
            type="radio"
            role="switch"
            id="admin"
            className="form-check-input"
            name="role"
            value="admin"
            onChange={handleRoleChange}
          />
          <label htmlFor="admin">Admin</label>
        </div>
        <div className="form-check form-switch">
          <input
            type="radio"
            role="switch"
            id="seller"
            className="form-check-input"
            name="role"
            value="seller"
            onChange={handleRoleChange}
          />
          <label htmlFor="seller">Seller</label>
        </div>
        <div className="form-check form-switch">
          <input
            type="radio"
            role="switch"
            id="user"
            className="form-check-input"
            name="role"
            value="user"
            onChange={handleRoleChange}
          />
          <label htmlFor="user">User</label>
        </div>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Address"
          autoComplete="off"
          ref={addressRef}
        />
        <label htmlFor="address">Address</label>
      </div>

      <div className="d-flex mb-3 form-floating">
        <input
          type="text"
          className="form-control"
          id="pincode"
          placeholder="Pin Code"
          autoComplete="off"
          ref={pincodeRef}
        />
        <label htmlFor="pincode">Pin code</label>
      </div>

      <button
        className="btn btn-success fw-bold border-white"
        onClick={handleFormSubmit}
      >
        Register
      </button>
    </form>
  );
}

export default SignUpForm;
