import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { SiteContext } from "../../page";

const ProjectMISC = () => {
  const theme = useTheme();
  const { isSM } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        Kiosk, Touch Screen Game, Social Media App, and 3D Apps
      </Typography>
    </>
  );

  return (
    <div className="project misc">
      <Box sx={{ textAlign: `${isSM ? "center" : "left"}` }}>
        {titleContent}
      </Box>
    </div>
  );
};

export default ProjectMISC;
