import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import headerImg from "../images/headerImg.jpg";
import CartButton from "./Cart/CartButton";
import FavoritesButton from "./FavoritesButton";

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Box  />
        <img src={headerImg} alt="An assortment of eyeshadow"/> 
        {/* Photo by Siora Photography on Unsplash */}
        <h1>React Drug Store Cosmetics</h1>
        {/* for buttons (below) in MUI use button group */}
        <FavoritesButton />
        {/* <CartButton /> */}
      </Container>
    </React.Fragment>
  );
}

export default Header;
