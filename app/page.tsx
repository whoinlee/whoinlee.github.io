"use client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Home from '../pages/Home';


export default function App() {
  const theme = createTheme(themeSettings);
  // const theme = createTheme({});

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </div>
  )
}
