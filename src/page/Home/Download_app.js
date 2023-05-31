import React from 'react';
import { Container,Box,Grid,Typography,Button, Link } from '@mui/material';
import styled from 'styled-components';
import {BsApple} from 'react-icons/bs';
import {FaGooglePlay} from 'react-icons/fa';

const Wrapper = styled('div')({
    background:'rgb(26 32 44 )',
    padding:'20px 0px 100px 0px',
    "& h2":{
        padding:'20px 0px',
    }
})
const Storebtn= styled('div')({
    padding:'30px 0px',
    display:'flex',
    alignItems:'center',
    flexWrap:'wrap',
    "@media screen and (max-width:600px)":{
        justifyContent:'center',
    },
    "& svg":{
        paddingRight:'10px',
       fontSize:'18px',
    },
    "& .googlestore":{
        marginLeft:'20px',
        "@media screen and (max-width:600px)":{
            marginLeft:'0px',
            marginTop:'10px',
        }
    },
    "& a":{
        background:'rgb(247 250 252)',
        fontWeight:600,
        boxShadow:'0 0 #0000',
        color:'rgb(26 32 44)',
        padding:'15px 40px',
        fontSize:'18px',
        borderRadius:'30px',
        width:'10rem',
        textDecoration:'none',
    },
    "& a:hover":{
        background:'rgb(247 250 252)',
    }
})

function Download_apps(){
    return(
        <Wrapper>
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={7} md={6} sm={12} xs={12} style={{display:'flex',alignItems:'center'}}>
                        <Box pt={2}>
                            <Typography variant='body1' style={{color:'rgb(236 201 75 '}}>Download App</Typography>
                            <Typography variant='h2'>
                            People around you are ordering delicious meals using the<span style={{color:'rgb(100 21 255)',padding:'0px 1rem',background:'rgb(247 250 252)',marginLeft:'10px'}}>Treact App.</span>
                            </Typography>
                            <Storebtn>
                                <Link href="https://www.apple.com/"  target="_blank"> <BsApple/>APP STORE</Link>
                                <Link href="https://play.google.com/store/games" target="_blank" className="googlestore"><FaGooglePlay/>GOOGLE PLAY</Link>
                            </Storebtn>
                        </Box>

                    </Grid>
                    <Grid item lg={5} md={6} sm={12} xs={12}>
                        
                          <Box align="center" pt={4}>
                          <img src="/images/mobile-image.png" alt="Mobile Image" style={{maxWidth:'16rem',}}/>
                          </Box>
                       
                    </Grid>
                </Grid>
            </Container>

        </Wrapper>
    )
};
export default Download_apps;