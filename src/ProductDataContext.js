import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

async function getProducts() {
  const result = await axios.get("/.netlify/functions/products");
  return result.data || [];
}

const initialState = { products: [], loading: false, error: null };

const ProductDataContext = createContext(initialState);

export function ProductDataProvider(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onLoad() {
    setIsLoading(true);

    try{
      const data = await getProducts();
      setProducts(data);
    } catch(error) {
      setError(error);
      console.log(error);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <ProductDataContext.Provider value={{ products, isLoading, error }}>
      {props.children}
    </ProductDataContext.Provider>
  );
}

export default ProductDataContext;
