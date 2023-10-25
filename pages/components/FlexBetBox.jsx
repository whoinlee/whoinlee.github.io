const { Box } = require("@mui/material");
const { styled } = require("@mui/system");

const FlexBetBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "2px solid pink" //-- testing
});

export default FlexBetBox;