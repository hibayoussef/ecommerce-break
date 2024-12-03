import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import navbarStyles from "./Navbar.styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const renderLinks = () => (
    <Box sx={navbarStyles.links}>
      <Typography variant="body1">Home</Typography>
      <Typography variant="body1">Categories</Typography>
      <Typography variant="body1">My Orders</Typography>
      <Typography variant="body1">Contact Us</Typography>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={navbarStyles.appBar}>
        <Toolbar sx={navbarStyles.toolbar}>
          {/* Logo */}
          <Box sx={navbarStyles.logo}>
            <Typography
              variant="h6"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <span
                role="img"
                aria-label="basket"
                style={{ marginRight: "8px" }}
              >
                Logo
              </span>
            </Typography>
          </Box>

          {/* Navigation Links or Hamburger Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {["Home", "Categories", "My Orders", "Contact Us"].map(
                      (text, index) => (
                        <ListItem button key={text}>
                          <ListItemText primary={text} />
                        </ListItem>
                      )
                    )}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            renderLinks()
          )}

          {/* Icons */}
          <Box sx={navbarStyles.iconContainer}>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
