import { Grid, Typography } from "@mui/material";

function CartTableHead() {
  return (
    <Grid className="header" item container lg={12}>
      <Grid item md={6} lg={6}>
        <Typography sx={{ fontWeight: 600, fontSize: 17 }}>Product</Typography>
      </Grid>
      <Grid
        item
        lg={2}
        md={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 17 }}>Price</Typography>
      </Grid>
      <Grid
        item
        lg={2}
        md={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 17 }}>Quantity</Typography>
      </Grid>
      <Grid
        item
        lg={2}
        md={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 17 }}>
          Total Price
        </Typography>
      </Grid>
    </Grid>
  );
}

export default CartTableHead;
