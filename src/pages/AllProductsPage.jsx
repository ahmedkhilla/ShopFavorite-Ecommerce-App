import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import PageNav from "../features/page-nav/PageNav";
import SortProduct from "../features/sortProduct/SortProduct";
import { useProducts } from "../contexts/ProductsContext";
import ProductCard from "../features/productCard/ProductCard";
import SnackBar from "../features/cart/SnackBar";
function AllProductsPage() {
  const { products, isLoading, isError, sortedProducts } = useProducts();
  return (
    <div>
      <PageNav />
      <Container sx={{ minHeight: "100vh", paddingTop: "48px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 500, fontSize: "24px", mb: 3 }}
        >
          Our products
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
        {!isLoading && !isError && products.length > 0 && (
          <>
            <SortProduct />
            <Grid container spacing={3}>
              {sortedProducts.length > 0
                ? sortedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
                : products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))}
            </Grid>
          </>
        )}
        <SnackBar />
      </Container>
    </div>
  );
}

export default AllProductsPage;
