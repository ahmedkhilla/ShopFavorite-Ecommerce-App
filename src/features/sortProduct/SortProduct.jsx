import styles from "./SortProduct.module.css";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useProducts } from "../../contexts/ProductsContext";
import {
  sortPricehighToLow,
  sortPriceLowToHigh,
  sortRatingHighToLow,
  sortRatingLowToHigh,
  sortStockHighToLow,
  sortStockLowToHigh,
  sortMonthShipping,
  sortWeeksShipping,
  sortLessThanWeekShipping,
} from "./sortFunctions";
function SortProduct() {
  const {
    products,
    priceFilter,
    shippingFilter,
    ratingFilter,
    stockFilter,
    dispatch,
  } = useProducts();

  function handleSort(e, value1, type, value2, fun1, fun2) {
    if (e.target.value === value1) {
      dispatch({
        type: `sortedProducts/${type}`,
        payload: e.target.value,
      });
      dispatch({
        type: "sortedProducts/update",
        payload: fun1,
      });
    }
    if (e.target.value === value2) {
      dispatch({
        type: `sortedProducts/${type}`,
        payload: e.target.value,
      });
      dispatch({
        type: "sortedProducts/update",
        payload: fun2,
      });
    }
  }

  function handleSortShipping(e) {
    if (e.target.value === "lessThanWeek") {
      dispatch({
        type: "sortedProducts/shipping",
        payload: e.target.value,
      });
      dispatch({
        type: "sortedProducts/update",
        payload: sortLessThanWeekShipping(products),
      });
    }
    if (e.target.value === "lessThanMonth") {
      dispatch({
        type: "sortedProducts/shipping",
        payload: e.target.value,
      });
      dispatch({
        type: "sortedProducts/update",
        payload: sortWeeksShipping(products),
      });
    }
    if (e.target.value === "moreThanMonth") {
      dispatch({
        type: "sortedProducts/shipping",
        payload: e.target.value,
      });
      dispatch({
        type: "sortedProducts/update",
        payload: sortMonthShipping(products),
      });
    }
  }

  return (
    <div className={styles.sort}>
      <Box
        sx={{
          minWidth: 90,
        }}
      >
        <FormControl
          fullWidth
          sx={{
            "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
              {
                borderRadius: "30px",
              },
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontWeight: 700, pl: 0.5 }}
          >
            Price
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priceFilter}
            label="Price"
            onChange={(e) =>
              handleSort(
                e,
                "lthPrice",
                "price",
                "htlPrice",
                sortPriceLowToHigh(products),
                sortPricehighToLow(products)
              )
            }
          >
            <MenuItem value="lthPrice">low to high</MenuItem>
            <MenuItem value="htlPrice">high to low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 100 }}>
        <FormControl
          fullWidth
          sx={{
            "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
              {
                borderRadius: "30px",
              },
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontWeight: 700, pl: 0.5 }}
          >
            Rating
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={ratingFilter}
            label="Rating"
            onChange={(e) =>
              handleSort(
                e,
                "lthRate",
                "rating",
                "htlRate",
                sortRatingLowToHigh(products),
                sortRatingHighToLow(products)
              )
            }
          >
            <MenuItem value="lthRate">low to high</MenuItem>
            <MenuItem value="htlRate">high to low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 112 }}>
        <FormControl
          fullWidth
          sx={{
            "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
              {
                borderRadius: "30px",
              },
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontWeight: 700, pl: 0.5 }}
          >
            Shipping
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={shippingFilter}
            label="Shipping"
            onChange={(e) => handleSortShipping(e)}
          >
            <MenuItem value="lessThanWeek">less than a week</MenuItem>
            <MenuItem value="lessThanMonth">less than four weeks</MenuItem>
            <MenuItem value="moreThanMonth">more than a month</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 100 }}>
        <FormControl
          fullWidth
          sx={{
            "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
              {
                borderRadius: "30px",
              },
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{ fontWeight: 700, pl: 0.5 }}
          >
            Stock
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={stockFilter}
            label="Stock"
            onChange={(e) =>
              handleSort(
                e,
                "lthStock",
                "stock",
                "htlStock",
                sortStockLowToHigh(products),
                sortStockHighToLow(products)
              )
            }
          >
            <MenuItem value="lthStock">low stock</MenuItem>
            <MenuItem value="htlStock">high stock</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 80 }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: "30px",
            height: "56px",
            borderColor: "rgba(0, 0, 0, 0.23)",
            color: "#666",
            fontSize: 16,
            fontWeight: 700,
            textTransform: "unset",
            "&: hover": {
              backgroundColor: "#fff",
              borderColor: "#000",
            },
          }}
          onClick={() => dispatch({ type: "sortedProducts/clear" })}
        >
          Clear
        </Button>
      </Box>
    </div>
  );
}

export default SortProduct;
