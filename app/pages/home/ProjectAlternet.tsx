import React, { useContext } from "react";
import {
  Box,
  Card,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCardImg from "@/app/components/base/WorkCardImg";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectAlternet = () => {
  const theme = useTheme();
  const { isSM } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography
        variant="h2"
        sx={{ cursor: "pointer" }}
        color={theme.palette.primary.light}
        onClick={() => openLink("http://www.alternetinc.com/index.html")}
      >
        Alternet
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }} fontWeight={600}>
        Large Scale Data Driven
      </Typography>
      <Typography
        variant="h2"
        sx={{
          width: `${isSM ? "100%" : "215px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("http://www.alternetinc.com/ivy.html")}
      >
        Applications
      </Typography>
    </>
  );

  const projectCardStyles = {
    card: {
      padding: "18px",
      paddingRight: "0px",
      minWidth: 874,  //-- 18 + 425 + 6 + 425 = 874
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
    hGap: "6px"
  };

  return (
    <div className="project appD">
      <FlexBetBox sx={{ justifyContent: `${isSM ? "center" : "space-between"}` }}>
        <Box minWidth={275} sx={{ textAlign: `${isSM ? "center" : "left"}` }}>
          {titleContent}
        </Box>
        {!isSM && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <FlexStartBox gap={projectCardStyles.hGap} sx={{ pb: projectCardStyles.vGap }}>
              <WorkCardImg
                imgPath="/media/p1skeleton425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Skeleton Loading Screen"
                // cardTitle="Skeleton Loading Screen"
                onClick={() =>
                  openLink(
                    "https://particle-prototypes.netlify.app/skeletonScreen"
                  )
                }
              />
              <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", height: "325px"}}>
                <WorkCardWide
                  imgPath="/media/p2inspector320x320.jpg"
                  imgWidth={146}
                  imgHeight={146}
                  cardWidth={425}
                  imgAlt="Inspector Panel"
                  cardTitle="Inspector Panel Resizing"
                  cardDesc="Grid based layout adjustment for improving space usability while keeping minimum panel width requirement"
                  fontSize=".75rem"
                  buttonLabel="VIEW"
                  onClick={() =>
                    openLink(
                      "https://particle-prototypes.netlify.app/inspectorPanel"
                    )
                  }
                />
                <WorkCardWide
                  imgPath="/media/p3relation320x320.jpg"
                  imgWidth={146}
                  imgHeight={146}
                  cardWidth={425}
                  imgAlt="Relationship Graph"
                  cardTitle="Relationship Graph Improvements"
                  cardDesc="To improve space adaptability and selected entity discoverability, and to accomodate long entity labels"
                  buttonLabel="VIEW"
                  onClick={() =>
                    openLink(
                      "https://particle-prototypes.netlify.app/relationshipGraph"
                    )
                  }
                />
              </div>
            </FlexStartBox>
            <FlexStartBox gap={projectCardStyles.hGap}>
              <WorkCardImg
                imgPath="/media/dataVizPlugin425x325_1.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Data Visualization Plugin"
                onClick={() =>
                  openLink("https://github.com/whoinlee/figmaPlugins")
                }
              />
              <WorkCardImg
                imgPath="/media/figmaJiraPlugin425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Jira & Figma Comm. Plugin"
                onClick={() =>
                  openLink("https://github.com/whoinlee/figmaPlugins")
                }
              />
            </FlexStartBox>
          </Card>
        )}
      </FlexBetBox>
    </div>
  );
};

export default ProjectAlternet;
