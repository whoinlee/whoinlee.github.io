import React from "react";
import { Typography } from "@mui/material";
import ProjectAppD from "./home/ProjectAppD";
import ProjectNBCU from "./home/ProjectNBCU";
import "../styles/page.scss";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="page home">
      <ProjectAppD />
      {/* <ProjectNBCU /> */}
    </div>
  );
};

export default Home;
