import Dialog from "@mui/material/Dialog";
import deleteImage from "../../assets/deleteItem.png";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useCart } from "../../contexts/CartContext";

function DeleteCartItem({ item }) {
  const { dialog, dispatch } = useCart();

  function handleDeleteItem(id) {
    dispatch({ type: "cart/delete", payload: id });
    dispatch({ type: "cart/closeDialog" });
  }

  return (
    <>
      <Dialog
        open={dialog}
        onClose={() => dispatch({ type: "cart/closeDialog" })}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ textAlign: "center", color: "rgba(0,0,0,80%)" }}
          id="alert-dialog-title"
        >
          Delete Item
        </DialogTitle>
        <DialogContent>
          <div
            style={{
              width: "150px",
              height: "150px",
              margin: "0 auto",
              marginBottom: "16px",
            }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
              src={deleteImage}
              alt="delete Indicating Icon"
            />
          </div>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this item from your cart?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ margin: "0 auto 8px auto" }}>
          <Button
            variant="contained"
            onClick={() => handleDeleteItem(item.id)}
            sx={{
              backgroundColor: "#EE636D",
              width: "100px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#EE636D",
              },
            }}
          >
            Delete
          </Button>
          <Button
            sx={{
              backgroundColor: "#EBEBED",
              color: "#444",
              width: "100px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#EBEBED",
              },
            }}
            variant="contained"
            onClick={() => dispatch({ type: "cart/closeDialog" })}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DeleteCartItem;
