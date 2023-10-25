export const colorTokens = {
  primary: {
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
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
  grey: {
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
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
        fontSize: 16,
      },
      h6: {
        fontFamily: FONT_FAMILY,
        fontSize: 14,
      },
    }
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
