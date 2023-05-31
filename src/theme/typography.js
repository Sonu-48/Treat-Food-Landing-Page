import React from 'react';
export default {
    h1:{
        fontSize:'3rem',
        fontFamily:"'Inter', sansSerif",
        color:'rgb(36 62 99)',
        fontWeight:900,
        letterSpacing:'1px',
        "@media only screen and (max-width:480px)":{
            fontSize:'1.785rem',
            textAlign:'center',
        }

    },
    h2:{
        fontSize:'1.975rem',
        fontWeight:800,
        letterSpacing:'1px',
        lineHeight:'45px',
        color:'rgb(247 250 252)',
    },
    h3:{

    },
    h4:{
        fontSize:'1rem',
        fontWeight:600,
        color:'rgb(26 32 44 )',
    },
    h5:{
        fontSize:'1.25rem',
        fontWeight:600,
        color:'rgb(26 32 44 )',

    },
    h6:{
        fontSize:'1.25rem',
        fontWeight:700,
        textAlign:'center',
        color:'rgb(26 32 44 )',

    },
    body1:{
        fontSize:'1rem',
        fontWeight:500,
        color:'rgb(113 128 150)',
          fontFamily:"'Inter', sansSerif",
          "@media screen and (max-width:600px)":{
            textAlign:'center',
          }

    },
    body2:{
        fontSize:'0.875rem',
        fontWeight:500,
        letterSpacing:'0.05em',
        color:'rgb(113 128 150)',
        "@media screen and (max-width:600px)":{
            textAlign:'center',
          }

    },
}