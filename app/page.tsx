"use client";
import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  useMediaQuery,
} from "@mui/material";
import { theme } from "./theme";
import { createContext } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import "./styles/page.scss";

export const SiteContext = createContext({});
export const WorkCatetories = ["Web", "Desktop", "TV App", "Kiosk", "Plugin"];
export type Pages = "home" | "works" | "about";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Pages>("home");
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(-1);
  /* MUI:: xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isLT425 = !useMediaQuery("(min-width: 425px)"); //-- less than 425
  const isLT625 = !useMediaQuery("(min-width: 625px)"); //-- less than 625
  const isGTE700 = useMediaQuery("(min-width: 700px)"); //-- greter than or equal to 700

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteContext.Provider
        value={{
          selectedPage,
          setSelectedPage,
          selectedSubIndex,
          setSelectedSubIndex,
          isLT425,
          isLT625,
          isGTE700,
        }}
      >
        <Container maxWidth="lg" className="app">
          <Topbar />
          {selectedPage === "home" && <Home />}
          {selectedPage === "works" && <Works />}
          {selectedPage === "about" && <About />}
        </Container>
      </SiteContext.Provider>
    </ThemeProvider>
  );
}
