import {
  Avatar,
  Box,
  Button,
  IconButton,
  Grid,
  ListItemAvatar,
  Typography,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { useCart } from "../../contexts/CartContext";
import DeleteCartItem from "./DeleteCartItem";

function CartItem({ item }) {
  const { dispatch } = useCart();

  function handleSubtractQuantity(id) {
    dispatch({ type: "cart/quantitySub", payload: id });
  }

  function handleAddQuantity(id) {
    dispatch({ type: "cart/quantityAdd", payload: id });
  }

  return (
    <>
      <Grid className="body-item" item container lg={12}>
        <Grid
          item
          lg={6}
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <ListItemAvatar>
            <Avatar
              alt="item-image"
              src={item.image}
              sx={{
                width: 70,
                height: 70,
                borderRadius: 2,
              }}
            />
          </ListItemAvatar>
          <Box>
            <Typography variant="h6" sx={{ fontSize: 18 }}>
              {item.title}
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#666" }}>
              Brand: {item.brand}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>
            ${item.price.toFixed(2)}
          </Typography>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ gap: 1 }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                height: "25px",
                minWidth: 0,
                color: "#000",
                borderColor: "#888",
                "&:hover": {
                  color: "#000",
                  borderColor: "#888",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => handleSubtractQuantity(item.id)}
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                height: "25px",
                minWidth: 0,
                color: "#000",
                borderColor: "#888",
                "&:hover": {
                  color: "#000",
                  borderColor: "#888",
                  backgroundColor: "transparent",
                },
              }}
              onClick={() => handleAddQuantity(item.id)}
            >
              +
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          lg={2}
          md={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <>
            <Typography
              sx={{ fontWeight: 600, fontSize: 18, color: "#10B981" }}
            >
              ${item.total.toFixed(2)}
            </Typography>
            <IconButton
              onClick={() => {
                dispatch({ type: "cart/openDialog", payload: item.id });
              }}
            >
              <HighlightOffOutlinedIcon sx={{ fontSize: "18px", ml: 0.5 }} />
            </IconButton>
          </>
        </Grid>
      </Grid>
      <DeleteCartItem item={item} />
    </>
  );
}

export default CartItem;
