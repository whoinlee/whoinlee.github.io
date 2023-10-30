"use client";
import React, { useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider, Container } from "@mui/material";
import { theme } from "./theme";
import { createContext } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import "./styles/page.scss";

// import * as All from "./pages";
// const Components = {
//   Home: All.Home,
//   Works: All.Works,
//   About: All.About,
// };

export const SiteContext = createContext({});
export const WorkCatetories = ["Web", "Desktop", "TV App", "Kiosk", "Plugin"];
export type Pages = "home" | "works" | "about";

export default function App() {
  const [selectedPage, setSelectedPage] = useState<Pages>("home");
  const [selectedSubIndex, setSelectedSubIndex] = useState<number>(-1);
  // const PageComponents = [Home, Works, About];
  // const pages = ["home", "works", "about"];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SiteContext.Provider
        value={{
          selectedPage,
          setSelectedPage,
          selectedSubIndex,
          setSelectedSubIndex,
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
