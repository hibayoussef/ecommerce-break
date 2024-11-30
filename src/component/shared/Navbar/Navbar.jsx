import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import navbarStyles from "./Navbar.styles";

const Navbar = () => {
  return (
    <AppBar position="static" sx={navbarStyles.appBar}>
      <Toolbar sx={navbarStyles.toolbar}>
        {/* Logo */}
        <Box sx={navbarStyles.logo}>
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <span role="img" aria-label="basket" style={{ marginRight: "8px" }}>
              Logo
            </span>
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={navbarStyles.links}>
          <Typography variant="body1">Home</Typography>
          <Typography variant="body1">Categories</Typography>
          <Typography variant="body1">My Orders</Typography>
          <Typography variant="body1">Contact Us</Typography>
        </Box>

        {/* Icons */}
        <Box sx={navbarStyles.iconContainer}>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
