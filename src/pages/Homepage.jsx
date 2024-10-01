import { Box, Container, Typography } from "@mui/material";
import PageNav from "../features/page-nav/PageNav";
import SliderHomePage from "../features/slider/SliderHomePage";
import CategoriesGroup from "../features/categories/CategoriesGroup";
import FeaturedProducts from "../features/featured-products/FeaturedProducts";
import ReviewSlider from "../features/slider/ReviewSlider";
import SubScribe from "../features/subscribe/SubScribe";
import Footer from "../features/footer/Footer";
import AuthSnackBar from "../features/snackbars/AuthSnackBar";

function Homepage() {
  return (
    <>
      <PageNav />
      <Container
        sx={{
          maxWidth: {
            xl: "1400px",
            lg: "1200px",
            md: "1000px",
            sm: "800px",
          },
        }}
      >
        <Box sx={{ pt: { xs: 10, md: 14 }, pb: { xs: 10, md: 14 } }}>
          <SliderHomePage />
        </Box>

        <Box
          sx={{
            textAlign: "center",
            pb: 8,
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "#484848", fontSize: 46, mb: 1.8 }}
          >
            New Arrivals
          </Typography>
          <Typography sx={{ color: "#8A8A8A" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
            ullam <br /> voluptatum suscipit fuga consequuntur perferendis.
          </Typography>
        </Box>

        <Box sx={{ pb: 10 }}>
          <CategoriesGroup />
        </Box>

        <FeaturedProducts />
        <Box sx={{ pb: 10 }}>
          <Box
            sx={{
              textAlign: "center",
              pb: 8,
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: 500, color: "#484848", fontSize: 40, mb: 1.8 }}
            >
              This is What Our Customers say
            </Typography>
            <Typography sx={{ color: "#8A8A8A" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae
              ullam <br /> voluptatum suscipit fuga consequuntur perferendis.
            </Typography>
          </Box>
          <ReviewSlider />
        </Box>
        <SubScribe />
      </Container>
      <Footer />
      <AuthSnackBar />
    </>
  );
}

export default Homepage;
