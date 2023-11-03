import React, { useContext } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCard from "@/app/components/base/WorkCard";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectAppD = () => {
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
        AppDynamics
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }} fontWeight={600}>
        Design System
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          width: `${isSM ? "300px" : "170px"}`,
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
        variant="h2"
        sx={{
          width: `${isSM ? "275px" : "215px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/figmaPlugins")}
      >
        Figma Plugins
      </Typography>
    </>
  );

  const projectCardStyles = {
    card: {
      padding: "18px",  //--"24px"
      paddingRight: "0px",
      minWidth: 874, //850?
      minHeight: 650,
      border: "none",
      borderRadius: "12px",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: "rgba(150, 150, 150, .075)", //-- grey
      // backgroundColor: "rgba(66, 165, 245, .075)"  //-- light blue
    },
  };

  return (
    <div className="project appD">
      <FlexBetBox sx={{ justifyContent: `${isSM ? "center" : "space-between"}` }}>
        <Box minWidth={275} sx={{ textAlign: `${isSM ? "center" : "left"}` }}>
          {titleContent}
        </Box>
        {!isSM && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <FlexStartBox gap="6px" sx={{ pb: "10px"} }>
              <WorkCard
                imgPath="/media/p1skeleton425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                cardTitle="Skeleton Loading Screen"
                onClick={() =>
                  openLink(
                    "https://particle-prototypes.netlify.app/skeletonScreen"
                  )
                }
              />
              <div>
                <WorkCardWide
                  imgPath=""
                  imgWidth={200}
                  imgHeight={150}
                  cardWidth={325}
                  cardTitle="Inspector Panel"
                  onClick={() =>
                    openLink(
                      "https://particle-prototypes.netlify.app/inspectorPanel"
                    )
                  }
                />
                <WorkCardWide
                  imgPath=""
                  imgWidth={200}
                  imgHeight={150}
                  imgAlt="Skeleton Loading"
                  cardWidth={325}
                  cardTitle="Relationship Graph"
                  onClick={() =>
                    openLink(
                      "https://particle-prototypes.netlify.app/relationshipGraph"
                    )
                  }
                />
              </div>
            </FlexStartBox>
            <FlexStartBox gap="6px">
              <WorkCard
                imgPath="/media/dataVizPlugin425x325_3.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                cardTitle="Data Visualization Plugin"
                onClick={() =>
                  openLink("https://github.com/whoinlee/figmaPlugins")
                }
              />
              <WorkCard
                imgPath="/media/figmaJiraPlugin425x325.jpg"
                imgWidth={425}
                imgHeight={325}
                cardWidth={425}
                cardTitle="Jira & Figma Comm. Plugin"
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
