import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Stack from '@mui/material/Stack';

const FavoritesButton = (props) => {
    return (
        <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<FavoriteIcon />}>
          My Favorites
        </Button>
        <Button variant="contained" startIcon={<ShoppingCartIcon />}>
          My Cart
        </Button>
      </Stack>
    );
};

export default FavoritesButton;