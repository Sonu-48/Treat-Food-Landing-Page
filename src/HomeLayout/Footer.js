import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  styled,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Wrapper = styled("div")({
  background: "rgb(237 242 247)",
  padding: "5rem 2rem",
  "& a": {
    textDecoration: "none",
    color: "inherit",
    fontSize: "0.875rem",
    fontWeight: 500,
    color: "rgb(113 128 150)",
  },
  "& a:hover": {
    borderBottom: "2px solid rgb(113 128 150) ",
  },
  "& .linkbox": {
    padding: "8px 0px",
  },
});
const Logobox = styled("div")({
  display: "flex",
  alignItems: "center",
  fontWeight: 700,
  fontSize: "1.5rem",
  textDecoration: "none",
  color: "black",
  "@media screen and (max-width:600px)":{
    justifyContent:'center',
  }
});
const Iconbox = styled("div")({
  textAlign: "right",
  "@media screen and (max-width:600px)":{
    textAlign:'center',
  },

  "& a:hover": {
    background: "rgb(26 32 44)",
  },
  "& a": {
    background: "rgb(26 32 44)",
    padding: "8px 10px",
    marginLeft: "10px",
    borderRadius: "50%",

    textDecoration: "none",
    borderBottom: "0px solid transparent!important",
  },
  "& svg": {
    color: "#fff",
  },
});

function Footer() {
  return (
    <Wrapper>
      <Container>
        <Box
          style={{
            borderBottom: "1px solid rgb(113 128 150)",
            paddingBottom: "40px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Typography variant="h4">MAIN</Typography>
              <Box pt={2}>
                <Box className="linkbox">
                  <Link to="/blog">Blog</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">FAQs</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Support</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">About Us</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Typography variant="h4">PROJECT</Typography>
              <Box pt={2}>
                <Box className="linkbox">
                  <Link to="/">Loin In</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Personal</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Business</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Team</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Typography variant="h4">PRESS</Typography>
              <Box pt={2}>
                <Box className="linkbox">
                  <Link to="/">Logos</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Events</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Stories</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Office</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Typography variant="h4">LEGAL</Typography>
              <Box pt={2}>
                <Box className="linkbox">
                  <Link to="/">GDPR</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Privacy Policy</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Terms of Service</Link>
                </Box>
                <Box className="linkbox">
                  <Link to="/">Disclaimer</Link>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Typography variant="h4">SUBSCRIBE TO OUR NEWSLETTER</Typography>
              <Box pt={3}>
                <Typography variant="body2">
                  We deliver high quality blog posts written by professionals
                  weekly. And we promise no spam.
                </Typography>
              </Box>
              <Grid container pt={3}>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <TextField
                    variant="outlined"
                    placeholder="Your Email Address"
                    size="small"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item lg={5} md={5} sm={5} xs={12}>
                  <Button variant="contained" color="primary">
                    Subsribe
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ padding: "40px 0px 0px 0px" }}>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Logobox>
                <img
                  src="/images/logo.svg"
                  alt="Logo"
                  width="40px"
                  style={{ marginRight: "10px" }}
                />
                Treact
              </Logobox>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600,textAlign:'center' }}>
                © 2018 Treact Inc. All Rights Reserved.
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Iconbox>
                <Link href="/">
                  <FaFacebookF />
                </Link>
                <Link href="/">
                  <FaTwitter />
                </Link>
                <Link href="/">
                  <FaYoutube />
                </Link>
              </Iconbox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrapper>
  );
}
export default Footer;
