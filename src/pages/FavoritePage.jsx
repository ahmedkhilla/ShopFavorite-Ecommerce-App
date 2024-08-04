import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProductCard from "../features/productCard/ProductCard";
import PageNav from "../features/page-nav/PageNav";
import NoFavoriteImage from "../assets/noFavorite.png";
import { useProducts } from "../contexts/ProductsContext";
import Footer from "../features/footer/Footer";

function FavoritePage() {
  const { products, isLoading } = useProducts();

  const favoriteProducts = products.filter(
    (product) => product.favoriteStatus === true
  );

  return (
    <>
      <PageNav />
      <Box
        sx={{
          pt: 8,
          minHeight: "80vh",
        }}
      >
        <Container maxWidth="lg">
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
            My Favorites
          </Typography>
          {!favoriteProducts || favoriteProducts.length === 0 ? (
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
                  width: "200px",
                  height: "200px",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={NoFavoriteImage}
                  alt="no products in the favorite"
                />
              </div>
              <h2>Start adding your favorite products here 😁</h2>
            </div>
          ) : (
            <Grid
              container
              spacing={3}
              sx={{ pb: 6, mt: 1, justifyContent: "center" }}
            >
              {isLoading ? (
                <CircularProgress />
              ) : (
                favoriteProducts.map((product) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                    <ProductCard
                      product={product}
                      // onAddToCart={onAddToCart}
                      // onToggleFavorite={onToggleFavorite}
                    />
                  </Grid>
                ))
              )}
            </Grid>
          )}
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default FavoritePage;
