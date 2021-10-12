import React from "react";
import BasicCard from "./BasicCard";
import Container from "@mui/material/Container";
import ProductDetailsModal from "./ProductDetailsModal";

function ProductContainer(props) {

    const [visibleProduct, setVisibleProduct] = React.useState(null);

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      <ProductDetailsModal 
        product={visibleProduct} 
        handleClose={ () => setVisibleProduct(null)}/>
      {props.productList.map((product) => (
        <BasicCard
          key={product.id}
          brand={product.brand}
          name={product.name}
          image_link={product.image_link}
          price={product.price}
          price_sign={product.price_sign}
          showDetails={ () => setVisibleProduct(product)}
        />
      ))}
    </Container>
  );
}

export default ProductContainer;
