import { Box, Button, Grid, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FirstHomePage from "../../assets/homePage-1.jpg";
import SecondHomePage from "../../assets/homepage-2.jpg";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
// import ThirdHomePage from "../../assets/homePage-3.jpg";
function SliderHomePage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    swipe: false,
  };

  return (
    <Slider {...settings}>
      <Box sx={{ width: "100%", pt: 7 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 0 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={5} sx={{ mb: 2 }}>
            <Box
              sx={{
                pr: 3,
                maxWidth: { xs: "80%", sm: "100%", md: "430px" },
                m: { xs: "0 auto" },
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#1B1C57",
                  fontSize: { xs: 30, md: 40 },
                  textTransform: "capitalize",
                  mb: 3,
                }}
              >
                Find the products
                <br />
                that{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #1B1C57",
                  }}
                >
                  you need
                </span>
                <br /> easily here
              </Typography>

              <Typography sx={{ color: "#626687", mb: 6 }}>
                Everything you need about finding your product, where it will be
                easier for you
              </Typography>
              {isAuthenticated ? (
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#10B981",
                    width: "200px",
                    borderRadius: 4,
                  }}
                  onClick={() => navigate("/products")}
                >
                  Our Products
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "capitalize",
                    backgroundColor: "#10B981",
                    width: "200px",
                    borderRadius: 4,
                  }}
                  onClick={() => navigate("/register")}
                >
                  Login
                </Button>
              )}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "75%",
                  height: { sm: "50vh", md: "65vh" },
                  borderRadius: "12px",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                  src={FirstHomePage}
                  alt="main page slider 1"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", pt: 7 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 0 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={5} sx={{ mb: 2 }}>
            <Box
              sx={{
                pr: 3,
                maxWidth: { xs: "80%", sm: "100%", md: "430px" },
                m: { xs: "0 auto" },
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#1B1C57",
                  fontSize: 40,
                  textTransform: "capitalize",
                  lineHeight: 1.3,
                  mb: 3,
                }}
              >
                Unleash{" "}
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #1B1C57",
                  }}
                >
                  {" "}
                  the power
                </span>{" "}
                <br />
                of Smart Shopping
              </Typography>

              <Typography sx={{ color: "#626687", mb: 6 }}>
                Everything you need about finding your product, where it will be
                easier for you
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#10B981",
                  width: "200px",
                  borderRadius: 4,
                }}
              >
                Apply
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "75%",
                  height: { sm: "50vh", md: "65vh" },
                  borderRadius: "12px",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                  src={SecondHomePage}
                  alt="main page slider 1"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: "100%", pt: 7 }}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 0 }}
        >
          <Grid item xs={12} sm={6} md={6} lg={5} sx={{ mb: 2 }}>
            <Box
              sx={{
                pr: 3,
                maxWidth: { xs: "80%", sm: "100%", md: "430px" },
                m: { xs: "0 auto" },
              }}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: "#1B1C57",
                  fontSize: 40,
                  textTransform: "capitalize",
                  mb: 3,
                }}
              >
                Join Us and Discover
                <br />
                <span
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #1B1C57",
                  }}
                >
                  {" "}
                  a World of{" "}
                </span>
                <br />
                Opportunities
              </Typography>

              <Typography sx={{ color: "#626687", mb: 6 }}>
                Become a part of our community and enjoy exclusive benefits.
                Stay ahead with the latest trends and offers.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#10B981",
                  width: "200px",
                  borderRadius: 4,
                }}
              >
                Join Us
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  width: "75%",
                  height: { sm: "50vh", md: "65vh" },
                  borderRadius: "12px",
                  margin: "0 auto",
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                  }}
                  src={FirstHomePage}
                  alt="main page slider 1"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Slider>
  );
}

export default SliderHomePage;
