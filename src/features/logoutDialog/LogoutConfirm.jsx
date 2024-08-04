import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function LogoutConfirm() {
  const { logoutDialog, logoutDialogClose, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Dialog
        open={logoutDialog}
        onClose={logoutDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ textAlign: "center", color: "rgba(0,0,0,80%)", pb: 1 }}
          id="alert-dialog-title"
        >
          <div>
            <IconButton
              sx={{
                backgroundColor: "#fff1f1",
                padding: "16px",
                "&:hover": {
                  backgroundColor: "#fff1f1",
                },
              }}
            >
              <LogoutIcon sx={{ fontSize: 50, color: "#EE636D" }} />
            </IconButton>
          </div>
          <Typography variant="h6" sx={{ fontSize: "22px", mt: 3.5 }}>
            Logout
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ width: "400px", textAlign: "center" }}>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>

        <DialogActions sx={{ margin: "0 auto 16px auto" }}>
          <Button
            variant="contained"
            onClick={() => {
              logout();
              navigate("/");
              logoutDialogClose();
            }}
            sx={{
              backgroundColor: "#EE636D",
              width: "140px",
              textTransform: "unset",
              pt: 1.2,
              pb: 1.2,
              "&:hover": {
                backgroundColor: "#EE636D",
              },
            }}
          >
            Yes, logout
          </Button>
          <Button
            sx={{
              backgroundColor: "#EBEBED",
              color: "#444",
              width: "140px",
              textTransform: "capitalize",
              pt: 1.2,
              pb: 1.2,
              "&:hover": {
                backgroundColor: "#EBEBED",
              },
            }}
            variant="contained"
            onClick={logoutDialogClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LogoutConfirm;
