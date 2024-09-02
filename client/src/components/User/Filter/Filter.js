import React from "react";
import ProductFilter from "./ProductFilter";
import ProductResults from "./ProductResults";

function Filter() {
  return (
    <div className="d-flex justify-content-between px-3 align-items-start gap-3">
      <ProductFilter />
      <ProductResults />
    </div>
  );
}

export default Filter;
