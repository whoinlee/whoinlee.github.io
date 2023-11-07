import React, { useRef } from "react";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const WorkCardImg = ({
  imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  fontSize = "0.85rem",
  cardWidth = 345,
  imgAlt = "",
  cardTitle = "",
  isOverlay = true,
  showLaunch = false,
  onClick = () => {},
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
      position: "relative",
      minWidth: cardWidth,
      borderRadius: "10px",
      border: "none",
    },

    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
      fontSize: fontSize,
      paddingBottom: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "#fefefe",
      backgroundColor: "rgba(0, 0, 0, .6)",
      opacity: 0,
      transition: "all .25s ease-out",
    },

    launchIcon: {
      display: "inline-block",
      fontSize: "large",
      color: "#42a5f5",
      opacity: "85%",
      // color: "#fefefe",
      position: "absolute",
      bottom: "6px",
      left: "6px"
    }
  };

  return (
    <Card sx={cardStyles.card}>
      {isOverlay ? (
        <CardActionArea
          onClick={onClick}
          onMouseOver={onCardOver}
          onMouseLeave={onCardOut}
        >
          <CardMedia
            component="img"
            width={imgWidth}
            height={imgHeight}
            image={imgPath}
            alt={imgAlt}
            sx={cardStyles.media}
          />
          <div style={cardStyles.overlay} ref={overlayRef}>
            {imgAlt}
          </div>
          {showLaunch && 
            <LaunchIcon sx={cardStyles.launchIcon} />
          }
        </CardActionArea>
      ) : (
          <CardMedia
            component="img"
            width={imgWidth}
            height={imgHeight}
            image={imgPath}
            alt={imgAlt}
            sx={cardStyles.media}
          />
      )}
    </Card>
  );
};

export default WorkCardImg;
