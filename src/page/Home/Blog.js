import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Page from "../../componets/Page";
import styled from "styled-components";
import Topbar from "../../HomeLayout/Topbar";
import Footer from "../../HomeLayout/Footer";
import axios from "axios";
import {  toast } from "react-toastify";

const Comingsoon = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});
const Userbox = styled("div")({
  padding: "10px",
  background: "#a832a4",
  borderRadius: "5px",
  height:'90%',
  "&:hover": {
    background: "lightGreen",
  },
  "& h4": {
    color: "#fff",
  },
});

function Blog() {
  const [userdata, setUserdata] = useState([]);

  const Getapi = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (res.status === 200) {
        toast.success("Successfuly");

        setUserdata(res.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    Getapi();
  }, []);
  return (
    <>
      <Topbar />
      <Box pt={10}>
        <Page title="Blog">
          <Comingsoon>
            <Typography variant="h1">Please Wait..</Typography>
            <Typography variant="h1">I am Comming Soon</Typography>
          </Comingsoon>
          <Container>
            <Grid container spacing={2}>
              {userdata.slice(0, 10).map((data) => {
                return (
                  <Grid item lg={3} md={6} sm={6} xs={12}>
                    <Userbox>
                      <Typography variant="h4">
                        User Id: {data.postId}
                      </Typography>
                      <Typography variant="h4"> Id: {data.id}</Typography>
                      <Typography variant="h4"> Name: {data.name}</Typography>
                      <Typography variant="h4"> Email: {data.email}</Typography>
                    </Userbox>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Page>
      </Box>
      <Footer />
    </>
  );
}
export default Blog;
