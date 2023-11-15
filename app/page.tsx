"use client";
import React, { useState } from "react";
import {
  CssBaseline,
  ThemeProvider,
  Container,
  useMediaQuery,
} from "@mui/material";
import { theme } from "./theme";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import { SiteContext } from "./contexts/SiteState";
import "./styles/page.scss";

export type Pages = "home" | "works" | "about";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Pages>("home");
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(-1);
  /* MUI:: 0<xs<600, 600<=sm<900, 900<=md<1200, 1200<=lg<1536, 1536<=1536 */
  const isXXS = !useMediaQuery("(min-width: 425px)"); //-- less than 425, isXXS
  const isXS = !useMediaQuery("(min-width: 600px)");  //-- less than 600, isXS
  const isSMED = useMediaQuery("(min-width: 700px)"); //-- greter than or equal to 700, Med SM
  const isLG = useMediaQuery("(min-width: 1200px)");  //-- greter than or equal to 1200
  const isXL = useMediaQuery("(min-width: 1400px)");  //-- greter than or equal to 1200

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteContext.Provider
        value={{
          selectedPage,
          setSelectedPage,
          selectedSubIndex,
          setSelectedSubIndex,
          isXXS,
          isXS,
          isSMED,
          isLG,
          isXL
        }}
      >
        <Container maxWidth="xl" className="app">
          <Topbar />
          {selectedPage === "home" && <Home />}
          {selectedPage === "works" && <Works />}
          {selectedPage === "about" && <About />}
        </Container>
      </SiteContext.Provider>
    </ThemeProvider>
  );
}