import React, { useState, useRef } from "react";
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
import FlexBetBox from "./FlexBetBox";

const WorkCardWide = ({
  imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  imgAlt = "",
  cardWidth = 345,
  cardTitle = "",
  cardDesc = "",
  buttonLabel = "",
  onClick,
}) => {
  const [isCardOver, setIsCardOver] = useState(false);
  const onCardOver = () => {
    overlayRef.current.style.opacity = 1;
    // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  };
  const onCardOut = () => {
    overlayRef.current.style.opacity = 0;
    // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  };

  const overlayRef = useRef(null);

  const cardStyles = {
    card: {
      position: "relative",
      maxWidth: cardWidth,
      borderRadius: "10px",
    },

    // media: {},

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
      
      <FlexBetBox>
        {/* <CardActionArea
        onClick={onClick}
        onMouseOver={onCardOver}
        onMouseLeave={onCardOut}
      > */}
        <CardMedia
          component="img"
          width={imgWidth}
          height={imgHeight}
          image={imgPath}
          alt={imgAlt}
          sx={cardStyles.media}
        />
      {/* </CardActionArea> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardDesc}
        </Typography>
      </CardContent>
      </FlexBetBox>
    </Card>
  );
};

export default WorkCardWide;
