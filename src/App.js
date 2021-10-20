import React, { useContext, useState } from "react";
import Header from "./Components/Header";
import ProductContainer from "./Components/ProductContainer";
import CartContentsModal from "./Components/Cart/CartContentsModal";
import ProductDataContext from "./ProductDataContext";


function App(props) {
  const [visible, setVisible] = useState(false);
  const productContext = useContext(ProductDataContext);

  const setVisibleHandler = () => {
    setVisible(true);
  };
  const setHiddenHandler = () => {
    setVisible(false);
  };
  console.log(productContext)
  return (
    <div>
      {visible && <CartContentsModal visible={visible} onClose={setHiddenHandler}/>}
      <Header onSetVisible={setVisibleHandler} />
      
      {productContext.isLoading && <h1> loading ...</h1>}
      {!productContext.isLoading && (productContext.products.length) && <ProductContainer /> }
      {!productContext.isLoading && productContext.error && <h3>Network Error: {productContext.error.message}</h3>}
    </div>
  );
}

export default App;
