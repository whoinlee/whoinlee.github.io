/* 
https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes 
https://mui.com/material-ui/customization/palette/
const primary = {
  main: '#1976d2', 
  light: '#42a5f5',
  dark: '#1565c0',
  contrastText: '#fff',
};
https://mui.com/material-ui/customization/typography/
*/
import { createTheme } from "@mui/material/styles";

const FONT_FAMILY = ["Inter", "Open Sans", "sans-serif"].join(",");
const themeSettings = {
  typography: {
    fontSize: 16,
    fontFamily: FONT_FAMILY,
    color: "rgba(0,0,0,.85)", //black 85%

    h1: {
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      fontSize: "3.25rem",
    },
    h2: {
      fontWeight: 500,
      fontFamily: FONT_FAMILY,
      fontSize: "2rem",
    },
    h3: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.75rem",
    },
    h4: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.5rem",
    },
    h5: {
      fontFamily: FONT_FAMILY,
      fontSize: "1.25rem",
    },
    h6: {
      fontFamily: FONT_FAMILY,
      fontSize: "1rem", //16px
    },
  },
};

export const theme = createTheme(themeSettings);