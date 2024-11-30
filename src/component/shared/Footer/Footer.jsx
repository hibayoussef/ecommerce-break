import React from "react";
// start in MUI
import { Box, Typography, Grid, Link, Container } from "@mui/material";
// start in css
import useStyles from "./Footer.styles";
// import img
import BgFooter from "../../../assets/images/Footer-1.png";
import BgFooter2 from "../../../assets/images/Footer-2.png";

function Footer() {
  const styles = useStyles(BgFooter, BgFooter2);

  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          {/* Logo and Description */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={styles.logo}>
              SOOKLER
            </Typography>
            <Typography sx={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing.
            </Typography>
          </Grid>

          {/* General Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={styles.columnHeader}>
              General
            </Typography>
            <Link href="#" sx={styles.link}>
              Categories
            </Link>
            <Link href="#" sx={styles.link}>
              About Us
            </Link>
            <Link href="#" sx={styles.link}>
              My Account
            </Link>
            <Link href="#" sx={styles.link}>
              Terms & Conditions
            </Link>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={styles.columnHeader}>
              Location
            </Typography>
            <Typography sx={styles.text}>191 Street</Typography>
            <Typography sx={styles.text}>
              Abu-Rummaneh, Damascus, Syria
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={styles.columnHeader}>
              Contact With Us
            </Typography>
            <Typography sx={styles.text}>Mobile: +963 963 123 432</Typography>
            <Typography sx={styles.text}>Email: shamel@shamel.sy</Typography>
          </Grid>
        </Grid>

        <Typography sx={styles.copyRight}>
          Copy Right Shamel 2023©, All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
