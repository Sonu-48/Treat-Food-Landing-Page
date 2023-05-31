import React from "react";
import { Grid, Container, Box, Typography, IconButton } from "@mui/material";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Choose_us from "./Choose_us";

const Wrapper = styled("div")({
  padding: "100px 0px",
});

const Imagebox = styled("div")({
  background: "rgb(247 250 252)",
  borderRadius: "100%",
  padding: "0.5rem",
  width: "80px",
  height: "80px",
  "& img": {
    width: "5rem",
    height: "5rem",
  },
});
const Parentbox = styled("div")({
 
  transition: "0.5s",
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
  "& h6": {
    padding: "10px 0px",
  },
  "& a": {
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:'rgb(131 68 255)',
    fontWeight:700,
    fontSize:'0.975rem',
  },
  "& svg": {
    padding: "2px 0px",
    textAlign: "center",
    marginLeft: "7px",
    marginTop: "4px",
  },
});

function Amazing_service() {
  return (
  <>
    <Wrapper>
      <Container maxWidth="md">
        <Box align="center">
          <Typography variant="h1">
            Amazing{" "}
            <span
              style={{
                background: "rgb(100 21 255)",
                padding: "0px 1rem",
                color: "rgb(247 250 252)",
                transform: "skewX( 15deg)",
              }}
            >
              Services
            </span>
          </Typography>
        </Box>
       <Box pt={6}>
       <Grid container spacing={3}>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Parentbox>
              <Box align="center">
                <Imagebox>
                  <img src="/images/location.svg" alt="location" />
                </Imagebox>

                <Typography variant="h6">230+ Locations</Typography>
                <Typography variant="body2">
                  Lorem ipsum donor amet siti ceali placeholder text
                </Typography>
                <Box pt={2}>
                <NavLink to="/">
                  Learn More
                  <BsArrowRight />
                </NavLink>
                </Box>
              </Box>
            </Parentbox>
          </Grid>
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Parentbox>
              <Box align="center">
                <Imagebox>
                  <img src="images/chefs.svg" alt="chefs" />
                </Imagebox>
                <Typography variant="h6">Professional Chefs</Typography>
                <Typography variant="body2">
                  Lorem ipsum donor amet siti ceali placeholder text
                </Typography>
                <Box pt={2}>
                <NavLink to="/">
                  Learn More
                  <BsArrowRight />
                </NavLink>
                </Box>
              </Box>
            </Parentbox>
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Parentbox>
              <Box align="center">
                <Imagebox>
                  <img src="/images/birthday.svg" alt="birthday" />
                </Imagebox>
                <Typography variant="h6">Birthday Catering</Typography>
                <Typography variant="body2">
                  Lorem ipsum donor amet siti ceali placeholder text
                </Typography>
                <Box pt={2}>
                <NavLink to="/">
                  Learn More
                  <BsArrowRight />
                </NavLink>
                </Box>
              </Box>
            </Parentbox>
          </Grid>
        </Grid>
       </Box>
      </Container>
    </Wrapper>
    <Box>
        <Choose_us/>
    </Box>
  </>
  );
}
export default Amazing_service;
