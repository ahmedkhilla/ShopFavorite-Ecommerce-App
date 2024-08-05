import {
  Box,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CategoryIcon from "@mui/icons-material/Category";
import EnhancedEncryptionIcon from "@mui/icons-material/EnhancedEncryption";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductsContext";
import CategoriesSelect from "../categories/CategoriesSelect";

function MenuDrawer() {
  const navigate = useNavigate();
  const { drawer, dispatch } = useProducts();
  return (
    <Drawer
      open={drawer}
      onClose={() => {
        dispatch({ type: "drawer/toggle", payload: false });
      }}
      PaperProps={{
        sx: {
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
        },
      }}
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClose={() => {
          dispatch({ type: "drawer/toggle", payload: false });
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
            padding: "16px 0 16px 32px",
            backgroundColor: "#d9f6ec",
            boxShadow: "0 .5px 2px rgba(0,0,0,30%)",
          }}
        >
          <StorefrontIcon sx={{ cursor: " pointer", fontSize: 24 }} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontSize: 23,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            ShopFavorite
          </Typography>
        </div>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/products");
                dispatch({ type: "drawer/toggle", payload: false });
              }}
            >
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/favorite");
                dispatch({ type: "drawer/toggle", payload: false });
              }}
            >
              <ListItemIcon>
                <FavoriteBorderIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/cart");
                dispatch({ type: "drawer/toggle", payload: false });
              }}
            >
              <ListItemIcon>
                <ShoppingCartCheckoutIcon />
              </ListItemIcon>
              <ListItemText primary="My Cart" />
            </ListItemButton>
          </ListItem>

          {/* <ListItem disablePadding>
            <ListItemButton
            // onClick={() =>
            //   dispatch({ type: "drawer.toggle", payload: false })
            // }
            >
              <ListItemIcon>
                <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItemButton>
          </ListItem> */}

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/add=product-form");
                dispatch({ type: "drawer/toggle", payload: false });
              }}
            >
              <ListItemIcon>
                <EnhancedEncryptionIcon />
              </ListItemIcon>
              <ListItemText primary="Add a Product" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate("/support");
                dispatch({ type: "drawer/toggle", payload: false });
              }}
            >
              <ListItemIcon>
                <SupportAgentIcon />
              </ListItemIcon>
              <ListItemText primary="Conact our Support" />
            </ListItemButton>
          </ListItem>
          <CategoriesSelect />
        </List>
      </Box>
    </Drawer>
  );
}

export default MenuDrawer;
