import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import FlexStartBox from "./FlexStartBox";
import WorkCardImg from "./WorkCardImg";

const WorkCardWide = ({
  imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  imgAlt = "",
  isOverlay = true,
  fontSize = "0.75rem",
  cardWidth = 425,
  cardTitle = "",
  cardDesc = "",
  buttonLabel = "",
  cardBkgColor = "rgba(150, 150, 150, .15)",
  onClick = () => {},
  awards = [],
  cardDescPB = "12px",
  showLaunch = false
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
      <FlexStartBox sx={{ alignItems: "flex-start" }}>
        <WorkCardImg
          imgPath={imgPath}
          imgWidth={imgWidth}
          imgHeight={imgHeight}
          imgAlt={imgAlt}
          fontSize={fontSize}
          cardWidth={imgWidth}
          cardTitle={cardTitle}
          isOverlay={isOverlay}
          onClick={onClick}
          showLaunch={showLaunch}
        />
        <CardContent sx={{ height: imgHeight, pt: cardDescPB }}>
          <Typography
            component="div"
            sx={{ fontSize: 14, fontWeight: 500, pb: "6px" }}
          >
            {cardTitle}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 12, fontWeight: 400, pb: "6px" }}
          >
            <span>{cardDesc}</span>
          </Typography>
          {awards.length > 0 &&
            awards.map((award, index) => (
              <Typography
                key={index}
                variant="body2"
                color="text.secondary"
                sx={{ fontSize: 12, fontWeight: 700 }}
              >
                {award}
              </Typography>
            ))}
          {buttonLabel && buttonLabel !== "" && (
            <Button
              size="small"
              variant="outlined"
              sx={{ fontSize: 12, textTransform: "none", mt: "6px" }}
              onClick={onClick}
            >
              {buttonLabel} <LaunchIcon sx={{ ml: "6px", fontSize: "small" }} />
            </Button>
          )}
        </CardContent>
      </FlexStartBox>
    </Card>
  );
};

export default WorkCardWide;
