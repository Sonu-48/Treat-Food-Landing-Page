import { Box, Container, Grid, Typography,Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Serving_page from './Serving_page';

const Wrapperbox= styled('div')({
    padding:'80px 0px',
    "@media screen and (max-width:600px)":{
        padding:'60px 0px'
    },
    "& P":{
        padding:'30px 0px',
    },
    "& img":{
        borderRadius:'2.5rem'
    }
})

function BannerPage(){
    return(
     <>
       <Wrapperbox>
        <Container>
            <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12} style={{display:'flex',alignItems:'center'}}>
                    <Box>
                        <Typography variant='h1'>Delicious & Affordable <span style={{background:'rgb(100 21 255)',padding:'0px 1rem',color:'rgb(247 250 252)',transform: "skewX( 15deg)"}}>Meals Near You.</span></Typography>
                        <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                        <Box>
                            <Button variant="contained" color="primary">Order Now</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box>
                        <img src="/images/food-image.avif" alt="food-image" width="100%"/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
       </Wrapperbox>
       <Box>
        <Serving_page/>
       </Box>
     </>
    )
};
export default BannerPage;