import React from "react";
import { useNavigate } from "react-router-dom";
import MobilesNavigator from "../../../assets/mobilesNav.png";
import LaptopsNavigator from "../../../assets/laptopsNav.png";
import TabletsNavigator from "../../../assets/tabletsNav.png";
import AppliancesNavigator from "../../../assets/appliancesNav.png";
import "./UserHome.css";

function UserHomeCategories() {
  const navigate = useNavigate();

  const navigateToFilter = (category) => {
    navigate(`/filter?category=${category}`);
  };
  return (
    <div className="homeCategories d-flex flex-column justify-content-evenly">
      <h4>Shop by Categories</h4>
      <div className="d-flex justify-content-evenly align-items-center">
        <div
          className="d-flex flex-column justify-content-between align-items-center gap-2 border border-2 p-3 border-primary rounded bg-light text-dark"
          onClick={() => navigateToFilter("mobiles")}
        >
          <img src={MobilesNavigator} alt="no image" />
          <h5>Mobiles</h5>
        </div>
        <div
          className="d-flex flex-column justify-content-between align-items-center gap-2 border border-2 p-3 border-primary rounded bg-light text-dark"
          onClick={() => navigateToFilter("laptops")}
        >
          <img src={LaptopsNavigator} alt="no image" />
          <h5>Laptops</h5>
        </div>
        <div
          className="d-flex flex-column justify-content-between align-items-center gap-2 border border-2 p-3 border-primary rounded bg-light text-dark"
          onClick={() => navigateToFilter("tablets")}
        >
          <img src={TabletsNavigator} alt="no image" />
          <h5>Tablets</h5>
        </div>
        <div
          className="d-flex flex-column justify-content-between align-items-center gap-2 border border-2 p-3 border-primary rounded bg-light text-dark"
          onClick={() => navigateToFilter("appliances")}
        >
          <img src={AppliancesNavigator} alt="no image" />
          <h5>Appliances</h5>
        </div>
      </div>
    </div>
  );
}

export default UserHomeCategories;
