import { Alert, Snackbar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

function AuthSnackBar() {
  const { snackOpen, snackSeverity, snackMessage, dispatch } = useAuth();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch({ type: "snackbar/close" });
  };

  return (
    <Snackbar open={snackOpen} autoHideDuration={2000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={snackSeverity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {snackMessage}
      </Alert>
    </Snackbar>
  );
}

export default AuthSnackBar;
