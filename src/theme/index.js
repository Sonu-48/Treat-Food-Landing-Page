import typography from "./typography";
import { createTheme } from "@mui/material";

export const theme=createTheme({
    typography,
    palette: {
        Primary: {
            main: "#898989",
            dark: "#de0d0d",
            light: "#de0d0d",
          },
        error: {
          main: "#d32f2f",
          light: "#ef5350",
          dark: "#de0d0d",
        },
        success:{
          main:'#2e7d32'
        }
      },
     
      components: {
        MuiButton: {
          styleOverrides: {
            root: ({ ownerState }) => ({
              ...(ownerState.variant === 'contained' &&
                ownerState.color === 'primary' && {
                    background:"rgb(100 21 255)",
                    borderRadius:'0.25rem',
                    boxShadow:'none',
                    color:'rgb(247 250 252)',
                    padding:'0.50rem 2rem',
                    fontWeight:700,
                    textTransform:'none',
                    "&:hover":{
                      boxShadow:'none',
                      background:"rgb(100 21 255)",
                    },
                }),
                ...(ownerState.variant === 'outlined' &&
                ownerState.color === 'secondary' && {
                    
                    background:"transparent",
                    borderRadius:'0.25rem',
                    boxShadow:'none',
                    color:'black',
                    padding:'0.50rem 2rem',
                    fontWeight:600,
                    textTransform:'none',
                    border:'0px',
                    "&:hover":{
                        border:'0px',
                        background:'transparent'
                    }
                }),
                
            }),
          },
        },
      },
})