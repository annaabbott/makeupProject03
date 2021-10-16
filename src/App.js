import React, { Fragment, useState } from "react";
import productList from "./lipstick.json";
import Header from "./Components/Header";
import ProductContainer from "./Components/ProductContainer";
import CartItemsList from "./Components/Cart/CartItemsList";

function App(props) {
  const [visible, setVisible] = useState(false);
  const setVisibleHandler = () => {
    setVisible(true);
  };
  const setHiddenHandler = () => {
    setVisible(false);
  };

  return (
    <div>
      {setVisible && <CartItemsList onClose={setHiddenHandler}/>}
      <Header onSetVisible={setVisibleHandler} />
      <CartItemsList />
      <ProductContainer />
    </div>
  );
}

export default App;
