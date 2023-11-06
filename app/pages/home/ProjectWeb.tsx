import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import { SiteContext } from "../../page";

const ProjectWeb = () => {
  const theme = useTheme();
  const { isXS } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        Award Winning{" "}
        <Box
          component="span"
          sx={{
            backgroundColor: "rgba(0, 0, 0, .85)",
            color: "#fefefe",
            pl: "2px",
            pr: "2px",
          }}
        >
          Websites
        </Box>
      </Typography>
    </>
  );

  return (
    <div className="project misc">
      <Box sx={{ textAlign: `${isXS ? "center" : "left"}` }}>
        {titleContent}
      </Box>
    </div>
  );
};

export default ProjectWeb;
