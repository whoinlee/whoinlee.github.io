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
      md: 850,  //900, 700
      lg: 1200, //
      xl: 1400, //1536
    },
  }
};

/*
/* MUI:: 0<xs<600, 600<=sm<900, 900<=md<1200, 1200<=lg<1536, 1536<=xl
*/

export const theme = createTheme(themeSettings);