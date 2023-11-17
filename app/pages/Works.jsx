import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddIcon from "@mui/icons-material/Add";
import WebIcon from "@mui/icons-material/Web";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ExtensionIcon from "@mui/icons-material/Extension";
import { SiteContext } from "../contexts/SiteState";
import { WorkCatetories } from "../components/Topbar";
import "../styles/page.scss";

const BLACK_85P = "rgba(0,0,0,.85)";
const API_URL = "/data/works.json";

const MediaCard = ({
  imgSrc,
  altText = "",
  overlayText = "",
  onClick = () => {},
  // isClickable = true,
}) => {
  const overlayRef = useRef(null);

  const onCardOver = () => {
    if (overlayRef) overlayRef.current.style.opacity = 1; //show overlay only when the image opens a new tab
  };
  const onCardOut = () => {
    if (overlayRef) overlayRef.current.style.opacity = 0;
  };

  const cardStyles = {
    card: {
      position: "relative", //need?
      borderRadius: "0px",
      border: "0.5px solid rgba(0,0,0,.5)",
    },

    // media: {
    //   // width: "265px"
    // },

    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fefefe",
      opacity: 0,
      transition: "all .25s ease-out",
      //
      backgroundColor: "rgba(0, 0, 0, .7)",
      fontSize: "0.75rem",
      paddingLeft: "14px",
      paddingRight: "12px",
      fontSize: "0.70rem",
      lineHeight: "1.25",
      paddingBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <Card variant="outlined" sx={cardStyles.card}>
      <CardActionArea
        onClick={onClick}
        onMouseOver={onCardOver}
        onMouseOut={onCardOut}
      >
        <CardMedia
          component="img"
          image={imgSrc}
          alt={altText}
          // sx={cardStyles.media}
        />
        <div style={cardStyles.overlay} ref={overlayRef}>
          <span>{overlayText}</span>
        </div>
      </CardActionArea>
    </Card>
  );
};

const Works = () => {
  const { selectedSubIndex } = useContext(SiteContext);
  const [works, setWorks] = useState([]);
  const Icons = [
    WebIcon,
    DesktopMacIcon,
    ConnectedTvIcon,
    TouchAppIcon,
    ExtensionIcon,
  ];

  let ComponentName;
  if (selectedSubIndex > 0) {
    ComponentName = Icons[selectedSubIndex];
  }

  const buttonLabels = {
    live: "LIVE",
    desc: "READ",
    src: "SOURCE",
  };

  const openLink = (url) => {
    window.open(url, "_blank")?.focus();
  };

  //-- get data
  useEffect(() => {
    const getData = async () => {
      const result = await (await fetch(API_URL)).json();
      console.log("data ? ", result.data);
      setWorks(result.data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const descStyles = {
    title: {
      mt: "12px",
      lineHeight: "1.25",
      fontSize: "0.8rem",
      fontWeight: 600,
    },

    desc: {
      mt: "2px",
      mb: "6px",
      fontSize: "0.70rem",
      lineHeight: "1.25",
    },

    award: {
      fontSize: "0.70rem",
      lineHeight: "1.25",
      fontWeight: "bold",
      mb: "6px",
    },

    awardList: {
      fontSize: "0.70rem",
      lineHeight: "1.25",
      fontWeight: "normal",
    },
  };

  return (
    <div className="page works">
      {selectedSubIndex > 0 && ComponentName && (
        //-- page headline
        <div className="headlineHolder">
          <Typography variant="h1">
            {WorkCatetories[selectedSubIndex]}
          </Typography>
          <ComponentName
            fontSize="large"
            sx={{ color: BLACK_85P, ml: "12px" }}
          />
        </div>
      )}
      {works.length > 0 && (
        <Box pt="18px">
          <Grid container spacing={{ xs: 2, sm: 4, md: 5, lg: 6 }}>
            {works.map((workData, index) => {
              let targetLink = null;
              targetLink = workData["attributes"].liveLink ? workData["attributes"].liveLink : (
                                 workData["attributes"].descLink ? workData["attributes"].descLink : 
                                 workData["attributes"].srcLink);
                                //  console.log("isClickable??", (targetLink != null))
              return (
                <Grid
                  item
                  key={index}
                  lg={3} //4 items in a row
                  md={4} //3 items
                  sm={6} //2 items
                  xs={6} //2 items
                >
                  <MediaCard
                    imgSrc={workData["attributes"].imgSrc}
                    altText={workData["attributes"].title}
                    overlayText={workData["attributes"].comments}
                    onClick={() => {
                      if (targetLink) openLink(targetLink);
                    }}
                    // isClickable = {targetLink != null}
                  />
                  <Typography sx={descStyles.title}>
                    {workData["attributes"].header}
                  </Typography>
                  <Typography sx={descStyles.desc}>
                    {workData["attributes"].descText}
                  </Typography>
                  {workData["attributes"].Awards && (
                    <Box sx={descStyles.award}>
                      Awards
                      {workData["attributes"].Awards.map((award, index) => (
                        <Typography
                          key={index}
                          sx={descStyles.awardList}
                          fontWeight={400}
                        >
                          {award}
                        </Typography>
                      ))}
                    </Box>
                  )}
                  {workData["attributes"].descLink && (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: 12,
                        textTransform: "none",
                        mr: "6px",
                      }} //, color: "#1976d2"
                      onClick={() => openLink(workData["attributes"].descLink)}
                    >
                      {buttonLabels.desc}{" "}
                      <AddIcon sx={{ ml: "6px", fontSize: "small" }} />
                    </Button>
                  )}
                  {workData["attributes"].liveLink && (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        fontSize: 12,
                        textTransform: "none",
                        // mt: "4px",
                        mr: "6px",
                      }} //, color: "#42a5f5"
                      onClick={() => openLink(workData["attributes"].liveLink)}
                    >
                      {buttonLabels.live}{" "}
                      <LaunchIcon sx={{ ml: "6px", fontSize: "small" }} />
                    </Button>
                  )}
                  {workData["attributes"].srcLink && (
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{ fontSize: 12, textTransform: "none" }} //, color: "#1565c0"
                      onClick={() => openLink(workData["attributes"].srcLink)}
                    >
                      {buttonLabels.src}
                      <GitHubIcon sx={{ ml: "6px", fontSize: "small" }} />
                    </Button>
                  )}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}
      <div className="footer">&copy; 2023 &nbsp;&nbsp;&nbsp;Studio UU+i</div>
    </div>
  );
};
export default Works;
