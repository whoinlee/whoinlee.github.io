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
    fontSize: 12,
    fontFamily: FONT_FAMILY,
    color: "rgba(0,0,0,.85)",

    h1: {
      fontFamily: FONT_FAMILY,
      fontWeight: 500,
      fontSize: 52,
    },
    h2: {
      fontFamily: FONT_FAMILY,
      fontSize: 32,
    },
    h3: {
      fontFamily: FONT_FAMILY,
      fontSize: 24,
    },
    h4: {
      fontFamily: FONT_FAMILY,
      fontSize: 20,
    },
    h5: {
      fontFamily: FONT_FAMILY,
      fontSize: 18,
    },
    h6: {
      fontFamily: FONT_FAMILY,
      fontSize: 14,
    },
  },
};

export const theme = createTheme(themeSettings);