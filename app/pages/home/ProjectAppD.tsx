import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCardImg from "@/app/components/base/WorkCardImg";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../contexts/SiteState";

const ProjectAppD = () => {
  const theme = useTheme();
  const { isXS } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <Box minWidth={275} sx={{ textAlign: `${isXS ? "center" : "left"}` }}>
      <Typography
        variant="h6"
        sx={{
          mb: "-4px",
          pl: "2px",
          cursor: "pointer",
          "&:hover": {
            color: "#1976d2",
          },
        }}
        color={theme.palette.primary.light}
        onClick={() => openLink("https://www.appdynamics.com/")}
      >
        CISCO
      </Typography>
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
        onClick={() => openLink("https://www.appdynamics.com/")}
      >
        AppDynamics
      </Typography>
      <Typography
        variant="h3"
        sx={{
          cursor: "default",
          fontWeight: "bold",
        }}
      >
        Design System
      </Typography>
      <Typography
        variant="h3"
        sx={{
          display: "inline-block",
          // width: `${isXS ? "275px" : "100%"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/prototypeSite")}
      >
        Prototypes
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        and
      </Typography>
      <Typography
        variant="h3"
        sx={{
          display: "inline-block",
          // width: `${isXS ? "275px" : "215px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/figmaPlugins")}
      >
        Figma Plugins
      </Typography>
    </Box>
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
    <div className="project appD">
      <FlexBetBox
        sx={{ justifyContent: `${isXS ? "center" : "space-between"}` }}
      >
        {titleContent}
        {!isXS && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <FlexStartBox
              gap={projectCardStyles.hGap}
              sx={{ pb: projectCardStyles.vGap }}
            >
              <WorkCardImg
                imgPath="/media/home/p1skeleton425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Skeleton Loading Screen"
                showLaunch={true}
                onClick={() =>
                  openLink(
                    "https://particle-prototypes.netlify.app/skeletonScreen"
                  )
                }
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "325px",
                }}
              >
                <WorkCardWide
                  imgPath="/media/home/p2inspector320x320.jpg"
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
                  imgPath="/media/home/p3relation320x320.jpg"
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
                imgPath="/media/home/dataVizPlugin425x325_1.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                imgAlt="Data Visualization Plugin"
                showLaunch={true}
                onClick={() =>
                  openLink("https://github.com/whoinlee/figmaPlugins")
                }
              />
              <WorkCardImg
                imgPath="/media/home/figmaJiraPlugin425x325.jpg"
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

export default ProjectAppD;
