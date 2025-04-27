import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import GavelIcon from "@mui/icons-material/Gavel";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
         <AppBar sx={{ backgroundColor: "#444658", color: "white", position: "static" }}>
        <Toolbar>
          <img src="src/Assets/logo.png" alt="logo" style={{ width: "80px", height: "50px" }} />
          <Typography
            className="Logoname"
            sx={{ fontSize: "20px", fontWeight: "bolder" ,flexGrow:1,marginLeft:'-2rem'}}
          >
            API Mashup Composer
          </Typography>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" ,lg:'none'} }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <ul style={{ display: "flex" }}>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "white",
                    display: "flex",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "lightgray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  <HomeIcon sx={{ margin: "0 5px", fontSize: "19px" }} />
                  Home
                </li>
              </Link>
              <Link to="/contact" style={{ textDecoration: "none", marginLeft: "1rem" }}>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "white",
                    display: "flex",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "lightgray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  <ContactPageIcon sx={{ margin: "0 5px", fontSize: "18px" }} />
                  Contact
                </li>
              </Link>
              <Link to="/about" style={{ textDecoration: "none", marginLeft: "1rem" }}>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "white",
                    display: "flex",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "lightgray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  <InfoIcon sx={{ margin: "0 5px", fontSize: "18px" }} />
                  About Us
                </li>
              </Link>
              <Link to="/termsofservices" style={{ textDecoration: "none", marginLeft: "1rem" }}>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "white",
                    display: "flex",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "lightgray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  <GavelIcon sx={{ margin: "0 5px", fontSize: "18px" }} />
                  Terms of Services
                </li>
              </Link>
              <Link to="/privacypolicy" style={{ textDecoration: "none", marginLeft: "1rem" }}>
                <li
                  style={{
                    textDecoration: "none",
                    listStyle: "none",
                    color: "white",
                    display: "flex",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "lightgray")}
                  onMouseOut={(e) => (e.target.style.color = "white")}
                >
                  <PrivacyTipIcon sx={{ margin: "0 5px", fontSize: "18px" }} />
                  Privacy Policy
                </li>
              </Link>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>

      
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <ContactPageIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItem>
            </Link>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItem>
            </Link>
            <Link to="/termsofservices" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <GavelIcon />
                </ListItemIcon>
                <ListItemText primary="Terms of Services" />
              </ListItem>
            </Link>
            <Link to="/privacypolicy" style={{ textDecoration: "none", color: "black" }}>
              <ListItem button>
                <ListItemIcon>
                  <PrivacyTipIcon />
                </ListItemIcon>
                <ListItemText primary="Privacy Policy" />
              </ListItem>
            </Link>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};
