import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../contexts/SiteState";

const ProjectMISC = () => {
  const { isXS, isLG, isXL } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        <Box component="span" fontWeight="bold">
          Kiosk
        </Box>
        ,{" "}
        <Box component="span" fontWeight="bold">
          Game
        </Box>
        ,{" "}
        <Box component="span" fontWeight="bold">
          Social Media
        </Box>
        , and{" "}
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold",
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
      <Box sx={{ textAlign: `${isXS ? "center" : "left"}`, mb: "24px" }}>
        {titleContent}
      </Box>
      <Box sx={{ flexGrow: 1 }}>
          {/* <Grid item sm={12} md={6} lg={4}> */}
          <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={12} md={6} xl={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/MiscOsiao265x210.jpg"
              // imgWidth={200}
              // imgHeight={158}
              cardWidth={800}
              imgWidth={(isLG)? 150: (isXS? 190: 200)}
              imgHeight={(isLG)? 150: (isXS? 150: 158)}
              imgAlt="OSIAO Kiosk"
              cardTitle="Estée Lauder"
              cardDesc="CMS managed OSIAO Kiosk in Chinese and English"
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} xl={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/MiscXerox265x210.jpg"
              imgWidth={(isLG)? 150: (isXS? 190: 200)}
              imgHeight={(isLG)? 150: (isXS? 150: 158)}
              cardWidth={800}
              imgAlt="Automated Intelligence Challenge Game"
              cardTitle="Blue Telescope"
              cardDesc={`Xerox 'Automated Intelligence Challenge' Touchscreen Game`}
              fontSize=".75rem"
              awards={new Array("Summit Creative Awards, Gold")}
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} xl={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/MiscSubtexter265x210.jpg"
              imgWidth={(isLG)? 150: (isXS? 190: 200)}
              imgHeight={(isLG)? 150: (isXS? 150: 158)}
              cardWidth={800}
              imgAlt="Subtexter Facebook App"
              cardTitle="Droga5, Solarsilk"
              cardDesc="Newcastle 'Subtexter' Facebook App"
              fontSize=".75rem"
              buttonLabel={`${isXL ? "": "See More"}`}
              awards={["One Show Awards", "Facebook Studio Awards"]}
              cardDescPB = "8px"
              onClick={() =>
                openLink(
                  "https://solarsilk.com/work/newcastle-droga5-solarsilk-nobollocks/"
                )
              }
            />
          </Grid>
          <Grid item sm={12} md={6} xl={3} sx={{ flexGrow: 1}}>
            <WorkCardWide
              imgPath="/media/Misc3DCard265x210.jpg"
              imgWidth={(isLG)? 150: (isXS? 190: 200)}
              imgHeight={(isLG)? 150: (isXS? 150: 158)}
              cardWidth={800}
              imgAlt="3D Holiday Card"
              cardTitle="Ogilvy"
              cardDesc="3D Holiday Card Website with YouTube Videos"
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

export default ProjectMISC;
