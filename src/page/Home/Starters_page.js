import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Styled,
  Button,
} from "@mui/material";
import styled from "styled-components";
import zIndex from "@mui/material/styles/zIndex";

const Startersdata = [
  {
    imageUrl: "/images/veg-mixer.jfif",
    heading: "Veg Mixer",
    title: "Tomoto Salad & Carrot",
    price: "$5.99",
  },
  {
    imageUrl: "/images/macroni.avif",
    heading: "Macroni",
    title: "Cheese Piza",
    price: "$2.99",
  },
  {
    imageUrl: "/images/nelli.avif",
    heading: "Nelli",
    title: "Hamburger & Fries",
    price: "$7.99",
  },
  {
    imageUrl: "/images/poppers.avif",
    heading: "Jalapeno Poppers",
    title: "Crispy Soyabeans",
    price: "$8.99",
  },
  {
    imageUrl: "/images/chicken.avif",
    heading: "Cajun Chicken",
    title: "Roasted Chicken & Egg",
    price: "$7.99",
  },
  {
    imageUrl: "/images/cake.avif",
    heading: "Chillie Cake",
    title: "Deepfried Chicken",
    price: "$2.99",
  },
  {
    imageUrl: "/images/mex.avif",
    heading: "Guacamole Mex",
    title: "Mexican Chilli",
    price: "$3.99",
  },
  {
    imageUrl: "/images/carnet.avif",
    heading: "Carnet Nachos",
    title: "Chilli Crispy Nachos",
    price: "$3.99",
  },
];

const Imagebox = styled("div")({
//    "& img":{
//     borderTopLeftRadius:'0.25rem',
//     borderTopRightRadius:'0.25rem',
//    }
});
const Detailbox= styled('div')({
    margin:'0px',
    background:'rgb(237 242 247 )',
    padding:'1rem',
    borderBottomLeftRadius:'0.25rem',
    borderBottomRightRadius:'0.25rem',
})
const Startersbox= styled('div')({
    
    position:'relative',
    "& .btn":{
        position:'absolute',
        display:'none',
        top:'30%',
        bottom:'30%',
        // transform:'translate(50%,-15%)',
        transition:'0.5s',
        
        
    },
  
   
    "& ::after":{
        position:'absolute',
        content:"''",
        width:'100%',
        top:'0px',
        right:'0px',
        bottom:'0px',
        height:'0px',
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        transition:'0.5s',
        opacity:0.3,
        // transitionDuration:'300ms',
        
    },
    // "&:hover ::after ":{
    //     height:'225px',

    // },
    "&:hover .btn":{
        
        display:'block',
       
    },
    "& h6":{
        padding:'10px 0px',
    },
    "& p":{
        padding:'3px 0px',
    },
})



function Starters_page() {
  return (
    <Box>
     
        <Grid container spacing={3}>
          {Startersdata.map((data) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Startersbox>
                   
                   <Box className="btn">
                   <Button variant="contained" color="primary">Buy Now</Button>
                   </Box>
                    
                <Box key={data.id} style={{backgroundImage:`url(${data.imageUrl})`,backgroundSize:'cover',backgroundPosition:'center',width:'100%',height:'14rem',borderTopRightRadius:'0.25rem',borderTopLeftRadius:'0.25rem',}}>
                    {/* <img src={data.image} alt="food-image" width="100%"/> */}
                  </Box>
                  <Detailbox>
                    <Typography variant="h5">{data.heading}</Typography>
                    <Typography variant="body2">{data.title}</Typography>
                    <Typography variant="h6" align="left">{data.price}</Typography>
                  </Detailbox>
                
                </Startersbox>
              </Grid>
            );
          })}
        </Grid>
      
    </Box>
  );
}
export default Starters_page;
