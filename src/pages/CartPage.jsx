import { Box, Container, Grid } from "@mui/material";
import PageNav from "../features/page-nav/PageNav";
import CartTable from "../features/cart/CartTable";
import CartSideBar from "../features/cart/CartSideBar";

function CartPage() {
  return (
    <>
      <PageNav />
      <Box sx={{ backgroundColor: "#E8ECEF", minHeight: "100vh", pt: 4 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item sm={12} md={8.5} lg={8.5}>
              <CartTable />
            </Grid>
            <Grid item sm={12} md={3.5} lg={3.5}>
              <CartSideBar />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default CartPage;
