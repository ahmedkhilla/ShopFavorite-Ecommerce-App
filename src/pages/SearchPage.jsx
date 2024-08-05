import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import Footer from "../features/footer/Footer";
import PageNav from "../features/page-nav/PageNav";
import { useProducts } from "../contexts/ProductsContext";
import SortProduct from "../features/sortProduct/SortProduct";
import ProductCard from "../features/productCard/ProductCard";
import SnackBar from "../features/snackbars/SnackBar";

function SearchPage() {
  const { isLoading, isError, sortedProducts, searchedProducts } =
    useProducts();
  return (
    <div>
      <PageNav />
      <Container sx={{ minHeight: "100dvh", paddingTop: "48px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 500, fontSize: "24px", mb: 3 }}
        >
          Results for searched
        </Typography>
        {isLoading && (
          <div
            style={{
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
        {isError && <h1>Error loading products</h1>}
        {!isLoading && !isError && searchedProducts.length > 0 && (
          <>
            <SortProduct />
            <Grid container spacing={3}>
              {sortedProducts.length > 0
                ? sortedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
                : searchedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
            </Grid>
          </>
        )}
        <SnackBar />
      </Container>
      <Footer />
    </div>
  );
}

export default SearchPage;
