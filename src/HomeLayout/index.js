import { Box } from '@mui/material';
import React from 'react';
import Topbar from './Topbar';
import BannerPage from '../page/Home/BannerPage';
import Footer from './Footer';

function Homelayout({children}){
    return(
       <>
        <Box>
            <Topbar/>
        </Box>
        <Box>
            <BannerPage/>
        </Box>
        <Box>
            <Footer/>
        </Box>
       </>
    )
}
export default Homelayout;