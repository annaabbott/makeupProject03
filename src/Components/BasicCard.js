import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function CapitalizeString(phrase) {
  return phrase[0].toUpperCase() + phrase.slice(1);
}

const cardStyle = {
  width: "300px",
  margin: "20px",
};

const bottomRow = {
  display: "flex",
  justifyContent: "space-between",
};

function BasicCard({
  brand,
  name,
  image_link,
  price,
  price_sign,
  showDetails,
}) {
  const [isFavorite, setIsFavorite] = useState(false);

  function addToCart() {
    
  }

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <h2>{CapitalizeString(brand)}</h2>
        <div>{name}</div>
        <CardMedia component="img" height="140" image={image_link} />
        <div>
          {price_sign}
          {price + 0}
        </div>
        <Box sx={bottomRow}>
          <Button onClick={showDetails}>View Product Details</Button>
          <IconButton onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? (
              <FavoriteOutlinedIcon />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>

          <IconButton onClick={() => addToCart()}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default BasicCard;
