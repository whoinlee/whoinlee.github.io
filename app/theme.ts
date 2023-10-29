/* https://mui.com/material-ui/customization/color/#2014-material-design-color-palettes */
export const colorTokens = {
  primary: {
    //-- black
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45",
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    //-- blue
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3", //-- base
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e", //-- base
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
};

const FONT_FAMILY = ["Inter", "Open Sans", "sans-serif"].join(",");
export const themeSettings = {
  palette: {
    primary: {
      ...colorTokens.primary,
      main: colorTokens.grey[100],
      light: colorTokens.grey[200],
    },
    secondary: {
      ...colorTokens.secondary,
      main: colorTokens.secondary[600],
      light: colorTokens.secondary[700],
    },
    neutral: {
      ...colorTokens.grey,
      main: colorTokens.grey[500],
    },
    background: {
      default: colorTokens.grey[100],
      alt: colorTokens.grey[200],
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: FONT_FAMILY,
    h1: {
      fontFamily: FONT_FAMILY,
      fontSize: 40,
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

/*
.palette
.typography
.spacing
.breakpoints
.zIndex
.transitions
.components
*/
