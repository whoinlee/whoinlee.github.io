import React from "react";
import {
  Typography,
} from "@mui/material";
import '../styles/page.scss';
import "../styles/home.scss";

const Home = () => {

  return (
    <div className="home" 
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
          Studio UU+i
        </Typography>
      </div>
    </div>
  );
};

export default Home;
