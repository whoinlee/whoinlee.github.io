import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import FlexStartBox from "./FlexStartBox";
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
  cardBkgColor = "rgba(150, 150, 150, .15)",
  onClick,
}) => {
  const cardStyles = {
    card: {
      position: "relative",
      maxWidth: cardWidth,
      borderRadius: "10px",
      padding: "6px",
      backgroundColor: cardBkgColor,
      border: "none",
    },

    media: {},
  };

  return (
    <Card variant="outlined" sx={cardStyles.card}>
      <FlexStartBox sx={{alignItems: "flex-start"}}>
        <WorkCardImg
          imgPath={imgPath}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          imgAlt={imgAlt}
          fontSize={fontSize}
          cardWidth={imgWidth}
          cardTitle={cardTitle}
          onClick={onClick}
        />
        <CardContent sx={{height: imgHeight}}>
          <Typography component="div" sx={{fontSize: 14, fontWeight: 500, pb: "6px"}}>
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize: 12, fontWeight: 400, pb: "6px"}}>
            {cardDesc}
          </Typography>
          <Button size="small" variant="outlined" sx={{fontSize: 12, textTransform: "none"}} onClick={onClick}>{buttonLabel} <LaunchIcon sx={{ml: "6px", fontSize: "small"}} /></Button>
        </CardContent>
      </FlexStartBox>
    </Card>
  );
};

export default WorkCardWide;
