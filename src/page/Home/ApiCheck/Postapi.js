import React, { useState } from 'react';
import { Container,Box,Grid,Button, TextField } from '@mui/material';
import {toast } from 'react-toastify';

const Postapi=()=>{
    const [email,setEmail]= useState("");
     const data={
        email:email,
     }
    const handleSubmit=()=>{
        if(email.length!==0){
            fetch("https://jsonplaceholder.typicode.com/posts/1",{
                method:'POST',
                headers:{
                    Accept:"application/json",
                    'Content-Type':"application/json",
                },
                body:JSON.stringify(data),
            }).then((result)=>{
                setEmail("")
                console.log("result",result);
                toast.success("Thanks for your interest!")
            })
        }
        else{
            toast.error("This field is required")
        }
      
    }


    return(
        <Box>
            <Container maxWidth="sm">
                {/* <Typography variant='h3'>Your Email is:{email}</Typography> */}
                <Grid container>
                    <Grid item lg={6}>
                        <TextField variant='outlined' placeholder='Enter your email'size="small" value={email} name="email" 
                        fullWidth onChange={(e)=>setEmail(e.target.value)} autoComplete='off'/>
                    </Grid>
                    <Grid item lg={6}>
                        <Button variant='contained' color="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
export default Postapi;