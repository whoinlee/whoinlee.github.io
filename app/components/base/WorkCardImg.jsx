import React, { useRef } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
} from "@mui/material";

const WorkCardImg = ({
  imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  fontSize = "0.85rem",
  cardWidth = 345,
  imgAlt = "",
  cardTitle = "",
  onClick,
}) => {
  const overlayRef = useRef(null);

  const onCardOver = () => {
    if (overlayRef) overlayRef.current.style.opacity = 1;
  };
  const onCardOut = () => {
    if (overlayRef) overlayRef.current.style.opacity = 0;
  };

  const cardStyles = {
    card: {
      position: "relative",
      minWidth: cardWidth,
      borderRadius: "10px",
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
  };

  return (
    <Card variant="outlined" sx={cardStyles.card}>
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
      </CardActionArea>
    </Card>
  );
};

export default WorkCardImg;
