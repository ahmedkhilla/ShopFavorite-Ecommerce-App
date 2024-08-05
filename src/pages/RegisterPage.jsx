import styles from "./RegisterPage.module.css";
import {
  Box,
  Button,
  Divider,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LogoImage from "../assets/logo.png";
import GmailIcon from "../assets/gmail.png";
import AppleIcon from "../assets/apple.png";
import FacebookIcon from "../assets/facebook.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function RegisterPage() {
  const { login, isAuthenticated, error, dispatch } = useAuth();
  const [email, setEmail] = useState("ex@gmail.com");
  const [password, setPassword] = useState("12345678");
  const navigate = useNavigate();
  const [snackbarState, setSnackbarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackbarState;

  const handleClose = () => {
    setSnackbarState({ ...snackbarState, open: false });
    dispatch({ type: "re-error" });
  };

  function handleRegisterSubmit(e) {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    } else {
      dispatch({ type: "error" });
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
    if (error) {
      setSnackbarState((prevState) => ({ ...prevState, open: true }));
    }
  }, [isAuthenticated, error, navigate]);

  return (
    <Box component="section" className={styles.registerSection}>
      <Box className={styles.container}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            borderRadius: 2.5,
            border: "none",
            boxShadow: "2px 2px 2px rgba(0,0,0,25%)",
            "&:hover": {
              boxShadow: "2px 2px 2px rgba(0,0,0,25%)",
              border: "none",
              backgroundColor: "#fff",
            },
          }}
        >
          <img src={LogoImage} alt="Logo Icon" />
        </Button>
        <Typography
          variant="h5"
          component="h2"
          sx={{ mt: 4, fontWeight: 500, fontSize: 32 }}
        >
          Welcome back
        </Typography>
        <Typography sx={{ fontSize: 16, letterSpacing: 0.1, mt: 0.5 }}>
          Please enter your details to sign in
        </Typography>
        <div className={styles.buttonContainer}>
          <Button
            variant="outlined"
            className={styles.logoButton}
            sx={{
              border: "1px solid #eee",
              borderRadius: 3,
              "&:hover": {
                border: "1px solid #eee",
              },
            }}
          >
            <img
              src={GmailIcon}
              alt="gmail Login Icon"
              className={styles.imageIcon}
            />
          </Button>
          <Button
            variant="outlined"
            className={styles.logoButton}
            sx={{
              border: "1px solid #eee",
              borderRadius: 3,
              "&:hover": {
                border: "1px solid #eee",
              },
            }}
          >
            <img
              src={AppleIcon}
              alt="apple Login Icon"
              className={styles.imageIcon}
            />
          </Button>
          <Button
            variant="outlined"
            className={styles.logoButton}
            sx={{
              border: "1px solid #eee",
              borderRadius: 3,
              "&:hover": {
                border: "1px solid #eee",
              },
            }}
          >
            <img
              src={FacebookIcon}
              alt="facebook Login Icon"
              className={styles.imageIcon}
            />
          </Button>
        </div>
        <Divider sx={{ mt: 2.5, mb: 2.5, color: "#888" }}>or</Divider>
        <Box component="form" onSubmit={handleRegisterSubmit}>
          <Typography sx={{ textAlign: "left", mb: 1.5 }}>
            Email address
          </Typography>
          <TextField
            fullWidth
            id="fullWidth"
            type="email"
            sx={{
              borderRadius: 4,
              mb: 2.5,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Typography sx={{ textAlign: "left", mb: 1.5 }}>Password</Typography>
          <TextField
            fullWidth
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            sx={{
              borderRadius: 4,
              mb: 1,
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Typography
            sx={{ cursor: "pointer", fontSize: 14, textAlign: "left" }}
          >
            {" "}
            <Link>Forgot Password? </Link>
          </Typography>

          <Divider sx={{ mt: 3, mb: 3 }}></Divider>
          <Button
            className={styles.loginBtn}
            fullWidth
            variant="contained"
            sx={{
              textTransform: "unset",
              height: 50,
              fontSize: 18,
              borderRadius: 2.5,
            }}
            type="submit"
          >
            Sign in
          </Button>
          <Typography sx={{ mt: 2, fontSize: 15 }}>
            Don't have an account?{" "}
            <Link sx={{ textDecoration: "none" }}>Create account</Link>
          </Typography>
        </Box>
        <>
          {error && (
            <Box sx={{ width: 500 }}>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message="⛔ Wrong or Invalid email address or password. Please correct and try again."
                key={vertical + horizontal}
              />
            </Box>
          )}
        </>
      </Box>
    </Box>
  );
}

export default RegisterPage;
