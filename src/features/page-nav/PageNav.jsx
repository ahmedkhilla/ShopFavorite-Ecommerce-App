import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchBar from "../search-comp/SearchBar";
import NavGroup from "./NavGroup";
import { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../contexts/AuthContext";
import LogoutConfirm from "../logoutDialog/LogoutConfirm";
import { useProducts } from "../../contexts/ProductsContext";
import { useCart } from "../../contexts/CartContext";

function PageNav() {
  const { isAuthenticated, logoutDialogOpen } = useAuth();
  const { cart } = useCart();
  const { dispatch, products } = useProducts();
  const favoriteProducts = products.filter(
    (product) => product.favoriteStatus === true
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate();

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem
        onClick={() => {
          logoutDialogOpen();
          if (!isAuthenticated) {
            navigate("/");
          }
          handleMenuClose();
        }}
      >
        <LogoutIcon sx={{ mr: 1 }} />
        Log out
      </MenuItem>
      <MenuItem>
        <PersonOutlineIcon sx={{ mr: 1 }} />
        Account Profile
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {isAuthenticated ? (
        <MenuItem
          onClick={() => {
            logoutDialogOpen();
            handleMobileMenuClose();
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <LogoutIcon />
          </IconButton>
          <p>Log out</p>
        </MenuItem>
      ) : (
        <MenuItem>
          <Link
            to="/register"
            className="link"
            style={{ display: "flex", alignItems: "center" }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <LoginIcon />
            </IconButton>
            <p>Log In</p>
          </Link>
        </MenuItem>
      )}
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <PersonOutlineIcon />
        </IconButton>
        <p>Sign up</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/cart")}>
        <IconButton
          size="large"
          aria-label={`show ${cart.length} new mails`}
          color="inherit"
        >
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartCheckoutIcon />
          </Badge>
        </IconButton>
        <p>My Cart</p>
      </MenuItem>
      <MenuItem onClick={() => navigate("/favorite")}>
        <IconButton
          size="large"
          aria-label={`show ${favoriteProducts.length} new notifications`}
          color="inherit"
        >
          <Badge badgeContent={favoriteProducts.length} color="error">
            <FavoriteBorderIcon />
          </Badge>
        </IconButton>
        <p>My Favorite</p>
      </MenuItem>
    </Menu>
  );
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ pt: 1, pb: 1, backgroundColor: "#f6f6f6", color: "#000" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              aria-label="open drawer"
              onClick={() => {
                dispatch({ type: "drawer/toggle", payload: true });
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.2rem",
                  },
                }}
              />
            </IconButton>

            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{
                display: { xs: "none", sm: "block" },
                fontSize: {
                  xs: "1.25rem",
                  sm: "1.4rem",
                  md: "1.65rem",
                  lg: "1.75rem",
                },
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
            >
              <Link to="/" className="link" style={{ color: "#000" }}>
                ShopFavorite
              </Link>
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <SearchBar />
            <NavGroup
              onProfileMenuOpen={handleProfileMenuOpen}
              menuId={menuId}
              mobileMenuId={mobileMenuId}
              onMobileMenuOpen={handleMobileMenuOpen}
            />
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <LogoutConfirm />
    </>
  );
}

export default PageNav;
