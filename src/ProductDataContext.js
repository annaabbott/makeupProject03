import React, { createContext, useEffect, useState } from "react";
import productList from "./lipstick.json";


const ProductDataContext = createContext({ products: [] });

export function ProductDataProvider(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      setProducts(productList)
  }, []);

  return (
      <ProductDataContext.Provider value={{products}}>
          {props.children}
      </ProductDataContext.Provider>
  );
};

export default ProductDataContext;