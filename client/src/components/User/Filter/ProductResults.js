import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../../Context/ProductContext";
import axios from "axios";

function ProductResults() {
  const productContext = useContext(ProductContext);
  const { product, productDispatch } = productContext;
  const userName = localStorage.getItem("userName");

  axios({
    url: "http://localhost:4747/getAllProducts",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: { userName: userName },
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => console.log(err));
  return (
    <div className="w-75">
      <ProductCard />
    </div>
  );
}

export default ProductResults;
