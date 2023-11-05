import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCardImg from "@/app/components/base/WorkCardImg";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectNBCU = () => {
  const theme = useTheme();
  const { isSM } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography
        variant="h2"
        sx={{ cursor: "default" }}
        color={theme.palette.primary.light}
      >
        NBCUniversal
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }} fontWeight={600}>
        Fire TV
      </Typography>
      <Typography
        variant="h2"
        sx={{
          // textAlign: `${isSM ? "center" : "left"}`,
          width: `${isSM ? "275px" : "216px"}`,
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
        variant="h2"
        sx={{
          width: `${isSM ? "275px" : "192px"}`,
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
      // border: "0.5px solid rgba(0, 0, 0, .25)",
      borderRadius: "12px",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: "rgba(150, 150, 150, .075)", //-- grey
      // backgroundColor: "rgba(66, 165, 245, .075)"  //-- light blue
    },

    vGap: "10px",
    hGap: "6px",
  };

  return (
    <div className="project nbcU">
      <FlexBetBox
        sx={{ justifyContent: `${isSM ? "center" : "space-between"}` }}
      >
        <Box minWidth={275} sx={{ textAlign: `${isSM ? "center" : "left"}` }}>
          {titleContent}
        </Box>
        {!isSM && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <FlexStartBox
              gap={projectCardStyles.hGap}
              sx={{ pb: projectCardStyles.vGap }}
            >
              <WorkCardImg
                imgPath="/media/fireTVblackWhite425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Desktop App in Black and White"
                // cardTitle="Skeleton Loading Screen"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
              <WorkCardImg
                imgPath="/media/fireTVcolor425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Desktop App in Color"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_Air")
                }
              />
            </FlexStartBox>
            <FlexStartBox gap={projectCardStyles.hGap}>
              
            <WorkCardImg
                imgPath="/media/fireTVWeb425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Web App Prototype"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_React")
                }
              />
              <WorkCardImg
                imgPath="/media/fireTVReactNative425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Android Platform TV App"
                onClick={() =>
                  openLink("https://github.com/whoinlee/fireTV_ReactNative")
                }
              />
              
            </FlexStartBox>
           
          </Card>
        )}
      </FlexBetBox>
    </div>
  );
};

export default ProjectNBCU;
