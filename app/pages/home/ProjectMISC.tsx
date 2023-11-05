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
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold"
          }}
        >
          Kiosk
        </Box>
        , Touch Screen{" "}
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold"
          }}
        >
          Game
        </Box>
        ,{" "}
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold"
          }}
        >
          Social Media
        </Box>{" "}
        App, and{" "}
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold"
          }}
        >
          3D
        </Box>{" "}
        Apps
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
