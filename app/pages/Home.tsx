import React from "react";
import Divider from '@mui/material/Divider';
import ProjectAppD from "./home/ProjectAppD";
import ProjectNBCU from "./home/ProjectNBCU";
import ProjectMISC from "./home/ProjectMISC";
import ProjectWeb from "./home/ProjectWeb";
import ProjectAlternet from "./home/ProjectAlternet";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="page home">
      <ProjectAppD />
      {/* <Divider className="hr"/> */}
      <hr />
      <ProjectNBCU />
      <hr />
      <ProjectAlternet />
      <hr />
      <ProjectMISC />
      <hr />
      <ProjectWeb />
    </div>
  );
};

export default Home;
