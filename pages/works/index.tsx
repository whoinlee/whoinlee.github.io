
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const Works = ( {category = "Web"} ) => {
  
  return (
    <>
        <Typography variant="h4">Works <Typography component="span" variant="h6"> | {category}</Typography></Typography>
    </>
  );
};

export default Works;