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
      // fontSize: "2rem",
      fontSize: "1.85rem",
    },
    h3: {
      fontWeight: 500,
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
      fontSize: "0.95rem", //16px
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,  //900, 700
      lg: 1200,
      xl: 1536,
    },
  }
};

/*
  const isXS = !useMediaQuery("(min-width: 425px)");  //-- less than 425
  const isSM = !useMediaQuery("(min-width: 600px)");  //-- less than 600
  const isSMED = useMediaQuery("(min-width: 700px)"); //-- greter than or equal to 700
*/

export const theme = createTheme(themeSettings);