
// import React, {Fragment, useState} from "react";
import productList from "./lipstick.json";
import Header from "./Components/Header";
import ProductContainer from "./Components/ProductContainer";

function App(props) {
  
  // const [visible, setVisible] = useState(false);

  return (
    <div>
      <Header />
      <ProductContainer productList={productList} />
      {/* <div>Why do birds fly south for the winter?</div>
      { visible && <div>Because it's too far to walk.</div> }
      <Button onClick={() => setVisible(!visible)}>
        {visible? "Hide Answer" : "Show Answer"}
      </Button> */}
    </div>
  );
}

export default App;
