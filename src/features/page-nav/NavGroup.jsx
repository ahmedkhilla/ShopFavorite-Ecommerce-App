import styles from "./NavGroup.module.css";
import { Badge, Box, Button, IconButton } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreIcon from "@mui/icons-material/MoreVert";
import { AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useProducts } from "../../contexts/ProductsContext";
import { useCart } from "../../contexts/CartContext";
function NavGroup({
  onProfileMenuOpen,
  menuId,
  mobileMenuId,
  onMobileMenuOpen,
}) {
  const { isAuthenticated } = useAuth();
  const { products } = useProducts();
  const { cart } = useCart();

  const favoriteProducts = products.filter(
    (product) => product.favoriteStatus === true
  );
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "flex", alignItems: "center" } }}>
        <IconButton
          size="large"
          aria-label={`show ${cart.length} new mails`}
          color="inherit"
        >
          <Link
            to={isAuthenticated ? "/cart" : "/register"}
            className={styles.link}
          >
            <Badge badgeContent={cart.length} color="error">
              <ShoppingCartCheckoutIcon
                sx={{
                  fontSize: {
                    md: "1.8rem",
                    lg: "2rem",
                  },
                }}
              />
            </Badge>
          </Link>
        </IconButton>
        <IconButton
          size="large"
          aria-label={`show ${favoriteProducts.length} new notifications`}
          color="inherit"
        >
          <Link
            to={isAuthenticated ? "/favorite" : "/register"}
            className={styles.link}
          >
            <Badge badgeContent={favoriteProducts.length} color="error">
              <FavoriteBorderIcon
                sx={{
                  fontSize: {
                    md: "1.8rem",
                    lg: "2rem",
                  },
                }}
              />
            </Badge>
          </Link>
        </IconButton>
        {isAuthenticated ? (
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={onProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle
              sx={{
                fontSize: {
                  md: "1.8rem",
                  lg: "2rem",
                },
              }}
            />
          </IconButton>
        ) : (
          <div style={{ marginLeft: "16px" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#10B981",
                height: "50px",
                textTransform: "unset",
                boxShadow: "none",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#10B981",
                  boxShadow: "none",
                },
              }}
            >
              <Link to="/register" className="link">
                Log In
              </Link>
            </Button>
            <Button
              variant="outlined"
              sx={{
                ml: 1,
                height: "50px",
                textTransform: "unset",
                boxShadow: "none",
                borderRadius: 2,
                color: "#10B981",
                borderColor: "#10B981",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Sign up
            </Button>
          </div>
        )}
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={onMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
    </>
  );
}

export default NavGroup;
