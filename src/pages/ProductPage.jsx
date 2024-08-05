import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/ProductsContext";
import PageNav from "../features/page-nav/PageNav";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Footer from "../features/footer/Footer";
import SnackBar from "../features/snackbars/SnackBar";
import { useCart } from "../contexts/CartContext";
import { handleAddToCart } from "../utilites/helpers";
const API_URL = import.meta.env.VITE_API_URL;

function ProductPage() {
  const { product, dispatch, isLoading, isError, errorMessage } = useProducts();
  const { cart, dispatch: cartDispatch } = useCart();

  const { id } = useParams();

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(
    function () {
      async function getProduct() {
        try {
          dispatch({ type: "loading" });
          const { data } = await axios.get(`${API_URL}/products/${id}`);
          if (!data) throw new Error(`There is problem in fetching data`);
          dispatch({ type: "product/dataArrive", payload: data });
        } catch (err) {
          dispatch({ type: "error", payload: err.message });
          console.error(err);
        }
      }
      getProduct();
    },
    [id, dispatch]
  );

  return (
    <>
      <PageNav />
      <Container maxWidth="lg" sx={{ paddingTop: 2, paddingBottom: 6 }}>
        {isError ? (
          <div style={{ textAlign: "center" }}>
            <h2>{errorMessage}</h2>
          </div>
        ) : isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            flexDirection={isSmallScreen ? "column" : "row"}
            gap="5%"
            sx={{ mt: 4, mb: 4 }}
          >
            <Box flexBasis={isSmallScreen ? "100%" : "45%"} position="relative">
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                }}
                src={product.images?.[0]}
                alt="Product Name"
              />
            </Box>

            <Box flexBasis={isSmallScreen ? "100%" : "50%"}>
              <Typography
                variant="h4"
                sx={{ fontSize: 34, fontWeight: 600, mb: 2 }}
              >
                {product.title}
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  letterSpacing: 1.2,
                  fontSize: 38,
                  mb: 2,
                }}
              >
                {(
                  product.price -
                  product.price * (product.discountPercentage / 100)
                ).toFixed(2)}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#888",
                  }}
                >
                  {product.price}
                </span>
              </Typography>

              <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 2.5 }}>
                Category:{" "}
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: 50,
                    ml: 2,
                    backgroundColor: "#10B981",
                    cursor: "alias",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "#10B981",
                    },
                  }}
                >
                  {product.category}
                </Button>
              </Typography>

              <Typography sx={{ mb: 1 }}>{product.description}</Typography>
              <Box mb={1} display="flex" alignItems="center" gap="4px">
                {[...Array(5)].map((_, i) => {
                  if (i < Math.round(product.rating))
                    return <StarIcon key={i} sx={{ color: "#EDAA00" }} />;
                  return <StarOutlineIcon key={i} sx={{ color: "#EDAA00" }} />;
                })}
              </Box>
              <Typography sx={{ mb: 0.5, fontWeight: 500 }}>
                {product.warrantyInformation}
              </Typography>
              <Typography sx={{ mb: 1, fontWeight: 500 }}>
                {product.shippingInformation}
              </Typography>
              <Button
                variant="contained"
                sx={{
                  borderRadius: 50,
                  padding: "3px 16px",
                  fontSize: 12,
                  backgroundColor: `${
                    product.availabilityStatus === "Low Stock"
                      ? "#ffd8d8"
                      : "#d8f7d8"
                  }`,
                  color: `${
                    product.availabilityStatus === "Low Stock"
                      ? "#b71c1c"
                      : "darkGreen"
                  }`,
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "inherit",
                    color: "inherit",
                  },
                }}
              >
                {product.availabilityStatus}
              </Button>
              <Box mt={2} display="flex" justifyContent="flex-start">
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    fontSize: 20,
                    borderRadius: 5,
                    backgroundColor: "#10B981",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "#000",
                    },
                  }}
                  onClick={(e) =>
                    handleAddToCart(e, product, cart, cartDispatch)
                  }
                >
                  Add to cart
                  <ShoppingCartCheckoutIcon sx={{ fontSize: 24, ml: 1.5 }} />
                </Button>
              </Box>
            </Box>
            <SnackBar />
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default ProductPage;
