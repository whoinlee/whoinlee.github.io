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
      <Box sx={{ textAlign: `${isXS ? "center" : "left"}`, mb: "24px" }}>
        {titleContent}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/WebIBM260x240.jpg"
              imgWidth={isLG? 150: 200}
              imgHeight={isLG? 150: 185}
              cardWidth={800}
              imgAlt="IBM 'Whatson' Website"
              cardTitle="IBM, Ogilvy"
              cardDesc={`IBM 'Whatson' Website`}
              fontSize=".75rem"
              awards={new Array("Cannes and DMA Echo Awards")}
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/WebDove260x240.jpg"
              imgWidth={isLG? 150: 200}
              imgHeight={isLG? 150: 185}
              cardWidth={800}
              imgAlt="Dove 'Go Fresh' Website"
              cardTitle="Unilever, Ogilvy"
              cardDesc={`Dove 'Go Gresh' Website `}
              fontSize=".75rem"
              awards={
                new Array(
                  "EACA Euro/US Effie Awards"
                )
              }
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>

          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/WebFBSnowball260x240.jpg"
              imgWidth={isLG? 150: 200}
              imgHeight={isLG? 150: 185}
              cardWidth={800}
              imgAlt="Firstborn Snowball Fight"
              cardTitle="Firstborn"
              cardDesc="'Snowball Fight' Holiday Card"
              fontSize=".75rem"
              buttonLabel={`${isLG? "": "See More"}`}
              awards={["London Int'l' Awards"]}
              // cardDescPB = "8px"
              onClick={() =>
                openLink(
                  "https://work.firstborn.com/work/44/firstborn-snowball-fight"
                )
              }
            />
          </Grid>
          <Grid item sm={12} md={6} lg={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/WebTAG260x240.jpg"
              imgWidth={isLG? 150: 200}
              imgHeight={isLG? 150: 185}
              cardWidth={800}
              imgAlt="TAG Testees Website"
              cardTitle="Arnold, Firstborn"
              cardDesc="'Snowball Fight' Holiday Card"
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
