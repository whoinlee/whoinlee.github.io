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
import WorkCardImg from "./WorkCardImg";

const WorkCardWide = ({
  imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  imgAlt = "",
  fontSize = "0.75rem",
  cardWidth = 425,
  cardTitle = "",
  cardDesc = "",
  buttonLabel = "",
  onClick,
}) => {
  // const [isCardOver, setIsCardOver] = useState(false);
  // const onCardOver = () => {
  //   overlayRef.current.style.opacity = 1;
  //   // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  // };
  // const onCardOut = () => {
  //   overlayRef.current.style.opacity = 0;
  //   // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  // };

  // const overlayRef = useRef(null);

  const cardStyles = {
    card: {
      position: "relative",
      minWidth: cardWidth,
      borderRadius: "10px",
      padding: "6px",
      backgroundColor: "rgba(150, 150, 150, .15)",
      border: "none"
    },

    media: {},
  };

  return (
    <Card variant="outlined" sx={cardStyles.card}>
      
      <FlexBetBox>
        {/* <CardActionArea
        onClick={onClick}
        onMouseOver={onCardOver}
        onMouseLeave={onCardOut}
      > */}
        <WorkCardImg
          imgPath={imgPath}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          fontSize="0.75rem"
          cardWidth={imgWidth}
          cardTitle={cardTitle}
          onClick={onClick}
        />
      {/* </CardActionArea> */}
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cardDesc}
        </Typography>
      </CardContent> */}
      </FlexBetBox>
    </Card>
  );
};

export default WorkCardWide;
