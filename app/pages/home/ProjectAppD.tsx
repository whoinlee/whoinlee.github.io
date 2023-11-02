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
import "../../styles/project.scss";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCard from "@/app/components/base/WorkCard";
import { SiteContext } from "../../page";
// import DatePicker from "../../components/base/DatePicker/DatePicker";

const ProjectAppD = () => {
  const theme = useTheme();
  const {
    // isLT425,
    isLT625,
    // isGTE700
  } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };
  const titleContent1 = (
    <>
      <Typography
        variant="h2"
        color={theme.palette.primary.light}
        fontWeight={500} sx={{cursor: "default"}}
      >
        Particle
      </Typography>
      <Typography variant="h2" fontWeight={600} sx={{cursor: "default"}}>
        Design System
      </Typography>
      <Typography
        variant="h2"
        sx={{
          textAlign: "center",
          width: `${isLT625 ? "275px":"170px"}`,
          // width: "170px",
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/prototypeSite")}
      >
        Prototypes
      </Typography>
      <Typography variant="h2" sx={{cursor: "default"}}
      // fontWeight={400}
      >
        and
      </Typography>
      <Typography
        variant="h2"
        sx={{
          width: `${isLT625 ? "275px":"215px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("https://github.com/whoinlee/figmaPlugins")}
      >
        Figma Plugins
      </Typography>
      {/* <FlexStartBox
        gap="12px"
        sx={{ justifyContent: `${isLT625 ? "center" : "felx-start"}` }}
      > 
         <Button
          variant="contained"
          sx={{ mt: "12px" }}
          onClick={() => openLink("https://github.com/whoinlee/prototypeSite")}
        >
          Prototypes
        </Button>
        <Button
          variant="contained"
          sx={{ mt: "12px" }}
          onClick={() => openLink("https://github.com/whoinlee/figmaPlugins")}
        >
          Plugins
        </Button> 
      </FlexStartBox>*/}
    </>
  );
  const titleContent2 = (
    <>
      <Typography variant="h2" fontWeight={500}>
        Figma Plugins
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: "12px" }}
        onClick={() => openLink("https://github.com/whoinlee/figmaPlugins")}
      >
        View
      </Button>
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
  const cardContent2 = (
    <>
      <CardContent>Card Content2 goes here</CardContent>
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
        {/* <Card variant="outlined" sx={{ maxWidth: 750, minWidth: 250 }}> */}
        {!isLT625 && (
          <Card
            variant="outlined"
            sx={{
              minWidth: 800,  //850?
              minHeight: 500,
              borderRadius: "10px",
              border: "none",
              // borderColor: "rgba(0, 0, 0, .5)", //-- black 50%
              // borderRight: "none",

              // borderColor: "rgba(150, 150, 150, .075)",  //-- grey
              // borderColor: "#42a5f5",  //-- light blue
              // borderColor: "rgba(66, 165, 245, 0.085)",

              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "rgba(150, 150, 150, .075)",//-- grey

              // backgroundColor: "rgba(66, 165, 245, .075)"
            }}
          >
            {/* <FlexBetBox gap="12px">
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Skeleton Loading"
              cardTitle="Skeleton Loading"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel="view"
              onButtonClick={() =>
                openLink(
                  "https://particle-prototypes.netlify.app/skeletonScreen"
                )
              }
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Inspector Panel"
              cardTitle="Inspector Panel"
              cardDesc="Inspector Panel description goes here"
              buttonLabel="view"
              onButtonClick={() =>
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
              buttonLabel="view"
              onButtonClick={() =>
                openLink(
                  "https://particle-prototypes.netlify.app/relationshipGraph"
                )
              }
            />
          </FlexBetBox>
          <FlexBetBox gap="12px">
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Skeleton Loading"
              cardTitle="Reusable Components"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onButtonClick={() =>{}}
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Skeleton Loading"
              cardTitle="Data Viz Plugin"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onButtonClick={() =>{}}
            />
            <WorkCard
              imgPath="/media/p1skeleton425x325.jpg"
              imgWidth={212}
              imgHeight={162}
              imgAlt="Jira & Figma Plugin"
              cardTitle="Jira & Figma Plugin"
              cardDesc="Skeleton Loading Description goes here"
              buttonLabel=""
              onButtonClick={() =>{}}
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

export default ProjectAppD;
