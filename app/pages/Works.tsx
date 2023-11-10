import React, { useContext } from "react";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ExtensionIcon from "@mui/icons-material/Extension";
import { SiteContext } from "../contexts/SiteState";
import { WorkCatetories } from "../components/Topbar";
import "../styles/page.scss";

// interface WorksProps {
//   category: string;
// }
// const IconComponent = ({category}:WorksProps) => {

// }

const Works = () => {
  const { selectedSubIndex } = useContext<any>(SiteContext);

  const Icons = [
    WebIcon,
    DesktopMacIcon,
    ConnectedTvIcon,
    TouchAppIcon,
    ExtensionIcon,
  ];
  const ComponentName = Icons[selectedSubIndex];

  const BLACK_85P = "rgba(0,0,0,.85)";
  // const BLUE_85P = "rgba(15,10,222,.85)";
  // const YELLOW_75P = "rgba(255,255,0,.75)";

  return (
    <div className="page works">
      <div className="headlineHolder">
        <Typography variant="h1"
          // fontWeight={600}
        >
          {WorkCatetories[selectedSubIndex]}
        </Typography>
        <ComponentName fontSize="large" sx={{ color: BLACK_85P, ml: "12px" }} />
      </div>
      <div className="footer">&copy; 2023 &nbsp;&nbsp;&nbsp;Studio UU+i</div>
    </div>
  );
};

export default Works;
