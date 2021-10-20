import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductDataProvider } from "./ProductDataContext";
import { CartProvider} from "./CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductDataProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </ProductDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
