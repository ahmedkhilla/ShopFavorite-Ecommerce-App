import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CartTotal from "./CartTotal";

function CartSideBar() {
  return (
    <Box
      sx={{
        background: "#fff",
        minHeight: "100vh",
        padding: "24px 16px",
        borderRadius: 4,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: 700, fontSize: 20, mb: 3 }}
        >
          Calculated Shipping
        </Typography>

        <FormControl fullWidth disabled>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              fontSize: 15,
              top: -2,
            }}
          >
            Country
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Country"
            value=""
            sx={{
              backgroundColor: "#E8ECEF",
              borderRadius: 8,
              padding: 0,
              height: 47,
            }}
          >
            <MenuItem value="palestine">Palestine</MenuItem>
            <MenuItem value="spain">Spain</MenuItem>
            <MenuItem value="belgium">Belgium</MenuItem>
          </Select>
        </FormControl>

        <Box
          sx={{
            display: "flex",
            alignitems: "center",
            mt: 2,
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <FormControl sx={{ flexBasis: "48%" }} disabled>
            <InputLabel
              id="demo-simple-select-label"
              sx={{ fontSize: 15, top: -2 }}
            >
              State/City
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="State/City"
              value=""
              sx={{
                backgroundColor: "#E8ECEF",
                borderRadius: 8,
                padding: 0,
                height: 47,
              }}
            >
              <MenuItem value="gaza">Gaza</MenuItem>
              <MenuItem value="rafah">Rafah</MenuItem>
            </Select>
          </FormControl>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{ flexBasis: "48%" }}
          >
            <TextField
              id="outlined-basic"
              label="Zip/Code"
              variant="outlined"
              sx={{
                "& .MuiInputLabel-root": {
                  top: -4,
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 14px",
                },
                "& .MuiOutlinedInput-root": {
                  borderRadius: 8,
                },
              }}
            />
          </Box>
        </Box>

        <Button
          variant="contained"
          sx={{
            textTransform: "unset",
            width: "100%",
            height: 47,
            borderRadius: 8,
            background: "#10B981",
            "&:hover": {
              background: "#fff",
              color: "#10B981",
            },
          }}
        >
          Update
        </Button>
      </Box>
      <Divider sx={{ background: "#e7e7e7" }} />
      <Box sx={{ mt: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ fontWeight: 700, fontSize: 20, mb: 2 }}
        >
          Coupon Code
        </Typography>
        <Typography
          sx={{ fontSize: 14, color: "#888", lineHeight: 1.2, mb: 2 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
          praesentium quisquam facere labore adipisci consequuntur ipsa.
        </Typography>
        <Box component="form" noValidate autoComplete="off" sx={{ mb: 2 }}>
          <TextField
            id="outlined-basic"
            label="Coupon Code"
            variant="outlined"
            fullWidth
            sx={{
              "& .MuiInputLabel-root": {
                top: -4,
              },
              "& .MuiOutlinedInput-input": {
                padding: "12px 14px",
              },
              "& .MuiOutlinedInput-root": {
                borderRadius: 8,
              },
            }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "unset",
            width: "100%",
            height: 47,
            borderRadius: 8,
            mb: 3,
            background: "#10B981",
            "&:hover": {
              background: "#fff",
              color: "#10B981",
            },
          }}
        >
          Apply
        </Button>
        <CartTotal />
      </Box>
    </Box>
  );
}

export default CartSideBar;
