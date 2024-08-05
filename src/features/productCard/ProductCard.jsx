import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { handleAddToCart } from "../../utilites/helpers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { useProducts } from "../../contexts/ProductsContext";

function ProductCard({ product }) {
  const { dispatch: cartDispatch, cart } = useCart();
  const { dispatch } = useProducts();
  const navigate = useNavigate();
  function shortTitle(str) {
    return str.split(" ").length > 2
      ? str.split(" ").splice(0, 3).join(" ") + "..."
      : str;
  }

  function handleToggleFavorite(e, product) {
    e.stopPropagation();
    dispatch({ type: "product/toggleFavorite", payload: product.id });
    dispatch({ type: "searchProducts/toggleFavorite", payload: product.id });

    dispatch({
      type: "cateoryProducts/toggleFavorite",
      payload: product.id,
    });
    console.log(product.id);
  }

  return (
    <Card
      onClick={(e) => {
        e.stopPropagation();
        navigate(`/product/${product.id}`);
      }}
      sx={{
        maxWidth: 320,
        margin: "0px auto 16px auto",
        borderRadius: 4,
        cursor: "pointer",
        boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardHeader
        action={
          <IconButton onClick={(e) => handleToggleFavorite(e, product)}>
            {product.favoriteStatus ? (
              <FavoriteIcon sx={{ fontSize: "22px", color: "#D20000" }} />
            ) : (
              <FavoriteBorderIcon sx={{ fontSize: "22px" }} />
            )}
          </IconButton>
        }
        title={
          <Button
            variant="contain"
            sx={{
              backgroundColor: "#10B981",
              color: "#fefefe",
              borderRadius: 50,
              fontSize: 13,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                color: "#000",
              },
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
          >
            More Info
          </Button>
        }
      />
      <div style={{ textAlign: "center" }}>
        <CardMedia
          component="img"
          height="140"
          image={product.images?.[0]}
          alt="Product image"
          style={{ objectFit: "contain" }}
        />
      </div>
      <CardContent sx={{ height: "185px" }}>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            mb: 0.7,
          }}
        >
          {shortTitle(product.title)}
        </Typography>

        <Typography
          sx={{ fontSize: 14, fontWeight: 500, color: "#999", mb: 1 }}
        >
          Brand: {product.brand}
        </Typography>

        <Typography sx={{ fontSize: 18, fontWeight: 700 }}>
          {(
            product.price -
            product.price * (product.discountPercentage / 100)
          ).toFixed(2)}{" "}
          <span
            style={{
              textDecoration: "line-through",
              color: "#888",
              fontSize: 14,
              fontWeight: 400,
            }}
          >
            {product.price.toFixed(2)}
          </span>
        </Typography>
        <div style={{ marginTop: 8, marginBottom: 7 }}>
          {[1, 2, 3, 4, 5].map((_, i) => {
            if (i < Math.round(product.rating))
              return <StarIcon sx={{ color: "#EDAA00" }} key={i} />;
            return <StarOutlineIcon sx={{ color: "#EDAA00" }} key={i} />;
          })}
        </div>

        <Button
          variant="contained"
          sx={{
            mb: 1,
            borderRadius: 50,
            fontSize: 10,
            fontWeight: 500,
            backgroundColor: `${
              product.availabilityStatus.toLowerCase() ===
              "Low Stock".toLowerCase()
                ? "#ffd8d8"
                : "#d8f7d8"
            }`,
            color: `${
              product.availabilityStatus.toLowerCase() ===
              "Low Stock".toLowerCase()
                ? "#b71c1c"
                : "darkGreen"
            }`,
            boxShadow: "none",
            "&:hover": {
              backgroundColor: `${
                product.availabilityStatus.toLowerCase() ===
                "Low Stock".toLowerCase()
                  ? "#ffd8d8"
                  : "#d8f7d8"
              }`,
              color: `${
                product.availabilityStatus.toLowerCase() ===
                "Low Stock".toLowerCase()
                  ? "#b71c1c"
                  : "darkGreen"
              }`,
              boxShadow: "none",
            },
          }}
        >
          {product.availabilityStatus}
        </Button>
      </CardContent>
      <CardActions
        sx={{
          mb: 2,
          pl: 2,
          pr: 2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: "100%",
            pt: 1.3,
            pb: 1.3,
            fontSize: 16,
            backgroundColor: "#10B981",
            borderRadius: 5,
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
          onClick={(e) => handleAddToCart(e, product, cart, cartDispatch)}
        >
          <AddShoppingCartIcon />{" "}
          <span style={{ marginLeft: "8px" }}>Add to cart</span>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
