import React, { useContext } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../contexts/SiteState";

const ProjectWeb = () => {
  // const theme = useTheme();
  const { isXS, isLG } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <Box sx={{ textAlign: `${isXS ? "center" : "left"}`, mb: "24px" }}>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        Award Winning{" "}
        <Box
          component="span"
          sx={{
            fontWeight: "bold",
          }}
        >
          Websites
        </Box>
      </Typography>
    </Box>
  );

  return (
    <div className="project web">
      {titleContent}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1 }}>
            <WorkCardWide
              imgPath="/media/home/WebIBM260x240.jpg"
              imgWidth={isLG || isXS ? 150 : 200}
              imgHeight={isLG || isXS ? 150 : 185}
              cardWidth={800}
              imgAlt="IBM 'Whatson' Site"
              cardTitle="IBM, Ogilvy"
              cardDesc={`IBM 'Whatson'`}
              fontSize=".75rem"
              awards={new Array("Cannes and DMA Echo Awards")}
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1 }}>
            <WorkCardWide
              imgPath="/media/home/WebDove260x240.jpg"
              imgWidth={isLG || isXS ? 150 : 200}
              imgHeight={isLG || isXS ? 150 : 185}
              cardWidth={800}
              imgAlt="Dove 'Go Fresh'"
              cardTitle="Unilever, Ogilvy"
              cardDesc={`Dove 'Go Gresh'`}
              fontSize=".75rem"
              awards={new Array("EACA Euro/US Effie Awards")}
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1 }}>
            <WorkCardWide
              imgPath="/media/home/WebFBSnowball260x240.jpg"
              imgWidth={isLG || isXS ? 150 : 200}
              imgHeight={isLG || isXS ? 150 : 185}
              cardWidth={800}
              imgAlt="Firstborn Snowball Fight"
              cardTitle="Firstborn"
              cardDesc="Firstborn 'Snowball Fight'"
              fontSize=".75rem"
              buttonLabel={`${isLG ? "" : "See More"}`}
              awards={["London International Awards"]}
              showLaunch = {true}
              onClick={() =>
                openLink(
                  "https://work.firstborn.com/work/44/firstborn-snowball-fight"
                )
              }
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1 }}>
            <WorkCardWide
              imgPath="/media/home/WebTAG260x240.jpg"
              imgWidth={isLG || isXS ? 150 : 200}
              imgHeight={isLG || isXS ? 150 : 185}
              cardWidth={800}
              imgAlt="TAG Testees Site"
              cardTitle="Arnold, Firstborn"
              cardDesc="P&G 'TAG Testees'"
              awards={["Dope Web Awards", ""]}
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ProjectWeb;