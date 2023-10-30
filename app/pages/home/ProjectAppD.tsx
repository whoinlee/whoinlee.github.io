import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import "../../styles/project.scss";
import FlexBetBox from "@/app/components/base/FlexBetBox";

const cardContent = (
  <>
    <CardContent>Card Content goes here</CardContent>
  </>
);
const ProjectAppD = () => {
  return (
    <div className="project appD">
      <FlexBetBox>
        <Box>Project Title in the Left</Box>
        <Card variant="outlined">{cardContent}</Card>
      </FlexBetBox>
    </div>
  );
};

export default ProjectAppD;
