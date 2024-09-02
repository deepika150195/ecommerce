import React from "react";
import ThemeButton from "../Theme/ThemeButton";
import cartIcon from "../../assets/cartIcon.svg";
import { useNavigate } from "react-router-dom";

function Header({ opacity }) {
  const userName = localStorage.getItem("userName");
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <div
      className={
        opacity == "0"
          ? "opacity-0 position-absolute top-0"
          : "d-flex opacity-100 justify-content-between align-items-center p-3 bg-primary"
      }
    >
      <div
        className="text-white fw-bolder"
        onClick={() => navigate(`/home/${userRole}`)}
      >
        Logo
      </div>
      <div className="text-white d-flex gap-5 align-items-center">
        <ThemeButton />
        <div className="bg-light px-3 py-2 rounded d-flex justify-content-evenly align-items-center">
          <img src={cartIcon} />
          <h6 className="m-0 bg-dark p-1 rounded-circle">8</h6>
        </div>
        <h6 className="m-0 fw-bold">{userName}</h6>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
