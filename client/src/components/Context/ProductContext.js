import { createContext, useReducer } from "react";

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const [product, productDispatch] = useReducer(productReducer, initialProduct);

  return (
    <ProductContext.Provider value={{ product, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function productReducer(product, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...product, action.payload];

    default:
      return;
  }
}

export const initialProduct = [];
