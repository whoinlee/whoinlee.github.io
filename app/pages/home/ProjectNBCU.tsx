import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCardImg from "@/app/components/base/WorkCardImg";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../contexts/SiteState";

const ProjectNBCU = () => {
  const theme = useTheme();
  const { isXS } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography
        variant="h4"
        sx={{
          cursor: "pointer",
          fontWeight: 500,
          "&:hover": {
            color: "#1976d2",
          },
        }}
        color={theme.palette.primary.light}
        onClick={() => openLink("https://www.nbcuniversal.com/")}
      >
        NBCUniversal
      </Typography>
      <Typography
        variant="h3"
        sx={{
          cursor: "default",
          width: `${isXS ? "275px" : "112px"}`,
          fontWeight: "bold"
        }}
      >
        Fire TV
      </Typography>
      <Typography
        variant="h3"
        sx={{
          display: "inline-block",
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/fireTV_Air")}
      >
        Desktop Apps
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        and
      </Typography>
      <Typography
        variant="h3"
        sx={{
          display: "inline-block",
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() =>
          openLink("https://github.com/whoinlee/fireTV_ReactNative")
        }
      >
        TV App POC
      </Typography>
    </>
  );

  const projectCardStyles = {
    card: {
      padding: "18px",
      paddingRight: "0px",
      minWidth: 874, //-- 18 + 425 + 6 + 425 = 874
      minHeight: 696, //-- 18 + 325 + 10 + 325 + 18 = 696
      border: "none",
      borderRadius: "12px",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: "rgba(150, 150, 150, .075)", //-- grey
    },

    vGap: "10px",
    hGap: "6px",
  };

  return (
    <div className="project nbcU">
      <FlexBetBox
        sx={{ justifyContent: `${isXS ? "center" : "space-between"}` }}
      >
        <Box minWidth={275} sx={{ textAlign: `${isXS ? "center" : "left"}` }}>
          {titleContent}
        </Box>
        {!isXS && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <FlexStartBox
              gap={projectCardStyles.hGap}
              sx={{ pb: projectCardStyles.vGap }}
            >
              <WorkCardImg
                imgPath="/media/home/fireTVblackWhite425x325.jpg"
                imgWidth={210}
                imgHeight={160}
                cardWidth={210}
                imgAlt="Desktop App in Black and White"
                fontSize="0.75rem"
                showLaunch={true}
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
              <WorkCardImg
                imgPath="/media/home/fireTVcolor425x325.jpg"
                imgWidth={210}
                imgHeight={160}
                cardWidth={210}
                imgAlt="Desktop App in Color"
                fontSize="0.75rem"
                showLaunch = {true}
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />

              <WorkCardImg
                imgPath="/media/home/fireTVvideoPlayer425x325.jpg"
                imgWidth={210}
                imgHeight={160}
                cardWidth={210}
                imgAlt="Video Player"
                showLaunch = {true}
                fontSize="0.75rem"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
              <WorkCardImg
                imgPath="/media/home/fireTVWeb425x325.jpg"
                imgWidth={210}
                imgHeight={160}
                cardWidth={210}
                imgAlt="Web App Prototype"
                fontSize="0.75rem"
                showLaunch={true}
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_React")
                }
              />
            </FlexStartBox>
            <FlexStartBox gap={projectCardStyles.hGap}>
              <WorkCardImg
                imgPath="/media/home/fireTVbravo425x340.jpg"
                imgWidth={425}
                imgHeight={340}
                cardWidth={425}
                imgAlt="Customization for Bravo"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
              <WorkCardImg
                imgPath="/media/home/fireTVvariations425x340.jpg"
                imgWidth={425}
                imgHeight={340}
                cardWidth={425}
                imgAlt="Customizations for USA, Telemundo, and E!"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
            </FlexStartBox>
            <Box sx={{ pt: "10px" }}>
              <WorkCardWide
                imgPath="/media/home/fireTVReactNative425x325.jpg"
                imgWidth={146}
                imgHeight={146}
                cardWidth={858}
                imgAlt="Android TV App"
                cardTitle="Android Platform Fire TV App POC in React Native"
                cardDesc="Android Platform TV App developed in React Native for the first time in streaming industry, when React Native just started supporting Android Platform in 2018."
                buttonLabel="View Source"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_ReactNative")
                }
              />
            </Box>
          </Card>
        )}
      </FlexBetBox>
    </div>
  );
};

export default ProjectNBCU;
