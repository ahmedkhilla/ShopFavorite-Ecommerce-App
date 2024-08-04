import { Button, Grid } from "@mui/material";
import { useProducts } from "../../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

function CategoriesGroup() {
  const { categories } = useProducts();

  const navigate = useNavigate();
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
    >
      {categories.slice(0, 6).map((item, i) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={item.name}>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              height: "50px",
              color: `${i === 2 ? "#ffffff" : "#8A8A8A"}`,
              backgroundColor: `${i === 2 ? "#10B981" : "#E0E3EB"}`,
              textTransform: "capitalize",
              "&:hover": {
                color: `${i === 2 ? "#ffffff" : "#8A8A8A"}`,
                backgroundColor: `${i === 2 ? "#10B981" : "#E0E3EB"}`,
              },
            }}
            onClick={() => navigate(`/category/${item.slug}`)}
          >
            {item.name}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoriesGroup;
