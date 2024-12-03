import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// start in style css
import aboutUsStyles from "./AboutUs.styles";
// import images
import ImgAbout from "../../../../assets/images/about.jpeg";

const AboutUs = () => {
  return (
    <Box sx={aboutUsStyles.container}>
      {/* Image */}
      <Box sx={aboutUsStyles.imageContainer}>
        <img src={ImgAbout} alt="About Us" style={aboutUsStyles.image} />
      </Box>

      {/* Text Content */}
      <Box sx={aboutUsStyles.content}>
        <Typography variant="h4" sx={aboutUsStyles.title}>
          About Us
        </Typography>
        <Typography variant="body1" sx={aboutUsStyles.subtitle}>
          At [Your Company], we are passionate about providing the best products
          for our customers. Our mission is to deliver excellence with every
          step of your shopping journey.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUs;
