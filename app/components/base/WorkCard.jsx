import React, { useRef } from "react";
import {
  // Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  // useTheme,
} from "@mui/material";

const WorkCard = ({
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
  const overlayRef = useRef(null);
  
  const onCardOver = () => {
    overlayRef.current.style.opacity = 1;
    // console.log("onCardOver, overlayRef.current? ", overlayRef.current);
  };
  const onCardOut = () => {
    overlayRef.current.style.opacity = 0;
  };

  

  const workCardStyles = {
    card: {
      position: "relative",
      maxWidth: cardWidth,
      borderRadius: "10px",
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
    <Card variant="outlined" sx={workCardStyles.card}>
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
        />
        {/* <div style={workCardStyles.overlay} ref={overlayRef}>
          {cardTitle}
        </div>
        {cardDesc && cardDesc !== "" && (
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cardTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {cardDesc}
            </Typography>
          </CardContent>
        )}
        {buttonLabel && buttonLabel !== "" && (
          <CardActions>
            <Button size="small" color="primary" onClick={onClick}>
              {buttonLabel}
            </Button>
          </CardActions>
        )} */}
      </CardActionArea>
    </Card>
  );
};

export default WorkCard;
