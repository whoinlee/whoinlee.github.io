import React from "react";
import ProjectAppD from "./home/ProjectAppD";
import ProjectNBCU from "./home/ProjectNBCU";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="page home">
      <ProjectAppD />
      <hr />
      <ProjectNBCU />
    </div>
  );
};

export default Home;
