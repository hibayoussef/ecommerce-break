import React from "react";
import { Box, Typography, Button } from "@mui/material";
import BgHero from "../../../../assets/images/hero.jpg";
import useStyles from "./Hero.styles";

function Hero() {
  const styles = useStyles(BgHero);

  return (
    <Box sx={styles.heroContainer}>
      <Typography variant="h2" sx={styles.heroTitle}>
        Welcome to Your Adventure
      </Typography>
      <Typography variant="h5" sx={styles.heroSubtitle}>
        Discover the beauty of the world with us.
      </Typography>
      <Button variant="contained" sx={styles.heroButton}>
        Get Started
      </Button>
    </Box>
  );
}

export default Hero;
