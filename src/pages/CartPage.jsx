import { Box, Container, Grid, Typography } from "@mui/material";
import PageNav from "../features/page-nav/PageNav";
import CartTable from "../features/cart/CartTable";
import CartSideBar from "../features/cart/CartSideBar";
import { useCart } from "../contexts/CartContext";
import NoCartItems from "../assets/noCartItems.png";
function CartPage() {
  const { cart } = useCart();
  return (
    <>
      <PageNav />
      <Box sx={{ backgroundColor: "#E8ECEF", minHeight: "100vh", pt: 4 }}>
        <Container maxWidth="xl">
          {cart.length > 0 ? (
            <Grid container spacing={3}>
              <Grid item sm={12} md={8.5} lg={8.5}>
                <CartTable />
              </Grid>
              <Grid item sm={12} md={3.5} lg={3.5}>
                <CartSideBar />
              </Grid>
            </Grid>
          ) : (
            <>
              <Typography
                variant="h5"
                component="h1"
                sx={{
                  fontWeight: 600,
                  fontSize: 28,
                  textAlign: "center",
                  mb: 4,
                }}
              >
                Shopping Cart
              </Typography>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "16px 0",
                }}
              >
                <div
                  style={{
                    width: "250px",
                    height: "250px",
                    marginBottom: "32px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "8px",
                    }}
                    src={NoCartItems}
                    alt="no products in the cart"
                  />
                </div>
                <h2>
                  No items in the cart yet, Start adding and enjoy Shopping 😀
                </h2>
              </div>
            </>
          )}
        </Container>
      </Box>
    </>
  );
}

export default CartPage;
