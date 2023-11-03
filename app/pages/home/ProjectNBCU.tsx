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
// import "../../styles/project.scss";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCard from "@/app/components/base/WorkCard";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectNBCU = () => {
  const theme = useTheme();
  const { isLT625 } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };
  const titleContent1 = (
    <>
      <Typography
        variant="h2"
        color={theme.palette.primary.light}
        fontWeight={500}
        sx={{ cursor: "default" }}
      >
        NBC Universal
      </Typography>
      <Typography variant="h2" fontWeight={600} sx={{ cursor: "default" }}>
        Fire TV
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          width: `${isLT625 ? "275px" : "170px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/fireTV_Air")}
      >
        Prototypes
      </Typography>
      <Typography
        variant="h2"
        sx={{ cursor: "default" }}
        // fontWeight={400}
      >
        and
      </Typography>
      <Typography
        variant="h2"
        sx={{
          width: `${isLT625 ? "275px" : "87px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/fireTV_ReactNative")}
      >
        POCs
      </Typography>
    </>
  );

  const cardContent1 = (
    <>
      <Card variant="outlined" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            width="212"
            height="162"
            image="/media/p1skeleton425x325.jpg"
            alt="Skeleton Loading"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );

  return (
    <div className="project appD">
      <FlexBetBox
        sx={{ justifyContent: `${isLT625 ? "center" : "space-between"}` }}
      >
        <Box
          minWidth={275}
          sx={{
            textAlign: `${isLT625 ? "center" : "left"}`,
            // border: "1px solid grey",
          }}
        >
          {titleContent1}
        </Box>
        {!isLT625 && (
          <Card
            variant="outlined"
            sx={{
              padding: "24px",
              paddingRight: "0px",
              minWidth: 836, //850?
              minHeight: 660,
              borderRadius: "12px",
              border: "none",
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "rgba(150, 150, 150, .075)", //-- grey
              // backgroundColor: "rgba(66, 165, 245, .075)"
            }}
          >
            <FlexStartBox gap="12px">
              <WorkCard
                imgPath="/media/p1skeleton425x325.jpg"
                imgWidth={400}
                imgHeight={306}
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
                  imgPath="/media/p1skeleton425x325.jpg"
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
                  imgPath="/media/p1skeleton425x325.jpg"
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
            <FlexStartBox gap="12px">
              <WorkCard
                imgPath="/media/p1skeleton425x325.jpg"
                imgWidth={400}
                imgHeight={306}
                cardWidth={425}
                cardTitle="Data Visualization Plugin"
                onClick={() =>
                  openLink(
                    "https://github.com/whoinlee/figmaPlugins"
                  )
                }
              />
              <WorkCard
                imgPath="/media/p1skeleton425x325.jpg"
                imgWidth={400}
                imgHeight={306}
                cardWidth={425}
                cardTitle="Jira & Figma Comm. Plugin"
                onClick={() =>
                  openLink(
                    "https://particle-prototypes.netlify.app/relationshipGraph"
                  )
                }
              />
            </FlexStartBox>
            {/* <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Inspector Panel"
              cardTitle="Inspector Panel"
              cardDesc="Inspector Panel description goes here"
              // buttonLabel="view"
              onClick={() =>
                openLink(
                  "https://particle-prototypes.netlify.app/inspectorPanel"
                )
              }
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Relationship Graph"
              cardTitle="Relationship Graph"
              cardDesc="Relationship Graph description goes here"
              // buttonLabel="view"
              onClick={() =>
                openLink(
                  "https://particle-prototypes.netlify.app/relationshipGraph"
                )
              }
            /> */}

            {/* <FlexBetBox gap="20px">
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Skeleton Loading"
              cardTitle="Reusable Components"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onClick={() =>{}}
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Skeleton Loading"
              cardTitle="Data Viz Plugin"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onClick={() =>{}}
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Jira & Figma Plugin"
              cardTitle="Jira & Figma Plugin"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onClick={() =>{}}
            />
          </FlexBetBox> */}
          </Card>
        )}
      </FlexBetBox>
      {/* <FlexBetBox>
        <Box width={325}>{titleContent2}</Box>
        <Card variant="outlined" sx={{ height: "600px" }}>
          {cardContent2}
        </Card>
      </FlexBetBox> */}
    </div>
  );
};

export default ProjectNBCU;
