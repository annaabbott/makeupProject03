import React, { useContext } from "react";
import BasicCard from "./BasicCard";
import Container from "@mui/material/Container";
import ProductDetailsModal from "./ProductDetailsModal";
import ProductDataContext from "../ProductDataContext";

function ProductContainer(props) {
  const productContext = useContext(ProductDataContext);
  const [visibleProduct, setVisibleProduct] = React.useState(null);

  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      <ProductDetailsModal
        product={visibleProduct}
        handleClose={() => setVisibleProduct(null)}
      />
      {productContext.products.map((product) => (
        <BasicCard
          key={product.id}
          brand={product.brand}
          name={product.name}
          image_link={product.image_link}
          price={product.price}
          price_sign={product.price_sign}
          showDetails={() => setVisibleProduct(product)}
        />
      ))}
    </Container>
  );
}

export default ProductContainer;
