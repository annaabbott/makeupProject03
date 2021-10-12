import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductDataProvider } from "./ProductDataContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductDataProvider>
      <App />
    </ProductDataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
