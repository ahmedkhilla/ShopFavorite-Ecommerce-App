import styles from "./CategoriesSelect.module.css";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useProducts } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ClassIcon from "@mui/icons-material/Class";
import { useState } from "react";

function CategoriesSelect() {
  const { categories, dispatch } = useProducts();
  const names = categories.map((cat) => cat.name);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          {isOpen ? <ExpandMoreIcon /> : <KeyboardArrowRightIcon />}
        </ListItemButton>
      </ListItem>
      <ul className={`${styles.list} ${isOpen ? styles.open : ""}`}>
        {names.map((name) => (
          <li
            className={styles.listItem}
            key={name}
            onClick={(e) => {
              navigate(`/category/${name.toLowerCase()}`);
              dispatch({ type: "drawer/toggle", payload: false });
            }}
          >
            <CategoryIcon
              fontSize="small"
              sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            />
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CategoriesSelect;
