import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SubscribeImg from "../../assets/Subscribe.png";
import EmailIcon from "@mui/icons-material/Email";

function SubScribe() {
  return (
    <Box sx={{ mb: 1 }}>
      <Box
        sx={{
          width: "100%",
          height: "312px",
          backgroundImage: `url(${SubscribeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: 4,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box width="400px" sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 700, pt: 8, pb: 4 }}
          >
            Subscribe for More Info <br /> And Update From ShopeFavorite
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              height: "50px",
              maxWidth: 600,
              borderRadius: 12,
              border: "1px solid #ccc",
              overflow: "hidden",
              // p: 1,
            }}
          >
            <InputAdornment position="start">
              <IconButton sx={{ pl: 2 }}>
                <EmailIcon sx={{ color: "#3B82F6" }} />
              </IconButton>
            </InputAdornment>
            <TextField
              type="email"
              placeholder="Email"
              variant="outlined"
              sx={{
                flex: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: 0,
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                borderRadius: 12,
                // ml: 1,
                mr: 0.5,
                height: "40px",
                backgroundColor: "#10B981",
                "&:hover": {
                  backgroundColor: "#10B981",
                },
              }}
            >
              Subscribe Now
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SubScribe;
