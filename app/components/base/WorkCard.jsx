import React from "react";
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

const WorkCard = ({
  imgPath,
  imgWidth,
  imgHeight,
  imgAlt = "",
  cardTitle = "",
  cardDesc = "",
  buttonLabel,
  onButtonClick
}) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
          width={imgWidth}
          height={imgHeight}
          image={imgPath}
          alt={imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardDesc}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        {buttonLabel && (
          <Button size="small" color="primary" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default WorkCard;
