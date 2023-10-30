
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../styles/page.scss';
import '../styles/about.scss';

const About = () => {
  
  return (
    <div className="page about" >
        <Typography
          variant="h1"
          // fontWeight={600}
        >
          About
        </Typography>
    </div>
  );
};

export default About;