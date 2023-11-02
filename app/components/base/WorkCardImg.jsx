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
  // imgAlt = "",
  cardWidth = 345,
  cardTitle = "",
  onClick,
}) => {
  const onCardOver = () => {
    overlayRef.current.style.opacity = 1;
    // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  };
  const onCardOut = () => {
    overlayRef.current.style.opacity = 0;
  };

  const overlayRef = useRef(null);

  const cardStyles = {
    card: {
      position: "relative",
      maxWidth: cardWidth,
      borderRadius: "10px",
    },

    media: {
      // filter: "brightness(1)",
      // transition: "all .5s ease-out",
      // "&:hover": {
      //   filter: "brightness(.75)",
      //   // scale: "1.2"
      // },
    },

    overlay: {
      position: "absolute",
      width: "100%",
      height: "100%",
      top: "0px",
      left: "0px",
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
          alt={cardTitle}
          sx={cardStyles.media}
        />
        <div style={cardStyles.overlay} ref={overlayRef}>
          {cardTitle}
        </div>
      </CardActionArea>
    </Card>
  );
};

export default WorkCardImg;
