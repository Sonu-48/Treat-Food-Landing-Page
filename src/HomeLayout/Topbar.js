import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";

const Logobox = styled("div")({
  "& a": {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    fontSize: "1.5rem",
    textDecoration: "none",
    color: "black",
  },
  "& a:hover": {
    color: "rgb(100 21 255)",
  },
 
});
const Linkbox = styled("div")({
  marginLeft: "100px",
  "& a": {
    textDecoration: "none",
    fontSize: "0.90rem",
    fontWeight: 600,
    color: "black",
  },
  "& a:hover": {
    color: "rgb(100 21 255)",
  },
  "& .active":{
    color:'rgb(100 21 255)',
    borderBottom:"3px solid rgb(100 21 255)"
  },
});


function Topbar() {
  const drawerWidth = 240;
  const [open,setOpen] = useState(false);
  
  return (
    <Box>
      <Container>
        <AppBar
          style={{
            background: "transparent",
            position: "relative",
            boxShadow: "none",
            padding: "15px 0px",
          }}
        >
          <Container>
          <Toolbar style={{ justifyContent: "space-between",paddingLeft:'0px',paddingRight:'0px'}}>
            <Logobox>
              <NavLink to="/">
                <img
                  src="/images/logo.svg"
                  alt="Logo"
                  width="40px"
                  style={{ marginRight: "10px" }}
                />
                Treact
              </NavLink>
            </Logobox>
            {/* FiMenu Button */}
            <IconButton  sx={{display:{md:'block',lg:'none',width:'50px',height:'50px'}}} onClick={()=>setOpen(true)}>
              <FiMenu/>
            </IconButton>
            <Box sx={{display:{lg:'block',md:'none',sm:'none',xs:'none'}}}>
            <Linkbox >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
               <Box  style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }} mr={5}>
               {/* <Box>
                  <Link to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >About</Link>
                </Box> */}
                <Box>
                  <NavLink to="/" activeClassName="active">About</NavLink>
                </Box>
                <Box ml={4}>
                  <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                </Box>
                <Box ml={4}>
                  <NavLink to="/pricing" activeClassName="active">Pricing</NavLink>
                </Box>
                <Box ml={4}>
                  <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
                </Box>
               </Box>
                <Box>
                  <Button variant="outlined" color="secondary">
                    Login
                  </Button>

                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Box>
              </Box>
            </Linkbox>
            </Box>
          </Toolbar>
          </Container>
        </AppBar>
        {/* Drawer */}
        <Box>
        <Drawer
        //   container={container}
        sx={{
          display:{lg:'none',md:'none',sm:'block',xs:'block'},
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background:'rgb(237, 242, 247)',
          },
        }}
        variant="temporary"
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
          <Typography variant="body2">Hello Sonu</Typography>
          <List>
            <ListItem>
              <ListItemButton>
                <NavLink to="/">
                  About
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem>
              <ListItemButton>
                <NavLink to="/blog">
                  Blog
                </NavLink>
              </ListItemButton>
            </ListItem>
          </List>
       

        </Drawer>
        </Box>
      </Container>
    </Box>
  );
}
export default Topbar;
