import React, { useContext } from "react";
import Box from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ExtensionIcon from "@mui/icons-material/Extension";
import { SiteContext } from "../page";
import { WorksArr } from "../page";
import "../styles/page.scss";
import "../styles/works.scss";

interface WorksProps {
  category: string;
}
// const IconComponent = ({category}:WorksProps) => {

// }

const Works = ({ category }: WorksProps) => {
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
  const BLUE_85P = "rgba(15,10,222,.85)";
  const YELLOW_75P = "rgba(255,255,0,.75)";

  return (
    <div className="works">
      <div className="headline">
        <Typography
          variant="h1"
          fontWeight={600}
          sx={{
            // textDecoration: "underline",
            mr: "12px",
            color: BLACK_85P,
          }}
        >
          {category}
        </Typography>
        <ComponentName fontSize="large" sx={{ color: BLACK_85P }} />
      </div>
    </div>
  );
};

export default Works;
