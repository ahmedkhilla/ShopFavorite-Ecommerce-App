import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import PageNav from "../features/page-nav/PageNav";
import SortProduct from "../features/sortProduct/SortProduct";
import { useProducts } from "../contexts/ProductsContext";
import ProductCard from "../features/productCard/ProductCard";
import SnackBar from "../features/snackbars/SnackBar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

function CategoryPage() {
  const { categoryProducts, isLoading, isError, sortedProducts, dispatch } =
    useProducts();

  const { slug } = useParams();

  useEffect(
    function () {
      async function getSingleCategory() {
        try {
          dispatch({ type: "loading" });
          const { data } = await axios.get(
            `${API_URL}/products/category/${slug}`
          );
          console.log(data);
          if (!data || data.length === 0)
            throw new Error(`There is problem in fetching data`);
          dispatch({
            type: "cateoryProducts/dataArrive",
            payload: data.products,
          });
        } catch (err) {
          dispatch({ type: "error", payload: err.message });
          console.error(err);
        }
      }
      getSingleCategory();
    },
    [dispatch, slug]
  );

  return (
    <div>
      <PageNav />
      <Container sx={{ minHeight: "100vh", paddingTop: "48px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ fontWeight: 500, fontSize: "24px", mb: 3 }}
        >
          {slug} products
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
        {!isLoading && !isError && categoryProducts.length > 0 && (
          <>
            <SortProduct />
            <Grid container spacing={3}>
              {sortedProducts.length > 0
                ? sortedProducts.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                      <ProductCard product={product} />
                    </Grid>
                  ))
                : categoryProducts.map((product) => (
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

export default CategoryPage;
