import React from "react";
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
      <hr />
      <ProjectNBCU />
      <hr />
      <ProjectMISC />
      <hr />
      <ProjectWeb />
      <hr />
      <ProjectAlternet />
    </div>
  );
};

export default Home;
