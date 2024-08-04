import { Box, Grid, Typography } from "@mui/material";
import CartTableHead from "./CartTableHead";
import CartItem from "./CartItem";
import { useCart } from "../../contexts/CartContext";

function CartTable() {
  const { cart } = useCart();
  return (
    <>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 0.5 }}>
        Shopping Cart
      </Typography>
      <Typography sx={{ fontSize: 15, mb: 3 }}>
        <strong>{cart.length} items</strong> in your cart
      </Typography>

      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: 3,
          padding: "20px",
        }}
      >
        <Grid container spacing={3}>
          <CartTableHead />
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default CartTable;
