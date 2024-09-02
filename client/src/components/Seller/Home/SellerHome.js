import React from "react";
import SellerHomeNav from "./SellerHomeNav";
import { Outlet } from "react-router-dom";

function SellerHome() {
  return (
    <div className="d-flex gap-3">
      <div className="w-25 p-3">
        <SellerHomeNav />
      </div>
      <div className="w-75">
        <Outlet />
      </div>
    </div>
  );
}

export default SellerHome;
