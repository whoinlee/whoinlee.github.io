import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  // useMediaQuery,
} from "@mui/material";
import Topbar from "./components/Topbar"
import '../styles/home.scss';


const Home = () => {
  const theme = useTheme();

  return (
    <div className="home">
      <Topbar />
    </div>
  );
};

export default Home;
