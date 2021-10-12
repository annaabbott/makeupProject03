
// import React, {Fragment, useState} from "react";
import productList from "./lipstick.json";
import Header from "./Components/Header";
import ProductContainer from "./Components/ProductContainer";

function App(props) {
  
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      <Header />
      <ProductContainer />
    </div>
  );
}

export default App;
