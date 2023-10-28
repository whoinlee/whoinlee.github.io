import React, { useState } from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Topbar from "./components/Topbar";
import { SiteContext } from './contexts/SiteState';
import "../styles/home.scss";


const pageArr = ["home", "works", "about"];
const Home = () => {
  const theme = useTheme();
  const [selectedPage, setSelectedPage] = useState("home");

  return (
    <SiteContext.Provider value={{selectedPage, setSelectedPage}}>
      {/* xl? lg? */}
      <Container className="home" maxWidth="xl">  
        <Topbar />
        <Typography variant="h1" pl="12px" pt="36px">Home</Typography>
      </Container>
    </SiteContext.Provider>
  );
};

export default Home;
