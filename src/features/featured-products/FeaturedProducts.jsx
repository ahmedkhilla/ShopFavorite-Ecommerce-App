import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCard from "../productCard/ProductCard";
import { sortRatingHighToLow } from "../sortProduct/sortFunctions";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import SnackBar from "../snackbars/SnackBar";

function FeaturedProducts() {
  const { products } = useProducts();
  const featuredProducts = sortRatingHighToLow(products);
  const navigate = useNavigate();
  return (
    <Box sx={{ pb: 10 }}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 5 }}
      >
        <Grid item xs={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, fontSize: 30, color: "#1B1C57" }}
          >
            Featured Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: 20,
              textTransform: "capitalize",
              backgroundColor: "#10B981",
              "&:hover": {
                background: "#10B981",
              },
            }}
            onClick={() => navigate("/products")}
          >
            <Typography>See More</Typography>
            <ArrowForwardIosIcon fontSize="small" sx={{ ml: 0.5 }} />
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {featuredProducts.slice(0, 8).map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: "center" }}>
        <Link to="/products">
          <Button
            variant="contained"
            sx={{
              background: "#1B1C57",
              borderRadius: 20,
              textTransform: "capitalize",
              pr: 4,
              pl: 4,
              height: "45px",
              "&:hover": {
                background: "#1B1C57",
              },
            }}
          >
            View More
          </Button>
        </Link>
      </Box>
      <SnackBar />
    </Box>
  );
}

export default FeaturedProducts;
