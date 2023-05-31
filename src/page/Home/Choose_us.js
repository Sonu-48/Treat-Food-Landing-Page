import React from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
import Customer_love_us from "./Customer_love_us";

const Choosebox = styled("div")({
  paddingRight: "40px",
  "@media only screen and (max-width:600px)":{
    paddingRight:'0px',
  },
  "& h1": {
    padding: "10px 0px",
  },
  "& p": {
    padding: "10px 0px",
  },
});
const Orderbox = styled("div")({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "15px 0px",
  "@media only screen and (max-width:600px)":{
    justifyContent:'center',
  }
});
const Imagebox = styled("div")({
  "& img": {
    borderRadius: "2.5rem",
  },
});

function Choose_us() {
  return (
    <>
    <Box pt={6} pb={3}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Choosebox>
              <Typography variant="body2" style={{ color: "rgb(100 21 255)" }}>
                A Reputed Brand
              </Typography>
              <Typography variant="h1">
                Why
                <span
                  style={{
                    background: "rgb(100 21 255)",
                    padding: "0px 1rem",
                    color: "rgb(247 250 252)",
                    transform: "skewX( 15deg)",
                    marginLeft: "7px",
                  }}
                >
                  Choose Us ?
                </span>
              </Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Orderbox>
                <Box pb={3}>
                  <Typography variant="h6" align="left">
                    94000+
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "rgb(80 17 204)", padding: "0px" }}
                  >
                    Orders
                  </Typography>
                </Box>
                <Box pb={3} ml={5}>
                  <Typography variant="h6" align="left">
                    11000+
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "rgb(80 17 204)", padding: "0px" }}
                  >
                    Customers
                  </Typography>
                </Box>
                <Box pb={3} ml={5}>
                  <Typography variant="h6" align="left">
                    1500+
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "rgb(80 17 204)", padding: "0px" }}
                  >
                    Chefs
                  </Typography>
                </Box>
              </Orderbox>

              <Button variant="contained" color="primary">
                Order Now
              </Button>
            </Choosebox>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Imagebox>
              <img
                src="/images/food-image3.avif"
                alt="foot image"
                width="100%"
              />
            </Imagebox>
          </Grid>
        </Grid>
      </Container>
    </Box>
    <Box>
        <Customer_love_us/>
    </Box>
    </>
  );
}
export default Choose_us;
