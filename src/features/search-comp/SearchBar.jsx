// import { Box } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputBase } from "@mui/material";

import { useProducts } from "../../contexts/ProductsContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function SearchBar() {
  const { dispatch } = useProducts();
  const [text, setText] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "search/searchQuery", payload: text });
    navigate("/search");
    setText("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Search>
          <IconButton type="submit">
            <SearchIconWrapper sx={{ cursor: "pointer" }}>
              <SearchIcon
                sx={{
                  fontSize: {
                    xs: "1.25rem",
                    sm: "1.3rem",
                    md: "1.5rem",
                    lg: "1.6rem",
                  },
                }}
              />
            </SearchIconWrapper>
          </IconButton>
          <StyledInputBase
            placeholder="Looking for a product!"
            inputProps={{ "aria-label": "search" }}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Search>
      </form>
    </>
  );
}

export default SearchBar;
