import React from 'react';
import { Container,Grid,Box,Typography, Avatar, } from '@mui/material';
import styled from 'styled-components';
import Download_apps from './Download_app';

const Wrapperbox= styled('div')({
    padding:'150px 0px',
})
const Customerbox= styled('div')({
    textAlign:'center',
    padding:'20px 40px',
    "& p":{
        padding:'15px 0px',
        textAlign:'center',
        lineHeight:'30px',
    }
})

const customerdata=[
    {
        image:"/images/customer1.avif",
        subheading:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        title:' CHARLOTTE HALE',
    },
    {
        image:"/images/customer2.avif",
        subheading:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        title:'  ADAM CUPPY',
    },
    {
        image:"/images/customer3.avif",
        subheading:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
        title:' STEVEN MARCETTI',
    },
]

function Customer_love_us(){
    return(
        <>
        <Wrapperbox>
            <Container>
                <Box align="center">
                    <Typography variant='h1'>Customers<span style={{
                    background: "rgb(100 21 255)",
                    padding: "0px 1rem",
                    color: "rgb(247 250 252)",
                    transform: "skewX( 15deg)",
                    marginLeft: "7px",
                  }}>Love Us.</span></Typography>
                </Box>
                <Box pt={5}>
                <Grid container spacing={2}>
                {customerdata.map((data)=>{
                    return(
                        
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Customerbox>
                           <Box align="center">
                           <Avatar src={data.image} sx={{width:'80px',height:'80px'}} alt="Customer Image"/>
                           </Box>
                            <Typography variant='body1'>{data.subheading}</Typography>
                            <Typography variant='body2' sx={{color:'black',fontWeight:700}}>-{data.title}</Typography>
                        </Customerbox>
                    </Grid>
                    
               
                    );
                })}
                 </Grid>
                </Box>
            </Container>
        </Wrapperbox>
        <Box>
            <Download_apps/>
        </Box>
        </>
    )
};
export default Customer_love_us;