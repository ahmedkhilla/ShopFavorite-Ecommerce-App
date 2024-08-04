import Logo from "../../assets/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import vector from "../../assets/Vector.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
function Footer() {
  return (
    <Box sx={{ pb: 10, pt: 10 }} position="relative">
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
        <img
          src={vector}
          alt="Vector"
          style={{ maxWidth: 500, position: "absolute", bottom: 0, right: 0 }}
        />
        <Grid container spacing={3}>
          <Grid item lg={5} md={5} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: 2,
              }}
            >
              <img src={Logo} alt="Logo" />
              <Typography
                sx={{
                  fontWeight: 700,
                  alignSelf: "flex-end",
                  color: "#1B1C57",
                }}
              >
                ShopFavorite
              </Typography>
            </Box>
            <Typography sx={{ color: "#626687", fontSize: "14px", mb: 2.5 }}>
              We provide information about properties such <br />
              as houses, villas and apartments to help
              <br /> people find their dream home
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <FacebookOutlinedIcon sx={{ color: "#3C4563" }} />
              <TwitterIcon sx={{ color: "#3C4563" }} />
              <InstagramIcon sx={{ color: "#3C4563" }} />
            </Box>
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={12}>
            <Typography sx={{ fontWeight: 700, color: "#0E1735", mb: 2 }}>
              Get to Know Us
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Careers
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Blog
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              About Us
            </Typography>
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={12}>
            <Typography sx={{ fontWeight: 700, color: "#0E1735", mb: 2 }}>
              Article
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              New Article
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Most Read
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Popular Article
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Tips & Tricks
            </Typography>
          </Grid>
          <Grid item lg={2} md={3} sm={6} xs={12}>
            <Typography sx={{ fontWeight: 700, color: "#0E1735", mb: 2 }}>
              Contact
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              Al-Remal St, Gaza, Palestine
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              (671) 555-0110
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#888B97", mb: 1 }}>
              info@shopfavorite.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
