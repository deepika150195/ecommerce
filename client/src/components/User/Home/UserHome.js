import React from "react";
import UserHomeCarousel from "./UserHomeCarousel";
import UserHomeCategories from "./UserHomeCategories";
import "./UserHome.css";

function UserHome() {
  return (
    <div className="bg-dark text-white">
      <UserHomeCarousel />
      <UserHomeCategories />
    </div>
  );
}

export default UserHome;
