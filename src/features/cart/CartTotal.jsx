import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../../contexts/CartContext";
const tax = 15 / 100;
function CartTotal() {
  const { cart } = useCart();
  const subTotal = cart.reduce((acc, item) => acc + item.total, 0);
  return (
    <Box
      sx={{
        padding: "16px 16px",
        background: "#d9f6ec",
        minHeight: 230,
        borderRadius: 6,
      }}
    >
      <Typography
        variant="h6"
        component="h2"
        sx={{ fontWeight: 700, fontSize: 20, mb: 2 }}
      >
        Cart Total
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0.7,
        }}
      >
        <Typography>Cart Subtotal</Typography>
        <Typography sx={{ fontWeight: 700 }}>${subTotal.toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 0.7,
        }}
      >
        <Typography>Tax</Typography>
        <Typography sx={{ fontWeight: 700 }}>{tax.toFixed(2)}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Cart Total</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
          ${(subTotal * tax + subTotal).toFixed(2)}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          textTransform: "unset",
          width: "100%",
          height: 47,
          borderRadius: 8,
          mt: 3,
          // mb: 3,
          background: "#10B981",
          "&:hover": {
            background: "#fff",
            color: "#10B981",
          },
        }}
      >
        Apply
      </Button>
    </Box>
  );
}

export default CartTotal;
