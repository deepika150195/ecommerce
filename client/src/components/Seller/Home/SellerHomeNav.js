import React from "react";
import { useNavigate } from "react-router-dom";

function SellerHomeNav() {
  const navigate = useNavigate();
  return (
    <div className="d-flex flex-column gap-3">
      <button
        className="btn btn-dark"
        onClick={() => navigate("/home/seller/dashboard")}
      >
        Dashboard
      </button>
      <button
        className="btn btn-dark"
        onClick={() => navigate("/home/seller/stockInfo")}
      >
        Stock Info
      </button>
      <button
        className="btn btn-dark"
        onClick={() => navigate("/home/seller/addNewProduct")}
      >
        Add New Product
      </button>
    </div>
  );
}

export default SellerHomeNav;
