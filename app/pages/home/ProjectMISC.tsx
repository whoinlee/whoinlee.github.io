import React, { useContext } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../contexts/SiteState";

const ProjectMISC = () => {
  // const theme = useTheme();
  const { isXS, isLG } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        <Box component="span" fontWeight="bold">
          Kiosk
        </Box>
        , Touchscreen{" "}
        <Box component="span" fontWeight="bold">
          Game
        </Box>
        ,{" "}
        <Box component="span" fontWeight="bold">
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
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscOsiao265x210.jpg"
              imgWidth={200}
              imgHeight={158}
              cardWidth={800}
              imgAlt="OSIAO Kiosk"
              cardTitle="Estée Lauder"
              cardDesc="CMS managed OSIAO Kiosk in Chinese and English"
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscXerox265x210.jpg"
              imgWidth={200}
              imgHeight={158}
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
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscSubtexter265x210.jpg"
              imgWidth={200}
              imgHeight={158}
              cardWidth={800}
              imgAlt="Subtexter Facebook App"
              cardTitle="Droga5, Solarsilk"
              cardDesc="Newcastle 'Subtexter' Facebook App"
              fontSize=".75rem"
              buttonLabel="See More"
              awards={["One Show Awards", "Facebook Studio Awards"]}
              cardDescPB = "8px"
              onClick={() =>
                openLink(
                  "https://solarsilk.com/work/newcastle-droga5-solarsilk-nobollocks/"
                )
              }
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/Misc3DCard265x210.jpg"
              imgWidth={200}
              imgHeight={158}
              cardWidth={800}
              imgAlt="3D Holiday Card"
              cardTitle="Ogilvy"
              cardDesc="3D Holiday Card Website with YouTube Videos"
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          {isLG && (
            <>
              <Grid item lg={4}>
                <WorkCardWide
                  imgPath="/media/Misc3DIBM265x210.jpg"
                  imgWidth={200}
                  imgHeight={158}
                  cardWidth={800}
                  imgAlt="3D Banner"
                  cardTitle="Ogilvy"
                  cardDesc="IBM, 'Tivoli Foundation' 3D Banner"
                  fontSize=".75rem"
                  buttonLabel=""
                  isOverlay={false}
                />
              </Grid>
              <Grid item lg={4}>
                <WorkCardWide
                  imgPath="/media/Misc3DApple265x210.jpg"
                  imgWidth={200}
                  imgHeight={158}
                  cardWidth={800}
                  imgAlt="3D Apple Iphone"
                  cardTitle="Studio UU+i"
                  cardDesc="The Study of 3D Apple Iphone built in Three.js"
                  fontSize=".75rem"
                  buttonLabel="VIEW"
                  isOverlay={true}
                  onClick={() =>
                    openLink(
                      "https://6509f51c636e3d3eb21f8b0a--lucky-marshmallow-07bdb6.netlify.app/"
                    )
                  }
                />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default ProjectMISC;
