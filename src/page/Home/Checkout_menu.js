import React, { useState } from "react";
import { Container, Grid, Typography, Button, Box,Tabs,Tab} from "@mui/material";
import PropTypes from "prop-types";
import Amazing_service from "./Amazing_service";
import styled from "styled-components";
import Page from "../../componets/Page";
import Starters_page from "./Starters_page";
import Main_food from "./Main_food";

const Imagebox = styled("div")({
  backgroundImage: "url('images/mixer.jpg')",
  backgroundRepeat: "no-repeat",
  backgroundSize: "center",
  height: "100vh",
  width: "100vh",
});
const Tabbutton= styled('div')({
  backgroundColor:"rgb(237 242 247)",
  padding:'10px',
  borderRadius:'0.25rem',
  "& .css-1aquho2-MuiTabs-indicator":{
    background:'none!important',
  },
  "& .css-7fx7g9-MuiButtonBase-root-MuiButton-root-MuiButtonBase-root-MuiTab-root.Mui-selected":{
    background:"rgb(100 21 255)",
    borderRadius:'0.25rem',
    boxShadow:'none',
    color:'rgb(247 250 252)',
    padding:'0px',
    fontWeight:500,
    textTransform:'none',
  },
  "& .css-7fx7g9-MuiButtonBase-root-MuiButton-root-MuiButtonBase-root-MuiTab-root":{
    textTransform:'none!important',
    fontSize:'18px'
  },
  "& .css-heg063-MuiTabs-flexContainer":{
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  "& MuiBox-root":{
    padding:'0px !important',
  }
})

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Checkout_menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={7} md={6} sm={12} xs={12}>
              <Box>
                <Typography variant="h1">
                  Checkout our
                  <span
                    style={{
                      background: "rgb(100 21 255)",
                      padding: "0px 1rem",
                      color: "rgb(247 250 252)",
                      transform: "skewX( 15deg)",
                      marginLeft:'10px'
                    }}
                  >
                    menu.
                  </span>
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <Tabbutton align="right">
              <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            align="center"
            
          >
            <Tab label="Starters" {...a11yProps(0)} component={Button} />
            <Tab label="Main" {...a11yProps(1)} component={Button}/>
            <Tab label="Soup" {...a11yProps(2)} component={Button}/>
            <Tab label="Desserts" {...a11yProps(3)} component={Button}/>
          </Tabs>
              </Tabbutton>
            </Grid>
          </Grid>
          <Box style={{padding:'50px 0px'}}>
          <TabPanel value={value} index={0} style={{padding:'0px'}}>
          <Starters_page/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Main_food/>
        </TabPanel>
          </Box>
         </Container>

        
      </Box>
      <Box>
        <Amazing_service />
      </Box>
    </>
  );
}
export default Checkout_menu;
