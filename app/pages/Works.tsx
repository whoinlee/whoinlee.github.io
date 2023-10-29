
import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../styles/works.scss';

interface WorksProps {
  category: string
}
const Works = ({ category }:WorksProps) => {
  
  return (
    <div className="works" style={{ position: "absolute", top: "100px" }}>
         <Typography variant="h4">Works : {category} </Typography>
    </div>
  );
};

export default Works;