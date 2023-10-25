const { Box } = require("@mui/material");
import { styled } from '@mui/material/styles';

const FlexBetBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  // border: "2px solid pink" //-- testing
});

export default FlexBetBox;