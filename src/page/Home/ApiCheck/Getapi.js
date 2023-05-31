import React, { useEffect, useState } from "react";
import { Container, Box, Typography, styled, Grid } from "@mui/material";
import axios from "axios";
import Topbar from "../../../HomeLayout/Topbar";
import Footer from "../../../HomeLayout/Footer";
import Postapi from "./Postapi";

const Userbox = styled("div")({
  padding: "10px",
  background: "lightGreen",
  borderRadius: "10px",
});

function Getapi() {
  const [userdata, setUserdata] = useState([]);
  const [loading,setLoading] = useState(false);
  const getapi = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.status === 200) {
        setLoading(false);
        setUserdata(response.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getapi();
  },[]);
  return (
    <>
    <Topbar/>
    <Box style={{padding:'100px 0px'}}>
      <Container>
        <Grid container spacing={2}>
          {userdata.map((data,index) => {
            return (
              <Grid item lg={4} md={6} sm={6} xs={12}>
                <Userbox>
                  <Typography variant="h4">Id:{data.id}</Typography>
                  <Typography variant="h4">Name:{data.name}</Typography>
                  <Typography variant="h4">
                    User Name:{data.username}
                  </Typography>
                  <Typography variant="h4" color="tomato">
                    Address:
                  </Typography>
                  <Typography variant="h4">
                    Street:{data.address.street}
                  </Typography>
                  <Typography variant="h4">
                    Suite:{data.address.suite}
                  </Typography>
                  <Typography variant="h4">City:{data.address.city}</Typography>
                  <Typography variant="h4">
                    Zipcode:{data.address.zipcode}
                  </Typography>
                </Userbox>
              </Grid>
            );
          })}
        </Grid>
        <Box>
            {loading ? <>
                <Typography variant="h1">Plase Wait...</Typography>
            </>:<></>}
        </Box>
      </Container>
      
    </Box>
    <Box>
    <Postapi/>
    </Box>
    <Footer/>
    </>
  );
}
export default Getapi;
