import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";

const testimonials = [
  {
    name: "Ahmed Khilla",
    image: "path/to/image1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dicta, repellat est veniam tempore. Dicta sapiente eum quibusdam repellat? Quasi, repellat assumenda illum voluptates omnis hic sapiente minus praesentium!",
  },
  {
    name: "Ahmed Khilla",
    image: "path/to/image1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dicta, repellat est veniam tempore. Dicta sapiente eum quibusdam repellat? Quasi, repellat assumenda illum voluptates omnis hic sapiente minus praesentium!",
  },
  {
    name: "Ahmed Khilla",
    image: "path/to/image1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dicta, repellat est veniam tempore. Dicta sapiente eum quibusdam repellat? Quasi, repellat assumenda illum voluptates omnis hic sapiente minus praesentium!",
  },
  {
    name: "Ahmed Khilla",
    image: "path/to/image1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dicta, repellat est veniam tempore. Dicta sapiente eum quibusdam repellat? Quasi, repellat assumenda illum voluptates omnis hic sapiente minus praesentium!",
  },
  {
    name: "Ahmed Khilla",
    image: "path/to/image1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dolore dicta, repellat est veniam tempore. Dicta sapiente eum quibusdam repellat? Quasi, repellat assumenda illum voluptates omnis hic sapiente minus praesentium!",
  },
];

function ReviewSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4, // Change to 5 if needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
  };
  return (
    <Slider {...settings} style={{ width: "100%" }}>
      {testimonials.map((testimonial, index) => (
        <Box key={index} sx={{ padding: 2 }}>
          <Card sx={{ maxWidth: 345, margin: "auto" }}>
            <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
              <Avatar src={testimonial.image} sx={{ textAlign: "center" }} />
            </Box>
            <CardContent sx={{ textAlign: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 1 }}>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" align="center">
                {testimonial.text}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Slider>
  );
}

export default ReviewSlider;
