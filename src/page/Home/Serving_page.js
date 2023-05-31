import { Box, Container,Grid, Typography,Button } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {MdViewCompact} from 'react-icons/md';
import Amazing_service from './Amazing_service';
import Checkout_menu from './Checkout_menu';

const Wrapper= styled('div')({
    padding:'100px 0px',
    "& img":{
        borderRadius:'2.5rem',
    },
    "& h1":{
        padding:'20px 0px',
    },
    
})
const Subheading= styled("div")({
   "& p":{
    padding:'15px 0px'
   }
})

function Serving_page(){
    return(
       <>
        <Wrapper id="about">
            <Container>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                       
                            <img src="/images/serving-image.avif" width="100%"/>
                            
                       
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box pl={3}>
                            <Typography variant='body2' style={{color:'rgb(100 21 255)'}}>Established Since 2014</Typography>
                            <Typography variant='h1'>We've been serving for <br/>
                            <span style={{background:'rgb(100 21 255)',padding:'0px 1rem',color:'rgb(247 250 252)',transform: "skewX( 15deg)"}}>over 5 years.</span></Typography>
                           <Subheading>
                           <Typography variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                           <Typography variant='body1'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Typography>
                            </Subheading>
                          
                           <Box pt={1}> 
                           <Button variant="contained" color="primary">Latest Offers</Button>
                           </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Wrapper>
        <Box>
            <Checkout_menu/>
        </Box>
       </>
        
    )
};
export default Serving_page;