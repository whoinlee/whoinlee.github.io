import React from "react";
import ProjectAppD from "./home/ProjectAppD";
import ProjectNBCU from "./home/ProjectNBCU";
import ProjectMISC from "./home/ProjectMISC";
import ProjectWeb from "./home/ProjectWeb";
import ProjectAlternet from "./home/ProjectAlternet";
// import "../styles/page.scss";

const Home = () => {
  return (
    <div className="page home">
      <ProjectAppD />
      <hr />
      <ProjectNBCU />
      <hr />
      <ProjectAlternet />
      <hr />
      <ProjectMISC />
      <hr />
      <ProjectWeb />
      <br />
      <br />
      <div className="footer">&copy; 2023 &nbsp;&nbsp;&nbsp;Studio UU+i</div>
    </div>
  );
};

export default Home;
