
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../styles/page.scss';
import '../styles/about.scss';

const About = () => {
  
  return (
    <div className="about" 
    style={{ position: "absolute", top: "0px" }}
    >
      <div className="headline">
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            mr: "12px",
          }}
        >
          About
        </Typography>
      </div>
    </div>
  );
};

export default About;